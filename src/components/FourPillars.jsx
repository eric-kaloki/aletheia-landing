import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 1,
    title: "01. Money In",
    subHeader: "Log Every Stream.",
    body: "Track your active salary, support resources, or freelance cash flows with zero friction.",
    image: "/screen/Screenshot_20260717-123431.jpg"
  },
  {
    id: 2,
    title: "02. Money Intended",
    subHeader: "Budget with Intention.",
    body: "Plan your transport, food, utilities, and investments before the month even begins.",
    image: "/screen/Screenshot_20260717-123525.jpg"
  },
  {
    id: 3,
    title: "03. Money Spent",
    subHeader: "Track Every Shilling.",
    body: "Log transactions instantly, tag behavioral attributes, and review daily trends.",
    image: "/screen/Screenshot_20260717-123426.jpg"
  },
  {
    id: 4,
    title: "04. Available",
    subHeader: "Know Your Real Capacity.",
    body: "See your real margin at a glance, keeping your planned spending safely aligned.",
    image: "/screen/Screenshot_20260717-123203.jpg"
  }
];

const FourPillars = () => {
  const [activeId, setActiveId] = useState(1);
  const activePillar = pillars.find(p => p.id === activeId);

  return (
    <section className="py-24 bg-charcoal-900" id="features">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">The Four <span className="text-gradient">Pillars</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A comprehensive, offline-first dashboard designed to give you absolute clarity across every phase of your wealth cycle.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Interactive Grid Menu */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                  activeId === pillar.id 
                    ? 'bg-charcoal-700/80 border-brandCyan/40 shadow-cyan-glow' 
                    : 'bg-charcoal-800 border-transparent hover:bg-charcoal-700 hover:border-slate-700'
                }`}
              >
                <div className={`text-sm font-bold mb-2 ${activeId === pillar.id ? 'text-brandCyan' : 'text-slate-500'}`}>
                  {pillar.title}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.subHeader}</h3>
                <p className={`text-sm leading-relaxed ${activeId === pillar.id ? 'text-slate-300' : 'text-slate-500'}`}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* Floating Device Viewport */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-[2rem] border-8 border-charcoal-800 bg-charcoal-900 shadow-2xl overflow-hidden shadow-cyan-glow w-full max-w-[320px] aspect-[1/2]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activePillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={activePillar.image} 
                  alt={activePillar.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
