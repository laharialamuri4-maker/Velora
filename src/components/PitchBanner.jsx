import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Award, Layers, Zap, Users, DollarSign, HelpCircle } from 'lucide-react';

export default function PitchBanner({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const pitchLinks = [
    { label: "1. The Problem", target: "problems", icon: Layers },
    { label: "2. The Solution", target: "solution", icon: Zap },
    { label: "3. How It Works", target: "how-it-works", icon: Sparkles },
    { label: "4. Live Prototype", target: "personalization", icon: Sparkles },
    { label: "5. Discover Catalog", target: "discover", icon: Sparkles },
    { label: "6. Value Prop", target: "why-velora", icon: Award },
    { label: "7. Target Users", target: "target-customers", icon: Users },
    { label: "8. Business Model", target: "business-model", icon: DollarSign },
    { label: "9. Team & FAQs", target: "team", icon: HelpCircle },
  ];

  return (
    <div className="pitch-banner">
      <div className="container pitch-banner-container">
        <div className="pitch-banner-header">
          <div className="pitch-banner-badge">
            <span className="live-dot"></span>
            <strong>ENTREPRENEURSHIP VENTURE PROTOTYPE</strong>
            <span className="pitch-sub-badge">Academic MVP Showcase</span>
          </div>

          <button
            className="pitch-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle pitch presentation guide"
          >
            <span>Presentation Quick-Nav</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {isOpen && (
          <div className="pitch-quick-links">
            <p className="pitch-guide-title">
              Fast-track presentation navigation for faculty, mentors, and evaluators:
            </p>
            <div className="pitch-links-grid">
              {pitchLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={idx}
                    className="pitch-chip"
                    onClick={() => {
                      onNavigate(item.target);
                      setIsOpen(false);
                    }}
                  >
                    <IconComponent size={14} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pitch-banner {
          background: linear-gradient(90deg, #111526 0%, #1A2138 50%, #111526 100%);
          border-bottom: 1px solid rgba(226, 199, 153, 0.25);
          font-size: 0.8rem;
          color: var(--text-secondary);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .pitch-banner-container {
          padding: 0.45rem 1.5rem;
        }
        .pitch-banner-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pitch-banner-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-primary);
          font-size: 0.775rem;
          letter-spacing: 0.05em;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        .pitch-sub-badge {
          background: rgba(226, 199, 153, 0.15);
          color: var(--accent-gold);
          border: 1px solid rgba(226, 199, 153, 0.3);
          padding: 0.1rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
        }
        .pitch-toggle-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pitch-toggle-btn:hover {
          background: rgba(226, 199, 153, 0.2);
          border-color: var(--accent-gold);
          color: var(--accent-gold-light);
        }
        .pitch-quick-links {
          padding: 0.75rem 0 0.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 0.4rem;
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pitch-guide-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .pitch-links-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pitch-chip {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          font-size: 0.725rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pitch-chip:hover {
          background: var(--accent-gold);
          color: #0A0D14;
          border-color: var(--accent-gold);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
