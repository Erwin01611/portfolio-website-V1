import React from 'react';
import { SectionId, Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, FileJson, Database } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Data Extraction Pipeline",
    problem: "Manual PDF-to-manifest mapping process took 14 hours monthly, creating a bottleneck with frequent transcription errors.",
    solution: "Developed a Python solution using regex for filename parsing and content extraction to automatically map files to employee IDs and generate Workday-ready CSVs.",
    impact: "Reduced preparation time from 14 hours to seconds. Eliminated mapping errors completely. Deployed as primary production system.",
    tech: ["Python", "Pandas", "Regex", "Workday"]
  },
  {
    id: 2,
    title: "Multi-Month Reconciliation System",
    problem: "Reconciling payroll across EN/DE regions required parsing 100-400 page unstructured PDF reports with no structured data export.",
    solution: "Built a regex-based extraction tool that parses documents across languages/formats into structured employee-level data tables in CSVs.",
    impact: "Enabled previously impossible reconciliation processes. Saved ~6 hours monthly on regular audits.",
    tech: ["Python", "Unstructured Data", "Data Cleaning", "Automation"]
  },
  {
    id: 3,
    title: "Workday Migration Quality Assurance",
    problem: "Critical system migration (DATEV to Workday) required zero tolerance for payroll data errors at go-live.",
    solution: "Designed comprehensive end-to-end testing protocols and automated data quality checks to intercept defects before production upload.",
    impact: "Achieved zero critical issues at go-live. Reduced failed uploads from 2-3 per batch to consistently 0-1.",
    tech: ["QA Automation", "Data Integrity", "Stakeholder Mgmt"]
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="bg-zinc-100 p-3 rounded-lg text-zinc-900">
          {project.id === 1 ? <Code2 size={24} /> : project.id === 2 ? <FileJson size={24} /> : <Database size={24} />}
        </div>
        <ArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300" size={24} />
      </div>

      <h3 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight">{project.title}</h3>

      <div className="space-y-6 flex-grow">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Problem</span>
          <p className="text-zinc-600 leading-relaxed text-sm">{project.problem}</p>
        </div>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Solution</span>
          <p className="text-zinc-600 leading-relaxed text-sm">{project.solution}</p>
        </div>

        <div className="pt-4 border-t border-zinc-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">Impact</span>
          <p className="text-zinc-900 font-medium leading-relaxed">{project.impact}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-32 px-6 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-xl text-lg"
          >
            Systems designed for reliability, automation, and measurable business impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};