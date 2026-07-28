import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { buildWhatsAppLink } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";

const stats = [
  { value: "6", label: "Proyectos Electromecánicos Incluidos" },
  { value: "4", label: "Años de Experiencia" },
  { value: "3", label: "Tipos diferentes de Servicios" },
];

export function Hero() {
  return (
    <section id="inicio" aria-label="Presentación" className="bg-ink-deep">
      <div className="relative isolate flex min-h-[600px] items-center overflow-hidden py-20 sm:min-h-[720px] lg:min-h-[833px]">
        <Image
          src={withBasePath("/images/hero/hero-panel.jpg")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="bg-ink-deep/85 md:bg-transparent md:from-ink-deep md:via-ink-deep/45 md:to-ink-deep/10 absolute inset-0 md:bg-gradient-to-r"
        />

        <Container size="narrow" className="relative">
          <Reveal className="flex max-w-[620px] flex-col items-start gap-8" y={16}>
            <div className="flex items-center gap-3">
              <span aria-hidden className="bg-brand-hero h-0.5 w-8" />
              <p className="text-brand-hero text-xs font-bold tracking-widest uppercase">
                Ingeniería de Vanguardia
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-heading text-4xl leading-[1.1] font-bold text-balance text-white sm:text-5xl lg:text-[52px]">
                Ingeniería y Construcción Electromecánica desde San Carlos, para Todo
                Costa Rica
              </h1>
              <p className="max-w-[580px] text-base leading-relaxed text-neutral-400">
                Presupuestos, ejecución, diseño e inspección de proyectos eléctricos y
                electromecánicos. Con base en San Carlos, viajamos a cualquier parte del
                país.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Button
                href={buildWhatsAppLink(
                  "Hola, quiero información sobre sus servicios de ingeniería electromecánica.",
                )}
                variant="hero"
                radius="btn"
                icon={<MessageCircle className="size-[18px]" aria-hidden />}
              >
                Escríbenos por WhatsApp
              </Button>
              <a
                href="#servicios"
                className="hover:text-brand-hero inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors"
              >
                Ver servicios
                <ChevronDown className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container size="narrow" className="py-10">
        <div className="bg-brand/90 h-0.5 w-full" aria-hidden />
        <dl className="grid grid-cols-1 gap-10 py-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} index={index} className="flex flex-col gap-2">
              <dd className="text-shadow-stat font-heading text-brand text-6xl leading-none font-bold sm:text-7xl">
                {stat.value}
              </dd>
              <dt className="text-sm font-semibold text-white">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
        <div className="bg-brand/90 h-0.5 w-full" aria-hidden />
      </Container>
    </section>
  );
}
