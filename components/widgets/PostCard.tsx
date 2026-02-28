
import React from 'react';
import { Post } from '../../types';
import { Link, useParams } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { lang = 'es' } = useParams<{ lang: string }>();
  
  const title = lang === 'en' ? (post.title_en || post.title_es) : post.title_es;
  const excerpt = lang === 'en' ? (post.excerpt_en || post.excerpt_es) : post.excerpt_es;

  return (
    <Link 
      to={`/${lang}/blog/${post.id}`}
      className="group bg-white rounded-3xl overflow-hidden border border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl block"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          {post.category}
        </span>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-gray-900 leading-[1.3] group-hover:text-blue-900 transition-colors mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-900">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-bold text-gray-700">{post.author}</span>
          </div>
          <span className="text-[11px] font-semibold text-gray-400">{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
};
