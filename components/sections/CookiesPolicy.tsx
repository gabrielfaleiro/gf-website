
import React, { useEffect } from 'react';

export const CookiesPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Legal</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Política de Cookies
          </h1>
        </div>
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-gray-600">
            Esta página web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del usuario y realizar análisis estadísticos sobre su uso.
          </p>
          <p className="text-gray-500 italic">
            El contenido detallado de la política de cookies está pendiente de actualización. Por favor, contacta con Gabriel Faleiro si necesitas información específica sobre el uso de cookies en este sitio.
          </p>
        </div>
      </div>
    </section>
  );
};
