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
  Timeline,
} from "@/components/cases/CaseParts";

const CASE = getCase("nvidia-indispensability-trap");
const PATH = casePath(CASE.slug);

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: CASE.title,
  description: CASE.hook,
  image: CASE.ogImage,
});

const SRC = {
  fortune:
    "https://fortune.com/2026/11/23/nvidia-board-reinstates-jensen-huang-twelve-days-sonnenfeld/",
  tnw: "https://thenextweb.com/news/nvidia-board-jensen-huang-inquiry-directors-succession",
  abc: "https://abcnews.com/Business/timeline-stunning-fall-powerful-nvidia-ceo-jensen-huang/story?id=138041659",
  technode: "https://technode.global/?p=997199",
  sec12:
    "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm",
  sec23:
    "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm",
  gpb: "https://www.gpb.org/news/2026/11/17/nvidia-board-says-it-does-not-intend-reinstate-jensen-huang-ceo",
  time: "https://time.com/article/2026/11/23/jensen-huang-return-nvidia-trump/",
  q3: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/",
  fwmba:
    "https://fourweekmba.com/ai-nvidias-118b-swing-in-27-minutes-around-huangs-statement/",
  apple:
    "https://abc7.com/post/apple-ceo-tim-cook-is-stepping-down-john-ternus-set-replace/18928305/",
  businessday:
    "https://www.businessday.co.za/world/international-companies/2026-11-17-jensen-huang-opens-the-door-to-return-as-nvidia-ceo-after-resigning-over-scandal/",
  npr: "https://www.npr.org/2026/11/23/nx-s1-6050910/nvidias-jensen-huang-trump",
  axios: "https://www.axios.com/2026/11/17/jensen-huang-nvidia-ceo-accountability-power",
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
        { "@type": "Organization", name: "Nvidia" },
        { "@type": "Thing", name: "Corporate governance" },
        { "@type": "Thing", name: "CEO succession" },
      ],
      inLanguage: "en-GB",
    },
  ],
};

