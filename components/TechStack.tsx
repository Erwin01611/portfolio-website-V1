import React from 'react';
import { SectionId, SkillCategory } from '../types';
import { motion } from 'framer-motion';

const skills: SkillCategory[] = [
  { 
    category: "Process Automation", 
    skills: [
      "Workflow Orchestration (n8n)",
      "Python Automation",
      "API Integrations",
      "Webhook Triggers",
      "Process Optimization",
      "Excel/VBA Automation"
    ]
  },
  { 
    category: "Financial Systems & Operations", 
    skills: [
      "Workday",
      "DATEV (German Payroll)",
      "Month-End Close",
      "Reconciliation Workflows",
      "Compliance & Audit",
      "Payroll Operations"
    ]
  },
  { 
    category: "Data Engineering", 
    skills: [
      "Python (Pandas, Regex)",
      "SQL (Joins, Optimization)",
      "ETL Pipeline Design",
      "Data Validation",
      "PDF/Document Parsing"
    ]
  },
  { 
    category: "Quantitative Analysis", 
    skills: [
      "Time Series (ARIMA/GARCH)",
      "Statistical Modeling",
      "Feature Engineering",
      "Predictive Analytics",
      "Hypothesis Testing"
    ]
  },
  { 
    category: "Visualization & BI", 
    skills: [
      "Power BI",
      "Tableau",
      "Data Storytelling",
      "KPI Dashboards",
      "Report Automation"
    ]
  }
];

export const TechStack: React.FC = () => {
  return (
    <section id={SectionId.TECH} className="py-24 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-zinc-200 pb-6">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Technical Capabilities</h2>
          <p className="text-zinc-500 mt-2">Bridging the gap between data engineering and finance operations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-zinc-800 text-sm font-medium border-l-2 border-transparent hover:border-slate-500 hover:pl-2 transition-all duration-200 cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};