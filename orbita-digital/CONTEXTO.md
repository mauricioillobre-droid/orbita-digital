# CONTEXTO — Órbita Digital

> Archivo de contexto para sesiones de Claude Code.
> Leé esto antes de tocar cualquier archivo del proyecto.

---

## Stack técnico

| Tecnología | Versión | Notas |
|---|---|---|
| Next.js | 16.2.6 | App Router. **No es Next.js 14** — tiene breaking changes propios. Leer docs en `node_modules/next/dist/docs/` ante dudas. |
| React | 19.2.4 | — |
| TypeScript | ^5 | — |
| Tailwind CSS | **v4** | Usa `@import "tailwindcss"` y `@theme {}`. **No** usa `tailwind.config.js` ni las directivas `@tailwind base/components/utilities` de v3. |
| Framer Motion | motion ^12.38.0 | Se importa como `"motion/react"`, no `"framer-motion"`. |
| @formspree/react | ^3.0.0 | Formulario de contacto. Endpoint: `xjgzopyl`. |
| @tailwindcss/postcss | ^4 | PostCSS plugin para Tailwind v4. |

---

## Hosting y deploy

- **Plataforma**: Vercel (plan Hobby)
- **Repo**: `https://github.com/mauricioillobre-droid/orbita-digital`
- **Branch de producción**: `main`
- **Dominio**: `orbitadigital.tech` y `www.orbitadigital.tech`
- **Root Directory en Vercel**: `orbita-digital` ← configurado en Vercel Dashboard → Settings → Build and Deployment
- **Estructura del repo**: monorepo. La raíz de `mi-website` contiene `orbita-digital/` y `25demayo-web/`. Vercel solo buildea `orbita-digital/`.

> ⚠️ La carpeta se llama `orbita-digital` (sin espacio, todo minúsculas). Vercel no acepta espacios en rutas de funciones serverless. No renombrar.

---

## Estructura de carpetas

```
orbita-digital/
├── app/
│   ├── favicon.ico
│   ├── globals.css       ← estilos globales, keyframes, clases .reveal
│   ├── layout.tsx        ← metadata SEO, fuente Ubuntu, ScrollProgressBar
│   └── page.tsx          ← composición de todas las secciones
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ValueProp.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Works.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ScrollProgressBar.tsx
├── public/
│   ├── logofondotr.png         ← logo principal (navbar)
│   ├── logofooter2.png         ← logo para footer (fondo oscuro)
│   ├── logoorbitalsinfondo.png ← logo sin fondo (OG image)
│   ├── Mauri.jpeg              ← foto perfil Mauri
│   ├── tati.jpeg               ← foto perfil Tati
│   ├── trabajo-landing.jpg     ← portfolio: Floripa por Mauri
│   ├── trabajo-chatbot.jpg     ← portfolio: Agente conversacional
│   ├── identidad-visual1.jpg   ← portfolio: Identidad Visual
│   ├── identidad-visual2.jpg   ← portfolio: Identidad Visual
│   └── gestion-de-redes.jpg    ← portfolio: Gestión de Redes
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── CONTEXTO.md             ← este archivo
```

---

## Componentes

| Componente | ID de sección | Descripción |
|---|---|---|
| `Navbar.tsx` | — | Sticky, glassmorphism al scroll (`bg-white/85 backdrop-blur-xl`), links actualizados, CTA → WhatsApp Tati |
| `Hero.tsx` | `#inicio` | Headline principal, parallax con `useScroll/useTransform`, blob animado, CTAs, scroll indicator |
| `ValueProp.tsx` | `#valor` | 3 pilares: Trabajo artesanal · Visión de negocio · Equipo directo |
| `Services.tsx` | `#servicios` | 3 cards de servicios con hover glow y radial gradient |
| `Process.tsx` | `#proceso` | 4 pasos en timeline horizontal (desktop) / vertical (mobile) |
| `Works.tsx` | `#trabajos` | Grid 2 columnas, overlay oscuro con nombre/categoría al hover, scale en imagen |
| `About.tsx` | `#equipo` | Cards de Mauri y Tati con fotos, bios completas, link LinkedIn |
| `Contact.tsx` | `#contacto` | Formulario Formspree + botones WhatsApp Tati/Mauri + Email |
| `Footer.tsx` | — | Fondo `#0b0f17` (único dark del sitio), logo, tagline, links, CTA WhatsApp |
| `ScrollProgressBar.tsx` | — | Barra de progreso fija arriba, degradado violeta→azul |

### Orden de secciones en `page.tsx`
```
Navbar → Hero → ValueProp → Services → Process → Works → About → Contact → Footer
```

### Links de navegación (Navbar + Footer)
```
Servicios (#servicios) · Proceso (#proceso) · Trabajos (#trabajos) · Equipo (#equipo) · Contacto (#contacto)
```

---

## Paleta de colores

| Variable / Uso | Color | Hex |
|---|---|---|
| Acento principal | Violeta | `#7c3aed` |
| Acento secundario | Azul | `#0d47ff` |
| Texto principal | Casi negro | `#0b0f17` |
| Fondo base | Blanco | `#ffffff` |
| Fondo secciones alternas | Violeta muy claro | `#faf9ff` |
| Fondo servicios / otras | Gris lavanda | `#f7f5ff` |
| Bordes de cards | Gris claro | `#e8eaf0` |
| Footer (único dark) | Casi negro | `#0b0f17` |
| WhatsApp | Verde oficial | `#25D366` |

