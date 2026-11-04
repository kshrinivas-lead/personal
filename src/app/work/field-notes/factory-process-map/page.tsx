import type { Metadata } from "next";
import Link from "next/link";
import { MapFrame } from "@/components/MapFrame";

const MAP_SRC = "/field-notes/factory-process-map.html";

export const metadata: Metadata = {
  title: "How a factory runs, on one page — Field Notes",
  description:
    "An interactive map of the ten processes around a factory's shop floor, with what is specific to Indian auto plants and how each process connects to the others.",
  alternates: { canonical: "/work/field-notes/factory-process-map" },
};

export default function FactoryProcessMap() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <header className="pt-16 pb-8 sm:pt-24 sm:pb-10">
        <p className="u-eyebrow">Field Notes</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          How a factory runs, on one page
        </h1>
        <p className="u-measure mt-5 text-lg italic text-ink-body dark:text-ink-body-dk">
          A first step in understanding the domain before automating it.
        </p>
        <p className="u-sans mt-4 text-sm">
          <Link href="/work" className="u-link">
            &larr; Work
          </Link>
          <span className="mx-3 text-ink-muted dark:text-ink-muted-dk">·</span>
          <a href={MAP_SRC} className="u-link">
            Open full page
          </a>
        </p>
      </header>

      <MapFrame src={MAP_SRC} title="Interactive map of factory processes" />
    </div>
  );
}
