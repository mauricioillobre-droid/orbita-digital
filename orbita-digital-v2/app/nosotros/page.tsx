import type { Metadata } from 'next'
import Image from 'next/image'
import {
  IconBrandWhatsapp,
  IconTarget,
  IconUsers,
  IconBolt,
  IconHeart,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Órbita Digital — Agencia Web Argentina',
  description:
    'Mauri y Tati, el equipo detrás de Órbita Digital. Agencia web y automatización en Argentina. Trabajás directo con los especialistas.',
}

const values = [
  {
    icon: IconTarget,
    title: 'Resultados reales',
    description: 'No hacemos webs para tener webs. Cada proyecto tiene un objetivo medible.',
  },
  {
    icon: IconUsers,
    title: 'Trato directo',
    description: 'Sin cuentas ejecutivas ni intermediarios. Hablás con quienes hacen el trabajo.',
  },
  {
    icon: IconBolt,
    title: 'Velocidad sin excusas',
    description: 'Respondemos en menos de 24hs. Cumplimos los plazos que prometemos.',
  },
  {
    icon: IconHeart,
    title: 'Transparencia total',
    description: 'Precios claros, alcance definido y comunicación honesta en todo momento.',
  },
]

export default function NosotrosPage() {
  return (
    <div className="bg-od-black pt-16">
      {/* Header */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-6">
            El equipo detrás de Órbita Digital
          </h1>
          <p className="font-dm text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto">
            Somos dos personas con habilidades complementarias y un objetivo compartido: que tu negocio crezca en internet.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {/* Mauri */}
          <div className="bg-[#111827] border border-white/5 rounded-3xl p-8">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-[#0d47ff]/20">
              <Image
                src="/images/mauri.jpg"
                alt="Mauri — Desarrollo Web y Automatización en Órbita Digital, Buenos Aires"
                fill
                className="object-cover"
                loading="lazy"
                sizes="96px"
              />
            </div>
            <h2 className="font-syne font-extrabold text-2xl text-white mb-1">Mauri</h2>
            <p className="font-dm text-[#00b8ff] text-sm mb-5">Desarrollo & Automatización</p>
            <p className="font-dm text-[#8892a4] leading-relaxed">
              Programador y especialista en automatización desde Argentina. Me encargo de todo lo técnico: desarrollo web, integraciones con WhatsApp, flujos automatizados y sistemas que hacen que los negocios funcionen solos. Trabajo con Next.js, n8n, Make y la API oficial de WhatsApp Business.
            </p>
          </div>

          {/* Tati */}
          <div className="bg-[#111827] border border-white/5 rounded-3xl p-8">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-[#00b8ff]/20">
              <Image
                src="/images/tati.jpg"
                alt="Tati — Diseño Gráfico y Contenido en Órbita Digital, Buenos Aires"
                fill
                className="object-cover"
                loading="lazy"
                sizes="96px"
              />
            </div>
            <h2 className="font-syne font-extrabold text-2xl text-white mb-1">Tati</h2>
            <p className="font-dm text-[#00b8ff] text-sm mb-5">Diseño & Contenido</p>
            <p className="font-dm text-[#8892a4] leading-relaxed">
              Diseñadora gráfica y creadora de contenido desde Argentina. Me encargo de que todo lo visual tenga coherencia, impacto y sentido estratégico. Branding, redes sociales, reels y edición de video. Diseño para que tu negocio se vea tan bien como funciona.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="font-syne font-extrabold text-3xl text-white mb-8 text-center">
            Por qué Órbita Digital
          </h2>
          <div className="space-y-5 font-dm text-[#8892a4] leading-relaxed">
            <p>
              Arrancamos Órbita Digital porque vimos que muchas pymes en CABA y el resto de Argentina tienen un problema real: sus herramientas digitales no trabajan para ellas. Tienen páginas que no convierten, procesos manuales que consumen tiempo y presencia online que no genera nada.
            </p>
            <p>
              La solución no era contratar grandes agencias con estructuras pesadas y precios inalcanzables. Era un equipo chico, directo y especializado que pudiera resolver múltiples problemas a la vez: diseño, tecnología y contenido sin intermediarios.
            </p>
            <p>
              Eso somos. Dos personas que trabajan desde Argentina, para negocios en CABA y todo el país, con los mismos estándares de calidad que podría tener una empresa grande pero con el trato personalizado de un equipo que realmente conoce tu negocio.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-syne font-extrabold text-3xl text-white mb-10 text-center">
            Cómo trabajamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-[#111827] border border-white/5 rounded-2xl p-7 flex gap-5">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-white mb-2">{v.title}</h3>
                    <p className="font-dm text-[#8892a4] text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5491122355689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
