import React from 'react';
import { Layers, Sparkles, UserCheck, Wallet, Clock, AlertCircle, Check, Heart } from 'lucide-react';

export default function ProblemSection() {
  const problemPillars = [
    {
      id: 1,
      title: "Limited Options for Every Body Type",
      desc: "Most mass-market clothes are not designed to suit every body type and shape, leaving shoppers with limited choices.",
      icon: "👗",
      stat: "Standard sizes ignore diverse silhouettes"
    },
    {
      id: 2,
      title: "Size Issues & Poor Fit",
      desc: "Standard sizes don't always fit well, leading to uncomfortable drapes, dissatisfaction, and frequent returns.",
      icon: "📏",
      stat: "High return rates due to sizing mismatch"
    },
    {
      id: 3,
      title: "Lack of Personalization",
      desc: "Online shopping catalogs offer identical repetitive styles for everyone, with zero personal touch or aesthetic alignment.",
      icon: "💻",
      stat: "Generic recommendations lack individuality"
    },
    {
      id: 4,
      title: "High Cost for Customization",
      desc: "Traditional boutique custom-made outfits are expensive, time-consuming, and not easily accessible for everyday shoppers.",
      icon: "🏷️",
      stat: "Custom tailoring remains unaffordable"
    }
  ];

  return (
    <section id="problems" className="section-wrapper problems-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <AlertCircle size={14} />
            <span>The Problem We Are Solving</span>
          </div>
          <h2 className="section-title">
            Finding the right outfit <span className="gold-gradient-text">shouldn't be this hard!</span>
          </h2>
          <p className="section-subtitle">
            Most online shopping platforms force consumers to guess their size and settle for generic mass trends. Velora solves fit uncertainty and styling friction with personalization.
          </p>
        </div>

        {/* Infographic Visual & Key Problem Breakdown */}
        <div className="problem-visual-container">
          <div className="problem-banner-card glass-card">
            <div className="problem-image-col">
              <img 
                src={`${import.meta.env.BASE_URL}assets/theme/velora_problem_infographic.jpg`} 
                alt="The Problem We Are Solving - Velora" 
                className="problem-theme-img"
              />
              <div className="problem-img-tag">
                <span>Core Consumer Challenges</span>
              </div>
            </div>
            
            <div className="problem-text-col">
              <span className="problem-eyebrow">Real Market Friction</span>
              <h3 className="problem-feature-title">Why Online Shopping Feels Like a Compromise</h3>
              <p className="problem-feature-desc">
                When clothes don't fit right or reflect personal taste, shoppers experience wardrobe dissatisfaction, wasted money, and reduced confidence.
              </p>

              {/* Consequences from user slide */}
              <div className="consequences-box">
                <span className="consequences-title">The Result of Standard Shopping:</span>
                <div className="consequences-grid">
                  <div className="c-item">
                    <span className="c-icon">😟</span>
                    <span className="c-text">Frustration</span>
                  </div>
                  <div className="c-item">
                    <span className="c-icon">👗</span>
                    <span className="c-text">Wardrobe Dissatisfaction</span>
                  </div>
                  <div className="c-item">
                    <span className="c-icon">💸</span>
                    <span className="c-text">Money Wastage</span>
                  </div>
                  <div className="c-item">
                    <span className="c-icon">📉</span>
                    <span className="c-text">Low Confidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="problems-grid-4">
          {problemPillars.map((prob) => (
            <div key={prob.id} className="problem-card glass-card">
              <div className="problem-card-top">
                <span className="p-emoji-icon">{prob.icon}</span>
                <span className="problem-number">0{prob.id}</span>
              </div>

              <div className="problem-content">
                <h3 className="problem-title">{prob.title}</h3>
                <p className="problem-desc">{prob.desc}</p>
              </div>

              <div className="problem-footer">
                <span className="problem-impact-badge">
                  {prob.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Banner from bottom of user slide */}
        <div className="problem-mission-banner">
          <div className="mission-banner-left">
            <span className="mission-label">Our Mission</span>
            <h4 className="mission-text">To make fashion personal, inclusive and effortless for everyone.</h4>
          </div>
          <div className="mission-banner-right">
            <div className="m-check-item">
              <Check size={16} className="m-check-icon" />
              <span>Perfect Fit</span>
            </div>
            <div className="m-check-item">
              <Check size={16} className="m-check-icon" />
              <span>Personalized Designs</span>
            </div>
            <div className="m-check-item">
              <Check size={16} className="m-check-icon" />
              <span>Within Your Budget</span>
            </div>
            <div className="m-check-item">
              <Check size={16} className="m-check-icon" />
              <span>Made For You</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .problems-section {
          background: linear-gradient(180deg, rgba(18, 12, 23, 0.4) 0%, rgba(28, 19, 36, 0.6) 100%);
          border-top: 1px solid rgba(229, 195, 132, 0.1);
          border-bottom: 1px solid rgba(229, 195, 132, 0.1);
        }
        .problem-visual-container {
          margin-bottom: 3rem;
        }
        .problem-banner-card {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          padding: 2rem;
          background: rgba(30, 21, 40, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          align-items: center;
        }
        @media (max-width: 900px) {
          .problem-banner-card {
            grid-template-columns: 1fr;
          }
        }
        .problem-image-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 380px;
        }
        .problem-theme-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .problem-img-tag {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(22, 15, 30, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(216, 140, 185, 0.5);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-lavender);
        }
        .problem-text-col {
          display: flex;
          flex-direction: column;
        }
        .problem-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.4rem;
        }
        .problem-feature-title {
          font-size: 1.65rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .problem-feature-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .consequences-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(229, 195, 132, 0.15);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .consequences-title {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.75rem;
        }
        .consequences-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        .c-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .c-icon {
          font-size: 1.1rem;
        }
        .c-text {
          font-size: 0.825rem;
          color: #FFFFFF;
          font-weight: 500;
        }
        .problems-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1024px) {
          .problems-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .problems-grid-4 {
            grid-template-columns: 1fr;
          }
        }
        .problem-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(30, 21, 40, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          transition: all var(--transition-normal);
        }
        .problem-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          background: rgba(42, 29, 56, 0.95);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(229, 195, 132, 0.1);
        }
        .problem-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .p-emoji-icon {
          font-size: 1.75rem;
        }
        .problem-number {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
        }
        .problem-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .problem-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .problem-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 0.85rem;
        }
        .problem-impact-badge {
          font-size: 0.725rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          display: inline-block;
        }
        .problem-mission-banner {
          background: linear-gradient(135deg, #462446 0%, #2A172B 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        .mission-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.35rem;
        }
        .mission-text {
          font-size: 1.35rem;
          color: #FFFFFF;
          max-width: 520px;
          line-height: 1.35;
        }
        .mission-banner-right {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem 1.5rem;
        }
        .m-check-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .m-check-icon {
          color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
