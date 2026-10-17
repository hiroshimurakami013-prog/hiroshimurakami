import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PROCESS_STEPS, SERVICES } from "@/content/services";
import { casesForService } from "@/content/use-cases";
import { servicesHubJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import Breadcrumbs, { type Crumb } from "../components/breadcrumbs";
import { ClosingCta, PrimaryCta } from "../components/cta";
import JsonLd from "../components/json-ld";
import ProcessSteps from "../components/process-steps";
import RevealObserver from "../components/reveal-observer";
import ServiceCard from "../components/service-card";
import { SERVICE_ICONS } from "../components/service-icons";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import Words, { order } from "../components/words";

const description =
  "AI automation and AI accounting services for small and mid-size businesses: receptionists, voice agents, follow-ups, lead qualification, CRMs and books.";

export const metadata: Metadata = pageMetadata({
  title: "AI Automation and AI Accounting Services | Hiroshi Murakami",
  description,
  path: "/services",
});

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

const accounting = SERVICES.filter((s) => s.group === "accounting");
const automation = SERVICES.filter((s) => s.group === "automation");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesHubJsonLd(description, crumbs)} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader current="/services" />

      <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
          <div className="legal-glow" aria-hidden="true" />
          <div className="wrap">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="display page-title">
              AI services for the work that slows your team down
              <span className="dot">.</span>
            </h1>
            <p className="lead mt-8 max-w-[52ch]">
              Two kinds of help, one approach. AI automation handles the calls,
              messages, leads and handoffs that eat your team&apos;s day. AI
              accounting keeps the books captured, coded and reconciled. Each
              system is built around how your business already works, and a
              person checks the results that matter.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <PrimaryCta />
              <a href="#how-we-work" className="text-link font-medium">
                How we work together
              </a>
            </div>
          </div>
        </section>

        {/* AI accounting */}
        <section className="block" aria-labelledby="accounting-title">
          <div className="wrap">
            <h2
              id="accounting-title"
              className="h2 words max-w-[18ch]"
              data-reveal
            >
              <Words text="AI accounting" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              For owners, finance staff and accountants who want current books
              without the data entry.
            </p>
            {accounting.map((s) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <div
                  key={s.slug}
                  className="feature-card svc-card"
                  data-glow
                  data-reveal
                >
                  <div>
                    <span className="service-icon" aria-hidden="true">
                      <Icon size={26} weight="light" />
                    </span>
                    <h3 className="svc-title">
                      <Link href={`/services/${s.slug}`} className="svc-link">
                        {s.name}
                      </Link>
                    </h3>
                    <p className="svc-text">{s.summary}</p>
                    <span className="svc-more" aria-hidden="true">
                      See how AI accounting works
                      <ArrowRight size={16} weight="bold" />
                    </span>
                  </div>
                  <ul className="feature-list" aria-label="What it covers">
                    {casesForService(s.slug).map((u) => (
                      <li key={u.slug}>
                        <CheckCircle size={18} weight="fill" aria-hidden="true" />
                        {u.title}
                      </li>
                    ))}
                    <li>
                      <CheckCircle size={18} weight="fill" aria-hidden="true" />
                      Accounts payable reminders and supplier follow-ups
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI automation */}
        <section className="block" aria-labelledby="automation-title">
          <div className="wrap">
            <h2
              id="automation-title"
              className="h2 words max-w-[18ch]"
              data-reveal
            >
              <Words text="AI automation" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              For the front office: every call answered, every lead replied to,
              every follow-up sent and every tool connected.
            </p>
            <ul className="svc-grid mt-12 md:mt-16">
              {automation.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
              <li className="audit-tile" data-reveal style={order(3)}>
                <div>
                  <h3>Not sure where to start?</h3>
                  <p>
                    Tell me where your team&apos;s time goes. The free audit
                    points to the one or two systems that would help most.
                  </p>
                </div>
                <PrimaryCta />
              </li>
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section
          id="how-we-work"
          className="block"
          aria-labelledby="how-we-work-title"
        >
          <div className="wrap">
            <h2
              id="how-we-work-title"
              className="h2 words max-w-[18ch]"
              data-reveal
            >
              <Words text="How we work together" />
            </h2>
            <p className="lead mt-6 max-w-[54ch]" data-reveal="blur">
              Every service follows the same three steps. You stay in control,
              you approve what the AI may do, and you own the systems and the
              data.
            </p>
            <div className="mt-14 md:mt-20">
              <ProcessSteps steps={PROCESS_STEPS} />
            </div>
          </div>
        </section>

        <ClosingCta
          title="Find the work AI can take off your plate"
          text="Book a free AI audit. We look at your calls, leads, follow-ups and books together, and you get a plain-language plan, with no obligation."
        />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
