import type { Metadata } from 'next'
import { IconBrowser, IconRobot, IconPalette, IconVideo, IconBrandWhatsapp, IconCheck } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Servicios de Diseño Web, Automatización y Branding | Órbita Digital',
  description:
    'Desarrollo web para pymes, automatización con WhatsApp e IA, diseño gráfico y edición de video profesional en Buenos Aires, Argentina.',
}

const services = [
  {
    id: 'desarrollo-web',
    icon: IconBrowser,
    title: 'Desarrollo Web Profesional para Pymes',
    content: `Si tu negocio no tiene presencia digital o tiene un sitio que no convierte, estás perdiendo clientes todos los días. En Órbita Digital desarrollamos sitios web profesionales pensados desde cero para generar resultados reales.

No hacemos templates genéricos. Cada proyecto arranca con una conversación sobre tu negocio, tu cliente ideal y tus objetivos. A partir de ahí, diseñamos una experiencia web que guía al visitante hacia la acción que necesitás: una consulta, una reserva, una compra.

Trabajamos con las tecnologías más modernas para garantizar velocidad, seguridad y visibilidad en Google. Nuestros sitios están optimizados para SEO desde el primer día, cargan rápido en mobile y están preparados para crecer con tu negocio.`,
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
    icon: IconRobot,
    title: 'Automatización con WhatsApp e Inteligencia Artificial',
    content: `¿Cuántas horas por semana pasás respondiendo los mismos mensajes, confirmando turnos o haciendo seguimiento manual de clientes? Ese tiempo tiene un costo real para tu negocio.

En Órbita Digital automatizamos los procesos repetitivos que frenan tu crecimiento. Desde respuestas automáticas por WhatsApp hasta flujos completos de ventas con inteligencia artificial: diseñamos sistemas que trabajan por vos las 24 horas, los 7 días de la semana.

Usamos herramientas como n8n, Make y la API oficial de WhatsApp Business para crear automatizaciones robustas y escalables. El resultado: menos tiempo en tareas operativas, más tiempo para lo que importa.`,
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
    icon: IconPalette,
    title: 'Diseño Gráfico y Branding Empresarial',
    content: `La identidad visual de tu negocio es la primera impresión que tienen tus clientes. Una marca sólida genera confianza, diferencia tu negocio de la competencia y hace que te recuerden.

Tati, nuestra diseñadora, trabaja con un enfoque estratégico: no diseña para que se vea lindo, diseña para que funcione. Cada elemento visual está pensado para comunicar los valores de tu marca y conectar con tu audiencia ideal.

Desde el logotipo hasta el manual de marca completo, creamos identidades visuales coherentes y aplicables en todos los puntos de contacto: web, redes sociales, packaging, señalética y más.`,
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
    icon: IconVideo,
    title: 'Edición de Video y Reels Profesionales',
    content: `El video es el formato que más engagement genera en todas las redes sociales. Pero producir contenido de calidad que realmente funcione requiere más que grabar con el celular: necesita estrategia, edición profesional y conocimiento del algoritmo.

En Órbita Digital producimos reels y videos para Instagram, TikTok y YouTube Shorts que combinan impacto visual con un mensaje claro y orientado a tu audiencia. Trabajamos con material tuyo o te ayudamos desde el guión hasta la publicación.

Nuestro contenido audiovisual está diseñado para detener el scroll, generar interacción y convertir espectadores en clientes.`,
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
    <div className="bg-od-black pt-16">
      {/* Header */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Lo que podemos hacer por tu negocio
          </h1>
          <p className="font-dm text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto">
            Diseño, tecnología y automatización en un solo equipo. Sin intermediarios, sin cuentas, con resultados reales.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-white" aria-hidden="true" />
                </div>
                <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">{s.title}</h2>
              </div>

              <div className="space-y-4 mb-10">
                {s.content.split('\n\n').map((p, j) => (
                  <p key={j} className="font-dm text-[#8892a4] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="bg-[#111827] rounded-2xl p-8 mb-8">
                <h3 className="font-syne font-bold text-white text-lg mb-6">¿Qué incluye?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 font-dm text-[#8892a4] text-sm">
                      <IconCheck size={16} className="text-[#00b8ff] shrink-0 mt-0.5" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/5491122355689"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                <IconBrandWhatsapp size={18} aria-hidden="true" />
                Consultá por {s.title.split(' ')[0]} {s.title.split(' ')[1]}
              </a>

              {i < services.length - 1 && (
                <div className="mt-20 border-t border-white/5" />
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
