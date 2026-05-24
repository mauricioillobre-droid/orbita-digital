"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReduced } from "@/lib/gsap-utils";

const stats = [
  { prefix: "+", end: 20, suffix: "", label: "Proyectos entregados" },
  { prefix: "",  end: 2,  suffix: "", label: "Especialistas dedicados" },
  { prefix: "<", end: 24, suffix: "h", label: "Tiempo de respuesta" },
];

export default function StatsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: stat.end,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#1a0533] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-3xl text-white mb-1">
                {stat.prefix}
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  {stat.end}
                </span>
                {stat.suffix}
              </p>
              <p className="font-sans text-sm text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
