
import { Post } from '../types';
import { post as post1 } from './2024-05-10-futuro-web-ia';
import { post as post2 } from './2024-05-12-marca-personal-digital';
// Importa aquí tus nuevos posts después de crearlos siguiendo el formato YYYY-MM-DD-id.ts

export const ALL_POSTS: Post[] = [
  post1,
  post2,
  // Añade aquí las variables de los nuevos posts
].sort((a, b) => b.date.getTime() - a.date.getTime());
