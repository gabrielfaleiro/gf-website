
import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SERVICES } from '../../data/services';
import { useNavigate, useParams, Link } from 'react-router-dom';
import translations, { Lang } from '../../src/translations';

export const Services: React.FC = () => {
  const { serviceId, lang = 'es' } = useParams<{ serviceId: string, lang: string }>();
  const t = translations.services[(lang as Lang) || 'es'];
  const navigate = useNavigate();

  const selectedService = useMemo(() => {
    return SERVICES.find(s => s.id === serviceId);
  }, [serviceId]);

  const handleContact = () => {
    navigate(`/${lang}`);
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        {!selectedService ? (
          <>
            <div className="mb-16">
              <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">{t.label}</h2>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{t.title}</h3>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">{t.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map(service => (
                <Link 
                  key={service.id} 
                  to={`/${lang}/servicios/${service.id}`}
                  className="p-10 border border-gray-100 rounded-[2.5rem] bg-white hover:border-blue-100 hover:shadow-xl transition-all group block text-left"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'en' ? (service.title_en || service.title_es) : service.title_es}</h4>
                  <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3">{lang === 'en' ? (service.description_en || service.description_es) : service.description_es}</p>
                  <span className="text-blue-900 font-bold flex items-center group-hover:translate-x-1 transition-all">
                    {t.knowMore} <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link 
              to={`/${lang}/servicios`}
              className="mb-8 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-900 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToAll}
            </Link>
            
            <div className="w-20 h-20 bg-blue-900 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/20">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={selectedService.icon} />
              </svg>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {lang === 'en' ? (selectedService.title_en || selectedService.title_es) : selectedService.title_es}
            </h3>
            
            <div className="mb-16">
              <p className="font-medium text-gray-900 text-2xl mb-8 leading-snug">
                {lang === 'en' ? (selectedService.description_en || selectedService.description_es) : selectedService.description_es}
              </p>
              
              <div className="prose prose-lg prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-900 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:italic overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lang === 'en' ? (selectedService.explanation_en || selectedService.explanation_es || '') : (selectedService.explanation_es || '')}
                </ReactMarkdown>
              </div>
            </div>

            <div className="p-10 md:p-12 bg-blue-50 rounded-[3rem] border border-blue-100 text-center md:text-left relative overflow-hidden">
               <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
               <div className="relative z-10">
                 <h4 className="text-2xl font-bold text-blue-900 mb-4">{t.isThisItTitle}</h4>
                 <p className="text-gray-600 text-lg mb-8 max-w-xl">{t.isThisItDesc}</p>
                 <button 
                   onClick={handleContact} 
                   className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200/50"
                 >
                   {t.contactNow}
                 </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
