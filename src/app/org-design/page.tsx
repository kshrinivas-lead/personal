import type { Metadata } from "next";
import Link from "next/link";
import {
  FunctionTree,
  QualityAcross,
  RolesSplit,
  StepsNotOrder,
} from "@/components/OrgDiagrams";

export const metadata: Metadata = {
  title: "Your org chart is a record of old reasons",
  description:
    "Why enterprises need to rethink how work is arranged, and what the alternative looks like: organise around functions, give every function one accountable owner, and treat who performs the work as a detail.",
  alternates: { canonical: "/org-design" },
};

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <>
      <p className="u-eyebrow">§ {n}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
    </>
  );
}

const PROBLEMS = [
  {
    n: "01",
    name: "The org chart records old reasons",
    body: [
      "Every department boundary exists because something was once hard. Passing information quickly was hard. Checking quality at scale was hard. Planning against capacity was hard. The boundaries were answers to those difficulties.",
      "As the difficulties change, the boundaries stay. Nobody redraws a chart because a reason expired. They redraw it when there is a restructuring, and restructurings are usually triggered by cost or leadership change, not by asking whether the original reasons still hold.",
    ],
  },
  {
    n: "02",
    name: "Work crosses departments, but accountability does not",
    body: [
      "Take order-to-cash. A single customer order touches Sales, Planning, Production, Quality, Logistics and Finance. Each department answers for its own step, and each one can show that it did its job.",
      "Nobody answers for the order.",
      "When an order is late, the conversation becomes a search for which handover failed. Everyone’s numbers look fine, and the customer still waited. This is not a people problem. It is a structural one: the chart assigns accountability for steps, while the customer experiences the whole.",
    ],
    diagram: "steps",
  },
  {
    n: "03",
    name: "The common response to new technology keeps the old shape",
    body: [
      "When a new capability arrives, the usual move is to take today’s process, speed up individual steps, and leave the structure as it was. People end up arranged around whatever the technology cannot do yet.",
      "The work gets faster. But the way it is organised, and who answers for the result, stays exactly as it was. The organisation has changed its tools without asking whether its shape still fits.",
    ],
  },
];

const SHIFTS = [
  {
    n: "01",
    name: "Organise around functions",
    body: [
      "A function is a unit of work that creates value, for example Order-to-Cash. It breaks down into smaller functions (Quote, Schedule, Manufacture, Release, Dispatch, Invoice), and those can break down further, until each one is small enough to be done in one place.",
      "Pick a fixed number of levels, say three, so the structure stays comparable across the whole organisation.",
    ],
  },
  {
    n: "02",
    name: "One kind of thing, not two",
    body: [
      "Many organisations treat two categories of work as different: work that spans departments, and work that sits inside one department. Keeping both categories makes ownership complicated, because each needs its own rules.",
      "Treat them as the same thing. A function either has smaller functions beneath it or it does not. Whether it crosses departments is not a label someone assigns. You work it out from where its parts are done. If its parts sit in more than one department, it spans departments. If they all sit in one, it does not.",
    ],
  },
  {
    n: "03",
    name: "Separate who answers for the result from who does the work",
    body: [
      "Every function gets one named accountable owner. Two roles stay distinct:",
    ],
    bullets: [
      {
        lead: "The department that does the work",
        body: "is assigned only on the smallest functions, and remains accountable for how the work is done.",
      },
      {
        lead: "The accountable owner",
        body: "is assigned on every function. For a small function, that is usually the head of the department doing it. For a larger one, it is a named process owner, a role rather than necessarily a department.",
      },
    ],
    after:
      "A larger function answers for the outcome of the functions beneath it. Each smaller function’s department answers for execution. Most ownership confusion comes from blurring these two.",
    diagram: "roles",
  },
  {
    n: "04",
    name: "Treat who performs the work as a detail",
    body: [
      "Once a function is clearly defined, who or what carries it out can change without redrawing the process. A team, a tool, or the two working together are all possible, and a named person remains accountable either way.",
      "This changes what a department is for. Departments become homes of expertise, standards and talent. They are where people learn, where methods are maintained, and where capability is built. They stay important. They just stop being the only way to describe how work flows.",
    ],
  },
];

