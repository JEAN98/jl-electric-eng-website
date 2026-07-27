import { type ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  id?: string;
  variant: "brand" | "dark";
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonIcon?: ReactNode;
  buttonIconPosition?: "left" | "right";
}

export function CtaSection({
  id,
  variant,
  heading,
  description,
  buttonLabel,
  buttonHref,
  buttonIcon,
  buttonIconPosition = "left",
}: CtaSectionProps) {
  const isBrand = variant === "brand";

  return (
    <section
      id={id}
      aria-label={heading}
      className={cn("py-16 lg:py-20", isBrand ? "bg-brand shadow-banner" : "bg-ink")}
    >
      <Container size="narrow">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2
            className={cn(
              "font-heading max-w-[900px] text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-[44px]",
              isBrand ? "text-ink" : "text-brand",
            )}
          >
            {heading}
          </h2>
          <p
            className={cn(
              "max-w-[800px] text-base leading-relaxed sm:text-lg lg:text-xl",
              isBrand ? "text-ink/80" : "text-white",
            )}
          >
            {description}
          </p>
          <Button
            href={buttonHref}
            variant={isBrand ? "dark" : "brand"}
            radius={isBrand ? "cta" : "pill"}
            icon={buttonIcon}
            iconPosition={buttonIconPosition}
            className="mt-2"
          >
            {buttonLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
