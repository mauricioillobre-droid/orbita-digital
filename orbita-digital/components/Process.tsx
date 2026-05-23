"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu negocio, tus objetivos y tu punto de partida. Sin suposiciones, con preguntas reales.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos el enfoque, el alcance y los entregables concretos. Nada vago, nada indefinido.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Construimos con criterio, iteramos con foco y comunicamos cada avance. Siempre sabés en qué estamos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Lanzamiento y soporte",
    description:
      "Entregamos, acompañamos el inicio y seguimos disponibles. El proyecto no termina en la entrega.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative py-24 lg:py-32 bg-[#faf9ff]"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/12 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Cómo trabajamos
          </span>
          <h2
            id="process-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Un proceso claro,{" "}
            <span className="text-[#7c3aed]">sin sorpresas</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg max-w-lg mx-auto">
            Cuatro pasos que van del diagnóstico al resultado.
          </p>
        </motion.div>

        {/* Timeline desktop — horizontal, mobile — vertical */}
        <div className="relative">

          {/* Connecting line — desktop */}
          <div
            className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{
              background: "linear-gradient(to right, transparent, #7c3aed30, #0d47ff30, transparent)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center md:items-center"
              >
                {/* Connector line — mobile (vertical) */}
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden absolute top-[52px] left-[26px] w-px h-[calc(100%+2rem)]"
                    style={{
                      background: "linear-gradient(to bottom, #7c3aed30, transparent)",
                    }}
                    aria-hidden
                  />
                )}

                {/* Step circle */}
                <div className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full border-2 border-[#7c3aed]/20 bg-white shadow-md shadow-[#7c3aed]/8 mb-6 z-10 group hover:border-[#7c3aed]/60 hover:shadow-[#7c3aed]/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
                    {step.icon}
                  </div>

                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#7c3aed] text-white text-[10px] font-display font-bold flex items-center justify-center leading-none">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[#0b0f17] text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
