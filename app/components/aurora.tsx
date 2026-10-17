"use client";

import { useEffect, useRef } from "react";
import { afterIdle } from "./idle";

type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

// Whether this device should get the WebGL field at all. The CSS gradient
// on .hero-bg is the first paint everywhere and the whole effect where the
// shader would cost more than it gives.
function canRunAurora() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return false;
  const nav = navigator as NavigatorHints;
  if (nav.connection?.saveData) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  if (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4)
    return false;
  return true;
}

// A small leaf: it only schedules the shader. The WebGL code is a separate
// chunk, fetched after load and idle, and only on devices that can afford
// it. A hidden tab waits until it is shown.
export default function Aurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer || !canRunAurora()) return;

    let stop: (() => void) | null = null;
    let cancelled = false;

    const begin = () => {
      if (document.hidden) {
        document.addEventListener("visibilitychange", begin, { once: true });
        return;
      }
      void import("./aurora-gl").then(({ startAurora }) => {
        if (!cancelled) stop = startAurora(layer);
      });
    };
    const cancelIdle = afterIdle(begin);

    return () => {
      cancelled = true;
      cancelIdle();
      document.removeEventListener("visibilitychange", begin);
      stop?.();
      stop = null;
    };
  }, []);

  return <div ref={ref} className="aurora" aria-hidden="true" />;
}
