import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing — Shrinivas Kulkarni",
  description:
    "Essays and briefs on how organisations reason, decide, and govern the consequences of both, grouped by series.",
  alternates: { canonical: "/writing" },
};

const SERIES = [
  {
    name: "Governance",
    blurb:
      "Why governing what an AI system says is not the same as governing what it does.",
    pieces: [
      {
        kind: "Brief",
        title: "The Operational Authority Layer",
        href: "/governance",
      },
      {
        kind: "Article",
        title: "The physics of an autonomous decision",
        href: "/governance/autonomous-decision",
      },
    ],
  },
  {
    name: "Decision Intelligence",
    blurb:
      "The discipline of turning information into a choice someone can stand behind.",
    pieces: [
      {
        kind: "Article",
        title:
          "Decision Intelligence — why most organisations have data, not decisions",
        href: "/decision-intelligence",
      },
    ],
  },
  {
    name: "Organisation design",
    blurb:
      "How work is arranged, who answers for it, and which reasons for the structure still hold.",
    pieces: [
      {
        kind: "Article",
        title: "Your org chart is a record of old reasons",
        href: "/org-design",
      },
    ],
  },
];

export default function Writing() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Writing</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Essays on how organisations reason, decide, and govern
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Grouped by series. Each piece stands alone.
        </p>
      </header>

      {SERIES.map((s) => (
        <section
          key={s.name}
          className="border-t border-rule py-10 sm:py-12 dark:border-rule-dk"
        >
          <p className="u-eyebrow">{s.name}</p>
          <p className="u-measure mt-3 text-ink-body dark:text-ink-body-dk">
            {s.blurb}
          </p>
          <ul className="mt-6 space-y-4">
            {s.pieces.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="u-link text-lg font-semibold">
                  {p.title}
                </Link>
                <span className="u-sans ml-3 text-xs text-ink-muted dark:text-ink-muted-dk">
                  {p.kind}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
