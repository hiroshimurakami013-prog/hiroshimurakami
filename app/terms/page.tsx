import type { Metadata } from "next";
import Link from "next/link";
import { FACEBOOK, INSTAGRAM, SITE_HOST, pageMetadata } from "@/lib/site";
import LegalPage, { External } from "../components/legal-page";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Hiroshi Murakami",
  description:
    "The terms for using the Hiroshi Murakami website: what the site is, fair use, intellectual property, third-party links and the Hiro App Meta integration.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 16, 2026"
      intro={
        <p>
          These terms explain, in plain language, the rules for using this
          website. They are short because the site is simple: it is a personal
          landing page and portfolio, not an online service you sign up for.
        </p>
      }
    >
      <section aria-labelledby="acceptance">
        <h2 id="acceptance">Accepting these terms</h2>
        <p>
          This website, {SITE_HOST}, is run by Hiroshi Murakami.
          In these terms, &quot;I&quot;, &quot;me&quot; and &quot;my&quot; mean
          Hiroshi Murakami, and &quot;you&quot; means anyone visiting the site.
          By using the site, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>
      </section>

      <section aria-labelledby="what">
        <h2 id="what">What this website is</h2>
        <p>
          I build AI automation and AI accounting for businesses, such as AI
          receptionists, follow-ups, lead qualification, invoice capture, bank
          reconciliation and monthly reporting. This website describes that
          work and how to get in touch.
        </p>
        <ul>
          <li>
            The site is for general information only. It is not an offer or a
            contract for services.
          </li>
          <li>
            Nothing on the site is accounting, tax, legal or financial advice.
            Please do not rely on it as such, and speak to a qualified
            professional about your own situation.
          </li>
          <li>
            If we decide to work together, the scope, price and terms of that
            work are agreed separately and in writing. Those written terms, not
            this page, govern any services I provide.
          </li>
        </ul>
      </section>

      <section aria-labelledby="use">
        <h2 id="use">Using the site</h2>
        <p>You may browse and read the site for any lawful purpose. Please do not:</p>
        <ul>
          <li>Use the site in a way that breaks any law or regulation.</li>
          <li>
            Try to disrupt, overload or damage the site, or the servers and
            networks it runs on.
          </li>
          <li>
            Try to gain unauthorised access to the site, its hosting or any
            account connected to it.
          </li>
          <li>
            Copy or present the site&apos;s content as your own, or use it to
            mislead others.
          </li>
        </ul>
      </section>

      <section aria-labelledby="ip">
        <h2 id="ip">Intellectual property</h2>
        <p>
          The text, design, images, brand name and logo on this site belong to
          me, unless stated otherwise. You may share links to the site, but
          please do not reuse its content, brand or logo without my permission.
        </p>
        <p>
          The examples on the site are labelled &quot;Use case&quot;. They are
          illustrative scenarios of the kind of work I do, not descriptions of
          specific clients or guaranteed results.
        </p>
      </section>

      <section aria-labelledby="links">
        <h2 id="links">Links to Instagram and Facebook</h2>
        <p>
          The site links to my Instagram profile (
          <External href={INSTAGRAM}>@hiroshimurakami013</External>) and my{" "}
          <External href={FACEBOOK}>Facebook Page</External>. These are run by
          Meta, not by me. When you follow a link, you leave this site, and
          Meta&apos;s own terms and policies apply to what you do there. I am
          not responsible for the content or practices of those platforms.
        </p>
      </section>

      <section aria-labelledby="meta">
        <h2 id="meta">The Meta Platform integration: Hiro App</h2>
        <p>
          I use Meta&apos;s APIs through an app named &quot;Hiro App&quot;. It
          is used only by me, to publish my own content to my own Instagram
          account (@hiroshimurakami013) and my own Facebook Page.
        </p>
        <ul>
          <li>Hiro App is not a product or service offered to visitors.</li>
          <li>No one else logs in to it or connects their accounts to it.</li>
          <li>
            How it handles data is explained in the{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </li>
        </ul>
      </section>

      <section aria-labelledby="warranty">
        <h2 id="warranty">No warranties</h2>
        <p>
          I take care to keep the site accurate and available, but it is
          provided &quot;as is&quot; and &quot;as available&quot;. I do not
          promise that it will always be online, free of errors, or complete
          and up to date.
        </p>
      </section>

      <section aria-labelledby="liability">
        <h2 id="liability">Limitation of liability</h2>
        <p>
          To the extent the law allows, I am not liable for any loss or damage
          that comes from using this site or relying on its content. This
          includes indirect losses, such as lost profit, lost data or business
          interruption. Nothing in these terms limits any liability that cannot
          be limited by law.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">Changes to the site and these terms</h2>
        <p>
          I may change, update or remove parts of the site at any time. If I
          change these terms, I will update this page and the date at the top.
          Continuing to use the site after a change means you accept the
          updated terms.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>For any question about these terms, send me a message:</p>
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
