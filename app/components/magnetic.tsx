"use client";

import { useRef, type ReactNode } from "react";

// Pulls its child toward the cursor while the pointer is near, then springs
// home. The pointer only writes two CSS variables; a transition with a soft
// overshoot does the easing (see .magnetic). Fine pointers only, and still
// under reduced motion.
export default function Magnetic({
  children,
  strength = 0.32,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty(
      "--mag-x",
      `${(e.clientX - (rect.left + rect.width / 2)) * strength}px`,
    );
    el.style.setProperty(
      "--mag-y",
      `${(e.clientY - (rect.top + rect.height / 2)) * strength}px`,
    );
  };
  const reset = () => {
    ref.current?.style.removeProperty("--mag-x");
    ref.current?.style.removeProperty("--mag-y");
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className ?? ""}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
