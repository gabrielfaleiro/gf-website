
import React, { useState, useEffect } from 'react';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

export interface CookieSettings {
  analysis: boolean;
}

interface CookieBannerProps {
  onAccept: (settings: CookieSettings) => void;
  showSettingsOnly?: boolean;
  onCloseSettings?: () => void;
  initialSettings?: CookieSettings;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ 
  onAccept, 
  showSettingsOnly = false, 
  onCloseSettings,
  initialSettings
}) => {
  const [view, setView] = useState<'banner' | 'settings'>(showSettingsOnly ? 'settings' : 'banner');
  const [settings, setSettings] = useState<CookieSettings>(initialSettings || {
    analysis: true
  });

  const handleSave = () => {
    onAccept(settings);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    const allOn = { analysis: true };
    onAccept(allOn);
    if (onCloseSettings) onCloseSettings();
  };

  const handleEssentialOnly = () => {
    const essentialOnly = { analysis: false };
    onAccept(essentialOnly);
    if (onCloseSettings) onCloseSettings();
  };

  if (view === 'settings') {
    const { lang = 'es' } = useParams<{ lang: string }>();
    const t = translations.cookiesPolicy[(lang as Lang) || 'es'];

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{t.currentSettingsTitle}</h3>
            {onCloseSettings && (
              <button onClick={onCloseSettings} className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Fila informativa de Cookies Necesarias - Manteniendo el Front */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50">
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">{t.necessaryTitle}</h4>
                  <p className="text-xs text-gray-500">{t.necessaryDesc}</p>
              </div>
              <div className="relative inline-flex items-center cursor-not-allowed opacity-50 shrink-0">
                <div className="w-11 h-6 bg-blue-900 rounded-full transition-colors"></div>
                <div className="absolute right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-1">{t.analysisTitle}</h4>
                <p className="text-xs text-gray-500">{t.analysisDesc}</p>
              </div>
              <button 
                onClick={() => setSettings(s => ({ ...s, analysis: !s.analysis }))}
                className={`relative inline-flex items-center cursor-pointer transition-colors focus:outline-none h-6 w-11 rounded-full shrink-0 ${settings.analysis ? 'bg-blue-900' : 'bg-gray-400'}`}
              >
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${settings.analysis ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
          <div className="p-8 bg-gray-50 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleSave}
              className="flex-1 bg-blue-900 text-white py-3 rounded-2xl font-bold hover:bg-blue-800 transition-all text-sm uppercase tracking-wider"
            >
              {t.saveSelection}
            </button>
            <button 
              onClick={handleAcceptAll}
              className="flex-1 bg-white text-blue-900 border border-gray-200 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all text-sm uppercase tracking-wider"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-[90] p-4 sm:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-grow text-center lg:text-left">
            <h3 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-2">{t.controlLabel}</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Utilizo cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. Tú decides qué quieres compartir. Puedes leer más en nuestra <span className="font-bold">{t.policyLinkText}</span>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <button 
              onClick={() => setView('settings')}
              className="px-6 py-3 rounded-2xl text-xs font-bold text-gray-500 hover:text-blue-900 uppercase tracking-widest transition-colors"
            >
              {t.configure}
            </button>
            <button 
              onClick={handleEssentialOnly}
              className="px-6 py-3 rounded-2xl bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-widest border border-gray-100 hover:bg-gray-100 transition-all"
            >
              {t.onlyNecessary}
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-8 py-3 rounded-2xl bg-blue-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-800 shadow-lg shadow-blue-900/10 transition-all"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
