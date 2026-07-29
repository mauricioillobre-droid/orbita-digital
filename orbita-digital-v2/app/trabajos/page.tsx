import type { Metadata } from 'next'
import WALink from '@/components/WALink'

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Éxito | Órbita Digital',
  description:
    'Portafolio de proyectos de desarrollo web, automatización y diseño para pymes argentinas.',
}

type Project = {
  title: string
  shortDesc: string
  longDesc: string
  tags: string[]
  video: string
  poster: string
  alt: string
  extraVideo?: { label: string; src: string; poster: string }
}

const projects: Project[] = [
  {
    title: 'En Cada Rincón — Tienda Online',
    shortDesc: 'Tienda online completa desarrollada para En Cada Rincón (importadores de productos regionales), con panel de administración a medida y dos canales de venta diferenciados: minorista y mayorista.',
    longDesc: 'Catálogo con variantes (color, talle, stock por variante), checkout con Mercado Pago vía OAuth o transferencia bancaria, y un circuito mayorista independiente con aprobación manual, precios diferenciados y descuentos por volumen. El panel de administración cubre productos, pedidos, solicitudes mayoristas y un dashboard de métricas de ventas. Construida sobre Next.js 16, Cloudflare Workers + D1 (base de datos edge) y Drizzle ORM: infraestructura rápida en toda Latinoamérica, pagos sin fricción para el dueño del negocio y control total sin depender de terceros.',
    tags: ['E-commerce', 'Next.js', 'Mercado Pago', 'Cloudflare'],
    video: '/videos/en-cada-rincon/tienda-full.mp4',
    poster: '/videos/en-cada-rincon/tienda-poster.jpg',
    alt: 'Tienda online En Cada Rincón desarrollada por Órbita Digital, recorrido del sitio',
    extraVideo: {
      label: 'Panel de administración',
      src: '/videos/en-cada-rincon/panel-admin.mp4',
      poster: '/videos/en-cada-rincon/panel-admin-poster.jpg',
    },
  },
  {
    title: 'Sistema de Turnos — 25 de Mayo Consultorios Médicos',
    shortDesc: 'Plataforma integral para un centro médico con más de 49 profesionales activos, que digitaliza la reserva de turnos y centraliza la operación diaria del consultorio.',
    longDesc: 'El sitio institucional presenta especialidades y prácticas, con un buscador de turnos en un flujo guiado de cinco pasos: el calendario se ajusta en tiempo real según la disponibilidad real de cada profesional, contemplando frecuencias variables y bloqueos puntuales de agenda. El panel de administración suma dashboard de métricas, agenda diaria, carga manual de turnos e historial con filtros por estado, origen, especialidad y rango de fechas, distinguiendo turnos reservados desde la web, cargados por el personal o —en una fase posterior— gestionados por un agente conversacional. Un flujo de WhatsApp confirma automáticamente cada turno al paciente, con normalización de números y logs de envío para trazabilidad completa. Construido con Next.js (App Router), TypeScript, Tailwind CSS y Framer Motion sobre Supabase (PostgreSQL + Auth), automatizaciones en n8n y despliegue continuo en Vercel.',
    tags: ['Next.js', 'Supabase', 'WhatsApp', 'n8n'],
    video: '/videos/25-de-mayo/web-full.mp4',
    poster: '/videos/25-de-mayo/web-poster.jpg',
    alt: 'Sistema de turnos online para 25 de Mayo Consultorios Médicos desarrollado por Órbita Digital, recorrido del sitio',
    extraVideo: {
      label: 'Panel de administración',
      src: '/videos/25-de-mayo/panel-admin.mp4',
      poster: '/videos/25-de-mayo/panel-admin-poster.jpg',
    },
  },
]

const waIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function VideoFrame({ src, poster }: { src: string; poster: string }) {
  return (
    <div
      style={{
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        border: '1px solid var(--line-2)',
        boxShadow: 'var(--shadow-card)',
        background: '#0a0a0a',
      }}
    >
      <video
        src={src}
        poster={poster}
        controls
        preload="none"
        playsInline
        style={{ width: '100%', aspectRatio: '16/9', display: 'block', background: '#000' }}
      />
    </div>
  )
}

export default function TrabajosPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>Portafolio</div>
          <h1 className="reveal reveal-blur" data-delay="1" style={{
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
          <p className="reveal reveal-blur" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
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
          <div className="container-od" style={{ maxWidth: '920px' }}>
            <div className="reveal" data-delay="1" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: '99px' }}>{t}</span>
              ))}
            </div>
            <h2 className="reveal reveal-blur" data-delay="2" style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '18px', lineHeight: 1.1, maxWidth: '22ch' }}>
              {p.title}
            </h2>
            <p className="reveal" data-delay="3" style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '14px', maxWidth: '68ch' }}>{p.shortDesc}</p>
            <p className="reveal" data-delay="4" style={{ fontSize: '15px', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '68ch' }}>{p.longDesc}</p>
            <div className="reveal" data-delay="5" style={{ marginBottom: '40px' }}>
              <WALink className="btn btn-wa btn-sm">
                {waIcon}
                Quiero algo similar
              </WALink>
            </div>

            <div className="reveal reveal-scale" data-delay="6">
              <VideoFrame src={p.video} poster={p.poster} />
            </div>

            {p.extraVideo && (
              <div className="reveal reveal-scale" data-delay="7" style={{ marginTop: '32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
                  {p.extraVideo.label}
                </div>
                <VideoFrame src={p.extraVideo.src} poster={p.extraVideo.poster} />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <div>
            <h2 className="reveal reveal-blur" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              ¿Tu proyecto podría ser el próximo?
            </h2>
            <p className="reveal" data-delay="1" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Hablemos sobre tu idea. Sin compromiso, sin costo.
            </p>
            <div className="reveal" data-delay="2"><WALink className="btn btn-wa btn-lg">
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
