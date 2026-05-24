"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReduced, splitWords } from "@/lib/gsap-utils";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Trabajo artesanal",
    description:
      "Cada proyecto recibe atención real. No usamos plantillas copiadas ni procesos de agencia masiva. Pensamos cada detalle desde cero.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 20h20" />
        <path d="M6 20V10l6-8 6 8v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
    title: "Visión de negocio",
    description:
      "Diseñamos y construimos pensando en conversión y escalabilidad. El resultado final importa, no solo cómo se ve.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M19 7v6M16 10h6" />
      </svg>
    ),
    title: "Equipo directo",
    description:
      "Trabajás siempre con las mismas personas, sin intermediarios ni cuentas que no conocen tu proyecto. Comunicación directa, sin filtros.",
  },
];

export default function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      // 1. Section depth fade
      gsap.fromTo(sectionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );

      // 2. Eyebrow lateral fade
      gsap.fromTo(eyebrowRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%", once: true } }
      );

      // 3. Title word reveal
      if (titleRef.current) {
        const words = splitWords(titleRef.current);
        gsap.fromTo(words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true } }
        );
      }

      // 4. Cards stagger
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
      id="valor"
      className="relative py-20 lg:py-28 bg-[#faf9ff]"
      aria-labelledby="value-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span
            ref={eyebrowRef}
            className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
          >
            Por qué trabajar con Órbita
          </span>
          <h2
            ref={titleRef}
            id="value-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-[#0b0f17] mb-4 leading-tight"
          >
            No somos una agencia de{" "}
            <span className="text-[#7c3aed]">producción masiva</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-base leading-relaxed">
            Somos un equipo pequeño que trabaja con atención y criterio en cada proyecto.
          </p>
        </div>

        {/* Pilares */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-[#e8eaf0] bg-white p-8 hover:border-[#7c3aed]/30 hover:shadow-lg hover:shadow-[#7c3aed]/8 transition-all duration-300 cursor-default"
            >
              <span className="absolute top-6 right-6 font-display font-bold text-5xl text-[#7c3aed]/6 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/8 border border-[#7c3aed]/12 flex items-center justify-center text-[#7c3aed] mb-5 group-hover:bg-[#7c3aed]/14 transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#0b0f17] mb-2">{pillar.title}</h3>
              <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed">{pillar.description}</p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/0 to-transparent group-hover:via-[#7c3aed]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
