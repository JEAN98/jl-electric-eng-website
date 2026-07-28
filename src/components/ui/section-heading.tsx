import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "brand" | "ink";
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "brand",
  align = "left",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-ink text-sm font-semibold tracking-[0.02em] uppercase">
          {eyebrow}
        </p>
      )}
      {/* text-brand (#F5B301) fails WCAG AA (1.7:1) on the light section backgrounds this heading
          is always used on; accent-gold-ink keeps the gold identity at a readable 4.8:1. */}
      <h2
        className={cn(
          "font-heading text-4xl leading-[1.15] font-bold text-balance sm:text-5xl lg:text-6xl",
          tone === "brand" ? "text-accent-gold-ink" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[700px] text-lg text-neutral-700 sm:text-xl lg:text-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
