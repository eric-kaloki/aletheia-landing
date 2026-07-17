import React from 'react';
import { motion } from 'framer-motion';
import { HardDriveDownload, AlertOctagon } from 'lucide-react';

const KilobyteEnclave = () => {
  return (
    <section className="py-24 bg-charcoal-900 border-y border-charcoal-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute -inset-4 bg-brandRed/20 blur-2xl rounded-full z-0 pointer-events-none" />
              <img 
                src="/screen/Screenshot_20260717-123557.jpg" 
                alt="Security Settings" 
                className="relative z-10 w-full h-auto rounded-[2rem] border-4 border-charcoal-800 shadow-2xl shadow-red-glow"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandRed/10 text-brandRed text-xs font-bold tracking-widest mb-6 border border-brandRed/20">
              <AlertOctagon size={14} /> THE KILOBYTE ENCLAVE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Total Control. <br /><span className="text-brandRed">Instant Self-Destruct.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Your financial records are packed into lightweight, encrypted JSON files. Copy your backups, restore them anywhere instantly, or execute a factory hard reset to wipe everything permanently from your device database. Zero trails, absolute privacy.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 glass-panel px-5 py-3 rounded-xl border border-brandCyan/20">
                <HardDriveDownload className="text-brandCyan" size={20} />
                <span className="text-sm font-semibold text-white">Portable JSON Exports</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KilobyteEnclave;
