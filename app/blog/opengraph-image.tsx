import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "The Hiroshi Murakami blog: notes on AI for business owners and accountants.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Notes on AI for owners and accountants",
    subtitle:
      "Practical posts on new AI research and what it means for your business.",
  });
}
