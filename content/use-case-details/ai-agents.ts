import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Agents use cases. Illustrative scenarios, no
// client names and no numbers.

export const AI_AGENTS_DETAILS: Record<string, UseCaseDetail> = {
  "data-entry-across-tools": {
    seoTitle: "AI Agent for Data Entry Between Tools | Hiroshi Murakami",
    seoDescription:
      "An AI agent moves orders, contacts and notes between tools that do not talk to each other, checks them and flags anything odd for a person.",
    lead: "When systems do not talk to each other, people become the integration: copying, pasting and retyping all day. This scenario shows an AI agent doing that work, with checks a tired person might skip.",
    problem: [
      "Picture a distributor or an online store with a small back office. Orders arrive through the website, a marketplace and by email from trade customers. Each one has to be entered into the inventory system, the shipping tool and the accounting software. Customer details also go into the email marketing list, and notes from calls end up in a spreadsheet.",
      "Two people spend much of their day copying the same information between screens. Errors are inevitable: a transposed digit in a ZIP code, a missed line on a trade order, a customer added twice with slightly different spellings. Each mistake costs a reshipment, an awkward email or an hour of detective work.",
      "Software costs have grown too. Many tools now charge per user or per connection, so adding another subscription to glue the others together feels like paying twice for the same problem.",
    ],
    usualTools: [
      "Point-to-point integration tools are great when two systems expose clean connections and the data maps neatly. Real orders are messier: free text in an email, a PDF purchase order, a marketplace export with its own column names. Simple automations break quietly when a field changes, and nobody notices until a customer complains.",
      "Replacing everything with one large system can work, but it is a big project, and it often forces the business to change how it works to suit the software. Hiring another person to type is the easiest option, and also the one that scales worst.",
    ],
    steps: [
      {
        title: "Map the copying that happens today",
        text: "We follow a few real orders and contacts from start to finish and list every place the same data is entered by hand.",
      },
      {
        title: "The agent reads every source",
        text: "Web orders, marketplace exports, emailed purchase orders and PDFs are read by the agent, including free text, and turned into one clean record.",
      },
      {
        title: "It writes to each tool",
        text: "Using official connections where tools offer them, the agent creates or updates the order, the shipment, the invoice and the contact in each system.",
      },
      {
        title: "It checks before it writes",
        text: "Prices against your price list, stock levels, addresses and possible duplicate customers are checked. Anything that looks wrong is held and flagged.",
      },
      {
        title: "A person handles the exceptions",
        text: "Your team works through a short queue of flagged items with the original document alongside, and the agent keeps a log of everything it did.",
      },
    ],
    outcomes: [
      "Your back office stops retyping the same order three times.",
      "Data is consistent across systems, because one checked record feeds all of them.",
      "Mistakes are caught before they reach a customer rather than after.",
      "People spend their time on customers, suppliers and problems that need judgement.",
      "There is a clear log of what was entered where, and when.",
    ],
    requirements: [
      "A list of the tools involved and an account the agent can use in each",
      "A few examples of real orders, contacts or documents from each source",
      "Your rules for prices, stock and what counts as an exception",
      "Someone who owns the exception queue",
    ],
    humanInTheLoop:
      "The agent starts in a supervised mode where a person approves its entries. You decide which routine records it may then enter on its own. Anything unusual is always held for a person, and every action is logged.",
    privacy:
      "The agent only gets access to the tools and records it needs, through accounts you control and can revoke. Customer data stays inside your systems, and nothing is used to train public AI models.",
  },

  "automated-research-and-reporting": {
    seoTitle: "AI Agent for Research and Weekly Reports | Hiroshi Murakami",
    seoDescription:
      "An AI agent checks prices, listings or competitor pages on a schedule and writes a short weekly summary with links to every source it used.",
    lead: "Someone on your team spends Friday afternoons visiting websites, copying figures into a spreadsheet and writing up what changed. This scenario shows an AI agent doing the gathering, so people can do the thinking.",
    problem: [
      "Think of a property management company tracking rents for similar units, a retailer watching competitor prices, a restaurant group following supplier price lists, or a marketing agency monitoring what competitors publish. The information is public, scattered across many websites, and changes all the time.",
      "Keeping up means someone visits the same pages each week, copies figures into a spreadsheet and writes a short summary for the owner or a client. It is important work, but repetitive, and it is the first task dropped in a busy week. When it is skipped, decisions on pricing or positioning get made on stale information.",
      "Paid market data tools exist for some industries, but they are often priced per seat and built for large companies, and they rarely cover the specific local competitors that matter to a small business.",
    ],
    usualTools: [
      "Website change alerts tell you that a page changed but not what it means, and they quickly fill an inbox with noise. Spreadsheet templates help structure the work but still need a person to fill them.",
      "Subscription research platforms are powerful for broad market data. For a narrow, specific question, such as what five local competitors charge this week, they can be expensive and still miss the sources you care about.",
    ],
    steps: [
      {
        title: "Define the questions",
        text: "We agree what you want to know each week, such as rent for two-bedroom units in a set of ZIP codes, competitor prices for your top products, or new services launched by rivals.",
      },
      {
        title: "Choose the sources",
        text: "You list the websites, public listings and feeds the agent should check. It follows each site's terms and only reads publicly available information.",
      },
      {
        title: "The agent gathers on a schedule",
        text: "Daily or weekly, the agent visits the sources, extracts the figures and facts that answer your questions and stores them alongside past results.",
      },
      {
        title: "It writes a short summary",
        text: "Each week you receive a brief, plain-language report on what changed and what stayed the same, with a link to every source so you can check any figure.",
      },
      {
        title: "You refine it over time",
        text: "When a question changes or a source stops being useful, you tell the agent and the next report reflects it.",
      },
    ],
    outcomes: [
      "The weekly report arrives on time, every week, even in busy periods.",
      "Decisions on pricing and positioning are based on current information.",
      "Every figure links back to its source, so the report can be trusted and checked.",
      "The person who used to gather the data now spends that time interpreting it.",
    ],
    requirements: [
      "The questions you want answered and how often",
      "The sources to check, and any you want excluded",
      "Who receives the report and in what format: email, a shared document or a spreadsheet",
    ],
    humanInTheLoop:
      "The agent gathers and summarises, people interpret and decide. It flags figures that look inconsistent rather than smoothing them over, and it never acts on its findings, for example by changing your prices, unless you build that step in with approval.",
    privacy:
      "The agent reads only publicly available information and respects website terms. Your questions and reports stay in your own workspace, and nothing is used to train public AI models.",
  },

  "internal-knowledge-assistant": {
    seoTitle: "AI Internal Knowledge Assistant | Hiroshi Murakami",
    seoDescription:
      "An internal AI assistant answers staff questions from your own policies, price lists and guides, with a link to the source for every answer.",
    lead: "In most businesses there is one person who knows where everything is and how everything works, and everyone asks them. This scenario shows an internal assistant that answers from your own documents, with sources.",
    problem: [
      "Imagine an insurance agency, a property management firm or a growing clinic group. The operations manager has been there for years. New staff ask them how to process a refund, which form a particular client needs, what the policy is for weekend call-outs and where the latest price list lives.",
      "Each question is reasonable and takes a minute to answer, but together they fill the manager's day and slow everyone else down while they wait for a reply. When that person is on holiday, work stalls or people guess. Training new hires takes longer than it should, and turnover makes it a constant cost.",
      "The answers usually exist somewhere: in shared drives, old emails, a wiki nobody updates and handbooks in three versions. The problem is finding the right one quickly.",
    ],
    usualTools: [
      "Shared drives and wikis store knowledge but rely on people knowing what to search for and which version is current. Search inside most document tools matches words, not meaning, so the answer to \"can I refund a deposit after 48 hours?\" stays hidden in a policy titled something else.",
      "General AI chat tools are fluent, but they do not know your policies and may answer confidently with something that sounds plausible and is wrong for your business.",
    ],
    steps: [
      {
        title: "Gather the documents that matter",
        text: "Policies, procedures, price lists, templates and guides are collected, and outdated versions are set aside with your help.",
      },
      {
        title: "Build a private knowledge base",
        text: "The documents are indexed in a private workspace so the assistant can find relevant passages by meaning, not just by matching words.",
      },
      {
        title: "Staff ask in plain language",
        text: "Team members ask questions in a chat tool they already use, such as Slack, Teams or a simple web page, and get a short answer.",
      },
      {
        title: "Every answer shows its source",
        text: "The assistant links to the document and section it used, so staff can check, and it says clearly when it cannot find an answer instead of guessing.",
      },
      {
        title: "Gaps become updates",
        text: "Questions the assistant could not answer are collected for the manager, so missing or unclear documents get fixed once rather than explained again and again.",
      },
    ],
    outcomes: [
      "Staff get quick, sourced answers without waiting for the one person who knows.",
      "The expert's time goes to decisions and coaching rather than repeating answers.",
      "New hires find their feet faster, with a patient place to ask basic questions.",
      "Documentation improves over time, because gaps become visible.",
    ],
    requirements: [
      "Access to the documents the assistant should use, and a list of what to leave out",
      "The chat tool your team already uses, or a preference for a simple web page",
      "Someone who owns the documents and reviews the unanswered questions",
    ],
    humanInTheLoop:
      "The assistant answers only from your documents and always shows the source. For decisions with real consequences, such as refunds above a limit or client exceptions, it points staff to the person who decides rather than deciding itself.",
    privacy:
      "Documents stay in a private workspace that only your team can reach. Access can follow existing permissions, so staff see only what they are allowed to see, and nothing is used to train public AI models.",
  },
};
