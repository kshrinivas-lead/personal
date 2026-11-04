/* Diagrams for the Decision Intelligence article. Colours come from the .dg-* classes in globals.css. */

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

export function GapDiagram() {
  return (
    <Figure
      caption="Both paths start with the same data and the same analysis. The difference is what gets written down at the moment of choosing."
    >
      <svg className="dg-svg" viewBox="0 0 680 324" role="img" aria-label="Two paths from data to decision. On the usual path the choice is made in a room and the story is rebuilt after the outcome. With Decision Intelligence the problem is framed, the choice records alternatives, owner and reasons, and a stranger can retrace it later.">
                <defs>
                  <marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10"/></marker>
                  <marker id="a1o" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah ok" points="0,0 10,5 0,10"/></marker>
                </defs>
      
                <text className="dg-hd" x="16" y="22">How most decisions go</text>
                <rect className="dg-box" x="16" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="28" y="66">Data</text><text className="dg-sb" x="28" y="88">dashboards,</text><text className="dg-sb" x="28" y="104">forecasts</text>
                <rect className="dg-box" x="192" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="204" y="66">Analysis</text><text className="dg-sb" x="204" y="88">rigorous,</text><text className="dg-sb" x="204" y="104">well gathered</text>
                <rect className="dg-box bad" x="368" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="380" y="66">Choice</text><text className="dg-sb" x="380" y="88">made in a room,</text><text className="dg-sb" x="380" y="104">feels right</text>
                <rect className="dg-box ghost" x="544" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="556" y="66">Story</text><text className="dg-sb" x="556" y="88">reconstructed to</text><text className="dg-sb" x="556" y="104">fit the outcome</text>
                <line className="dg-ln" x1="140" y1="84" x2="187" y2="84" markerEnd="url(#a1)"/>
                <line className="dg-ln" x1="316" y1="84" x2="363" y2="84" markerEnd="url(#a1)"/>
                <line className="dg-ln" x1="492" y1="84" x2="539" y2="84" markerEnd="url(#a1)"/>
                <text className="dg-nt" x="428" y="152" textAnchor="middle">No alternatives, owner</text>
                <text className="dg-nt" x="428" y="167" textAnchor="middle">or assumptions kept</text>
      
                <text className="dg-hd" x="16" y="200">With Decision Intelligence</text>
                <rect className="dg-box" x="16" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="28" y="242">Data</text><text className="dg-sb" x="28" y="264">dashboards,</text><text className="dg-sb" x="28" y="280">forecasts</text>
                <rect className="dg-box ok" x="192" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="204" y="242">Framed</text><text className="dg-sb" x="204" y="264">problem and test</text><text className="dg-sb" x="204" y="280">written down</text>
                <rect className="dg-box ok" x="368" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="380" y="242">Decided</text><text className="dg-sb" x="380" y="264">alternatives, owner</text><text className="dg-sb" x="380" y="280">and reasons kept</text>
                <rect className="dg-box ok" x="544" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="556" y="242">Reviewable</text><text className="dg-sb" x="556" y="264">a stranger can</text><text className="dg-sb" x="556" y="280">retrace the logic</text>
                <line className="dg-ln" x1="140" y1="260" x2="187" y2="260" markerEnd="url(#a1)"/>
                <line className="dg-ln ok" x1="316" y1="260" x2="363" y2="260" markerEnd="url(#a1o)"/>
                <line className="dg-ln ok" x1="492" y1="260" x2="539" y2="260" markerEnd="url(#a1o)"/>
              </svg>
    </Figure>
  );
}

