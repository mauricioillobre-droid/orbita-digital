"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const WA_TATI =
  "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

function OrbitIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const showIntro = () => {
    localStorage.removeItem("orbita-intro-seen");
    window.dispatchEvent(new CustomEvent("orbita:show-intro"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 backdrop-blur-xl border-b border-[#0b0f17]/7 shadow-sm shadow-[#7c3aed]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Link href="/" className="flex items-center gap-2.5 cursor-pointer" aria-label="Inicio">
            <img src="/logofondotr.png" alt="Órbita Digital" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-[#0b0f17] text-lg leading-none">
              Órbita <span className="text-[#7c3aed]">Digital</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className={`relative font-sans text-sm font-medium pb-1 transition-colors duration-200 cursor-pointer ${
                    active ? "text-[#7c3aed]" : "text-[#0b0f17]/55 hover:text-[#0b0f17]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#7c3aed]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={showIntro} title="Ver bienvenida" aria-label="Ver pantalla de bienvenida"
              className="w-8 h-8 flex items-center justify-center rounded-full text-[#0b0f17]/30 hover:text-[#7c3aed] hover:bg-[#7c3aed]/8 transition-all duration-200 cursor-pointer">
              <OrbitIcon />
            </button>
            <a href={WA_TATI} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center h-9 px-6 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white text-sm font-sans font-semibold transition-all duration-200 shadow-md shadow-[#7c3aed]/25 cursor-pointer">
              Hablemos
            </a>
          </div>

          <button onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 cursor-pointer">
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-[#0b0f17] rounded-full origin-center" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/97 backdrop-blur-xl border-b border-[#0b0f17]/6">
            <nav className="flex flex-col px-4 py-5 gap-1" aria-label="Menú móvil">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}
                    className={`font-sans text-base font-medium py-3 px-3 rounded-xl transition-colors cursor-pointer ${
                      active ? "text-[#7c3aed] bg-[#7c3aed]/6" : "text-[#0b0f17]/60 hover:text-[#0b0f17] hover:bg-[#0b0f17]/4"
                    }`}>
                    {link.label}
                  </Link>
                );
              })}
              <button onClick={showIntro}
                className="flex items-center gap-2 py-3 px-3 rounded-xl text-[#0b0f17]/40 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 font-sans text-sm transition-colors cursor-pointer">
                <OrbitIcon /> Ver bienvenida
              </button>
              <a href={WA_TATI} target="_blank" rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center h-12 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold transition-colors duration-200 cursor-pointer">
                Hablemos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
