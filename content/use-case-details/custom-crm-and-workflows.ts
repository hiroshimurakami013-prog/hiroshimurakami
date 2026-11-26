import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the Custom CRM and Workflow Automation use cases.
// Illustrative scenarios, no client names and no numbers. Named products are
// described fairly: what they do well, and where they may not fit.

export const CUSTOM_CRM_AND_WORKFLOWS_DETAILS: Record<string, UseCaseDetail> = {
  "when-salesforce-does-not-fit": {
    seoTitle: "When Salesforce Does Not Fit: Custom CRM | Hiroshi Murakami",
    seoDescription:
      "Salesforce is a powerful CRM built for generic workflows. When it does not fit your business model, a custom CRM with AI can follow your process instead.",
    lead: "Salesforce is a good CRM, used by companies of every size. But it is built for generic sales workflows, and sometimes your business simply does not work that way. This scenario looks at what a custom CRM with AI can offer instead.",
    problem: [
      "Picture a production company, a staffing agency, an architecture practice or a specialist contractor. Their work does not follow a classic pipeline of lead, opportunity, deal. They manage projects with crews and equipment, placements with candidates on both sides, or multi-stage jobs with permits, deposits and inspections.",
      "They bought a big CRM because it is the market leader, then spent weeks configuring objects that do not quite match their world. Staff work around it: half the real information lives in spreadsheets, and the CRM is updated only because the owner insists. Per-seat licence fees grow with every hire, including people who only need to look up one thing a week.",
      "Customising further means paying a consultant or hiring an administrator. The business ends up bending its process to fit the tool rather than the other way round.",
    ],
    usualTools: [
      "Large platforms such as Salesforce are powerful, flexible and well supported, and for many companies they are the right choice, especially large sales teams with standard pipelines. The trade-off is that they are designed around generic objects and workflows, and fitting a specific business model often takes significant configuration, ongoing administration and per-user licences.",
      "Lighter off-the-shelf CRMs are quicker to start with, but they make the same generic assumptions with fewer ways to change them. Spreadsheets fit perfectly at first and then collapse under shared editing, version confusion and missing history.",
    ],
    steps: [
      {
        title: "Map how the business really works",
        text: "We start from your work, not a template: the records you track, such as jobs, crews, candidates or properties, the stages they move through and who does what at each step.",
      },
      {
        title: "Design a CRM around that model",
        text: "A lean, custom CRM is built with your own record types and stages, using familiar, maintainable technology. Screens show exactly what each role needs and nothing else.",
      },
      {
        title: "Add AI where it saves real time",
        text: "AI drafts emails and summaries, reads incoming documents into records, suggests next steps and answers questions such as \"which jobs are waiting on a permit?\" in plain language.",
      },
      {
        title: "Migrate carefully",
        text: "Data from your existing CRM and spreadsheets is cleaned and imported, and the old system runs alongside until the team is confident.",
      },
      {
        title: "Own it and evolve it",
        text: "You own the system and the data. When the business changes, the CRM changes with it, without per-seat fees climbing as you hire.",
      },
    ],
    outcomes: [
      "The CRM matches how your team actually works, so people use it instead of side spreadsheets.",
      "Costs are not tied to the number of seats, so anyone who needs access can have it.",
      "Changes are made to suit your process rather than waiting for a generic product roadmap.",
      "AI features are built for your specific tasks instead of generic ones.",
      "You own your data and can export it whenever you like.",
    ],
    requirements: [
      "Time with the people who do the work, to map the real process",
      "Exports from your current CRM and the spreadsheets that sit around it",
      "A decision maker who can agree priorities for the first version",
      "Any tools the CRM must connect to, such as email, calendar or accounting",
    ],
    humanInTheLoop:
      "AI suggests and drafts inside the CRM; people decide and send. Automated steps that affect customers, money or contracts are approved by a person until you choose otherwise, and every change is recorded in the history.",
    privacy:
      "The CRM runs on infrastructure you control, with access by role. Your data is not used to train public AI models, and you can export or delete it at any time.",
  },

  "connecting-disconnected-tools": {
    seoTitle: "Connecting Disconnected Business Tools | Hiroshi Murakami",
    seoDescription:
      "Forms, calendar, CRM, invoicing and messaging connected, with AI in the gaps, so a customer is entered once and every tool stays up to date.",
    lead: "A web form, a calendar, a CRM, an invoicing tool and a messaging app: each good on its own, none of them talking to the others. This scenario shows how connecting them, with AI in the gaps, removes the copy and paste.",
    problem: [
      "Imagine a home services company or a small agency. A new customer fills in the website form. Someone copies the details into the CRM, then books a visit in the calendar, then creates the customer again in the invoicing tool, then adds them to a messaging group for the crew. Every change of address or phone number has to be made in five places.",
      "In reality it is not, so the tools drift apart. The crew drives to an old address. The invoice goes to an email the customer stopped using. Nobody is sure which system has the right information, so people ring each other to check.",
      "Tool sprawl has crept up on most small businesses. Each subscription solved one problem, and many are priced per user, so the monthly bill keeps growing while the tools stay disconnected.",
    ],
    usualTools: [
      "Many tools offer built-in integrations with each other, and where they exist and fit, they are the right answer. Gaps appear when the tools come from different vendors, when the integration only syncs some fields, or when the data needs interpreting first, such as a free-text address or a service name that differs between systems.",
      "Replacing all the tools with one all-in-one platform is an option, but it means retraining everyone and often giving up the tool that works best for one part of the job.",
    ],
    steps: [
      {
        title: "Draw the current map",
        text: "We list every tool, what information lives in each and every place someone copies data by hand.",
      },
      {
        title: "Choose one home for each fact",
        text: "Customer details live in one place, appointments in another, and every other tool reads from that source rather than holding its own copy.",
      },
      {
        title: "Connect with official integrations first",
        text: "Native integrations and official connections are used wherever they are reliable. Custom connections fill the remaining gaps.",
      },
      {
        title: "Use AI where data needs interpreting",
        text: "AI reads free-text form entries, emails and notes, matches records that refer to the same customer and translates between the different names systems use for the same thing.",
      },
      {
        title: "Monitor and alert",
        text: "If a connection fails or a record cannot be matched, a person is notified with the details, instead of the problem staying silent.",
      },
    ],
    outcomes: [
      "A customer is entered once and appears correctly everywhere.",
      "Changes made in one place reach every tool.",
      "Staff stop ringing each other to check which system is right.",
      "Unused or overlapping subscriptions become visible, so the tool stack can be simplified.",
    ],
    requirements: [
      "A list of the tools you use and admin access to each",
      "Which system should be the source of truth for customers, jobs and invoices",
      "Examples of the data that currently gets copied between them",
    ],
    humanInTheLoop:
      "Automated syncs are logged and reversible. Where a match is uncertain, such as two records that might be the same customer, a person decides. You are told when anything fails rather than finding out later.",
    privacy:
      "Connections use the minimum access each tool allows, through accounts you control. Data moves only between your own systems, and nothing is used to train public AI models.",
  },

  "automated-handoffs": {
    seoTitle: "Automated Handoffs Between Teams | Hiroshi Murakami",
    seoDescription:
      "When a lead is won or a job is done, scheduling, invoicing or follow-up starts on its own, with an AI handover note for the next person.",
    lead: "Most dropped balls happen between people, not within a task. A lead is won but operations never hears about it. A job is finished but nobody sends the invoice. This scenario shows handoffs that happen on their own.",
    problem: [
      "Picture an events company, an IT installer, a property maintenance firm or a marketing agency. Sales closes a deal and announces it in a team chat. Operations is supposed to schedule the work. When the work is done, the technician tells the office, which is supposed to invoice and ask for feedback.",
      "Each step depends on someone remembering to tell someone else, and on the message containing the right details. Messages get buried. People are on holiday. A job waits a week to be scheduled, an invoice is sent a month late, a client who expected a kick-off call hears nothing.",
      "As teams grow or rely on part-time staff and contractors, there are more handoffs and fewer people who know the whole process, so the gaps multiply.",
    ],
    usualTools: [
      "Project management tools are excellent for tracking tasks once they exist, but someone still has to create the next task at each handoff. Team chat makes it easy to announce things and equally easy to miss them.",
      "Checklists and process documents describe the handoffs well, but they depend on people reading and following them on busy days.",
    ],
    steps: [
      {
        title: "Name the handoffs",
        text: "We list each point where work passes from one person or team to another: deal won, deposit paid, job scheduled, job finished, invoice paid.",
      },
      {
        title: "Define what each one needs",
        text: "For every handoff, we agree what information must travel with it and who must be told, so the next person can act without asking questions.",
      },
      {
        title: "Trigger the next step automatically",
        text: "When a deal is marked won, the job is created and the scheduler notified. When a job is marked done, the invoice is drafted and the follow-up queued.",
      },
      {
        title: "AI writes the handover note",
        text: "AI reads the history, from emails and notes to call summaries, and writes a short brief for the next person: what was promised, special requirements and who to contact.",
      },
      {
        title: "Watch for stalls",
        text: "If a handoff is not picked up within the time you set, the right person is reminded, and then a manager.",
      },
    ],
    outcomes: [
      "Won work is scheduled promptly, without relying on a chat message being seen.",
      "Finished work is invoiced promptly, which helps cash flow.",
      "Each person starts their step with a clear brief instead of hunting for details.",
      "Managers can see where work is waiting and why.",
    ],
    requirements: [
      "The tools where deals, jobs and invoices are recorded",
      "Your handoff points and who is responsible at each",
      "What a good handover note should contain",
      "Time limits after which a stalled handoff should be escalated",
    ],
    humanInTheLoop:
      "Automation creates the next task and the brief; people do the work and make the calls. Invoices and customer messages can be set to wait for approval, and anyone can pause an automated step for a particular job.",
    privacy:
      "Handover notes stay inside your own tools and are visible only to the people involved. Nothing is used to train public AI models.",
  },

  // Growth batch 5. A ranking of first projects by effort and payback. The
  // effort ranges and the worked example are assumptions, labelled as such
  // on the page, never client results. Categories only, no vendors.
  "first-ai-automation-projects-small-business-los-angeles": {
    seoTitle: "5 AI Automation Projects for Small Business in Los Angeles",
    seoDescription:
      "Five first AI automation projects for a small Los Angeles business, ranked by effort and payback, with assumed effort ranges and when to wait.",
    lead: "The five first AI automation projects for a small business in Los Angeles, from least to most effort, are: follow-ups for quotes and overdue invoices, instant replies to web leads, an AI receptionist for overflow calls, receipt and invoice capture for the books, and connecting the tools you use. Start with the easiest one that removes your most expensive bottleneck.",
    keyFacts: [
      "Automated follow-ups for quotes and overdue invoices are usually the lowest-effort first AI automation project for a small business.",
      "Connecting several disconnected tools is usually the highest-effort first project, because it touches the most systems.",
      "The best first AI automation project removes the most expensive bottleneck, not the most impressive one.",
      "The effort ranges on this page are assumptions for illustration, not measured client results.",
    ],
    stepsHeading: "Five first projects, ranked from least to most effort",
    problem: [
      "Picture the owner of a six person business in Los Angeles: a repair company, a studio or a small agency. They have heard that AI can answer the phone, reply to leads, chase invoices and keep the books. All of it sounds useful, and none of it says where to begin.",
      "So the owner either does nothing, or buys the biggest platform on offer and spends two months setting it up while the phone keeps ringing. Both are expensive. The first leaves the same hours lost every week, and the second spends the team's patience on a project before anything has earned trust.",
    ],
    usualTools: [
      "Lists of AI tools rank products by features, not by how much work they take to set up in your business or how soon they pay back. A demo shows the best case on a tidy example, with none of your own data, exceptions or staff.",
      "Asking which project is best misses the point. A better question is which bottleneck costs the most today, and which fix for it needs the least setup and the least access to your systems.",
    ],
    steps: [
      {
        title: "1. Follow-ups for quotes and overdue invoices",
        text: "Assumed effort: low, about one to two weeks of part-time setup, mostly writing the messages and the rules for when they stop. Payback tends to show early when quotes or invoices often go unanswered, because the work behind them is already done. Watch for: a message that goes out after the customer has replied or paid, so the stop rules come first.",
      },
      {
        title: "2. Instant replies to web form and message leads",
        text: "Assumed effort: low to medium, about two weeks, for approved answers, a few qualifying questions and a booking link. Payback is clearest when leads arrive while you are on a job and a competitor is one search away. Watch for: replies that quote prices or dates you never approved, so those become a message for a person.",
      },
      {
        title: "3. An AI receptionist for overflow and after-hours calls",
        text: "Assumed effort: medium, about two to four weeks, including a test on 20 past calls before real callers depend on it. Payback depends on how many missed calls are routine questions or bookings. Watch for: disclosure, recording rules and the handover, since callers who need a person must reach one with context.",
      },
      {
        title: "4. Receipt and invoice capture for the books",
        text: "Assumed effort: medium, about three to four weeks, depending on how your accounting software connects and how consistent your past coding is. Payback is strongest for owners who do the books at night. Watch for: anything posting without review, so a person approves entries and paying stays a person's decision.",
      },
      {
        title: "5. Connecting the tools you already use",
        text: "Assumed effort: high, about four to eight weeks, depending on how many tools are involved and whether they offer official connections. The payback can be the largest over time when the same customer is retyped into several apps, but it is the slowest to arrive. Watch for: automating a messy process, so map it first and start with one handoff.",
      },
    ],
    outcomes: [
      "The first project is chosen from your own bottlenecks rather than a feature list.",
      "Low-effort projects come first, so the team sees something work before larger changes.",
      "Each project starts with the least access to your systems that will do the job.",
      "Larger projects such as connecting tools wait until the earlier ones show where data is retyped most.",
      "Deciding to wait, or to do nothing yet, counts as a useful result.",
    ],
    requirements: [
      "A rough count for two ordinary weeks: missed calls, unanswered quotes, late invoices and hours on the books",
      "A list of the tools you use today and who looks after each one",
      "Approved wording for prices, hours and policies, and what must always go to a person",
      "One person with time to review the first weeks of each project",
    ],
    humanInTheLoop:
      "Every project keeps a person in charge of what matters. Follow-ups and lead replies use approved wording, the receptionist hands calls to a person, book entries wait for approval and payments stay with your team. Each new project starts small, is checked closely for the first weeks and grows only once it has earned trust.",
    privacy:
      "Each project collects only the details it needs and keeps them in your own tools where possible. Ask any provider, including me, what is stored, where, who can open it, how long it is kept and how it is deleted. Customer data is not used to train public AI models.",
    example: {
      title: "A worked example: ordering two first projects",
      intro:
        "The figures below are assumptions chosen to show the reasoning. They are not a client result, a quote or a promise of any outcome.",
      assumptions: [
        { label: "Business", value: "An assumed six person home repair company in Los Angeles" },
        { label: "Quotes", value: "An assumed 15 quotes a month, 6 of them never answered" },
        { label: "Missed calls", value: "An assumed 25 a week, about half routine questions or bookings" },
        { label: "Books", value: "An assumed 4 hours a week of the owner's time on receipts and coding" },
        { label: "Setup effort", value: "The assumed ranges above: one to two weeks for follow-ups, two to four for the receptionist" },
      ],
      steps: [
        "Start with quote follow-ups: the lowest effort, and the 6 silent quotes a month are jobs already priced.",
        "Test an AI receptionist next on 20 past calls, because about 12 missed calls a week are routine or bookings.",
        "Leave receipt capture for the third month, and use the savings calculator on this site for a rough range first.",
        "Hold the tool connection project until the first three show where data is retyped most.",
      ],
      result:
        "In this example, if follow-ups brought back even 1 of the 6 silent quotes a month, the first project would likely repay its small setup; that is an assumption to test, not a promise. The receptionist may matter more over time, but it needs more setup and review, so it goes second. Few calls and a pile of receipts would reverse the order.",
    },
    faqs: [
      {
        question: "What is the easiest AI automation for a small business to start with?",
        answer:
          "For many small businesses it is automated follow-ups for quotes and overdue invoices. The messages are short, the rules are simple and nothing needs deep access to your systems. It is only the right start if unanswered quotes or late payments actually cost you.",
      },
      {
        question: "How long does a first AI automation project take?",
        answer:
          "The ranges on this page are assumptions: about one to two weeks for follow-ups, up to four to eight weeks for connecting several tools. Your own timing depends on your tools, your data and how much review you want, which the free AI audit looks at before anything is promised.",
      },
      {
        question: "How do I choose which project comes first?",
        answer:
          "Count two ordinary weeks of missed calls, unanswered quotes, late invoices and hours on the books. Pick the bottleneck that costs the most, then the lowest-effort project that addresses it.",
      },
      {
        question: "Do I need new software to start with AI automation?",
        answer:
          "Usually not. Most first projects work with the phone number, calendar, inbox and accounting software you already have. If a tool cannot connect safely, that is said plainly before anything is built.",
      },
      {
        question: "When is AI automation not worth it yet?",
        answer:
          "When the volume is too low to repay the setup, when answers change every day, or when nobody has time to review the first weeks. In those cases a better process, a template or a part-time person may be the better first step.",
      },
      {
        question: "Do you work with small businesses across Los Angeles?",
        answer:
          "Yes. I serve businesses in Los Angeles and across Los Angeles County, remote-first, with the audit, setup and check-ins held over video calls and messages. There is no office to visit.",
      },
    ],
  },
};
