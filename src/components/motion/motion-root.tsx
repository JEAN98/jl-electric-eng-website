"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * `reducedMotion="user"` makes every Framer Motion animation in the tree honor the
 * OS-level `prefers-reduced-motion` setting automatically, without per-component checks.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
