/**
 * The case registry. One entry per published case, newest first.
 *
 * The /cases index, the Writing page, the home page card and the sitemap all
 * read from here, so adding a case means: write its page under
 * src/app/cases/<slug>/page.tsx, make its 1200×630 social card in
 * public/og, then add one entry below.
 *
 * `updated` changes whenever a dated update is added to a developing case.
 */
export type Case = {
  slug: string;
  title: string;
  company: string;
  /** One sentence for listings and social cards. */
  hook: string;
  /** ISO dates. */
  published: string;
  updated: string;
  /** "developing" while investigations or events are still open. */
  status: "developing" | "closed";
  /** 1200×630 social card under /public/og. Shown when the link is shared. */
  ogImage: string;
};

export const SERIES_NAME = "Leadership, boards and accountability";

export const SERIES_BLURB =
  "Case studies of real leadership and board decisions, written neutrally first, then argued. Each one pauses at the decisions so you can ask what you would have done.";

export const CASES: Case[] = [
  {
    slug: "nvidia-indispensability-trap",
    title: "The Indispensability Trap: Nvidia’s 26 Days",
    company: "Nvidia",
    hook: "The succession plan worked. The board didn’t. How Nvidia’s directors accepted their founder’s resignation, ruled out his return, and reinstated him within twelve days, before their own investigation reported.",
    published: "2026-11-28",
    updated: "2026-11-28",
    status: "developing",
    ogImage: "/og/og-case-nvidia.png",
  },
];

export const casePath = (slug: string) => `/cases/${slug}`;

/** "28 November 2026" */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getCase(slug: string): Case {
  const c = CASES.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown case: ${slug}`);
  return c;
}
