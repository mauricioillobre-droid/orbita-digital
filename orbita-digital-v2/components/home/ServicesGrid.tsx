'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { IconBrowser, IconRobot, IconPalette, IconVideo, IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

const services = [
  {
    id: 'desarrollo-web',
    icon: IconBrowser,
    title: 'Desarrollo Web para Pymes',
    description:
      'Sitios profesionales optimizados para generar leads. Desde landing pages hasta sistemas con reservas online y automatizaciones.',
  },
  {
    id: 'automatizacion',
    icon: IconRobot,
    title: 'Automatización con WhatsApp e IA',
    description:
      'Automatizamos ventas, turnos y atención al cliente. Menos tareas manuales, más tiempo para lo que importa.',
  },
  {
    id: 'diseno-grafico',
    icon: IconPalette,
    title: 'Diseño Gráfico y Branding',
    description:
      'Identidad visual estratégica para diferenciarte. Logos, piezas publicitarias y branding pensados para vender.',
  },
  {
    id: 'edicion-video',
    icon: IconVideo,
    title: 'Edición de Video y Reels',
    description:
      'Contenido audiovisual para redes que genera alcance y convierte. Reels de alto impacto para tu negocio.',
  },
]

export default function ServicesGrid() {
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
          Lo que hacemos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.id}
                initial={reduce ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.1 }}
                whileHover={reduce ? {} : { scale: 1.02 }}
                className="group relative bg-[#0b0f17] border border-white/5 rounded-2xl p-8 cursor-pointer transition-shadow duration-200 hover:shadow-xl hover:shadow-blue-900/20"
              >
                {/* Blue left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0d47ff] to-[#00b8ff] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />

                <Icon size={32} className="text-[#0d47ff] mb-5" aria-hidden="true" />
                <h3 className="font-syne font-bold text-xl text-white mb-3">{s.title}</h3>
                <p className="font-dm text-[#8892a4] leading-relaxed mb-5">{s.description}</p>
                <Link
                  href={`/servicios#${s.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-dm text-[#00b8ff] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Ver más
                  <IconArrowRight size={15} aria-hidden="true" />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
