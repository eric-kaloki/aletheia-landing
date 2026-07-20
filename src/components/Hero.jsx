import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      {/* Editorial Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* Asymmetric Left Content */}
          <div className="w-full lg:w-[60%] z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brandCyan/10 border border-brandCyan/20 shadow-[0_0_20px_rgba(0,191,165,0.15)]">
                <span className="w-2 h-2 rounded-full bg-brandCyan animate-pulse"></span>
                <span className="text-brandCyan text-xs md:text-sm font-bold tracking-widest uppercase">
                  Coming Soon to iOS & Android
                </span>
              </div>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-white"
              >
                KNOW YOUR<br />MONEY.
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-12">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-slate-500"
              >
                OWN YOUR<br />FUTURE.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xl"
            >
              <p className="text-slate-400 text-lg md:text-xl font-light mb-12 border-l border-slate-700 pl-6 leading-relaxed">
                Aletheia is a sovereign, local-first personal financial companion. No accounts to link, no data tracking, no cloud latency. Just absolute clarity, offline and encrypted in your palm.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-white text-black px-10 py-5 font-bold text-sm tracking-wide hover:bg-slate-200 transition-colors duration-500 rounded-full"
                >
                  Reserve Spot
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 font-semibold text-sm tracking-wide text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-500 flex items-center justify-center gap-3 rounded-full"
                >
                  <Play size={16} className="fill-white" /> View Trailer
                </button>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Floating Right Content */}
          <div className="w-full lg:w-[40%] relative">
            <motion.div 
              style={{ y: y1 }}
              className="relative z-10"
            >
              <div className="relative rounded-[2.5rem] border border-white/10 bg-charcoal-900 shadow-2xl overflow-hidden transform-gpu rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <img 
                  src="/screen/Screenshot_20260717-123203.webp" 
                  alt="Aletheia Dashboard" 
                  width="720"
                  height="1611"
                  className="w-full h-auto"
                  fetchPriority="high"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Parallax Floating Data Elements */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -left-12 bottom-24 px-6 py-4 rounded-2xl bg-charcoal-800/60 backdrop-blur-2xl border border-white/5 hidden md:flex items-center gap-3 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-brandCyan shadow-[0_0_10px_rgba(0,191,165,0.8)]"></div>
              <div className="text-xs font-medium text-slate-300">Offline by Design</div>
            </motion.div>
          </div>
        </div>

        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          videoSrc="/screen/screen-20260717-123936.mp4" 
        />
      </div>
    </section>
  );
};

export default Hero;
