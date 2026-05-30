import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import IntroScreen from "@/components/IntroScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Órbita Digital | Diseño, Tecnología y Automatización",
  description:
    "Órbita Digital es una agencia de diseño, desarrollo web y automatización. Construimos presencia digital que genera resultados reales para tu negocio.",
  keywords: [
    "agencia digital",
    "diseño web",
    "desarrollo web",
    "automatización",
    "landing pages",
    "identidad visual",
    "WhatsApp bots",
    "Argentina",
  ],
  authors: [{ name: "Órbita Digital" }],
  creator: "Órbita Digital",
  metadataBase: new URL("https://orbitadigital.tech"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://orbitadigital.tech",
    siteName: "Órbita Digital",
    title: "Órbita Digital | Diseño, Tecnología y Automatización",
    description:
      "Construimos presencia digital que genera resultados. Diseño web, automatización y estrategia visual para negocios que quieren crecer.",
    images: [
      {
        url: "/logoorbitalsinfondo.png",
        width: 1200,
        height: 630,
        alt: "Órbita Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Órbita Digital | Diseño, Tecnología y Automatización",
    description:
      "Construimos presencia digital que genera resultados. Diseño web, automatización y estrategia visual.",
    images: ["/logoorbitalsinfondo.png"],
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
    <html lang="es" className={ubuntu.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <IntroScreen />
        <ScrollProgressBar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
