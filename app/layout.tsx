import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Órbita Digital | Diseño, Tecnología y Automatización",
  description:
    "Somos Órbita Digital, una agencia de diseño, desarrollo web y automatización que ayuda a negocios a crecer en el mundo digital.",
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
      </head>
      <body className="antialiased">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
