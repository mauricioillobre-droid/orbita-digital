"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Floripa por Mauri",
    category: "Landing Page",
    image: "/trabajo-landing.jpg",
    accentColor: "#0d47ff",
  },
  {
    title: "Agente conversacional",
    category: "Automatización",
    image: "/trabajo-chatbot.jpg",
    accentColor: "#7c3aed",
  },
  {
    title: "Identidad Visual",
    category: "Diseño Gráfico",
    image: "/identidad-visual2.jpg",
    accentColor: "#0d47ff",
  },
  {
    title: "Gestión de Redes",
    category: "Redes Sociales",
    image: "/gestion-de-redes.jpg",
    accentColor: "#7c3aed",
  },
  {
    title: "Identidad Visual",
    category: "Diseño Gráfico",
    image: "/identidad-visual1.jpg",
    accentColor: "#0d47ff",
  },
];

export default function Works() {
  return (
    <section
      id="trabajos"
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="works-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

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
            Portafolio
          </span>
          <h2
            id="works-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Trabajos <span className="text-[#0d47ff]">recientes</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg max-w-md mx-auto">
            Proyectos que combinan estética, funcionalidad y propósito.
          </p>
        </motion.div>

        {/* Grid 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={`${project.title}-${i}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-[#e8eaf0] bg-white cursor-pointer"
            >
              {/* Imagen */}
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/80 via-[#0b0f17]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold mb-2"
                      style={{
                        backgroundColor: `${project.accentColor}25`,
                        color: "#fff",
                        border: `1px solid ${project.accentColor}50`,
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-white text-xl">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              </div>

              {/* Body — visible sin hover */}
              <div className="px-5 py-4 flex items-center justify-between bg-white group-hover:bg-[#faf9ff] transition-colors duration-300">
                <div>
                  <h3 className="font-display font-bold text-[#0b0f17] text-base leading-tight">
                    {project.title}
                  </h3>
                  <span
                    className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold"
                    style={{
                      color: project.accentColor,
                      backgroundColor: `${project.accentColor}10`,
                      border: `1px solid ${project.accentColor}25`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{
                    backgroundColor: `${project.accentColor}12`,
                    color: project.accentColor,
                  }}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
