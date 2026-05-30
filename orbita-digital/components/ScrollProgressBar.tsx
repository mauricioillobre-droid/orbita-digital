"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap-utils";

const SECTIONS = [
  { id: "inicio",    label: "Inicio" },
  { id: "stats",     label: "Stats" },
  { id: "servicios", label: "Servicios" },
  { id: "trabajos",  label: "Trabajos" },
  { id: "equipo",    label: "Equipo" },
  { id: "cta",       label: "Contacto" },
];

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const updateBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", updateBar, { passive: true });

    const triggers: ReturnType<typeof ScrollTrigger.create>[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(id),
        onEnterBack: () => setActive(id),
      });
      triggers.push(st);
    });

    return () => {
      window.removeEventListener("scroll", updateBar);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none">
        <div
          ref={barRef}
          className="h-full"
          style={{
            background: "linear-gradient(to right, #7c3aed, #0d47ff)",
            width: "0%",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <div className="fixed top-[3px] left-0 right-0 z-[9998] hidden md:flex justify-center pointer-events-none">
        <div className="flex gap-4 px-4 py-[3px]">
          {SECTIONS.map(({ id, label }) => (
            <span
              key={id}
              style={{
                fontSize: "9px",
                fontWeight: active === id ? 700 : 400,
                color: active === id ? "#7c3aed" : "transparent",
                transition: "color 0.3s ease, font-weight 0.3s ease",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
