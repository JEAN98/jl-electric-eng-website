"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "brand" | "hero" | "dark" | "outline-brand";
type ButtonRadius = "btn" | "cta" | "pill";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  /** Set to false for same-page anchor links (e.g. "#servicios"). */
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  brand: "bg-brand text-ink shadow-brand-cta hover:bg-[#dba401] active:bg-[#c79300]",
  hero: "bg-brand-hero text-ink-deep hover:bg-[#e0961a] active:bg-[#cc8813]",
  dark: "bg-ink text-white hover:bg-black active:bg-black",
  "outline-brand":
    "border border-brand text-brand hover:bg-brand hover:text-ink active:bg-[#dba401]",
};

const radiusStyles: Record<ButtonRadius, string> = {
  btn: "rounded-btn",
  cta: "rounded-cta",
  pill: "rounded-pill-cta",
};

export function Button({
  children,
  href,
  variant = "brand",
  radius = "cta",
  icon,
  iconPosition = "left",
  className,
  external = true,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ease-out sm:text-base",
        variantStyles[variant],
        radiusStyles[radius],
        className,
      )}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </motion.a>
  );
}
