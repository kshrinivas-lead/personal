import type { Metadata } from "next";
import { SITE_NAME } from "@/config";

export const DEFAULT_OG_IMAGE = "/og/og-default.png";

/**
 * Per-page metadata, including the social-sharing tags.
 *
 * Use this on every page except the home page. Next merges metadata one
 * top-level key at a time: a page that sets `title` but no `openGraph`
 * inherits the layout's entire `openGraph` object, including
 * `og:url = SITE_URL`. LinkedIn trusts `og:url` over the address that was
 * pasted, so every such page was shared as the home page. Building `openGraph`
 * and `twitter` here for every page closes that hole.
 *
 * `path` is relative ("/structural-tension"). metadataBase in the layout makes
 * it absolute, and trailingSlash adds the slash, so the canonical and og:url
 * always match.
 */
export function pageMetadata({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
  type = "article",
}: {
  path: string;
  title: string;
  description: string;
  /** 1200×630 PNG under /public/og. Falls back to the site default. */
  image?: string;
  imageAlt?: string;
  type?: "article" | "website";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_GB",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
