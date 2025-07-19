import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrini - AI Strategist & Software Architect",
  description: "Shrinivas Kulkarni is an AI strategist, software architect, and thought leader focused on translating AI innovation into business value. Bridging cutting-edge technology with strategic business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${manrope.className}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
