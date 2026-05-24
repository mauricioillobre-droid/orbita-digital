"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    // Solo en dispositivos con mouse (no táctiles)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setActive(true);
    document.documentElement.setAttribute("data-custom-cursor", "true");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest(
        "a, button, [role='button'], input, textarea, select, label[for]"
      );
      setHovering(!!el);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeAttribute("data-custom-cursor");
    };
  }, [mouseX, mouseY]);

  if (!active) return null;

  return (
    <>
      {/* Punto sólido — sigue exacto */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[500] pointer-events-none rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 6 : 7,
          height: hovering ? 6 : 7,
          backgroundColor: hovering ? "#7c3aed" : "#0b0f17",
        }}
      />

      {/* Aro exterior — sigue con retraso */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[499] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          border: `1.5px solid ${hovering ? "rgba(124,58,237,0.7)" : "rgba(11,15,23,0.25)"}`,
          backgroundColor: hovering ? "rgba(124,58,237,0.06)" : "transparent",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />
    </>
  );
}
