import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://hiroshimurakami.vercel.app";
const title = "Hiroshi Murakami | AI accounting automation for businesses";
const description =
  "Hiroshi Murakami helps business owners and accountants automate bookkeeping, invoices, receipts, reconciliation and reporting with AI. Book a free AI accounting audit.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "AI accounting",
    "accounting automation",
    "bookkeeping automation",
    "invoice automation",
    "bank reconciliation",
    "Hiroshi Murakami",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hiroshi Murakami",
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hiroshi Murakami logo and the line: AI accounting, on autopilot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#E9EDF0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
