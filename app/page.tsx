import type { CSSProperties } from "react";
import Image from "next/image";
import NavLinks from "./nav-links";

const INSTAGRAM = "https://www.instagram.com/hiroshimurakami013";
const FACEBOOK = "https://www.facebook.com/1252933767913035";

const icons = {
  invoice: "M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6",
  ledger: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM9 8h6M9 12h6",
  match: "M4 8h13l-3-3M20 16H7l3 3",
  report: "M5 20V10M12 20V4M19 20v-7",
  arrow: "M7 17 17 7M9 7h8v8",
};

const services = [
  {
    title: "invoices and receipts",
    text: "AI reads incoming invoices and receipts, pulls out the details and codes them to the right accounts, ready for your review.",
    icon: icons.invoice,
  },
  {
    title: "bookkeeping",
    text: "Day to day entries are prepared by AI and checked by a person. Fewer keystrokes, fewer slips, a cleaner ledger.",
    icon: icons.ledger,
  },
  {
    title: "bank reconciliation",
    text: "Transactions are matched to your records automatically. You only look at the few items that need a human decision.",
    icon: icons.match,
  },
  {
    title: "reporting",
    text: "Monthly numbers gathered into a clear, readable pack, so you can see how the business is doing without digging.",
    icon: icons.report,
  },
];

const projects = [
  {
    title: "Invoice capture and coding automation",
    text: "Supplier invoices arrive by email or upload, AI extracts the fields and suggests the coding, and a person approves.",
    tags: ["Invoices", "AI extraction"],
  },
  {
    title: "Bank reconciliation on autopilot",
    text: "Bank lines are matched to ledger entries by rules and AI, with a short exceptions list left for review.",
    tags: ["Reconciliation", "Matching"],
  },
  {
    title: "Monthly reporting pack",
    text: "A repeatable month end pack: profit and loss, cash position and plain language notes, assembled for you.",
    tags: ["Reporting", "Month end"],
  },
  {
    title: "Receipt capture for small teams",
    text: "Snap a receipt, send it, and AI files it against the right expense with the right category.",
    tags: ["Receipts", "Expenses"],
  },
  {
    title: "Accounts payable follow up",
    text: "AI tracks due dates and drafts friendly reminders, so bills are paid on time and nothing slips through.",
    tags: ["Payables", "Workflow"],
  },
  {
    title: "Accountant handoff workspace",
    text: "One tidy place where owners drop documents and accountants pick up clean, pre-sorted records.",
    tags: ["Collaboration", "Documents"],
  },
];

const steps = [
  {
    n: "1",
    title: "audit",
    text: "We look at how your books, invoices and reports work today and find the repetitive tasks that cost you the most time.",
  },
  {
    n: "2",
    title: "automate",
    text: "We set up AI workflows for those tasks, with a person always reviewing before anything is final.",
  },
  {
    n: "3",
    title: "refine",
    text: "We check the results together, tune the rules and keep improving, so the system fits the way you work.",
  },
];

// Chips around the hero orb, placed as a percentage of the orb box.
const orbChips = [
  { label: "invoices", icon: icons.invoice, x: 16, y: 20 },
  { label: "reconciliation", icon: icons.match, x: 84, y: 36 },
  { label: "bookkeeping", icon: icons.ledger, x: 15, y: 74 },
  { label: "reports", icon: icons.report, x: 78, y: 90 },
];

const principles = [
  "Practical AI",
  "Plain language",
  "A person checks every result",
];

