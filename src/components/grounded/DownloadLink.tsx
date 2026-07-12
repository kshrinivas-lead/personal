"use client";

import { trackDownload } from "@/lib/analytics";

/**
 * A single artifact download. Client-only for the sake of one onClick, so the
 * toolkit timeline around it can stay a server component with zero JS.
 *
 * It is a real <a download> first and a tracked event second — if the script
 * never loads, the file still downloads.
 */
export function DownloadLink({
  href,
  fileName,
  asset,
  className,
  children,
}: {
  href: string;
  fileName: string;
  asset: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      download
      className={className}
      onClick={() =>
        trackDownload({ asset, fileName, href, surface: "artifact-row" })
      }
    >
      {children}
    </a>
  );
}
