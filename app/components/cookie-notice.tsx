"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { afterIdle } from "./idle";

// A first-visit notice, not a consent choice: Clarity runs either way, as
// /privacy explains. It renders only on the client after the page is idle, so
// the static HTML, crawlers and the LCP never see it, and it is position
// fixed, so it never shifts the layout. "Got it" (or Escape while focus is in
// the notice) hides it and remembers that in localStorage so it does not
// come back.
const STORAGE_KEY = "cookie-notice-dismissed";

function wasDismissed() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    // Storage blocked: show the notice, it simply cannot be remembered.
    return false;
  }
}

export default function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return afterIdle(() => {
      if (!wasDismissed()) setOpen(true);
    });
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage blocked: close for this page view only.
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="cookie-notice"
      role="region"
      aria-label="Cookie notice"
      onKeyDown={(event) => {
        if (event.key === "Escape") dismiss();
      }}
    >
      <p className="cookie-notice-text">
        This site uses Microsoft Clarity analytics, which sets cookies to
        understand how the site is used. Details in the{" "}
        <Link href="/privacy" className="text-link">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        className="btn btn-ghost cookie-notice-button"
        onClick={dismiss}
      >
        Got it
      </button>
    </div>
  );
}
