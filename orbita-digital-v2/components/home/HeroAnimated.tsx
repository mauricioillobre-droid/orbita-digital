'use client'

import { motion, useReducedMotion, type Transition } from 'framer-motion'
import { IconBrandWhatsapp, IconArrowRight, IconCheck } from '@tabler/icons-react'
import Link from 'next/link'

const badges = [
  '+20 proyectos entregados',
  'Respondemos en menos de 24hs',
  'Trabajás directo con el equipo',
]

export default function HeroAnimated() {
  const reduce = useReducedMotion()

  const fade = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduce ? 0 : delay } as Transition,
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-od-black pt-16">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,71,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* H1 */}
        <motion.h1
          {...fade(0)}
          className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight text-balance"
        >
          Tu negocio necesita una web{' '}
          <span className="gradient-text">que trabaje</span>, no que exista
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fade(0.15)}
          className="mt-6 text-[#8892a4] font-dm text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Diseño web profesional, automatización y contenido para pymes que quieren crecer en
          Buenos Aires y todo Argentina.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5491122355689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer shadow-lg shadow-blue-900/30"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            Hablemos por WhatsApp
          </a>
          <Link
            href="/trabajos"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-dm font-medium text-white border border-white/20 hover:border-[#00b8ff] hover:text-[#00b8ff] transition-colors duration-200 cursor-pointer"
          >
            Ver nuestros trabajos
            <IconArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fade(0.45)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm font-dm text-[#8892a4]">
              <IconCheck size={16} className="text-[#00b8ff] shrink-0" aria-hidden="true" />
              {b}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
