"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackProgress } from "./scroll-frame";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const range = (v: number, from: number, to: number) =>
  Math.min(1, Math.max(0, (v - from) / (to - from)));

// Depth on the way out of the hero: the background sinks slowly, the copy
// lifts a little faster and dims. Only transform and opacity change, so the
// compositor does the work. Nothing moves under reduced motion.
export default function HeroSection({
  background,
  children,
}: {
  background: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const fg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current;
    const back = bg.current;
    const front = fg.current;
    if (!section || !back || !front) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = -1;
    const stop = trackProgress(section, 0, 0, (p) => {
      if (p === last) return;
      last = p;
      back.style.transform = `translate3d(0, ${lerp(0, 28, p)}%, 0) scale(${lerp(1, 1.12, p)})`;
      front.style.transform = `translate3d(0, ${lerp(0, -18, p)}%, 0)`;
      front.style.opacity = String(1 - range(p, 0.2, 0.85));
    });
    return () => {
      stop();
      // Clean slate for when the page is shown again (cacheComponents
      // keeps it mounted while hidden and re-runs this effect on return).
      back.style.transform = "";
      front.style.transform = "";
      front.style.opacity = "";
    };
  }, []);

  return (
    <section ref={ref} id="hero" aria-labelledby="hero-title" className="hero">
      <div ref={bg} className="hero-bg">
        {background}
      </div>
      <div ref={fg} className="wrap relative">
        {children}
      </div>
    </section>
  );
}
