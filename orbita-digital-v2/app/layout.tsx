import type { Metadata } from 'next'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import RevealProvider from '@/components/RevealProvider'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Órbita Digital',
  description:
    'Agencia web y automatización para pymes en Argentina. Diseño web profesional, automatización con WhatsApp e inteligencia artificial.',
  url: 'https://www.orbitadigital.tech',
  telephone: '+5493541232353',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
    addressLocality: 'Buenos Aires',
  },
  areaServed: 'Argentina',
  serviceType: ['Desarrollo Web', 'Automatización', 'Diseño Gráfico', 'Edición de Video'],
  sameAs: [],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orbitadigital.tech'),
  title: {
    template: '%s | Órbita Digital',
    default: 'Agencia Web y Automatización para Pymes en Argentina | Órbita Digital',
  },
  description:
    'Diseño web profesional, automatización con WhatsApp e inteligencia artificial para pymes en Buenos Aires. Respondemos en menos de 24hs.',
  keywords:
    'agencia web argentina, diseño web para pymes, automatización whatsapp, desarrollo web buenos aires, agencia digital pymes',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.orbitadigital.tech',
    siteName: 'Órbita Digital',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${hanken.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased">
        <RevealProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </RevealProvider>
      </body>
    </html>
  )
}
