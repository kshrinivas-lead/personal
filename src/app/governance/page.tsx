import type { Metadata } from "next";
import Link from "next/link";
import { DownloadLink } from "@/components/grounded/DownloadLink";

const BRIEF_PDF = "/operational-authority-layer-public-brief-v1.pdf";
const BRIEF_FILE = "operational-authority-layer-public-brief-v1.pdf";
const BRIEF_ASSET = "authority-layer-public-brief";

export const metadata: Metadata = {
  title: "Governance — The Operational Authority Layer",
  description:
    "Why governing what AI systems say is not the same as governing what they do — and why the answer is a new layer of the enterprise stack, not a feature of any existing one.",
  alternates: { canonical: "/governance" },
};

/* The public brief of the Operational Authority Layer white paper,
   published as a page. A companion architectural paper exists under
   discussion; this is the argument only. */

const PROPERTIES = [
  {
    n: "01",
    name: "Universal state awareness",
    body: 'One authoritative answer to "what is true about this entity right now" — regardless of which system asks, with no back door by which state changes unobserved.',
  },
  {
    n: "02",
    name: "Deterministic permission",
    body: "What is possible from each state is defined by configuration and enforced structurally — not inferred, interpreted, or left to a model's understanding of the rules.",
  },
  {
    n: "03",
    name: "Mandatory evaluation",
    body: "Every proposed action passes a defined sequence of checks before it commits. No caller — human or machine — decides which checks apply, or when one may be skipped.",
  },
  {
    n: "04",
    name: "Business-owned rules",
    body: "The people accountable for the rules maintain the rules — directly, without a code deployment. Governance that requires engineering to update is always out of date.",
  },
  {
    n: "05",
    name: "Permanent evidence",
    body: "Every decision — permitted, held, or refused — produces an immutable record of what the system knew, what rules were in force, and who decided. Including, crucially, records of what was prevented.",
  },
];

const APPROACHES = [
  {
    tag: "Approach 1 — Content guardrails",
    name: "They govern language, not consequence",
    body: "Guardrails inspect model output and filter what is harmful or non-compliant in expression. They can stop a system from saying something inappropriate. They cannot stop it from doing something impermissible — approving a refund on a suspended account, executing a quote that was never reviewed — because the action's legitimacy depends on the entity's state, which the guardrail does not know and does not own. A guardrail is a filter on speech. The problem is authority over action.",
  },
  {
    tag: "Approach 2 — Per-application rules",
    name: "They govern one door in a building with many",
    body: "Permission logic embedded inside each application governs only the actions that pass through that application. When five systems touch the same customer account, five rule sets exist — written by different teams, drifting independently, each unaware of the others' changes. The entity's actual governance is the intersection of accidents. Each new AI tool multiplies the surfaces where rules must be re-implemented and inevitably diverge.",
  },
  {
    tag: "Approach 3 — Observability and monitoring",
    name: "They govern after the fact",
    body: 'Monitoring and evaluation pipelines answer "what happened?" — often brilliantly. But detection after commitment is forensics, not governance. The refund has been issued; the contract has been amended. Post-hoc review can improve the next thousand decisions; it cannot un-make the one that mattered. And because logs are application-scoped side effects rather than purpose-built decision records, they rarely capture the decisive fact: what the system knew, and what rules applied, at the moment of decision.',
  },
];

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <>
      <p className="u-eyebrow">§ {n}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
    </>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="u-measure mt-7 border-l-2 border-rule-strong pl-4 dark:border-rule-dk">
      <p className="u-sans text-[11px] font-semibold uppercase tracking-widest text-ink-faint dark:text-ink-muted-dk">
        {label}
      </p>
      <p className="mt-1.5 text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
        {children}
      </p>
    </div>
  );
}

function PullQuote({ cite, children }: { cite: string; children: React.ReactNode }) {
  return (
    <blockquote className="u-measure mt-8 border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
      <p className="text-lg italic leading-relaxed text-ink-body dark:text-ink-body-dk">
        {children}
      </p>
      <cite className="u-sans mt-3 block text-[11px] font-semibold uppercase not-italic tracking-widest text-ink-faint dark:text-ink-muted-dk">
        {cite}
      </cite>
    </blockquote>
  );
}

