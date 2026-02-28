
import React, { useEffect } from 'react';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

export const LegalNotice: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.legalNotice[(lang as Lang) || 'es'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">{t.label}</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{t.title}</h1>
        </div>

        <div className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-headings:font-black prose-p:text-gray-600 prose-li:text-gray-600">
          {lang === 'es' ? (
            <>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos del titular de esta página web:
          </p>

          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 not-prose mb-12">
            <ul className="space-y-3 text-gray-700">
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Titular</strong> Gabriel Faleiro Rodríguez</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">NIF/DNI</strong> 05438547J</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Domicilio</strong> Madrid, España</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Correo electrónico</strong> <a href="mailto:faleirogabrielf@gmail.com" className="hover:text-blue-700">faleirogabrielf@gmail.com</a></li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Actividad</strong> Consultoría de Innovación, Estrategia Tecnológica y Formación.</li>
            </ul>
          </div>

          <h3>1. Propiedad Intelectual</h3>
          <p>
            El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en la presente página web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de <strong>Gabriel Faleiro Rodríguez</strong>.
          </p>
          <p>
            No se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, ni su modificación, transformación o descompilación, ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo.
          </p>
          <p>
            Especialmente, el Juego de Mesa sobre Emprendimiento y los materiales de los Sprints de Ideación son propiedad intelectual exclusiva del titular.
          </p>

          <h3>2. Exclusión de Responsabilidad</h3>
          <p>
            El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>

          <h3>3. Enlaces</h3>
          <p>
            En el caso de que en la página web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
          </p>
          <p> 
            En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.
          </p>

          <h3>4. Legislación Aplicable y Jurisdicción</h3>
          <p>
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Madrid.
          </p>
            </>
          ) : (
            <>
          <p>
            In compliance with Article 10 of Spanish Law 34/2002, of July 11, on Information Society and Electronic Commerce Services (LSSICE), the following identifying data of the owner of this website is shown:
          </p>

          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 not-prose mb-12">
            <ul className="space-y-3 text-gray-700">
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Owner</strong> Gabriel Faleiro Rodríguez</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">NIF/DNI</strong> 05438547J</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Address</strong> Madrid, Spain</li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Email</strong> <a href="mailto:faleirogabrielf@gmail.com" className="hover:text-blue-700">faleirogabrielf@gmail.com</a></li>
              <li><strong className="text-blue-900 uppercase text-xs tracking-widest block mb-1">Activity</strong> Innovation Consulting, Technology Strategy and Training.</li>
            </ul>
          </div>

          <h3>1. Intellectual Property</h3>
          <p>
            The source code, graphics, images, photographs, sounds, animations, software, texts, as well as the information and content contained in this website are protected by Spanish intellectual and industrial property law in favor of <strong>Gabriel Faleiro Rodríguez</strong>.
          </p>
          <p>
            The reproduction and/or publication, in whole or in part, of the website is not permitted, nor its computer processing, distribution, broadcasting, modification, transformation or decompilation, nor other rights legally recognized by its owner, without prior written permission.
          </p>
          <p>
            Especially, the Board Game on Entrepreneurship and the materials of the Ideation Sprints are exclusive intellectual property of the owner.
          </p>

          <h3>2. Disclaimer</h3>
          <p>
            The owner is not responsible, in any case, for any damages that could be caused, including but not limited to: errors or omissions in content, lack of portal availability or transmission of viruses or malicious programs in content, despite having taken all necessary technological measures to prevent it.
          </p>

          <h3>3. Links</h3>
          <p>
            In the event that the website has links or hyperlinks to other Internet sites, the owner will exercise no control over such sites and content. In no case will it assume responsibility for the content of any link belonging to a third-party website.
          </p>
          <p> 
            As an Amazon Affiliate, I earn income from qualifying purchases.
          </p>

          <h3>4. Applicable Law and Jurisdiction</h3>
          <p>
            For the resolution of all disputes or issues related to this website or the activities developed on it, Spanish law shall apply, to which the parties expressly submit, and the Courts and Tribunals of Madrid shall be competent for the resolution of all conflicts arising from or related to its use.
          </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
