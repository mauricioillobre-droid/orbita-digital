import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto | Órbita Digital",
  description: "Hablemos de tu proyecto. Respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Page header */}
        <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-5">
              Contacto
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#0b0f17] mb-6 leading-tight">
              Contanos tu{" "}
              <span className="text-[#7c3aed]">proyecto.</span>
            </h1>
            <p className="font-sans text-lg text-[#0b0f17]/55 max-w-xl mx-auto leading-relaxed">
              Sin formularios eternos ni esperas. Escribinos, contanos de qué se trata
              y te respondemos en menos de 24 horas.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
