"use client";

import { useSyncExternalStore } from "react";

// One passive scroll listener for every scroll-linked effect on the page.
// Subscribers run together once per animation frame, and only while the
// page is actually scrolling or resizing, so an idle page costs nothing.

type Frame = (scrollY: number, viewportHeight: number) => void;

const subscribers = new Set<Frame>();
let raf = 0;

function run() {
  raf = 0;
  const y = window.scrollY;
  const vh = window.innerHeight;
  subscribers.forEach((fn) => fn(y, vh));
}
function schedule() {
  if (!raf) raf = requestAnimationFrame(run);
}

export function onScrollFrame(fn: Frame) {
  if (subscribers.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }
  subscribers.add(fn);
  schedule();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

/**
 * Scroll progress of an element from 0 to 1, between two moments: when its
 * top meets `start` (a fraction of the viewport height from the top) and
 * when its bottom meets `end`. Positions are measured on resize, not on
 * every frame, so scrolling never forces layout. `visible` says whether
 * any part of the element is in the viewport.
 */
export function trackProgress(
  el: HTMLElement,
  start: number,
  end: number,
  onProgress: (progress: number, visible: boolean) => void,
) {
  let top = 0;
  let height = 0;
  let measured = false;

  const update = (y: number, vh: number) => {
    if (!measured) return;
    const from = top - start * vh;
    const to = top + height - end * vh;
    const p = to > from ? (y - from) / (to - from) : 1;
    onProgress(Math.min(1, Math.max(0, p)), top - y < vh && top + height > y);
  };

  // The first measurement waits for the observer's initial callback, which
  // runs once layout is already done. Measuring straight away would force
  // an extra layout in the middle of hydration.
  const ro = new ResizeObserver(() => {
    const rect = el.getBoundingClientRect();
    top = rect.top + window.scrollY;
    height = rect.height;
    measured = true;
    update(window.scrollY, window.innerHeight);
  });
  ro.observe(el);
  ro.observe(document.body);

  const off = onScrollFrame(update);

  return () => {
    ro.disconnect();
    off();
  };
}

/**
 * Ends the settling state that [data-settling] in globals.css describes:
 * while it is set, an element that takes its scroll state off screen does
 * not start transitions nobody can see. Cleared after two frames, so the
 * new state has been styled without transitions by then.
 */
export function endSettling(el: HTMLElement) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      delete el.dataset.settling;
    }),
  );
}

const REDUCE = "(prefers-reduced-motion: reduce)";

function subscribeReduce(callback: () => void) {
  const query = window.matchMedia(REDUCE);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

/** Live prefers-reduced-motion. False on the server. */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReduce,
    () => window.matchMedia(REDUCE).matches,
    () => false,
  );
}
