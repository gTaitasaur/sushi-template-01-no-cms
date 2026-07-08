# Template de Landing Page de Sushi (Astro)

Este es un template de Landing Page mobile-first optimizado para locales de sushi, construido con Astro. Está diseñado para ser rápido, accesible (a11y), amigable con el SEO y fácilmente replicable para cualquier sucursal o local.

## 1. Stack Técnico
- **Framework**: Astro v7 (SSG por defecto para máxima velocidad y SEO)
- **Gestión de Paquetes**: pnpm
- **Lenguaje**: TypeScript
- **Estilos**: CSS nativo utilizando Custom Properties (Tokens)
- **Hosting**: Cloudflare Pages
- **Monitoreo & Analítica**: Google Analytics (GA4) + UptimeRobot

## 2. Setup Rápido
Sigue estos pasos para levantar el entorno de desarrollo local:

1. Instala las dependencias utilizando `pnpm`:
   ```bash
   pnpm install
   ```

2. Corre el servidor de desarrollo local:
   ```bash
   pnpm dev
   ```
   El sitio se servirá en [http://localhost:4321](http://localhost:4321).

## 3. Variables de Entorno
Copia el archivo `.env.example` para crear tu archivo `.env` o `.env.local`:
```bash
cp .env.example .env
```
Y edita las siguientes variables:
- `SITE_URL`: La URL absoluta de tu sitio en producción (necesario para el sitemap automático y las etiquetas og:image).
- `PUBLIC_GA_MEASUREMENT_ID`: El ID de medición de Google Analytics (GA4) para habilitar el traqueo de métricas automáticamente.

## 4. Carga Dinámica de Datos y Escalabilidad (Content Collections)
Este template utiliza **Astro Content Collections** para la gestión estructurada de contenidos, lo que asegura tipado estático robusto y validación de esquemas en tiempo de compilación.

### Colecciones Disponibles
* **Menú (`src/content/menu/`)**: Contiene los platos en formato JSON. Cada archivo debe cumplir con el esquema Zod de menú definido en `src/content.config.ts`.
* **Sucursales (`src/content/locations/`)**: Contiene las sucursales del negocio en formato JSON.

### Rutas Dinámicas (`src/pages/sucursales/[slug].astro`)
El template cuenta con generación de páginas dinámicas en build para cada sucursal configurada en `src/content/locations/`.
- El archivo `[slug].astro` genera automáticamente una landing page independiente para cada local (ej: `/sucursales/sucursal-providencia/`).
- Cada página de sucursal hereda los componentes base (`Hero`, `Menu`, `Gallery`) pero sobreescribe dinámicamente los metadatos de SEO (`title`, `description`) y el banner principal de contacto con los datos específicos de esa sucursal.

### Directrices de Desarrollo para Colaboradores (Humano o IA)
- **Modificación de esquemas**: Para alterar la estructura de datos (ej. agregar un campo de alérgenos al menú), edita únicamente el archivo central [src/content.config.ts](src/content.config.ts) y el archivo de definición de tipos globales [src/types/menu.d.ts](src/types/menu.d.ts). No uses esquemas inline en los componentes.
- **Validación estricta**: Los datos en `src/content/` nunca deben contener campos fuera de esquema. Cualquier discrepancia causará errores de compilación antes de subir cambios.
- **Analytics en el Menú**: Las tarjetas de menú que realicen acciones de interacción deben contener la clase `.menu-item-btn` y los atributos de datos requeridos (`data-name`, `data-category`, `data-price`) para que el script centralizado de analítica en `Menu.astro` registre los clicks automáticamente en GA4.

## 5. Cómo Replicar este Template para un Nuevo Local
Sigue esta lista de verificación para adaptar el template base a una nueva marca o sucursal:

1. **Tokens de Diseño**:
   - Ajusta los colores y fuentes de la marca en `src/styles/tokens.css`.
2. **Configuración de Variables**:
   - Configura las variables de entorno (`SITE_URL` y `PUBLIC_GA_MEASUREMENT_ID`) en el archivo `.env` o en el panel de Cloudflare Pages.
3. **Colecciones de Contenido**:
   - Reemplaza los archivos de datos seed en `src/content/menu/` con los platos del nuevo local.
   - Reemplaza los datos de sucursales en `src/content/locations/`.
4. **Imagen de Open Graph**:
   - Reemplaza `public/og-image.jpg` con la imagen de vista previa del nuevo sitio (1200x630px).
5. **Textos y Contenido**:
   - Personaliza los componentes de cada sección en `src/components/sections/` (`Hero.astro`, `Menu.astro`, `Gallery.astro`, `Contact.astro`).

## 6. Despliegue en Cloudflare Pages
1. Conecta tu repositorio de GitHub a tu cuenta de Cloudflare.
2. Crea un nuevo proyecto en **Cloudflare Pages** seleccionando el repositorio.
3. Configura los siguientes parámetros en la sección de Build settings:
   - **Framework Preset**: `Astro`
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
4. Añade la variable de entorno `SITE_URL` en la configuración de la build en Cloudflare para que el sitemap se genere correctamente con la URL del dominio de producción.
5. Presiona **Save and Deploy**. Los cambios futuros en la rama principal se desplegarán automáticamente.
