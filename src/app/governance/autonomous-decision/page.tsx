import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The physics of an autonomous decision",
  description:
    "Why governing what an AI system says is not the same as governing what it does — and what it actually takes to close that gap.",
  alternates: { canonical: "/governance/autonomous-decision" },
};

/* The article's diagrams, re-palettes of the source SVGs onto the site's
   light (paper) tokens. The panel stays paper-white in both site themes —
   an image on paper — so the hard-coded fills are always correct. */

const DIAGRAM_TIMING = `
<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="30" font-family="IBM Plex Mono, monospace" font-size="11" fill="#6b6a62" letter-spacing="1">GUARDRAIL / AUDIT LOG</text>
  <line x1="60" y1="45" x2="580" y2="45" stroke="#cfccc2" stroke-width="1"/>
  <circle cx="90" cy="90" r="5" fill="#A8861D"/>
  <text x="105" y="94" font-family="Inter, sans-serif" font-size="13" fill="#6b6a62">Action taken</text>
  <line x1="90" y1="95" x2="90" y2="130" stroke="#cfccc2" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="90" cy="140" r="5" fill="#96958c"/>
  <text x="105" y="144" font-family="Inter, sans-serif" font-size="13" fill="#6b6a62">Logged, after the fact</text>
  <line x1="90" y1="145" x2="90" y2="180" stroke="#cfccc2" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="90" cy="190" r="5" fill="#cfccc2"/>
  <text x="105" y="194" font-family="Inter, sans-serif" font-size="13" fill="#96958c">Reviewed weeks later, if at all</text>

  <text x="360" y="30" font-family="IBM Plex Mono, monospace" font-size="11" fill="#6b6a62" letter-spacing="1">STRUCTURAL EVALUATION</text>
  <line x1="360" y1="45" x2="580" y2="45" stroke="#cfccc2" stroke-width="1"/>
  <text x="360" y="94" font-family="Inter, sans-serif" font-size="13" fill="#16150f">State checked, rules applied</text>
  <line x1="360" y1="105" x2="360" y2="130" stroke="#A8861D" stroke-width="1.5"/>
  <text x="360" y="144" font-family="Inter, sans-serif" font-size="13" fill="#16150f">Permitted or blocked</text>
  <line x1="360" y1="155" x2="360" y2="180" stroke="#A8861D" stroke-width="1.5"/>
  <text x="360" y="194" font-family="Inter, sans-serif" font-size="13" fill="#16150f">Action commits — or never happens</text>
  <circle cx="345" cy="90" r="5" fill="none" stroke="#A8861D" stroke-width="1.5"/>
  <circle cx="345" cy="140" r="5" fill="none" stroke="#A8861D" stroke-width="1.5"/>
  <circle cx="345" cy="190" r="5" fill="#A8861D"/>
</svg>`;

const DIAGRAM_ENTITY = `
<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="30" font-family="IBM Plex Mono, monospace" font-size="11" fill="#6b6a62" letter-spacing="1">APPLICATION-LAYER GOVERNANCE</text>
  <line x1="60" y1="45" x2="330" y2="45" stroke="#cfccc2" stroke-width="1"/>
  <rect x="60" y="60" width="120" height="46" rx="4" fill="none" stroke="#cfccc2" stroke-width="1"/>
  <text x="120" y="88" font-family="Inter, sans-serif" font-size="13" fill="#6b6a62" text-anchor="middle">CRM rules</text>
  <rect x="200" y="60" width="130" height="46" rx="4" fill="none" stroke="#cfccc2" stroke-width="1"/>
  <text x="265" y="88" font-family="Inter, sans-serif" font-size="13" fill="#6b6a62" text-anchor="middle">Collections rules</text>
  <rect x="60" y="120" width="120" height="46" rx="4" fill="none" stroke="#cfccc2" stroke-width="1"/>
  <text x="120" y="148" font-family="Inter, sans-serif" font-size="13" fill="#6b6a62" text-anchor="middle">Credit rules</text>
  <line x1="120" y1="190" x2="290" y2="190" stroke="#96958c" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="60" y="215" font-family="Inter, sans-serif" font-size="12" fill="#96958c">Same customer. Three different, unsynced</text>
  <text x="60" y="233" font-family="Inter, sans-serif" font-size="12" fill="#96958c">answers to "what's allowed."</text>

  <text x="400" y="30" font-family="IBM Plex Mono, monospace" font-size="11" fill="#6b6a62" letter-spacing="1">ENTITY-LAYER GOVERNANCE</text>
  <line x1="400" y1="45" x2="580" y2="45" stroke="#cfccc2" stroke-width="1"/>

  <circle cx="480" cy="140" r="42" fill="none" stroke="#A8861D" stroke-width="1.5"/>
  <text x="480" y="144" font-family="Source Serif 4, serif" font-style="italic" font-size="14" fill="#16150f" text-anchor="middle">Customer</text>
  <line x1="424" y1="80" x2="447" y2="105" stroke="#96958c" stroke-width="1"/>
  <line x1="536" y1="80" x2="513" y2="105" stroke="#96958c" stroke-width="1"/>
  <line x1="480" y1="218" x2="480" y2="188" stroke="#96958c" stroke-width="1"/>
  <text x="410" y="72" font-family="Inter, sans-serif" font-size="12" fill="#6b6a62" text-anchor="middle">CRM</text>
  <text x="552" y="72" font-family="Inter, sans-serif" font-size="12" fill="#6b6a62" text-anchor="middle">Collections</text>
  <text x="480" y="236" font-family="Inter, sans-serif" font-size="12" fill="#6b6a62" text-anchor="middle">Credit</text>
</svg>`;

