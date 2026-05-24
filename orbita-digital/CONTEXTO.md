# CONTEXTO — Órbita Digital

> Archivo de contexto para sesiones de Claude Code.
> Leé esto antes de tocar cualquier archivo del proyecto.

---

## Stack técnico

| Tecnología | Versión | Notas |
|---|---|---|
| Next.js | 15+ | App Router, multi-page. **No es Next.js 14**. |
| React | 19.2.4 | — |
| TypeScript | ^5 | — |
| Tailwind CSS | **v4** | Usa `@import "tailwindcss"` y `@theme {}`. **No** usa `tailwind.config.js` ni `@tailwind base/components/utilities` de v3. |
| Framer Motion | motion ^12.38.0 | Se importa como `"motion/react"`. **Solo** para Hero (parallax, blobs pulsantes) e IntroScreen. |
| **GSAP + ScrollTrigger** | ^3 | Animaciones principales de scroll. Se importa desde `@/lib/gsap-utils`. Instalado en sesión 2025-05-24. |
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
│   ├── globals.css         ← estilos globales, keyframes
│   ├── layout.tsx          ← metadata SEO, fuente Ubuntu, ScrollProgressBar, WhatsAppFloat
│   ├── page.tsx            ← home: Hero + StatsStrip + previews + HomeCTA
│   ├── servicios/
│   │   └── page.tsx        ← hero + Services + Process + CTA final
│   ├── trabajos/
│   │   └── page.tsx        ← hero + Works + CTA final
│   ├── nosotros/
│   │   └── page.tsx        ← hero + About + Valores + CTA
│   └── contacto/
│       └── page.tsx        ← solo <Contact /> (el componente ya incluye su header)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx                    ← intacto, usa Framer Motion + parallax
│   ├── IntroScreen.tsx             ← intacto, NO tocar
│   ├── StatsStrip.tsx              ← NUEVO: strip +20/2/<24h con contador GSAP
│   ├── AnimatedPageHero.tsx        ← NUEVO: eyebrow + h1 con word-reveal para páginas interiores
│   ├── ValueProp.tsx               ← GSAP: section fade + eyebrow + title words + cards stagger
│   ├── Services.tsx                ← GSAP: ídem + copy actualizado
│   ├── Process.tsx                 ← GSAP: ídem + copy actualizado
│   ├── Works.tsx                   ← GSAP: section fade + cards stagger + descripciones en cards
│   ├── About.tsx                   ← GSAP: section fade + cards stagger; header duplicado eliminado
│   ├── Contact.tsx                 ← GSAP: section fade + eyebrow + title words; header único; bullets
│   ├── Footer.tsx
│   ├── ScrollProgressBar.tsx
│   ├── WhatsAppFloat.tsx
│   └── home/
│       ├── ServicesPreview.tsx     ← GSAP: todas las animaciones
│       ├── WorksPreview.tsx        ← GSAP: todas las animaciones
│       ├── TeamPreview.tsx         ← GSAP: todas las animaciones
│       └── HomeCTA.tsx             ← GSAP: section fade + eyebrow + title words
├── lib/
│   └── gsap-utils.ts               ← NUEVO: utilidades GSAP compartidas (splitWords, prefersReduced, etc.)
├── public/
│   ├── logofondotr.png
│   ├── logofooter2.png
│   ├── logoorbitalsinfondo.png
│   ├── Mauri.jpeg
│   ├── tati.jpeg
│   ├── trabajo-landing.jpg
│   ├── trabajo-chatbot.jpg
│   ├── identidad-visual1.jpg
│   ├── identidad-visual2.jpg
│   └── gestion-de-redes.jpg
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── CONTEXTO.md
```

---

## Rutas del sitio

| Ruta | Componentes |
|---|---|
| `/` | Hero → StatsStrip → ServicesPreview → WorksPreview → TeamPreview → HomeCTA |
| `/servicios` | [hero] → Services → Process → [CTA final doble] |
| `/trabajos` | [hero] → Works → [CTA final] |
| `/nosotros` | [hero] → About → [sección Valores] → [CTA] |
| `/contacto` | Contact (incluye header propio) |

> Los heros de las páginas interiores usan `AnimatedPageHero` (client component) dentro de pages que siguen siendo Server Components con `export const metadata`.

---

## Componentes — descripción actualizada

| Componente | ID | Descripción |
|---|---|---|
| `Navbar.tsx` | — | Sticky, glassmorphism al scroll, links a rutas separadas, CTA → WhatsApp Tati |
| `Hero.tsx` | `#inicio` | Framer Motion: parallax blob, headline animado en mount, CTAs. **No tocar.** |
| `IntroScreen.tsx` | — | Animación de intro del logo. **No tocar.** |
| `StatsStrip.tsx` | — | Strip oscuro `#1a0533` con +20 / 2 / <24h. Contador GSAP animado al entrar al viewport. |
| `AnimatedPageHero.tsx` | — | Eyebrow + h1 con word-reveal GSAP on-mount. Usado en páginas interiores. |
| `ValueProp.tsx` | `#valor` | 3 pilares de diferenciación. GSAP: section fade + eyebrow lateral + title word reveal + cards stagger. |
| `Services.tsx` | `#servicios` | 3 cards de servicios con hover glow. GSAP completo. Copy profesional. |
| `Process.tsx` | `#proceso` | 4 pasos en timeline. GSAP completo. Títulos: Diagnóstico / Propuesta / Ejecución / Entrega. |
| `Works.tsx` | `#trabajos` | Grid 2 col, overlay hover, descripción visible en card body. GSAP: section fade + cards stagger. |
| `About.tsx` | `#equipo` | Cards Mauri y Tati. `p-10`, foto `w-28 h-28`, bio `text-base`. GSAP: section + cards stagger. |
| `Contact.tsx` | `#contacto` | Header único con bullets. Formulario Formspree + WhatsApp Tati/Mauri + Email. GSAP completo. |
| `Footer.tsx` | — | Fondo `#0b0f17`, logo footer, links, CTA WhatsApp. |
| `ScrollProgressBar.tsx` | — | Barra de progreso fija arriba, degradado violeta→azul. |
| `WhatsAppFloat.tsx` | — | Botón flotante de WhatsApp. |
| `ServicesPreview.tsx` | — | Preview de servicios en la home. GSAP completo. |
| `WorksPreview.tsx` | — | Preview de trabajos en la home. GSAP completo. |
| `TeamPreview.tsx` | — | Preview del equipo en la home. GSAP completo. |
| `HomeCTA.tsx` | — | CTA final de la home. GSAP: section fade + eyebrow + title words. |

