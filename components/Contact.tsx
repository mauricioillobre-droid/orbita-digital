"use client";

import { motion } from "motion/react";

const WA_URL_TATI =
  "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios";
const WA_URL_MAURI =
  "https://wa.me/5548984211589?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios";
const WA_MAIN = WA_URL_TATI;

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.512 5.84L.057 23.453a.75.75 0 00.9.9l5.58-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.527-5.38-1.445l-.383-.228-3.975 1.044 1.044-3.84-.25-.4A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "orbitadigital10@gmail.com",
    href: "mailto:orbitadigital10@gmail.com",
    external: false,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp · Tati",
    value: "+54 9 3541-232353",
    href: WA_URL_TATI,
    external: true,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp · Mauri",
    value: "+55 48 98421-1589",
    href: WA_URL_MAURI,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b0f17]/8 to-transparent" />

      {/* Subtle background blob */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(13,71,255,0.06) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-4">
            Contacto
          </span>
          <h2
            id="contact-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#0b0f17] mb-4"
          >
            ¿Listo para crecer?{" "}
            <span className="text-[#7c3aed]">Hablemos.</span>
          </h2>
          <p className="font-sans text-[#0b0f17]/50 text-lg">
            Respondemos en menos de 24 horas
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ boxShadow: "0 6px 24px rgba(13,71,255,0.1)", borderColor: "rgba(13,71,255,0.3)" }}
              className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#e8eaf0] bg-white hover:bg-[#f5f8ff] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0d47ff]/8 border border-[#0d47ff]/12 flex items-center justify-center text-[#0d47ff] group-hover:bg-[#0d47ff]/14 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <p className="font-sans text-xs text-[#0b0f17]/60 mb-1">{item.label}</p>
                <p className="font-sans text-[#0b0f17]/75 text-sm font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={WA_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 rounded-full bg-[#0d47ff] hover:bg-[#7c3aed] text-white font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-[#0d47ff]/20 hover:shadow-[#7c3aed]/25 hover:scale-105"
            style={{ height: "56px" }}
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
          <p className="font-sans text-xs text-[#0b0f17]/60">
            También podés escribirnos directamente al{" "}
            <a
              href={WA_URL_MAURI}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b0f17]/70 hover:text-[#7c3aed] transition-colors underline underline-offset-2"
            >
              WhatsApp de Mauri
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
