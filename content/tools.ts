// Free tools. Each runs entirely in the visitor's browser: no inputs are
// sent anywhere or stored. If a tool ever needs a server or storage,
// update /privacy truthfully first.

export type ToolFaq = { question: string; answer: string };

export const SAVINGS_CALCULATOR = {
  path: "/tools/accounting-automation-savings-calculator",
  name: "Accounting automation savings calculator",
  shortName: "Savings calculator",
  seoTitle: "Accounting Automation Savings Calculator | Hiroshi Murakami",
  seoDescription:
    "Free calculator: estimate the hours and dollars AI accounting automation could save each month on bookkeeping, bank reconciliation and invoice entry.",
  /** The answer-first lead under the H1. */
  lead: "This free calculator estimates how many bookkeeping hours, and how many dollars, AI accounting automation could save your business each month, from four numbers you already know. It runs in your browser, stores nothing and shows every assumption, so you can judge the estimate for yourself.",
  /** One line for links from other pages. */
  teaser:
    "Four numbers in, an estimate of hours and dollars saved per month out, with every assumption shown.",
  faqs: [
    {
      question: "How accurate is this estimate?",
      answer:
        "It is a rough, transparent estimate, not a quote or a promise. It uses fixed assumptions about how long manual entry and matching take and how much review remains, which are listed under the result. Real savings depend on how tidy your books are, your mix of transactions and how much review you choose to keep.",
    },
    {
      question: "Do you store the numbers I enter?",
      answer:
        "No. The calculation happens in your browser. Nothing you type is sent to a server, saved or tracked by this tool.",
    },
    {
      question: "Why does the result show a range?",
      answer:
        "Because the time a task takes varies a lot between businesses. The low end uses cautious assumptions and the high end more favourable ones, and both are capped so the estimate never exceeds a share of the hours you entered.",
    },
    {
      question: "What does the estimate leave out?",
      answer:
        "Setup time, software and AI running costs, and the time spent on a catch-up if the books are behind. Those are discussed in the free AI audit, where the estimate can be replaced with figures from your own books.",
    },
  ] as ToolFaq[],
};

/**
 * The calculator's assumptions. Shown on the page next to the result, and
 * used by the calculation, so the two can never disagree.
 */
export const SAVINGS_ASSUMPTIONS = {
  /** Weeks per month. */
  weeksPerMonth: 52 / 12,
  /** Minutes saved per supplier invoice (manual entry minus AI review). */
  minutesPerInvoice: { low: 2, high: 4 },
  /** Hours of matching saved per bank or card account per month. */
  hoursPerAccount: { low: 1.5, high: 3 },
  /** Share of the remaining bookkeeping hours that AI can take on. */
  otherShare: { low: 0.1, high: 0.25 },
  /** The estimate never exceeds this share of the hours entered. */
  cap: 0.7,
};