const TODAY = [
  ["Sales", "Quote and order capture"],
  ["Planning", "Order promising and scheduling"],
  ["Production", "Manufacturing"],
  ["Quality", "Final inspection and release"],
  ["Logistics", "Picking, packing, dispatch"],
  ["Finance", "Invoicing and collections"],
];

const CHANGES = [
  {
    lead: "The order now has an owner.",
    body: "Someone is accountable for the whole, not only for a step.",
  },
  {
    lead: "Reporting lines do not need to be redrawn.",
    body: "The departments are still there, still run by the same people. The redesign adds a way of seeing the work, it does not demand a restructuring first.",
  },
  {
    lead: "Any single piece can be changed on its own.",
    body: "A step can later be merged with another, split in two, moved earlier in the flow, or done differently, without breaking the whole.",
  },
];

const HARD = [
  {
    name: "Accountability is not authority",
    body: [
      "A process owner answers for outcomes across departments, but access and approval rights still sit within those departments. A redesign that ignores this creates owners who are blamed for results they cannot influence.",
      "The practical rule is to leave authority where it already is. The owner needs clear visibility of outcomes and decisions, and a way to escalate, but not control over other departments’ systems or approvals. Two other points follow:",
    ],
    bullets: [
      {
        lead: "Segregation of duties still applies.",
        body: "Rules that stop one person from both raising and approving something must keep working. A new ownership model should never allow combinations that existing controls forbid.",
      },
      {
        lead: "People move.",
        body: "Ownership should attach to a role that resolves to a person, so that when someone leaves or changes jobs, a function is not left without an owner.",
      },
    ],
  },
  {
    name: "Not everywhere at once",
    body: [
      "Physical production, maintenance, safety and quality release involve equipment, people on a floor, and regulation. I would expect planning, procurement, customer service and finance to change sooner than the shop floor. Some structure is fixed by law or standard, and a redesign has to start by knowing which parts those are.",
    ],
  },
  {
    name: "Companies differ",
    body: [
      "Two enterprises will not have the same structure. A smaller company may combine planning and materials into one department. A larger one may split quality into several. The idea is not a fixed template. It is a consistent way of describing any enterprise: what work exists, how it breaks down, who does it, and who answers for it. The details differ and the language stays the same.",
    ],
  },
];

