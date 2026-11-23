import { formatPostDate } from "@/content/posts";
import { lastModifiedFor } from "@/lib/routes";

/** The page's date from lib/routes.ts, the same one the sitemap uses. */
export default function LastUpdated({ path }: { path: string }) {
  const iso = lastModifiedFor(path);
  return (
    <p className="last-updated">
      Last updated <time dateTime={iso}>{formatPostDate(iso)}</time>
    </p>
  );
}
