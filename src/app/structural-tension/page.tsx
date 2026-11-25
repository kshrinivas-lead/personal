import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { DownloadLink } from "@/components/grounded/DownloadLink";
import {
  OscillatingAdvancing,
  StageCycle,
  TensionChart,
} from "@/components/TensionDiagrams";

export const metadata: Metadata = pageMetadata({
  path: "/structural-tension",
  title: "Structural Tension Framework for Today's Organizations",
  description:
    "Robert Fritz's ideas turned into a set of questions a leadership team can work through, adapted for how organizations and workforces operate today. With a companion workbook.",
  image: "/og/og-structural-tension.png",
});

const WORKBOOK_HREF = "/writing/Structural-Tension-Workbook.xlsx";
const WORKBOOK_FILE = "Structural-Tension-Workbook.xlsx";
const WORKBOOK_ASSET = "structural-tension-workbook";

const BUTTON =
  "u-sans inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk";

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <>
      <p className="u-eyebrow">§ {n}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
    </>
  );
}

function Prose({ children, className = "mt-5" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`u-prose u-measure ${className} text-ink-body dark:text-ink-body-dk`}>
      {children}
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
      {items.map((t, i) => (
        <li key={i} className="flex gap-4 py-3">
          <span
            aria-hidden="true"
            className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk"
          >
            &rarr;
          </span>
          <span className="text-[0.95rem] text-ink-body dark:text-ink-body-dk">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 text-lg font-semibold">{children}</h3>;
}

function Output({ children }: { children: React.ReactNode }) {
  return (
    <p className="u-measure mt-8 border-l-2 border-rule-strong pl-5 text-[0.95rem] text-ink-body dark:border-rule-dk dark:text-ink-body-dk">
      <strong className="font-semibold text-ink dark:text-ink-dk">Output:</strong>{" "}
      {children}
    </p>
  );
}

function Table({ head, rows, minWidth }: { head: string[]; rows: string[][]; minWidth: string }) {
  return (
    <div className="u-sans mt-6 overflow-x-auto">
      <table
        className="w-full border-y border-rule text-left text-[0.9rem] dark:border-rule-dk"
        style={{ minWidth }}
      >
        <thead>
          <tr className="border-b border-rule align-bottom text-xs uppercase tracking-wider text-ink-muted dark:border-rule-dk dark:text-ink-muted-dk">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-rule align-top text-ink-body dark:divide-rule-dk dark:text-ink-body-dk">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td
                  key={i}
                  className={
                    i === 0
                      ? "py-3 pr-4 font-semibold text-ink dark:text-ink-dk"
                      : "py-3 pr-4"
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CORE_IDEAS = [
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Structure determines behavior.</strong>{" "}
    Like a river shaped by its bed, an organization follows the path of least
    resistance its structure creates.
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Structural tension</strong>{" "}
    is the gap between a clear vision and an honest view of current reality.
    Held honestly, it pulls the organization toward the vision.
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Creating is not problem-solving.</strong>{" "}
    Removing problems doesn&rsquo;t bring the result you want into being.
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Competing goals cause oscillation.</strong>{" "}
    Unranked goals make the organization swing back and forth. A clear goal
    hierarchy turns that into steady advance.
  </>,
];

const CHANGED = [
  ["Pace of change", "Multi-year plans held steady", "Markets, technology and competitors shift within quarters", "Hold the vision steady, but refresh current reality far more often"],
  ["Technology and AI", "Computing was a back-office tool", "Digital and AI reshape products, roles and whole business models", "Ask how technology changes both the vision and the riverbed (workflows, roles, decisions)"],
  ["Information", "Data was scarce, slow, held at the top", "Data is abundant and real-time; dashboards can mislead as easily as inform", "Honest current reality means checking what metrics hide, not just reading them"],
  ["Organization shape", "Tall hierarchies, command and control", "Flatter, networked, cross-functional teams", "Goal hierarchy must be clear across teams, not only down a chain of command"],
  ["Where work happens", "Office, fixed hours", "Hybrid, remote, distributed across time zones", "Much of the riverbed now lives in tools, rituals and written norms"],
  ["Careers", "Long tenure, loyalty to one employer", "Shorter tenures, portfolio careers, gig and contract work", "The vision must be worth committing to now, not only after years of service"],
  ["Transparency", "Internal matters stayed internal", "Employee reviews, social media and leaks make the gap between stated and real priorities visible", "Stated vs. enacted priorities get tested publicly"],
  ["Purpose and stakeholders", "Shareholder return dominated", "Employees, customers and investors also weigh purpose, sustainability and ethics", "These become goals in the hierarchy that must be ranked, not just listed"],
  ["Workforce mix", "Mostly Boomers, early Gen X", "Gen X, Millennials and Gen Z work side by side, with Boomers in senior and advisory roles", "Commitment, feedback and motivation work differently across groups (stage 4)"],
];

const GENERATIONS = [
  ["Boomers (1946–64)", "Value experience, loyalty and long-term commitment; often in senior or advisory roles", "Respect for what they built; a clear role in passing on knowledge; honest discussion of what must change"],
  ["Gen X (1965–80)", "Independent, pragmatic, skeptical of corporate slogans; often in middle and senior management", "Straight talk about current reality; autonomy on the how; a vision backed by real decisions"],
  ["Millennials (1981–96)", "Value purpose, growth and flexibility; now a large share of managers", "A vision with meaning beyond profit; visible career paths; regular coaching-style feedback"],
  ["Gen Z (1997–2012)", "Digital natives; value authenticity, wellbeing, fast feedback and learning; quick to leave if values feel fake", "Transparency about the real priorities; early ownership of meaningful work; frequent, direct feedback; consistency between what leaders say and do"],
];

type Stage = {
  n: string;
  title: string;
  aim: string[];
  core?: string[];
  today?: string[];
  output: string;
};

const STAGES: Record<string, Stage> = {
  vision: {
    n: "3",
    title: "Stage 1: Vision, the result we want to create",
    aim: [
      "The aim is a clear, concrete picture of the result, stated as something to create rather than a problem to remove.",
    ],
    core: [
      "What result do we want to create, stated in one or two concrete sentences?",
      "If we had it, what would we have? Is this the real result, or a stand-in for something deeper (leadership, independence, impact)?",
      "Can we picture it? What do we sell, to whom, at what scale and margin, with what team, known for what?",
      "Is this stated as a creation (“we are…”) or as avoiding something (“we stop…”)?",
      "Do we choose this, including the trade-offs it will demand, or do we only want it?",
      "Have we shrunk the vision to what looks achievable today? If so, what would we choose if we didn’t need to know how yet?",
    ],
    today: [
      "Does the vision still hold if our industry is reshaped by AI or new technology within two to three years? What would we create in that world?",
      "What role do purpose, customers and society play in the result, and is that part of the vision or decoration on top of it?",
      "Is the vision compelling to someone who may stay only three to five years? What do they get to build and become here?",
      "Could a frontline employee, a new hire and an investor each explain the vision in their own words?",
    ],
    output:
      "a one-paragraph vision statement with a date, measurable markers and a picture of the company at that point.",
  },
  reality: {
    n: "4",
    title: "Stage 2: Current reality, where we honestly are",
    aim: [
      "The aim is an objective description of where we are now, without exaggerating or minimizing it and without explaining it away.",
    ],
    core: [
      "Where are we today on each marker in the vision (revenue, margin, customers, team, capability)?",
      "Are we stating facts, or adding a story about why things are this way?",
      "Where are we inflating reality to look good, or making it look worse to justify change?",
      "What do we already know is true but avoid saying in leadership meetings?",
      "What results have we produced over the last few years, not what we intended?",
    ],
    today: [
      "What do our dashboards not show? Which numbers look healthy while the underlying reality gets worse?",
      "What are employees, customers and former staff saying about us in public (reviews, social media, word of mouth), and how does it differ from our internal view?",
      "What do our youngest and newest people see that senior leaders don’t? Have we asked them directly, where they feel safe answering?",
      "Where are we behind on technology and AI in our products, operations and skills?",
      "How fast is our reality changing? What will this picture look like in six months if we do nothing?",
      "Is it safe here to bring bad news upward? How do we know?",
    ],
    output:
      "a factual current-reality statement against each vision marker, plus the gap in plain numbers (for example “20 Cr today, 200 Cr target, about 3x growth a year”).",
  },
  structure: {
    n: "5",
    title: "Stage 3: Structure, shaping the riverbed",
    aim: [
      "The aim is to find the competing goals that cause oscillation, rank them, and make the organization’s systems reflect that ranking.",
    ],
    core: [
      "Looking back 5 to 10 years, which initiatives keep coming back (growth then cost cuts, centralize then decentralize)?",
      "Which pairs of goals pull against each other here?",
      "For each pair, which goal is primary, and how does the other serve it?",
      "What is the business strategy that justifies this ranking?",
      "In our last three hard trade-off decisions, which goal actually won? Does that match what we say our priorities are?",
      "Do incentives, budgets, metrics and decision rights reward the primary goal, or still reward the secondary goal on its own terms?",
    ],
    today: [
      "Which new tensions have joined the old ones: speed vs. control, AI automation vs. people development, remote flexibility vs. collaboration, short-term results vs. purpose and sustainability?",
      "Where does our riverbed live now? Check workflows, software tools, meeting rhythms, written norms and OKRs, not just the org chart and policies.",
      "Are we running too many frameworks at once (OKRs, agile, KPIs, values) that send conflicting signals? Which one carries the real hierarchy?",
      "With shorter planning cycles, how do we keep the goal hierarchy stable while tactics change every quarter?",
      "In a flatter, cross-functional organization, does each team know which goal wins when its priorities collide with another team’s?",
    ],
    output:
      "a ranked goal hierarchy (one page), plus a list of the incentives, metrics, budgets and decision rights that must change to match it.",
  },
  action: {
    n: "7",
    title: "Stage 5: Action, rhythm and adjusting",
    aim: [
      "The aim is to turn the tension into action, using Fritz’s structural tension chart, and to keep adjusting as reality changes.",
    ],
    core: [
      "What are the few actions most likely to close the gap?",
      "Who owns each one, and by when?",
      "Which phase are we in: germination (starting energy), assimilation (the slow middle) or completion? What stalls are typical of this phase?",
      "When something fails, do we treat it as information and adjust, or react by lowering the vision?",
      "Are we using fear or hype to drive action (conflict or willpower manipulation) instead of the tension itself?",
    ],
    today: [
      "What is our review rhythm? A monthly or quarterly current-reality update fits today’s pace better than an annual one.",
      "Can every team see how its OKRs or sprint goals telescope up to the main chart?",
      "Which experiments can we run quickly to learn, instead of planning everything up front?",
      "Where can AI and automation speed up action steps, and where would they create a new competing goal?",
      "How do we mark and celebrate completed steps so momentum builds, especially for people who want visible progress?",
      "How do we prevent initiative fatigue? What do we stop doing for each new thing we start?",
    ],
    output:
      "one structural tension chart for the organization, telescoped charts for each major team, and a fixed review calendar.",
  },
};

const PEOPLE_QUESTIONS = [
  "Do people at each level understand the vision and see their own part in it?",
  "Does the vision offer something to people who may not stay long, such as skills, impact and reputation they take with them?",
  "Is current reality shared openly enough that younger, newer staff believe it? Do they see leaders telling the truth, including bad news?",
  "Where do generational differences create competing goals inside teams, such as flexibility vs. presence or speed vs. thoroughness? Have we ranked these as deliberately as business goals?",
  "Are our feedback rhythms (annual reviews vs. continuous feedback) suited to how people actually learn and adjust today?",
  "Does each generation have a role that uses its strengths, for example experienced staff on judgment and relationships, younger staff on new tools and fresh views?",
  "Do our incentives work for different motivations: money, growth, flexibility, purpose, recognition?",
  "Are we mistaking a structural problem for an attitude problem (“Gen Z won’t commit”, “older staff resist change”)? What in the structure makes that behavior the path of least resistance?",
];

const CHART_PARTS = [
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Top:</strong> the vision (from stage 1)
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Bottom:</strong> current reality (from stage 2)
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Between them:</strong> 5 to 8 action steps, each with an owner and a date
  </>,
  <>
    <strong className="font-semibold text-ink dark:text-ink-dk">Telescoping:</strong> each step can become the vision of its own smaller chart, owned by a team further down
  </>,
];

const WARNING_SIGNS = [
  "The same kinds of initiatives return every few years under new names.",
  "Progress is followed by reversal: growth then cuts, hiring then freezes.",
  "People wait out new programs because they expect them to be undone.",
  "Stated priorities and real trade-off decisions don’t match.",
  "Bad news reaches leaders late, softened, or through outside channels.",
  "Young or new talent leaves soon after joining, citing a gap between what was promised and what they found.",
  "Teams blame “culture”, “resistance” or “this generation” for what is really structural.",
];

const CHECKLIST = [
  "Vision written as a concrete result with a date and markers",
  "Vision chosen by the leadership team, trade-offs included",
  "Current reality written as facts, checked against outside and frontline views",
  "Competing goals named and ranked in writing",
  "Incentives, budgets, metrics and decision rights aligned to the ranking",
  "Vision and priorities explained in terms each part of the workforce cares about",
  "Structural tension chart built, with owners, dates and telescoped team charts",
  "Review rhythm fixed: current reality quarterly, structure yearly",
];

function StageQuestions({ s }: { s: Stage }) {
  return (
    <>
      {s.core && (
        <>
          <Sub>Core questions (Fritz)</Sub>
          <List items={s.core} />
        </>
      )}
      {s.today && (
        <>
          <Sub>Added for today</Sub>
          <List items={s.today} />
        </>
      )}
      <Output>{s.output}</Output>
    </>
  );
}

function StageSection({ s, children }: { s: Stage; children?: React.ReactNode }) {
  return (
    <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
      <SectionHeading n={s.n} title={s.title} />
      <Prose>
        {s.aim.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </Prose>
      {children}
      <StageQuestions s={s} />
    </section>
  );
}

function WorkbookDownload() {
  return (
    <DownloadLink
      href={WORKBOOK_HREF}
      fileName={WORKBOOK_FILE}
      asset={WORKBOOK_ASSET}
      surface="article-page"
      className={BUTTON}
    >
      Download the workbook (Excel)
      <span aria-hidden="true">&darr;</span>
    </DownloadLink>
  );
}

export default function StructuralTension() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Article · Organisation design series</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Structural Tension Framework for Today&rsquo;s Organizations
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Robert Fritz&rsquo;s ideas as a set of questions a leadership team can
          work through, adapted for how organizations and workforces operate
          today.
        </p>
        <p className="u-measure mt-6 text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          A companion workbook turns every stage into questions, tables and a
          structural tension chart you fill in and review.
        </p>
        <div className="mt-6">
          <WorkbookDownload />
        </div>
      </header>

      {/* Purpose */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="1" title="Purpose and how to use it" />
        <Prose>
          <p>
            This framework turns Robert Fritz&rsquo;s ideas into a set of
            questions a leadership team can work through, adapted for how
            organizations and workforces operate today. Use it for a strategy
            reset, a transformation, or an ambitious goal such as a step change
            in revenue.
          </p>
          <p>Fritz&rsquo;s core ideas, in brief:</p>
        </Prose>
        <List items={CORE_IDEAS} />
        <Prose className="mt-8">
          <p>
            <strong className="font-semibold text-ink dark:text-ink-dk">How to use it:</strong>{" "}
            work through the five stages in order, in a working session of the
            leadership team. Answer in writing, not discussion only. Revisit
            stages 2 and 5 every quarter, and stages 1, 3 and 4 every year or
            when something big changes.
          </p>
        </Prose>
        <StageCycle />
      </section>

      {/* What has changed */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="2" title="What has changed since 1984" />
        <Prose>
          <p>
            Fritz&rsquo;s principles still hold, but the landscape they work in
            has changed in ways that shape how each stage should be run.
          </p>
        </Prose>
        <Table
          head={["Area", "1984", "Today", "What it means for the framework"]}
          rows={CHANGED}
          minWidth="640px"
        />
        <Prose className="mt-8">
          <p>
            One thing hasn&rsquo;t changed: organizations still launch
            initiatives instead of fixing structure. Faster change makes this
            worse, because the urge to react grows.
          </p>
        </Prose>
      </section>

      <StageSection s={STAGES.vision} />
      <StageSection s={STAGES.reality} />
      <StageSection s={STAGES.structure}>
        <OscillatingAdvancing />
      </StageSection>

      {/* People */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading
          n="6"
          title="Stage 4: People, making the tension shared across generations"
        />
        <Prose>
          <p>
            The aim is structural tension that people at every level and life
            stage hold as their own, not only the founders or leadership team.
            Fritz wrote mostly about individuals and leaders; today the same
            tension has to work across a workforce with very different starting
            points.
          </p>
          <p>
            Generational labels are rough lenses, not rules. Differences within
            each generation are usually larger than differences between them,
            and patterns vary by country, industry and economic background. Use
            the table to generate questions, not to stereotype people.
          </p>
        </Prose>
        <Table
          head={[
            "Generation (approx. birth years)",
            "Commonly reported tendencies at work",
            "What helps them hold the tension",
          ]}
          rows={GENERATIONS}
          minWidth="560px"
        />
        <Sub>Questions</Sub>
        <List items={PEOPLE_QUESTIONS} />
        <Output>
          a short people plan that explains the vision, goal hierarchy and
          current reality in terms each group cares about, plus any changes to
          feedback, career paths and incentives.
        </Output>
      </section>

      <StageSection s={STAGES.action}>
        <Sub>The structural tension chart</Sub>
        <List items={CHART_PARTS} />
        <TensionChart />
      </StageSection>

      {/* Warning signs and checklist */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="8" title="Warning signs and quick checklist" />
        <Sub>Warning signs that the structure is working against you</Sub>
        <List items={WARNING_SIGNS} />

        <Sub>Quick checklist</Sub>
        <ul className="mt-3 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {CHECKLIST.map((t) => (
            <li key={t} className="flex gap-4 py-3">
              <span
                aria-hidden="true"
                className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk"
              >
                &#9744;
              </span>
              <span className="text-[0.95rem] text-ink-body dark:text-ink-body-dk">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-lg border border-rule p-6 sm:p-7 dark:border-rule-dk">
          <p className="u-eyebrow">Workbook</p>
          <p className="u-measure mt-3 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
            One sheet per stage, plus a review log and this checklist. Yellow
            cells are for your answers; gaps and progress calculate
            automatically.
          </p>
          <div className="mt-6">
            <WorkbookDownload />
          </div>
        </div>
      </section>

      {/* Close */}
      <footer className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-measure text-sm text-ink-muted dark:text-ink-muted-dk">
          Sources: Robert Fritz, <em>The Path of Least Resistance</em> (1984;
          revised 1989), <em>Corporate Tides</em> (1996),{" "}
          <em>The Path of Least Resistance for Managers</em> (1999; revised
          2011). Generation birth-year ranges follow the commonly used Pew
          Research Center definitions.
        </p>
        <p className="u-measure mt-6 text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          Part of an ongoing line of work on how organisations arrange, reason,
          and govern. Related:{" "}
          <Link href="/org-design" className="u-link">
            Your org chart is a record of old reasons
          </Link>{" "}
          &middot;{" "}
          <Link href="/decision-intelligence" className="u-link">
            Decision Intelligence
          </Link>
        </p>
      </footer>
    </div>
  );
}
