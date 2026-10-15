"use client";

import { useEffect } from "react";

// One observer for every [data-reveal] element on the page. CSS does the
// motion; this only flips data-shown once, when an element first arrives.
// Also drives the cursor light on [data-glow] elements with one listener.
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

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
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
