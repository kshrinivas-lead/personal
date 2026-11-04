import type { Metadata } from "next";
import Link from "next/link";
import {
  AiPosition,
  GapDiagram,
  LoopDiagram,
  OutcomeGrid,
} from "@/components/DecisionDiagrams";

export const metadata: Metadata = {
  title: "Decision Intelligence — why most organisations have data, not decisions",
  description:
    "Every organisation can produce a dashboard. Almost none can produce the reasoning behind their last big call. Decision Intelligence is the discipline of closing that gap — and where AI actually helps.",
  alternates: { canonical: "/decision-intelligence" },
};

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <>
      <p className="u-eyebrow">§ {n}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
    </>
  );
}

const PROPERTIES = [
  {
    n: "01",
    name: "Framed before it's argued",
    body: "The problem is stated in its own right, before anyone proposes an answer. What is actually being decided, what would count as success, what constraints are real versus assumed. Skip this step and the debate is really about which pre-formed answer wins, not about which problem is genuinely on the table.",
  },
  {
    n: "02",
    name: "Reasoned in the open",
    body: "The logic is visible, not just the conclusion. Which alternatives were considered and rejected, and why. Which assumptions the answer depends on. A recommendation without visible reasoning is not a decision — it's an instruction, and instructions don't improve with use.",
  },
  {
    n: "03",
    name: "Owned by a name",
    body: "Someone specific is accountable for the call, and that is recorded at the time, not inferred afterwards from who happens to be in the room when it goes wrong. Diffuse ownership is the most common failure mode in organisational decision-making, and the easiest one to fix.",
  },
  {
    n: "04",
    name: "Checked against what actually happened",
    body: "The reasoning gets revisited against the outcome — not to assign blame, but to find out whether the thinking was sound, independent of whether the result was good. Good decisions produce bad outcomes. Bad decisions produce good ones. An organisation that only tracks outcomes is training itself on the wrong signal.",
  },
];

const CHECKLIST = [
  {
    lead: "Find the problem statement.",
    body: "Not the answer — the problem, written down, before anyone proposed a fix. Does it exist anywhere, or did the conversation start with a recommendation?",
  },
  {
    lead: "Find the alternatives.",
    body: "What else was genuinely considered, and why was it set aside? If the honest answer is “nothing else was seriously on the table,” the decision was a formality, not a choice.",
  },
  {
    lead: "Find the owner.",
    body: "Whose name was on the call at the time — not who gets asked about it now that the outcome is known?",
  },
  {
    lead: "Find the reasoning, a year later.",
    body: "Could someone who wasn't in the room reconstruct why this made sense at the time, using only what was written down?",
  },
];

