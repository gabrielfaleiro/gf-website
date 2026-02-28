/**
 * Utilidades para gestión de idioma en rutas.
 * Extrae el prefijo de idioma de pathnames de React Router.
 */

import { VALID_LANGS } from './cookies';

/**
 * Extrae el idioma del pathname (ej: /es/servicios -> es).
 * @param pathname - Pathname de useLocation (ej: /es/servicios)
 * @returns Código de idioma si es válido, null en caso contrario
 */
export const getLangFromPath = (pathname: string): string | null => {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (!match) return null;
  const lang = match[1];
  return VALID_LANGS.includes(lang as 'es' | 'en') ? lang : null;
};

/**
 * Obtiene el resto del path sin el prefijo de idioma.
 * @param pathname - Pathname completo (ej: /es/servicios/detalle)
 * @returns Resto del path (ej: /servicios/detalle) o '' para ruta index
 */
export const getPathWithoutLang = (pathname: string): string => {
  const match = pathname.match(/^\/[a-z]{2}(\/.*)?$/);
  if (!match) return '';
  return match[1] || '';
};
