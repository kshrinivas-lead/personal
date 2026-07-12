import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config";

/* Required under `output: export` — without it Next treats the route as
   dynamic and refuses to emit a file at build time. */
export const dynamic = "force-static";

/**
 * Everything is crawlable. There is nothing on this site that is not meant to
 * be found, and the toolkit files in /toolkit are deliberately indexable — a
 * framework that claims to be open should be discoverable by someone searching
 * for the thing it does, not only by people who already know its name.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
