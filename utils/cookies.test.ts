/**
 * Tests para utilidades de cookies.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { setCookie, getCookie, LANG_COOKIE_NAME, VALID_LANGS } from './cookies';

describe('cookies', () => {
  beforeEach(() => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  });

  describe('setCookie y getCookie', () => {
    it('guarda y recupera un valor', () => {
      setCookie('test', 'valor', 7);
      expect(getCookie('test')).toBe('valor');
    });

    it('codifica valores correctamente', () => {
      setCookie('test', 'valor con espacios', 7);
      expect(getCookie('test')).toBe('valor con espacios');
    });

    it('retorna null para cookie inexistente', () => {
      expect(getCookie('no-existe')).toBe(null);
    });
  });

  describe('constantes', () => {
    it('LANG_COOKIE_NAME tiene el valor esperado', () => {
      expect(LANG_COOKIE_NAME).toBe('gabriel-faleiro-lang');
    });

    it('VALID_LANGS incluye es y en', () => {
      expect(VALID_LANGS).toContain('es');
      expect(VALID_LANGS).toContain('en');
    });
  });
});
