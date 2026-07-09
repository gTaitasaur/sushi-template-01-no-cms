# Resumen Técnico del Proyecto — Template Sushi Landing (sin CMS)

## 1. Arquitectura y Stack

- **Framework:** Astro 7 (SSG / `output: 'static'`)
- **Gestor paquetes:** pnpm (no usar npm)
- **Lenguaje:** TypeScript
- **Estilos:** CSS nativo con variables de diseño (tokens.css)
- **Hosting:** Cloudflare Workers (assets estáticos)
- **CI/CD:** Workers Builds conectado a GitHub

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
├── consts.ts            # SITE_TITLE / SITE_DESCRIPTION (desde env vars)
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

## 5. Variables de Entorno

| Variable | Obligatorio | Descripción |
|---|---|---|
| `SITE_URL` | Sí | URL del sitio (sitemap, OG, canonical) |
| `PUBLIC_GA_MEASUREMENT_ID` | Sí | ID de Google Analytics (G-XXXXXXXXXX) |
| `PUBLIC_SITE_TITLE` | No | Título SEO (fallback: "New Roll Sushi Temuco") |
| `PUBLIC_SITE_DESCRIPTION` | No | Descripción SEO |
| `CLOUDFLARE_PROJECT_NAME` | No | Nombre del proyecto en Cloudflare (fallback: wrangler.jsonc) |

Las variables se definen en `.env` (local) y en el dashboard de Workers Builds (producción).

## 6. Comandos

```bash
pnpm install              # Instalar dependencias
pnpm run dev              # Servidor desarrollo (localhost:4321)
pnpm run build            # Compilar a dist/
pnpm run preview          # Previsualizar build local
pnpm run deploy           # Desplegar a Cloudflare Workers
pnpm astro check          # Análisis de tipos
```

## 7. Despliegue (Workers Builds)

- **Build command:** `pnpm run build`
- **Deploy command:** `pnpm run deploy`
- **Root directory:** `/`
- **Env vars:** `SITE_URL`, `PUBLIC_GA_MEASUREMENT_ID` (y `CLOUDFLARE_PROJECT_NAME` opcional)
- **CI/CD:** Automático en cada push a la rama principal

Config de Cloudflare (`wrangler.jsonc`):
```jsonc
{
  "name": "sushi-template-no-cms",     // ← CAMBIAR por cada proyecto (único)
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

## 8. Cómo reusar esta plantilla por cliente

1. Clonar y limpiar:
   ```bash
   cp -r sushi-template-01-no-cms/ sushi-nuevo-cliente/
   cd sushi-nuevo-cliente && rm -rf .git node_modules/
   ```

2. Cambiar por cliente:
   - `wrangler.jsonc` → `name` único
   - `src/content/menu/` → productos, precios
   - `src/content/locations/` → dirección, teléfono, horario
   - `src/assets/images/` → imágenes (hero, galería, menú)
   - `src/components/layout/Footer.astro` → horarios, redes sociales
   - `src/components/sections/Hero.astro`, `Contact.astro` → datos del local

3. Copiar `.env.example` a `.env` y configurar:
   ```bash
   cp .env.example .env
   ```

4. En Cloudflare Workers Builds:
   - Conectar nuevo repo
   - Configurar build/deploy commands
   - Definir env vars en dashboard

## 9. Performance

- Fuentes totales: ~51KB WOFF2 (subseteadas, precargadas)
- Imágenes: formato webp, dimensiones explícitas, lazy loading (excepto hero)
- Dist total build: ~1MB
- Sin frameworks JS pesados — solo vanilla JS en `<script>` tags
- `color-scheme: dark` para scrollbar nativa e inputs en modo oscuro

## 10. Pendientes para cada nuevo proyecto

- [ ] Comprar dominio
- [ ] Configurar GA4 con ID de medición real
- [ ] Desplegar a Cloudflare Workers
- [ ] QR personalizado con logo
- [ ] Indexación en Google Search Console
- [ ] UptimeRobot con aviso por correo/WhatsApp
