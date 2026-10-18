"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { afterIdle } from "./idle";

// While a page loads, the blocks below its first screen skip layout and
// paint (content-visibility in globals.css), so the browser only renders
// the first screen before it can show it. This lifts the hint again, after
// which the page renders exactly as it would without it:
// - each block a full screen before it scrolls into view, which is about
//   when the browser would render it anyway;
// - all remaining blocks, one per frame, as soon as the reader scrolls or
//   otherwise acts (so the page height, the scrollbar and the progress bar
//   are the real ones from the start), or a few seconds after the page has
//   gone idle, so the work never competes with loading;
// - everything at once on a click, for the rest of the visit (the class goes
//   too, so pages reached by client navigation render in full), so an anchor
//   link always scrolls to a position measured on the real layout.
// Pages loaded with a #fragment, by reload or by back and forward never get
// the class (see the layout), so their scroll position is always measured
// on the real layout as well.
const PENDING = ":is(main > :not(:first-child), .site-footer):not([data-released])";
const INTENT = ["scroll", "wheel", "touchstart", "keydown", "pointerdown"];
const CLASS = "render-late";

export default function RenderRelease() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains(CLASS)) return;
    const release = (el: Element) => el.setAttribute("data-released", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          release(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "100% 0px" },
    );
    document.querySelectorAll(PENDING).forEach((el) => io.observe(el));

    let raf = 0;
    let timer = 0;
    let started = false;
    const step = () => {
      const next = document.querySelector(PENDING);
      if (!next) return io.disconnect();
      release(next);
      raf = requestAnimationFrame(step);
    };
    const opts = { capture: true, passive: true } as const;
    const start = () => {
      INTENT.forEach((type) => window.removeEventListener(type, start, opts));
      if (started) return;
      started = true;
      step();
    };
    const releaseAll = () => {
      started = true;
      cancelAnimationFrame(raf);
      document.querySelectorAll(PENDING).forEach(release);
      root.classList.remove(CLASS);
      io.disconnect();
    };

    INTENT.forEach((type) => window.addEventListener(type, start, opts));
    window.addEventListener("click", releaseAll, opts);
    const cancelIdle = afterIdle(() => {
      timer = window.setTimeout(start, 4000);
    });
    // Already scrolled (the reader moved before the scripts arrived).
    if (window.scrollY > 0) start();

    return () => {
      io.disconnect();
      cancelIdle();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      INTENT.forEach((type) => window.removeEventListener(type, start, opts));
      window.removeEventListener("click", releaseAll, opts);
    };
  }, [pathname]);

  return null;
}
