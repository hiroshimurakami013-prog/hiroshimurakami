// Copy for /about, rendered by app/about/page.tsx. Also the source of the
// Person description in lib/schema.ts and of the About part of
// /llms-full.txt, so every description of Hiroshi Murakami agrees.
//
// Only facts the site already states. No years, employers, degrees,
// certifications, client names or office locations.
//
// TODO (owner): the LinkedIn headline, experience and education can be added
// here and on the page once the owner supplies them. Do not guess them.

import { PROCESS_STEPS } from "./services.ts";

export const ABOUT_PATH = "/about";

/** One sentence: name, role and area served. The lead of the page. */
export const ABOUT_DEFINITION =
  "Hiroshi Murakami is an AI automation and AI accounting consultant for small and mid-size businesses, serving Los Angeles County and clients worldwide, remote-first.";

export const ABOUT = {
  path: ABOUT_PATH,
  title: "About Hiroshi Murakami",
  seoTitle: "About Hiroshi Murakami, AI Automation and Accounting",
  seoDescription:
    "Hiroshi Murakami is an AI automation and AI accounting consultant serving Los Angeles County and clients worldwide, remote-first. See how the work is done.",
  keyFacts: [
    "Hiroshi Murakami builds AI automation and AI accounting for small and mid-size businesses.",
    "The AI does the first pass of repetitive work, and a person reviews what matters.",
    "Work is remote-first, for businesses across Los Angeles County and for clients worldwide. There is no office to visit.",
    "The first step is a free 30 minute AI audit by video call, with no obligation.",
  ],
  whatIDo: "I offer eight services in two fields. AI automation takes on calls, messages, leads and handoffs. AI accounting takes on the first pass of the bookkeeping.",
  howIWork:
    "Every project follows the same three steps. You stay in control, and you approve what the AI may do.",
  humanReview:
    "The AI does the first pass: it answers the routine question, drafts the follow-up or suggests how to code the invoice. A person reviews anything that matters before it counts. In accounting, your bookkeeper or accountant reviews and approves the results.",
  boundaries: [
    {
      title: "No invented results",
      text: "I do not publish made-up clients, reviews or statistics, and I do not promise a particular saving or income.",
    },
    {
      title: "No scenarios dressed up as case studies",
      text: "The use cases on this site are illustrative scenarios. Worked examples use labelled assumptions, not client results.",
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
