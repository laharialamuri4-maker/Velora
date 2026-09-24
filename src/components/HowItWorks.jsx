import React from 'react';
import { User, Palette, Tag, Sparkles, Check, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/ventureContent';

export default function HowItWorks({ onOpenPersonalization }) {
  const stepIcons = [User, Palette, Tag, Sparkles];

  return (
    <section id="how-it-works" className="section-wrapper how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>4 Simple Steps</span>
          </div>
          <h2 className="section-title">
            How <span className="gold-gradient-text">Velora Works</span>
          </h2>
          <p className="section-subtitle">
            A frictionless discovery flow engineered to capture your unique fashion priorities and surface outfits that genuinely match you.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="how-steps-grid">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
            const IconComp = stepIcons[idx] || Sparkles;
            return (
              <div key={idx} className="how-step-card glass-card">
                <div className="step-card-header">
                  <div className="step-number-badge">{stepItem.step}</div>
                  <div className="step-card-icon">
                    <IconComp size={22} />
                  </div>
                </div>

                <div className="step-card-body">
                  <span className="step-card-sub">{stepItem.subtitle}</span>
                  <h3 className="step-card-title">{stepItem.title}</h3>
                  <p className="step-card-desc">{stepItem.description}</p>
                </div>

                <div className="step-card-footer">
                  {idx === 0 && (
                    <div className="step-tags-preview">
                      <span>Gender</span> • <span>Category</span> • <span>Fit Goal</span>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="step-tags-preview">
                      <span>Casual</span> • <span>Streetwear</span> • <span>Formal</span>
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="step-tags-preview">
                      <span>₹500</span> – <span>₹5,000+</span> <span>Price Tiers</span>
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="step-tags-preview highlight-tag">
                      <span>Instant Velora Match %</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="how-bottom-action">
          <button className="btn btn-primary btn-lg" onClick={onOpenPersonalization}>
            <span>Start Your Personalization</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background: linear-gradient(180deg, rgba(15, 19, 32, 0.4) 0%, rgba(8, 10, 16, 0.8) 100%);
        }
        .how-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 1024px) {
          .how-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .how-steps-grid {
            grid-template-columns: 1fr;
          }
        }
        .how-step-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(18, 23, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          transition: all var(--transition-normal);
          position: relative;
        }
        .how-step-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold);
          background: rgba(24, 31, 52, 0.85);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(226, 199, 153, 0.1);
        }
        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .step-number-badge {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-gold);
          letter-spacing: -0.02em;
        }
        .step-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(226, 199, 153, 0.1);
          border: 1px solid rgba(226, 199, 153, 0.25);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-card-sub {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.35rem;
          display: block;
        }
        .step-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }
        .step-card-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .step-card-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1rem;
        }
        .step-tags-preview {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .step-tags-preview.highlight-tag {
          color: #34D399;
          font-weight: 600;
        }
        .how-bottom-action {
          text-align: center;
        }
      `}</style>
    </section>
  );
}
