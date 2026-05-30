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

        const bullets = sectionRef.current?.querySelectorAll(".service-bullet");
        if (bullets && bullets.length > 0) {
          gsap.fromTo(
            bullets,
            { opacity: 0, x: -14 },
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative py-24 lg:py-32"
      style={{ background: "#12082b" }}
      aria-labelledby="services-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span
            ref={eyebrowRef}
            className="inline-block font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: "#a78bfa" }}
          >
            Lo que hacemos
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              ref={titleRef}
              id="services-preview-heading"
              className="font-display font-bold text-3xl sm:text-5xl max-w-lg"
              style={{ color: "#ffffff" }}
            >
              Tres servicios,{" "}
              <span style={{ color: "#a78bfa" }}>un solo equipo.</span>
            </h2>
            <Link href="/servicios"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap hover:underline"
              style={{ color: "#fff", textDecorationColor: "#7c3aed" }}>
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
              className="group rounded-2xl p-7 overflow-hidden relative"
              style={{
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.25)",
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px) scale(1.03)";
                el.style.background = "rgba(124,58,237,0.18)";
                el.style.borderColor = "rgba(124,58,237,0.50)";
                el.style.boxShadow = "0 16px 40px rgba(124,58,237,0.30)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "";
                el.style.background = "rgba(124,58,237,0.10)";
                el.style.borderColor = "rgba(124,58,237,0.25)";
                el.style.boxShadow = "";
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
                style={{ backgroundColor: `${s.color}20`, border: `1px solid ${s.color}35`, color: "#a78bfa" }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2 relative" style={{ color: "#ffffff" }}>{s.title}</h3>
              <p className="font-sans text-sm leading-relaxed relative mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>{s.description}</p>
              <ul className="relative space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="service-bullet flex items-start gap-2 font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#a78bfa" }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
