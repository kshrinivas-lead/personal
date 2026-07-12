import Link from "next/link";
import { TOOLKIT, type Artifact } from "@/content/grounded";
import { TOOLKIT_DIR } from "@/config";

/* ---------------------------------------------------------------------------
   The Practice Toolkit, drawn as the thing it actually is: a sequence.

   A table would have been easier and would have said the wrong thing — that
   these are eight documents you might browse. They are eight *stages* you run
   in order, so the artifacts hang off a timeline spine and the stage label is
   the first thing read, before the filename.

   Every panel is a native <details>: closed, the page stays a clean list of
   eight lines; open, it is the full working brief for that artifact. No JS, no
   hydration, and it survives static export untouched.
   --------------------------------------------------------------------------- */

function FormatChip({ format }: { format: Artifact["format"] }) {
  return (
    <span
      className={`u-chip !text-[10px] ${
        format === "Excel" ? "u-chip-pass" : "u-chip-partial"
      }`}
    >
      {format}
    </span>
  );
}

function Row({ artifact }: { artifact: Artifact }) {
  const href = `${TOOLKIT_DIR}/${artifact.file}`;

  return (
    <li className="relative pl-8 sm:pl-10">
      {/* The node on the spine. Facilitator-only artifacts are filled — they
          never leave the facilitator's hands, and the figure says so. */}
      <span
        aria-hidden="true"
        className={`absolute left-[9px] top-[0.6rem] h-[9px] w-[9px] -translate-x-1/2 rotate-45 border sm:left-[13px] ${
          artifact.restricted
            ? "border-ink bg-ink dark:border-ink-dk dark:bg-ink-dk"
            : "border-rule-strong bg-paper dark:border-ink-muted-dk dark:bg-paper-dk"
        }`}
      />

      <details className="group border-b border-rule py-4 dark:border-rule-dk">
        <summary className="flex cursor-pointer list-none items-baseline gap-3 [&::-webkit-details-marker]:hidden">
          <span className="u-sans shrink-0 text-xs tabular-nums text-ink-faint dark:text-ink-muted-dk">
            {String(artifact.n).padStart(2, "0")}
          </span>

          <span className="flex-1">
            <span className="u-sans mb-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-muted dark:text-ink-muted-dk">
              {artifact.stage}
            </span>

            <span className="block font-semibold text-ink group-hover:underline group-hover:decoration-rule-strong group-hover:underline-offset-4 dark:text-ink-dk">
              {artifact.name}
            </span>

            <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
              <FormatChip format={artifact.format} />
              <span className="u-sans text-xs text-ink-faint dark:text-ink-muted-dk">
                {artifact.holder}
              </span>
            </span>
          </span>

          {/* The affordance. Rotates to a × when open — no library, no script. */}
          <span
            aria-hidden="true"
            className="u-sans mt-1 shrink-0 select-none text-lg leading-none text-ink-faint transition-transform duration-200 group-open:rotate-45 dark:text-ink-muted-dk"
          >
            +
          </span>
        </summary>

        <div className="mt-4 sm:pl-8">
          <p className="u-measure text-ink-body dark:text-ink-body-dk">
            {artifact.purpose}
          </p>

          <p className="u-eyebrow mt-6">What it carries</p>
          <ul className="mt-3 space-y-2">
            {artifact.carries.map((concept) => (
              <li
                key={concept}
                className="u-measure border-l border-rule pl-4 text-[0.95rem] leading-relaxed text-ink-body dark:border-rule-dk dark:text-ink-body-dk"
              >
                {concept}
              </li>
            ))}
          </ul>

          <p className="u-measure mt-6 border-l-2 border-ink pl-4 text-[0.95rem] italic leading-relaxed text-ink dark:border-ink-dk dark:text-ink-dk">
            {artifact.tip}
          </p>

          <a
            href={href}
            download
            className="u-sans mt-6 inline-flex items-center gap-2 rounded border border-rule-strong px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper dark:border-rule-dk dark:text-ink-dk dark:hover:border-ink-dk dark:hover:bg-ink-dk dark:hover:text-paper-dk"
          >
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 11.586V3a1 1 0 0 1 1-1ZM3 15a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z" />
            </svg>
            Download <span className="font-normal">{artifact.file}</span>
          </a>
        </div>
      </details>
    </li>
  );
}

function Track({
  label,
  note,
  artifacts,
}: {
  label: string;
  note: string;
  artifacts: readonly Artifact[];
}) {
  return (
    <div>
      <div className="mb-4 sm:pl-10">
        <p className="u-eyebrow">{label}</p>
        <p className="u-measure u-sans mt-1 text-sm text-ink-muted dark:text-ink-muted-dk">
          {note}
        </p>
      </div>

      {/* The spine. It stops at the last node rather than running past it —
          the sequence ends at the report, and a rule trailing into space would
          imply otherwise. */}
      <ol className="relative">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[9px] top-2 w-px bg-rule sm:left-[13px] dark:bg-rule-dk"
        />
        {artifacts.map((artifact) => (
          <Row key={artifact.n} artifact={artifact} />
        ))}
      </ol>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   The teaser that stands in for the toolkit on the concept-note page.

   It lists all eight names rather than saying "eight artifacts are available",
   because the entire claim being made — that this ships complete — is only
   credible if you can see the manifest. A button that says "learn more" would
   be asking for trust the page has not yet earned.
   --------------------------------------------------------------------------- */
export function ToolkitTeaser() {
  return (
    <div className="mt-8 rounded border border-rule bg-white/60 p-6 sm:p-8 dark:border-rule-dk dark:bg-paper-raised-dk">
      <ol className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
        {TOOLKIT.map((artifact) => (
          <li
            key={artifact.n}
            className="flex items-baseline gap-2.5 border-b border-rule pb-2.5 text-sm dark:border-rule-dk"
          >
            <span className="u-sans shrink-0 text-xs tabular-nums text-ink-faint dark:text-ink-muted-dk">
              {String(artifact.n).padStart(2, "0")}
            </span>
            <span className="flex-1 text-ink dark:text-ink-dk">
              {artifact.name}
            </span>
            <span className="u-sans shrink-0 text-[10px] uppercase tracking-wider text-ink-faint dark:text-ink-muted-dk">
              {artifact.format}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link
          href="/grounded/toolkit"
          className="u-sans inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
        >
          Open the toolkit
          <span aria-hidden="true">→</span>
        </Link>

        <p className="u-sans text-xs text-ink-faint dark:text-ink-muted-dk">
          Each artifact, what it carries, and how to run it. Free and editable.
        </p>
      </div>
    </div>
  );
}

export function Toolkit() {
  const assessment = TOOLKIT.filter((a) => a.track === "assessment");
  const product = TOOLKIT.filter((a) => a.track === "product");

  return (
    <div className="space-y-12">
      <Track
        label="The assessment · roughly two weeks elapsed"
        note="Six artifacts, run in sequence. From the engagement letter to the board one-pager."
        artifacts={assessment}
      />
      <Track
        label="The product path · a separate entry point"
        note="The Scan discovers where AI should touch a product. The Question Map translates the assessment for a specific capability on the roadmap."
        artifacts={product}
      />
    </div>
  );
}
