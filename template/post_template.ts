
import { Post, Category } from '../types';

/**
 * INSTRUCCIONES:
 * 1. Copia este archivo a la carpeta /posts
 * 2. Renómbralo (ej: mi-nuevo-articulo.ts)
 * 3. Rellena los campos
 * 4. Regístralo en /posts/index.ts para que aparezca en la web
 */

export const post: Post = {
  id: 'generar-id-unico-aqui', // ej: 'mi-post-2024'
  title: 'Título de tu artículo aquí',
  excerpt: 'Un resumen corto de dos líneas para la previsualización.',
  content: `
    Escribe aquí el contenido completo de tu artículo. 
    Puedes usar saltos de línea normales.
  `,
  author: 'Gabriel Faleiro',
  date: '20 Mayo, 2024',
  category: Category.TECNOLOGIA, // Elige entre TECNOLOGIA, DISENO, ESTILO_DE_VIDA, NEGOCIOS
  imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
};
