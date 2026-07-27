import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { buildWhatsAppLink } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";

interface Project {
  image: string;
  category: string;
  location: string;
  title: string;
  description: string;
  /** Desktop grid: how many of the 6 columns this card should span. */
  span: 3 | 2;
}

const projects: Project[] = [
  {
    image: "/images/projects/instalacion-electrica-residencial.jpg",
    category: "Sistema Eléctrico",
    location: "Ciudad Quesada",
    title: "Instalación Eléctrica Residencial",
    description:
      "Montaje completo de acometidas, tableros de distribución, canalizaciones ocultas y sistemas de iluminación inteligente.",
    span: 3,
  },
  {
    image: "/images/projects/proteccion-integrada.jpg",
    category: "CCTV + Incendios",
    location: "San Carlos",
    title: "Protección Integrada",
    description:
      "Instalación de central de detección de incendios direccionable, sensores ópticos de humo y circuito cerrado de TV de alta definición.",
    span: 3,
  },
  {
    image: "/images/projects/infraestructura-datos.jpg",
    category: "Telecomunicaciones",
    location: "Zona Norte",
    title: "Infraestructura de Datos",
    description:
      "Cableado estructurado Cat6A, gabinetes de telecomunicaciones certificados, fibra óptica e interconexión de nodos activos.",
    span: 2,
  },
  {
    image: "/images/projects/montaje-industrial-trifasico.jpg",
    category: "Planta Industrial",
    location: "Zona Norte",
    title: "Montaje Industrial Trifásico",
    description:
      "Electrificación de naves industriales, tableros de transferencia de potencia y canalizaciones aéreas tipo escalerilla porta-cables.",
    span: 2,
  },
  {
    image: "/images/projects/gestion-inspeccion-obra.jpg",
    category: "Administración",
    location: "San Carlos",
    title: "Gestión e Inspección de Obra",
    description:
      "Auditorías electromecánicas, certificación de planos as-built, supervisión de seguridad operacional y control de calidad.",
    span: 2,
  },
];

const spanClass: Record<Project["span"], string> = {
  3: "lg:col-span-3",
  2: "lg:col-span-2",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-card shadow-project group flex h-full flex-col overflow-hidden border border-neutral-400 bg-white">
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image
          src={withBasePath(project.image)}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge>{project.category}</Badge>
          <p className="text-xs font-semibold text-neutral-700">{project.location}</p>
        </div>
        <h3 className="text-ink text-xl font-semibold">{project.title}</h3>
        <p className="text-sm leading-relaxed text-neutral-600">{project.description}</p>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      aria-label="Proyectos ejecutados"
      className="bg-neutral-bg-alt border-b border-neutral-400 py-16 lg:py-20"
    >
      <Container size="wide" className="flex flex-col gap-10 lg:gap-12">
        <Reveal className="border-b border-neutral-500 pb-6">
          <SectionHeading
            eyebrow="Portafolio de Ingeniería"
            title="Proyectos Ejecutados"
            tone="ink"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} index={index} className={spanClass[project.span]}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-card bg-ink flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 lg:max-w-[786px]">
            <p className="text-brand text-xl font-extrabold sm:text-2xl">
              ¿Tiene un Proyecto en Mente?
            </p>
            <p className="text-base text-white">
              ¿Ya tiene los planos o solo tiene una idea? En ambos casos podemos ayudarle.
              Trabajamos desde el diagnóstico inicial hasta la entrega final, sin que
              usted tenga que coordinar entre varios proveedores.
            </p>
          </div>
          <Button
            href={buildWhatsAppLink(
              "Hola, tengo un proyecto en mente y quiero contarles los detalles.",
            )}
            icon={<MessageCircle className="size-[18px]" aria-hidden />}
            className="w-fit shrink-0"
          >
            Contáctanos por WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
