import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

export const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$299',
      features: [
        '3 Active Connectors',
        'Basic RAG Blueprints',
        '1M Tokens / Month',
        'Email Support',
        'Shared Infra'
      ],
      cta: 'Start Trial'
    },
    {
      name: 'Team',
      price: '$899',
      features: [
        'Unlimited Connectors',
        'Advanced Reranking',
        'Evaluation Harness',
        'Priority Support',
        'Namespace Isolation'
      ],
      cta: 'Get Started',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'SSO / SAML',
        'VPC Deployment',
        'Custom SLAs',
        'Dedicated Solutions Engineer',
        'Full Audit Exports'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-400">Scale your knowledge infrastructure with your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl ${
                tier.highlight 
                  ? 'bg-brand-600 border border-brand-500 shadow-2xl scale-105 z-10' 
                  : 'bg-slate-800 border border-slate-700'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-sm opacity-80">/month</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-brand-300" />
                    <span className="text-sm text-slate-200">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${
                tier.highlight 
                  ? 'bg-white text-brand-600 hover:bg-slate-100' 
                  : 'bg-brand-600 text-white hover:bg-brand-700'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};