> **Regla**: El sitio es **siempre light**. El único elemento oscuro es el Footer. No convertir secciones a dark.

### Opacidades frecuentes
- Texto muted: `text-[#0b0f17]/50` o `/45`
- Bordes hover: `border-[#7c3aed]/30`
- Sombras: `shadow-[#7c3aed]/8` o `shadow-[#0d47ff]/25`

---

## Tipografía

| Fuente | Uso | Pesos | Variable CSS |
|---|---|---|---|
| **Ubuntu** | Todo el sitio (display + sans) | 400, 700 | `--font-ubuntu` |

- Importada desde Google Fonts vía `next/font/google`
- `font-display` y `font-sans` apuntan a la misma fuente (`--font-ubuntu`)
- No hay fuente secundaria — decisión intencional para consistencia visual

---

## Equipo

### Mauri
- **Rol**: Desarrollo & Automatización
- **LinkedIn**: https://www.linkedin.com/in/mauricio-illobre-385744368
- **WhatsApp**: https://wa.me/5548984211589
- **Ubicación**: Florianópolis, Brasil
- **Foto**: `/public/Mauri.jpeg`
- **Especialidad**: Project management, sistemas automatizados, integración de herramientas, flujos de trabajo eficientes

### Tati
- **Rol**: Diseño & Contenido
- **LinkedIn**: https://www.linkedin.com/in/tatiana-daloia
- **WhatsApp**: https://wa.me/5493541232353 ← **CTA principal del sitio**
- **Ubicación**: Villa Carlos Paz, Córdoba, Argentina
- **Foto**: `/public/tati.jpeg`
- **Especialidad**: Diseño gráfico, identidad visual, gestión de redes, marketing digital. Fundadora de TatsDesign.

---

## Contacto del negocio

| Canal | Dato |
|---|---|
| Email | orbitadigital10@gmail.com |
| WhatsApp Tati (CTA principal) | +54 9 3541-232353 |
| WhatsApp Mauri | +55 48 98421-1589 |
| Formspree endpoint | `xjgzopyl` → `https://formspree.io/f/xjgzopyl` |

---

## Decisiones de diseño

### Tema light forzado
El sitio es 100% light mode. El Footer usa fondo oscuro `#0b0f17` como contraste visual al final de la página, pero el resto de secciones son siempre blancas o con fondos muy claros. No implementar dark mode.

### Animaciones con Framer Motion (`motion/react`)
- Todas las animaciones de scroll usan `whileInView` con `viewport={{ once: true }}`
- El Hero usa `useScroll + useTransform` para parallax sutil en el blob y el contenido
- Las cards usan `whileHover` para sombras/bordes (no `whileHover scale` en el contenedor completo para evitar layout shift)
- Siempre respetar `prefers-reduced-motion` — ya implementado en `globals.css`

### Clases de scroll reveal (CSS puro)
En `globals.css` hay clases `.reveal`, `.reveal-left`, `.reveal-right` que se activan con `.is-visible` vía Intersection Observer. Son una alternativa ligera a Framer Motion para elementos simples.

### Hover en portfolio (Works)
Las cards de portfolio tienen dos estados de información:
1. **Sin hover**: imagen visible + título + badge de categoría abajo
2. **Con hover**: overlay oscuro sobre imagen + título en blanco + badge en blanco + escala sutil de imagen

### Glassmorphism en Navbar
Solo se activa al hacer scroll (`scrollY > 24`): `bg-white/85 backdrop-blur-xl border-b border-[#0b0f17]/8`. En el estado inicial es `bg-transparent` para no tapar el hero.

### Footer dark como separador visual
El footer tiene fondo `#0b0f17` de forma intencional — actúa como separador visual claro entre el contenido del sitio y el cierre de página. El logo usado ahí es `logofooter2.png` (versión para fondos oscuros).

### Espacios en nombre de carpeta
La carpeta originalmente se llamaba `Orbita Digital` (con espacio). Vercel no acepta espacios en rutas de funciones serverless (error: "must not contain any space"). Se renombró a `orbita-digital`. No volver a usar espacios en nombres de carpetas/archivos del proyecto.

---

## Comandos útiles

```bash
# Desde la carpeta orbita-digital/
npm run dev      # desarrollo local en http://localhost:3000
npm run build    # build de producción (verificar antes de pushear)
npm run lint     # linter

# Desde mi-website/ (raíz del repo)
git add .
git commit -m "descripción"
git push         # Vercel hace deploy automático de orbita-digital/
```

---

## SEO implementado

- `title`: "Órbita Digital | Diseño, Tecnología y Automatización"
- `description`: optimizada para conversión y búsqueda orgánica
- `keywords`: agencia digital, diseño web, desarrollo web, automatización, landing pages, etc.
- `metadataBase`: `https://orbitadigital.tech`
- OpenGraph completo (tipo website, imagen, locale es_AR)
- Twitter card `summary_large_image`
- `robots`: index + follow

---

## Pendientes / ideas futuras

- [ ] Agregar animaciones `.reveal` con Intersection Observer al scroll (las clases ya están en globals.css, falta conectarlas en cada componente)
- [ ] Considerar agregar testimonios/reseñas de clientes cuando haya material
- [ ] Analytics (Google Analytics o Vercel Analytics)
- [ ] Blog o sección de casos de estudio
- [ ] Optimizar imágenes del portfolio con `next/image` (actualmente usan `<img>` nativo)
