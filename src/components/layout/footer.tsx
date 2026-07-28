import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/icons/whatsapp-icon";
import { buildWhatsAppLink, navLinks, siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-10 pb-10">
      <Container size="narrow" className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src={withBasePath("/icons/brand/logo-mark.svg")}
              alt=""
              width={48}
              height={49}
              className="h-11 w-11"
            />
            <span className="flex flex-col leading-none">
              <span className="sr-only">{siteConfig.name} — Inicio</span>
              <Image
                src={withBasePath("/icons/brand/logo-wordmark.svg")}
                alt=""
                width={155}
                height={23}
                aria-hidden
                className="h-[18px] w-auto"
              />
              <span aria-hidden className="mt-1.5 text-[10px] text-neutral-400">
                Ingeniería y Construcción
              </span>
            </span>
          </a>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            href={buildWhatsAppLink("Hola, quiero cotizar un proyecto electromecánico.")}
            variant="outline-brand"
            radius="cta"
            icon={<WhatsAppIcon className="size-[18px]" />}
            className="text-sm"
          >
            Cotizar por WhatsApp
          </Button>
        </div>

        <hr className="border-white/15" />

        <div className="flex flex-col gap-2 text-xs text-neutral-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.legalName} · {siteConfig.location}
          </p>
          <p>
            © {year} {siteConfig.legalName} · Cédula Jurídica: {siteConfig.taxId}
          </p>
        </div>
      </Container>
    </footer>
  );
}
