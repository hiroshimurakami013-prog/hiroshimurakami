import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "AI automation and AI accounting for businesses across the Los Angeles area, remote-first, from Hiroshi Murakami.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "AI for businesses across Los Angeles County",
    subtitle:
      "Ten city pages, one remote-first way of working. Audits, setup and check-ins happen online.",
  });
}
