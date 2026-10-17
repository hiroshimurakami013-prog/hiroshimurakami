import type { LocationDetail } from "../locations.ts";

// Burbank: media and entertainment, and the many vendors, post-production
// houses, rental companies and freelancers around the studios. The angle is
// project-based work: crews, vendors, invoices and handoffs that change with
// every production.

export const BURBANK: LocationDetail = {
  seoTitle: "AI for Burbank Media and Production | Hiroshi Murakami",
  seoDescription:
    "AI workflows for Burbank media, post-production and production vendors: invoice chasing, project handoffs, a CRM that fits and weekly reporting.",
  headline: "AI for Burbank's media companies and the vendors behind every production",
  lead: "Burbank is one of the best known media and entertainment centres in the world, and around the large studios sits an ecosystem of smaller businesses: post-production and VFX houses, equipment and prop rental, catering, transport, payroll services, casting and a lot of independent crew. Almost all of them work project by project. Every job brings a new client contact, a new set of deliverables and a new stack of invoices, and that is exactly where admin quietly eats the margin.",
  angle:
    "Media, post-production and the vendors around the studios. Project-based work where every job brings new contacts, handoffs and invoices.",
  sections: [
    {
      kind: "prose",
      heading: "Project work breaks generic tools",
      paragraphs: [
        "Most off-the-shelf CRMs assume a steady sales pipeline: a lead becomes an opportunity becomes a customer. Production work does not look like that. A rental house might deal with the same production company on five shows at once, each with its own coordinator, purchase order and return dates. A post house tracks deliverables, revisions and approvals that change daily.",
        "Large platforms such as Salesforce can be configured for this, and they are powerful, but the configuration takes time, the per-seat pricing adds up for freelancers and part-time crew and the result is often a process bent to fit the tool. A smaller custom system, built around jobs, deliverables and vendors, usually fits better and costs less to run.",
      ],
    },
    {
      kind: "points",
      heading: "Where the admin hides on a production",
      intro: "These are the spots where Burbank vendors and media teams usually lose hours, and what AI can take over.",
      points: [
        {
          title: "Invoices chased after wrap",
          text: "Once a show wraps, the people who approved your invoice move on to the next one. AI follow-ups send polite, well-timed reminders with the invoice and PO attached, and escalate to you when a reply needs a human touch.",
        },
        {
          title: "Handoffs between departments",
          text: "When a booking is confirmed, prep, transport and billing all need to know. Automated handoffs pass the job details to each team the moment status changes, so nothing waits on someone remembering to forward an email.",
        },
        {
          title: "Weekly status and market notes",
          text: "An AI agent can compile weekly job status from your tools, or keep an eye on public production announcements and industry news relevant to your services, with links to every source.",
        },
        {
          title: "The same pricing questions",
          text: "Rates, availability, insurance requirements, pickup times. A voice agent or support assistant answers the routine ones and books a callback for the rest.",
        },
      ],
    },
    {
      kind: "split",
      heading: "Busy seasons, quiet seasons",
      paragraphs: [
        "Production work comes in waves. During a busy stretch, everyone is on set or in the edit bay and nobody is watching the inbox. In a quiet stretch, the team is small and every enquiry matters. AI is useful in both: it carries the routine work when people are stretched, and makes sure no new enquiry is missed when the team is lean.",
      ],
      asideHeading: "Kept with your team",
      aside: [
        "Rates and deal terms are confirmed by a person, never invented by the AI.",
        "Anything involving a dispute or a late payment escalation goes to you.",
        "Client and production details stay private and are not used to train public AI models.",
      ],
    },
  ],
  serviceOrder: [
    "custom-crm-and-workflows",
    "ai-follow-ups",
    "ai-agents",
    "custom-voice-agents",
    "ai-accounting",
    "ai-lead-qualification",
    "ai-customer-support",
    "ai-receptionist",
  ],
  serviceNotes: {
    "custom-crm-and-workflows":
      "A system built around jobs, deliverables and vendors, instead of a generic sales pipeline.",
    "ai-follow-ups":
      "Invoice reminders that keep going after the show wraps and the approvers move on.",
    "ai-agents":
      "Weekly job status and industry news summaries, compiled with sources.",
    "custom-voice-agents":
      "Rates, availability and pickup questions answered without pulling someone off set.",
  },
  useCases: [
    {
      slug: "overdue-invoice-reminders",
      note: "For production vendors whose invoices go quiet once a show wraps and the coordinator has moved on.",
    },
    {
      slug: "automated-handoffs",
      note: "For rental houses and post facilities where a confirmed booking has to reach prep, transport and billing at once.",
    },
    {
      slug: "when-salesforce-does-not-fit",
      note: "For media businesses that tried a big CRM and found it was built for a sales pipeline, not for productions.",
    },
    {
      slug: "automated-research-and-reporting",
      note: "For small media teams that want weekly status reports and industry notes without building them by hand.",
    },
  ],
  faqs: [
    {
      question: "Can a custom system handle many productions with the same client?",
      answer:
        "Yes. That is one of the main reasons to build one. Jobs, contacts, purchase orders and deliverables are modelled the way you actually work, so one production company can have several active shows, each with its own people and paperwork.",
    },
    {
      question: "Will reminder emails damage relationships with production accounting teams?",
      answer:
        "The reminders are written in your tone, reference the right PO and job, and stop as soon as a payment or a reply arrives. You set how firm they get and when a person takes over.",
    },
    {
      question: "We are a small vendor with mostly freelance crew. Is this worth it for us?",
      answer:
        "Often more so, because there is no office manager to absorb the admin. A focused system with no per-seat fees for every freelancer can be a better fit than a large platform. The free audit is the place to find out.",
    },
  ],
  neighbours: ["glendale", "pasadena", "los-angeles"],
  ctaTitle: "Take the admin out of your next Burbank production",
};