export function LoopDiagram() {
  return (
    <Figure
      caption="The four properties are a cycle. Without the return arrow, the fourth step has nothing to feed."
    >
      <svg className="dg-svg" viewBox="0 0 680 236" role="img" aria-label="Four steps in a row: frame, reason, own, check. Each lists what is written down. An arrow from check returns to frame, because what the check finds changes how the next problem is framed.">
                <defs>
                  <marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10"/></marker>
                </defs>
                <rect className="dg-box" x="14" y="24" width="136" height="110" rx="3"/>
                <text className="dg-num" x="26" y="44">01</text><text className="dg-tt" x="26" y="66">Frame</text>
                <text className="dg-sb" x="26" y="88">the problem, the</text><text className="dg-sb" x="26" y="104">success test, the</text><text className="dg-sb" x="26" y="120">real constraints</text>
                <rect className="dg-box" x="186" y="24" width="136" height="110" rx="3"/>
                <text className="dg-num" x="198" y="44">02</text><text className="dg-tt" x="198" y="66">Reason</text>
                <text className="dg-sb" x="198" y="88">alternatives, and</text><text className="dg-sb" x="198" y="104">why each was set</text><text className="dg-sb" x="198" y="120">aside; assumptions</text>
                <rect className="dg-box" x="358" y="24" width="136" height="110" rx="3"/>
                <text className="dg-num" x="370" y="44">03</text><text className="dg-tt" x="370" y="66">Own</text>
                <text className="dg-sb" x="370" y="88">one named person,</text><text className="dg-sb" x="370" y="104">recorded at the</text><text className="dg-sb" x="370" y="120">time of the call</text>
                <rect className="dg-box" x="530" y="24" width="136" height="110" rx="3"/>
                <text className="dg-num" x="542" y="44">04</text><text className="dg-tt" x="542" y="66">Check</text>
                <text className="dg-sb" x="542" y="88">the thinking, not</text><text className="dg-sb" x="542" y="104">just the outcome,</text><text className="dg-sb" x="542" y="120">a year later</text>
                <line className="dg-ln" x1="154" y1="79" x2="181" y2="79" markerEnd="url(#a2)"/>
                <line className="dg-ln" x1="326" y1="79" x2="353" y2="79" markerEnd="url(#a2)"/>
                <line className="dg-ln" x1="498" y1="79" x2="525" y2="79" markerEnd="url(#a2)"/>
                <path className="dg-ln" d="M598 138 V188 H82 V142" markerEnd="url(#a2)"/>
                <text className="dg-sb" x="340" y="212" textAnchor="middle">what the check finds changes how the next problem is framed</text>
              </svg>
    </Figure>
  );
}

export function OutcomeGrid() {
  return (
    <Figure
      caption="An organisation that tracks only outcomes gets two of the four cells wrong, and they are the two that teach the wrong lesson."
    >
      <svg className="dg-svg" viewBox="0 0 560 300" role="img" aria-label="A two by two grid of reasoning quality against outcome. Sound reasoning with a good outcome is earned. Sound reasoning with a bad outcome is unlucky and the method should be kept. Unsound reasoning with a good outcome is lucky and looks like skill. Unsound reasoning with a bad outcome is deserved and the method should be fixed. Tracking only outcomes gets the unlucky and lucky cells wrong.">
                <text className="dg-hd" x="230" y="26" textAnchor="middle">Good outcome</text>
                <text className="dg-hd" x="440" y="26" textAnchor="middle">Bad outcome</text>
                <text className="dg-sb" x="120" y="100" textAnchor="end" fontWeight="600">Sound</text>
                <text className="dg-sb" x="120" y="116" textAnchor="end">reasoning</text>
                <text className="dg-sb" x="120" y="220" textAnchor="end" fontWeight="600">Unsound</text>
                <text className="dg-sb" x="120" y="236" textAnchor="end">reasoning</text>
      
                <rect className="dg-box" x="130" y="40" width="200" height="110" rx="3"/>
                <text className="dg-tt" x="146" y="72">Earned</text><text className="dg-sb" x="146" y="96">Repeat the method.</text>
                <rect className="dg-box warn" x="340" y="40" width="200" height="110" rx="3"/>
                <text className="dg-tt" x="356" y="72">Unlucky</text><text className="dg-sb" x="356" y="96">Keep the method.</text>
                <text className="dg-nt warn" x="356" y="124">Tracking outcomes alone</text><text className="dg-nt warn" x="356" y="139">would punish this.</text>
                <rect className="dg-box bad" x="130" y="160" width="200" height="110" rx="3"/>
                <text className="dg-tt" x="146" y="192">Lucky</text><text className="dg-sb" x="146" y="216">Looks like skill.</text>
                <text className="dg-nt" x="146" y="244">Tracking outcomes alone</text><text className="dg-nt" x="146" y="259">would reward this.</text>
                <rect className="dg-box" x="340" y="160" width="200" height="110" rx="3"/>
                <text className="dg-tt" x="356" y="192">Deserved</text><text className="dg-sb" x="356" y="216">Fix the method.</text>
              </svg>
    </Figure>
  );
}

