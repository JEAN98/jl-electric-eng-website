import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon } from "@/components/ui/icons/facebook-icon";
import { WhatsAppIcon } from "@/components/ui/icons/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const contactItems = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: siteConfig.whatsappShort,
    href: buildWhatsAppLink("Hola, quiero más información sobre ElectroVega."),
  },
  {
    icon: Mail,
    label: "Correo",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: siteConfig.whatsappDisplay,
    href: `tel:+${siteConfig.whatsappNumber}`,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: siteConfig.facebook,
    href: "https://facebook.com/ElectroVega",
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      aria-label="Contacto y sobre nosotros"
      className="bg-neutral-bg py-16 lg:py-20"
    >
      <Container size="wide" className="flex flex-col gap-16 lg:gap-20">
        <Reveal>
          <SectionHeading
            title="¿Listo para Empezar? Hablemos"
            description="Escríbanos por WhatsApp con lo que tenga a mano: planos, fotos del sitio o solo una descripción y le respondemos directamente con los próximos pasos. Sin formularios, sin esperar días."
            descriptionClassName="max-w-full sm:max-w-[700px]"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm tracking-[0.06em] text-neutral-700 uppercase">
                Sobre Nosotros
              </p>
              <h3 className="font-heading text-ink text-3xl font-bold sm:text-4xl">
                Ing. José Leandro Vega
              </h3>
              <p className="text-ink text-base font-semibold">
                Ingeniero Eléctrico | Fundador
              </p>
            </div>
            <p className="text-lg leading-relaxed text-neutral-700">
              Con más de 4 años al frente de ElectroVega y una trayectoria profesional
              forjada en empresas como CMC Electromecánica, GS Electromecánica y EMECSA
              Electromecánica, me apasiona entregar soluciones confiables y eficientes
              para residencias, comercios e industrias. Hemos trabajado con clientes como
              Walmart, FEMSA Coca-Cola, Grupo Q, McDonald&apos;s y el Poder Judicial. Mi
              enfoque es claro: calidad técnica, ejecución puntual y un servicio cercano
              que te haga sentir acompañado desde el diagnóstico hasta la entrega final.
            </p>
            <Button
              href={buildWhatsAppLink(
                "Hola, quiero cotizar un proyecto con ElectroVega.",
              )}
              icon={<WhatsAppIcon className="size-6" />}
              className="w-full justify-center py-6 text-lg"
            >
              Cotiza por WhatsApp
            </Button>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm tracking-[0.06em] text-neutral-700 uppercase">
                Contacto
              </p>
              <h3 className="font-heading text-ink text-3xl font-bold sm:text-4xl">
                Estamos aquí para ayudarte
              </h3>
            </div>

            <ul className="flex flex-col gap-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-5">
                  <span
                    aria-hidden
                    className="bg-brand text-ink flex size-12 shrink-0 items-center justify-center rounded-full"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-xs text-neutral-700">{label}</p>
                    <a
                      href={href}
                      className="text-ink hover:text-brand text-lg font-semibold transition-colors"
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
