import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Órbita Digital — Agencia Web Argentina',
  description:
    'Mauri y Tati, el equipo detrás de Órbita Digital. Agencia web y automatización en Argentina. Trabajás directo con los especialistas.',
}

const values = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/>
      </svg>
    ),
    title: 'Resultados reales',
    description: 'No hacemos webs para tener webs. Cada proyecto tiene un objetivo medible.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trato directo',
    description: 'Sin cuentas ejecutivas ni intermediarios. Hablás con quienes hacen el trabajo.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Velocidad sin excusas',
    description: 'Respondemos en menos de 24hs. Cumplimos los plazos que prometemos.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Transparencia total',
    description: 'Precios claros, alcance definido y comunicación honesta en todo momento.',
  },
]

export default function NosotrosPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal" style={{ marginBottom: '16px' }}>El equipo</div>
          <h1 className="reveal" data-delay="1" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            El equipo detrás<br />de Órbita Digital
          </h1>
          <p className="reveal" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
            Somos dos personas con habilidades complementarias y un objetivo compartido: que tu negocio crezca en internet.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            [
              {
                name: 'Tati',
                role: 'Diseño & Contenido',
                src: '/images/tati.jpg',
                alt: 'Tati — Diseño Gráfico y Contenido en Órbita Digital',
                linkedin: 'https://linkedin.com/in/tatiana-daloia',
                bio: 'Soy Tati, diseñadora gráfica, creadora de Órbita Digital y fundadora de TatsDesign. Vivo en Villa Carlos Paz, Córdoba, y actualmente curso la Licenciatura en Diseño en la Facultad Provincial de Córdoba. Trabajo de manera freelance ayudando a marcas y emprendimientos a mejorar su presencia digital a través del diseño gráfico, desarrollo visual, gestión de redes y marketing digital. En Órbita Digital, ese enfoque se potencia junto al desarrollo y la automatización, dando lugar a soluciones digitales más completas y orientadas a resultados.',
                tags: ['Branding', 'Figma', 'Redes Sociales', 'Marketing Digital'],
              },
              {
                name: 'Mauri',
                role: 'Desarrollo & Automatización',
                src: '/images/mauri.jpg',
                alt: 'Mauri — Desarrollo Web y Automatización en Órbita Digital',
                linkedin: 'https://linkedin.com/in/mauricio-illobre-385744368',
                bio: 'Soy Mauri, project manager y desarrollador, co-creador de Órbita Digital. Actualmente vivo en Florianópolis, Brasil, donde combino mi experiencia laboral con el desarrollo de proyectos digitales orientados a la optimización de procesos y generación de ingresos. Me especializo en sistemas automatizados, integración de herramientas y flujos de trabajo eficientes que permiten a negocios mejorar su gestión, ahorrar tiempo y escalar sus operaciones. Trabajo con una filosofía basada en la simplicidad, la mejora constante y la disciplina.',
                tags: ['Next.js', 'n8n', 'WhatsApp API', 'Make'],
              },
            ].map((person, i) => (
              <div key={person.name} className="reveal" data-delay={String(i + 1)} style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--bg-2)' }}>
                  <Image
                    src={person.src}
                    alt={person.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h2 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em', color: 'var(--ink)', margin: 0 }}>{person.name}</h2>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" title={`LinkedIn de ${person.name}`} style={{ color: 'var(--ink-3)', transition: 'color 0.2s', flexShrink: 0, marginLeft: '12px', marginTop: '2px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{person.role}</div>
                  <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '20px' }}>{person.bio}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {person.tags.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)', background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '99px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div className="eyebrow reveal" style={{ marginBottom: '20px' }}>La historia</div>
            <h2 className="reveal" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '32px', lineHeight: 1.1 }}>
              Por qué Órbita Digital
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Arrancamos Órbita Digital porque vimos que muchas pymes en CABA y el resto de Argentina tienen un problema real: sus herramientas digitales no trabajan para ellas. Tienen páginas que no convierten, procesos manuales que consumen tiempo y presencia online que no genera nada.',
                'La solución no era contratar grandes agencias con estructuras pesadas y precios inalcanzables. Era un equipo chico, directo y especializado que pudiera resolver múltiples problemas a la vez: diseño, tecnología y contenido sin intermediarios.',
                'Eso somos. Dos personas que trabajan desde Argentina, para negocios en CABA y todo el país, con los mismos estándares de calidad que podría tener una empresa grande pero con el trato personalizado de un equipo que realmente conoce tu negocio.',
              ].map((p, i) => (
                <p key={i} className="reveal" data-delay={String(i + 1)} style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.75, margin: 0 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="eyebrow reveal" style={{ marginBottom: '16px' }}>Cómo trabajamos</div>
          <h2 className="reveal" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '40px' }}>
            Nuestros valores
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {values.map((v, i) => (
              <div key={v.title} className="reveal" data-delay={String((i % 4) + 1)} style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-lg)',
                padding: '28px',
                display: 'flex',
                gap: '16px',
              }}>
                <div className="card-icon" style={{ flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '17px', color: 'var(--ink)', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              ¿Querés conocernos mejor?
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Escribinos por WhatsApp. Sin compromiso, sin costo.
            </p>
            <a
              href="https://wa.me/5491122355689"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
