import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Diseño Web, Automatización y Branding | Órbita Digital',
  description:
    'Desarrollo web para pymes, automatización con WhatsApp e IA, diseño gráfico y edición de video profesional en Buenos Aires, Argentina.',
}

const services = [
  {
    id: 'desarrollo-web',
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Desarrollo Web Profesional para Pymes',
    content: [
      'Si tu negocio no tiene presencia digital o tiene un sitio que no convierte, estás perdiendo clientes todos los días. En Órbita Digital desarrollamos sitios web profesionales pensados desde cero para generar resultados reales.',
      'No hacemos templates genéricos. Cada proyecto arranca con una conversación sobre tu negocio, tu cliente ideal y tus objetivos. A partir de ahí, diseñamos una experiencia web que guía al visitante hacia la acción que necesitás: una consulta, una reserva, una compra.',
      'Trabajamos con las tecnologías más modernas para garantizar velocidad, seguridad y visibilidad en Google. Nuestros sitios están optimizados para SEO desde el primer día, cargan rápido en mobile y están preparados para crecer con tu negocio.',
    ],
    deliverables: [
      'Landing pages orientadas a conversión',
      'Sitios web institucionales y corporativos',
      'E-commerce y tiendas online',
      'Sistemas de reservas y turnos online',
      'Integración con WhatsApp y CRMs',
      'Optimización SEO técnica y de contenido',
      'Hosting y dominio incluido (primer año)',
    ],
  },
  {
    id: 'automatizacion',
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
    title: 'Automatización con WhatsApp e Inteligencia Artificial',
    content: [
      '¿Cuántas horas por semana pasás respondiendo los mismos mensajes, confirmando turnos o haciendo seguimiento manual de clientes? Ese tiempo tiene un costo real para tu negocio.',
      'En Órbita Digital automatizamos los procesos repetitivos que frenan tu crecimiento. Desde respuestas automáticas por WhatsApp hasta flujos completos de ventas con inteligencia artificial: diseñamos sistemas que trabajan por vos las 24 horas, los 7 días de la semana.',
      'Usamos herramientas como n8n, Make y la API oficial de WhatsApp Business para crear automatizaciones robustas y escalables. El resultado: menos tiempo en tareas operativas, más tiempo para lo que importa.',
    ],
    deliverables: [
      'Chatbots y respuestas automáticas por WhatsApp',
      'Sistemas de confirmación de turnos automáticos',
      'Flujos de seguimiento y recuperación de clientes',
      'Integración de IA para atención al cliente',
      'Automatización de facturación y recordatorios',
      'CRM básico integrado con WhatsApp',
      'Capacitación en el uso de las herramientas',
    ],
  },
  {
    id: 'diseno-grafico',
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 20v-4M12 20H8M12 20h4"/>
      </svg>
    ),
    title: 'Diseño Gráfico y Branding Empresarial',
    content: [
      'La identidad visual de tu negocio es la primera impresión que tienen tus clientes. Una marca sólida genera confianza, diferencia tu negocio de la competencia y hace que te recuerden.',
      'Tati, nuestra diseñadora, trabaja con un enfoque estratégico: no diseña para que se vea lindo, diseña para que funcione. Cada elemento visual está pensado para comunicar los valores de tu marca y conectar con tu audiencia ideal.',
      'Desde el logotipo hasta el manual de marca completo, creamos identidades visuales coherentes y aplicables en todos los puntos de contacto: web, redes sociales, packaging, señalética y más.',
    ],
    deliverables: [
      'Diseño de logotipo e isotipo',
      'Manual de identidad visual',
      'Piezas para redes sociales',
      'Papelería corporativa (tarjetas, membrete, firma)',
      'Flyers y material publicitario',
      'Diseño de packaging',
      'Templates editables para el equipo',
    ],
  },
  {
    id: 'edicion-video',
    num: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: 'Edición de Video y Reels Profesionales',
    content: [
      'El video es el formato que más engagement genera en todas las redes sociales. Pero producir contenido de calidad que realmente funcione requiere más que grabar con el celular: necesita estrategia, edición profesional y conocimiento del algoritmo.',
      'En Órbita Digital producimos reels y videos para Instagram, TikTok y YouTube Shorts que combinan impacto visual con un mensaje claro y orientado a tu audiencia. Trabajamos con material tuyo o te ayudamos desde el guión hasta la publicación.',
      'Nuestro contenido audiovisual está diseñado para detener el scroll, generar interacción y convertir espectadores en clientes.',
    ],
    deliverables: [
      'Edición de Reels para Instagram',
      'Videos cortos para TikTok y YouTube Shorts',
      'Motion graphics y animaciones de texto',
      'Subtitulado automático y corrección',
      'Adaptación a múltiples formatos y proporciones',
      'Estrategia de contenido audiovisual',
      'Paquetes mensuales de producción',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal" style={{ marginBottom: '16px' }}>Servicios</div>
          <h1 className="reveal" data-delay="1" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            Lo que podemos hacer<br />por tu negocio
          </h1>
          <p className="reveal" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
            Diseño, tecnología y automatización en un solo equipo. Sin intermediarios, sin cuentas, con resultados reales.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="section-pad"
          style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--bg-2)', scrollMarginTop: '90px' }}
        >
          <div className="container-od">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

              {/* Left: text */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                  <div className="card-icon reveal">{s.icon}</div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-3)' }}>{s.num}</span>
                </div>
                <h2 className="reveal" data-delay="1" style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: 'clamp(24px, 3vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  marginBottom: '24px',
                  lineHeight: 1.1,
                }}>
                  {s.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {s.content.map((p, j) => (
                    <p key={j} className="reveal" data-delay={String(j + 2)} style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
                <a
                  href="https://wa.me/5491122355689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Consultá por este servicio
                </a>
              </div>

              {/* Right: deliverables card */}
              <div className="reveal" data-delay="2" style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: '20px' }}>¿Qué incluye?</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {s.deliverables.map((d) => (
                    <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M2 5l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div className="reveal" style={{
            borderRadius: 'var(--r-xl)',
            border: '1px solid var(--line)',
            background: 'radial-gradient(ellipse at top center, var(--accent-soft), transparent 60%), var(--surface)',
            padding: 'clamp(48px, 7vw, 80px)',
            textAlign: 'center',
          }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '20px' }}>¿Listo para empezar?</div>
            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              Contanos de qué se trata tu proyecto
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 32px' }}>
              Sin formularios largos. Respondemos en menos de 24hs.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5491122355689" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">WhatsApp →</a>
              <a href="/contacto" className="btn btn-ghost btn-lg">Ver formulario</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
