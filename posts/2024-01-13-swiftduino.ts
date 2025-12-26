
import { Post, Category } from '../types';

/**
 * INSTRUCCIONES:
 * 1. Copia este archivo a la carpeta /posts
 * 2. Renómbralo (ej: mi-nuevo-articulo.ts)
 * 3. Rellena los campos. 
 *    - El campo 'content' soporta Markdown (MDX).
 *    - El campo 'date' debe ser un objeto Date: new Date('AAAA-MM-DD').
 * 4. Regístralo en /posts/index.ts para que aparezca en la web
 */

export const post: Post = {
  id: 'swiftduino-open-source-arduino', 
  title: 'Swiftduino: Mi paleta de código Arduino open source',
  excerpt: 'Comienzo un proyecto open source para unificar y compartir el código Arduino modular que he creado para acelerar el desarrollo de proyectos.',
  content: `

Comienzo un proyecto open source con el objetivo de unificar y compartir el código Arduino que he creado para modularizar los desarrollos rápidos que realizo en mi tiempo libre.

**Swiftduino** es el nombre que he puesto a mi paleta de código modular y mantenible para ensamblar funcionalidades más complejas de forma sencilla. "La base de la eficiencia es la repetición", así que comparto con vosotros mi código para que podáis reutilizarlo.

Arduino es una fantástica plataforma de prototipado rápido a la que le debemos muchas horas de diversión y aprendizaje. Además, tiene compatibilidad con muchos SoCs y microprocesadores.

Espero que os ahorre algún tiempo programando y os ayude a sacar vuestros proyectos adelante. Estoy encantado de recibir propuestas y mejoras sobre el código.

## 🚀 Repositorio en GitHub

Puedes explorar el repositorio completo de Swiftduino en GitHub, donde encontrarás todo el código modular, ejemplos y documentación:

**[👉 Ver Swiftduino en GitHub](https://github.com/gabrielfaleiro/swiftduino/tree/main)**

> 💡 **Tip:** El repositorio está en constante evolución. Si tienes alguna sugerencia o encuentras un bug, no dudes en abrir un issue o hacer un pull request. ¡Toda contribución es bienvenida!
  `,
  author: 'Gabriel Faleiro',
  date: new Date('2024-01-13'), 
  category: Category.TECNOLOGIA, 
  imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
};
