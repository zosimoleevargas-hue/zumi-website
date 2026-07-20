import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { businessInfo } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://zumi-mexicali.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Zumi | Comida saludable en Mexicali",
    template: "%s | Zumi",
  },
  description:
    "Ensaladas, wraps y sándwiches preparados al momento con ingredientes frescos. Comida saludable y deliciosa en Mexicali. ¡Pide por WhatsApp!",
  keywords: [
    "comida saludable Mexicali",
    "ensaladas Mexicali",
    "wraps Mexicali",
    "sándwiches saludables",
    "restaurante saludable Mexicali",
    "comida rápida saludable",
    "Zumi",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zumi | Comida saludable en Mexicali",
    description:
      "Ensaladas, wraps y sándwiches preparados al momento con ingredientes frescos. Descubre la opción saludable en Mexicali.",
    url: siteUrl,
    siteName: "Zumi",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zumi | Comida saludable en Mexicali",
    description:
      "Ensaladas, wraps y sándwiches preparados al momento con ingredientes frescos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: businessInfo.name,
  description: businessInfo.description,
  url: siteUrl,
  telephone: `+52${businessInfo.phone}`,
  servesCuisine: "Comida saludable",
  image: `${siteUrl}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blvd. San Luis Río Colorado - Mexicali 4523",
    addressLocality: "Mexicali",
    addressRegion: "B.C.",
    postalCode: "21260",
    addressCountry: "MX",
  },
  areaServed: {
    "@type": "City",
    name: "Mexicali",
  },
  priceRange: "$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
