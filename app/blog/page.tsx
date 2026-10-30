import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { POSTS, formatPostDate } from "@/content/posts";
import { blogHubJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../components/cta";
import JsonLd from "../components/json-ld";
import RevealObserver from "../components/reveal-observer";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const description =
  "Plain-language notes on AI for business owners and accountants: what new research shows, what it means for your work, and where a person stays in charge.";

export const metadata: Metadata = pageMetadata({
  title: "Blog: AI for Owners and Accountants | Hiroshi Murakami",
  description,
  path: "/blog",
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogHubJsonLd(description, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="display page-title">
              Notes on AI for owners and accountants
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[56ch]">
              Short, practical posts on what is new in AI and what it means
              for a small or mid-size business and the people who keep its
              books. Every post credits its sources, and my own opinion is
              always labelled as such.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="posts-title">
          <div className="wrap">
            <h2 id="posts-title" className="block-title" data-reveal>
              Latest posts
            </h2>
            <ul className="nf-links post-list">
              {POSTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="nf-link">
                    <span>
                      <span className="post-list-date">
                        <time dateTime={p.datePublished}>
                          {formatPostDate(p.datePublished)}
                        </time>
                      </span>
                      <span className="nf-link-label">{p.title}</span>
                      <span className="nf-link-text">{p.description}</span>
                    </span>
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ClosingCta
          title="Wondering where AI fits in your business?"
          text="Book a free AI audit. We look at where your team's time goes, what AI could take on and where a person should stay in charge. No obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
