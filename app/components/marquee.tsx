"use client";

import { useEffect, useRef, type ReactNode } from "react";

// A kinetic band of capabilities. It drifts on its own as a CSS animation,
// so the compositor moves it and the main thread stays free. Scrolling only
// nudges the animation's playback rate: faster with the reader's scroll
// speed, reversed when they scroll back up, easing back to the base drift.
// Still and wrapped under reduced motion (see globals.css).
// The separator icon is rendered by the server and passed in, so no icon
// code ships to the browser.
export default function Marquee({
  items,
  separator,
}: {
  items: string[];
  separator: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lastY = window.scrollY;
    let lastT = performance.now();
    let direction = 1;
    let boost = 0;
    let raf = 0;

    const animation = () => el.getAnimations()[0];
    const apply = () => {
      const a = animation();
      if (a) a.playbackRate = direction * (1 + boost);
    };

    // Runs only while a boost is decaying, then stops itself.
    const settle = () => {
      boost *= 0.92;
      if (boost < 0.02) {
        boost = 0;
        raf = 0;
      } else raf = requestAnimationFrame(settle);
      apply();
    };

    const onScroll = () => {
      if (reduce.matches) return;
      const now = performance.now();
      const dy = window.scrollY - lastY;
      const dt = Math.max(16, now - lastT);
      lastY = window.scrollY;
      lastT = now;
      if (dy !== 0) direction = dy > 0 ? 1 : -1;
      const speed = Math.abs(dy / dt) * 1000;
      boost = Math.max(boost, Math.min(speed / 300, 6));
      apply();
      if (!raf) raf = requestAnimationFrame(settle);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const group = (hidden: boolean) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="marquee-item">
          {item}
          {separator}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-label="Capabilities" role="region">
      <div ref={track} className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
