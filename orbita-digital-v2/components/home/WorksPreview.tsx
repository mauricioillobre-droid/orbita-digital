'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

const works = [
  {
    slug: '25-de-mayo',
    title: '25 de Mayo Consultorios Médicos',
    description:
      'Sistema de turnos online con confirmación automática por WhatsApp para consultorio médico en Buenos Aires.',
    tags: ['Desarrollo Web', 'Automatización'],
    image: '/images/trabajos/25-de-mayo.jpg',
    alt: 'Sistema de turnos online para consultorio médico en Argentina desarrollado por Órbita Digital',
  },
  {
    slug: 'orbita',
    title: 'Órbita Digital',
    description:
      'Diseño web y branding completo para agencia digital argentina con identidad visual diferenciada.',
    tags: ['Diseño', 'Desarrollo'],
    image: '/images/trabajos/orbita.jpg',
    alt: 'Diseño web y branding para agencia digital argentina',
  },
]

export default function WorksPreview() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#111827] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-syne font-extrabold text-3xl sm:text-4xl text-white text-center mb-14"
        >
          Algunos proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((w, i) => (
            <motion.article
              key={w.slug}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.15 }}
              className="group relative bg-[#0b0f17] border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full bg-[#0d47ff]/10">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0d47ff]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-dm font-medium border border-white/50 rounded-full px-5 py-2 text-sm">
                    Ver proyecto
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-dm text-[#00b8ff] bg-[#00b8ff]/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-2">{w.title}</h3>
                <p className="font-dm text-[#8892a4] text-sm leading-relaxed">{w.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/trabajos"
            className="inline-flex items-center gap-2 font-dm text-[#00b8ff] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Ver todos los trabajos
            <IconArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
