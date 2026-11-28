import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, PERSON } from "@/components/JsonLd";
import { SITE_URL } from "@/config";
import { casePath, getCase } from "@/content/cases";
import {
  CaseContents,
  CaseHeader,
  CaseSection,
  DecisionPoint,
  Exhibit,
  ExhibitRef,
  ExhibitTable,
  Ext,
  NumberedList,
  Part,
  QuestionList,
  Sources,
} from "@/components/cases/CaseParts";

const CASE = getCase("flipkart-ceo-owns-pnl-and-culture");
const PATH = casePath(CASE.slug);

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: CASE.title,
  description: CASE.hook,
  image: CASE.ogImage,
});

const SRC = {
  reuters:
    "https://www.investing.com/news/stock-market-news/walmartowned-flipkarts-kalyan-krishnamurthy-steps-down-as-ceo-5049946",
  bs: "https://www.business-standard.com/companies/news/kalyan-krishnamurthy-exit-flipkart-ceo-ipo-esop-walmart-126112500495_1.html",
  walmart2026: "https://corporate.walmart.com/news/2026/01/16/walmart-announces-leadership-changes",
  peopleMatters:
    "https://www.peoplematters.in/news/appointments/walmart-appoints-chris-nicholas-as-president-and-ceo-of-walmart-international-48299",
  moneycontrol:
    "https://www.moneycontrol.com/news/business/startup/how-a-stormy-bentonville-meeting-unravelled-kalyan-krishnamurthy-s-decade-long-run-at-flipkart-14089619.html",
  inc42Fy26:
    "https://inc42.com/buzz/flipkart-group-fy26-revenue-nears-%e2%82%b91-5-lakh-cr-loss-narrows-to-%e2%82%b98468-cr/",
  inc42Summer: "https://inc42.com/features/flipkarts-summer-of-discontent/",
  zerodha:
    "https://zerodha.com/z-connect/news/flipkart-defers-ipo-as-walmart-pushes-profitability-first-strategy",
  businessToday:
    "https://www.businesstoday.in/technology/news/story/flipkart-to-take-on-zomato-and-swiggy-with-a-new-food-delivery-platform-all-details-544989-2026-07-24",
  outlook:
    "https://www.outlookbusiness.com/corporate/flipkarts-former-cxos-seek-fair-and-equitable-treatment-in-esops-amid-ipo-uncertainty",
  storyboard:
    "https://www.storyboard18.com/brand-marketing/walmart-probes-flipkart-employees-over-rs-150-crore-kickback-allegations-report-113668.htm",
  newsbytes:
    "https://www.newsbytesapp.com/news/business/walmart-launches-probe-into-alleged-150cr-fraud-at-flipkart/story",
  clickpost: "https://www.clickpost.ai/blog/amazon-vs-flipkart-vs-meesho",
  courthouse: "https://www.courthousenews.com/?p=230151",
  cfo: "https://www.cfo.com/news/ge-ousts-ceo-flannery-as-slump-continues/658583/",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON,
    {
      "@type": "Article",
      headline: CASE.title,
      description: CASE.hook,
      url: `${SITE_URL}${PATH}/`,
      datePublished: CASE.published,
      dateModified: CASE.updated,
      author: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@type": "CreativeWorkSeries", name: "Cases", url: `${SITE_URL}/cases/` },
      about: [
        { "@type": "Organization", name: "Flipkart" },
        { "@type": "Organization", name: "Walmart" },
        { "@type": "Thing", name: "CEO accountability" },
      ],
      inLanguage: "en-GB",
    },
  ],
};

