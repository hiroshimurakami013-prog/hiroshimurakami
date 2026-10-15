"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span className="sw" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

// The statement lights up word by word as it is read, tied to scroll so
// the pace is the reader's own. CSS keeps it fully lit under reduced motion.
export default function ScrollWords({
  text,
  className,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "h2";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <span key={i}>
              <Word progress={scrollYProgress} range={[start, end]}>
                {w}
              </Word>
              {i < words.length - 1 ? " " : null}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