---

## GSAP — arquitectura de animaciones

### Utilidad compartida: `lib/gsap-utils.ts`

Exporta:
- `gsap`, `ScrollTrigger` — ya registrados, listos para usar
- `prefersReduced()` — devuelve `true` si el usuario tiene `prefers-reduced-motion: reduce`
- `splitWords(el)` — divide los text nodes de un `<h1>`/`<h2>` en `<span>` individuales para animar palabra por palabra. Respeta `<span>` de color existentes (los trata como una sola "palabra"). Ignora `<br>`.

### Patrón de uso en cada componente

```tsx
import { gsap, ScrollTrigger, prefersReduced, splitWords } from "@/lib/gsap-utils";

useEffect(() => {
  if (prefersReduced()) return;

  const ctx = gsap.context(() => {
    // 1. Section fade (y: 40 → 0, opacity, 0.8s, power2.out, start: "top 80%")
    // 2. Eyebrow lateral (x: -20 → 0, opacity, 0.5s, power2.out, start: "top 85%")
    // 3. Title word reveal (words: y: 60 → 0, opacity, 0.7s, stagger 0.08s, power3.out)
    // 4. Cards stagger (y: 50 → 0, opacity, 0.6s, stagger 0.12s, power2.out)
  }, sectionRef);

  return () => ctx.revert(); // cleanup scoped al componente
}, []);
```

### Reglas de convivencia con Framer Motion
- **Framer Motion se conserva solo en**: `Hero.tsx` (parallax + blobs pulsantes) e `IntroScreen.tsx`
- **GSAP reemplaza** el `whileInView` de todos los demás componentes
- **No mezclar** GSAP y Framer Motion en el mismo elemento para evitar conflictos

### Stats counter
`StatsStrip.tsx` usa `gsap.to(obj, { value: N, onUpdate })` para animar los números de 0 al valor real cuando el strip entra al viewport.

### Heroes de páginas interiores
`AnimatedPageHero.tsx` usa animaciones **on-mount con `delay`** (no ScrollTrigger) porque el hero es contenido above-the-fold.

---

## Copy / textos — estado actual

### /servicios
- **Hero**: "SERVICIOS / Todo lo que necesita tu presencia digital, en un solo lugar." / CTA → WhatsApp
- **Sección servicios**: eyebrow "LO QUE HACEMOS" / "Tres áreas. Un equipo. Un objetivo."
- **Cards**: Desarrollo Web · Automatización e Integraciones · Diseño y Contenido (con descripciones profesionales)
- **Proceso**: "CÓMO TRABAJAMOS / Un proceso claro de principio a fin." / Diagnóstico → Propuesta → Ejecución → Entrega
- **CTA final**: "¿Listo para dar el siguiente paso?" / dos botones: WhatsApp + "Ver nuestros trabajos"

