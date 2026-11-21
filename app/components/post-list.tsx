import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { formatPostDate, type Post } from "@/content/posts";
import { order } from "./words";

// Blog posts as a list of links: the date, the title as the anchor text and
// the one line description, in the same rows as the blog index. Extra rows
// (a service page, the blog index) can follow as children. Each row reveals
// in turn as it scrolls in.
export default function PostList({
  posts,
  className,
  children,
}: {
  posts: Post[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <ul className={`nf-links post-list${className ? ` ${className}` : ""}`}>
      {posts.map((p, i) => (
        <li key={p.slug} data-reveal style={order(i % 3)}>
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
      {children}
    </ul>
  );
}

/**
 * "From the blog" on service and use case pages: a short intro beside the
 * most relevant posts and a link to the blog index. Renders nothing when
 * there are no posts for the page yet.
 */
export function FromTheBlog({ posts, text }: { posts: Post[]; text: string }) {
  if (posts.length === 0) return null;
  return (
    <section className="block" aria-labelledby="from-blog-title">
      <div className="wrap split">
        <div data-reveal>
          <h2 id="from-blog-title" className="block-title">
            From the blog
          </h2>
          <p className="muted mt-5 max-w-[44ch]">{text}</p>
        </div>
        <PostList posts={posts} className="mt-0">
          <PostListLink
            href="/blog"
            label="All posts"
            text="Every post on the blog, newest first."
          />
        </PostList>
      </div>
    </section>
  );
}

/** A plain row for the end of a PostList, such as the service or /blog. */
export function PostListLink({
  href,
  label,
  text,
}: {
  href: string;
  label: string;
  text: string;
}) {
  return (
    <li data-reveal>
      <Link href={href} className="nf-link">
        <span>
          <span className="nf-link-label">{label}</span>
          <span className="nf-link-text">{text}</span>
        </span>
        <ArrowRight size={20} weight="bold" aria-hidden="true" />
      </Link>
    </li>
  );
}
