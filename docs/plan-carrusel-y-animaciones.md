# Plan: Trabajos en carrusel 3D + animaciones nuevas

Brief aprobado por Mauricio el 2026-10-31. Sitio: `orbita-digital-v2` (Next.js 14, se publica con push a `main`; trabajar directo en `main`).
Referencia: https://reactbits.dev (Circular Carousel, Split Text, Scroll Reveal, Animated Content, Scroll Velocity, Count Up, Gradual Blur).

## Estado

| Paso | Estado |
|---|---|
| 1. Carrusel 3D en /trabajos | hecho, commit local sin publicar (falta OK de Mauricio) |
| 2. Muestra en local para Mauricio | mostrada 2026-10-31, esperando su OK |
| 3. Animaciones nuevas en todo el sitio | pendiente |
| 4. Verificar (tsc, `npm run build`, navegador compu + celular) y publicar | pendiente |

## 1. Carrusel de Trabajos (`components/WorksCarousel.tsx`, client component)

- Anillo 3D (estilo Circular Carousel de reactbits, preset "cylinder") con los 5 casos de `app/trabajos/page.tsx` (array `projects`). Cada tarjeta muestra el poster; la del frente es más grande y reproduce su video (muted, loop, playsInline); las laterales en pausa, curvadas y oscurecidas.
- Navegación: arrastre con impulso y snap, flechas, clic en tarjeta lateral la trae al frente, teclado (← →). Respetar `prefers-reduced-motion`.
- Debajo: descripción del caso del frente (título h2, tags, shortDesc, longDesc, botón WALink "Quiero algo similar"), con fundido al cambiar.
- Casos con `extraVideo` (En Cada Rincón, 25 de Mayo, Casa de Praia): botones "Sitio / Panel" (usar el `label` de extraVideo) para cambiar el video de la tarjeta del frente.
- Deep link: `/trabajos?caso=<slug>` (o hash) abre con ese caso al frente; las tarjetas del mosaico del inicio (`app/page.tsx`, clase `mosaic-card`) apuntan ahí.
- SEO: los textos de todos los casos deben estar en el HTML (render server o todos montados y los no activos ocultos con CSS), no solo el activo.
- Celular: anillo más chico, se pasa deslizando.
- Estilo: tokens de `app/globals.css` (`.glass`, `--accent`, etc.).

## 3. Animaciones (reemplazan el sistema `.reveal` de `globals.css` + `components/RevealProvider.tsx`)

| Dónde | Componente |
|---|---|
| Títulos h1/h2 | Split Text (palabras desde máscara) |
| Frases destacadas | Scroll Reveal (palabras se encienden con el scroll) |
| Tarjetas | Animated Content (entrada corta y elástica, escalonada por fila) |
| Marquesina de clientes del inicio | Scroll Velocity |
| Estadísticas del inicio | Count Up (hoy `AnimatedStat`) |
| Borde inferior de pantalla | Gradual Blur |

Nueva dependencia permitida: GSAP (+ ScrollTrigger). Apagar todo con `prefers-reduced-motion`. No usar `reveal-mask` dentro de `overflow: hidden`.

## Reglas

- No cambiar textos, SEO, links, ni tracking (GA4 `G-MYN4046FMM`, píxel Meta, `WALink`/`trackWA`, formulario `/api/contact`).
- No borrar `public/google562b042f69b6de78.html`.
- Textos nuevos: tono profesional, sin coloquialismos.
- Mostrarle a Mauricio la muestra del carrusel antes de seguir con las animaciones.
