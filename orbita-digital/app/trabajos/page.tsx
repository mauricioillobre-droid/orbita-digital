import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import Link from "next/link";

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
              Lo que hemos{" "}
              <span className="text-[#0d47ff]">construido.</span>
            </h1>
            <p className="font-sans text-lg text-[#0b0f17]/55 max-w-2xl mx-auto leading-relaxed">
              Proyectos reales. Cada uno con su propio problema, su propio contexto
              y su propia solución. Sin copy-paste.
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
              Contanos qué necesitás. Respondemos en menos de 24 horas.
            </p>
            <Link href="/contacto"
              className="inline-flex items-center gap-2.5 px-8 h-12 rounded-full bg-[#7c3aed] hover:bg-[#0d47ff] text-white font-sans font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#7c3aed]/20 cursor-pointer">
              Hablemos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