export function AiPosition() {
  return (
    <Figure
      caption="The same tool in both rows. In the top row it adds to what the person can see before choosing. In the bottom row it replaces the choosing, and the reasoning goes with it."
    >
      <svg className="dg-svg" viewBox="0 0 680 324" role="img" aria-label="Two ways of using AI in a decision. In the first, AI adds missing context, new framings and knock-on effects, then a person weighs visible options and makes a named choice with the reasoning on record. In the second, AI recommends one answer with hidden reasoning and the answer is accepted with nobody able to say why it made sense.">
                <defs>
                  <marker id="a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah" points="0,0 10,5 0,10"/></marker>
                  <marker id="a4o" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah ok" points="0,0 10,5 0,10"/></marker>
                  <marker id="a4b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon className="dg-ah bad" points="0,0 10,5 0,10"/></marker>
                </defs>
      
                <text className="dg-hd" x="16" y="22">AI widens what the person sees</text>
                <rect className="dg-box" x="16" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="28" y="66">Question</text><text className="dg-sb" x="28" y="88">what is being</text><text className="dg-sb" x="28" y="104">decided</text>
                <rect className="dg-box" x="192" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="204" y="62">AI adds</text><text className="dg-sb" x="204" y="82">missing context,</text><text className="dg-sb" x="204" y="98">new framings,</text><text className="dg-sb" x="204" y="114">knock-on effects</text>
                <rect className="dg-box ok" x="368" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="380" y="66">Person weighs</text><text className="dg-sb" x="380" y="88">options and</text><text className="dg-sb" x="380" y="104">reasons, all visible</text>
                <rect className="dg-box ok" x="544" y="36" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="556" y="66">Named choice</text><text className="dg-sb" x="556" y="88">reasoning is</text><text className="dg-sb" x="556" y="104">on the record</text>
                <line className="dg-ln" x1="140" y1="84" x2="187" y2="84" markerEnd="url(#a4)"/>
                <line className="dg-ln" x1="316" y1="84" x2="363" y2="84" markerEnd="url(#a4)"/>
                <line className="dg-ln ok" x1="492" y1="84" x2="539" y2="84" markerEnd="url(#a4o)"/>
      
                <text className="dg-hd" x="16" y="200">AI supplies the choice</text>
                <rect className="dg-box" x="16" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="28" y="242">Question</text><text className="dg-sb" x="28" y="264">what is being</text><text className="dg-sb" x="28" y="280">decided</text>
                <rect className="dg-box" x="192" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="204" y="242">AI decides</text><text className="dg-sb" x="204" y="264">recommends one</text><text className="dg-sb" x="204" y="280">answer</text>
                <rect className="dg-box bad ghost" x="368" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="380" y="242">Logic hidden</text><text className="dg-sb" x="380" y="264">confident, fast,</text><text className="dg-sb" x="380" y="280">uninspectable</text>
                <rect className="dg-box bad" x="544" y="212" width="120" height="96" rx="3"/>
                <text className="dg-tt" x="556" y="242">Accepted</text><text className="dg-sb" x="556" y="264">nobody can say why</text><text className="dg-sb" x="556" y="280">it made sense</text>
                <line className="dg-ln" x1="140" y1="260" x2="187" y2="260" markerEnd="url(#a4)"/>
                <line className="dg-ln bad" x1="316" y1="260" x2="363" y2="260" markerEnd="url(#a4b)"/>
                <line className="dg-ln bad" x1="492" y1="260" x2="539" y2="260" markerEnd="url(#a4b)"/>
              </svg>
    </Figure>
  );
}

