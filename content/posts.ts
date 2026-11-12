// Blog posts, rendered by app/blog/[slug]/page.tsx and listed on /blog.
// Newest first. A post reports on a published source and credits it, with
// its own opinion clearly labelled. Only use facts the source states: no
// invented numbers, names, clients or claims.

export type PostSection = {
  /** In-page anchor, kebab-case. */
  id: string;
  title: string;
  paragraphs: string[];
};

export type PostLink = { href: string; label: string; text: string };

/**
 * The lead, section and take paragraphs and the "What this means for you"
 * points may link to a page on this site as [anchor text](/path). Only
 * internal paths starting with "/" are links; anything else stays text.
 */
export const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Copy without the link markup, as a reader sees it. */
export function plainText(text: string): string {
  return text.replace(INLINE_LINK, "$1");
}

/** A 1600 by 900 WebP under public/images/blog/. */
export type PostImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type Post = {
  slug: string;
  /** The H1, written as a sentence. */
  title: string;
  /** Page title, 60 characters or fewer. */
  seoTitle: string;
  /** Meta description, 155 characters or fewer. */
  description: string;
  author: string;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified?: string;
  /** The lead paragraph under the H1. */
  lead: string;
  /** "At a glance", three short points. */
  glance: string[];
  /** The reported part of the post, in order. */
  sections: PostSection[];
  /** The author's own opinion, labelled as such on the page. */
  take: PostSection;
  /** The "What this means for you" box. */
  forYou: string[];
  /** The source the post is based on, credited and linked. */
  source: {
    publisher: string;
    title: string;
    note: string;
    links: { href: string; label: string }[];
  };
  /** Internal links under "Keep reading". */
  related: PostLink[];
  cta: { title: string; text: string };
  /**
   * Every post has two images in the site's look: the main image under the
   * lead and one inside the body, placed right after the section with id
   * `afterSectionId`. Generated illustrations say so in the caption.
   */
  images: {
    hero: PostImage;
    inline: { afterSectionId: string; image: PostImage };
  };
};

