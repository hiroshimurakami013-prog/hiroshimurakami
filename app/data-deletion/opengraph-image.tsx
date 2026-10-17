import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Data deletion, Hiroshi Murakami";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Data deletion",
    subtitle: "How to ask for any data related to you to be deleted.",
  });
}
