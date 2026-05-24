"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const STORAGE_KEY = "orbita-intro-seen";

export default function IntroScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) setVisible(true);

    // Escuchar evento para reabrir la intro desde el navbar
    const handler = () => setVisible(true);
    window.addEventListener("orbita:show-intro", handler);
    return () => window.removeEventListener("orbita:show-intro", handler);
  }, []);

  const handleEnter = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#1a0533" }}
        >
          {/* Blob de fondo sutil */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 65%)",
            }}
          />

          {/* Grid de puntos sutil */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

            {/* Logo — entra grande con scale 0.8 → 1 */}
            <motion.img
              src="/logofooter2.png"
              alt="Órbita Digital"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              style={{ width: "280px" }}
              className="object-contain"
            />

            {/* Línea divisoria — se expande de 0 a 60px */}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60px", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="block h-px rounded-full"
              style={{ backgroundColor: "#7c3aed" }}
              aria-hidden
            />

            {/* Texto bienvenida */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
              className="font-sans text-white/45 text-xs tracking-[0.22em] uppercase -mt-4"
            >
              Bienvenido/a a Órbita Digital
            </motion.p>

            {/* Botón CTA */}
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              onClick={handleEnter}
              className="group inline-flex items-center gap-2.5 px-8 h-12 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/15 font-sans text-sm font-medium transition-all duration-300 cursor-pointer"
            >
              Conocenos
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
