import type { LocationDetail } from "../locations.ts";

// Culver City: media and tech studios, agencies and a busy restaurant and
// retail scene. The angle is the small agency or studio: client work,
// retainers, project billing and a stack of tools that grew too fast.

export const CULVER_CITY: LocationDetail = {
  seoTitle: "AI for Culver City Studios and Agencies | Hiroshi Murakami",
  seoDescription:
    "AI for Culver City media and tech studios and agencies: a CRM built around your projects, invoice reminders, research reports and instant lead replies.",
  headline: "AI for Culver City's studios, agencies and tech teams",
  lead: "Culver City has a long history as a home for film and television studios, and in recent years it has become a hub for streaming, tech and creative companies as well. Around them sits a busy layer of agencies, production companies, design studios and consultancies, most of them small teams doing client work. They tend to share the same headaches: projects that outgrow the tools, invoices that slip and new business that arrives at the worst possible moment.",
  angle:
    "Media and tech studios, agencies and consultancies. Client work, retainers and a tool stack that grew too fast.",
  sections: [
    {
      kind: "split",
      heading: "When the CRM does not fit how an agency works",
      paragraphs: [
        "Agencies and studios often start with a big-name CRM because it seems like the safe choice. Salesforce and its peers are capable platforms, but they are designed around generic sales objects. An agency thinks in clients, retainers, projects, briefs, deliverables and change requests. Bending a generic system to that model can take weeks of configuration, and per-seat pricing grows with every freelancer you add.",
        "A custom CRM and workflow system is built around your objects from the start. A new brief creates a project, tasks reach the right people, approvals are tracked and billing knows when a milestone is hit. It connects to the tools you already like, such as your project tracker, chat and accounting software, instead of replacing all of them.",
      ],
      asideHeading: "Signs it is time",
      aside: [
        "Project status lives in a spreadsheet next to the CRM.",
        "You pay for seats nobody really uses.",
        "Billing finds out about scope changes at the end of the month.",
      ],
    },
    {
      kind: "points",
      heading: "Three habits worth automating",
      points: [
        {
          title: "Chasing invoices without the awkwardness",
          text: "Creative businesses often wait on payment while the client relationship is still active, which makes chasing uncomfortable. AI follow-ups send friendly, well-timed reminders in your voice and stop the moment a payment lands.",
        },
        {
          title: "Replying to new business in minutes",
          text: "A promising enquiry arrives while the whole team is in a pitch or a shoot. AI replies straight away, asks the questions you would ask and books a call with the right person.",
        },
        {
          title: "Reports that write themselves",
          text: "Weekly client status, competitor activity and campaign notes can be compiled by an AI agent from your tools and public sources, with every claim linked, ready for a person to check and send.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Restaurants and shops downtown",
      paragraphs: [
        "Culver City's restaurant and retail scene draws people from across the Westside. For these businesses, the most useful starting points are simpler: an AI receptionist for reservations and opening hours questions, review requests after a visit and invoice capture for the supplier paperwork that piles up behind the counter.",
      ],
    },
  ],
  serviceOrder: [
    "custom-crm-and-workflows",
    "ai-follow-ups",
    "ai-lead-qualification",
    "ai-agents",
    "custom-voice-agents",
    "ai-accounting",
    "ai-receptionist",
    "ai-customer-support",
  ],
  serviceNotes: {
    "custom-crm-and-workflows":
      "Built around clients, retainers, projects and deliverables rather than a generic sales pipeline.",
    "ai-follow-ups":
      "Friendly invoice reminders that protect the client relationship.",
    "ai-lead-qualification":
      "New business enquiries answered while the team is in a pitch or a shoot.",
    "ai-agents":
      "Weekly client and market reports compiled with sources, ready for review.",
    "custom-voice-agents":
      "Instant callbacks to new web leads, so promising enquiries do not cool off.",
  },
  useCases: [
    {
      slug: "when-salesforce-does-not-fit",
      note: "The classic agency story: a capable CRM, built for a different business model.",
    },
    {
      slug: "overdue-invoice-reminders",
      note: "For studios and agencies that find it awkward to chase a client they are still working with.",
    },
    {
      slug: "instant-callback-for-web-leads",
      note: "For small teams who are often heads down on client work when a new enquiry comes in.",
    },
    {
      slug: "automated-research-and-reporting",
      note: "For agencies and tech teams that spend hours each week assembling client and competitor reports.",
    },
  ],
  faqs: [
    {
      question: "We already pay for a CRM. Do we have to throw it away?",
      answer:
        "Not necessarily. Sometimes the right answer is to connect it better and automate around it. Sometimes a smaller custom system replaces it and costs less. We look at both options honestly in the free audit.",
    },
    {
      question: "Can AI reports go straight to clients?",
      answer:
        "They should not, at least not at first. The AI drafts the report with links to every source, and a person on your team checks and sends it. Once you trust the format, you decide how much review it needs.",
    },
    {
      question: "Do you only work with media and tech companies in Culver City?",
      answer:
        "No. Restaurants, shops, clinics and service businesses are just as welcome. Media and tech simply shape the business mix here, so this page leans that way.",
    },
  ],
  neighbours: ["santa-monica", "beverly-hills", "inglewood", "los-angeles"],
  ctaTitle: "Give your Culver City team more time for the actual work",
};
