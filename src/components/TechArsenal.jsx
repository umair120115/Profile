import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { Layers, Server, Cpu, Globe, Cloud, Plug } from 'lucide-react';

export default function TechArsenal() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'aiml', label: 'AI / ML & RAG' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'cloudDevops', label: 'Cloud & DevOps' },
    { id: 'integrations', label: 'Integrations & APIs' }
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'all') {
      return [
        ...TECHNICAL_SKILLS.backend.map(s => ({ name: s, cat: 'Backend' })),
        ...TECHNICAL_SKILLS.aiml.map(s => ({ name: s, cat: 'AI/ML' })),
        ...TECHNICAL_SKILLS.frontend.map(s => ({ name: s, cat: 'Frontend' })),
        ...TECHNICAL_SKILLS.cloudDevops.map(s => ({ name: s, cat: 'Cloud' })),
        ...TECHNICAL_SKILLS.integrations.map(s => ({ name: s, cat: 'API' }))
      ];
    }
    return TECHNICAL_SKILLS[activeTab]?.map(s => ({ name: s, cat: activeTab })) || [];
  };

  const skills = getSkillsToDisplay();

  return (
    <section id="arsenal" className="arsenal-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-main-title">
            Production Technical Arsenal
          </h2>
          <p className="section-subtitle">
            Zero-fluff toolset battle-tested across enterprise multi-tenant backends, real-time client systems, and high-performance cloud pipelines.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="arsenal-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`arsenal-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="arsenal-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-chip">
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
