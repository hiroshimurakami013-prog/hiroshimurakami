import { Fragment, type ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import {
  INLINE_LINK,
  POSTS,
  formatPostDate,
  getPost,
  latestPosts,
  type PostImage,
  type PostLink,
} from "@/content/posts";
import { getService } from "@/content/services";
import { articleJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../../components/breadcrumbs";
import { ClosingCta } from "../../components/cta";
import FaqSection from "../../components/faq-section";
import JsonLd from "../../components/json-ld";
import PostList, { PostListLink } from "../../components/post-list";
import RevealObserver from "../../components/reveal-observer";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

// A post image in a rounded frame with a fixed 16:9 ratio, so nothing shifts
// while it loads. The hero image loads eagerly with high fetch priority, the
// one in the body is lazy.
function PostFigure({
  image,
  sizes,
  className,
  hero = false,
}: {
  image: PostImage;
  sizes: string;
  className?: string;
  hero?: boolean;
}) {
  return (
    <figure className={className ? `post-figure ${className}` : "post-figure"}>
      <div className="post-figure-frame">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading={hero ? "eager" : "lazy"}
          fetchPriority={hero ? "high" : undefined}
        />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

// Post copy with its [anchor text](/path) markup turned into site links.
function PostText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]} className="post-link">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [post.author],
    },
  };
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

  // "More from the blog": the three newest other posts, then the post's
  // service page, then its hand-picked links that are not listed yet, and
  // the blog index last.
  const newest = latestPosts(3, post.slug);
  const service = getService(post.service);
  const listed = new Set(newest.map((p) => `/blog/${p.slug}`));
  const more: PostLink[] = [];
  for (const l of [
    ...(service
      ? [
          {
            href: `/services/${service.slug}`,
            label: service.name,
            text: `The service behind this post. ${service.summary}`,
          },
        ]
      : []),
    ...post.related,
    {
      href: "/blog",
      label: "All posts",
      text: "Every post on the blog, newest first.",
    },
  ]) {
    if (listed.has(l.href)) continue;
    listed.add(l.href);
    more.push(l);
  }

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
            image: post.images.hero.src,
            faqs: post.faqs,
          },
          crumbs,
        )}
      />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/blog" />

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
              <p className="lead mt-8 max-w-[58ch]">
                <PostText text={post.lead} />
              </p>
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
              <PostFigure
                image={post.images.hero}
                sizes="(min-width: 960px) 880px, 92vw"
                className="post-figure-hero"
                hero
              />
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
                  <Fragment key={s.id}>
                    <section id={s.id} aria-labelledby={`${s.id}-title`}>
                      <h2 id={`${s.id}-title`}>{s.title}</h2>
                      {s.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)}>
                          <PostText text={p} />
                        </p>
                      ))}
                    </section>
                    {s.id === post.images.inline.afterSectionId && (
                      <PostFigure
                        image={post.images.inline.image}
                        sizes="(min-width: 800px) 704px, 92vw"
                      />
                    )}
                  </Fragment>
                ))}

                <aside className="post-box" aria-labelledby="for-you-title">
                  <h2 id="for-you-title">
                    <Compass size={22} weight="light" aria-hidden="true" />
                    What this means for you
                  </h2>
                  <ul>
                    {post.forYou.map((f) => (
                      <li key={f}>
                        <PostText text={f} />
                      </li>
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

        {post.faqs ? (
          <FaqSection title="Quick answers" faqs={post.faqs} />
        ) : null}

        <section className="block" aria-labelledby="more-title">
          <div className="wrap post-column">
            <h2 id="more-title" className="block-title-sm" data-reveal>
              More from the blog
            </h2>
            <PostList posts={newest} className="mt-7">
              {more.map((l) => (
                <PostListLink key={l.href} {...l} />
              ))}
            </PostList>
          </div>
        </section>

        <ClosingCta title={post.cta.title} text={post.cta.text} />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
