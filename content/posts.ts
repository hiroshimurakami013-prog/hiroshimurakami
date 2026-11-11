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
    slug: "numica-buys-retiring-accounting-firms",
    title:
      "An AI start-up just raised $21M to buy retiring accountants' firms.",
    seoTitle: "AI Start-up Numica Buys Accounting Firms | Hiroshi Murakami",
    description:
      "Numica raised $21M to buy small accounting firms from retiring owners and run them on AI. What it does, why now, and what it means for business owners.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-11",
    dateModified: "2026-11-11",
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
        "That is not bad news in itself. AI is good at the routine work: entering transactions, matching payments, preparing a first draft. But it changes what you should ask.",
        "Ask your accountant who reviews the AI's output, and how. Make sure a person stays in charge of the judgment calls: what to claim, what to flag, what to question. AI works best behind a human you trust.",
      ],
    },
    forYou: [
      "Owners: ask who checks the AI's work on your books.",
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
    dateModified: "2026-10-30",
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
        "AI agents can take repetitive work off a business's plate, like capturing invoices and matching receipts.",
        "The benchmark shows why that is only half the job. A human accountant who reviews the output, and spots the issue nobody asked about, still matters.",
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
  ];
}
