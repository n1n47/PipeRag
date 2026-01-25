import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowBuilder } from './components/WorkflowBuilder';
import { FeatureSection } from './components/FeatureSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WorkflowBuilder />
        <FeatureSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;