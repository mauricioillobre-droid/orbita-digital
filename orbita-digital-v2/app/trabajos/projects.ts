export type Project = {
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  tags: string[]
  video: string
  poster: string
  alt: string
  // motion: video corto en loop, sin sonido, que arranca solo
  motion?: boolean
  extraVideo?: { label: string; src: string; poster: string; motion?: boolean }
}

export const projects: Project[] = [
  {
    slug: 'en-cada-rincon',
    title: 'En Cada Rincón — Tienda Online',
    shortDesc: 'Tienda online completa desarrollada para En Cada Rincón (importadores de productos regionales), con panel de administración a medida y dos canales de venta diferenciados: minorista y mayorista.',
    longDesc: 'Catálogo con variantes (color, talle, stock por variante), checkout con Mercado Pago vía OAuth o transferencia bancaria, y un circuito mayorista independiente con aprobación manual, precios diferenciados y descuentos por volumen. El panel de administración cubre productos, pedidos, solicitudes mayoristas y un dashboard de métricas de ventas. Construida sobre Next.js 16, Cloudflare Workers + D1 (base de datos edge) y Drizzle ORM: infraestructura rápida en toda Latinoamérica, pagos sin fricción para el dueño del negocio y control total sin depender de terceros.',
    tags: ['E-commerce', 'Next.js', 'Mercado Pago', 'Cloudflare'],
    video: '/videos/en-cada-rincon/sitio.mp4',
    poster: '/videos/en-cada-rincon/sitio-poster.jpg',
    alt: 'Tienda online En Cada Rincón desarrollada por Órbita Digital: textiles del norte argentino, catálogo y pagos',
    motion: true,
    extraVideo: {
      label: 'Panel de administración',
      src: '/videos/en-cada-rincon/panel.mp4',
      poster: '/videos/en-cada-rincon/panel-poster.jpg',
      motion: true,
    },
  },
  {
    slug: '25-de-mayo',
    title: 'Sistema de Turnos — 25 de Mayo Consultorios Médicos',
    shortDesc: 'Plataforma integral para un centro médico con más de 49 profesionales activos, que digitaliza la reserva de turnos y centraliza la operación diaria del consultorio.',
    longDesc: 'El sitio institucional presenta especialidades y prácticas, con un buscador de turnos en un flujo guiado de cinco pasos: el calendario se ajusta en tiempo real según la disponibilidad real de cada profesional, contemplando frecuencias variables y bloqueos puntuales de agenda. El panel de administración suma dashboard de métricas, agenda diaria, carga manual de turnos e historial con filtros por estado, origen, especialidad y rango de fechas, distinguiendo turnos reservados desde la web, cargados por el personal o —en una fase posterior— gestionados por un agente conversacional. Un flujo de WhatsApp confirma automáticamente cada turno al paciente, con normalización de números y logs de envío para trazabilidad completa. Construido con Next.js (App Router), TypeScript, Tailwind CSS y Framer Motion sobre Supabase (PostgreSQL + Auth), automatizaciones en n8n y despliegue continuo en Vercel.',
    tags: ['Next.js', 'Supabase', 'WhatsApp', 'n8n'],
    video: '/videos/25-de-mayo/sitio.mp4',
    poster: '/videos/25-de-mayo/sitio-poster.jpg',
    alt: 'Sitio con turnos online para 25 de Mayo Consultorios Médicos desarrollado por Órbita Digital',
    motion: true,
    extraVideo: {
      label: 'Panel de administración',
      src: '/videos/25-de-mayo/panel.mp4',
      poster: '/videos/25-de-mayo/panel-poster.jpg',
      motion: true,
    },
  },
  {
    slug: 'casa-de-praia',
    title: 'Pousada Casa de Praia — Sitio web y sistema de gestión',
    shortDesc: 'Sitio web y aplicación de gestión para una posada de cinco habitaciones frente al mar, en Playa de Ingleses, Florianópolis.',
    longDesc: 'El sitio presenta cada habitación con su galería, una guía de la zona y reservas directas por WhatsApp, con una estética cálida pensada para el huésped que busca playa y tranquilidad. Detrás, una aplicación web a medida reemplazó la planilla de Excel del administrador: un calendario de ocupación por habitación que reúne las reservas de Airbnb, Booking y venta directa, con aviso de doble reserva; tarifas por temporada con el precio a publicar en cada canal calculado automáticamente; y un cotizador que arma el mensaje para el huésped en español o portugués. Se usa desde el celular, con acceso por PIN. Construido con React, Vite y Tailwind CSS para el sitio, y Cloudflare Workers con base de datos D1 para la aplicación.',
    tags: ['Sitio web', 'App a medida', 'Cloudflare', 'WhatsApp'],
    video: '/videos/casa-de-praia/sitio.mp4',
    poster: '/videos/casa-de-praia/sitio-poster.jpg',
    alt: 'Sitio web de Pousada Casa de Praia en Florianópolis desarrollado por Órbita Digital',
    motion: true,
    extraVideo: {
      label: 'Sistema de gestión',
      src: '/videos/casa-de-praia/app.mp4',
      poster: '/videos/casa-de-praia/app-poster.jpg',
      motion: true,
    },
  },
  {
    slug: 'loja-rentavel',
    title: 'Loja Rentável — Sistema de gestión para tiendas',
    shortDesc: 'Sistema de gestión para comercios minoristas, en uso diario en una tienda física en Brasil: punto de venta, stock, caja diaria, gastos, vendedores y calculadora de precios.',
    longDesc: 'Cada venta descuenta stock en el momento y admite pagos divididos entre Pix, tarjeta y efectivo. La caja diaria en efectivo se lleva separada de los medios digitales, con apertura, cierre e impresión del cierre. Suma cuentas a pagar, metas, ranking de vendedores, estado de resultados y una calculadora que sugiere el precio de venta según costo, impuestos y comisiones, con margen real y punto de equilibrio. Es multiempresa: cada comercio accede solo a sus datos, y el alta se activa automáticamente con la compra del producto. Construido con Next.js, Supabase y Cloudflare.',
    tags: ['SaaS', 'Next.js', 'Supabase', 'Punto de venta'],
    video: '/videos/loja-rentavel/demo.mp4',
    poster: '/videos/loja-rentavel/demo-poster.jpg',
    alt: 'Sistema de gestión para tiendas Loja Rentável desarrollado por Órbita Digital: punto de venta, caja y ranking de vendedores',
    motion: true,
  },
  {
    slug: 'tats-design',
    title: 'Tats Design — Gestión financiera',
    shortDesc: 'Panel financiero a medida para una diseñadora freelance, que reemplazó su libro diario en Excel.',
    longDesc: 'Reúne en una sola pantalla lo cobrado, lo pendiente, los gastos del mes y lo disponible para gastar, con cobros parciales por cliente y gastos fijos con su vencimiento. Cada tres meses sugiere el ajuste de tarifas según la inflación oficial, con el porcentaje editable por proyecto y nunca aplicado sin confirmación. Se usa desde el celular y la computadora, con acceso restringido por correo y contraseña. Construido con Next.js, Supabase y Vercel.',
    tags: ['App a medida', 'Next.js', 'Supabase'],
    video: '/videos/tats-design/demo.mp4',
    poster: '/videos/tats-design/demo-poster.jpg',
    alt: 'Panel de gestión financiera para Tats Design desarrollado por Órbita Digital',
    motion: true,
  },
]
