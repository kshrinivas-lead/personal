/* Diagrams for the org-design article. Colours come from the .dg-* classes in globals.css. */

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

const DEPTS = [
  { name: "Sales", a: "quote and", b: "order capture" },
  { name: "Planning", a: "promising and", b: "scheduling" },
  { name: "Production", a: "manufacturing", b: "" },
  { name: "Quality", a: "inspection", b: "and release" },
  { name: "Logistics", a: "pick, pack,", b: "dispatch" },
  { name: "Finance", a: "invoicing and", b: "collections" },
];

/* x of the i-th of six 98-wide columns on a 680-wide canvas */
const col = (i: number) => 16 + i * 111;

export function StepsNotOrder() {
  return (
    <Figure caption="Every box can show it did its job. The customer still waited, and the chart has no place where that is anyone's problem.">
      <svg className="dg-svg" viewBox="0 0 680 236" role="img" aria-label="One customer order passes through six departments: Sales, Planning, Production, Quality, Logistics and Finance. Each department answers for its own step and its own numbers look fine. Underneath, a dashed box shows the order itself, which arrived late, with no one accountable for it.">
        <defs>
          <marker id="o1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10" /></marker>
        </defs>
        <text className="dg-hd" x="16" y="22">Each department answers for its step</text>
        {DEPTS.map((d, i) => (
          <g key={d.name}>
            <rect className="dg-box" x={col(i)} y="36" width="98" height="84" rx="3" />
            <text className="dg-tt" x={col(i) + 10} y="62">{d.name}</text>
            <text className="dg-sb" x={col(i) + 10} y="84">{d.a}</text>
            <text className="dg-sb" x={col(i) + 10} y="100">{d.b}</text>
            {i < 5 && (
              <line className="dg-ln" x1={col(i) + 100} y1="78" x2={col(i) + 109} y2="78" markerEnd="url(#o1)" />
            )}
          </g>
        ))}

        <text className="dg-hd" x="16" y="154">Nobody answers for the whole</text>
        <rect className="dg-box bad ghost" x="16" y="166" width="653" height="54" rx="3" />
        <text className="dg-tt" x="28" y="190">The order</text>
        <text className="dg-sb" x="28" y="208">arrived late. Every step looked fine, and no one owns the result.</text>
      </svg>
    </Figure>
  );
}

export function RolesSplit() {
  return (
    <Figure caption="Most ownership confusion comes from blurring these two. A large function answers for outcomes, a small one for execution.">
      <svg className="dg-svg" viewBox="0 0 680 184" role="img" aria-label="Two distinct roles. The accountable owner is assigned on every function, usually the head of the department for a small function and a named process owner for a larger one, and answers for the outcome. The department that does the work is assigned only on the smallest functions and answers for how the work is done.">
        <rect className="dg-box ok" x="16" y="16" width="324" height="152" rx="3" />
        <text className="dg-num" x="30" y="40">ACCOUNTABLE OWNER</text>
        <text className="dg-tt" x="30" y="66">Answers for the result</text>
        <text className="dg-sb" x="30" y="92">Assigned on every function.</text>
        <text className="dg-sb" x="30" y="110">Small function: head of the department.</text>
        <text className="dg-sb" x="30" y="128">Larger function: a named process owner,</text>
        <text className="dg-sb" x="30" y="146">a role rather than a department.</text>

        <rect className="dg-box" x="356" y="16" width="308" height="152" rx="3" />
        <text className="dg-num" x="370" y="40">DEPARTMENT DOING THE WORK</text>
        <text className="dg-tt" x="370" y="66">Answers for the execution</text>
        <text className="dg-sb" x="370" y="92">Assigned only on the smallest functions.</text>
        <text className="dg-sb" x="370" y="110">Stays accountable for how the work</text>
        <text className="dg-sb" x="370" y="128">is done.</text>
      </svg>
    </Figure>
  );
}

export function FunctionTree() {
  return (
    <Figure caption="The departments and their heads are unchanged. What is new is the top box: the order now has someone to answer for it.">
      <svg className="dg-svg" viewBox="0 0 680 318" role="img" aria-label="Order-to-Cash with a named process owner at the top, broken into six functions: Quote and Order Capture done by Sales, Order Promising done by Planning, Manufacture done by Production, Final Release done by Quality, Dispatch done by Logistics, and Invoice and Collect done by Finance.">
        <defs>
          <marker id="o3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah ok" points="0,0 10,5 0,10" /></marker>
        </defs>
        <rect className="dg-box ok" x="215" y="16" width="250" height="68" rx="3" />
        <text className="dg-tt" x="340" y="44" textAnchor="middle">Order-to-Cash</text>
        <text className="dg-sb" x="340" y="66" textAnchor="middle">owner: a named process owner</text>

        <path className="dg-ln" d="M340 84 V108 M65 108 H620" />
        {DEPTS.map((_, i) => (
          <line key={i} className="dg-ln" x1={col(i) + 49} y1="108" x2={col(i) + 49} y2="128" />
        ))}

        {[
          ["Quote &", "order capture"],
          ["Order", "promising"],
          ["Manufacture", ""],
          ["Final", "release"],
          ["Dispatch", ""],
          ["Invoice", "& collect"],
        ].map(([a, b], i) => (
          <g key={a}>
            <rect className="dg-box" x={col(i)} y="128" width="98" height="64" rx="3" />
            <text className="dg-sb" x={col(i) + 10} y={b ? 154 : 164} fontWeight="600">{a}</text>
            {b && <text className="dg-sb" x={col(i) + 10} y="172" fontWeight="600">{b}</text>}
          </g>
        ))}

        {DEPTS.map((d, i) => (
          <g key={d.name}>
            <line className="dg-ln ok" x1={col(i) + 49} y1="194" x2={col(i) + 49} y2="238" markerEnd="url(#o3)" />
            <rect className="dg-box" x={col(i)} y="242" width="98" height="40" rx="3" />
            <text className="dg-sb" x={col(i) + 49} y="267" textAnchor="middle" fontWeight="600">by {d.name}</text>
          </g>
        ))}
        <text className="dg-nt warn" x="340" y="306" textAnchor="middle">Reporting lines are not redrawn. This is a second way of seeing the same work.</text>
      </svg>
    </Figure>
  );
}

export function QualityAcross() {
  return (
    <Figure caption="A department chart shows Quality once. A function view shows the three places where it does different work.">
      <svg className="dg-svg" viewBox="0 0 680 188" role="img" aria-label="The Quality department appears in three processes doing different things: incoming inspection under Procure-to-Pay, final release under Order-to-Cash, and design validation under New Product Development.">
        <text className="dg-hd" x="16" y="22">Quality: one department, three functions</text>
        {[
          ["Procure-to-Pay", "Incoming inspection"],
          ["Order-to-Cash", "Final release"],
          ["New Product Development", "Design validation"],
        ].map(([proc, fn], i) => {
          const x = 16 + i * 220;
          return (
            <g key={proc}>
              <rect className="dg-box" x={x} y="36" width="208" height="112" rx="3" />
              <text className="dg-num" x={x + 14} y="60">PROCESS</text>
              <text className="dg-tt" x={x + 14} y="82" style={{ fontSize: 13 }}>{proc}</text>
              <rect className="dg-box ok" x={x + 14} y="98" width="180" height="38" rx="3" />
              <text className="dg-sb" x={x + 26} y="122" fontWeight="600">{fn}</text>
            </g>
          );
        })}
        <text className="dg-sb" x="340" y="174" textAnchor="middle">Same department, same standards, different job in each flow.</text>
      </svg>
    </Figure>
  );
}
