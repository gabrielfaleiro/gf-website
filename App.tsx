
import React, { useState, useMemo, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Service, Product, Post } from './types';
import { PostCard } from './components/PostCard';
import { ALL_POSTS } from './posts/index';

type View = 'home' | 'services' | 'products' | 'blog';

const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Consultoría Estratégica',
    description: 'Análisis profundo de modelos de negocio digitales para optimizar procesos y aumentar la eficiencia operativa.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V12'
  },
  {
    id: 's2',
    title: 'Arquitectura de Software',
    description: 'Diseño de sistemas robustos, scalables y mantenibles adaptados a las necesidades técnicas más exigentes.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    id: 's3',
    title: 'Mentoría Técnica',
    description: 'Acompañamiento personalizado para desarrolladores y líderes técnicos en su crecimiento profesional.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  }
];

const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Framework de Marca Personal',
    description: 'Un sistema integral de documentación para definir tu voz, valores y presencia digital.',
    price: '',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 'p2',
    name: 'Ecosistema de Productividad',
    description: 'Configuración avanzada de Notion para gestión de proyectos complejos y objetivos anuales.',
    price: '',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
];

const formatDate = (date: Date) => {
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

const Navigation = ({ currentView, setCurrentView }: { currentView: View, setCurrentView: (v: View) => void }) => (
  <nav className="glass-nav border-b fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">Gabriel Faleiro<span className="text-blue-900">.</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-wider text-gray-500">
          <button onClick={() => setCurrentView('home')} className={`${currentView === 'home' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Inicio</button>
          <button onClick={() => setCurrentView('services')} className={`${currentView === 'services' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Servicios</button>
          <button onClick={() => setCurrentView('products')} className={`${currentView === 'products' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Recursos</button>
          <button onClick={() => setCurrentView('blog')} className={`${currentView === 'blog' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Blog</button>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 border-t px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <span className="text-xl font-black tracking-tight text-gray-900 uppercase">G. Faleiro<span className="text-blue-900">.</span></span>
        <p className="text-gray-400 text-sm mt-2">© 2024 - Estrategia Digital y Tecnología.</p>
      </div>
      <div className="flex gap-8 font-bold text-gray-600 text-sm">
        <a href="https://www.linkedin.com/in/gabrielfaleiro/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">LinkedIn</a>
        <a href="https://wa.me/34686048730" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">WhatsApp</a>
        <a href="https://github.com/gabrielfaleiro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

const ContactForm = () => (
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

const HomeView = ({ setCurrentView }: { setCurrentView: (v: View) => void }) => (
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

const ServicesView = ({ setCurrentView }: { setCurrentView: (v: View) => void }) => (
  <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Expertise</h2>
        <h3 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Servicios de Consultoría</h3>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">Combinando visión estratégica con ejecución técnica impecable para transformar tu presencia en el mercado.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <div key={service.id} className="p-10 border border-gray-100 rounded-[2.5rem] bg-white hover:border-blue-100 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
            <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
            <button onClick={() => setCurrentView('home')} className="text-blue-900 font-bold flex items-center hover:translate-x-1 transition-all">
              Saber más <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductsView = ({ setCurrentView }: { setCurrentView: (v: View) => void }) => (
  <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Recursos</h2>
        <h3 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Sistemas y Frameworks</h3>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">Herramientas diseñadas para optimizar la productividad de creadores y profesionales digitales.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all">
            <div className="aspect-[16/9] overflow-hidden bg-blue-50">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-10">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h4>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">{product.description}</p>
              <button onClick={() => setCurrentView('home')} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-md">
                Solicitar Acceso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogView = ({ 
  latestPosts, 
  filteredPosts, 
  searchQuery, 
  setSearchQuery,
  onPostClick
}: { 
  latestPosts: Post[], 
  filteredPosts: Post[], 
  searchQuery: string, 
  setSearchQuery: (s: string) => void,
  onPostClick: (id: string) => void
}) => (
  <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="mb-12">
          <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Lo más reciente</h2>
          <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Artículos Destacados</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <PostCard key={post.id} post={post} onClick={onPostClick} />
          ))}
        </div>
      </div>

      <div className="pt-16 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-3">Archivo</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">Explora todo el contenido</h3>
          </div>
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Buscar por título o contenido..." 
              className="w-full pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-100 outline-none focus:ring-4 focus:ring-blue-50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="flex flex-col sm:flex-row gap-6 group cursor-pointer" 
                onClick={() => onPostClick(post.id)}
              >
                 <div className="w-full sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <span className="text-blue-900 text-[10px] font-black uppercase tracking-widest mb-2">{post.category}</span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-900 transition-colors line-clamp-2">{post.title}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{formatDate(post.date)}</div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-medium">No se han encontrado artículos que coincidan con tu búsqueda.</p>
            <button onClick={() => setSearchQuery('')} className="mt-4 text-blue-900 font-bold hover:underline">Limpiar búsqueda</button>
          </div>
        )}
      </div>
    </div>
  </section>
);

const PostDetailView = ({ post, onBack }: { post: Post, onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-900 transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Blog
        </button>

        <div className="mb-12">
          <span className="text-blue-900 text-xs font-black uppercase tracking-widest mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tighter">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-900">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{post.author}</div>
                <div className="text-xs text-gray-400">Escritor & Estratega</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-500">{formatDate(post.date)}</div>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-900 prose-blockquote:bg-blue-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:italic">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <h4 className="text-xl font-bold mb-6">¿Te ha gustado este artículo?</h4>
          <button 
            onClick={() => window.location.href = 'mailto:faleirogabrielf@gmail.com'}
            className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-xl"
          >
            Suscríbete a mi Newsletter
          </button>
        </div>
      </div>
    </article>
  );
};

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingPostId, setViewingPostId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const latestPosts = useMemo(() => ALL_POSTS.slice(0, 3), []);

  const selectedPost = useMemo(() => {
    if (!viewingPostId) return null;
    return ALL_POSTS.find(p => p.id === viewingPostId);
  }, [viewingPostId]);

  const handleNavigate = (view: View) => {
    setViewingPostId(null);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentView={currentView} setCurrentView={handleNavigate} />
      
      <main>
        {selectedPost ? (
          <PostDetailView 
            post={selectedPost} 
            onBack={() => setViewingPostId(null)} 
          />
        ) : (
          <>
            {currentView === 'home' && <HomeView setCurrentView={handleNavigate} />}
            {currentView === 'services' && <ServicesView setCurrentView={handleNavigate} />}
            {currentView === 'products' && <ProductsView setCurrentView={handleNavigate} />}
            {currentView === 'blog' && (
              <BlogView 
                latestPosts={latestPosts} 
                filteredPosts={filteredPosts} 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                onPostClick={setViewingPostId}
              />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
