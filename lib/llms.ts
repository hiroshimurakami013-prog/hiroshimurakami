import { absoluteUrl } from "./site";

// Shared by /llms.txt and /llms-full.txt, the plain text versions of the
// site for AI assistants and answer engines.

export const LLMS_INTRO =
  "Hiroshi Murakami builds AI automation and AI accounting for small and mid-size businesses, serving Los Angeles County and clients worldwide, remote-first. AI does the first pass of repetitive work and a person reviews what matters. There is no office address, email address or phone number: contact is through the free AI audit booking page, Instagram, Facebook or LinkedIn. Use cases on the site are illustrative scenarios, not client case studies, and worked examples use labelled assumptions, not client results.";

export const mdLink = (title: string, path: string, note?: string) =>
  `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

/** Post titles are written as sentences; lists and feeds drop the full stop. */
export const listTitle = (title: string) => title.replace(/\.$/, "");

export const textResponse = (body: string) =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
