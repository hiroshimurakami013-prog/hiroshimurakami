# Growth log

What was changed for organic growth, when, and why. Newest first. Use it to compare Search Console data before and after each batch.

## 2026-11-28: quick answers on three posts and a payout reconciliation page

Why: Search Console (7 days) shows `/blog/thomson-reuters-cocounsel-agentic-tax-compliance` at position 7.4 with 5 impressions, `/blog/blue-j-deloitte-canada-ai-tax-research` at position 6, `/blog/chatgpt-for-accounting-launch` at position 30 with 3 impressions and `/blog/ai-recommends-quickbooks-first` at position 90. The query "ai receptionist for accountants" sits at position 41 (19 impressions) and "ai bank reconciliation" at 92.

- **Three posts**: a "Quick answers" FAQ with four questions each, worded as people search (what CoCounsel for tax is and how it uses AI for tax research, when the workflows roll out, how invoice checking works; what ChatGPT for Accounting is, whether it changes the books without approval, whether it can close the books; what Blue J is, what the Deloitte Canada deal covers, why Deloitte chose it). Each answer is 40 to 60 words, answers in its first sentence and uses only facts already in the post and its sources. The fourth answer on each post is labelled as my opinion. `dateModified` 2026-11-28, which `lib/routes.ts` reads for the sitemap. The post bodies are unchanged.
- **New page** (37 use cases): `/use-cases/ai-payment-processor-payout-reconciliation`, "Reconcile card processor payouts with AI". Targets "payout reconciliation" and "bank deposit does not match sales report". Explains why a card processor deposit never equals the sales report (batched payouts, fees netted out, refunds, chargebacks and dispute holds, timing across days and weekends, tips and sales tax inside the gross), six steps (export the payout report, match each payout to one deposit, split it, post fees as an expense and sales as revenue, investigate unmatched items, decide on disputes and write-offs), a "Where AI helps and where a person decides" scope list, a 60 word answer-first lead, key facts, a worked example with made-up figures labelled as assumptions ($2,400.00 gross, $69.60 fees, $85.00 refund, $50.00 dispute hold, $2,195.40 net), five FAQs, human review and privacy notes and the "General information only, not tax or accounting advice" notice. No processor is named: the page says "your card processor". Parent service AI Accounting, related Custom CRM and Workflow Automation. Reuses the bank reconciliation scene image.
- **Links to it**: `seeAlso` on `automated-bank-reconciliation`, `ai-vs-rules-vs-manual-bank-reconciliation` and `ai-month-end-close-checklist`, the "Books that are always behind" card on `/locations/los-angeles`, the "People sign off on what matters" card on `/locations/pasadena`, and the generated lists on `/services/ai-accounting`, `/use-cases`, `/llms.txt` and `/llms-full.txt`.
- **Dates**: only the new page takes 2026-11-28 (`GROWTH_BATCH_7`), plus the three posts through their `dateModified`. Pages that only gained a link keep their dates.
- **Watch**: position and clicks for the CoCounsel and Blue J posts (already on page one), whether the ChatGPT for Accounting post moves up from 30, and impressions for the new page on payout and deposit mismatch queries.
- No new JSON-LD types (the FAQs use the existing FAQPage builder). Indexing logic was not touched.

## 2026-11-27: KPMG post quick answers and a year-end cleanup checklist

Why: Search Console (7 days) shows `/blog/kpmg-clara-intelligence-ai-audit` at position 13.6 with 5 impressions and the query "kpmg ai audit" at position 48, "ai invoice capture" at position 79 and an AI expense categorization style page at position 46. The growth log TODO from 2026-11-26 asked for a seasonal year-end checklist with a distinct angle.

