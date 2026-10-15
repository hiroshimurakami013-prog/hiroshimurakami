"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

// Depth on the way out of the hero: the background sinks slowly, the copy
// lifts a little faster and dims. Nothing moves under reduced motion.
export default function HeroSection({
  background,
  children,
}: {
  background: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fgOpacity = useTransform(scrollYProgress, [0.2, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-labelledby="hero-title"
      className="hero"
    >
      <motion.div
        className="hero-bg"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        {background}
      </motion.div>
      <motion.div
        className="wrap relative"
        style={reduce ? undefined : { y: fgY, opacity: fgOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}
