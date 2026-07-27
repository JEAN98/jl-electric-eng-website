import { type ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="border-brand bg-brand/5 text-accent-gold-ink inline-flex items-center rounded-full border px-2 py-1 text-[11px] font-semibold tracking-wide uppercase">
      {children}
    </span>
  );
}