- **`/blog/kpmg-clara-intelligence-ai-audit`**: a "Quick answers" FAQ with four questions (what KCi is and what KPMG announced on 17 November 2026, whether it checks every transaction, who is responsible, how an owner can prepare). Each answer is 40 to 60 words, answers in its first sentence and uses only facts already in the post and the KPMG source; the preparation answer is labelled as my opinion. `dateModified` 2026-11-27, which `lib/routes.ts` reads for the sitemap. The post body is unchanged.
- **New page** (36 use cases): `/use-cases/ai-year-end-bookkeeping-cleanup-checklist`, "AI year-end bookkeeping cleanup checklist for small business". Nine year-end steps for December and January before the books go to the tax preparer (uncategorized and duplicate lines, reconciling bank, card and loan accounts through the last day of the year, vendor totals and W-9s, unpaid invoices and write-offs, payroll and sales tax liabilities, fixed assets, owner spending, receipts, the package for the accountant), each saying where AI helps and where a person decides. Distinct from the month-end close checklist: it covers once-a-year items. A 58 word answer-first lead, key facts, an assumption-labelled worked example, five FAQs, human review and privacy notes (W-9s hold taxpayer identification numbers). No deadlines or dollar thresholds: the page tells readers to confirm them with their accountant or the IRS. Parent service AI Accounting, related AI Follow-Ups. Reuses the receipt capture scene image.
- **Template**: optional `notice` on a use case, shown under the lead as a prominent line. The new page uses it for "General information only, not tax or accounting advice".
- **Links to it**: `seeAlso` on `ai-month-end-close-checklist` and `automated-bank-reconciliation`, the "Books that are always behind" card on `/locations/los-angeles`, the "People sign off on what matters" card on `/locations/pasadena`, and the generated lists on `/services/ai-accounting`, `/use-cases`, `/llms.txt` and `/llms-full.txt`.
- **Dates**: only the new page takes 2026-11-27 (`GROWTH_BATCH_6`), plus the KPMG post through its `dateModified`. Pages that only gained a link keep their dates.
- **Watch**: position for "kpmg ai audit" and clicks on the KPMG post, impressions for the new page on year-end cleanup queries through December and January.
- No new JSON-LD types (the FAQs use the existing FAQPage builder). Indexing logic was not touched.

## 2026-11-26: answer-first accountants page and five first projects

Why: Search Console (7 days) shows "ai receptionist for accountants" at 5 impressions, position 43, on `/use-cases/ai-receptionist-for-accounting-firms`, "ai automation pasadena" (13, pos 71) and "ai consulting pasadena" (19, pos 59) on `/locations/pasadena`, and "ai automation for small business los angeles" (3, pos 81) on `/locations/los-angeles`.

- **`/use-cases/ai-receptionist-for-accounting-firms`**: H1, title ("AI Receptionist for Accountants | Hiroshi Murakami") and description now match the query. The lead is a 56 word direct answer, followed by a new "What it can and cannot handle" list (optional `scope` on a use case, `app/components/scope-list.tsx`). The rest of the page and its facts are unchanged.
- **New page** (35 use cases): `/use-cases/first-ai-automation-projects-small-business-los-angeles`, five first projects ranked from least to most effort (follow-ups, lead replies, AI receptionist, receipt capture, connecting tools), with assumed effort ranges, payback in words, key facts, an assumption-labelled worked example and six FAQs. Categories only, no vendors. Parent service Custom CRM and Workflow Automation, related AI Follow-Ups. Reuses the connecting tools scene image.
- **Links to it**: the "Tools that do not talk" card on `/locations/los-angeles`, the "What gets built first" card on `/locations/pasadena`, `seeAlso` on `connecting-disconnected-tools` and `unanswered-quote-follow-ups`, and the generated lists on `/services/custom-crm-and-workflows`, `/use-cases`, `/llms.txt` and `/llms-full.txt`.
- **Dates**: only the two pages above take 2026-11-26 (`GROWTH_BATCH_5`). The pages that only gained a link keep their dates.
- **Watch**: position for "ai receptionist for accountants" and "ai automation for small business los angeles", and impressions for the new page.
- No new JSON-LD types. Indexing logic was not touched.

## 2026-11-25: comparison pages for AI citation

