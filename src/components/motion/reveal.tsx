"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger helper: pass the item index (delay = index * 0.08s, capped). */
  index?: number;
  /** Starting vertical offset in px. */
  y?: number;
}

export function Reveal({ children, className, index = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index * 0.08, 0.32),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
