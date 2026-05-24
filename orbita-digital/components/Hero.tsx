"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const WA_TATI =
  "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

const stats = [
  { value: "+20", label: "proyectos entregados" },
  { value: "2", label: "personas, sin intermediarios" },
  { value: "<24hs", label: "tiempo de respuesta" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      {/* Blob parallax */}
      <motion.div aria-hidden style={{ y: blobY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[680px] h-[680px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(13,71,255,0.06) 50%, transparent 70%)",
            filter: "blur(80px)",
          }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">

        {/* Eyebrow badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/6 text-[#7c3aed] text-sm font-sans font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed]"
              style={{ animation: "gradient-pulse 2s ease-in-out infinite" }} aria-hidden />
            Diseño · Desarrollo · Automatización
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          id="hero-heading"
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#0b0f17] leading-[1.07] tracking-tight mb-6">
          Tu negocio merece una{" "}
          <span className="text-[#7c3aed]">presencia digital que funcione.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="font-sans text-lg sm:text-xl text-[#0b0f17]/55 max-w-2xl mx-auto mb-10 leading-relaxed">
          Somos Mauri y Tati. Construimos sitios, diseñamos marcas y automatizamos procesos.
          Sin intermediarios, sin plantillas, con criterio.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WA_TATI} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-[#7c3aed]/25 hover:shadow-[#0d47ff]/25 hover:scale-[1.03] cursor-pointer"
            style={{ height: "52px" }}>
            Hablemos del proyecto
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <Link href="/trabajos"
            className="inline-flex items-center gap-2 px-8 rounded-full border border-[#7c3aed]/30 text-[#7c3aed] hover:bg-[#7c3aed]/6 font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            style={{ height: "52px" }}>
            Ver trabajos
          </Link>
        </motion.div>

        {/* Stats estáticos */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mt-16 pt-12 border-t border-[#0b0f17]/6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-3xl text-[#0b0f17] mb-1">{s.value}</p>
              <p className="font-sans text-sm text-[#0b0f17]/40">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
        <span className="font-sans text-xs text-[#0b0f17]/25 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#0b0f17]/15 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#7c3aed]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
