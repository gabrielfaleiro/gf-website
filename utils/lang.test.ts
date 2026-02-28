/**
 * Tests para utilidades de idioma.
 */
import { describe, it, expect } from 'vitest';
import { getLangFromPath, getPathWithoutLang } from './lang';

describe('getLangFromPath', () => {
  it('extrae "es" de /es/servicios', () => {
    expect(getLangFromPath('/es/servicios')).toBe('es');
  });

  it('extrae "en" de /en/blog', () => {
    expect(getLangFromPath('/en/blog')).toBe('en');
  });

  it('extrae "es" de /es (ruta index)', () => {
    expect(getLangFromPath('/es')).toBe('es');
  });

  it('extrae "en" de /en/', () => {
    expect(getLangFromPath('/en/')).toBe('en');
  });

  it('retorna null para idioma inválido', () => {
    expect(getLangFromPath('/fr/servicios')).toBe(null);
  });

  it('retorna null para path vacío o mal formado', () => {
    expect(getLangFromPath('/')).toBe(null);
    expect(getLangFromPath('/servicios')).toBe(null);
  });
});

describe('getPathWithoutLang', () => {
  it('extrae /servicios de /es/servicios', () => {
    expect(getPathWithoutLang('/es/servicios')).toBe('/servicios');
  });

  it('extrae /blog/123 de /en/blog/123', () => {
    expect(getPathWithoutLang('/en/blog/123')).toBe('/blog/123');
  });

  it('retorna cadena vacía para ruta index /es', () => {
    expect(getPathWithoutLang('/es')).toBe('');
  });

  it('retorna / para /en/ (trailing slash)', () => {
    expect(getPathWithoutLang('/en/')).toBe('/');
  });

  it('retorna cadena vacía para path mal formado', () => {
    expect(getPathWithoutLang('/servicios')).toBe('');
  });
});