function Diagram({ svg, caption }: { svg: string; caption: string }) {
  return (
    <figure className="mt-8 rounded-lg border border-rule bg-paper-raised p-6 sm:p-8 dark:border-rule-dk">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      <figcaption className="u-sans mt-4 text-center text-[11px] font-semibold uppercase tracking-widest text-ink-faint">
        {caption}
      </figcaption>
    </figure>
  );
}

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
    name: "Universal state awareness",
    body: "One authoritative answer to what's true about this entity right now — regardless of which system asks, with no back door by which state changes unobserved.",
    example:
      "e.g. a customer flagged for hardship shows that status to every caller, instantly — not just the system that flagged it",
  },
  {
    n: "02",
    name: "Deterministic permission",
    body: "What's possible from a given state is defined by configuration and enforced structurally — never inferred, interpreted, or left to a model's understanding of the rules.",
    example:
      "e.g. the same request, on the same account state, produces the same answer — every time, on any machine",
  },
  {
    n: "03",
    name: "Mandatory evaluation",
    body: "Every proposed action passes a defined sequence of checks before it commits. No caller — human or machine — decides which checks apply, or when one may be skipped.",
    example:
      "e.g. there is no code path, and no override, that lets an action reach production unevaluated",
  },
  {
    n: "04",
    name: "Designed human checkpoints",
    body: "Where the organisation has designated judgment to a person, the flow routes to that person as a built-in checkpoint — not as a failure escalation bolted on after something went wrong.",
    example:
      "e.g. above a threshold, the action has no path to completion without a named approver",
  },
  {
    n: "05",
    name: "Permanent evidence",
    body: "Every decision — permitted, held, or refused — produces an immutable record of what the system knew, what rules were in force, and who decided. Including what was prevented.",
    example:
      "e.g. a regulator's question about last quarter is answered in minutes, not days of reconstruction",
  },
];

const CHECKLIST = [
  {
    lead: "Pick your three highest-consequence AI-driven actions.",
    body: "For each, can you name who is structurally required to approve it before it happens — not who's supposed to review it after?",
  },
  {
    lead: "Pick one entity your AI touches often",
    body: "— a customer, a claim, a contract. How many different systems can act on it? Do they all see the same current state?",
  },
  {
    lead: "Ask what happens at 11pm on a Sunday.",
    body: "If every human went home right now, which actions would still be permitted to execute — and did anyone decide that on purpose?",
  },
  {
    lead: "Find last quarter's disputed-account decisions.",
    body: "Can you produce, today, what the system knew and which rules applied at the moment each one was made?",
  },
  {
    lead: "Check who owns the rules.",
    body: "Can the people accountable for a rule change it directly — or does every update require an engineering ticket?",
  },
];

