import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Terms of Service, Hiroshi Murakami";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Terms of Service",
    subtitle: "The plain language rules for using this website.",
  });
}
