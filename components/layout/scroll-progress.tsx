"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra superior fija que indica el progreso de scroll.
 * Animada con spring para suavizar el movimiento.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "0 0",
      }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-primary"
    />
  );
}
