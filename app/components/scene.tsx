import Image from "next/image";
import type { SceneImage } from "@/content/images";

// A framed scene image. The frame has a fixed aspect ratio and a dark
// gradient of its own, so nothing shifts while the image loads, and a page
// without an image yet still gets a fitting placeholder.
//
// `hero` marks the one image near the top of a page: it loads eagerly with
// high fetch priority. Every other scene is lazy. `decorative` is for card
// thumbnails, where the card title already says what the picture shows.
export default function Scene({
  image,
  sizes,
  className,
  hero = false,
  decorative = false,
}: {
  image: SceneImage | undefined;
  sizes: string;
  className?: string;
  hero?: boolean;
  decorative?: boolean;
}) {
  const cls = className ? `scene ${className}` : "scene";
  if (!image) return <div className={cls} aria-hidden="true" />;
  return (
    <div className={cls} aria-hidden={decorative || undefined}>
      <Image
        src={image.src}
        alt={decorative ? "" : image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
      />
    </div>
  );
}

/** Full width of the content column. */
export const HERO_SIZES = "(min-width: 1400px) 1320px, 100vw";
/** One card in a two or four column grid. */
export const CARD_SIZES = "(min-width: 1100px) 320px, (min-width: 640px) 46vw, 92vw";
/** One tile in a two, three or four column grid. */
export const TILE_SIZES = "(min-width: 1100px) 400px, (min-width: 640px) 46vw, 92vw";
