
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
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

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  explanation?: string; // Campo para información extendida
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link: string;
}
