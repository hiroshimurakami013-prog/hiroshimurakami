import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowsLeftRight,
  BookOpenText,
  CalendarCheck,
  ChartBar,
  ChartLineUp,
  CheckCircle,
  FolderOpen,
  Invoice,
  Receipt,
} from "@phosphor-icons/react/dist/ssr";
import NavLinks from "./nav-links";
import Aurora from "./components/aurora";
import Flow from "./components/flow";
import HeroSection from "./components/hero-parallax";
import Magnetic from "./components/magnetic";
import Marquee from "./components/marquee";
import ProcessSteps from "./components/process-steps";
import RevealObserver from "./components/reveal-observer";
import ScrollWords from "./components/scroll-words";
import SiteFooter, { FACEBOOK, INSTAGRAM } from "./components/site-footer";
import TiltCard from "./components/tilt-card";

const capabilities = [
  "Invoice capture",
  "Receipt scanning",
  "Expense coding",
  "Bank reconciliation",
  "Month end close",
  "Plain language reports",
  "Payables follow up",
  "Accountant handoff",
];

const services = [
  {
    title: "Invoices and receipts",
    text: "AI reads incoming invoices and receipts, pulls out the details and codes them to the right accounts, ready for your review.",
    icon: Receipt,
  },
  {
    title: "Bookkeeping",
    text: "Day to day entries are prepared by AI and checked by a person. Fewer keystrokes, fewer slips, a cleaner ledger.",
    icon: BookOpenText,
  },
  {
    title: "Bank reconciliation",
    text: "Transactions are matched to your records automatically. You only look at the few items that need a human decision.",
    icon: ArrowsLeftRight,
  },
  {
    title: "Reporting",
    text: "Monthly numbers gathered into a clear, readable pack, so you can see how the business is doing without digging.",
    icon: ChartBar,
  },
];

// Placeholder projects until the owner supplies real case studies. Each art
// panel has its own light so the grid never reads as one repeated card.
const projects = [
  {
    title: "Invoice capture and coding automation",
    text: "Supplier invoices arrive by email or upload, AI extracts the fields and suggests the coding, and a person approves.",
    tags: ["Invoices", "AI extraction"],
    icon: Invoice,
    art: {
      "--art-bg": "linear-gradient(135deg, #2a1410, #12141d 70%)",
      "--art-orb": "#ff6b4a",
      "--orb-x": "50%",
      "--orb-y": "-20%",
    },
  },
  {
    title: "Bank reconciliation on autopilot",
    text: "Bank lines are matched to ledger entries by rules and AI, with a short exceptions list left for review.",
    tags: ["Reconciliation", "Matching"],
    icon: ArrowsLeftRight,
    art: {
      "--art-bg": "linear-gradient(160deg, #0c2422, #11141c 75%)",
      "--art-orb": "#2fb6a6",
      "--orb-x": "35%",
      "--orb-y": "-10%",
    },
  },
  {
    title: "Monthly reporting pack",
    text: "A repeatable month end pack: profit and loss, cash position and plain language notes, assembled for you.",
    tags: ["Reporting", "Month end"],
    icon: ChartLineUp,
    art: {
      "--art-bg": "linear-gradient(150deg, #121a2e, #10131b 75%)",
      "--art-orb": "#4a86c5",
      "--orb-x": "45%",
      "--orb-y": "0%",
    },
  },
  {
    title: "Receipt capture for small teams",
    text: "Snap a receipt, send it, and AI files it against the right expense with the right category.",
    tags: ["Receipts", "Expenses"],
    icon: Receipt,
    art: {
      "--art-bg": "linear-gradient(150deg, #261a12, #12131a 75%)",
      "--art-orb": "#ffa45c",
      "--orb-x": "40%",
      "--orb-y": "-25%",
    },
  },
  {
    title: "Accounts payable follow up",
    text: "AI tracks due dates and drafts friendly reminders, so bills are paid on time and nothing slips through.",
    tags: ["Payables", "Workflow"],
    icon: CalendarCheck,
    art: {
      "--art-bg": "linear-gradient(150deg, #0e2219, #11141b 75%)",
      "--art-orb": "#3ccf9b",
      "--orb-x": "50%",
      "--orb-y": "-15%",
    },
  },
  {
    title: "Accountant handoff workspace",
    text: "One tidy place where owners drop documents and accountants pick up clean, pre-sorted records.",
    tags: ["Collaboration", "Documents"],
    icon: FolderOpen,
    art: {
      "--art-bg":
        "linear-gradient(110deg, #22130f, #10131b 45%, #0c1f22 100%)",
      "--art-orb": "#ff6b4a",
      "--orb-x": "60%",
      "--orb-y": "-60%",
    },
  },
];