export default function AutonomousDecision() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Article · Governance architecture series</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          The physics of an autonomous decision
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Why governing what an AI system says is not the same as governing
          what it does — and what it actually takes to close that gap.
        </p>
      </header>

      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <div className="u-prose u-measure text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Enterprise AI crossed a threshold quietly. Systems that once
            drafted text now approve refunds, issue quotes, escalate claims,
            and modify customer records. The capability to act arrived years
            before the authority structures needed to govern that action.
          </p>
          <p>
            This isn&rsquo;t a failure of any individual tool. Language models
            became capable of using tools. Tool use became agency. Agency
            reached the systems where consequences actually live — the CRM,
            the policy administration system, the payment rails. At every
            step, the question <strong>&ldquo;is this action permitted, from
            this state, right now?&rdquo;</strong> was answered locally,
            partially, or not at all.
          </p>
        </div>

        <blockquote className="u-measure mt-8 border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
          <p className="text-lg italic leading-relaxed text-ink-body dark:text-ink-body-dk">
            Most organisations have elaborate machinery for controlling what
            an AI system says. Almost none have anything for controlling what
            it commits.
          </p>
        </blockquote>
      </section>

      {/* § 1 — The question nobody can answer */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="1" title="What happens when a regulator asks" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Picture the question a regulator, an auditor, or a board
            eventually asks: <em>&ldquo;For every automated decision made on
            disputed accounts last quarter — what was the state of each
            account at the moment of decision, which rules applied, and who
            approved anything above the threshold?&rdquo;</em>
          </p>
          <p>
            In most organisations, this question cannot be answered cleanly.
            The evidence is fragmented across applications, each with its own
            partial log, none capturing what the system actually knew at the
            moment it acted. Teams spend days reconstructing a picture that
            remains incomplete by design — because no single layer was ever
            responsible for the decision <em>as a decision</em>.
          </p>
        </div>

        <Diagram
          svg={DIAGRAM_TIMING}
          caption="One happens before the action commits. The other finds out later."
        />
      </section>

      {/* § 2 — The right unit */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="2" title="Govern the entity, not the tool" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Most governance attempts anchor to the wrong thing. They govern
            the model, the application, or the conversation. But the
            consequence never actually lives in any of those. It lives in the{" "}
            <strong>entity</strong> — the customer account, the deal, the
            claim, the contract.
          </p>
          <p>
            An entity is touched by many systems over its life. If each system
            enforces its own version of the rules, the entity ends up governed
            by whichever rules the weakest caller happens to apply. Anchor
            governance to the entity itself instead, and every caller —
            present and future — is governed identically, automatically, by
            the same definition of what&rsquo;s possible.
          </p>
        </div>

        <Diagram
          svg={DIAGRAM_ENTITY}
          caption="Any tool, any vendor — same entity, same answer"
        />
      </section>

      {/* § 3 — Five properties */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="3" title="What an authority layer actually requires" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Five structural properties have to hold simultaneously. Partial
            combinations fail in specific, predictable ways — a guardrail
            without deterministic permission still lets the wrong action
            through; deterministic permission without evidence is
            unenforceable in front of a regulator.
          </p>
        </div>

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
                <p className="u-sans mt-2 text-[0.8rem] text-ink-muted dark:text-ink-muted-dk">
                  {p.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* § 4 — In practice */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="4" title="A test worth running on your own AI estate" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            You don&rsquo;t need architecture diagrams to find out where you
            stand. Five honest questions do most of the work.
          </p>
        </div>

        <div className="mt-6 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {CHECKLIST.map((c) => (
            <div key={c.lead} className="flex gap-4 py-4">
              <span aria-hidden="true" className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
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
            If more than one of these produces a shrug rather than an answer,
            the gap isn&rsquo;t in your AI. It&rsquo;s in the layer that was
            supposed to sit underneath it.
          </p>
        </div>
      </section>

      {/* Close */}
      <footer className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <blockquote className="u-measure border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
          <p className="text-lg italic leading-relaxed text-ink-body dark:text-ink-body-dk">
            A guardrail reacts to what an AI said. An operational authority
            layer defines what it was ever able to do.
          </p>
        </blockquote>

        <p className="u-measure mt-8 text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          This article is part of the governance architecture series. The full
          argument — including why existing approaches cannot close the gap —
          is set out in{" "}
          <Link href="/governance" className="u-link">
            the Operational Authority Layer public brief
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
