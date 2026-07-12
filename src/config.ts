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
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "12da7a5f-448a-463a-a366-5f93859be393";

/** Namespace for the download counter (Abacus). Counts clicks, not reads.
 *  Deliberately not rendered on the page — see notes in DownloadGrounded.tsx. */
export const COUNTER_NAMESPACE = "kshrinivas-personal";
export const COUNTER_KEY = "grounded-v1-pdf";
export const TOOLKIT_COUNTER_KEY = "grounded-v1-toolkit";

export const CONTACT_EMAIL = "kshrinivas.lead@gmail.com";

/** Canonical origin. Matches public/CNAME — the site is served from here and
 *  nowhere else. Required by metadataBase: without it, every relative Open
 *  Graph image URL resolves against localhost and the social cards break in
 *  production while looking perfect in dev. */
export const SITE_URL = "https://shrini.tuvisminds.com";

export const SITE_NAME = "Shrinivas Kulkarni";

/** Google Tag Manager container. GTM (not gtag) is deliberate: it means the
 *  analytics configuration lives in GTM's UI, not in this repo — including
 *  Consent Mode, which is where a cookie banner would be wired if one is ever
 *  added. No consent banner ships today; see the note in layout.tsx. */
export const GTM_ID = "GTM-TXK2MSDD";

/** The site is served from the root of shrini.tuvisminds.com, so there is no
 *  basePath to prepend — in dev or in production. Kept as a named constant
 *  because static export does not prefix plain <a href> paths (only next/link
 *  and next/image do), so if a basePath is ever reintroduced, this is the one
 *  place asset links need to learn about it. */
export const BASE_PATH = "";

/** Drop the PDF at public/grounded-concept-note-v1.pdf */
export const GROUNDED_PDF = `${BASE_PATH}/grounded-concept-note-v1.pdf`;

/** The eight practice artifacts (Word / Excel), plus a zip of all of them.
 *  Ungated, exactly like the note — see DownloadGrounded.tsx. A framework that
 *  claims to be open and then puts a form in front of its own templates is not
 *  open; it is lead generation with a manifesto attached. */
export const TOOLKIT_DIR = `${BASE_PATH}/toolkit`;
export const TOOLKIT_ZIP = `${TOOLKIT_DIR}/grounded-toolkit-v1.zip`;
