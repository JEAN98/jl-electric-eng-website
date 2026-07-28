# Design Tokens — ElectroVega Landing Page

Fuente: Figma — `primer-draft-del-sitio` — frame `electrovega-landing-page-consolidado` (node `57:2`).
El archivo no define **Estilos/Variables de Figma** (`get_variable_defs` devolvió `{}`), así que todos los
valores abajo se extrajeron directamente de las capas (hex planos, tamaños en px). Este documento es la
fuente de verdad que se mapea 1:1 a `tailwind.config.ts`.

## 1. Color

| Token                                         | Hex       | Uso observado en Figma                                                                                                                                                                                                  |
| --------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.DEFAULT` (dorado)                      | `#F5B301` | CTAs, números de stats, títulos de sección, banda "FinalCTA", acentos de tarjetas                                                                                                                                       |
| `brand.hero` (ámbar)                          | `#F5A623` | Solo dentro del Hero: badge "Ingeniería de Vanguardia" y botón primario. Es un tono ligeramente distinto al dorado principal — inconsistencia real del diseño, se preserva tal cual en vez de forzar un único amarillo. |
| `ink.DEFAULT` (texto oscuro / fondos oscuros) | `#212121` | Texto sobre fondo claro, fondo de tarjetas de servicio, fondo de footer, botones oscuros                                                                                                                                |
| `ink.deep` (navy del header/hero)             | `#0A0E1A` | Fondo del header y overlay del Hero                                                                                                                                                                                     |
| `neutral.700`                                 | `#646463` | Párrafos secundarios sobre fondo claro                                                                                                                                                                                  |
| `neutral.600`                                 | `#575752` | Descripciones de tarjetas de proyecto                                                                                                                                                                                   |
| `neutral.500`                                 | `#8A8A8A` | Divisor bajo el header "Proyectos Ejecutados"                                                                                                                                                                           |
| `neutral.400`                                 | `#CBCBCB` | Bordes claros, subtítulo del logo                                                                                                                                                                                       |
| `neutral.300`                                 | `#CACACA` | Texto del footer inferior                                                                                                                                                                                               |
| `neutral.bg`                                  | `#FAFAFA` | Fondo de secciones claras (intro, contacto)                                                                                                                                                                             |
| `neutral.bg-alt`                              | `#F4F4F4` | Fondo de secciones claras (servicios, proyectos)                                                                                                                                                                        |
| `accent.gold-ink`                             | `#8F6901` | Texto de badges de categoría en tarjetas de proyecto                                                                                                                                                                    |
| `white`                                       | `#FFFFFF` | Texto sobre fondo oscuro, tarjetas de proyecto                                                                                                                                                                          |

Los dos amarillos (`brand.DEFAULT` / `brand.hero`) se modelan como escala `brand.hero` y `brand.DEFAULT` en Tailwind
para no perder fidelidad visual con el archivo original.

## 2. Tipografía

| Familia                          | Uso                                                 | Pesos usados                                                   |
| -------------------------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| **Oswald** (condensada, display) | Todos los títulos (H1–H3), números grandes de stats | SemiBold 600, Bold 700                                         |
| **Inter**                        | Cuerpo de texto, labels, botones, nav               | Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800 |

Cargadas vía `next/font/google` (sin CSS externo, `display: swap`, sin CLS).

### Escala tipográfica observada (px → token Tailwind)

| px Figma | Uso                                              | Token sugerido          |
| -------- | ------------------------------------------------ | ----------------------- |
| 72       | Números de stats del hero                        | `text-7xl`              |
| 64       | H2 de sección (Servicios, Contacto)              | `text-6xl`              |
| 60       | Numeral "01/02/03" en tarjetas de servicio       | `text-6xl` (Inter Bold) |
| 52       | H1 del Hero                                      | `text-5xl md:text-6xl`  |
| 48       | H2 "Proyectos Ejecutados"                        | `text-5xl`              |
| 44       | H2 CTA final oscuro                              | `text-4xl md:text-5xl`  |
| 40       | H2 intro/tarjetas de servicio/nombre en Contacto | `text-4xl`              |
| 22       | Subtítulo de sección (Servicios)                 | `text-xl md:text-2xl`   |
| 20       | Subtítulo FinalCTA / nombre de proyecto          | `text-xl`               |
| 18       | Body grande, botones                             | `text-lg`               |
| 16       | Body estándar                                    | `text-base`             |
| 14–15    | Nav, labels, botones pequeños                    | `text-sm`               |
| 10–13    | Micro-labels, badges, uppercase                  | `text-xs`               |

## 3. Espaciado y layout

