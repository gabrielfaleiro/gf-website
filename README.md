# Gabriel Faleiro - Marca Personal

Este proyecto es una aplicación web estática construida con **React 19** y **Tailwind CSS**, diseñada con un enfoque modular para facilitar la gestión de marca personal, servicios y blog.

## 🚀 Inicio Rápido

### Requisitos previos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Un gestor de paquetes (npm, pnpm o yarn)

### Instalación de dependencias
Aunque el proyecto utiliza `import maps` y `esm.sh` para algunas dependencias directas en el navegador, para el proceso de desarrollo local y build se recomienda:

```bash
npm install
```

### Desarrollo local
Para ejecutar la aplicación en modo desarrollo con recarga en caliente:

```bash
npm run dev
```

---

## 🛠️ Proceso de Build (Producción)

Para generar una versión optimizada para despliegue (en Netlify, Vercel, GitHub Pages, etc.), sigue estos pasos:

1.  **Generar el bundle**:
    ```bash
    npm run build
    ```
    Este comando compilará los archivos TypeScript/JSX, minificará el código y optimizará los assets en la carpeta `dist/`.

2.  **Previsualizar el build**:
    ```bash
    npm run preview
    ```

---

## 📦 Estructura del Proyecto

```text
.
├── components/          # Componentes de React
│   ├── layout/          # Navegación, Footer, etc.
│   ├── sections/        # Secciones principales de la página
│   └── widgets/         # Componentes pequeños reutilizables (ej: PostCard)
├── data/                # Datos estáticos (Servicios, Productos)
├── posts/               # Artículos del blog (Archivos .ts individuales)
├── templates/           # Plantillas para nuevos contenidos
├── types.ts             # Definiciones de interfaces TypeScript
├── App.tsx              # Orquestador principal de la aplicación
└── index.html           # Punto de entrada HTML (con Import Maps)
```

---

## ✍️ Gestión de Contenido Modular

### Añadir un nuevo Post al Blog
El blog es totalmente modular. Para añadir un nuevo artículo:
1.  Ve a la carpeta `templates/` y copia el archivo `post_template.ts`.
2.  Pégalo en la carpeta `posts/` y renómbralo (ej: `2024-06-01-mi-viaje.ts`).
3.  Edita el contenido (id, título, fecha y contenido en Markdown).
4.  Regístralo en `posts/index.ts`:
    ```typescript
    import { post as postNuevo } from './2024-06-01-mi-viaje';
    // ...
    export const ALL_POSTS: Post[] = [
      postNuevo,
      // ...
    ];
    ```

### Editar Servicios
Los servicios se gestionan centralizadamente en `data/services.ts`. Cualquier cambio en este archivo se reflejará automáticamente en la sección de Servicios de la web.

---

## 🎨 Personalización Visual
El proyecto utiliza **Tailwind CSS** a través de CDN para desarrollo rápido, pero está configurado para ser procesado por PostCSS en el build de producción para asegurar el menor tamaño de archivo posible.

Para cambiar la paleta de colores o fuentes, edita el `index.html` o los estilos globales inyectados en los componentes.
