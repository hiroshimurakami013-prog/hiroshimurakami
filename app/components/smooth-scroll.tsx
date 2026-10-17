"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { afterIdle } from "./idle";

// Inertial scrolling for the whole page. Skipped entirely when the reader
// prefers reduced motion, so the browser's own scrolling takes over. Lenis
// is loaded on its own, after the page is idle, so it never delays first
// paint, and pages that do not need it never download it before then.
//
// It lives in the root layout, so it outlives page changes. On each route
// change it puts the scroll position somewhere sensible itself: the top for
// a new navigation, or where the reader left that page for back and
// forward. Otherwise Lenis, and pages kept alive by cacheComponents, carry
// the previous page's offset over, and the home page reopens mid scroll with
// its hero faded out by the parallax.
let active: Lenis | null = null;
let raf = 0;

// Lenis is driven on demand instead of with autoRaf. A frame loop that runs
// forever costs main thread time on every frame even when nothing moves;
// this one starts on wheel input or a programmatic scroll and stops once the
// glide has settled.
function frame(time: number) {
  const lenis = active;
  if (!lenis) {
    raf = 0;
    return;
  }
  lenis.raf(time);
  raf = lenis.isScrolling === "smooth" ? requestAnimationFrame(frame) : 0;
}
function wake() {
  if (!active || raf) return;
  // Start the clock now, so the first step is not one huge leap.
  active.time = performance.now();
  raf = requestAnimationFrame(frame);
}

// Jumps or glides to a position through Lenis when it runs, so the two never
// disagree about where the page is.
export function scrollToY(top: number, immediate = false) {
  if (active) {
    active.scrollTo(top, { immediate, force: true });
    wake();
  } else window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const positions = useRef(new Map<string, number>());
  const fromHistory = useRef(false);
  const current = useRef(pathname);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;

    const start = async () => {
      if (active) return;
      const { default: LenisClass } = await import("lenis");
      if (disposed || active || query.matches) return;
      active = new LenisClass({
        lerp: 0.11,
        wheelMultiplier: 0.95,
        anchors: { offset: -24 },
      });
      active.on("virtual-scroll", wake);
      // Anchor links glide through Lenis too, so wake on any click.
      document.addEventListener("click", wake);
    };
    const stop = () => {
      document.removeEventListener("click", wake);
      cancelAnimationFrame(raf);
      raf = 0;
      active?.destroy();
      active = null;
    };

    const cancelIdle = afterIdle(() => {
      if (!query.matches) void start();
    });
    const onChange = () => (query.matches ? stop() : void start());
    query.addEventListener("change", onChange);

    // Remember where each page was left, and whether the next route change
    // comes from the back or forward buttons.
    const onScroll = () => positions.current.set(current.current, scrollY);
    const onPop = () => {
      fromHistory.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onPop);

    return () => {
      disposed = true;
      cancelIdle();
      query.removeEventListener("change", onChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onPop);
      stop();
    };
  }, []);

  // Layout effect, so the new page is painted at its final position.
  useLayoutEffect(() => {
    if (current.current === pathname) return;
    current.current = pathname;
    const restore = fromHistory.current;
    fromHistory.current = false;
    if (!restore && location.hash) return;

    const top = restore ? (positions.current.get(pathname) ?? 0) : 0;
    const apply = () => {
      active?.resize();
      scrollToY(top, true);
    };
    apply();
    // Next may adjust the scroll itself after this commit. Settle once more
    // on the next frame so the last word is ours.
    const raf = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
