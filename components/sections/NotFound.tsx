
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang: string }>();

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        <div className="relative inline-block mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black text-blue-900/5 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Página <span className="text-blue-900">no encontrada</span>
            </h2>
          </div>
        </div>
        
        <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-md mx-auto">
          Parece que te has perdido en la red de innovación estratégica. El contenido que buscas ha cambiado de lugar o ya no existe.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to={`/${lang}`} 
            className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200/50 flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          <Link 
            to={`/${lang}/blog`} 
            className="bg-white text-gray-600 border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all text-center"
          >
            Explorar el Blog
          </Link>
        </div>
      </div>
    </section>
  );
};
