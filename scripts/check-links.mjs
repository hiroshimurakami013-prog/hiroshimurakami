#!/usr/bin/env node
// Site QA against the built output (docs/BUILD-PLAN.md section 9).
// Run after `npm run build`:   node scripts/check-links.mjs
//
// For every route in lib/routes.ts, and the 404, it reads the prerendered
// HTML in .next/server/app and checks:
// - every internal link resolves (a known route, a public file or an
//   in-page anchor that exists), and no route is an orphan
// - exactly one H1
// - a title of 60 characters or fewer and a description of 155 or fewer
// - a canonical URL on SITE_URL
// - noindex while INDEXABLE is false
// - every JSON-LD block parses
// - no em or en dashes, and no lowercase or title-case "ai" word in copy,
//   alt text, metadata or JSON-LD text (URLs are skipped, slugs such as
//   /services/ai-agents are fine)
// - a heading outline without skipped levels, and an Open Graph image
// - unique titles and descriptions across pages
// - the shared footer is identical on every page
// - deep pages (/services, /use-cases, /locations and below) have a breadcrumb trail
//   and BreadcrumbList JSON-LD, and each service page has Service JSON-LD
//   with provider, serviceType and areaServed
// - each use case page is labelled "Use case" with the illustrative
//   scenario note, has at least 500 words of copy in its main content,
//   links to its parent service, a sibling use case and its related service,
//   and is linked from at least two other pages
// - each city page (section 8: no doorway pages) carries the remote-first
//   line, has at least 600 words of copy written for that city, shares no
//   run of 12 words with another city, links to all eight services, its 3
//   to 5 use cases, its neighbouring cities and the hub, and is linked from
//   at least two other pages; each use case page links to its cities
// - every <img> has alt, width and height and an existing file; pages with
//   a hero scene (service, use case and city pages, and the locations hub)
//   have exactly one high priority image, other pages none, and every other
//   scene image is lazy; every service, use case and city has a scene image
//   in content/images.ts, and public/images holds only used WebP files of
//   about 180 KB or less
// - every service page is reachable from the home page within two clicks,
//   every location page within two, and every use case page within three
// It also checks robots.txt and the sitemap against the INDEXABLE switch,
// and scans the source folders for em and en dashes.
//
// Node 22.18+ strips the TypeScript types from the lib imports by itself.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import {
  LOCATIONS_HUB_IMAGE,
  LOCATION_IMAGES,
  SERVICE_IMAGES,
  USE_CASE_IMAGES,
} from "../content/images.ts";
import { LOCATIONS, cityCopy, servingLine } from "../content/locations.ts";
import { SERVICES } from "../content/services.ts";
import { USE_CASES, siblingUseCase } from "../content/use-cases.ts";
import { ROUTES } from "../lib/routes.ts";
import { INDEXABLE, SITE_URL } from "../lib/site.ts";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD = join(ROOT, ".next/server/app");
const PUBLIC = join(ROOT, "public");

// Files served by metadata routes rather than pages.
const METADATA_PATHS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/icon.png",
  "/apple-icon.png",
  "/opengraph-image",
]);

// Every file under a folder or file path.
function walkFiles(p) {
  if (!existsSync(p)) return [];
  if (statSync(p).isFile()) return [p];
  return readdirSync(p).flatMap((name) => walkFiles(join(p, name)));
}

const DASHES = new RegExp("[\\u2013\\u2014]");
const BAD_AI = /\b(ai|Ai|aI)\b/;

const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);

if (!existsSync(BUILD)) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};

const htmlFile = (path) =>
  join(BUILD, path === "/" ? "index.html" : `${path.slice(1)}.html`);

// Only the server-rendered document, without the inline RSC payload.
const documentPart = (html) =>
  html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (s) =>
    /type="application\/ld\+json"/.test(s) ? s : "",
  );

