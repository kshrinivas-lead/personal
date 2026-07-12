import { SITE_NAME, SITE_URL } from "@/config";

/**
 * Structured data, emitted as a plain <script type="application/ld+json">.
 *
 * Next's metadata API has no first-class slot for JSON-LD, and this is the
 * shape Google's own documentation recommends. It is inert data, not an
 * executable script, so dangerouslySetInnerHTML is doing nothing dangerous —
 * but everything passed in must be authored here, never taken from user input.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes the < in any string, so this cannot break out
      // of the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** The author. Referenced by @id from every article, so the graph knows the
 *  Grounded framework and the site have the same human behind them. */
export const PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Enterprise AI & Transformation",
  description:
    "Twenty-six years in enterprise technology, spent on one question: when AI starts taking real actions inside a business, who decided it was allowed to?",
  knowsAbout: [
    "Enterprise AI",
    "AI governance",
    "Digital transformation",
    "AI investment readiness",
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-GB",
    },
  ],
};

/**
 * Grounded is described as a TechArticle rather than a plain Article: it is a
 * method with a version number, published for comment and intended to be
 * cited. `version` and `license` are the fields that make that legible to a
 * machine — and they are the two claims the framework makes loudest about
 * itself.
 */
export const groundedJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}/grounded#article`,
  headline:
    "Grounded — a framework for testing whether an organisation is ready for the AI investment in front of it",
  description:
    "An open diagnostic: ten blocks, thirty evidence questions, three gates that cannot be averaged away, answers collected privately by role, and an output that is a verdict with a priced register of gaps — not a score.",
  url: `${SITE_URL}/grounded`,
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-GB",
  version: "1.0",
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
  keywords: [
    "AI readiness assessment",
    "AI investment",
    "transformation readiness",
    "AI governance",
    "foundation debt",
  ],
};

export const toolkitJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/grounded/toolkit#howto`,
  name: "The Grounded Practice Toolkit — how to run a Grounded Assessment",
  description:
    "Eight artifacts covering a full Grounded Assessment, from the engagement letter to the board one-pager. Six Word templates, two Excel workbooks. Free and editable.",
  url: `${SITE_URL}/grounded/toolkit`,
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-GB",
  totalTime: "P14D",
  isAccessibleForFree: true,
  step: [
    {
      "@type": "HowToStep",
      name: "Contract the engagement",
      text: "Issue the engagement letter before Day 1, making the method's non-negotiables contractual before anyone answers a question.",
    },
    {
      "@type": "HowToStep",
      name: "Agree the Investment Statement",
      text: "The sponsor lands one sentence on Day 1. If leadership cannot agree it in a single call, that is finding number one.",
    },
    {
      "@type": "HowToStep",
      name: "Run private intake",
      text: "Each role answers the thirty evidence questions alone, in confidence, in about twenty minutes.",
    },
    {
      "@type": "HowToStep",
      name: "Aggregate and score",
      text: "The facilitator transcribes the forms into the scoring workbook, which computes block scores, gates, fault lines, the verdict and the expiry date.",
    },
    {
      "@type": "HowToStep",
      name: "Facilitate the session",
      text: "Ninety minutes, opening on the fault lines and closing with the verdict. Contested answers are settled by putting the artifact on screen.",
    },
    {
      "@type": "HowToStep",
      name: "Report the verdict",
      text: "Deliver the assessment report and the board one-pager, carrying the foundation debt into the business case.",
    },
  ],
};
