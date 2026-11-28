import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Accounting use cases. Illustrative scenarios,
// no client names and no results. Worked examples use assumed figures that
// the page labels as assumptions.

export const AI_ACCOUNTING_DETAILS: Record<string, UseCaseDetail> = {
  "invoice-and-receipt-capture": {
    seoTitle: "AI Invoice and Receipt Capture | Hiroshi Murakami",
    seoDescription:
      "How AI collects supplier invoices and receipts from email and phone photos, reads them and codes them from your history, ready for a person to approve.",
    lead: "Paper receipts in a glovebox, PDFs buried in three inboxes, and someone typing it all into the books at the end of the month. This scenario shows how AI takes over the capture and coding, while a person still approves every entry.",
    problem: [
      "Picture a trade or wholesale business with a few dozen suppliers. Invoices arrive as email attachments, as links to supplier portals and sometimes on paper with the delivery. Staff pay for fuel, parts and lunches on the company card and keep the receipts, or mean to. Once a month the owner, an office manager or the outside bookkeeper sits down and types each one into the accounting software: date, supplier, amount, tax, account, job.",
      "The typing is only part of the cost. Receipts go missing, so card transactions sit unexplained. The same invoice gets entered twice because it was emailed and posted. Coding drifts, because the person entering it in March does not remember how the same supplier was coded in January. And while all of this waits for month end, nobody can say with confidence what was spent on a job last week.",
      "Hiring help for data entry has become harder to justify as wages and payroll costs have risen, and bookkeepers increasingly charge for clean-up time when the source documents arrive late or incomplete.",
    ],
    usualTools: [
      "Most accounting packages now include some receipt scanning, and dedicated capture apps exist. They are useful, but they usually read a document and stop there. Someone still has to forward every email, photograph every receipt in the app, pick the account and the job, and check for duplicates. If staff do not use the app, the receipts never arrive.",
      "Outsourcing data entry moves the typing elsewhere without fixing the collection problem, and it adds a delay before the books are current. A shared inbox and a spreadsheet log works until the volume grows or the person who runs it is away.",
    ],
    steps: [
      {
        title: "Documents are collected where they already land",
        text: "A dedicated forwarding address, the accounts inbox and a simple photo upload link for staff all feed one queue. Supplier portals that send email notifications are picked up the same way.",
      },
      {
        title: "AI reads each document",
        text: "Supplier, invoice number, dates, line items, tax and totals are extracted. Blurry or partial photos are flagged rather than guessed.",
      },
      {
        title: "Coding follows your own history",
        text: "The AI proposes the account, tax treatment and job or class based on how you coded the same supplier before, and on rules you approve. New suppliers are marked as new.",
      },
      {
        title: "Checks before anything is posted",
        text: "Possible duplicates, totals that do not add up, unusual amounts for a supplier and missing receipts for card transactions are all raised as questions.",
      },
      {
        title: "A person approves, then it posts",
        text: "Your bookkeeper or office manager reviews a short list each day or week, fixes anything odd, and approves. Only approved entries reach the accounting software, with the original document attached.",
      },
    ],
    outcomes: [
      "Nobody types supplier invoices from scratch any more. Review replaces data entry.",
      "Documents are captured when they arrive, so the books stay current through the month instead of catching up at the end.",
      "Coding is consistent from month to month, because it follows the same history and rules every time.",
      "Missing receipts are chased while the purchase is still fresh in someone's memory.",
      "Your bookkeeper or accountant spends time on judgement and advice rather than on keying in figures.",
    ],
    requirements: [
      "Read access to the inbox where invoices arrive, or a forwarding rule",
      "Your accounting software, with permission to create draft entries",
      "A few months of past entries so coding can follow your history",
      "Your chart of accounts, tax settings and any job or class tracking",
      "The name of the person who approves entries",
    ],
    humanInTheLoop:
      "Nothing posts to your books without a person's approval, at least until you decide which routine suppliers may post automatically. Anything new, unusual or unclear always goes to a person, and every entry keeps a link to its source document for your accountant.",
    privacy:
      "Invoices and receipts are processed only for your books and stored with access limited to your team and your accountant. They are not used to train public AI models. Card and bank details are never written into notes or summaries.",
  },

  "automated-bank-reconciliation": {
    seoTitle: "AI Bank Reconciliation and Matching | Hiroshi Murakami",
    seoDescription:
      "AI bank reconciliation explained: transaction matching of bank lines to invoices, receipts and payouts every day, with a short exception list for a person.",
    lead: "AI bank reconciliation matches each bank and card line to the invoice, bill, receipt or payout it belongs to, weighing amounts, dates, references and your past decisions, and leaves only the uncertain lines for a person to approve. Run every day instead of at month end, it turns reconciliation from a backlog that eats the first days of the month into a short exception list.",
    keyFacts: [
      "AI bank reconciliation matches bank and card lines to invoices, bills, receipts and payouts, and sends the lines it cannot match to a person.",
      "Transaction matching using AI compares the amount, date, reference, payer name and past matching decisions for each transaction.",
      "AI bank reconciliation can split a bundled payout into the customer payments and fees inside the payout.",
      "An AI reconciliation setup can work with QuickBooks Online and Xero through their official connections.",
    ],
    problem: [
      "Imagine a services business with several bank accounts, a couple of company cards, card terminal payouts and a payment processor for online invoices. Each payout bundles many customer payments and deducts fees. Some customers pay two invoices in one transfer, others pay part of one. Card statements arrive with merchant names that look nothing like the supplier name in the books.",
      "Matching all of this by hand is slow and dull, so it gets left until month end. By then there are hundreds of lines, memories have faded, and questions such as \"what was this transfer?\" take an email thread to answer. The close slips, reports are late, and cash looks different in the bank than in the books for most of the month.",
      "As businesses add more payment methods to keep customers happy, the number of lines to match keeps growing, while the time available to match them does not.",
    ],
    usualTools: [
      "Bank feeds and the built-in matching rules in accounting software are a real help with simple, repeating transactions. They struggle with bundled payouts, partial and combined payments, fees netted off deposits and card merchant names that change. Rules also need maintaining, and in many small businesses nobody owns that job.",
      "Spreadsheet reconciliations give control but depend on one careful person and on exporting data from several places. When that person is busy or away, reconciliation simply stops.",
    ],
    steps: [
      {
        title: "Every source is connected",
        text: "Bank and card feeds, payment processor reports and your open invoices and bills are brought together each day, read only where possible.",
      },
      {
        title: "Payouts are broken apart",
        text: "Processor and card terminal payouts are split back into the customer payments and fees they contain, so each part can be matched to the right invoice.",
      },
      {
        title: "AI proposes the matches",
        text: "Amounts, dates, references, customer names and your past matching decisions are weighed together, including combined and partial payments. Each proposal carries a short reason.",
      },
      {
        title: "Exceptions come to a person",
        text: "Unmatched lines, uncertain matches and anything unusual are listed with the likely candidates side by side, so a decision takes moments instead of a search.",
      },
      {
        title: "Approved matches are recorded",
        text: "Once a person confirms them, matches are recorded in your accounting software, and the AI learns from every correction.",
      },
    ],
    outcomes: [
      "Reconciliation happens in small daily batches instead of one long session at month end.",
      "Questions about unknown transactions are asked within days, while people still remember the answer.",
      "Cash in the books stays close to cash in the bank all month, which makes decisions easier.",
      "Month-end close can start on reconciled accounts rather than on a backlog.",
      "The process no longer depends on one person's spreadsheet.",
    ],
    requirements: [
      "Bank and card feeds already connected to your accounting software, or statement exports",
      "Access to your payment processor and card terminal reports",
      "Permission to read invoices and bills and to record approved matches",
      "A person who reviews exceptions on a regular rhythm",
    ],
    humanInTheLoop:
      "The AI proposes, a person confirms. You choose which kinds of match may be recorded without review, for example a recurring rent payment, and everything else waits for approval. The reasoning behind each match is visible, so your accountant can audit it.",
    privacy:
      "Bank data is accessed read only wherever the bank allows it, never used to move money, and kept with access limited to your finance team and accountant. It is not used to train public AI models.",
    faqs: [
      {
        question: "What is AI bank reconciliation?",
        answer:
          "It is reconciliation where AI does the matching. Each bank and card line is paired with the invoice, bill, receipt or payout it belongs to, and a person approves the matches and resolves the lines the AI could not place. The accounting software stays the record; the AI only prepares the work.",
      },
      {
        question: "How does transaction matching using AI work?",
        answer:
          "The AI compares each transaction with open invoices and bills using several signals at once: amount, date, reference, payer or merchant name and how similar lines were matched before. It can also split a bundled payout into the payments and fees inside it, and match one transfer to several invoices. Every proposed match carries a short reason, so a person can check it.",
      },
      {
        question: "Can I trust the matches?",
        answer:
          "You do not have to trust them blindly. Uncertain and unusual matches always go to a person, and you decide which simple, recurring matches may be recorded without review. Every decision is logged, so your accountant can audit it later.",
      },
      {
        question: "Does it work with QuickBooks Online and Xero?",
        answer:
          "Yes, those are the most common setups, through their official connections and the bank feeds you already use. Other accounting software can often be supported through exports. The free audit confirms what is possible with yours.",
      },
      {
        question: "Will it replace my bookkeeper?",
        answer:
          "No. It removes the line by line matching, so your bookkeeper spends time on the exceptions, the judgement calls and advice. The aim is that their time goes further, not that the role disappears.",
      },
    ],
  },

  "faster-month-end-reporting": {
    seoTitle: "AI Month-End Close and Reporting | Hiroshi Murakami",
    seoDescription:
      "How AI keeps the books coded and reconciled all month, runs the close checklist and drafts core reports for a person to review soon after month end.",
    lead: "When the books are messy, month-end reports arrive weeks late and nobody fully trusts them. This scenario shows how AI keeps the books ready through the month and prepares the reports for a person to check.",
    problem: [
      "Consider a growing business with an owner who wants a profit and loss, cash position and a few key figures each month. The bookkeeping happens in bursts. Some transactions are uncoded, accruals are forgotten, a supplier bill sits in someone's inbox and one bank account has not been reconciled since the last quarter.",
      "So the month-end report is late, often by weeks, and when it arrives it needs a call to explain the odd numbers. Decisions about hiring, pricing or a slow-paying customer get made on instinct instead of figures. When the accountant finally gets the file for the year end, they bill for the clean-up.",
      "Rising costs have made owners watch margins more closely, which makes a late or unreliable report more expensive than it used to be.",
    ],
    usualTools: [
      "Accounting software produces reports instantly, but a report is only as good as the entries underneath it. The software cannot know that a bill is missing or that a deposit is really a loan.",
      "Close checklists in a spreadsheet or task app help, but they rely on someone remembering to work through them and to chase other people for answers. Business intelligence dashboards are powerful, yet they also show messy data faster rather than cleaning it.",
    ],
    steps: [
      {
        title: "Capture and reconciliation run all month",
        text: "Invoices, receipts and bank lines are captured and matched as they arrive, so the books are mostly current before the month ends.",
      },
      {
        title: "A close checklist runs itself",
        text: "On the first working day, the AI works through your checklist: unreconciled accounts, uncoded items, missing bills from regular suppliers, recurring accruals and prepayments.",
      },
      {
        title: "Questions go to the right people",
        text: "Instead of one person chasing everyone, each open question is sent to whoever can answer it, with the transaction and context attached.",
      },
      {
        title: "Reports are drafted",
        text: "Profit and loss, balance sheet, cash position and the few figures you care about are drafted, compared with previous months, and the larger movements are explained in plain language.",
      },
      {
        title: "A person reviews and sends",
        text: "Your bookkeeper or accountant reviews the draft, adjusts entries where judgement is needed and signs off before the pack reaches the owner.",
      },
    ],
    outcomes: [
      "Monthly reports arrive soon after month end, rather than whenever the books are finally caught up.",
      "Movements are explained in plain words, so the owner can read the report without a call.",
      "Open questions are answered during the close instead of piling up for the year end.",
      "Your accountant starts the year end from tidy, reviewed books.",
    ],
    requirements: [
      "Your accounting software and the bank, card and processor feeds",
      "Your current close steps, even if they only live in someone's head",
      "The reports and figures the owner actually reads",
      "Who answers which kind of question, and who signs off the pack",
    ],
    humanInTheLoop:
      "AI drafts, people decide. Journals that involve judgement, such as accruals, write-offs or reclassifications, are proposed but never posted without approval, and the final report is always signed off by your bookkeeper or accountant.",
    privacy:
      "Financial data stays inside your accounting software and a private workspace with access limited to the people you name. It is not used to train public AI models, and reports are shared only with the recipients you choose.",
  },

  "bank-reconciliation-for-a-10-person-firm": {
    seoTitle: "Bank Reconciliation for a 10 Person Firm | Hiroshi Murakami",
    seoDescription:
      "How to automate bank reconciliation in a 10 person firm with no full-time bookkeeper: daily AI matching, one weekly review and a worked example with costs.",
    lead: "To automate bank reconciliation in a 10 person firm, connect your bank and card feeds to the accounting software, let AI propose a match for every new line each day, and give one person a short weekly review of the exceptions. Nobody ticks off statement lines by hand any more, and the books stay reconciled through the month instead of catching up at the end.",
    problem: [
      "Picture a 10 person firm: a design studio, a small engineering or law practice, a property management office or an agency. There is no full-time bookkeeper. The office manager or one of the owners does the books alongside everything else, and an outside accountant handles the year end and the tax returns.",
      "The money moves through two operating accounts, a savings account, three or four company cards and a payment processor for client invoices. That is a few hundred lines a month, and each one needs to be matched to an invoice, a bill or a receipt. It is nobody's main job, so it waits. By the time someone sits down to do it, the month is over, the receipts are scattered and the outside accountant is asking why the bank balance and the books disagree.",
      "A firm of this size is too small to justify a finance hire and too busy to give the work proper attention. That gap is exactly where reconciliation quietly falls behind.",
    ],
    usualTools: [
      "Bank feeds and bank rules in QuickBooks Online or Xero help a lot with the simple lines, such as rent, payroll and software subscriptions. They need someone to look after them, though, and they struggle with client payments that cover two invoices, processor payouts with fees taken off and card merchants whose names change.",
      "Handing the whole job to an outside bookkeeper works, but it is billed by the hour, the questions still come back to the firm, and the books are only as current as the last time the bookkeeper had time for you. A spreadsheet tick list is fine until the person who keeps it is on holiday.",
    ],
    steps: [
      {
        title: "Connect the feeds, read only",
        text: "Bank, card and processor data comes in through the feeds your accounting software already uses. No bank logins are collected and nothing can move money.",
      },
      {
        title: "Learn from what is already reconciled",
        text: "A few months of past reconciliations show how the firm matches its own transactions: which client pays which way, which card is used for what, which payments are recurring.",
      },
      {
        title: "Match every day",
        text: "Each morning the AI proposes a match for every new line, splits bundled payouts and links combined payments to the right invoices. Each proposal carries a short reason.",
      },
      {
        title: "One person reviews the exceptions",
        text: "The office manager or an owner gets a short list of what the AI could not place or was unsure about, with the likely candidates side by side. A weekly slot is usually enough at this size.",
      },
      {
        title: "Hand the accountant a clean file",
        text: "Approved matches are recorded in the accounting software with their reasons, so the outside accountant starts the month end or year end from reconciled books.",
      },
    ],
    outcomes: [
      "Reconciliation becomes a weekly review instead of an evening of ticking off lines.",
      "Unknown transactions are asked about while people still remember them.",
      "The bank balance and the books agree through the month, not only after a catch-up.",
      "The outside accountant spends less billable time on clean-up and more on advice.",
      "The process keeps running when the person who usually does it is away.",
    ],
    requirements: [
      "QuickBooks Online or Xero, or another system with reliable exports",
      "Bank and card feeds connected, plus access to processor reports",
      "A few months of reconciled history, or a short catch-up first",
      "One named person who reviews exceptions every week",
    ],
    humanInTheLoop:
      "The AI proposes and the named reviewer approves. At first every match waits for approval. After a month or two the firm can choose which recurring matches, such as rent or payroll, may be recorded without review. Anything unusual still goes to a person.",
    privacy:
      "Bank data arrives read only through your accounting software's feeds and is never used to move money. Access is limited to the people you name and your accountant, and the data is not used to train public AI models.",
    example: {
      title: "A worked example: a 10 person studio",
      intro:
        "The figures below are assumptions chosen to show the arithmetic. They are not a client result, and your own numbers will differ.",
      assumptions: [
        { label: "Accounts", value: "2 bank accounts, 3 company cards and 1 payment processor" },
        { label: "Volume", value: "About 350 bank and card lines a month" },
        { label: "Time today", value: "About 10 hours a month of matching by the office manager" },
        { label: "Cost of that time", value: "An assumed $40 an hour including payroll costs, so about $400 a month" },
        { label: "Running cost", value: "An assumed $100 a month for software and AI usage, a placeholder rather than a quote" },
      ],
      steps: [
        "Week 1: connect the feeds and load six months of reconciled history.",
        "Week 2: the AI matches alongside the manual process, and the two are compared line by line.",
        "Week 3: the office manager switches to reviewing exceptions only, about 50 lines a month in this example.",
        "Month 2: rent, payroll and software subscriptions are approved to record without review.",
      ],
      result:
        "If 50 exceptions take about 2 minutes each and a weekly spot check takes 30 minutes, review comes to roughly 4 hours a month. That frees about 6 hours, worth about $240 a month at the assumed rate, or about $140 after the assumed running cost. The bigger change is that the books are current every week.",
    },
    faqs: [
      {
        question: "Can a 10 person firm automate bank reconciliation without a bookkeeper?",
        answer:
          "Yes, as long as one person owns the weekly exception review. The AI does the matching, but someone who knows the business has to answer the questions it cannot, such as what an unfamiliar transfer was for.",
      },
      {
        question: "How long does setup take for a firm this size?",
        answer:
          "In the illustrative plan above it takes about three weeks, including a week of running side by side with the manual process. It takes longer if the books are behind, because the history needs a catch-up first.",
      },
      {
        question: "What if our books are months behind?",
        answer:
          "Start with a one-off catch-up, ideally with your accountant, so the AI learns from clean history. After that, daily matching keeps the books from falling behind again.",
      },
      {
        question: "Can the AI pay bills or move money?",
        answer:
          "No. Bank data comes in read only and the AI only records approved matches in the accounting software. Payments stay with the people who approve them.",
      },
    ],
  },

  "ai-transaction-matching-for-quickbooks": {
    seoTitle: "AI Transaction Matching for QuickBooks | Hiroshi Murakami",
    seoDescription:
      "AI transaction matching for QuickBooks Online: bank feed lines matched to invoices, bills and payouts with a reason for each, and a person approving them.",
    lead: "AI transaction matching for QuickBooks reads each bank feed line, compares it with your open invoices, bills and past matching decisions, and proposes the right match with a short reason, so a person only reviews the lines it is unsure about. It works alongside QuickBooks Online's own bank feed and bank rules rather than replacing them.",
    keyFacts: [
      "AI transaction matching for QuickBooks compares each bank feed line with open invoices, bills and past matching decisions.",
      "AI transaction matching works alongside QuickBooks Online bank rules rather than replacing the rules.",
      "AI transaction matching can link one customer transfer in QuickBooks Online to several open invoices.",
      "A person approves AI-proposed matches before QuickBooks records the matches, unless the business has exempted a specific recurring pattern.",
    ],
    problem: [
      "QuickBooks Online is the accounting software for a great many small businesses, and its bank feed is where reconciliation happens day to day. Lines arrive in the review queue, QuickBooks suggests some matches, and bank rules categorise the repeating ones. For a simple business, that covers a lot.",
      "The trouble starts with the lines that do not look like anything in the books. A processor payout that bundles twenty customer payments minus fees. A customer who pays three invoices with one transfer, or half of one. A card charge whose merchant name looks nothing like the supplier. A refund that arrives a month after the sale. Each of these takes a search, a calculation or an email, and they pile up in the For Review tab until month end.",
      "As businesses accept more payment methods, the share of these awkward lines grows, while the time anyone has to deal with them does not.",
    ],
    usualTools: [
      "Bank rules are excellent for fixed patterns, and QuickBooks' own match suggestions are a real help for one to one matches. But rules cannot split a payout into its parts, they need maintaining as suppliers and payment habits change, and in many small businesses nobody owns that job.",
      "Exporting the feed to a spreadsheet and matching there gives control, but it means double handling, and the results still have to be entered back into QuickBooks one by one.",
    ],
    steps: [
      {
        title: "Connect to QuickBooks Online",
        text: "The connection goes through Intuit's official integration, with a user role you choose and can remove at any time. Bank logins are never collected.",
      },
      {
        title: "Leave the easy lines to QuickBooks",
        text: "Lines your bank rules already handle stay with the rules. The AI focuses on what is left in the review queue.",
      },
      {
        title: "Break payouts apart and find combined payments",
        text: "Processor payouts are split into the payments and fees inside them using the processor's reports, and single transfers are tested against combinations of open invoices.",
      },
      {
        title: "Propose a match with a reason",
        text: "Amount, date, reference, payer name and your past decisions are weighed together. Each proposal says why, for example: same amount as invoice 1042, paid by the same customer three days after the due date.",
      },
      {
        title: "A person approves, QuickBooks records",
        text: "Approved matches are recorded in QuickBooks through the official connection where it allows, or set up for one click acceptance in the bank feed where it does not. Corrections are remembered, and the AI can suggest new bank rules for patterns it sees often.",
      },
    ],
    outcomes: [
      "The For Review tab stops being a month-end backlog.",
      "Bundled payouts and combined payments no longer need a spreadsheet.",
      "Bank rules stay useful, because new patterns are spotted and suggested as rules.",
      "Every match has a written reason your accountant can audit.",
    ],
    requirements: [
      "QuickBooks Online with bank and card feeds connected",
      "Access to your payment processor's payout reports",
      "A QuickBooks user role for the integration, chosen by you",
      "A person who reviews proposals and exceptions on a regular rhythm",
    ],
    humanInTheLoop:
      "Nothing is recorded in QuickBooks without a person's approval until you decide otherwise for specific, recurring patterns. Unclear lines always come to a person with the candidates side by side.",
    privacy:
      "Access runs through QuickBooks' own permissions and can be revoked at any time. Data is used only to match your transactions, kept with access limited to your team and accountant, and not used to train public AI models.",
    example: {
      title: "A worked example: a busy retail and online shop",
      intro:
        "These are assumed figures to show the arithmetic, not a client result.",
      assumptions: [
        { label: "Volume", value: "About 900 bank feed lines a month" },
        { label: "Handled by bank rules already", value: "About half, so 450 lines are matched by hand" },
        { label: "Time today", value: "About 1.5 minutes a line, so roughly 11 hours a month" },
        { label: "Cost of that time", value: "An assumed $45 an hour" },
      ],
      steps: [
        "The AI proposes matches for the 450 lines left in the review queue.",
        "A person confirms clear proposals at about 15 seconds each, roughly 2 hours a month.",
        "About 45 unclear lines get a closer look at about 2 minutes each, roughly 1.5 hours.",
      ],
      result:
        "Matching drops from about 11 hours to about 3.5 hours a month in this example, roughly 8 hours saved, or about $350 a month at the assumed rate before any running costs.",
    },
    faqs: [
      {
        question: "Does QuickBooks Online already match transactions?",
        answer:
          "Yes. Its bank feed suggests matches and bank rules categorise repeating lines, and that works well for simple, one to one cases. AI matching adds the harder cases: bundled payouts, combined and partial payments and merchant names that do not match the supplier.",
      },
      {
        question: "Does it replace QuickBooks bank rules?",
        answer:
          "No. Rules keep doing what they do well. The AI works on what the rules leave behind and can suggest new rules when it sees the same pattern again and again.",
      },
      {
        question: "Does it work with QuickBooks Desktop or Xero?",
        answer:
          "Xero is a common setup too. QuickBooks Desktop has more limited connections, so it is checked case by case during the free audit.",
      },
      {
        question: "Is my QuickBooks data safe?",
        answer:
          "The integration uses a user role you control and can remove at any time, no bank logins are collected, and the data is not used to train public AI models.",
      },
    ],
  },

  "ai-reconciliation-tool-evaluation-checklist": {
    seoTitle: "How to Evaluate an AI Reconciliation Tool | Hiroshi Murakami",
    seoDescription:
      "A buyer checklist for an AI reconciliation tool: readable rules, exceptions, audit trail, access, approvals, data and a trial on a month you closed.",
    lead: "An AI reconciliation tool is software that proposes which ledger entries belong to each bank, card or payout line, and leaves the rest for a person. The one question that matters when you choose one is: can you see why each match was made, and stop a wrong one before it reaches your books? The checklist below turns that question into things you can ask a vendor and test on your own records.",
    stepsHeading: "The checklist, step by step",
    problem: [
      "Picture an owner with a part-time bookkeeper who has decided that matching by hand has to stop. They sit through a few product demos. Every demo uses tidy sample data, every line finds its match, and every screen looks much the same. Two weeks later they are comparing prices, because price is the only difference they can see.",
      "The differences that matter show up later, on their own data. A payout lands net of fees and the tool books the net amount as income. A customer pays half an invoice and the tool closes the whole thing. Two payments of the same amount are swapped. None of these raises an alarm, because a confident wrong match looks exactly like a right one. It surfaces when a customer disputes a statement, or when the accountant asks about it at year end.",
      "Small businesses rarely have anyone whose job is to test software. The bookkeeper who will live with the tool is often asked after the contract is signed.",
    ],
    usualTools: [
      "Demos and feature lists tell you what a tool can do at its best. They do not show how it behaves when it is unsure, and that is what you are really buying. An advertised match rate says little without knowing what counted as a match, on whose transactions, and how many of those matches were wrong.",
      "Reviews and recommendations help with support and ease of use, but another company's mix of transactions is not yours. A free trial on the current month is better, yet it has no answer key: if you do not already know the correct match, you cannot tell which proposals are mistakes.",
    ],
    steps: [
      {
        title: "Read the rules and the reasons",
        text: "Ask to see the matching rules in plain language, and to change one. Then pick any proposed match and ask why it was made. A useful answer names the amount, date, reference or past decision behind it. A score on its own is not a reason.",
      },
      {
        title: "Check how doubt is handled",
        text: "Look for a confidence score on each match, a threshold you can set, and an exceptions queue with the likely candidates side by side. Ask what happens just below the threshold, and whether an unmatched line can ever be forced into a catch-all account.",
      },
      {
        title: "Test the awkward lines",
        text: "Bring your own examples: a payout with fees taken off, a part payment, one transfer for several invoices, a refund, two identical amounts, and a payment that leaves the books in one month and clears the bank in the next. The last is a timing difference, and it should stay listed as outstanding rather than be matched to something else.",
      },
      {
        title: "Follow one match through the audit trail",
        text: "For a single match, find who or what proposed it, the reason, who approved it, when, and what changed afterwards. Check that a match can be undone, that the undo is recorded too, and that the history can be exported if you leave.",
      },
      {
        title: "Ask what the connection can write",
        text: "Find out how it connects to QuickBooks or Xero, which user role it needs, and whether it only reads or also writes. If it writes, ask exactly what it creates or changes, whether it can touch a closed period, and whether you can start read only.",
      },
      {
        title: "Decide who approves entries",
        text: "Name the person before you buy. Check that approval can be limited by role and amount, that automatic recording is off until you switch it on for a specific pattern, and that the approver sees the source document and not only the match.",
      },
      {
        title: "Put the data questions in writing",
        text: "Ask where the data is stored, which outside AI providers process it, whether it is used to train models, who at the vendor can see it, how long it is kept, how it is deleted when you leave, and how you would be told about a breach. Keep the written answers with the contract.",
      },
      {
        title: "Run a one-month trial on a month you closed",
        text: "Choose a month you reconciled by hand, so you already have the answer key. Give the tool the bank lines and the open items as they stood, without the finished matches, in a test copy or read only. Compare every proposal with your own result, and count wrong matches separately from lines it left for review.",
      },
    ],
    outcomes: [
      "The choice rests on your own transactions, not on a demo.",
      "You know which kinds of line the tool gets wrong before it touches live books.",
      "Approval, access and data questions are settled before the contract rather than after.",
      "The bookkeeper who will use the tool has tested it and has a say.",
      "You have a written record to share with your accountant.",
    ],
    requirements: [
      "One month that is fully reconciled by hand and that you trust",
      "Exports of that month's bank, card and processor lines, plus the open invoices and bills at the time",
      "A short list of your own awkward transactions",
      "A test copy of the books or a read-only connection for the trial",
      "The person who will approve matches, and your accountant's view on the audit trail",
    ],
    humanInTheLoop:
      "The trial is judged by the person who knows the books, not by the tool's own score. After you buy, keep every match waiting for approval at first, allow automatic recording only for patterns that were right throughout the trial, and repeat the comparison on a sample from time to time.",
    privacy:
      "Share only what the trial needs. Read the vendor's terms first, use read-only access or exports, leave out payroll and other sensitive accounts, and remove the connection when the trial ends. Ask for the trial data to be deleted and for that to be confirmed in writing. Never hand over bank logins.",
    example: {
      title: "A worked example: a trial on a closed month",
      intro:
        "The figures below are assumptions chosen to show how to read a trial. They are not a client result or a measurement of any product.",
      assumptions: [
        { label: "Month tested", value: "One closed month with 400 bank, card and payout lines" },
        { label: "Proposed by the tool", value: "Matches for 340 lines, with 60 left as exceptions" },
        { label: "Compared with the hand-closed month", value: "331 proposals agree and 9 do not" },
        { label: "Time by hand", value: "About 1.5 minutes a line, so 10 hours for the month" },
        { label: "Review time in the trial", value: "About 15 seconds a proposal and 2 minutes an exception" },
      ],
      steps: [
        "Check the 9 disagreements first: in this example the closed books were right each time.",
        "Sort them by cause: 7 are payouts booked net of fees, and 2 are identical amounts matched to the wrong customer.",
        "Look at the reasons and scores: the 7 share one rule that can be changed, but the 2 had high scores and no warning.",
        "Change the fee rule, hold identical amounts for review, and run the same month again before deciding.",
      ],
      result:
        "Review takes about 85 minutes for the proposals and 120 minutes for the exceptions, roughly 3.5 hours against 10. The 9 wrong matches are about 2.6% of the 340 proposals. The saving looks good, but the decision turns on the 2 confident mistakes: if the tool cannot be set to hold that kind of line for a person, the safer answer is no.",
    },
    faqs: [
      {
        question: "What is an AI reconciliation tool?",
        answer:
          "Software that proposes which ledger entries belong to each bank, card or payout line, using signals such as amount, date, reference and past decisions, and leaves the lines it is unsure about for a person to resolve.",
      },
      {
        question: "What is a good match rate for an AI reconciliation tool?",
        answer:
          "There is no single number worth trusting, because it depends on your transactions. Wrong matches matter more than unmatched lines: an unmatched line costs a minute of review, while a wrong match can sit in the books unnoticed. Measure both on a month you already closed.",
      },
      {
        question: "Should the tool have write access to QuickBooks or Xero?",
        answer:
          "Not for the trial. Start read only or in a test copy. Give write access later if approved matches need to be recorded, with a user role limited to that work and closed periods locked.",
      },
      {
        question: "How long should a trial take?",
        answer:
          "One closed month of transactions is enough to start, as long as it includes your awkward lines. If a seasonal month looks very different, such as a holiday peak, test that one as well.",
      },
      {
        question: "Do I need a separate tool at all?",
        answer:
          "Perhaps not. If bank feeds and rules already place nearly every line, a separate tool may add little. The free AI audit can help you decide whether to keep what you have, buy a tool or connect a custom workflow. I build such workflows, so put the same questions to me.",
      },
    ],
  },

  "ai-vs-rules-vs-manual-bank-reconciliation": {
    seoTitle: "AI vs Rules vs Manual Bank Reconciliation | Hiroshi Murakami",
    seoDescription:
      "Manual, rules or AI in bank reconciliation: a fair comparison of setup, messy lines, split payments, review and cost drivers, and when not to use AI.",
    lead: "Manual bank reconciliation fits a small number of varied transactions, rules fit payments that repeat in the same form, and AI matching with human review fits a steady volume of messy, split or bundled lines that rules cannot place. Most businesses should use rules first, and add AI only if what is left still takes real time. This page compares the three approaches, not named products. I build AI matching, so it also says when not to use it.",
    keyFacts: [
      "Rules are usually the first thing to try when bank transactions repeat in the same form.",
      "AI bank reconciliation earns its place on messy descriptions, split payments and bundled payouts that rules cannot place.",
      "Manual bank reconciliation is a sound choice when a business has few transactions and one careful person.",
      "Transaction matching using AI still needs a person to review proposals, because a confident match can be wrong.",
    ],
    stepsHeading: "The three approaches compared",
    problem: [
      "Imagine a small distributor with a bank account, two cards and an online payment processor. Rent, software and fuel look the same each month. Customer transfers arrive with half a name, or pay two invoices and part of a third. Processor payouts land net of fees.",
      "The bookkeeper ticks lines off in a spreadsheet, the accounting software offers rules, and the owner keeps hearing about AI in bank reconciliation. Choosing one for everything leads to trouble: rules stretched over lines they do not fit, AI paid to recognise the rent, or a person typing what software could place safely.",
    ],
    usualTools: [
      "Advice on reconciliation often treats the three as steps on a ladder, with AI at the top. They are better seen as tools for different lines. A fixed rent payment gains nothing from AI, while a payout with fees taken off can defeat a simple rule.",
      "A headline match rate does not settle it either. The useful questions are how many of your lines are awkward, how long they take today, what a wrong match would cost you, and who will check the result.",
    ],
    steps: [
      {
        title: "Manual matching in a spreadsheet",
        text: "Setup effort: low, an export and a template. Messy descriptions: handled well by someone who knows the business. Partial and split payments: possible, but slow. Explainability: as good as the notes the person leaves. Review burden: a second person should check it, because the preparer sees what they expect. Cost drivers: hours per line, double entry and dependence on one person.",
      },
      {
        title: "Rules in the accounting software",
        text: "Setup effort: modest, one rule per pattern, then upkeep. Messy descriptions: weak when the wording changes. Partial and split payments: limited, although some software can apply a fixed split. Explainability: the strongest, since the rule can be read. Review burden: light while rules are narrow, but a broad rule can repeat one mistake many times. Cost drivers: writing and maintaining rules, and the lines left over.",
      },
      {
        title: "AI matching with human review",
        text: "Setup effort: the highest, with connections, past matches and a test on a closed month. Messy descriptions: its main strength, because several signals are weighed together. Partial and split payments: can propose combinations and break up payouts when the detail is available. Explainability: varies, so ask for a reason with each match. Review burden: constant but smaller per line, and it includes looking for confident mistakes. Cost drivers: setup, usage, connections, review time and fixing errors.",
      },
      {
        title: "Choose manual when",
        text: "You have few lines a month, most need personal knowledge, or the books are being cleaned up and the history cannot be trusted yet. It is also the right answer for one-off and unusual transactions inside any other setup.",
      },
      {
        title: "Choose rules when",
        text: "The same payees and payers return with stable wording and the treatment does not change. Keep each rule narrow, read the list on a regular rhythm, and delete those that no longer fit. If this clears nearly everything, stop here.",
      },
      {
        title: "Choose AI with review when",
        text: "Rules are in place and a steady pile of awkward lines remains: changing descriptions, combined transfers, part payments or payouts net of fees. You also need reasonably clean history, source documents to match against, and a person with time to approve.",
      },
      {
        title: "Do not use AI when",
        text: "Volume is low, rules already clear the work, source records are missing, or nobody will review the proposals. Avoid it as well where you cannot see a reason for a match, or where your terms with clients or banks do not allow the data to be shared. AI will not repair a chart of accounts that nobody agrees on.",
      },
      {
        title: "Combine them in order",
        text: "Let narrow rules take the fixed patterns, send what is left to AI for proposals, and give a person the approvals and the odd cases. Try the order on a month you closed by hand, so each wrong match can be seen.",
      },
    ],
    outcomes: [
      "Each kind of line goes to the simplest approach that handles it.",
      "You know whether AI adds enough over well kept rules to be worth its cost.",
      "Review time is planned rather than discovered later.",
      "Your accountant can see how a match was made, whichever approach made it.",
    ],
    requirements: [
      "A typical month of bank, card and payout lines, sorted by kind",
      "A list of the rules you have and when each was last checked",
      "The time spent on matching now, even as a rough note",
      "One closed month you trust, to test against",
      "A named person to approve matches",
    ],
    humanInTheLoop:
      "All three approaches need a person. Manual work needs a second look, rules need an owner, and AI proposals need approval. Start AI with nothing recorded automatically, check a sample of the matches that look certain, and go back to rules or hand matching for any kind of line it keeps getting wrong.",
    privacy:
      "A spreadsheet can leak as easily as a system, so limit who has the file. Rules usually keep the data inside your accounting software. AI matching may send it to another company, so ask where it goes, whether it trains models and how it is deleted. Use read-only access first, and never share bank logins.",
    example: {
      title: "A worked example: 300 lines, three approaches",
      intro:
        "The figures below are assumptions chosen to show how to compare. They are not a client result or a measurement of any product.",
      assumptions: [
        { label: "Lines in a month", value: "300: 180 fixed patterns, 80 messy one to one and 40 split or bundled" },
        { label: "Time by hand", value: "1.5 minutes a simple or messy line and 4 minutes a split line" },
        { label: "Rules", value: "Place the 180 fixed lines, with 15 minutes of checks and 30 minutes of upkeep" },
        { label: "AI after rules", value: "Proposes 70 of the messy lines and 20 of the split lines correctly" },
        { label: "Review of AI proposals", value: "15 seconds a messy line, 1 minute a split line and 30 minutes of sample checks" },
      ],
      steps: [
        "Manual: 260 lines at 1.5 minutes and 40 at 4 minutes is 550 minutes, about 9.2 hours.",
        "Rules, with the rest by hand: 45 minutes for rules, 120 for messy lines and 160 for split lines is 325 minutes, about 5.4 hours.",
        "Rules, then AI with review: 45 minutes for rules, 67.5 to review proposals and 95 for the 30 lines left to a person is 207.5 minutes, about 3.5 hours.",
      ],
      result:
        "In this example rules save about 3.8 hours and AI then saves about 2 more, before its running cost and setup. That may or may not be worth it. With 5 split lines instead of 40, the case for AI would be weaker, and with several hundred it would be stronger. The example also assumes that the proposals are right: wrong matches would add checking time.",
    },
    faqs: [
      {
        question: "Should I use AI or rules for bank reconciliation?",
        answer:
          "Use rules first for payments that repeat in the same form. Add AI in bank reconciliation if many lines remain with changing descriptions, split payments or bundled payouts, and a person can review the proposals.",
      },
      {
        question: "Is AI bank reconciliation more accurate than manual matching?",
        answer:
          "Not automatically. People make slips when they are tired, and AI can propose a confident wrong match. Accuracy depends on your records, the kind of line and the review, so compare both with a month you already closed.",
      },
      {
        question: "How does transaction matching using AI differ from rules?",
        answer:
          "A rule applies a fixed condition, such as a payee name. AI weighs several signals, such as amount, date, reference and past decisions, and proposes a match. Rules are easier to explain, and AI copes better with variation.",
      },
      {
        question: "When should I not use AI for bank reconciliation?",
        answer:
          "When you have few transactions, when rules already clear nearly all of them, when the source records are missing, or when nobody will review the matches. In those cases AI adds cost without removing much work.",
      },
      {
        question: "Can I use all three together?",
        answer:
          "Yes. A common order is rules for fixed patterns, AI proposals for the lines that remain, and a person for approvals and unusual cases. The free AI audit can help you see which part is worth changing, if any.",
      },
    ],
  },

  "ai-accounts-payable-invoice-capture": {
    seoTitle: "AI Accounts Payable Invoice Capture | Hiroshi Murakami",
    seoDescription:
      "AI accounts payable: supplier invoices read, checked for duplicates and turned into draft bills with due dates for approval. People still decide payments.",
    lead: "AI accounts payable invoice capture reads each supplier invoice as it arrives, checks it against the supplier's history and any purchase order, and creates a draft bill with the right due date in your accounting software for a person to approve. Paying stays a human decision: the AI prepares the list of what is due, it never sends money.",
    problem: [
      "Imagine a wholesaler or distributor with a dozen staff and a hundred or more suppliers. Invoices arrive by email, through supplier portals and on paper with deliveries. A part-time accounts payable clerk types each one into the accounting software, then walks it around for approval, then keeps track of what is due when.",
      "Things go wrong in predictable ways. An invoice sits in a manager's inbox waiting for approval and the payment goes out late. The same invoice arrives twice, by email and by post, and gets paid twice. A supplier statement does not agree with the books and nobody knows which invoice is missing. Prices on an invoice drift from what was agreed, and nobody notices because the person entering it has no time to compare.",
      "With wages up and good accounts staff hard to find, many firms cannot simply add another clerk to keep up.",
    ],
    usualTools: [
      "Bill capture features in accounting software and dedicated accounts payable apps read invoices well, and they are worth using. On their own, though, they rarely know your approval rules, your suppliers' usual prices or which invoices are likely duplicates, so a person still checks every field.",
      "Approval by email chain works until someone is on holiday, and a spreadsheet of due dates only helps if someone keeps it current.",
    ],
    steps: [
      {
        title: "Every invoice lands in one queue",
        text: "A dedicated accounts payable address, your existing inboxes and a photo upload route for paper invoices all feed one place.",
      },
      {
        title: "AI reads and checks",
        text: "Supplier, invoice number, dates, lines, tax and totals are extracted, then checked against past bills, purchase orders where you use them and the supplier's usual prices. Possible duplicates are flagged.",
      },
      {
        title: "A draft bill is prepared",
        text: "The bill is created as a draft in the accounting software with the account, tax code and due date, and the original document attached.",
      },
      {
        title: "Routed for approval",
        text: "Your approval rules decide who signs off, for example by supplier, amount or department, and reminders go out if an approval is waiting too long.",
      },
      {
        title: "A payment list, not a payment",
        text: "Before each payment run, a person gets a list of approved bills due, with anything disputed or unusual marked. They pay through the bank as usual.",
      },
    ],
    outcomes: [
      "Nobody keys in supplier invoices from scratch.",
      "Duplicates and price drifts are flagged before they are paid, not after.",
      "Approvals stop getting lost in inboxes.",
      "Supplier statements agree with the books more often, and the gaps are easy to find.",
      "Payment runs are planned from a clear list of what is due.",
    ],
    requirements: [
      "Your accounting software with permission to create draft bills",
      "The inboxes or portals where supplier invoices arrive",
      "Your approval rules, even if they are informal today",
      "A few months of past bills so checks follow your history",
    ],
    humanInTheLoop:
      "People approve every bill and make every payment. The AI never sends money, never changes bank details and treats any request to change a supplier's bank account as something for a person to verify by phone.",
    privacy:
      "Invoices are processed only for your accounts payable and kept with access limited to your finance team and accountant. Supplier bank details are never shown in notes or summaries, and documents are not used to train public AI models.",
    example: {
      title: "A worked example: a 12 person distributor",
      intro:
        "Assumed figures to show the arithmetic, not a client result.",
      assumptions: [
        { label: "Volume", value: "About 250 supplier invoices a month" },
        { label: "Time today", value: "About 5 minutes to enter and file each one, roughly 21 hours a month" },
        { label: "Cost of that time", value: "An assumed $35 an hour" },
        { label: "Running cost", value: "An assumed $150 a month for software and AI usage, a placeholder rather than a quote" },
      ],
      steps: [
        "Each invoice is read and prepared as a draft bill as it arrives.",
        "The clerk reviews each draft in about 1 minute, roughly 4 hours a month.",
        "About 25 invoices a month need a closer look, at about 5 minutes each, roughly 2 hours.",
      ],
      result:
        "Entry and filing drop from about 21 hours to about 6.5 hours a month, saving roughly 14.5 hours, worth about $510 at the assumed rate, or about $360 after the assumed running cost.",
    },
    faqs: [
      {
        question: "What is AI accounts payable automation?",
        answer:
          "It is the first pass of accounts payable done by AI: reading supplier invoices, checking them, preparing draft bills and routing them for approval. People still approve the bills and make the payments.",
      },
      {
        question: "How does it catch duplicate invoices?",
        answer:
          "It compares invoice numbers, amounts, dates and suppliers with bills already in the system, including near matches such as the same amount from the same supplier a few days apart, and flags them for a person.",
      },
      {
        question: "Can it pay suppliers?",
        answer:
          "No. It prepares the list of approved bills that are due. Paying, and verifying any change to a supplier's bank details, stays with your team.",
      },
      {
        question: "How is this different from invoice and receipt capture?",
        answer:
          "Capture is about getting documents into the books. Accounts payable adds approvals, due dates, duplicate and price checks and a payment list, so it covers the whole path from invoice to payment decision.",
      },
    ],
  },

  "ai-month-end-close-checklist": {
    seoTitle: "AI Month-End Close Checklist | Hiroshi Murakami",
    seoDescription:
      "An AI month-end close checklist: what AI checks on day one, which questions it sends to whom, and what a person still reviews and signs off.",
    lead: "An AI month-end close checklist is your close list worked through by AI on the first working day: it checks which accounts are unreconciled, which regular bills are missing, which items are uncoded and which accruals are due, and sends each open question to the person who can answer it. A person still reviews the adjustments and signs off the month.",
    problem: [
      "Most small finance teams have a close checklist, even if it lives in one person's head. Reconcile the accounts, clear the uncoded items, check that the regular bills are in, post the accruals, tie out payroll and sales tax, review the profit and loss. Each step is simple. The problem is that each step involves waiting for someone else.",
      "So the close becomes a week of chasing. Did the landlord's invoice arrive? What was this card charge? Has the payroll report been finalised? The bookkeeper sends messages, waits, follows up and works on something else in between. The owner gets the numbers in the second or third week of the month, by which time they describe a month that feels like ancient history.",
    ],
    usualTools: [
      "Task apps and close management software organise the list well, and they suit larger teams. In a small business, the list is rarely the problem: finding the open items and chasing the answers is, and a task app still needs a person to do both.",
      "Accounting software reports show the numbers but not what is missing from them. A missing bill does not appear on any report.",
    ],
    steps: [
      {
        title: "Bank and card accounts reconciled",
        text: "The AI checks every account against its statement balance and lists the lines still open, ideally few, because matching ran all month.",
      },
      {
        title: "Uncoded and suspense items",
        text: "Anything sitting in uncategorised or suspense accounts is listed with a suggested account and sent to whoever made the purchase.",
      },
      {
        title: "Regular bills present",
        text: "Rent, utilities, software subscriptions and other recurring suppliers are compared with previous months. Missing bills are listed and requested from the supplier or the person who receives them.",
      },
      {
        title: "Accruals and prepayments",
        text: "Recurring accruals and prepayment releases are prepared as draft journals for review, using the schedules you already keep.",
      },
      {
        title: "Payroll and sales tax tie out",
        text: "Payroll journals are compared with the payroll report, and the sales tax liability with the tax report, with differences explained or flagged.",
      },
      {
        title: "Variance notes and sign-off",
        text: "Larger movements against last month and the same month last year are drafted in plain words. The bookkeeper or accountant reviews, adjusts and signs off, and only then is the period locked.",
      },
    ],
    outcomes: [
      "The close starts with a list of what is actually open, not a search for it.",
      "Questions reach the person who can answer them on day one.",
      "Draft journals and variance notes are waiting for review instead of being written from scratch.",
      "The owner gets reviewed numbers sooner, explained in plain language.",
    ],
    requirements: [
      "Your current close steps, written down or explained once",
      "Access to the accounting software, bank feeds and payroll and tax reports",
      "Your accrual and prepayment schedules, if you keep them",
      "Who answers which kind of question, and who signs off",
    ],
    humanInTheLoop:
      "Every journal is a draft until a person approves it. Judgement calls, such as accrual estimates, write-offs and reclassifications, are always made by the bookkeeper or accountant, and the period is locked only after their sign-off.",
    privacy:
      "Financial data stays in your accounting software and a private workspace with access limited to the people you name. It is not used to train public AI models.",
    example: {
      title: "A worked example: a 15 person agency",
      intro:
        "Assumed figures to show the arithmetic, not a client result.",
      assumptions: [
        { label: "Close today", value: "About 16 hours of the bookkeeper's time spread over two weeks" },
        { label: "Cost of that time", value: "An assumed $55 an hour" },
        { label: "Biggest delays", value: "Missing bills, unexplained card charges and waiting for payroll" },
      ],
      steps: [
        "Day 1: the AI runs the checklist and sends 12 questions to five people, each with the transaction attached.",
        "Days 1 to 3: answers come back into the same list, and the AI updates the draft journals.",
        "Day 4: the bookkeeper reviews drafts and variance notes, about 6 hours of work.",
        "Day 5: the accountant signs off and the period is locked.",
      ],
      result:
        "In this example the bookkeeper's close time falls from about 16 hours to about 9, saving roughly 7 hours, worth about $385 a month at the assumed rate. The owner sees reviewed numbers in the first week rather than the third.",
    },
    faqs: [
      {
        question: "What should a month-end close checklist include?",
        answer:
          "At minimum: bank and card reconciliations, uncoded items cleared, recurring bills present, accruals and prepayments, payroll and sales tax tied out, a review of the profit and loss and balance sheet, and a sign-off before the period is locked.",
      },
      {
        question: "Can AI close the books on its own?",
        answer:
          "No, and it should not. AI can find what is open, chase answers and draft journals and notes, but adjustments and the sign-off need a person who understands the business.",
      },
      {
        question: "Does this need special close software?",
        answer:
          "No. It works with your accounting software and the checklist you already use. Dedicated close software can still make sense for larger teams.",
      },
    ],
  },

  "ai-year-end-bookkeeping-cleanup-checklist": {
    seoTitle: "AI Year-End Bookkeeping Cleanup Checklist | Hiroshi Murakami",
    seoDescription:
      "A year-end bookkeeping cleanup checklist for small business: what AI does in December and January, what a person decides, and what to give your accountant.",
    lead: "A year-end bookkeeping cleanup is the work a small business does in December and January so the books are complete before the tax preparer sees them: clear uncategorized and duplicate lines, reconcile every account to the last day of the year, collect missing forms and receipts, and list open questions. AI does the sorting and matching, and people decide.",
    notice:
      "General information only, not tax or accounting advice. Requirements, deadlines and thresholds depend on your business and change over time, so confirm current deadlines and what applies to you with your accountant or the IRS before you act.",
    keyFacts: [
      "A year-end bookkeeping cleanup happens once a year, after the last month-end close and before the books go to the tax preparer.",
      "Every bank, card and loan account should be reconciled through the last day of the year, so each balance agrees with the year-end statement.",
      "AI can suggest categories, flag duplicates, match bank lines, read receipts and invoices, and draft a list of missing documents.",
      "A person decides every tax-sensitive item, such as write-offs, fixed assets, owner spending and which vendors need forms, together with the accountant.",
    ],
    stepsHeading: "The year-end checklist, step by step",
    problem: [
      "Picture an owner of a small service business in early January. The monthly bookkeeping mostly happened, but not always. There are a few hundred bank lines still marked uncategorized, a card that was never reconciled after the summer, and a folder of receipt photos on a phone. Then the tax preparer's questionnaire arrives.",
      "The questions are simple to ask and slow to answer. Which of these vendors are contractors, and do you have their forms? Is this laptop an expense or equipment? Why does the loan balance not match the lender's statement? Was this card charge personal? Each answer means digging through a year of email, and some of it needs a vendor or customer to reply first.",
      "If the cleanup waits until the accountant asks, it competes with their busiest weeks and with the owner's own January. Work that could have been spread over December ends up rushed, and questions go back and forth for weeks.",
    ],
    usualTools: [
      "A month-end close checks the recurring items of one month. It does not usually ask whether every contractor has a form on file, whether owner spending is coded as business expense, or whether a purchase in March should have been recorded as an asset. Those are year-end questions, and they only come up once.",
      "Accounting software reports show balances, not what is missing. No report lists the W-9 you never collected or the receipt nobody kept. A cleanup bookkeeper can do it well, but is often hard to book at the start of the year, and still has to start by finding the open items.",
    ],
    steps: [
      {
        title: "Clear uncategorized and duplicate transactions",
        text: "Start in December. AI suggests an account for each uncategorized line from how you coded similar spending before, and flags likely duplicates, such as the same amount and payee on close dates or a bank feed line entered by hand as well. A person confirms the categories and decides which duplicate to remove. Nothing is deleted automatically.",
      },
      {
        title: "Reconcile every bank, card and loan account through the last day of the year",
        text: "In January, once the December statements arrive, AI matches bank and card lines to entries and lists what is left open. For loans, it reads the lender's statement and proposes the split between principal and interest. A person approves the matches, investigates every difference, and checks that each closing balance agrees with the statement for the last day of the year.",
      },
      {
        title: "Check vendor payment totals and collect missing W-9s early",
        text: "AI totals what you paid each vendor during the year, lists those who look like contractors and have no W-9 on file, and drafts a polite request for each. Send the requests in December, not when the forms are due. Which vendors need a year-end form, and what counts toward it, is for your accountant to decide, so confirm the current rules with them or the IRS.",
      },
      {
        title: "Chase unpaid customer invoices and review write-offs",
        text: "AI lists open invoices by age, drafts reminders for the overdue ones, and flags invoices that may already be paid because a matching deposit was never applied. A person decides who to chase. Which old balances to write off, and whether a write-off has any tax effect, depends on how your books are kept, so decide that with your accountant.",
      },
      {
        title: "Check payroll and sales tax liabilities against the books",
        text: "AI compares the payroll liability accounts with your payroll provider's year-end reports, and the sales tax payable account with the returns you filed and your sales tax report, and lists each difference. A person explains the differences. Any correction to a filing goes through your payroll provider or accountant.",
      },
      {
        title: "Review fixed asset purchases",
        text: "AI flags larger purchases coded as ordinary expenses, such as equipment, computers, furniture or vehicles, and attaches the invoice to each. Your accountant decides whether each one is recorded as an asset or an expense and how it is treated for tax. The AI only finds the candidates.",
      },
      {
        title: "Find owner draws and personal spending coded as business expense",
        text: "AI flags spending that looks personal, and transfers to the owner that were coded as expenses or wages. The owner confirms which items are personal. The accountant decides how to reclassify them, because the right account depends on how the business is set up.",
      },
      {
        title: "Archive receipts and supporting documents",
        text: "AI reads receipts and invoices from email and phone photos, extracts the supplier, date and amount, attaches each one to its transaction, and lists the transactions that still have no document. A person decides which gaps matter and asks the accountant how long records should be kept.",
      },
      {
        title: "Produce a clean package for the accountant",
        text: "AI drafts the package: the reconciliations, a trial balance, open invoice and bill lists, vendor payment totals, and a missing-documents request list with one line per open item. The owner reviews it, answers what they can, and sends it. The accountant makes the adjustments and prepares the return.",
      },
    ],
    outcomes: [
      "The accountant receives one complete package instead of a stream of answers.",
      "Missing contractor forms are requested in December, while there is time to collect them.",
      "Duplicates, personal spending and miscoded assets are found before the accountant has to ask.",
      "Every account balance agrees with a year-end statement.",
      "The open questions are written down, each with the transaction attached.",
    ],
    requirements: [
      "Access to your accounting software, bank and card feeds, and loan statements",
      "The December statements for every bank, card and loan account",
      "Your payroll provider's year-end reports and the sales tax returns you filed",
      "Wherever receipts and invoices live today: email, a phone folder or a shoebox",
      "Your accountant's own year-end questionnaire or list, if they send one",
    ],
    humanInTheLoop:
      "Every suggestion is a draft until a person approves it. The owner confirms categories and personal spending, the bookkeeper approves matches and removes duplicates, and the accountant decides write-offs, fixed assets, reclassifications and which vendors need forms. The AI does not file anything, send anything to a tax authority or change a closed period.",
    privacy:
      "W-9s contain taxpayer identification numbers, so store them with access limited to the owner, bookkeeper and accountant, and keep those numbers out of notes, summaries and emails drafted by AI. Financial data stays in your accounting software and a private workspace, and it is not used to train public AI models. Never share bank logins.",
    example: {
      title: "A worked example: a six person service business",
      intro:
        "The figures below are assumptions chosen to show how the checklist plays out. They are not a client result or a measurement of any product.",
      assumptions: [
        { label: "Business", value: "An assumed six person service business, books kept by the owner with a part-time bookkeeper" },
        { label: "Uncategorized lines at year end", value: "An assumed 180" },
        { label: "Possible duplicates flagged", value: "An assumed 14" },
        { label: "Vendors paid in the year", value: "An assumed 60, of which 9 look like contractors with no W-9 on file" },
        { label: "Open customer invoices over 90 days", value: "An assumed 7" },
        { label: "Time per uncategorized line", value: "An assumed 2 minutes by hand, or 20 seconds to review an AI suggestion" },
      ],
      steps: [
        "December: AI suggests categories for the 180 lines, and the owner reviews them in about 1 hour instead of about 6.",
        "The bookkeeper checks the 14 flagged pairs: 5 are real duplicates and are removed, 9 are genuine repeat payments.",
        "AI drafts W-9 requests to the 9 vendors, and the accountant confirms which of them actually need a form.",
        "Of the 7 old invoices, the owner chases 4 and lists 3 for the accountant to review as possible write-offs.",
        "January: AI matches the December statement lines, and the bookkeeper resolves 11 exceptions and ties every balance to its statement.",
        "AI drafts the package and a list of 6 open questions, and the owner sends it.",
      ],
      result:
        "In this example, categorizing alone drops from about 6 hours (180 lines at 2 minutes) to about 1 hour (180 lines at 20 seconds), saving about 5 hours. The larger gain is timing: forms are requested in December, and the accountant gets one package with a short question list. Your own volumes will differ.",
    },
    faqs: [
      {
        question: "What should a year-end bookkeeping cleanup checklist include?",
        answer:
          "Clear uncategorized and duplicate transactions, reconcile every bank, card and loan account through the last day of the year, check vendor payment totals and collect missing W-9s, review unpaid invoices, tie out payroll and sales tax, review fixed assets and owner spending, archive receipts, and send a clean package to your accountant.",
      },
      {
        question: "How is a year-end cleanup different from a month-end close?",
        answer:
          "A month-end close repeats every month and checks recurring items. A year-end cleanup looks at the whole year once, before the tax return: contractor forms, owner spending, fixed assets, write-offs and balances that must agree with year-end statements. A good monthly close makes the year-end cleanup much shorter.",
      },
      {
        question: "Can AI do my year-end bookkeeping cleanup on its own?",
        answer:
          "No. AI can suggest categories, flag duplicates, match bank lines, read receipts and draft request lists. Decisions with tax effect, such as write-offs, fixed assets, reclassifying owner spending and which vendors need forms, belong to you and your accountant.",
      },
      {
        question: "When should I start, and what are the deadlines?",
        answer:
          "Start in December with categories, duplicates, open invoices and W-9 requests, and finish the reconciliations in January once the statements arrive. This page does not list deadlines, because they depend on the form, your business and the year. Confirm current deadlines with your accountant or the IRS.",
      },
      {
        question: "Is it safe to use AI with W-9s and financial records?",
        answer:
          "It can be, with care. Use a tool or workspace that does not train public models on your data, limit access to the people who need it, keep taxpayer identification numbers out of AI summaries, and never share bank logins. Ask any vendor in writing where the data is stored and how it is deleted.",
      },
    ],
  },

  "ai-payment-processor-payout-reconciliation": {
    seoTitle: "Reconcile Card Processor Payouts with AI | Hiroshi Murakami",
    seoDescription:
      "Why a bank deposit does not match the sales report: batched payouts, fees, refunds, disputes and timing. Payout reconciliation step by step, with AI.",
    lead: "A bank deposit from your card processor rarely equals the sales report, because the processor batches one or more days of sales into a single payout, takes its fees out first, and subtracts refunds, chargebacks and disputes. Tips and sales tax sit inside the gross. Payout reconciliation means matching each payout to one deposit, then splitting it into those parts.",
    notice:
      "General information only, not tax or accounting advice. How fees, tips, refunds, disputes and sales tax are recorded depends on your business and your accounting setup, so confirm the treatment with your accountant before you change how payouts are posted.",
    scope: {
      heading: "Where AI helps and where a person decides",
      can: [
        "Match each processor payout to its bank deposit, even when the deposit lands days later",
        "Split each payout into gross sales, fees, refunds and other adjustments from the payout report",
        "Flag payouts with unusual adjustments, such as a dispute hold or a fee that looks out of line",
        "Draft the exceptions list, with the payout and the bank line attached to each item",
      ],
      cannot: [
        "Decide whether to contest a dispute or chargeback: the owner decides",
        "Write off an amount or accept a difference: a person approves that",
        "Settle anything unusual, such as a missing payout or a reversed deposit",
        "Post the final entries without review: a person approves every posting",
      ],
    },
    keyFacts: [
      "A card processor payout is a net amount: gross card sales minus processing fees, refunds, chargebacks and any amounts held for disputes.",
      "One bank deposit often covers more than one day of sales, and weekend and holiday sales usually arrive together on a later business day.",
      "The processor's payout report, not the sales report, is the document that explains each deposit line by line.",
      "AI can match payouts to deposits and split out fees, refunds and adjustments, while a person decides on disputes, write-offs and the final posting.",
    ],
    stepsHeading: "How to reconcile card processor payouts, step by step",
    problem: [
      "Picture a cafe, salon or small shop that takes most of its sales by card. The point of sale report says Saturday brought in a certain amount. The bank shows a deposit from the card processor on Tuesday that is smaller, and it does not obviously belong to Saturday at all. The owner asks why the bank deposit does not match the sales report, and the honest answer is that the two measure different things.",
      "The sales report counts what customers paid at the counter, including tips and the sales tax you collected. The deposit is what the processor sends after its own sums. It batches sales into a payout, often one a day but sometimes several days together. It nets out its processing fees before paying you. It subtracts refunds you gave, chargebacks customers filed and amounts it holds while a dispute is open. Fridays, weekends and holidays shift the timing, so a deposit can arrive one or more business days after the sales it covers.",
      "If the payout is booked as a single sales figure, revenue is understated, fees disappear from the expense lines, refunds are hidden and a held dispute looks like missing money. Over a month the differences pile up, and the bank account stops agreeing with the books.",
    ],
    usualTools: [
      "Bank feed rules in accounting software usually match a deposit to one income line by payee name. That works when one deposit equals one sale. A payout is a bundle, so a simple rule either books the net amount as sales or leaves the line for someone to split by hand.",
      "Some processors and accounting software offer a connection that brings the payout detail across, and it is worth using where it exists. It does not always cover refunds, disputes and manual adjustments cleanly, and someone still has to check that each payout landed and was split the right way.",
    ],
    steps: [
      {
        title: "Export the processor payout report",
        text: "From your card processor's dashboard, export the payout report for the period, not the sales report. It should list each payout with its date, the transactions inside it, the gross amount, fees, refunds, chargebacks and other adjustments. AI can read the export and line it up with the bank statement. A person checks that the export covers the full period, including the first and last few days.",
      },
      {
        title: "Match each payout to one bank deposit",
        text: "Each payout should land as one deposit in the bank, a day or more after the sales it covers. AI matches them by net amount and a date window, so a Friday to Sunday payout that arrives on Tuesday is still found. Where two payouts have the same amount, it uses the payout reference or asks. A person approves the matches.",
      },
      {
        title: "Split each payout into gross sales, fees, refunds and adjustments",
        text: "Using the payout report, AI breaks each deposit into its parts: gross card sales, processing fees, refunds, chargebacks, dispute holds and any other adjustments, so the parts add up exactly to the net deposit. Where the gross includes tips and sales tax collected, it shows them separately using your sales report. If the parts do not add up, the payout goes on the exceptions list.",
      },
      {
        title: "Post fees as an expense and sales as revenue",
        text: "The deposit is recorded with the gross sales as revenue and the processing fees as an expense, rather than one net sales figure. Refunds, tips and sales tax collected go to the accounts your accountant has set up for them. AI drafts the entry for each payout. A person reviews the draft and approves it before anything is posted.",
      },
      {
        title: "Investigate unmatched payouts and deposits",
        text: "AI lists every payout with no deposit, every processor deposit with no payout, and every payout with an unusual adjustment, such as a chargeback, a dispute hold, a reserve or a fee that looks out of line with past payouts. It drafts a short note for each. A person looks into each one with the processor's dashboard and decides what happens next.",
      },
      {
        title: "Decide on disputes, write-offs and anything unusual",
        text: "Whether to contest a chargeback, whether a small difference can be written off and how to treat a reversed or missing payout are decisions for the owner, with the bookkeeper or accountant. The AI keeps the evidence together and tracks each open item until it is settled. It does not decide or contact the processor on its own.",
      },
    ],
    outcomes: [
      "Every processor deposit is explained by one payout, line by line.",
      "Revenue shows gross sales, and processing fees show up as an expense you can see.",
      "Refunds, chargebacks and disputes are visible instead of hidden in a net figure.",
      "Timing gaps across days and weekends stop looking like missing money.",
      "The person reviewing works from a short exceptions list, not the whole statement.",
    ],
    requirements: [
      "Read-only access to your card processor's dashboard or its payout report exports",
      "Your bank feed or statements for the same period",
      "Your sales report from the point of sale, for tips and sales tax collected",
      "The accounts your accountant wants used for fees, refunds, tips and sales tax",
      "A named person to approve matches and postings",
    ],
    humanInTheLoop:
      "AI proposes the matches, the splits and the exceptions list, and nothing is posted until a person approves it. Disputes, chargebacks, write-offs, reversed or missing payouts and anything unusual are decided by the owner with the bookkeeper or accountant. Check a sample of the payouts the AI marked as clean, especially in the first months.",
    privacy:
      "Payout reports can include customer names and the last digits of card numbers, so limit who can see them and keep card details out of notes and summaries drafted by AI. Use read-only access to the processor and the bank, never share logins, and ask any vendor where the data is stored, whether it trains models and how it is deleted.",
    example: {
      title: "A worked example: one weekend payout",
      intro:
        "The figures below are made-up assumptions chosen to show the arithmetic. They are not a client result, and the fee is not the rate of any real card processor.",
      assumptions: [
        { label: "Card sales, Friday to Sunday", value: "An assumed $2,400.00 gross on the sales report, including $180.00 sales tax collected and $120.00 card tips" },
        { label: "Processing fees", value: "An assumed $69.60, taken out of the payout" },
        { label: "Refund given on Saturday", value: "An assumed $85.00" },
        { label: "Dispute hold", value: "An assumed $50.00 held for a customer dispute on an earlier sale" },
        { label: "Net payout", value: "$2,195.40, deposited in the bank on Tuesday" },
      ],
      steps: [
        "AI matches the $2,195.40 Tuesday deposit to the Friday to Sunday payout, two business days after the last sale.",
        "It splits the payout: $2,400.00 gross sales less $69.60 fees, $85.00 refund and $50.00 dispute hold, which equals $2,195.40.",
        "It separates the gross into $2,100.00 of sales, $180.00 of sales tax collected and $120.00 of tips, using the sales report.",
        "It drafts the entry with the fees as an expense and flags the $50.00 dispute hold for a person.",
        "The owner reviews the dispute and decides whether to contest it. The bookkeeper approves the entry.",
      ],
      result:
        "In this example the sales report says $2,400.00 and the bank says $2,195.40, and both are right. The $204.60 difference is $69.60 of fees, an $85.00 refund and a $50.00 dispute hold. Once each payout is split this way, the bank account agrees with the books and the only open item is the dispute.",
    },
    faqs: [
      {
        question: "Why does my bank deposit not match my sales report?",
        answer:
          "Because the card processor pays you a net amount. It batches sales into payouts, takes its fees out first, and subtracts refunds, chargebacks and dispute holds. Deposits can also arrive days after the sales, especially after weekends. The sales report also includes tips and sales tax collected, so the two figures rarely agree.",
      },
      {
        question: "What is payout reconciliation?",
        answer:
          "Payout reconciliation means matching each payout from your card processor to one deposit in the bank, then splitting it into gross sales, fees, refunds, chargebacks and other adjustments. The parts should add up exactly to the deposit. Anything that does not match or add up goes on an exceptions list for a person to investigate.",
      },
      {
        question: "Should I record card sales gross or net of processing fees?",
        answer:
          "A common approach is to record gross sales as revenue and the processing fees as a separate expense, rather than the net deposit as sales, so both figures stay visible. This page is general information, not accounting advice, so confirm the accounts and treatment for your business, including tips and sales tax, with your accountant.",
      },
      {
        question: "Can AI reconcile card processor payouts on its own?",
        answer:
          "No. AI can match payouts to deposits despite date shifts, split each payout into its parts, flag unusual adjustments and draft the exceptions list. A person still approves the matches and the entries, and decides on disputes, chargebacks, write-offs and anything unusual. Start with nothing posted automatically and check a sample.",
      },
      {
        question: "What if a payout never arrives in the bank?",
        answer:
          "Check the processor's dashboard first. The payout may still be pending, may have been combined with another day, or may be held for a dispute or reserve. If it shows as paid but no deposit appears, contact the processor and your bank. AI can list missing payouts, but a person follows them up.",
      },
    ],
  },

  "ai-expense-categorization": {
    seoTitle: "AI Expense Categorization | Hiroshi Murakami",
    seoDescription:
      "AI expense categorization for card and bank spend: each line gets an account, tax code and job from your history, and a person reviews the unclear ones.",
    lead: "AI expense categorization reads each card and bank transaction, together with its receipt where there is one, and suggests the account, tax code and job or class based on how you coded similar spending before. A person reviews only the suggestions the AI is unsure about, so categories stay consistent month after month without anyone coding every line by hand.",
    problem: [
      "Think of a home services or field business with a dozen company cards. Technicians buy parts, fuel and the odd lunch with a client. Some receipts are photographed, many are not. At month end someone codes several hundred card lines, guessing from merchant names, and the same hardware store ends up in materials one month and repairs the next.",
      "Inconsistent coding is more than untidy. Job costs are wrong, so quoting is based on bad numbers. Deductible and non-deductible spending get mixed, which costs the accountant time at year end. And sales tax paid on purchases is harder to track.",
    ],
    usualTools: [
      "Bank rules and auto-categorisation in accounting software handle obvious merchants. They do not read receipts, they cannot tell parts for a job from tools for the workshop at the same store, and they assign by merchant rather than by what was bought.",
      "Spend management apps with receipt capture are useful and worth considering. They still rely on someone choosing a category for anything unusual, and their categories have to be mapped to your chart of accounts.",
    ],
    steps: [
      {
        title: "Gather the transaction and the receipt",
        text: "Card and bank lines come from the feeds, and receipts from photos, email and spend apps. The AI pairs each receipt with its transaction.",
      },
      {
        title: "Read what was actually bought",
        text: "Where there is a receipt, the line items are read, so a single purchase can be split between materials for a job and general supplies.",
      },
      {
        title: "Suggest from your own history",
        text: "Account, tax code and job or class are suggested from how you coded similar spending, plus rules you set, such as all fuel to vehicle expenses.",
      },
      {
        title: "Ask the cardholder when it is unclear",
        text: "If the AI cannot tell what a purchase was for, it asks the person who made it with a quick message, while they still remember.",
      },
      {
        title: "Review and post",
        text: "A bookkeeper reviews the low-confidence suggestions and a sample of the rest, then approves them into the accounting software.",
      },
    ],
    outcomes: [
      "The same kind of spending lands in the same account every month.",
      "Job costs reflect what was actually bought for the job.",
      "Missing receipts are requested within days, not at year end.",
      "The bookkeeper reviews instead of coding from scratch.",
    ],
    requirements: [
      "Card and bank feeds in your accounting software",
      "Your chart of accounts, tax codes and job or class tracking",
      "A few months of coded history to learn from",
      "A way to message cardholders, such as email or text",
    ],
    humanInTheLoop:
      "Low-confidence suggestions always go to a person, and you can require review for any account, card or amount. Tax treatment follows rules agreed with your accountant; the AI does not decide it on its own.",
    privacy:
      "Transaction and receipt data is used only for your books, kept with access limited to your finance team and accountant, and not used to train public AI models. Card numbers are never written into notes.",
    example: {
      title: "A worked example: a 20 person field service company",
      intro:
        "Assumed figures to show the arithmetic, not a client result.",
      assumptions: [
        { label: "Cards", value: "12 company cards" },
        { label: "Volume", value: "About 600 card lines a month" },
        { label: "Time today", value: "About 1 minute a line to code, roughly 10 hours a month" },
        { label: "Cost of that time", value: "An assumed $40 an hour" },
      ],
      steps: [
        "The AI suggests codes for all 600 lines as they arrive.",
        "The bookkeeper scans confident suggestions at about 10 seconds each, under 2 hours a month.",
        "About 60 unclear lines are checked at about 2 minutes each, roughly 2 hours.",
      ],
      result:
        "Coding time falls from about 10 hours to about 4 hours a month, saving roughly 6 hours, worth about $240 at the assumed rate before running costs. Consistent job costs are the larger, harder to price benefit.",
    },
    faqs: [
      {
        question: "How does AI categorise expenses?",
        answer:
          "It looks at the merchant, the amount, the receipt's line items where available and how you coded similar spending before, then suggests the account, tax code and job. Suggestions it is unsure about go to a person.",
      },
      {
        question: "Will it use my chart of accounts?",
        answer:
          "Yes. It only suggests accounts, tax codes and classes that already exist in your books, and follows the rules you and your accountant set.",
      },
      {
        question: "What happens without a receipt?",
        answer:
          "It suggests a category from the merchant and your history, marks the line as missing a receipt and can ask the cardholder for it.",
      },
    ],
  },
};
