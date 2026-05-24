import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
const WA_URL = "https://wa.me/5493541232353?text=Hola%20%C3%93rbita%20Digital%2C%20quiero%20hablar%20de%20mi%20proyecto";

export const metadata: Metadata = {
  title: "Trabajos | Órbita Digital",
  description: "Portfolio de Órbita Digital: sitios, automatizaciones, identidad visual y gestión de redes.",
};

export default function TrabajosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-5">
              Portfolio
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#0b0f17] mb-6 leading-tight">
              Proyectos reales.{" "}
              <span className="text-[#0d47ff]">Soluciones concretas.</span>
            </h1>
            <p className="font-sans text-lg text-[#0b0f17]/55 max-w-2xl mx-auto leading-relaxed">
              Cada proyecto tiene su propio contexto y su propio desafío. Estos son algunos de los trabajos que hicimos hasta ahora.
            </p>
          </div>
        </section>

        <Works />

        {/* CTA */}
        <section className="py-20 bg-[#faf9ff] text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#0b0f17] mb-4">
              ¿El tuyo puede ser{" "}
              <span className="text-[#7c3aed]">el próximo?</span>
            </h2>
            <p className="font-sans text-[#0b0f17]/50 mb-8">
              Contanos qué necesitás. Respondemos el mismo día.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 h-12 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#7c3aed]/20 cursor-pointer">
              Hablemos de tu proyecto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
