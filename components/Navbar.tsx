import React from 'react';
import { Layers, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">PipeRAG</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#product" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Product</a>
            <a href="#solutions" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Solutions</a>
            <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pricing</a>
            <a href="#docs" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Docs</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-slate-900 font-medium hover:text-brand-600">Log in</a>
            <a href="#demo" className="bg-brand-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-sm hover:shadow-md">
              Start Building
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md">Product</a>
            <a href="#solutions" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md">Solutions</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md">Pricing</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-brand-600 bg-brand-50 rounded-md">Start Building</a>
          </div>
        </div>
      )}
    </nav>
  );
};