// Copy for /about, rendered by app/about/page.tsx. Also the source of the
// Person description in lib/schema.ts and of the About part of
// /llms-full.txt, so every description of Hiroshi Murakami agrees.
//
// Work history comes only from the owner's own LinkedIn export (2026-11-23).
// Figures stay as supplied and are attributed, never presented as audited or
// as client case studies. No degrees, certifications, client names or offices.
//
// TODO (owner): education can be added here and on the page once the owner
// supplies it. Do not guess it.

import { PROCESS_STEPS } from "./services.ts";

export const ABOUT_PATH = "/about";

/** One sentence: name, role and area served. The lead of the page. */
export const ABOUT_DEFINITION =
  "Hiroshi Murakami is an AI automation and AI accounting consultant with a background in finance and technology, serving small and mid-size businesses across Los Angeles County and clients worldwide, remote-first.";

export type Role = {
  title: string;
  company: string;
  place: string;
  /** Year and month (YYYY-MM). No end means the role is current. */
  start: string;
  end?: string;
  summary: string;
  points: string[];
  /** Owner-stated results, shown with their source. */
  stated?: string;
};

/** Work experience, newest first. */
export const EXPERIENCE: Role[] = [
  {
    title: "VP of Growth",
    company: "TriSage Solutions",
    place: "Los Angeles",
    start: "2024-04",
    summary:
      "Part of the leadership team at an outsourcing firm providing finance and accounting services, business operations support, and software and AI development to growing businesses.",
    points: [
      "Business development with international clients, and the sales process from proposals to onboarding.",
      "Combined service offerings across accounting, financial operations, software and automation, with pricing and packages geared to recurring engagements.",
      "Identifying AI and automation opportunities in client workflows.",
      "Strategic partnerships, and building teams across sales, finance, operations and technology.",
    ],
    stated:
      "From my LinkedIn profile: at TriSage, ARR grew from $1.2M to $14M in two years, with more than 180 clients across four countries. I built \"Close + Code\", outsourced controllership plus automation that shrinks a 12-day close to 3. These are results I state on my profile, not audited figures, case studies from this site or a promise of what you will see.",
  },
  {
    title: "Financial Controller",
    company: "Ledgerline",
    place: "Austin, Texas",
    start: "2022-03",
    end: "2023-12",
    summary:
      "Built the in-house accounting function at a Series C fintech SaaS company in AP automation and embedded payments.",
    points: [
      "Supported the migration from QuickBooks Online to NetSuite OneWorld across US, Canada, UK and Australia entities.",
      "Improved the month-end close with standard reconciliations, accruals and a close calendar.",
      "Coordinated the external audit, revenue accounting under ASC 606, internal controls, and monthly and board reporting.",
      "Handled high-volume payment reconciliation, multi-currency and intercompany consolidation, and implemented Ramp and Bill.com.",
    ],
  },
  {
    title: "Finance Manager",
    company: "Gusto",
    place: "San Francisco",
    start: "2021-01",
    end: "2022-03",
    summary: "Worked on reporting, budgeting and forecasting.",
    points: [
      "Helped cut the month-end close from about 10 days to 6 with NetSuite and BlackLine workflows.",
      "Supported an operating budget of about $90M across Sales, Marketing and Customer Success.",
      "Worked on quarterly forecasts, vendor and software subscription review, ASC 606 for new products and board reporting.",
      "Supervised accounting and FP&A team members.",
    ],
  },
  {
    title: "Founding Account Executive",
    company: "Brex",
    place: "San Francisco",
    start: "2018-05",
    end: "2020-06",
    summary:
      "One of the early sales hires, before the corporate card launched.",
    points: [
      "Helped acquire and onboard more than 100 startups in the first year.",
      "Built outbound prospecting and early sales processes.",
      "Worked with founders and finance leaders, and helped onboard new sales reps.",
    ],
  },
];

