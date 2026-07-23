import Link from "next/link";
import { GROUNDED_PUBLISHED } from "@/config";
import { JsonLd, personJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <div>
      <JsonLd data={personJsonLd} />
      {/* ---- The hero is an argument, not a banner ------------------------- */}
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="u-eyebrow">
          Enterprise AI · Governance · Transformation
        </p>

        <h1 className="mt-5 text-3xl font-semibold leading-[1.15] sm:text-[2.75rem]">
          Your company knows exactly who is allowed to approve a &pound;2m payment.
          It has no equivalent answer for the agent that just raised one.
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

      {/* ---- Published work: full-width band, cards centred ----------------
           Three cards no longer fit the reading measure, so this section
           breaks out of the 3xl column: the band spans the page, the card
           row is centred and capped at 6xl so all three sit on one line. */}
      <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="u-eyebrow">Published</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUNDED_PUBLISHED && (
            <article className="flex flex-col rounded-lg border border-rule p-6 sm:p-7 dark:border-rule-dk">
              <p className="u-eyebrow">Concept Note v1.0</p>

              <h2 className="mt-3 text-xl font-semibold leading-snug">
                Grounded — a framework for testing whether an organisation is
                ready for the AI investment in front of it
              </h2>

              <p className="mt-4 mb-7 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                Most AI investments do not fail because the technology is weak.
                They fail because the foundation underneath them was never
                tested before the capital was committed. Grounded is an open
                diagnostic for running that test — ten blocks, three gates that
                cannot be averaged away, and a verdict rather than a score.
              </p>

              <Link
                href="/grounded"
                className="u-sans mt-auto inline-flex items-center gap-2 self-start rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
              >
                Read the framework
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          )}

          <article className="flex flex-col rounded-lg border border-rule p-6 sm:p-7 dark:border-rule-dk">
            <p className="u-eyebrow">Public Brief</p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              The Operational Authority Layer — governing what AI systems do,
              not just what they say
            </h2>

            <p className="mt-4 mb-7 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
              Guardrails govern content. Application rules govern individual
              tools. Monitoring governs after the fact. None of them govern the
              entity — where the consequence lives. This brief argues for a new
              layer of the enterprise stack: one that defines what an AI system
              is structurally permitted to do before an action commits, and
              records every decision permanently.
            </p>

            <Link
              href="/governance"
              className="u-sans mt-auto inline-flex items-center gap-2 self-start rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
            >
              Read the brief
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>

          <article className="flex flex-col rounded-lg border border-rule p-6 sm:p-7 dark:border-rule-dk">
            <p className="u-eyebrow">Article</p>

            <h2 className="mt-3 text-xl font-semibold leading-snug">
              The physics of an autonomous decision
            </h2>

            <p className="mt-4 mb-7 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
              Why governing what an AI system says is not the same as
              governing what it does. The five structural properties an
              authority layer requires, and a five-question test worth running
              on your own AI estate — no architecture diagrams needed.
            </p>

            <Link
              href="/governance/autonomous-decision"
              className="u-sans mt-auto inline-flex items-center gap-2 self-start rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
            >
              Read the article
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        </div>
        </div>
      </section>

      {/* ---- Point of view ------------------------------------------------- */}
      <section className="border-t border-rule dark:border-rule-dk">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
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
        </div>
      </section>
    </div>
  );
}
