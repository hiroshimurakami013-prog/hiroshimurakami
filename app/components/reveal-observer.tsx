"use client";

import { useEffect } from "react";

// One observer for every [data-reveal] element on the page. CSS does the
// motion; this only flips data-shown once, when an element first arrives.
// A second one marks [data-loop] bands as in view while they are on screen,
// so their endless CSS loops only play then. Also drives
// the cursor light on [data-glow] elements with one listener.
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Also shows what the reader already scrolled past before this
          // ran, which would otherwise stay hidden above them. (A block not
          // rendered yet reports an empty box, so that never counts.)
          const box = entry.boundingClientRect;
          const above = box.height > 0 && box.bottom <= 0;
          if (!entry.isIntersecting && !above) continue;
          entry.target.setAttribute("data-shown", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const loops = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute("data-inview", entry.isIntersecting);
        }
      },
      // One pixel in, so a band that only touches the bottom edge (the
      // marquee right under a full height hero) does not count yet.
      { rootMargin: "0px 0px -1px 0px" },
    );
    document
      .querySelectorAll<HTMLElement>("[data-loop]")
      .forEach((el) => loops.observe(el));

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onMove = (e: PointerEvent) => {
      if (!fine.matches) return;
      const target = (e.target as Element | null)?.closest<HTMLElement>(
        "[data-glow]",
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      loops.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
