"use client";

/**
 * AnimatedPageHero — client component for page-level hero headings.
 * Renders the eyebrow + h1 with GSAP on-mount word-reveal animation.
 * Imported by server-component pages that need to keep `export const metadata`.
 */
import { useEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReduced, splitWords } from "@/lib/gsap-utils";

interface AnimatedPageHeroProps {
  eyebrow: string;
  /** Content of the h1 — can include <span> for colored text */
  children: ReactNode;
  titleClassName?: string;
}

export default function AnimatedPageHero({
  eyebrow,
  children,
  titleClassName = "font-display font-bold text-4xl sm:text-6xl text-[#0b0f17] mb-6 leading-tight",
}: AnimatedPageHeroProps) {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      // Above-the-fold: use delay instead of ScrollTrigger
      gsap.fromTo(eyebrowRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 }
      );

      if (titleRef.current) {
        const words = splitWords(titleRef.current);
        gsap.fromTo(words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.45 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <span
        ref={eyebrowRef}
        className="inline-block text-[#7c3aed] font-sans font-medium text-xs tracking-[0.18em] uppercase mb-5"
      >
        {eyebrow}
      </span>
      <h1 ref={titleRef} className={titleClassName}>
        {children}
      </h1>
    </>
  );
}