/** "2024-04" as "April 2024". */
export const monthYear = (date: string) =>
  new Date(`${date}-01T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const rolePeriod = (r: Role) =>
  `${monthYear(r.start)} to ${r.end ? monthYear(r.end) : "present"}`;

/** The work history in short, for the FAQ and /llms.txt. */
export const ABOUT_BACKGROUND = `Hiroshi Murakami has worked in fintech sales and in finance. Roles, newest first: ${EXPERIENCE.map(
  (r) => `${r.title} at ${r.company} (${rolePeriod(r)})`,
).join("; ")}.`;

export const ABOUT = {
  path: ABOUT_PATH,
  title: "About Hiroshi Murakami",
  seoTitle: "About Hiroshi Murakami, AI Automation and Accounting",
  seoDescription:
    "Hiroshi Murakami builds AI automation and AI accounting after working in fintech sales and finance at Brex, Gusto, Ledgerline and TriSage Solutions.",
  keyFacts: [
    "Hiroshi Murakami builds AI automation and AI accounting for small and mid-size businesses.",
    "Hiroshi Murakami has worked on both sides of finance and technology: fintech sales, then finance roles including Financial Controller.",
    "The AI does the first pass of repetitive work, and a person reviews what matters.",
    "Work is remote-first, for businesses across Los Angeles County and for clients worldwide. There is no office to visit.",
    "The first step is a free 30 minute AI audit by video call, with no obligation.",
  ],
  background:
    "I have spent my career where money and technology meet, and I have worked on both sides. I started in fintech sales in 2018 as a founding Account Executive, then moved into finance and became a Financial Controller. I lead growth at TriSage Solutions, and here I build AI automation and AI accounting for small and mid-size businesses.",
  beliefs: [
    "Finance teams don't need more headcount. They need better systems and people who understand both the ledger and the code.",
    "AI won't replace accountants, but accountants who use AI will replace the ones who don't.",
  ],
  whatIDo: "I offer eight services in two fields. AI automation takes on calls, messages, leads and handoffs. AI accounting takes on the first pass of the bookkeeping.",
  howIWork:
    "Every project follows the same three steps. You stay in control, and you approve what the AI may do.",
  humanReview:
    "The AI does the first pass: it answers the routine question, drafts the follow-up or suggests how to code the invoice. A person reviews anything that matters before it counts. In accounting, your bookkeeper or accountant reviews and approves the results.",
  boundaries: [
    {
      title: "No invented results",
      text: "I do not publish made-up clients, reviews or statistics, and I do not promise a particular saving or income. Career figures on this page are the ones I state on my LinkedIn profile.",
    },
    {
      title: "No scenarios dressed up as case studies",
      text: "The use cases on this site are illustrative scenarios. Worked examples use labelled assumptions, not client results. The TriSage numbers above are results stated on my LinkedIn profile, not case studies from this site.",
    },
    {
      title: "No replacing your accountant's judgement",
      text: "AI prepares the work. Your bookkeeper or accountant reviews and approves it, and the AI never pays bills or files taxes.",
    },
  ],
  faqs: [
    {
      question: "Who is Hiroshi Murakami?",
      answer: ABOUT_DEFINITION,
    },
    {
      question: "What is Hiroshi Murakami's background?",
      answer: ABOUT_BACKGROUND,
    },
    {
      question: "What does Hiroshi Murakami do?",
      answer:
        "Hiroshi Murakami builds AI systems for two kinds of work. AI automation covers receptionists, voice agents, AI agents, follow-ups, lead qualification, custom CRM and workflows, and customer support assistants. AI accounting covers invoice capture, bookkeeping, bank reconciliation and reporting, with a person reviewing the results.",
    },
    {
      question: "Where does Hiroshi Murakami work?",
      answer:
        "Remote-first, for businesses across Los Angeles County and for clients worldwide. Audits, setup and reviews happen over video calls and messages, and there is no office address.",
    },
    {
      question: "How do I start working with Hiroshi Murakami?",
      answer:
        "Book a free 30 minute AI audit through the booking page. We look at where your team's time goes, which tasks AI could take on and where a person should stay in charge. There is no obligation. You can also write on LinkedIn, Instagram or Facebook.",
    },
  ],
};

/** The page as plain paragraphs of markdown, for /llms-full.txt. */
export function aboutMarkdown(): string[] {
  return [
    ABOUT_DEFINITION,
    "",
    ...ABOUT.keyFacts.map((f) => `- ${f}`),
    "",
    "### Background",
    ABOUT.background,
    "",
    "### Experience",
    ...EXPERIENCE.flatMap((r) => [
      "",
      `#### ${r.title}, ${r.company}, ${r.place}, ${rolePeriod(r)}`,
      r.summary,
      ...r.points.map((p) => `- ${p}`),
      ...(r.stated ? ["", r.stated] : []),
    ]),
    "",
    "### What I believe",
    ...ABOUT.beliefs.map((b) => `- "${b}"`),
    "",
    "### What I do",
    ABOUT.whatIDo,
    "",
    "### How I work",
    ABOUT.howIWork,
    "",
    ...PROCESS_STEPS.map((s) => `${s.n}. ${s.title}: ${s.text}`),
    "",
    ABOUT.humanReview,
    "",
    "### What I do not do",
    ...ABOUT.boundaries.map((b) => `- ${b.title}: ${b.text}`),
    "",
    "### Questions",
    ...ABOUT.faqs.flatMap((f) => ["", `Q: ${f.question}`, `A: ${f.answer}`]),
  ];
}
