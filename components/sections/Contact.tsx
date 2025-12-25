
import React from 'react';

export const ContactForm: React.FC = () => (
  <section id="contacto" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Contacto Directo</h2>
        <h3 className="text-5xl font-extrabold mb-8 leading-tight text-gray-900 tracking-tight">Hablemos de tu próximo gran paso.</h3>
        <p className="text-gray-600 text-lg mb-0 leading-relaxed max-w-md">
          Si buscas una auditoría, consultoría estratégica o simplemente quieres conectar, elige tu vía preferida. Respondo en menos de 24 horas.
        </p>
      </div>
      <div className="space-y-6">
        <a href="mailto:faleirogabrielf@gmail.com" className="flex items-center gap-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-gray-900 group hover:bg-blue-100 transition-all shadow-sm">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 mb-1">Email</span>
            <span className="text-xl font-bold">faleirogabrielf@gmail.com</span>
          </div>
        </a>
        <a href="https://wa.me/34686048730" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-gray-900 group hover:bg-blue-100 transition-all shadow-sm">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.912-.001-3.793-.457-5.47-1.32l-6.527 1.528zm6.236-3.722l.446.263c1.42.841 3.012 1.285 4.643 1.286 4.887 0 8.863-3.977 8.865-8.864 0-2.367-.922-4.593-2.597-6.268-1.675-1.675-3.901-2.597-6.268-2.597-4.888 0-8.864 3.977-8.865 8.865-.001 1.577.417 3.116 1.207 4.469l.288.495-1.114 4.067 4.166-1.016zm11.192-5.748c-.285-.143-1.688-.833-1.949-.928-.261-.095-.451-.143-.64.143-.19.285-.737.928-.903 1.118-.166.19-.332.214-.617.071-.285-.143-1.204-.444-2.292-1.415-.847-.756-1.419-1.69-1.585-1.975-.166-.285-.018-.439.124-.581.128-.128.285-.332.428-.499.143-.166.19-.285.285-.476.095-.19.047-.356-.024-.499-.071-.143-.64-1.545-.877-2.115-.23-.556-.464-.481-.64-.49-.166-.008-.356-.01-.546-.01s-.499.071-.761.356c-.261.285-.998.975-.998 2.378s1.022 2.758 1.164 2.948c.143.19 2.012 3.073 4.874 4.312.681.295 1.212.471 1.625.602.684.217 1.307.187 1.8.113.549-.083 1.688-.689 1.925-1.355.237-.666.237-1.236.166-1.355-.071-.118-.261-.19-.546-.332z"/></svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 mb-1">Móvil</span>
          <span className="text-xl font-bold">+34 686 04 87 30</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/gabrielfaleiro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-gray-900 group hover:bg-blue-100 transition-all shadow-sm">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 mb-1">LinkedIn</span>
          <span className="text-xl font-bold">Perfil Profesional</span>
        </div>
      </a>
    </div>
  </div>
</section>
);
