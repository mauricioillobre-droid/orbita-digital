"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const WA_TATI = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(13,71,255,0.07) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(13,71,255,0.09) 0%, transparent 70%)",
            filter: "blur(70px)",
            transform: "translate(120px, -80px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/6 text-[#7c3aed] text-sm font-sans font-medium">
            <span
              className="w-2 h-2 rounded-full bg-[#7c3aed]"
              style={{ animation: "gradient-pulse 2s ease-in-out infinite" }}
              aria-hidden
            />
            Agencia de diseño, tecnología y automatización
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          id="hero-heading"
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#0b0f17] leading-[1.07] tracking-tight mb-6"
        >
          Construimos presencia digital{" "}
          <span className="text-[#7c3aed]">que funciona.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="font-sans text-lg sm:text-xl text-[#0b0f17]/55 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Sitios web, identidad visual y automatizaciones para negocios
          que quieren crecer con consistencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_TATI}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-[#7c3aed]/25 hover:shadow-[#0d47ff]/25 hover:scale-[1.03] cursor-pointer"
            style={{ height: "52px" }}
          >
            Hablemos de tu proyecto
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <a
            href="#trabajos"
            className="inline-flex items-center gap-2 px-8 rounded-full border border-[#7c3aed]/30 text-[#7c3aed] hover:bg-[#7c3aed]/6 font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            style={{ height: "52px" }}
          >
            Ver trabajos
          </a>
        </motion.div>

      </motion.div>

    </section>
  );
}
