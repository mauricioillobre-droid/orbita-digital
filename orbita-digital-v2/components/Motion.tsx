'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Envuelve cada palabra de los nodos de texto de `el`. Los elementos con gradiente (.shiny)
// se tratan como una sola palabra: si se parten, background-clip: text deja de funcionar.
function splitWords(el: HTMLElement, wrap: (word: Node) => HTMLElement) {
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? '').split(/(\s+)/)
        const frag = document.createDocumentFragment()
        for (const part of parts) {
          if (!part) continue
          frag.appendChild(/^\s+$/.test(part) ? document.createTextNode(part) : wrap(document.createTextNode(part)))
        }
        child.replaceWith(frag)
      } else if (child instanceof HTMLElement) {
        if (child.classList.contains('shiny')) {
          const w = wrap(document.createTextNode(''))
          child.replaceWith(w)
          ;(w.querySelector('.sw-i') ?? w).replaceWith(child)
          child.classList.add('sw-i')
        } else if (child.tagName !== 'BR') {
          walk(child)
        }
      }
    }
  }
  walk(el)
}

const maskWord = (word: Node) => {
  const outer = document.createElement('span')
  outer.className = 'sw'
  const inner = document.createElement('span')
  inner.className = 'sw-i'
  inner.appendChild(word)
  outer.appendChild(inner)
  return outer
}

const litWord = (word: Node) => {
  const s = document.createElement('span')
  s.className = 'srw'
  s.appendChild(word)
  return s
}

const delayOf = (el: Element) => Number(el.getAttribute('data-delay') ?? 0) * 0.09

export default function Motion() {
  const pathname = usePathname()

  useEffect(() => {
    if (!document.documentElement.classList.contains('anim')) return

    const ctx = gsap.context(() => {
      // Split Text: títulos h1/h2
      gsap.utils.toArray<HTMLElement>('[data-anim="split"]').forEach(el => {
        if (!el.hasAttribute('data-split')) {
          splitWords(el, maskWord)
          el.setAttribute('data-split', '')
        }
        gsap.fromTo(el.querySelectorAll('.sw-i'),
          { yPercent: 115, rotate: 4 },
          {
            yPercent: 0, rotate: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: delayOf(el),
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          })
      })

      // Scroll Reveal: frases destacadas, cada palabra se enciende con el scroll
      gsap.utils.toArray<HTMLElement>('[data-anim="scroll"]').forEach(el => {
        if (!el.hasAttribute('data-split')) {
          splitWords(el, litWord)
          el.setAttribute('data-split', '')
        }
        gsap.fromTo(el.querySelectorAll('.srw'),
          { opacity: 0.12, filter: 'blur(6px)' },
          {
            opacity: 1, filter: 'blur(0px)', ease: 'none', stagger: 0.05,
            scrollTrigger: { trigger: el, start: 'top 88%', end: 'bottom 60%', scrub: true },
          })
      })

      // Textos sueltos, botones, eyebrows
      gsap.utils.toArray<HTMLElement>('[data-anim="fade"]').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: delayOf(el),
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          })
      })

      // Animated Content: tarjetas, entrada corta y elástica, escalonada por fila
      gsap.set('[data-anim="card"]', { opacity: 0, y: 70, scale: 0.94 })
      ScrollTrigger.batch('[data-anim="card"]', {
        start: 'top 90%',
        once: true,
        onEnter: batch => gsap.to(batch, {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.5)',
          stagger: (i, el) => el.hasAttribute('data-delay') ? delayOf(el) : i * 0.09,
          clearProps: 'transform',
        }),
      })
    })

    // Las fuentes e imágenes cambian alturas: recalcular posiciones cuando terminan de cargar
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [pathname])

  return null
}
