import React from 'react';
import { motion } from 'framer-motion';

const SovereignDifference = () => {
  return (
    <section className="py-32 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      {/* Soft background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brandCyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            A New Standard for Privacy
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We are moving away from the fragile cloud ecosystem to deliver an uncompromising offline experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* The Vulnerable Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-charcoal-800/20 backdrop-blur-xl border border-brandRed/10 rounded-[2.5rem] p-10 lg:p-14 transition-colors hover:bg-charcoal-800/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandRed/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandRed/10 border border-brandRed/20 text-brandRed text-xs font-semibold tracking-wide mb-8">
              The Old Way
            </div>
            
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">
              Cloud Dependent
            </h3>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Linked bank accounts inevitably break. Private transaction patterns are cataloged and sold to advertising networks. Constant cloud updates introduce frustrating sync latency.
            </p>
          </motion.div>

          {/* The Sovereign Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-charcoal-800/40 backdrop-blur-xl border border-brandCyan/20 rounded-[2.5rem] p-10 lg:p-14 transition-colors hover:bg-charcoal-800/60 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandCyan/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandCyan/10 border border-brandCyan/20 text-brandCyan text-xs font-semibold tracking-wide mb-8">
              The Sovereign Way
            </div>
            
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">
              Offline by Design
            </h3>
            
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              Fully offline local database. Zero external API calls or tracking scripts. Absolute control over your financial records with secure, encrypted local exports.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SovereignDifference;
