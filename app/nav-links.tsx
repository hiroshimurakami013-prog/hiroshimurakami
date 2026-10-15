"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
];

// Marks the section in the middle of the viewport. The highlight glides
// between links as a shared layout element, and a thin bar tracks progress.
export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ids = ["hero", "flow", ...links.map((l) => l.id), "contact"];
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
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reduce ? scrollYProgress : progress }}
        aria-hidden="true"
      />
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="nav-link"
              aria-current={active === l.id ? "true" : undefined}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", bounce: 0, duration: 0.45 }
                  }
                />
              )}
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
