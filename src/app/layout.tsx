import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GTM_ID, SITE_NAME, SITE_URL } from "@/config";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const TITLE = "Shrinivas Kulkarni — Enterprise AI, Governance, Transformation";
const DESCRIPTION =
  "Twenty-six years in enterprise technology, spent on one question: when AI starts taking real actions inside a business, who decided it was allowed to?";

export const metadata: Metadata = {
  /* Everything relative — canonicals, OG images — resolves against this. */
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og/og-default.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* The font variables must live on <html>, not <body>. `--font-serif` is
       declared on :root and references `--font-source-serif`; if that inner
       variable is only defined on <body>, it is undefined at :root and the
       whole declaration computes to empty — silently falling back to sans. */
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${inter.variable}`}
    >
      {/* Google Tag Manager, literally in <head> as GTM's install guide asks.
          next/script's `beforeInteractive` was the obvious choice and is
          wrong here: under App Router it injects the tag at the top of <body>,
          not <head>, which loses the earliest pageview signal. A raw inline
          script in an explicit <head> is what actually honours the
          instruction, and it costs nothing — the tag it injects is async, so
          it never blocks the first paint.

          No consent banner ships with this. GTM's Consent Mode is configured
          in the GTM UI, not in this repo — which is the whole reason to prefer
          GTM over a hard-coded gtag: the analytics policy can change without a
          deploy. If EU consent becomes a requirement, that is where it wires
          in. */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>

      <body>
        {/* The noscript half of GTM, first thing inside <body> as specified. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class">
          <a
            href="#main"
            className="u-sans sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
