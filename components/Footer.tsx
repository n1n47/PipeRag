import React from 'react';
import { Layers, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-600 p-1 rounded">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">PipeRAG</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Standardized RAG workflows for the enterprise. 
              Secure, modular, and ready for scale. 
              Stop rebuilding the wheel and start shipping AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">Connectors</a></li>
              <li><a href="#" className="hover:text-brand-600">Blueprints</a></li>
              <li><a href="#" className="hover:text-brand-600">Security</a></li>
              <li><a href="#" className="hover:text-brand-600">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">About</a></li>
              <li><a href="#" className="hover:text-brand-600">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-600">Terms</a></li>
              <li><a href="#" className="hover:text-brand-600">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 PipeRAG Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-slate-600"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-slate-600"><Github className="h-5 w-5" /></a>
            <a href="#" className="hover:text-slate-600"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};