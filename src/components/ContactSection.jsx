import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';
import { VENTURE_INFO } from '../data/ventureContent';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or feedback';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Build the <span className="gold-gradient-text">Future of Fashion Discovery</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a mentor, investor, early user, or brand partner, we’d love to hear your insights on the Velora concept.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-col glass-card">
            <h3 className="info-col-title">Get in Touch</h3>
            <p className="info-col-desc">
              Velora is actively refining its product roadmap and recommendation accuracy. Reach out for prototype demos, academic questions, or collaborative discussions.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="item-label">Direct Venture Email</span>
                  <a href={`mailto:${VENTURE_INFO.contactEmail}`} className="item-value">
                    {VENTURE_INFO.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="socials-box">
              <span className="socials-label">Follow Venture Journey</span>
              <div className="socials-row">
                <a 
                  href={VENTURE_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  title="Velora Instagram (Placeholder)"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
                <a 
                  href={VENTURE_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  title="Velora LinkedIn (Placeholder)"
                >
                  <LinkedInIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={VENTURE_INFO.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  title="Velora GitHub (Placeholder)"
                >
                  <GitHubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="mentor-callout">
              <Sparkles size={16} className="mentor-icon" />
              <p>
                <strong>Academic / Pitch Presentation Notice:</strong> All contact channels are pre-configured placeholders ready for student and faculty correspondence.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col glass-card">
            {isSubmitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={42} />
                </div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you for reaching out to the Velora team. We appreciate your feedback and will get back to you shortly.
                </p>
                <button className="btn btn-secondary" onClick={handleResetForm}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send Us a Message</h3>

                {/* Name */}
                <div className="form-field">
                  <label className="field-label" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`field-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-field">
                  <label className="field-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`field-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="field-label" htmlFor="contact-msg">
                    Message / Feedback
                  </label>
                  <textarea
                    id="contact-msg"
                    rows="4"
                    placeholder="Share your thoughts on the Velora discovery platform..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`field-input field-textarea ${errors.message ? 'error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-contact-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, rgba(8, 10, 16, 0.95) 0%, rgba(17, 23, 38, 0.8) 100%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(18, 24, 38, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
        }
        .info-col-title {
          font-size: 1.5rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }
        .info-col-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .contact-details-list {
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(226, 199, 153, 0.1);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-item-text {
          display: flex;
          flex-direction: column;
        }
        .item-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .item-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-gold);
        }
        .item-value:hover {
          text-decoration: underline;
        }
        .socials-box {
          margin-bottom: 2rem;
        }
        .socials-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.75rem;
        }
        .socials-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .social-btn:hover {
          background: var(--accent-gold);
          color: #0A0D14;
          border-color: var(--accent-gold);
        }
        .mentor-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          background: rgba(226, 199, 153, 0.06);
          border: 1px solid rgba(226, 199, 153, 0.18);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          font-size: 0.75rem;
          color: var(--accent-gold-light);
          line-height: 1.4;
        }
        .mentor-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .contact-form-col {
          background: rgba(18, 24, 38, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
        }
        .form-title {
          font-size: 1.4rem;
          color: #FFFFFF;
          margin-bottom: 1.75rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .field-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .field-input {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: #FFFFFF;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .field-input:focus {
          border-color: var(--border-gold);
          background: rgba(255, 255, 255, 0.08);
        }
        .field-input.error {
          border-color: #F87171;
        }
        .field-textarea {
          resize: vertical;
          min-height: 100px;
        }
        .field-error {
          font-size: 0.75rem;
          color: #F87171;
        }
        .submit-contact-btn {
          margin-top: 0.5rem;
          width: 100%;
        }
        .form-success-state {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon-box {
          color: #34D399;
          margin-bottom: 0.5rem;
        }
        .success-title {
          font-size: 1.6rem;
          color: #FFFFFF;
        }
        .success-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 420px;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
}
