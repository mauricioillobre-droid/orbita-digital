"use client";

import { motion } from "motion/react";

const team = [
  {
    name: "Mauri",
    role: "Desarrollo & Automatización",
    image: "/Mauri.jpeg",
    linkedin: "https://www.linkedin.com/in/mauricio-illobre-385744368",
    bio: "Soy Mauri, project manager y desarrollador, co-creador de Órbita Digital. Actualmente vivo en Florianópolis, Brasil, donde combino mi experiencia laboral con el desarrollo de proyectos digitales orientados a la optimización de procesos y generación de ingresos. Me especializo en la creación de sistemas automatizados, integración de herramientas y desarrollo de flujos de trabajo eficientes que permiten a negocios mejorar su gestión, ahorrar tiempo y escalar sus operaciones. Trabajo con una filosofía basada en la simplicidad, la mejora constante y la disciplina.",
    accentColor: "#0d47ff",
  },
  {
    name: "Tati",
    role: "Diseño & Contenido",
    image: "/tati.jpeg",
    linkedin: "https://www.linkedin.com/in/tatiana-daloia",
    bio: "Soy Tati, diseñadora gráfica, creadora de Órbita Digital y fundadora de TatsDesign. Vivo en Villa Carlos Paz, Córdoba, y actualmente curso la Licenciatura en Diseño en la Facultad Provincial de Córdoba. Trabajo de manera freelance ayudando a marcas y emprendimientos a mejorar su presencia digital a través del diseño gráfico, desarrollo visual, gestión de redes y marketing digital. En Órbita Digital ese enfoque se potencia junto al desarrollo y la automatización, dando lugar a soluciones digitales más completas.",
    accentColor: "#7c3aed",
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
      id="equipo"
      className="relative py-24 lg:py-32 bg-[#faf9ff]"
      aria-labelledby="about-heading"
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
            Quiénes somos
          </span>
          <h2
            id="about-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Dos personas,{" "}
            <span className="text-[#7c3aed]">un criterio compartido</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg max-w-xl mx-auto leading-relaxed">
            Habilidades complementarias y un objetivo en común: hacer bien las cosas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-[#e8eaf0] bg-white p-8 hover:border-[#7c3aed]/25 hover:shadow-xl hover:shadow-[#7c3aed]/8 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-5">
                {/* Foto */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-24 h-24 rounded-full object-cover object-top"
                    style={{
                      boxShadow: `0 8px 28px ${member.accentColor}30`,
                      border: `3px solid ${member.accentColor}20`,
                    }}
                  />
                  <div
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                    style={{ backgroundColor: member.accentColor }}
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M9 11l3 3L22 4" strokeWidth="3" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="w-full">
                  <h3 className="font-display font-bold text-2xl text-[#0b0f17] mb-0.5">
                    {member.name}
                  </h3>
                  <p
                    className="font-sans text-sm font-semibold tracking-wide mb-4"
                    style={{ color: member.accentColor }}
                  >
                    {member.role}
                  </p>
                  <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed mb-6 text-left">
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0b0f17]/30 hover:text-[#7c3aed] text-sm font-sans font-medium transition-colors duration-200 cursor-pointer"
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

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
