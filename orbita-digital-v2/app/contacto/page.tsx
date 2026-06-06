import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { IconBrandWhatsapp, IconMail, IconClock } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Contacto | Órbita Digital — Hablemos de tu Proyecto',
  description:
    'Contactanos para conocer cómo podemos ayudar a tu negocio. Respondemos en menos de 24 horas.',
}

export default function ContactoPage() {
  return (
    <div className="bg-od-black pt-16">
      {/* Header */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Hablemos de tu proyecto
          </h1>
          <p className="font-dm text-[#8892a4] text-lg leading-relaxed max-w-2xl mx-auto">
            Contanos qué necesitás y te respondemos en menos de 24 horas con una propuesta concreta.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Form — 7 cols */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Info sidebar — 5 cols */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-8">
              <h2 className="font-syne font-bold text-white text-xl mb-6">Otras formas de contactarnos</h2>
              <ul className="space-y-6">
                <li>
                  <a
                    href="https://wa.me/5491122355689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                      <IconBrandWhatsapp size={20} className="text-[#25D366]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-dm font-medium text-white text-sm group-hover:text-[#00b8ff] transition-colors">
                        WhatsApp directo
                      </div>
                      <div className="font-dm text-[#8892a4] text-sm mt-0.5">+54 9 11 2235-5689</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@orbitadigital.tech"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0d47ff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0d47ff]/20 transition-colors">
                      <IconMail size={20} className="text-[#0d47ff]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-dm font-medium text-white text-sm group-hover:text-[#00b8ff] transition-colors">
                        Email
                      </div>
                      <div className="font-dm text-[#8892a4] text-sm mt-0.5">hola@orbitadigital.tech</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00b8ff]/10 flex items-center justify-center shrink-0">
                      <IconClock size={20} className="text-[#00b8ff]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-dm font-medium text-white text-sm">Tiempo de respuesta</div>
                      <div className="font-dm text-[#8892a4] text-sm mt-0.5">Menos de 24 horas hábiles</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#111827] border border-white/5 rounded-2xl p-8">
              <h3 className="font-syne font-bold text-white text-lg mb-3">¿No sabés por dónde empezar?</h3>
              <p className="font-dm text-[#8892a4] text-sm leading-relaxed">
                Seleccioná &ldquo;No sé, quiero asesoramiento&rdquo; en el formulario y nos encargamos de guiarte. Una conversación sin costo, sin compromiso.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
