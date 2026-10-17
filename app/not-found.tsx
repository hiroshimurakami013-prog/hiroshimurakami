import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CTA_LABEL, INDEXABLE, INSTAGRAM, ROBOTS } from "@/lib/site";
import SiteFooter from "./components/site-footer";

// Never indexed, whatever the INDEXABLE switch says.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Hiroshi Murakami" },
  description:
    "This page does not exist. Find AI automation and AI accounting services from Hiroshi Murakami, or read the privacy policy and terms.",
  robots: INDEXABLE ? { index: false, follow: true } : ROBOTS,
};

const links = [
  {
    href: "/",
    label: "Home",
    text: "AI automation and AI accounting services, use cases and how the process works.",
  },
  {
    href: "/services",
    label: "Services",
    text: "AI accounting, AI receptionists, voice agents, follow-ups and more, explained in plain language.",
  },
  {
    href: "/privacy",
    label: "Privacy Policy",
    text: "How this website and the Hiro App handle data.",
  },
  {
    href: "/terms",
    label: "Terms of Service",
    text: "The plain language rules for using this website.",
  },
  {
    href: "/data-deletion",
    label: "Data deletion",
    text: "How to ask for any data related to you to be deleted.",
  },
];

export default function NotFound() {
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
        <div className="wrap legal-column">
          <p className="nf-code" aria-hidden="true">
            404
          </p>
          <h1 className="display legal-title">
            This page does not exist<span className="dot">.</span>
          </h1>
          <p className="lead legal-intro">
            The link may be old, or the address may have a typo. These pages
            are a good place to pick up from.
          </p>
          <ul className="nf-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="nf-link">
                  <span>
                    <span className="nf-link-label">{l.label}</span>
                    <span className="nf-link-text">{l.text}</span>
                  </span>
                  <ArrowRight size={20} weight="bold" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-text-2">
            Looking for help with AI in your business?{" "}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-medium"
            >
              {CTA_LABEL} on Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
