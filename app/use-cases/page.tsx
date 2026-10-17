import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SERVICES } from "@/content/services";
import { casesForService } from "@/content/use-cases";
import { scenarioHubJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../components/cta";
import JsonLd from "../components/json-ld";
import RevealObserver from "../components/reveal-observer";
import { SERVICE_ICONS } from "../components/service-icons";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import UseCaseTile from "../components/use-case-tile";
import Words from "../components/words";

const description =
  "Illustrative AI use cases for small businesses: missed calls, cold leads, unpaid invoices, tool sprawl and messy books, and how AI handles each one.";

export const metadata: Metadata = pageMetadata({
  title: "AI Use Cases for Small Businesses | Hiroshi Murakami",
  description,
  path: "/use-cases",
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Use cases", path: "/use-cases" },
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={scenarioHubJsonLd(description, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/use-cases" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="display page-title">
              Everyday problems, and the AI that handles them
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[56ch]">
              Missed calls, quotes nobody answers, invoices that are awkward to
              chase, five tools that do not talk to each other and books that
              are always behind. Each use case below takes one of these
              problems, explains why the usual fixes fall short and shows, step
              by step, how an AI system would handle it with a person in charge.
            </p>
            <p className="muted mt-6 max-w-[56ch]">
              These are illustrative scenarios, not client case studies. They
              describe common situations, with no client names and no promised
              results.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
            </div>
            <nav aria-label="Use cases by service" className="uc-jump">
              <ul>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a href={`#${s.slug}`} className="text-link">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {SERVICES.map((s) => {
          const Icon = SERVICE_ICONS[s.slug];
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="block uc-group"
              aria-labelledby={`${s.slug}-title`}
            >
              <div className="wrap">
                <div className="uc-group-head" data-reveal>
                  <span className="service-icon" aria-hidden="true">
                    <Icon size={24} weight="light" />
                  </span>
                  <h2 id={`${s.slug}-title`} className="h2 words">
                    <Words text={s.name} />
                  </h2>
                </div>
                <div className="uc-group-intro" data-reveal="blur">
                  <p className="lead max-w-[54ch]">{s.summary}</p>
                  <Link href={`/services/${s.slug}`} className="uc-service-link">
                    About the {s.name} service
                    <ArrowRight size={16} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="uc-grid" data-count="3">
                  {casesForService(s.slug).map((u, i) => (
                    <UseCaseTile key={u.slug} useCase={u} index={i} />
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <ClosingCta
          title="Recognise one of these problems?"
          text="Book a free AI audit. We look at where your team's time goes and which of these systems would help most, in plain language and with no obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
