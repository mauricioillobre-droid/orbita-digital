'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur'

    // Reset all reveal elements on page change so they animate in fresh
    document.querySelectorAll(selector).forEach(el => {
      el.classList.remove('visible')
    })

    // Small delay to let the new page DOM render before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.12 }
      )
      document.querySelectorAll(selector).forEach(el => observer.observe(el))

      // Cleanup stored on window so we can disconnect on next run
      ;(window as Window & { __revealObserver?: IntersectionObserver }).__revealObserver?.disconnect()
      ;(window as Window & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
    }, 80)

    return () => {
      clearTimeout(timer)
      ;(window as Window & { __revealObserver?: IntersectionObserver }).__revealObserver?.disconnect()
    }
  }, [pathname])
}
