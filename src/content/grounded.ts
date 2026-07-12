/** The ten blocks, verbatim from Grounded — Concept Note v1.0, Section 04. */
export const BLOCKS = [
  {
    n: 1,
    name: "Problem & opportunity",
    theme: "Business",
    gate: false,
    core: "What decision is slow, expensive, or inconsistent — and is AI load-bearing here, or decorative?",
  },
  {
    n: 2,
    name: "Value proposition",
    theme: "Business",
    gate: false,
    core: "What will a specific user be able to do that no non-AI alternative allows — not faster, but at all?",
  },
  {
    n: 3,
    name: "Value capture & unit economics",
    theme: "Market",
    gate: true,
    core: "How does value reach the P&L — and does the margin survive at ten times the usage?",
  },
  {
    n: 4,
    name: "Build / buy / orchestrate",
    theme: "Technical",
    gate: false,
    core: "What is owned versus rented — and what breaks when a rented component is discontinued?",
  },
  {
    n: 5,
    name: "Data & context",
    theme: "Technical",
    gate: true,
    core: "Is the data decision-grade — or merely connected? Who owns its quality, by name?",
  },
  {
    n: 6,
    name: "Moat & strategy",
    theme: "Business",
    gate: false,
    core: "What sustains advantage when every competitor can call the same API?",
  },
  {
    n: 7,
    name: "Adoption & change",
    theme: "Market",
    gate: true,
    core: "Whose behaviour must change, why would they, and what happens the first time the AI is wrong?",
  },
  {
    n: 8,
    name: "Governance & risk",
    theme: "Risk",
    gate: false,
    core: "Who is liable when it's wrong — and what is the worst plausible failure?",
  },
  {
    n: 9,
    name: "Evaluation & quality",
    theme: "Quality",
    gate: false,
    core: "How is silent degradation caught in production — and by whom?",
  },
  {
    n: 10,
    name: "Sustainability & ops",
    theme: "Quality",
    gate: false,
    core: "Who owns the system when it degrades — and what happens when the model is deprecated?",
  },
] as const;

/** ---------------------------------------------------------------------------
 *  The Practice Toolkit — Grounded Practice Toolkit v1.0.
 *
 *  Ordered by *when you touch it*, not by filename. The page renders this as a
 *  timeline, so `stage` is the load-bearing field: it is what turns eight files
 *  into a method someone can actually run.
 *
 *  `track` splits the two-week assessment (1–6) from the product path (7–8),
 *  which is a genuinely separate entry point — not a later chapter.
 *  ------------------------------------------------------------------------ */
export type Artifact = {
  n: number;
  name: string;
  file: string;
  format: "Word" | "Excel";
  stage: string;
  holder: string;
  /** One line. What it produces — never what it "covers". */
  purpose: string;
  /** The ideas the template makes unavoidable in practice. */
  carries: readonly string[];
  /** The single tip worth the price of the file. */
  tip: string;
  track: "assessment" | "product";
  /** Facilitator-only artifacts are never shared with the client. */
  restricted?: boolean;
};

