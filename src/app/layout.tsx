import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionRoot } from "@/components/motion/motion-root";
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

const siteUrl = "https://electrovegacr.com";
const title = "ElectroVega | Ingeniería y Construcción Electromecánica en Costa Rica";
const description =
  "Presupuestos, ejecución, diseño e inspección de proyectos eléctricos y electromecánicos. Con base en San Carlos, viajamos a cualquier parte de Costa Rica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  authors: [{ name: "ElectroVega Constructora Electromecánica" }],
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "ElectroVega",
    title,
    description,
    images: [
      { url: "/images/hero/hero-panel.jpg", width: 1394, height: 950, alt: title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/hero-panel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="text-ink flex min-h-full flex-col font-sans">
        <MotionRoot>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionRoot>
      </body>
    </html>
  );
}
