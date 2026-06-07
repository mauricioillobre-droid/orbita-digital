'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
      <div className="container-od" style={{ paddingBlock: 'clamp(48px, 7vw, 80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '14px' }}>
              <Image
                src="/images/orbita-nuevo.png"
                alt="Órbita Digital"
                width={130}
                height={44}
                style={{ objectFit: 'contain', maxHeight: '44px', width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: '24ch' }}>
              Diseño web, automatización y contenido para pymes en Argentina.
            </p>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '16px' }}>Servicios</div>
            {[
              { label: 'Desarrollo Web para Pymes', href: '/servicios#desarrollo-web' },
              { label: 'Automatización con WhatsApp', href: '/servicios#automatizacion' },
              { label: 'Diseño Gráfico y Branding', href: '/servicios#diseno-grafico' },
              { label: 'Edición de Video y Reels', href: '/servicios#edicion-video' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', fontSize: '14.5px', color: 'var(--ink-2)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Estudio */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '16px' }}>Estudio</div>
            {[
              { label: 'Proyectos y Trabajos', href: '/trabajos' },
              { label: 'Quiénes Somos', href: '/nosotros' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contacto', href: '/contacto' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', fontSize: '14.5px', color: 'var(--ink-2)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '16px' }}>Contacto</div>
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                text: 'hola@orbitadigital.tech',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: 'var(--accent)' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                text: 'WhatsApp disponible',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                text: 'Buenos Aires, Argentina',
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                text: 'Lun–Vie 9 a 18hs',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--ink-2)', marginBottom: '10px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--accent-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-3)' }}>© 2025 Órbita Digital · Agencia web y automatización en Argentina</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-3)' }}>Desarrollado por Órbita Digital</span>
        </div>
      </div>
    </footer>
  )
}
