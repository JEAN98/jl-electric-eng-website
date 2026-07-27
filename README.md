# ElectroVega — Landing Page

Landing page de **ElectroVega Constructora Electromecánica** (San Carlos, Costa Rica),
implementada a partir del diseño de Figma
["primer draft del sitio"](https://www.figma.com/design/LJqlEfxqn2Q0gN1LM2yS46/primer-draft-del-sitio?node-id=57-2).

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** — configuración _CSS-first_ vía `@theme` (no `tailwind.config.ts`; ver [Tokens de diseño](#tokens-de-diseño-figma--código))
- **Framer Motion** — scroll-reveal y micro-interacciones
- **next/font** — Oswald + Inter, autohospedadas, `display: swap`
- **next/image** — optimización, `srcset` y formatos modernos automáticos
- **ESLint** (`eslint-config-next`) + **Prettier** (`prettier-plugin-tailwindcss`)

## Cómo correr el proyecto

```bash
npm install
npm run dev       # http://localhost:3000

npm run build      # build de producción
npm run start       # sirve el build de producción
npm run lint         # ESLint
npm run format       # Prettier --write
npm run format:check # Prettier --check
```

## Estructura de carpetas

```
src/
  app/
    layout.tsx        # Metadata, next/font, MotionRoot, Header/Footer
    page.tsx           # Ensambla las secciones de la landing
    globals.css        # Tokens de diseño (@theme) + estilos base
  components/
    ui/                 # Átomos reutilizables: Button, Container, SectionHeading, Badge, icons/
    layout/              # Header (con menú móvil) y Footer
    motion/                # MotionRoot (prefers-reduced-motion) y Reveal (scroll-reveal)
    sections/               # Una sección de la landing = un componente:
                              # hero, intro-split, services, cta-section, projects, contact
  lib/
    site-config.ts        # Nav links, datos de contacto, helper de enlaces de WhatsApp
    utils.ts                # cn() (clsx)
public/
  images/                  # Fotos (hero, equipo, proyectos) — JPEG optimizado
  icons/brand/              # Isotipo y logotipo, SVG
design-tokens.md             # Fuente de verdad de los tokens extraídos de Figma
```

Cada sección del LP (`Hero`, `IntroSplit`, `Services`, `CtaSection`, `Projects`, `Contact`)
es un **Server Component** independiente; solo los elementos que necesitan interactividad
o animación (`Button`, `Reveal`, el menú móvil del `Header`) son **Client Components**,
para minimizar el JS enviado al cliente.

## Tokens de diseño (Figma → código)

El archivo de Figma no define _variables/estilos_ nativos, así que los tokens (color,
tipografía, radios, sombras, espaciado) se extrajeron manualmente de las capas y quedaron
documentados en [`design-tokens.md`](./design-tokens.md), que es la fuente de verdad.

Esos tokens se mapean 1:1 a Tailwind v4 mediante el bloque `@theme` en `src/app/globals.css`
(en vez de `tailwind.config.ts` + clases arbitrarias sueltas). Por ejemplo:

```css
@theme {
  --color-brand: #f5b301; /* → bg-brand, text-brand, border-brand */
  --color-brand-hero: #f5a623; /* → bg-brand-hero (solo en el Hero) */
  --color-ink: #212121; /* → bg-ink, text-ink */
  --font-heading: var(--font-oswald), sans-serif; /* → font-heading */
  --radius-card: 12px; /* → rounded-card */
  --shadow-card: 0px 14px 16px rgba(0, 0, 0, 0.15); /* → shadow-card */
}
```

## Decisiones técnicas

- **Tailwind v4 CSS-first**: el proyecto se generó con `create-next-app@latest`, que ya
  usa Tailwind v4. Se optó por extender el theme vía `@theme` en CSS (el mecanismo nativo
  de v4) en vez de forzar un `tailwind.config.ts` legacy.
- **Un solo componente `CtaSection`** para las dos bandas de llamado a la acción del
  diseño (la amarilla "Un Solo Responsable..." y la oscura "Cuéntenos en Qué Está
  Trabajando"), parametrizado por `variant`, en vez de duplicar markup.
- **Enlaces de WhatsApp contextuales**: cada CTA arma su propio mensaje prellenado
  (`buildWhatsAppLink` en `lib/site-config.ts`) según la sección/servicio desde el que
  se hace clic, siguiendo el enfoque "sin formularios" del sitio original.
- **Iconografía genérica vía `lucide-react`** (WhatsApp, correo, teléfono, flechas,
  chevron) en lugar de exportar cada glifo de Figma. El **logo real de la marca** (isotipo
  - logotipo) sí se usa tal cual, exportado como SVG. El ícono de Facebook se implementó
    como SVG local (`components/ui/icons/facebook-icon.tsx`) porque `lucide-react` v1
    eliminó los glifos de marcas. Detalle completo en `design-tokens.md`.
- **`Reveal` como único primitivo de animación**: un wrapper `whileInView` (fade + slide,
  se dispara una sola vez) reutilizado en todas las secciones, con un `index` opcional
  para escalonar listas (tarjetas de servicios/proyectos). Evita siete implementaciones
  de scroll-reveal distintas.
- **`MotionConfig reducedMotion="user"`** en el layout raíz: respeta
  `prefers-reduced-motion` de forma global, sin condicionales manuales en cada componente.
- **Grid de proyectos**: reproduce el patrón 2-luego-3 del diseño desktop con
  `grid-cols-6` + `col-span-3`/`col-span-2` en `lg:`, colapsando a 2 columnas en tablet y
  1 en mobile.

## Accesibilidad (WCAG 2.1 AA)

- [x] Un único `<h1>` (Hero); jerarquía `h1 → h2 → h3` sin saltos, verificada con el árbol
      de accesibilidad del navegador.
- [x] HTML semántico: `header`, `nav` (con `aria-label` diferenciado desktop/móvil),
      `main`, `section` (todas con `aria-label`), `footer`.
- [x] Imágenes decorativas con `alt=""`; imágenes con contenido con `alt` descriptivo.
- [x] Contraste de color validado por Lighthouse/axe (categoría Accessibility: **100/100**,
      0 issues).
- [x] Navegación completa por teclado; `:focus-visible` con contorno de 2px en todo el
      sitio (`globals.css`).
- [x] Menú móvil con `aria-expanded`, `aria-controls` y `aria-label` dinámico.
- [x] `prefers-reduced-motion` respetado globalmente (Framer Motion `MotionConfig`).
- [x] Sin formularios (el sitio es 100% WhatsApp/correo/teléfono por diseño).
- [x] Auditado con **Lighthouse** (`chrome-devtools` MCP) en modo _navigation_, desktop y
      mobile, sobre el build de producción: **0 audits fallidos** en ambos.

Durante la auditoría se encontró y corrigió 1 hallazgo real: el logo del header/footer
tenía un `aria-label` que no incluía el texto visible "Ingeniería y Construcción"
(regla axe `label-content-name-mismatch`, WCAG 2.5.3). Se corrigió dejando que el nombre
accesible se derive del contenido real del enlace.

## Rendimiento y SEO

- `next/image` en todas las imágenes (lazy-loading, `sizes` responsive, AVIF/WebP
  automático); `priority` solo en el logo y la imagen del Hero (LCP).
- `next/font` con `display: swap` para Oswald e Inter — cero fuentes bloqueantes, cero CLS
  por fuentes.
- Metadata completa en `layout.tsx`: `title` con template, `description`, `keywords`,
  Open Graph, Twitter Card, `robots`.
- **Resultados de Lighthouse** (build de producción, `localhost`, sin throttling de red):

  | Categoría      | Desktop | Mobile |
  | -------------- | ------- | ------ |
  | Accessibility  | 100     | 100    |
  | Best Practices | 100     | 100    |
  | SEO            | 100     | 100    |
  | LCP (trace)    | 92 ms   | —      |
  | CLS (trace)    | 0.00    | —      |

  > Nota: al no correr contra un dominio público no hay datos de campo (CrUX); las
  > métricas de performance provienen del trace de Chrome DevTools sobre el build de
  > producción local, sin throttling — sirven como señal de que no hay cuellos de botella
  > evidentes (LCP y CLS excelentes, sin recursos render-blocking relevantes), pero deben
  > reconfirmarse contra el dominio real una vez desplegado.

## Diferencias frente al diseño original de Figma

1. **Iconos genéricos → `lucide-react`** en vez de exports 1:1 de Figma (ver
   [Decisiones técnicas](#decisiones-técnicas)). El logo de marca sí es fiel al original.
2. **Dos amarillos preservados tal cual** (`#F5B301` dorado principal y `#F5A623` ámbar,
   usado solo en el Hero): es una inconsistencia real del archivo de Figma, no un error;
   se documentó y se mantuvo en vez de unificar arbitrariamente.
3. **Botones "Solicitar información" de cada servicio** y el envío del formulario de
   contacto se implementaron como enlaces de WhatsApp con mensaje contextual (el diseño no
   especifica su destino; es la interpretación más consistente con el resto del sitio,
   que es 100% WhatsApp-first).
4. **Breakpoints**: Figma solo define el frame desktop (1440px); mobile/tablet se
   construyeron mobile-first con los breakpoints estándar de Tailwind (`sm/md/lg/xl`), sin
   variantes explícitas en el archivo de origen.

Todo el resto (copys, jerarquía tipográfica, colores, espaciados, radios, sombras y layout)
se reprodujo fielmente — ver captura por captura en `design-tokens.md`.
# jl-electric-eng-website
