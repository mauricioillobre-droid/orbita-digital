import type { Metadata } from 'next'
import Link from 'next/link'
import WALink from '@/components/WALink'

export const metadata: Metadata = {
  title: 'Blog | Órbita Digital — Consejos de Marketing Digital para Pymes',
  description:
    'Artículos sobre diseño web, automatización, WhatsApp Business e inteligencia artificial para pymes argentinas.',
}

const posts = [
  {
    slug: 'por-que-tu-pyme-necesita-sitio-web',
    category: 'Desarrollo Web',
    date: '2025-05-10',
    dateLabel: '10 may 2025',
    title: '¿Por qué tu pyme necesita un sitio web en 2025?',
    excerpt:
      'El 76% de los consumidores busca en Google antes de comprar. Si no aparecés, tu competencia se lleva ese cliente. Te explicamos por qué tener presencia digital ya no es opcional.',
    readTime: '4 min',
  },
  {
    slug: 'automatizacion-whatsapp-para-negocios',
    category: 'Automatización',
    date: '2025-04-22',
    dateLabel: '22 abr 2025',
    title: 'Cómo automatizar WhatsApp para tu negocio sin perder el toque humano',
    excerpt:
      'Los chatbots tienen mala fama, pero bien implementados te liberan horas de trabajo rutinario y mejoran la experiencia de tus clientes. Te mostramos cómo hacerlo bien.',
    readTime: '6 min',
  },
  {
    slug: 'seo-local-para-pymes-argentinas',
    category: 'SEO',
    date: '2025-04-08',
    dateLabel: '8 abr 2025',
    title: 'SEO local: cómo aparecer primero en Google en tu ciudad',
    excerpt:
      'Posicionarte en búsquedas como "plomero en Palermo" o "dentista en Córdoba" es más accesible de lo que pensás. Estrategias concretas para pymes argentinas.',
    readTime: '5 min',
  },
  {
    slug: 'reels-para-instagram-que-funcionan',
    category: 'Redes Sociales',
    date: '2025-03-19',
    dateLabel: '19 mar 2025',
    title: 'Reels para negocios: lo que el algoritmo de Instagram realmente quiere',
    excerpt:
      'No se trata de bailar ni de tendencias vacías. Te explicamos cómo crear reels que generan clientes reales para tu pyme, con ejemplos concretos y un proceso repetible.',
    readTime: '7 min',
  },
  {
    slug: 'inteligencia-artificial-para-pymes',
    category: 'Automatización',
    date: '2025-03-05',
    dateLabel: '5 mar 2025',
    title: 'IA para pymes: 5 formas de usarla hoy sin ser técnico',
    excerpt:
      'La inteligencia artificial no es solo para grandes empresas. Estas herramientas ya están disponibles, son accesibles en precio y pueden transformar la operación de tu negocio.',
    readTime: '5 min',
  },
  {
    slug: 'velocidad-web-y-seo',
    category: 'Desarrollo Web',
    date: '2025-02-18',
    dateLabel: '18 feb 2025',
    title: 'Por qué la velocidad de tu web afecta directamente tus ventas',
    excerpt:
      'Cada segundo extra de carga cuesta clientes. Google lo sabe. Te mostramos qué métricas importan, cómo medirlas y qué hacer para que tu sitio vuele.',
    readTime: '4 min',
  },
]

const categoryColors: Record<string, string> = {
  'Desarrollo Web': '#1f6fd0',
  'Automatización': '#7c3aed',
  'SEO': '#059669',
  'Redes Sociales': '#db2777',
}

export default function BlogPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section className="section-pad" style={{ background: 'var(--bg)', paddingTop: '120px' }}>
        <div className="container-od">
          <div className="eyebrow reveal" style={{ marginBottom: '16px' }}>Blog</div>
          <h1 className="reveal" data-delay="1" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            Ideas para hacer crecer<br />tu negocio digital
          </h1>
          <p className="reveal" data-delay="2" style={{ fontSize: '18px', color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.6 }}>
            Artículos prácticos sobre diseño web, automatización, WhatsApp Business e inteligencia artificial para pymes argentinas.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-pad" style={{ background: 'var(--surface)' }}>
        <div className="container-od">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="reveal"
                data-delay={String((i % 3) + 1)}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Category color bar */}
                <div style={{
                  height: '4px',
                  background: categoryColors[post.category] ?? 'var(--accent)',
                }} />

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: categoryColors[post.category] ?? 'var(--accent)',
                      background: `${categoryColors[post.category] ?? 'var(--accent)'}18`,
                      padding: '3px 10px',
                      borderRadius: '99px',
                    }}>{post.category}</span>
                    <time dateTime={post.date} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
                      {post.dateLabel}
                    </time>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 700,
                    fontSize: '19px',
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    lineHeight: 1.3,
                    marginBottom: '12px',
                  }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '24px', flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
                      {post.readTime} de lectura
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontFamily: 'var(--font-hanken)',
                        fontWeight: 600,
                        fontSize: '13.5px',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Leer artículo
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent-soft)',
              border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
              borderRadius: '99px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Newsletter en camino</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
              Consejos directo a tu email
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '46ch', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Pronto enviamos tips prácticos de marketing digital para pymes argentinas. Mientras tanto, escribinos por WhatsApp con cualquier consulta.
            </p>
            <WALink className="btn btn-wa btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribinos por WhatsApp
            </WALink>
          </div>
        </div>
      </section>
    </div>
  )
}
