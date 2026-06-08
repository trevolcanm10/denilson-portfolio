"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  /** Wrapper element: por defecto "span" para insertar en h1 */
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  /** Si true, anima al cargar (no al entrar en viewport) */
  initial?: boolean;
}

/**
 * B2: Divide un string por palabras y anima cada una con stagger.
 * Respeta prefers-reduced-motion.
 */
export function SplitText({
  text,
  className,
  as = "span",
  delay = 0,
  stagger = 0.05,
  initial = false,
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className}>
        {words.join(" ")}
      </Tag>
    );
  }

  const motionProps = initial
    ? { initial: "hidden" as const, animate: "show" as const }
    : {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10%" },
      };

  const MotionTag = motion[as] as typeof motion.span;

  return (
    <MotionTag className={className} variants={container} {...motionProps}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}

interface SplitLineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  initial?: boolean;
}

/** Variante: anima cada hijo inmediato como línea */
export function SplitLines({
  children,
  className,
  delay = 0,
  stagger = 0.06,
  initial = false,
}: SplitLineProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const motionProps = initial
    ? { initial: "hidden" as const, animate: "show" as const }
    : {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10%" },
      };

  // Asumimos que children es un array; clonamos cada hijo envolviéndolo con variants
  const arr = Array.isArray(children) ? children : [children];

  return (
    <motion.div className={className} variants={container} {...motionProps}>
      {arr.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
