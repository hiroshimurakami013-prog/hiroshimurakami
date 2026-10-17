// The eight services. Names and slugs are fixed by docs/BUILD-PLAN.md
// section 6, and each one is rendered at /services/<slug> by the shared
// template in app/services/[slug]/page.tsx.
//
// `summary` is the one-line benefit shown on cards. Everything else is the
// copy of the service page, in the order the page shows it. Write plainly,
// no invented numbers, and say where a person reviews the work.

export type ServiceSlug =
  | "ai-accounting"
  | "ai-receptionist"
  | "custom-voice-agents"
  | "ai-agents"
  | "ai-follow-ups"
  | "ai-lead-qualification"
  | "custom-crm-and-workflows"
  | "ai-customer-support";

/** AI automation for the front office, AI accounting for the books. */
export type ServiceGroup = "automation" | "accounting";

export type ServiceFaq = { question: string; answer: string };
export type ServiceStep = { title: string; text: string };
export type ServiceProblem = { title: string; text: string };

export type Service = {
  slug: ServiceSlug;
  name: string;
  group: ServiceGroup;
  /** One line for cards on the home page and the services hub. */
  summary: string;
  /** schema.org serviceType. */
  serviceType: string;
  /** Page title, 60 characters or fewer. */
  title: string;
  /** Meta description, 155 characters or fewer. */
  description: string;
  /** The H1, without the closing full stop (the template adds it). */
  headline: string;
  /** The lead paragraph under the H1. */
  intro: string;
  /** What it is, in a few short paragraphs. */
  whatItIs: string[];
  /** Who it is for, as a short list. */
  whoFor: string[];
  /** Business problems it solves. */
  problems: ServiceProblem[];
  /** How it works, step by step. */
  steps: ServiceStep[];
  /** Optional split of the work between the AI and the people reviewing it. */
  division?: { ai: string[]; people: string[] };
  /** What the client provides to get started. */
  youProvide: string[];
  /** Where a person stays in the loop. */
  humanReview: string;
  /** How data is handled. */
  privacy: string;
  /** Two or three neighbouring services, linked at the foot of the page. */
  related: ServiceSlug[];
  /** A sentence on how this service fits businesses in the Los Angeles area. */
  localNote: string;
  /** Four to six questions, shown on the page (no FAQPage markup). */
  faqs: ServiceFaq[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    group: "automation",
    summary:
      "Calls picked up day or night, even when the front desk is busy. Questions handled, bookings made and messages passed to the right person.",
    serviceType: "AI receptionist and call answering",
    title: "AI Receptionist for Small Businesses | Hiroshi Murakami",
    description:
      "An AI receptionist that answers calls day or night, books appointments and passes clear messages to your team. Built for small businesses.",
    headline: "An AI receptionist that picks up when your team cannot",
    intro:
      "Callers reach someone helpful instead of voicemail, whether your front desk is at lunch, on another line or closed for the night. The AI answers questions, books appointments and sends your team a clear summary of every call.",
    whatItIs: [
      "An AI receptionist is a phone assistant with a natural voice that answers your business line. It knows your opening hours, services, prices you are happy to share, your booking rules and who handles what. It talks with callers the way a well briefed receptionist would.",
      "It can work as your main line, as overflow when your staff are busy, or only outside business hours. Every call ends with a short written summary sent to the right person, so nothing depends on someone remembering a voicemail.",
      "It does not replace the people who know your customers. It takes the routine calls and the calls that would otherwise be missed, so your team spends its time on the conversations that need them.",
    ],
    whoFor: [
      "Clinics, dental and wellness practices with a busy front desk",
      "Home service and trade businesses whose owners are on site all day",
      "Salons, studios and other appointment based businesses",
      "Law, accounting and other professional offices that miss calls between meetings",
      "Any business that sends too many callers to voicemail",
    ],
    problems: [
      {
        title: "Calls missed during the working day",
        text: "Lunch breaks, sick days and two calls at once all send callers to voicemail. Many of them simply call the next business on the list.",
      },
      {
        title: "After-hours calls that go nowhere",
        text: "Evenings and weekends are when many people finally have time to call. A recorded message rarely turns that call into a booking.",
      },
      {
        title: "A front desk buried in routine questions",
        text: "Opening hours, directions, parking and \"do you do this?\" fill the day and pull your staff away from the customers in front of them.",
      },
      {
        title: "Booking and rescheduling by phone",
        text: "Moving an appointment can take several calls back and forth. The AI can do it in one conversation, straight into your calendar.",
      },
    ],
    steps: [
      {
        title: "Map your calls",
        text: "We go through the calls you get today: who calls, what they ask, what should happen next and which calls must always reach a person.",
      },
      {
        title: "Write the playbook",
        text: "Your hours, services, booking rules, approved answers and escalation rules become the receptionist's script. You read and approve it before anything goes live.",
      },
      {
        title: "Connect your tools",
        text: "The receptionist connects to your phone line by call forwarding, and to your calendar or booking system where it allows connections, so it can check availability and book.",
      },
      {
        title: "Test with real scenarios",
        text: "We call it ourselves with the awkward cases: the angry caller, the urgent request, the question it should not answer. It goes live only when you are happy.",
      },
      {
        title: "Review and improve",
        text: "You get a summary of every call. We read them together in the first weeks and adjust the answers and rules where the receptionist could do better.",
      },
    ],
    youProvide: [
      "Your business phone number and the hours you want the AI to cover",
      "Your services, the prices you are happy to share and your booking rules",
      "Access to your calendar or booking system, if you want it to book",
      "Who should be told about which kind of call, and how (text, email or your CRM)",
      "The calls that must always go straight to a person",
    ],
    humanReview:
      "The AI introduces itself as an AI assistant. Urgent or sensitive calls are passed to a person at once, using the transfer and escalation rules you set, and every call summary lands with your team. You can listen to calls and change the script at any time.",
    privacy:
      "Callers are told when a call is recorded or transcribed. Recordings and transcripts are kept only as long as you need them, are not used to train public AI models, and access is limited to your team. Medical and other sensitive details are kept out of summaries where they are not needed.",
    related: ["custom-voice-agents", "ai-customer-support", "ai-lead-qualification"],
    localNote:
      "Across Los Angeles County, many small businesses run with a lean front desk, so an AI receptionist often works best as overflow and after-hours cover alongside the people already answering the phone.",
    faqs: [
      {
        question: "Will callers know they are talking to AI?",
        answer:
          "Yes. The receptionist introduces itself as an AI assistant for your business. Most callers care more about getting a quick, correct answer than about who gives it, and anyone who prefers a person can ask to leave a message or be transferred.",
      },
      {
        question: "Can I keep my current phone number?",
        answer:
          "Yes. Your existing number stays the same. Calls are forwarded to the AI receptionist, either always, only when nobody picks up, or only outside hours, depending on what you choose.",
      },
      {
        question: "What happens with an urgent call?",
        answer:
          "You define what counts as urgent. For those calls, the receptionist transfers the caller to a person or sends an immediate alert, following the rules you set for each time of day.",
      },
      {
        question: "Can it book appointments directly into my calendar?",
        answer:
          "In most cases, yes, as long as your calendar or booking system allows connections. If it does not, the receptionist collects the details and sends a booking request to your team to confirm.",
      },
      {
        question: "Does it replace my receptionist?",
        answer:
          "It is not meant to. It covers the calls your team cannot get to and takes over routine questions, so your receptionist can focus on the people in front of them and the calls that need a human.",
      },
    ],
  },
  {
    slug: "custom-voice-agents",
    name: "Custom Voice Agents",
    group: "automation",
    summary:
      "Natural phone conversations that confirm appointments, answer pricing questions and call new leads back quickly.",
    serviceType: "AI voice agent development",
    title: "Custom AI Voice Agents for Business Calls | Hiroshi Murakami",
    description:
      "Custom AI voice agents that confirm appointments, answer pricing calls and phone new web leads back within minutes, with your team in control.",
    headline: "Custom AI voice agents for the calls you make every day",
    intro:
      "Some phone work follows the same pattern every time: confirming tomorrow's appointments, answering the same pricing questions, calling back a new lead. A custom voice agent handles those calls in a natural voice, and hands anything unusual to your team.",
    whatItIs: [
      "A voice agent is an AI that holds a real phone conversation for one specific job. Where an AI receptionist answers whatever comes in, a custom voice agent is designed around a single task, inbound or outbound, with its own script, rules and connections to your systems.",
      "Typical jobs are appointment confirmations and reminders, answering pricing and service questions, and calling a new web lead back within minutes of their enquiry. Each call is logged, summarised and written back to your calendar or CRM.",
      "Because it is built for one job, it can be precise about what it says, what it asks and when it stops and passes the call to a person.",
    ],
    whoFor: [
      "Appointment based businesses with no-shows and late cancellations",
      "Service businesses whose team is interrupted by the same pricing questions",
      "Businesses that pay for web leads and cannot call every one back quickly",
      "Teams that already know their phone script and want it run consistently",
    ],
    problems: [
      {
        title: "No-shows and forgotten appointments",
        text: "Text reminders are easy to ignore. A short confirmation call lets the customer confirm, reschedule or cancel in one go, and frees the slot for someone else.",
      },
      {
        title: "Pricing calls that interrupt the team",
        text: "\"How much does it cost?\" is a fair question, but answering it twenty times a day breaks your team's focus. A voice agent gives the approved answer every time.",
      },
      {
        title: "Web leads waiting hours for a callback",
        text: "Someone who fills in a form is ready to talk now. By the time your team calls back, they may have spoken to someone else.",
      },
    ],
    steps: [
      {
        title: "Pick one call to automate",
        text: "We choose the call type that costs you the most time or business, and agree what a good outcome looks like.",
      },
      {
        title: "Design the conversation",
        text: "We write the script, the questions, the answers it may give and the points where it must hand over to a person. You approve every part.",
      },
      {
        title: "Connect the data",
        text: "The agent connects to your calendar, CRM or web forms where they allow it, so it knows who to call, what to say and where to record the result.",
      },
      {
        title: "Test and launch",
        text: "We run test calls with edge cases, then start with a small share of real calls before turning it on fully.",
      },
      {
        title: "Listen and tune",
        text: "We review recordings and summaries in the first weeks and refine the wording, timing and rules.",
      },
    ],
    youProvide: [
      "The call you want to automate and what a good result looks like",
      "Your approved answers, prices and policies",
      "Access to the calendar, CRM or form tool the agent needs",
      "Calling hours and the people to hand calls over to",
    ],
    humanReview:
      "The agent introduces itself as an AI assistant and transfers or escalates whenever a caller asks for a person or the conversation leaves its script. Your team sees every call summary and can change the script whenever you like.",
    privacy:
      "Outbound calls go only to people who gave you their number for that purpose, such as existing customers and people who asked to be contacted, during sensible hours and with opt-outs respected. Callers are told when calls are recorded, and recordings are kept only as long as you need them.",
    related: ["ai-receptionist", "ai-lead-qualification", "ai-follow-ups"],
    localNote:
      "Los Angeles traffic makes late arrivals and missed appointments a familiar problem, so confirmation calls that offer an easy reschedule are often the first voice agent businesses in the area ask about.",
    faqs: [
      {
        question: "How is a voice agent different from an AI receptionist?",
        answer:
          "An AI receptionist answers your line and handles whatever comes in. A custom voice agent is built for one specific call, such as confirmations or lead callbacks, and often makes outbound calls. Many businesses start with one and add the other later.",
      },
      {
        question: "Does it sound robotic?",
        answer:
          "Current AI voices sound natural and handle interruptions well. It still introduces itself as an AI assistant, because being honest with callers matters more than sounding human.",
      },
      {
        question: "Is it allowed to call my customers?",
        answer:
          "Calling your own customers about their own appointments, or people who asked you to call them, is the intended use. Rules on automated calls apply, so we set it up to call only people who have given consent, respect opt-outs and call during sensible hours. If in doubt, check with your legal adviser.",
      },
      {
        question: "What if a caller asks something it does not know?",
        answer:
          "It says so, takes a message or transfers the caller to a person. It does not make up answers, and you decide in advance what it is allowed to say.",
      },
      {
        question: "Can it speak languages other than English?",
        answer:
          "Yes, voice agents can handle other common languages, such as Spanish. We test the script in each language you need before it goes live.",
      },
    ],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    group: "automation",
    summary:
      "Software helpers that move data between your tools, prepare reports and answer team questions from your documents.",
    serviceType: "AI agent development and business process automation",
    title: "AI Agents for Business Automation | Hiroshi Murakami",
    description:
      "AI agents that move data between your tools, prepare research and weekly reports, and answer team questions from your own documents.",
    headline: "AI agents that do the back-office work in between",
    intro:
      "A lot of office time goes into copying details from one system to another, collecting the same figures every week and answering the same internal questions. AI agents take over those in-between tasks and leave a clear record of what they did.",
    whatItIs: [
      "An AI agent is a piece of software that can read, decide and act across your tools to finish a defined task. Unlike a simple automation that follows one fixed rule, an agent can read an email or a document, work out what it is, pull the right details and put them in the right place.",
      "Agents work best on tasks that are repetitive but slightly messy: orders that arrive in different formats, weekly reports that need data from several places, or questions that are answered somewhere in your company documents.",
      "Each agent has a narrow job, clear limits on what it may change, and a log of every action, so you can always see what it did and why.",
    ],
    whoFor: [
      "Operations and admin teams re-typing data between systems",
      "Owners who build the same weekly report by hand",
      "Businesses that track competitor prices, listings or tenders",
      "Growing teams where new staff keep asking the same questions",
    ],
    problems: [
      {
        title: "Data entry across tools that do not talk to each other",
        text: "Orders, contacts and notes are copied from email to spreadsheet to accounting software. It is slow, and every copy is a chance for a typo.",
      },
      {
        title: "Research and reporting that eats a morning",
        text: "Checking supplier and competitor prices, collecting figures and writing the weekly summary is useful work, but it is the same work every week.",
      },
      {
        title: "Knowledge stuck in documents and inboxes",
        text: "Policies, price lists and how-to notes exist, but nobody can find them quickly, so people interrupt the one colleague who knows.",
      },
    ],
    steps: [
      {
        title: "Find the task",
        text: "We look at where your team repeats the same steps and choose a task with a clear start, a clear end and a measurable time cost.",
      },
      {
        title: "Define the limits",
        text: "We agree which tools the agent can read, what it may change, and which actions need a person's approval first.",
      },
      {
        title: "Build and connect",
        text: "The agent is connected to your email, spreadsheets, CRM or other tools through their official connections, with its own account and only the access it needs.",
      },
      {
        title: "Run side by side",
        text: "At first the agent prepares its work for a person to approve. Once the results are consistently right, routine items can go through on their own.",
      },
      {
        title: "Monitor and extend",
        text: "Every action is logged. We review the log, fix edge cases and, once the first agent is steady, look at the next task.",
      },
    ],
    youProvide: [
      "A walk-through of the task as your team does it today",
      "A handful of real examples, including the awkward ones",
      "Access to the tools involved, ideally through a dedicated account",
      "A person who approves the agent's work during the first weeks",
    ],
    humanReview:
      "Agents start in a draft and approve mode, where a person checks their work before it is saved. Anything they are unsure about is flagged rather than guessed, and every action is logged so it can be traced and undone.",
    privacy:
      "Each agent gets the narrowest access it needs, through its own account so it can be switched off at any time. Business data is processed with providers that do not use it to train public models, and internal documents are only searchable by the people who could already see them.",
    related: ["custom-crm-and-workflows", "ai-accounting", "ai-customer-support"],
    localNote:
      "From small production companies to distributors and professional firms around Los Angeles, the tasks differ but the pattern is the same: details copied by hand between tools that were never meant to work together.",
    faqs: [
      {
        question: "What is the difference between an AI agent and normal automation?",
        answer:
          "Normal automation follows a fixed rule, such as \"when a form arrives, add a row\". An AI agent can handle variation: read an email in any format, understand what it is about and decide which steps apply. In practice we use both, and keep the AI for the parts that need it.",
      },
      {
        question: "Can an AI agent make mistakes?",
        answer:
          "Yes, which is why agents start by preparing work for a person to approve, why they flag anything uncertain, and why every action is logged. Routine items only run on their own once the results have been consistently right.",
      },
      {
        question: "Which tools can it work with?",
        answer:
          "Most business tools with an official connection or export: email, Google Workspace and Microsoft 365, spreadsheets, common CRMs and accounting software. If a tool has no way in, we look for a safe alternative before building anything.",
      },
      {
        question: "Can it answer questions from our own documents?",
        answer:
          "Yes. An internal assistant can search your policies, price lists and guides and answer with a link to the source, so people can check the answer. It only searches documents the person asking is allowed to see.",
      },
    ],
  },
  {
    slug: "ai-follow-ups",
    name: "AI Follow-Ups",
    group: "automation",
    summary:
      "Polite, timely follow-ups on quotes, overdue invoices and reviews, so nothing depends on someone remembering.",
    serviceType: "AI follow-up automation",
    title: "AI Follow-Ups for Quotes, Invoices and Reviews",
    description:
      "AI follow-ups that chase open quotes, remind customers about overdue invoices and ask for reviews after the job, politely and on time.",
    headline: "AI follow-ups that go out on time, every time",
    intro:
      "Most businesses lose more work to silence than to a no. Quotes go unanswered, invoices slip past their due date and happy customers are never asked for a review. AI follow-ups send the right message at the right moment, in your tone, and bring every reply back to you.",
    whatItIs: [
      "AI follow-ups are messages by email or text that go out on a schedule you set, triggered by what happens in your business: a quote sent, an invoice due, a job finished. The AI writes each message to fit the customer and the situation, instead of sending the same template every time.",
      "When a customer replies, the AI reads the reply. A simple question gets an answer, a \"yes\" goes to your team to act on, and anything unusual goes straight to a person. Follow-ups stop as soon as the customer responds or pays.",
      "The result is a steady, polite rhythm of follow-ups that does not depend on anyone remembering, and that never sounds pushy.",
    ],
    whoFor: [
      "Trades, contractors and agencies that send quotes and wait",
      "Businesses with customers who pay late and staff who dislike chasing",
      "Local service businesses that rely on reviews and repeat bookings",
      "Owners who know they should follow up but never find the time",
    ],
    problems: [
      {
        title: "Quotes sent and never answered",
        text: "A customer asked for a quote, got it, and went quiet. Often they are just busy. A friendly nudge at the right time is the difference between a lost job and a booked one.",
      },
      {
        title: "Overdue invoices that feel awkward to chase",
        text: "Nobody enjoys asking for money. Consistent, courteous reminders keep payment moving without straining the relationship.",
      },
      {
        title: "No review request, no rebooking",
        text: "The best moment to ask for a review or suggest the next appointment is right after a good job. It is also the moment everyone has moved on to the next one.",
      },
    ],
    steps: [
      {
        title: "Choose the triggers",
        text: "We agree which events start a follow-up: a quote sent, an invoice due, a job marked done.",
      },
      {
        title: "Set the rhythm and tone",
        text: "You decide how many messages, how far apart and how firm they get. We write example messages in your voice for you to approve.",
      },
      {
        title: "Connect your systems",
        text: "Follow-ups read from where your quotes, invoices and jobs live, such as your CRM, accounting software or job management tool.",
      },
      {
        title: "Handle the replies",
        text: "The AI sorts replies: questions answered, positive replies sent to your team, complaints and disputes passed to a person at once.",
      },
      {
        title: "Review and adjust",
        text: "You see what was sent and what came back. We adjust timing and wording based on how customers respond.",
      },
    ],
    youProvide: [
      "The follow-ups you want, and how firm each one may be",
      "Access to where quotes, invoices or jobs are recorded",
      "The email address or number the messages should come from",
      "Your review link and booking link, if you want those follow-ups",
    ],
    humanReview:
      "You approve the message style before anything is sent, and you can pause follow-ups for any customer at any time. Disputes, complaints and payment arrangements always go to a person, and the AI never threatens, adds fees or promises discounts on its own.",
    privacy:
      "Messages go only to your own customers about their own quotes, invoices and jobs. Every message includes a simple way to opt out, opt-outs are respected at once, and customer data stays in your systems.",
    related: ["ai-accounting", "ai-lead-qualification", "custom-crm-and-workflows"],
    localNote:
      "In a market as competitive as Los Angeles, where customers often ask several businesses for a quote, a prompt and friendly follow-up is frequently what decides who gets the job.",
    faqs: [
      {
        question: "Will the messages sound automated?",
        answer:
          "They are written by AI in your tone and adapted to each customer and situation, so they read like a short personal note. You approve the style before anything goes out.",
      },
      {
        question: "Can it chase overdue invoices without upsetting customers?",
        answer:
          "Yes. Reminders start friendly and stay courteous, and you decide how firm the later ones get. Anything that looks like a dispute or a payment problem goes to a person rather than another reminder.",
      },
      {
        question: "Does it stop when the customer replies?",
        answer:
          "Yes. As soon as a customer replies, pays or books, the follow-up sequence stops for them, and the reply goes to the right place.",
      },
      {
        question: "Can it ask for reviews?",
        answer:
          "It can send a review request after a completed job with a direct link to your review page. It asks every customer the same way and does not filter out unhappy ones, which keeps you in line with review platform rules.",
      },
    ],
  },
  {
    slug: "ai-lead-qualification",
    name: "AI Lead Qualification",
    group: "automation",
    summary:
      "Leads from forms, calls, email and DMs sorted, qualified and routed while they are still warm.",
    serviceType: "AI lead qualification and routing",
    title: "AI Lead Qualification and Routing | Hiroshi Murakami",
    description:
      "AI lead qualification that replies to new leads within minutes, asks the right questions and routes the best ones to your sales team first.",
    headline: "AI lead qualification that replies to leads while they are warm",
    intro:
      "New enquiries arrive from your website, phone, email and social messages, often when nobody is free to reply. AI lead qualification responds quickly, asks a few useful questions and routes each lead to the right person, so your team spends its time on the conversations most likely to go somewhere.",
    whatItIs: [
      "AI lead qualification sits between your enquiry channels and your sales team. When a lead comes in, the AI replies within minutes, thanks them, answers simple questions and asks the qualifying questions you would ask yourself: what they need, when, where and roughly what budget.",
      "Based on the answers and your rules, each lead is scored, tagged and sent to the right place. Good fits go straight to a salesperson or get a booking link. Leads that are not a fit get a polite, helpful answer, and nobody's time is wasted.",
      "Everything is recorded in your CRM or a simple lead list, so you can see where leads come from and what happened to each one.",
    ],
    whoFor: [
      "Businesses that get more enquiries than they can answer quickly",
      "Sales teams spending time on calls that were never a fit",
      "Businesses with leads arriving through many channels at once",
      "Owners who want to know which marketing actually brings good leads",
    ],
    problems: [
      {
        title: "Web form leads that go cold",
        text: "A form arrives at 9 pm and gets a reply the next afternoon. By then the person has moved on or booked someone else.",
      },
      {
        title: "Sales time spent on poor fits",
        text: "Calls with people outside your area, budget or service list take as long as the good ones. A few questions up front save that time.",
      },
      {
        title: "Inbound scattered across channels",
        text: "Email, contact forms, Instagram and Facebook messages and calls all arrive in different places, and nobody owns the job of sorting them.",
      },
    ],
    steps: [
      {
        title: "Define a good lead",
        text: "We write down what makes a lead a good fit for you, which questions reveal it and what should happen to each type of lead.",
      },
      {
        title: "Connect the channels",
        text: "Your website forms, email inbox and business messaging accounts feed into one place, through their official connections.",
      },
      {
        title: "Reply and qualify",
        text: "The AI sends a quick, friendly reply, answers basic questions and asks the qualifying questions in a natural conversation.",
      },
      {
        title: "Route and record",
        text: "Each lead is scored, tagged and sent to the right person or calendar, and logged in your CRM with the full conversation.",
      },
      {
        title: "Review the rules",
        text: "We check the routing against what your team sees in practice and adjust the questions and scoring.",
      },
    ],
    youProvide: [
      "Your ideal customer, service area and the jobs you do not take",
      "The questions you ask on a first call",
      "Access to your forms, inbox, business messaging accounts and CRM",
      "Who handles which kind of lead, and their calendars if they take bookings",
    ],
    humanReview:
      "The AI never turns a lead away on its own when it is unsure. Borderline leads go to a person with a short summary, and your team can see and override every score. The rules are yours and easy to change.",
    privacy:
      "Lead data stays in your CRM and inbox. The AI only contacts people who reached out to you first, it does not buy or scrape contact lists, and anyone can ask to stop receiving messages.",
    related: ["custom-voice-agents", "ai-follow-ups", "custom-crm-and-workflows"],
    localNote:
      "For businesses in the Los Angeles area, service area questions come up constantly, and asking early where the job is helps a team plan around distance and traffic before anyone drives out.",
    faqs: [
      {
        question: "Will leads feel like they are talking to a bot?",
        answer:
          "The replies are short, helpful and written in your tone, and the AI is open about being an AI assistant when asked. Most people simply appreciate a quick, useful answer instead of waiting.",
      },
      {
        question: "Can it qualify phone calls as well as forms?",
        answer:
          "Yes. Combined with an AI receptionist or voice agent, phone enquiries go through the same questions and routing as forms and messages.",
      },
      {
        question: "What happens to leads that are not a fit?",
        answer:
          "They get a polite, honest reply, and where it helps, a pointer to what they need. Your team can review them and pick up any that the rules turned down.",
      },
      {
        question: "Does it work with Instagram and Facebook messages?",
        answer:
          "It can, through Meta's official business tools for accounts you own. Message platform rules apply, so it replies to people who contacted you and does not send unsolicited messages.",
      },
      {
        question: "Do I need a CRM?",
        answer:
          "No. If you do not have one, leads can be logged in a simple shared list to start with. If you outgrow that, a custom CRM can be built around how you sell.",
      },
    ],
  },
  {
    slug: "custom-crm-and-workflows",
    name: "Custom CRM and Workflow Automation",
    group: "automation",
    summary:
      "A CRM and workflows shaped around how your business actually runs, instead of bending your process to a tool.",
    serviceType: "Custom CRM development and workflow automation",
    title: "Custom CRM and Workflow Automation | Hiroshi Murakami",
    description:
      "A custom CRM and automated workflows built around how your business runs, connecting your tools so leads and jobs stop falling through the gaps.",
    headline: "A custom CRM built around how your business runs",
    intro:
      "Big CRMs are powerful, but they are built for generic sales teams. If you have spent more time adapting your process to the software than using it, a custom CRM with automated workflows can follow the way you already work, and connect the tools you already have.",
    whatItIs: [
      "A custom CRM is a customer and job system designed around your business model: your stages, your fields, your handoffs and your reports. It holds the information your team actually uses, and nothing it does not.",
      "Workflow automation connects it to the rest of your tools, such as your website forms, email, calendar, accounting software and messaging, so details move between them on their own. When a lead becomes a job, or a job becomes an invoice, the next step starts without anyone copying data.",
      "AI fits in where it helps: summarising conversations, filling in fields from emails, drafting replies and flagging records that need attention. The system stays simple enough for your team to understand and change.",
    ],
    whoFor: [
      "Businesses whose process does not fit a standard sales pipeline",
      "Teams paying per seat for a large CRM they barely use",
      "Businesses running on spreadsheets, sticky notes and memory",
      "Owners juggling several tools that do not share information",
    ],
    problems: [
      {
        title: "A big CRM that does not fit your business",
        text: "Salesforce is a capable CRM, but it is built for generic workflows. Its standard objects, per-seat pricing and admin work often push a small business to bend its process to the tool.",
      },
      {
        title: "Five tools that do not talk to each other",
        text: "Forms in one place, bookings in another, invoices in a third. The same customer is typed in again and again, and nobody has the full picture.",
      },
      {
        title: "Manual handoffs where work gets lost",
        text: "When a lead moves from sales to scheduling, or a job from done to invoiced, someone has to remember to pass it on. Sometimes they do not.",
      },
    ],
    steps: [
      {
        title: "Map how you work",
        text: "We walk through your process from first enquiry to paid invoice, including the workarounds, and note where things slow down or get lost.",
      },
      {
        title: "Design the system",
        text: "We define the records, stages, fields and automations you need, and agree what stays in your existing tools.",
      },
      {
        title: "Build in small steps",
        text: "The CRM and workflows are built in stages, so your team can use the first part while the next is in progress.",
      },
      {
        title: "Move your data",
        text: "Existing customers, jobs and history are cleaned up and imported from your spreadsheets or old system.",
      },
      {
        title: "Train and hand over",
        text: "Your team gets a walkthrough and short written guides. You own the system and the data, and changes are easy to request.",
      },
    ],
    youProvide: [
      "A walk-through of your process, from enquiry to payment",
      "The tools you use today and logins for the ones to connect",
      "Exports of your current customer and job data",
      "One person who decides when the process has options",
    ],
    humanReview:
      "Automations follow rules you approve, and anything that sends money, messages customers in bulk or deletes data asks a person first. AI suggestions, such as a summary or a filled-in field, are clearly marked so your team can check them.",
    privacy:
      "You own the system and all of the data in it. Access is set per person, connections use official APIs with the least access needed, and nothing is shared with third parties beyond the services the system runs on.",
    related: ["ai-agents", "ai-lead-qualification", "ai-follow-ups"],
    localNote:
      "Los Angeles has a huge range of business models, from production and creative studios to clinics, trades and import businesses, and many of them simply do not fit the standard pipeline a large CRM assumes.",
    faqs: [
      {
        question: "Why not just use Salesforce or HubSpot?",
        answer:
          "They are good products and the right choice for many companies, especially large sales teams. For a small business with an unusual process, they can mean paying for many seats and features you do not use, plus ongoing admin to make them fit. A custom CRM is built around your process instead.",
      },
      {
        question: "Is a custom CRM expensive to maintain?",
        answer:
          "It is built on standard, widely used tools and kept deliberately simple, so it does not need a dedicated administrator. Changes are small and usually quick.",
      },
      {
        question: "Can it connect to my accounting software?",
        answer:
          "In most cases, yes. Common accounting tools have official connections, so customers, jobs and invoices can stay in step without re-typing.",
      },
      {
        question: "What happens to my data if we stop working together?",
        answer:
          "It is yours. You keep the system and can export everything at any time in standard formats.",
      },
      {
        question: "Do we have to switch everything at once?",
        answer:
          "No. We usually start with the part that hurts most, such as lead handling or job scheduling, and connect the rest step by step while your team keeps working.",
      },
    ],
  },
  {
    slug: "ai-customer-support",
    name: "AI Customer Support Assistants",
    group: "automation",
    summary:
      "Clear answers on chat, email and WhatsApp, with a clean handover to a person when it matters.",
    serviceType: "AI customer support assistant",
    title: "AI Customer Support Assistants | Hiroshi Murakami",
    description:
      "AI customer support assistants that answer common questions on chat, email and WhatsApp, day and night, and hand over to a person with full context.",
    headline: "AI customer support that answers well and knows when to hand over",
    intro:
      "Most support inboxes are full of the same questions: where is my order, what are your hours, how do I change my booking. An AI support assistant answers those clearly on chat, email and WhatsApp, at any hour, and passes everything else to your team with the full conversation attached.",
    whatItIs: [
      "An AI customer support assistant answers customer questions using your own information: help articles, policies, product details and, where connected, order or booking status. It replies in your tone and keeps answers short and specific.",
      "It works on the channels your customers already use, such as a chat window on your website, your support email and WhatsApp Business. When a question needs a person, it says so, collects the details and hands the conversation over with a summary, so the customer never has to repeat themselves.",
      "Your team stays in charge of the hard conversations. The assistant takes the repetitive ones off their plate.",
    ],
    whoFor: [
      "Online shops and product businesses with order and delivery questions",
      "Service businesses fielding the same booking and policy questions",
      "Small support teams that cannot cover evenings and weekends",
      "Businesses supporting customers in more than one language",
    ],
    problems: [
      {
        title: "The same questions on every channel",
        text: "Hours, prices, delivery times and returns come in by chat, email and WhatsApp all day. Your team answers them again and again.",
      },
      {
        title: "Support only during business hours",
        text: "Customers write in the evening and at weekends. Without cover, they wait until the next working day, and some do not wait.",
      },
      {
        title: "Handovers where the customer starts again",
        text: "When a question moves to a person, the context is often lost and the customer has to explain everything twice.",
      },
    ],
    steps: [
      {
        title: "Gather your answers",
        text: "We collect your help content, policies and the questions your team answers most, and fill the gaps together.",
      },
      {
        title: "Set the boundaries",
        text: "We agree what the assistant may answer, what it must never do, such as approving refunds, and when it hands over.",
      },
      {
        title: "Connect the channels",
        text: "The assistant is set up on your website chat, support email or WhatsApp Business, and connected to order or booking data where useful.",
      },
      {
        title: "Test with real questions",
        text: "We run past customer questions through it and check every answer before it talks to customers.",
      },
      {
        title: "Review and improve",
        text: "Your team reviews conversations and handovers. Gaps in the answers become new content, so the assistant gets better over time.",
      },
    ],
    youProvide: [
      "Your help articles, policies, product or service details",
      "A sample of real customer questions and good answers",
      "Access to the channels and, if wanted, order or booking data",
      "Who receives handovers, and how quickly they reply",
    ],
    humanReview:
      "The assistant answers only from your approved information and says when it does not know. Refunds, complaints, account changes and anything sensitive go to a person with a summary. Your team can read every conversation.",
    privacy:
      "Customer conversations are stored in your support tools, kept only as long as you choose and not used to train public AI models. The assistant asks only for the details it needs, and customers are told they are chatting with an AI assistant.",
    related: ["ai-receptionist", "ai-agents", "ai-lead-qualification"],
    localNote:
      "Los Angeles businesses often serve customers in English and Spanish, and many sell well beyond the county, so support that can answer in more than one language and outside local business hours is a common need.",
    faqs: [
      {
        question: "Will it make up answers?",
        answer:
          "It is set up to answer only from your approved information and to say when it does not know, then hand the question to a person. We test it with real past questions before launch to check exactly this.",
      },
      {
        question: "Which channels can it work on?",
        answer:
          "Most commonly a website chat window, a support email inbox and WhatsApp Business. Other channels are possible where they offer official business connections.",
      },
      {
        question: "Can it look up orders or bookings?",
        answer:
          "Yes, if your shop or booking system allows connections. It can then give a customer their order status or appointment time after checking who they are.",
      },
      {
        question: "How does the handover to a person work?",
        answer:
          "The assistant tells the customer a person will take over, collects any missing details and passes the conversation with a short summary to your team, in the tool they already use.",
      },
      {
        question: "Can it support customers in Spanish?",
        answer:
          "Yes. It can reply in the customer's language, and we test answers in each language you want to support.",
      },
    ],
  },
  {
    slug: "ai-accounting",
    name: "AI Accounting",
    group: "accounting",
    summary:
      "Invoices captured and coded, bank lines reconciled and month-end reports ready, with a person reviewing the results.",
    serviceType: "AI accounting and bookkeeping automation",
    title: "AI Accounting and Bookkeeping Automation | Hiroshi Murakami",
    description:
      "AI accounting that captures invoices and receipts, reconciles bank lines and prepares month-end reports, with a person reviewing every result.",
    headline: "AI accounting that keeps your books current",
    intro:
      "Bookkeeping is mostly careful, repetitive work: reading invoices and receipts, coding them, matching bank lines and chasing the gaps before month end. AI accounting does that first pass every day, so your books stay current and your bookkeeper or accountant spends their time on review and advice instead of data entry.",
    whatItIs: [
      "AI accounting is a set of workflows that sit alongside your accounting software, commonly QuickBooks Online or Xero. Invoices and receipts are collected from email, uploads and phone photos. The AI reads each one, pulls out the supplier, date, amounts and tax, suggests the account and category based on your past coding, and prepares the entry.",
      "Bank lines are matched to those invoices, receipts and payments as they arrive. The routine matches are prepared automatically. Anything that does not match, looks like a duplicate or falls outside your rules lands on a short exception list for a person.",
      "At month end, the same data feeds a close checklist and the reports you look at, so they are ready sooner and built on books that were kept current all month. The AI prepares, a person reviews and approves, and nothing is posted without passing the rules you set.",
      "This is not tax advice and it does not replace your accountant. It gives your bookkeeper or CPA cleaner, more complete records to work from, and gives you a clearer view of your numbers in between.",
    ],
    whoFor: [
      "Small and mid-size businesses doing their own books, or doing them late",
      "Owners who spend evenings matching receipts and bank statements",
      "In-house finance staff who want to spend less time on data entry",
      "Bookkeepers and accounting firms that want faster, cleaner inputs from clients",
      "Businesses with many suppliers, card transactions or locations",
    ],
    problems: [
      {
        title: "Invoices and receipts piling up",
        text: "Supplier invoices arrive by email in every format, receipts sit in wallets and phone galleries, and someone has to type each one in and code it. It is slow, and it is easy to miss or duplicate one.",
      },
      {
        title: "Bank reconciliation that eats days each month",
        text: "Matching every bank and card line to an invoice, receipt or payment by hand is tedious, and it tends to wait until month end, when the backlog is at its largest.",
      },
      {
        title: "Month-end reports delayed by messy books",
        text: "Reports are only as good as the books under them. When coding is inconsistent and reconciliation is behind, month end slips and decisions are made on old numbers.",
      },
      {
        title: "Accounts payable that relies on memory",
        text: "Due dates, missing invoices and supplier statements that do not agree are tracked in inboxes and heads. Late fees and awkward supplier calls follow.",
      },
    ],
    steps: [
      {
        title: "Review your books and process",
        text: "We look at how documents arrive, how they are coded today, which bank and card accounts you use and what your month end looks like. Your chart of accounts and past coding become the reference for the AI.",
      },
      {
        title: "Set up document capture",
        text: "You get a dedicated email address and a simple upload route for invoices and receipts, including phone photos. Supplier invoices can be forwarded automatically from your inbox.",
      },
      {
        title: "Extract and code",
        text: "The AI reads each document, extracts supplier, dates, amounts and tax, checks for duplicates and suggests the account, category and class or location from your rules and history.",
      },
      {
        title: "Reconcile daily",
        text: "Bank and card lines from your accounting software's bank feeds are matched to documents and payments as they come in. Clear matches are prepared, and everything else goes to an exception list with the likely reason.",
      },
      {
        title: "Review and approve",
        text: "A person reviews the prepared entries and the exceptions, in your accounting software or a simple review screen, and approves, corrects or asks a question. Corrections feed back into the rules.",
      },
      {
        title: "Close and report",
        text: "At month end, a checklist shows what is still open, missing documents are chased, and the reports you rely on, such as profit and loss and cash position, are prepared for review.",
      },
    ],
    division: {
      ai: [
        "Collects invoices and receipts from email, uploads and photos",
        "Reads supplier, dates, amounts and tax from each document",
        "Suggests the account, category and location from your history",
        "Spots likely duplicates and amounts that look unusual",
        "Matches bank and card lines to documents and payments",
        "Keeps the month-end checklist and lists what is still missing",
      ],
      people: [
        "Approve or correct prepared entries and matches",
        "Resolve the exceptions the AI could not match",
        "Decide tax treatment and anything that needs judgement",
        "Approve and pay bills",
        "Close the month and sign off the reports",
        "Set and change the rules the AI follows",
      ],
    },
    youProvide: [
      "Access to your accounting software, such as QuickBooks Online or Xero, with a user role you choose",
      "Your chart of accounts and, ideally, a few months of coded history",
      "Bank and card feeds connected in your accounting software",
      "Where invoices and receipts arrive today, and who approves bills",
      "Your bookkeeper or accountant, if you have one, to agree the review process",
    ],
    humanReview:
      "Every entry the AI prepares is reviewed by a person before it counts: you, your bookkeeper or your accountant, depending on how you work. The AI flags low-confidence readings, possible duplicates and unusual amounts instead of guessing, and it never pays bills, files tax returns or changes closed periods.",
    privacy:
      "Financial data is handled with care: access to your accounting software is granted through its own user permissions and can be removed at any time, documents are processed by providers that do not use them to train public models, and nothing is shared beyond the services the workflow needs. Bank login details are never collected; bank data comes through the feeds your accounting software already uses.",
    related: ["ai-agents", "ai-follow-ups", "custom-crm-and-workflows"],
    localNote:
      "Businesses across Los Angeles County often juggle many suppliers, card spend across several locations and California sales tax on top, which is exactly the kind of high-volume, rules-based bookkeeping where an AI first pass with human review helps most.",
    faqs: [
      {
        question: "Does AI accounting replace my bookkeeper or accountant?",
        answer:
          "No. It takes over the data entry and matching, so your bookkeeper or accountant spends their time reviewing, advising and handling the judgement calls. Many accounting professionals welcome cleaner, more complete records from their clients.",
      },
      {
        question: "Which accounting software does it work with?",
        answer:
          "Most often QuickBooks Online and Xero, which have official connections for this kind of work. Other systems can often be supported through their imports and exports. We confirm what is possible with your setup during the free audit.",
      },
      {
        question: "How accurate is the invoice and receipt reading?",
        answer:
          "Clear, typed invoices are usually read reliably, while faded receipts and handwritten notes are harder. That is why every result is reviewed, and why the AI marks the readings it is unsure about rather than guessing.",
      },
      {
        question: "Is my financial data safe?",
        answer:
          "Access goes through your accounting software's own user permissions, which you control and can remove at any time. No bank login details are collected, documents are not used to train public AI models, and only the services the workflow needs see your data.",
      },
      {
        question: "Can it handle sales tax and multiple locations?",
        answer:
          "It can apply your existing tax codes and tag entries by class or location, following the rules you and your accountant set. It does not decide tax treatment on its own, and unclear items are sent for review.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "It depends on how many accounts, suppliers and locations are involved and how tidy the books are today. Capture and coding usually come first, then reconciliation, then month-end reporting, so you get value from the first step while the rest is set up.",
      },
    ],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceName(slug: ServiceSlug): string {
  return getService(slug)?.name ?? slug;
}

/** How every engagement runs, shown on the home page and the services hub. */
export const PROCESS_STEPS = [
  {
    n: "1",
    title: "Audit",
    text: "We look at how calls, leads, follow-ups and the books are handled today, and find the repetitive work that costs you the most time.",
  },
  {
    n: "2",
    title: "Build",
    text: "I build AI workflows for those tasks and connect them to the tools you already use, with a person reviewing anything that matters.",
  },
  {
    n: "3",
    title: "Refine",
    text: "We check the results together, tune the rules and keep improving, so the system fits the way your business works.",
  },
];
