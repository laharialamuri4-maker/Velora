import React, { useState } from 'react';
import { Sparkles, Sliders, Cpu, CheckCircle2, ArrowRight, Zap, Filter, Tag, UserCheck } from 'lucide-react';
import { SOLUTION_POINTS } from '../data/ventureContent';

export default function SolutionSection({ onTryPrototype }) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="solution" className="section-wrapper solution-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>The Velora Solution</span>
          </div>
          <h2 className="section-title">
            Meet <span className="gold-gradient-text">Velora</span>
          </h2>
          <p className="section-subtitle">
            Velora simplifies fashion discovery by understanding your preferences and recommending clothing that matches your style, body type, occasion, comfort preferences, and budget.
          </p>
        </div>

        {/* The 3-Stage Visual Pipeline Journey */}
        <div className="journey-pipeline-card">
          <div className="pipeline-header">
            <span className="pipeline-tag">DISCOVERY PIPELINE</span>
            <h3 className="pipeline-title">From Overwhelming Choices to Tailored Fits</h3>
          </div>

          <div className="pipeline-flow">
            {/* Step 1: User Preferences */}
            <div className={`pipeline-step ${activeStep === 1 ? 'active' : ''}`} onClick={() => setActiveStep(1)}>
              <div className="step-badge">Phase 1</div>
              <div className="step-icon-circle">
                <Sliders size={22} />
              </div>
              <h4 className="step-title">Your Preferences</h4>
              <p className="step-desc">Style aesthetic, budget range, silhouette comfort, and occasion.</p>
              <div className="step-chips">
                <span className="chip">Streetwear / Casual</span>
                <span className="chip">₹500–₹1,500</span>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="pipeline-connector">
              <div className="connector-line"></div>
              <div className="connector-pulse"></div>
              <ArrowRight size={20} className="connector-icon" />
            </div>

            {/* Step 2: Velora Engine */}
            <div className={`pipeline-step ${activeStep === 2 ? 'active' : ''}`} onClick={() => setActiveStep(2)}>
              <div className="step-badge featured-badge">Core Engine</div>
              <div className="step-icon-circle engine-icon">
                <Cpu size={22} />
              </div>
              <h4 className="step-title">Velora Matching</h4>
              <p className="step-desc">Rule-based multi-factor compatibility evaluation and scoring.</p>
              <div className="step-chips">
                <span className="chip gold-chip">Fit Algorithm</span>
                <span className="chip gold-chip">Price Scoring</span>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="pipeline-connector">
              <div className="connector-line"></div>
              <div className="connector-pulse"></div>
              <ArrowRight size={20} className="connector-icon" />
            </div>

            {/* Step 3: Personalized Recommendations */}
            <div className={`pipeline-step ${activeStep === 3 ? 'active' : ''}`} onClick={() => setActiveStep(3)}>
              <div className="step-badge">Phase 3</div>
              <div className="step-icon-circle result-icon">
                <Sparkles size={22} />
              </div>
              <h4 className="step-title">Personalized Picks</h4>
              <p className="step-desc">Curated catalog items ranked by percentage compatibility.</p>
              <div className="step-chips">
                <span className="chip green-chip">94% Match</span>
                <span className="chip green-chip">Style Rationale</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Solution Highlights */}
        <div className="solution-highlights-grid">
          {SOLUTION_POINTS.map((item, idx) => (
            <div key={idx} className="solution-item glass-card">
              <div className="solution-item-icon">
                <CheckCircle2 size={20} />
              </div>
              <div className="solution-item-text">
                <h4 className="solution-item-title">{item.title}</h4>
                <p className="solution-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prototype Action Callout */}
        <div className="solution-cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-eyebrow">EXPERIENCE THE FLOW</span>
            <h3 className="cta-banner-heading">Ready to see how personal fashion discovery works?</h3>
            <p className="cta-banner-desc">Take our interactive 30-second style preference test and generate sample recommendations.</p>
          </div>
          <button className="btn btn-primary btn-lg" onClick={onTryPrototype}>
            <Sparkles size={18} />
            <span>Try Interactive Prototype</span>
          </button>
        </div>
      </div>

      <style>{`
        .solution-section {
          position: relative;
        }
        .journey-pipeline-card {
          background: linear-gradient(135deg, rgba(17, 22, 38, 0.95) 0%, rgba(13, 17, 28, 0.95) 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 2.75rem;
          margin-bottom: 3.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(226, 199, 153, 0.08);
        }
        .pipeline-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .pipeline-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pipeline-title {
          font-size: 1.6rem;
          color: #FFFFFF;
          margin-top: 0.35rem;
        }
        .pipeline-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 1.25rem;
        }
        .pipeline-step {
          background: rgba(22, 28, 48, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.25rem;
          text-align: center;
          transition: all var(--transition-normal);
          cursor: pointer;
        }
        .pipeline-step:hover, .pipeline-step.active {
          background: rgba(26, 35, 60, 0.9);
          border-color: var(--border-gold);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }
        .step-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
        }
        .step-badge.featured-badge {
          background: rgba(226, 199, 153, 0.15);
          color: var(--accent-gold);
          border: 1px solid var(--border-gold);
        }
        .step-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }
        .step-icon-circle.engine-icon {
          background: linear-gradient(135deg, rgba(226, 199, 153, 0.2), rgba(212, 175, 55, 0.2));
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold-light);
        }
        .step-icon-circle.result-icon {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34D399;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }
        .step-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .step-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          justify-content: center;
        }
        .chip {
          font-size: 0.68rem;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
        }
        .chip.gold-chip {
          background: rgba(226, 199, 153, 0.12);
          color: var(--accent-gold);
        }
        .chip.green-chip {
          background: rgba(16, 185, 129, 0.12);
          color: #34D399;
        }
        .pipeline-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: var(--accent-gold);
          padding: 0 0.5rem;
        }
        .connector-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(226, 199, 153, 0.2), rgba(226, 199, 153, 0.6), rgba(226, 199, 153, 0.2));
          z-index: 1;
        }
        .connector-icon {
          position: relative;
          z-index: 2;
          background: #0F1320;
          padding: 2px;
          border-radius: 50%;
        }
        .solution-highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        .solution-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
        }
        .solution-item-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .solution-item-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .solution-item-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .solution-cta-banner {
          background: linear-gradient(135deg, rgba(26, 33, 56, 0.8) 0%, rgba(18, 23, 38, 0.9) 100%);
          border: 1px solid rgba(226, 199, 153, 0.25);
          border-radius: var(--radius-xl);
          padding: 2.25rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .cta-banner-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .cta-banner-heading {
          font-size: 1.5rem;
          color: #FFFFFF;
          margin: 0.25rem 0 0.5rem 0;
        }
        .cta-banner-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          max-width: 580px;
        }

        @media (max-width: 900px) {
          .pipeline-flow {
            grid-template-columns: 1fr;
          }
          .pipeline-connector {
            transform: rotate(90deg);
            padding: 1rem 0;
          }
          .solution-highlights-grid {
            grid-template-columns: 1fr;
          }
          .solution-cta-banner {
            padding: 2rem;
            flex-direction: column;
            text-align: center;
          }
          .solution-cta-banner button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
