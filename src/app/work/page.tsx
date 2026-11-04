import type { Metadata } from "next";
import Link from "next/link";
import { GROUNDED_PUBLISHED } from "@/config";

export const metadata: Metadata = {
  title: "Work — Shrinivas Kulkarni",
  description:
    "The Grounded diagnostic and toolkit, and field notes from understanding how industries actually run.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Work</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          What I build, and what I learn while building it
        </h1>
      </header>

      <section className="border-t border-rule py-10 sm:py-12 dark:border-rule-dk">
        <p className="u-eyebrow">Grounded</p>
        <p className="u-measure mt-3 text-ink-body dark:text-ink-body-dk">
          An open diagnostic for testing whether an organisation is ready for
          the AI investment in front of it.
        </p>
        {GROUNDED_PUBLISHED ? (
          <ul className="mt-6 space-y-4">
            <li>
              <Link href="/grounded" className="u-link text-lg font-semibold">
                Grounded — the framework
              </Link>
            </li>
            <li>
              <Link
                href="/grounded/toolkit"
                className="u-link text-lg font-semibold"
              >
                The toolkit
              </Link>
            </li>
          </ul>
        ) : (
          <p className="u-sans mt-6 text-sm text-ink-muted dark:text-ink-muted-dk">
            Coming soon.
          </p>
        )}
      </section>

      <section className="border-t border-rule py-10 sm:py-12 dark:border-rule-dk">
        <p className="u-eyebrow">Field Notes</p>
        <p className="u-measure mt-3 text-ink-body dark:text-ink-body-dk">
          Working notes from understanding how a domain actually runs. Reference
          material, not argument.
        </p>
        <ul className="mt-6 space-y-4">
          <li>
            <Link
              href="/work/field-notes/factory-process-map"
              className="u-link text-lg font-semibold"
            >
              How a factory runs, on one page
            </Link>
            <span className="u-sans ml-3 text-xs text-ink-muted dark:text-ink-muted-dk">
              Interactive map · Indian auto plants
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
