'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX } from '@tabler/icons-react'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/trabajos', label: 'Trabajos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="Órbita Digital — Inicio">
              <OrbitaLogo />
              <span className="font-syne font-700 text-white text-lg leading-none">
                Órbita <span className="text-[#00b8ff]">Digital</span>
              </span>
            </Link>

            {/* Nav links — desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-dm text-sm transition-colors duration-200 hover:text-[#00b8ff] ${
                    pathname.startsWith(l.href) ? 'text-[#00b8ff]' : 'text-[#8892a4]'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Hablemos
              </Link>
              <button
                className="md:hidden p-2 text-[#8892a4] hover:text-white transition-colors cursor-pointer"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={open}
              >
                {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: [0.0, 0.0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[#0b0f17] flex flex-col pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-4" aria-label="Menú móvil">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-syne font-700 text-2xl text-white hover:text-[#00b8ff] transition-colors cursor-pointer"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Hablemos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function OrbitaLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="5" fill="url(#g1)" />
      <ellipse cx="14" cy="14" rx="13" ry="6" stroke="url(#g2)" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="7" r="2" fill="#00b8ff" />
      <defs>
        <linearGradient id="g1" x1="9" y1="9" x2="19" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d47ff" />
          <stop offset="1" stopColor="#00b8ff" />
        </linearGradient>
        <linearGradient id="g2" x1="1" y1="14" x2="27" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d47ff" />
          <stop offset="1" stopColor="#00b8ff" />
        </linearGradient>
      </defs>
    </svg>
  )
}