### /trabajos
- **Hero**: "PORTFOLIO / Proyectos reales. Soluciones concretas."
- **Cards**: 5 proyectos con **descripción visible** en el body de cada card
  - Floripa por Mauri · Agente Conversacional — Synergy · Identidad Visual (agencia de viajes) · Gestión de Redes — Gimnasio · Identidad Visual (barbería)
- **CTA final**: "¿El tuyo puede ser el próximo?" / CTA → WhatsApp

### /nosotros
- **Hero**: "QUIÉNES SOMOS / Dos personas. Un criterio compartido."
- **Cards equipo**: `p-10`, foto `w-28 h-28`, bio `text-base` (más grande y con respiro)
- **Sección valores**: "Nuestra forma de trabajar." / Hecho a medida · Pensamos en tu negocio · Un equipo, un proyecto

### /contacto
- **Header único** (se eliminó el hero duplicado de `page.tsx`, queda solo el de `Contact.tsx`)
- **Título**: "¿Arrancamos con tu proyecto?"
- **Bullets debajo de la bajada**: ✓ Trabajás directo con el equipo · ✓ Cada proyecto es único para nosotros · ✓ Atención rápida y personalizada
- **Label del textarea**: "Contanos tu proyecto" (antes: "¿En qué puedo ayudarte?")

---

## Paleta de colores

| Variable / Uso | Color | Hex |
|---|---|---|
| Acento principal | Violeta | `#7c3aed` |
| Acento secundario | Azul | `#0d47ff` |
| Texto principal | Casi negro | `#0b0f17` |
| Fondo base | Blanco | `#ffffff` |
| Fondo secciones alternas | Violeta muy claro | `#faf9ff` |
| Bordes de cards | Gris claro | `#e8eaf0` |
| Footer (único dark del sitio) | Casi negro | `#0b0f17` |
| **Stats strip** | **Violeta oscuro** | **`#1a0533`** |
| WhatsApp | Verde oficial | `#25D366` |

> **Regla**: El sitio es **siempre light**. Los únicos elementos oscuros son el Footer (`#0b0f17`) y el StatsStrip (`#1a0533`).

---

## Tipografía

| Fuente | Uso | Pesos |
|---|---|---|
| **Ubuntu** | Todo el sitio (display + sans) | 400, 700 |

- Importada desde Google Fonts vía `next/font/google`
- `font-display` y `font-sans` apuntan a la misma fuente
- No hay fuente secundaria — decisión intencional

---

## Equipo

### Mauri
- **Rol**: Desarrollo & Automatización
- **LinkedIn**: https://www.linkedin.com/in/mauricio-illobre-385744368
- **WhatsApp**: https://wa.me/5548984211589
- **Ubicación**: Florianópolis, Brasil
- **Foto**: `/public/Mauri.jpeg`

### Tati
- **Rol**: Diseño & Contenido
- **LinkedIn**: https://www.linkedin.com/in/tatiana-daloia
- **WhatsApp**: https://wa.me/5493541232353 ← **CTA principal del sitio**
- **Ubicación**: Villa Carlos Paz, Córdoba, Argentina
- **Foto**: `/public/tati.jpeg`
- **Fundadora de TatsDesign**

---

## Contacto del negocio

| Canal | Dato |
|---|---|
| Email | orbitadigital10@gmail.com |
| WhatsApp Tati (CTA principal) | +54 9 3541-232353 |
| WhatsApp Mauri | +55 48 98421-1589 |
| Formspree endpoint | `xjgzopyl` |
| URL WA estándar | `https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto` |

---

## Decisiones de diseño

### Animaciones: GSAP como sistema principal

A partir de la sesión 2025-05-24, **GSAP + ScrollTrigger** es el sistema principal de animaciones de scroll. Framer Motion se conserva **exclusivamente** para:
- `Hero.tsx`: parallax con `useScroll/useTransform` + blobs pulsantes infinitos
- `IntroScreen.tsx`: animación de intro del logo

El patrón estándar para cualquier nuevo componente:
```tsx
// ✅ Correcto — GSAP para scroll
gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, scrollTrigger: ... })

// ❌ No agregar más whileInView de Framer Motion en componentes nuevos
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
```

