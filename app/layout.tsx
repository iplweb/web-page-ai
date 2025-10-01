import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "Michał Pasternak | AI in Medicine - Anesthesiology & Intensive Care",
  description:
    "Advanced artificial intelligence and NLP solutions for medical text processing, anesthesiology, and intensive care decision-making systems. Specializing in TISS-28 verification and medical data analysis.",
  keywords: [
    "AI in medicine",
    "medical NLP",
    "anesthesiology",
    "intensive care",
    "TISS-28",
    "medical text processing",
    "healthcare AI",
    "machine learning",
    "medical data analysis",
    "Michał Pasternak",
  ],
  authors: [{ name: "Michał Pasternak", url: "https://ai.iplweb.pl" }],
  creator: "Michał Pasternak",
  publisher: "Michał Pasternak",
  generator: "v0.app",
  metadataBase: new URL("https://ai.iplweb.pl"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      pl: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pl_PL"],
    url: "https://ai.iplweb.pl",
    title: "Michał Pasternak | AI in Medicine - Anesthesiology & Intensive Care",
    description:
      "Advanced artificial intelligence and NLP solutions for medical text processing, anesthesiology, and intensive care decision-making systems.",
    siteName: "Michał Pasternak - AI in Medicine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Michał Pasternak - AI in Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michał Pasternak | AI in Medicine",
    description: "Advanced AI and NLP solutions for medical text processing, anesthesiology, and intensive care.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michał Pasternak",
              jobTitle: "AI Researcher & Medical Specialist",
              description:
                "Specialist in Anesthesiology and Intensive Care, focusing on AI and NLP applications in medicine",
              url: "https://ai.iplweb.pl",
              email: "michal.pasternak@iplweb.pl",
              sameAs: ["https://github.com/mpasternak"],
              knowsAbout: [
                "Artificial Intelligence",
                "Natural Language Processing",
                "Medical Text Processing",
                "Anesthesiology",
                "Intensive Care",
                "Machine Learning",
                "Healthcare Technology",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Medical University",
              },
            }),
          }}
          strategy="beforeInteractive"
        />
        <Script
          defer
          data-domain="ai.iplweb.pl"
          src="https://plausible.io/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
