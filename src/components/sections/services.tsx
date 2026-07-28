import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { buildWhatsAppLink } from "@/lib/site-config";

interface Service {
  number: string;
  title: string;
  feature: string;
  advantage: string;
  benefit: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Elaboración de Presupuestos Electromecánicos",
    feature:
      "Cuantificación de materiales y análisis de costos para presupuestos detallados, listos para licitación.",
    advantage:
      "El presupuesto refleja los costos reales del proyecto, incluyendo los materiales, la mano de obra y los equipos necesarios para su correcta ejecución.",
    benefit:
      "Sabe con qué cifra está trabajando antes de arrancar la obra, no hay sorpresas de costo a mitad de proyecto.",
  },
  {
    number: "02",
    title: "Ejecución de Proyectos Electromecánicos",
    feature:
      "Instalaciones eléctricas y sistemas electromecánicos con supervisión y control de obra propios.",
    advantage:
      "Un solo equipo gestiona presupuesto, materiales y mano de obra; cualquier ajuste en sitio se resuelve sin esperar aprobaciones de terceros.",
    benefit:
      "Te enviamos los cronogramas del proyecto, submittal, garantías de 1 año, capacitaciones, planos as-built, minutas de inspección y pruebas.",
  },
  {
    number: "03",
    title: "Diseño e Inspección de Proyectos",
    feature:
      "Elaboración de planos eléctricos, memorias de cálculo, inspecciones de avance en sitio y certificación de cumplimiento con el Código Eléctrico Nacional.",
    advantage:
      "Diseños que se aplican a las normativas vigentes, como la NFPA, garantizando así la seguridad y el cumplimiento de los estándares requeridos.",
    benefit:
      "Entrega documentada, con control de calidad verificado, no solo instalado, sino revisado.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const whatsappHref = buildWhatsAppLink(
    `Hola, quiero solicitar información sobre "${service.title}".`,
  );

  return (
    <article className="rounded-card bg-ink shadow-card flex flex-col gap-10 p-8 sm:p-10 lg:p-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[30px]">
        <span
          className="font-heading text-brand text-5xl leading-none font-bold sm:text-6xl"
          aria-hidden
        >
          {service.number}
        </span>
        <h3 className="font-heading text-2xl leading-snug font-bold text-balance text-white sm:text-3xl lg:text-[40px]">
          {service.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-brand text-[11px] font-semibold tracking-wide uppercase">
            Característica
          </p>
          <p className="text-base leading-relaxed text-white">{service.feature}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-brand text-[11px] font-semibold tracking-wide uppercase">
            Ventaja
          </p>
          <p className="text-base leading-relaxed text-white">{service.advantage}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-brand text-[11px] font-semibold tracking-wide uppercase">
            Beneficio
          </p>
          <p className="text-base leading-relaxed text-white">{service.benefit}</p>
        </div>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand hover:text-brand-hero inline-flex w-fit items-center text-base font-semibold transition-colors"
      >
        Solicitar información →
      </a>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      aria-label="Nuestros servicios"
      className="bg-neutral-bg-alt border-b border-neutral-400 py-16 lg:py-20"
    >
      <Container size="wide" className="flex flex-col gap-16 lg:gap-20">
        <Reveal>
          <SectionHeading
            title="Lo que Hacemos, de Principio a Fin"
            description="Presupuesto, ejecución e inspección con un solo responsable. Sin coordinar entre múltiples contratistas ni perder trazabilidad entre fases."
            descriptionClassName="max-w-full sm:max-w-[900px]"
          />
        </Reveal>
        <div className="flex flex-col gap-10">
          {services.map((service, index) => (
            <Reveal key={service.number} index={index}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
