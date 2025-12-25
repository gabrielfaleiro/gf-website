
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Post } from '../../types';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareUrl = window.location.href;
  const shareText = `He leído este interesante artículo: ${post.title}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-900 transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Blog
        </button>

        <div className="mb-12">
          <span className="text-blue-900 text-xs font-black uppercase tracking-widest mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tighter">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-900">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{post.author}</div>
                <div className="text-xs text-gray-400">Escritor & Estratega</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500">{formatDate(post.date)}</div>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-900 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:italic">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Sección de compartir en redes sociales */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="text-center mb-8">
            <h4 className="text-lg font-black uppercase tracking-widest text-gray-900">Comparte este artículo</h4>
            <p className="text-gray-400 text-sm mt-1 font-medium">Ayúdame a difundir el conocimiento.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* LinkedIn */}
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-gray-700 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all group font-bold text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>

            {/* Twitter / X */}
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all group font-bold text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </a>

            {/* WhatsApp */}
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all group font-bold text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.912-.001-3.793-.457-5.47-1.32l-6.527 1.528zm6.236-3.722l.446.263c1.42.841 3.012 1.285 4.643 1.286 4.887 0 8.863-3.977 8.865-8.864 0-2.367-.922-4.593-2.597-6.268-1.675-1.675-3.901-2.597-6.268-2.597-4.888 0-8.864 3.977-8.865 8.865-.001 1.577.417 3.116 1.207 4.469l.288.495-1.114 4.067 4.166-1.016zm11.192-5.748c-.285-.143-1.688-.833-1.949-.928-.261-.095-.451-.143-.64.143-.19.285-.737.928-.903 1.118-.166.19-.332.214-.617.071-.285-.143-1.204-.444-2.292-1.415-.847-.756-1.419-1.69-1.585-1.975-.166-.285-.018-.439.124-.581.128-.128.285-.332.428-.499.143-.166.19-.285.285-.476.095-.19.047-.356-.024-.499-.071-.143-.64-1.545-.877-2.115-.23-.556-.464-.481-.64-.49-.166-.008-.356-.01-.546-.01s-.499.071-.761.356c-.261.285-.998.975-.998 2.378s1.022 2.758 1.164 2.948c.143.19 2.012 3.073 4.874 4.312.681.295 1.212.471 1.625.602.684.217 1.307.187 1.8.113.549-.083 1.688-.689 1.925-1.355.237-.666.237-1.236.166-1.355-.071-.118-.261-.19-.546-.332z"/></svg>
              WhatsApp
            </a>

            {/* Copiar enlace */}
            <button 
              onClick={handleCopyLink}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all font-bold text-sm ${copied ? 'bg-blue-900 border-blue-900 text-white' : 'bg-slate-50 border-slate-100 text-gray-700 hover:bg-slate-200'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {copied ? '¡Copiado!' : 'Copiar enlace'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