export default function Governance() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Public brief · Governance architecture series</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          The Operational Authority Layer for Enterprise AI
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Why governing what AI systems say is not the same as governing what
          they do — and why the answer is a new layer of the enterprise stack,
          not a feature of any existing one.
        </p>
        <p className="u-measure mt-5 text-ink-muted dark:text-ink-muted-dk">
          Every organisation has a physics to how it operates — natural laws
          defining what can happen, in what sequence, under what conditions. As
          autonomous AI systems gain the ability to commit consequential
          business actions, those laws must become explicit, structural, and
          enforced at the moment of decision. This brief presents the argument:
          why the gap exists, why current approaches cannot close it, and what
          closing it actually requires. A companion architectural paper,
          available under discussion, specifies the design in full.
        </p>
        <DownloadLink
          href={BRIEF_PDF}
          fileName={BRIEF_FILE}
          asset={BRIEF_ASSET}
          surface="governance-page"
          className="u-sans mt-8 inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
        >
          Download the brief (PDF)
          <span aria-hidden="true">&darr;</span>
        </DownloadLink>
      </header>

      {/* § 1 — The governance gap */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="1" title="The governance gap — capability arrived before authority" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Enterprise AI crossed a threshold quietly. Systems that once
            drafted text now approve refunds, issue quotes, escalate claims,
            and modify customer records. The capability to act arrived years
            before the authority structures needed to govern action.
          </p>
          <p>
            The gap is not a failure of any individual technology. Language
            models became capable of tool use. Tool use became agency. Agency
            reached the systems where consequences live — the CRM, the policy
            administration system, the payment rails. At each step, the
            question <strong>&ldquo;is this action permitted, from this state,
            right now?&rdquo;</strong> was answered locally, partially, or not
            at all.
          </p>
          <p>
            The result is a structural asymmetry: organisations possess
            elaborate machinery for controlling what AI systems <em>say</em>,
            and almost none for controlling what they <em>commit</em>. Content
            moderation is mature. Action authorisation is improvised.
          </p>
        </div>

        <h3 className="u-sans mt-9 text-sm font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dk">
          The question no one can answer
        </h3>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            Consider the question a regulator, an auditor, or a board
            eventually asks: <em>&ldquo;For every automated decision made on
            disputed accounts last quarter — what was the state of each account
            at the moment of decision, which rules applied, and who approved
            anything above the threshold?&rdquo;</em>
          </p>
          <p>
            In most organisations, this question cannot be answered. The
            evidence is fragmented across applications, each with its own
            partial log, none capturing what the system <em>knew</em> at the
            moment it acted. Teams spend days reconstructing a picture that
            remains incomplete by design — because no single layer was ever
            responsible for the decision <em>as a decision</em>.
          </p>
        </div>

        <Callout label="The central claim">
          Governing autonomous AI at enterprise scale requires a dedicated
          architectural layer — an <strong>operational authority layer</strong>{" "}
          — positioned between every AI agent and every consequential action.
          It holds the authoritative state of the things the organisation cares
          about, defines what may happen to them next, evaluates every proposed
          action before anything commits, and records everything permanently.
          It is not a feature of an agent, a model, or an application. It is
          infrastructure.
        </Callout>

        <h3 className="u-sans mt-9 text-sm font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dk">
          The entity is the correct unit of governance
        </h3>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            Most governance attempts anchor to the wrong unit. They govern the{" "}
            <em>model</em>, the <em>application</em>, or the{" "}
            <em>conversation</em>. But the consequence never lives in any of
            these. It lives in the <strong>entity</strong> — the customer
            account, the deal, the claim, the contract. An entity is touched by
            many systems; if each enforces its own rules, the entity is
            governed by whichever rules the weakest caller applies. Anchor
            governance to the entity itself, and every caller — present and
            future — is governed identically, automatically, by the same
            definition of what is possible.
          </p>
        </div>
      </section>

      {/* § 2 — Why existing approaches fall short */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="2" title="Why existing approaches fall short" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Three families of tooling are commonly offered as answers to AI
            governance. Each solves a real problem. None solves this one —
            because none governs the entity at the moment an action commits.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {APPROACHES.map((a) => (
            <div key={a.tag} className="u-measure">
              <p className="u-eyebrow">{a.tag}</p>
              <h3 className="mt-2 text-xl font-semibold">{a.name}</h3>
              <p className="mt-3 text-ink-body dark:text-ink-body-dk">
                {a.body}
              </p>
            </div>
          ))}
        </div>

        <PullQuote cite="The categorical gap">
          Guardrails govern content. Application rules govern individual tools.
          Monitoring governs after the fact. None of them govern the entity —
          where the consequence lives.
        </PullQuote>
      </section>

      {/* § 3 — The mental model */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="3" title="The mental model — operational physics" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Every organisation has natural laws of operation: things that can
            happen, things that cannot, and things that require conditions to
            be met first. An authority layer encodes those laws as structure
            and enforces them at runtime.
          </p>
        </div>

        <h3 className="u-sans mt-9 text-sm font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dk">
          The field metaphor
        </h3>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            Picture the organisation&rsquo;s operations as a{" "}
            <strong>field</strong>. Every entity the organisation cares about —
            an account, a deal, an order, a claim — occupies a{" "}
            <strong>state</strong> in that field at any given moment. From each
            state, only certain <strong>progressions</strong> are possible.
            Some require conditions to be satisfied. Some require a human to
            confirm. And some are structurally forbidden from certain states —
            not because a policy says so and might be ignored, but because{" "}
            <em>the path simply does not exist</em>.
          </p>
          <p>
            The rules defining what is possible do not live in any AI
            agent&rsquo;s context window, prompt, or training. They live in the
            authority layer, as a structured, versioned, auditable definition
            of the organisation&rsquo;s operational physics.{" "}
            <strong>
              The AI navigates within the field. It does not define the field.
            </strong>
          </p>
        </div>

        <Callout label="The structural difference">
          A guardrail sits <em>around</em> an AI and filters output after
          decisions are formed. An authority layer defines the field{" "}
          <em>before</em> the AI acts. One is a safety net that catches falls.
          The other is the architecture of what is possible — there is nothing
          to catch, because the forbidden path was never available.
        </Callout>

        <h3 className="u-sans mt-9 text-sm font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dk">
          The division of labour
        </h3>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            The layer rests on a strict separation of judgement. Interpreting
            messy human intent is probabilistic work, and AI belongs there.
            Deciding whether a non-negotiable rule holds — a regulatory limit,
            a financial threshold, a prohibited state — is not, and no language
            model participates in that decision. Rules of consequence are
            evaluated deterministically: the same request produces the same
            answer, every time, on any machine. Where the organisation has
            designated judgement to people, decisions are routed to people — as
            designed checkpoints in the flow, not as failure escalations.
          </p>
          <p>
            In one sentence:{" "}
            <em>
              probabilistic systems interpret; deterministic systems authorise;
              humans decide where the organisation has designated judgement —
              and all of it is written into a record no one can subsequently
              edit.
            </em>
          </p>
        </div>

        <PullQuote cite="Design principle — externalised authority">
          Governance that a system can be talked out of is not governance. The
          rules must live outside the reasoning that is being governed.
        </PullQuote>
      </section>

      {/* § 4 — What such a layer requires */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading
          n="4"
          title="What such a layer requires — five inseparable properties"
        />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Our research identifies five structural properties an authority
            layer must exhibit simultaneously. Partial combinations fail in
            specific, predictable ways — a claim the companion architectural
            paper demonstrates property by property.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {PROPERTIES.map((p) => (
            <div key={p.n} className="u-measure flex gap-5">
              <p className="u-eyebrow shrink-0 pt-1">{p.n}</p>
              <p className="text-ink-body dark:text-ink-body-dk">
                <strong className="font-semibold text-ink dark:text-ink-dk">
                  {p.name}.
                </strong>{" "}
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="u-sans mt-10 text-sm font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dk">
          Infrastructure, not policy — and why the value compounds
        </h3>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            The deepest distinction in this brief is between rules that exist
            as policy and rules that exist as infrastructure. Policy can be
            ignored, circumvented, or never consulted. Infrastructure cannot be
            bypassed — it is the path itself. In an authority layer, agents do
            not <em>choose</em> to comply, any more than an application chooses
            to comply with a database constraint. Compliance stops being a
            behavioural property of well-built agents and becomes a structural
            property of the environment they operate in.
          </p>
          <p>
            This inverts the economics of governance. Traditional cost scales
            with the number of systems — each new AI tool adds a surface where
            rules must be re-implemented and re-audited. Entity-anchored
            governance attaches the rules to the things being governed, so{" "}
            <strong>
              each new agent inherits the full configuration on arrival
            </strong>
            , at zero marginal governance cost. Meanwhile the decision record
            grows into an institutional asset with no substitute — one that
            cannot be retrofitted, only accumulated from the moment the layer
            is in place.
          </p>
        </div>
      </section>

      {/* § 5 — Conclusion */}
      <section className="border-t border-rule py-12 pb-20 sm:py-16 sm:pb-28 dark:border-rule-dk">
        <SectionHeading
          n="5"
          title="Conclusion — the field must be defined before the agents multiply"
        />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p className="italic">
            Enterprises will not slow the delegation of consequential action to
            AI systems; the economics forbid it. The only question is whether
            that delegation happens inside a defined field — or in the
            improvised gaps between content filters, per-app checks, and
            after-the-fact review.
          </p>
          <p>
            The argument of this brief is that the field is not a feature any
            existing category will grow into. Agent frameworks build agents;
            they do not govern what any agent may commit. Workflow engines
            sequence activity; they do not authorise it. Guardrails filter
            expression; monitoring explains the past. The authority layer is a
            distinct stratum of the enterprise stack: positioned between every
            agent and every consequence, holding the organisation&rsquo;s
            operational physics in explicit, versioned, enforceable form.
          </p>
          <p>
            Organisations that establish this layer early gain something late
            adopters cannot purchase retroactively: a complete history of
            governed decisions, and an estate of AI systems whose autonomy was
            bounded by structure from the first action they ever committed.
          </p>
        </div>

        <PullQuote cite="Closing principle">
          The AI navigates the field. The organisation defines it. The layer is
          where that definition becomes real.
        </PullQuote>

        <Callout label="Going deeper">
          This public brief presents the argument.
        </Callout>

        <DownloadLink
          href={BRIEF_PDF}
          fileName={BRIEF_FILE}
          asset={BRIEF_ASSET}
          surface="governance-page"
          className="u-sans mt-10 inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
        >
          Download the brief (PDF)
          <span aria-hidden="true">&darr;</span>
        </DownloadLink>

        <p className="u-measure mt-10 text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          In this series:{" "}
          <Link href="/governance/autonomous-decision" className="u-link">
            The physics of an autonomous decision
          </Link>{" "}
          — the argument in article form, with a five-question test to run on
          your own AI estate.
        </p>
      </section>
    </div>
  );
}
