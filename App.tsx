import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { Projects } from './components/Projects';
import { Quantitative } from './components/Quantitative';
import { TechStack } from './components/TechStack';
import { Trajectory } from './components/Trajectory';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-zinc-50 text-zinc-900 selection:bg-slate-200 selection:text-zinc-900 overflow-x-hidden">
      <Nav />
      
      <div className="flex flex-col">
        <Hero />
        <ImpactMetrics />
        <Projects />
        <Quantitative />
        <TechStack />
        <Trajectory />
        <Contact />
      </div>
    </main>
  );
};

export default App;