
import React from 'react';
import { PRODUCTS } from '../../data/products';
import { View } from '../layout/Navigation';

interface ProductsProps {
  setCurrentView: (v: View) => void;
}

export const Products: React.FC<ProductsProps> = ({ setCurrentView }) => (
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
