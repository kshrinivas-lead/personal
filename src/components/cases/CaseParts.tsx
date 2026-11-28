import type { ReactNode } from "react";
import Link from "next/link";
import { type Case, SERIES_NAME, formatDate } from "@/content/cases";

/*
 * Building blocks shared by every case page, so each case reads the same way:
 * a status line, a contents bar, decision points that hold back what actually
 * happened until the reader asks, numbered exhibits that the argument can link
 * to, and a closing sources block.
 *
 * Everything here renders to static HTML. The decision-point reveal is a
 * native <details>, so it needs no JavaScript and the hidden text is still in
 * the page for search and for screen readers.
 */

/* ---- Header ------------------------------------------------------------- */

export function CaseHeader({
  c,
  subtitle,
  epigraph,
  note,
  children,
}: {
  c: Case;
  subtitle: string;
  epigraph?: ReactNode;
  /** Standing note shown under the intro, e.g. that allegations are unproven. */
  note?: ReactNode;
  /** "How to read this". */
  children?: ReactNode;
}) {
  return (
    <header className="pt-16 pb-8 sm:pt-24 sm:pb-10">
      <p className="u-eyebrow">
        <Link href="/cases" className="hover:text-ink dark:hover:text-ink-dk">
          Case
        </Link>{" "}
        · {SERIES_NAME}
      </p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{c.title}</h1>
      <p className="u-measure mt-4 text-lg italic text-ink-body dark:text-ink-body-dk">
        {subtitle}
      </p>

      <p className="u-sans mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-muted dark:text-ink-muted-dk">
        <span>By Shrinivas Kulkarni</span>
        <span aria-hidden="true">·</span>
        <span>
          As of <time dateTime={c.updated}>{formatDate(c.updated)}</time>
        </span>
        {c.status === "developing" && (
          <span className="u-chip u-chip-partial">Developing — investigations open</span>
        )}
      </p>

      {epigraph && (
        <blockquote className="u-pullquote u-measure mt-8">{epigraph}</blockquote>
      )}

      {children && (
        <div className="u-prose u-measure mt-8 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
          {children}
        </div>
      )}

      {note && (
        <aside className="u-sans u-measure mt-5 rounded border border-rule bg-paper-raised px-4 py-3 text-sm leading-relaxed text-ink-muted dark:border-rule-dk dark:bg-paper-raised-dk dark:text-ink-muted-dk">
          {note}
        </aside>
      )}
    </header>
  );
}

/* ---- Contents bar ------------------------------------------------------- */