export default function NvidiaCase() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <JsonLd data={articleJsonLd} />

      <CaseHeader
        c={CASE}
        subtitle="A case study and an argument"
        epigraph={
          <>
            A great CEO builds a great company. A greater CEO builds one that
            doesn’t need them.
          </>
        }
        note={
          <>
            All allegations are as reported by the outlets named. None of the
            espionage claims has been established. China, Singapore and the
            company involved deny them, and investigations are still open.
          </>
        }
      >
        <p>
          <strong>How to read this.</strong> Part 1 is the case: what happened,
          the evidence, and the decisions the board faced. It is written
          neutrally, with pauses to ask what you would have done. Part 2 is my
          argument. Part 3 turns both into lessons and questions for your own
          board or leadership team. Read straight through as an article, or
          stop at each pause if you’re using it for discussion.
        </p>
      </CaseHeader>

      <div>
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
      </div>

      {/* ================================================================ */}
      <Part id="case" n={1} title="The case">
        <CaseSection title="The decision on the table">
          <p>
            On the weekend of 22 November 2026, the directors of Nvidia, then a
            roughly $4 trillion company and the central supplier of the AI
            boom, had to decide whether to reverse themselves.
          </p>
          <p>
            Eleven days earlier they had accepted the resignation of Jensen
            Huang, who co-founded the company in 1993 and had been its only
            CEO. Five days earlier their new chair had told investors, on the
            record, that the board did not intend to reinstate him. Now the
            founder was publicly offering to return, a petition with more than
            180,000 signatures was demanding it, the stock had lost hundreds of
            billions of dollars, and the President of the United States was
            urging the board to give him a second chance. The independent
            investigation the board had commissioned had not reported.
          </p>
          <p>How did they get here?</p>
        </CaseSection>

        <CaseSection title="Background: the company and the board">
          <p>
            Nvidia began as a graphics-chip company and became the backbone of
            AI computing. Under Huang it reached about $216 billion in revenue
            in fiscal 2026. Huang was president, CEO and a director, and he was
            widely seen as the face of the AI revolution.
          </p>
          <p>
            The board was built around him. Until the crisis there was{" "}
            <strong>no board chair</strong>. The most senior director, Harvey C.
            Jones, had served <Ext href={SRC.fortune}>since 1993</Ext>, before
            the company went public. Several directors had known Huang for
            decades. There was{" "}
            <Ext href={SRC.tnw}>no chief compliance officer</Ext>. Colette
            Kress, CFO since 2013, ran finance and the earnings calls, and
            Huang handled the vision and the big relationships.
          </p>
        </CaseSection>

        <CaseSection title="The crisis unfolds">
          <p>
            On 29 October the <em>New York Times</em>{" "}
            <Ext href={SRC.abc}>reported</Ext> a close relationship between
            Huang and a former executive of Megaspeed, a Singapore company that
            had reportedly bought about $4.8 billion of Nvidia chips. Within
            days, the <em>Wall Street Journal</em> reported that intelligence
            officials in several countries suspected her of working for Chinese
            intelligence, and congressional committees asked Huang to testify.
          </p>
        </CaseSection>

        <DecisionPoint
          n={1}
          date="8 November"
          situation={
            <p>
              Huang tells employees he was unfaithful to his wife. The reports
              allege he was the target of a foreign intelligence effort.
              Nothing has been proven, and he denies knowing of any spying.
            </p>
          }
          options={[
            { key: "a", text: "say nothing and wait" },
            { key: "b", text: "open an independent investigation and keep him as CEO" },
            { key: "c", text: "open an investigation and put him on leave" },
            { key: "d", text: "ask for his resignation" },
          ]}
          question="What would you do, and what would each option signal to employees, investors and Washington?"
          outcome={
            <p>
              It chose (b). It opened an independent investigation led by a
              committee of independent directors with outside counsel, and{" "}
              <Ext href={SRC.technode}>said it still had confidence</Ext> in
              Huang. Reporting later said the general counsel{" "}
              <Ext href={SRC.fortune}>had to press directors</Ext> to open it.
              On 10 November the board hired former acting US Attorney Joon Kim
              and Wachtell Lipton to lead it.
            </p>
          }
        />

        <DecisionPoint
          n={2}
          date="11 November"
          situation={
            <p>
              New reports say Huang also had a relationship with an Nvidia
              executive who reported directly to him. Directors reportedly
              believe he was not candid with them.
            </p>
          }
          question="Does this change the calculation? Is a relationship with a direct report a removal offence regardless of performance?"
          outcome={
            <p>
              It accepted Huang’s resignation as president, CEO and director.
              On 12 November it <Ext href={SRC.sec12}>announced</Ext> that Kress
              would be interim CEO while staying CFO, and that Jones would be
              the company’s <strong>first-ever board chair</strong>. The
              emergency plan worked: Kress took over the same day.
            </p>
          }
        />

        <DecisionPoint
          n={3}
          date="17 November"
          situation={
            <p>
              Huang publicly offers to return. The petition passes 180,000
              signatures, including about 8,800 people who say they are current
              employees. Elon Musk backs it. On the same day, Kress reports a
              record quarter. Investors on the earnings call want to know if
              Huang is coming back.
            </p>
          }
          question="Should the chair commit publicly either way, or keep the board’s options open?"
          outcome={
            <p>
              Jones <Ext href={SRC.gpb}>told investors</Ext> the board “does not
              intend to reinstate” Huang, and Nvidia hired Heidrick &amp;
              Struggles to find a permanent CEO.
            </p>
          }
        />

        <DecisionPoint
          n={4}
          date="22–23 November"
          situation={
            <p>
              President Trump <Ext href={SRC.abc}>says publicly</Ext> that he
              discussed Huang with Xi Jinping and wants him given a second
              chance, then posts that he hopes the board rehires him. The
              investigation is still open.
            </p>
          }
          options={[
            { key: "a", text: "hold the 17 November position" },
            { key: "b", text: "wait for the investigation, then decide" },
            { key: "c", text: "reinstate him with formal conditions or on leave until the findings" },
            { key: "d", text: "reinstate him now" },
          ]}
          question="What would you do? What does each option cost, and who bears the cost?"
          outcome={
            <p>
              It chose (d). On 23 November the board{" "}
              <Ext href={SRC.sec23}>unanimously reinstated</Ext> Huang as
              president, CEO and director. It said discussions had satisfied it
              on his “candor and ability to lead”, and that senior US
              government officials had told it his return posed no national
              security risk. It also created an independent-director National
              Security and Export Control Committee and began a search for a
              Chief Compliance Officer. Jones stayed chair, and Kress went back
              to being CFO. Trump <Ext href={SRC.time}>claimed credit</Ext>, and
              Semafor reported he had joined the board meeting by phone. The
              investigation <Ext href={SRC.fortune}>had not finished</Ext>.
            </p>
          }
        />

        {/* ---- Exhibits ------------------------------------------------- */}
        <div id="exhibits" className="mt-16 scroll-mt-16 border-t border-rule pt-12 dark:border-rule-dk">
          <h3 className="text-xl font-semibold sm:text-2xl">Exhibits</h3>

          <Exhibit n={1} title="Timeline">
            <Timeline
              rows={[
                { date: "29 Oct", event: "NYT reports Huang’s close relationship with a former Megaspeed executive." },
                { date: "31 Oct", event: "WSJ reports intelligence officials suspect she is a Chinese spy; Singapore denies investigating her." },
                { date: "5 Nov", event: "House Select Committee on China requests Huang’s testimony." },
                { date: "8 Nov", event: "Huang admits infidelity to staff; board opens an independent investigation and expresses confidence in him.", decision: 1 },
                { date: "10 Nov", event: "Board hires Joon Kim and Wachtell Lipton." },
                { date: "11 Nov", event: "Second relationship reported, with a direct report; board accepts resignation.", decision: 2 },
                { date: "12 Nov", event: "Kress named interim CEO; Jones named first-ever chair." },
                { date: "15–16 Nov", event: "Megaspeed denies wrongdoing; DOJ criminal probe of Megaspeed announced; Trump says he “would not mind” a return." },
                { date: "17 Nov", event: "Huang offers to return; record Q3; chair rules out reinstatement; CEO search firm hired.", decision: 3 },
                { date: "20–22 Nov", event: "Trump publicly urges reinstatement." },
                { date: "23 Nov", event: "Board unanimously reinstates Huang; new national security committee and compliance officer role announced.", decision: 4 },
                { date: "1 Dec", event: "Scheduled transcribed interview with three House committees." },
              ]}
            />
          </Exhibit>

          <Exhibit n={2} title="Governance before and after">
            <ExhibitTable
              head={["", "Before 11 Nov", "After 23 Nov"]}
              rows={[
                ["CEO", "Huang", "Huang"],
                ["Board chair", "None", "Harvey C. Jones (independent)"],
                ["Chief Compliance Officer", "None", "Search under way; will report to the governance committee"],
                ["National security oversight", "No dedicated committee", "Independent-director National Security and Export Control Committee"],
                ["Formal conditions on CEO", "Not applicable", "None disclosed"],
              ]}
            />
          </Exhibit>

          <Exhibit
            n={3}
            title="The business during the crisis (Q3 FY2027, reported 17 Nov under the interim CEO)"
            note={
              <>
                Source: <Ext href={SRC.q3}>Nvidia Q3 FY27 results</Ext>
              </>
            }
          >
            <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-3 dark:border-rule-dk dark:bg-rule-dk">
              {[
                { k: "Revenue", v: "$115.8 bn", d: "up 103% year on year" },
                { k: "Data center revenue", v: "$107.6 bn", d: "up 110%" },
                { k: "Q4 revenue guidance", v: "$130 bn ± 3%", d: "no China data-center revenue assumed" },
              ].map((m) => (
                <div key={m.k} className="bg-paper-raised p-5 dark:bg-paper-raised-dk">
                  <p className="u-eyebrow">{m.k}</p>
                  <p className="mt-2 text-2xl font-semibold text-ink dark:text-ink-dk">{m.v}</p>
                  <p className="u-sans mt-1 text-sm text-ink-muted dark:text-ink-muted-dk">{m.d}</p>
                </div>
              ))}
            </div>
          </Exhibit>

          <Exhibit n={4} title="How the market priced one person">
            <ExhibitTable
              head={["Moment", "Move"]}
              rows={[
                [
                  "11–16 Nov (three sessions after resignation)",
                  <>Down ~10.1%, about $424 bn (<Ext href={SRC.fwmba}>FourWeekMBA</Ext>)</>,
                ],
                ["From start of scandal (various reports)", "Losses reported at $600–800 bn"],
                ["17 Nov, minutes after Huang’s offer to return", "Up ~3%, about $90–118 bn"],
                ["23 Nov, reinstatement", <>Sharp rise (<Ext href={SRC.fortune}>Fortune</Ext>)</>],
              ]}
            />
          </Exhibit>

          <Exhibit n={5} title="Precedents">
            <ExhibitTable
              minWidth={600}
              head={["Case", "What happened", "Key difference"]}
              rows={[
                ["Apple, Jobs (1985–97)", "Ousted; Apple drifted and nearly collapsed; he returned after 12 years.", "A company with no fallback for one person."],
                [
                  "Apple, Jobs → Cook → Ternus",
                  <>Cook ran Apple during Jobs’s medical leaves, became CEO in 2011, and handed over to John Ternus in 2026 through a <Ext href={SRC.apple}>long-term succession plan</Ext>.</>,
                  "Successors tested before they were needed.",
                ],
                ["OpenAI, Altman (2023)", "Fired and back within five days.", "Most of the board that fired him was replaced."],
                ["McDonald’s, Easterbrook (2019)", "Fired over a relationship with an employee despite strong results.", "Code of conduct enforced regardless of performance."],
                ["Intel, Krzanich (2018)", "Resigned over a past relationship with an employee.", "Same norm applied."],
              ]}
            />
          </Exhibit>
        </div>
      </Part>

      {/* ================================================================ */}
      <Part id="argument" n={2} title="My argument">
        <CaseSection title="The succession plan worked. The board didn’t.">
          <p>
            Most commentary says Nvidia had no succession plan. I made the same
            point in my first reaction, and I was wrong. When Huang left, Kress
            took over the same day and delivered a record quarter (
            <ExhibitRef n={3} />
            ). On the question every board should be able to answer,{" "}
            <em>who runs this company if the CEO is gone tomorrow?</em>, Nvidia
            had an answer that worked.
          </p>
          <p>
            The failure was at a second, harder layer:{" "}
            <strong>would the board act on its own judgment once the envelope was open?</strong>{" "}
            It didn’t. Within a week, under pressure from a petition, a falling
            stock and the President, it reversed a commitment it had made to
            investors, before its own investigation reported.
          </p>
          <p>
            That’s the indispensability trap.{" "}
            <strong>
              The danger isn’t a strong CEO, it’s an irreplaceable one, and
              only the board can stop a CEO from becoming irreplaceable.
            </strong>{" "}
            Nvidia’s company could survive without Huang. Its board could not
            bring itself to act as though that were true.
          </p>
        </CaseSection>

        <CaseSection title="How a strong CEO becomes an irreplaceable one">
          <p>
            Strength isn’t the problem. Nvidia exists because Huang made bold
            bets for three decades, and most of them were right. The problem is
            what forms around a leader like that when no one deliberately
            pushes back. <ExhibitRef n={2} /> shows a board with no leader of
            its own until the crisis. <ExhibitRef n={4} /> shows a market that
            priced the person, not the institution: one five-sentence statement
            moved about $100 billion. <ExhibitRef n={5} /> shows that other
            boards have removed CEOs for a relationship with an employee, and
            every Nvidia manager has now seen a different standard at the top.
          </p>
          <p>
            None of this is dramatic on its own. Together it produces a company
            that is commercially very strong and institutionally fragile.
          </p>
        </CaseSection>

        <CaseSection title="Results vs. resilience">
          <p>
            Results are what a company produces with its leader in place.{" "}
            <strong>Resilience</strong> is what’s left if the leader is gone
            tomorrow. Nvidia was tested on resilience in November. Its
            operations passed. Its governance did not. Management delivers the
            first; boards are paid to look after the second.
          </p>
        </CaseSection>

        <CaseSection title="Steve Jobs: both sides of the trap">
          <p>
            Jobs is usually held up as the ultimate indispensable founder, but
            he’s really the best example of escaping the trap. The first time,
            Apple had nothing to fall back on without him. The second time, he
            let Cook run Apple under pressure, and Cook later did the same for
            Ternus. The company that once couldn’t survive without its founder
            now hands over power routinely.
          </p>
          <p>
            The open question is which Jobs Jensen Huang will be now that he’s
            back.
          </p>
        </CaseSection>

        <CaseSection title="The fair case for the board">
          <p>
            The board’s defenders have real points. Huang has not been charged.
            He has <Ext href={SRC.businessday}>admitted serious mistakes</Ext>{" "}
            and agreed to cooperate and to testify. Shareholders and many
            employees wanted him back. The board added real structures (
            <ExhibitRef n={2} />
            ), and in a fast AI race continuity has value.
          </p>
          <p>
            My view is that these are reasons for{" "}
            <strong>patience and due process</strong>, not for skipping them. A
            board that is confident in what the investigation will find can
            wait for it. A board that isn’t confident has every reason to wait.
          </p>
        </CaseSection>
      </Part>

      {/* ================================================================ */}
      <Part id="lessons" n={3} title="Lessons and questions">
        <div className="mt-10">
          <h3 className="text-xl font-semibold sm:text-2xl">Lessons</h3>
          <NumberedList
            items={[
              <><strong className="text-ink dark:text-ink-dk">Succession has two layers.</strong> Have a name for tomorrow, and be ready to act on it. Most plans fail at the second layer.</>,
              <><strong className="text-ink dark:text-ink-dk">Separate the chair before the crisis, not during it.</strong></>,
              <><strong className="text-ink dark:text-ink-dk">Finish the process you start.</strong> An investigation you cut short protects no one, including the CEO.</>,
              <><strong className="text-ink dark:text-ink-dk">A board’s word is an asset.</strong> Commitments that reverse in days cost credibility with investors, regulators, auditors and employees.</>,
              <><strong className="text-ink dark:text-ink-dk">Private conduct stops being private</strong> when it involves a direct report, a major customer or national security.</>,
              <><strong className="text-ink dark:text-ink-dk">Performance is not a governance defense.</strong> Strong results justify patience, not exemptions.</>,
              <><strong className="text-ink dark:text-ink-dk">For founders:</strong> make your own period of one-person rule as short as possible. Build leaders who can do your job, and let them prove it before they need to.</>,
            ]}
          />
          <div className="u-prose u-measure mt-8 text-ink-body dark:text-ink-body-dk">
            <p>
              There’s a saying in India:{" "}
              <em>if you cannot be true to your own, how can you be true to anyone else?</em>{" "}
              Whatever one thinks of how it applies to a CEO’s private life, it
              applies to institutions without question. A board that cannot
              hold to its own decision cannot be relied on by anyone else.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-rule p-6 dark:border-rule-dk">
            <p className="u-eyebrow">For your leadership team</p>
            <h3 className="mt-2 text-lg font-semibold">Questions for your leadership team</h3>
            <QuestionList
              items={[
                "If our CEO left tomorrow, who would run the company, and have they ever done it under pressure?",
                "Who could lead us for the next decade? Is that the same person?",
                "Does our board have a leader who isn’t the CEO?",
                "Has our board ever made a decision our CEO strongly opposed? What happened?",
                "If our stock moved 3% on one person’s statement, what would that tell us?",
              ]}
            />
          </div>

          <div className="rounded-lg border border-rule p-6 dark:border-rule-dk">
            <p className="u-eyebrow">For classes and workshops</p>
            <h3 className="mt-2 text-lg font-semibold">Discussion questions</h3>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-[0.98rem] text-ink-body marker:font-sans marker:text-sm marker:text-ink-faint dark:text-ink-body-dk">
              <li>
                Go back to <a href="#decision-4" className="u-link">Decision point 4</a>.
                Which option would you have chosen, and what would you have said publicly?
              </li>
              <li>Was the 17 November “will not reinstate” statement a mistake in itself?</li>
              <li>How should a board weigh a petition from employees and shareholders against its own process?</li>
              <li>What weight, if any, should a board give to a head of government’s views on its CEO?</li>
              <li>Kress kept the company running. Is she now a stronger or weaker candidate for the next succession?</li>
              <li>
                Which of the changes in <ExhibitRef n={2} /> would actually
                constrain the CEO, and how would you test that in a year?
              </li>
            </ol>
          </div>
        </div>
      </Part>

      {/* ================================================================ */}
      <section id="watch" className="scroll-mt-16 border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-eyebrow">Updates</p>
        <h2 className="mt-2 text-2xl font-semibold">What to watch</h2>
        <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
          <p>
            I’ll add dated updates as these come in: the findings of the
            board’s investigation, Huang’s scheduled 1 December House
            interview, the DOJ probe into Megaspeed, the Chief Compliance
            Officer appointment, and any board changes.
          </p>
        </div>
        {/* Dated updates go here, newest first, as:
            <div className="mt-6 border-l-2 border-rule-strong pl-4">
              <p className="u-eyebrow">1 December 2026</p>
              <p>…</p>
            </div>
            and bump `updated` in src/content/cases.ts. */}
      </section>

      <footer id="sources" className="scroll-mt-16 border-t border-rule py-12 sm:py-16 dark:border-rule-dk">
        <p className="u-measure text-[0.95rem] text-ink-muted italic dark:text-ink-muted-dk">
          Researched with AI assistance; analysis and views are my own. All
          allegations are attributed to the outlets reporting them and remain
          unproven. I have no business relationship with Nvidia or the other
          companies mentioned.
        </p>

        <p className="u-eyebrow mt-10">Sources</p>
        <Sources
          items={[
            { label: "Nvidia 8-K, 12 Nov", href: SRC.sec12 },
            { label: "Nvidia 8-K, 23 Nov", href: SRC.sec23 },
            { label: "Nvidia Q3 FY27 results", href: SRC.q3 },
            { label: "ABC News timeline", href: SRC.abc },
            { label: "Fortune", href: SRC.fortune },
            { label: "TIME", href: SRC.time },
            { label: "NPR", href: SRC.npr },
            { label: "TNW", href: SRC.tnw },
            { label: "GPB/NPR, 17 Nov", href: SRC.gpb },
            { label: "FourWeekMBA", href: SRC.fwmba },
            { label: "Axios", href: SRC.axios },
            { label: "Apple succession (ABC7)", href: SRC.apple },
          ]}
        />

        <p className="u-sans mt-12 text-sm text-ink-muted dark:text-ink-muted-dk">
          <Link href="/cases" className="u-link">
            All cases
          </Link>{" "}
          &middot; Related:{" "}
          <Link href="/decision-intelligence" className="u-link">
            Decision Intelligence
          </Link>{" "}
          &middot;{" "}
          <Link href="/org-design" className="u-link">
            Your org chart is a record of old reasons
          </Link>
        </p>
      </footer>
    </div>
  );
}
