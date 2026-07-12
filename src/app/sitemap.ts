import type { MetadataRoute } from "next";
import { GROUNDED_PUBLISHED, SITE_URL } from "@/config";

/* Required under `output: export` — see robots.ts. */
export const dynamic = "force-static";

/**
 * Emitted as a static /sitemap.xml at export time.
 *
 * Priorities are not a ranking lever — Google largely ignores them — but they
 * are an honest statement of what this site is for. Grounded is the reason the
 * site exists; the rest is context for it.
 *
 * lastModified is a build-time stamp. That is the correct semantic here: these
 * are static pages, so "when was this deployed" is the best available answer
 * to "when did this change".
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/point-of-view", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" as const },
    ...(GROUNDED_PUBLISHED
      ? [
          { path: "/grounded", priority: 0.9, changeFrequency: "monthly" as const },
          {
            path: "/grounded/toolkit",
            priority: 0.9,
            changeFrequency: "monthly" as const,
          },
        ]
      : []),
  ];

  return routes.map((route) => ({
    /* trailingSlash: true in next.config — every canonical Next emits ends in
       a slash, so the sitemap must agree or Search Console sees two URLs. */
    url: `${SITE_URL}${route.path}/`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
