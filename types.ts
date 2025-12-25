
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export enum Category {
  TECNOLOGIA = 'Tecnología',
  INNOVACION = 'Innovación',
  NEGOCIOS = 'Negocios',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link: string;
}
