import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Shrinivas Kulkarni — Enterprise AI, Governance, Transformation",
  description:
    "Twenty-six years in enterprise technology, spent on one question: when AI starts taking real actions inside a business, who decided it was allowed to?",
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
      <body>
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
