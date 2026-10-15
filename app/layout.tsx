import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import SmoothScroll from "./components/smooth-scroll";
import "./globals.css";

// Display: Bricolage Grotesque, using its optical size and width axes so the
// big headlines get their ink-trap character. Text: Geist, calm and crisp.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const text = Geist({
  variable: "--font-text",
  subsets: ["latin"],
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
  applicationName: "Hiroshi Murakami",
  authors: [{ name: "Hiroshi Murakami", url: siteUrl }],
  keywords: [
    "AI accounting",
    "accounting automation",
    "bookkeeping automation",
    "invoice automation",
    "receipt capture",
    "bank reconciliation",
    "month end reporting",
    "Hiroshi Murakami",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hiroshi Murakami",
    locale: "en",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hiroshi Murakami. AI accounting, on autopilot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hiroshi Murakami",
  url: siteUrl,
  description,
  areaServed: "Worldwide",
  sameAs: [
    "https://www.instagram.com/hiroshimurakami013",
    "https://www.facebook.com/1252933767913035",
  ],
  knowsAbout: [
    "AI accounting automation",
    "Bookkeeping automation",
    "Invoice and receipt capture",
    "Bank reconciliation",
    "Monthly reporting",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${text.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available before paint, so scroll reveals only hide
            content when they can also show it again. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
