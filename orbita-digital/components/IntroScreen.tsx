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

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 flex flex-col items-center gap-7 px-6 text-center"
          >
            {/* Logo */}
            <img
              src="/logofooter2.png"
              alt="Órbita Digital"
              className="h-16 sm:h-20 object-contain"
            />

            {/* Texto bienvenida */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-sans text-white/45 text-sm tracking-[0.2em] uppercase"
            >
              Bienvenido/a a Órbita Digital
            </motion.p>

            {/* Botón CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
