import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  External,
  FACEBOOK,
  INSTAGRAM,
} from "../components/legal-page";

const title = "Privacy Policy | Hiroshi Murakami";
const description =
  "How the Hiroshi Murakami website and the Hiro App Meta integration handle data: no cookies, no analytics, no forms, and no sale of personal data.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    siteName: "Hiroshi Murakami",
    title,
    description,
    url: "/privacy",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 16, 2026"
      intro={
        <p>
          This policy explains, in plain language, what happens to your
          information when you visit this website or interact with the content
          Hiroshi Murakami publishes on Instagram and Facebook. The short
          version: this website does not collect personal information, and the
          Meta app described below only publishes to Hiroshi&apos;s own
          accounts.
        </p>
      }
    >
      <section aria-labelledby="who">
        <h2 id="who">Who runs this website</h2>
        <p>
          This website, hiroshimurakami.vercel.app, is run by Hiroshi Murakami,
          who provides AI-automated accounting services: helping business
          owners and accountants automate tasks such as invoice capture, bank
          reconciliation and monthly reporting. In this policy, &quot;I&quot;,
          &quot;me&quot; and &quot;my&quot; mean Hiroshi Murakami.
        </p>
      </section>

      <section aria-labelledby="collect">
        <h2 id="collect">What this website collects</h2>
        <p>This website is a simple information page. It has:</p>
        <ul>
          <li>No contact forms, sign ups, accounts or log ins.</li>
          <li>No cookies set by the website.</li>
          <li>No analytics, advertising or tracking tools.</li>
          <li>No third-party scripts, embeds or tracking pixels.</li>
        </ul>
        <p>
          <strong>Hosting logs.</strong> The site is hosted by Vercel. Like any
          web host, Vercel&apos;s servers process technical information when
          your browser requests a page, such as your IP address, browser type,
          the page requested and the time of the request. This is needed to
          deliver the site and protect it from abuse. I do not use this
          information to identify visitors. Vercel handles it under its own{" "}
          <External href="https://vercel.com/legal/privacy-policy">
            privacy policy
          </External>
          .
        </p>
        <p>
          <strong>Fonts.</strong> The fonts on this site are served from the
          same domain as the site itself. Your browser does not contact Google
          or any other font provider to load them.
        </p>
        <p>
          <strong>Your browser.</strong> Some visual effects react to your
          scrolling and cursor position. This happens only inside your browser
          to animate the page. Nothing about it is stored or sent anywhere.
        </p>
      </section>

      <section aria-labelledby="links">
        <h2 id="links">Links to Instagram and Facebook</h2>
        <p>
          The site links to my Instagram profile (
          <External href={INSTAGRAM}>@hiroshimurakami013</External>) and my{" "}
          <External href={FACEBOOK}>Facebook Page</External>. These links are
          plain links, not embedded widgets, so nothing from Meta loads on this
          website. When you follow a link, you leave this site and Meta&apos;s
          own privacy policy applies to what you do there.
        </p>
        <p>
          If you send me a direct message on Instagram or Facebook, I can see
          your message and your public profile details, as with any message on
          those platforms. I use them only to reply to you. The conversation
          stays within Instagram or Facebook.
        </p>
      </section>

      <section aria-labelledby="meta">
        <h2 id="meta">The Meta Platform integration: Hiro App</h2>
        <p>
          I use Meta&apos;s APIs through an app named &quot;Hiro App&quot;. Its
          only purpose is to publish my own content to my own Instagram account
          (@hiroshimurakami013) and my own Facebook Page.
        </p>
        <ul>
          <li>
            Hiro App accesses only those accounts, which I own and manage.
          </li>
          <li>
            It does not access other people&apos;s accounts, and no one else
            logs in to it.
          </li>
          <li>
            It does not collect, store or sell any data about website visitors,
            followers or anyone else.
          </li>
          <li>
            It does not use data from Meta for advertising, profiling or any
            purpose other than publishing my posts.
          </li>
        </ul>
      </section>

      <section aria-labelledby="sale">
        <h2 id="sale">No sale of personal data</h2>
        <p>
          I do not sell, rent or trade personal data. I do not share it with
          advertisers or data brokers.
        </p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention">How long information is kept</h2>
        <p>
          This website and Hiro App do not store personal information about
          you, so there is nothing for me to keep. Hosting logs are kept by
          Vercel for a limited period under its own policies. Messages you send
          me on Instagram or Facebook remain in those platforms until they are
          deleted, and you can ask me to delete them at any time.
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security">Security</h2>
        <p>
          The site is served only over HTTPS. Access to my Instagram account,
          Facebook Page and Hiro App is limited to me, and the credentials are
          kept private and never published in the website&apos;s code. No
          system is perfectly secure, but I take reasonable care to protect the
          accounts I control.
        </p>
      </section>

      <section aria-labelledby="children">
        <h2 id="children">Children</h2>
        <p>
          This website and my services are meant for business owners and
          accountants. They are not directed at children under 13, and I do not
          knowingly collect information from children.
        </p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights">Your rights and deleting your data</h2>
        <p>
          You can ask me what information I have about you, ask me to correct
          it, or ask me to delete it. In practice, the only information I might
          hold is a conversation you started with me on Instagram or Facebook.
          The steps are on the{" "}
          <Link href="/data-deletion">data deletion page</Link>.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">Changes to this policy</h2>
        <p>
          If the website or Hiro App changes in a way that affects your
          information, I will update this page and change the date at the top.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>
          For any question about this policy or your information, send me a
          message:
        </p>
        <ul>
          <li>
            Instagram direct message:{" "}
            <External href={INSTAGRAM}>@hiroshimurakami013</External>
          </li>
          <li>
            Facebook Page message:{" "}
            <External href={FACEBOOK}>Hiroshi Murakami on Facebook</External>
          </li>
        </ul>
      </section>
    </LegalPage>
  );
}
