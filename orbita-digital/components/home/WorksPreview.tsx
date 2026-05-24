"use client";

import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  { title: "Floripa por Mauri", category: "Landing Page", image: "/trabajo-landing.jpg", color: "#0d47ff" },
  { title: "Agente conversacional", category: "Automatización", image: "/trabajo-chatbot.jpg", color: "#7c3aed" },
  { title: "Identidad Visual", category: "Diseño Gráfico", image: "/identidad-visual2.jpg", color: "#0d47ff" },
  { title: "Gestión de Redes", category: "Redes Sociales", image: "/gestion-de-redes.jpg", color: "#7c3aed" },
];

export default function WorksPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-white" aria-labelledby="works-preview-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="mb-14">
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Portafolio
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 id="works-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-lg">
              Proyectos reales,{" "}
              <span className="text-[#0d47ff]">resultados concretos.</span>
            </h2>
            <Link href="/trabajos"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#7c3aed] hover:text-[#0d47ff] transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Ver todos los trabajos
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-[#e8eaf0] bg-white cursor-pointer">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/75 via-[#0b0f17]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold mb-1.5"
                    style={{ backgroundColor: `${p.color}30`, color: "#fff", border: `1px solid ${p.color}50` }}>
                    {p.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg">{p.title}</h3>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between bg-white group-hover:bg-[#faf9ff] transition-colors duration-300">
                <div>
                  <h3 className="font-display font-bold text-[#0b0f17] text-sm">{p.title}</h3>
                  <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-sans font-semibold"
                    style={{ color: p.color, backgroundColor: `${p.color}10`, border: `1px solid ${p.color}20` }}>
                    {p.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
