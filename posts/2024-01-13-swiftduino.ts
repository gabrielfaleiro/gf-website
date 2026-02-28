
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
  title_es: 'Swiftduino: Mi paleta de código Arduino open source',
  title_en: 'Swiftduino: My Open Source Arduino Code Palette',
  excerpt_es: 'Comienzo un proyecto open source para unificar y compartir el código Arduino modular que he creado para acelerar el desarrollo de proyectos.',
  excerpt_en: 'I start an open source project to unify and share the modular Arduino code I have created to accelerate project development.',
  content_es: `

Comienzo un proyecto open source con el objetivo de unificar y compartir el código Arduino que he creado para modularizar los desarrollos rápidos que realizo en mi tiempo libre.

**Swiftduino** es el nombre que he puesto a mi paleta de código modular y mantenible para ensamblar funcionalidades más complejas de forma sencilla. "La base de la eficiencia es la repetición", así que comparto con vosotros mi código para que podáis reutilizarlo.

Arduino es una fantástica plataforma de prototipado rápido a la que le debemos muchas horas de diversión y aprendizaje. Además, tiene compatibilidad con muchos SoCs y microprocesadores.

Espero que os ahorre algún tiempo programando y os ayude a sacar vuestros proyectos adelante. Estoy encantado de recibir propuestas y mejoras sobre el código.

## 🚀 Repositorio en GitHub

Puedes explorar el repositorio completo de Swiftduino en GitHub, donde encontrarás todo el código modular, ejemplos y documentación:

**[👉 Ver Swiftduino en GitHub](https://github.com/gabrielfaleiro/swiftduino/tree/main)**

> 💡 **Tip:** El repositorio está en constante evolución. Si tienes alguna sugerencia o encuentras un bug, no dudes en abrir un issue o hacer un pull request. ¡Toda contribución es bienvenida!
  `,
  content_en: `

I am starting an open source project with the goal of unifying and sharing the Arduino code I have created to modularize the quick developments I do in my spare time.

**Swiftduino** is the name I have given to my palette of modular and maintainable code to assemble more complex functionalities easily. "The basis of efficiency is repetition", so I share my code with you so you can reuse it.

Arduino is a fantastic rapid prototyping platform to which we owe many hours of fun and learning. In addition, it has compatibility with many SoCs and microprocessors.

I hope it saves you some time programming and helps you get your projects done. I am happy to receive suggestions and improvements to the code.

## 🚀 GitHub Repository

You can explore the complete Swiftduino repository on GitHub, where you will find all the modular code, examples and documentation:

**[👉 View Swiftduino on GitHub](https://github.com/gabrielfaleiro/swiftduino/tree/main)**

> 💡 **Tip:** The repository is constantly evolving. If you have any suggestions or find a bug, don't hesitate to open an issue or make a pull request. All contributions are welcome!
  `,
  author: 'Gabriel Faleiro',
  date: new Date('2024-01-13'), 
  category: Category.TECNOLOGIA, 
  imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
};
