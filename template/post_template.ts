
import { Post, Category } from '../types';

/**
 * INSTRUCCIONES:
 * 1. Copia este archivo a la carpeta /posts
 * 2. Renómbralo (ej: mi-nuevo-articulo.ts)
 * 3. Rellena los campos. El campo 'content' soporta Markdown (MDX).
 * 4. Regístralo en /posts/index.ts para que aparezca en la web
 */

export const post: Post = {
  id: 'generar-id-unico-aqui', 
  title: 'Título de tu artículo aquí',
  excerpt: 'Un resumen corto de dos líneas para la previsualización.',
  content: `
# Título del Artículo
Escribe aquí el contenido usando **Markdown**. 

## Secciones
Puedes añadir listas:
- Elemento 1
- Elemento 2

Y bloques de código o imágenes adicionales.
  `,
  author: 'Gabriel Faleiro',
  date: '20 Mayo, 2024',
  category: Category.TECNOLOGIA, 
  imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
};
