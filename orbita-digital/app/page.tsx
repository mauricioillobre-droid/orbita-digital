import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <Process />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
