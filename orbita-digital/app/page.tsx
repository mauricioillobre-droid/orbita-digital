import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StatsStrip from "@/components/StatsStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import WorksPreview from "@/components/home/WorksPreview";
import TeamPreview from "@/components/home/TeamPreview";
import HomeCTA from "@/components/home/HomeCTA";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Process />
        <ServicesPreview />
        <WorksPreview />
        <TeamPreview />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
