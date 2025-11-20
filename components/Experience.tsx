import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  role: string;
  period: string;
  type: 'primary' | 'secondary';
  icon: 'building' | 'education';
  description: string;
  achievements?: Achievement[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Navan',
    location: 'Berlin, Germany',
    role: 'Payroll Operations Automation (Part-Time)',
    period: 'November 2024 – November 2025',
    type: 'primary',
    icon: 'building',
    description: 'Built automated data processing systems that eliminated 14+ hours of monthly manual work and reduced processing errors by 90%+ in payroll operations (a finance function). Designed ETL pipelines, data quality systems, and analytical tools for production payroll operations.',
    achievements: [
      {
        title: 'Automated data extraction pipeline',
        description: 'Eliminated 14-hour manual PDF-to-manifest process'
      },
      {
        title: 'Multi-country reconciliation system',
        description: 'Enabled previously impossible payroll audits'
      },
      {
        title: 'Workday migration quality assurance',
        description: 'Zero critical issues at go-live'
      },
      {
        title: 'Compliance monitoring automation',
        description: 'Reduced monthly processing from 1 hour to seconds'
      }
    ],
    link: 'projects'
  },
  {
    id: 2,
    company: 'ESCP Business School',
    location: 'Berlin, Germany',
    role: 'Research Assistant',
    period: 'April 2024 – September 2024',
    type: 'secondary',
    icon: 'education',
    description: 'Conducted systematic literature review and corporate AI adoption analysis for "Use of AI in Stakeholder Communication with CSR Focus" research project. Analyzed 50+ companies\' AI implementation strategies across sustainability reporting workflows.'
  }
];

const ExperienceCard: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  const Icon = experience.icon === 'building' ? Building2 : GraduationCap;
  const isPrimary = experience.type === 'primary';
  
  const scrollToProjects = () => {
    if (experience.link) {
      const element = document.getElementById(experience.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className={`bg-white border border-zinc-200 rounded-xl transition-all duration-400 hover:shadow-2xl hover:scale-[1.01] ${
        isPrimary ? 'p-10' : 'p-6'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="bg-zinc-100 p-3 rounded-xl shrink-0">
            <Icon size={24} className="text-zinc-900" />
          </div>
          <div>
            <h3 className={`font-bold text-zinc-900 ${isPrimary ? 'text-2xl' : 'text-xl'}`}>
              {experience.company}
            </h3>
            <p className="text-zinc-500 text-sm mt-1">{experience.location}</p>
          </div>
        </div>
        <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">
          {experience.period}
        </span>
      </div>

      {/* Role */}
      <h4 className={`font-semibold text-zinc-900 mb-4 ${isPrimary ? 'text-xl' : 'text-lg'}`}>
        {experience.role}
      </h4>

      {/* Description */}
      <p className="text-zinc-700 leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Achievements (only for primary) */}
      {isPrimary && experience.achievements && (
        <div className="space-y-4 pt-6 border-t border-zinc-100">
          <p className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
            Key Systems Built
          </p>
          <div className="space-y-3">
            {experience.achievements.map((achievement, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 size={20} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-zinc-900 text-sm">
                    {achievement.title}
                  </p>
                  <p className="text-zinc-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Projects */}
          {experience.link && (
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 text-zinc-900 font-medium text-sm mt-6 hover:text-slate-500 transition-colors group"
            >
              View Technical Implementation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-32 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg"
          >
            Building automated systems in production environments
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};