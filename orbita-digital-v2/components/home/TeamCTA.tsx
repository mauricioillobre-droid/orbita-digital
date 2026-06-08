'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { trackWA } from '@/components/WALink'

export default function TeamCTA() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative bg-od-black py-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(13,71,255,0.1) 0%, #0b0f17 70%)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Team photos */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="relative w-16 h-16 rounded-full border-2 border-[#0d47ff] overflow-hidden bg-[#111827]">
            <Image
              src="/images/mauri.jpg"
              alt="Mauri — Desarrollo y Automatización en Órbita Digital"
              fill
              className="object-cover"
              loading="lazy"
              sizes="64px"
            />
          </div>
          <div className="relative w-16 h-16 rounded-full border-2 border-[#00b8ff] overflow-hidden bg-[#111827]">
            <Image
              src="/images/tati.jpg"
              alt="Tati — Diseño Gráfico y Contenido en Órbita Digital"
              fill
              className="object-cover"
              loading="lazy"
              sizes="64px"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-4 text-balance"
        >
          Somos Mauri y Tati
        </motion.h2>

        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm text-[#8892a4] text-lg leading-relaxed mb-3"
        >
          Trabajás directo con nosotros — sin cuentas, sin intermediarios, sin sorpresas.
        </motion.p>

        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-dm text-[#3155a1] text-base mb-10"
        >
          Agencia web en Argentina lista para acompañarte.
        </motion.p>

        <motion.a
          href="https://wa.me/5493541232353"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWA}
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer text-lg shadow-xl shadow-blue-900/30"
        >
          <IconBrandWhatsapp size={22} aria-hidden="true" />
          Escribinos por WhatsApp
        </motion.a>
      </div>
    </section>
  )
}
