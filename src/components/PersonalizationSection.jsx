import React, { useState } from 'react';
import { Sparkles, Sliders, Check, RotateCcw, Zap, Info, ArrowDown, User, Tag, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PersonalizationSection({ onGenerateRecommendations, isGenerating = false }) {
  // Form State
  const [gender, setGender] = useState('Women');
  const [category, setCategory] = useState('All');
  const [bodyType, setBodyType] = useState('Regular');
  const [selectedStyles, setSelectedStyles] = useState(['Traditional', 'Royal Ethnic']);
  const [occasion, setOccasion] = useState('Wedding & Festive');
  const [budgetTier, setBudgetTier] = useState('₹2,000–₹5,000');

  // Options Definitions tailored for Classic, Traditional & Decent Wear
  const genderOptions = ['Women', 'Men', 'All'];
  
  const categoryOptions = [
    'All',
    'Sarees',
    'Anarkali Suits',
    'Chikankari Kurtas',
    'Modest Tunics',
    'Formal Trousers',
    'Nehru Jackets',
    'Ethnic Gowns',
    'Silk Dupattas',
    'Classic Shirts'
  ];

  const bodyTypeOptions = [
    'Regular',
    'Slim',
    'Curvy',
    'Plus Size',
    'Tall & Slender',
    'Prefer not to say'
  ];

  const styleOptions = [
    'Traditional',
    'Royal Ethnic',
    'Classic Minimal',
    'Modest Formal',
    'Handcrafted Artisan',
    'Festive Elegance',
    'Graceful Casual'
  ];

  const occasionOptions = [
    'Wedding & Festive',
    'Office & Corporate',
    'College & Daily Wear',
    'Family Gathering',
    'Cultural Event',
    'Formal Reception'
  ];

  const budgetOptions = [
    'Under ₹1,000',
    '₹1,000–₹2,000',
    '₹2,000–₹5,000',
    'Above ₹5,000'
  ];

  // Quick Demo Presets
  const demoPresets = [
    {
      label: '👑 Royal Wedding & Festive',
      config: {
        gender: 'Women',
        category: 'Sarees',
        bodyType: 'Curvy',
        styles: ['Traditional', 'Royal Ethnic'],
        occasion: 'Wedding & Festive',
        budgetTier: '₹2,000–₹5,000'
      }
    },
    {
      label: '🌸 Daily Lucknowi Elegance',
      config: {
        gender: 'Women',
        category: 'Chikankari Kurtas',
        bodyType: 'Regular',
        styles: ['Handcrafted Artisan', 'Graceful Casual'],
        occasion: 'College & Daily Wear',
        budgetTier: '₹1,000–₹2,000'
      }
    },
    {
      label: '💼 Modest Workwear Formal',
      config: {
        gender: 'Women',
        category: 'Modest Tunics',
        bodyType: 'Slim',
        styles: ['Modest Formal', 'Classic Minimal'],
        occasion: 'Office & Corporate',
        budgetTier: '₹1,000–₹2,000'
      }
    },
    {
      label: '✨ Plus-Size Festive Grace',
      config: {
        gender: 'Women',
        category: 'Anarkali Suits',
        bodyType: 'Plus Size',
        styles: ['Festive Elegance', 'Traditional'],
        occasion: 'Family Gathering',
        budgetTier: '₹2,000–₹5,000'
      }
    }
  ];

  const handleToggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      if (selectedStyles.length > 1) {
        setSelectedStyles(selectedStyles.filter(s => s !== style));
      }
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const applyPreset = (preset) => {
    setGender(preset.config.gender);
    setCategory(preset.config.category);
    setBodyType(preset.config.bodyType);
    setSelectedStyles(preset.config.styles);
    setOccasion(preset.config.occasion);
    setBudgetTier(preset.config.budgetTier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#A45EA0', '#E5C384', '#6D3369', '#C9A84E']
      });
    } catch (err) {
      // ignore
    }

    onGenerateRecommendations({
      gender,
      category,
      bodyType,
      styles: selectedStyles,
      occasion,
      budgetTier
    });
  };

  const handleReset = () => {
    setGender('Women');
    setCategory('All');
    setBodyType('Regular');
    setSelectedStyles(['Traditional', 'Royal Ethnic']);
    setOccasion('Wedding & Festive');
    setBudgetTier('₹2,000–₹5,000');
  };

  return (
    <section id="personalization" className="section-wrapper personalization-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sliders size={14} />
            <span>Interactive Custom Discovery</span>
          </div>
          <h2 className="section-title">
            Find Your <span className="gold-gradient-text">Traditional & Classic Style</span>
          </h2>
          <p className="section-subtitle">
            Tell Velora your fit, fabric, and modest styling preferences. Our personalized engine curates decent, elegant, and timeless apparel for every occasion.
          </p>
        </div>

        {/* Presentation Fast-Preset Bar */}
        <div className="presets-bar">
          <div className="presets-label">
            <Zap size={14} className="zap-icon" />
            <span>Quick Presentation Presets:</span>
          </div>
          <div className="presets-list">
            {demoPresets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                className="preset-btn"
                onClick={() => applyPreset(preset)}
                title={`Load ${preset.label} sample configuration`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Personalization Form Card */}
        <div className="form-card glass-card">
          <form onSubmit={handleSubmit} className="quiz-form">
            <div className="form-grid">
              {/* Field 1: Category */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-num">1</span>
                  <span>Clothing Category</span>
                </label>
                <div className="chips-selector">
                  {categoryOptions.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`select-chip ${category === c ? 'active' : ''}`}
                      onClick={() => setCategory(c)}
                    >
                      {category === c && <Check size={14} />}
                      <span>{c}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Occasion */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-num">2</span>
                  <span>Target Occasion</span>
                </label>
                <div className="chips-selector">
                  {occasionOptions.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      className={`select-chip ${occasion === occ ? 'active' : ''}`}
                      onClick={() => setOccasion(occ)}
                    >
                      {occasion === occ && <Check size={14} />}
                      <span>{occ}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 3: Body Type Silhouette */}
              <div className="form-group form-group-full">
                <div className="label-with-disclaimer">
                  <label className="form-label">
                    <span className="label-num">3</span>
                    <span>Body Type Silhouette Preference</span>
                  </label>
                  <span className="body-disclaimer">
                    <Info size={12} />
                    Velora matches silhouettes based on comfort drape and modest fit.
                  </span>
                </div>
                <div className="chips-selector">
                  {bodyTypeOptions.map((bt) => (
                    <button
                      key={bt}
                      type="button"
                      className={`select-chip ${bodyType === bt ? 'active' : ''}`}
                      onClick={() => setBodyType(bt)}
                    >
                      {bodyType === bt && <Check size={14} />}
                      <span>{bt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 4: Preferred Style (Multi-select) */}
              <div className="form-group form-group-full">
                <label className="form-label">
                  <span className="label-num">4</span>
                  <span>Aesthetic & Fabric Style (Select one or multiple)</span>
                </label>
                <div className="chips-selector">
                  {styleOptions.map((st) => {
                    const isSelected = selectedStyles.includes(st);
                    return (
                      <button
                        key={st}
                        type="button"
                        className={`select-chip multi-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => handleToggleStyle(st)}
                      >
                        {isSelected && <Check size={14} />}
                        <span>{st}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: Budget Range */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-num">5</span>
                  <span>Budget Tier</span>
                </label>
                <div className="chips-selector">
                  {budgetOptions.map((bg) => (
                    <button
                      key={bg}
                      type="button"
                      className={`select-chip ${budgetTier === bg ? 'active' : ''}`}
                      onClick={() => setBudgetTier(bg)}
                    >
                      {budgetTier === bg && <Check size={14} />}
                      <span>{bg}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 6: Target Recipient */}
              <div className="form-group">
                <label className="form-label">
                  <span className="label-num">6</span>
                  <span>Section</span>
                </label>
                <div className="chips-selector">
                  {genderOptions.map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`select-chip ${gender === g ? 'active' : ''}`}
                      onClick={() => setGender(g)}
                    >
                      {gender === g && <Check size={14} />}
                      <span>{g}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Footer Actions */}
            <div className="form-footer-actions">
              <button
                type="button"
                className="btn btn-secondary reset-btn"
                onClick={handleReset}
                title="Reset preferences to default"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>

              <button
                type="submit"
                className="btn btn-primary btn-lg submit-rec-btn"
                disabled={isGenerating}
              >
                <Sparkles size={18} />
                <span>{isGenerating ? 'Curating Recommendations...' : 'Get Personalized Outfits'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .personalization-section {
          background: linear-gradient(180deg, #F8EFEA 0%, #FAF3EC 100%);
        }
        .presets-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 0.85rem 1.25rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          box-shadow: 0 4px 14px rgba(164, 94, 160, 0.06);
        }
        .presets-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-plum);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .zap-icon {
          color: #D97706;
        }
        .presets-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .preset-btn {
          background: #FDF9F5;
          border: 1px solid rgba(164, 94, 160, 0.2);
          color: var(--text-dark);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.785rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .preset-btn:hover {
          background: var(--primary-plum);
          color: #FFFFFF;
          border-color: var(--primary-plum);
        }
        .form-card {
          background: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 2.75rem;
          box-shadow: 0 20px 50px rgba(164, 94, 160, 0.09);
        }
        @media (max-width: 768px) {
          .form-card {
            padding: 1.5rem;
          }
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .form-group-full {
          grid-column: 1 / -1;
        }
        .form-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
        }
        .label-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F7EDF5;
          border: 1px solid var(--primary-plum);
          color: var(--primary-plum);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .label-with-disclaimer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .label-with-disclaimer .form-label {
          margin-bottom: 0;
        }
        .body-disclaimer {
          font-size: 0.725rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .chips-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .select-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FAF5F0;
          border: 1px solid rgba(164, 94, 160, 0.15);
          color: var(--text-dark);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .select-chip:hover {
          background: #F4E8F2;
          border-color: var(--primary-plum);
          color: var(--primary-plum);
        }
        .select-chip.active {
          background: var(--primary-plum);
          border-color: var(--primary-plum);
          color: #FFFFFF;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(164, 94, 160, 0.25);
        }
        .select-chip.multi-chip.active {
          background: linear-gradient(135deg, var(--primary-plum) 0%, #83397F 100%);
          border-color: var(--primary-plum);
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(164, 94, 160, 0.3);
        }
        .form-footer-actions {
          margin-top: 2.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(18, 12, 23, 0.08);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .form-footer-actions {
            flex-direction: column-reverse;
          }
          .form-footer-actions button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