function Icon({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

// Delay or reveal order, passed to the CSS motion rules.
const order = (prop: "--d" | "--i", n: number) =>
  ({ [prop]: n }) as CSSProperties;

function PrimaryCta() {
  return (
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      <span>Book a free AI accounting audit</span>
      <span className="sr-only"> (opens Instagram in a new tab)</span>
      <span className="btn-icon" aria-hidden="true">
        <Icon d={icons.arrow} size={18} />
      </span>
    </a>
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
      loading="eager"
    />
  );
}

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header container-page">
        <div className="nav-pill">
          <a
            href="#top"
            className="brand-link"
            aria-label="Hiroshi Murakami, back to top"
          >
            <span className="symbol-tile w-10" aria-hidden="true">
              <Symbol size={20} />
            </span>
            <span className="hidden sm:inline">Hiroshi Murakami</span>
          </a>
          <nav aria-label="Main">
            <NavLinks />
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="container-page pb-[var(--section)] pt-14 md:pt-20 lg:pt-24"
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
            <div>
              <p className="kicker rise" style={order("--d", 0)}>
                AI for accountants and business owners
              </p>
              <h1
                id="hero-title"
                className="display rise mt-7 text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]"
                style={order("--d", 1)}
              >
                <span className="caps">AI</span> accounting, on autopilot
                <span className="text-ember">.</span>
              </h1>
              <p
                className="rise mt-7 max-w-[34rem] text-[17px] leading-[1.65] text-ink-soft sm:text-lg"
                style={order("--d", 2)}
              >
                I help businesses automate bookkeeping, invoices, receipts,
                reconciliation and reporting with AI. Less typing. Fewer
                errors. More time back.
              </p>
              <div
                className="rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
                style={order("--d", 3)}
              >
                <PrimaryCta />
                <a href="#work" className="btn btn-soft">
                  See the work
                </a>
              </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-0" aria-hidden="true">
              <div className="orb">
                <div className="orb-disc raised">
                  <div className="orb-ring inset">
                    <div className="orb-tile symbol-tile">
                      <Symbol size={84} />
                    </div>
                  </div>
                </div>
                {orbChips.map((c, i) => (
                  <span
                    key={c.label}
                    className="orb-chip"
                    style={{
                      left: `${c.x}%`,
                      top: `${c.y}%`,
                      ...order("--d", i),
                    }}
                  >
                    <Icon d={c.icon} size={16} />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="container-page pb-[var(--section)]"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
            <h2 id="about-title" className="section-title reveal">
              about
            </h2>
            <div>
              <p className="statement reveal max-w-[32ch]">
                I am Hiroshi Murakami. I work with business owners and
                accountants who are tired of manual accounting work.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-10">
                <p className="prose-soft reveal" style={order("--i", 1)}>
                  Using AI, I turn the slow, repetitive parts of the job into
                  steady workflows that run in the background.
                </p>
                <p className="prose-soft reveal" style={order("--i", 2)}>
                  The idea is simple: practical AI, explained in plain
                  language, with a person checking the results. You keep
                  control. The machine does the typing.
                </p>
              </div>
              <ul
                className="reveal mt-10 flex flex-wrap gap-3"
                aria-label="Principles"
                style={order("--i", 3)}
              >
                {principles.map((p) => (
                  <li
                    key={p}
                    className="inset-sm rounded-full px-4 py-2 text-[13px] font-medium"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="container-page pb-[var(--section)]"
        >
          <div className="raised reveal rounded-[var(--radius-plate)] px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <h2 id="services-title" className="section-title">
              services
            </h2>
            <p className="statement mt-4 max-w-[30ch]">
              AI-automated accounting, built around the tasks that eat your
              week.
            </p>
            <ul className="mt-12 grid gap-x-14 gap-y-11 md:grid-cols-2">
              {services.map((s, i) => (
                <li key={s.title} className="reveal" style={order("--i", i % 2)}>
                  <div className="flex items-center gap-4">
                    <span className="inset-sm grid h-12 w-12 flex-none place-items-center rounded-[var(--radius-well)] text-steel">
                      <Icon d={s.icon} />
                    </span>
                    <h3 className="text-lg font-semibold tracking-[0.04em]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="prose-soft mt-4">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="container-page pb-[var(--section)]"
        >
          <h2 id="work-title" className="section-title reveal">
            selected work
          </h2>
          <p className="statement reveal mt-4 max-w-[30ch]">
            The kinds of projects I build. Detailed case studies are on the
            way.
          </p>
          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((p, i) => (
              <li key={p.title} className="reveal" style={order("--i", i % 3)}>
                <article className="raised-md flex h-full flex-col rounded-[var(--radius-card)] p-7 sm:p-8">
                  <span className="inset-sm w-fit rounded-full px-3 py-1 text-xs font-medium text-ink-soft">
                    Case study
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-ink-soft text-pretty">
                    {p.text}
                  </p>
                  <ul
                    className="mt-7 flex flex-wrap gap-2"
                    aria-label="Topics"
                  >
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="raised-sm rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section
          id="process"
          aria-labelledby="process-title"
          className="container-page pb-[var(--section)]"
        >
          <h2 id="process-title" className="section-title reveal">
            how it works
          </h2>
          <p className="statement reveal mt-4 max-w-[30ch]">
            Three steps, with a person reviewing the results along the way.
          </p>
          <div className="relative mt-14">
            <span className="track-groove" aria-hidden="true">
              <span className="track-fill" />
            </span>
            <ol className="track">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className="track-step reveal"
                  style={order("--i", i)}
                >
                  <span className="track-knob" aria-hidden="true">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[0.04em]">
                      <span className="sr-only">Step {s.n}: </span>
                      {s.title}
                    </h3>
                    <p className="prose-soft mt-2">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          aria-labelledby="cta-title"
          className="container-page pb-20 md:pb-28"
        >
          <div className="raised reveal rounded-[var(--radius-plate)] px-6 py-14 text-center sm:px-14 sm:py-20">
            <h2
              id="cta-title"
              className="display mx-auto max-w-[18ch] text-[1.75rem] sm:text-4xl lg:text-[2.75rem]"
            >
              ready to hand off the busywork.
            </h2>
            <p className="mx-auto mt-6 max-w-[44ch] text-[17px] text-ink-soft text-pretty">
              Tell me where your accounting time goes. I will show you what{" "}
              AI can take off your plate, free of charge.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
              <PrimaryCta />
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft"
              >
                Message on Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Send a message on Instagram. No forms, no pressure.
            </p>
          </div>
        </section>
      </main>

      <footer className="container-page pb-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <Image
              src="/logo-circle.png"
              alt="Hiroshi Murakami logo: an H monogram on a soft rounded tile"
              width={88}
              height={88}
              className="h-22 w-22"
            />
            <p className="max-w-xs text-sm text-ink-soft">
              Practical AI for accountants and business owners.
            </p>
          </div>
          <nav
            aria-label="Contact channels"
            className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm"
          >
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Facebook
            </a>
            <a href="#top" className="text-link">
              Back to top
            </a>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-ink-soft md:text-left">
          &copy; 2026 Hiroshi Murakami. All rights reserved.
        </p>
      </footer>
    </>
  );
}
