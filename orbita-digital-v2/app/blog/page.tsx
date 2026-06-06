import type { Metadata } from 'next'
import { IconBrandWhatsapp, IconRss } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Blog — Tips de Diseño Web y Automatización | Órbita Digital',
  description:
    'Artículos sobre diseño web, automatización con WhatsApp, branding y tecnología para pymes argentinas.',
}

export default function BlogPage() {
  return (
    <div className="bg-od-black pt-16">
      {/* Header */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Blog de Órbita Digital
          </h1>
          <p className="font-dm text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto">
            Tips, casos reales y recursos sobre diseño web, automatización con WhatsApp y tecnología para pymes argentinas.
          </p>
        </div>
      </div>

      {/* Empty state */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-8">
          <IconRss size={28} className="text-white" aria-hidden="true" />
        </div>

        <h2 className="font-syne font-extrabold text-2xl text-white mb-4">
          Contenido en camino
        </h2>
        <p className="font-dm text-[#8892a4] leading-relaxed mb-10">
          Pronto publicamos contenido sobre diseño web, automatización y tecnología para pymes. Si tenés una pregunta concreta sobre cómo hacer crecer tu negocio en internet, escribinos.
        </p>

        <a
          href="https://wa.me/5491122355689"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
        >
          <IconBrandWhatsapp size={20} aria-hidden="true" />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  )
}
