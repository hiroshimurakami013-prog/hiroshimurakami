import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export type Crumb = { name: string; path: string };

// Visible trail for deep pages. The last crumb is the current page and is
// not a link. The same list feeds the BreadcrumbList JSON-LD.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        {items.map((c, i) =>
          i === items.length - 1 ? (
            <li key={c.path}>
              <span aria-current="page">{c.name}</span>
            </li>
          ) : (
            <li key={c.path}>
              <Link href={c.path} className="text-link">
                {c.name}
              </Link>
              <CaretRight size={12} weight="bold" aria-hidden="true" />
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
