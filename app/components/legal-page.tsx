import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const INSTAGRAM = "https://www.instagram.com/hiroshimurakami013";
export const FACEBOOK = "https://www.facebook.com/1252933767913035";

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
// home, a readable column, and a footer that links the legal pages together.
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
                <Image
                  src="/symbol.png"
                  alt=""
                  width={259}
                  height={249}
                  style={{ width: 22, height: "auto" }}
                />
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

      <footer className="site-footer">
        <div className="wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.85rem] text-text-3">
            &copy; 2026 Hiroshi Murakami. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="footer-links">
              <li>
                <Link href="/" className="text-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-link">
                  Data deletion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
