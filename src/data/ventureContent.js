// Venture details, structured content, FAQs, and mock feedback for the Velora entrepreneurship prototype

export const VENTURE_INFO = {
  name: "Velora",
  tagline: "Fashion that fits you.",
  subtitle: "Discover clothing recommendations personalized to your body type, style, occasion, comfort, and budget.",
  supportingStatement: "Personalized fashion discovery for the way you shop.",
  academicDisclaimer: "This website is a functional entrepreneurship venture prototype created for academic demonstration, mentor reviews, and pitch evaluations. It does not sell direct inventory or process monetary transactions.",
  contactEmail: "hello@velora.example",
  socials: {
    instagram: "https://instagram.com/velora.prototype",
    linkedin: "https://linkedin.com/company/velora-fashion",
    github: "https://github.com/velora-venture"
  }
};

export const PROBLEMS = [
  {
    id: 1,
    title: "Too Many Choices",
    summary: "Overwhelming Catalog Fatigue",
    description: "Online fashion stores display tens of thousands of unsorted items. Shoppers suffer from analysis paralysis and spend hours scrolling aimlessly without finding what they need.",
    icon: "Layers",
    impact: "90% of browsing time spent on irrelevant items"
  },
  {
    id: 2,
    title: "Poor Style Matching",
    summary: "Generic Trends, Not Personal Fit",
    description: "Not every runway trend or algorithmic best-seller fits an individual's personal vibe, modest preferences, or unique everyday aesthetics.",
    icon: "Sparkles",
    impact: "Generic recommendations ignore individual taste"
  },
  {
    id: 3,
    title: "Uncertain Fit",
    summary: "Body-Type Compatibility Doubts",
    description: "Standard model photos rarely reflect diverse everyday body types, causing customers to struggle predicting whether an outfit will flatter their specific silhouette.",
    icon: "UserCheck",
    impact: "Fit uncertainty causes purchase hesitation"
  },
  {
    id: 4,
    title: "Budget Constraints",
    summary: "Price Mismatch & Hidden Costs",
    description: "Finding high-quality, aesthetic fashion strictly within a student or young professional's budget requires tedious price-filtering across multiple fragmented apps.",
    icon: "Wallet",
    impact: "Students waste time filtering out unaffordable items"
  },
  {
    id: 5,
    title: "Time-Consuming Search",
    summary: "Scattered Discovery Workflow",
    description: "Shoppers jump between multiple e-commerce websites and social media mood boards before finding a single coordinated outfit that satisfies all criteria.",
    icon: "Clock",
    impact: "Average user spends 45+ minutes per outfit search"
  }
];

export const SOLUTION_POINTS = [
  {
    title: "Personalized Recommendations",
    description: "Rule-based and preference-guided outfit curation tailored to your exact profile."
  },
  {
    title: "Faster Fashion Discovery",
    description: "Reduces search time from hours to seconds by eliminating irrelevant options immediately."
  },
  {
    title: "Style-Based Matching",
    description: "Filter by casual, streetwear, formal, ethnic, minimal, or party aesthetics."
  },
  {
    title: "Budget-Conscious Choices",
    description: "Respects your predefined price brackets with honest, transparent value discovery."
  },
  {
    title: "Convenient Online Discovery",
    description: "A centralized hub where fit, occasion, and aesthetics seamlessly converge."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Us About You",
    subtitle: "Define Basic Profile",
    description: "Select your shopping category, gender preference, and general silhouette goals in a few frictionless clicks.",
    icon: "User"
  },
  {
    step: "02",
    title: "Choose Your Style",
    subtitle: "Select Aesthetic & Occasion",
    description: "Pick your favorite styles (Streetwear, Minimal, Formal, Party, Ethnic) and target occasion (College, Office, Travel).",
    icon: "Shirt"
  },
  {
    step: "03",
    title: "Set Your Budget",
    subtitle: "Comfortable Spending Range",
    description: "Set your preferred price tier (Under ₹500 up to Above ₹5,000) so you only see items you actually want to buy.",
    icon: "Tag"
  },
  {
    step: "04",
    title: "Discover Recommendations",
    subtitle: "Instant Velora Match %",
    description: "Velora calculates a personalized match score with clear rationale explaining why each outfit fits your criteria.",
    icon: "Sparkle"
  }
];

