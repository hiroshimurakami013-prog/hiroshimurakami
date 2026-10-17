// Runs a callback once the page has loaded and the main thread is idle, so
// optional extras never compete with first paint or hydration. Returns a
// cancel function. Falls back to a timeout where requestIdleCallback is
// missing (Safari).
export function afterIdle(callback: () => void, timeout = 2500) {
  let idle = 0;
  let timer = 0;
  let done = false;

  const run = () => {
    if (done) return;
    done = true;
    callback();
  };
  const schedule = () => {
    if (typeof window.requestIdleCallback === "function") {
      idle = window.requestIdleCallback(run, { timeout });
    } else {
      timer = setTimeout(run, 400) as unknown as number;
    }
  };

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });

  return () => {
    done = true;
    window.removeEventListener("load", schedule);
    if (idle) window.cancelIdleCallback(idle);
    if (timer) clearTimeout(timer);
  };
}
