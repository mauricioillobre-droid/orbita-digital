import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServicesPreview from "@/components/home/ServicesPreview";
import WorksPreview from "@/components/home/WorksPreview";
import TeamPreview from "@/components/home/TeamPreview";
import HomeCTA from "@/components/home/HomeCTA";

const stats = [
  { value: "+20", label: "Proyectos entregados" },
  { value: "2", label: "Especialistas dedicados" },
  { value: "<24h", label: "Tiempo de respuesta" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Stats strip */}
        <div className="bg-[#1a0533] py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-3xl text-white mb-1">{stat.value}</p>
                  <p className="font-sans text-sm text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ServicesPreview />
        <WorksPreview />
        <TeamPreview />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
