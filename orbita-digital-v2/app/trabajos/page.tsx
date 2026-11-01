import type { Metadata } from 'next'
import WALink from '@/components/WALink'
import WorksCarousel from '@/components/WorksCarousel'

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Éxito | Órbita Digital',
  description:
    'Proyectos de Órbita Digital: tiendas online, sistemas de gestión a medida, sitios web y automatizaciones.',
}

export default function TrabajosPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="hero-c" style={{ background: 'var(--bg)' }}>
        <div className="container-od" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-eyebrow" data-anim="fade"><i />Portafolio</div>
          <h1 data-anim="split" data-delay="1" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(44px, 7vw, 96px)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            paddingBottom: '0.06em',
            color: 'var(--ink)',
            margin: '26px 0 24px',
          }}>
            Proyectos que <span className="shiny">hablan solos</span>
          </h1>
          <p data-anim="fade" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
            Cada proyecto tiene una historia. Acá mostramos algunos de los trabajos que más nos enorgullecen.
          </p>
        </div>
      </section>

      {/* Carrusel */}
      <WorksCarousel />

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <div>
            <h2 data-anim="split" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              ¿Tu proyecto podría ser el próximo?
            </h2>
            <p data-anim="fade" data-delay="1" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Hablemos sobre tu idea. Sin compromiso, sin costo.
            </p>
            <div data-anim="fade" data-delay="2"><WALink className="btn btn-wa btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablemos por WhatsApp
            </WALink></div>
          </div>
        </div>
      </section>
    </div>
  )
}
