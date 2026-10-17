"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { onScrollFrame } from "./components/scroll-frame";

// Services, Use cases and Locations go to their hubs, Process is an in-page section.
// Each link still tracks its section on the home page. Narrow
// screens keep fewer links, to leave room for the call to action.
const links = [
  { id: "services", href: "/services", label: "Services", show: undefined },
  {
    id: "use-cases",
    href: "/use-cases",
    label: "Use cases",
    show: "hidden min-[400px]:block",
  },
  {
    id: "area",
    href: "/locations",
    label: "Locations",
    show: "hidden min-[560px]:block",
  },
  { id: "process", href: "#process", label: "Process", show: "hidden md:block" },
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
            {l.href.startsWith("#") ? (
              <a
                href={l.href}
                data-id={l.id}
                className="nav-link"
                aria-current={active === l.id ? "true" : undefined}
              >
                {l.label}
              </a>
            ) : (
              <Link href={l.href} data-id={l.id} className="nav-link">
                {l.label}
              </Link>
            )}
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}
