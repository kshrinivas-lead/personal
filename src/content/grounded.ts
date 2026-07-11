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
