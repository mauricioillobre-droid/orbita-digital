import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import WALink from '@/components/WALink'

export const metadata: Metadata = {
  title: 'Contacto | Órbita Digital — Hablemos de tu Proyecto',
  description:
    'Contactanos para conocer cómo podemos ayudar a tu negocio. Respondemos en menos de 24 horas.',
}

export default function ContactoPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>Contacto</div>
          <h1 className="reveal reveal-blur" data-delay="1" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            Hablemos de tu proyecto
          </h1>
          <p className="reveal reveal-blur" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '50ch', lineHeight: 1.6 }}>
            Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta concreta.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-pad" style={{ background: 'var(--surface)', paddingTop: 0 }}>
        <div className="container-od">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '40px', alignItems: 'start' }} className="contact-grid">
            {/* Form */}
            <div className="reveal reveal-left">
              <ContactForm />
            </div>

            {/* Aside */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* WhatsApp card */}
              <div className="reveal reveal-right" data-delay="1" style={{
                borderRadius: 'var(--r-lg)',
                border: '1px solid var(--line)',
                background: 'linear-gradient(to bottom, #f0fff4, white)',
                padding: '28px',
              }}>
                <h2 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '17px', color: 'var(--ink)', marginBottom: '8px' }}>
                  ¿Preferís el WhatsApp?
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Escribinos directamente y te respondemos al toque. Sin formularios.
                </p>
                <WALink className="btn btn-wa" style={{ width: '100%', justifyContent: 'center' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escribir por WhatsApp
                </WALink>
              </div>

              {/* Data card */}
              <div className="reveal reveal-right" data-delay="2" style={{
                borderRadius: 'var(--r-lg)',
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                padding: '28px',
              }}>
                <h3 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '15px', color: 'var(--ink)', marginBottom: '20px' }}>
                  Información de contacto
                </h3>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: 'Email',
                    value: 'orbitadigital10@gmail.com',
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: 'Ubicación',
                    value: 'Buenos Aires, Argentina',
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ),
                    label: 'Tiempo de respuesta',
                    value: 'Menos de 24 hs hábiles',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: i < 2 ? '16px' : 0 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '14px', color: 'var(--ink-2)' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note card */}
              <div className="reveal reveal-right" data-delay="3" style={{
                borderRadius: 'var(--r-lg)',
                border: '1px solid var(--line)',
                background: 'var(--bg-2)',
                padding: '20px 24px',
              }}>
                <p style={{ fontSize: '13.5px', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                  <strong style={{ color: 'var(--ink)' }}>¿No sabés por dónde empezar?</strong> Seleccioná
                  &ldquo;No sé, quiero asesoramiento&rdquo; en el formulario. Una conversación sin costo, sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
