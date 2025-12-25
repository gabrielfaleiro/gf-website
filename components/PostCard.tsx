
import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onDelete: (id: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          {post.category}
        </span>
      </div>
      <div className="p-7">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-[1.3] group-hover:text-blue-900 transition-colors">
            {post.title}
          </h3>
          <button 
            onClick={() => onDelete(post.id)}
            className="text-gray-300 hover:text-red-500 transition-colors shrink-0"
            title="Eliminar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-900">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-bold text-gray-700">{post.author}</span>
          </div>
          <span className="text-[11px] font-semibold text-gray-400">{post.date}</span>
        </div>
      </div>
    </article>
  );
};
