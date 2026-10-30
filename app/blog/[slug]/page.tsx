import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { POSTS, formatPostDate, getPost } from "@/content/posts";
import { articleJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta } from "../../components/cta";
import JsonLd from "../../components/json-ld";
import RevealObserver from "../../components/reveal-observer";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  // The ember dot closes the headline, as on every other page.
  const headline = post.title.replace(/\.$/, "");
  const sourceLink = post.source.links[0];

  return (
    <>
      <JsonLd
        data={articleJsonLd(
          {
            path,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          },
          crumbs,
        )}
      />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <article aria-labelledby="page-title">
          <header className="page-hero">
            <div className="legal-glow" aria-hidden="true" />
            <div className="wrap">
              <Breadcrumbs items={crumbs} />
              <p className="post-meta">
                <span>By {post.author}</span>
                <time dateTime={post.datePublished}>
                  {formatPostDate(post.datePublished)}
                </time>
              </p>
              <h1 id="page-title" className="display page-title post-title">
                {headline}
                <span className="dot">.</span>
              </h1>
              <p className="lead mt-8 max-w-[58ch]">{post.lead}</p>
              <p className="post-credit">
                Source:{" "}
                <a
                  href={sourceLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.source.publisher}, &ldquo;{post.source.title}&rdquo;
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </header>

          <div className="block">
            <div className="wrap post-column">
              <section className="post-glance" aria-labelledby="glance-title">
                <h2 id="glance-title" className="block-title-sm">
                  At a glance
                </h2>
                <ul className="check-list">
                  {post.glance.map((g) => (
                    <li key={g}>
                      <CheckCircle size={18} weight="fill" aria-hidden="true" />
                      {g}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="post-body">
                {[...post.sections, post.take].map((s) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                    <h2 id={`${s.id}-title`}>{s.title}</h2>
                    {s.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </section>
                ))}

                <aside className="post-box" aria-labelledby="for-you-title">
                  <h2 id="for-you-title">
                    <Compass size={22} weight="light" aria-hidden="true" />
                    What this means for you
                  </h2>
                  <ul>
                    {post.forYou.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </aside>

                <section id="source" aria-labelledby="source-title">
                  <h2 id="source-title">Source</h2>
                  <p>
                    This post is based on {post.source.publisher}&rsquo;s
                    article &ldquo;{post.source.title}&rdquo;.{" "}
                    {post.source.note}
                  </p>
                  <ul className="post-sources">
                    {post.source.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </article>

        <section className="block" aria-labelledby="keep-reading-title">
          <div className="wrap post-column">
            <h2 id="keep-reading-title" className="block-title-sm" data-reveal>
              Keep reading
            </h2>
            <ul className="nf-links mt-7">
              {post.related.map((l) => (
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
          </div>
        </section>

        <ClosingCta title={post.cta.title} text={post.cta.text} />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
