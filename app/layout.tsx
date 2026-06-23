import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://aetherion.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aetherion — Engineering the Frontier",
    template: "%s — Aetherion",
  },
  description:
    "Aetherion develops intelligence and technology infrastructure for the next era of science, energy, aerospace, defence, and advanced computing.",
  keywords: [
    "frontier technology",
    "deep tech intelligence",
    "quantum technology",
    "photonics",
    "defence technology",
    "aerospace systems",
    "advanced computing",
    "technology intelligence platform",
  ],
  authors: [{ name: "Aetherion" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aetherion — Engineering the Frontier",
    description:
      "Intelligence and technology infrastructure for the next era of science, energy, aerospace, defence, and advanced computing.",
    siteName: "Aetherion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion — Engineering the Frontier",
    description:
      "Intelligence and technology infrastructure for the next era of science, energy, aerospace, defence, and advanced computing.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-black text-bone font-sans antialiased selection:bg-bone selection:text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
