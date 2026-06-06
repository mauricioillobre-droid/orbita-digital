'use client'

import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Escuchamos',
    description:
      'Entendemos tu negocio antes de proponer nada. Una reunión sin costo para entender el contexto real.',
  },
  {
    number: '02',
    title: 'Diseñamos',
    description:
      'Construimos la solución con criterio estratégico. Diseño, tecnología y contenido en un solo equipo.',
  },
  {
    number: '03',
    title: 'Ejecutamos',
    description:
      'Entregamos en tiempos reales. Con seguimiento, soporte y sin sorpresas al final.',
  },
]

export default function HowWeWork() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-od-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-syne font-extrabold text-3xl sm:text-4xl text-white text-center mb-16"
        >
          Así trabajamos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-[1px] bg-gradient-to-r from-[#0d47ff] via-[#00b8ff] to-[#0d47ff] opacity-30"
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.15 }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/30">
                <span className="font-syne font-extrabold text-white text-lg">{s.number}</span>
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="font-dm text-[#8892a4] leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