Why: the brief for this batch cites an arXiv GEO study (https://arxiv.org/abs/2606.20065) in which "best-of" and comparison pages take about 21 percent of AI search citations. The paper could not be opened in this session, so the figure is unverified and appears nowhere on the site.

- **Two new pages** (34 use cases), comparing approaches rather than named vendors, with no prices or statistics:
  - `/use-cases/ai-vs-rules-vs-manual-bank-reconciliation`: spreadsheet, rules or AI with review, including when not to use AI. Targets "ai in bank reconciliation", "ai bank reconciliation" and "transaction matching using ai".
  - `/use-cases/ai-receptionist-vs-answering-service-vs-voicemail`: voicemail, answering service, in-house person or AI receptionist, including when AI is a poor fit. Targets "ai receptionist los angeles" and "ai receptionist for small business".
  - Both have key facts, a worked example labelled as assumptions and a FAQ. The template has no table, so the comparison is the structured steps list. Both reuse existing scene images.
- **Links**: `seeAlso` both ways with the two reconciliation pages, the QuickBooks page and both buyer checklists (the AI receptionist and reconciliation ones). Los Angeles links the receptionist comparison from "Calls that nobody picks up": the optional `link` on a city point became `links`. Lists on the service pages, hub, `/llms.txt` and `/llms-full.txt` are generated.
- **Pasadena**: new section "What does AI consulting in Pasadena involve?". Key facts unchanged.
- **Template**: a use case title that ends in a question mark shows it as the ember dot, instead of "?.", on the page and in its Open Graph image (`lib/og.tsx`).
- **Dates**: the two new pages, the four linking use cases, Los Angeles and Pasadena take 2026-11-25 (`GROWTH_BATCH_4`). Service pages and `/use-cases` keep their dates, because only their generated lists changed.
- **Watch**: impressions and position for the target queries and "ai consulting pasadena", and which of these pages AI search cites.
- Indexing logic was not touched.

## 2026-11-24: AI receptionist buyer checklist

One page and a few internal links, as Google's November 2026 core update finishes. No new schema types.

- **New page** (32 use cases): `/use-cases/ai-receptionist-buyer-checklist`, "How to choose an AI receptionist". The angle is evaluation: what happens when it is wrong, handover, disclosure, access, call data, a test on 20 past calls and what to measure. The worked example is labelled as assumptions. It reuses the AI Receptionist service image.
- **Links to it**: `seeAlso` on `missed-calls-at-the-front-desk` and `ai-receptionist-for-accounting-firms`, the "Calls that nobody picks up" card on `/locations/los-angeles` (new optional `link` on a city point), and the generated use case lists on `/services/ai-receptionist`, `/use-cases`, `/llms.txt` and `/llms-full.txt`.
- **Dates**: the new page, the two linking use cases and Los Angeles take 2026-11-24 (`GROWTH_BATCH_3`). `/services/ai-receptionist` and `/use-cases` keep their dates, because only their generated lists changed.
- **Watch**: position for "ai receptionist los angeles" (52 on `/services/ai-receptionist`) and "ai automation for small business los angeles" (80 on `/locations/los-angeles`), and impressions for the new page.
- Indexing logic was not touched.

## 2026-11-23: about page work experience

Source: the owner's own LinkedIn export. No education was supplied, so none is shown.

- **`/about`**: Background section with four roles (TriSage Solutions, Ledgerline, Gusto, Brex), "What I believe", "Details on LinkedIn" and a background question in the FAQ. The TriSage figures are labelled "From my LinkedIn profile" and as neither audited nor case studies. Copy in `content/about.ts`.
- **Schema**: Person `worksFor` lists the business and TriSage Solutions (name only), `description` mentions finance and technology, four new `knowsAbout` items. `@id` and `sameAs` are unchanged. No alumniOf, education or awards.
- **`/llms.txt` and `/llms-full.txt`**: the companies, roles and dates, generated from `content/about.ts`. The full file also has the role details.

## 2026-11-23: about page, full llms.txt, llms-full.txt and RSS

Goal: a clearer entity for Hiroshi Murakami and easier discovery by AI assistants and feed readers.

- **About page** `/about` (`app/about/page.tsx`, copy in `content/about.ts`): one-sentence definition, key facts, the eight services, the three steps, what is not offered, profiles with `rel="me"`, four questions. Portrait at `public/images/shared/hiroshi-murakami.webp` (800 by 1000). Linked from the footer, the deep page header (from 1024 px), the home About section and `/llms.txt`. No experience, education or credentials: a TODO in the code marks where they go once the owner supplies them.
- **Schema**: ProfilePage (main entity `/#person`), BreadcrumbList and FAQPage on `/about`. The shared Person now has `image`, `description` and `mainEntityOfPage` (`/about`); `@id`, `url` and `sameAs` are unchanged.
- **`/llms.txt`**: lists all 31 use cases grouped by service (before: AI accounting only), `/about`, `/llms-full.txt` and the feed.
- **`/llms-full.txt`**: text of the about page, services (summary, steps, human review, questions), use case summaries, the calculator and each post's main points.
- **`/feed.xml`**: RSS 2.0, linked on `/blog` and through `rel="alternate"` on every page. The author is in `dc:creator`, because the RSS `author` element needs an email address.

## 2026-11-23: key facts, visible dates and one evaluation page

Small batch while Google's November 2026 core update rolls out: quality over volume.

- **Key facts**: optional `keyFacts` ("The short version", `app/components/key-facts.tsx`) in the hero of service, use case and city pages. Filled on `/locations/pasadena`, `/locations/los-angeles`, `/use-cases/automated-bank-reconciliation`, `/use-cases/ai-transaction-matching-for-quickbooks`, `/services/ai-receptionist` and `/services/ai-accounting`. Not added to JSON-LD: no existing node has a natural place for them. City key facts count in the overlap test.
- **Last updated**: shown on every service, use case and city page (`app/components/last-updated.tsx`), read from `lib/routes.ts` through `lastModifiedFor()`, so it matches the sitemap. AI accounting pages used to take the date of the newest blog post. They now take the date of their own content, so untouched AI accounting use cases moved back from 2026-11-23 to 2026-11-22.
- **New page** (31 use cases): `/use-cases/ai-reconciliation-tool-evaluation-checklist`, "How to evaluate an AI reconciliation tool". Linked from both reconciliation pages, the savings calculator and the two posts below. It reuses the bank reconciliation scene image. New optional `stepsHeading`, because its steps are a checklist rather than how the AI works.
- **Posts**: one inline link each from `/blog/numica-buys-retiring-accounting-firms` and `/blog/ai-agents-tax-benchmark` (`dateModified` 2026-11-23).
- Indexing logic was not touched.

## 2026-11-22: answer-first pages, schema, long-tail use cases and a free tool

Starting point: new domain, close to zero clicks, average positions around 60 to 90. Queries seen in Search Console: "ai consulting pasadena", "ai automation pasadena", "ai bank reconciliation", "transaction matching using ai", "ai receptionist los angeles", "ai automation for small business los angeles". The plan: long-tail pages with direct answers first, a free interactive tool that can earn links, and GEO (answer-first copy, structured data and consistent entity data so AI search can cite the site).

### Entity and schema (`lib/schema.ts`)
- New `Person` entity for Hiroshi Murakami (`@id` `/#person`): job title "AI automation and AI accounting consultant", `knowsAbout` AI accounting automation and related topics, `sameAs` Instagram and Facebook from `lib/site.ts`. No LinkedIn URL exists in the repo, so none was added. No credentials, employers or results.
- The home `ProfessionalService` now points to the Person as founder, and blog `Article` authors are the same Person (with `datePublished` and `dateModified`, already present before).
- New `faqJsonLd()`: FAQPage built from the questions each page shows. Used on home, all service pages, city pages, use cases and posts that have a FAQ, and the calculator.
- New `toolJsonLd()`: WebApplication (free, runs in the browser) plus breadcrumb and FAQ.

### Answer-first rewrites and FAQs (ten pages)
The first one or two sentences now answer the page's main question directly:
- Home: lead names the offer, and a new "Common questions" FAQ (five questions).
- `/services/ai-accounting`: "AI accounting uses AI to do the first pass of bookkeeping..." (existing six FAQs, now also in JSON-LD).
- `/services/ai-receptionist`: "An AI receptionist is a phone assistant that..." plus a Los Angeles FAQ (six in total).
- `/use-cases/automated-bank-reconciliation`: defines AI bank reconciliation and transaction matching; five FAQs; title "AI Bank Reconciliation and Matching".
- `/locations/pasadena`: AI consulting and AI automation in Pasadena, remote-first; two new FAQs; the accounting firm receptionist use case added.
- `/locations/los-angeles`: what AI automation means for a small Los Angeles business; two new FAQs (AI receptionist, time saved).
- `/locations/beverly-hills`: when AI fits a Beverly Hills practice; two new FAQs (confirmations, no in-person visits).
- `/blog/ai-agents-tax-benchmark` and `/blog/numica-buys-retiring-accounting-firms`: answer-first leads and a "Quick answers" FAQ from the source facts (opinion answers say so); `dateModified` 2026-11-22.
City copy stays unique per city: no shared passages were written on purpose, but run `npm run check` to confirm the overlap test.

### Six new long-tail use cases (30 in total)
Each has a problem, why the usual tools fall short, steps, outcomes, requirements, human review and privacy notes, a worked example whose figures are labelled assumptions (not client results), a FAQ and links to its service, a sibling, a related service, four cities and related use cases (`seeAlso`):
- `/use-cases/bank-reconciliation-for-a-10-person-firm`
- `/use-cases/ai-transaction-matching-for-quickbooks`
- `/use-cases/ai-accounts-payable-invoice-capture`
- `/use-cases/ai-month-end-close-checklist`
- `/use-cases/ai-expense-categorization`
- `/use-cases/ai-receptionist-for-accounting-firms`
They appear on the use cases hub and their service page automatically, and are linked from related use cases, the Pasadena page and the Numica post. They reuse existing scene images (alt text describes the picture), because image generation was not available in this session.

### Free tool
- `/tools/accounting-automation-savings-calculator`: inputs for weekly bookkeeping hours, hourly cost, bank and card accounts and monthly invoices; output is a range of hours and dollars saved per month, with every assumption listed on the page from the same constants (`content/tools.ts`). Client component, no storage, no network requests. Linked from the shared footer, the AI Accounting service page and the AI accounting use cases. WebApplication and FAQPage JSON-LD.

### llms.txt
- `/llms.txt` is generated by `app/llms.txt/route.ts` rather than a file in `public/`, so its absolute URLs come from `SITE_URL` (no hard-coded domain). It lists the services, AI accounting use cases, cities, posts, the calculator and the contact routes.

### Unchanged
- Indexing logic: `INDEXABLE`, `ROBOTS`, `app/robots.ts`, `app/sitemap.ts` and the X-Robots-Tag header in `next.config.ts` were not touched. New pages are in `lib/routes.ts`, so they reach the sitemap only when the site is indexable.

### Verification
- `npm run build` and `npm run lint` pass. No em or en dashes in the source or the built HTML, no lowercase "AI" in the built HTML, titles 60 characters or fewer and descriptions 155 or fewer (checked against the build output).
- `npm run check` could not be run in this session (the command needed an approval that was not available). Run it before committing.

### What to watch
- Search Console, 4 to 8 weeks after deploying: impressions and position for the six target queries and the new use case URLs; whether the calculator gets impressions for "bookkeeping automation savings" style queries.
- Request indexing for the six new use cases and the calculator after deploying, and submit the sitemap again.
