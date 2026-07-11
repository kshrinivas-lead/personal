import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Point of view — Shrinivas Kulkarni",
  description:
    "Four ideas about enterprise AI: the governance gap, why reliability cannot come from the model, why the bottleneck is never the technology, and what happens to judgement that stops accumulating.",
};

const IDEAS = [
  {
    n: "01",
    title: "The governance gap is real, and under-discussed",
    body: [
      "Your company knows exactly who is allowed to approve a £2m payment. Delegated authority. Segregation of duties. A signature that means somebody's name is on it. It has no equivalent answer for the agent that just raised one.",
      "What is called AI governance today is mostly monitoring and reporting — a careful account of what has already happened. Useful, but an audit log is not a control; it is a record of the moment the control was missing. The interesting question is what a system is structurally permitted to do before an action commits.",
    ],
    limit:
      "Knowing the gap exists does not tell you how wide to open the gate. That is a harder problem, and I do not think anyone has solved it well yet.",
  },
  {
    n: "02",
    title: "You cannot fix a probabilistic system by asking it to be more careful",
    body: [
      "When a model does something it shouldn't, the fix is almost always a line added to the prompt. It works. Mostly. Which is the problem — a rule that holds 98% of the time is not a rule, it is a tendency, and you do not get to choose when the 2% arrives.",
      "Making the model more capable does not close this. Each improvement makes the failure rarer, later, and more expensive, because by then you have built on top of it. Reliability has to come from outside the probabilistic layer.",
    ],
    limit:
      "This is a design argument, not a scepticism-about-AI argument. I am emphatically pro-AI, and I think most organisations are being too timid rather than too bold. The way you earn the right to be bold is by putting the reliability somewhere the model cannot reach.",
  },
  {
    n: "03",
    title: "The bottleneck is almost never the technology",
    body: [
      "It is the data nobody profiled. The tacit organisational rule nobody wrote down. The incentive nobody checked. And the question of who owns the outcome when it goes wrong.",
      "Every one of those is an organisational fact, and every one is discoverable before a line of code is written — by asking. Technology rarely fails for technical reasons.",
    ],
    limit:
      "This is the idea I have built a framework around. It is also the idea I am most often told is obvious — and most rarely see acted on.",
  },
  {
    n: "04",
    title: "Second-order consequences deserve attention",
    body: [
      "If AI handles the routine work, human judgement stops accumulating experience. Expertise is built from the boring cases, not the interesting ones — and what fills the gap, when the boring cases stop arriving, is mediated narrative rather than contact with reality.",
      "I raise this about the thing I am helping build, not about someone else's.",
    ],
    limit:
      "I have no method for this one. I am not sure it is even a solvable problem rather than a cost to be understood and accepted. But it should be said out loud by the people building the systems, and mostly it isn't.",
  },
];

export default function PointOfView() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Point of view</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Four ideas I keep returning to
        </h1>
        <p className="u-measure mt-5 text-lg text-ink-body dark:text-ink-body-dk">
          These are positions, not predictions. Each one carries the strongest
          objection I know of, stated in the same place — because a position that
          hides its counter-argument is not a position, it is an advertisement.
        </p>
      </header>

      {IDEAS.map((idea) => (
        <section
          key={idea.n}
          className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk"
        >
          <p className="u-eyebrow">{idea.n}</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">
            {idea.title}
          </h2>

          <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
            {idea.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="u-measure mt-7 border-l-2 border-rule-strong pl-4 dark:border-rule-dk">
            <p className="u-sans text-[11px] font-semibold uppercase tracking-widest text-ink-faint dark:text-ink-muted-dk">
              Where this is weakest
            </p>
            <p className="mt-1.5 text-[0.95rem] italic text-ink-muted dark:text-ink-muted-dk">
              {idea.limit}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
