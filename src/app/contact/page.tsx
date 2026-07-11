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
            No form, no booking widget. Write if you have an AI investment you are
            weighing, a governance problem you are stuck on, a room you would like
            me to speak to — or an argument you want tested before you take it to
            your board.
          </p>
          <p>
            And if you think something here is wrong, say so. That email is welcome
            too, and it is the kind I learn most from.
          </p>
          <p>
            I lecture and speak on enterprise AI, governance, and why transformation
            programmes fail for reasons that have nothing to do with the technology.
            Same address.
          </p>
        </div>
      </section>
    </div>
  );
}
