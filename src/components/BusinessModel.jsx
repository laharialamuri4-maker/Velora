import React from 'react';
import { DollarSign, Link2, Handshake, Megaphone, Crown, Info, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_MODEL } from '../data/ventureContent';

export default function BusinessModel() {
  const modelIcons = [Link2, Handshake, Megaphone, Crown];

  return (
    <section id="business-model" className="section-wrapper business-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <DollarSign size={14} />
            <span>Value Creation Architecture</span>
          </div>
          <h2 className="section-title">
            How Velora Can <span className="gold-gradient-text">Create Value</span>
          </h2>
          <p className="section-subtitle">
            Exploring sustainable value creation avenues designed to deliver quality for shoppers, bespoke artisans, and partner fashion labels.
          </p>
        </div>

        {/* Future Revenue Disclaimer Notice */}
        <div className="future-model-disclaimer">
          <Info size={16} />
          <span>
            <strong>Entrepreneurship Concept Note:</strong> The value models outlined below represent prospective partnership architectures for future venture phases, not active transactional revenues.
          </span>
        </div>

        {/* 4 Revenue & Value Model Cards */}
        <div className="business-grid">
          {BUSINESS_MODEL.map((model, idx) => {
            const IconComp = modelIcons[idx] || DollarSign;
            return (
              <div key={idx} className="business-card glass-card">
                <div className="model-header">
                  <div className="model-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="model-status-pill">{model.status}</span>
                </div>

                <div className="model-body">
                  <span className="model-tag">{model.tag}</span>
                  <h3 className="model-title">{model.title}</h3>
                  <p className="model-desc">{model.description}</p>
                </div>

                <div className="model-footer">
                  <div className="model-viability-indicator">
                    <span className="dot"></span>
                    <span>Potential Strategic Channel</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .business-section {
          background: linear-gradient(180deg, rgba(18, 12, 23, 0.9) 0%, rgba(28, 19, 36, 0.7) 100%);
        }
        .future-model-disclaimer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(229, 195, 132, 0.08);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 0.85rem 1.25rem;
          max-width: 860px;
          margin: 0 auto 3rem auto;
          font-size: 0.825rem;
          color: var(--accent-gold-light);
        }
        .future-model-disclaimer strong {
          color: #FFFFFF;
        }
        .business-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .business-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .business-grid {
            grid-template-columns: 1fr;
          }
        }
        .business-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(30, 21, 40, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          transition: all var(--transition-normal);
        }
        .business-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          background: rgba(42, 29, 56, 0.95);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(229, 195, 132, 0.1);
        }
        .model-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          gap: 0.5rem;
        }
        .model-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(229, 195, 132, 0.1);
          border: 1px solid rgba(229, 195, 132, 0.3);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .model-status-pill {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .model-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.35rem;
        }
        .model-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }
        .model-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }
        .model-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 0.85rem;
        }
        .model-viability-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.725rem;
          color: var(--text-muted);
        }
        .model-viability-indicator .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
