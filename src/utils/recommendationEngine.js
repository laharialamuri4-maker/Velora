// Velora Rule-Based Recommendation Engine (Prototype)
// Computes personalized compatibility scores and dynamic match explanations.

import { SAMPLE_PRODUCTS } from '../data/products';

export function calculateProductMatch(product, userPrefs) {
  let score = 50; // Baseline base score for catalog relevance
  const matchReasons = [];

  // 1. Gender Filter / Scoring
  if (userPrefs.gender && userPrefs.gender !== "Prefer not to say" && userPrefs.gender !== "All") {
    if (product.gender === userPrefs.gender || product.gender === "Unisex") {
      score += 5;
    } else {
      score -= 25; // Penalty if strictly opposite gender unless universal
    }
  }

  // 2. Category Match (Weight: up to 20 pts)
  if (userPrefs.category && userPrefs.category !== "All") {
    if (product.category.toLowerCase() === userPrefs.category.toLowerCase()) {
      score += 20;
      matchReasons.push(`Exact match for ${product.category}`);
    } else {
      score -= 10;
    }
  } else {
    score += 10; // Neutral boost if browsing all
  }

  // 3. Style Match (Weight: up to 15 pts)
  if (userPrefs.styles && userPrefs.styles.length > 0) {
    const matchedStyles = product.style.filter(s =>
      userPrefs.styles.some(us => us.toLowerCase() === s.toLowerCase())
    );
    if (matchedStyles.length > 0) {
      score += Math.min(15, matchedStyles.length * 8);
      matchReasons.push(`Fits your ${matchedStyles.join(' & ')} aesthetic`);
    }
  } else {
    score += 8;
  }

  // 4. Occasion Match (Weight: up to 12 pts)
  if (userPrefs.occasion && userPrefs.occasion !== "All") {
    const matchesOccasion = product.occasion.some(
      occ => occ.toLowerCase() === userPrefs.occasion.toLowerCase()
    );
    if (matchesOccasion) {
      score += 12;
      matchReasons.push(`Perfect for ${userPrefs.occasion}`);
    }
  } else {
    score += 6;
  }

  // 5. Budget Match (Weight: up to 10 pts)
  if (userPrefs.budgetTier && userPrefs.budgetTier !== "All") {
    if (product.budgetTier === userPrefs.budgetTier) {
      score += 10;
      matchReasons.push(`Within your preferred ${userPrefs.budgetTier} budget`);
    } else {
      // Check price proximity
      const priceNum = product.price;
      if (
        (userPrefs.budgetTier === "Under ₹500" && priceNum <= 650) ||
        (userPrefs.budgetTier === "₹500–₹1,000" && priceNum >= 450 && priceNum <= 1200) ||
        (userPrefs.budgetTier === "₹1,000–₹2,000" && priceNum >= 900 && priceNum <= 2400) ||
        (userPrefs.budgetTier === "₹2,000–₹5,000" && priceNum >= 1800 && priceNum <= 5500)
      ) {
        score += 5;
        matchReasons.push(`Close to your ${userPrefs.budgetTier} budget range`);
      }
    }
  } else {
    score += 5;
  }

  // 6. Body Type Suitability (Weight: up to 8 pts)
  if (userPrefs.bodyType && userPrefs.bodyType !== "Prefer not to say" && userPrefs.bodyType !== "All") {
    if (product.suitableBodyTypes.includes(userPrefs.bodyType)) {
      score += 8;
      matchReasons.push(`Cut is suitable for ${userPrefs.bodyType} comfort`);
    }
  } else {
    score += 5;
  }

  // Clamp score between 60% and 98% for realistic prototype display
  const finalPercentage = Math.min(98, Math.max(62, Math.round(score)));

  // Generate friendly conversational summary
  let explanation = "";
  if (matchReasons.length >= 2) {
    explanation = `Matches your ${matchReasons.slice(0, 2).join(' and ').toLowerCase()}.`;
  } else if (matchReasons.length === 1) {
    explanation = `${matchReasons[0]}.`;
  } else {
    explanation = `Curated style recommendation matching current trending preferences.`;
  }

  return {
    matchScore: finalPercentage,
    matchReasons,
    explanation
  };
}

export function generateRecommendations(userPrefs, products = SAMPLE_PRODUCTS) {
  const scoredProducts = products
    .filter(p => {
      // If gender specified and strictly opposed, filter out to keep results high quality
      if (userPrefs.gender && userPrefs.gender !== "Prefer not to say" && userPrefs.gender !== "All") {
        if (p.gender !== userPrefs.gender && p.gender !== "Unisex") {
          return false;
        }
      }
      return true;
    })
    .map(product => {
      const matchData = calculateProductMatch(product, userPrefs);
      return {
        ...product,
        matchScore: matchData.matchScore,
        matchReasons: matchData.matchReasons,
        explanation: matchData.explanation
      };
    });

  // Sort by highest matchScore first, then lowest price
  scoredProducts.sort((a, b) => b.matchScore - a.matchScore || a.price - b.price);

  return scoredProducts;
}
