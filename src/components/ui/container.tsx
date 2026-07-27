import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** "wide" = 120px desktop gutter (content sections). "narrow" = 80px (header/footer/CTA). */
  size?: "wide" | "narrow";
}

export function Container({ children, className, size = "wide" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px]",
        size === "wide"
          ? "px-6 sm:px-10 lg:px-16 xl:px-[120px]"
          : "px-6 sm:px-10 lg:px-12 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
