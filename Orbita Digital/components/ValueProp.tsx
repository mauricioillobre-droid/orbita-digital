"use client";

import { motion } from "motion/react";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Trabajo artesanal",
    description:
      "Cada proyecto recibe atención real. No usamos plantillas copiadas ni procesos de agencia masiva. Pensamos cada detalle desde cero.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 20h20" />
        <path d="M6 20V10l6-8 6 8v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
    title: "Visión de negocio",
    description:
      "Diseñamos y construimos pensando en conversión y escalabilidad. El resultado final importa, no solo cómo se ve.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M19 7v6M16 10h6" />
      </svg>
    ),
    title: "Equipo directo",
    description:
      "Trabajás siempre con las mismas personas, sin intermediarios ni cuentas que no conocen tu proyecto. Comunicación directa, sin filtros.",
  },
];

export default function ValueProp() {
  return (
    <section
      id="valor"
      className="relative py-20 lg:py-28 bg-[#faf9ff]"
      aria-labelledby="value-heading"
    >
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Por qué trabajar con Órbita
          </span>
          <h2
            id="value-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-[#0b0f17] mb-4 leading-tight"
          >
            No somos una agencia de{" "}
            <span className="text-[#7c3aed]">producción masiva</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-base leading-relaxed">
            Somos un equipo pequeño que trabaja con atención y criterio en cada proyecto.
          </p>
        </motion.div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[#e8eaf0] bg-white p-8 hover:border-[#7c3aed]/30 hover:shadow-lg hover:shadow-[#7c3aed]/8 transition-all duration-300 cursor-default"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display font-bold text-5xl text-[#7c3aed]/6 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/8 border border-[#7c3aed]/12 flex items-center justify-center text-[#7c3aed] mb-5 group-hover:bg-[#7c3aed]/14 transition-colors duration-300">
                {pillar.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-[#0b0f17] mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom accent on hover */}
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/0 to-transparent group-hover:via-[#7c3aed]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