export function CaseContents({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav
      aria-label="On this page"
      className="u-sans sticky top-0 z-30 -mx-5 border-y border-rule bg-paper/95 px-5 backdrop-blur sm:-mx-8 sm:px-8 dark:border-rule-dk dark:bg-paper-dk/95"
    >
      <ul className="flex gap-1 overflow-x-auto py-2 text-sm whitespace-nowrap">
        {items.map((i) => (
          <li key={i.href}>
            <a
              href={i.href}
              className="block rounded px-2.5 py-1.5 text-ink-muted transition-colors hover:bg-rule/50 hover:text-ink dark:text-ink-muted-dk dark:hover:bg-rule-dk dark:hover:text-ink-dk"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---- Parts and sections ------------------------------------------------- */

export function Part({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-rule py-12 sm:py-16 dark:border-rule-dk"
    >
      <p className="u-eyebrow">Part {n}</p>
      <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export function CaseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="mt-12 scroll-mt-16">
      <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
      <div className="u-prose u-measure mt-4 text-ink-body dark:text-ink-body-dk">
        {children}
      </div>
    </div>
  );
}

/* ---- Decision points ---------------------------------------------------- */

export const dpId = (n: number) => `decision-${n}`;

export function DecisionPoint({
  n,
  date,
  situation,
  options,
  question,
  outcome,
}: {
  n: number;
  date: string;
  situation: ReactNode;
  options?: { key: string; text: ReactNode }[];
  question: ReactNode;
  /** "What the board did" — held back until the reader opens it. */
  outcome: ReactNode;
}) {
  return (
    <div
      id={dpId(n)}
      className="mt-10 scroll-mt-16 rounded-lg border border-rule-strong bg-paper-raised dark:border-rule-dk dark:bg-paper-raised-dk"
    >
      <div className="px-5 pt-5 pb-6 sm:px-7">
        <p className="u-eyebrow flex items-center gap-2">
          <span aria-hidden="true">⏸</span> Decision point {n} · {date}
        </p>
        <div className="mt-3 text-[1.02rem] text-ink-body dark:text-ink-body-dk">
          {situation}
        </div>

        {options && (
          <div className="mt-5">
            <p className="u-sans text-sm font-semibold text-ink dark:text-ink-dk">
              Your options{n === 1 ? " as a director" : ""}
            </p>
            <ul className="mt-2 space-y-1.5 text-[0.95rem] text-ink-body dark:text-ink-body-dk">
              {options.map((o) => (
                <li key={o.key} className="flex gap-3">
                  <span className="u-sans w-5 shrink-0 pt-0.5 text-sm font-semibold text-ink-muted dark:text-ink-muted-dk">
                    {o.key}
                  </span>
                  <span>{o.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-5 text-[0.95rem] italic text-ink dark:text-ink-dk">
          {question}
        </p>
      </div>

      <details className="group border-t border-rule dark:border-rule-dk">
        <summary className="u-sans flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink select-none sm:px-7 dark:text-ink-dk [&::-webkit-details-marker]:hidden">
          <span>
            <span className="group-open:hidden">Decide first, then see what the board did</span>
            <span className="hidden group-open:inline">What the board did</span>
          </span>
          <span
            aria-hidden="true"
            className="text-ink-muted transition-transform group-open:rotate-90 dark:text-ink-muted-dk"
          >
            &rarr;
          </span>
        </summary>
        <div className="u-prose px-5 pb-6 text-[0.95rem] text-ink-body sm:px-7 dark:text-ink-body-dk">
          {outcome}
        </div>
      </details>
    </div>
  );
}

/* ---- Exhibits ----------------------------------------------------------- */

export const exhibitId = (n: number) => `exhibit-${n}`;

/** An inline "(Exhibit 3)" that jumps to the exhibit. */
export function ExhibitRef({ n, children }: { n: number; children?: ReactNode }) {
  return (
    <a href={`#${exhibitId(n)}`} className="u-link">
      {children ?? `Exhibit ${n}`}
    </a>
  );
}

export function Exhibit({
  n,
  title,
  note,
  children,
}: {
  n: number;
  title: string;
  note?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure id={exhibitId(n)} className="mt-12 scroll-mt-16">
      <figcaption>
        <p className="u-eyebrow">Exhibit {n}</p>
        <p className="mt-1 text-lg font-semibold text-ink dark:text-ink-dk">{title}</p>
      </figcaption>
      <div className="mt-4">{children}</div>
      {note && (
        <p className="u-sans mt-3 text-xs text-ink-muted dark:text-ink-muted-dk">{note}</p>
      )}
    </figure>
  );
}

export function ExhibitTable({
  head,
  rows,
  minWidth = 480,
}: {
  head: string[];
  rows: ReactNode[][];
  minWidth?: number;
}) {
  return (
    <div className="u-sans overflow-x-auto">
      <table
        className="w-full border-y border-rule text-left text-[0.9rem] dark:border-rule-dk"
        style={{ minWidth }}
      >
        <thead>
          <tr className="border-b border-rule text-xs uppercase tracking-wider text-ink-muted dark:border-rule-dk dark:text-ink-muted-dk">
            {head.map((h, i) => (
              <th key={i} className="py-3 pr-4 align-bottom font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-rule text-ink-body dark:divide-rule-dk dark:text-ink-body-dk">
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 align-top ${
                    j === 0 ? "font-semibold text-ink dark:text-ink-dk" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A vertical timeline. Rows tied to a decision point link to it. */
export function Timeline({
  rows,
}: {
  rows: { date: string; event: ReactNode; decision?: number }[];
}) {
  return (
    <ol className="u-sans border-l border-rule-strong dark:border-rule-dk">
      {rows.map((r) => (
        <li key={r.date} className="relative pb-5 pl-6 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute top-[0.45rem] -left-[5px] h-[9px] w-[9px] rounded-full ${
              r.decision
                ? "bg-ink dark:bg-ink-dk"
                : "border border-rule-strong bg-paper dark:border-rule-dk dark:bg-paper-dk"
            }`}
          />
          <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase dark:text-ink-muted-dk">
            {r.date}
            {r.decision && (
              <a
                href={`#${dpId(r.decision)}`}
                className="ml-2 font-semibold normal-case tracking-normal text-ink underline decoration-rule-strong underline-offset-2 hover:decoration-current dark:text-ink-dk"
              >
                Decision point {r.decision}
              </a>
            )}
          </p>
          <p className="mt-1 text-[0.92rem] text-ink-body dark:text-ink-body-dk">{r.event}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---- Lists -------------------------------------------------------------- */

export function NumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-6 divide-y divide-rule border-y border-rule dark:divide-rule-dk dark:border-rule-dk">
      {items.map((it, i) => (
        <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-4">
          <span className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="text-[0.98rem] text-ink-body dark:text-ink-body-dk">{it}</div>
        </li>
      ))}
    </ol>
  );
}

export function QuestionList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[0.98rem] text-ink-body dark:text-ink-body-dk">
          <span aria-hidden="true" className="u-sans pt-0.5 text-sm text-ink-faint dark:text-ink-muted-dk">
            ?
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---- Sources ------------------------------------------------------------ */

export function Sources({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="u-sans mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
      {items.map((s) => (
        <li key={s.href}>
          <a href={s.href} className="u-link" target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** External link used inside body text. */
export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="u-link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
