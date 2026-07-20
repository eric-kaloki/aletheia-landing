import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [state, handleSubmit] = useForm('mojgekdv');

  return (
    <footer id="waitlist" className="bg-[#050608] pt-24 pb-12 border-t border-charcoal-800 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brandCyan/50 to-transparent"></div>
      
      {/* Centered glowing logo background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <img src="/logo.png" alt="Logo background" className="w-full h-full object-contain filter blur-md" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
            Coming Soon to iOS & Android
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Financial Truth, <span className="text-slate-500">Offline.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brandCyan shadow-[0_0_10px_rgba(0,191,165,0.8)] animate-pulse"></span>
            <p className="text-brandCyan text-sm font-medium tracking-wide">Currently onboarding wave 2. Only a few spots remaining.</p>
          </div>
          
          {state.succeeded ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brandCyan/10 border border-brandCyan/30 rounded-full px-6 py-4 flex items-center justify-center gap-3 text-brandCyan font-bold"
            >
              <CheckCircle2 size={20} /> You're on the list!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative">
              <input 
                type="email" 
                name="email"
                required
                disabled={state.submitting}
                placeholder="Enter your secure email" 
                className="flex-1 bg-charcoal-800 border border-slate-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-all disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={state.submitting}
                className="bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shrink-0"
              >
                {state.submitting ? 'Joining...' : (
                  <>Reserve Spot <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          )}
          <div className="text-brandRed text-sm mt-3 font-medium min-h-[20px]">
             <ValidationError field="email" prefix="Email" errors={state.errors} />
          </div>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-bold tracking-widest text-slate-400">
            <img src="/logo.png" alt="Logo" className="w-5 h-5 opacity-50 grayscale" /> ALETHEIA
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brandCyan transition-colors">Privacy Policy</Link>
            <Link to="/data-deletion" className="hover:text-brandCyan transition-colors">Data Deletion</Link>
          </div>
          <div>© {new Date().getFullYear()} Aletheia. Local-First Finance.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
