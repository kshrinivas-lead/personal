/* Diagrams for the structural-tension article. Colours come from the .dg-* classes in globals.css. */

function Figure({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="mt-10">
      <div className="overflow-x-auto">{children}</div>
      <figcaption className="u-sans u-measure mt-3 text-sm text-ink-muted dark:text-ink-muted-dk">
        {caption}
      </figcaption>
    </figure>
  );
}

const STAGES = [
  ["1 Vision", "the result"],
  ["2 Reality", "honest facts"],
  ["3 Structure", "ranked goals"],
  ["4 People", "shared tension"],
  ["5 Action", "chart + rhythm"],
];

/* x of the i-th of five 116-wide boxes on a 680-wide canvas */
const sx = (i: number) => 16 + i * 133;

export function StageCycle() {
  return (
    <Figure caption="The framework cycle: five stages, with a quarterly loop. The vision stays fixed while current reality and actions are refreshed each quarter; the tension between them does the pulling.">
      <svg className="dg-svg" viewBox="0 0 680 214" role="img" aria-label="Five stages in sequence: 1 Vision, the result; 2 Reality, honest facts; 3 Structure, ranked goals; 4 People, shared tension; 5 Action, chart and rhythm. A loop runs from Action back to Reality every quarter to refresh reality and adjust actions. Vision, structure and people are revisited yearly, or when something big changes.">
        <defs>
          <marker id="tc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10" /></marker>
        </defs>
        <text className="dg-hd" x="16" y="22">Hold the vision steady; refresh reality and action every quarter</text>
        {STAGES.map(([t, s], i) => (
          <g key={t}>
            <rect className={i === 0 ? "dg-box ok" : "dg-box"} x={sx(i)} y="44" width="116" height="62" rx="3" />
            <text className="dg-tt" x={sx(i) + 58} y="70" textAnchor="middle">{t}</text>
            <text className="dg-sb" x={sx(i) + 58} y="91" textAnchor="middle">{s}</text>
            {i < 4 && (
              <line className="dg-ln" x1={sx(i) + 118} y1="75" x2={sx(i) + 131} y2="75" markerEnd="url(#tc1)" />
            )}
          </g>
        ))}
        <path className="dg-ln" d={`M${sx(4) + 58} 106 V160 H${sx(1) + 58} V110`} markerEnd="url(#tc1)" />
        <text className="dg-sb" x={(sx(1) + sx(4)) / 2 + 58} y="150" textAnchor="middle">
          every quarter: refresh reality, adjust actions
        </text>
        <text className="dg-sb" x="16" y="198">
          Vision, structure and people: revisit yearly, or when something big changes
        </text>
      </svg>
    </Figure>
  );
}

export function OscillatingAdvancing() {
  return (
    <Figure caption="Oscillating vs. advancing structure. With equal goals, each initiative fixes one pressure and strengthens the other. With one goal primary, the secondary goal serves it and progress compounds.">
      <svg className="dg-svg" viewBox="0 0 680 318" role="img" aria-label="Two panels. Left, oscillating: growth and cost control are ranked equal and push back and forth; with no ranking, whichever hurts most wins, and a zigzag line shows gains then reversals with no net progress. Right, advancing: profitable growth is primary and cost discipline serves it; a staircase line shows each gain building on the last.">
        <defs>
          <marker id="tc2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10" /></marker>
        </defs>
        <text className="dg-hd" x="16" y="22">Ranking goals turns oscillation into advance</text>

        {/* Oscillating */}
        <rect className="dg-box" x="16" y="38" width="316" height="264" rx="3" />
        <text className="dg-tt" x="30" y="64">Oscillating: goals ranked equal</text>
        <rect className="dg-box" x="34" y="82" width="104" height="42" rx="3" />
        <text className="dg-sb" x="86" y="107" textAnchor="middle" fontWeight="600">Growth</text>
        <rect className="dg-box" x="206" y="82" width="108" height="42" rx="3" />
        <text className="dg-sb" x="260" y="107" textAnchor="middle" fontWeight="600">Cost control</text>
        <line className="dg-ln" x1="140" y1="96" x2="203" y2="96" markerEnd="url(#tc2)" />
        <line className="dg-ln" x1="204" y1="110" x2="141" y2="110" markerEnd="url(#tc2)" />
        <text className="dg-sb" x="174" y="150" textAnchor="middle">no ranking: whichever hurts most wins</text>
        <line className="dg-ln dash" x1="40" y1="212" x2="310" y2="212" strokeWidth="1" />
        <polyline className="dg-ln warn" strokeWidth="2.2" points="40,244 85,180 130,244 175,180 220,244 265,180 310,244" />
        <text className="dg-sb" x="174" y="282" textAnchor="middle">gains, then reversals: no net progress</text>

        {/* Advancing */}
        <rect className="dg-box" x="348" y="38" width="316" height="264" rx="3" />
        <text className="dg-tt" x="362" y="64">Advancing: one goal is primary</text>
        <rect className="dg-box ok" x="376" y="80" width="260" height="38" rx="3" />
        <text className="dg-sb" x="506" y="104" textAnchor="middle" fontWeight="600">Primary: profitable growth</text>
        <line className="dg-ln" x1="506" y1="152" x2="506" y2="121" markerEnd="url(#tc2)" />
        <text className="dg-sb" x="514" y="141">serves</text>
        <rect className="dg-box" x="424" y="152" width="164" height="38" rx="3" />
        <text className="dg-sb" x="506" y="176" textAnchor="middle" fontWeight="600">Cost discipline</text>
        <polyline className="dg-ln ok" strokeWidth="2.2" points="372,260 422,260 422,245 472,245 472,230 522,230 522,215 572,215 572,200 640,200" />
        <text className="dg-sb" x="506" y="282" textAnchor="middle">each gain builds on the last</text>
      </svg>
    </Figure>
  );
}

