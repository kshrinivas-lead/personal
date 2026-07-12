import type { Metadata } from "next";
import Link from "next/link";
import { Toolkit } from "@/components/grounded/Toolkit";
import { DownloadGrounded } from "@/components/grounded/DownloadGrounded";
import { TOOLKIT_RULES } from "@/content/grounded";

export const metadata: Metadata = {
  title: "The Grounded Practice Toolkit — eight artifacts, free and editable",
  description:
    "Everything a facilitator needs to run a Grounded Assessment — from the engagement letter to the board one-pager. Six Word templates, two Excel workbooks. Open, editable, ungated.",
};

/**
 * The toolkit gets its own page for two reasons.
 *
 * The obvious one: /grounded was long, and a reader who has just been argued
 * with for seven sections is in no state to start reading a manifest.
 *
 * The real one: these are two different visitors. One is deciding whether the
 * framework is true; the other has already decided and wants to run an
 * assessment on Tuesday. The second visitor needs a URL she can bookmark, and
 * send to a client, that is not an anchor two thousand words into an essay.
 */
export default function ToolkitPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-14 pb-12 sm:pt-20 sm:pb-16">
        <p className="u-eyebrow">Practice Toolkit · Version 1.0</p>

        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          The Grounded Practice Toolkit
        </h1>

        <p className="mt-3 text-xl italic text-ink-muted sm:text-2xl dark:text-ink-muted-dk">
          Eight artifacts. One method. Everything needed to run an assessment —
          from the engagement letter to the board one-pager.
        </p>

        <div className="u-prose mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            A framework that stops at the argument leaves the hard part — the
            actual running of it — as an exercise for the reader, and quietly
            becomes something you can only buy from its author. So everything is
            here. Six Word templates and two Excel workbooks; the scoring
            workbook is the engine — transcribe the intake forms and the block
            scores, gates, fault lines, verdict, debt register and expiry date
            compute themselves.
          </p>
          <p>
            Everything is editable. Replace the bracketed{" "}
            <code className="u-sans rounded bg-partial-bg px-1 py-0.5 text-[0.8em] text-partial dark:bg-partial-bg-dk dark:text-[#d6b45f]">
              [placeholders]
            </code>
            , keep the scoring rules intact, and version anything you change — a
            silent recalibration destroys comparability across assessments.
          </p>
          <p className="u-sans !mt-6 text-sm text-ink-muted dark:text-ink-muted-dk">
            New to the method?{" "}
            <Link href="/grounded" className="u-link">
              Read the framework first
            </Link>{" "}
            — the toolkit assumes it.
          </p>
        </div>
      </header>

      <section className="border-t border-rule py-14 sm:py-16 dark:border-rule-dk">
        <Toolkit />

        <h2 className="mt-16 text-lg font-semibold">
          Three rules that run through every artifact
        </h2>

        <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-3">
          {TOOLKIT_RULES.map((rule, index) => (
            <div
              key={rule.title}
              className="border-t border-ink pt-3 dark:border-ink-dk"
            >
              <dt className="font-semibold text-ink dark:text-ink-dk">
                <span className="u-sans mr-1.5 text-xs tabular-nums text-ink-faint dark:text-ink-muted-dk">
                  {index + 1}
                </span>
                {rule.title}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
                {rule.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
        <DownloadGrounded />

        <p className="u-sans mt-10 text-center text-sm italic text-ink-muted dark:text-ink-muted-dk">
          Know what you&rsquo;re building on before you build.
        </p>
      </section>
    </div>
  );
}
