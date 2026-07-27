"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildWhatsAppLink, navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-ink-deep sticky top-0 z-50 border-b border-[#212121]">
      <Container size="narrow">
        <div className="flex h-20 items-center justify-between lg:h-[100px]">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/icons/brand/logo-mark.svg"
              alt=""
              width={40}
              height={41}
              className="h-9 w-9 lg:h-12 lg:w-12"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="sr-only">{siteConfig.name} — Inicio</span>
              <Image
                src="/icons/brand/logo-wordmark.svg"
                alt=""
                width={140}
                height={21}
                aria-hidden
                className="h-4 w-auto lg:h-5"
                priority
              />
              <span aria-hidden className="mt-1 text-[9px] text-white lg:text-[10px]">
                Ingeniería y Construcción
              </span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[15px] font-medium text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand focus-visible:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button
              href={buildWhatsAppLink(
                "Hola, quiero cotizar un proyecto electromecánico.",
              )}
              icon={<MessageCircle className="size-[18px]" aria-hidden />}
            >
              Cotizar por WhatsApp
            </Button>
          </div>

          <button
            type="button"
            className="rounded-btn inline-flex items-center justify-center p-2 text-white lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="size-6" aria-hidden />
            ) : (
              <Menu className="size-6" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="bg-ink-deep overflow-hidden border-t border-[#212121] lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container size="narrow" className="flex flex-col gap-6 py-6">
              <nav aria-label="Principal móvil">
                <ul className="flex flex-col gap-4 text-base font-medium text-white">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-brand block py-1 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                href={buildWhatsAppLink(
                  "Hola, quiero cotizar un proyecto electromecánico.",
                )}
                icon={<MessageCircle className="size-[18px]" aria-hidden />}
                className="w-full"
              >
                Cotizar por WhatsApp
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
