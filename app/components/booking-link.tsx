"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";
import { CALENDLY_URL } from "@/lib/site";
import { setScrollLocked } from "./smooth-scroll";

// The booking call to action. The href is always the Calendly page, so it
// works without JavaScript and opens in a new tab if the widget cannot load.
// Calendly's own stylesheet and script are fetched lazily, on the first
// hover, focus, touch or click of any booking link, never on page load.
// With the widget ready, a click opens the scheduler as a popup instead.

type CalendlyWidget = {
  initPopupWidget: (options: { url: string }) => void;
};

const CSS_URL = "https://assets.calendly.com/assets/external/widget.css";
const JS_URL = "https://assets.calendly.com/assets/external/widget.js";

let loading: Promise<CalendlyWidget> | null = null;

function widget(): CalendlyWidget | undefined {
  return (window as unknown as { Calendly?: CalendlyWidget }).Calendly;
}

// Resolves with the widget, rejects if the script cannot load. A failed
// attempt is forgotten so a later click can try again.
function load(): Promise<CalendlyWidget> {
  const ready = widget();
  if (ready) return Promise.resolve(ready);
  if (loading) return loading;

  if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = CSS_URL;
    document.head.appendChild(css);
  }

  loading = new Promise<CalendlyWidget>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = JS_URL;
    script.async = true;
    script.onload = () => {
      const w = widget();
      if (w) resolve(w);
      else reject(new Error("Calendly widget missing"));
    };
    script.onerror = () => reject(new Error("Calendly widget failed to load"));
    document.head.appendChild(script);
  }).catch((error) => {
    loading = null;
    document.querySelector(`script[src="${JS_URL}"]`)?.remove();
    throw error;
  });
  return loading;
}

// While the popup is open the page behind it must not scroll. Lenis would
// otherwise keep gliding on wheel input, so it is paused until the popup's
// overlay leaves the DOM.
function holdScrollWhileOpen() {
  const isOpen = () => !!document.querySelector(".calendly-overlay");
  if (!isOpen()) return;
  setScrollLocked(true);
  const watcher = new MutationObserver(() => {
    if (isOpen()) return;
    watcher.disconnect();
    setScrollLocked(false);
  });
  watcher.observe(document.body, { childList: true });
}

function openPopup(w: CalendlyWidget) {
  w.initPopupWidget({ url: CALENDLY_URL });
  holdScrollWhileOpen();
}

export default function BookingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    // Warm up once, on the first sign of intent anywhere on the page.
    const events = ["pointerenter", "focusin", "touchstart"] as const;
    const warm = (event: Event) => {
      const target = event.target as Element | null;
      if (!target?.closest?.("a[data-booking]")) return;
      void load().catch(() => {});
    };
    for (const name of events) document.addEventListener(name, warm, true);
    return () => {
      for (const name of events) document.removeEventListener(name, warm, true);
    };
  }, []);

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // Let modified clicks (new tab, new window, download) act normally.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    const ready = widget();
    if (ready) {
      event.preventDefault();
      openPopup(ready);
      return;
    }
    // Not loaded yet: hold the navigation, load, then open. If loading
    // fails, open the link in a new tab ourselves.
    event.preventDefault();
    load().then(openPopup, () => {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-booking=""
      onClick={onClick}
    >
      {children}
    </a>
  );
}
