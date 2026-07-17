import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Repeat, Bell, Zap, EyeOff, Shield } from 'lucide-react';

const Principles = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-charcoal-900 border-t border-charcoal-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Uncompromising <span className="text-slate-500">Principles.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Designed from the ground up to protect your privacy while delivering a frictionless financial experience.</p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] gap-4">
          
          {/* Box 1: Large Span */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-1 bg-charcoal-800/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/5 hover:bg-charcoal-800/60 transition-colors group relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock size={120} className="text-brandCyan transform rotate-12" />
            </div>
            <Lock size={28} className="text-brandCyan mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Pin Protected</h3>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed">
              Local access security layer blocking unauthorized opens. Your financial truth is locked behind a wall of encryption.
            </p>
          </motion.div>

          {/* Box 2: Tall Span */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 row-span-2 bg-charcoal-800/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/5 hover:bg-charcoal-800/60 transition-colors flex flex-col justify-between shadow-2xl group"
          >
            <div>
              <Bell size={28} className="text-brandRed mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Smart Warnings</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Alerts trigger instantly when intention clashes with available resources.
              </p>
            </div>
            <div className="w-full h-32 bg-charcoal-900 rounded-2xl border border-white/5 relative overflow-hidden mt-6 group-hover:border-brandRed/20 transition-colors">
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brandRed/10 to-transparent"></div>
               <div className="absolute bottom-4 left-4 text-xs font-medium text-brandRed">Over Budget Warning</div>
            </div>
          </motion.div>

          {/* Box 3: Standard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 bg-charcoal-800/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/5 hover:bg-charcoal-800/60 transition-colors shadow-2xl"
          >
            <Zap size={28} className="text-brandCyan mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Zero Latency</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              No loading screens, no bank sync wait times, instant utility.
            </p>
          </motion.div>

          {/* Box 4: Standard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 bg-charcoal-800/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/5 hover:bg-charcoal-800/60 transition-colors shadow-2xl"
          >
            <Repeat size={28} className="text-brandCyan mb-6" />
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Recurring Plans</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Automatic entries for bills, salaries, and transport.
            </p>
          </motion.div>

          {/* Box 5: Wide Span */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 row-span-1 bg-charcoal-800/40 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/5 hover:bg-charcoal-800/60 transition-colors flex items-center justify-between overflow-hidden relative shadow-2xl"
          >
             <div className="relative z-10">
              <EyeOff size={28} className="text-slate-300 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Discrete Mode</h3>
              <p className="text-slate-400 max-w-xs font-light leading-relaxed">
                Blur your balances instantly with a tap. True privacy when checking finances in public.
              </p>
             </div>
             
             <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-charcoal-900/50 to-transparent flex items-center justify-end pr-8">
               <div className="text-4xl text-white filter blur-[8px] select-none opacity-40 font-medium tracking-tight">
                 $14,290.00
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Principles;
