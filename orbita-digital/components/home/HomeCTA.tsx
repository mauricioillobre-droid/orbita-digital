"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

const WA_TATI = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #ffffff, #faf5ff)" }}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/7 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "100%",
          background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(124,58,237,0.08), transparent)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gradient border card */}
        <div
          style={{
            padding: "2px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #7c3aed, #0d47ff, #a78bfa, #7c3aed)",
            backgroundSize: "300% 300%",
            animation: "gradientBorderSpin 3s linear infinite",
          }}
        >
          <div style={{ borderRadius: "12px", background: "white" }} className="px-8 py-12">
            <span
              ref={eyebrowRef}
              className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-5"
            >
              Arrancamos
            </span>
            <h2
              ref={titleRef}
              id="cta-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-5 leading-tight"
            >
              ¿Tenés un proyecto<br />
              <span className="text-[#7c3aed]">en mente?</span>
            </h2>
            <p className="font-sans text-[#0b0f17]/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Contanos qué necesitás. Sin formularios interminables, sin esperas largas.
              Respondemos rápido y directo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA_TATI} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 h-13 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-[#7c3aed]/20 hover:shadow-[#0d47ff]/20 hover:scale-[1.03] cursor-pointer"
                style={{ height: "52px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.84L.057 23.453a.75.75 0 00.9.9l5.58-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.383-.228-3.975 1.044 1.044-3.84-.25-.4A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Escribinos por WhatsApp
              </a>
              <Link href="/contacto"
                className="inline-flex items-center gap-2 px-8 rounded-full border border-[#7c3aed]/30 text-[#7c3aed] hover:bg-[#7c3aed]/6 font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                style={{ height: "52px" }}>
                Ir al formulario
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
