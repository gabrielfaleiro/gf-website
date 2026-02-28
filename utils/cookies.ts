/**
 * Utilidades para gestión de cookies.
 * Módulo atómico reutilizable para persistencia de preferencias.
 */

/** Nombre de la cookie de preferencia de idioma */
export const LANG_COOKIE_NAME = 'gabriel-faleiro-lang';

/** Idiomas válidos soportados por la aplicación */
export const VALID_LANGS = ['es', 'en'] as const;

export type ValidLang = (typeof VALID_LANGS)[number];

/**
 * Establece una cookie con expiración en días.
 * @param name - Nombre de la cookie
 * @param value - Valor (se codifica con encodeURIComponent)
 * @param days - Días hasta expiración
 */
export const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

/**
 * Obtiene el valor de una cookie por nombre.
 * @param name - Nombre de la cookie
 * @returns Valor decodificado o null si no existe
 */
export const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
};