function Bullets({
  items,
}: {
  items: { lead: string; body: string }[];
}) {
  return (
    <div className="mt-4 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
      {items.map((b) => (
        <div key={b.lead} className="flex gap-4 py-4">
          <span
            aria-hidden="true"
            className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk"
          >
            &rarr;
          </span>
          <p className="text-[0.95rem] text-ink-body dark:text-ink-body-dk">
            <strong className="font-semibold text-ink dark:text-ink-dk">
              {b.lead}
            </strong>{" "}
            {b.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function OrgDesign() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <header className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="u-eyebrow">Article · Organisation design series</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Your org chart is a record of old reasons
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          Why enterprises need to rethink how work is arranged, and what the
          alternative looks like.
        </p>
      </header>

      {/* The problem */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="1" title="The problem" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Open the org chart of almost any manufacturing company and you will
            find the same shape: Sales, Planning, Production, Quality,
            Logistics, Finance, and a few more. The names change from company
            to company. The logic does not.
          </p>
          <p>
            That logic made sense. Grouping people by skill made it easier to
            share expertise, supervise work, hold standards and develop
            careers. A department was a sensible answer to a real problem.
          </p>
          <p>But three things have quietly gone wrong.</p>
        </div>

        <div className="mt-8 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {PROBLEMS.map((p) => (
            <div key={p.n} className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-6">
              <p className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
                {p.n}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 space-y-3 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                  {p.body.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <StepsNotOrder />
      </section>

      {/* The new way */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="2" title="The new way" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>Start from the work, not the department.</p>
          <p>
            Ask what has actually changed in how the work can be done, and
            whether the old arrangement still earns its place. Then redesign
            around the answer.
          </p>
          <p>In practice, this comes down to four shifts.</p>
        </div>

        <div className="mt-8 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {SHIFTS.map((s) => (
            <div key={s.n} className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-6">
              <p className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
                {s.n}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <div className="mt-2 space-y-3 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                  {s.body.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                  {s.bullets && <Bullets items={s.bullets} />}
                  {s.after && <p className="pt-2">{s.after}</p>}
                </div>
                {s.diagram === "roles" && <RolesSplit />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What it looks like */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="3" title="What it looks like" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>Order-to-cash today is usually described like this:</p>
        </div>

        <div className="u-sans mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] border-y border-rule text-left text-[0.95rem] dark:border-rule-dk">
            <thead>
              <tr className="border-b border-rule text-xs uppercase tracking-wider text-ink-muted dark:border-rule-dk dark:text-ink-muted-dk">
                <th className="py-3 pr-4 font-medium">Department</th>
                <th className="py-3 font-medium">What it owns</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule text-ink-body dark:divide-rule-dk dark:text-ink-body-dk">
              {TODAY.map(([d, w]) => (
                <tr key={d}>
                  <td className="py-3 pr-4 font-semibold text-ink dark:text-ink-dk">
                    {d}
                  </td>
                  <td className="py-3">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="u-prose u-measure mt-6 text-ink-body dark:text-ink-body-dk">
          <p>Each box has a head. The order has nobody.</p>
          <p>
            Redesigned, the same work is described like this, with each
            function done by the same department as before:
          </p>
        </div>

        <FunctionTree />

        <div className="u-prose u-measure mt-10 text-ink-body dark:text-ink-body-dk">
          <p>Three things have changed.</p>
        </div>

        <Bullets items={CHANGES} />

        <div className="u-prose u-measure mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            The same department also reappears across functions, doing
            different things in each. Quality does incoming inspection under
            Procure-to-Pay, final release under Order-to-Cash, and design
            validation under New Product Development. A department chart shows
            Quality once. A function view shows where Quality actually
            matters.
          </p>
        </div>

        <QualityAcross />
      </section>

      {/* Where it gets hard */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="4" title="Where it gets hard" />

        <div className="mt-6 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
          {HARD.map((h) => (
            <div key={h.name} className="py-6">
              <h3 className="text-lg font-semibold">{h.name}</h3>
              <div className="mt-2 space-y-3 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
                {h.body.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {h.bullets && <Bullets items={h.bullets} />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The question worth asking */}
      <section className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <SectionHeading n="5" title="The question worth asking" />

        <div className="u-prose u-measure mt-5 text-ink-body dark:text-ink-body-dk">
          <p>
            Before asking <em>&ldquo;what can we speed up?&rdquo;</em>, ask a
            different question:
          </p>
        </div>

        <blockquote className="u-measure mt-8 border-l-2 border-rule-strong pl-5 dark:border-rule-dk">
          <p className="text-lg font-semibold leading-relaxed text-ink dark:text-ink-dk">
            Which reasons for our structure still hold, and which have quietly
            expired?
          </p>
        </blockquote>

        <div className="u-prose u-measure mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            Then ask it again after each change. Every redesign shifts what is
            hard, and the arrangement you just built will itself need
            questioning one day.
          </p>
        </div>
      </section>

      {/* Close */}
      <footer className="border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-measure text-[0.95rem] text-ink-muted dark:text-ink-muted-dk">
          Part of an ongoing line of work on how organisations arrange, reason,
          and govern. Related:{" "}
          <Link href="/work/field-notes/factory-process-map" className="u-link">
            How a factory runs, on one page
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
