/**
 * Tarjeta de Visita Cuenta Ajena (TVCA)
 *
 * Página de tarjeta de visita digital para perfil profesional en WILOC.
 * Diseño mobile-first: QR, cargo, teléfono, email, logo empresa y enlaces.
 * Todo el contenido fluye de forma natural; si cabe en pantalla se muestra sin scroll.
 *
 * @module components/sections/TVCA
 */

import React, { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { TVCA_DATA, TVCA_URL, TVCA_URL_EN } from '../../data/tvca';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

/** Genera y descarga un vCard para añadir el contacto en el móvil */

const btnLinkClass =
  'w-full max-w-xs flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 hover:border-emerald-500/50 hover:bg-gray-800/50 transition-colors text-left group';

export const TVCA: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.tvca[(lang as Lang) || 'es'];

  const downloadVCard = () => {
    const phoneClean = TVCA_DATA.phone.replace(/[\s\-\.]/g, '');
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${TVCA_DATA.name_en && lang === 'en' ? TVCA_DATA.name_en : TVCA_DATA.name}`,
      `TEL;TYPE=WORK,VOICE:${phoneClean}`,
      `EMAIL:${TVCA_DATA.email}`,
      `ORG:${TVCA_DATA.companyName_en && lang === 'en' ? TVCA_DATA.companyName_en : TVCA_DATA.companyName}`,
      `TITLE:${TVCA_DATA.jobTitle_en && lang === 'en' ? TVCA_DATA.jobTitle_en : TVCA_DATA.jobTitle}`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto-gabriel-faleiro.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <section className="flex flex-col items-center justify-center px-4 py-8 pt-24 pb-24 gap-6">
        {/* QR code value depends on current language; using key forces a fresh render when it changes */}
        {(() => {
          const qrValue = lang === 'en' ? TVCA_URL_EN : TVCA_URL;
          return (
            <QRCodeSVG
              key={qrValue}
              value={qrValue}
              size={200}
              level="M"
              className="rounded-lg bg-white p-2"
              aria-label="Código QR que enlaza a esta tarjeta de visita"
            />
          );
        })()}

        <p className="text-gray-400 text-sm md:text-base font-medium text-center">
          {lang === 'en' ? (TVCA_DATA.jobTitle_en || TVCA_DATA.jobTitle) : TVCA_DATA.jobTitle}
        </p>

        <div className="flex flex-col items-center gap-3 text-sm">
          <button
            type="button"
            onClick={downloadVCard}
            className="text-white hover:text-emerald-400 transition-colors font-medium flex items-center gap-2"
            aria-label={t.addContactLabel}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {TVCA_DATA.phone}
          </button>
          <a
            href={`mailto:${TVCA_DATA.email}`}
            className="text-white hover:text-emerald-400 transition-colors font-medium break-all flex items-center gap-2"
            aria-label={lang === 'en' ? 'Send email' : 'Enviar email'}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {TVCA_DATA.email}
          </a>
        </div>

        {/* Logo empresa - marco blanco, 50% más grande, esquinas redondeadas */}
        <div className="mt-4 p-1 bg-white rounded-2xl">
          <img
            src={TVCA_DATA.companyLogo}
            alt="Logo WILOC Technologies"
            className="h-24 w-auto object-contain rounded-xl"
          />
        </div>

        {/* Enlaces como botones sutiles: icono izquierda, link derecha */}
        <div className="flex flex-col items-center gap-3 mt-6 w-full max-w-xs">
          <a
            href={TVCA_DATA.webPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className={btnLinkClass}
            aria-label={t.webPersonal}
          >
            <svg className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors truncate">gabrielfaleiro.com</span>
          </a>
          <a
            href={TVCA_DATA.linkedInPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className={btnLinkClass}
            aria-label={t.linkedInPersonal}
          >
            <svg className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors">{lang === 'en' ? 'Personal LinkedIn' : 'LinkedIn Personal'}</span>
          </a>

          <a
            href="https://wiloc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnLinkClass}
            aria-label={t.webEmployedCompany}
          >
            <svg className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors truncate">wiloc.com</span>
          </a>
          <a
            href={TVCA_DATA.linkedInCompany}
            target="_blank"
            rel="noopener noreferrer"
            className={btnLinkClass}
            aria-label={lang === 'en' ? `${TVCA_DATA.companyName_en || TVCA_DATA.companyName} on LinkedIn` : `WILOC Technologies en LinkedIn`}
          >
            <svg className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors truncate">{lang === 'en' ? (TVCA_DATA.companyName_en || TVCA_DATA.companyName) : TVCA_DATA.companyName}</span>
          </a>
          
        </div>
      </section>
    </div>
  );
};
