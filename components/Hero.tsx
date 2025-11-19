import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Abstract Data Flow Visual using pure SVG and Framer Motion
const DataFlowVisual: React.FC = () => {
  // Generating multiple paths for "data packets" to travel
  const paths = [
    "M0,50 C150,50 150,10 300,10",
    "M0,50 C150,50 150,90 300,90",
    "M0,50 C100,50 200,50 300,50"
  ];

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-64 md:h-96 opacity-20 md:opacity-100 pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
        {/* Base Lines */}
        {paths.map((path, i) => (
          <path
            key={`bg-${i}`}
            d={path}
            fill="none"
            stroke="#e2e8f0" // slate-200
            strokeWidth="1"
          />
        ))}
        
        {/* Moving Data Packets */}
        {paths.map((path, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="2"
            fill="#64748b" // slate-500
          >
            <animateMotion
              dur={`${2 + i * 0.5}s`}
              repeatCount="indefinite"
              path={path}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
          </motion.circle>
        ))}

        {/* Nodes */}
        <circle cx="0" cy="50" r="3" fill="#1a1a1a" />
        <circle cx="300" cy="10" r="3" fill="#1a1a1a" />
        <circle cx="300" cy="90" r="3" fill="#1a1a1a" />
        <circle cx="300" cy="50" r="3" fill="#1a1a1a" />
      </svg>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-slate-500 font-medium mb-4 tracking-wide">
            ANALYTICS ENGINEER | DATA PIPELINE DEVELOPMENT
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-zinc-900">
            Eliminating the manual. Enabling the <span className="text-slate-500">measurable.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-md leading-relaxed mb-10">
            I build automated data systems that eliminate manual work and enable better decisions. 
            14+ hours saved monthly | 90%+ error reduction.
          </p>
          
          <div className="flex items-center space-x-6">
             <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors duration-300"
            >
              View Case Studies
            </button>
            <span className="text-sm text-zinc-400">
              Scroll for impact
            </span>
          </div>
        </motion.div>

        <div className="relative h-full hidden md:block">
             <DataFlowVisual />
        </div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};