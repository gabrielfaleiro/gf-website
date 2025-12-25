
import { Post, Category } from '../types';

export const post: Post = {
  id: 'marca-personal-digital',
  title: 'Marca Personal en la Era Digital',
  excerpt: 'Estrategias para destacar en un mercado saturado utilizando autenticidad y valor real.',
  content: `
Construir una marca personal hoy requiere más que perfiles sociales; requiere un sistema de valor coherente y una voz propia.

## Pilares de la marca personal

- **Autenticidad**: No intentes ser alguien que no eres.
- **Consistencia**: Publica regularmente y mantén tu mensaje.
- **Valor**: Comparte conocimientos que ayuden a los demás.

Es un proceso a largo plazo que rinde frutos en forma de oportunidades y confianza.
  `,
  author: 'Gabriel Faleiro',
  date: new Date('2024-05-12'),
  category: Category.NEGOCIOS,
  imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
};
