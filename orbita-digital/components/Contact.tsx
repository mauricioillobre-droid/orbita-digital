"use client";

import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";

const WA_TATI = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";
const WA_MAURI = "https://wa.me/5548984211589?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.84L.057 23.453a.75.75 0 00.9.9l5.58-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.383-.228-3.975 1.044 1.044-3.84-.25-.4A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xjgzopyl");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-[#0b0f17]">
          ¡Mensaje recibido!
        </h3>
        <p className="font-sans text-[#0b0f17]/55 text-sm max-w-xs">
          Te respondemos en menos de 24 horas. También podés escribirnos directamente por WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block font-sans text-sm font-medium text-[#0b0f17]/70 mb-1.5">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Tu nombre"
          className="w-full h-11 px-4 rounded-xl border border-[#e8eaf0] bg-white font-sans text-sm text-[#0b0f17] placeholder-[#0b0f17]/30 focus:outline-none focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/10 transition-all duration-200"
        />
        <ValidationError field="name" prefix="Nombre" errors={state.errors}
          className="mt-1 text-xs text-red-500 font-sans" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-[#0b0f17]/70 mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="w-full h-11 px-4 rounded-xl border border-[#e8eaf0] bg-white font-sans text-sm text-[#0b0f17] placeholder-[#0b0f17]/30 focus:outline-none focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/10 transition-all duration-200"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors}
          className="mt-1 text-xs text-red-500 font-sans" />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-[#0b0f17]/70 mb-1.5">
          Contanos tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Contanos tu proyecto, en qué etapa estás y qué necesitás..."
          className="w-full px-4 py-3 rounded-xl border border-[#e8eaf0] bg-white font-sans text-sm text-[#0b0f17] placeholder-[#0b0f17]/30 focus:outline-none focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/10 transition-all duration-200 resize-none"
        />
        <ValidationError field="message" prefix="Mensaje" errors={state.errors}
          className="mt-1 text-xs text-red-500 font-sans" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-12 rounded-xl bg-[#7c3aed] hover:bg-[#0d47ff] disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#7c3aed]/20 hover:shadow-[#0d47ff]/20 cursor-pointer"
      >
        {state.submitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

      {/* Background blob */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(13,71,255,0.06) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Contacto
          </span>
          <h2
            id="contact-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            ¿Arrancamos con{" "}
            <span className="text-[#7c3aed]">tu proyecto?</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg">
            Contanos en qué estás trabajando, en qué etapa estás y qué necesitás. Respondemos el mismo día.
          </p>
          {/* Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              "Trabajás directo con el equipo",
              "Cada proyecto es único para nosotros",
              "Atención rápida y personalizada",
            ].map((text) => (
              <span key={text} className="flex items-center gap-2 text-sm text-[#0b0f17]/60">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#e8eaf0] bg-white p-8 shadow-sm"
          >
            <h3 className="font-display font-bold text-lg text-[#0b0f17] mb-6">
              Envianos un mensaje
            </h3>
            <ContactForm />
          </motion.div>

          {/* Info + CTA directos */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Divider texto */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#0b0f17]/8" />
              <span className="font-sans text-sm text-[#0b0f17]/35 whitespace-nowrap">
                o escribinos directo
              </span>
              <div className="flex-1 h-px bg-[#0b0f17]/8" />
            </div>

            {/* WhatsApp Tati */}
            <a
              href={WA_TATI}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e8eaf0] bg-white hover:border-[#25D366]/30 hover:bg-[#25D366]/4 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366]/18 transition-colors duration-300">
                <WhatsAppIcon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs text-[#0b0f17]/45 mb-0.5">WhatsApp</p>
                <p className="font-sans text-sm font-semibold text-[#0b0f17]/80">+54 9 3541-232353</p>
              </div>
              <svg className="w-4 h-4 text-[#0b0f17]/20 group-hover:text-[#25D366] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* WhatsApp Mauri */}
            <a
              href={WA_MAURI}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e8eaf0] bg-white hover:border-[#25D366]/30 hover:bg-[#25D366]/4 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366]/18 transition-colors duration-300">
                <WhatsAppIcon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs text-[#0b0f17]/45 mb-0.5">WhatsApp · Mauri</p>
                <p className="font-sans text-sm font-semibold text-[#0b0f17]/80">+55 48 98421-1589</p>
              </div>
              <svg className="w-4 h-4 text-[#0b0f17]/20 group-hover:text-[#25D366] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:orbitadigital10@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e8eaf0] bg-white hover:border-[#7c3aed]/25 hover:bg-[#7c3aed]/4 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/8 flex items-center justify-center text-[#7c3aed] flex-shrink-0 group-hover:bg-[#7c3aed]/14 transition-colors duration-300">
                <EmailIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs text-[#0b0f17]/45 mb-0.5">Email</p>
                <p className="font-sans text-sm font-semibold text-[#0b0f17]/80 truncate">orbitadigital10@gmail.com</p>
              </div>
              <svg className="w-4 h-4 text-[#0b0f17]/20 group-hover:text-[#7c3aed] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Note */}
            <p className="font-sans text-xs text-[#0b0f17]/35 text-center px-4">
              Respondemos en menos de 24 horas. Si es urgente, WhatsApp es más rápido.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
