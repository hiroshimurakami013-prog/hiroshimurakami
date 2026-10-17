"use client";

import { useEffect, useRef, useState } from "react";
import { endSettling, trackProgress } from "./scroll-frame";

type Step = { n: string; title: string; text: string };

// The rail draws itself as the reader moves through the section, and each
// step lights up when the line reaches it. Fully drawn under reduced motion.
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const rail = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(steps.length);

  // Until the first scroll update everything shows complete, which is also
  // the reduced motion state: CSS draws the rail fully by default.
  useEffect(() => {
    const list = ref.current;
    const line = rail.current;
    if (!list || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let first = true;
    const stop = trackProgress(list, 0.8, 0.55, (p, visible) => {
      const next = Math.floor(p * steps.length + 0.15);
      // The first update moves the steps from fully lit to where the reader
      // is. Off screen, as on a normal load, that needs no transitions.
      if (first) {
        first = false;
        if (!visible && next !== steps.length) list.dataset.settling = "";
      }
      line.style.setProperty("--rail", p.toFixed(4));
      setLit(next);
    });
    return () => {
      stop();
      delete list.dataset.settling;
      line.style.removeProperty("--rail");
    };
  }, [steps.length]);

  // Clears the settling state once React has committed the new steps.
  useEffect(() => {
    const list = ref.current;
    if (list?.dataset.settling !== undefined) endSettling(list);
  }, [lit]);

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
            data-lit={i < lit ? "true" : undefined}
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
