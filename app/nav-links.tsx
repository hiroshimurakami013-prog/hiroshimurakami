"use client";

import { useEffect, useRef, useState } from "react";
import { onScrollFrame } from "./components/scroll-frame";

// In-page sections for now. The hub pages replace these anchors once they
// exist. Narrow screens keep fewer links, to leave room for the call to
// action.
const links = [
  { id: "services", label: "Services", show: undefined },
  { id: "use-cases", label: "Use cases", show: "hidden min-[400px]:block" },
  { id: "process", label: "Process", show: "hidden sm:block" },
];

// Marks the section in the middle of the viewport. One highlight glides
// between links on a CSS transition, and a thin bar tracks progress.
export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null);
  const list = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "flow",
      "area",
      ...links.map((l) => l.id),
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setActive(links.some((l) => l.id === id) ? id : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const off = onScrollFrame((y, vh) => {
      const max = document.documentElement.scrollHeight - vh;
      bar.current?.style.setProperty(
        "--progress",
        (max > 0 ? Math.min(1, y / max) : 0).toFixed(4),
      );
    });
    return () => {
      observer.disconnect();
      off();
    };
  }, []);

  // Moves the one highlight under the active link.
  useEffect(() => {
    const el = indicator.current;
    const link = active
      ? list.current?.querySelector<HTMLElement>(`[data-id="${active}"]`)
      : null;
    if (!el) return;
    if (!link) {
      el.dataset.on = "false";
      return;
    }
    el.style.setProperty("--x", `${link.offsetLeft}px`);
    el.style.setProperty("--w", `${link.offsetWidth}px`);
    el.dataset.on = "true";
  }, [active]);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <div ref={list} className="relative">
        <span ref={indicator} className="nav-indicator" aria-hidden="true" />
        <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id} className={l.show}>
            <a
              href={`#${l.id}`}
              data-id={l.id}
              className="nav-link"
              aria-current={active === l.id ? "true" : undefined}
            >
              {l.label}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}
