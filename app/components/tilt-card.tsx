"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const spring = { stiffness: 180, damping: 22, mass: 0.6 };

// A card that leans toward the cursor and carries a spotlight on its border.
// Fine pointers only; still and flat under reduced motion.
export default function TiltCard({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), spring);
  const ry = useSpring(useMotionValue(0), spring);
  const transform = useMotionTemplate`rotateX(${rx}deg) rotateY(${ry}deg)`;

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (reduce) return;
    // Wider cards tilt less, so every card feels equally heavy.
    const max = Math.max(2, 9 - rect.width / 160);
    rx.set((0.5 - py) * max * 2);
    ry.set((px - 0.5) * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="card-tilt">
      <motion.article
        ref={ref}
        className={className}
        style={{ ...style, transform: reduce ? undefined : transform }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {children}
      </motion.article>
    </div>
  );
}
