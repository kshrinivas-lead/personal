"use client";

import { useState } from "react";
import {
  COUNTER_KEY,
  COUNTER_NAMESPACE,
  GROUNDED_PDF,
  WEB3FORMS_KEY,
} from "@/config";

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
}

type Status = "idle" | "sending" | "sent" | "error";

export function DownloadGrounded() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Grounded v1.0 — someone left their email",
          from_name: "Grounded (website)",
          email: email.trim(),
          message: `${email.trim()} asked to hear what the field data says.`,
        }),
      });

      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded border border-rule bg-white/60 p-6 sm:p-8 dark:border-rule-dk dark:bg-paper-raised-dk">
      <p className="u-eyebrow">Concept Note · Version 1.0 · Published for comment</p>

      <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
        Read the framework
      </h2>

      <p className="u-measure mt-3 text-ink-body dark:text-ink-body-dk">
        Fourteen pages. Every question, every scoring rule, the worked example, and
        a section devoted entirely to where the framework is most exposed to
        challenge. It is open, citable, and runnable by one person with a
        spreadsheet.
      </p>

      <a
        href={GROUNDED_PDF}
        download
        onClick={countDownload}
        className="u-sans mt-6 inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 dark:bg-ink-dk dark:text-paper-dk"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 11.586V3a1 1 0 0 1 1-1ZM3 15a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z" />
        </svg>
        Download the concept note (PDF)
      </a>

      <p className="u-sans mt-2 text-xs text-ink-faint dark:text-ink-muted-dk">
        No email required. No form in the way.
      </p>

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
    </div>
  );
}
