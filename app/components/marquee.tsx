"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { Asterisk } from "@phosphor-icons/react";

// A kinetic band of capabilities. It drifts on its own, speeds up with the
// reader's scroll and turns around when they scroll back up.
export default function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const direction = useRef(-1);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 300 });
  const boost = useTransform(smooth, [0, 1200], [0, 4], { clamp: false });

  // Two identical groups, so shifting by -50% loops without a seam.
  const transform = useTransform(
    base,
    (v) => `translate3d(${wrap(-50, 0, v)}%, 0, 0)`,
  );

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const b = boost.get();
    if (b < -0.05) direction.current = 1;
    else if (b > 0.05) direction.current = -1;
    const speed = 1.6 * (1 + Math.min(Math.abs(b), 6));
    base.set(base.get() + direction.current * speed * (delta / 1000));
  });

  const group = (hidden: boolean) => (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="marquee-item">
          {item}
          <Asterisk
            className="marquee-star"
            size={28}
            weight="bold"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="marquee"
      data-static={reduce ? "true" : undefined}
      aria-label="Capabilities"
      role="region"
    >
      <motion.div className="marquee-track" style={{ transform }}>
        {group(false)}
        {group(true)}
      </motion.div>
    </div>
  );
}