export const WHY_CHOOSE_VELORA = [
  {
    id: "feat-1",
    title: "Personalized",
    description: "Recommendations based on individual preferences rather than generic mass-market bestsellers.",
    badge: "Tailored to You",
    icon: "Sliders"
  },
  {
    id: "feat-2",
    title: "Time Saving",
    description: "Reduce the time spent endlessly searching through countless confusing product catalogs.",
    badge: "Instant Filtering",
    icon: "Zap"
  },
  {
    id: "feat-3",
    title: "Budget Friendly",
    description: "Discover stylish options strictly within your chosen budget without compromising on quality.",
    badge: "Smart Spending",
    icon: "BadgePercent"
  },
  {
    id: "feat-4",
    title: "Style Focused",
    description: "Explore clothing aligned with your exact fashion identity, from minimal campus wear to festive royalty.",
    badge: "Aesthetic Curation",
    icon: "Palette"
  },
  {
    id: "feat-5",
    title: "Simple",
    description: "A clean, modern, and convenient fashion discovery experience built for modern digital shoppers.",
    badge: "Frictionless UX",
    icon: "CheckCircle2"
  }
];

export const TARGET_CUSTOMERS = [
  {
    title: "Young Women",
    subtitle: "College Students & Trend Enthusiasts",
    description: "College students & young professionals who love trendy, stylish, decent, and comfortable outfits for everyday life and special events.",
    budgetFocus: "Under ₹800 – ₹1,800",
    keyNeeds: ["Trendy & Decent Styles", "Express Their Personality", "Everyday Comfort"],
    avatar: "👗",
    iconKey: "Sparkles"
  },
  {
    title: "Working Women",
    subtitle: "Professionals & Executives",
    description: "Working women who need elegant, comfortable, modest, and confidence-boosting outfits tailored for meetings, office culture, and day-to-evening transitions.",
    budgetFocus: "₹1,500 – ₹3,500",
    keyNeeds: ["Workwear Essentials", "Comfort & Confidence", "Wrinkle-free Fabrics"],
    avatar: "💼",
    iconKey: "Briefcase"
  },
  {
    title: "Brides & Bridesmaids",
    subtitle: "Festive & Wedding Celebrations",
    description: "Brides and bridesmaids looking for custom-tailored traditional outfits, sarees, lehengas, and Anarkalis for weddings and special festive occasions.",
    budgetFocus: "₹3,000 – ₹8,000+",
    keyNeeds: ["Exquisite Custom Designs", "Royal Heritage Weaves", "Make Special Moments Better"],
    avatar: "✨",
    iconKey: "Crown"
  },
  {
    title: "Plus Size Customers",
    subtitle: "Inclusive Body Silhouettes",
    description: "Plus size customers who want stylish, well-fitted, flattering, and comfortable outfits tailored specifically for their body proportions.",
    budgetFocus: "₹1,200 – ₹3,000",
    keyNeeds: ["Flattering Cuts & Perfect Fit", "Comfortable Breathable Fabrics", "Confidence First"],
    avatar: "🌸",
    iconKey: "Heart"
  },
  {
    title: "Budget Conscious Shoppers",
    subtitle: "Smart Value Seekers",
    description: "Smart shoppers who want classic, traditional, trendy, and customized looks that fit strictly within their monthly budget.",
    budgetFocus: "Under ₹600 – ₹1,500",
    keyNeeds: ["Affordable Options", "Great Style Within Budget", "Long-lasting Fabric Quality"],
    avatar: "🛍️",
    iconKey: "Wallet"
  }
];

export const BUSINESS_MODEL = [
  {
    title: "Affiliate Partnerships",
    tag: "Primary Potential Model",
    description: "Earn performance commissions when users discover products on Velora and proceed to purchase through verified partner links.",
    status: "Planned Future Monetization"
  },
  {
    title: "Brand Partnerships",
    tag: "B2B Collaborations",
    description: "Collaborate directly with emerging D2C fashion labels and ethical brands for curated product showcase and visibility.",
    status: "Concept Exploration"
  },
  {
    title: "Sponsored Recommendations",
    tag: "Targeted Placement",
    description: "Allow reputable fashion brands to sponsor relevant discovery slots for targeted style brackets without disrupting user trust.",
    status: "Future Scope"
  },
  {
    title: "Premium Personal Styling",
    tag: "Value-Added Feature",
    description: "Offer advanced capsule wardrobe planners, event-based concierge styling, and AI-assisted color season analysis.",
    status: "Roadmap Concept"
  }
];

