import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel border-b border-brandCyan/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/screen/logo.png" alt="Aletheia Logo" className="w-8 h-8 rounded-full shadow-cyan-glow" />
          <span className="font-bold text-xl tracking-wide text-white">ALETHEIA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-400 hover:text-brandCyan transition-colors text-sm font-medium">Features</a>
          <a href="#security" className="text-slate-400 hover:text-brandCyan transition-colors text-sm font-medium">Security</a>
        </div>
        
        <div>
          <button className="bg-brandCyan/10 text-brandCyan border border-brandCyan/20 px-5 py-2 rounded-full text-sm font-semibold hover:bg-brandCyan hover:text-charcoal-900 transition-all shadow-cyan-glow">
            Get App
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
