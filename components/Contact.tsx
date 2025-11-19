import React from 'react';
import { SectionId } from '../types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 px-6 bg-zinc-900 text-zinc-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Ready to build better systems?
        </h2>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm pursuing Analytics Engineering and Finance Operations Automation roles. If you need someone who identifies bottlenecks and ships solutions, let's connect.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a 
            href="mailto:farruxmirzaev@outlook.com"
            className="flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full md:w-auto justify-center"
          >
            <Mail size={20} />
            farruxmirzaev@outlook.com
          </a>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/farrukhmirzaev/" target="_blank" rel="noreferrer" className="p-4 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Erwin01611" target="_blank" rel="noreferrer" className="p-4 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800 text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Farrukh Mirzaev. Frankfurt (Oder), Germany.</p>
          <p>Analytics Engineer | Process Automation</p>
        </div>
      </div>
    </section>
  );
};