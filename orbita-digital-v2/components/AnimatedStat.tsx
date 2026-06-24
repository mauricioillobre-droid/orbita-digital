'use client'
import { useEffect, useRef, useState } from 'react'

function parseTarget(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: raw }
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] }
}

export default function AnimatedStat({ value, style }: { value: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const { prefix, number, suffix } = parseTarget(value)
          if (number === 0) { setDisplay(value); return }

          const duration = 1400
          const start = performance.now()
          const step = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * number)
            setDisplay(`${prefix}${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(step)
          }
          setDisplay(`${prefix}0${suffix}`)
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <div ref={ref} style={style}>{display}</div>
}
