"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToY } from "./smooth-scroll";

// A link home that still does something on the home page: it glides back to
// the top instead of being a dead click.
export default function HomeLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Link
      href="/"
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        scrollToY(0, reduce);
      }}
    >
      {children}
    </Link>
  );
}
