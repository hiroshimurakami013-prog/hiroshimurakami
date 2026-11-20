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
    slug: "chatgpt-for-accounting-launch",
    title: "ChatGPT for Accounting: what small businesses and accountants should do.",
    seoTitle: "ChatGPT for Accounting: What to Do With It",
    description:
      "ChatGPT for Accounting launched on 18 November 2026. It drafts entries and reconciles bank lines, and a person approves. What owners should do.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    lead: "OpenAI launched ChatGPT for Accounting on 18 November 2026. It is a free Accounting plugin, plus partner plugins for QuickBooks, Xero, NetSuite and more. It prepares drafts, and a person approves every change. Here is what it does, and what to do with it.",
    glance: [
      "ChatGPT for Accounting combines a free Accounting plugin from OpenAI with partner plugins for QuickBooks Online, Xero, Oracle NetSuite, BILL, FreshBooks, Rillet and Campfire.",
      "It can draft entries from invoices and receipts, reconcile bank lines and prepare month-end reports. OpenAI says \"You make the final call.\"",
      "Outside benchmarks say AI is not yet reliable enough to close the books alone, so a review step matters.",
    ],
    sections: [
      {
        id: "what-chatgpt-for-accounting-does",
        title: "What ChatGPT for Accounting does",
        paragraphs: [
          "OpenAI announced it on 18 November 2026 through the official ChatGPT account on X, one day after ChatGPT for Sales. It targets invoice and receipt entries, bank reconciliation, month-end and client reports, data entry and audit preparation.",
          "OpenAI said it can prepare draft entries from invoices and receipts, suggest account classifications and flag unclear information. It can pull together invoices, bank statements and payment records from connected apps, emails and files.",
        ],
      },
      {
        id: "month-end-and-reusable-skills",
        title: "Month-end reports and reusable skills",
        paragraphs: [
          "At month-end, it can use your existing templates and records to prepare reports, explain key changes and point to supporting information. It can flag possible duplicate entries, missing information and unexplained differences.",
          "You can save templates, instructions and review procedures as reusable skills, then repeat them each month.",
        ],
      },
      {
        id: "a-person-approves-every-change",
        title: "A person approves every change",
        paragraphs: [
          "OpenAI says: \"You make the final call.\" Users check records, calculations and suggested classifications before approving. OpenAI's help page says to compare proposed entries with the original invoices. If an entry status is unclear, check the accounting app before retrying, to avoid a duplicate.",
          "On privacy, OpenAI said information from ChatGPT Business and Enterprise is not used to train its models by default. Workspace admins control which apps are enabled.",
        ],
      },
      {
        id: "setup-and-where-xero-fits",
        title: "Setup, and where Xero fits",
        paragraphs: [
          "It runs in the ChatGPT desktop app, with computer use set up. Business members can install Accounting without admin approval. In Enterprise, an admin must approve it first. The plugin is free, but usage varies by plan. You upload an Excel template and files, or connect an accounting app.",
          "Xero also expanded its OpenAI integration, so accountants can start month-end close reviews inside ChatGPT using live Xero data. Actions are taken back in Xero, \"where your ledger lives and where every change stays traceable.\" Xero says this is currently available in the US.",
        ],
      },
      {
        id: "how-reliable-is-it",
        title: "How reliable is it?",
        paragraphs: [
          "i-scoop.eu reports that single tasks often work, but close work is not reliable every time. On the APEX-Accounting benchmark (Mercor with Ramp), the best model solves 21.5% of tasks at least once in eight attempts, and 2.6% every time. The authors wrote: \"An agent that is usually correct but not reliably so cannot yet close the books unsupervised.\"",
          "In one independent test, it matched a $1,465 deposit to $1,500 of receipts less a $35 fee, and left an unexplained $120 debit open.",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the sources.",
        "Use it for the first pass, not the last word. Let AI draft invoice entries, match bank lines and prepare the month-end report. Then a person checks each one against the original document. It prepares drafts. It does not replace the books or the accountant.",
        "A clean ledger comes first, because tidy categories and complete records make better drafts. For help, see [AI accounting](/services/ai-accounting).",
        "Accountants: write down your review step. Our post on [Microsoft's accounting skills in Copilot for Excel](/blog/copilot-accounting-skills-excel) shows the same pattern. For work across several apps, [AI agents](/services/ai-agents) can help.",
      ],
    },
    forYou: [
      "Owners: let AI do the first pass on reconciliation, invoice entry and month-end reports, with a person approving.",
      "Accountants: save your review step as a skill, and compare every entry with the source document.",
      "Everyone: keep the ledger clean. It prepares drafts, not the books.",
    ],
    source: {
      publisher: "OpenAI, with reporting from ANI",
      title: "Using ChatGPT for accounting work",
      note: "OpenAI help centre article, and ANI, \"OpenAI launches accounting plugin for ChatGPT, targets bookkeeping and financial reporting tasks\", 19 November 2026. Further reading: the Xero blog and i-scoop.eu.",
      links: [
        {
          href: "https://help.openai.com/en/articles/20001709-using-chatgpt-for-accounting-work",
          label: "Read the OpenAI help centre article",
        },
        {
          href: "https://www.aninews.in/news/business/openai-launches-accounting-plugin-for-chatgpt-targets-bookkeeping-and-financial-reporting-tasks20261119123610/",
          label: "Read the ANI report",
        },
        {
          href: "https://blog.xero.com/news-events/openai-integration-chatgpt-for-accounting/",
          label: "Further reading: the Xero blog",
        },
        {
          href: "https://www.i-scoop.eu/chatgpt-for-accounting-europe/",
          label: "Further reading: i-scoop.eu",
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
        href: "/blog/copilot-accounting-skills-excel",
        label: "Accounting skills in Copilot for Excel",
        text: "A post: Microsoft puts accounting skills in Copilot for Excel.",
      },
      {
        href: "/blog/clients-check-accountants-with-ai",
        label: "AI accounting clients are checking their accountant's work",
        text: "A post: what clients want to know about AI in their books.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Want a clean first pass on your books?",
      text: "Book a free 30 minute call or send me a message on Instagram. We can look at where AI drafts the work, and who reviews it. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/chatgpt-for-accounting-launch-hero.webp",
        width: 1600,
        height: 900,
        alt: "A small business owner at a desk at night reviewing a bank reconciliation on a laptop while a glowing ember figure of AI stands beside them.",
        caption: "An AI-generated image of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "month-end-and-reusable-skills",
        image: {
          src: "/images/blog/chatgpt-for-accounting-launch-review.webp",
          width: 1600,
          height: 900,
          alt: "An accountant checking a month-end report on a screen with an ember glow of AI beside the figures, ready to approve each entry.",
          caption:
            "An AI-generated image of the idea, not a photo of real people.",
        },
      },
    },
  },
  {
    slug: "clients-check-accountants-with-ai",
    title: "AI accounting clients are checking their accountant's work.",
    seoTitle: "AI Accounting Clients Check Their Accountant's Work",
    description:
      "AI accounting clients: TaxDome says 74% of clients who use AI have checked, or would check, their accountant's work with AI. What to ask, and what to do.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    lead: "TaxDome's 2026 Accounting Client Satisfaction Report says 74% of clients who use AI have checked, or would consider checking, their accountant's work with AI. And 93% of clients want to know if their accountant uses AI on their return. So AI accounting clients are now a real group. Here is what the survey found, and what to ask your accountant.",
    glance: [
      "TaxDome says 74% of clients who use AI have checked, or would consider checking, their accountant's work with AI.",
      "93% of clients want to know if their accountant uses AI on their return.",
      "94% say a quick response matters, and 60% feel better knowing a human reviews all the work.",
    ],
    sections: [
      {
        id: "what-the-report-found",
        title: "What the report found",
        paragraphs: [
          "TaxDome surveyed 1,000 US clients who use an accountant or tax professional. This is its second survey of accounting clients, after the first edition in 2024. It was released on November 18, 2026.",
          "The headline: 74% of clients who use AI have checked, or would consider checking, their accountant's work with AI. CPA Practice Advisor adds that 1 in 5 clients (20%) have already used AI to review work their accountant completed. Also, 68% have at least tried AI for taxes or finances. Only 3% have used AI on an actual return.",
        ],
      },
      {
        id: "do-clients-want-to-know-their-accountant-uses-ai",
        title: "Do clients want to know their accountant uses AI?",
        paragraphs: [
          "Yes. 93% of clients want to know if their accountant uses AI on their return. And 60% say knowing a human still reviews all the work would make them comfortable with a service that uses AI.",
          "Clients who have used AI to check their accountant's work are 5 times as likely to feel more confident knowing their accountant uses AI, compared with clients who have never used it.",
        ],
      },
      {
        id: "speed-and-replies",
        title: "Speed and replies matter most",
        paragraphs: [
          "94% of clients say it is very or extremely important that their accountant responds quickly. Only 62% say the same about completing work faster. Among clients who have considered leaving their accountant, 52% rank slow responses in their top three reasons.",
          "Clients may also pay for speed. 95% of business owners spending $10,000 or more a year on accounting would pay more for faster service. Across all clients, the share willing to pay more rose from 20% in 2024 to 53% in 2026.",
        ],
      },
      {
        id: "who-ran-the-report",
        title: "Who ran the report",
        paragraphs: [
          "TaxDome sells practice management software to accounting firms, more than 15,000 of them. So it has a commercial interest. The survey dates, fieldwork vendor and margin of error are not stated, and I found no independent check. Read it as a vendor's view.",
          "Ilya Radzinsky, TaxDome's co-founder and chief product officer, said: \"In the age of AI, the firms that win will be the ones closest to their clients.\"",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the report.",
        "Do not fear this. AI-checked work should make everyone more accurate, and openness wins trust. The best answer to a client with an AI tool is an accountant who uses AI openly and keeps a human reviewing.",
        "If you own a business, ask your accountant three questions. Do you use AI on my books? Who reviews it? How fast do you reply? Our post on [AI policy for accounting firms](/blog/accounting-firms-ai-adoption-no-policy) shows why a clear answer matters.",
        "If you are an accountant, tell clients where you use AI. Reply fast, because replies matter more than speed of work. Use AI to stay close to the client, for example with [AI follow-ups](/services/ai-follow-ups) that keep people informed. For the books themselves, see [AI accounting](/services/ai-accounting).",
      ],
    },
    forYou: [
      "Owners: ask your accountant if they use AI on your books, who reviews it, and how fast they reply.",
      "Accountants: tell clients where AI is used, keep a human reviewing, and reply quickly.",
      "Everyone: AI checks can make the work more accurate, and openness builds trust.",
    ],
    source: {
      publisher: "TaxDome, via PR Newswire",
      title:
        "TaxDome's 2026 Client Report Finds 3 in 4 AI Users Would Fact-Check Their Accountant With AI",
      note: "Press release, November 18, 2026. Also covered by Jason Bramwell in CPA Practice Advisor, November 18, 2026. TaxDome is a software vendor for accounting firms, so it has a commercial interest, and the survey details are not fully stated.",
      links: [
        {
          href: "https://www.prnewswire.com/news-releases/taxdomes-2026-client-report-finds-3-in-4-ai-users-would-fact-check-their-accountant-with-ai-302943247.html",
          label: "Read the TaxDome press release on PR Newswire",
        },
        {
          href: "https://www.cpapracticeadvisor.com/2026/11/18/many-ai-adopting-clients-would-use-ai-to-fact-check-their-accountants-work-taxdome-report-says/194273/",
          label: "Read the article on CPA Practice Advisor",
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
        href: "/blog/chatgpt-for-accounting-launch",
        label: "ChatGPT for Accounting",
        text: "A post: OpenAI's new accounting plugin drafts the work, and a person approves.",
      },
      {
        href: "/blog/accounting-firms-ai-adoption-no-policy",
        label: "AI policy for accounting firms",
        text: "A post: most firms use AI, few have a policy.",
      },
      {
        href: "/blog/numica-buys-retiring-accounting-firms",
        label: "An AI start-up is buying retiring accountants' firms",
        text: "A post: Numica runs small accounting firms on AI, with accountants checking the output.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Want to know where AI fits in your books?",
      text: "Book a free 30 minute call or send me a message on Instagram. We can look at where AI helps, and who should review it. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/clients-check-accountants-with-ai-hero.webp",
        width: 1600,
        height: 900,
        alt: "A business owner at a laptop in a dark office reviewing a financial report beside a faint ember-lit AI figure",
        caption: "An AI-generated image of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "do-clients-want-to-know-their-accountant-uses-ai",
        image: {
          src: "/images/blog/clients-check-accountants-with-ai-review.webp",
          width: 1600,
          height: 900,
          alt: "An accountant and a client at a desk reviewing a ledger together while an ember-lit AI figure checks the numbers",
          caption:
            "An AI-generated image of the idea, not a photo of real people.",
        },
      },
    },
  },
  {
    slug: "accounting-firms-ai-adoption-no-policy",
    title: "AI policy for accounting firms: most use AI, few have a policy.",
    seoTitle: "AI Policy for Accounting Firms: Survey | Hiroshi Murakami",
    description:
      "AI policy for accounting firms: Rightworks says 71% use or test AI, but 63% of users have no formal policy. What to ask your accountant.",
    author: "Hiroshi Murakami",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    lead: "A new Rightworks survey says 71% of accounting and tax firms now use or test AI, up from 40% in 2024. But 63% of the firms using AI have no formal AI policy. If your accountant uses AI on your [books](/services/ai-accounting), here is what the survey found, what to ask, and why an AI policy for accounting firms should fit on one page.",
    glance: [
      "Rightworks says 71% of accounting and tax firms use or test AI, up from 40% in 2024.",
      "63% of firms using AI lack a formal AI policy, and only 40% are comfortable entering client information into AI tools.",
      "Firms using AI report 39% higher revenue per employee, but that is an association, not proof.",
    ],
    sections: [
      {
        id: "what-the-survey-found",
        title: "What the survey found",
        paragraphs: [
          "Rightworks, a provider of cloud solutions to accounting and tax professionals, ran a seven minute online survey in October 2026. It heard from 206 accounting and tax firms and 224 small and mid-sized businesses. The 2024 comparisons come from its earlier AI Tracker study.",
          "The headline numbers: 71% of firms use or test AI, up from 40% in 2024. And 74% of current AI users save at least two hours a week, up from 47% in 2024. Also, 55% do not expect headcount to change.",
        ],
      },
      {
        id: "why-an-ai-policy-for-accounting-firms-matters",
        title: "Why an AI policy for accounting firms matters",
        paragraphs: [
          "Use is racing ahead of rules. Of the firms using AI, 63% lack a formal AI policy. Ian Williams, CEO of Rightworks, said: \"Adoption has outrun governance as firms fear falling behind their peers.\" He also said: \"Most Firms are embracing AI with good intentions, but habit isn't policy.\"",
          "The firms know the risks. The top concerns are data privacy at 68% and inaccuracy at 62%. Knowledge and training is a distant third at 35%, after topping the list in 2024. Only 40% of AI-using firms are comfortable entering client information into AI tools.",
          "Output needs checking too. 39% of AI-using firms say AI output needs review often or always. The most common safeguard, at 61%, is checking output against original sources such as IRS publications and client records.",
          "Anjan Bagchee, CISO of Rightworks, said: \"Every firm should have a short list of approved AI tools, but few have the resources to build one.\"",
        ],
      },
      {
        id: "strong-association-not-proof",
        title: "A strong association, not proof",
        paragraphs: [
          "Firms actively using AI report 39% higher revenue per employee than firms still testing or not using it. CPA Practice Advisor calls this a \"strong association\". It is not proof that AI caused the gain. Busier, better run firms may simply adopt AI sooner.",
        ],
      },
      {
        id: "who-ran-the-survey",
        title: "Who ran the survey",
        paragraphs: [
          "Rightworks sells compliance and AI tools, so it has a commercial interest in this topic. Read the survey as a vendor's view. The research was previewed at Thomson Reuters Synergy, November 16 to 19, 2026, and the full report is in early access.",
        ],
      },
    ],
    take: {
      id: "my-take",
      title: "My take",
      paragraphs: [
        "This part is my opinion, not a finding of the survey.",
        "If you own a small business, your accountant probably uses AI on your books. Ask three questions. Which AI tools do you use on my work? Who checks the output? Where does my data go?",
        "If you are an accountant, write a one page policy this week. List the approved tools. Name who reviews the output. Say what client information may go in, and what may not. Checking against source records is the right habit. It is the same habit as checking an AI-drafted [bank reconciliation](/use-cases/automated-bank-reconciliation) against the statement.",
        "None of this is new. Microsoft's [Copilot accounting skills](/blog/copilot-accounting-skills-excel) still rely on a person to approve the work, and [Numica](/blog/numica-buys-retiring-accounting-firms) has accountants check what its AI produces.",
      ],
    },
    forYou: [
      "Owners: ask your accountant which AI tools they use, who checks the output, and where your data goes.",
      "Accountants: write a one page AI policy this week, with approved tools and a review step.",
      "Everyone: AI can save time, but a person still checks the work.",
    ],
    source: {
      publisher: "CPA Practice Advisor",
      title:
        "AI Use in Accounting Firms Surges 78%, With 39% Higher Revenue Per Employee for Active Users",
      note: "By Isaac M. O'Bannon, November 16, 2026. The survey is the Rightworks AI in Accounting 2026 Benchmark Report. Rightworks is a vendor, so it has a commercial interest.",
      links: [
        {
          href: "https://www.cpapracticeadvisor.com/2026/11/16/ai-use-in-accounting-firms-surges-78-with-39-higher-revenue-per-employee/193930/",
          label: "Read the article on CPA Practice Advisor",
        },
        {
          href: "https://www.rightworks.com/resources/ai-accounting-report/",
          label: "See the Rightworks AI in Accounting 2026 Benchmark Report page",
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
        href: "/blog/copilot-accounting-skills-excel",
        label: "Microsoft is putting accounting skills inside Excel's Copilot",
        text: "A post: what Copilot drafts, and who approves it.",
      },
      {
        href: "/blog/numica-buys-retiring-accounting-firms",
        label: "An AI start-up is buying retiring accountants' firms",
        text: "A post: Numica runs small accounting firms on AI, with accountants checking the output.",
      },
      {
        href: "/blog/clients-check-accountants-with-ai",
        label: "AI accounting clients are checking their accountant's work",
        text: "A post: TaxDome says most clients who use AI would check their accountant with AI.",
      },
      {
        href: "/blog",
        label: "All posts",
        text: "Every post on the blog, newest first.",
      },
    ],
    cta: {
      title: "Does your business have an AI policy?",
      text: "If you want to know where AI fits in your books, and who should check it, book a free 30 minute call or send me a message on Instagram. No obligation.",
    },
    images: {
      hero: {
        src: "/images/blog/accounting-firms-ai-adoption-no-policy-hero.webp",
        width: 1600,
        height: 900,
        alt: "A small accounting office at night, an accountant reading a printed one page AI policy beside a glowing laptop.",
        caption: "An AI-generated image of the idea, not a photo of real people.",
      },
      inline: {
        afterSectionId: "why-an-ai-policy-for-accounting-firms-matters",
        image: {
          src: "/images/blog/accounting-firms-ai-adoption-no-policy-review.webp",
          width: 1600,
          height: 900,
          alt: "An accountant checking an AI-prepared report against paper client records at a desk.",
          caption:
            "An AI-generated image of the idea, not a photo of real people.",
        },
      },
    },
  },
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
        href: "/blog/accounting-firms-ai-adoption-no-policy",
        label: "Most accounting firms use AI, few have a policy",
        text: "A post: what a Rightworks survey says, and what to ask your accountant.",
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
        href: "/blog/accounting-firms-ai-adoption-no-policy",
        label: "Most accounting firms use AI, few have a policy",
        text: "A post: what a Rightworks survey says, and what to ask your accountant.",
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
