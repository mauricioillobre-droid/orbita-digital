"use client";

import { motion } from "motion/react";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M10 8h4" />
        <path d="M7 11h10" />
      </svg>
    ),
    title: "Desarrollo Web",
    description:
      "Creamos sitios web que van más allá de verse bien. Cada proyecto está pensado para cargar rápido, adaptarse a cualquier dispositivo y convertir visitantes en clientes. Sin plantillas, sin atajos.",
    items: ["Landing Pages", "Sitios Institucionales", "Tiendas Online", "Optimización de Conversión"],
    color: "#0d47ff",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Automatización e Integraciones",
    description:
      "Conectamos tus herramientas y automatizamos los procesos que te consumen tiempo. Desde confirmaciones automáticas hasta atención por WhatsApp — sistemas que trabajan mientras vos te enfocás en crecer.",
    items: ["Bots de WhatsApp", "Atención Automatizada", "Integración con CRM", "Flujos de Venta"],
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Diseño y Contenido",
    description:
      "Una identidad visual bien construida genera confianza antes de que alguien lea una sola palabra. Creamos marcas, diseñamos piezas y gestionamos contenido con criterio estético y estratégico.",
    items: ["Identidad Visual", "Diseño Gráfico", "Gestión de Redes", "Edición de Video y Fotografía"],
    color: "#7c3aed",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="services-heading"
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
            Lo que hacemos
          </span>
          <h2
            id="services-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Tres áreas. Un equipo.{" "}
            <span className="text-[#0d47ff]">Un objetivo.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-[#e8eaf0] bg-white p-8 hover:border-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/8 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${service.color}06 0%, transparent 60%)`,
                }}
                aria-hidden
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{
                  backgroundColor: `${service.color}10`,
                  border: `1px solid ${service.color}18`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-[#0b0f17] mb-2 relative">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[#0b0f17]/45 text-sm leading-relaxed mb-6 relative">
                {service.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#0b0f17]/6 mb-5 relative" />

              {/* List */}
              <ul className="space-y-2.5 relative" role="list">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-[#0b0f17]/60 text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent on hover */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{
                  background: `linear-gradient(to right, transparent, ${service.color}50, transparent)`,
                }}
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
