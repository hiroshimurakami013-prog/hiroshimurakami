import StaticImage from "./static-image";
import Link from "next/link";
import { CTA_LABEL, INSTAGRAM } from "@/lib/site";

// Header for the deep pages: the brand home, the three hubs and
// the call to action. The home page keeps its own fixed header with the
// in-page section highlight.
const links = [
  { href: "/services", label: "Services", show: undefined },
  { href: "/use-cases", label: "Use cases", show: "hidden min-[420px]:block" },
  { href: "/locations", label: "Locations", show: "hidden min-[560px]:block" },
];

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="legal-header">
      <div className="wrap">
        <div className="nav-pill">
          <Link
            href="/"
            className="brand-link"
            aria-label="Hiroshi Murakami, home"
          >
            <span className="symbol-tile" aria-hidden="true">
              <StaticImage src="/symbol.png" alt="" width={22} height={21} />
            </span>
            <span className="hidden md:inline">Hiroshi Murakami</span>
          </Link>
          <nav aria-label="Main" className="flex items-center gap-1">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.href} className={l.show}>
                  <Link
                    href={l.href}
                    className="nav-link"
                    aria-current={current === l.href ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <span className="sm:hidden">Free AI audit</span>
              <span className="hidden sm:inline">{CTA_LABEL}</span>
              <span className="sr-only"> (opens Instagram in a new tab)</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
