/**
 * Datos configurables para la Tarjeta de Visita Cuenta Ajena (TVCA).
 * Centraliza la información de contacto y enlaces para facilitar su edición.
 *
 * @module data/tvca
 */

/** URL pública de la página TVCA (usada en el QR y enlaces) */
export const TVCA_URL = 'https://gabrielfaleiro.com/#/es/tvca';
export const TVCA_URL_EN = 'https://gabrielfaleiro.com/#/en/tvca';

/** Datos de la tarjeta de visita profesional */
export const TVCA_DATA = {
  /** Nombre completo */
  name: 'Gabriel Faleiro',
  name_en: 'Gabriel Faleiro',
  /** Cargo en la empresa */
  jobTitle: 'Responsable de Innovación de Producto',
  jobTitle_en: 'Product Innovation Lead',
  /** Nombre de la empresa */
  companyName: 'WILOC Technologies',
  companyName_en: 'WILOC Technologies',
  /** Teléfono profesional (formato internacional recomendado: +34...) */
  phone: '+34 659 245 393',
  /** Email profesional */
  email: 'gabriel.faleiro@wiloc.com',
  /** URL del logo de la empresa (en public/) */
  companyLogo: '/visit_card/employed_company_logo.jpg',
  /** LinkedIn de la empresa */
  linkedInCompany: 'https://www.linkedin.com/company/wiloc-technologies/',
  /** LinkedIn personal */
  linkedInPersonal: 'https://www.linkedin.com/in/gabrielfaleiro/',
  /** Web personal */
  webPersonal: 'https://gabrielfaleiro.com/',
} as const;
