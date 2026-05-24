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
    linkedin: "https://linkedin.com/in/mauricio-illobre-385744368",
  },
  {
    name: "Tati",
    role: "Diseño & Contenido",
    image: "/tati.jpeg",
    summary: "Diseñadora gráfica y creadora de TatsDesign. Identidad visual, redes y contenido con criterio estratégico.",
    color: "#7c3aed",
    linkedin: "https://linkedin.com/in/tatiana-daloia/",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group flex flex-col items-center text-center p-10 rounded-2xl border border-[#e8eaf0] bg-white hover:border-[#7c3aed]/25 hover:shadow-lg hover:shadow-[#7c3aed]/7 transition-all duration-300">

              {/* Foto */}
              <img src={m.image} alt={`Foto de ${m.name}`}
                className="w-32 h-32 rounded-full object-cover object-top mb-6"
                style={{ border: `3px solid ${m.color}25`, boxShadow: `0 8px 28px ${m.color}25` }} />

              {/* Nombre y rol */}
              <h3 className="font-display font-bold text-[#0b0f17] text-2xl mb-1">{m.name}</h3>
              <p className="font-sans text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: m.color }}>
                {m.role}
              </p>

              {/* Descripción */}
              <p className="font-sans text-[#0b0f17]/50 text-base leading-relaxed mb-6">
                {m.summary}
              </p>

              {/* LinkedIn */}
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#7c3aed] hover:underline transition-all duration-200 mt-auto">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
