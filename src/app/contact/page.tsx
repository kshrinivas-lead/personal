import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/config";

export const metadata: Metadata = {
  title: "Contact — Shrinivas Kulkarni",
  description: "An email address.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <section className="py-20 sm:py-28">
        <p className="u-eyebrow">Contact</p>

        <h1 className="mt-4 break-words text-2xl font-semibold sm:text-4xl">
          <a href={`mailto:${CONTACT_EMAIL}`} className="u-link">
            {CONTACT_EMAIL}
          </a>
        </h1>

        <div className="u-prose u-measure mt-8 text-ink-body dark:text-ink-body-dk">
          <p>
            No form, no booking widget. If you have read something here and think it
            is wrong, that is the email I most want to receive.
          </p>
          <p>
            I also lecture and speak — on enterprise AI, governance, and why
            transformation programmes fail for reasons that have nothing to do with
            the technology. Same address.
          </p>
        </div>
      </section>
    </div>
  );
}
