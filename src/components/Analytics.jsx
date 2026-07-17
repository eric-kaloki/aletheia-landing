import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brandCyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
            >
              Discover Your Financial <br /><span className="text-gradient">Behaviors.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Traditional apps only group by categories. Aletheia maps spending back to your behaviors. Track normal plans vs. emotional or emergency impulses to identify triggers and build healthier, stress-free money habits.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute right-0 top-10 w-[70%] rounded-2xl border-4 border-charcoal-800 shadow-2xl shadow-cyan-glow z-10 overflow-hidden"
            >
              <img src="/screen/Screenshot_20260717-123532.jpg" alt="Behavioral Insights" className="w-full h-auto" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              className="absolute left-0 bottom-10 w-[60%] rounded-2xl border-4 border-charcoal-700 shadow-2xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img src="/screen/Screenshot_20260717-123537.jpg" alt="Weekly Trends" className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Analytics;
