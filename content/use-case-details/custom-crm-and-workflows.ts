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
};
