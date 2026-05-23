"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

const WA_TATI = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection("#" + entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#0b0f17]/8 shadow-sm shadow-[#7c3aed]/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Órbita Digital - Inicio"
          >
            <img
              src="/logofondotr.png"
              alt="Órbita Digital"
              className="w-11 h-11 object-contain"
            />
            <span className="font-display font-bold text-[#0b0f17] text-lg leading-none">
              Órbita <span className="text-[#7c3aed]">Digital</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium pb-1 transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href
                    ? "text-[#7c3aed]"
                    : "text-[#0b0f17]/55 hover:text-[#0b0f17]"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#7c3aed]"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_TATI}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center h-9 px-6 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white text-sm font-sans font-semibold transition-all duration-200 shadow-md shadow-[#7c3aed]/25 hover:shadow-[#0d47ff]/25 cursor-pointer"
          >
            Hablemos
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 cursor-pointer"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/97 backdrop-blur-xl border-b border-[#0b0f17]/6"
          >
            <nav className="flex flex-col px-4 py-5 gap-1" aria-label="Menú móvil">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sans text-base font-medium py-3 px-3 rounded-xl transition-colors cursor-pointer ${
                    activeSection === link.href
                      ? "text-[#7c3aed] bg-[#7c3aed]/6"
                      : "text-[#0b0f17]/60 hover:text-[#0b0f17] hover:bg-[#0b0f17]/4"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_TATI}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center h-12 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold transition-colors duration-200 cursor-pointer"
              >
                Hablemos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
