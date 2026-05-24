"use client";

import { motion } from "motion/react";
import Link from "next/link";

const team = [
  {
    name: "Mauri",
    role: "Desarrollo & Automatización",
    image: "/Mauri.jpeg",
    summary: "Project manager y desarrollador. Sistemas automatizados, integraciones y flujos de trabajo que escalan.",
    color: "#0d47ff",
  },
  {
    name: "Tati",
    role: "Diseño & Contenido",
    image: "/tati.jpeg",
    summary: "Diseñadora gráfica y creadora de TatsDesign. Identidad visual, redes y contenido con criterio estratégico.",
    color: "#7c3aed",
  },
];

export default function TeamPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#faf9ff]" aria-labelledby="team-preview-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14">
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            El equipo
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 id="team-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-md">
              Mauri y Tati.{" "}
              <span className="text-[#7c3aed]">Órbita Digital.</span>
            </h2>
            <Link href="/nosotros"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#7c3aed] hover:text-[#0d47ff] transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Conocernos mejor
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {team.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-[#e8eaf0] bg-white hover:border-[#7c3aed]/25 hover:shadow-lg hover:shadow-[#7c3aed]/7 transition-all duration-300">
              <img src={m.image} alt={`Foto de ${m.name}`}
                className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0"
                style={{ border: `2px solid ${m.color}20`, boxShadow: `0 4px 16px ${m.color}20` }} />
              <div>
                <h3 className="font-display font-bold text-[#0b0f17] text-lg mb-0.5">{m.name}</h3>
                <p className="font-sans text-xs font-semibold mb-2" style={{ color: m.color }}>{m.role}</p>
                <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed">{m.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
