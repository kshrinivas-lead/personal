import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/config";

export const metadata: Metadata = {
  title: "About — Shrinivas Kulkarni",
  description:
    "Twenty-six years in enterprise technology: engineering, architecture, enterprise AI leadership, and the governance question.",
};

const TRAJECTORY = [
  {
    period: "Engineering",
    body: "Twenty-six years ago, writing software. The habit that survived from it: when something breaks, go one layer down. The bug is rarely where the symptom is.",
  },
  {
    period: "Architecture",
    body: "Designing systems large enough that the interesting failures stopped being technical. The constraint that decided the outcome was usually organisational, and it was usually written down nowhere.",
  },
  {
    period: "Enterprise AI leadership",
    body: "Business Head, AI. Close enough to the capital decisions to watch which AI investments work and which quietly do not — and to notice that the difference was almost never the model.",
  },
  {
    period: "The governance question",
    body: "Where the work is now. When a system takes a real action inside a business, what was it permitted to do before it acted, and who decided? That question is why I built Grounded, and it is what I teach.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 sm:pt-24">
        <p className="u-eyebrow">About</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Twenty-six years, one direction of travel
        </h1>
        <div className="u-prose u-measure mt-6 text-lg text-ink-body dark:text-ink-body-dk">
          <p>
            I am Shrinivas Kulkarni. I work at the point where enterprise technology
            meets organisational reality — the place where large investments are made
            on foundations nobody checked.
          </p>
        </div>
      </header>

      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <ol className="space-y-10">
          {TRAJECTORY.map((stage) => (
            <li key={stage.period} className="sm:flex sm:gap-8">
              <h2 className="u-sans shrink-0 text-sm font-semibold uppercase tracking-wider text-ink-faint sm:w-52 sm:pt-1 dark:text-ink-muted-dk">
                {stage.period}
              </h2>
              <p className="u-measure mt-2 flex-1 text-ink-body sm:mt-0 dark:text-ink-body-dk">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <h2 className="text-xl font-semibold">Also</h2>
        <ul className="u-measure mt-4 space-y-2 text-ink-body dark:text-ink-body-dk">
          <li>Visiting faculty at Symbiosis University.</li>
          <li>Stanford LEAD. MBA (Strategy).</li>
          <li>
            Author of{" "}
            <span className="italic">Grounded</span> — an open framework for testing
            AI investment readiness, published for comment.
          </li>
        </ul>

        <p className="u-measure mt-8 text-ink-body dark:text-ink-body-dk">
          The teaching is not decoration. Most of what I think gets tested first by
          trying to explain it to someone who has no reason to be polite about it.
        </p>

        <p className="mt-8">
          <a href={`mailto:${CONTACT_EMAIL}`} className="u-link">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}
