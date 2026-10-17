import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import SiteFooter from "./site-footer";

export function External({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

// Shared shell for the long-form legal pages: a quiet header with a way
// home, a readable column, and the shared site footer.
export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="legal-header">
        <div className="wrap">
          <div className="nav-pill">
            <Link
              href="/"
              className="brand-link"
              aria-label="Hiroshi Murakami, home"
            >
              <span className="symbol-tile" aria-hidden="true">
                <Image src="/symbol.png" alt="" width={22} height={21} />
              </span>
              <span className="hidden sm:inline">Hiroshi Murakami</span>
            </Link>
            <Link href="/" className="nav-link legal-home">
              <ArrowLeft size={16} weight="bold" aria-hidden="true" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="legal">
        <div className="legal-glow" aria-hidden="true" />
        <article className="wrap legal-column">
          <h1 className="display legal-title">
            {title}
            <span className="dot">.</span>
          </h1>
          <p className="legal-updated">
            Last updated: <time dateTime="2026-10-16">{updated}</time>
          </p>
          <div className="lead legal-intro">{intro}</div>
          <div className="legal-body">{children}</div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
