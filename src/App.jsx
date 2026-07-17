import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SovereignDifference from './components/SovereignDifference';
import FourPillars from './components/FourPillars';
import Analytics from './components/Analytics';
import KilobyteEnclave from './components/KilobyteEnclave';
import Principles from './components/Principles';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-charcoal-900 min-h-screen text-white font-sans selection:bg-brandCyan selection:text-charcoal-900 overflow-x-hidden relative">
      {/* Global Noise Texture */}
      <div className="bg-noise pointer-events-none z-50"></div>
      
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 191, 165, 0.03), transparent 40%)`
        }}
      />

      <div className="relative z-40">
        <Navbar />
        <Hero />
        <SovereignDifference />
        <FourPillars />
        <Analytics />
        <KilobyteEnclave />
        <Principles />
        <Footer />
      </div>
    </div>
  );
}

export default App;
