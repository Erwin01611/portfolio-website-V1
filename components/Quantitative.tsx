import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', actual: 40, forecast: 40 },
  { name: 'Tue', actual: 38, forecast: 39 },
  { name: 'Wed', actual: 45, forecast: 42 },
  { name: 'Thu', actual: 60, forecast: 58 },
  { name: 'Fri', actual: 55, forecast: 59 },
  { name: 'Sat', actual: 70, forecast: 68 },
  { name: 'Sun', actual: 75, forecast: 74 },
  { name: 'Mon', actual: 72, forecast: 73 },
  { name: 'Tue', actual: 65, forecast: 67 },
];

export const Quantitative: React.FC = () => {
  return (
    <section id={SectionId.QUANTITATIVE} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-slate-500 tracking-widest uppercase mb-2 block"
          >
            Quantitative Foundation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Rigorous analysis backed by statistical depth.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 leading-relaxed mb-6"
          >
            My approach is grounded in formal statistical training. My Bachelor's thesis, 
            "Calendar Effects for Electricity Price Forecasts," utilized 34,320 data points to compare LASSO AR-X, 
            ARIMA, SARIMA, and GARCH models.
          </motion.p>
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3 text-zinc-600"
          >
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Feature Engineering (168+ features)
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Time Series Analysis & Calendar Effects
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Predictive Modeling (Python/R)
            </li>
          </motion.ul>
        </div>

        <div className="h-[400px] w-full bg-zinc-50 rounded-xl p-6 border border-zinc-100 relative overflow-hidden">
           {/* Stylized Chart */}
           <div className="absolute top-6 left-6 z-10">
             <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Thesis Data Visualization</h4>
             <p className="text-lg font-semibold text-zinc-900">Electricity Price Forecast (SARIMA)</p>
           </div>
           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 60, right: 20, bottom: 20, left: -20 }}>
              <XAxis dataKey="name" tick={{fill: '#a1a1aa', fontSize: 12}} axisLine={false} tickLine={false} />
              <YAxis tick={{fill: '#a1a1aa', fontSize: 12}} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                cursor={{ stroke: '#e4e4e7', strokeWidth: 1 }}
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#e2e8f0" 
                strokeWidth={2} 
                dot={false} 
                name="Actual Price"
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#64748b" 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 6 }} 
                name="Model Forecast"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};