export default function DecisionIntelligence() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Article · Decision Intelligence series</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Decision Intelligence — why most organisations have data, not
          decisions
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Every organisation can produce a dashboard. Almost none can produce
          the reasoning behind their last big call.
        </p>
      </header>

      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <div className="u-prose u-measure text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Ask a team to justify a decision made six months ago — a pricing
            change, a market entry, a hire, a cancelled project — and watch
            what happens. The outcome is remembered. The result is on a slide
            somewhere. But the actual reasoning — what alternatives were on
            the table, what was assumed, what would have changed the answer —
            has usually evaporated. What&rsquo;s left is a story reconstructed
            backwards to fit whatever happened, which is a different thing
            entirely, and a worse one.
          </p>
          <p>
            That gap is not a data problem. Most organisations have more data
            than they know what to do with. It is a <strong>decision</strong>{" "}
            problem — the space between having information and having chosen
            something on purpose, for reasons anyone could inspect later.
          </p>
        </div>

        <blockquote className="u-measure mt-8 border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
          <p className="text-lg italic leading-relaxed text-ink-body dark:text-ink-body-dk">
            An organisation can be information-rich and decision-poor at the
            same time. Most are.
          </p>
        </blockquote>
      </section>

      {/* § 1 — Information is not a decision */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="1" title="Information is not a decision" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            A dashboard tells you what happened. A forecast tells you what
            might happen. Neither one, by itself, chooses anything. A decision
            is the moment someone takes a position under uncertainty — commits
            to one path over the others that were genuinely available — and
            that moment is where most organisations quietly go informal.
          </p>
          <p>
            The analysis is rigorous. The choice is a feeling, arrived at in a
            room, dressed up afterwards in the language of the analysis that
            preceded it. Nobody is being dishonest. It&rsquo;s simply that the
            discipline most companies apply to <em>gathering</em> information
            has no equivalent for <em>reasoning</em> with it. Decision
            Intelligence is the name for building that missing half.
          </p>
        </div>

        <GapDiagram />
      </section>

      {/* § 2 — Four properties */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading
          n="2"
          title="What a decision worth trusting actually requires"
        />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Four properties, and they have to hold together — a decision can
            satisfy three of these and still not be one anyone should trust.
          </p>
        </div>

        <LoopDiagram />

        <div className="mt-8 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {PROPERTIES.map((p) => (
            <div key={p.n} className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-6">
              <p className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
                {p.n}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <OutcomeGrid />
      </section>

      {/* § 3 — Where AI earns its place */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="3" title="Where AI actually earns its place" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            The honest answer is: not at the point of choosing. The value AI
            brings to a decision is upstream of that — in widening what a
            person can see before they commit to anything.
          </p>
          <p>
            Most decisions aren&rsquo;t wrong because someone reasoned badly
            with the information in front of them. They&rsquo;re wrong because
            the information in front of them was incomplete, the framing was
            too narrow, or the obvious few ways of thinking about the problem
            were the only ones anyone had time to reach for. That&rsquo;s the
            part AI is genuinely good at closing: pulling in the context a
            person didn&rsquo;t have time to assemble, surfacing a way of
            framing the problem nobody in the room had thought to try, running
            the second-order consequences of an option before anyone commits
            to it.
          </p>
          <p>
            What it should not do is supply the choice. A system that hands
            over a recommendation with the reasoning hidden has just automated
            the exact failure mode Decision Intelligence exists to fix — a
            confident answer with no visible thinking behind it, except now it
            arrives faster and looks more authoritative for having come from a
            machine.
          </p>
        </div>

        <AiPosition />

        <blockquote className="u-measure mt-8 border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
          <p className="text-lg italic leading-relaxed text-ink-body dark:text-ink-body-dk">
            The measure of good AI-assisted decision-making isn&rsquo;t how
            much of the decision it took off your hands. It&rsquo;s how much
            better-reasoned the decision was when it stayed in them.
          </p>
        </blockquote>
      </section>

      {/* § 4 — Where this is weakest */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="4" title="Where this is weakest" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            This framing has a limit, and it&rsquo;s worth stating plainly:
            not every decision is worth this much structure. A five-minute
            call with low stakes and easy reversal doesn&rsquo;t need a framed
            problem statement and a named owner — applying that much ceremony
            everywhere is how good frameworks die, smothered by their own
            overhead.
          </p>
          <p>
            The judgment call is knowing which decisions are which. That
            itself deserves the same rigour it&rsquo;s describing, and I
            don&rsquo;t think there&rsquo;s a clean formula for it — only a
            rough rule: the more expensive a decision is to reverse, the more
            this discipline earns its cost.
          </p>
        </div>
      </section>

      {/* § 5 — In practice */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading
          n="5"
          title="A test worth running on your last big decision"
        />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Four questions, and most organisations find at least one produces
            a shrug.
          </p>
        </div>

        <div className="mt-6 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {CHECKLIST.map((c) => (
            <div key={c.lead} className="flex gap-4 py-4">
              <span
                aria-hidden="true"
                className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk"
              >
                &rarr;
              </span>
              <p className="text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                <strong className="font-semibold text-ink dark:text-ink-dk">
                  {c.lead}
                </strong>{" "}
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="u-prose u-measure mt-7 text-ink-body dark:text-ink-body-dk">
          <p>
            If more than one of these comes up empty, the organisation
            isn&rsquo;t short on data. It&rsquo;s short on decisions — on the
            discipline of turning information into a choice someone can stand
            behind, and that someone else can learn from.
          </p>
        </div>
      </section>

      {/* Close */}
      <footer className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-measure text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          Decision Intelligence is part of an ongoing line of work on how
          organisations reason, decide, and govern the consequences of both.
          Related:{" "}
          <Link href="/point-of-view" className="u-link">
            Point of View
          </Link>{" "}
          &middot;{" "}
          <Link href="/governance" className="u-link">
            Governance
          </Link>
        </p>
      </footer>
    </div>
  );
}
