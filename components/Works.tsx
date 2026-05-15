"use client";

import { motion } from "motion/react";

const projects = [
  {
  title: "Floripa por Mauri",
  category: "Landing Page",
  image: "/trabajo-landing.jpg",
  accentColor: "#0d47ff",
  bgGradient:
    "radial-gradient(ellipse at top left, rgba(13,71,255,0.14) 0%, rgba(124,58,237,0.06) 55%, #f0f4ff 100%)",
  bodyBg: "#f0f4ff",
},
  {
  title: "Agente conversacional",
  category: "Automatización",
  image: "/trabajo-chatbot.jpg",
  accentColor: "#7c3aed",
  bgGradient:
    "radial-gradient(ellipse at top right, rgba(124,58,237,0.14) 0%, rgba(13,71,255,0.07) 55%, #f5f0ff 100%)",
  bodyBg: "#f5f0ff",
},
  
  {
    title: "Identidad Visual",
    category: "Diseño gráfico",
    image: "/identidad-visual2.jpg",
    accentColor: "#0d47ff",
    bgGradient:
      "radial-gradient(ellipse at bottom, rgba(13,71,255,0.12) 0%, rgba(124,58,237,0.05) 55%, #eef4ff 100%)",
    bodyBg: "#eef4ff",
  },
  
  {
    title: "Gestión de Redes",
  category: "Redes Sociales",
  image: "/gestion-de-redes.jpg",
  accentColor: "#0d47ff",
  bgGradient:
    "radial-gradient(ellipse at left, rgba(13,71,255,0.12) 0%, rgba(124,58,237,0.1) 45%, #f2f0ff 100%)",
  bodyBg: "#f2f0ff",
  },
 {
    title: "Identidad Visual",
    category: "Diseño Gráfico",
    image: "/identidad-visual1.jpg",
    accentColor: "#7c3aed",
    bgGradient:
      "radial-gradient(ellipse at bottom right, rgba(124,58,237,0.12) 0%, rgba(13,71,255,0.1) 45%, #eef0ff 100%)",
    bodyBg: "#eef0ff",
  },
];
  


function ImagePlaceholderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M3 15l5-5 4 4 3-3 5 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function Works() {
  return (
    <section
      id="trabajos"
      className="relative py-24 lg:py-32 bg-[#f8f5ff]"
      aria-labelledby="works-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Nuestros <span className="text-[#0d47ff]">Trabajos</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg">
            Proyectos que hablan por nosotros
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 8px 32px ${project.accentColor}18`,
              }}
              className="group relative rounded-2xl overflow-hidden border border-[#e8eaf0] bg-white hover:border-[#0d47ff]/25 transition-colors duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0" style={{ background: project.bgGradient }} />
                {/* Grid texture */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(13,71,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,71,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                {/* Center icon */}
                {/* Center icon */}
<div className="absolute inset-0 flex items-center justify-center">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div
      className="w-14 h-14 rounded-xl border border-white/60 bg-white/50 flex items-center justify-center"
      style={{
        color: project.accentColor,
        boxShadow: `0 4px 20px ${project.accentColor}20`,
      }}
    >
      <ImagePlaceholderIcon />
    </div>
  )}
</div>
                {/* Bottom gradient to white */}
                <div
                  className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t to-transparent"
                  style={{ backgroundImage: `linear-gradient(to top, white, transparent)` }}
                />
              </div>

              {/* Body */}
              <div className="px-6 pb-6 bg-white">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display font-bold text-[#0b0f17] text-lg leading-tight">
                    {project.title}
                  </h3>
                  <a
                    href="#contacto"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#0b0f17]/30 hover:text-[#0d47ff] text-sm font-sans font-medium transition-colors duration-200"
                    aria-label={`Ver más sobre ${project.title}`}
                  >
                    Ver más
                    <ArrowIcon />
                  </a>
                </div>
                <div className="mt-3">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}30`,
                      backgroundColor: `${project.accentColor}8`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
