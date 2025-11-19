import React from 'react';
import { SectionId, Metric } from '../types';
import { motion } from 'framer-motion';

const metrics: Metric[] = [
  {
    id: 1,
    value: "14h",
    label: "Saved Monthly",
    detail: "Through single-pipeline automation"
  },
  {
    id: 2,
    value: "90%",
    label: "Error Reduction",
    detail: "By replacing manual entry with Python ETL"
  },
  {
    id: 3,
    value: "0",
    label: "Critical Issues",
    detail: "During major Workday migrations"
  }
];

export const ImpactMetrics: React.FC = () => {
  return (
    <section id={SectionId.IMPACT} className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-center md:text-left group cursor-default"
            >
              <h3 className="text-6xl md:text-7xl font-bold text-zinc-900 tracking-tighter mb-2 group-hover:text-slate-500 transition-colors duration-300">
                {metric.value}
              </h3>
              <p className="text-lg font-semibold text-zinc-900 mb-1">
                {metric.label}
              </p>
              <p className="text-sm text-zinc-500">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};