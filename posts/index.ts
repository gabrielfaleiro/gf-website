
import { post as post1 } from './post1';
import { post as post2 } from './post2';
// Importa aquí tus nuevos posts después de crearlos

export const ALL_POSTS = [
  post1,
  post2,
  // Añade aquí las variables de los nuevos posts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
