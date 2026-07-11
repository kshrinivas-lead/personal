import Link from "next/link";
import { CONTACT_EMAIL, GROUNDED_PUBLISHED } from "@/config";

const links = [
  ...(GROUNDED_PUBLISHED ? [{ name: "Grounded", href: "/grounded" }] : []),
  { name: "Point of View", href: "/point-of-view" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-rule dark:border-rule-dk">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-base font-semibold text-ink dark:text-ink-dk">
            Shrinivas Kulkarni
          </p>
          <p className="u-sans mt-1 text-xs text-ink-muted dark:text-ink-muted-dk">
            <a href={`mailto:${CONTACT_EMAIL}`} className="u-link">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="u-sans text-xs text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-dk dark:hover:text-ink-dk"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/kshrinivas2000/"
            target="_blank"
            rel="noopener noreferrer"
            className="u-sans text-xs text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-dk dark:hover:text-ink-dk"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-10 sm:px-8">
        <p className="u-sans text-xs text-ink-faint dark:text-ink-muted-dk">
          &copy; {new Date().getFullYear()} Shrinivas Kulkarni. British English
          throughout, deliberately.
        </p>
      </div>
    </footer>
  );
}