- **Grid de contenido:** ancho máximo de página `1440px`; padding lateral de sección típico `120px` desktop
  (se traduce a contenedor `max-w-[1400px]` + `px-6 md:px-10 lg:px-[120px]`).
- **Gaps recurrentes:** `8, 12, 16, 20, 24, 32, 40, 48, 64, 80px` → mapeados a la escala estándar de Tailwind
  (`spacing` ya cubre estos valores; no requiere extensión salvo `4.5, 15` puntuales resueltos con `[]` arbitrario mínimo).
- **Secciones:** padding vertical estándar `80px` (`py-20`), con el header sticky de `100px` de alto.

## 4. Bordes y radios

| Token               | px      | Uso                                                                 |
| ------------------- | ------- | ------------------------------------------------------------------- |
| `rounded-sm` equiv. | 4       | Botón primario del hero                                             |
| `rounded-md`        | 8       | Botones estándar (nav CTA, WhatsApp)                                |
| `rounded-lg`        | 12      | Tarjetas de servicio, tarjetas de proyecto, banner CTA de proyectos |
| `rounded-xl`        | 14      | Botón CTA final ("Agendar por WhatsApp")                            |
| `rounded-2xl`       | 20      | Imagen de la sección intro                                          |
| `rounded-full`      | 48 / 79 | Logo circular, badges tipo pill de categoría                        |

## 5. Sombras

| Token              | Valor                                  | Uso                                                     |
| ------------------ | -------------------------------------- | ------------------------------------------------------- |
| `shadow-btn-hover` | `0px 10px 20px -6px rgba(0,0,0,0.22)`  | Todos los botones (`Button`), solo al hacer hover. **Desviación intencional de Figma:** el original define una sombra dura y estática (`0px 10px 12px rgba(0,0,0,0.2)`, antes `shadow-brand-cta`) solo en el botón del nav; se reemplazó por una sombra suave que aparece solo en hover, consistente en los 4 variantes de botón. |
| `shadow-card`      | `0px 14px 16px rgba(0,0,0,0.15)`       | Tarjetas oscuras de servicio                            |
| `shadow-project`   | `0px 10px 24px -10px rgba(0,0,0,0.08)` | Tarjetas de proyecto                                    |
| `shadow-banner`    | `0px 18px 20px rgba(0,0,0,0.15)`       | Banda amarilla FinalCTA                                 |
| text-shadow        | `0px 6px 16px rgba(0,0,0,0.25)`        | Números grandes de stats (aplicado vía utilidad custom) |

## 6. Breakpoints

El archivo de Figma solo define el frame desktop (`1440px`), sin variantes mobile/tablet explícitas.
Se construye **mobile-first** usando los breakpoints estándar de Tailwind:

| Breakpoint | px        | Uso                                       |
| ---------- | --------- | ----------------------------------------- |
| base       | `<640px`  | Mobile (referencia visual ~375px)         |
| `md`       | `≥768px`  | Tablet                                    |
| `lg`       | `≥1024px` | Desktop pequeño                           |
| `xl`       | `≥1440px` | Desktop grande (ancho de diseño original) |

## 7. Assets descargados

| Carpeta                                        | Contenido                                  | Origen Figma                         |
| ---------------------------------------------- | ------------------------------------------ | ------------------------------------ |
| `public/images/hero/hero-panel.jpg`            | Foto de tablero eléctrico (fondo del Hero) | `hero-variant-diagonal` (112:544)    |
| `public/images/team/jose-leandro-vega.png→jpg` | Retrato del fundador                       | Frame `57:53`                        |
| `public/images/projects/*.jpg` (5)             | Fotos de proyectos ejecutados              | Frames `57:134,143,162,171,180`      |
| `public/icons/brand/logo-mark.svg`             | Isotipo (círculo + rayo)                   | `Group 3` (footer, mayor resolución) |
| `public/icons/brand/logo-wordmark.svg`         | Logotipo "Electrovega" en blanco           | `Electrovega` (footer)               |

**Nota de implementación:** los íconos genéricos de UI (WhatsApp, mail, teléfono, Facebook, flechas, chevron)
se implementan con `lucide-react` en vez de exportarlos 1:1 desde Figma. Son formas estándar sin
identidad de marca; usar una librería de iconos vectoriales mantenida es más accesible (soporte nativo de
`aria-hidden`, tamaño consistente `currentColor`) y evita depender de URLs de export de Figma que expiran a
los 7 días. Esta diferencia queda documentada en el README como desviación intencional respecto al archivo original.

Las fotos se re-exportaron a JPEG optimizado (calidad ~82) para reducir peso; `next/image` generará
automáticamente variantes AVIF/WebP y tamaños responsive (`srcset`) en tiempo de build/petición, por lo que
no se pre-generan versiones WebP manuales.