const steps = [
  {
    n: "1",
    title: "Audit",
    text: "We look at how your books, invoices and reports work today and find the repetitive tasks that cost you the most time.",
  },
  {
    n: "2",
    title: "Automate",
    text: "We set up AI workflows for those tasks, with a person always reviewing before anything is final.",
  },
  {
    n: "3",
    title: "Refine",
    text: "We check the results together, tune the rules and keep improving, so the system fits the way you work.",
  },
];

const principles = [
  "Practical AI",
  "Plain language",
  "A person checks every result",
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
        <span>Book a free AI accounting audit</span>
        <span className="sr-only"> (opens Instagram in a new tab)</span>
        <span className="btn-icon" aria-hidden="true">
          <ArrowUpRight size={18} weight="bold" />
        </span>
      </a>
    </Magnetic>
  );
}

function Symbol({ size }: { size: number }) {
  return (
    <Image
      src="/symbol.png"
      alt=""
      width={259}
      height={249}
      style={{ width: size, height: "auto" }}
      priority
    />
  );
}

export default function Home() {
  return (
    <>
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
                <Symbol size={22} />
              </span>
              <span className="hidden sm:inline">Hiroshi Murakami</span>
            </a>
            <nav aria-label="Main">
              <NavLinks />
            </nav>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <HeroSection background={<Aurora />}>
          <h1 id="hero-title" className="display hero-title">
            <span className="line-mask">
              <span className="line-inner" style={order(0)}>
                AI accounting,
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={order(1)}>
                on autopilot<span className="dot">.</span>
              </span>
            </span>
          </h1>
          <div className="mt-8 flex flex-col gap-9 md:mt-11 md:gap-11">
            <p className="lead hero-fade max-w-[36rem]" style={order(0)}>
              I help businesses automate bookkeeping, invoices, reconciliation
              and reporting with AI. Less typing, fewer errors, more time
              back.
            </p>
            <div
              className="hero-fade flex flex-wrap items-center gap-x-7 gap-y-4"
              style={order(1)}
            >
              <PrimaryCta />
              <a href="#work" className="text-link font-medium">
                See the work
              </a>
            </div>
          </div>
        </HeroSection>

        <Marquee items={capabilities} />

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="section"
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
              text="I work with business owners and accountants who are tired of manual accounting work. Using AI, I turn the slow, repetitive parts of the job into steady workflows that run in the background."
            />
            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
              <p className="lead" data-reveal="blur">
                The idea is simple: practical AI, explained in plain language,
                with a person checking the results. You keep control. The
                machine does the typing.
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
              <Words text="How the AI accounting flow works" />
            </h2>
          </div>
          <Flow />
        </section>

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
              <Words text="Built around the tasks that eat your week" />
            </h2>
            <p className="lead mt-6 max-w-[46ch]" data-reveal="blur">
              AI-automated accounting for the four jobs that take the most
              hours: documents, entries, matching and reporting.
            </p>
            <ul className="services-list mt-14 md:mt-20">
              {services.map((s, i) => (
                <li
                  key={s.title}
                  className="service"
                  data-glow
                  data-reveal
                  style={order(i)}
                >
                  <span className="service-icon" aria-hidden="true">
                    <s.icon size={24} weight="light" />
                  </span>
                  <h3 className="service-title">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="section pt-0"
        >
          <div className="wrap">
            <h2
              id="work-title"
              className="h2 words max-w-[16ch]"
              data-reveal
            >
              <Words text="The kinds of projects I build" />
            </h2>
            <p className="lead mt-6 max-w-[44ch]" data-reveal="blur">
              Detailed case studies are on the way. Until then, these are the
              workflows I set up most often.
            </p>
            <ul className="work-grid mt-14 md:mt-20">
              {projects.map((p, i) => (
                <li key={p.title} data-reveal style={order(i % 3)}>
                  <TiltCard className="card" style={p.art as CSSProperties}>
                    <div className="card-art" aria-hidden="true">
                      <span className="card-art-orb" />
                      <span className="card-art-grid" />
                      <span className="card-art-icon">
                        <p.icon size={44} weight="thin" />
                      </span>
                    </div>
                    <div className="card-body">
                      <span className="case-label">Case study</span>
                      <h3 className="card-title">{p.title}</h3>
                      <p className="card-text">{p.text}</p>
                      <ul className="card-tags" aria-label="Topics">
                        {p.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          aria-labelledby="process-title"
          className="section pt-0"
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
              <p className="lead mt-8 max-w-[44ch]">
                Tell me where your accounting time goes. I will show you what
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
                Send a message on Instagram. No forms, no pressure.
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
