"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cúbico
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, target, duration]);

  return count;
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Separa número de sufijo: "50+" → [50, "+"], "100%" → [100, "%"], "24h" → [24, "h"]
  const match = value.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const count = useCountUp(num, 2000, isInView);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-bold text-3xl text-[#0b0f17] mb-1">
        {count}{suffix}
      </p>
      <p className="font-sans text-sm text-[#0b0f17]/40">{label}</p>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(13,71,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main glow blob — azul */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(13,71,255,0.09) 0%, rgba(124,58,237,0.07) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Secondary blob — violeta */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            filter: "blur(70px)",
            transform: "translate(100px, -70px)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7c3aed]/20 bg-[#7c3aed]/6 text-[#7c3aed] text-sm font-sans font-medium">
            <span
              className="w-2 h-2 rounded-full bg-[#7c3aed]"
              style={{ animation: "gradient-pulse 2s ease-in-out infinite" }}
            />
            Agencia Digital · Resultados Reales
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          id="hero-heading"
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#0b0f17] leading-[1.08] tracking-tight mb-6"
        >
          Hacemos crecer tu{" "}
          <span className="text-[#0d47ff]">negocio digital</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="font-sans text-lg sm:text-xl text-[#0b0f17]/55 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Diseño, tecnología y automatización trabajando juntos para escalar tu
          presencia online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2.5 px-8 rounded-full bg-[#0d47ff] hover:bg-[#7c3aed] text-white font-sans font-semibold text-base transition-all duration-300 shadow-xl shadow-[#0d47ff]/25 hover:shadow-[#7c3aed]/25 hover:scale-105"
            style={{ height: "52px" }}
          >
            Hablemos
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <a
            href="#trabajos"
            className="inline-flex items-center gap-2 px-8 rounded-full border border-[#7c3aed]/35 text-[#7c3aed] hover:bg-[#7c3aed]/6 font-sans font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{ height: "52px" }}
          >
            Ver nuestros trabajos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mt-16 pt-12 border-t border-[#0b0f17]/6"
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </motion.div>


    </section>
  );
}
