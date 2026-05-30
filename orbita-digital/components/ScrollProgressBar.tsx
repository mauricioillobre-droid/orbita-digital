"use client";

import { useEffect, useRef } from "react";
import { useScroll, motion } from "motion/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-utils";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "stats", label: "Stats" },
  { id: "servicios", label: "Servicios" },
  { id: "trabajos", label: "Trabajos" },
  { id: "equipo", label: "Equipo" },
  { id: "cta", label: "Contacto" },
];

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  function highlightSection(activeIndex: number) {
    labelRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.color = i === activeIndex ? "#7c3aed" : "transparent";
    });
  }

  useEffect(() => {
    highlightSection(0);

    const triggers = sections.map((section, i) => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => highlightSection(i),
        onEnterBack: () => highlightSection(i),
      });
    });

    return () => triggers.forEach((t) => t?.kill());
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <motion.div
        className="h-[3px] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(to right, #7c3aed, #6d28d9)",
        }}
      />
      <div className="hidden md:flex justify-between px-4 pt-0.5">
        {sections.map((section, i) => (
          <span
            key={section.id}
            ref={(el) => { labelRefs.current[i] = el; }}
            className="font-sans"
            style={{ fontSize: "8px", color: "transparent", transition: "color 0.3s ease" }}
          >
            {section.label}
          </span>
        ))}
      </div>
    </div>
  );
}
