import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = [
  {
    slug: 'por-que-tu-pyme-necesita-sitio-web',
    category: 'Desarrollo Web',
    date: '2025-05-10',
    dateLabel: '10 may 2025',
    title: '¿Por qué tu pyme necesita un sitio web en 2025?',
    excerpt: 'El 76% de los consumidores busca en Google antes de comprar. Si no aparecés, tu competencia se lleva ese cliente. Te explicamos por qué tener presencia digital ya no es opcional.',
    readTime: '4 min',
    content: `
## El cliente busca en Google antes de llamarte

El 76% de los consumidores investiga online antes de tomar una decisión de compra. Eso incluye buscar reseñas, comparar precios y encontrar el local más cercano. Si tu negocio no aparece en esa búsqueda, directamente no existís para ese cliente.

No se trata de tener una web bonita. Se trata de estar presente en el momento exacto en que alguien te está buscando.

## Tu negocio abierto las 24 horas

Un sitio web trabaja mientras vos dormís. Un cliente puede encontrarte a las 11 de la noche, leer tus servicios, ver tus precios y dejarte un mensaje. A la mañana siguiente tenés un lead esperándote.

Sin web, ese cliente llama al que sí tiene una.

## Credibilidad instantánea

Cuando alguien te recomienda, lo primero que hace el recomendado es buscarte en Google. Si no encontrás nada, genera desconfianza. Un sitio profesional — aunque sea simple — transmite seriedad y da el primer "sí" antes de que hagas cualquier esfuerzo de venta.

## El costo de no tenerla

Calculalo así: si perdés 3 clientes por mes porque no te encontraron, y cada cliente vale $50.000, son $150.000 mensuales que se van a la competencia. Una web profesional se paga sola en el primer mes.

## ¿Por dónde empezar?

No necesitás nada complejo. Un sitio de 4-5 páginas bien diseñado, con tu información clara, tus servicios explicados y una forma de contacto fácil ya marca la diferencia.

En Órbita Digital desarrollamos sitios para pymes argentinas en 2-3 semanas, optimizados para aparecer en Google desde el primer día.
    `,
  },
  {
    slug: 'automatizacion-whatsapp-para-negocios',
    category: 'Automatización',
    date: '2025-04-22',
    dateLabel: '22 abr 2025',
    title: 'Cómo automatizar WhatsApp para tu negocio sin perder el toque humano',
    excerpt: 'Los chatbots tienen mala fama, pero bien implementados te liberan horas de trabajo rutinario y mejoran la experiencia de tus clientes. Te mostramos cómo hacerlo bien.',
    readTime: '6 min',
    content: `
## El problema con los chatbots tradicionales

Cuando pensás en chatbots, probablemente pensás en respuestas genéricas que frustran al cliente. "Escribí 1 para consultas, 2 para reclamos..." — nadie quiere eso.

El problema no es la automatización en sí. El problema es automatizar sin pensar en la experiencia del usuario.

## Qué sí automatizar

Hay tareas que no requieren intervención humana y que te consumen tiempo valioso:

- **Respuesta instantánea fuera de horario**: "Hola, recibimos tu mensaje. Estamos disponibles de lunes a viernes de 9 a 18hs. Te respondemos a la brevedad."
- **Confirmación de turnos**: Recordatorio automático 24 horas antes con opción de confirmar o cancelar.
- **Preguntas frecuentes**: Precio, ubicación, horario, formas de pago.
- **Calificación de leads**: Antes de que llegue a vos, el sistema ya sabe qué necesita y cuándo puede atenderse.

## Qué no automatizar

La empatía no se automatiza. Reclamos, situaciones delicadas, negociaciones de precio — esas conversaciones las tiene que manejar una persona. La automatización debe derivar estos casos a vos de manera rápida y con contexto.

## El flujo ideal

1. Cliente escribe → respuesta inmediata automática
2. Si es una consulta simple → responde el bot
3. Si necesita atención humana → te notifica con el contexto de la conversación
4. Vos entrás en la conversación sin repetir preguntas

## Herramientas que usamos

En Órbita Digital integramos la API oficial de WhatsApp Business con n8n para crear estos flujos. Sin aplicaciones de terceros cuestionables, sin riesgo de que te baneen la cuenta.

El resultado: nuestros clientes reducen hasta un 70% el tiempo dedicado a responder mensajes repetitivos.
    `,
  },
  {
    slug: 'seo-local-para-pymes-argentinas',
    category: 'SEO',
    date: '2025-04-08',
    dateLabel: '8 abr 2025',
    title: 'SEO local: cómo aparecer primero en Google en tu ciudad',
    excerpt: 'Posicionarte en búsquedas como "plomero en Palermo" o "dentista en Córdoba" es más accesible de lo que pensás. Estrategias concretas para pymes argentinas.',
    readTime: '5 min',
    content: `
## Qué es el SEO local y por qué importa

Cuando alguien escribe "panadería en Flores" o "abogado laboral Rosario" en Google, los resultados que aparecen primero no son los más grandes ni los que más gastan en publicidad. Son los que tienen mejor SEO local.

SEO local es el conjunto de acciones que hacen que tu negocio aparezca en esas búsquedas geolocalizadas. Y es uno de los canales de adquisición más rentables para una pyme.

## Google Business Profile: el primer paso

Si no tenés tu perfil de Google Business configurado y optimizado, estás perdiendo el 80% del trabajo de SEO local.

Esto incluye:
- Nombre, dirección y teléfono exactos y consistentes
- Categoría principal correcta
- Fotos actualizadas del local y los servicios
- Horarios correctos (incluyendo feriados)
- Responder a todas las reseñas

## Palabras clave locales en tu web

Tu web tiene que mencionar explícitamente dónde operás. "Servicio de diseño gráfico en Villa Carlos Paz" aparece en búsquedas locales. "Servicio de diseño gráfico" compite con todo el mundo.

Incluí tu ciudad y barrio en:
- El título de la página principal
- La meta descripción
- Los headings principales
- El pie de página

## Reseñas: el factor que más pesa

Google muestra primero los negocios con más reseñas positivas y recientes. No es opcional pedirlas. Después de cada trabajo bien hecho, pedile al cliente que deje una reseña en Google. Un sistema simple: mandales el link directo por WhatsApp.

## Consistencia en directorios

Tu nombre, dirección y teléfono tienen que ser idénticos en Google, Facebook, Instagram, Páginas Amarillas y cualquier otro directorio donde estés. Las inconsistencias le dicen a Google que no sos confiable.

Con estas acciones básicas bien ejecutadas, la mayoría de las pymes puede aparecer en el top 3 de su ciudad en 3-6 meses.
    `,
  },
  {
    slug: 'reels-para-instagram-que-funcionan',
    category: 'Redes Sociales',
    date: '2025-03-19',
    dateLabel: '19 mar 2025',
    title: 'Reels para negocios: lo que el algoritmo de Instagram realmente quiere',
    excerpt: 'No se trata de bailar ni de tendencias vacías. Te explicamos cómo crear reels que generan clientes reales para tu pyme, con ejemplos concretos y un proceso repetible.',
    readTime: '7 min',
    content: `
## El error más común de los negocios en Instagram

Muchas pymes intentan imitar a los creadores de contenido: bailes, trends, audios virales. El resultado es contenido que no representa a la marca, que incomoda al dueño y que no convierte en clientes.

Instagram no requiere que seas influencer. Requiere que seas relevante para tu audiencia objetivo.

## Qué mide el algoritmo

El algoritmo de Instagram prioriza reels según estas métricas, en orden de importancia:

1. **Tiempo de visualización completa**: ¿La gente ve el reel hasta el final?
2. **Guardados y compartidos**: La métrica más valiosa — indica que el contenido es útil
3. **Comentarios**: Especialmente preguntas y respuestas
4. **Likes**: El indicador menos importante

## Formatos que funcionan para negocios

**Antes / después**: Transformaciones visuales. Funciona para cualquier negocio que genere un resultado visible.

**El proceso**: Mostrá cómo hacés lo que hacés. La gente confía más en lo que ve hacer que en lo que les decís que hacés.

**El tip práctico**: "3 cosas que nadie te dice sobre [tu industria]". Genera guardados y posicioná como experto.

**El caso real**: Contá una historia de cliente (con permiso). Problema → solución → resultado con números concretos.

## El hook: los primeros 3 segundos son todo

Si no capturás la atención en los primeros 3 segundos, el reel no existe. Empezá siempre con:
- Una pregunta que le hable directo a tu cliente ideal
- Un dato sorprendente
- El resultado final (spoiler del antes/después)

Nunca empieces con "Hola soy [nombre] y hoy les voy a contar..."

## Frecuencia y consistencia

Un reel por semana, bien pensado y ejecutado, supera a 5 reels improvisados. La consistencia construye audiencia; la calidad construye confianza.
    `,
  },
  {
    slug: 'inteligencia-artificial-para-pymes',
    category: 'Automatización',
    date: '2025-03-05',
    dateLabel: '5 mar 2025',
    title: 'IA para pymes: 5 formas de usarla hoy sin ser técnico',
    excerpt: 'La inteligencia artificial no es solo para grandes empresas. Estas herramientas ya están disponibles, son accesibles en precio y pueden transformar la operación de tu negocio.',
    readTime: '5 min',
    content: `
## La IA ya está en tu negocio, aunque no lo sepas

Si usás Google Maps, Netflix o el corrector automático del teléfono, ya interactuás con inteligencia artificial todos los días. La pregunta no es si vas a usarla en tu negocio — la pregunta es si la vas a usar estratégicamente o vas a dejar que la competencia lo haga primero.

## 1. Atención al cliente 24/7

Herramientas como ChatGPT entrenado con la información de tu negocio puede responder consultas frecuentes, cotizar servicios básicos y agendar turnos sin intervención humana. El cliente recibe respuesta inmediata; vos ahorrás horas de trabajo.

## 2. Generación de contenido para redes

No para reemplazar tu voz, sino para acelerar el proceso. Describís el tema, la plataforma y el tono, y la IA genera un borrador que vos ajustás en 10 minutos. Lo que antes llevaba una hora lleva 15 minutos.

## 3. Análisis de reseñas y feedback

Si tenés muchas reseñas o comentarios de clientes, la IA puede procesarlos y decirte cuáles son los patrones: qué elogian más, qué critican más, qué palabras usan para describir tu servicio. Información de oro para mejorar y para marketing.

## 4. Automatización de emails y seguimiento

Integraciones simples permiten que cuando alguien completa un formulario, la IA redacte un email de seguimiento personalizado basado en lo que escribió. Sin plantillas genéricas.

## 5. Transcripción y resumen de reuniones

Herramientas como Otter.ai o Fireflies graban y transcriben reuniones automáticamente, generan un resumen con los puntos principales y los próximos pasos. Nunca más perdés lo que se acordó.

## Por dónde empezar

Elegí UN problema concreto de tu operación diaria que te consuma tiempo repetitivo. Eso es lo primero que automatizás. Los resultados rápidos dan confianza para seguir.
    `,
  },
  {
    slug: 'velocidad-web-y-seo',
    category: 'Desarrollo Web',
    date: '2025-02-18',
    dateLabel: '18 feb 2025',
    title: 'Por qué la velocidad de tu web afecta directamente tus ventas',
    excerpt: 'Cada segundo extra de carga cuesta clientes. Google lo sabe. Te mostramos qué métricas importan, cómo medirlas y qué hacer para que tu sitio vuele.',
    readTime: '4 min',
    content: `
## El número que te va a impactar

El 53% de los usuarios abandona un sitio móvil si tarda más de 3 segundos en cargar. Y el promedio de los sitios de pymes en Argentina tarda entre 6 y 12 segundos.

Eso significa que más de la mitad de tu tráfico móvil se va antes de ver una sola línea de texto.

## Velocidad y posicionamiento en Google

Google usa la velocidad como factor de ranking. Desde 2021, las Core Web Vitals — métricas de experiencia de usuario que incluyen velocidad de carga, estabilidad visual e interactividad — forman parte del algoritmo de posicionamiento.

Dos sitios con el mismo contenido y la misma autoridad: el más rápido aparece más arriba.

## Las métricas que importan

**LCP (Largest Contentful Paint)**: Tiempo en que aparece el elemento principal de la página. Objetivo: menos de 2.5 segundos.

**FID / INP (Interaction to Next Paint)**: Tiempo de respuesta al primer clic o toque. Objetivo: menos de 200ms.

**CLS (Cumulative Layout Shift)**: Cuánto "salta" el contenido mientras carga. Objetivo: menos de 0.1.

Podés medirlos gratis en [PageSpeed Insights](https://pagespeed.web.dev/).

## Las causas más comunes de sitios lentos

- **Imágenes sin optimizar**: Una foto de 4MB donde debería haber una de 80KB es el problema más frecuente.
- **Hosting económico compartido**: Si el servidor tarda 1 segundo en responder, todo lo demás suma sobre ese segundo.
- **Plugins y scripts innecesarios**: Cada plugin de WordPress agrega peso. Menos es más.
- **Sin caché**: Cada visita regenera la página desde cero en lugar de servir una versión guardada.

## La solución

Un sitio desarrollado correctamente — imágenes en formato WebP, código limpio, CDN, hosting de calidad — carga en menos de 1.5 segundos. Eso se traduce en menos rebote, más tiempo en el sitio y mejor posicionamiento en Google.
    `,
  },
]

