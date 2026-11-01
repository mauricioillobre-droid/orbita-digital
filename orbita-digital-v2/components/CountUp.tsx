'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Cuenta desde 0 hasta el número de `value` ("<24hs", "100%") al entrar en pantalla.
// El HTML del servidor trae el valor final, así que sin JS (o para buscadores) se lee igual.
export default function CountUp({ value, style }: { value: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([^0-9]*)(\d+)(.*)$/)
    if (!el || !match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const [, prefix, num, suffix] = match
    const counter = { n: 0 }
    const tween = gsap.to(counter, {
      n: Number(num),
      duration: 2,
      ease: 'expo.out',
      onUpdate: () => { el.textContent = `${prefix}${Math.round(counter.n)}${suffix}` },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
    el.textContent = `${prefix}0${suffix}`
    return () => {
      tween.kill()
      el.textContent = value
    }
  }, [value])

  return <div ref={ref} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>{value}</div>
}
