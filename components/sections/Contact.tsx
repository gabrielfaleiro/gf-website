
import React from 'react';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

export const ContactForm: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.contact[(lang as Lang) || 'es'];

  return (
  <section id="contacto" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">{t.label}</h2>
        <h3 className="text-5xl font-extrabold mb-8 leading-tight text-gray-900 tracking-tight" dangerouslySetInnerHTML={{ __html: t.title }} />
        <p className="text-gray-600 text-lg mb-0 leading-relaxed max-w-md">{t.description}</p>
      </div>
      <div className="space-y-6">
        <a href="mailto:faleirogabrielf@gmail.com" className="flex items-center gap-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-gray-900 group hover:bg-blue-100 transition-all shadow-sm">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 mb-1">{t.emailLabel}</span>
            <span className="text-lg sm:text-xl font-bold truncate">faleirogabrielf@gmail.com</span>
          </div>
        </a>
        
        <a href="https://www.linkedin.com/in/gabrielfaleiro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-gray-900 group hover:bg-blue-100 transition-all shadow-sm">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
            <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 mb-1">{t.linkedinLabel}</span>
            <span className="text-xl font-bold">{t.linkedinText}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
  );
};
