import type { LocationDetail } from "../locations.ts";

// Pasadena: science and research, healthcare and a deep bench of
// professional firms. The angle is knowledge work, precision and client
// trust, so the page leads with accuracy and review rather than speed.

export const PASADENA: LocationDetail = {
  seoTitle: "AI for Pasadena Firms and Practices | Hiroshi Murakami",
  seoDescription:
    "AI for Pasadena professional firms, medical practices and research-minded teams: front desk cover, internal knowledge assistants and reconciliation.",
  headline: "Careful AI for Pasadena's firms, practices and research-minded teams",
  lead: "For AI consulting and AI automation in Pasadena, I work remotely with professional firms, medical practices and research-minded teams to find the repetitive work AI can safely take on, then build it with a person reviewing what matters. Good first projects here are an internal assistant that answers staff questions from the firm's own documents, AI reconciliation for busy books and overflow call cover for the front desk. Pasadena is known for science and research, for healthcare and for law, accounting, wealth management, architecture and engineering firms, where a wrong answer to a client is worse than a slow one. So this page starts with how the AI is checked, and only then with what it does.",
  keyFacts: [
    "Hiroshi Murakami offers AI consulting to Pasadena businesses remotely, with every meeting held online.",
    "AI consulting for a Pasadena business starts with a free AI audit on a video call.",
    "Sensible first AI automation projects for a Pasadena firm include a knowledge assistant over internal procedures, reconciliation prepared for review and overflow call cover.",
    "Client advice and clinical questions at Pasadena firms and practices always go to a professional, never to the AI.",
  ],
  angle:
    "Professional firms, healthcare practices and research-minded teams. Accuracy first, with every answer traceable to a source.",
  sections: [
    {
      kind: "points",
      heading: "Built for work that has to be right",
      intro:
        "Every system set up for a Pasadena firm or practice follows the same three rules, whatever it does.",
      points: [
        {
          title: "Answers come from your sources",
          text: "An internal assistant only answers from the documents you give it, such as procedures, templates, policies and past guidance, and it shows which document each answer came from. If the answer is not in the sources, it says so instead of guessing.",
        },
        {
          title: "People sign off on what matters",
          text: "Reconciliations are prepared by AI and approved by a person. Client advice, clinical questions and anything with legal weight always go to a professional. The AI drafts and sorts, it does not decide.",
        },
        {
          title: "Everything leaves a trail",
          text: "Calls, messages and matched transactions are logged with what the AI did and why, so a partner, a practice manager or an auditor can check the work later.",
        },
      ],
    },
    {
      kind: "split",
      heading: "Professional firms: protect the senior people's time",
      paragraphs: [
        "In a small law, accounting or engineering firm, the most experienced people end up answering the same internal questions again and again. Where is the latest engagement letter template? How do we handle this kind of request? What did we decide last time a client asked this? Each question takes a minute, and there are dozens a week.",
        "An internal knowledge assistant, trained only on the firm's own documents, gives junior staff a first answer with a link to the source, so they ask a partner only when the question really needs judgement. For accounting and bookkeeping firms, AI reconciliation does the first pass of matching bank lines to entries across client files, and the team reviews the exceptions.",
      ],
      asideHeading: "Good first projects for a firm",
      aside: [
        "An assistant over your procedures and templates, for internal use only.",
        "Bank reconciliation prepared for review across client books.",
        "A front desk that books consultations and screens new enquiries politely.",
      ],
    },
    {
      kind: "prose",
      heading: "Medical and wellness practices: the phone and the handover",
      paragraphs: [
        "Pasadena's medical, dental and therapy practices face the classic front desk problem: patients call while staff are checking someone in, and the call goes to voicemail. An AI receptionist answers those overflow calls, books or moves appointments in your scheduling system and takes a clear message for anything else.",
        "The part that matters most here is the handover. When a caller needs a person, the AI passes them on with a written summary, so the patient does not have to repeat themselves and the staff member starts with context. The AI does not give clinical advice, and sensitive details are kept out of summaries unless they are needed.",
      ],
    },
    {
      kind: "points",
      heading: "What does AI consulting in Pasadena involve?",
      intro:
        "AI consulting for a Pasadena firm or practice involves choosing one task worth handing over, building it on your own sources, and agreeing who checks it. All of it happens remotely.",
      points: [
        {
          title: "What the first call covers",
          text: "The free 30 minute video call looks at which questions and tasks keep returning to your senior people or front desk, which software and documents are involved, and what must never be left to AI. If nothing is worth building yet, you hear that.",
        },
        {
          title: "What gets built first",
          text: "One narrow piece, with a result your team can verify. For a design or engineering firm that may be a search over its own standards and templates. For an accounting practice it may be one client's reconciliation, and for a clinic, calls at the busiest hour.",
        },
        {
          title: "How it is reviewed",
          text: "Before launch, the people who know the subject mark sample answers as right, wrong or unclear, in shared online sessions. Afterwards a named reviewer keeps approving what leaves the firm, and more is added only once that reviewer is satisfied.",
        },
      ],
    },
  ],
  serviceOrder: [
    "ai-agents",
    "ai-accounting",
    "ai-receptionist",
    "ai-customer-support",
    "ai-lead-qualification",
    "custom-crm-and-workflows",
    "ai-follow-ups",
    "custom-voice-agents",
  ],
  serviceNotes: {
    "ai-agents":
      "Internal assistants that answer staff questions from the firm's own documents, with sources.",
    "ai-accounting":
      "Reconciliation prepared for review, for accounting firms and for businesses with busy books.",
    "ai-receptionist":
      "Overflow and after-hours calls for medical, dental and professional front desks.",
    "ai-customer-support":
      "Clean handovers to a person, so clients and patients never have to start again.",
  },
  useCases: [
    {
      slug: "internal-knowledge-assistant",
      note: "For firms where partners and senior staff answer the same internal questions every week.",
    },
    {
      slug: "automated-bank-reconciliation",
      note: "For accounting and bookkeeping firms, and for businesses whose month-end matching takes days.",
    },
    {
      slug: "missed-calls-at-the-front-desk",
      note: "For medical, dental and therapy practices where the person at the desk is also checking patients in.",
    },
    {
      slug: "human-handover-with-context",
      note: "For practices and firms where the moment a client reaches a person needs to feel seamless.",
    },
    {
      slug: "ai-receptionist-for-accounting-firms",
      note: "For Pasadena CPA and bookkeeping firms whose preparers spend tax season answering the phone between returns.",
    },
  ],
  faqs: [
    {
      question: "Do you offer AI consulting for Pasadena businesses?",
      answer:
        "Yes, remote-first. It starts with a free AI audit on a video call, where we map where your team's hours go and which tasks AI could handle safely. I then build and test the workflows with you and we review the results together. There is no Pasadena office, so every meeting happens online.",
    },
    {
      question: "What is a sensible first AI automation project for a Pasadena firm?",
      answer:
        "Usually the one with the most repetition and the least risk: a knowledge assistant over internal procedures, reconciliation prepared for review, or overflow call cover. Client advice and anything with legal or clinical weight stays with your professionals from day one.",
    },
    {
      question: "Can an internal assistant keep confidential client documents private?",
      answer:
        "Yes. It is set up for your team only, access follows the permissions you choose and your documents are not used to train public AI models. Folders that hold privileged or highly sensitive material can be left out entirely.",
    },
    {
      question: "We are a medical practice. What does the AI receptionist not do?",
      answer:
        "It does not give clinical advice, triage symptoms or discuss test results. It books, reschedules, answers practical questions such as hours and parking and passes everything else to your staff with a summary.",
    },
    {
      question: "Our firm uses specialist practice management software. Will this work with it?",
      answer:
        "It depends on whether the software has an official connection or a reliable export. Many do. We check during the free audit and say plainly if it does not, before anything is built.",
    },
  ],
  neighbours: ["glendale", "burbank", "los-angeles"],
  ctaTitle: "See where AI could help your Pasadena firm or practice",
};
