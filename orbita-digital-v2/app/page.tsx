import type { Metadata } from 'next'
import Image from 'next/image'
import WALink from '@/components/WALink'
import AnimatedStat from '@/components/AnimatedStat'

export const metadata: Metadata = {
  title: 'Agencia Web y Automatización para Pymes en Argentina | Órbita Digital',
  description:
    'Diseño web profesional, automatización con WhatsApp e inteligencia artificial para pymes en Buenos Aires. Respondemos en menos de 24hs. Contactanos hoy.',
  keywords:
    'agencia web argentina, diseño web para pymes, automatización whatsapp, desarrollo web buenos aires, agencia digital pymes',
}

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ background: 'var(--bg)', paddingTop: '140px', paddingBottom: 'clamp(72px, 11vw, 140px)' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '24px' }}>
            Agencia digital · Buenos Aires
          </div>

          <h1 style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(42px, 7vw, 96px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 0.96,
            color: 'var(--ink)',
            marginBottom: '24px',
            overflow: 'hidden',
          }}>
            <span className="reveal reveal-mask" data-delay="1" style={{ display: 'block' }}>Tu negocio necesita</span>
            <span className="reveal reveal-mask" data-delay="2" style={{ display: 'block' }}>
              una web{' '}<span style={{ color: 'var(--accent)' }}>que trabaje</span>,
            </span>
            <span className="reveal reveal-mask" data-delay="3" style={{ display: 'block' }}>no que exista</span>
          </h1>

          <p className="reveal reveal-blur" data-delay="4" style={{
            fontSize: 'clamp(17px, 1.5vw, 20px)',
            color: 'var(--ink-2)',
            maxWidth: '46ch',
            lineHeight: 1.6,
            marginBottom: '36px',
          }}>
            Diseño web profesional, automatización y contenido para pymes que quieren crecer en Buenos Aires y todo Argentina.
          </p>

          <div className="reveal" data-delay="5" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <WALink className="btn btn-wa btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablemos por WhatsApp
            </WALink>
            <a href="/trabajos" className="btn btn-ghost btn-lg">Ver nuestros trabajos →</a>
          </div>

          {/* Trust bar */}
          <div className="reveal" data-delay="6" style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
            {['+20 proyectos entregados', 'Respondemos en menos de 24hs', 'Trabajás directo con el equipo'].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                paddingRight: i < 2 ? '28px' : 0, marginRight: i < 2 ? '28px' : 0,
                borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                fontSize: '14px', color: 'var(--ink-2)',
                paddingBottom: '8px', marginBottom: '8px',
              }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee-wrap" style={{ marginTop: '64px', paddingBlock: '16px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="marquee-track" aria-hidden="true">
            {['Next.js', 'WhatsApp API', 'Inteligencia Artificial', 'Branding', 'SEO', 'Automatización', 'Reels', 'Supabase', 'n8n', 'Diseño Web', 'Next.js', 'WhatsApp API', 'Inteligencia Artificial', 'Branding', 'SEO', 'Automatización', 'Reels', 'Supabase', 'n8n', 'Diseño Web'].map((item, i) => (
              <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-3)', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>
                {item} <span style={{ color: 'var(--accent)', margin: '0 8px' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>Lo que hacemos</div>
          <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '48px' }}>
            Servicios diseñados para crecer
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Desarrollo Web para Pymes', desc: 'Sitios profesionales optimizados para generar leads. Desde landing pages hasta sistemas con reservas online y automatizaciones.', id: 'desarrollo-web' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>, title: 'Automatización con WhatsApp e IA', desc: 'Automatizamos ventas, turnos y atención al cliente. Menos tareas manuales, más tiempo para lo que importa.', id: 'automatizacion' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 20v-4M12 20H8M12 20h4"/></svg>, title: 'Diseño Gráfico y Branding', desc: 'Identidad visual estratégica para diferenciarte. Logos, piezas publicitarias y branding pensados para vender.', id: 'diseno-grafico' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>, title: 'Edición de Video y Reels', desc: 'Contenido audiovisual para redes que genera alcance y convierte. Reels de alto impacto para tu negocio.', id: 'edicion-video' },
            ].map((s, i) => (
              <a key={i} href={`/servicios#${s.id}`} className="service-card reveal" data-delay={String((i % 4) + 1)} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="card-icon" aria-hidden="true">{s.icon}</div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-3)' }}>/{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-hanken)', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od">
          <div className="stats-grid">
            {[
              { num: '+20', label: 'Proyectos entregados' },
              { num: '2', label: 'Especialistas en el equipo' },
              { num: '<24hs', label: 'Tiempo de respuesta' },
              { num: '100%', label: 'Clientes satisfechos' },
            ].map((stat, i) => (
              <div key={i} className="stat-item reveal reveal-scale" data-delay={String(i + 1)}>
                <AnimatedStat value={stat.num} style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1 }} />
                <div style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '8px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CÓMO TRABAJAMOS ─── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>El proceso</div>
          <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '56px' }}>
            Así trabajamos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'Escuchamos', desc: 'Entendemos tu negocio antes de proponer nada. Una reunión sin costo para entender el contexto real.' },
              { num: '02', title: 'Diseñamos', desc: 'Construimos la solución con criterio estratégico. Diseño, tecnología y contenido en un solo equipo.' },
              { num: '03', title: 'Ejecutamos', desc: 'Entregamos en tiempos reales. Con seguimiento, soporte y sin sorpresas al final.' },
            ].map((step, i) => (
              <div key={i} className="reveal reveal-scale value-card" data-delay={String(i + 1)} style={{ padding: '32px', background: 'var(--bg)', borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '16px' }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-hanken)', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>Clientes</div>
          <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '48px' }}>
            Lo que dicen nuestros clientes
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

            {/* Reseña 1 — German Pompiglio */}
            <blockquote className="reveal reveal-left" data-delay="1" style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '32px', margin: 0 }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }} aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="var(--accent)" aria-hidden="true">
                    <path d="M8 1l1.854 3.756L14 5.567l-3 2.927.708 4.127L8 10.5l-3.708 2.121L5 8.494 2 5.567l4.146-.811z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                &ldquo;Implementaron el sistema de turnos online en tiempo récord. Los pacientes ahora sacan turno solos y reciben confirmación por WhatsApp automáticamente. Unos genios ♥&rdquo;
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: '13px', color: 'white' }}>GP</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '14px', color: 'var(--ink)' }}>German Pompiglio</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-3)' }}>25 de Mayo Consultorios</div>
                </div>
              </footer>
            </blockquote>

            {/* Reseña 2 — Evangelina Angeri */}
            <blockquote className="reveal reveal-right" data-delay="2" style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '32px', margin: 0 }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }} aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="var(--accent)" aria-hidden="true">
                    <path d="M8 1l1.854 3.756L14 5.567l-3 2.927.708 4.127L8 10.5l-3.708 2.121L5 8.494 2 5.567l4.146-.811z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                &ldquo;Me contacté con los chicos de Órbita Digital porque necesitaba ayuda para promocionar los eventos de mis talleres y la experiencia fue súper positiva. Desde el primer momento me escucharon, entendieron lo que necesitaba y me fueron guiando en todo el proceso. Los resultados fueron muy buenos y pude difundir mis eventos de forma mucho más profesional y organizada. Los super recomiendo.&rdquo;
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: '13px', color: 'white' }}>EA</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '14px', color: 'var(--ink)' }}>Evangelina Angeri</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-3)' }}>Talleres y eventos</div>
                </div>
              </footer>
            </blockquote>

            {/* TODO: agregar próximas reseñas aquí */}
            <blockquote style={{ display: 'none' }} aria-hidden="true" />
            <blockquote style={{ display: 'none' }} aria-hidden="true" />

          </div>

          {/* Botón Google Business */}
          <div className="reveal" data-delay="3" style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href="https://g.page/r/CUYtK1yHSmpSEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Ver opiniones en Google →
            </a>
          </div>
        </div>
      </section>

      {/* ─── PROYECTOS PREVIEW ─── */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="eyebrow reveal reveal-left" style={{ marginBottom: '16px' }}>Portafolio</div>
              <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', margin: 0 }}>
                Algunos proyectos
              </h2>
            </div>
            <a href="/trabajos" className="reveal btn btn-ghost" data-delay="2">Ver todos →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {[
              {
                title: '25 de Mayo Consultorios Médicos',
                desc: 'Sistema de turnos online con confirmación automática por WhatsApp para consultorio médico en Buenos Aires.',
                tags: ['Desarrollo Web', 'Automatización', 'WhatsApp'],
                image: '/images/trabajos/25-de-mayo.jpg',
                alt: 'Sistema de turnos online para consultorio médico en Argentina desarrollado por Órbita Digital',
                priority: true,
              },
              {
                title: 'Órbita Digital',
                desc: 'Diseño web y branding completo para agencia digital argentina. Identidad visual diferenciada y alta performance.',
                tags: ['Diseño', 'Desarrollo'],
                image: '/images/trabajos/orbita.jpg',
                alt: 'Diseño web y branding para agencia digital argentina',
                priority: false,
              },
            ].map((w, i) => (
              <article key={i} className="project-card reveal reveal-scale" data-delay={String(i + 1)}>
                <div className="project-img-wrap" style={{ background: 'var(--bg-2)' }}>
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    className="project-img"
                    priority={w.priority}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {w.tags.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: '99px' }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '19px', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '8px' }}>{w.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ─── */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow reveal reveal-left" style={{ marginBottom: '20px' }}>El equipo</div>
              <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
                Somos Mauri y Tati
              </h2>
              <p className="reveal" data-delay="2" style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '12px' }}>
                Diseño, tecnología y automatización en un solo equipo.
              </p>
              <p className="reveal" data-delay="3" style={{ fontSize: '15px', color: 'var(--ink-3)', marginBottom: '32px' }}>
                Agencia web en Argentina para pymes que quieren crecer de verdad.
              </p>
              <div className="reveal" data-delay="4">
                <WALink className="btn btn-wa btn-lg">
                  Escribinos por WhatsApp →
                </WALink>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { src: '/images/mauri.jpg', alt: 'Mauri — Desarrollo Web y Automatización en Órbita Digital, Buenos Aires', label: 'Mauri', role: 'Desarrollo & Automatización' },
                { src: '/images/tati.jpg', alt: 'Tati — Diseño Gráfico y Contenido en Órbita Digital, Buenos Aires', label: 'Tati', role: 'Diseño & Contenido' },
              ].map((person, i) => (
                <div key={person.label} className={`reveal ${i === 0 ? 'reveal-left' : 'reveal-right'}`} data-delay={String(i + 5)} style={{ flex: 1, background: 'var(--surface)', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line)' }}>
                  <div className="team-img-wrap" style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--bg-2)' }}>
                    <Image
                      src={person.src}
                      alt={person.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '15px', color: 'var(--ink)' }}>{person.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '2px' }}>{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="reveal reveal-scale" style={{
            borderRadius: 'var(--r-xl)',
            border: '1px solid var(--line)',
            background: 'radial-gradient(ellipse at top center, var(--accent-soft), transparent 60%), var(--surface)',
            padding: 'clamp(48px, 7vw, 80px)',
            textAlign: 'center',
          }}>
            <div className="eyebrow reveal reveal-left" style={{ justifyContent: 'center', marginBottom: '20px' }}>¿Listo para empezar?</div>
            <h2 className="reveal reveal-blur" data-delay="1" style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              Contanos de qué se trata tu proyecto
            </h2>
            <p className="reveal" data-delay="2" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px' }}>
              Respondemos en menos de 24hs. Sin formularios largos, sin esperas.
            </p>
            <div className="reveal" data-delay="3" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <WALink className="btn btn-wa btn-lg">WhatsApp →</WALink>
              <a href="/contacto" className="btn btn-ghost btn-lg">Ver formulario</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
