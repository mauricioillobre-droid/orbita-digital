"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

const projects = [
  {
    title: "Floripa por Mauri",
    category: "Landing Page",
    image: "/trabajo-landing.jpg",
    accentColor: "#0d47ff",
    description:
      "Guía digital de Florianópolis basada en experiencia propia. Un sitio pensado para turistas que buscan recomendaciones reales — no las de una guía genérica, sino las de alguien que vive y conoce la isla.",
  },
  {
    title: "Agente Conversacional — Synergy",
    category: "Automatización",
    image: "/trabajo-chatbot.jpg",
    accentColor: "#7c3aed",
    description:
      "Bot de WhatsApp para un broker de seguros. Registra denuncias, genera códigos de seguimiento, permite consultar el estado y gestiona cotizaciones notificando al asesor por email — todo automatizado.",
  },
  {
    title: "Identidad Visual",
    category: "Diseño Gráfico",
    image: "/identidad-visual2.jpg",
    accentColor: "#0d47ff",
    description:
      "Identidad visual completa para una agencia de viajes. Paleta, tipografía, isotipo y aplicaciones gráficas con un estilo que transmite aventura y confianza.",
  },
  {
    title: "Gestión de Redes — Gimnasio",
    category: "Redes Sociales",
    image: "/gestion-de-redes.jpg",
    accentColor: "#7c3aed",
    description:
      "Gestión integral de redes sociales. Estrategia de contenido, diseño de piezas y publicación consistente para construir comunidad y atraer nuevos socios.",
  },
  {
    title: "Identidad Visual",
    category: "Diseño Gráfico",
    image: "/identidad-visual1.jpg",
    accentColor: "#0d47ff",
    description:
      "Identidad visual para una barbería con estética urbana. Logo, paleta y sistema de marca aplicado a piezas digitales e impresas.",
  },
];

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );

      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.12,
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trabajos"
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="works-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 2 columnas */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article
              key={`${project.title}-${project.image}`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/80 via-[#0b0f17]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
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
                    <h3 className="font-display font-bold text-white text-xl">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4 bg-white group-hover:bg-[#faf9ff] transition-colors duration-300">
                <div className="flex items-center justify-between gap-3">
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
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    style={{ backgroundColor: `${project.accentColor}12`, color: project.accentColor }}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
                {project.description && (
                  <p className="font-sans text-[#0b0f17]/50 text-xs leading-relaxed mt-3 pt-3 border-t border-[#0b0f17]/6">
                    {project.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
