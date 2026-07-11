/**
 * Launch switch for the Grounded framework.
 *
 * While false: /grounded still builds and is reachable by direct URL (so it can be
 * previewed and shared privately), but nothing on the site links to it — no nav
 * entry, no hero route, no footer link.
 *
 * Flip to true on publication day. That is the only change required.
 */
export const GROUNDED_PUBLISHED = true;

/** Web3Forms access key — delivers submissions to kshrinivas.lead@gmail.com.
 *  Get one free at https://web3forms.com (no account needed beyond the address).
 *  This key is public by design; it can only send mail to the verified address. */
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

/** Namespace for the download counter (Abacus). Counts clicks, not reads.
 *  Deliberately not rendered on the page — see notes in DownloadGrounded.tsx. */
export const COUNTER_NAMESPACE = "kshrinivas-personal";
export const COUNTER_KEY = "grounded-v1-pdf";

export const CONTACT_EMAIL = "kshrinivas.lead@gmail.com";

/** Must match `basePath` in next.config.js — empty in dev, "/personal" in the
 *  production build for GitHub Pages. Static export does not prefix plain
 *  <a href> or fetch() paths — only next/link and next/image. So asset links
 *  under public/ must carry it explicitly. NODE_ENV is inlined at build time. */
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/personal" : "";

/** Drop the PDF at public/grounded-concept-note-v1.pdf */
export const GROUNDED_PDF = `${BASE_PATH}/grounded-concept-note-v1.pdf`;
