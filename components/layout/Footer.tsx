
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-12 border-t px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <span className="text-xl font-black tracking-tight text-gray-900 uppercase">Gabriel Faleiro<span className="text-blue-900"></span></span>
      </div>
      <div className="flex gap-8 font-bold text-gray-600 text-sm">
        <a href="https://www.linkedin.com/in/gabrielfaleiro/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">LinkedIn</a>
        <a href="https://wa.me/34686048730" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">WhatsApp</a>
        <a href="https://github.com/gabrielfaleiro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);
