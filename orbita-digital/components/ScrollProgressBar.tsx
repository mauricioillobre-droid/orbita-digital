"use client";

import { useScroll, motion } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(to right, #7c3aed, #6d28d9)",
      }}
    />
  );
}
