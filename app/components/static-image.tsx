import { getImageProps, type ImageProps } from "next/image";

// The same <img> that next/image renders, without its client component,
// for the small logo mark in the headers and footer. next/image hydrates
// every image and ships its code to the browser, but the mark needs nothing
// from the client, so this server component renders the attributes from
// getImageProps() (srcset, loading, decoding and the rest, from the same
// image config) as plain HTML. Pages without scene images, such as the
// legal pages, then load no image code at all.
//
// The scene images (components/scene.tsx) keep next/image: in screenshot
// comparisons one lazy thumbnail rasterised slightly differently without it.
export default function StaticImage(props: ImageProps) {
  const { props: img } = getImageProps(props);
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- alt is required by ImageProps and passed through
  return <img {...img} data-nimg="1" />;
}
