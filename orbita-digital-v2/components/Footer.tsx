import Link from 'next/link'
import { IconBrandInstagram, IconBrandWhatsapp, IconMail, IconMapPin } from '@tabler/icons-react'

const internalLinks = [
  { href: '/servicios#desarrollo-web', label: 'Desarrollo Web para Pymes' },
  { href: '/servicios#automatizacion', label: 'Automatización con WhatsApp' },
  { href: '/servicios#diseno-grafico', label: 'Diseño Gráfico y Branding' },
  { href: '/servicios#edicion-video', label: 'Edición de Video y Reels' },
  { href: '/trabajos', label: 'Portafolio de Proyectos' },
  { href: '/nosotros', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/blog', label: 'Blog' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Órbita Digital',
  telephone: '+5491122355689',
  email: 'hola@orbitadigital.tech',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
    addressLocality: 'Buenos Aires',
  },
  url: 'https://www.orbitadigital.tech',
}

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <OrbitaLogoFull />
            </div>
            <p className="text-[#8892a4] text-sm font-dm leading-relaxed">
              Diseño · Tecnología · Automatización
            </p>
            <p className="text-[#8892a4] text-sm font-dm leading-relaxed max-w-xs">
              Agencia web y automatización para pymes en Argentina. Trabajás directo con el equipo, sin intermediarios.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <h3 className="font-syne font-bold text-white text-sm uppercase tracking-wider mb-6">Servicios</h3>
            <ul className="space-y-3">
              {internalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#8892a4] text-sm font-dm hover:text-[#00b8ff] transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h3 className="font-syne font-bold text-white text-sm uppercase tracking-wider mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5491122355689"
                  className="flex items-center gap-3 text-[#8892a4] text-sm font-dm hover:text-[#00b8ff] transition-colors duration-200 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandWhatsapp size={18} className="text-[#00b8ff] shrink-0" aria-hidden="true" />
                  +54 9 11 2235-5689
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@orbitadigital.tech"
                  className="flex items-center gap-3 text-[#8892a4] text-sm font-dm hover:text-[#00b8ff] transition-colors duration-200 cursor-pointer"
                >
                  <IconMail size={18} className="text-[#00b8ff] shrink-0" aria-hidden="true" />
                  hola@orbitadigital.tech
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#8892a4] text-sm font-dm">
                <IconMapPin size={18} className="text-[#00b8ff] shrink-0" aria-hidden="true" />
                Buenos Aires, Argentina
              </li>
              <li>
                <a
                  href="https://instagram.com/orbitadigital.tech"
                  className="flex items-center gap-3 text-[#8892a4] text-sm font-dm hover:text-[#00b8ff] transition-colors duration-200 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram size={18} className="text-[#00b8ff] shrink-0" aria-hidden="true" />
                  @orbitadigital.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#8892a4] text-xs font-dm text-center sm:text-left">
            © 2025 Órbita Digital · Agencia web y automatización en Argentina · Desarrollado con{' '}
            <span aria-label="amor" className="text-[#0d47ff]">♥</span>
          </p>
          <p className="text-[#8892a4] text-xs font-dm">
            Desarrollado por Órbita Digital
          </p>
        </div>
      </div>
    </footer>
  )
}

function OrbitaLogoFull() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" fill="url(#fg1)" />
        <ellipse cx="14" cy="14" rx="13" ry="6" stroke="url(#fg2)" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="7" r="2" fill="#00b8ff" />
        <defs>
          <linearGradient id="fg1" x1="9" y1="9" x2="19" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d47ff" />
            <stop offset="1" stopColor="#00b8ff" />
          </linearGradient>
          <linearGradient id="fg2" x1="1" y1="14" x2="27" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d47ff" />
            <stop offset="1" stopColor="#00b8ff" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div className="font-syne font-bold text-white text-base leading-none">
          Órbita <span className="text-[#00b8ff]">Digital</span>
        </div>
        <div className="text-[#8892a4] text-xs font-dm mt-0.5">Diseño · Tecnología · Automatización</div>
      </div>
    </div>
  )
}
