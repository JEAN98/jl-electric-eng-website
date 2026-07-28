import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
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
      <h2 className="font-heading text-ink text-4xl leading-[1.15] font-bold text-balance sm:text-5xl lg:text-6xl">
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
