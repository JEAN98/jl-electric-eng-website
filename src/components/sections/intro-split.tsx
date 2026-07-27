import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { buildWhatsAppLink } from "@/lib/site-config";

export function IntroSplit() {
  return (
    <section
      id="nosotros"
      aria-label="Un solo contratista para tu proyecto"
      className="bg-neutral-bg border-b border-neutral-400 py-16 lg:py-20"
    >
      <Container size="wide">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <Reveal className="flex flex-1 flex-col items-start gap-6 lg:max-w-[577px]">
            <h2 className="font-heading text-ink text-3xl leading-[1.2] font-semibold text-balance sm:text-4xl">
              Un Solo Contratista para tu Proyecto Electromecánico, en Cualquier Parte del
              País
            </h2>
            <p className="text-lg leading-relaxed text-neutral-700">
              Viajamos a donde esté tu proyecto, en cualquier parte del país, con el mismo
              estándar de trabajo.
            </p>
            <Button
              href={buildWhatsAppLink(
                "Hola, tengo un proyecto electromecánico y quiero más información.",
              )}
              icon={<MessageCircle className="size-[18px]" aria-hidden />}
            >
              Contáctanos por WhatsApp
            </Button>
          </Reveal>

          <Reveal
            index={1}
            className="rounded-photo relative aspect-[588/512] w-full overflow-hidden border border-neutral-400 lg:max-w-[588px]"
          >
            <Image
              src="/images/team/jose-leandro-vega.jpg"
              alt="Ing. José Leandro Vega, fundador de ElectroVega, en las instalaciones de la empresa"
              fill
              sizes="(min-width: 1024px) 588px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
