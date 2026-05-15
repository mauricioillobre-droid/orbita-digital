"use client";

import { motion } from "motion/react";

const team = [
  {
    name: "Mauri",
    role: "Desarrollo & Automatización",
    description:
      "Soy Mauri, project manager y desarrollador, co-creador de Órbita Digital. Me especializo en sistemas automatizados, integración de herramientas y flujos de trabajo eficientes que permiten a negocios escalar sus operaciones.",
    linkedin: "https://www.linkedin.com/in/mauricio-illobre-385744368",
    gradient: "linear-gradient(135deg, #0d47ff, #7c3aed)",
    initial: "M",
    image: "/Mauri.jpeg",
  },
  {
    name: "Tati",
    role: "Diseño & Contenido",
    description:
      "Soy Tati, diseñadora gráfica, co-creadora de Órbita Digital y fundadora de TatsDesign. Ayudo a marcas y emprendimientos a mejorar su presencia digital combinando estética y estrategia en cada proyecto.",
    linkedin: "https://www.linkedin.com/in/tatiana-daloia/",
    gradient: "linear-gradient(135deg, #7c3aed, #0d47ff)",
    initial: "T",
    image: "/tati.jpeg",
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="about-heading"
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
            Quiénes somos
          </span>
          <h2
            id="about-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-3xl mx-auto leading-tight"
          >
            Un equipo apasionado por transformar ideas en{" "}
            <span className="text-[#7c3aed]">soluciones digitales efectivas</span>
          </h2>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ boxShadow: "0 8px 30px rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.3)" }}
              className="group rounded-2xl border border-[#e8eaf0] bg-white p-8 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-5">
               <img
  src={member.image}
  alt={`Foto de ${member.name}`}
  className="w-20 h-20 rounded-full object-cover object-top"
  style={{ boxShadow: "0 6px 24px rgba(13,71,255,0.25)" }}
/>

                {/* Info */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#0b0f17] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-[#0d47ff] tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0b0f17]/25 hover:text-[#7c3aed] text-sm font-sans font-medium transition-colors duration-200"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedInIcon />
                    Ver perfil en LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
