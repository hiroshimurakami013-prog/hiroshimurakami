import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { ROBOTS, SITE_NAME, SITE_URL } from "@/lib/site";
import SmoothScroll from "./components/smooth-scroll";
import "./globals.css";

// Display: Bricolage Grotesque, using its optical size and width axes so the
// big headlines get their ink-trap character. Text: Geist, calm and crisp.
// Both are variable fonts, so one file each covers every weight in use.
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

// Defaults only. Every page sets its own title, description and canonical
// through pageMetadata() in lib/site.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  robots: ROBOTS,
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
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
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