const categoryColors: Record<string, string> = {
  'Desarrollo Web': '#1f6fd0',
  'Automatización': '#7c3aed',
  'SEO': '#059669',
  'Redes Sociales': '#db2777',
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const color = categoryColors[post.category] ?? 'var(--accent)'

  // Render markdown-like content
  const renderContent = (content: string) => {
    return content.trim().split('\n').map((line, i) => {
      const trimmed = line.trim()
      if (!trimmed) return null
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={i} style={{
            fontFamily: 'var(--font-hanken)',
            fontWeight: 700,
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginTop: '40px',
            marginBottom: '14px',
            lineHeight: 1.2,
          }}>
            {trimmed.slice(3)}
          </h2>
        )
      }
      if (trimmed.startsWith('- **')) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/)
        if (match) {
          return (
            <li key={i} style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '10px', marginLeft: '20px' }}>
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{match[1]}</strong>
              {match[2] ? `: ${match[2]}` : ''}
            </li>
          )
        }
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={i} style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '8px', marginLeft: '20px' }}>
            {trimmed.slice(2)}
          </li>
        )
      }
      if (/^\d+\./.test(trimmed)) {
        return (
          <li key={i} style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '8px', marginLeft: '20px' }}>
            {trimmed.replace(/^\d+\.\s*/, '')}
          </li>
        )
      }
      return (
        <p key={i} style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '18px' }}>
          {trimmed}
        </p>
      )
    }).filter(Boolean)
  }

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <section style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: '48px' }}>
        <div className="container-od" style={{ maxWidth: '760px' }}>

          {/* Back */}
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--ink-3)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            marginBottom: '32px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver al blog
          </Link>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: color,
              background: `${color}18`,
              padding: '3px 12px',
              borderRadius: '99px',
            }}>{post.category}</span>
            <time dateTime={post.date} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
              {post.dateLabel}
            </time>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
              · {post.readTime} de lectura
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--ink)',
            marginBottom: '20px',
          }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.65, borderLeft: `3px solid ${color}`, paddingLeft: '18px' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: 'var(--surface)', paddingBlock: 'clamp(40px, 6vw, 80px)' }}>
        <div className="container-od" style={{ maxWidth: '760px' }}>
          <div style={{ borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 5vw, 56px)', background: 'var(--surface)' }}>
            {renderContent(post.content)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-od" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '14px' }}>
            ¿Querés aplicar esto en tu negocio?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ink-2)', maxWidth: '44ch', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Hablemos por WhatsApp y te contamos cómo podemos ayudarte.
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
      </section>

    </div>
  )
}
