import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TVCA_DATA, TVCA_URL, TVCA_URL_EN } from '../../data/tvca';
import { QRCodeSVG } from 'qrcode.react';
import translations, { Lang } from '../../src/translations';

export const TVCA: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang?: string }>();
  const t = translations.tvca[(lang as Lang) || 'es'];

  const name = lang === 'en' ? TVCA_DATA.name_en : TVCA_DATA.name;
  const jobTitle = lang === 'en' ? TVCA_DATA.jobTitle_en : TVCA_DATA.jobTitle;
  const companyName = lang === 'en' ? TVCA_DATA.companyName_en : TVCA_DATA.companyName;

  const [showQR, setShowQR] = useState(false);

  // decide which URL to encode in the QR code based on language
  const qrUrl = lang === 'en' ? TVCA_URL_EN : TVCA_URL;

  // build the contact card string once to reuse for both download and mobile link
  const vcardString = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${jobTitle}
ORG:${companyName}
TEL:${TVCA_DATA.phone}
EMAIL:${TVCA_DATA.email}
URL;TYPE=WORK:${TVCA_DATA.webCompany}
URL;TYPE=HOME:${TVCA_DATA.webPersonal}
END:VCARD`;

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcardString)}`;

  return (
    <section className="pt-24 pb-5 px-4 sm:px-6 lg:px-8 min-h-[80vh] bg-gray-50 flex items-start justify-center">
      <main className="bg-white w-full max-w-md rounded-[24px] card-shadow overflow-hidden border border-gray-100 relative min-h-[720px] flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-6">
          <section className="flex flex-col items-center text-center mt-4">
            <div className="relative">
              <img alt={name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" src={TVCA_DATA.avatar} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-4">{name}</h1>
            <p className="text-sm font-medium text-accent bg-blue-50 px-3 py-1 rounded-full mt-2">{jobTitle}</p>
            {/* company logo + name */}
            {TVCA_DATA.companyLogo && (
              <img
                src={TVCA_DATA.companyLogo}
                alt={companyName}
                className="w-16 h-16 object-contain mt-3 rounded-lg"
              />
            )}
            <p className="text-xs text-gray-500 mt-1">{companyName}</p>
          </section>

          <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{t.contactDetails}</h3>
            <ul className="space-y-3">
              <li className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-custom group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-xs text-gray-500">{t.phoneLabel}</p>
                  <p className="text-sm font-medium text-gray-900">{TVCA_DATA.phone}</p>
                </div>
              </li>

              <li className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-custom group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-xs text-gray-500">{t.emailLabel}</p>
                  <p className="text-sm font-medium text-gray-900 break-all">{TVCA_DATA.email}</p>
                </div>
              </li>

              <li className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-custom group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M10.59 13.41a1 1 0 001.41 0l3.54-3.54a1 1 0 10-1.41-1.41L10.59 11.99 9.17 10.59a1 1 0 00-1.41 1.41l2.83 2.83zM6.76 6.76a4 4 0 015.66 0l1.77 1.77a4 4 0 11-5.66 5.66L6.76 12.42a1 1 0 101.41 1.41l1.41-1.41a2 2 0 112.83 2.83L9.41 19.24a2 2 0 01-2.83 0L4.59 16.25a1 1 0 10-1.41 1.41l2.83 2.83a4 4 0 005.66 0l3.54-3.54a4 4 0 10-5.66-5.66L9.17 14.41a1 1 0 00-1.41-1.41L6.76 15.34a4 4 0 01-5.66-5.66l3.54-3.54z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-xs text-gray-500">{t.websiteLabel}</p>
                  <p className="text-sm font-medium text-gray-900">{TVCA_DATA.webCompany.replace(/^https?:\/\//, '')}</p>
                </div>
              </li>
            </ul>
          </section>


        <section>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                {t.socialProfiles}
            </h3>
            <div className="grid grid-cols-2 gap-3">
                {/* Botón Web de Trabajo */}
                <a 
                href={TVCA_DATA.linkedInPersonal} 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-accent transition-all group"
                >
                <span className="mb-2 text-gray-500 group-hover:text-accent">
                    {/* Icono de LinkedIn con tu SVG personalizado */}
                    <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </span>
                <span className="text-xs font-medium">LinkedIn</span>
                </a>

                {/* Botón Web Personal */}
                <a 
                href={TVCA_DATA.webPersonal} 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-accent transition-all group"
                >
                <span className="mb-2 text-gray-500 group-hover:text-accent">
                    {/* Icono SVG de Red/Mundial insertado directamente */}
                    <svg 
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden
                    >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </span>
                <span className="text-xs font-medium">{t.webPersonal}</span>
                </a>
            </div>
        </section>

          <section className="flex flex-col gap-3 pb-0">
            {/* Add Contact button with contacts icon */}
            <a
              href={vcardHref}
              download={`${name.replace(/\s+/g, '_')}.vcf`}
              className="w-full py-3 px-6 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-md hover:shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 1C7.9 1 7 1.9 7 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9zm0 2h10v18H9V3zm1 2h8v2h-8V7zm0 3h8v2h-8v-2zm0 3h8v2h-8v-2zm0 3h8v2h-8v-2z" />
              </svg>
              <span>{t.addContactLabel}</span>
            </a>
          </section>
        </div>

        <div className="sticky bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent pt-2">
          <button onClick={() => setShowQR(true)} className="w-full py-3.5 bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-black transition-all transform active:scale-95 flex items-center justify-center gap-2 group">
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm10-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm7-2h1v1h-1v-1zm1 0h1v2h-1v-2zm1 0h4v1h-4v-1zm4 1h1v1h-1v-1zm0 1h2v1h-2v-1z" />
            </svg>
            <span className="font-semibold">{t.showQRLabel}</span>
          </button>
        </div>

        {/* QR Modal */}
        {showQR && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm rounded-t-2xl sm:rounded-2xl p-6 relative animate-in">
              <button 
                aria-label="close" 
                onClick={() => setShowQR(false)} 
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors group"
                >
                {/* Icono de X sutil pero visible */}
                <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                </button>
              <div className="text-center mt-2">
                <h3 className="text-lg font-bold text-gray-900">{t.scanQRLabel}</h3>
                <div className="my-6 p-4 border-2 border-dashed border-gray-200 rounded-xl inline-block bg-white">
                  {/* Render QR code using qrcode.react library instead of an external image */}
                  <QRCodeSVG value={qrUrl} size={192} className="w-48 h-48" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default TVCA;
