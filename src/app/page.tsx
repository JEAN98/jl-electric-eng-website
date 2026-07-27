import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { IntroSplit } from "@/components/sections/intro-split";
import { Services } from "@/components/sections/services";
import { CtaSection } from "@/components/sections/cta-section";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSplit />
      <Services />
      <CtaSection
        variant="brand"
        heading="Un Solo Responsable para Todo el Proyecto Electromecánico"
        description="Elaboración de presupuestos, ejecución y diseño e inspección no son tres contratos separados: son las tres fases de un mismo proceso de administración de proyectos."
        buttonLabel="Cotizar mi Proyecto por WhatsApp"
        buttonHref={buildWhatsAppLink(
          "Hola, quiero cotizar mi proyecto electromecánico completo.",
        )}
      />
      <Projects />
      <Contact />
      <CtaSection
        variant="dark"
        heading="Cuéntenos en Qué Está Trabajando"
        description="Envíenos los planos o una descripción del proyecto por WhatsApp y le respondemos con el siguiente paso, no con un formulario genérico."
        buttonLabel="Agendar por WhatsApp"
        buttonHref={buildWhatsAppLink(
          "Hola, quiero agendar una llamada para hablar de mi proyecto.",
        )}
        buttonIcon={<ArrowRight className="size-5" aria-hidden />}
        buttonIconPosition="right"
      />
    </>
  );
}
