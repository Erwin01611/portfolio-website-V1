import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, ArrowRight, BookOpen } from 'lucide-react';

export const Trajectory: React.FC = () => {
  return (
    <section id={SectionId.TRAJECTORY} className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">Education & Development</h2>
          <p className="text-zinc-500">Combining operations experience with data science education—transitioning from process automation to advanced analytics.</p>
        </div>

        <div className="space-y-6">
          {/* Master's Program */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors duration-300"
          >
            <div className="bg-zinc-900 text-white p-3 rounded-xl shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-zinc-900">M.Sc. Data Science & Decision Support</h3>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium w-fit">Current</span>
              </div>
              <p className="text-zinc-500 mb-3 text-sm">European University Viadrina | Apr 2025 – Present</p>
              <p className="text-zinc-700 leading-relaxed text-sm">
                Deepening theoretical knowledge in machine learning and advanced analytics (Neural Networks, Data Storytelling) to complement practical engineering skills.
              </p>
            </div>
          </motion.div>

          {/* Bachelor's Program */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 items-start p-6 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-colors duration-300"
          >
            <div className="bg-white border border-zinc-200 text-zinc-700 p-3 rounded-xl shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
               <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-zinc-900">B.Sc. International Business Administration</h3>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs font-medium w-fit">2017 – 2025</span>
              </div>
              <p className="text-zinc-500 mb-3 text-sm">European University Viadrina</p>
              <p className="text-zinc-700 leading-relaxed text-sm mb-2">
                <strong>Majors:</strong> Quantitative Methods, Banking & International Finance.
              </p>
              <p className="text-zinc-600 text-sm italic">
                Thesis: "Calendar Effects for Electricity Price Forecasts" (Time series analysis of 34,000+ observations using LASSO AR-X, ARIMA, GARCH).
              </p>
            </div>
          </motion.div>

          {/* Erasmus */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex gap-6 items-start p-6 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-colors duration-300"
          >
             <div className="bg-white border border-zinc-200 text-zinc-700 p-3 rounded-xl shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">B.Sc. International Business (Exchange)</h3>
              <p className="text-zinc-500 mb-2 text-sm">Karlstad University, Sweden | 2019 – 2020</p>
              <p className="text-zinc-700 text-sm">
                Focus on Financial Markets, Risk & Insurance, and Macroeconomics.
              </p>
            </div>
          </motion.div>

          {/* Active Learning */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 items-start p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm transition-colors duration-300 mt-8"
          >
            <div className="bg-zinc-100 text-zinc-900 p-3 rounded-xl shrink-0">
              <Activity size={24} />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Active Research & Development</h3>
              <p className="text-zinc-500 mb-4 text-sm">Self-Directed Learning Strategy</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-zinc-100 p-4 rounded-lg bg-zinc-50/50">
                  <span className="font-semibold text-zinc-900 block mb-1 text-sm">n8n Automation</span>
                  <span className="text-xs text-zinc-500">Personal productivity workflows, Webhooks & API integrations</span>
                </div>
                <div className="border border-zinc-100 p-4 rounded-lg bg-zinc-50/50">
                  <span className="font-semibold text-zinc-900 block mb-1 text-sm">BI Portfolio</span>
                  <span className="text-xs text-zinc-500">Building advanced dashboards in Tableau Public</span>
                </div>
                <div className="border border-zinc-100 p-4 rounded-lg bg-zinc-50/50">
                  <span className="font-semibold text-zinc-900 block mb-1 text-sm">ML Deployment</span>
                  <span className="text-xs text-zinc-500">TensorFlow & Streamlit for time series applications</span>
                </div>
                <div className="border border-zinc-100 p-4 rounded-lg bg-zinc-50/50">
                  <span className="font-semibold text-zinc-900 block mb-1 text-sm">Web Frameworks</span>
                  <span className="text-xs text-zinc-500">FastAPI / Django for internal analytics tools</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};