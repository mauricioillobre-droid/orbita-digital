'use client'
import { useEffect, useRef } from 'react'

// Desenfoque escalonado en el borde inferior de la pantalla. Se apaga al llegar al final
// de la página para no tapar la última línea del footer.
const LAYERS = 5

export default function GradualBlur() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      ref.current?.classList.toggle('is-end', atEnd)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="gradual-blur" aria-hidden="true">
      {Array.from({ length: LAYERS }).map((_, i) => {
        const from = (i / LAYERS) * 100
        const to = ((i + 1) / LAYERS) * 100
        const mask = `linear-gradient(to bottom, transparent ${from}%, black ${to}%)`
        const blur = `blur(${(0.5 * 2 ** i).toFixed(1)}px)`
        return <div key={i} style={{ backdropFilter: blur, WebkitBackdropFilter: blur, maskImage: mask, WebkitMaskImage: mask }} />
      })}
    </div>
  )
}
