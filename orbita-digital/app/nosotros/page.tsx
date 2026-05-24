import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | Órbita Digital",
  description: "Somos Mauri y Tati. Dos personas con habilidades complementarias construyendo cosas digitales que funcionan.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <section className="relative py-20 lg:py-28 bg-[#faf9ff] overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-5">
              Quiénes somos
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#0b0f17] mb-6 leading-tight">
              Dos personas.<br />
              <span className="text-[#7c3aed]">Un criterio compartido.</span>
            </h1>
            <p className="font-sans text-lg text-[#0b0f17]/55 max-w-2xl mx-auto leading-relaxed">
              No somos una agencia de producción masiva. Somos Mauri y Tati, dos personas
              con habilidades complementarias que decidieron construir algo juntos.
              Cada proyecto pasa por nuestras manos directamente.
            </p>
          </div>
        </section>

        <About />

        {/* Valores */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#0b0f17] mb-4">
                Nuestra forma de trabajar.
              </h2>
              <p className="font-sans text-[#0b0f17]/50">
                Tres principios que están detrás de cada proyecto que tomamos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Hecho a medida",
                  description: "Cada proyecto arranca desde cero. Analizamos tu negocio, tu contexto y tus objetivos antes de escribir una sola línea de código o diseñar una sola pieza.",
                  color: "#7c3aed",
                },
                {
                  title: "Pensamos en tu negocio",
                  description: "No nos limitamos a ejecutar lo que nos pedís. Si vemos algo que puede funcionar mejor, lo decimos. El resultado importa más que el proceso.",
                  color: "#0d47ff",
                },
                {
                  title: "Un equipo, un proyecto",
                  description: "Trabajás directamente con Mauri y Tati en cada etapa. Sin terceros, sin delegaciones, sin sorpresas.",
                  color: "#7c3aed",
                },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-2xl border border-[#e8eaf0] bg-[#faf9ff]">
                  <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: v.color }} aria-hidden />
                  <h3 className="font-display font-bold text-[#0b0f17] text-lg mb-2">{v.title}</h3>
                  <p className="font-sans text-[#0b0f17]/50 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#faf9ff] text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0b0f17] mb-4">
              ¿Arrancamos a trabajar juntos?
            </h2>
            <p className="font-sans text-[#0b0f17]/50 mb-7 text-sm">
              Contanos tu proyecto y te respondemos en menos de 24 horas.
            </p>
            <Link href="/contacto"
              className="inline-flex items-center gap-2.5 px-8 h-12 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#7c3aed]/20 cursor-pointer">
              Contactanos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
