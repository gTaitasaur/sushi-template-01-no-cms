# Resumen Técnico del Proyecto — New Roll Sushi

## 1. Arquitectura y Stack

- **Framework:** Astro 7 (SSG, cero JS por defecto)
- **Gestor paquetes:** pnpm (no usar npm)
- **Lenguaje:** TypeScript
- **Estilos:** CSS nativo con variables de diseño (tokens.css)
- **Hosting:** Cloudflare Pages

Patrón Feature-Based + Domain-Driven con Content Collections, escalable a N sucursales.

## 2. Estructura de Directorios

```
src/
├── assets/images/       # Imágenes optimizadas (webp)
│   ├── hero/
│   ├── gallery/
│   └── menu/
├── components/
│   ├── ui/              # Button, Card, Badge, WhatsappFab
│   ├── layout/          # Header, Nav, Footer, CartDrawer, ProductDetailDrawer
│   └── sections/        # Hero, Menu, Gallery, Contact
├── content/
│   ├── config.ts        # Schemas Zod (menu, locations)
│   ├── menu/            # 27 items JSON del menú
│   └── locations/       # Sucursales (1 actual: Temuco)
├── layouts/
│   └── BaseLayout.astro # Head, SEO, OG, GA, skip-link
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   └── sucursales/[slug].astro
├── styles/
│   ├── tokens.css       # Variables de color y tipografía
│   └── global.css       # Reset, @font-face, animaciones, prefers-reduced-motion
└── lib/
    └── analytics.ts     # Helper centralizado para eventos GA4
public/
├── fonts/
│   ├── hina-mincho/     # Hina-Mincho-Regular.subset.woff2 (23KB)
│   └── noto-serif-jp/   # NotoSerifJP-{Regular,Medium,Bold}.subset.woff2 (~14KB c/u)
├── robots.txt
└── logo.png
```

## 3. Identidad Visual

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#1A1412` | Fondo general (madera oscura) |
| `--color-text` | `#FBF9F5` | Texto principal (14.8:1 contraste) |
| `--color-text-muted` | `#D1C5C0` | Descripciones, textos secundarios |
| `--color-primary` | `#C83E31` | Rojo linterna — CTAs, badges, acentos |
| `--color-secondary` | `#D9A05B` | Dorado rústico — hover, precios, bordes focus |
| `--color-card-bg` | `#241C1A` | Fondo de tarjetas |
| `--color-card-border` | `#3A2F2B` | Bordes de tarjetas y contenedores |

**Tipografía:**
- `--font-serif`: `'Hina Mincho', 'Noto Serif JP', Georgia, serif` → títulos, navbar, logo, CTA
- `--font-sans`: `'Noto Serif JP', Georgia, 'Times New Roman', serif` → cuerpo, botones, descripciones

Ambas fuentes están subsetteadas a latín básico + diacríticos combinados (~51KB total WOFF2).

## 4. Funcionalidades Clave

- **Hero:** Collage asimétrico con 4 imágenes + texto vertical japonés (ニューロール)
- **Menú:** 9 categorías con filtro por pills, 27 items desde Content Collections
- **Arma tu Roll:** Constructor interactivo con 3 pasos (envoltura, 3 rellenos, topping), límite de selección con feedback visual
- **Carrito + WhatsApp:** Drawer/bottom-sheet responsivo con persistencia localStorage, checkout que genera mensaje detallado para WhatsApp
- **Detalle de producto:** Bottom sheet en móvil al tocar una card del menú
- **Galería:** Grid dinámico zigzag (ancho-angosto-angosto-ancho), captions en hover con fade/up
- **Contacto:** Mapa embebido, horarios, estado abierto/cerrado en tiempo real (JS cliente), enlace WhatsApp
- **WhatsApp FAB:** Botón flotante con tooltip para consultas
- **Scroll-reveal:** IntersectionObserver para animaciones de entrada al scrollear
- **Analítica:** GA4 con eventos de click en items del menú, centralizado en `lib/analytics.ts`
- **Accesibilidad:** Skip link, focus-visible global, focus trap en drawers, prefers-reduced-motion, roles ARIA, aria-label

## 5. Comandos

```bash
pnpm install          # Instalar dependencias
pnpm run dev          # Servidor desarrollo (localhost:4321)
pnpm run build        # Compilar a dist/
pnpm run preview      # Previsualizar build local
pnpm astro check      # Análisis de tipos
```

## 6. Despliegue

- **Hosting:** Cloudflare Pages
- **Preset:** Astro
- **Build command:** `pnpm run build`
- **Output:** `dist/`
- **CI/CD:** Automático en push a rama principal
- **Dominio:** Pendiente (placeholder: `sushitemplate.pages.dev`)
- **Analítica:** GA4 — configurar `PUBLIC_GA_MEASUREMENT_ID` en `.env`

## 7. Performance

- Fuentes totales: ~51KB WOFF2 (subseteadas, precargadas)
- Imágenes: formato webp, dimensiones explícitas, lazy loading (excepto hero)
- Dist total build: ~1MB
- Sin frameworks JS pesados — solo vanilla JS en `<script>` tags
- `color-scheme: dark` para scrollbar nativa e inputs en modo oscuro

## 8. Pendientes (post-aprobación)

- [ ] Comprar dominio
- [ ] Configurar GA4 con ID de medición real
- [ ] Deploy a Cloudflare Pages
- [ ] QR personalizado con logo
- [ ] Indexación en Google Search Console
- [ ] UptimeRobot con aviso por correo/WhatsApp
- [ ] Capacitación por videollamada
