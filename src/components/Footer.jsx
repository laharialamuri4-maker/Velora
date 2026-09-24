import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';
import { VENTURE_INFO } from '../data/ventureContent';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-brand-title">VELORA</span>
            </div>
            <p className="footer-sub-tag">DESIGNED FOR YOU, JUST FOR YOU</p>
            <p className="footer-tagline">“Your Style, Your Fit, Your Identity”</p>
            <p className="footer-desc">
              To make fashion personal, inclusive and effortless for everyone. Discover classic, traditional, and decent outfits tailored for your body and budget.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-links-heading">Explore Platform</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavigate('home')} className="footer-nav-link">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="footer-nav-link">How It Works</button>
              </li>
              <li>
                <button onClick={() => onNavigate('discover')} className="footer-nav-link">Traditional Catalog</button>
              </li>
              <li>
                <button onClick={() => onNavigate('target-customers')} className="footer-nav-link">Our Customers</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="footer-nav-link">About Founder & Atelier</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="footer-nav-link">Contact & Feedback</button>
              </li>
            </ul>
          </div>

          {/* Presentation & Entrepreneurship Focus */}
          <div className="footer-academic-col">
            <h4 className="footer-links-heading">Venture Presentation</h4>
            <div className="academic-badge-box">
              <span className="academic-tag">Entrepreneurship Prototype</span>
              <p className="academic-text">
                This website is an interactive prototype created for academic demonstration, mentor review, and venture pitch evaluation.
              </p>
            </div>
            <div className="footer-socials">
              <a href={VENTURE_INFO.socials.instagram} target="_blank" rel="noreferrer" className="footer-social-btn" title="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href={VENTURE_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="footer-social-btn" title="LinkedIn">
                <LinkedInIcon size={16} />
              </a>
              <a href={VENTURE_INFO.socials.github} target="_blank" rel="noreferrer" className="footer-social-btn" title="GitHub">
                <GitHubIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-group">
            <p className="copyright-text">
              © 2026 VELORA. Entrepreneurship Venture Prototype.
            </p>
            <p className="academic-disclaimer-sub">
              To make fashion personal, inclusive and effortless for everyone.
            </p>
          </div>

          <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #120C17;
          border-top: 1px solid rgba(229, 195, 132, 0.2);
          padding: 5rem 0 2.5rem 0;
          position: relative;
          color: #FAF5F0;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1.2fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.25rem;
        }
        .footer-brand-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #FFFFFF;
        }
        .footer-sub-tag {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--accent-gold);
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .footer-tagline {
          font-size: 0.95rem;
          font-weight: 600;
          color: #E2C799;
          font-style: italic;
          margin-bottom: 0.85rem;
        }
        .footer-desc {
          font-size: 0.85rem;
          color: #D1C7BD;
          line-height: 1.6;
          max-width: 380px;
        }
        .footer-links-heading {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-nav-link {
          background: none;
          color: #D1C7BD;
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0;
          text-align: left;
          transition: color var(--transition-fast);
        }
        .footer-nav-link:hover {
          color: #FFFFFF;
        }
        .academic-badge-box {
          background: rgba(164, 94, 160, 0.15);
          border: 1px solid rgba(229, 195, 132, 0.25);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.25rem;
        }
        .academic-tag {
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.35rem;
        }
        .academic-text {
          font-size: 0.775rem;
          color: #D1C7BD;
          line-height: 1.5;
        }
        .footer-socials {
          display: flex;
          gap: 0.65rem;
        }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #E2C799;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .footer-social-btn:hover {
          background: var(--primary-plum);
          color: #FFFFFF;
          border-color: var(--primary-plum);
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: #D1C7BD;
          font-weight: 500;
        }
        .academic-disclaimer-sub {
          font-size: 0.75rem;
          color: #9C8E84;
          margin-top: 0.2rem;
        }
        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(229, 195, 132, 0.3);
          color: var(--accent-gold);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .scroll-top-btn:hover {
          background: var(--primary-plum);
          color: #FFFFFF;
          border-color: var(--primary-plum);
        }
      `}</style>
    </footer>
  );
}
