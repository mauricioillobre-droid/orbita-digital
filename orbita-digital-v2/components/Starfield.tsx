'use client'
import { useEffect, useRef } from 'react'

// Polvo estelar de fondo: partículas finas que suben lento, titilan y se desplazan un poco
// con el mouse y el scroll (las más cercanas más que las lejanas). Con reduced-motion se dibuja quieto.
type Star = { x: number; y: number; z: number; t: number; blue: boolean }

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, stars: Star[] = [], raf = 0
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Menos partículas en celular: se nota igual y ahorra batería
      const count = Math.min(Math.round((w * h) / (w < 768 ? 9000 : 6500)), 220)
      stars = Array.from({ length: count }, () => {
        const z = Math.random() * 0.8 + 0.2
        return { x: Math.random() * w, y: Math.random() * h, z, t: Math.random() * Math.PI * 2, blue: z > 0.75 && Math.random() < 0.6 }
      })
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04
      const scroll = reduced ? 0 : window.scrollY
      for (const s of stars) {
        if (!reduced) {
          s.y -= s.z * 0.18
          if (s.y < -4) { s.y = h + 4; s.x = Math.random() * w }
        }
        const x = s.x - mouse.x * s.z * 18
        const y = (((s.y - scroll * s.z * 0.12 - mouse.y * s.z * 12) % h) + h) % h
        const twinkle = reduced ? 0.6 : 0.55 + 0.45 * Math.sin(time * 0.0012 + s.t)
        const alpha = twinkle * s.z * (s.blue ? 1 : 0.7)
        ctx.fillStyle = s.blue ? `rgba(63,160,255,${alpha})` : `rgba(255,255,255,${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, s.z * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      mouse.tx = e.clientX / w - 0.5
      mouse.ty = e.clientY / h - 0.5
    }
    const onResize = () => { resize(); if (reduced) draw(0) }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