export default function FlipkartCase() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <JsonLd data={articleJsonLd} />

      <CaseHeader
        c={CASE}
        subtitle="What Kalyan Krishnamurthy’s exit from Flipkart teaches about accountability for causes that seem external"
        epigraph={
          <>
            Real constraints are not a defence. A CEO owns the outcome,
            including the parts that seem to be caused from outside.
          </>
        }
        note={
          <>
            Some figures below come from unnamed sources and are labelled as
            reported. The kickback allegations mentioned are unproven, and no
            report alleges that Krishnamurthy took any payment.
          </>
        }
      >
        <p>
          <strong>How to read this.</strong> Part 1 tells the story neutrally,
          with pause points (⏸) where you can decide what you would have done.
          The exhibits hold the evidence. Part 2 is my argument. Part 3 is for
          your own leadership team.
        </p>
      </CaseHeader>

      <CaseContents
        items={[
          { href: "#case", label: "1 · The case" },
          { href: "#exhibits", label: "Exhibits" },
          { href: "#argument", label: "2 · My argument" },
          { href: "#lessons", label: "3 · Lessons & questions" },
          { href: "#watch", label: "What to watch" },
          { href: "#sources", label: "Sources" },
        ]}
      />

      {/* ================================================================ */}
      <Part id="case" n={1} title="The case">
        <div className="u-prose u-measure mt-10 text-ink-body dark:text-ink-body-dk">
          <p>
            On 25 November 2026 Flipkart announced that Kalyan Krishnamurthy,
            its CEO since 2017, would leave on 4 December (
            <Ext href={SRC.reuters}>Reuters</Ext>). He had led Flipkart through
            Walmart’s $16 bn deal in 2018 and kept it ahead of Amazon, with an
            estimated 50–60% of Indian e-commerce (
            <Ext href={SRC.clickpost}>ClickPost, citing ICICI Securities</Ext>).
            Flipkart gave no reason.
          </p>
        </div>

        <CaseSection title="A new boss">
          <p>
            In February 2026 a former Walmart CFO, Chris Nicholas, took over
            Walmart International (<Ext href={SRC.peopleMatters}>People Matters</Ext>).
            Flipkart had reportedly ended 2025 close to EBITDA breakeven.
          </p>
        </CaseSection>

        <DecisionPoint
          n={1}
          label="Pause"
          date="February 2026"
          situation={<p>Your new boss is a numbers person, and you are close to breakeven.</p>}
          question="Do you keep running your plan, or re-agree targets and own them publicly?"
        />

        <CaseSection title="Culture warnings">
          <p>
            Walmart’s first fraud probe at Flipkart, around 2024, ended with at
            least three employees fired (<Ext href={SRC.storyboard}>Storyboard18</Ext>).
            A second followed in 2026, and a third in October, over alleged
            kickbacks of more than ₹150 crore (<Ext href={SRC.newsbytes}>NewsBytes</Ext>).
          </p>
        </CaseSection>

        <DecisionPoint
          n={2}
          label="Pause"
          date="After the first probe"
          question="After the first case, do you fire the people, or change the system that let it happen?"
        />

        <CaseSection title="P&L pressure">
          <p>
            In May 2026 Walmart reportedly deferred the IPO and asked Flipkart
            to reach breakeven by March 2027 (<Ext href={SRC.zerodha}>Zerodha</Ext>).
            Flipkart then launched food delivery and microdramas (
            <Ext href={SRC.businessToday}>Business Today</Ext>). FY26 filings
            showed a group loss of ₹8,468 crore (<Ext href={SRC.inc42Fy26}>Inc42</Ext>).
          </p>
        </CaseSection>

        <DecisionPoint
          n={3}
          label="Pause"
          date="May 2026"
          situation={<p>Breakeven is now the condition for an IPO.</p>}
          question="Do you prune loss-makers, or keep investing to fight quick-commerce rivals?"
        />

        <CaseSection title="People">
          <p>
            Former senior executives, and then about 1,000 former employees,
            wrote to Walmart’s board seeking liquidity for stock options they
            had held for years (<Ext href={SRC.outlook}>Outlook Business</Ext>).
            At least 14 VPs and SVPs left in a year (
            <Ext href={SRC.inc42Summer}>Inc42</Ext>).
          </p>
        </CaseSection>

        <DecisionPoint
          n={4}
          label="Pause"
          date="2026"
          situation={
            <p>
              The IPO delay and the liquidity backlog are real, and your owner
              decided the IPO timing.
            </p>
          }
          question="Do you treat them as the owner’s problem, or present your own plan regardless?"
        />

        <CaseSection title="The decision">
          <p>
            Sources told <Ext href={SRC.bs}>Business Standard</Ext> that
            Walmart worried about growth, losses and the unresolved stock
            options. They also said he was held responsible, as CEO, for
            failing to prevent the kickbacks. The handover took about a week.
            In public, Walmart thanked him for his leadership and governance.
          </p>
        </CaseSection>

        <DecisionPoint
          n={5}
          label="Pause"
          date="November 2026"
          situation={<p>You are the owner.</p>}
          question="Do you change the CEO now, set conditions, or agree a planned transition?"
        />

        {/* ---- Exhibits ------------------------------------------------- */}
        <div id="exhibits" className="mt-16 scroll-mt-16 border-t border-rule pt-12 dark:border-rule-dk">
          <h3 className="text-xl font-semibold sm:text-2xl">Exhibits</h3>

          <Exhibit
            n={1}
            title="Targets against outcomes"
            note={
              <>
                Reported figures: <Ext href={SRC.moneycontrol}>Moneycontrol</Ext>,
                citing unnamed sources.
              </>
            }
          >
            <ExhibitTable
              head={["Measure", "Target", "Outcome"]}
              rows={[
                [
                  "Growth, 2026",
                  <>~17–18% <span className="u-chip u-chip-partial">Reported</span></>,
                  <>~11–12% expected <span className="u-chip u-chip-partial">Reported</span></>,
                ],
                [
                  "Cash burn, 2026",
                  <>~$70–80 m <span className="u-chip u-chip-partial">Reported</span></>,
                  <>~$200–240 m expected <span className="u-chip u-chip-partial">Reported</span></>,
                ],
                [
                  "FY26 group net loss",
                  "—",
                  <>
                    ₹8,468 crore <span className="u-chip u-chip-pass">Confirmed</span>{" "}
                    <Ext href={SRC.inc42Fy26}>Inc42</Ext>
                  </>,
                ],
              ]}
            />
          </Exhibit>

          <Exhibit n={2} title="The causes that look external, and what the CEO controlled">
            <ExhibitTable
              minWidth={560}
              head={["Factor", "Who controlled it", "What the CEO controlled"]}
              rows={[
                ["Competition", "The market", "Where to compete, and what to stop"],
                ["IPO delay", "Walmart, reportedly because of the losses", "The losses"],
                ["Stock-option liquidity", "Walmart and the board, reportedly tied to the financials", "The financials, and how the issue was handled with staff"],
                ["Vendor kickbacks", "Management’s own processes", "Controls and deal approvals"],
                ["New bets and costs", "The CEO", "Everything"],
              ]}
            />
          </Exhibit>

          <Exhibit n={3} title="The same standard elsewhere">
            <ExhibitTable
              head={["Case", "What happened"]}
              rows={[
                [
                  "Wells Fargo, 2016",
                  <>
                    Senators criticised CEO John Stumpf for blaming 5,300
                    low-level employees rather than the sales culture; he
                    resigned weeks later (<Ext href={SRC.courthouse}>Courthouse News</Ext>)
                  </>,
                ],
                [
                  "GE, 2018",
                  <>
                    CEO John Flannery was removed after 14 months, reportedly
                    over the slow pace of change, though many problems
                    predated him (<Ext href={SRC.cfo}>CFO.com</Ext>)
                  </>,
                ],
              ]}
            />
          </Exhibit>
        </div>
      </Part>

      {/* ================================================================ */}
      <Part id="argument" n={2} title="My argument">
        <blockquote className="u-pullquote u-measure mt-8">
          A CEO owns two things: the P&amp;L and the culture. Everything else is
          a means to those two.
        </blockquote>

        <div className="u-prose u-measure mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            Flipkart’s record in 2026 tests both. On P&amp;L, the company was
            reportedly close to breakeven at the end of 2025, then drifted well
            off its targets while adding new businesses. On culture, it had
            three fraud probes in under three years, senior exits, and former
            staff writing to the owner’s board.
          </p>
          <p>
            Many of the causes looked external: fierce competition, an IPO
            delay decided by Walmart, a liquidity backlog outside the CEO’s
            hands. But follow each one back (<ExhibitRef n={2} />). The IPO was
            reportedly delayed because of the losses. Liquidity reportedly
            depended on the financials. The kickbacks happened inside the
            company’s own processes. Every road leads back to P&amp;L or
            culture, which is exactly the CEO’s job. Wells Fargo shows what
            happens when a leader treats a culture problem as someone else’s (
            <ExhibitRef n={3} />).
          </p>
        </div>

        <CaseSection title="The case for the other side">
          <p>
            It is a strong one. The constraints were real and partly the
            owner’s. The goalposts moved when a new boss arrived in 2026, and
            GE’s Flannery was famously compared to “a coach fired after one
            season.” Flipkart’s core stayed strong, and nobody accuses
            Krishnamurthy of wrongdoing.
          </p>
        </CaseSection>

        <CaseSection title="My answer">
          <p>
            The goalposts did move, and that is why the first 90 days with a
            new boss matter: you re-agree the targets and own them. Ten years
            is not one season. A strong core makes persistent losses a choice
            rather than fate. And the argument stands on confirmed facts: the
            loss, the repeated probes and the letters to the owner’s board.
          </p>
        </CaseSection>
      </Part>

      {/* ================================================================ */}
      <Part id="lessons" n={3} title="Lessons and questions">
        <div className="mt-10">
          <h3 className="text-xl font-semibold sm:text-2xl">Lessons</h3>
          <NumberedList
            items={[
              "A CEO owns two things: P&L and culture.",
              "Trace every “external” cause back to what you control.",
              "Real constraints still need your own plan.",
              "When your boss changes, re-agree the targets and own them.",
              "Culture shows up as repeats: repeat fraud, repeat exits, people going over your head.",
              "Results buy patience, not immunity.",
            ]}
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-rule p-6 dark:border-rule-dk">
            <p className="u-eyebrow">For your leadership team</p>
            <h3 className="mt-2 text-lg font-semibold">Questions for your own leadership team</h3>
            <QuestionList
              items={[
                "Which of our shortfalls do we explain mainly by outside forces? What part of each do we control?",
                "If our board or owner changed tomorrow, which targets would we need to re-agree?",
                "What would our people write if they wrote to our board?",
                "Which failure has happened here more than once?",
              ]}
            />
          </div>

          <div className="rounded-lg border border-rule p-6 dark:border-rule-dk">
            <p className="u-eyebrow">For classes and workshops</p>
            <h3 className="mt-2 text-lg font-semibold">Using the pauses</h3>
            <p className="mt-5 text-[0.98rem] text-ink-body dark:text-ink-body-dk">
              Take each <a href="#decision-1" className="u-link">pause point</a>.
              Decide, then compare your choice with what happened, and with the
              Wells Fargo and GE cases (<ExhibitRef n={3} />).
            </p>
          </div>
        </div>
      </Part>

      {/* ================================================================ */}
      <section id="watch" className="scroll-mt-16 border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-eyebrow">Updates</p>
        <h2 className="mt-2 text-2xl font-semibold">What to watch</h2>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            The 30 November town hall, the permanent CEO, stock-option
            liquidity, progress towards breakeven, and the probe’s findings.
          </p>
        </div>
        {/* Dated updates go here, newest first, and bump `updated` in
            src/content/cases.ts. */}
      </section>

      <footer id="sources" className="scroll-mt-16 border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <div className="u-measure space-y-2 text-[0.95rem] text-ink-muted italic dark:text-ink-muted-dk">
          <p>Researched with AI assistance; analysis and views are my own.</p>
          <p>
            Conflicts: I have no business relationship with Flipkart, Walmart
            or the companies mentioned.
          </p>
        </div>

        <p className="u-eyebrow mt-10">Sources</p>
        <Sources
          items={[
            { label: "Reuters via Investing.com", href: SRC.reuters },
            { label: "Business Standard", href: SRC.bs },
            { label: "Walmart leadership changes (2026)", href: SRC.walmart2026 },
            { label: "People Matters", href: SRC.peopleMatters },
            { label: "Moneycontrol", href: SRC.moneycontrol },
            { label: "Inc42", href: SRC.inc42Fy26 },
            { label: "Inc42 (discontent)", href: SRC.inc42Summer },
            { label: "Zerodha", href: SRC.zerodha },
            { label: "Business Today", href: SRC.businessToday },
            { label: "Outlook Business", href: SRC.outlook },
            { label: "Storyboard18", href: SRC.storyboard },
            { label: "NewsBytes", href: SRC.newsbytes },
            { label: "ClickPost", href: SRC.clickpost },
            { label: "Courthouse News", href: SRC.courthouse },
            { label: "CFO.com", href: SRC.cfo },
          ]}
        />

        <p className="u-sans mt-12 text-sm text-ink-muted dark:text-ink-muted-dk">
          <Link href="/cases" className="u-link">
            All cases
          </Link>{" "}
          &middot; Also in this series:{" "}
          <Link href="/cases/nvidia-indispensability-trap" className="u-link">
            The Indispensability Trap: Nvidia’s 26 Days
          </Link>
        </p>
      </footer>
    </div>
  );
}
