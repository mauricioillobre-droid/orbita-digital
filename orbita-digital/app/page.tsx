import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "motion/react";
import ServicesPreview from "@/components/home/ServicesPreview";
import WorksPreview from "@/components/home/WorksPreview";
import TeamPreview from "@/components/home/TeamPreview";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <WorksPreview />
        <TeamPreview />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
