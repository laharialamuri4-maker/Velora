import React, { useState, useEffect } from 'react';
import { Sparkles, Bookmark, Menu, X, ArrowRight, Compass } from 'lucide-react';

export default function Navbar({ onOpenPersonalization, onOpenSaved, savedCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'problems', 'solution', 'how-it-works', 'discover', 'why-velora', 'about', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-root ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo matching the user's slide branding */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          <div className="logo-icon-wrapper">
            <span className="logo-letter">V</span>
            <span className="logo-sparkle">✦</span>
          </div>
          <div className="logo-text-group">
            <span className="brand-name">VELORA</span>
            <span className="brand-sub">DESIGNED FOR YOU, JUST FOR YOU</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeSection === 'problems' ? 'active' : ''}`}
            onClick={() => scrollToSection('problems')}
          >
            Problem
          </button>
          <button 
            className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </button>
          <button 
            className={`nav-link ${activeSection === 'discover' ? 'active' : ''}`}
            onClick={() => scrollToSection('discover')}
          >
            Discover
          </button>
          <button 
            className={`nav-link ${activeSection === 'why-velora' ? 'active' : ''}`}
            onClick={() => scrollToSection('why-velora')}
          >
            Why Velora
          </button>
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Saved items bookmark */}
          <button 
            className="saved-btn"
            onClick={onOpenSaved}
            title="Saved Recommendations"
            aria-label="View Saved Items"
          >
            <Bookmark size={18} />
            {savedCount > 0 && <span className="saved-badge">{savedCount}</span>}
          </button>

          {/* Prominent CTA */}
          <button 
            className="btn btn-primary nav-cta-btn"
            onClick={onOpenPersonalization}
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('problems')}
            >
              Problem
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('discover')}
            >
              Discover
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('why-velora')}
            >
              Why Velora
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>

          <div className="mobile-drawer-cta">
            <button 
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPersonalization();
              }}
            >
              <Sparkles size={16} />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          background: rgba(18, 12, 23, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(229, 195, 132, 0.15);
          transition: all var(--transition-normal);
        }
        .navbar-root.scrolled {
          background: rgba(18, 12, 23, 0.96);
          border-bottom-color: rgba(212, 175, 55, 0.35);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #2D1A38 0%, #170E1C 100%);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 4px 12px rgba(229, 195, 132, 0.2);
        }
        .logo-letter {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--accent-gold);
        }
        .logo-sparkle {
          position: absolute;
          top: -4px;
          right: -4px;
          font-size: 0.6rem;
          color: #D4AF37;
        }
        .logo-text-group {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          line-height: 1;
        }
        .brand-sub {
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          margin-top: 3px;
          font-weight: 600;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .nav-link {
          background: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding: 0.4rem 0;
          transition: color var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: #FFFFFF;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-gold), #D4AF37);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .saved-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .saved-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--accent-gold);
          border-color: var(--border-gold);
        }
        .saved-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--accent-primary);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-toggle-btn {
          display: none;
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem;
        }
        .mobile-drawer {
          display: none;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-cta-btn {
            display: none;
          }
          .mobile-drawer {
            display: block;
            background: rgba(20, 14, 26, 0.98);
            backdrop-filter: blur(25px);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.5rem;
            animation: slideDown 0.3s ease;
          }
          .mobile-drawer-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }
          .mobile-link {
            background: none;
            color: var(--text-secondary);
            font-size: 1.05rem;
            font-weight: 500;
            text-align: left;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            cursor: pointer;
          }
          .mobile-link:hover {
            color: var(--accent-gold);
          }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
