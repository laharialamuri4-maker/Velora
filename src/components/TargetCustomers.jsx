import React from 'react';
import { Users, Sparkles, Briefcase, Crown, Heart, Wallet, Check } from 'lucide-react';
import { TARGET_CUSTOMERS } from '../data/ventureContent';

export default function TargetCustomers() {
  const getIcon = (key) => {
    switch (key) {
      case 'Sparkles': return <Sparkles size={22} />;
      case 'Briefcase': return <Briefcase size={22} />;
      case 'Crown': return <Crown size={22} />;
      case 'Heart': return <Heart size={22} />;
      case 'Wallet': return <Wallet size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section id="target-customers" className="section-wrapper target-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            <span>Inclusive Audience & Silhouettes</span>
          </div>
          <h2 className="section-title">
            Our <span className="gold-gradient-text">Customers</span>
          </h2>
          <p className="section-subtitle">
            We design for every style, every body & every dream — classic, traditional, modest, and decent outfits personalized just for you.
          </p>
        </div>

        {/* Slide 4 Banner Card Showcase */}
        <div className="customers-slide-banner glass-card">
          <div className="slide-media-wrap">
            <img 
              src={`${import.meta.env.BASE_URL}assets/theme/velora_customers_infographic.jpg`} 
              alt="Velora Customer Categories Infographic" 
              className="customers-infographic-img"
            />
          </div>
          <div className="slide-content-wrap">
            <span className="velora-brand-eyebrow">VELORA PHILOSOPHY</span>
            <h3 className="slide-hero-quote">
              "We don't just design outfits, <br />
              <span className="plum-highlight">We design confidence!"</span>
            </h3>
            <p className="slide-hero-desc">
              Whether you are preparing for a college presentation, commanding the boardroom, attending a sacred wedding celebration, or seeking modest everyday grace within budget — Velora brings tailored elegance within everyone's reach.
            </p>

            <div className="why-choose-velora-box">
              <span className="why-title">Why They Choose Velora:</span>
              <div className="why-pills-grid">
                <div className="why-pill">
                  <Check size={14} className="pill-icon" />
                  <span>Personalized Designs</span>
                </div>
                <div className="why-pill">
                  <Check size={14} className="pill-icon" />
                  <span>Perfect Fit Guarantee</span>
                </div>
                <div className="why-pill">
                  <Check size={14} className="pill-icon" />
                  <span>Quality Heritage Fabrics</span>
                </div>
                <div className="why-pill">
                  <Check size={14} className="pill-icon" />
                  <span>Made Within Your Budget</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Distinct Customer Segment Cards */}
        <div className="customers-five-grid">
          {TARGET_CUSTOMERS.map((cust, idx) => (
            <div key={idx} className="target-card glass-card">
              <div className="target-header">
                <div className="target-icon-box">
                  {getIcon(cust.iconKey)}
                </div>
                <span className="target-avatar">{cust.avatar}</span>
              </div>

              <div className="target-body">
                <span className="target-subtitle">{cust.subtitle}</span>
                <h3 className="target-title">{cust.title}</h3>
                <p className="target-desc">{cust.description}</p>
              </div>

              <div className="target-footer">
                <div className="target-budget-row">
                  <span className="budget-label">Budget Focus:</span>
                  <span className="budget-value">{cust.budgetFocus}</span>
                </div>

                <ul className="target-needs-list">
                  {cust.keyNeeds.map((need, i) => (
                    <li key={i}>
                      <Check size={13} className="need-check" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .target-section {
          background: linear-gradient(180deg, #FDF9F5 0%, #F8EFEA 100%);
          position: relative;
        }
        .customers-slide-banner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding: 2rem;
          background: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          margin-bottom: 3.5rem;
          box-shadow: 0 16px 36px rgba(164, 94, 160, 0.08);
          align-items: center;
        }
        @media (max-width: 960px) {
          .customers-slide-banner {
            grid-template-columns: 1fr;
          }
        }
        .slide-media-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(18, 12, 23, 0.1);
          border: 1px solid rgba(164, 94, 160, 0.2);
        }
        .customers-infographic-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .slide-content-wrap {
          display: flex;
          flex-direction: column;
        }
        .velora-brand-eyebrow {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary-plum);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 0.5rem;
        }
        .slide-hero-quote {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          color: var(--text-dark);
          line-height: 1.3;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .plum-highlight {
          color: var(--primary-plum);
          font-style: italic;
        }
        .slide-hero-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .why-choose-velora-box {
          background: #FBF4F9;
          border: 1px solid rgba(164, 94, 160, 0.25);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .why-title {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          display: block;
        }
        .why-pills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }
        @media (max-width: 500px) {
          .why-pills-grid {
            grid-template-columns: 1fr;
          }
        }
        .why-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-dark);
          background: #FFFFFF;
          padding: 0.4rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(164, 94, 160, 0.15);
        }
        .pill-icon {
          color: var(--primary-plum);
          flex-shrink: 0;
        }
        .customers-five-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .target-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 1.6rem 1.25rem;
          transition: all var(--transition-normal);
          box-shadow: 0 4px 12px rgba(18, 12, 23, 0.04);
        }
        .target-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary-plum);
          box-shadow: 0 16px 32px rgba(164, 94, 160, 0.15);
        }
        .target-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .target-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: #F7EDF5;
          border: 1px solid rgba(164, 94, 160, 0.3);
          color: var(--primary-plum);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .target-avatar {
          font-size: 1.5rem;
        }
        .target-subtitle {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary-plum);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .target-title {
          font-size: 1.15rem;
          font-family: var(--font-serif);
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .target-desc {
          font-size: 0.825rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .target-footer {
          border-top: 1px solid rgba(18, 12, 23, 0.06);
          padding-top: 0.85rem;
        }
        .target-budget-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
          background: #FDF4EB;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
        }
        .budget-label {
          color: #8C6239;
          font-weight: 600;
        }
        .budget-value {
          color: var(--text-dark);
          font-weight: 700;
        }
        .target-needs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .target-needs-list li {
          font-size: 0.75rem;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .need-check {
          color: var(--primary-plum);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
