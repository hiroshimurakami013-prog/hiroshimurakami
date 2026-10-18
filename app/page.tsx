import type { Metadata } from "next";
import StaticImage from "./components/static-image";
import Link from "next/link";
import { ArrowRight, Asterisk, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/content/locations";
import { PROCESS_STEPS, SERVICES } from "@/content/services";
import { USE_CASE_HIGHLIGHTS } from "@/content/use-cases";
import { HOME_DESCRIPTION, homeJsonLd } from "@/lib/schema";
import { CTA_LABEL, INSTAGRAM, pageMetadata } from "@/lib/site";
import NavLinks from "./nav-links";
import AreaBand from "./components/area-band";
import Aurora from "./components/aurora";
import { ClosingCta, PrimaryCta } from "./components/cta";
import Flow from "./components/flow";
import HeroSection from "./components/hero-parallax";
import JsonLd from "./components/json-ld";
import Marquee from "./components/marquee";
import ProcessSteps from "./components/process-steps";
import RevealObserver from "./components/reveal-observer";
import ScrollWords from "./components/scroll-words";
import ServiceCard from "./components/service-card";
import SiteFooter from "./components/site-footer";
import UseCaseTile from "./components/use-case-tile";
import Words, { order } from "./components/words";

export const metadata: Metadata = pageMetadata({
  title: "AI Automation and AI Accounting | Hiroshi Murakami",
  description: HOME_DESCRIPTION,
  path: "/",
});

const capabilities = [
  "AI receptionist",
  "Voice agents",
  "Follow-ups",
  "Lead qualification",
  "Custom CRM",
  "Customer support",
  "Invoice capture",
  "Bank reconciliation",
  "Month-end reports",
];

const principles = [
  "Practical AI",
  "Plain language",
  "A person checks what matters",
];

// One headline use case per service, in the same order as the services.
const highlights = SERVICES.flatMap((s) =>
  USE_CASE_HIGHLIGHTS.filter((u) => u.service === s.slug),
);

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap">
          <div className="nav-pill">
            <a
              href="#main"
              className="brand-link"
              aria-label="Hiroshi Murakami, back to top"
            >
              <span className="symbol-tile" aria-hidden="true">
                <StaticImage src="/symbol.png" alt="" width={22} height={21} />
              </span>
              <span className="hidden md:inline">Hiroshi Murakami</span>
            </a>
            <nav aria-label="Main" className="flex items-center gap-1">
              <NavLinks />
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                <span className="sm:hidden">Free AI audit</span>
                <span className="hidden sm:inline">{CTA_LABEL}</span>
                <span className="sr-only"> (opens Instagram in a new tab)</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <HeroSection background={<Aurora />}>
          <h1 id="hero-title" className="display hero-title">
            <span className="line-mask">
              <span className="line-inner" style={order(0)}>
                AI that answers,
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={order(1)}>
                follows up and
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={order(2)}>
                keeps the books<span className="dot">.</span>
              </span>
            </span>
          </h1>
          <div className="mt-8 flex flex-col gap-9 md:mt-11 md:gap-11">
            {/* Static on purpose: this paragraph is the LCP element, so it
                paints with the first frame instead of fading in. */}
            <p className="lead max-w-[40rem]">
              I build AI automation and AI accounting for small and mid-size
              businesses: receptionists that pick up, follow-ups that go out
              on time and books that stay reconciled. Serving Los Angeles
              County and clients worldwide, remote-first.
            </p>
            {/* The last part of the intro: the page starts its scripts once
                this has faded in (see scripts/optimize-output.mjs). */}
            <div
              className="hero-fade flex flex-wrap items-center gap-x-7 gap-y-4"
              style={order(0)}
              data-boot-after
            >
              <PrimaryCta />
              <a href="#services" className="text-link font-medium">
                See the services
              </a>
            </div>
          </div>
        </HeroSection>

        <Marquee
          items={capabilities}
          separator={
            <Asterisk
              className="marquee-star"
              size={28}
              weight="bold"
              aria-hidden="true"
            />
          }
        />

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="section"
        >
          <div className="wrap">
            <h2
              id="services-title"
              className="h2 words max-w-[17ch]"
              data-reveal
            >
              <Words text="Eight ways AI takes work off your plate" />
            </h2>
            <p className="lead mt-6 max-w-[50ch]" data-reveal="blur">
              AI automation for the calls, messages and handoffs that slow a
              team down, and AI accounting for the books. Each system is built
              around how your business already works.
            </p>
            <ul className="svc-grid mt-14 md:mt-20">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </ul>
            <p className="mt-10 md:mt-12" data-reveal>
              <Link
                href="/services"
                className="text-link inline-flex items-center gap-2 font-medium"
              >
                Compare all AI services
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="section pt-0"
        >
          <div className="wrap">
            <h2
              id="about-title"
              className="h2 words max-w-[16ch]"
              data-reveal
            >
              <Words text="Hi, I am Hiroshi Murakami" />
            </h2>
            <ScrollWords
              className="statement mt-10 max-w-[30ch] md:mt-14"
              text="I work with owners and managers who are tired of doing the same manual work every week. Using AI, I turn the slow, repetitive parts of the job into steady workflows that run in the background."
            />
            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
              <p className="lead" data-reveal="blur">
                The idea is simple: practical AI, explained in plain language,
                with a person checking the results that matter. You keep
                control. The machine does the busywork.
              </p>
              <ul
                className="principles md:flex-col md:justify-center"
                aria-label="Principles"
                data-reveal="blur"
                style={order(1)}
              >
                {principles.map((p) => (
                  <li key={p}>
                    <CheckCircle size={22} weight="fill" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The flow, pinned */}
        <section id="flow" aria-labelledby="flow-title">
          <div className="wrap">
            <h2
              id="flow-title"
              className="h2 words max-w-[18ch]"
              data-reveal
            >
              <Words text="How an AI workflow runs, from inbox to done" />
            </h2>
            <p className="lead mt-6 max-w-[50ch]" data-reveal="blur">
              The same pattern works for a missed call, a new lead or a
              supplier invoice: work comes in, AI does the first pass, and a
              person signs off on what matters.
            </p>
          </div>
          <Flow />
        </section>

        {/* Use cases */}
        <section
          id="use-cases"
          aria-labelledby="use-cases-title"
          className="section"
        >
          <div className="wrap">
            <h2
              id="use-cases-title"
              className="h2 words max-w-[17ch]"
              data-reveal
            >
              <Words text="Problems these systems are built to solve" />
            </h2>
            <p className="lead mt-6 max-w-[50ch]" data-reveal="blur">
              Illustrative scenarios, not client case studies. Each one is a
              common problem and the AI workflow that handles it.
            </p>
            <ul className="uc-grid mt-14 md:mt-20">
              {highlights.map((u, i) => (
                <UseCaseTile key={u.slug} useCase={u} index={i % 4} showService />
              ))}
            </ul>
            <p className="mt-10" data-reveal>
              <Link href="/use-cases" className="text-link font-medium">
                See all 24 use cases, grouped by service
              </Link>
            </p>
          </div>
        </section>

        {/* Los Angeles area */}
        <AreaBand cities={LOCATIONS} />

        {/* Process */}
        <section
          id="process"
          aria-labelledby="process-title"
          className="section"
        >
          <div className="wrap">
            <h2
              id="process-title"
              className="h2 words max-w-[17ch]"
              data-reveal
            >
              <Words text="Three steps, with a person checking along the way" />
            </h2>
            <div className="mt-14 md:mt-24">
              <ProcessSteps steps={PROCESS_STEPS} />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <ClosingCta />
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
