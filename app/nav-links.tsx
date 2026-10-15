"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
];

// Marks the section currently in the middle of the viewport, so its link
// sits pressed into the nav like a selected key.
export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));

    // Clear the state when the reader is back at the hero.
    const hero = document.getElementById("hero");
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(null);
          },
          { rootMargin: "-45% 0px -50% 0px" },
        )
      : null;
    if (hero && heroObserver) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  return (
    <ul className="nav-links">
      {links.map((l) => (
        <li key={l.id}>
          <a
            href={`#${l.id}`}
            className="nav-link"
            aria-current={active === l.id ? "true" : undefined}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
