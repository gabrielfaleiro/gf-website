
import React from 'react';
import { SERVICES } from '../../data/services';
import { View } from '../layout/Navigation';

interface ServicesProps {
  setCurrentView: (v: View) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentView }) => (
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
