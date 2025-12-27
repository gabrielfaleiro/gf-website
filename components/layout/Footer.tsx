
import React from 'react';
import { View } from './Navigation';

interface FooterProps {
  setCurrentView: (v: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => (
  <footer className="py-16 border-t px-4 sm:px-6 lg:px-8 bg-white mt-auto">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Identidad de marca en el footer */}
        <div className="flex-shrink-0">
          <span className="text-xl font-black tracking-tight text-gray-900 uppercase">
            Gabriel Faleiro
          </span>
          <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
            Arquitecto de Innovación Estratégica y Transformación Digital. Conectando visión y tecnología.
          </p>
        </div>
        
        {/* Contenedor de columnas de enlaces */}
        <div className="grid grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
          {/* Columna 1: Enlaces Externos / Redes */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-6">Conectar</h4>
            <ul className="space-y-4 font-bold text-gray-600 text-sm">
              <li>
                <a 
                  href="https://www.linkedin.com/in/gabrielfaleiro/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-900 transition-colors flex items-center gap-2"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/gabrielfaleiro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-900 transition-colors flex items-center gap-2"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Enlaces Legales */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-6">Legal</h4>
            <ul className="space-y-4 font-bold text-gray-600 text-sm">
              <li>
                <button onClick={() => setCurrentView('legal')} className="hover:text-blue-900 transition-colors text-left">Aviso Legal</button>
              </li>
              <li>
                <button onClick={() => setCurrentView('privacy')} className="hover:text-blue-900 transition-colors text-left">Política de Privacidad</button>
              </li>
              <li>
                <button onClick={() => setCurrentView('cookies')} className="hover:text-blue-900 transition-colors text-left">Política de Cookies</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Línea de copyright final */}
      <div className="mt-16 pt-8 border-t border-gray-50 text-center">
        <p className="text-gray-400 text-xs font-medium">
          © {new Date().getFullYear()} Gabriel Faleiro. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);
