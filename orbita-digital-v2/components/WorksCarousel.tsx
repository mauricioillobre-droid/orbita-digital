'use client'

import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import WALink from '@/components/WALink'
import { projects } from '@/app/trabajos/projects'

const N = projects.length
const STEP = 360 / N

const waIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const mod = (n: number, m: number) => ((n % m) + m) % m

// Sin JavaScript (o mientras carga) los textos de todos los casos siguen en el HTML.
function SeoFallback() {
  return (
    <div className="wc-root">
      <div className="wc-stage-placeholder" />
      <div className="wc-seo">
        {projects.map(p => (
          <article key={p.slug}>
            <h2>{p.title}</h2>
            <p>{p.tags.join(', ')}</p>
            <p>{p.shortDesc}</p>
            <p>{p.longDesc}</p>
          </article>
        ))}
      </div>
      <Styles />
    </div>
  )
}

function Styles() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .wc-root { --w: 460px; --r: 345px; position: relative; overflow: hidden; padding: 24px 0 clamp(48px, 8vw, 96px); }
      .wc-stage, .wc-stage-placeholder { height: calc(var(--w) * 9 / 16 + 90px); }
      .wc-stage { position: relative; perspective: 1400px; touch-action: pan-y; cursor: grab; user-select: none; -webkit-user-select: none; outline: none; }
      .wc-stage.dragging { cursor: grabbing; }
      .wc-ring { position: absolute; left: 50%; top: 50%; width: var(--w); height: calc(var(--w) * 9 / 16); margin-left: calc(var(--w) / -2); margin-top: calc(var(--w) * 9 / 32 * -1); transform-style: preserve-3d; }
      .wc-card { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      .wc-inner { width: 100%; height: 100%; border-radius: 16px; overflow: hidden; background: #000; border: 1px solid var(--line-2); box-shadow: 0 20px 50px rgba(0,0,0,.5); transform: scale(.94); filter: brightness(.42); transition: transform .45s ease, filter .45s ease, border-color .45s ease; }
      .wc-card.front .wc-inner { transform: scale(1.1); filter: none; border-color: color-mix(in srgb, var(--accent) 55%, transparent); box-shadow: 0 30px 80px rgba(0,0,0,.6), 0 0 60px color-mix(in srgb, var(--accent) 18%, transparent); }
      .wc-card button { all: unset; display: block; width: 100%; height: 100%; cursor: pointer; }
      .wc-card.front button { cursor: inherit; }
      .wc-media { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
      .wc-nav { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 8px; }
      .wc-arrow { width: 44px; height: 44px; border-radius: 99px; border: 1px solid var(--line-2); background: rgba(255,255,255,.04); color: var(--ink); cursor: pointer; display: grid; place-items: center; transition: border-color .2s, background .2s; }
      .wc-arrow:hover { border-color: rgba(255,255,255,.4); background: rgba(255,255,255,.08); }
      .wc-dots { display: flex; gap: 4px; }
      .wc-dot { width: 24px; height: 24px; border: 0; background: transparent; cursor: pointer; display: grid; place-items: center; padding: 0; }
      .wc-dot::before { content: ''; width: 8px; height: 8px; border-radius: 99px; background: var(--line-2); transition: background .25s, transform .25s; }
      .wc-dot[aria-current="true"]::before { background: var(--accent); transform: scale(1.3); }
      .wc-desc { display: grid; margin-top: clamp(28px, 4vw, 48px); }
      .wc-item { grid-area: 1 / 1; opacity: 0; visibility: hidden; transition: opacity .35s ease, visibility 0s linear .35s; }
      .wc-item.on { opacity: 1; visibility: visible; transition: opacity .35s ease .12s, visibility 0s; }
      .wc-toggle { display: inline-flex; gap: 4px; padding: 4px; border: 1px solid var(--line-2); border-radius: 99px; margin-bottom: 22px; }
      .wc-toggle button { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-2); background: transparent; border: 0; padding: 7px 14px; border-radius: 99px; cursor: pointer; transition: background .2s, color .2s; }
      .wc-toggle button[aria-pressed="true"] { background: var(--accent-soft); color: var(--accent); }
      .wc-seo { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
      /* Escritorio: anillo más abierto. Perspectiva elegida para que p / (p - r) quede igual que antes (1400 / 1055) y el frente no cambie de tamaño */
      @media (min-width: 1024px) {
        .wc-root { --r: 520px; }
        .wc-stage { perspective: 2110px; }
      }
      @media (max-width: 767px) {
        .wc-root { --w: 230px; --r: 175px; perspective: none; }
        .wc-stage { perspective: 900px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .wc-inner, .wc-item, .wc-item.on { transition: none; }
      }
    ` }} />
  )
}

function Carousel() {
  const params = useSearchParams()
  const caso = params.get('caso')
  const startIdx = Math.max(0, projects.findIndex(p => p.slug === caso))

  const rotation = useMotionValue(-startIdx * STEP)
  const [active, setActive] = useState(startIdx)
  const [extra, setExtra] = useState<Record<string, boolean>>({})
  const [dragging, setDragging] = useState(false)
  const reduced = useRef(false)
  const anim = useRef<ReturnType<typeof animate> | null>(null)
  const drag = useRef({ down: false, moved: false, x0: 0, r0: 0, lastX: 0, lastT: 0, v: 0 })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.current = mq.matches
    const on = () => { reduced.current = mq.matches }
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  // Si el enlace cambia (?caso=) con la página ya montada, ir a ese caso.
  const goTo = useCallback((target: number, velocity = 0) => {
    anim.current?.stop()
    const cur = Math.round(-rotation.get() / STEP)
    let d = mod(target - mod(cur, N), N)
    if (d > N / 2) d -= N
    const to = -(cur + d) * STEP
    if (reduced.current) { rotation.set(to); return }
    anim.current = animate(rotation, to, { type: 'spring', stiffness: 110, damping: 18, mass: 1, velocity })
  }, [rotation])

  const step = useCallback((dir: number) => {
    anim.current?.stop()
    const cur = Math.round(-rotation.get() / STEP)
    const to = -(cur + dir) * STEP
    if (reduced.current) { rotation.set(to); return }
    anim.current = animate(rotation, to, { type: 'spring', stiffness: 110, damping: 18 })
  }, [rotation])

  useMotionValueEvent(rotation, 'change', v => {
    const idx = mod(Math.round(-v / STEP), N)
    setActive(prev => (prev === idx ? prev : idx))
  })

  const lastCaso = useRef(caso)
  useEffect(() => {
    if (caso === lastCaso.current) return
    lastCaso.current = caso
    const i = projects.findIndex(p => p.slug === caso)
    if (i >= 0) goTo(i)
  }, [caso, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return
      if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    anim.current?.stop()
    drag.current = { down: true, moved: false, x0: e.clientX, r0: rotation.get(), lastX: e.clientX, lastT: performance.now(), v: 0 }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d.down) return
    const dx = e.clientX - d.x0
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true
      setDragging(true)
      try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId) } catch { /* noop */ }
    }
    if (!d.moved) return
    const now = performance.now()
    const dt = Math.max(1, now - d.lastT)
    d.v = d.v * 0.6 + (((e.clientX - d.lastX) * 0.22) / dt) * 1000 * 0.4
    d.lastX = e.clientX
    d.lastT = now
    rotation.set(d.r0 + dx * 0.22)
  }
  const endDrag = () => {
    const d = drag.current
    if (!d.down) return
    d.down = false
    setDragging(false)
    if (!d.moved) return
    const r = rotation.get()
    if (reduced.current) {
      rotation.set(Math.round(r / STEP) * STEP)
      return
    }
    const cur = Math.round(-r / STEP)
    const projected = -(r + d.v * 0.25) / STEP
    const targetIdx = Math.max(cur - 2, Math.min(cur + 2, Math.round(projected)))
    anim.current = animate(rotation, -targetIdx * STEP, { type: 'spring', stiffness: 110, damping: 18, velocity: d.v })
  }

  const onCardClick = (i: number) => {
    if (drag.current.moved) return
    if (i !== active) goTo(i)
  }

  return (
    <div className="wc-root">
      <div
        className={`wc-stage${dragging ? ' dragging' : ''}`}
        role="group"
        aria-roledescription="carrusel"
        aria-label="Casos de trabajo"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <motion.div className="wc-ring" style={{ rotateY: rotation }}>
          {projects.map((p, i) => {
            const front = i === active
            const showExtra = !!(extra[p.slug] && p.extraVideo)
            const v = showExtra && p.extraVideo ? p.extraVideo : { src: p.video, poster: p.poster }
            return (
              <div
                key={p.slug}
                className={`wc-card${front ? ' front' : ''}`}
                style={{ transform: `rotateY(${i * STEP}deg) translateZ(var(--r))` }}
              >
                <div className="wc-inner">
                  <button type="button" tabIndex={front ? -1 : 0} onClick={() => onCardClick(i)} aria-label={front ? p.alt : `Ver ${p.title}`}>
                    {front ? (
                      <video
                        key={v.src}
                        className="wc-media"
                        src={v.src}
                        poster={v.poster}
                        aria-label={p.alt}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="wc-media" src={v.poster} alt={p.alt} loading="lazy" draggable={false} />
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      <div className="wc-nav">
        <button type="button" className="wc-arrow" onClick={() => step(-1)} aria-label="Caso anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="wc-dots">
          {projects.map((p, i) => (
            <button key={p.slug} type="button" className="wc-dot" aria-label={p.title} aria-current={i === active} onClick={() => goTo(i)} />
          ))}
        </div>
        <button type="button" className="wc-arrow" onClick={() => step(1)} aria-label="Caso siguiente">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <div className="container-od">
        <div className="wc-desc" aria-live="polite">
          {projects.map((p, i) => {
            const on = i === active
            const showExtra = !!extra[p.slug]
            return (
              <div key={p.slug} className={`wc-item${on ? ' on' : ''}`} aria-hidden={!on} style={{ maxWidth: '920px', margin: '0 auto', width: '100%' }}>
                {p.extraVideo && (
                  <div className="wc-toggle" role="group" aria-label="Vista del proyecto">
                    <button type="button" aria-pressed={!showExtra} onClick={() => setExtra(s => ({ ...s, [p.slug]: false }))}>Sitio</button>
                    <button type="button" aria-pressed={showExtra} onClick={() => setExtra(s => ({ ...s, [p.slug]: true }))}>{p.extraVideo.label}</button>
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: '99px' }}>{t}</span>
                  ))}
                </div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '18px', lineHeight: 1.1, maxWidth: '22ch' }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '14px', maxWidth: '68ch' }}>{p.shortDesc}</p>
                <p style={{ fontSize: '15px', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '68ch' }}>{p.longDesc}</p>
                <div>
                  <WALink className="btn btn-wa btn-sm">
                    {waIcon}
                    Quiero algo similar
                  </WALink>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Styles />
    </div>
  )
}

export default function WorksCarousel() {
  return (
    <Suspense fallback={<SeoFallback />}>
      <Carousel />
    </Suspense>
  )
}
