const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

function OrbitaLogo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5"
      aria-label="Órbita Digital - Volver al inicio"
    >
      <img
  src="/logofooter2.png"
  alt="Órbita Digital"
  className="h-18 object-contain"
/>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-7">
          <OrbitaLogo />

          <p className="font-sans text-white/25 text-xs tracking-[0.2em] uppercase">
            Diseño · Tecnología · Automatización
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-6"
            aria-label="Navegación del pie de página"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white/35 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <p className="font-sans text-xs text-white/20">
            © 2025 Órbita Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
