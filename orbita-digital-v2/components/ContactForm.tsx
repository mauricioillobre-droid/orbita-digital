'use client'

import { useState } from 'react'
import { IconBrandWhatsapp, IconLoader2 } from '@tabler/icons-react'

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
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ocurrió un error. Intentá de nuevo.')
    }
  }

  const inputClass =
    'w-full bg-[#111827] border border-[#1e2a3a] text-white rounded-xl px-4 py-3 font-dm text-sm placeholder-[#8892a4] focus:outline-none focus:border-[#0d47ff] transition-colors duration-200'

  const labelClass = 'block font-dm text-sm text-[#8892a4] mb-2'

  if (status === 'success') {
    return (
      <div className="bg-[#111827] border border-[#00b8ff]/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#00b8ff]/10 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#00b8ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-syne font-extrabold text-2xl text-white mb-3">¡Mensaje enviado!</h2>
        <p className="font-dm text-[#8892a4] mb-8">
          Te respondemos en menos de 24hs. Si necesitás algo urgente, escribinos por WhatsApp.
        </p>
        <a
          href="https://wa.me/5491122355689"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity cursor-pointer"
        >
          <IconBrandWhatsapp size={18} aria-hidden="true" />
          Ir a WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Formulario de contacto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Tu nombre <span className="text-[#0d47ff]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa (opcional)"
            className={inputClass}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#0d47ff]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Tu WhatsApp"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className={labelClass}>
          ¿Qué necesitás?
        </label>
        <select
          id="servicio"
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
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
        <label htmlFor="message" className={labelClass}>
          Contanos de tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Contanos de qué se trata tu proyecto"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="font-dm text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-dm font-medium text-white gradient-bg hover:opacity-90 transition-opacity duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <IconLoader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </button>
    </form>
  )
}
