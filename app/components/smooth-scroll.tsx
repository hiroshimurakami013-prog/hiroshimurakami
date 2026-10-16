"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Inertial scrolling for the whole page. Skipped entirely when the reader
// prefers reduced motion, so the browser's own scrolling takes over.
//
// It lives in the root layout, so it outlives page changes. On each route
// change it puts the scroll position somewhere sensible itself: the top for
// a new navigation, or where the reader left that page for back and
// forward. Otherwise Lenis, and pages kept alive by cacheComponents, carry
// the previous page's offset over, and the home page reopens mid scroll with
// its hero faded out by the parallax.
let active: Lenis | null = null;

// Jumps or glides to a position through Lenis when it runs, so the two never
// disagree about where the page is.
export function scrollToY(top: number, immediate = false) {
  if (active) active.scrollTo(top, { immediate, force: true });
  else window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const positions = useRef(new Map<string, number>());
  const fromHistory = useRef(false);
  const current = useRef(pathname);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const start = () => {
      active = new Lenis({
        autoRaf: true,
        lerp: 0.11,
        wheelMultiplier: 0.95,
        anchors: { offset: -24 },
      });
    };
    const stop = () => {
      active?.destroy();
      active = null;
    };

    if (!query.matches) start();
    const onChange = () => (query.matches ? stop() : start());
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
