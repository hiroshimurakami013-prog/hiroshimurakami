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
   * Every post has two images in the site's look, at least one showing a
   * real person: the main image under the lead and one inside the body,
   * placed right after the section with id `afterSectionId`.
   */
  images: {
    hero: PostImage;
    inline: { afterSectionId: string; image: PostImage };
  };
};

export const POSTS: Post[] = [
  {
    slug: "ai-agents-tax-benchmark",
    title:
      "AI agents just faced 50 real tax assignments. The best one passed 10.8%.",
    seoTitle: "AI Agents Took On 50 Tax Assignments | Hiroshi Murakami",
    description:
      "A new benchmark tested AI agents on professional tax work. Here is what it found and what it means for accountants and business owners.",
    author: "Hiroshi Murakami",
    datePublished: "2026-10-29",
    lead: "A new benchmark gave AI agents the kind of work a tax professional does every week. Here is what happened.",
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
      text: "If you want to know where AI fits in your books, send me a message on Instagram. We look at the routine work AI could take on and where a professional should stay in charge. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/ai-agents-tax-benchmark-hero.webp",
        width: 1600,
        height: 900,
        alt: "Hiroshi Murakami next to the number 10.8%, the best pass rate for an AI agent on 50 professional tax assignments",
        caption: "Hiroshi Murakami, with the headline number from the benchmark.",
      },
      inline: {
        afterSectionId: "example-deadline",
        image: {
          src: "/images/blog/ai-agents-tax-benchmark-deadline.webp",
          width: 1600,
          height: 900,
          alt: "Three dates for Anna's condo sale: October 2026 and January 2027 meet the residence rule, but end of August 2027 is the deadline the AI agent never mentioned.",
          caption: "The example from the article, as a picture.",
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