export const POSTS: Post[] = [
  {
    slug: "copilot-accounting-skills-excel",
    title: "Microsoft is putting accounting skills inside Excel's Copilot.",
    seoTitle: "Copilot in Excel Gets Accounting Skills | Hiroshi Murakami",
    description:
      "Copilot in Excel can now draft reconciliations, journal entries and reports. What Microsoft announced, when it arrives, and who should approve the work.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-12",
    dateModified: "2026-11-12",
    lead: "Microsoft has announced accounting skills for Copilot in Excel. It can draft reconciliations, journal entries and reports, and a person reviews and approves the work. Here is what happened, and what it means if you or a bookkeeper keep your books.",
    glance: [
      "Microsoft announced more than 25 new finance skills and partner plugins for Copilot, including accounting in Excel.",
      "Copilot drafts reconciliations, journal entries and reporting, and an optional audit trail records what it changed and why.",
      "General availability starts rolling out worldwide on November 13, 2026, for users with a Copilot license.",
    ],
    sections: [
      {
        id: "what-happened",
        title: "What happened",
        paragraphs: [
          "On October 29, 2026, Brian Jones, corporate vice president of the Excel Product Group, announced more than 25 new finance skills and partner-built plugins for Copilot. They include new accounting capabilities in Excel and new finance and capital markets plugins for Cowork. CPA Practice Advisor reported the news the next day.",
          "It follows the finance skills Microsoft introduced in Excel in June. Besides accounting, the announcement names audit, tax, financial planning and analysis, compliance and training.",
          "Microsoft also shared early numbers. In seven days of limited availability to Insiders, more than 8,000 unique users invoked the accounting skills more than 44,000 times, across more than 18,000 Copilot conversations.",
        ],
      },
      {
        id: "what-it-does",
        title: "What it does",
        paragraphs: [
          "Reconcile accounts: Copilot compares balances and transactions, identifies discrepancies and prepares reconciling items for review.",
          "Journal entries: it drafts accruals, reclassifications, allocations, reversals and recurring entries, with checks for required inputs and balanced entries.",
          "Reporting: it analyzes performance against plan, identifies the key drivers and prepares reporting on what changed and why.",
          "The partner-built plugins come from Intuit QuickBooks, Xero, Zoho Books, Moody's, S&P Global and FactSet.",
        ],
      },
      {
        id: "who-stays-in-control",
        title: "Who stays in control",
        paragraphs: [
          "In Excel, you can choose to start an audit trail when you invoke an accounting capability. It is a record in the chat history of what Copilot changed and why. Copilot can also summarize recent edits, show when and by whom changes were made, and \"selectively reverse individual edits without disrupting the rest of the workbook.\"",
          "Copilot works within the Microsoft 365 service boundary with enterprise data protection. It honors existing permissions and sensitivity labels, and it does not use prompts, responses or documents to train the underlying foundation models.",
          "According to Microsoft's Message Center, users review and approve all work before anything is posted. In Jones's words: \"Finance professionals retain control of the recommendations, decisions, approvals, and actions that follow.\"",
        ],
      },
      {
        id: "when-it-arrives",
        title: "When you can use it",
        paragraphs: [
          "A public preview began in late October 2026 for users with a Copilot license enrolled in Microsoft Copilot Frontier. General availability starts rolling out worldwide on November 13, 2026 and should be complete by late November.",
          "From then, Frontier enrollment is no longer required, but a Copilot license still is. Third-party accounting connectors may need separate licensing.",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the article.",
        "For a small business, this is useful. Now you, or your bookkeeper, can get a first draft of the [reconciliation](/use-cases/automated-bank-reconciliation) or the journal entry fast.",
        "But a draft is not a decision. The review and the approval stay with a person. That is the line I draw in my own [AI accounting](/services/ai-accounting) work: AI prepares, a person signs off. AI can still miss [the judgment calls a professional would catch](/blog/ai-agents-tax-benchmark).",
        "Before you rely on it, ask: who approves entries before they post? Is the audit trail switched on? And do your client data rules allow this? If you keep books for others, know what your clients expect before their data goes into any AI tool. It comes back to the question I asked about [accounting firms that now run on AI](/blog/numica-buys-retiring-accounting-firms): who checks the work?",
      ],
    },
    forYou: [
      "Owners: let AI draft, and decide who approves.",
      "Bookkeepers: switch on the audit trail when you use it.",
      "Everyone: check your client data rules before you start.",
    ],
    source: {
      publisher: "CPA Practice Advisor",
      title: "Microsoft Touts New Accounting Capabilities for Copilot",
      note: "The dates and licensing details come from Microsoft 365 Message Center post MC1536053. Every other figure and quote comes from the article.",
      links: [
        {
          href: "https://cpapracticeadvisor.com/2026/10/30/microsoft-touts-new-accounting-capabilities-in-copilot/192906",
          label: "Read the article on CPA Practice Advisor",
        },
        {
          href: "https://mc.merill.net/message/MC1536053",
          label: "Read Microsoft 365 Message Center post MC1536053",
        },
      ],
    },
    related: [
      {
        href: "/services/ai-accounting",
        label: "AI Accounting",
        text: "Invoice capture, bookkeeping, bank reconciliation and reporting, with a person reviewing the results.",
      },
      {
        href: "/use-cases/automated-bank-reconciliation",
        label: "Automated bank reconciliation",
        text: "A use case: how AI matches transactions so a person only reviews the exceptions.",
      },
      {
        href: "/blog/numica-buys-retiring-accounting-firms",
        label: "An AI start-up is buying retiring accountants' firms",
        text: "A post: Numica runs small accounting firms on AI, with accountants checking the output.",
      },
      {
        href: "/blog/ai-agents-tax-benchmark",
        label: "AI agents just faced 50 real tax assignments",
        text: "A post: what a tax benchmark shows about the judgment calls AI still misses.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Who approves the AI's entries?",
      text: "If you want to know where AI fits in your books, book a free 30 minute call or send me a message on Instagram. We look at the routine work AI could take on and who should review and approve it. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/copilot-excel-accounting-hero.webp",
        width: 1600,
        height: 900,
        alt: "A bookkeeper at a desk at night reviewing a reconciliation sheet on a laptop that glows with ember light",
        caption: "An AI-generated image of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "what-it-does",
        image: {
          src: "/images/blog/copilot-excel-accounting-review.webp",
          width: 1600,
          height: 900,
          alt: "A flower shop owner and his bookkeeper looking at a laptop together at the shop counter, lit by a warm ember glow",
          caption: "An AI-generated image of the idea, not a photo of real people.",
        },
      },
    },
  },
  {
    slug: "numica-buys-retiring-accounting-firms",
    title:
      "An AI start-up just raised $21M to buy retiring accountants' firms.",
    seoTitle: "AI Start-up Numica Buys Accounting Firms | Hiroshi Murakami",
    description:
      "Numica raised $21M to buy small accounting firms from retiring owners and run them on AI. What it does, why now, and what it means for business owners.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-11",
    dateModified: "2026-11-12",
    lead: "A New York start-up called Numica has raised $21M to buy small accounting firms from owners close to retirement, then run the work on its own AI system. Here is what happened, and why it matters if a small firm keeps your books.",
    glance: [
      "Numica raised $21M, a mix of equity and debt, to buy small US accounting firms from retiring owners.",
      "After a deal closes, its AI system keeps the books and handles billing and tax filing, while accountants check the output.",
      "It targets firms too small to interest larger buyers, whose clients are mostly local businesses.",
    ],
    sections: [
      {
        id: "what-happened",
        title: "What happened",
        paragraphs: [
          "Numica is a New York start-up that buys small accounting firms from owners who are close to retirement. This month it announced $21M in funding, a mix of equity and debt, from Roosh X and Flashpoint Capital. Flashpoint, based in London, first backed Numica with equity and has now added a growth debt loan.",
          "Numica launched in June 2025 and bought its first practice, in New York, a few months later. It has bought seven practices in total.",
          "\"The model is simple: we acquire a profitable business and make it more profitable,\" said Slava Orekoff, co-founder and CEO and a former SVP at SAP. His co-founder, Victor Lysenko, previously founded Osome, a Singapore-based accounting start-up.",
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        paragraphs: [
          "Once a deal closes, Numica moves the firm's clients, staff and daily work onto its own AI system. The platform keeps the books and handles billing, practice management and tax filing. The accountants check the AI's output instead of doing the work by hand.",
          "For clients, little should change: the same accountant and the same relationship. The changes happen behind the scenes.",
          "Numica says the profit margin at its first firm rose from 37% to 52% within two months, and it expects 70%. Those are Numica's own claims, not independent figures.",
        ],
      },
      {
        id: "why-now",
        title: "Why now",
        paragraphs: [
          "The reason is a shortage of accountants. More than 300,000 US accountants and auditors left their jobs over two years, a 17% fall, The Wall Street Journal reported in 2023, as cited by The Next Web. Many small-firm owners have no one to take over.",
          "Private equity has already moved in at the top: ten of the 20 largest US accounting firms are or will soon be backed by private equity. Numica goes after the smaller firms they pass over, with annual revenue of $700,000 to $5 million. Those firms are easier to take over and usually too small to interest larger buyers.",
          "Most of their clients are local businesses such as restaurants, hair salons and dental practices.",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the article.",
        "If you run a restaurant, a salon or a dental practice, the person who knows your books may soon work inside a firm run on AI. You might not notice. That is the point of the model.",
        "That is not bad news in itself. AI is good at the routine work: entering transactions, [matching payments](/use-cases/automated-bank-reconciliation), [preparing a first draft](/blog/copilot-accounting-skills-excel). But it changes what you should ask.",
        "Ask your accountant who reviews the AI's output, and how. Make sure a person stays in charge of [the judgment calls](/blog/ai-agents-tax-benchmark): what to claim, what to flag, what to question. AI works best behind a human you trust.",
      ],
    },
    forYou: [
      "Owners: ask who checks the [AI's work on your books](/services/ai-accounting).",
      "Accountants: let AI take the routine. The review and the advice stay yours.",
      "Everyone: judge a firm by the person in charge, not only by its software.",
    ],
    source: {
      publisher: "The Next Web",
      title: "Numica raises $21M to buy accounting firms from retiring US owners",
      note: "Every figure and quote in this post comes from that article. The margin figures are Numica's own claims.",
      links: [
        {
          href: "https://thenextweb.com/news/numica-21m-ai-accounting-firm-acquisitions",
          label: "Read the article on The Next Web",
        },
      ],
    },
    related: [
      {
        href: "/services/ai-accounting",
        label: "AI Accounting",
        text: "Invoice capture, bookkeeping, bank reconciliation and reporting, with a person reviewing the results.",
      },
      {
        href: "/use-cases/automated-bank-reconciliation",
        label: "Automated bank reconciliation",
        text: "A use case: how AI matches transactions so a person only reviews the exceptions.",
      },
      {
        href: "/blog/copilot-accounting-skills-excel",
        label: "Microsoft is putting accounting skills inside Excel's Copilot",
        text: "A post: Copilot drafts reconciliations and journal entries, and a person approves them.",
      },
      {
        href: "/blog/ai-agents-tax-benchmark",
        label: "AI agents just faced 50 real tax assignments",
        text: "A post: what a tax benchmark shows about the judgment calls AI still misses.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Who checks the AI on your books?",
      text: "If you want to know where AI fits in your books, book a free 30 minute call or send me a message on Instagram. We look at the routine work AI could take on and where a person you trust should stay in charge. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/numica-retiring-accounting-firms-hero.webp",
        width: 1600,
        height: 900,
        alt: "A silver-haired accountant closing a paper ledger at her desk at night while a laptop glows with ember light beside her",
        caption: "An AI-generated image of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "how-it-works",
        image: {
          src: "/images/blog/numica-retiring-accounting-firms-clients.webp",
          width: 1600,
          height: 900,
          alt: "A cafe owner and her longtime accountant smiling across a table with a glowing laptop between them",
          caption: "An AI-generated image of the idea, not a photo of real people.",
        },
      },
    },
  },
  {
    slug: "ai-agents-tax-benchmark",
    title:
      "AI agents just faced 50 real tax assignments. The best one passed 10.8%.",
    seoTitle: "AI Agents Took On 50 Tax Assignments | Hiroshi Murakami",
    description:
      "A new benchmark gave AI agents 50 real tax assignments and the best passed 10.8%. What it found, and what it means for accountants and business owners.",
    author: "Hiroshi Murakami",
    datePublished: "2026-10-29",
    dateModified: "2026-11-12",
    lead: "A new benchmark gave AI agents 50 real tax assignments. The best agent passed 10.8% of them. Here is what happened.",
    glance: [
      "Surge AI tested AI agents on 50 professional tax assignments, built and reviewed by tax experts.",
      "The best agent passed 10.8% of them at a strict 95% rubric threshold.",
      "The telling misses were judgment calls: a deadline nobody asked about, a fact nobody checked.",
    ],
    sections: [
      {
        id: "what-was-tested",
        title: "What the benchmark tested",
        paragraphs: [
          "DAYJOB: Tax is a new benchmark from Surge AI. It gives AI agents 50 professional tax assignments across eight areas: individual and family tax, small business tax, partnerships, property and investments, estates, gifts and trusts, international tax, corporate transactions, and tax review and disputes.",
          "Each agent gets a client request and the supporting records, and must deliver a tax return, workpapers, a technical review or client advice. The tasks were built by tax experts with experience at firms like PwC, Deloitte, EY and Baker Tilly, as the article states. Each one went through three layers of expert review.",
          "The workspaces are messy, like real practice: 1,789 files, a median of 30 per assignment and up to 123. That includes 1,487 PDFs, 117 Excel workbooks and 38 Word documents: returns, K-1s, W-2s, IRS notices, ledgers, payroll records, contracts, emails, even a photograph of a handwritten receipt.",
          "Earlier benchmarks mostly start with a defined problem, a question to answer or a return to calculate. This one asks whether an agent can own an assignment end to end: notice issues the client never raised, weigh conflicting evidence, decide what to investigate and deliver work that meets professional standards.",
        ],
      },
      {
        id: "results",
        title: "The results",
        paragraphs: [
          "An attempt passed only if it met at least 95% of the rubric criteria, on the first try. Claude Sonnet 5.5 led with a 10.8% pass rate. Claude Fable 5.1 followed at 9.6%, and Claude Opus 5.5 at 9.2%.",
          "The article sums it up: \"Agents haven't yet passed the audit.\"",
        ],
      },
      {
        id: "example-deadline",
        title: "Example one: the deadline nobody asked about",
        paragraphs: [
          "Anna planned to sell her condo. She asked whether closing in October 2026 or January 2027 was better for taxes.",
          "The agent correctly saw that either date would meet the residence requirement for a tax break worth up to $250,000 in excluded gains. But it left out an important deadline. Under the usual rules, a homeowner must have lived in the property for at least two of the five years before the sale. Anna moved out in August 2024, so she would stop qualifying around the end of August 2027.",
          "In the article's test, one model, Astra, never found that deadline in five attempts. Opus found it in all five. The lesson the article draws: a tax adviser should recognise consequential issues even when the client does not know to ask.",
        ],
      },
      {
        id: "example-verify",
        title: "Example two: the question to ask first",
        paragraphs: [
          "A separating couple asked how to divide a Roth IRA and a 401(k). One agent told them they were not legally married. Their own records raised doubt about that: they had lived in Texas, held a ceremony in Colorado and now lived in Florida.",
          "The right first step was to verify their marital status before advising. Across five attempts, Opus built its advice on the unverified assumption every time. Another model recognised the need to verify in four of five.",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the benchmark.",
        "[AI agents](/services/ai-agents) can take repetitive work off a business's plate, like [capturing invoices](/use-cases/invoice-and-receipt-capture) and [matching receipts](/use-cases/automated-bank-reconciliation).",
        "The benchmark shows why that is only half the job. A [human accountant who reviews the output](/blog/numica-buys-retiring-accounting-firms), and spots the issue nobody asked about, still matters.",
        "So use AI for the routine, and keep a professional on the judgment calls.",
      ],
    },
    forYou: [
      "Owners: let AI take the volume, and keep your accountant for advice.",
      "Accountants: let AI clear the routine. The review is still yours.",
      "Everyone: check what an AI agent assumed, not only what it produced.",
    ],
    source: {
      publisher: "Surge AI",
      title: "DAYJOB: Tax, Benchmarking AI Agents on Professional Tax Work",
      note: "Every figure and example in this post comes from that article.",
      links: [
        {
          href: "https://surgehq.ai/blog/dayjob-tax",
          label: "Read the DAYJOB: Tax article by Surge AI",
        },
        {
          href: "https://surgehq.ai/benchmarks/dayjob-tax",
          label: "See the DAYJOB: Tax leaderboard",
        },
      ],
    },
    related: [
      {
        href: "/services/ai-accounting",
        label: "AI Accounting",
        text: "Invoice capture, bookkeeping, bank reconciliation and reporting, with a person reviewing the results.",
      },
      {
        href: "/use-cases/invoice-and-receipt-capture",
        label: "Invoice and receipt capture",
        text: "A use case: how AI takes the routine out of capturing and coding paperwork.",
      },
      {
        href: "/blog/numica-buys-retiring-accounting-firms",
        label: "An AI start-up is buying retiring accountants' firms",
        text: "A post: Numica runs small accounting firms on AI, with accountants checking the output.",
      },
      {
        href: "/blog/copilot-accounting-skills-excel",
        label: "Microsoft is putting accounting skills inside Excel's Copilot",
        text: "A post: Copilot drafts reconciliations and journal entries, and a person approves them.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Where does AI fit in your books?",
      text: "If you want to know where AI fits in your books, book a free 30 minute call or send me a message on Instagram. We look at the routine work AI could take on and where a professional should stay in charge. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/ai-agents-tax-benchmark-hero.webp",
        width: 1600,
        height: 900,
        alt: "Illustration of a tired accountant at a desk piled with tax papers while a glowing AI figure sorts the same papers",
        caption: "An AI-generated illustration of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "example-deadline",
        image: {
          src: "/images/blog/ai-agents-tax-benchmark-deadline.webp",
          width: 1600,
          height: 900,
          alt: "Illustration of Anna in her condo as a glowing AI figure points at three glowing orbs, the dates on her sale timeline",
          caption: "An AI-generated illustration of Anna's example, not a photo of a real person.",
        },
      },
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** "October 29, 2026" from "2026-10-29", independent of the time zone. */
export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Words of a post's own copy, for the length check in scripts/check-links.mjs. */
export function postCopy(post: Post): string[] {
  return [
    post.lead,
    ...post.glance,
    ...post.sections.flatMap((s) => [s.title, ...s.paragraphs]),
    post.take.title,
    ...post.take.paragraphs,
    ...post.forYou,
  ].map(plainText);
}
