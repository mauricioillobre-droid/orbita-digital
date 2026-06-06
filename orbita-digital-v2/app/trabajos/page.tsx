import type { Metadata } from 'next'
import Image from 'next/image'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Éxito | Órbita Digital',
  description:
    'Portafolio de proyectos de desarrollo web, automatización y diseño para pymes argentinas.',
}

export default function TrabajosPage() {
  return (
    <div className="bg-od-black pt-16">
      {/* Header */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Proyectos que hablan solos
          </h1>
          <p className="font-dm text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto">
            Cada proyecto tiene una historia. Acá mostramos algunos de los trabajos que más nos enorgullecen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Proyecto destacado: 25 de Mayo */}
        <article className="mb-16 bg-[#111827] border border-white/5 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto w-full min-h-[280px] bg-[#0d47ff]/10">
              <Image
                src="/images/trabajos/25-de-mayo.jpg"
                alt="Sistema de turnos online para consultorio médico en Argentina desarrollado por Órbita Digital"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-5">
                {['Desarrollo Web', 'Automatización', 'WhatsApp'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-dm text-[#00b8ff] bg-[#00b8ff]/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-4">
                25 de Mayo Consultorios Médicos
              </h2>
              <p className="font-dm text-[#8892a4] leading-relaxed mb-6">
                Sistema de turnos online con confirmación automática por WhatsApp para consultorio médico en Buenos Aires. Los pacientes sacan turno desde cualquier dispositivo y reciben confirmación instantánea.
              </p>
              <p className="font-dm text-[#8892a4] leading-relaxed mb-8">
                Desarrollamos el sitio web completo, integramos el sistema de reservas online y automatizamos los recordatorios de turno con n8n y la API de WhatsApp. El resultado: reducción del 80% en cancelaciones y cero carga administrativa para el staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5491122355689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer text-sm"
                >
                  <IconBrandWhatsapp size={16} aria-hidden="true" />
                  Quiero algo similar
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Proyecto 2: Órbita Digital */}
        <article className="mb-16 bg-[#111827] border border-white/5 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto w-full min-h-[280px] bg-[#00b8ff]/10">
              <Image
                src="/images/trabajos/orbita.jpg"
                alt="Diseño web y branding para agencia digital argentina"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-5">
                {['Diseño', 'Desarrollo'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-dm text-[#00b8ff] bg-[#00b8ff]/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-4">
                Órbita Digital
              </h2>
              <p className="font-dm text-[#8892a4] leading-relaxed mb-6">
                Diseño web y branding completo para nuestra propia agencia digital argentina. Identidad visual diferenciada, sitio de alta performance y sistema de automatización de leads integrado.
              </p>
              <p className="font-dm text-[#8892a4] leading-relaxed">
                Un caso que hacemos con mucho orgullo: diseñamos y desarrollamos nuestra propia presencia digital con los mismos estándares que aplicamos a cada cliente.
              </p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="text-center py-12 border-t border-white/5">
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-4">
            ¿Tu proyecto podría ser el próximo?
          </h2>
          <p className="font-dm text-[#8892a4] mb-8 max-w-xl mx-auto">
            Hablemos sobre tu idea. Sin compromiso, sin costo.
          </p>
          <a
            href="https://wa.me/5491122355689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
