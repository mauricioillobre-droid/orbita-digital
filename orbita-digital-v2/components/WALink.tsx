'use client'

import type { ReactNode, CSSProperties } from 'react'

const WA_URL = 'https://wa.me/5493541232353'

export function trackWA() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'contacto',
      event_label: 'whatsapp_cta',
    })
  }
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', { content_name: 'WhatsApp' })
  }
}

interface WALinkProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export default function WALink({ className, style, children }: WALinkProps) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={trackWA}
    >
      {children}
    </a>
  )
}