export const TOOLKIT: readonly Artifact[] = [
  {
    n: 1,
    name: "Engagement Letter & Statement of Work",
    file: "01-Engagement-Letter-SoW.docx",
    format: "Word",
    stage: "Before Day 1",
    holder: "Client + facilitator",
    purpose:
      "Contracts the engagement — and makes the method's non-negotiables contractual before anyone answers a single question.",
    carries: [
      "The two-week arc — kickoff, private intake, aggregation, the 90-minute session, reporting.",
      "The facilitator's contract as a clause — disagreement is reported as a pattern by role, never attributed to a name. In the SoW, it is not a courtesy the client can waive mid-session.",
      "What Grounded is not — it does not evaluate the technology, the vendor, or the solution. Set in writing, the report cannot later be read as a technology endorsement.",
    ],
    tip: "Do not soften the facilitator's contract clause to win the deal. It is the engagement's only defence against honest answers drying up — and the first thing a nervous middle manager will test.",
    track: "assessment",
  },
  {
    n: 2,
    name: "Investment Statement Worksheet",
    file: "02-Investment-Statement-Worksheet.docx",
    format: "Word",
    stage: "Day 1",
    holder: "Sponsor",
    purpose:
      "Produces the one sentence every later question is answered against: “We are investing — so that — can —, measured by —.” No sentence, no assessment.",
    carries: [
      "The one-sentence discipline — amount, named beneficiary, specific capability, a falsifiable metric with a from → to movement.",
      "Scoping failure as finding number one — if leadership cannot agree the sentence in one call, stop. That disagreement, surfaced in five minutes instead of eighteen months, is already the assessment paying for itself.",
      "Debt Item Zero — “not yet costed” is an acceptable amount, but it is logged. An organisation that cannot bound its own spend has told you something real.",
    ],
    tip: "The most common failure is the beneficiary. “The business” always fails the test — push until a named team or role appears.",
    track: "assessment",
  },
  {
    n: 3,
    name: "Private Intake Questionnaire",
    file: "03-Private-Intake-Questionnaire.docx",
    format: "Word",
    stage: "Days 2–7",
    holder: "Each role, alone",
    purpose:
      "Collects each role's answers to the thirty evidence questions — alone, in confidence, in about twenty minutes. The raw material of the whole assessment.",
    carries: [
      "The Evidence Rule, structurally enforced — every Yes has a mandatory artifact field. A Yes that cannot name its artifact is a Partially.",
      "Diagnostic mode, not reflection mode — the questions carry the expertise, so a non-technical leader can answer by looking at what exists.",
      "The overlap design — every role answers the three gate blocks. That is what creates fault lines.",
      "The freshness rule — evidence older than twelve months records as Partially.",
    ],
    tip: "Send the forms individually, never to a distribution list. A group email invites a group answer — and the private intake is the whole defence against the room.",
    track: "assessment",
  },
  {
    n: 4,
    name: "Scoring & Aggregation Workbook",
    file: "Grounded-Scoring-Workbook-v1.0.xlsx",
    format: "Excel",
    stage: "Days 8–9",
    holder: "Facilitator only",
    restricted: true,
    purpose:
      "The engine. Turns a stack of intake forms into block scores, gate results, fault lines, a calibration check, a verdict, a debt register and an expiry date — automatically. One person, one spreadsheet, one hour.",
    carries: [
      "Scoring — Yes = 2, Partially = 1, No = 0. Thirty questions, sixty points.",
      "The three gates — a gate passes only if the block scores ≥ 4/6 and the proximity role recorded no “No” in it.",
      "Proximity beats seniority — on each gate the role closest to the evidence carries double weight. The CFO's view of data readiness does not outweigh the person who runs the pipeline.",
      "Fault lines, graded automatically — Critical, Significant, Minor.",
      "The calibration flag — any role answering 27+ of 30 Yes is flagged for two artifact spot-checks. Quality control, not accusation.",
      "The verdict and the 90-day expiry, both computed. Gates and critical splits override the score.",
    ],
    tip: "Never use the workbook to collect answers. Respondents in a shared file — even on separate tabs — can see each other, and the private intake collapses. Forms in, transcription by the facilitator, workbook stays closed.",
    track: "assessment",
  },
  {
    n: 5,
    name: "Facilitation Guide & Session Runsheet",
    file: "04-Facilitation-Guide-Runsheet.docx",
    format: "Word",
    stage: "Day 10",
    holder: "Facilitator",
    purpose:
      "Scripts the ninety-minute session minute by minute — from reading the facilitator's contract aloud to revealing the verdict last — with a playbook for the moments that go wrong.",
    carries: [
      "Open on disagreement, never on a blank canvas — the session starts with the fault-line pattern, by role category.",
      "Artifacts, not opinions — every contested answer gets the same request: “can someone put the artifact on screen?” Then silence.",
      "The anchor question, live — one evidence question demonstrated on screen in real time. A Yes produced live is real; a Yes that “could be pulled together by Thursday” is a Partially, and everyone has just learned why.",
      "The debt register, built in the room — every confirmed gap priced, owned and dated before the session ends.",
      "The verdict comes last — computed, not negotiated. What is negotiable is the debt register.",
    ],
    tip: "Let the silence after “can someone put it on screen?” run longer than is comfortable. The silence is doing the work.",
    track: "assessment",
  },
  {
    n: 6,
    name: "Assessment Report & Board One-Pager",
    file: "05-Assessment-Report-Board-OnePager.docx",
    format: "Word",
    stage: "Day 10+",
    holder: "Client leadership",
    purpose:
      "The permanent record and the decision instrument: verdict, block scores, fault-line summary, foundation debt, expiry and re-grounding path — with a one-page version built for the board pack.",
    carries: [
      "Bluntness at the headline, precision underneath — the verdict leads; the score is working material, never the headline.",
      "Foundation debt belongs in the business case — a case that does not carry its foundation debt is mispriced.",
      "Senior debt — gate-block items close before capital release, not in parallel with the build.",
      "Anonymity survives into the report. Fault lines appear by role category only. Forever.",
      "Expiry on the cover — readiness decays; the report says when this one does.",
    ],
    tip: "The “Decision requested” line on the one-pager is the most important sentence you will write. For a Conditionally Grounded verdict, “approve with staged capital against debt closure” is usually the honest option — it turns the register into the release schedule.",
    track: "assessment",
  },
  {
    n: 7,
    name: "Grounded Scan · Product",
    file: "Grounded-Scan-Product-v1.0.xlsx",
    format: "Excel",
    stage: "Upstream",
    holder: "Product owner, solo",
    purpose:
      "The lightweight precursor for the product owner asking “where, if anywhere, should AI touch this product?” Screens 10–25 workflows and returns a shortlist, each with a rough Investment Statement.",
    carries: [
      "Scan ≠ Assessment — the Scan finds where to look; only the full assessment tests whether what you found is ready to fund. No gates, no verdict, kept separate on purpose.",
      "Six screening questions per workflow — frequency, variance, documented, data exhaust, load-bearing, value line.",
      "Auto-triage — 9–12 SHORTLIST · 6–8 PARK · under 6 DROP.",
      "The data-rights flag — can customer data contractually be used for AI here, per tenant? A “?” on a shortlisted row becomes Debt Item Zero when the candidate graduates.",
    ],
    tip: "Breadth beats depth. Fifteen honestly-screened workflows outperform three lovingly-argued ones — the Scan's value is in what it rules out.",
    track: "product",
  },
  {
    n: 8,
    name: "Product Edition — Question Map",
    file: "07-Product-Edition-Question-Map.docx",
    format: "Word",
    stage: "Any product engagement",
    holder: "Facilitator",
    purpose:
      "Translates the thirty evidence questions for a specific AI capability on a product roadmap. Same method, same gates, same scoring — different language, so a Product Edition verdict stays comparable with any other.",
    carries: [
      "Editions translate language, never method — ten questions are rewritten; twenty carry over verbatim.",
      "The adoption gate, rewritten deepest — from internal job roles to external user segments: beta cohorts as consultation evidence, a working non-AI fallback path as the resistance plan.",
      "Willingness to pay enters the economics gate; data rights fold into governance — keeping the 30-question, 60-point architecture intact.",
      "The product anchor question (Q13), demonstrated live: pull, right now, without an engineering ticket, the last 30 days of event data for the exact workflow this AI will touch.",
    ],
    tip: "The product owner sponsors the assessment — and must not be its only respondent. A solo run has no fault lines, and the fault lines are the point.",
    track: "product",
  },
] as const;

