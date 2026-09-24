import React, { useState, useEffect } from 'react';
import PitchBanner from './components/PitchBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import PersonalizationSection from './components/PersonalizationSection';
import RecommendationResults from './components/RecommendationResults';
import Discover from './components/Discover';
import WhyVelora from './components/WhyVelora';
import ValueProposition from './components/ValueProposition';
import TargetCustomers from './components/TargetCustomers';
import BusinessModel from './components/BusinessModel';
import CompetitiveLandscape from './components/CompetitiveLandscape';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import FeedbackSection from './components/FeedbackSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import SavedDrawer from './components/SavedDrawer';

import { generateRecommendations } from './utils/recommendationEngine';
import { SAMPLE_PRODUCTS } from './data/products';

export default function App() {
  // Personalization & Recommendations State
  const defaultInitialPrefs = {
    gender: 'Men',
    category: 'All',
    bodyType: 'Regular',
    styles: ['Casual', 'Streetwear'],
    occasion: 'College',
    budgetTier: '₹500–₹1,000'
  };

  const [activePreferences, setActivePreferences] = useState(defaultInitialPrefs);
  const [recommendations, setRecommendations] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Saved / Bookmarked Products State (stored in localStorage)
  const [savedProducts, setSavedProducts] = useState(() => {
    try {
      const stored = localStorage.getItem('velora_saved_products');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('LocalStorage not available');
    }
    // Default seed with 2 sample saved items for pleasant instant demo
    return [SAMPLE_PRODUCTS[0], SAMPLE_PRODUCTS[4]];
  });

  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  // Sync savedProducts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velora_saved_products', JSON.stringify(savedProducts));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [savedProducts]);

  // Initial recommendation generation on startup
  useEffect(() => {
    const initialRecs = generateRecommendations(defaultInitialPrefs);
    setRecommendations(initialRecs);
  }, []);

  // Smooth scroll helper
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Generate recommendations from user quiz submit
  const handleGenerateRecommendations = (newPrefs) => {
    setIsGenerating(true);
    setActivePreferences(newPrefs);

    setTimeout(() => {
      const scored = generateRecommendations(newPrefs);
      setRecommendations(scored);
      setIsGenerating(false);

      // Smooth scroll to results
      setTimeout(() => {
        handleNavigate('recommendations-results');
      }, 100);
    }, 450);
  };

  // Save / Bookmark toggle
  const handleSaveToggle = (product) => {
    setSavedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveSaved = (productId) => {
    setSavedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAllSaved = () => {
    setSavedProducts([]);
  };

  // Explore Similar handler
  const handleExploreSimilar = (product) => {
    setSelectedProductDetails(null);
    // Find products in same category or style
    const similarStyle = Array.isArray(product.style) ? product.style[0] : product.style;
    const simPrefs = {
      gender: product.gender,
      category: product.category,
      bodyType: 'Regular',
      styles: [similarStyle],
      occasion: Array.isArray(product.occasion) ? product.occasion[0] : 'Casual Outing',
      budgetTier: product.budgetTier
    };
    handleGenerateRecommendations(simPrefs);
  };

  const savedProductIds = savedProducts.map((p) => p.id);

  return (
    <div className="velora-app-root">
      {/* 1. Presentation Guide Fast-Nav */}
      <PitchBanner onNavigate={handleNavigate} />

      {/* 2. Sticky Navbar */}
      <Navbar
        onOpenPersonalization={() => handleNavigate('personalization')}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedProducts.length}
      />

      <main>
        {/* 3. Hero Section */}
        <Hero
          onGetStarted={() => handleNavigate('personalization')}
          onExplore={() => handleNavigate('how-it-works')}
        />

        {/* 4. Customer Problem Section */}
        <ProblemSection />

        {/* 5. Velora Solution Section */}
        <SolutionSection onTryPrototype={() => handleNavigate('personalization')} />

        {/* 6. How Velora Works (4-Step Flow) */}
        <HowItWorks onOpenPersonalization={() => handleNavigate('personalization')} />

        {/* 7. Interactive Personalization Form */}
        <PersonalizationSection
          onGenerateRecommendations={handleGenerateRecommendations}
          isGenerating={isGenerating}
        />

        {/* 8. Dynamic Recommendation Results */}
        <RecommendationResults
          recommendations={recommendations}
          activePreferences={activePreferences}
          onModifyPreferences={() => handleNavigate('personalization')}
          onViewDetails={(prod) => setSelectedProductDetails(prod)}
          onSaveToggle={handleSaveToggle}
          savedProductIds={savedProductIds}
          onExploreSimilar={handleExploreSimilar}
        />

        {/* 9. Discover Catalog Explorer */}
        <Discover
          onViewDetails={(prod) => setSelectedProductDetails(prod)}
          onSaveToggle={handleSaveToggle}
          savedProductIds={savedProductIds}
          onExploreSimilar={handleExploreSimilar}
        />

        {/* 10. Why Choose Velora (5 Drivers) */}
        <WhyVelora />

        {/* 11. Unique Value Proposition */}
        <ValueProposition onTryVelora={() => handleNavigate('personalization')} />

        {/* 12. Target Customers (4 Segments) */}
        <TargetCustomers />

        {/* 13. Business Model & Value Creation */}
        <BusinessModel />

        {/* 14. Competitive Landscape Matrix */}
        <CompetitiveLandscape />

        {/* 15. About Velora (Vision & Mission) */}
        <AboutSection />

        {/* 16. Team Section (6 Editable Placeholders) */}
        <TeamSection />

        {/* 17. Early User Feedback (Sample Prototype) */}
        <FeedbackSection />

        {/* 18. FAQ Section */}
        <FAQSection />

        {/* 19. Contact & Socials */}
        <ContactSection />
      </main>

      {/* 20. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Details Modal */}
      {selectedProductDetails && (
        <ProductDetailModal
          product={selectedProductDetails}
          onClose={() => setSelectedProductDetails(null)}
          onSaveToggle={handleSaveToggle}
          isSaved={savedProductIds.includes(selectedProductDetails.id)}
          onExploreSimilar={handleExploreSimilar}
        />
      )}

      {/* Saved Bookmarks Slide-out Drawer */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProducts={savedProducts}
        onRemoveSaved={handleRemoveSaved}
        onClearAll={handleClearAllSaved}
        onViewDetails={(prod) => setSelectedProductDetails(prod)}
      />
    </div>
  );
}
