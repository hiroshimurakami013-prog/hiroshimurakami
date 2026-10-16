import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  External,
  FACEBOOK,
  INSTAGRAM,
} from "../components/legal-page";

const title = "Data deletion | Hiroshi Murakami";
const description =
  "How to request deletion of any data related to the Hiroshi Murakami website or the Hiro App Meta integration.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/data-deletion" },
  openGraph: {
    type: "website",
    siteName: "Hiroshi Murakami",
    title,
    description,
    url: "/data-deletion",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Data deletion"
      updated="October 16, 2026"
      intro={
        <p>
          You can ask for any data related to you to be deleted at any time.
          This page explains what data exists and how to make a request.
        </p>
      }
    >
      <section aria-labelledby="what">
        <h2 id="what">What data there is</h2>
        <p>
          This website has no forms, accounts, cookies or analytics, so it does
          not store personal data about visitors. The Meta app &quot;Hiro
          App&quot; only publishes content to my own Instagram account and
          Facebook Page. It does not collect or store data about anyone else.
        </p>
        <p>
          The only information I might hold about you is a conversation you
          started with me by direct message on Instagram or Facebook.
        </p>
      </section>

      <section aria-labelledby="how">
        <h2 id="how">How to request deletion</h2>
        <ol>
          <li>
            Send me a message on Instagram at{" "}
            <External href={INSTAGRAM}>@hiroshimurakami013</External> or on my{" "}
            <External href={FACEBOOK}>Facebook Page</External>.
          </li>
          <li>
            Say that you would like your data deleted. Include the Instagram or
            Facebook account you used to contact me, if it is different from the
            one you are writing from.
          </li>
          <li>
            I will delete our conversation and anything else I hold about you,
            then reply to confirm it is done.
          </li>
        </ol>
        <p>
          You can also delete messages yourself at any time using the tools
          inside Instagram and Facebook.
        </p>
      </section>

      <section aria-labelledby="logs">
        <h2 id="logs">Hosting logs</h2>
        <p>
          Vercel, which hosts this site, keeps short-lived technical server logs
          under its own policies. I do not use them to identify anyone. If you
          have a question about them, you can contact me, or contact Vercel
          directly through its{" "}
          <External href="https://vercel.com/legal/privacy-policy">
            privacy policy
          </External>
          .
        </p>
      </section>

      <section aria-labelledby="more">
        <h2 id="more">More information</h2>
        <p>
          For the full picture of how information is handled, read the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
