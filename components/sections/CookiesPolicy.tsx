
import React, { useEffect, useState } from 'react';
import { CookieSettings } from '../widgets/CookieBanner';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

interface CookiesPolicyProps {
  onOpenSettings?: () => void;
  currentConsent: CookieSettings | null;
  onUpdateConsent: (settings: CookieSettings) => void;
}

export const CookiesPolicy: React.FC<CookiesPolicyProps> = ({ 
  onOpenSettings, 
  currentConsent,
  onUpdateConsent
}) => {
  const [tempSettings, setTempSettings] = useState<CookieSettings>({
    analysis: true
  });
  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.cookiesPolicy[(lang as Lang) || 'es'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentConsent) {
      setTempSettings(currentConsent);
    }
  }, [currentConsent]);

  const handleToggle = (key: keyof CookieSettings) => {
    const newSettings = { ...tempSettings, [key]: !tempSettings[key] };
    setTempSettings(newSettings);
    onUpdateConsent(newSettings);
  };

  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">{t.label}</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{t.title}</h1>
        </div>
        
        <div className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-headings:font-black prose-p:text-gray-600">
          <p>{t.intro}</p>

          <div className="not-prose my-12 bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 border-b border-gray-50 bg-slate-50">
              <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight mb-2">{t.currentSettingsTitle}</h3>
              <p className="text-sm text-gray-500 font-medium">{t.currentSettingsDesc}</p>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Essential - Manteniendo el Front Visual */}
              <div className="flex items-center justify-between gap-6 pb-6 border-b border-gray-50">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">{t.necessaryTitle}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.necessaryDesc}</p>
                </div>
                <div className="relative inline-flex items-center opacity-50 cursor-not-allowed shrink-0">
                  <div className="w-12 h-6 bg-blue-900 rounded-full"></div>
                  <div className="absolute right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              {/* Analysis */}
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">{t.analysisTitle}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.analysisDesc}</p>
                </div>
                <button 
                  onClick={() => handleToggle('analysis')}
                  className={`relative inline-flex items-center cursor-pointer transition-all focus:outline-none h-6 w-12 rounded-full shrink-0 ${tempSettings.analysis ? 'bg-blue-900' : 'bg-gray-400'}`}
                >
                  <span className={`inline-block w-4 h-4 transform bg-white rounded-full shadow-sm transition-transform ${tempSettings.analysis ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

          <h3>{t.whatIs}</h3>
          <p>{t.whatIsDesc}</p>

          <h3>{t.cookiesUsedTitle}</h3>
          <p>{t.cookiesUsedDesc}</p>

          <div className="not-prose overflow-x-auto my-8 border border-gray-100 rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-blue-900 uppercase text-[10px] font-black tracking-widest border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">{lang === 'en' ? 'Provider' : 'Proveedor'}</th>
                  <th className="px-6 py-4">{lang === 'en' ? 'Purpose' : 'Finalidad'}</th>
                  <th className="px-6 py-4">{lang === 'en' ? 'Type' : 'Tipo'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600">
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Gabriel Faleiro</td>
                  <td className="px-6 py-4">
                    {lang === 'en' 
                      ? 'Stores your privacy preferences (technical cookies).' 
                      : 'Almacena tus preferencias de privacidad (cookies técnicas).'}
                  </td>
                  <td className="px-6 py-4">{lang === 'en' ? 'Own / Necessary' : 'Propia / Necesaria'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">{lang === 'en' ? 'Anonymous Analysis' : 'Análisis Anónimo'}</td>
                  <td className="px-6 py-4">
                    {lang === 'en' 
                      ? 'Collects statistical browsing data to optimize user experience.' 
                      : 'Recopila datos estadísticos de navegación para optimizar la experiencia de usuario.'}
                  </td>
                  <td className="px-6 py-4">{lang === 'en' ? 'Third parties / Analysis' : 'Terceros / Análisis'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>{t.managementTitle}</h3>
          <p>{t.managementDesc}</p>
          <p>
            {lang === 'en' 
              ? 'Here are the help links from the main browsers:' 
              : 'Aquí tienes los enlaces de ayuda de los principales navegadores:'}
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h3>{t.additionalNotesTitle}</h3>
          <p>{t.additionalNotesDesc}</p>
        </div>
      </div>
    </section>
  );
};
