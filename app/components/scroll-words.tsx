"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { trackProgress } from "./scroll-frame";

// The statement lights up word by word as it is read, tied to scroll so
// the pace is the reader's own. One progress value goes into a CSS
// variable, and each word works out its own opacity from it in CSS (see
// .statement .sw). CSS keeps it fully lit under reduced motion.
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
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--p", "0");
    const stop = trackProgress(el, 0.85, 0.5, (p) =>
      el.style.setProperty("--p", p.toFixed(4)),
    );
    return () => {
      stop();
      el.style.removeProperty("--p");
    };
  }, []);

  return (
    <div ref={ref} className="scroll-words" style={{ "--n": words.length } as CSSProperties}>
      <Tag className={className}>
        {words.map((w, i) => (
          <span key={i}>
            <span className="sw" style={{ "--i": i } as CSSProperties}>
              {w}
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </Tag>
    </div>
  );
}
