
import React from 'react';

export type View = 'home' | 'services' | 'blog';

interface NavigationProps {
  currentView: View;
  setCurrentView: (v: View, elementId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setCurrentView }) => (
  <nav className="glass-nav border-b fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">Gabriel Faleiro<span className="text-blue-900"></span></span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-wider text-gray-500">
          <button onClick={() => setCurrentView('home')} className={`${currentView === 'home' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Inicio</button>
          <button onClick={() => setCurrentView('services')} className={`${currentView === 'services' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Servicios</button>
          <button onClick={() => setCurrentView('blog')} className={`${currentView === 'blog' ? 'text-blue-900 border-b-2 border-blue-900' : ''} hover:text-blue-900 transition-all pb-1`}>Blog</button>
        </div>
      </div>
    </div>
  </nav>
);
