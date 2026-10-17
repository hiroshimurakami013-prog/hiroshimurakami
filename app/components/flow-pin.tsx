"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { endSettling, trackProgress, useReducedMotion } from "./scroll-frame";

const noop = () => () => {};

// The client half of the flow: it pins the server-rendered diagram and
// drives it from scroll. One progress value goes into a CSS variable on the
// stage and the meter, and the active step is marked with an attribute, so
// React never re-renders while scrolling.
export default function FlowPin({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Pinned only on the client, so the server HTML is the still diagram.
  const hydrated = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  const pinned = hydrated && !reduce;

  // Pinning turns the still diagram into the first frame of the story. When
  // that happens off screen, as on a normal load, skip the crossfades it
  // would start: nobody can see them, and they would only keep the main
  // thread busy while the page is still loading. Runs before paint, so the
  // first styled frame already has transitions off.
  useLayoutEffect(() => {
    const root = ref.current;
    if (!pinned || !root) return;
    const rect = root.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
      root.dataset.settling = "";
    }
  }, [pinned]);

  // Progress from the flow's top reaching the top of the viewport to its
  // bottom reaching the bottom. Also syncs at once, in case the page loaded
  // mid-scroll.
  useEffect(() => {
    const root = ref.current;
    const stage = root?.querySelector<HTMLElement>(".flow-stage");
    const bars = root?.querySelectorAll<HTMLElement>(".flow-meter i");
    const steps = root?.querySelectorAll<HTMLElement>(".flow-step");
    if (!pinned || !root || !stage || !bars || !steps) return;
    let current = -1;
    let first = true;
    const stop = trackProgress(root, 0, 1, (v) => {
      if (first) {
        first = false;
        if (root.dataset.settling !== undefined) endSettling(root);
      }
      // A short hold at both ends, so the first and last frames can be read.
      const p = Math.min(1, Math.max(0, (v - 0.04) / 0.86));
      stage.style.setProperty("--p", p.toFixed(4));
      bars.forEach((bar, i) =>
        bar.style.setProperty(
          "--m",
          Math.min(1, Math.max(0, (p - i / 3) * 3)).toFixed(3),
        ),
      );
      const active = p < 0.34 ? 0 : p < 0.64 ? 1 : 2;
      if (active === current) return;
      current = active;
      steps.forEach((step, i) => {
        if (i === active) step.dataset.active = "true";
        else delete step.dataset.active;
      });
    });
    return () => {
      stop();
      delete root.dataset.settling;
      stage.style.removeProperty("--p");
      bars.forEach((bar) => bar.style.removeProperty("--m"));
      steps.forEach((step) => delete step.dataset.active);
    };
  }, [pinned]);

  return (
    <div ref={ref} className="flow" data-pinned={pinned ? "true" : undefined}>
      {children}
    </div>
  );
}
