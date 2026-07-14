import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { LoadingScreen } from "@/components/loading-screen";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://mohamedmamdouh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohamed Mamdouh, PMP® — Software Project Manager",
    template: "%s — Mohamed Mamdouh",
  },
  description:
    "PMP® Certified Software Project Manager with a multidisciplinary background in design, marketing, and operations. 20+ digital projects delivered across healthcare, hospitality, retail, and corporate services.",
  keywords: [
    "Mohamed Mamdouh", "Software Project Manager", "PMP", "Project Manager Cairo Egypt",
    "Agile Delivery", "Stakeholder Management", "Digital Project Management",
  ],
  authors: [{ name: "Mohamed Mamdouh" }],
  creator: "Mohamed Mamdouh",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mohamed Mamdouh, PMP® — Software Project Manager",
    description:
      "PMP® Certified Software Project Manager bridging design, marketing, operations, and technical delivery. 20+ projects delivered.",
    siteName: "Mohamed Mamdouh",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Mamdouh, PMP® Certified Software Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Mamdouh, PMP® — Software Project Manager",
    description: "PMP® Certified Software Project Manager. 20+ digital projects delivered across 6 industries.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Mamdouh",
  jobTitle: "Software Project Manager",
  url: siteUrl,
  email: "mailto:m.mamdouh193@gmail.com",
  telephone: "+20-100-065-7044",
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  sameAs: ["https://www.linkedin.com/in/mohamed-mamdouh-299838103/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+20-100-065-7044",
    url: "https://wa.me/201000657044",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "Project Management Professional (PMP)®",
    recognizedBy: { "@type": "Organization", name: "Project Management Institute" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${fraunces.variable} ${inter.variable} ${jbMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LoadingScreen />
        {children}
        <AnalyticsScripts />
        <Analytics />
      </body>
    </html>
  );
}
