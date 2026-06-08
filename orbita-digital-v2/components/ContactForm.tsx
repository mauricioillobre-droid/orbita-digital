'use client'

import { useState } from 'react'

type FormData = {
  name: string
  empresa: string
  email: string
  phone: string
  servicio: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormData = {
  name: '',
  empresa: '',
  email: '',
  phone: '',
  servicio: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setStatus('success')
      setForm(initialForm)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'formulario',
          event_label: 'contacto_web',
        })
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ocurrió un error. Intentá de nuevo.')
    }
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-hanken)',
    fontSize: '13.5px',
    fontWeight: 500,
    color: 'var(--ink-2)',
    marginBottom: '6px',
  }

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-lg)',
        padding: '48px 32px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-card)',
      }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--accent-soft)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontFamily: 'var(--font-hanken)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '12px' }}>
          ¡Mensaje enviado!
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginBottom: '32px', lineHeight: 1.6 }}>
          Te respondemos en menos de 24hs. Si necesitás algo urgente, escribinos por WhatsApp.
        </p>
        <a
          href="https://wa.me/5493541232353"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa btn-lg"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'click_whatsapp', {
                event_category: 'contacto',
                event_label: 'whatsapp_cta',
              })
            }
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Ir a WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      padding: '32px',
      boxShadow: 'var(--shadow-card)',
    }}>
      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <label htmlFor="name" style={labelStyle}>
              Tu nombre <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="form-input"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="empresa" style={labelStyle}>
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              value={form.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa (opcional)"
              className="form-input"
              autoComplete="organization"
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="form-input"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>
              WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Tu WhatsApp"
              className="form-input"
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label htmlFor="servicio" style={labelStyle}>
            ¿Qué necesitás?
          </label>
          <select
            id="servicio"
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            className="form-input"
            style={{ cursor: 'pointer' }}
          >
            <option value="" disabled>Seleccioná un servicio</option>
            <option value="Desarrollo Web">Desarrollo Web</option>
            <option value="Automatización">Automatización</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
            <option value="Edición de Video">Edición de Video</option>
            <option value="No sé, quiero asesoramiento">No sé, quiero asesoramiento</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>
            Contanos de tu proyecto
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Contanos de qué se trata tu proyecto"
            className="form-input"
            style={{ resize: 'none' }}
          />
        </div>

        {status === 'error' && (
          <p role="alert" style={{ fontSize: '14px', color: '#dc2626', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--r-sm)', padding: '12px 14px', margin: 0 }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary btn-lg"
          style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.65 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
        >
          {status === 'loading' ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: 'spin 0.8s linear infinite' }}>
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar mensaje →'
          )}
        </button>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-3)', textAlign: 'center', margin: 0 }}>
          Respondemos en menos de 24 hs hábiles
        </p>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
