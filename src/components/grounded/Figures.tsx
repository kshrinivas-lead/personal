import { BLOCKS } from "@/content/grounded";

/* ---------------------------------------------------------------------------
   The ten blocks. Gates are marked and never averaged. Rendered as a grid of
   cards rather than an SVG so the text reflows and stays selectable.
   --------------------------------------------------------------------------- */
export function TenBlocks() {
  return (
    <div>
      <ol className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5">
        {BLOCKS.map((block) => (
          <li
            key={block.n}
            className={`rounded border p-3 ${
              block.gate
                ? "border-fail bg-fail-bg dark:bg-fail-bg-dk"
                : "border-rule bg-white/50 dark:border-rule-dk dark:bg-paper-raised-dk"
            }`}
          >
            <div className="flex items-start justify-between gap-1">
              <span
                className={`u-sans text-lg font-semibold tabular-nums ${
                  block.gate
                    ? "text-fail dark:text-[#dd8a84]"
                    : "text-ink-faint dark:text-ink-muted-dk"
                }`}
              >
                {String(block.n).padStart(2, "0")}
              </span>
              {block.gate && (
                <span className="u-sans rounded-sm bg-fail px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                  Gate
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-semibold leading-snug text-ink dark:text-ink-dk">
              {block.name}
            </p>
            <p className="u-sans mt-1.5 text-[10px] uppercase tracking-wider text-ink-faint dark:text-ink-muted-dk">
              {block.theme}
            </p>
          </li>
        ))}
      </ol>

      <p className="u-sans mt-4 flex items-start gap-2 text-xs text-ink-muted dark:text-ink-muted-dk">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-block h-3 w-6 shrink-0 rounded-sm border border-fail bg-fail-bg dark:bg-fail-bg-dk"
        />
        <span>
          A gate block. Two or more <em>No</em> answers fail the gate and cap the
          verdict — no amount of excellence elsewhere can average it away.
        </span>
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   The method: one sentence to a verdict, and the 90-day loop back to the start.
   Horizontal on desktop; stacks to a vertical spine on mobile.
   --------------------------------------------------------------------------- */
const STEPS = [
  { title: "Statement", detail: "one sentence, agreed" },
  { title: "Private intake", detail: "each role, alone" },
  { title: "Fault lines", detail: "where roles differ" },
  { title: "Verdict", detail: "grounded / not / why" },
  { title: "Debt register", detail: "gaps, owned, dated" },
];

export function MethodFlow() {
  return (
    <figure>
      <ol className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded border border-rule bg-white/60 p-3 dark:border-rule-dk dark:bg-paper-raised-dk"
          >
            <span className="u-sans text-[10px] font-semibold tabular-nums text-ink-faint dark:text-ink-muted-dk">
              {i + 1}
            </span>
            <p className="text-sm font-semibold text-ink dark:text-ink-dk">
              {step.title}
            </p>
            <p className="u-sans mt-0.5 text-xs text-ink-muted dark:text-ink-muted-dk">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
      <figcaption className="u-sans mt-3 border-l-2 border-fail pl-3 text-xs italic text-fail dark:text-[#dd8a84]">
        Re-grounded every ninety days — grounding expires, because readiness decays.
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------------------
   The fault line. Four roles, ten blocks. The average barely moves; the
   prognosis moves entirely. This is the single most persuasive figure in the
   note, so it is reproduced exactly.
   --------------------------------------------------------------------------- */
type Answer = "y" | "p" | "n";

const MATRIX: { role: string; answers: Answer[] }[] = [
  { role: "CFO",             answers: ["y","y","y","p","y","y","y","p","y","y"] },
  { role: "Plant manager",   answers: ["y","p","y","y","y","y","p","y","y","p"] },
  { role: "IT / OT lead",    answers: ["y","y","p","y","n","y","y","y","p","y"] },
  { role: "Shift supervisor",answers: ["y","y","y","p","n","y","p","y","y","y"] },
];

const CELL: Record<Answer, string> = {
  y: "bg-pass-bg border-pass/30 dark:bg-pass-bg-dk dark:border-pass/40",
  p: "bg-partial-bg border-partial/30 dark:bg-partial-bg-dk dark:border-partial/40",
  n: "bg-fail-bg border-fail dark:bg-fail-bg-dk",
};

const LABEL: Record<Answer, string> = {
  y: "Yes — evidence named",
  p: "Partially",
  n: "No",
};

export function FaultLineGrid() {
  return (
    <figure>
      {/* No min-width and no scroll container. A table's intrinsic width escapes
          an overflow-x ancestor and forces the whole document to scroll sideways,
          so the matrix is built to fit instead: `table-fixed` lets the ten cells
          shrink, and the whole thing clears 320px. */}
      <div>
        <table className="w-full table-fixed border-separate border-spacing-1">
          <caption className="sr-only">
            Answers by role across the ten blocks. On block 5, the two roles closest
            to the data answer No while the two roles who approved the budget answer
            Yes — a critical fault line.
          </caption>
          <thead>
            <tr>
              <th className="w-[74px] sm:w-28" />
              {Array.from({ length: 10 }, (_, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`u-sans pb-1 text-center text-[10px] font-medium tabular-nums ${
                    i === 4
                      ? "text-fail dark:text-[#dd8a84]"
                      : "text-ink-faint dark:text-ink-muted-dk"
                  }`}
                >
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX.map((row) => (
              <tr key={row.role}>
                <th
                  scope="row"
                  className="u-sans w-[74px] pr-1.5 text-right text-[10px] font-normal leading-tight text-ink-muted sm:w-28 sm:pr-2 sm:text-[11px] dark:text-ink-muted-dk"
                >
                  {row.role}
                </th>
                {row.answers.map((answer, i) => (
                  <td key={i} className="p-0">
                    <div
                      className={`h-7 w-full rounded-sm border ${CELL[answer]} ${
                        i === 4 ? "border-dashed" : ""
                      }`}
                    >
                      <span className="sr-only">
                        Block {i + 1}: {LABEL[answer]}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="u-sans mt-4 space-y-2 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dk">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="u-chip u-chip-pass">Yes</span>
          <span className="u-chip u-chip-partial">Partially</span>
          <span className="u-chip u-chip-fail">No</span>
        </p>
        <p>
          <strong className="font-semibold text-fail dark:text-[#dd8a84]">
            Block 5 — a critical fault line.
          </strong>{" "}
          The roles closest to the data say No. The roles who approved the budget say
          Yes. The average score barely moves. The prognosis moves entirely.
        </p>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------------------
   The verdict. Three values, because anything roundable gets rounded.
   --------------------------------------------------------------------------- */
const VERDICTS = [
  {
    name: "Grounded",
    rule: "Score ≥ 48 · all gates pass · no critical split",
    chip: "u-chip-pass",
    border: "border-pass/40",
  },
  {
    name: "Conditionally Grounded",
    rule: "Any failed gate or critical split, or a score of 30–47",
    chip: "u-chip-partial",
    border: "border-partial/40",
  },
  {
    name: "Ungrounded",
    rule: "Two failed gates, or a score under 30",
    chip: "u-chip-fail",
    border: "border-fail/40",
  },
];

export function VerdictLogic() {
  return (
    <ul className="grid gap-2 sm:grid-cols-3">
      {VERDICTS.map((verdict) => (
        <li
          key={verdict.name}
          className={`rounded border ${verdict.border} p-4`}
        >
          <span className={`u-chip ${verdict.chip}`}>{verdict.name}</span>
          <p className="u-sans mt-2 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dk">
            {verdict.rule}
          </p>
        </li>
      ))}
    </ul>
  );
}
