import { POSTS } from "@/content/posts";
import { serviceName } from "@/content/services";
import { listTitle } from "@/lib/llms";
import { FEED_PATH, FEED_TITLE, absoluteUrl } from "@/lib/site";

// /feed.xml: RSS 2.0 for the blog, prerendered from content/posts.ts. The
// author goes in dc:creator, because the RSS <author> element must hold an
// email address and there is none.

const xml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** An ISO date (YYYY-MM-DD) as an RFC 822 date at midnight UTC. */
const rfc822 = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toUTCString().replace("GMT", "+0000");

function body() {
  const newest = POSTS.map((p) => p.dateModified ?? p.datePublished).sort().at(-1);
  const items = POSTS.map((p) => {
    const url = xml(absoluteUrl(`/blog/${p.slug}`));
    return `    <item>
      <title>${xml(listTitle(p.title))}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.datePublished)}</pubDate>
      <dc:creator>${xml(p.author)}</dc:creator>
      <category>${xml(serviceName(p.service))}</category>
      <description>${xml(p.description)}</description>
    </item>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xml(FEED_TITLE)}</title>
    <link>${xml(absoluteUrl("/blog"))}</link>
    <atom:link href="${xml(absoluteUrl(FEED_PATH))}" rel="self" type="application/rss+xml" />
    <description>Plain-language notes on AI for business owners and accountants.</description>
    <language>en-us</language>
${newest ? `    <lastBuildDate>${rfc822(newest)}</lastBuildDate>\n` : ""}${items.join("\n")}
  </channel>
</rss>
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