export const COMPETITIVE_LANDSCAPE = {
  heading: "Where Velora Fits",
  description: "Large fashion marketplaces such as Myntra, AJIO, and Amazon Fashion provide extensive product catalogs. Velora's concept focuses specifically on personalized fashion discovery based on individual preferences.",
  comparisons: [
    {
      factor: "Catalog Strategy",
      marketplaces: "Massive, exhaustive product listings (100k+ items)",
      velora: "Curated, preference-matched suggestions"
    },
    {
      factor: "User Journey",
      marketplaces: "Search-bar & endless grid browsing",
      velora: "Guided 4-step preference quiz & match scoring"
    },
    {
      factor: "Personalization",
      marketplaces: "Generic bestsellers and broad category filters",
      velora: "Multi-dimensional matching (Style + Occasion + Budget + Fit)"
    },
    {
      factor: "Decision Speed",
      marketplaces: "High decision fatigue; requires heavy manual filtering",
      velora: "Fast discovery with transparent Velora Match %"
    }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: "Team Member 1",
    role: "Founder & Product Lead",
    description: "Overseeing venture strategy, user experience research, and core recommendation logic design.",
    avatarBg: "linear-gradient(135deg, #6366f1, #a855f7)"
  },
  {
    name: "Team Member 2",
    role: "Co-Founder & Tech Lead",
    description: "Leading frontend engineering, prototype architecture, and interactive UI component development.",
    avatarBg: "linear-gradient(135deg, #ec4899, #f43f5e)"
  },
  {
    name: "Team Member 3",
    role: "Fashion & Trend Research",
    description: "Curating style taxonomies, body-silhouette harmony data, and aesthetic category mappings.",
    avatarBg: "linear-gradient(135deg, #eab308, #f97316)"
  },
  {
    name: "Team Member 4",
    role: "Business & Growth Strategy",
    description: "Analyzing customer acquisition channels, unit economics, and prospective partner revenue models.",
    avatarBg: "linear-gradient(135deg, #10b981, #06b6d4)"
  },
  {
    name: "Team Member 5",
    role: "UI/UX & Visual Design",
    description: "Crafting modern design systems, micro-interactions, responsive layouts, and branding assets.",
    avatarBg: "linear-gradient(135deg, #8b5cf6, #3b82f6)"
  },
  {
    name: "Team Member 6",
    role: "Operations & Market Survey",
    description: "Conducting student focus groups, gathering prototype feedback, and refining customer personas.",
    avatarBg: "linear-gradient(135deg, #0ea5e9, #6366f1)"
  }
];

export const SAMPLE_FEEDBACK = [
  {
    quote: "Helps me narrow down my choices in minutes instead of scrolling through 20 tabs during exam week.",
    author: "Sample Student Tester",
    cohort: "College Undergraduate",
    badge: "Prototype Survey"
  },
  {
    quote: "Budget filtering makes fashion discovery so much easier. I only see what I can genuinely afford.",
    author: "Sample Young Adult",
    cohort: "First-Job Professional",
    badge: "MVP Feedback"
  },
  {
    quote: "I like being able to select my preferred style like Streetwear or Minimalist and getting accurate vibes.",
    author: "Sample Fashion Enthusiast",
    cohort: "Design Student",
    badge: "Concept Review"
  }
];

export const FAQS = [
  {
    q: "What is Velora?",
    a: "Velora is a personalized fashion recommendation platform concept designed to help users discover clothing tailored to their body type, personal style, occasion, comfort, and budget."
  },
  {
    q: "Does Velora sell clothes directly?",
    a: "No. The current prototype focuses on intelligent fashion discovery and personalized recommendations rather than direct e-commerce sales or warehouse inventory."
  },
  {
    q: "How does personalization work in Velora?",
    a: "Users input their preferences such as target style, occasion, clothing category, silhouette comfort, and budget range. The prototype then generates curated recommendations with a computed Velora Match score."
  },
  {
    q: "Is Velora an AI-powered platform?",
    a: "The current website is a functional MVP prototype powered by an intelligent rule-based matching engine. Machine learning and neural computer vision personalization can be integrated in future phases."
  },
  {
    q: "Can I buy products through Velora?",
    a: "The current prototype does not process payments or handle direct checkout. Future production versions will connect shoppers directly to verified brand partners and affiliate merchants."
  },
  {
    q: "How are the body type recommendations structured?",
    a: "Velora suggests clothing cuts, silhouettes, and fabric drapes that align with user-indicated comfort preferences. We do not claim to scientifically diagnose body measurements."
  }
];
