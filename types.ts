
export interface Post {
  id: string;
  title_es: string;
  excerpt_es: string;
  content_es: string;
  /** English translations (optional) */
  title_en?: string;
  excerpt_en?: string;
  content_en?: string;
  author: string;
  date: Date;
  category: string;
  imageUrl: string;
}

export enum Category {
  TECNOLOGIA = 'Tecnología',
  INNOVACION = 'Innovación',
  NEGOCIOS = 'Negocios',
  PROTOTRICKS = 'ProtoTricks',
}

export const CategoryLabels: Record<Category, { es: string; en: string }> = {
  [Category.TECNOLOGIA]: { es: 'Tecnología', en: 'Technology' },
  [Category.INNOVACION]: { es: 'Innovación', en: 'Innovation' },
  [Category.NEGOCIOS]: { es: 'Negocios', en: 'Business' },
  [Category.PROTOTRICKS]: { es: 'ProtoTricks', en: 'ProtoTricks' },
};

export interface Service {
  id: string;
  title_es: string;
  /** English translation of the title (optional) */
  title_en?: string;
  description_es: string;
  /** English translation of the description (optional) */
  description_en?: string;
  icon: string;
  explanation_es?: string; // Campo para información extendida (ES)
  /** Explicación extendida en inglés (opcional) */
  explanation_en?: string;
}

export interface Resource {
  id: string;
  name_es: string;
  /** English name (optional) */
  name_en?: string;
  description_es: string;
  /** English description (optional) */
  description_en?: string;
  price: string;
  imageUrl: string;
  link: string;
}
