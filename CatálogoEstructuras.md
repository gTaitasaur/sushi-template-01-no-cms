# Catálogo Maestro de Estructuras y Distribución Web (Layout Patterns)
**Enfoque:** Mobile-First, Diseño Responsivo (Escalabilidad a Tablet/Desktop), Accesibilidad (a11y) y Alta Conversión.
**Proyecto:** Templates de Landing Pages para Negocios de Sushi & Cocina Asiática.

---

## Introducción: Arquitectura y Responsive Web Design (RWD)
En un enfoque auténticamente **Mobile-First**, el diseño no consiste en "encoger" una web de escritorio para que quepa en el celular, sino en diseñar primero la experiencia táctil vertical y escalar la geometría del contenido mediante *Media Queries* para aprovechar el espacio horizontal de tablets y escritorios (Desktop).

A las 6 estructuras fundamentales hemos añadido **3 patrones arquitectónicos adicionales de alto valor** que existen en la ingeniería de UI/UX moderna, sumando un total de **9 estructuras maestras**. Cada una resuelve un problema de negocio distinto (volumen del menú, tipo de cliente y flujo de venta) y transforma su distribución según el dispositivo del usuario.

---

## Índice de Estructuras Web

1. [Estructura 01: Single-Column Flow (Flujo de Columna Única / Lineal)](#01-single-column-flow)
2. [Estructura 02: Bento Box Grid (Grilla Modular Asimétrica)](#02-bento-box-grid)
3. [Estructura 03: Split-Screen & Sticky Anchor (Pantalla Dividida y Anclaje Fijo)](#03-split-screen--sticky-anchor)
4. [Estructura 04: Card-Based / Masonry Grid (Muro de Tarjetas Dinámico)](#04-card-based--masonry-grid)
5. [Estructura 05: App-Like / Bottom-Navigation (Emulación de App Nativa)](#05-app-like--bottom-navigation)
6. [Estructura 06: Z-Pattern / Editorial Asimétrico (Lectura Guiada)](#06-z-pattern--editorial-asimétrico)
7. [Estructura 07: Off-Canvas & Sidebar Layout (Paneles Desplegables / Barra Lateral)](#07-off-canvas--sidebar-layout) *(Nuevo)*
8. [Estructura 08: Tabbed SPA & Accordion (Pestañas y Acordeón Compacto)](#08-tabbed-spa--accordion) *(Nuevo)*
9. [Estructura 09: Action-Hub / Full-Viewport Portal (Portal de Acción Inmersivo)](#09-action-hub--full-viewport-portal) *(Nuevo)*

---

<a name="01-single-column-flow"></a>
## 01. Single-Column Flow (Flujo de Columna Única / Lineal)
* **Concepto:** Es el patrón estándar por excelencia. Un flujo de lectura 100% vertical donde cada bloque de contenido sigue un orden secuencial lógico. No exige esfuerzo cognitivo: el usuario solo debe hacer scroll hacia abajo.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero:** Apilado vertical: Titular > Subtítulo > Foto de plato > Botón CTA principal.
  * **Menú:** Lista vertical. Cada plato ocupa una fila completa de la pantalla (Nombre y descripción a la izquierda, precio e icono "+" a la derecha).
  * **Ubicación / Contacto:** Módulos apilados al final del scroll al 100% de ancho.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * El contenedor central restringe su ancho máximo (ej. `max-width: 960px` o `1200px`) para evitar que las líneas de texto sean demasiado largas e ilegibles.
  * El **Hero** pasa de columna única a 2 columnas (Texto a la izquierda, gran fotografía del sushi a la derecha).
  * El **Menú** se transforma en una grilla simétrica de 2 o 3 columnas por fila.
* **Perfil de Negocio Ideal:** Locales con menús cortos o medianos (ej. "Los 15 mejores rolls de la casa") que buscan máxima simplicidad y rapidez de puesta en marcha.
* **Ventaja UX / a11y:** Al tener un orden de DOM lineal, es la estructura más fácil de navegar con lectores de pantalla (Screen Readers) y teclado (`Tab`), cumpliendo de forma nativa con los estándares WCAG AAA.

---

<a name="02-bento-box-grid"></a>
## 02. Bento Box Grid (Grilla Modular Asimétrica)
* **Concepto:** Inspirado en las tradicionales cajas bento japonesas y la UI moderna de Apple. Divide la pantalla en un rompecabezas de bloques o "tarjetas" modulares de distintos tamaños que jerarquizan visualmente la información.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero:** En lugar de una sola pieza, es un bloque de 2 o 3 piezas apiladas: una tarjeta principal para el título de la marca, una tarjeta compacta al lado para la "Promo del Día" y un botón de CTA que ocupa un bloque inferior completo.
  * **Menú:** Categorías en cajas bento. Los combos familiares o platos estrella ocupan tarjetas grandes (100% de ancho), mientras que los nigiris o bebidas se agrupan en una cuadrícula de 2 columnas (50% - 50%).
  * **Ubicación / Contacto:** Un módulo interactivo donde el mapa ocupa un bloque cuadrado y los horarios de atención ocupan otro bloque adjunto de diferente color de fondo.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * Se despliega el verdadero potencial del Bento Box usando `CSS Grid`. La pantalla se convierte en un lienzo de 4 a 6 columnas donde los bloques de diferente tamaño conviven de forma asimétrica pero perfectamente alineada.
* **Perfil de Negocio Ideal:** Marcas juveniles, modernas, con mucha presencia en redes sociales o que ofrecen muchos combos combinados que necesitan destacar en cajas visuales diferenciadas.
* **Ventaja UX / a11y:** Excelente modularidad visual para personas con déficit de atención. El contraste entre los bloques delimita claramente dónde termina una promoción y dónde empieza otra sin necesidad de textos largos.

---

<a name="03-split-screen--sticky-anchor"></a>
## 03. Split-Screen & Sticky Anchor (Pantalla Dividida y Anclaje Fijo)
* **Concepto:** La pantalla se divide en dos áreas principales de responsabilidad: una zona estática o anclada (*Sticky*) que mantiene la identidad y navegación siempre visible, y una zona de desplazamiento continuo para el contenido pesado.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero / Cabecera Anclada:** El tercio superior de la pantalla (25-30% del alto visual) queda fijo en la parte superior (*sticky header*) con el logo, el estado ("Abierto hoy") y un carrusel horizontal táctil de categorías del menú.
  * **Menú:** Ocupa el área restante inferior. Al hacer scroll, solo los platos se mueven por debajo de la barra de navegación anclada.
  * **Ubicación / Contacto:** Se invocan como un modal flotante o *Bottom-Sheet* (panel que sube desde abajo) al tocar los iconos en la barra fija, sin sacar al usuario de su posición en el menú.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * Se transforma en una auténtica **Pantalla Dividida Horizontal (50% - 50% o 40% - 60%)**.
  * La columna izquierda queda fija (contiene el Hero, foto espectacular del sushi, datos del local, mapa de ubicación y botón general de WhatsApp).
  * La columna derecha se desliza de forma independiente mostrando todo el catálogo del menú.
* **Perfil de Negocio Ideal:** Locales con **menús extremadamente largos** (más de 50 ítems). Evita que el cliente se pierda o tenga que hacer un scroll eterno para volver arriba a buscar la dirección o el teléfono.
* **Ventaja UX / a11y:** Reduce la frustración al mantener los controles de navegación e información vital siempre en el campo visual del usuario, sin importar cuánto descienda por el menú.

---

<a name="04-card-based--masonry-grid"></a>
## 04. Card-Based / Masonry Grid (Muro de Tarjetas Dinámico)
* **Concepto:** Cada plato, promoción o sección es un componente autónomo encapsulado en una tarjeta (Card) flotante. En su formato *Masonry* (estilo Pinterest), las tarjetas tienen alturas variables según la longitud de la descripción o el formato de la foto, encajando verticalmente de manera fluida.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero:** Una tarjeta flotante superpuesta ligeramente sobre una fotografía de fondo, con bordes redondeados y sombra elevada (`box-shadow`).
  * **Menú:** En smartphones estándar se presenta como una grilla de **2 columnas compactas** (o 1 columna amplia en dispositivos con pantallas pequeñas para mantener legibilidad). Cada tarjeta tiene foto, precio, nombre y su propio botón de "+".
  * **Ubicación / Contacto:** Tarjetas finales al estilo tarjeta de presentación que se integran en el muro de contenido.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * El muro se expande dinámicamente a 3 columnas en Tablet y **4 o 5 columnas en Escritorio**.
  * Al aprovechar el ancho del monitor, la vista se asemeja a un catálogo visual o un escaparate gastronómico de alta densidad sin sentirse abrumador.
* **Perfil de Negocio Ideal:** Negocios donde la **fotografía gastronómica es de calidad excepcional** y es el principal argumento de venta.
* **Ventaja UX / a11y:** Las tarjetas proporcionan límites cognitivos claros. La UI debe asegurar que el foco del teclado (estilo `:focus-visible`) resalte toda la tarjeta con un borde de alto contraste (mínimo 3px) para navegación accesible.

---

<a name="05-app-like--bottom-navigation"></a>
## 05. App-Like / Bottom-Navigation (Emulación de App Nativa)
* **Concepto:** Abandona el modelo mental de "página web de scroll infinito" y emula la arquitectura visual y táctil de una aplicación de delivery nativa (como Uber Eats, Rappi o PedidosYa) sin necesidad de descargas.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero / Cabecera:** Un banner superior ultracompacto con buscador instantáneo y slider de promociones fugaces.
  * **Menú:** Es la vista principal y por defecto. Organizada por tabs de acceso instantáneo.
  * **Barra de Navegación Inferior (Bottom Bar):** Una barra fija en el extremo inferior del teléfono (en la zona de confort del pulgar) con 4 botones clave: `[ Menú ]`, `[ Horarios/Mapa ]`, `[ Promos ]`, `[ Pedir por WhatsApp ]`.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * Dado que una *Bottom Bar* se ve extraña en monitores grandes de escritorio, la media query la transforma automáticamente en una **Barra de Navegación Superior Fija (Top Navbar)** o en un **Panel de Carrito / Pedido Lateral Derecho** que simula un punto de venta (POS) o dashboard de pedido en vivo.
* **Perfil de Negocio Ideal:** *Dark Kitchens*, locales 100% enfocados en **delivery masivo y alta recurrencia de compra** (clientes que piden todas las semanas y quieren concretar su pedido en menos de 1 minuto).
* **Ventaja UX / a11y:** Maximiza la ergonomía móvil al ubicar todas las acciones críticas en la "zona del pulgar" (Thumb Zone), facilitando la navegación con una sola mano.

---

<a name="06-z-pattern--editorial-asimétrico"></a>
## 06. Z-Pattern / Editorial Asimétrico (Lectura Guiada)
* **Concepto:** Basado en estudios de *eyetracking* (seguimiento ocular), guía los ojos del usuario en forma de "Z" o zigzag a través de una diagramación editorial y artística, rompiendo con la simetría aburrida.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero:** Titular grande alineado a la izquierda, mientras que la imagen de fondo está desplazada o recortada asimétricamente hacia la derecha, creando dinamismo visual.
  * **Menú (Versión Móvil):** Para no comprometer la legibilidad en pantallas estrechas, se alterna la jerarquía visual: el Plato 1 tiene fondo claro con tipografía enorme; el Plato 2 tiene fondo teñido y foto protagónica a la derecha.
  * **Ubicación / Contacto:** Bloques distribuidos en diagonal, equilibrando un mapa interactivo con un bloque tipográfico de horarios de alta elegancia.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * Es en escritorio donde el **Z-Pattern brilla en su máximo esplendor**.
  * Fila 1: Foto del plato a la izquierda, historia/descripción y precio a la derecha.
  * Fila 2: Descripción y precio a la izquierda, foto del plato a la derecha (alternancia perfecta en zigzag).
* **Perfil de Negocio Ideal:** Restaurantes de **alta cocina, Omakase o Nikkei de autor**, donde cada plato tiene una historia culinaria, técnica de corte o procedencia de ingredientes que merece ser explicada y degustada visualmente con calma.
* **Ventaja UX / a11y:** Mantiene el cerebro estimulado y evita la fatiga visual de escanear filas idénticas. Para accesibilidad, la estructura HTML debe conservar un orden semántico estricto (`<h2>`, `<p>`, `<span>`, `<button>`) sin importar el orden visual inverso aplicado mediante Flexbox/Grid (`order`).

---

<a name="07-off-canvas--sidebar-layout"></a>
## 07. Off-Canvas & Sidebar Layout (Paneles Desplegables / Barra Lateral) *(Nuevo)*
* **Concepto:** Una estructura modular muy potente y limpia, popularizada por sistemas de comercio electrónico avanzados. Mantiene la pantalla limpia ocultando paneles secundarios tras un botón de menú o filtro, desplegándolos como cajones laterales (*Off-Canvas Drawer*).
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero / Cabecera:** Cabecera limpia con botón de menú hamburguesa a la izquierda, logo al centro, y botón de llamada al CTA/WhatsApp a la derecha.
  * **Menú (Vista Central):** Muestra el listado puro de platos con sus fotos sin distracciones.
  * **Filtros de Categoría y Ubicación (Off-Canvas):** Al tocar "Filtrar Menú" o "Ver Zonas de Reparto", un panel desliza desde el borde lateral derecho o izquierdo (con fondo oscurecido), permitiendo seleccionar categorías ("Solo Vegetariano", "Rolls Calientes", "Sin Gluten") o revisar el mapa de ubicación sin hacer scroll en la página principal.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * La media query **elimina el cajón oculto (Off-Canvas) y lo convierte en una Barra Lateral Permanente (Sidebar Layout)** que ocupa el 25% del ancho de la pantalla a la izquierda.
  * En escritorio, el cliente ve todas las categorías del menú y filtros visibles todo el tiempo a la izquierda, mientras el 75% derecho muestra la grilla de productos actualizándose instantáneamente.
* **Perfil de Negocio Ideal:** Negocios con **oferta gastronómica personalizable** (ej. "Arma tu propio Poke Bowl", variedad de salsas, o menús con múltiples subcategorías y restricciones alimentarias) que requieren filtrado intensivo.
* **Ventaja UX / a11y:** Evita la sobrecarga de información visual en móviles. El panel Off-Canvas debe implementar la técnica de *Focus Trap* (atrapamiento de foco) y cerrar con la tecla `Esc` o tocando fuera para cumplir con normativas de accesibilidad WAI-ARIA.

---

<a name="08-tabbed-spa--accordion"></a>
## 08. Tabbed SPA & Accordion (Pestañas y Acordeón Compacto) *(Nuevo)*
* **Concepto:** Emula la experiencia de una Single Page Application (SPA) ultracompacta. En lugar de extender la landing page en un scroll vertical interminable, condensa toda la información en pestañas de navegación superiores (*Tabs*) y acordeones desplegables por categoría.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero:** Compacto y directo al punto (Logo + Eslogan de 1 línea + CTA).
  * **Navegación por Pestañas (Tabs):** Justo debajo del Hero se presentan 3 pestañas principales que cambian todo el contenido inferior sin recargar la página: `[ 🍣 Menú ]` | `[ 📍 Ubicación ]` | `[ 💬 Pedir ]`.
  * **Acordeones de Menú:** Dentro de la pestaña Menú, cada categoría ("Promociones", "Rolls Premium") es una barra desplegable (Acordeón). Todas están cerradas por defecto excepto las "Promociones", permitiendo al usuario desplegar solo lo que le interesa leer.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * Las pestañas superiores pueden transformarse en un **diseño de paneles expandidos de 2 o 3 columnas concurrentes**, abriendo los acordeones de forma automática al detectar que hay suficiente altura vertical en el viewport del monitor.
* **Perfil de Negocio Ideal:** Negocios de **takeaway en zonas de oficina, patios de comida (Food Courts)** o locales que atienden a clientes con extrema prisa que necesitan encontrar horarios, direcciones o un roll en específico con cero scroll y el menor tiempo de lectura posible.
* **Ventaja UX / a11y:** Ahorro drástico de batería y esfuerzo en dispositivos móviles al evitar scroll innecesario. Requiere el estricto uso de atributos ARIA (`aria-expanded="true/false"`, `role="tabpanel"`, `aria-controls`) para informar a usuarios con discapacidad visual si una sección está abierta u oculta.

---

<a name="09-action-hub--full-viewport-portal"></a>
## 09. Action-Hub / Full-Viewport Portal (Portal de Acción Inmersivo) *(Nuevo)*
* **Concepto:** Una estructura orientada a la segmentación del cliente desde el primer segundo. La sección Hero no es un simple banner, sino un portal inmersivo que ocupa el 100% del alto de la pantalla visual (`100dvh`), obligando al usuario a elegir su modalidad de consumo antes de ver el menú.
* **Comportamiento Mobile-First (Teléfonos):**
  * **Hero / Action Hub (100% Pantalla):** Fotografía de fondo gastronómica en pantalla completa con opacidad oscura. En el centro de la pantalla se presentan 3 o 4 botones gigantes de impacto táctil:
    * 🛵 `[ PEDIR DELIVERY - Envío a Domicilio ]`
    * 🥡 `[ RETIRAR EN LOCAL - Takeaway ]`
    * 🍽️ `[ VER MENÚ DE SALÓN - Comer Aquí ]`
    * 📍 `[ VER HORARIOS Y UBICACIÓN ]`
  * Al pulsar cualquiera de las opciones, la página hace un autoscroll suave (*smooth scroll*) hacia el módulo exacto que corresponde a esa modalidad o adapta los precios del menú interactivo según si es delivery o salón.
* **Escalabilidad a Tablet y Escritorio (Desktop):**
  * El Hero se mantiene a pantalla completa (`100vh`), pero los botones de acción se distribuyen en **4 tarjetas verticales semi-traslúcidas (Glassmorphism)** una al lado de la otra, invitando a una interacción visual espectacular y de nivel empresarial.
* **Perfil de Negocio Ideal:** **Franquicias de sushi, restaurantes consolidados o marcas multi-formato** que operan simultáneamente con salón comedor, sistema propio de reparto y retiro en tienda, y necesitan encauzar el flujo de clientes sin que se confundan las listas de precios ni los canales de contacto.
* **Ventaja UX / a11y:** Elimina la ambigüedad operacional del negocio. Al presentar botones de enorme tamaño y alto contraste, se reduce la tasa de rebote del usuario, ofreciendo objetivos de clic clarísimos de más de 60x60px de área táctil.

---

## Matriz de Selección para Clientes (Diseño + Estructura)

Para comercializar eficazmente este catálogo, ofrece a tus clientes un sistema de combinación de 2 pasos: **Estilo Visual (Catálogo de Temáticas)** + **Arquitectura Web (Catálogo de Estructuras)**.

| ID | Nombre de Estructura | Complejidad de Implementación | Volumen Ideal de Menú | Modalidad de Navegación Principal |
| :---: | :--- | :---: | :---: | :--- |
| **01** | Single-Column Flow | Baja ⭐ | 10 a 20 platos | Scroll vertical lineal e intuitivo |
| **02** | Bento Box Grid | Media ⭐⭐ | 20 a 35 platos | Grilla modular asimétrica por importancia |
| **03** | Split-Screen & Sticky | Media-Alta ⭐⭐⭐ | +50 platos (Menú largo)| Cabecera/Columna fija y scroll independiente |
| **04** | Card-Based / Masonry | Media ⭐⭐ | 25 a 40 platos | Muro visual de fotos flotantes estilo feed |
| **05** | App-Like / Bottom Nav | Alta ⭐⭐⭐⭐ | 20 a 45 platos | Barra fija inferior táctil en zona del pulgar |
| **06** | Z-Pattern / Editorial | Media ⭐⭐ | 10 a 25 platos | Escaneo ocular en zigzag (Alta cocina / Autor) |
| **07** | Off-Canvas & Sidebar | Alta ⭐⭐⭐⭐ | +40 platos (Muy divisible)| Cajón lateral oculto en móvil -> Sidebar en Desktop |
| **08** | Tabbed SPA & Accordion| Media-Alta ⭐⭐⭐ | 15 a 35 platos | Pestañas superiores y acordeones (Cero scroll) |
| **09** | Action-Hub / Portal | Media-Alta ⭐⭐⭐ | Multi-formato | Botones gigantes en Hero 100% viewport |
