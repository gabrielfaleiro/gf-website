
import React, { useState } from 'react';

export type View = 'home' | 'services' | 'resources' | 'blog' | 'privacy' | 'legal' | 'cookies';

interface NavigationProps {
  currentView: View;
  setCurrentView: (v: View, elementId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setCurrentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (view: View, elementId?: string) => {
    setCurrentView(view, elementId);
    setIsMenuOpen(false);
  };

  const navLinks: { label: string; view: View }[] = [
    { label: 'Inicio', view: 'home' },
    { label: 'Servicios', view: 'services' },
    { label: 'Recursos', view: 'resources' },
    { label: 'Blog', view: 'blog' }
  ];

  return (
    <nav className="glass-nav border-b fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
              Gabriel Faleiro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavigation(link.view)}
                className={`${currentView === link.view ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('home', 'contacto')}
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-blue-900/20 active:scale-95 ml-4"
            >
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 p-2 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b shadow-xl transition-all duration-300">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavigation(link.view)}
                className={`text-left text-xl font-bold uppercase tracking-widest ${
                  currentView === link.view ? 'text-blue-900' : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('home', 'contacto')}
              className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-center text-lg shadow-lg"
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
