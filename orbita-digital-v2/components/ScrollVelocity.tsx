'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Marquesina que avanza sola y se acelera (y cambia de sentido) con la velocidad del scroll.
export default function ScrollVelocity({ items, baseSpeed = 40, className = '' }: { items: string[]; baseSpeed?: number; className?: string }) {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = 0
    let dir = -1
    let boost = 0
    let lastY = window.scrollY

    const tick = (_t: number, dt: number) => {
      // Se mide en cada cuadro: el ancho cambia cuando carga la fuente o se rota el celular
      const wrap = gsap.utils.wrap(-el.scrollWidth / 2, 0)
      const y = window.scrollY
      const v = (y - lastY) / Math.max(dt, 1) * 1000 // px/s de scroll
      lastY = y
      if (Math.abs(v) > 30) dir = v > 0 ? -1 : 1
      boost += (Math.min(Math.abs(v) / 4, 900) - boost) * 0.08
      x = wrap(x + dir * (baseSpeed + boost) * dt / 1000)
      gsap.set(el, { x, skewX: dir * -boost / 120 })
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [baseSpeed])

  return (
    <div ref={track} className={`marquee-track ${className}`} aria-hidden="true">
      {[...items, ...items].map((name, i) => <span key={i}>{name}</span>)}
    </div>
  )
}
