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
    description: "Sitios que convierten visitantes en clientes, diseñados para escalar.",
    items: ["Landing Pages", "Sitios Institucionales", "Tiendas Online", "Optimización para Conversión"],
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
    title: "Automatización y Sistemas",
    description: "Procesos que trabajan solos para que vos te enfoques en crecer.",
    items: ["Automatización de WhatsApp", "Bots de Atención", "Integración con CRM", "Flujos de Venta"],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="13.5" cy="6.5" r="3.5" />
        <circle cx="6.5" cy="13.5" r="3.5" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </svg>
    ),
    title: "Diseño y Contenido",
    description: "Identidad visual y contenido que atrae, conecta y convierte.",
    items: ["Identidad Visual", "Diseño Gráfico", "Gestión de Redes Sociales", "Edición de Video y Fotografía"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32 bg-[#f7f5ff]"
      aria-labelledby="services-heading"
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
            Lo que hacemos
          </span>
          <h2
            id="services-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Nuestros <span className="text-[#0d47ff]">Servicios</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg max-w-xl mx-auto leading-relaxed">
            Soluciones completas para potenciar tu presencia digital
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{
                boxShadow: "0 8px 32px rgba(13,71,255,0.1)",
                borderColor: "rgba(13,71,255,0.3)",
              }}
              className="group relative rounded-2xl border border-[#e8eaf0] bg-white p-8 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#0d47ff]/8 border border-[#0d47ff]/12 flex items-center justify-center text-[#0d47ff] mb-6 group-hover:bg-[#0d47ff]/14 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-[#0b0f17] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[#0b0f17]/45 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* List */}
              <ul className="space-y-2.5" role="list">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-[#0b0f17]/60 text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#7c3aed" }}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line on hover */}
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0d47ff]/0 to-transparent group-hover:via-[#0d47ff]/25 transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
