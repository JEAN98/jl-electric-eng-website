import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionRoot } from "@/components/motion/motion-root";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const title = "ElectroVega | Ingeniería y Construcción Electromecánica en Costa Rica";
const description =
  "Presupuestos, ejecución, diseño e inspección de proyectos eléctricos y electromecánicos. Con base en San Carlos, viajamos a cualquier parte de Costa Rica.";
const ogImageUrl = `${siteConfig.url}/images/hero/hero-panel.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | ElectroVega",
  },
  description,
  keywords: [
    "electromecánica Costa Rica",
    "ingeniería eléctrica San Carlos",
    "instalaciones eléctricas",
    "contratista electromecánico",
    "diseño eléctrico",
  ],
  authors: [{ name: siteConfig.legalName }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: ogImageUrl, width: 2400, height: 1588, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: siteConfig.legalName,
  image: ogImageUrl,
  url: siteConfig.url,
  telephone: `+${siteConfig.whatsappNumber}`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Quesada, San Carlos",
    addressCountry: "CR",
  },
  areaServed: "Costa Rica",
  founder: {
    "@type": "Person",
    name: "José Leandro Vega",
    jobTitle: "Ingeniero Eléctrico | Fundador",
  },
  sameAs: [`https://facebook.com/${siteConfig.facebook}`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="text-ink flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="focus:bg-brand focus:text-ink sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        <MotionRoot>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionRoot>
      </body>
    </html>
  );
}
