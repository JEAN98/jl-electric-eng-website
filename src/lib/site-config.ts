export const siteConfig = {
  /** Current live GitHub Pages URL. Update alongside next.config.ts's basePath if a custom domain goes live. */
  url: "https://jean98.github.io/jl-electric-eng-website",
  name: "ElectroVega",
  legalName: "ElectroVega Constructora Electromecánica",
  taxId: "2-0805-0133",
  location: "Ciudad Quesada, San Carlos, Costa Rica",
  whatsappNumber: "50684649466",
  whatsappDisplay: "+506 8464-9466",
  whatsappShort: "8464-9466",
  email: "lvega@electrovegacr.com",
  facebook: "ElectroVega",
} as const;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
] as const;
