"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

type Step = { n: string; title: string; text: string };

// The rail draws itself as the reader moves through the section, and each
// step lights up when the line reaches it. Fully drawn under reduced motion.
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const rail = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(steps.length);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });

  // Until the first scroll update everything shows complete, which is also
  // the reduced motion state: CSS draws the rail fully by default.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    rail.current?.style.setProperty("--rail", v.toFixed(4));
    setLit(Math.floor(v * steps.length + 0.15));
  });

  return (
    <div className="relative">
      <span className="process-rail" aria-hidden="true">
        <i ref={rail} />
      </span>
      <ol ref={ref} className="process">
      {steps.map((s, i) => (
        <li
          key={s.n}
          className="step"
          data-lit={reduce || i < lit ? "true" : undefined}
        >
          <span className="step-num" aria-hidden="true">
            {s.n}
          </span>
          <h3>
            <span className="sr-only">Step {s.n}: </span>
            {s.title}
          </h3>
          <p>{s.text}</p>
        </li>
      ))}
      </ol>
    </div>
  );
}