### Secciones duplicadas — ya corregidas
Se eliminaron headers duplicados en:
- `Works.tsx` — eyebrow "Portafolio" + "Trabajos recientes" (quedaba debajo del hero de `/trabajos`)
- `About.tsx` — eyebrow "Quiénes somos" + "Dos personas, un criterio compartido" (quedaba debajo del hero de `/nosotros`)
- `app/contacto/page.tsx` — hero "Contanos tu proyecto" (el componente `Contact.tsx` ya tiene su propio header)

Si se agrega un nuevo componente que incluye su propio header, verificar que la página que lo usa no tenga un hero redundante.

### Cards del equipo
- Padding: `p-10` (antes `p-8`)
- Foto: `w-28 h-28` (antes `w-24 h-24`)
- Bio: `text-base leading-relaxed` (antes `text-sm`)
- Layout vertical (flex-col items-center) — tanto en `About.tsx` como en `TeamPreview.tsx`

### Stats strip
El bloque de stats (`+20 / 2 / <24h`) tiene fondo `#1a0533` (violeta muy oscuro). Es el componente `StatsStrip.tsx` y usa GSAP para animar los números.

### CTAs a WhatsApp
El CTA principal del sitio siempre apunta a WhatsApp de Tati. Los botones primarios de hero y CTA final usan `<a href={WA_URL} target="_blank">`, no `<Link>` de Next.js (que es para rutas internas).

### Hover en portfolio (Works)
Las cards de portfolio tienen:
1. **Sin hover**: imagen + título + badge + descripción en card body
2. **Con hover**: overlay oscuro sobre imagen + título + badge en blanco + escala de imagen

### Glassmorphism en Navbar
Solo se activa al hacer scroll (`scrollY > 24`): `bg-white/85 backdrop-blur-xl border-b border-[#0b0f17]/8`.

### Footer dark como separador visual
Fondo `#0b0f17`. Logo usado: `logofooter2.png` (versión para fondos oscuros). No cambiar.

### Naming de carpeta
La carpeta se llama `orbita-digital` (sin espacio). No renombrar — Vercel requiere rutas sin espacios.

---

## Comandos útiles

```bash
# Desde orbita-digital/
npm run dev      # desarrollo local en http://localhost:3000
npm run build    # build de producción (verificar antes de pushear)
npm run lint     # linter

# Desde mi-website/ (raíz del repo)
git add .
git commit -m "descripción"
git push         # Vercel hace deploy automático
```

---

## SEO implementado

- `title` por página: "Servicios | Órbita Digital", "Trabajos | Órbita Digital", etc.
- `description` optimizada por página
- `metadataBase`: `https://orbitadigital.tech`
- OpenGraph completo (tipo website, imagen, locale es_AR)
- Twitter card `summary_large_image`
- `robots`: index + follow

---

## Historial de cambios relevantes

### Sesión 2025-05-24
- **GSAP instalado** y configurado en `lib/gsap-utils.ts`
- **Animaciones GSAP** aplicadas a todos los componentes (word reveal en títulos, eyebrow lateral, section depth fade, cards stagger, stats counter)
- **Reescritura completa de copy** en `/servicios`, `/trabajos`, `/nosotros`, `/contacto`
- **Secciones duplicadas eliminadas** en Works, About y contacto/page.tsx
- **Cards del equipo agrandadas**: p-10, foto 28×28, bio text-base
- **Nuevo componente `StatsStrip.tsx`** con contador animado (extraído de page.tsx)
- **Nuevo componente `AnimatedPageHero.tsx`** para heroes de páginas interiores
- **Arquitectura multi-page**: rutas `/servicios`, `/trabajos`, `/nosotros`, `/contacto` con sus propias pages
- **Descripciones en cards de portfolio** (Works.tsx): visibles en el body de cada card
- **Bullets en /contacto**: 3 puntos de confianza debajo de la bajada del formulario

### Cambios anteriores relevantes (pre-2025-05-24)
- Animación de intro del logo (`IntroScreen.tsx`)
- Cards del equipo en formato vertical con foto grande y LinkedIn
- Stats con fondo violeta oscuro `#1a0533`
- Scroll indicator eliminado del Hero
- Cursor personalizado eliminado

---

## Pendientes / ideas futuras

- [ ] Analytics (Google Analytics o Vercel Analytics)
- [ ] Testimonios/reseñas de clientes cuando haya material
- [ ] Blog o sección de casos de estudio
- [ ] Optimizar imágenes del portfolio con `next/image` (actualmente usan `<img>` nativo)
- [ ] Considerar lazy load de GSAP para mejorar LCP (actualmente se carga en todos los componentes)
