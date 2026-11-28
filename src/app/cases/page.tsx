import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CASES, SERIES_BLURB, SERIES_NAME, casePath, formatDate } from "@/content/cases";

export const metadata: Metadata = pageMetadata({
  path: "/cases",
  title: "Cases — Shrinivas Kulkarni",
  description: `${SERIES_NAME}. ${SERIES_BLURB}`,
  image: "/og/og-cases.png",
  type: "website",
});

const HOW = [
  {
    n: "1",
    name: "The case",
    body: "What happened, the evidence, and the decisions the people in charge faced. Written neutrally, with a pause at each decision.",
  },
  {
    n: "2",
    name: "My argument",
    body: "What I think the case shows, with the fairest case for the other side stated in the same place.",
  },
  {
    n: "3",
    name: "Lessons and questions",
    body: "Lessons for boards and leadership teams, questions to ask of your own organisation, and discussion questions for classes and workshops.",
  },
];

export default function Cases() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Cases · {SERIES_NAME}</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Real decisions, and what you would have done
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          {SERIES_BLURB}
        </p>
      </header>

      <section className="border-t border-rule py-10 sm:py-12 dark:border-rule-dk">
        <p className="u-eyebrow">How each case works</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {HOW.map((h) => (
            <div key={h.n}>
              <p className="u-sans text-sm text-ink-faint dark:text-ink-muted-dk">Part {h.n}</p>
              <p className="mt-1 font-semibold text-ink dark:text-ink-dk">{h.name}</p>
              <p className="mt-2 text-[0.92rem] text-ink-body dark:text-ink-body-dk">{h.body}</p>
            </div>
          ))}
        </div>
        <p className="u-sans u-measure mt-8 text-sm text-ink-muted dark:text-ink-muted-dk">
          Read straight through as an article, or stop at each decision point
          for discussion. Cases about events still unfolding are marked as
          developing and carry dated updates.
        </p>
      </section>

      <section className="border-t border-rule py-10 sm:py-12 dark:border-rule-dk">
        <p className="u-eyebrow">The cases</p>
        <ul className="mt-6 space-y-6">
          {CASES.map((c) => (
            <li key={c.slug}>
              <Link
                href={casePath(c.slug)}
                className="group block rounded-lg border border-rule p-6 transition-colors hover:border-rule-strong sm:p-7 dark:border-rule-dk dark:hover:border-ink-muted-dk"
              >
                <p className="u-sans flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-muted dark:text-ink-muted-dk">
                  <span className="font-semibold uppercase tracking-wider">{c.company}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {c.updated !== c.published ? "Updated " : ""}
                    <time dateTime={c.updated}>{formatDate(c.updated)}</time>
                  </span>
                  {c.status === "developing" && (
                    <span className="u-chip u-chip-partial">Developing</span>
                  )}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:underline group-hover:decoration-rule-strong group-hover:underline-offset-4">
                  {c.title}
                </h2>
                <p className="mt-3 text-[0.95rem] text-ink-body dark:text-ink-body-dk">{c.hook}</p>
                <p className="u-sans mt-5 text-sm font-semibold text-ink dark:text-ink-dk">
                  Read the case <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