const STEPS = [4, 3, 2, 1];
const TEAM = ["Team step c", "Team step b", "Team step a"];

export function TensionChart() {
  return (
    <Figure caption="Structural tension chart, with one telescoped team chart. Read the chart from the bottom up: each completed step changes current reality and narrows the gap to the vision.">
      <svg className="dg-svg" viewBox="0 0 680 372" role="img" aria-label="A structural tension chart. At the top, the vision: the result, with a date and markers. At the bottom, current reality: facts against each vision marker. Between them, action steps 1 to 4, each with an owner and a date. Tension pulls upward toward the vision. Action step 2 telescopes into a team chart whose vision is action step 2, with team steps a to c and the team's current reality at the bottom.">
        <defs>
          <marker id="tc3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10" /></marker>
        </defs>
        <text className="dg-hd" x="16" y="22">Each action step closes the gap and can become a team chart</text>

        {/* Tension arrow */}
        <line className="dg-ln" x1="30" y1="352" x2="30" y2="44" markerEnd="url(#tc3)" />
        <text className="dg-sb" x="22" y="200" textAnchor="middle" transform="rotate(-90 22 200)">
          tension pulls toward the vision
        </text>

        {/* Main chart */}
        <rect className="dg-box ok" x="50" y="40" width="308" height="58" rx="3" />
        <text className="dg-tt" x="204" y="65" textAnchor="middle">Vision (top)</text>
        <text className="dg-sb" x="204" y="86" textAnchor="middle">the result, with a date and markers</text>
        {STEPS.map((n, i) => (
          <g key={n}>
            <rect className="dg-box" x="50" y={110 + i * 44} width="308" height="34" rx="3" />
            <text className="dg-sb" x="204" y={132 + i * 44} textAnchor="middle">
              Action step {n} · owner · date
            </text>
          </g>
        ))}
        <rect className="dg-box ghost" x="50" y="294" width="308" height="58" rx="3" />
        <text className="dg-tt" x="204" y="319" textAnchor="middle">Current reality (bottom)</text>
        <text className="dg-sb" x="204" y="340" textAnchor="middle">facts against each vision marker</text>

        {/* Telescope from action step 2 (index 2) */}
        <line className="dg-ln dash" x1="360" y1="215" x2="430" y2="215" markerEnd="url(#tc3)" />
        <text className="dg-sb" x="395" y="206" textAnchor="middle">telescope</text>

        {/* Team chart */}
        <rect className="dg-box" x="436" y="118" width="228" height="234" rx="3" />
        <text className="dg-tt" x="450" y="144">Team chart</text>
        <rect className="dg-box ok" x="448" y="158" width="204" height="32" rx="3" />
        <text className="dg-sb" x="550" y="178" textAnchor="middle">Vision = action step 2</text>
        {TEAM.map((t, i) => (
          <g key={t}>
            <rect className="dg-box" x="448" y={198 + i * 36} width="204" height="28" rx="3" />
            <text className="dg-sb" x="550" y={216 + i * 36} textAnchor="middle">{t} · owner · date</text>
          </g>
        ))}
        <rect className="dg-box ghost" x="448" y="306" width="204" height="32" rx="3" />
        <text className="dg-sb" x="550" y="326" textAnchor="middle">Team current reality</text>
      </svg>
    </Figure>
  );
}
