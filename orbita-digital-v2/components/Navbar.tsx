'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/trabajos', label: 'Trabajos' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: '76px',
      display: 'flex', alignItems: 'center',
      paddingInline: 'var(--gutter)',
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      background: scrolled ? 'rgba(245,246,248,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 'var(--maxw)', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="14" cy="14" rx="6" ry="6" fill="var(--accent)" opacity="0.15"/>
            <circle cx="14" cy="14" r="3.5" fill="var(--accent)"/>
            <ellipse cx="14" cy="14" rx="11" ry="5.5" stroke="var(--accent)" strokeWidth="1.5" fill="none" transform="rotate(-30 14 14)"/>
            <circle className="orbit-dot" cx="14" cy="3" r="2" fill="var(--accent-2)"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '15.5px', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
            Órbita <span style={{ color: 'var(--accent)' }}>Digital</span>
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '14.5px',
              color: pathname === link.href ? 'var(--accent)' : 'var(--ink-2)',
              textDecoration: 'none',
              fontWeight: pathname === link.href ? 500 : 400,
              transition: 'color 0.2s ease',
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contacto" className="btn btn-primary btn-sm hidden md:inline-flex">
          Hablemos →
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: '8px' }}
          aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
              : <><line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '76px', left: 0, right: 0,
          background: 'var(--surface)', borderBottom: '1px solid var(--line)',
          padding: '1.5rem var(--gutter)', display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: '16px', color: 'var(--ink-2)', textDecoration: 'none', fontFamily: 'var(--font-hanken)' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Hablemos →
          </Link>
        </div>
      )}
    </nav>
  )
}
