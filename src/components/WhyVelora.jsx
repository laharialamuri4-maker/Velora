import React from 'react';
import { Sliders, Zap, BadgePercent, Palette, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_VELORA } from '../data/ventureContent';

export default function WhyVelora() {
  const iconMap = {
    Sliders: Sliders,
    Zap: Zap,
    BadgePercent: BadgePercent,
    Palette: Palette,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="why-velora" className="section-wrapper why-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Value Drivers</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gold-gradient-text">Velora?</span>
          </h2>
          <p className="section-subtitle">
            Built to eliminate fashion shopping fatigue by replacing cluttered product grids with tailored style discovery.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_VELORA.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.id} className="why-card glass-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComp size={22} className="why-icon" />
                  </div>
                  <span className="why-badge">{item.badge}</span>
                </div>

                <div className="why-card-content">
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.description}</p>
                </div>

                <div className="why-footer-glow"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-section {
          background: linear-gradient(180deg, rgba(8, 10, 16, 0.7) 0%, rgba(16, 21, 35, 0.5) 100%);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
        .why-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 2.25rem 1.75rem;
          transition: all var(--transition-normal);
          position: relative;
        }
        .why-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          background: rgba(24, 32, 52, 0.9);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(226, 199, 153, 0.1);
        }
        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .why-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(226, 199, 153, 0.1);
          border: 1px solid rgba(226, 199, 153, 0.25);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .why-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          background: rgba(226, 199, 153, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.03em;
        }
        .why-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }
        .why-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
