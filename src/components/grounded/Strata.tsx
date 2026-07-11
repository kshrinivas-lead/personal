/**
 * The cover figure from the concept note: the investment sits at ground level,
 * where everyone looks. The three gates are driven down through the strata.
 * A fault line runs through the foundation — the place where roles disagree.
 *
 * Drawn rather than imaged so it stays crisp and reflows. It makes one point:
 * the thing you are looking at is not the thing that decides the outcome.
 */
export function Strata({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      {/* The diagram carries 9–13px labels inside a 760-unit viewBox. Scaled to a
          390px phone that is ~5px type — unreadable. So below ~640px it keeps a
          legible minimum width and scrolls inside its own container instead of
          shrinking. The page itself never scrolls sideways. */}
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-x-visible sm:px-0">
      <svg
        viewBox="0 0 760 352"
        className="h-auto w-full min-w-[600px] sm:min-w-0"
        role="img"
        aria-labelledby="strata-title strata-desc"
      >
        <title id="strata-title">
          The AI investment and the foundation beneath it
        </title>
        <desc id="strata-desc">
          The AI investment sits above ground level, where everyone looks. Below it
          lie the strata of the foundation. Three gate blocks — economics, data and
          adoption — are driven down through them, and a fault line runs between the
          strata where roles disagree.
        </desc>

        {/* The investment — above the line, and the only thing anyone looks at */}
        <rect
          x="290" y="8" width="180" height="46" rx="4"
          className="fill-pass-bg stroke-pass dark:fill-pass-bg-dk"
          strokeWidth="1"
        />
        <text
          x="380" y="36"
          textAnchor="middle"
          className="u-sans fill-pass text-[14px] font-semibold dark:fill-[#7fb894]"
        >
          The AI investment
        </text>

        {/* Ground line */}
        <text
          x="10" y="76"
          className="u-sans fill-ink-faint text-[10px] dark:fill-ink-muted-dk"
        >
          Ground level — where everyone looks
        </text>
        <line
          x1="10" y1="84" x2="750" y2="84"
          className="stroke-rule-strong dark:stroke-rule-dk"
          strokeWidth="1"
        />

        {/* The strata — the seven non-gate blocks. Deliberately unlabelled and
            recessive: the point is that they are undifferentiated from above. */}
        <g className="fill-rule dark:fill-rule-dk" opacity="0.55">
          <rect x="10" y="88" width="740" height="52" />
          <rect x="10" y="146" width="740" height="52" />
          <rect x="10" y="204" width="740" height="52" />
        </g>

        {/* Sits in the gap between the Economics and Data gates (x 204–330).
            Three short lines so it cannot run under either box. */}
        <text
          x="267" y="108"
          textAnchor="middle"
          className="u-sans fill-ink-muted text-[9px] dark:fill-ink-muted-dk"
        >
          the other seven
        </text>
        <text
          x="267" y="120"
          textAnchor="middle"
          className="u-sans fill-ink-muted text-[9px] dark:fill-ink-muted-dk"
        >
          blocks — strata
        </text>
        <text
          x="267" y="132"
          textAnchor="middle"
          className="u-sans fill-ink-muted text-[9px] dark:fill-ink-muted-dk"
        >
          of the foundation
        </text>

        {/* The three gates — driven down through every stratum. They cannot be
            averaged away, and the drawing should not let you average them away. */}
        {[
          { x: 92, label: "Economics" },
          { x: 330, label: "Data" },
          { x: 568, label: "Adoption" },
        ].map((gate) => (
          <g key={gate.label}>
            <rect
              x={gate.x} y="88" width="112" height="212" rx="3"
              className="fill-fail-bg stroke-fail dark:fill-fail-bg-dk"
              strokeWidth="1.25"
            />
            <text
              x={gate.x + 56} y="274"
              textAnchor="middle"
              className="u-sans fill-fail text-[13px] font-semibold dark:fill-[#dd8a84]"
            >
              {gate.label}
            </text>
            <text
              x={gate.x + 56} y="290"
              textAnchor="middle"
              className="u-sans fill-fail text-[9px] tracking-widest uppercase dark:fill-[#dd8a84]"
              opacity="0.75"
            >
              gate
            </text>
          </g>
        ))}

        {/* The fault line — where the roles disagree. Runs through everything. */}
        <path
          d="M470,88 L462,124 L478,152 L458,186 L474,220 L462,252 L470,300"
          className="stroke-fail dark:stroke-[#dd8a84]"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Below the gate boxes (which end at y=300), centred on the fault line,
            so it collides with neither Data nor Adoption. */}
        <text
          x="470" y="322"
          textAnchor="middle"
          className="u-sans fill-fail text-[10px] italic dark:fill-[#dd8a84]"
        >
          a fault line — where roles disagree
        </text>
      </svg>
      </div>

      <figcaption className="u-sans mt-4 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dk">
        The investment is the part everyone examines. The foundation underneath it —
        the data, the economics at scale, the people whose behaviour must change — is
        the part that decides whether it works.
      </figcaption>
    </figure>
  );
}
