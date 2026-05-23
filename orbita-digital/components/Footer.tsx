const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

const WA_TATI = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f17] border-t border-white/5">
      {/* Top gradient separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Órbita Digital - Volver al inicio"
          >
            <img
              src="/logofooter2.png"
              alt="Órbita Digital"
              className="h-14 object-contain"
            />
          </a>

          {/* Tagline */}
          <p className="font-sans text-white/30 text-xs tracking-[0.22em] uppercase">
            Diseño · Tecnología · Automatización
          </p>

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
            aria-label="Navegación del pie de página"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA WhatsApp pequeño */}
          <a
            href={WA_TATI}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-10 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-[#7c3aed]/50 font-sans text-sm font-medium transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.84L.057 23.453a.75.75 0 00.9.9l5.58-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.383-.228-3.975 1.044 1.044-3.84-.25-.4A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Escribinos por WhatsApp
          </a>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          {/* Copyright */}
          <p className="font-sans text-xs text-white/20">
            © 2025 Órbita Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
