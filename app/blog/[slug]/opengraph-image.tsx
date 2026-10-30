import { POSTS, formatPostDate, getPost } from "@/content/posts";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "A blog post by Hiroshi Murakami on AI for business owners and accountants.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  return renderOgImage({
    title: post?.title ?? "Blog",
    subtitle: post
      ? `By ${post.author}, ${formatPostDate(post.datePublished)}.`
      : "Notes on AI from Hiroshi Murakami.",
  });
}
