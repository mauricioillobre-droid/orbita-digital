"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Desarrollo Web",
    description: "Tu sitio tiene que trabajar, no solo verse bien. Hacemos sitios que cargan rápido, convierten y escalan.",
    bullets: [
      "Con asesoría previa (decisiones informadas)",
      "Integración con herramientas (automatizamos flujos)",
      "Soporte post-lanzamiento (crecemos juntos)",
    ],
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Automatización",
    description: "Si algo se puede automatizar, no tiene sentido hacerlo a mano. Sistemas que trabajan aunque no estés.",
    bullets: [
      "Flujos integrados (WhatsApp, emails, reservas)",
      "Planillas inteligentes (reportes automáticos)",
      "Procesos que escalan (sin sumar trabajo manual)",
    ],
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Diseño y Contenido",
    description: "La identidad visual de tu negocio importa más de lo que creés. Diseñamos con criterio, no con plantillas.",
    bullets: [
      "Identidad coherente (logo, paleta, estilo)",
      "Contenido estratégico (que vende, no solo viral)",
      "Detalle en todo (porque el detalle genera confianza)",
    ],
    color: "#7c3aed",
  },
];

export default function ServicesPreview() {
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
      className="relative py-24 lg:py-32 bg-[#faf9ff]"
      aria-labelledby="services-preview-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span
            ref={eyebrowRef}
            className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
          >
            Lo que hacemos
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              ref={titleRef}
              id="services-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] max-w-lg"
            >
              Tres servicios,{" "}
              <span className="text-[#7c3aed]">un solo equipo.</span>
            </h2>
            <Link href="/servicios"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#7c3aed] hover:text-[#6d28d9] transition-colors duration-200 cursor-pointer whitespace-nowrap">
              Ver detalle completo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-[#e8eaf0] bg-white p-7 hover:border-[#7c3aed]/25 hover:shadow-lg hover:shadow-[#7c3aed]/7 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${s.color}06 0%, transparent 60%)` }} aria-hidden />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 relative"
                style={{ backgroundColor: `${s.color}10`, border: `1px solid ${s.color}18`, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#0b0f17] mb-2 relative">{s.title}</h3>
              <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed relative mb-4">{s.description}</p>
              <ul className="relative space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 font-sans text-xs text-[#0b0f17]/60 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-[#7c3aed] font-bold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/6 to-transparent" />
    </section>
  );
}
