/**
 * The one place that knows how a download is reported.
 *
 * Everything goes to the GTM dataLayer rather than to GA4 directly. Nothing in
 * this repo names GA4, or knows it exists — GTM decides what listens. That is
 * the point of installing a tag manager instead of a tracker.
 *
 * The event name is `file_download`, which is GA4's own recommended name for
 * this, with `file_name` / `file_extension` / `link_url` as its recommended
 * parameters. Using the standard names means GA4 populates its built-in file
 * download reports without anyone having to configure a custom dimension.
 *
 * `asset` and `surface` are the two custom parameters worth having:
 *   asset   — which artifact, stable across renames of the file itself
 *   surface — where the click came from (the bundle panel vs. an artifact row),
 *             which is the only way to tell "took everything on the way past"
 *             from "went looking for the scoring workbook specifically".
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type DownloadSurface =
  | "download-panel" // the two-door "Take both" block
  | "artifact-row"; // an individual artifact in the toolkit timeline

export function trackDownload({
  asset,
  fileName,
  href,
  surface,
}: {
  asset: string;
  fileName: string;
  href: string;
  surface: DownloadSurface;
}) {
  // A missing or blocked dataLayer must never break a download. The href is a
  // real link with a `download` attribute — the browser handles it whether or
  // not this fires, and that ordering is deliberate: analytics is the thing
  // allowed to fail here.
  if (typeof window === "undefined" || !Array.isArray(window.dataLayer)) return;

  window.dataLayer.push({
    event: "file_download",
    file_name: fileName,
    file_extension: fileName.split(".").pop() ?? "",
    link_url: href,
    asset,
    surface,
  });
}
