"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Antes de proponer cualquier solución, entendemos tu negocio en profundidad: tus objetivos, tu contexto y tus limitaciones reales.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 1a5 5 0 015 5v3a5 5 0 01-10 0V6a5 5 0 015-5z" />
        <path d="M19 10a7 7 0 01-14 0M12 19v4M8 23h8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseñamos juntos",
    description: "Definimos la estrategia antes del presupuesto. Cada decisión se toma con información clara, para que elijas con criterio.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ejecutamos con calidad",
    description: "Construimos con estándares altos y te mantenemos informado en cada etapa. El resultado final no es una sorpresa: es lo que acordamos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let cleanup: (() => void) | undefined;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const { gsap, prefersReduced, splitWords } = await import("@/lib/gsap-utils");
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
          if (stepsRef.current) {
            const cards = Array.from(stepsRef.current.children);
            gsap.fromTo(cards,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.12,
                scrollTrigger: { trigger: stepsRef.current, start: "top 80%", once: true } }
            );
          }
        }, el);
        cleanup = () => ctx.revert();
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => { observer.disconnect(); cleanup?.(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative py-24 lg:py-32 bg-[#faf9ff]"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/12 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            ref={eyebrowRef}
            className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
          >
            Cómo trabajamos
          </span>
          <h2
            ref={titleRef}
            id="process-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            Cómo{" "}
            <span className="text-[#7c3aed]">trabajamos</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg max-w-lg mx-auto">
            Un proceso pensado para que entiendas cada paso.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, transparent, #7c3aed40, transparent)" }}
            aria-hidden
          />

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center md:items-center"
              >
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden absolute top-[52px] left-[26px] w-px h-[calc(100%+2rem)]"
                    style={{ background: "linear-gradient(to bottom, #7c3aed30, transparent)" }}
                    aria-hidden
                  />
                )}
                <div className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full border-2 border-[#7c3aed]/20 bg-white shadow-md shadow-[#7c3aed]/8 mb-6 z-10 group hover:border-[#7c3aed]/60 hover:shadow-[#7c3aed]/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#7c3aed] text-white text-[10px] font-display font-bold flex items-center justify-center leading-none">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[#0b0f17] text-base mb-2">{step.title}</h3>
                <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
