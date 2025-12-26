
import React from 'react';
import { View } from '../layout/Navigation';
import { ContactForm } from './Contact';

interface HomeProps {
  setCurrentView: (v: View, elementId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentView }) => (
  <>
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tighter">
            Soluciones <span className="text-blue-900">Estratégicas</span> para marcas que inspiran.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
            Gabriel Faleiro. Consultor tecnológico, desarrollador y mentor. Transformo la visión de profesionales en impacto digital real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button onClick={() => setCurrentView('services')} className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg">
              Explorar Servicios
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01] bg-blue-50">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" alt="Gabriel" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-3">En los auriculares</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Escucha mi Podcast</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Reflexiones semanales sobre tecnología, marca personal y el futuro del trabajo digital. Suscríbete para no perderte ningún capítulo.
            </p>
            <a href="https://open.spotify.com/show/1souQNmuVj2SOceSldvcHA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-blue-900 hover:text-blue-700 transition-colors">
               Abrir en Spotify <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.223.367-.704.482-1.071.259-2.987-1.825-6.747-2.239-11.176-1.229-.42.096-.841-.171-.937-.591-.096-.42.171-.841.591-.937 4.846-1.108 9.006-.632 12.334 1.403.367.222.482.704.259 1.095zm1.47-3.256c-.281.458-.881.603-1.339.322-3.419-2.1-8.629-2.712-12.673-1.485-.516.156-1.058-.142-1.215-.658-.156-.516.142-1.058.658-1.215 4.622-1.403 10.369-.714 14.247 1.668.459.274.604.874.322 1.368zm.127-3.413c-4.1-2.435-10.852-2.66-14.754-1.475-.629.19-1.293-.162-1.483-.791-.19-.629.162-1.293.791-1.483 4.496-1.365 11.96-1.091 16.698 1.719.566.335.753 1.069.418 1.635-.336.566-1.07.753-1.636.418-.034-.023-.034-.023-.034-.023z"/></svg>
            </a>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            <iframe 
              style={{ borderRadius: '24px' }} 
              src="https://open.spotify.com/embed/show/1souQNmuVj2SOceSldvcHA?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
  </>
);
