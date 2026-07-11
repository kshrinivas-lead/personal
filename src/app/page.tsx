import Link from "next/link";
import { Strata } from "@/components/grounded/Strata";
import { GROUNDED_PUBLISHED } from "@/config";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      {/* ---- The hero is an argument, not a banner ------------------------- */}
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        <p className="u-eyebrow">
          Enterprise AI · Governance · Transformation
        </p>

        <h1 className="mt-5 text-3xl font-semibold leading-[1.15] sm:text-[2.75rem]">
          Enterprises spent thirty years building governance for humans. They have
          not yet built it for AI.
        </h1>

        <div className="u-prose mt-7 text-lg text-ink-body sm:text-xl dark:text-ink-body-dk">
          <p>
            Most of what is called AI governance today is monitoring and reporting —
            a careful account of what has already happened. An audit log is not a
            control. It is a record of the moment the control was missing.
          </p>
          <p>
            The question I work on is the one asked earlier: when a system takes a
            real action inside a business, what was it structurally permitted to do
            before it did anything at all — and who decided that?
          </p>
        </div>

        <p className="u-sans mt-8 text-sm text-ink-muted dark:text-ink-muted-dk">
          Shrinivas Kulkarni — twenty-six years in enterprise technology. Business
          Head, AI. Visiting faculty, Symbiosis. Stanford LEAD. MBA (Strategy).
        </p>
      </section>

      {/* ---- Grounded. Dark until launch day; flip one flag in config.ts. --- */}
      {GROUNDED_PUBLISHED && (
        <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
          <p className="u-eyebrow">Published · Concept Note v1.0</p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Grounded — a framework for testing whether an organisation is ready for
            the AI investment in front of it
          </h2>

          <div className="u-prose mt-5 text-ink-body dark:text-ink-body-dk">
            <p>
              Most AI investments do not fail because the technology is weak. They
              fail because the foundation underneath them was never tested before the
              capital was committed. Grounded is an open diagnostic for running that
              test — ten blocks, three gates that cannot be averaged away, and a
              verdict rather than a score.
            </p>
          </div>

          <Strata className="mt-10" />

          <Link
            href="/grounded"
            className="u-sans mt-10 inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
          >
            Read the framework
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      )}

      {/* ---- Point of view ------------------------------------------------- */}
      <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
        <p className="u-eyebrow">Point of view</p>

        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          Four ideas, and the arguments against them
        </h2>

        <div className="u-prose mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            The governance gap. Why reliability cannot come from asking a
            probabilistic system to be more careful. Why the bottleneck is almost
            never the technology. And what happens to human judgement when the
            routine work stops reaching it.
          </p>
        </div>

        <Link href="/point-of-view" className="u-link u-sans mt-6 inline-block text-sm font-semibold">
          Read the point of view &rarr;
        </Link>
      </section>
    </div>
  );
}
