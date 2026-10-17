import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Asterisk,
  Calculator,
  ChatsCircle,
  CheckCircle,
  Funnel,
  Headset,
  PaperPlaneTilt,
  Robot,
  TreeStructure,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { LOCATIONS } from "@/content/locations";
import { SERVICES, type ServiceSlug } from "@/content/services";
import { USE_CASE_HIGHLIGHTS } from "@/content/use-cases";
import { HOME_DESCRIPTION, homeJsonLd } from "@/lib/schema";
import { CTA_LABEL, FACEBOOK, INSTAGRAM, pageMetadata } from "@/lib/site";
import NavLinks from "./nav-links";
import Aurora from "./components/aurora";
import Flow from "./components/flow";
import HeroSection from "./components/hero-parallax";
import JsonLd from "./components/json-ld";
import Magnetic from "./components/magnetic";
import Marquee from "./components/marquee";
import ProcessSteps from "./components/process-steps";
import RevealObserver from "./components/reveal-observer";
import ScrollWords from "./components/scroll-words";
import SiteFooter from "./components/site-footer";

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

const serviceIcons: Record<ServiceSlug, Icon> = {
  "ai-receptionist": Headset,
  "custom-voice-agents": Waveform,
  "ai-agents": Robot,
  "ai-follow-ups": PaperPlaneTilt,
  "ai-lead-qualification": Funnel,
  "custom-crm-and-workflows": TreeStructure,
  "ai-customer-support": ChatsCircle,
  "ai-accounting": Calculator,
};

const serviceName = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s.name]),
) as Record<ServiceSlug, string>;

const steps = [
  {
    n: "1",
    title: "Audit",
    text: "We look at how calls, leads, follow-ups and the books are handled today, and find the repetitive work that costs you the most time.",
  },
  {
    n: "2",
    title: "Build",
    text: "I build AI workflows for those tasks and connect them to the tools you already use, with a person reviewing anything that matters.",
  },
  {
    n: "3",
    title: "Refine",
    text: "We check the results together, tune the rules and keep improving, so the system fits the way your business works.",
  },
];

const principles = [
  "Practical AI",
  "Plain language",
  "A person checks what matters",
];

const order = (n: number) => ({ "--i": n }) as CSSProperties;

// Splits a heading into words for the staggered reveal. The full text stays
// in the DOM as real words, so it reads normally to everyone.
function Words({ text, dot = true }: { text: string; dot?: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w" style={{ "--w": i } as CSSProperties}>
            {w}
            {dot && i === words.length - 1 ? (
              <span className="dot">.</span>
            ) : null}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

function PrimaryCta() {
  return (
    <Magnetic>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <span>{CTA_LABEL}</span>
        <span className="sr-only"> (opens Instagram in a new tab)</span>
        <span className="btn-icon" aria-hidden="true">
          <ArrowUpRight size={18} weight="bold" />
        </span>
      </a>
    </Magnetic>
  );
}

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
                <Image src="/symbol.png" alt="" width={22} height={21} />
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
            <div
              className="hero-fade flex flex-wrap items-center gap-x-7 gap-y-4"
              style={order(0)}
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
              {SERVICES.map((s, i) => {
                const ServiceIcon = serviceIcons[s.slug];
                return (
                  <li
                    key={s.slug}
                    className="svc-card"
                    data-glow
                    data-reveal
                    style={order(i % 4)}
                  >
                    <span className="service-icon" aria-hidden="true">
                      <ServiceIcon size={24} weight="light" />
                    </span>
                    <h3 className="svc-title">{s.name}</h3>
                    <p className="svc-text">{s.summary}</p>
                  </li>
                );
              })}
            </ul>
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
              {USE_CASE_HIGHLIGHTS.map((u, i) => (
                <li
                  key={u.title}
                  className="uc-tile"
                  data-reveal
                  style={order(i % 4)}
                >
                  <span className="uc-meta">
                    <span className="case-label">Use case</span>
                    <span className="uc-service">{serviceName[u.service]}</span>
                  </span>
                  <h3 className="uc-title">{u.title}</h3>
                  <p className="uc-text">{u.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Los Angeles area */}
        <section id="area" aria-labelledby="area-title" className="area">
          <div className="wrap area-inner" data-reveal>
            <h2 id="area-title" className="h3 area-title">
              Serving businesses across Los Angeles County, remote-first
              <span className="dot">.</span>
            </h2>
            <p className="area-text">
              Audits, setup and check-ins happen online, so I work with teams
              anywhere in the county, and with clients worldwide.
            </p>
          </div>
          <div className="ticker" aria-label="Cities served" role="region">
            <div className="ticker-track">
              {[false, true].map((hidden) => (
                <ul
                  key={String(hidden)}
                  className="ticker-group"
                  aria-hidden={hidden || undefined}
                >
                  {LOCATIONS.map((l) => (
                    <li key={l.slug}>{l.name}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

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
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="contact"
          aria-labelledby="cta-title"
          className="pb-[clamp(3rem,8vw,6rem)]"
        >
          <div className="wrap">
            <div className="cta" data-glow data-reveal>
              <span className="cta-orb cta-orb-a" aria-hidden="true" />
              <span className="cta-orb cta-orb-b" aria-hidden="true" />
              <span className="cta-orb cta-orb-c" aria-hidden="true" />
              <h2
                id="cta-title"
                className="display cta-title words"
                data-reveal
              >
                <Words text="Ready to hand off the busywork?" dot={false} />
              </h2>
              <p className="lead mt-8 max-w-[46ch]">
                Tell me where your team&apos;s time goes. I will show you what
                AI can take off your plate, free of charge.
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
                <PrimaryCta />
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Message on Facebook
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <p className="mt-7 text-[0.95rem] text-text-2">
                Send a message on Instagram or Facebook. No forms, no
                pressure.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <RevealObserver />
    </>
  );
}
