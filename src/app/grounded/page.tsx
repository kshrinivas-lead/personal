import type { Metadata } from "next";
import { Strata } from "@/components/grounded/Strata";
import {
  TenBlocks,
  MethodFlow,
  FaultLineGrid,
  VerdictLogic,
} from "@/components/grounded/Figures";
import { DownloadGrounded } from "@/components/grounded/DownloadGrounded";
import { BLOCKS, FAILURE_MODES } from "@/content/grounded";

export const metadata: Metadata = {
  title: "Grounded — a framework for testing AI investment readiness",
  description:
    "Most AI investments do not fail because the technology is weak. They fail because the foundation underneath them was never tested before the capital was committed. Grounded is an open diagnostic for running that test.",
};

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
      <p className="u-eyebrow">{n}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function GroundedPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      {/* ---- Opening ------------------------------------------------------- */}
      <header className="pt-14 sm:pt-20">
        <p className="u-eyebrow">
          Concept Note · Version 1.0 · Published for comment
        </p>

        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Grounded</h1>

        <p className="mt-3 text-xl italic text-ink-muted sm:text-2xl dark:text-ink-muted-dk">
          A framework for testing whether an organisation is ready for the AI
          investment in front of it
        </p>

        <div className="u-prose mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            Most AI investments do not fail because the technology is weak. They fail
            because the foundation underneath them — the data, the economics at
            scale, the people whose behaviour must change, and the alignment of the
            leadership team itself — was never tested before the capital was
            committed.
          </p>
          <p>
            Grounded is an open diagnostic for running that test: ten blocks, thirty
            observable evidence questions, three gates that cannot be averaged away,
            answers collected privately by role, and an output that is a verdict with
            a priced register of gaps — not a score.
          </p>
        </div>

        <Strata className="mt-12" />
      </header>

      {/* ---- 01 The problem ------------------------------------------------ */}
      <Section n="01" title="The problem — mispriced transformation">
        <div className="u-prose text-ink-body dark:text-ink-body-dk">
          <p>
            Every major technology wave has failed enterprises in the same way. ERP
            programmes in the 1990s did not fail because the software couldn&rsquo;t
            post a journal entry. Cloud migrations in the 2010s did not fail because
            the infrastructure was unreliable. The pattern is stable across three
            decades:{" "}
            <strong>the technology is rarely the thing that breaks. The foundation is.</strong>{" "}
            AI now repeats the pattern faster and more expensively — and with a
            hazard the earlier waves did not have. An AI system can fail{" "}
            <em>silently</em>, degrading as data drifts while every dashboard stays
            green.
          </p>
        </div>

        <dl className="mt-8 space-y-6">
          {FAILURE_MODES.map((mode) => (
            <div key={mode.title}>
              <dt className="font-semibold text-ink dark:text-ink-dk">
                {mode.title}
              </dt>
              <dd className="mt-1 text-ink-body dark:text-ink-body-dk">
                {mode.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="u-pullquote mt-10">
          The organisation pays to close its foundation gaps whether or not it
          acknowledges them. The only choice is whether that cost appears in the
          business case before the capital is committed, or arrives eighteen months
          later disguised as &ldquo;the AI didn&rsquo;t work here.&rdquo;
        </p>
      </Section>

      {/* ---- 02 Why existing tools miss it --------------------------------- */}
      <Section n="02" title="Why existing tools don't catch it">
        <div className="u-prose text-ink-body dark:text-ink-body-dk">
          <p>
            Canvases and maturity models were built for different questions, and they
            share two structural flaws. They run in{" "}
            <strong>reflection mode</strong>: they ask people to assess themselves,
            which works only if you already know what you don&rsquo;t know. And they
            run in <strong>consensus mode</strong>: they are filled in by groups,
            where the highest-paid person&rsquo;s opinion quietly becomes everyone
            else&rsquo;s answer.
          </p>
          <p>
            A canvas completed in a workshop records agreement with authority, not
            truth.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-rule bg-white/60 p-5 dark:border-rule-dk dark:bg-paper-raised-dk">
            <h3 className="text-lg font-semibold">Reflection mode</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
              <strong>Assumes</strong> the person filling it in already knows what
              they don&rsquo;t know. Asked &ldquo;is your data
              decision-grade?&rdquo;, a VP who has never built an ML system will
              honestly answer &ldquo;we have lots of data&rdquo; — and score
              themselves a four.
            </p>
          </div>

          <div className="rounded border border-pass/40 bg-pass-bg/60 p-5 dark:bg-pass-bg-dk">
            <h3 className="text-lg font-semibold">Diagnostic mode</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
              <strong>Demands</strong> evidence you can point at. Instead:
              &ldquo;can you pull, right now, thirty days of the exact data this
              model needs — timestamped, no gaps, no IT ticket?&rdquo; The question
              carries the expertise, so the respondent doesn&rsquo;t have to.
            </p>
          </div>
        </div>
      </Section>

      {/* ---- 03 The blocks -------------------------------------------------- */}
      <Section n="03" title="Ten blocks, three of them gates">
        <div className="u-prose text-ink-body dark:text-ink-body-dk">
          <p>
            Ten blocks, thirty evidence questions. For seven of them, weakness
            degrades the return and can be traded off against strength elsewhere. For
            three — unit economics, data, and adoption — failure does not degrade the
            return. It <strong>voids</strong> it. Those three are gates, and you
            cannot average your way past a foundation that isn&rsquo;t there.
          </p>
        </div>

        <div className="mt-8">
          <TenBlocks />
        </div>

        <h3 className="mt-12 text-lg font-semibold">
          What each block exists to test
        </h3>

        <dl className="mt-4 divide-y divide-rule dark:divide-rule-dk">
          {BLOCKS.map((block) => (
            <div key={block.n} className="py-3 sm:flex sm:gap-6">
              <dt className="flex shrink-0 items-baseline gap-2 sm:w-56">
                <span className="u-sans text-xs tabular-nums text-ink-faint dark:text-ink-muted-dk">
                  {String(block.n).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-ink dark:text-ink-dk">
                  {block.name}
                </span>
                {block.gate && (
                  <span className="u-chip u-chip-fail !text-[9px]">Gate</span>
                )}
              </dt>
              <dd className="mt-1 flex-1 text-sm italic text-ink-body sm:mt-0 dark:text-ink-body-dk">
                {block.core}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---- 04 The Evidence Rule ------------------------------------------- */}
      <Section n="04" title="The Evidence Rule">
        <p className="u-pullquote">
          &ldquo;Yes&rdquo; is not an answer. &ldquo;Yes&rdquo; plus the name of the
          thing is an answer.
        </p>

        <div className="u-prose mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            Every question is answered <span className="u-chip u-chip-pass">Yes</span>{" "}
            <span className="u-chip u-chip-partial">Partially</span> or{" "}
            <span className="u-chip u-chip-fail">No</span> — under one rule. A Yes
            only counts if you can name the artifact that proves it: the document,
            the dashboard, the named person, the date. A Yes with no named artifact
            is recorded as Partially. No exceptions, including for the most senior
            person in the room.
          </p>
          <p>
            The rule works because it changes what kind of claim an answer is. You
            can be optimistic about an opinion. Optimism about a document that does
            not exist is simply a false statement — and people are far more reluctant
            to make one.
          </p>
        </div>

        <div className="mt-8 rounded border border-rule bg-white/60 p-5 dark:border-rule-dk dark:bg-paper-raised-dk">
          <dl className="space-y-2 text-[0.95rem]">
            <div>
              <dt className="u-sans inline text-xs font-bold text-ink-faint dark:text-ink-muted-dk">
                Q:{" "}
              </dt>
              <dd className="inline text-ink-body dark:text-ink-body-dk">
                &ldquo;Is there a named person in finance who has signed off the
                running cost of this system at ten times pilot scale?&rdquo;
              </dd>
            </div>
            <div>
              <dt className="u-sans inline text-xs font-bold text-ink-faint dark:text-ink-muted-dk">
                A:{" "}
              </dt>
              <dd className="inline text-ink-body dark:text-ink-body-dk">
                &ldquo;Yes.&rdquo;
              </dd>
            </div>
            <div>
              <dt className="u-sans inline text-xs font-bold text-ink-faint dark:text-ink-muted-dk">
                Q:{" "}
              </dt>
              <dd className="inline text-ink-body dark:text-ink-body-dk">
                &ldquo;Who — and when did they sign?&rdquo;
              </dd>
            </div>
            <div>
              <dt className="u-sans inline text-xs font-bold text-ink-faint dark:text-ink-muted-dk">
                A:{" "}
              </dt>
              <dd className="inline text-ink-body dark:text-ink-body-dk">
                &ldquo;…I&rsquo;d have to check.&rdquo;
              </dd>
            </div>
          </dl>

          <p className="mt-4 border-t border-rule pt-4 text-sm italic text-ink-muted dark:border-rule-dk dark:text-ink-muted-dk">
            Recorded: <span className="u-chip u-chip-partial">Partially</span>.
            Nothing accusatory has happened — but the answer is now honest.
          </p>
        </div>
      </Section>

      {/* ---- 05 The method --------------------------------------------------- */}
      <Section n="05" title="The method — from one sentence to a verdict">
        <div className="u-prose text-ink-body dark:text-ink-body-dk">
          <p>
            It begins with one sentence, completed by the sponsor before anyone
            answers anything: <em>&ldquo;We are investing — so that — can —,
            measured by —.&rdquo;</em> If the leadership team cannot agree that
            sentence, that is finding number one: a scoping failure discovered in
            five minutes rather than eighteen months.
          </p>
          <p>
            Then <strong>each role answers alone</strong>, before any meeting. That
            independence is not a procedural nicety. It is the entire defence against
            the dynamics of the room. The shift supervisor who knows the downtime
            codes are entered from memory will say so on a private form. They will
            not say so across a table from the plant manager.
          </p>
        </div>

        <div className="mt-8">
          <MethodFlow />
        </div>
      </Section>

      {/* ---- 06 Fault lines --------------------------------------------------- */}
      <Section n="06" title="Fault lines — disagreement as diagnostic">
        <p className="u-pullquote">
          Two organisations can return the same score and face opposite prospects.
          The score does not predict failure. The disagreement does.
        </p>

        <div className="u-prose mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            When two roles answer the same evidence question differently, only two
            things can be true: either the artifact does not exist and someone
            believes it does, or it exists and someone who needs it does not know.
            Both are foundation failures. Both are invisible in an ordinary meeting.
          </p>
        </div>

        <div className="mt-8">
          <FaultLineGrid />
        </div>

        <div className="mt-10 rounded border-l-2 border-ink bg-white/60 p-5 dark:border-ink-dk dark:bg-paper-raised-dk">
          <h3 className="text-base font-semibold">An honest note on that claim</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
            &ldquo;The disagreement predicts failure better than the score&rdquo; is
            the boldest statement in the framework, and today it is a design
            hypothesis — not a validated statistical finding. Field assessments will
            test it, and I will publish what they show, including if it is wrong.
            Note what does not depend on it: private intake is justified on its own
            merits, and a critical fault line is worth surfacing even if its
            predictive power turns out to be weaker than I believe.
          </p>
        </div>
      </Section>

      {/* ---- 07 The verdict ---------------------------------------------------- */}
      <Section n="07" title="A verdict, not a score">
        <div className="u-prose text-ink-body dark:text-ink-body-dk">
          <p>
            Scores get rounded up on the way to the board — a 34 out of 50 becomes
            &ldquo;we scored well on readiness&rdquo; by the third retelling. A
            verdict cannot be rounded. It is also more honest about what the
            diagnostic knows: the difference between 41 and 44 is noise; the
            difference between a passed and a failed data gate is everything.
          </p>
        </div>

        <div className="mt-8">
          <VerdictLogic />
        </div>

        <div className="u-prose mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            Every <em>No</em> becomes a debt item — a piece of foundation the
            investment is borrowing against — with a cost to close, a named owner and
            a deadline. Boards do not intuit &ldquo;readiness gaps.&rdquo; They
            understand debt intimately, including the part where unacknowledged debt
            compounds.
          </p>
          <p>
            And grounding expires. Every verdict carries a ninety-day validity,
            because vendors deprecate models, accountable people rotate, and
            pipelines rot. A readiness assessment with no expiry date becomes
            actively misleading within months.
          </p>
        </div>
      </Section>

      {/* ---- The download ------------------------------------------------------ */}
      <section className="border-t border-rule py-14 sm:py-20 dark:border-rule-dk">
        <div className="u-prose mb-10 text-ink-body dark:text-ink-body-dk">
          <p>
            What is not on this page: the worked example — a €600K predictive
            maintenance investment that scores 51 out of 60 and still fails its data
            gate — and the section listing every objection I currently consider
            serious, including the ones I cannot yet answer.
          </p>
          <p>Both are in the note.</p>
        </div>

        <DownloadGrounded />

        <p className="u-sans mt-10 text-center text-sm italic text-ink-muted dark:text-ink-muted-dk">
          Know what you&rsquo;re building on before you build.
        </p>
      </section>
    </div>
  );
}
