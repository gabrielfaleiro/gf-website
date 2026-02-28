
import React, { useEffect } from 'react';
import translations, { Lang } from '../../src/translations';
import { useParams } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  const { lang = 'es' } = useParams<{ lang: string }>();
  const t = translations.privacyPolicy[(lang as Lang) || 'es'];

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
            En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la normativa española vigente, me comprometo a tratar tus datos con total transparencia y seguridad.
          </p>

          <h3>1. Responsable del Tratamiento</h3>
          <p>
            El responsable del tratamiento de los datos recogidos a través de esta web es <strong>Gabriel Faleiro Rodríguez</strong>. Puedes contactar conmigo para cualquier consulta relacionada con tus datos en: <a href="mailto:faleirogabrielf@gmail.com" className="text-blue-900 font-bold">faleirogabrielf@gmail.com</a>.
          </p>

          <h3>2. Finalidad del Tratamiento</h3>
          <p>Trato la información que me facilitas con las siguientes finalidades:</p>
          <ul>
            <li><strong>Gestión de Servicios:</strong> Prestar los servicios de consultoría de soluciones, arquitectura de software y mentoría técnica solicitados.</li>
            <li><strong>Comercialización:</strong> Gestionar la venta y envío del juego de mesa sobre emprendimiento y la organización de Sprints de ideación.</li>
            <li><strong>Comunicación:</strong> Responder a tus consultas a través del formulario de contacto o correo electrónico.</li>
          </ul>

          <h3>3. Legitimación</h3>
          <p>
            La base legal para el tratamiento de tus datos es el consentimiento del interesado al contactar o contratar mis servicios, y la ejecución de un contrato en el caso de la adquisición de productos o servicios de consultoría.
          </p>

          <h3>4. Conservación de Datos</h3>
          <p>
            Tus datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
          </p>

          <h3>5. Derechos del Usuario</h3>
          <p>Tienes derecho a obtener confirmación sobre si estoy tratando tus datos personales. Puedes ejercer tus derechos de:</p>
          <ul>
            <li>Acceso, Rectificación y Supresión.</li>
            <li>Limitación y Oposición a su tratamiento.</li>
            <li>Portabilidad de los datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puedes enviar una solicitud acompañada de una copia de tu DNI a <a href="mailto:faleirogabrielf@gmail.com" className="text-blue-900 font-bold">faleirogabrielf@gmail.com</a>.
          </p>

          <h3>6. Seguridad</h3>
          <p>
            Implemento las medidas de seguridad técnicas necesarias para evitar la alteración, pérdida o tratamiento no autorizado de tus datos, siguiendo estándares de profesionalidad y confidencialidad similares a los exigidos en sectores críticos de ingeniería.
          </p>
            </>
          ) : (
            <>
          <p>
            In compliance with the General Data Protection Regulation (GDPR) and current Spanish regulations, I am committed to treating your data with total transparency and security.
          </p>

          <h3>1. Data Controller</h3>
          <p>
            The data controller for information collected through this website is <strong>Gabriel Faleiro Rodríguez</strong>. You can contact me for any inquiries related to your data at: <a href="mailto:faleirogabrielf@gmail.com" className="text-blue-900 font-bold">faleirogabrielf@gmail.com</a>.
          </p>

          <h3>2. Purpose of Processing</h3>
          <p>I treat the information you provide me with the following purposes:</p>
          <ul>
            <li><strong>Service Management:</strong> Provide requested consulting services on solutions, software architecture and technical mentoring.</li>
            <li><strong>Commercialization:</strong> Manage the sale and shipment of the board game on entrepreneurship and the organization of Ideation Sprints.</li>
            <li><strong>Communication:</strong> Respond to your inquiries through the contact form or email.</li>
          </ul>

          <h3>3. Legal Basis</h3>
          <p>
            The legal basis for processing your data is your consent when you contact or hire my services, and the execution of a contract in the case of acquiring products or consulting services.
          </p>

          <h3>4. Data Retention</h3>
          <p>
            Your personal data will be retained for as long as necessary to fulfill the purpose for which it was collected and to determine any possible liabilities that could arise from that purpose and data processing.
          </p>

          <h3>5. User Rights</h3>
          <p>You have the right to obtain confirmation of whether I am processing your personal data. You can exercise your rights to:</p>
          <ul>
            <li>Access, Correction and Deletion.</li>
            <li>Restriction and Opposition to its processing.</li>
            <li>Data Portability.</li>
          </ul>
          <p>
            To exercise these rights, you can send a request accompanied by a copy of your ID to <a href="mailto:faleirogabrielf@gmail.com" className="text-blue-900 font-bold">faleirogabrielf@gmail.com</a>.
          </p>

          <h3>6. Security</h3>
          <p>
            I implement the necessary technical security measures to prevent unauthorized alteration, loss or processing of your data, following standards of professionalism and confidentiality similar to those required in critical engineering sectors.
          </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
