import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.SITE_URL?.trim() || "https://armenia70.miasinglobal.org";
const siteBasePath = process.env.SITE_BASE_PATH?.trim() || "";
const canonicalPath = siteBasePath ? `${siteBasePath}/` : "/";
const logoPath = siteBasePath ? `${siteBasePath}/Logo_armenia70.png` : "/Logo_armenia70.png";
const socialImagePath = siteBasePath ? `${siteBasePath}/og-image.png` : "/og-image.png";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Armenia 70",
  description:
    "A civic initiative to increase voter turnout and participation in Armenia. Calm, transparent, and without pressure.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: canonicalPath,
  },
  applicationName: "Armenia 70",
  icons: {
    icon: logoPath,
    shortcut: logoPath,
    apple: logoPath,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalPath,
    title: "Armenia 70",
    description:
      "A civic initiative to increase voter turnout and participation in Armenia. Calm, transparent, and without pressure.",
    siteName: "Armenia 70",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 630,
        alt: "Armenia 70"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Armenia 70",
    description:
      "A civic initiative to increase voter turnout and participation in Armenia. Calm, transparent, and without pressure.",
    images: [socialImagePath]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F9F7F4] text-[#1F1F1F]">{children}</body>
    </html>
  );
}
