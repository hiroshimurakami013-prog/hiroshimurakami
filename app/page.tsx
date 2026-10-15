import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/hiroshimurakami013";
const FACEBOOK = "https://www.facebook.com/1252933767913035";

const services = [
  {
    title: "invoices and receipts",
    text: "AI reads incoming invoices and receipts, pulls out the details and codes them to the right accounts, ready for your review.",
    icon: "M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6",
  },
  {
    title: "bookkeeping",
    text: "Day to day entries are prepared by AI and checked by a person. Fewer keystrokes, fewer slips, a cleaner ledger.",
    icon: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM9 8h6M9 12h6",
  },
  {
    title: "bank reconciliation",
    text: "Transactions are matched to your records automatically. You only look at the few items that need a human decision.",
    icon: "M4 8h13l-3-3M20 16H7l3 3",
  },
  {
    title: "reporting",
    text: "Monthly numbers gathered into a clear, readable pack, so you can see how the business is doing without digging.",
    icon: "M5 20V10M12 20V4M19 20v-7",
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

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function Wordmark() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3 font-semibold tracking-wide"
      aria-label="Hiroshi Murakami, back to top"
    >
      <span
        className="raised-sm flex h-10 w-10 items-center justify-center rounded-[30%] text-lg font-bold"
        aria-hidden="true"
      >
        H
      </span>
      <span>Hiroshi Murakami</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header
        id="top"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6"
      >
        <Wordmark />
        <nav aria-label="Main" className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#services" className="hover:underline underline-offset-4">
            Services
          </a>
          <a href="#work" className="hover:underline underline-offset-4">
            Work
          </a>
          <a href="#process" className="hover:underline underline-offset-4">
            Process
          </a>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-ink-soft">
                AI for accountants and business owners
              </p>
              <h1 className="h1 text-[2.4rem] sm:text-5xl lg:text-[3.4rem]">
                AI accounting, on autopilot
                <span className="text-ember">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-soft">
                I help businesses automate bookkeeping, invoices, receipts,
                reconciliation and reporting with AI. Less typing. Fewer
                errors. More time for the work that matters.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-base"
                >
                  Book a free AI accounting audit
                </a>
                <a href="#work" className="btn btn-soft text-base">
                  See the work
                </a>
              </div>
              <p className="mt-5 text-sm text-ink-soft">
                Send a message on Instagram. No forms, no pressure.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="raised flex h-64 w-64 items-center justify-center rounded-full sm:h-80 sm:w-80">
                <div className="inset flex h-44 w-44 flex-col items-center justify-center rounded-full text-center sm:h-56 sm:w-56">
                  <span className="text-5xl font-bold tracking-widest sm:text-6xl">
                    AI
                  </span>
                  <span className="mt-1 text-sm font-medium tracking-[0.18em] text-ink-soft">
                    + accounting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="mx-auto w-full max-w-6xl px-6 py-14"
        >
          <div className="raised rounded-[2rem] p-8 sm:p-12">
            <h2 id="about-title" className="h2 text-[22px]">
              about
            </h2>
            <p className="mt-5 max-w-3xl text-lg">
              I am Hiroshi Murakami. I work with business owners and
              accountants who are tired of manual accounting work. Using AI, I
              turn the slow, repetitive parts of the job into steady
              workflows that run in the background.
            </p>
            <p className="mt-4 max-w-3xl text-ink-soft">
              The idea is simple: practical AI, explained in plain language,
              with a person checking the results. You keep control. The
              machine does the typing.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="mx-auto w-full max-w-6xl px-6 py-14"
        >
          <h2 id="services-title" className="h2 text-[22px]">
            services
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            AI-automated accounting, built around the tasks that eat your week.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="raised rounded-3xl p-7">
                <span className="inset mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-steel">
                  <Icon d={s.icon} />
                </span>
                <h3 className="text-lg font-semibold tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Work */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="mx-auto w-full max-w-6xl px-6 py-14"
        >
          <h2 id="work-title" className="h2 text-[22px]">
            selected work
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            The kinds of projects I build. Detailed case studies are on the
            way.
          </p>
          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li key={p.title}>
                <article className="raised flex h-full flex-col rounded-3xl p-7">
                  <span className="inset mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Case study
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-ink-soft">{p.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
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
          className="mx-auto w-full max-w-6xl px-6 py-14"
        >
          <h2 id="process-title" className="h2 text-[22px]">
            how it works
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="raised rounded-3xl p-7">
                <span className="inset mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-mint">
                  {s.n}
                </span>
                <h3 className="text-lg font-semibold tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing CTA */}
        <section
          aria-labelledby="cta-title"
          className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20"
        >
          <div className="raised rounded-[2rem] px-8 py-14 text-center sm:px-14">
            <h2 id="cta-title" className="h1 text-3xl sm:text-4xl">
              ready to hand off the busywork.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              Tell me where your accounting time goes. I will show you what AI
              can take off your plate, free of charge.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-5">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base"
              >
                Book a free AI accounting audit
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft text-base"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-6 w-full max-w-6xl px-6 pb-12 pt-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-5">
            <Image
              src="/logo-circle.png"
              alt="Hiroshi Murakami logo: an H monogram on a soft rounded tile"
              width={96}
              height={96}
              className="h-24 w-24"
            />
            <p className="max-w-xs text-sm text-ink-soft">
              Practical AI for accountants and business owners.
            </p>
          </div>
          <nav
            aria-label="Contact channels"
            className="flex gap-6 text-sm font-medium"
          >
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Facebook
            </a>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-ink-soft md:text-left">
          &copy; 2026 Hiroshi Murakami. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
