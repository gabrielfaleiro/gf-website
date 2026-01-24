
import { Post } from '../types';
import { post as post1 } from './2023-11-09-hackaton-getafe-ia';
import { post as post2 } from './2024-01-13-swiftduino';
import { post as post3 } from './2025-07-26-prototipado-landing-page';
import { post as post4 } from './2026-01-23-home-assistant-thermostat';
// Importa aquí tus nuevos posts después de crearlos siguiendo el formato YYYY-MM-DD-id.ts

export const ALL_POSTS: Post[] = [
  post1,
  post2,
  post3,
  post4,
  // Añade aquí las variables de los nuevos posts
].sort((a, b) => b.date.getTime() - a.date.getTime());
