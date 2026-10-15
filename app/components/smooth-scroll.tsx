"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Inertial scrolling for the whole page. Skipped entirely when the reader
// prefers reduced motion, so the browser's own scrolling takes over.
export default function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const start = () => {
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.11,
        wheelMultiplier: 0.95,
        anchors: { offset: -24 },
      });
    };
    const stop = () => {
      lenis?.destroy();
      lenis = null;
    };

    if (!query.matches) start();
    const onChange = () => (query.matches ? stop() : start());
    query.addEventListener("change", onChange);

    return () => {
      query.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  return null;
}
