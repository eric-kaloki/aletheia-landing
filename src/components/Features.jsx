import React from 'react';
import { Lock, Zap, Undo2, LayoutDashboard } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Lock size={28} className="text-brand" />,
      title: "Zero Cloud Logging",
      description: "Everything stays on your device. We don't harvest data, track usage, or require an account. Ultimate privacy."
    },
    {
      icon: <LayoutDashboard size={28} className="text-brand-alt" />,
      title: "Discrete Mode",
      description: "Tap the eye icon to instantly frost over your sensitive balances. Use the app securely in public."
    },
    {
      icon: <Undo2 size={28} className="text-brand" />,
      title: "Exact Restore Undo",
      description: "Deleted a record by mistake? Our system holds the exact metadata in memory for 4 seconds so you can seamlessly revert it without database bloat."
    },
    {
      icon: <Zap size={28} className="text-brand-alt" />,
      title: "Blazing Fast Offline",
      description: "Because there's no cloud latency, every tap, swipe, and chart render is incredibly responsive and instant."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Engineered for <span className="text-gradient">Privacy.</span></h2>
          <p className="section-subtitle">
            Aletheia combines a premium aesthetic with a hardcore offline-first architecture. No trackers. No servers. Just you and your money.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-panel">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