/** The three rules that run through every artifact. Section 09 of the toolkit. */
export const TOOLKIT_RULES = [
  {
    title: "Evidence over opinion.",
    body: "A Yes without a nameable artifact is a Partially — on every form, in every edition, with no exceptions for seniority.",
  },
  {
    title: "The pattern, never the person.",
    body: "Disagreement is the most valuable output of the method, and it survives only as long as no answer is ever traced to a name.",
  },
  {
    title: "Grounding expires.",
    body: "Ninety days. Readiness decays, people move, models deprecate. The verdict is a snapshot; the re-grounding is the habit.",
  },
] as const;

/** Section 01 — the four failure modes. */
export const FAILURE_MODES = [
  {
    title: "The data is connected but not decision-grade.",
    body: "Sensors report, dashboards render, the volume is enormous — and yet nobody can reconstruct a single moment from it. Which batch was running, which material lot was loaded, whether the stoppage at 2am was planned. A model trained on data that cannot answer those questions learns noise, and predicts noise with great confidence.",
  },
  {
    title: "The economics were priced at pilot scale.",
    body: "The pilot's return was real. But integration cost, change management, data preparation and per-inference cost all multiply at rollout, and no one in finance ever signed their name to the number at ten times the usage. The business case that reached the board was, in the precise sense of the word, mispriced.",
  },
  {
    title: "Nobody's behaviour was going to change.",
    body: "The people whose daily judgement the system is meant to inform were not consulted in its design, cannot interpret its output in terms they trust, and — after the first false positive — quietly stop looking at it. The system keeps running. Nobody uses it. The dashboards, again, stay green.",
  },
  {
    title: "The leadership team never agreed on what was true.",
    body: "The CFO believed the data was ready. The IT lead knew it wasn't. Both sat in the approval meeting; only one of them spoke, and it was the one furthest from the evidence.",
  },
] as const;
