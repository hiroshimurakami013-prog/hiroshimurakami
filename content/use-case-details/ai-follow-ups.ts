import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Follow-Ups use cases. Illustrative scenarios,
// no client names and no numbers.

export const AI_FOLLOW_UPS_DETAILS: Record<string, UseCaseDetail> = {
  "unanswered-quote-follow-ups": {
    seoTitle: "AI Follow-Ups for Unanswered Quotes | Hiroshi Murakami",
    seoDescription:
      "Quotes that never get a reply are followed up on a schedule you set, in your tone, and every answer reaches the right person. An illustrative scenario.",
    lead: "You visited the site, measured up, wrote a careful quote and sent it. Then silence. This scenario shows how AI follow-ups keep those quotes alive without anyone having to remember to chase.",
    problem: [
      "Picture a landscaping firm, a kitchen fitter, a commercial cleaner or a signage company. Quotes take real effort: a site visit, measurements, pricing materials and writing it up. Once sent, many of them get no reply at all.",
      "Often the customer is still interested. They got busy, wanted to compare, had a question they never asked or simply forgot. A polite nudge at the right moment would bring many of them back. But the owner is out on jobs, the office is busy, and following up feels pushy, so it rarely happens consistently. Quotes sit in the sent folder until they are too old to matter.",
      "With material and labour costs rising, every quote represents more of the business's time and money. Letting good ones fade away without a single follow-up is an expensive habit.",
    ],
    usualTools: [
      "Calendar reminders and sticky notes work until the week gets busy. Many quoting tools offer an automatic reminder email, which helps, though it is usually one generic message that reads like a system notice rather than a person.",
      "A full sales CRM can run sequences, but setting one up properly takes time, often costs per user, and it is built for sales teams rather than a trade business where the person quoting is also the person doing the work.",
    ],
    steps: [
      {
        title: "Quotes are picked up automatically",
        text: "When a quote is sent from your quoting tool, accounting software or email, it is added to a follow-up list with the customer, amount and date.",
      },
      {
        title: "A schedule you choose",
        text: "You set the rhythm, for example a check-in after a few days, a helpful note a week later and a final message before the quote expires.",
      },
      {
        title: "Messages that sound like you",
        text: "AI drafts each follow-up in your tone, refers to the actual job and offers something useful, such as answering questions or adjusting the scope. You approve the templates once.",
      },
      {
        title: "Replies stop the sequence",
        text: "The moment the customer replies, accepts or declines, follow-ups stop. The AI reads the reply and routes it: questions to the estimator, acceptances to scheduling, declines logged with the reason.",
      },
      {
        title: "A simple view of every open quote",
        text: "You see which quotes are waiting, which have replied and which have gone quiet, without maintaining a spreadsheet.",
      },
    ],
    outcomes: [
      "Every quote gets followed up, not just the ones someone remembers.",
      "Customers hear from you politely and helpfully, not with a hard sell.",
      "Replies and questions reach the right person quickly.",
      "You learn why quotes are declined, which helps with pricing and scope.",
    ],
    requirements: [
      "Where your quotes are created and sent from",
      "Your preferred follow-up rhythm and tone",
      "Who should receive replies and acceptances",
      "Email or text sending from your own business address or number",
    ],
    humanInTheLoop:
      "You approve the message templates before anything is sent and can pause follow-ups for any customer. The AI never changes prices or terms. Questions, negotiations and complaints always go to a person.",
    privacy:
      "Customer details stay in your own tools. Messages are sent from your business address, only to customers who requested a quote, with an easy way to opt out. Nothing is used to train public AI models.",
  },

  "overdue-invoice-reminders": {
    seoTitle: "AI Overdue Invoice Reminders | Hiroshi Murakami",
    seoDescription:
      "Polite reminders go out before and after each due date and stop as soon as the customer pays, while disputes go to a person. An illustrative scenario.",
    lead: "Most owners hate chasing money, especially from customers they like. This scenario shows how AI sends courteous, well-timed reminders and leaves the delicate conversations to people.",
    problem: [
      "Think of a marketing agency, an IT support company or a production services firm with mostly business customers on payment terms. Invoices go out on time, and then a share of them drift past the due date. Nobody chases until cash gets tight, and by then the overdue list is long and some invoices are months old.",
      "Chasing feels awkward. The owner worries about damaging relationships, and whoever does the books has a dozen other jobs. Reminders, when they happen, come in a rush and in inconsistent tones, sometimes too soft to work, sometimes too sharp for a good customer who simply missed an email.",
      "Higher costs elsewhere in the business make late payment hurt more: payroll and rent are due on time even when customers pay late.",
    ],
    usualTools: [
      "Accounting software can send automatic reminders, and many businesses switch them on. They are typically generic, go to whatever address is on the invoice and do not know that the customer already said the payment is on its way or that there is a dispute about one line.",
      "Collection agencies and factoring are options for serious problems, but they cost money and change the relationship. For ordinary late payment, what most businesses need is consistent, polite follow-up.",
    ],
    steps: [
      {
        title: "Invoices are watched",
        text: "Open invoices are read from your accounting software, along with due dates, amounts and contacts, and updated as payments arrive.",
      },
      {
        title: "A friendly heads-up before the due date",
        text: "A short note a few days before an invoice is due, with the invoice and payment link attached, prevents many late payments altogether.",
      },
      {
        title: "Courteous reminders after it",
        text: "If the due date passes, reminders follow on the schedule you set, becoming firmer over time but always polite and in your voice.",
      },
      {
        title: "Replies are understood",
        text: "When a customer replies, the AI reads it. A promise to pay is noted and reminders pause until that date. A question about the invoice or a dispute goes straight to a person.",
      },
      {
        title: "Everything stops at payment",
        text: "As soon as the payment is recorded, reminders stop and, if you like, a thank-you is sent.",
      },
    ],
    outcomes: [
      "Every invoice is followed up consistently, without anyone dreading it.",
      "Customers get clear, friendly reminders with an easy way to pay.",
      "Disputes surface early, while they are still easy to resolve.",
      "You see at a glance which customers are late and what they have said.",
    ],
    requirements: [
      "Your accounting software, with read access to invoices and payments",
      "Your payment terms and the reminder rhythm you want",
      "The right contact for accounts at each customer, where it differs from the main contact",
      "Customers who should never get automatic reminders",
    ],
    humanInTheLoop:
      "You approve the wording of each stage. Disputes, hardship and any customer you mark as sensitive are always handled by a person. The AI never threatens action, adds fees or changes terms unless you have agreed that in advance.",
    privacy:
      "Invoice data is read from your accounting software and messages go only to the customer's billing contacts. Nothing is used to train public AI models, and access is limited to your finance team.",
  },

  "review-requests-and-rebooking": {
    seoTitle: "AI Review Requests and Rebooking | Hiroshi Murakami",
    seoDescription:
      "After each completed job, customers get a thank-you, a review link and, where it fits, a reminder to book again. An illustrative AI follow-up scenario.",
    lead: "The moment a job is finished is the best time to say thank you, ask for a review and plant the idea of the next visit. This scenario shows AI doing that every time, so it no longer depends on memory.",
    problem: [
      "Imagine a car detailer, a dog groomer, a hair salon, an HVAC company with seasonal servicing or a dental practice. Customers are happy when they leave. A short message afterwards asking for a review would often get one, and a reminder at the right time would bring many of them back.",
      "In practice, nobody sends it. The team is already on to the next customer. Review requests go out in bursts when someone remembers, or never. Regular customers drift away not because they were unhappy but because nobody reminded them it was time.",
      "Online reviews matter more than ever when people choose a local business, and winning a new customer usually takes more effort than keeping an existing one.",
    ],
    usualTools: [
      "Many booking and point of sale systems offer a review request feature. It is worth using, though it is usually a single generic message sent to everyone, including the customer who just had a bad experience.",
      "Dedicated review platforms are sophisticated and often priced for multi-location businesses. Review gating, asking only happy customers to post, goes against the rules of some review platforms, so it is important to set this up honestly.",
    ],
    steps: [
      {
        title: "A finished job triggers the follow-up",
        text: "When a job is marked complete or an appointment is checked out, the follow-up starts automatically.",
      },
      {
        title: "A personal thank-you",
        text: "AI writes a short thank-you that mentions the actual service, sent by text or email from your business.",
      },
      {
        title: "An honest review request",
        text: "Every customer is offered a link to leave a review, following the platform's rules. Any reply that mentions a problem is sent to a person to resolve.",
      },
      {
        title: "A rebooking reminder at the right time",
        text: "Based on the service, for example a six-monthly check-up or a seasonal service, the customer is reminded when it is time to book again, with a link or a number.",
      },
      {
        title: "Replies go to the team",
        text: "Questions, compliments and complaints are routed to the right person, and opt-outs are respected immediately.",
      },
    ],
    outcomes: [
      "Every happy customer is asked for a review, not just the ones someone remembers.",
      "Problems are heard privately and quickly, giving you a chance to put them right.",
      "Regular customers are reminded to come back when it is genuinely useful to them.",
      "The thank-you feels personal, because it refers to the actual job.",
    ],
    requirements: [
      "Your booking, job management or point of sale system",
      "Links to the review platforms you use",
      "Rebooking intervals for each type of service",
      "Who handles replies and complaints",
    ],
    humanInTheLoop:
      "You approve all message templates. Complaints and sensitive replies always go to a person, and nobody is ever offered anything in exchange for a review. You can pause messages for any customer.",
    privacy:
      "Only customers who have used your service are contacted, with a clear way to opt out. Contact details stay in your own systems, and nothing is used to train public AI models.",
  },
};
