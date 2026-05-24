"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

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
    color: "#7c3aed",
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
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );

      gsap.fromTo(eyebrowRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%", once: true } }
      );

      if (titleRef.current) {
        const words = splitWords(titleRef.current);
        gsap.fromTo(words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true } }
        );
      }

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
      id="servicios"
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            ref={eyebrowRef}
            className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
          >
            Lo que hacemos
          </span>
          <h2
            ref={titleRef}
            id="services-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Tres áreas. Un equipo.{" "}
            <span className="text-[#7c3aed]">Un objetivo.</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-[#e8eaf0] bg-white p-8 hover:border-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/8 transition-all duration-300 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${service.color}06 0%, transparent 60%)` }}
                aria-hidden
              />
              <div
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ backgroundColor: `${service.color}10`, border: `1px solid ${service.color}18`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#0b0f17] mb-2 relative">{service.title}</h3>
              <p className="font-sans text-[#0b0f17]/45 text-sm leading-relaxed mb-6 relative">{service.description}</p>
              <div className="w-full h-px bg-[#0b0f17]/6 mb-5 relative" />
              <ul className="space-y-2.5 relative" role="list">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-[#0b0f17]/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: service.color }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(to right, transparent, ${service.color}50, transparent)` }}
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
