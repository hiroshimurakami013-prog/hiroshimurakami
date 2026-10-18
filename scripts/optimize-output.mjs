// Runs after `next build` (see "build" in package.json) and tunes the build
// output for a fast first paint and a quiet main thread on phones. Neither
// step changes what a visitor sees. Measured with Lighthouse (mobile) in
// Perf2, see docs/BUILD-PLAN.md.
//
// 1. Compile hints. Every client chunk starts with the V8 magic comment
//    `//# allFunctionsCalledOnLoad`. Chrome then compiles the functions of
//    that file eagerly on its background script streaming thread, instead
//    of lazily on the main thread the first time each one runs. The
//    framework code (React, the Next.js router) runs almost entirely at
//    load, so this moves most of its compile time off the main thread: on
//    /privacy, Total Blocking Time went from about 480 ms to about 100 ms.
//    Other browsers treat it as a plain comment.
//
// 2. Scripts after first paint. Next.js puts its client chunks in <head> as
//    async scripts, so on a fast connection they run while the browser is
//    still painting the first frame. In Chrome, main thread work between
//    the first commit and its first presented frame can hold that frame
//    back by about a second (paint holding), and the simulated LCP then also
//    counts every script. The page is fully rendered HTML and CSS, so the
//    first paint needs none of these scripts; they add interaction and
//    scroll effects on top. For every prerendered HTML file the chunk
//    <script async> tags (and the matching low priority preload) are
//    replaced with one small inline loader that adds the same scripts, in
//    the same order, once the browser reports the first contentful paint.
//    It adds one script per task (yielding through a MessageChannel, which
//    background tabs do not throttle): inserting a script element starts
//    its fetch on the spot, and nine of them in one go made a long task.
//    A page can mark the last element of its intro with [data-boot-after]
//    (the home hero): the loader then also waits until that element's CSS
//    animations have finished, so hydration does not share the main thread
//    with the intro. It starts the scripts at once when the page is not
//    visible (a background tab never paints), when the browser has no paint
//    timing, on the first input of any kind, and after 3 s at the latest.
//
// Only files written by `next build` change. A page rendered at request
// time instead simply loads its scripts the usual way.
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NEXT = join(import.meta.dirname, "..", ".next");
const SERVER = join(NEXT, "server");
const CHUNKS = join(NEXT, "static", "chunks");

function walk(dir, ext) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p, ext) : p.endsWith(ext) ? [p] : [];
  });
}

function fail(message) {
  console.error(`optimize-output: ${message}`);
  process.exit(1);
}

if (!existsSync(SERVER) || !existsSync(CHUNKS)) fail("no build output, run `next build` first");

// 1. Compile hints.
const HINT = "//# allFunctionsCalledOnLoad\n";
let hinted = 0;
for (const file of walk(CHUNKS, ".js")) {
  const js = readFileSync(file, "utf8");
  if (js.startsWith(HINT)) continue;
  writeFileSync(file, HINT + js);
  hinted++;
}

// 2. Scripts after first paint.
const MARK = "data-boot";
const CHUNK = String.raw`/_next/static/chunks/[\w.-]+\.js`;
const SCRIPT = new RegExp(String.raw`<script src="(${CHUNK})" async=""></script>`, "g");
const PRELOAD = new RegExp(String.raw`<link rel="preload" as="script" fetchPriority="low" href="(${CHUNK})"/>`, "g");

const loader = (src) =>
  `<script ${MARK}>(function(d,w){` +
  `var s=${JSON.stringify(src)},go=false,P=w.PerformanceObserver;` +
  `function start(){if(go)return;go=true;var i=0,C=w.MessageChannel,c=C&&new C();` +
  `function next(){var e=d.createElement("script");e.src=s[i++];e.async=true;d.head.appendChild(e);` +
  `if(i<s.length){if(c)c.port2.postMessage(0);else next()}}` +
  `if(c)c.port1.onmessage=next;next()}` +
  `function painted(){var a=d.querySelector("[data-boot-after]"),r=a&&a.getAnimations?a.getAnimations().filter(function(x){return x.playState==="running"}):[];` +
  `if(!r.length)return start();Promise.all(r.map(function(x){return x.finished})).then(start,start)}` +
  `function soon(){` +
  `if(d.visibilityState!=="visible"||!P||!P.supportedEntryTypes||P.supportedEntryTypes.indexOf("paint")<0)return start();` +
  `try{new P(function(l,o){if(l.getEntriesByName("first-contentful-paint").length){o.disconnect();painted()}}).observe({type:"paint",buffered:true})}catch(x){return start()}` +
  `["pointerdown","pointermove","keydown","touchstart","wheel"].forEach(function(t){w.addEventListener(t,start,{once:true,passive:true,capture:true})});` +
  `setTimeout(start,3000)}` +
  `soon()})(document,window)</script>`;

let deferred = 0;
for (const file of walk(SERVER, ".html")) {
  const html = readFileSync(file, "utf8");
  if (html.includes(`<script ${MARK}>`)) continue;
  const src = [...html.matchAll(SCRIPT)].map((m) => m[1]);
  if (!src.length) continue;
  const first = html.indexOf(`<script src="${src[0]}" async=""></script>`);
  const head = html.indexOf("</head>");
  // The loader takes the place of the first chunk script, which Next puts
  // in <head>. Anything else is a layout this script does not know.
  if (first < 0 || head < 0 || first > head) fail(`unexpected script layout in ${file}`);
  let out = html.slice(0, first) + loader(src) + html.slice(first);
  out = out.replace(SCRIPT, "");
  out = out.replace(PRELOAD, (tag, href) => (src.includes(href) ? "" : tag));
  writeFileSync(file, out);
  deferred++;
}

console.log(`optimize-output: compile hints on ${hinted} chunks, scripts after first paint on ${deferred} pages`);
