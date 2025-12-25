
import React from 'react';
import { Post } from '../../types';
import { PostCard } from '../widgets/PostCard';

interface BlogProps {
  latestPosts: Post[];
  filteredPosts: Post[];
  searchQuery: string;
  setSearchQuery: (s: string) => void;
  onPostClick: (id: string) => void;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

export const Blog: React.FC<BlogProps> = ({ 
  latestPosts, 
  filteredPosts, 
  searchQuery, 
  setSearchQuery,
  onPostClick
}) => (
  <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="mb-12">
          <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Lo más reciente</h2>
          <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Artículos Destacados</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <PostCard key={post.id} post={post} onClick={onPostClick} />
          ))}
        </div>
      </div>

      <div className="pt-16 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Archivo</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">Explora todo el contenido</h3>
          </div>
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Buscar por título o contenido..." 
              className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-100 outline-none focus:ring-4 focus:ring-blue-50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="flex flex-col sm:flex-row gap-6 group cursor-pointer" 
                onClick={() => onPostClick(post.id)}
              >
                 <div className="w-full sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <span className="text-blue-900 text-[10px] font-black uppercase tracking-widest mb-2">{post.category}</span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-900 transition-colors line-clamp-2">{post.title}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{formatDate(post.date)}</div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-medium">No se han encontrado artículos que coincidan con tu búsqueda.</p>
            <button onClick={() => setSearchQuery('')} className="mt-4 text-blue-900 font-bold hover:underline">Limpiar búsqueda</button>
          </div>
        )}
      </div>
    </div>
  </section>
);