function visibleText(html) {
  return decode(
    html
      .replace(/<head\b[\s\S]*?<\/head>/i, " ")
      .replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function checkCopy(where, label, text) {
  if (!text) return;
  if (DASHES.test(text)) {
    const at = text.search(DASHES);
    fail(where, `${label} has an em or en dash near "${text.slice(Math.max(0, at - 30), at + 30)}"`);
  }
  const ai = text.match(BAD_AI);
  if (ai) {
    const at = ai.index ?? 0;
    fail(where, `${label} has "${ai[0]}" (write AI) near "${text.slice(Math.max(0, at - 30), at + 30)}"`);
  }
}

// Text values of a JSON-LD tree, without identifiers and URLs.
const URL_KEYS = new Set(["@id", "@context", "url", "item", "logo", "image", "sameAs"]);
function jsonText(value, key = "") {
  if (typeof value === "string")
    return URL_KEYS.has(key) || /^https?:\/\//.test(value) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((v) => jsonText(v, key));
  if (value && typeof value === "object")
    return Object.entries(value).flatMap(([k, v]) => jsonText(v, k));
  return [];
}
// Every node of a JSON-LD tree that is an object.
function jsonNodes(value) {
  if (Array.isArray(value)) return value.flatMap(jsonNodes);
  if (value && typeof value === "object")
    return [value, ...Object.values(value).flatMap(jsonNodes)];
  return [];
}

const isDeep = (path) => /^\/(services|use-cases|locations)(\/|$)/.test(path);
const cityFor = (path) => LOCATIONS.find((l) => path === `/locations/${l.slug}`);
const isServicePage = (path) => /^\/services\/[^/]+$/.test(path);
const scenarioFor = (path) => USE_CASES.find((u) => path === `/use-cases/${u.slug}`);
const maxDepth = (path) => (path.startsWith("/use-cases/") ? 3 : 2);
// Pages whose hero ends in a scene image, the one high priority image.
const hasHeroScene = (path) => /^\/(services|use-cases|locations)\/[^/]+$/.test(path) || path === "/locations";
// The public file behind an <img> src, also through the next/image loader.
const imageFile = (src) =>
  src.startsWith("/_next/image") ? new URLSearchParams(src.split("?")[1]).get("url") : src;

const routePaths = new Set(ROUTES.map((r) => r.path));
const inbound = new Map(ROUTES.map((r) => [r.path, 0]));
const linkedFrom = new Map(ROUTES.map((r) => [r.path, new Set()]));
const outbound = new Map();
const titles = new Map();
const descriptions = new Map();
let firstFooter = null;

const pages = [
  ...ROUTES.map((r) => ({ path: r.path, file: htmlFile(r.path), notFound: false })),
  { path: "(404)", file: join(BUILD, "_not-found.html"), notFound: true },
];

for (const page of pages) {
  const where = page.path;
  if (!existsSync(page.file)) {
    fail(where, `no prerendered HTML at ${relative(ROOT, page.file)}`);
    continue;
  }
  const raw = readFileSync(page.file, "utf8");
  const doc = documentPart(raw);
  const head = doc.match(/<head\b[\s\S]*?<\/head>/i)?.[0] ?? "";

  // Title and description.
  const title = decode(head.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  if (!title) fail(where, "missing <title>");
  else if (title.length > 60) fail(where, `title is ${title.length} characters (max 60): "${title}"`);
  checkCopy(where, "title", title);
  if (title && titles.has(title)) fail(where, `title is the same as on ${titles.get(title)}`);
  titles.set(title, where);

  const metas = head.match(/<meta\b[^>]*>/gi) ?? [];
  const meta = (key) =>
    metas.find((m) => attr(m, "name") === key || attr(m, "property") === key);

  const description = meta("description") ? attr(meta("description"), "content") : null;
  if (!description) fail(where, "missing meta description");
  else if (description.length > 155)
    fail(where, `description is ${description.length} characters (max 155)`);
  if (description && descriptions.has(description))
    fail(where, `description is the same as on ${descriptions.get(description)}`);
  if (description) descriptions.set(description, where);

  if (!page.notFound && !meta("og:image")) fail(where, "missing og:image");

  for (const m of metas) {
    const key = attr(m, "name") ?? attr(m, "property") ?? "";
    if (/^(description|og:title|og:description|og:image:alt|twitter:title|twitter:description|twitter:image:alt)$/.test(key))
      checkCopy(where, `meta ${key}`, attr(m, "content"));
  }

  // Canonical, except on the 404.
  if (!page.notFound) {
    const canonical = head.match(/<link\b[^>]*rel="canonical"[^>]*>/i)?.[0];
    const href = canonical ? attr(canonical, "href") : null;
    const expected = page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`;
    if (!href) fail(where, "missing canonical");
    else if (href !== expected) fail(where, `canonical is ${href}, expected ${expected}`);
  }

  // Robots.
  const robots = metas
    .filter((m) => attr(m, "name") === "robots")
    .map((m) => attr(m, "content") ?? "");
  if ((!INDEXABLE || page.notFound) && !robots.some((r) => /noindex/.test(r)))
    fail(where, "missing noindex");
  if (INDEXABLE && !page.notFound && robots.some((r) => /noindex/.test(r)))
    fail(where, "noindex present although INDEXABLE is true");

  // The shared footer, byte for byte the same everywhere.
  const footer = doc.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0];
  if (!footer) fail(where, "missing site footer");
  else if (firstFooter === null) firstFooter = { where, footer };
  else if (footer !== firstFooter.footer) fail(where, `footer differs from the one on ${firstFooter.where}`);

  // One H1, and an outline that never skips a level on the way down.
  const h1s = doc.match(/<h1\b/gi)?.length ?? 0;
  if (h1s !== 1) fail(where, `${h1s} H1 elements (expected 1)`);
  let level = 0;
  for (const h of doc.matchAll(/<h([1-6])\b/gi)) {
    const next = Number(h[1]);
    if (next > level + 1) fail(where, `heading jumps from H${level} to H${next}`);
    level = next;
  }

  // JSON-LD.
  const nodes = [];
  for (const block of doc.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(block[1]);
      for (const text of jsonText(data)) checkCopy(where, "JSON-LD", text);
      nodes.push(...jsonNodes(data));
    } catch (e) {
      fail(where, `JSON-LD does not parse: ${e.message}`);
    }
  }
  const typed = (type) => nodes.filter((n) => n["@type"] === type);

  // Breadcrumbs and Service markup on the deep pages.
  if (isDeep(page.path)) {
    if (!/<nav\b[^>]*aria-label="Breadcrumb"/i.test(doc)) fail(where, "missing breadcrumb trail");
    const crumbs = typed("BreadcrumbList")[0];
    if (!crumbs) fail(where, "missing BreadcrumbList JSON-LD");
    else {
      const items = crumbs.itemListElement ?? [];
      const last = items[items.length - 1]?.item;
      if (last !== `${SITE_URL}${page.path}`) fail(where, `BreadcrumbList ends at ${last}`);
    }
  }
  if (isServicePage(page.path)) {
    const service = typed("Service").find((n) => n.provider);
    if (!service) fail(where, "missing Service JSON-LD with a provider");
    else
      for (const key of ["serviceType", "areaServed", "name", "description"])
        if (!service[key]) fail(where, `Service JSON-LD has no ${key}`);
  }

  // Use case pages: the label, the scenario note, enough copy and links.
  const useCase = scenarioFor(page.path);
  if (useCase) {
    const main = doc.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? "";
    const text = visibleText(main);
    if (!/class="case-label"[^>]*>Use case</.test(main)) fail(where, 'missing the "Use case" label');
    if (!/illustrative scenario/i.test(text)) fail(where, "missing the illustrative scenario note");
    const words = text.split(" ").length;
    if (words < 500) fail(where, `only ${words} words of copy (min 500)`);
    const hrefs = new Set((main.match(/<a\b[^>]*>/gi) ?? []).map((t) => attr(t, "href")));
    for (const [label, href] of [
      ["parent service", `/services/${useCase.service}`],
      ["sibling use case", `/use-cases/${siblingUseCase(useCase).slug}`],
      ["related service", `/services/${useCase.relatedService}`],
      ...useCase.locations.map((slug) => ["city", `/locations/${slug}`]),
    ])
      if (!hrefs.has(href)) fail(where, `no link to its ${label} ${href}`);
  }

  // City pages: the remote-first line and the required links.
  const city = cityFor(page.path);
  if (city) {
    const main = doc.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? "";
    const text = visibleText(main);
    if (!text.includes(servingLine(city.name))) fail(where, "missing the remote-first serving line");
    const hrefs = new Set((main.match(/<a\b[^>]*>/gi) ?? []).map((t) => attr(t, "href")));
    for (const [label, href] of [
      ...SERVICES.map((s) => ["service", `/services/${s.slug}`]),
      ...city.detail.useCases.map((u) => ["use case", `/use-cases/${u.slug}`]),
      ...city.detail.neighbours.map((slug) => ["neighbouring city", `/locations/${slug}`]),
      ["hub", "/locations"],
    ])
      if (!hrefs.has(href)) fail(where, `no link to ${label} ${href}`);
  }

  // Images: alt and dimensions on every one, files that exist, and a single
  // high priority image, only on pages with a hero scene.
  const imgs = doc.match(/<img\b[^>]*>/gi) ?? [];
  let eager = 0;
  for (const tag of imgs) {
    const short = tag.slice(0, 120);
    if (attr(tag, "alt") === null) fail(where, `image without alt: ${short}`);
    if (!attr(tag, "width") || !attr(tag, "height")) fail(where, `image without width and height: ${short}`);
    const file = imageFile(attr(tag, "src") ?? "");
    if (file?.startsWith("/") && !existsSync(join(PUBLIC, file))) fail(where, `image file missing: ${file}`);
    if (attr(tag, "fetchpriority") === "high") {
      eager++;
      if (!attr(tag, "alt")) fail(where, "hero scene has no alt text");
    } else if (file?.startsWith("/images/") && attr(tag, "loading") !== "lazy")
      fail(where, `scene image below the hero is not lazy: ${short}`);
  }
  const heroes = hasHeroScene(page.path) ? 1 : 0;
  if (eager !== heroes) fail(where, `${eager} high priority images (expected ${heroes})`);

  // Copy and alt text.
  checkCopy(where, "page copy", visibleText(doc));
  for (const tag of doc.match(/<[a-z][^>]*\s(alt|aria-label|title)="[^"]*"[^>]*>/gi) ?? []) {
    for (const name of ["alt", "aria-label", "title"]) checkCopy(where, name, attr(tag, name));
  }

  // Internal links.
  const links = new Set();
  outbound.set(page.path, links);
  const ids = new Set([...doc.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const tag of doc.match(/<a\b[^>]*>/gi) ?? []) {
    let href = attr(tag, "href");
    if (!href) {
      fail(where, `link without href: ${tag}`);
      continue;
    }
    if (href.startsWith(SITE_URL)) href = href.slice(SITE_URL.length) || "/";
    if (/^(https?:|mailto:|tel:)/i.test(href)) continue;
    if (href.startsWith("#")) {
      if (href.length > 1 && !ids.has(href.slice(1))) fail(where, `anchor ${href} has no target`);
      continue;
    }
    const [pathAndQuery, hash] = href.split("#");
    const path = pathAndQuery.split("?")[0] || "/";
    if (path !== "/" && path.endsWith("/")) fail(where, `trailing slash in ${href}`);
    if (path !== path.toLowerCase()) fail(where, `uppercase in ${href}`);
    if (routePaths.has(path)) {
      links.add(path);
      if (!page.notFound && path !== page.path) {
        inbound.set(path, inbound.get(path) + 1);
        linkedFrom.get(path).add(page.path);
      }
      if (hash && path === page.path && !ids.has(hash)) fail(where, `anchor ${href} has no target`);
      continue;
    }
    if (METADATA_PATHS.has(path)) continue;
    const file = join(PUBLIC, path);
    if (existsSync(file) && statSync(file).isFile()) continue;
    fail(where, `broken internal link ${href}`);
  }
}

// Orphans: every page except home needs a link from another page.
for (const [path, count] of inbound) {
  if (path !== "/" && count === 0) fail(path, "orphan page, no other page links to it");
}

// Use case pages need links from at least two other pages.
for (const u of USE_CASES) {
  const path = `/use-cases/${u.slug}`;
  const from = linkedFrom.get(path)?.size ?? 0;
  if (from < 2) fail(path, `linked from ${from} other page(s) (min 2)`);
}

// City pages: enough copy of their own, no shared passages, a sensible
// number of use cases, and links from at least two other pages.
const SHINGLE = 12;
const shingles = (words) => {
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i++) set.add(words.slice(i, i + SHINGLE).join(" "));
  return set;
};
const cityShingles = LOCATIONS.map((l) => {
  const words = cityCopy(l.detail).join(" ").toLowerCase().replace(/[^a-z0-9' ]+/g, " ").split(/\s+/).filter(Boolean);
  return { l, words, set: shingles(words) };
});
for (const { l, words, set } of cityShingles) {
  const where = `/locations/${l.slug}`;
  if (words.length < 600) fail(where, `only ${words.length} words written for this city (min 600)`);
  const n = l.detail.useCases.length;
  if (n < 3 || n > 5) fail(where, `${n} use cases (expected 3 to 5)`);
  if (new Set(l.detail.serviceOrder).size !== SERVICES.length) fail(where, "serviceOrder must list all eight services once");
  for (const other of cityShingles) {
    if (other.l.slug <= l.slug) continue;
    const shared = [...set].find((s) => other.set.has(s));
    if (shared) fail(where, `shares a passage with /locations/${other.l.slug}: "${shared}"`);
  }
  const from = linkedFrom.get(where)?.size ?? 0;
  if (from < 2) fail(where, `linked from ${from} other page(s) (min 2)`);
}

// Click depth from the home page: services within two clicks, use cases
// within three.
const depth = new Map([["/", 0]]);
for (let queue = ["/"]; queue.length; ) {
  const from = queue.shift();
  for (const to of outbound.get(from) ?? []) {
    if (depth.has(to)) continue;
    depth.set(to, depth.get(from) + 1);
    queue.push(to);
  }
}
for (const r of ROUTES) {
  if (!depth.has(r.path)) fail(r.path, "not reachable from the home page");
  else if (isDeep(r.path) && depth.get(r.path) > maxDepth(r.path))
    fail(r.path, `${depth.get(r.path)} clicks from the home page (max ${maxDepth(r.path)})`);
}

// robots.txt and sitemap against the switch.
const robotsTxt = readFileSync(join(BUILD, "robots.txt.body"), "utf8");
const sitemap = readFileSync(join(BUILD, "sitemap.xml.body"), "utf8");
if (/Disallow:\s*\/\s*$/m.test(robotsTxt)) fail("robots.txt", "blocks crawling");
if (!INDEXABLE) {
  if (/Sitemap:/i.test(robotsTxt)) fail("robots.txt", "advertises a sitemap while not indexable");
  if (/<url>/.test(sitemap)) fail("sitemap.xml", "has entries while not indexable");
} else {
  if (!robotsTxt.includes(`${SITE_URL}/sitemap.xml`)) fail("robots.txt", "missing sitemap URL");
  for (const r of ROUTES) {
    const loc = r.path === "/" ? SITE_URL : `${SITE_URL}${r.path}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) fail("sitemap.xml", `missing ${loc}`);
  }
}

// Scene images: one per service and use case, every file present, no
// unused or oversized files in public/images.
const sceneImages = [
  ...SERVICES.map((s) => [`service ${s.slug}`, SERVICE_IMAGES[s.slug]]),
  ...USE_CASES.map((u) => [`use case ${u.slug}`, USE_CASE_IMAGES[u.slug]]),
  ...LOCATIONS.map((l) => [`city ${l.slug}`, LOCATION_IMAGES[l.slug]]),
  ["locations hub", LOCATIONS_HUB_IMAGE],
];
const usedImages = new Set();
for (const [label, image] of sceneImages) {
  if (!image) {
    fail("content/images.ts", `no image for ${label}`);
    continue;
  }
  usedImages.add(image.src);
  checkCopy("content/images.ts", `alt for ${label}`, image.alt);
  if (!image.alt) fail("content/images.ts", `empty alt for ${label}`);
  if (!existsSync(join(PUBLIC, image.src))) fail("content/images.ts", `missing file ${image.src} for ${label}`);
}
for (const file of walkFiles(join(PUBLIC, "images"))) {
  const src = `/${relative(PUBLIC, file)}`;
  if (!usedImages.has(src)) fail(src, "image file is not used by content/images.ts");
  if (!src.endsWith(".webp")) fail(src, "scene images must be WebP");
  if (statSync(file).size > 190_000) fail(src, `${Math.round(statSync(file).size / 1024)} KB (max about 180 KB)`);
}

// Source scan for dashes.
const SOURCE = ["app", "components", "content", "lib", "docs", "scripts", "README.md", "CLAUDE.md"];
for (const file of SOURCE.flatMap((s) => walkFiles(join(ROOT, s)))) {
  if (!/\.(tsx?|mjs|js|css|md|txt)$/.test(file)) continue;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (DASHES.test(line)) fail(`${relative(ROOT, file)}:${i + 1}`, "em or en dash");
  });
}

const checked = pages.length;
if (problems.length) {
  console.error(`check-links: ${problems.length} problem(s) across ${checked} pages\n`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(
  `check-links: ${checked} pages OK (${ROUTES.length} routes and the 404). ` +
    `INDEXABLE=${INDEXABLE}, SITE_URL=${SITE_URL}`,
);
