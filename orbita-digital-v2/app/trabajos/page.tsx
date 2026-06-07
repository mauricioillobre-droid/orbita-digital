import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Éxito | Órbita Digital',
  description:
    'Portafolio de proyectos de desarrollo web, automatización y diseño para pymes argentinas.',
}

const projects = [
  {
    title: '25 de Mayo Consultorios Médicos',
    shortDesc: 'Sistema de turnos online con confirmación automática por WhatsApp para consultorio médico en Buenos Aires. Los pacientes sacan turno desde cualquier dispositivo y reciben confirmación instantánea.',
    longDesc: 'Desarrollamos el sitio web completo, integramos el sistema de reservas online y automatizamos los recordatorios de turno con n8n y la API de WhatsApp. El resultado: reducción del 80% en cancelaciones y cero carga administrativa para el staff.',
    tags: ['Desarrollo Web', 'Automatización', 'WhatsApp'],
    image: '/images/trabajos/25-de-mayo.jpg',
    alt: 'Sistema de turnos online para consultorio médico en Argentina desarrollado por Órbita Digital',
    priority: true,
    imgFit: 'cover' as const,
    imgBg: '#0a0a0a',
  },
  {
    title: 'Good Luck Barbería',
    shortDesc: 'Identidad visual completa para una barbería con personalidad propia. Logotipo, paleta de colores, tipografías y sistema gráfico pensado para destacarse en redes y en el local.',
    longDesc: 'Diseñamos cada elemento de marca desde cero: desde el concepto del nombre hasta las piezas digitales para Instagram. El resultado es una identidad sólida, coherente y con carácter — exactamente lo que una barbería moderna necesita para construir comunidad.',
    tags: ['Branding', 'Identidad Visual', 'Diseño Gráfico'],
    image: '/images/identidad-visual1.jpg',
    alt: 'Identidad visual para Good Luck Barbería diseñada por Órbita Digital',
    priority: false,
    imgFit: 'contain' as const,
    imgBg: '#f0ece4',
  },
]

export default function TrabajosPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal" style={{ marginBottom: '16px' }}>Portafolio</div>
          <h1 className="reveal" data-delay="1" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            Proyectos que hablan solos
          </h1>
          <p className="reveal" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
            Cada proyecto tiene una historia. Acá mostramos algunos de los trabajos que más nos enorgullecen.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((p, i) => (
        <section
          key={p.title}
          className="section-pad"
          style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--bg-2)' }}
        >
          <div className="container-od">
            <article
              className="project-card reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '11fr 9fr' : '9fr 11fr',
                gap: '0',
                boxShadow: 'var(--shadow-card)',
                borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                background: 'var(--surface)',
                padding: '16px',
                minHeight: '440px',
              }}
            >
              {/* Imagen con border-radius propio — estilo Hostinger */}
              <div
                style={{
                  position: 'relative',
                  order: i % 2 === 0 ? 0 : 1,
                  background: p.imgBg ?? 'var(--bg-2)',
                  borderRadius: 'var(--r-md)',
                  overflow: 'hidden',
                  minHeight: '380px',
                }}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  priority={p.priority}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={{ objectFit: p.imgFit ?? 'cover', objectPosition: 'center' }}
                />
              </div>

              {/* Texto */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: 'clamp(28px, 4vw, 48px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'var(--surface)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: '99px' }}>{t}</span>
                  ))}
                </div>
                <h2 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 34px)', letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: '16px', lineHeight: 1.1 }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '12px' }}>{p.shortDesc}</p>
                <p style={{ fontSize: '15px', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '28px' }}>{p.longDesc}</p>
                <a
                  href="https://wa.me/5493541232353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Quiero algo similar
                </a>
              </div>
            </article>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              ¿Tu proyecto podría ser el próximo?
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Hablemos sobre tu idea. Sin compromiso, sin costo.
            </p>
            <a
              href="https://wa.me/5493541232353"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
