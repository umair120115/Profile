import React from 'react';
import { AI_FIRST_PARADIGM } from '../data/portfolioData';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function AiFirstSection() {
  const icons = [
    <Cpu size={22} color="#00d2ff" />,
    <Zap size={22} color="#10b981" />,
    <ShieldCheck size={22} color="#38bdf8" />,
    <Layers size={22} color="#f59e0b" />
  ];

  return (
    <section id="ai-paradigm" className="ai-first-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Engineering Principles</span>
          </div>
          <h2 className="section-main-title">
            The AI-First Engineering Paradigm
          </h2>
          <p className="section-subtitle">
            Moving beyond simple prompt wrappers to engineer deterministic, mathematically verified, and low-latency autonomous architectures into enterprise systems.
          </p>
        </div>

        <div className="ai-grid">
          {AI_FIRST_PARADIGM.map((pillar, idx) => (
            <div key={idx} className="glass-card ai-card">
              <div className="ai-card-top">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="ai-metric-callout">{pillar.metric}</div>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)' }}>
                    {icons[idx % icons.length]}
                  </div>
                </div>
                <div className="ai-metric-label">{pillar.metricLabel}</div>
              </div>

              <div>
                <h3 className="ai-card-title">{pillar.title}</h3>
                <p className="ai-card-desc">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
