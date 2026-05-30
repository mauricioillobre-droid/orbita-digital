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
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        const bar = barRefs.current[i];
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

        if (bar) {
          gsap.fromTo(bar,
            { width: "0px" },
            {
              width: "80px",
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="stats" className="bg-[#1a0533] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  inset: 0,
                  background: "radial-gradient(ellipse 120px 60px at center, rgba(124,58,237,0.22), transparent)",
                }}
              />
              <p className="font-display font-bold text-3xl text-white mb-1 relative">
                {stat.prefix}
                <span
                  ref={(el) => { numRefs.current[i] = el; }}
                  style={{ textShadow: "0 0 30px rgba(167,139,250,0.70)" }}
                >
                  {stat.end}
                </span>
                {stat.suffix}
              </p>
              <p className="font-sans text-sm text-white/45 mb-2">{stat.label}</p>
              <div className="flex justify-center">
                <div
                  ref={(el) => { barRefs.current[i] = el; }}
                  style={{
                    background: "linear-gradient(to right, #7c3aed, #a78bfa)",
                    borderRadius: "2px",
                    height: "2px",
                    width: "0px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
