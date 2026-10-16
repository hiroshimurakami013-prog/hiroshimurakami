import Image from "next/image";
import Link from "next/link";
import HomeLink from "./home-link";

export const INSTAGRAM = "https://www.instagram.com/hiroshimurakami013";
export const FACEBOOK = "https://www.facebook.com/1252933767913035";

// One footer for every page, so the home page and the legal pages always
// carry the same brand line, contact links and legal links.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <HomeLink
          className="flex items-center gap-4"
          aria-label="Hiroshi Murakami, home"
        >
          <span className="symbol-tile" aria-hidden="true">
            <Image
              src="/symbol.png"
              alt=""
              width={259}
              height={249}
              style={{ width: 22, height: "auto" }}
            />
          </span>
          <span className="leading-snug">
            <span className="block font-semibold">Hiroshi Murakami</span>
            <span className="block text-[0.92rem] text-text-2">
              Practical AI for accountants and business owners.
            </span>
          </span>
        </HomeLink>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li>
              <HomeLink className="text-link">Home</HomeLink>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Instagram
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-link">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/data-deletion" className="text-link">
                Data deletion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="wrap mt-10 text-[0.85rem] text-text-3">
        &copy; 2026 Hiroshi Murakami. All rights reserved.
      </p>
    </footer>
  );
}
