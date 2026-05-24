"use client";

import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Desarrollo Web",
    description: "Tu sitio tiene que trabajar, no solo verse bien. Hacemos sitios que cargan rápido, convierten y escalan.",
    color: "#0d47ff",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Automatización",
    description: "Si algo se puede automatizar, no tiene sentido hacerlo a mano. Sistemas que trabajan aunque no estés.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Diseño y Contenido",
    description: "La identidad visual de tu negocio importa más de lo que creés. Diseñamos con criterio, no con plantillas.",
    color: "#7c3aed",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#faf9ff]" aria-labelledby="services-preview-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14">
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Lo que hacemos
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 id="services-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-lg">
              Tres servicios,{" "}
              <span className="text-[#7c3aed]">un solo equipo.</span>
            </h2>
            <Link href="/servicios"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#7c3aed] hover:text-[#0d47ff] transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Ver detalle completo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-2xl border border-[#e8eaf0] bg-white p-7 hover:border-[#7c3aed]/25 hover:shadow-lg hover:shadow-[#7c3aed]/7 transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${s.color}06 0%, transparent 60%)` }} aria-hidden />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 relative"
                style={{ backgroundColor: `${s.color}10`, border: `1px solid ${s.color}18`, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#0b0f17] mb-2 relative">{s.title}</h3>
              <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed relative">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
