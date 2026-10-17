import type { LocationDetail } from "../locations.ts";

// A coastal city with two very different business rhythms: hospitality,
// wellness and retail that live on bookings and reviews, and startups that
// live on reporting, investors and lean teams.

export const SANTA_MONICA: LocationDetail = {
  seoTitle: "AI for Santa Monica Businesses | Hiroshi Murakami",
  seoDescription:
    "AI booking, review requests, round-the-clock support and month-end reporting for Santa Monica hospitality, wellness and startup teams. Remote-first.",
  headline: "AI for Santa Monica, from the studio front desk to the startup board deck",
  lead: "Santa Monica businesses tend to run on one of two clocks. Hotels, restaurants, fitness and wellness studios and shops run on bookings, walk-ins and reviews, with a busy season and a quiet one. The startups and small tech and creative teams that the Westside is known for run on investor updates, month-end numbers and very lean headcounts. The AI that helps each of them looks quite different.",
  angle:
    "Hospitality, wellness and retail on one side, startups on the other. Bookings and reviews, or reporting and lean teams.",
  sections: [
    {
      kind: "split",
      heading: "For studios, hotels, restaurants and shops",
      paragraphs: [
        "A yoga or pilates studio, a salon, a boutique hotel and a beachside restaurant share a problem: the person who should be welcoming the customer in front of them is also the person answering the phone, moving bookings and replying to messages from visitors who are still planning their trip.",
        "AI booking assistants take over the back and forth. They offer real open slots from your booking system, move appointments when someone runs late, fill cancellations from a waitlist and confirm the day before. After the visit, a short, polite message asks happy customers for a review and invites regulars to book again. Visitors comparing options from another time zone get an answer at any hour.",
      ],
      asideHeading: "Why it matters here",
      aside: [
        "Visitors often plan from out of town, so many questions arrive outside opening hours.",
        "Reviews carry real weight when people are choosing between nearby options they have never tried.",
        "A seasonal rush is hard to staff for, and hard to unwind afterwards.",
      ],
    },
    {
      kind: "points",
      heading: "For startups and small product teams",
      intro:
        "Early-stage teams on the Westside rarely have a finance person, an operations person or a support lead. Founders cover all three. AI is useful where the work is repetitive and the stakes are clear.",
      points: [
        {
          title: "Month-end without the scramble",
          text: "AI accounting keeps transactions categorised during the month, so the close is a review rather than a weekend project, and the numbers for an investor update are ready when you need them. Your accountant still signs off.",
        },
        {
          title: "Competitor and market notes on a schedule",
          text: "An AI agent can watch pricing pages, changelogs and news for the companies you care about and send a short weekly summary, with links to every source so you can check it.",
        },
        {
          title: "Support that covers the hours you sleep",
          text: "A support assistant trained on your help docs answers common questions overnight and hands anything about billing, bugs or account access to a person with the full thread.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Remote-first suits the Westside",
      paragraphs: [
        "Many Santa Monica teams already work in a hybrid way, with people in the city some days and at home on others. The work here follows the same pattern. The free audit is a video call, setup is done online with access you control, and check-ins are short and scheduled around your busy hours, not in the middle of a Saturday brunch rush or a launch week.",
      ],
    },
  ],
  serviceOrder: [
    "ai-receptionist",
    "ai-follow-ups",
    "ai-customer-support",
    "ai-accounting",
    "ai-agents",
    "ai-lead-qualification",
    "custom-voice-agents",
    "custom-crm-and-workflows",
  ],
  serviceNotes: {
    "ai-receptionist":
      "Booking, rescheduling and visitor questions for studios, salons, hotels and restaurants.",
    "ai-follow-ups":
      "Review requests and rebooking messages after a visit, sent at a sensible time.",
    "ai-customer-support":
      "Overnight answers for startups and for visitors planning from another time zone.",
    "ai-accounting":
      "Clean monthly numbers for founders who report to investors without a finance hire.",
    "ai-agents":
      "Scheduled research and weekly summaries for small product and marketing teams.",
  },
  useCases: [
    {
      slug: "appointment-booking-and-rescheduling",
      note: "The everyday reality of a busy studio or salon, where the front desk spends half its day moving bookings around.",
    },
    {
      slug: "review-requests-and-rebooking",
      note: "For hospitality and wellness businesses where new customers choose by reading reviews and regulars keep the lights on.",
    },
    {
      slug: "after-hours-customer-support",
      note: "For startups with customers in other time zones, and for hotels and restaurants answering visitors who plan late at night.",
    },
    {
      slug: "faster-month-end-reporting",
      note: "For founders who need reliable monthly numbers for an investor update without a full-time finance person.",
    },
    {
      slug: "automated-research-and-reporting",
      note: "For lean product and marketing teams that want competitor and market notes without spending Monday morning collecting them.",
    },
  ],
  faqs: [
    {
      question: "We are a small studio. Will an AI booking assistant work with our booking software?",
      answer:
        "Usually, yes, as long as the software has an official connection or a calendar sync. Many of the booking tools used by studios and salons do. We check yours during the free audit before anything is promised.",
    },
    {
      question: "How do review requests stay on the right side of the platforms' rules?",
      answer:
        "The messages ask every customer the same way, never offer rewards for reviews and never filter out people who might be unhappy. That keeps them within the usual platform guidelines and keeps them honest.",
    },
    {
      question: "We are an early-stage startup. Is AI accounting a replacement for our accountant?",
      answer:
        "No. It does the categorising and matching during the month so your accountant or fractional CFO reviews clean books instead of rebuilding them. They stay responsible for the close and for anything tax related.",
    },
  ],
  neighbours: ["culver-city", "beverly-hills", "los-angeles"],
  ctaTitle: "Give your Santa Monica team its evenings back",
};
