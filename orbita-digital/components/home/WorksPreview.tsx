"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

const projects = [
  { title: "Floripa por Mauri", category: "Landing Page", image: "/trabajo-landing.jpg", color: "#7c3aed" },
  { title: "Agente conversacional", category: "Automatización", image: "/trabajo-chatbot.jpg", color: "#7c3aed" },
  { title: "Identidad Visual", category: "Diseño Gráfico", image: "/identidad-visual2.jpg", color: "#7c3aed" },
  { title: "Gestión de Redes", category: "Redes Sociales", image: "/gestion-de-redes.jpg", color: "#7c3aed" },
];

export default function WorksPreview() {
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
      className="relative py-24 lg:py-32 bg-white"
      aria-labelledby="works-preview-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span
            ref={eyebrowRef}
            className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
          >
            Portafolio
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              ref={titleRef}
              id="works-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-lg"
            >
              Proyectos reales,{" "}
              <span className="text-[#7c3aed]">resultados concretos.</span>
            </h2>
            <Link href="/trabajos"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#7c3aed] hover:text-[#6d28d9] transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Ver todos los trabajos
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-[#e8eaf0] bg-white cursor-pointer"
            >
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
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
