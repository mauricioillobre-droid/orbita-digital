'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { IconStar } from '@tabler/icons-react'

const testimonials = [
  {
    initials: 'ML',
    name: 'Mauricio L.',
    business: '25 de Mayo Consultorios',
    text: 'Implementaron el sistema de turnos online en tiempo récord. Los pacientes ahora sacan turno solos y reciben confirmación por WhatsApp automáticamente.',
    stars: 5,
  },
  {
    initials: 'AP',
    name: 'Ana P.',
    business: 'Pyme local, Buenos Aires',
    text: 'Teníamos una web vieja que no generaba nada. El nuevo sitio ya recibió consultas en la primera semana. El equipo estuvo disponible en todo momento.',
    stars: 5,
  },
]

export default function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-od-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-syne font-extrabold text-3xl sm:text-4xl text-white text-center mb-14"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TODO: Reemplazar con testimonios reales */}
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.15 }}
              className="bg-[#111827] border border-white/5 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-5" aria-label={`${t.stars} estrellas`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <IconStar key={j} size={16} className="text-[#00b8ff] fill-[#00b8ff]" aria-hidden="true" />
                ))}
              </div>
              <p className="font-dm text-[#8892a4] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <span className="font-syne font-bold text-white text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-dm font-medium text-white text-sm">{t.name}</div>
                  <div className="font-dm text-[#8892a4] text-xs">{t.business}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
