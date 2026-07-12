"use client";

import { useState } from "react";
import {
  COUNTER_KEY,
  COUNTER_NAMESPACE,
  GROUNDED_PDF,
  TOOLKIT_COUNTER_KEY,
  TOOLKIT_ZIP,
  WEB3FORMS_KEY,
} from "@/config";
import { trackDownload } from "@/lib/analytics";

/**
 * The download is ungated. Always. Section 11 of the note answers the
 * "consultant-ware" objection by promising the framework is open and free — a
 * form standing between the reader and the PDF would make that a lie on the
 * page where it is claimed.
 *
 * The email is a separate, genuinely optional ask: it buys participation in the
 * argument, not the download.
 *
 * The counter increments on click. It is deliberately NOT rendered. A public
 * download count is an argument from popularity, which is the exact reasoning
 * this framework exists to refuse. Read it at:
 *   https://abacus.jasoncameron.dev/get/<namespace>/<key>
 */
function countDownload() {
  // Fire-and-forget. A dead counter must never block a download.
  fetch(
    `https://abacus.jasoncameron.dev/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
    { keepalive: true }
  ).catch(() => {});

  trackDownload({
    asset: "concept-note",
    fileName: "grounded-concept-note-v1.pdf",
    href: GROUNDED_PDF,
    surface: "download-panel",
  });
}

/** Counted separately from the note. The interesting number is not how many
 *  people read the argument — it is how many took the files, which is the only
 *  signal that anyone intends to actually run an assessment. Also not rendered. */
function countToolkit() {
  fetch(
    `https://abacus.jasoncameron.dev/hit/${COUNTER_NAMESPACE}/${TOOLKIT_COUNTER_KEY}`,
    { keepalive: true }
  ).catch(() => {});

  trackDownload({
    asset: "toolkit-bundle",
    fileName: "grounded-toolkit-v1.zip",
    href: TOOLKIT_ZIP,
    surface: "download-panel",
  });
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 11.586V3a1 1 0 0 1 1-1ZM3 15a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

/** Better to ask for nothing than to ask and then drop it on the floor. If the
 *  Web3Forms key is not set, the optional-email block is not rendered at all —
 *  the PDF still downloads, which is the part that matters. */
const EMAIL_ENABLED =
  WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("REPLACE_WITH_");

export function DownloadGrounded() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    // FormData, not JSON. A JSON content-type makes this a "preflighted" request,
    // and Web3Forms does not answer the OPTIONS probe from this origin — the POST
    // never leaves the browser. FormData is a CORS-safelisted content type, so it
    // goes straight out with no preflight.
    const form = new FormData();
    form.append("access_key", WEB3FORMS_KEY);
    form.append("subject", "Grounded v1.0 — someone left their email");
    form.append("from_name", "Grounded (website)");
    form.append("email", email.trim());
    form.append(
      "message",
      `${email.trim()} asked to hear what the field data says.`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "error");

      // Only on genuine success — a failed POST that still reported a lead
      // would quietly inflate the one number here that is supposed to mean
      // someone actually reached me. No email address is ever pushed to the
      // dataLayer: GTM is not a place to put personal data.
      if (result.success && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: "generate_lead", form: "grounded-optional-email" });
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded border border-rule bg-white/60 p-6 sm:p-8 dark:border-rule-dk dark:bg-paper-raised-dk">
      <p className="u-eyebrow">Version 1.0 · Published for comment</p>

      <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Take both</h2>

      <p className="u-measure mt-3 text-ink-body dark:text-ink-body-dk">
        The argument and the kit that runs it. Neither is gated — a framework
        that claims to be open and then puts a form in front of its own
        templates is not open.
      </p>

      {/* Two doors, deliberately equal in weight. The note is not the product
          and the toolkit is not an appendix — someone arriving to *run* an
          assessment should not have to read fourteen pages to find the files. */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col rounded border border-rule bg-paper p-5 dark:border-rule-dk dark:bg-paper-dk">
          <h3 className="text-lg font-semibold">The concept note</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
            Fourteen pages. Every question, every scoring rule, the worked
            example, and a section devoted entirely to where the framework is
            most exposed to challenge.
          </p>
          <a
            href={GROUNDED_PDF}
            download
            onClick={countDownload}
            className="u-sans mt-5 inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
          >
            <DownloadIcon />
            Concept note (PDF)
          </a>
        </div>

        <div className="flex flex-col rounded border border-rule bg-paper p-5 dark:border-rule-dk dark:bg-paper-dk">
          <h3 className="text-lg font-semibold">The practice toolkit</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-body dark:text-ink-body-dk">
            All eight artifacts — six Word templates, two Excel workbooks. The
            scoring engine computes the gates, the fault lines, the verdict and
            the expiry on its own.
          </p>
          <a
            href={TOOLKIT_ZIP}
            download
            onClick={countToolkit}
            className="u-sans mt-5 inline-flex items-center justify-center gap-2 rounded bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
          >
            <DownloadIcon />
            All eight files (ZIP)
          </a>
        </div>
      </div>

      <p className="u-sans mt-3 text-xs text-ink-faint dark:text-ink-muted-dk">
        No email required. No form in the way. Individual files are linked
        against each artifact above.
      </p>

      {EMAIL_ENABLED && (
        <>
      <hr className="u-rule my-8" />

      <h3 className="u-sans text-sm font-semibold text-ink dark:text-ink-dk">
        Optional
      </h3>

      <p className="u-measure u-sans mt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dk">
        Leave an email only if you want to hear what the field data says when it
        comes in, or if you intend to tell me where the method creaked. It reaches
        me directly, at a personal address. No list, no sequence, no sales call —
        and if you would rather just take the PDF, take it. The framework is open
        either way.
      </p>

      {status === "sent" ? (
        <p className="u-sans mt-4 text-sm text-pass dark:text-[#7fb894]">
          Thank you — that reached me. If you find where it creaks, I would rather
          hear it than not.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="grounded-email" className="sr-only">
            Your email address
          </label>
          <input
            id="grounded-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@organisation.com"
            className="u-sans min-w-0 flex-1 rounded border border-rule-strong bg-white px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint dark:border-rule-dk dark:bg-paper-dk dark:text-ink-dk"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="u-sans rounded border border-ink px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-50 dark:border-ink-dk dark:text-ink-dk dark:hover:bg-ink-dk dark:hover:text-paper-dk"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="u-sans mt-3 text-sm text-fail dark:text-[#dd8a84]">
          That did not go through. The PDF is unaffected — it is above, and it does
          not need this form.
        </p>
      )}
        </>
      )}
    </div>
  );
}
