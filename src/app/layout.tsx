import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pattaampoochi-montessori.vercel.app'),
  title: "Pattaampoochi Montessori Pre-School | Best Montessori School in Chennai Ponmar",
  description: "Authentic Montessori education for children aged 18 months to 6 years in Chennai. Rated 5.0/5 with 50+ reviews. Nurturing independence, creativity & lifelong learning in Ponmar, Thalambur.",
  keywords: "Montessori school Chennai, preschool Ponmar, daycare Thalambur, kindergarten Chennai, early childhood education, Montessori method, child development, independent learning",
  authors: [{ name: "Pattaampoochi Montessori Pre-School" }],
  creator: "Pattaampoochi Montessori Pre-School",
  publisher: "Pattaampoochi Montessori Pre-School",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pattaampoochi-montessori.vercel.app",
    siteName: "Pattaampoochi Montessori Pre-School",
    title: "Pattaampoochi Montessori Pre-School | Best Montessori School in Chennai",
    description: "Authentic Montessori education for children aged 18 months to 6 years. Rated 5.0/5 with 50+ reviews. Located in Ponmar, Chennai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pattaampoochi Montessori Pre-School - Nurturing Young Minds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattaampoochi Montessori Pre-School | Best Montessori School in Chennai",
    description: "Authentic Montessori education for children aged 18 months to 6 years. Rated 5.0/5 with 50+ reviews.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pattaampoochi-montessori.vercel.app",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pattaampoochi Montessori Pre-School",
              "alternateName": "Pattaampoochi Pre School",
              "description": "Authentic Montessori education for children aged 18 months to 6 years in Chennai. Nurturing independence, creativity & lifelong learning.",
              "url": "https://pattaampoochi-montessori.vercel.app",
              "logo": "https://pattaampoochi-montessori.vercel.app/logo.png",
              "image": "https://pattaampoochi-montessori.vercel.app/og-image.jpg",
              "telephone": "+91 98765 43210",
              "email": "info@pattaampoochi.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 2, Adroit District S Thalambur, Kanniappan Nagar",
                "addressLocality": "Ponmar",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600127",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.8456",
                "longitude": "80.1847"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-13:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/pattaampoochi",
                "https://www.instagram.com/pattaampoochi",
                "https://www.justdial.com/Chennai/Pattaampoochi-Pre-School-Adroit-District-S-Thalambur-Ponmar/044PXX44-XX44-230401021842-I2G8_BZDET"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "EducationalOccupationalProgram",
                      "name": "Toddler Program",
                      "description": "Montessori program for children aged 18 months to 3 years",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Pattaampoochi Montessori Pre-School"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "EducationalOccupationalProgram",
                      "name": "Primary Program",
                      "description": "Core Montessori program for children aged 3 to 6 years",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Pattaampoochi Montessori Pre-School"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "EducationalOccupationalProgram",
                      "name": "Kindergarten Prep",
                      "description": "School readiness program for children aged 5 to 6 years",
                      "provider": {
                        "@type": "EducationalOrganization",
                        "name": "Pattaampoochi Montessori Pre-School"
                      }
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
