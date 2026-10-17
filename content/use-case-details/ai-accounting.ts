import type { UseCaseDetail } from "../use-cases.ts";

// Long-form copy for the AI Accounting use cases. Illustrative scenarios,
// no client names and no numbers.

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
    seoTitle: "AI Bank Reconciliation | Hiroshi Murakami",
    seoDescription:
      "How AI matches bank lines to invoices, receipts and payouts every day, leaving a short exception list for a person, not days of matching at month end.",
    lead: "Reconciliation is the job that quietly eats the first days of every month. In this scenario, AI does the matching every day and a person only looks at the lines that genuinely need a decision.",
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
};
