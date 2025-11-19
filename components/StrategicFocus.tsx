import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export const StrategicFocus: React.FC = () => {
  return (
    <section id={SectionId.STRATEGY} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-zinc-100 p-3 rounded-xl">
            <Target size={24} className="text-zinc-900" />
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight"
          >
            Why Finance Operations?
          </motion.h2>
        </div>
        
        <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I build automation for operations. At Navan, I worked in payroll 
            operations—a finance function—and saw firsthand how much manual, 
            repetitive work exists in finance departments.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <strong className="text-zinc-900">The opportunity:</strong> Reconciliations, 
            month-end close, compliance reporting, data entry—these processes are 
            perfect candidates for automation but require domain knowledge to 
            implement effectively.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <strong className="text-zinc-900">My approach:</strong> Combine automation engineering with finance operations experience and strategic domain focus. Generic tools fail because they don't understand the domain. Through my Navan work (payroll operations) and finance education background, I understand the workflows—and I'm deliberately expanding this knowledge (Workday, compliance processes, financial systems) so I can create solutions that actually work for finance teams.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <strong className="text-zinc-900">Why I'm building this:</strong> My finance education (Banking & International Finance, Quantitative Methods) gives me the analytical foundation. My Navan experience gave me operations context. Now I'm connecting these to build specialized expertise in finance operations automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6 border-t border-zinc-100"
          >
            <p className="text-zinc-900 font-semibold">
              Two capability tracks:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                <p className="font-medium text-zinc-900 mb-1">Analytics Engineering</p>
                <p className="text-sm text-zinc-600">Data systems at scale</p>
              </div>
              <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                <p className="font-medium text-zinc-900 mb-1">Finance Operations</p>
                <p className="text-sm text-zinc-600">Domain-specific automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};