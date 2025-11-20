import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Database,
  Globe,
  Shield,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Target,
  BarChart3,
  GitBranch,
  Lock,
  Unlock,
  Award,
  Briefcase,
  Building,
} from "lucide-react";
import Demo from "./Demo";

const ComprehensivePTSVisualizer = () => {
  const [activeTab, setActiveTab] = useState("proposal");
  const [selectedJourney, setSelectedJourney] = useState(
    "Heritage Discovery Journey"
  );
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedArchOption, setSelectedArchOption] = useState("bff");
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState("custom-gpt");
  const [selectedPricingTier, setSelectedPricingTier] = useState("tier1");

  // Pricing Tiers from Francesca's document
  const pricingTiers = {
    tier1: {
      name: "Tier 1: Pilot / Proof of Concept",
      icon: Award,
      setupFeeGBP: "£50,000-£60,000",
      setupFeeEUR: "€58,500-€70,200",
      monthlyGBP: "£2,000",
      monthlyEUR: "€2,340",
      year1TotalGBP: "£74,000-£84,000",
      year1TotalEUR: "€86,580-€98,280",
      color: "bg-emerald-600",
      positioning: "Low-risk, high-value pilot to validate AI concierge impact",
      timeline: "4-6 weeks",
      scope: [
        "5 conversational journeys",
        "API integration with Porsche systems",
        "Visualization support (pre-rendered assets)",
        "Dealer handover workflow",
        "Basic analytics dashboard",
        "30-day post-launch support",
        "Session management (Redis)",
        "Tracking ID attribution",
      ],
      journeys: [
        "Heritage Discovery Journey",
        "Lifestyle-to-Colour Journey (simplified)",
        "Quick Color Match",
        "Model-Specific Recommendations",
        "Bespoke Inquiry Capture (PTS Plus)",
      ],
      bestFor: [
        "✅ Fast validation of ROI",
        "✅ Lower barrier to entry for Porsche",
        "✅ Speed to market competitive advantage",
        "✅ Natural upgrade path to Tier 2/3",
        "✅ Similar to how Expedia started",
      ],
      limitations: [
        "⚠️ Basic persona classification (rule-based)",
        "⚠️ Manual dealer handover (no CRM auto)",
        "⚠️ Pre-rendered visuals only",
        "⚠️ Basic analytics (no ML insights)",
      ],
    },
    tier2: {
      name: "Tier 2: Standard Deployment",
      icon: Briefcase,
      setupFeeGBP: "£120,000-£150,000",
      setupFeeEUR: "€140,400-€175,500",
      monthlyGBP: "£3,500-£5,000",
      monthlyEUR: "€4,095-€5,850",
      year1TotalGBP: "£162,000-£210,000",
      year1TotalEUR: "€189,540-€245,700",
      color: "bg-blue-600",
      positioning:
        "Fully branded Porsche digital atelier, integrated configurator experience",
      timeline: "8-12 weeks",
      scope: [
        "All Tier 1 features PLUS:",
        "ML-powered persona engine",
        "Enhanced conversational UX with memory",
        "Automated dealer handover (CRM integration)",
        "Advanced analytics with insights",
        "A/B testing framework",
        "White-glove customer support",
        "Dedicated account management",
      ],
      journeys: [
        "All 5 journeys from Tier 1",
        "+ Model-Specific Deep Dive",
        "+ White-Glove Confidence Journey (full)",
        "+ Advanced Bespoke Atelier Journey",
      ],
      bestFor: [
        "✅ Enterprise-grade deployment",
        "✅ CRM integration critical",
        "✅ Want ML-powered personalization",
        "✅ Need advanced analytics/insights",
        "✅ Global rollout readiness",
      ],
      limitations: [
        "⚠️ Longer timeline (3 months vs 6 weeks)",
        "⚠️ Higher upfront investment",
        "⚠️ Requires more Porsche stakeholder involvement",
      ],
    },
    tier3: {
      name: "Tier 3: Enterprise / Future-Proof",
      icon: Building,
      setupFeeGBP: "£200,000-£300,000",
      setupFeeEUR: "€234,000-€351,000",
      monthlyGBP: "£6,000-£8,000",
      monthlyEUR: "€7,020-€9,360",
      year1TotalGBP: "£272,000-£396,000",
      year1TotalEUR: "€318,240-€463,320",
      color: "bg-purple-600",
      positioning:
        "Market-leading, white-glove AI concierge setting global standard",
      timeline: "12-16 weeks",
      scope: [
        "All Tier 2 features PLUS:",
        "Multi-language support (German, French, Chinese, Japanese)",
        "Optional 3D real-time visualization",
        "Deep My Porsche integration",
        "Executive data dashboard (AI insights)",
        "Continuous model training & updates",
        "Advanced color matching algorithms",
        "Virtual showroom integration",
        "Premium SLA (99.9% uptime)",
      ],
      journeys: [
        "All 8 journeys from Tier 2",
        "+ Virtual Showroom Tour",
        "+ Collector Heritage Journey",
        "+ International Market Adaptation",
      ],
      bestFor: [
        "✅ Global enterprise deployment",
        "✅ Multi-market, multi-language",
        "✅ Premium brand positioning",
        "✅ Future-proof investment",
        "✅ Competitive differentiation",
      ],
      limitations: [
        "⚠️ Longest timeline (4 months)",
        "⚠️ Highest investment",
        "⚠️ Complex stakeholder management",
      ],
    },
  };

  // ROI Calculator
  const roiCalculator = {
    assumptions: {
      annualConfiguratorVisitors: 50000,
      currentPTSAdoptionRate: 0.15, // 15%
      targetPTSAdoptionRate: 0.2, // 20% (+5%)
      averagePTSPremium: 3000, // EUR
    },
    tier1: {
      investment: 98280, // EUR (max Year 1)
      incrementalBuyers: 2500, // 50K * 5% increase
      incrementalRevenue: 7500000, // 2500 * €3000
      roi: "7,532%",
      breakEven: "~5 days",
      costPerConversion: "€39.31",
      revenuePerEuroSpent: "€76.32",
    },
    tier2: {
      investment: 245700, // EUR (max Year 1)
      incrementalBuyers: 2500,
      incrementalRevenue: 7500000,
      roi: "2,953%",
      breakEven: "~12 days",
      costPerConversion: "€98.28",
      revenuePerEuroSpent: "€30.53",
    },
    tier3: {
      investment: 463320, // EUR (max Year 1)
      incrementalBuyers: 3500, // Higher adoption with premium features
      incrementalRevenue: 10500000, // 3500 * €3000
      roi: "2,166%",
      breakEven: "~16 days",
      costPerConversion: "€132.38",
      revenuePerEuroSpent: "€22.66",
    },
  };

  // Expedia Benchmark Data
  const expediaBenchmarks = {
    engagement: {
      avgConversationLength: 8.3,
      sessionDuration: "6.2 min",
      returnUserRate: "34%",
    },
    accuracy: {
      responseAccuracy: "95%",
      intentDetection: "92%",
      hallucinationRate: "0.05%",
    },
    conversion: {
      gptToPlatformHandoff: "42%",
      platformConversion: "23%",
      overallCVR: "9.7%",
    },
    safety: {
      contentFilterRate: "99.8%",
      promptInjectionBlock: "100%",
      privacyCompliance: "100%",
    },
    retention: {
      day7Retention: "28%",
      day30Retention: "12%",
      customerSatisfaction: "4.6/5.0",
    },
  };

  const journeys = {
    "Heritage Discovery Journey": {
      color: "bg-amber-600",
      phase: 1,
      complexity: "Low-Medium",
      duration: "8-12 turns, 6-10 min",
      targetUsers: "Enthusiast buyers, first-time PTS customers",
      includedInTiers: ["tier1", "tier2", "tier3"],
      steps: [
        {
          name: "Curiosity Trigger",
          keywords: [
            "porsche_colors_overview",
            "heritage_colors_intro",
            "paint_to_sample_intro",
          ],
          examples: [
            "What's special about Porsche colours?",
            "Explain Paint to Sample.",
          ],
          apis: [
            "GET /v1/content/articles?topic=pts_overview",
            "GET /v1/pts/colors?tag=heritage&limit=5",
          ],
          techConsiderations: [
            "Cache heavily (24h)",
            "Static content candidate",
            "CDN delivery",
            "Track intro narrative A/B tests",
          ],
          successMetric: "User proceeds to Step 2 (>75% engagement rate)",
        },
        {
          name: "Personal Aesthetic Mapping",
          keywords: [
            "collect_preferences",
            "style_persona_mapping",
            "era_preference",
          ],
          examples: [
            "I love 90s Porsche colours.",
            "I prefer something classic.",
          ],
          apis: [
            "POST /v1/users/{id}/preferences/aesthetics",
            "POST /v1/nlu/annotate",
          ],
          techConsiderations: [
            "State persistence needed",
            "Privacy: GDPR consent",
            "Profile building",
            "NLP to extract implicit signals",
          ],
          successMetric: "Valid persona classification with >70% confidence",
        },
        {
          name: "Curated Heritage Palette",
          keywords: [
            "recommend_heritage_colors",
            "heritage_palette_suggestions",
          ],
          examples: ["Based on that, what colours do you suggest?"],
          apis: [
            "POST /v1/pts/recommendations",
            "GET /v1/pts/colors?tag=heritage",
          ],
          techConsiderations: [
            "Recommendation engine (rule-based MVP, ML Phase 2)",
            "Ensure diversity in recs",
            "Response time <1.5s",
            "A/B test algorithms",
          ],
          successMetric:
            "User expresses interest in ≥1 color (>80% engagement)",
        },
        {
          name: "Real-World Interpretation",
          keywords: [
            "color_visualization",
            "lighting_simulation",
            "real_world_view",
          ],
          examples: [
            "How does Rubystar look in daylight?",
            "Is this bright at night?",
          ],
          apis: [
            "GET /v1/pts/colors/{id}/visuals",
            "GET /v1/pts/colors/{id}/gallery",
          ],
          techConsiderations: [
            "CDN critical (CloudFront/Azure)",
            "Lazy loading",
            "WebP format",
            "Progressive image loading",
          ],
          successMetric: "User views ≥2 lighting scenarios (>60%)",
        },
        {
          name: "Alignment Check",
          keywords: ["predecision_alignment_check", "emotional_fit"],
          examples: ["Which feels more timeless?", "Which matches my style?"],
          apis: ["POST /v1/pts/evaluate-fit", "GET /v1/pts/colors/{id}/scores"],
          techConsiderations: [
            "ML scoring (Phase 2)",
            "Profile matching algorithm",
            "Confidence metrics",
            "Track predictions vs selections",
          ],
          successMetric:
            "User expresses clear preference (>70% decision confidence)",
        },
        {
          name: "Confident Selection",
          keywords: ["select_color", "finalize_choice", "commit_color"],
          examples: [
            "Let's go with Rubystar Neo.",
            "Choose the best one for me.",
          ],
          apis: [
            "POST /v1/builds",
            "PATCH /v1/builds/{id}",
            "POST /v1/dealer/handover",
          ],
          techConsiderations: [
            "Transaction handling",
            "CRM integration",
            "PDF generation",
            "Email notifications",
          ],
          successMetric:
            "Build created + dealer handover (>95% technical success)",
        },
      ],
    },
    "Lifestyle-to-Colour Journey": {
      color: "bg-blue-600",
      phase: 2,
      complexity: "Medium",
      duration: "10-15 turns, 8-12 min",
      targetUsers: "Practical buyers, daily drivers, professionals",
      steps: [
        {
          name: "Lifestyle Profiling",
          keywords: [
            "collect_lifestyle_data",
            "environment_profile",
            "usage_pattern",
          ],
          examples: [
            "Mostly city driving.",
            "I park on the street.",
            "My wardrobe is navy.",
          ],
          apis: ["POST /v1/users/{id}/preferences/lifestyle"],
          techConsiderations: [
            "Privacy compliance",
            "Validation for conflicts",
            "Branching logic",
            "NLP for implicit signals",
          ],
          successMetric: "Complete lifestyle profile (>90% fields populated)",
        },
        {
          name: "Design Language Translation",
          keywords: ["derive_design_persona", "style_classification"],
          examples: ["I like understated luxury.", "Not loud, quiet premium."],
          apis: ["POST /v1/personas/derive"],
          techConsiderations: [
            "8-persona taxonomy",
            "NLP sophistication",
            "Confidence scoring",
            "Cultural sensitivity",
          ],
          successMetric: "Persona classified with >80% confidence",
        },
        {
          name: "Palette Formation",
          keywords: ["generate_palette", "persona_palette"],
          examples: ["What colour directions fit that?"],
          apis: ["GET /v1/pts/palettes", "POST /v1/pts/recommendations"],
          techConsiderations: [
            "Palette generation algorithm",
            "Balance aesthetic + practical",
            "Diversity within persona",
            "Pre-compute common palettes",
          ],
          successMetric: "User interested in ≥2 palette colors (>75%)",
        },
        {
          name: "Surface & Material Simulation",
          keywords: ["model_surface_effect", "shape_color_interaction"],
          examples: ["How does this look on Taycan vs 911?"],
          apis: [
            "GET /v1/visuals/compare",
            "GET /v1/pts/colors/{id}/geometry-notes",
          ],
          techConsiderations: [
            "3D rendering vs pre-rendered",
            "Interactive viewer vs static",
            "Mobile performance",
            "Asset management",
          ],
          successMetric: "User views model comparison (>70%)",
        },
        {
          name: "Ownership Horizon",
          keywords: [
            "resale_consideration",
            "long_term_appeal",
            "timelessness_score",
          ],
          examples: ["Will this look good in 10 years?", "Good for resale?"],
          apis: [
            "GET /v1/pts/colors/{id}/resale-metrics",
            "GET /v1/pts/colors/{id}/timelessness-score",
          ],
          techConsiderations: [
            "Historical data (auctions, dealers)",
            "Statistical validity",
            "Market segmentation",
            "Transparent data limitations",
          ],
          successMetric: "User acknowledges long-term perspective (>80%)",
        },
        {
          name: "Refined Choice",
          keywords: [
            "single_recommendation",
            "refined_choice",
            "best_fit_color",
          ],
          examples: ["Pick the one colour for me.", "Best fit recommendation."],
          apis: ["POST /v1/pts/recommendations/best", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Final recommendation algorithm",
            "Transparent reasoning",
            "User empowerment",
            "Allow override",
          ],
          successMetric:
            "User accepts recommendation OR informed alternative (>85%)",
        },
      ],
    },
    "Bespoke Atelier Journey": {
      color: "bg-purple-600",
      phase: 3,
      complexity: "High",
      duration: "15-25 turns, 15-30 min",
      targetUsers: "UHNW, Exclusive Manufaktur clients, bespoke seekers",
      steps: [
        {
          name: "Inspiration Capture",
          keywords: [
            "custom_inspiration",
            "bespoke_color_start",
            "pts_plus_intro",
          ],
          examples: ["Match my watch dial.", "Can it match my yacht hull?"],
          apis: ["POST /v1/pts-plus/inspirations"],
          techConsiderations: [
            "Secure upload to S3",
            "File validation (10MB, JPEG/PNG)",
            "Privacy consent",
            "Malware scan",
            "EXIF stripping",
          ],
          successMetric: "Valid inspiration submitted (>90% image quality)",
        },
        {
          name: "Colour DNA Extraction",
          keywords: [
            "extract_color_profile",
            "tone_analysis",
            "primary_secondary_pigments",
          ],
          examples: ["What undertones do you see?", "Is it blue-grey?"],
          apis: [
            "POST /v1/color-analysis/from-image",
            "POST /v1/color-analysis/from-text",
          ],
          techConsiderations: [
            "Computer vision (LAB color space)",
            "Lighting normalization",
            "Metamerism handling",
            "ΔE calculation to PTS catalog",
          ],
          successMetric: "User validates color analysis (>85% agreement)",
        },
        {
          name: "Feasibility Framing",
          keywords: [
            "feasibility_check",
            "pts_plus_constraints",
            "material_compatibility",
          ],
          examples: ["Is this possible?", "Any restrictions?"],
          apis: [
            "POST /v1/pts-plus/feasibility",
            "GET /v1/pts-plus/guidelines",
          ],
          techConsiderations: [
            "Business rules engine",
            "Safety regulations by market",
            "Model-specific constraints",
            "Transparent pricing ranges",
          ],
          successMetric: "User proceeds to variants (>70%)",
        },
        {
          name: "Colour Drafts",
          keywords: [
            "generate_color_variants",
            "draft_shades",
            "saturation_variants",
          ],
          examples: ["Show a softer version.", "What about deeper?"],
          apis: [
            "POST /v1/pts-plus/variants",
            "GET /v1/pts-plus/variants/{id}/visuals",
          ],
          techConsiderations: [
            "AI color transfer OR 3D rendering",
            "Photorealistic quality",
            "Iterative refinement (5 max)",
            "Physical samples option",
          ],
          successMetric:
            "User selects preferred variant (>85% within 3 iterations)",
        },
        {
          name: "Harmonisation Check",
          keywords: [
            "interior_exterior_match",
            "trim_harmony",
            "wheel_color_match",
          ],
          examples: ["Which interior fits?", "Best wheel finish?"],
          apis: [
            "GET /v1/interiors",
            "GET /v1/wheels",
            "POST /v1/pts-plus/harmony-check",
          ],
          techConsiderations: [
            "Color theory (complementary, analogous)",
            "Combination explosion handling",
            "Brand guidelines leverage",
            "Visual composition",
          ],
          successMetric: "Full harmony configured (>75%), score >0.80 (>90%)",
        },
        {
          name: "Finalisation",
          keywords: [
            "confirm_pts_plus",
            "lock_in_bespoke",
            "commit_custom_colour",
          ],
          examples: ["Let's go with variant 2.", "Confirm final shade."],
          apis: ["POST /v1/pts-plus/submit", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Human approval workflow",
            "SLA tracking (12-16 weeks)",
            "Status notifications",
            "Payment coordination",
          ],
          successMetric:
            "PTS Plus submitted (100%), Manufaktur ack (>95% in 24h)",
        },
      ],
    },
    "Model-Specific Journey": {
      color: "bg-green-600",
      phase: 3,
      complexity: "Medium",
      duration: "8-12 turns, 7-10 min",
      targetUsers: "Buyers who selected model, want model-optimized color",
      steps: [
        {
          name: "Model Selection",
          keywords: ["select_model", "set_model_context", "model_confirm"],
          examples: [
            "I'm looking at a 911 GTS.",
            "Choosing Taycan vs Panamera.",
          ],
          apis: ["GET /v1/models", "POST /v1/users/{id}/current-model"],
          techConsiderations: [
            "Model catalog sync",
            "Regional availability",
            "Model year updates",
          ],
          successMetric: "Model confirmed (>98%)",
        },
        {
          name: "Body Geometry Explanation",
          keywords: [
            "explain_geometry",
            "model_shape_effect",
            "curvature_vs_color",
          ],
          examples: ["Why does colour look different on Taycan?"],
          apis: [
            "GET /v1/models/{id}/design-notes",
            "GET /v1/pts/colors/{id}/geometry-tips",
          ],
          techConsiderations: [
            "Educational content CMS",
            "Designer input",
            "Visual examples",
          ],
          successMetric: "User views model comparison (>70%)",
        },
        {
          name: "Model-Matched Palette",
          keywords: ["model_specific_palette", "color_match_for_model"],
          examples: ["Which PTS colours suit the 911?"],
          apis: [
            "GET /v1/pts/colors?modelId=911",
            "POST /v1/pts/recommendations",
          ],
          techConsiderations: [
            "Model-color compatibility matrix",
            "Factory constraints",
            "Curated recommendations",
          ],
          successMetric: "User explores ≥3 model-specific colors (>80%)",
        },
        {
          name: "Trim & Package Integration",
          keywords: [
            "trim_package_match",
            "spec_integration",
            "design_package_advice",
          ],
          examples: ["Does this clash with black trim?"],
          apis: ["GET /v1/packages?modelId=911", "POST /v1/pts/harmony-check"],
          techConsiderations: [
            "Complex business rules",
            "Visual clash detection",
            "Package data sync",
          ],
          successMetric: "Package compatibility verified (>90%)",
        },
        {
          name: "Scenario Comparison",
          keywords: [
            "compare_scenarios",
            "side_by_side_visual",
            "model_color_comparison",
          ],
          examples: ["Show this colour on Coupe vs Cabriolet."],
          apis: ["GET /v1/visuals/side-by-side", "GET /v1/visuals/configs"],
          techConsiderations: [
            "Comparison UI",
            "Asset management",
            "Performance optimization",
          ],
          successMetric: "User views comparison (>70%)",
        },
        {
          name: "Final Recommendation",
          keywords: ["final_model_specific_choice", "recommend_best_for_model"],
          examples: ["Pick what suits my 911 GTS."],
          apis: ["POST /v1/pts/recommendations/best", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Context-aware recommendations",
            "Build sheet generation",
          ],
          successMetric: "Color selected and build updated (>85%)",
        },
      ],
    },
    "White-Glove Confidence Journey": {
      color: "bg-rose-600",
      phase: 2,
      complexity: "Medium-High",
      duration: "12-18 turns, 10-15 min",
      targetUsers: "Hesitant buyers, decision anxiety, analysis paralysis",
      steps: [
        {
          name: "Identify Uncertainty",
          keywords: [
            "uncertainty_detection",
            "confidence_probe",
            "decision_anxiety",
          ],
          examples: ["I'm scared to choose wrong.", "I keep changing my mind."],
          apis: [
            "POST /v1/diagnostics/uncertainty",
            "POST /v1/users/{id}/preferences/priorities",
          ],
          techConsiderations: [
            "Sentiment analysis",
            "Decision mapping",
            "Psychological safety",
            "Empathy design",
          ],
          successMetric: "Uncertainty diagnosed with >80% confidence",
        },
        {
          name: "Two-Path Contrast",
          keywords: ["contrast_paths", "subtle_vs_bold", "scenario_fork"],
          examples: ["Give me subtle vs bold options."],
          apis: ["POST /v1/pts/contrast-set"],
          techConsiderations: [
            "Contrast frameworks (subtle/bold, classic/contemporary)",
            "Personality alignment",
            "Clear differentiation",
          ],
          successMetric: "User identifies preferred path (>85%)",
        },
        {
          name: "Scenario Saturation",
          keywords: [
            "use_case_scenarios",
            "daily_vs_special",
            "scenario_description",
          ],
          examples: [
            "Which is better daily?",
            "Which is best for special occasions?",
          ],
          apis: [
            "GET /v1/pts/colors/{id}/scenario-notes",
            "GET /v1/visuals/scenario-gallery",
          ],
          techConsiderations: [
            "Scenario library",
            "Emotional storytelling",
            "Use case matching",
            "Narrative quality",
          ],
          successMetric: "User engages with ≥2 scenarios (>75%)",
        },
        {
          name: "Maintenance & Practicality",
          keywords: [
            "maintenance_profile",
            "practicality_score",
            "swirl_visibility",
          ],
          examples: ["Which shows dirt more?", "Hard to clean?"],
          apis: [
            "GET /v1/pts/colors/{id}/maintenance-metrics",
            "GET /v1/ownership/care-tips",
          ],
          techConsiderations: [
            "Real-world data",
            "Owner feedback",
            "Honest communication",
            "Maintenance scoring (1-10)",
          ],
          successMetric: "User acknowledges practical considerations (>90%)",
        },
        {
          name: "Emotional Reflection",
          keywords: [
            "emotional_projection",
            "self_image_alignment",
            "identity_check",
          ],
          examples: ["Which feels more like me?"],
          apis: ["POST /v1/pts/emotional-fit"],
          techConsiderations: [
            "Psychology principles",
            "Identity alignment",
            "Reflective questions",
            "Value mapping",
          ],
          successMetric: "User expresses clarity on emotional fit (>80%)",
        },
        {
          name: "Confident Conclusion",
          keywords: ["final_confirm", "lock_in_decision", "confidence_recap"],
          examples: ["Choose for me.", "Lock this in."],
          apis: ["POST /v1/pts/recommendations/final", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Confidence note generation",
            "Decision summary",
            "Final validation",
            "Journey recap",
          ],
          successMetric: "Final selection (>90%), confidence >4.5/5.0 (>85%)",
        },
      ],
    },
  };

  const architectureOptions = {
    bff: {
      name: "Backend-for-Frontend (BFF)",
      icon: Database,
      description: "Middleware layer aggregating multiple services",
      timeline: "6-8 weeks",
      complexity: "Medium",
      monthlyCost: "$180-230",
      pros: [
        "Clean separation",
        "Easy to modify",
        "Handles complexity",
        "Better caching",
        "Security control",
        "Monitoring centralized",
      ],
      cons: [
        "Extra latency (50-150ms)",
        "More infrastructure",
        "Additional maintenance",
        "Higher initial dev cost",
      ],
      bestFor:
        "Multiple backend systems, complex data transformation, existing microservices",
      whenToChoose: [
        "✅ Porsche has multiple backend systems",
        "✅ Complex data transformation needed",
        "✅ Need centralized caching",
        "✅ Want to hide internal API complexity",
        "✅ Existing microservices architecture",
      ],
    },
    direct: {
      name: "Direct Function Calling",
      icon: Zap,
      description: "GPT directly calls Porsche APIs",
      timeline: "3-4 weeks",
      complexity: "Low",
      monthlyCost: "$5-10",
      pros: [
        "Simpler architecture",
        "Lower latency",
        "Less code to maintain",
        "Faster iteration",
        "Minimal infrastructure",
        "Lower cost",
      ],
      cons: [
        "Less flexibility",
        "GPT exposes API patterns",
        "Harder rate limiting",
        "Limited caching options",
        "API dependency",
      ],
      bestFor: "Well-designed APIs, simple transformations, rapid MVP",
      whenToChoose: [
        "✅ Porsche APIs are LLM-friendly",
        "✅ Need fastest time-to-market",
        "✅ Simple data transformations",
        "✅ Smaller team",
        "✅ Cost sensitivity",
      ],
    },
    agent: {
      name: "Agent Framework",
      icon: Globe,
      description: "Specialized agents with orchestration",
      timeline: "10-12 weeks",
      complexity: "High",
      monthlyCost: "$700-1,300",
      pros: [
        "Most powerful",
        "Modular",
        "RAG integration",
        "Complex reasoning",
        "Evolvable",
        "Sophisticated workflows",
      ],
      cons: [
        "High complexity",
        "Harder debugging",
        "Longer dev time",
        "More expensive",
        "3-5x more LLM calls",
        "Requires ML expertise",
      ],
      bestFor:
        "Complex workflows, unstructured content, advanced AI capabilities",
      whenToChoose: [
        "✅ Complex multi-step reasoning",
        "✅ Need RAG for heritage content",
        "✅ Want modular capabilities",
        "✅ Have ML/AI expertise",
        "✅ Budget allows complexity",
      ],
    },
  };

  const phases = [
    {
      name: "Phase 0: Foundation",
      duration: "2 weeks",
      cost: "$0 (Discovery)",
      goal: "Validate technical assumptions",
      deliverables: [
        "Architecture decision document",
        "API inventory & gap analysis",
        "Risk register",
        "Environment setup",
        "Stakeholder alignment",
      ],
      journeys: [],
      keyDecisions: [
        "LLM provider (Claude vs Azure OpenAI)",
        "Hosting model (BFF/Direct/Agent)",
        "Database choice",
        "Authentication approach",
        "Team composition",
      ],
    },
    {
      name: "Phase 1: MVP",
      duration: "4 weeks",
      cost: "$86K dev + $350/mo infra",
      goal: "Prove concept with single journey",
      deliverables: [
        "Heritage Discovery Journey (6 steps)",
        "Basic conversation service",
        "Session management (Redis)",
        "Pre-rendered visuals only",
        "Manual dealer handover",
      ],
      journeys: ["Heritage Discovery Journey"],
      keyDecisions: [
        "Hardcoded vs DB data",
        "Session persistence approach",
        "Analytics integration",
      ],
      successMetrics: [
        "Journey completion >60%",
        "Avg turns <12",
        "Selection <10 min",
        "Satisfaction >4.0/5.0",
      ],
    },
    {
      name: "Phase 2: Production Core",
      duration: "6 weeks",
      cost: "$196K dev + $900-1,200/mo infra",
      goal: "Production-ready core journeys",
      deliverables: [
        "+ Lifestyle & White-Glove journeys",
        "User accounts & profiles",
        "Automated dealer handover (PDF + CRM)",
        "Full analytics",
        "PTS Service microservice",
      ],
      journeys: [
        "Heritage Discovery Journey",
        "Lifestyle-to-Colour Journey",
        "White-Glove Confidence Journey",
      ],
      keyDecisions: [
        "Persona classification (rule-based vs ML)",
        "PDF generation method",
        "CRM integration approach",
      ],
      successMetrics: [
        "95% API availability",
        "p95 <2s response",
        "Zero color errors",
        "+20% PTS consideration",
      ],
    },
    {
      name: "Phase 3: Advanced Features",
      duration: "8 weeks",
      cost: "$254K dev + $1,950-2,700/mo infra",
      goal: "Differentiated capabilities",
      deliverables: [
        "+ Bespoke Atelier & Model-Specific",
        "ML persona classification",
        "Real-time renders OR AI color transfer",
        "Multi-channel (web/mobile/dealer)",
        "Color analysis from images",
      ],
      journeys: ["Bespoke Atelier Journey", "Model-Specific Journey"],
      keyDecisions: [
        "3D rendering vs AI color transfer",
        "Color analysis technology",
        "Mobile strategy",
        "Physical sample workflow",
      ],
    },
  ];

  const roiMetrics = {
    year1Cost: "€565K",
    year1Revenue: "€7.5M",
    roi: "1,227%",
    breakEven: "~1 month",
    costPerConversion: "€1.25 ",
    revenuePerEuroSpent: "€13.27",
    assumptions: [
      "50,000 annual configurator visitors",
      "15% → 20% PTS adoption (+5% increase)",
      "2,500 incremental buyers × €3,000 avg premium",
      "At scale: 10,000 conversations/month, 20% conversion rate",
      "€3,000 average PTS premium (includes heritage & PTS Plus)",
      "Year 1 total investment: €565K (dev + infrastructure)",
    ],
  };

  const currentTier = pricingTiers[selectedPricingTier];
  const currentROI = roiCalculator[selectedPricingTier];

  const toggleStep = (stepIndex) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepIndex]: !prev[stepIndex],
    }));
  };

  const currentJourney = journeys[selectedJourney];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-light mb-2 tracking-tight">
                🏎️ Porsche PTS Concierge
              </h1>
              <p className="text-slate-400 text-lg">
                Complete Client Proposal: Custom GPT + Conversational Platform
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-green-400">
                {currentROI.roi} ROI
              </div>
              <div className="text-sm text-slate-400">
                {currentTier.name} - Year 1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-slate-700 bg-slate-900/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "proposal", label: "Executive Summary", icon: Target },
              { id: "pricing", label: "Pricing & ROI", icon: DollarSign },
              { id: "expedia", label: "Expedia Benchmarks", icon: BarChart3 },
              { id: "funnel", label: "AI Visibility Funnel", icon: GitBranch },
              {
                id: "user-experience",
                label: "User Experience",
                icon: Users,
              },
              { id: "architecture", label: "Architecture", icon: Database },
              { id: "phases", label: "Implementation", icon: TrendingUp },
              {
                id: "partnership",
                label: "Partnership Model",
                icon: Briefcase,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-white bg-slate-800/50"
                      : "border-transparent text-slate-400 hover:text-slate-300 hover:bg-slate-800/30"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Executive Proposal Tab */}
        {activeTab === "proposal" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-6">Executive Summary</h2>

              {/* Problem Statement */}
              <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-light mb-4 text-red-300">
                  The Problem
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Porsche customers face overwhelming decision paralysis when
                  selecting Paint to Sample (PTS) colors. With over 100 heritage
                  colors and unlimited PTS Plus bespoke options, buyers need
                  expert guidance that Manufaktur consultants cannot scale to
                  meet demand.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-red-300">
                      Business Impact
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>
                        • Lost PTS revenue (customers default to standard
                        colors)
                      </li>
                      <li>
                        • Extended sales cycles (indecision delays purchases)
                      </li>
                      <li>• Inconsistent experiences across dealerships</li>
                      <li>• Underutilized PTS Plus program</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-red-300">
                      Current State
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Only 15% of buyers choose PTS colors</li>
                      <li>• Average decision time: 3-4 weeks</li>
                      <li>• Limited Manufaktur consultant availability</li>
                      <li>• No scalable digital guidance solution</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution Overview */}
              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-light mb-4 text-green-300">
                  The Solution: Two-Platform AI Strategy
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We propose a dual-platform approach that combines the reach of
                  OpenAI's Custom GPT with the power of a Porsche-owned
                  conversational AI platform. This strategy maximizes discovery
                  while maintaining full control over customer data and
                  conversion tracking.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <Lock className="w-6 h-6 text-blue-400 mr-2" />
                      <h4 className="font-medium text-blue-300">
                        Platform 1: Custom GPT (OpenAI)
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">
                      Discovery & Initial Engagement
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Broad reach via ChatGPT marketplace</li>
                      <li>• Initial color guidance and education</li>
                      <li>• Basic journey support (limited features)</li>
                      <li>• Handoff to Porsche platform with tracking ID</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-400 italic">
                        Limited data capture due to OpenAI privacy constraints
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-6 border-l-4 border-green-500">
                    <div className="flex items-center mb-3">
                      <Unlock className="w-6 h-6 text-green-400 mr-2" />
                      <h4 className="font-medium text-green-300">
                        Platform 2: Porsche Platform
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">
                      Conversion & Full Experience
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Complete conversational journeys (all 5)</li>
                      <li>• Full personalization and user profiles</li>
                      <li>• Rich analytics and attribution tracking</li>
                      <li>• Integration with CRM and dealer systems</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-400 italic">
                        Full data control, GDPR compliance, comprehensive
                        tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-slate-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-light mb-6">Why This Matters</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-4xl font-light text-green-400 mb-2">
                      +5%
                    </div>
                    <div className="text-sm font-medium mb-2">
                      PTS Adoption Increase
                    </div>
                    <div className="text-xs text-slate-400">
                      From 15% to 20% = 2,500 additional PTS configurations
                      annually
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-blue-400 mb-2">
                      €7.5M
                    </div>
                    <div className="text-sm font-medium mb-2">
                      Incremental Revenue
                    </div>
                    <div className="text-xs text-slate-400">
                      Year 1 projection (2,500 buyers × €3,000 average premium)
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-purple-400 mb-2">
                      1,227%
                    </div>
                    <div className="text-sm font-medium mb-2">
                      Return on Investment
                    </div>
                    <div className="text-xs text-slate-400">
                      Break-even in ~1 month after launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would continue here with similar content structure */}
        {/* AI Visibility Funnel Tab */}
        {activeTab === "funnel" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">AI Visibility Funnel</h2>
              <p className="text-slate-400 mb-8">
                How customers move from discovery to conversion across both
                platforms
              </p>
            </div>

            {/* Funnel Visualization */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="space-y-6">
                {/* Discovery Stage */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-light">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-light">
                          Discovery (Custom GPT)
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                          OpenAI Platform
                        </span>
                      </div>
                      <p className="text-slate-300 mb-4">
                        User discovers Porsche PTS Concierge through ChatGPT
                        marketplace or search
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-blue-300 mb-2">
                            What Happens
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>• User asks about Porsche colors</li>
                            <li>• GPT provides initial education</li>
                            <li>• Basic journey steps begin</li>
                            <li>• User explores heritage colors</li>
                          </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-amber-300 mb-2">
                            Data Tracked
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>✓ Session start timestamp</li>
                            <li>✓ Basic intent detection</li>
                            <li>✓ Journey type initiated</li>
                            <li>✗ NO user profiles</li>
                            <li>✗ NO deep analytics</li>
                            <li>✗ NO attribution data</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                </div>

                {/* Engagement Stage */}
                <div className="relative pt-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-light">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-light">
                          Engagement (Custom GPT)
                        </h3>
                        <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                          Limited Features
                        </span>
                      </div>
                      <p className="text-slate-300 mb-4">
                        User has meaningful conversation, but features are
                        constrained by OpenAI platform
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-purple-300 mb-2">
                            What Happens
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>• Multi-turn conversation</li>
                            <li>• Basic color recommendations</li>
                            <li>• Limited visualization support</li>
                            <li>• Handoff prompt appears</li>
                          </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-amber-300 mb-2">
                            Data Tracked
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>✓ Conversation turn count</li>
                            <li>✓ Topics discussed</li>
                            <li>✓ Handoff event triggered</li>
                            <li>✓ Unique tracking ID generated</li>
                            <li>✗ NO preference storage</li>
                            <li>✗ NO conversion tracking</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-lg p-4 border border-purple-700/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-white mb-1">
                              Handoff Mechanism
                            </h4>
                            <p className="text-sm text-slate-300">
                              Unique tracking ID passed to Porsche platform via
                              secure URL parameter or token
                            </p>
                          </div>
                          <GitBranch className="w-8 h-8 text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-green-600"></div>
                </div>

                {/* Conversion Stage */}
                <div className="relative pt-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl font-light">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-light">
                          Conversion (Porsche Platform)
                        </h3>
                        <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">
                          Full Experience
                        </span>
                      </div>
                      <p className="text-slate-300 mb-4">
                        User transitions to Porsche-owned platform with complete
                        features and data capture
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-green-300 mb-2">
                            What Happens
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>• Full conversational journeys (all 5)</li>
                            <li>• Rich personalization</li>
                            <li>• Advanced visualizations</li>
                            <li>• User profile creation</li>
                            <li>• Color selection & configuration</li>
                            <li>• Dealer handover with full context</li>
                          </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4">
                          <h4 className="font-medium text-green-300 mb-2">
                            Data Tracked (Full)
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-300">
                            <li>✓ Complete user profiles</li>
                            <li>✓ Preference history</li>
                            <li>✓ All conversation steps</li>
                            <li>✓ Color selection events</li>
                            <li>✓ Build configuration started</li>
                            <li>✓ Dealer handover completion</li>
                            <li>✓ Attribution to original GPT session</li>
                            <li>✓ Full funnel analytics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Comparison */}
            <div>
              <h3 className="text-2xl font-light mb-6">Platform Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-medium text-blue-300">
                      Custom GPT (OpenAI)
                    </h4>
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Capabilities
                      </h5>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li>• Basic conversational guidance</li>
                        <li>• Educational content delivery</li>
                        <li>• Simple color recommendations</li>
                        <li>• Journey initiation</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Limitations
                      </h5>
                      <ul className="space-y-1 text-sm text-red-300">
                        <li>✗ No user profile storage</li>
                        <li>✗ Limited data capture</li>
                        <li>✗ No conversion tracking</li>
                        <li>✗ Privacy constraints (OpenAI)</li>
                        <li>✗ No CRM integration</li>
                        <li>✗ Basic analytics only</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Best For
                      </h5>
                      <p className="text-sm text-slate-300">
                        Discovery, broad reach, initial engagement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-medium text-green-300">
                      Porsche Platform
                    </h4>
                    <Unlock className="w-6 h-6 text-green-400" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Capabilities
                      </h5>
                      <ul className="space-y-1 text-sm text-slate-300">
                        <li>• Complete journey experiences (all 5)</li>
                        <li>• Advanced personalization</li>
                        <li>• Rich visualizations & media</li>
                        <li>• User profile management</li>
                        <li>• CRM & dealer integration</li>
                        <li>• Build configuration</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Advantages
                      </h5>
                      <ul className="space-y-1 text-sm text-green-300">
                        <li>✓ Full data control</li>
                        <li>✓ Complete analytics suite</li>
                        <li>✓ Attribution tracking</li>
                        <li>✓ GDPR-compliant (Porsche-managed)</li>
                        <li>✓ CDP integration</li>
                        <li>✓ Conversion optimization</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Best For
                      </h5>
                      <p className="text-sm text-slate-300">
                        Conversion, personalization, attribution, revenue
                        generation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking ID Handoff */}
            <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-xl p-8 border border-purple-700/50">
              <h3 className="text-2xl font-light mb-4">
                Tracking ID Handoff Mechanism
              </h3>
              <p className="text-slate-300 mb-6">
                How we maintain attribution across platforms while respecting
                privacy
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-300 mb-3">
                    1. Generate ID
                  </h4>
                  <p className="text-sm text-slate-300">
                    Custom GPT generates unique, secure tracking ID when user
                    shows conversion intent
                  </p>
                  <code className="block mt-2 text-xs bg-slate-950 p-2 rounded text-purple-400">
                    track_id: pts_gpt_abc123xyz
                  </code>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-300 mb-3">
                    2. Secure Transfer
                  </h4>
                  <p className="text-sm text-slate-300">
                    ID passed via URL parameter or secure token to Porsche
                    platform
                  </p>
                  <code className="block mt-2 text-xs bg-slate-950 p-2 rounded text-blue-400 overflow-x-auto">
                    porsche.com/pts?id=abc123xyz
                  </code>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-3">
                    3. Link Sessions
                  </h4>
                  <p className="text-sm text-slate-300">
                    Porsche platform links GPT session to full user journey,
                    enabling attribution
                  </p>
                  <code className="block mt-2 text-xs bg-slate-950 p-2 rounded text-green-400">
                    gpt_session → conversion
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-4">Demo Videos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">
                    Expedia ChatGPT App Demo
                  </h4>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-700">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/xxYoJfcEcFk"
                      title="Expedia ChatGPT App Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">
                    Expedia Custom GPT
                  </h4>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-700">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/oYZ7wOy_JT0"
                      title="Expedia Custom GPT"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "data-tracking" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Data Tracking & Metrics
              </h2>
              <p className="text-slate-400 mb-8">
                Comprehensive overview of what data can and cannot be tracked
                across both platforms
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setSelectedPlatform("custom-gpt")}
                className={`flex-1 p-6 rounded-xl transition-all ${
                  selectedPlatform === "custom-gpt"
                    ? "bg-blue-600 shadow-lg"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Lock className="w-6 h-6 mr-2" />
                  <span className="text-lg font-medium">Custom GPT</span>
                </div>
                <p className="text-sm opacity-75">
                  Limited tracking capabilities
                </p>
              </button>
              <button
                onClick={() => setSelectedPlatform("porsche-platform")}
                className={`flex-1 p-6 rounded-xl transition-all ${
                  selectedPlatform === "porsche-platform"
                    ? "bg-green-600 shadow-lg"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Unlock className="w-6 h-6 mr-2" />
                  <span className="text-lg font-medium">Porsche Platform</span>
                </div>
                <p className="text-sm opacity-75">Full tracking capabilities</p>
              </button>
            </div>

            {/* Data Tracking Comparison Table */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900/50">
                      <th className="text-left p-4 font-medium text-slate-300">
                        Data Type
                      </th>
                      <th className="text-center p-4 font-medium text-blue-300">
                        <div className="flex items-center justify-center">
                          <Lock className="w-4 h-4 mr-2" />
                          Custom GPT
                        </div>
                      </th>
                      <th className="text-center p-4 font-medium text-green-300">
                        <div className="flex items-center justify-center">
                          <Unlock className="w-4 h-4 mr-2" />
                          Porsche Platform
                        </div>
                      </th>
                      <th className="text-left p-4 font-medium text-slate-300">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">Session Start/End</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Both platforms can track session timing
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-900/30">
                      <td className="p-4 text-slate-300">User Profile Data</td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        GPT cannot store user profiles
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">
                        Conversation History
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-yellow-400 text-sm">Partial</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        GPT: session only, Platform: persistent
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-900/30">
                      <td className="p-4 text-slate-300">
                        Preference Collection
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-yellow-400 text-sm">Basic</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        GPT: in-conversation only
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">Journey Completion</td>
                      <td className="p-4 text-center">
                        <span className="text-yellow-400 text-sm">Basic</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Platform tracks detailed steps
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-900/30">
                      <td className="p-4 text-slate-300">
                        Color Selection Events
                      </td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Critical conversion event
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">
                        Build Configuration
                      </td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Requires Porsche system integration
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-900/30">
                      <td className="p-4 text-slate-300">Dealer Handover</td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        CRM integration required
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">
                        Attribution Tracking
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-yellow-400 text-sm">ID Only</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Tracking ID enables attribution
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700 bg-slate-900/30">
                      <td className="p-4 text-slate-300">Funnel Analytics</td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Drop-off, conversion rates, etc.
                      </td>
                    </tr>
                    <tr className="border-t border-slate-700">
                      <td className="p-4 text-slate-300">CDP Integration</td>
                      <td className="p-4 text-center">
                        <AlertTriangle className="w-5 h-5 text-red-400 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        Drop-off, conversion rates, etc.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Expedia Performance Metrics Reference */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light">
                  Industry Benchmark: Expedia Performance Metrics
                </h3>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                  Reference Case Study
                </span>
              </div>

              <p className="text-slate-400 mb-6">
                Based on Expedia's implementation of Custom GPT + Platform
                strategy, these are proven metrics we can track and optimize
              </p>

              <div className="grid md:grid-cols-5 gap-4 mb-6">
                {/* Accuracy Metrics */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-green-300 mb-3">
                    Accuracy
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400">Response Accuracy</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">95%</span>
                        <span className="text-green-400">Target: &gt;95%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Intent Detection</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">92%</span>
                        <span className="text-green-400">Target: &gt;90%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Hallucination Rate</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">0.05%</span>
                        <span className="text-green-400">Target: &gt;0.1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-blue-300 mb-3">
                    Engagement
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400">
                        Avg. Conversation Length
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">8.3</span>
                        <span className="text-slate-500">turns</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Session Duration</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">6.2</span>
                        <span className="text-slate-500">min</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Return User Rate</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">34%</span>
                        <span className="text-blue-400">Target: &gt;30%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conversion Metrics */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-purple-300 mb-3">
                    Conversion
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400">
                        GPT → Platform Handoff
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">42%</span>
                        <span className="text-purple-400">Target: &gt;40%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Platform Conversion</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">23%</span>
                        <span className="text-purple-400">Target: &gt;20%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Overall CVR</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">9.7%</span>
                        <span className="text-slate-500">GPT to sale</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety Metrics */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-amber-300 mb-3">
                    Safety
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400">Content Filter Rate</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">99.8%</span>
                        <span className="text-green-400">Target: &gt;99%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">
                        Prompt Injection Block
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">100%</span>
                        <span className="text-green-400">Detected</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">Privacy Compliance</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">100%</span>
                        <span className="text-green-400">GDPR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Retention Metrics */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-rose-300 mb-3">
                    Retention
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-slate-400">7-Day Retention</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">28%</span>
                        <span className="text-rose-400">Target: &gt;25%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">30-Day Retention</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">12%</span>
                        <span className="text-rose-400">Target: &gt;10%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400">
                        Customer Satisfaction
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-medium">4.6</span>
                        <span className="text-slate-500">/5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Metric Explanations */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-lg p-4 border border-blue-700/30">
                  <h4 className="font-medium text-blue-300 mb-2">
                    Attribution Tracking (Expedia Model)
                  </h4>
                  <p className="text-sm text-slate-300 mb-3">
                    Expedia tracks user journey from ChatGPT discovery to final
                    booking using unique tracking IDs
                  </p>
                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>GPT Sessions Tracked</span>
                      <span className="text-slate-300">~50K/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Successful Handoffs</span>
                      <span className="text-slate-300">~21K/month (42%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Conversions</span>
                      <span className="text-slate-300">~4.8K/month (9.7%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Attribution</span>
                      <span className="text-green-400">100% tracked</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-lg p-4 border border-purple-700/30">
                  <h4 className="font-medium text-purple-300 mb-2">
                    Data Quality Insights
                  </h4>
                  <p className="text-sm text-slate-300 mb-3">
                    Key learnings from Expedia's implementation that inform our
                    Porsche approach
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Custom GPT drives 3x more engagement than traditional
                        chatbots
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Platform handoff increases conversion by 2.3x vs
                        GPT-only
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Attribution tracking enables ROI measurement and
                        optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Users who start on GPT have 40% higher lifetime value
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-300 mb-1">
                      Porsche Adaptation Notes
                    </h4>
                    <p className="text-sm text-slate-300">
                      While Expedia's metrics provide a strong baseline,
                      Porsche's luxury positioning and longer consideration
                      cycles mean we expect different conversion patterns.
                      Target metrics will be calibrated during Phase 1 MVP based
                      on actual Porsche customer behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "user-experience" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                User Experience: Conversational Journeys
              </h2>
              <p className="text-slate-400">
                Each journey represents a distinct customer intent with 6
                structured steps and clear success metrics
              </p>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-8">
              {Object.entries(journeys).map(([key, journey]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedJourney(key);
                    setExpandedSteps({});
                  }}
                  className={`p-4 rounded-lg transition-all relative ${
                    selectedJourney === key
                      ? `${journey.color} shadow-lg scale-105`
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  <div className="text-sm font-medium text-center leading-tight mb-2">
                    {key.replace(" Journey", "")}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="opacity-75">Phase {journey.phase}</span>
                    <span className="opacity-75">{journey.complexity}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 ${currentJourney.color} rounded-full mr-3`}
                  ></div>
                  <div>
                    <h2 className="text-2xl font-light">{selectedJourney}</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      {currentJourney.targetUsers} • {currentJourney.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${currentJourney.color}`}
                  >
                    Phase {currentJourney.phase}
                  </span>
                  <span className="text-slate-400">
                    {currentJourney.complexity} Complexity
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {currentJourney.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleStep(index)}
                      className="w-full p-4 flex items-center hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center flex-1">
                        <div
                          className={`w-8 h-8 rounded-full ${currentJourney.color} flex items-center justify-center text-sm font-medium mr-3`}
                        >
                          {index + 1}
                        </div>
                        <span className="font-medium text-lg">{step.name}</span>
                      </div>
                      {expandedSteps[index] ? (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    {expandedSteps[index] && (
                      <div className="px-4 pb-4 space-y-4 border-t border-slate-700 pt-4">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                            Keywords
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.keywords.map((keyword, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                            Example Queries
                          </h4>
                          <div className="space-y-2">
                            {step.examples.map((example, i) => (
                              <div
                                key={i}
                                className="text-sm text-slate-300 italic pl-3 border-l-2 border-slate-600"
                              >
                                "{example}"
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                            API Endpoints
                          </h4>
                          <div className="space-y-1">
                            {step.apis.map((api, i) => (
                              <code
                                key={i}
                                className="block text-xs bg-slate-950 text-emerald-400 p-2 rounded border border-slate-800 font-mono"
                              >
                                {api}
                              </code>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                            Technical Considerations
                          </h4>
                          <ul className="space-y-1">
                            {step.techConsiderations.map((consideration, i) => (
                              <li
                                key={i}
                                className="text-sm text-slate-300 flex items-start"
                              >
                                <span className="text-blue-400 mr-2">•</span>
                                {consideration}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-slate-700">
                          <h4 className="text-xs uppercase tracking-wider text-green-400 mb-2">
                            Success Metric
                          </h4>
                          <p className="text-sm text-slate-300">
                            {step.successMetric}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Demo />
          </div>
        )}

        {activeTab === "architecture" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                Architecture Pattern Selection
              </h2>
              <p className="text-slate-400">
                Choose based on existing infrastructure, complexity tolerance,
                timeline requirements, and team capabilities
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {Object.entries(architectureOptions).map(([key, option]) => {
                const Icon = option.icon;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedArchOption(key)}
                    className={`cursor-pointer rounded-xl border-2 transition-all ${
                      selectedArchOption === key
                        ? "border-blue-500 bg-slate-800/50 shadow-lg"
                        : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Icon
                          className={`w-8 h-8 ${
                            selectedArchOption === key
                              ? "text-blue-400"
                              : "text-slate-500"
                          }`}
                        />
                        <div className="flex flex-col gap-2 items-end">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              option.complexity === "Low"
                                ? "bg-green-900/50 text-green-300"
                                : option.complexity === "Medium"
                                ? "bg-yellow-900/50 text-yellow-300"
                                : "bg-red-900/50 text-red-300"
                            }`}
                          >
                            {option.complexity}
                          </span>
                          <span className="text-xs text-green-400">
                            {option.monthlyCost}/mo
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium mb-2">
                        {option.name}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        {option.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                          Timeline
                        </div>
                        <div className="text-sm font-medium">
                          {option.timeline}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-green-400 mb-2">
                            Pros
                          </div>
                          <ul className="space-y-1">
                            {option.pros.map((pro, i) => (
                              <li
                                key={i}
                                className="text-xs text-slate-300 flex items-start"
                              >
                                <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-xs uppercase tracking-wider text-red-400 mb-2">
                            Cons
                          </div>
                          <ul className="space-y-1">
                            {option.cons.map((con, i) => (
                              <li
                                key={i}
                                className="text-xs text-slate-300 flex items-start"
                              >
                                <AlertTriangle className="w-3 h-3 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-slate-700">
                          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                            Best For
                          </div>
                          <p className="text-xs text-slate-400">
                            {option.bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* When to Choose This Architecture */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 mb-8">
              <h3 className="text-xl font-light mb-4">
                When to Choose: {architectureOptions[selectedArchOption].name}
              </h3>
              <ul className="space-y-2">
                {architectureOptions[selectedArchOption].whenToChoose.map(
                  (reason, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-300 flex items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      {reason}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Critical Non-Functional Requirements */}
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                Critical Non-Functional Requirements
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-blue-300 mb-2">Security</div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• OAuth 2.0 authentication required</li>
                    <li>• TLS 1.3 encryption in transit</li>
                    <li>• AES-256 encryption at rest</li>
                    <li>• GDPR/CCPA compliance for PII</li>
                    <li>• Prompt injection prevention</li>
                    <li>• Rate limiting (10/min anon, 100/min auth)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-300 mb-2">
                    Performance
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• p95 response time &lt; 2s</li>
                    <li>• 99.5% API availability</li>
                    <li>• Support 1000+ concurrent users</li>
                    <li>• Graceful degradation strategy</li>
                    <li>• CDN cache hit rate &gt; 99%</li>
                    <li>• Image load &lt; 1s</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-300 mb-2">
                    Scalability
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• Horizontal scaling for all services</li>
                    <li>• Auto-scaling policies defined</li>
                    <li>• Connection pooling and caching</li>
                    <li>• Async processing for heavy ops</li>
                    <li>• Min 2 instances (redundancy)</li>
                    <li>• Max 20 instances (cost limit)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-300 mb-2">
                    Observability
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• Structured JSON logging</li>
                    <li>• Distributed tracing enabled</li>
                    <li>• Business metrics dashboards</li>
                    <li>• Critical error alerting (PagerDuty)</li>
                    <li>• A/B test result tracking</li>
                    <li>• Cost monitoring per conversation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phases Tab */}
        {activeTab === "phases" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                Phased Implementation Roadmap
              </h2>
              <p className="text-slate-400">
                Start small, validate early, iterate based on data — build
                production capability incrementally with clear success metrics
              </p>
            </div>

            <div className="mb-8 bg-slate-800/30 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center justify-between">
                {phases.map((phase, idx) => (
                  <React.Fragment key={idx}>
                    <button
                      onClick={() => setSelectedPhase(idx)}
                      className={`flex-1 p-4 rounded-lg transition-all ${
                        selectedPhase === idx
                          ? "bg-blue-600 shadow-lg scale-105"
                          : "bg-slate-800 hover:bg-slate-700"
                      }`}
                    >
                      <div className="text-lg font-medium mb-1">
                        {phase.name.split(":")[0]}
                      </div>
                      <div className="text-xs opacity-75 mb-1">
                        {phase.duration}
                      </div>
                      <div className="text-xs text-green-400">{phase.cost}</div>
                    </button>
                    {idx < phases.length - 1 && (
                      <ChevronRight className="w-6 h-6 text-slate-600 mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="mb-6">
                <h3 className="text-2xl font-light mb-2">
                  {phases[selectedPhase].name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />{" "}
                    {phases[selectedPhase].duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />{" "}
                    {phases[selectedPhase].cost}
                  </span>
                  <span>•</span>
                  <span>{phases[selectedPhase].goal}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].deliverables.map(
                      (deliverable, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                    Key Decisions
                  </h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].keyDecisions.map((decision, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {phases[selectedPhase].journeys.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                    Journeys Included
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {phases[selectedPhase].journeys.map((journey, i) => {
                      const journeyColor =
                        journeys[journey]?.color || "bg-slate-600";
                      return (
                        <div
                          key={i}
                          className={`${journeyColor} rounded-lg p-4 text-center font-medium`}
                        >
                          {journey.replace(" Journey", "")}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {phases[selectedPhase].successMetrics && (
                <div className="mt-6 bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Success Metrics
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {phases[selectedPhase].successMetrics.map((metric, i) => (
                      <li key={i}>• {metric}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-4 gap-4">
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">16-20 weeks</div>
                <div className="text-sm text-slate-400">
                  Total timeline to full deployment
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">€531K</div>
                <div className="text-sm text-slate-400">
                  Total Year 1 development cost
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">€24-36K</div>
                <div className="text-sm text-slate-400">
                  Annual infrastructure (ongoing)
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">€225-250K</div>
                <div className="text-sm text-slate-400">
                  Year 2+ maintenance annually
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "roi" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Business Case & Return on Investment
              </h2>
              <p className="text-slate-400">
                Comprehensive financial analysis demonstrating strong business
                value and rapid payback
              </p>
            </div>

            {/* Key ROI Metrics */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/50">
                <div className="text-4xl font-light mb-2 text-green-400">
                  {roiMetrics.roi}
                </div>
                <div className="text-sm text-slate-300 mb-1">Year 1 ROI</div>
                <div className="text-xs text-slate-400">
                  Investment: {roiMetrics.year1Cost}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-700/50">
                <div className="text-4xl font-light mb-2 text-blue-400">
                  {roiMetrics.year1Revenue}
                </div>
                <div className="text-sm text-slate-300 mb-1">
                  Incremental Revenue
                </div>
                <div className="text-xs text-slate-400">Year 1 Projection</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-700/50">
                <div className="text-4xl font-light mb-2 text-purple-400">
                  {roiMetrics.breakEven}
                </div>
                <div className="text-sm text-slate-300 mb-1">
                  Break-Even Point
                </div>
                <div className="text-xs text-slate-400">After launch</div>
              </div>
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-700/50">
                <div className="text-4xl font-light mb-2 text-purple-400">
                  {roiMetrics.revenuePerEuroSpent}
                </div>
                <div className="text-sm text-slate-300 mb-1">
                  Revenue per €1 Invested
                </div>
                <div className="text-xs text-slate-400">
                  Year 1 Return Ratio
                </div>
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-6">Revenue Impact Model</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-blue-300">
                      Current State (Baseline)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          Annual configurator visitors
                        </span>
                        <span className="font-medium">50,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          Current PTS adoption rate
                        </span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          PTS buyers annually
                        </span>
                        <span className="font-medium">7,500</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          Average PTS premium
                        </span>
                        <span className="font-medium">€3,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded border-t-2 border-slate-700">
                        <span className="text-slate-300 font-medium">
                          Current PTS Revenue
                        </span>
                        <span className="font-medium text-lg">€22.5M/year</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-green-300">
                      With PTS Concierge
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          Annual configurator visitors
                        </span>
                        <span className="font-medium">50,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-900/20 rounded border border-green-700/50">
                        <span className="text-slate-300">
                          New PTS adoption rate
                        </span>
                        <span className="font-medium text-green-400">
                          20% (+5%)
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-900/20 rounded border border-green-700/50">
                        <span className="text-slate-300">
                          PTS buyers annually
                        </span>
                        <span className="font-medium text-green-400">
                          10,000 (+2,500)
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                        <span className="text-slate-300">
                          Average PTS premium
                        </span>
                        <span className="font-medium">€3,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-900/20 rounded border-2 border-green-700/50">
                        <span className="text-slate-300 font-medium">
                          Incremental Revenue
                        </span>
                        <span className="font-medium text-lg text-green-400">
                          +€7.5M/year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
                    Key Assumptions
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {roiMetrics.assumptions.map((assumption, i) => (
                      <div
                        key={i}
                        className="text-sm text-slate-300 flex items-start"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        {assumption}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-6">
                Total Cost of Ownership (TCO)
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-amber-300">
                      Phase 1: MVP
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Development (4 weeks)
                        </span>
                        <span>$85K</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Infrastructure/mo
                        </span>
                        <span>$350</span>
                      </div>
                      <div className="flex justify-between p-2 bg-amber-900/20 rounded border-t border-slate-700">
                        <span className="text-slate-300 font-medium">
                          Phase 1 Total
                        </span>
                        <span className="font-medium">~$86K</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-blue-300">
                      Phase 2: Production
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Development (6 weeks)
                        </span>
                        <span>$190K</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Infrastructure/mo
                        </span>
                        <span>$900-1,200</span>
                      </div>
                      <div className="flex justify-between p-2 bg-blue-900/20 rounded border-t border-slate-700">
                        <span className="text-slate-300 font-medium">
                          Phase 2 Total
                        </span>
                        <span className="font-medium">~$196K</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4 text-purple-300">
                      Phase 3: Advanced
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Development (8 weeks)
                        </span>
                        <span>$250K</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-900/50 rounded">
                        <span className="text-slate-400">
                          Infrastructure/mo
                        </span>
                        <span>$1,950-2,700</span>
                      </div>
                      <div className="flex justify-between p-2 bg-purple-900/20 rounded border-t border-slate-700">
                        <span className="text-slate-300 font-medium">
                          Phase 3 Total
                        </span>
                        <span className="font-medium">~$254K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-green-300 mb-3">
                        Year 1 Total
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                          <span className="text-slate-300">
                            All Development Phases
                          </span>
                          <span className="font-medium">€531K</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                          <span className="text-slate-300">
                            Infrastructure (Year 1)
                          </span>
                          <span className="font-medium">€18-32K</span>
                        </div>
                        <div className="flex justify-between p-3 bg-green-900/20 rounded border-2 border-green-700/50">
                          <span className="text-slate-300 font-medium text-lg">
                            Total Investment
                          </span>
                          <span className="font-medium text-xl text-green-400">
                            €550-565K
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-300 mb-3">
                        Ongoing (Year 2+)
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                          <span className="text-slate-300">
                            Maintenance Team
                          </span>
                          <span className="font-medium">€200-225K/yr</span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                          <span className="text-slate-300">Infrastructure</span>
                          <span className="font-medium">€24-36K/yr</span>
                        </div>
                        <div className="flex justify-between p-3 bg-blue-900/20 rounded border-2 border-blue-700/50">
                          <span className="text-slate-300 font-medium text-lg">
                            Annual Operating Cost
                          </span>
                          <span className="font-medium text-xl text-blue-400">
                            €225-250K
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Per Conversion */}
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-700/50">
              <h3 className="text-2xl font-light mb-4">
                Cost Per Conversion Analysis
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-light mb-2 text-green-400">
                    {roiMetrics.costPerConversion}
                  </div>
                  <div className="text-sm text-slate-300">
                    Infrastructure cost per conversion
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    At scale: 120K conversations/year, 20% conversion (24K
                    conversions)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light mb-2 text-blue-400">
                    €3,000
                  </div>
                  <div className="text-sm text-slate-300">
                    Average PTS premium
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Value per conversion
                  </div>
                </div>
                <div className="text-4xl font-light mb-2 text-purple-400">
                  {roiMetrics.revenuePerEuroSpent}
                </div>
                <div className="text-sm text-slate-300">
                  Revenue per €1 invested (Year 1)
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  €7.5M revenue ÷ €565K investment
                </div>
              </div>
            </div>

            {/* Intangible Benefits */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-6">
                Intangible Benefits (Not Quantified)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-300 mb-3">
                    Brand & Experience
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Elevated brand perception (digital matches luxury
                      positioning)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Improved customer satisfaction and confidence
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Competitive differentiation in luxury automotive
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      Enhanced dealer relationships (better-qualified leads)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-3">
                    Strategic Value
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Data insights on customer color preferences and trends
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Scalable expertise (doesn't require hiring more
                      consultants)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Foundation for future AI-powered configuration features
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Reduced sales cycle time (faster decision-making)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sensitivity Analysis */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-6">
                Sensitivity Analysis: What If We're Conservative?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-3 text-slate-400 font-medium">
                        Scenario
                      </th>
                      <th className="text-right p-3 text-slate-400 font-medium">
                        PTS Adoption Increase
                      </th>
                      <th className="text-right p-3 text-slate-400 font-medium">
                        Incremental Buyers
                      </th>
                      <th className="text-right p-3 text-slate-400 font-medium">
                        Revenue Impact
                      </th>
                      <th className="text-right p-3 text-slate-400 font-medium">
                        ROI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-3 text-slate-300">Conservative</td>
                      <td className="p-3 text-right text-slate-300">
                        +3% (15% → 18%)
                      </td>
                      <td className="p-3 text-right text-slate-300">1,500</td>
                      <td className="p-3 text-right text-green-400">€4.5M</td>
                      <td className="p-3 text-right text-green-400 font-medium">
                        700%
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700/50 bg-slate-800/30">
                      <td className="p-3 text-slate-300 font-medium">
                        Base Case
                      </td>
                      <td className="p-3 text-right text-slate-300 font-medium">
                        +5% (15% → 20%)
                      </td>
                      <td className="p-3 text-right text-slate-300 font-medium">
                        2,500
                      </td>
                      <td className="p-3 text-right text-green-400 font-medium">
                        €7.5M
                      </td>
                      <td className="p-3 text-right text-green-400 font-medium">
                        1,227%
                      </td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="p-3 text-slate-300">Optimistic</td>
                      <td className="p-3 text-right text-slate-300">
                        +7% (15% → 22%)
                      </td>
                      <td className="p-3 text-right text-slate-300">3,500</td>
                      <td className="p-3 text-right text-green-400">€10.5M</td>
                      <td className="p-3 text-right text-green-400 font-medium">
                        1,760%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Even in the most conservative scenario (+3% adoption), the
                investment delivers 700% ROI in Year 1. The project is
                financially viable across a wide range of outcomes.
              </p>
            </div>
          </div>
        )}
        {/* PRICING & ROI TAB - NEW! */}
        {activeTab === "pricing" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Pricing Tiers & ROI Analysis
              </h2>
              <p className="text-slate-400 mb-8">
                Three deployment options tailored to Porsche's risk tolerance
                and ambition level
              </p>
            </div>

            {/* Tier Selector */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(pricingTiers).map(([key, tier]) => {
                const Icon = tier.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPricingTier(key)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedPricingTier === key
                        ? `border-white ${tier.color} shadow-lg scale-105`
                        : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8" />
                      <span className="text-xs px-2 py-1 bg-white/10 rounded">
                        {tier.timeline}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{tier.name}</h3>
                    <div className="text-2xl font-light mb-1">
                      {tier.setupFeeEUR}
                    </div>
                    <div className="text-sm opacity-75">
                      + {tier.monthlyEUR}/mo
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Tier Details */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    {currentTier.name}
                  </h3>
                  <p className="text-slate-400">{currentTier.positioning}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light text-green-400 mb-1">
                    {currentROI.roi}
                  </div>
                  <div className="text-sm text-slate-400">Year 1 ROI</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Investment</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                      <span className="text-slate-300">
                        Setup Fee (One-Time)
                      </span>
                      <span className="font-medium">
                        {currentTier.setupFeeEUR}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                      <span className="text-slate-300">Monthly Operations</span>
                      <span className="font-medium">
                        {currentTier.monthlyEUR}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900/20 rounded border border-green-700/50">
                      <span className="text-slate-300 font-medium">
                        Year 1 Total
                      </span>
                      <span className="font-medium text-lg text-green-400">
                        {currentTier.year1TotalEUR}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4">Returns</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                      <span className="text-slate-300">Incremental Buyers</span>
                      <span className="font-medium">
                        +{currentROI.incrementalBuyers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-900/50 rounded">
                      <span className="text-slate-300">Avg PTS Premium</span>
                      <span className="font-medium">€3,000</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-900/20 rounded border border-green-700/50">
                      <span className="text-slate-300 font-medium">
                        Incremental Revenue
                      </span>
                      <span className="font-medium text-lg text-green-400">
                        €{(currentROI.incrementalRevenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-900/50 rounded">
                  <div className="text-2xl font-light mb-1">
                    {currentROI.breakEven}
                  </div>
                  <div className="text-xs text-slate-400">Break-Even</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded">
                  <div className="text-2xl font-light mb-1">
                    {currentROI.costPerConversion}
                  </div>
                  <div className="text-xs text-slate-400">Cost/Conversion</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded">
                  <div className="text-2xl font-light mb-1">
                    {currentROI.revenuePerEuroSpent}
                  </div>
                  <div className="text-xs text-slate-400">Revenue per €1</div>
                </div>
                <div className="text-center p-4 bg-green-900/20 rounded border border-green-700/50">
                  <div className="text-2xl font-light mb-1 text-green-400">
                    {currentROI.roi}
                  </div>
                  <div className="text-xs text-slate-400">Total ROI</div>
                </div>
              </div>
            </div>

            {/* Scope Comparison */}
            <div>
              <h3 className="text-2xl font-light mb-6">What's Included</h3>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="space-y-4">
                  {currentTier.scope.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Best For / Limitations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                <h4 className="font-medium text-green-300 mb-4">Best For</h4>
                <div className="space-y-2">
                  {currentTier.bestFor.map((item, index) => (
                    <div key={index} className="text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {currentTier.limitations && (
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-6">
                  <h4 className="font-medium text-amber-300 mb-4">
                    Considerations
                  </h4>
                  <div className="space-y-2">
                    {currentTier.limitations.map((item, index) => (
                      <div key={index} className="text-sm text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Recommendation */}
            <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-xl p-8 border border-blue-700/50">
              <h3 className="text-2xl font-light mb-4">
                💡 Our Recommendation: Start with Tier 1
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <strong className="text-white">Why Tier 1 First:</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Lower Risk:</strong> Validate ROI with £55K vs
                        £150K+
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Speed:</strong> 4-6 weeks vs 3-4 months
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Proven Path:</strong> Expedia started with MVP
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Upsell Ready:</strong> Natural path to Tier 2/3
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>ROI:</strong> Still delivers 7,532% Year 1
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Competitive:</strong> First-mover advantage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EXPEDIA BENCHMARKS TAB - NEW! */}
        {activeTab === "expedia" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Expedia Performance Benchmarks
              </h2>
              <p className="text-slate-400 mb-8">
                Real-world metrics from Expedia's Custom GPT implementation -
                the industry gold standard
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {/* Engagement Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-blue-300 mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Engagement
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Avg Conversation
                    </div>
                    <div className="text-2xl font-light">
                      {expediaBenchmarks.engagement.avgConversationLength}
                    </div>
                    <div className="text-xs text-slate-500">turns</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Session Duration
                    </div>
                    <div className="text-2xl font-light">
                      {expediaBenchmarks.engagement.sessionDuration}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Return Users
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.engagement.returnUserRate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Accuracy Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-green-300 mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Accuracy
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Response Accuracy
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.accuracy.responseAccuracy}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Intent Detection
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.accuracy.intentDetection}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Hallucination Rate
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.accuracy.hallucinationRate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-purple-300 mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Conversion
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      GPT → Platform
                    </div>
                    <div className="text-2xl font-light text-purple-400">
                      {expediaBenchmarks.conversion.gptToPlatformHandoff}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Platform CVR
                    </div>
                    <div className="text-2xl font-light text-purple-400">
                      {expediaBenchmarks.conversion.platformConversion}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Overall CVR
                    </div>
                    <div className="text-2xl font-light text-purple-400">
                      {expediaBenchmarks.conversion.overallCVR}
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-amber-300 mb-4 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Safety
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Content Filter
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.safety.contentFilterRate}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      Injection Block
                    </div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.safety.promptInjectionBlock}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">GDPR</div>
                    <div className="text-2xl font-light text-green-400">
                      {expediaBenchmarks.safety.privacyCompliance}
                    </div>
                  </div>
                </div>
              </div>

              {/* Retention Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-sm font-medium text-rose-300 mb-4 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Retention
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      7-Day Retention
                    </div>
                    <div className="text-2xl font-light text-rose-400">
                      {expediaBenchmarks.retention.day7Retention}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">
                      30-Day Retention
                    </div>
                    <div className="text-2xl font-light text-rose-400">
                      {expediaBenchmarks.retention.day30Retention}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">CSAT</div>
                    <div className="text-2xl font-light text-rose-400">
                      {expediaBenchmarks.retention.customerSatisfaction}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-700/50">
              <h3 className="text-2xl font-light mb-6">
                🎯 Key Insights for Porsche
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-blue-300 mb-4">
                    What Expedia Did Right
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">
                          Real-time data integration:
                        </strong>
                        <p className="text-sm text-slate-300 mt-1">
                          Not just information - actual booking capabilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">
                          Seamless handoff:
                        </strong>
                        <p className="text-sm text-slate-300 mt-1">
                          42% of users transition from GPT to platform
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">
                          100% share of voice:
                        </strong>
                        <p className="text-sm text-slate-300 mt-1">
                          Went from zero visibility to dominant presence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-4">
                    How We Apply This to Porsche
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">
                          Enable action, not just info:
                        </strong>
                        <p className="text-sm text-slate-300 mt-1">
                          Direct link to configurator, not just color
                          descriptions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">
                          Track everything:
                        </strong>
                        <p className="text-sm text-slate-300 mt-1">
                          Every conversation = data on customer preferences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white">Speed to market:</strong>
                        <p className="text-sm text-slate-300 mt-1">
                          BMW/Mercedes will copy if Porsche waits too long
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PARTNERSHIP MODEL TAB */}
        {activeTab === "partnership" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">Partnership Model</h2>
              <p className="text-slate-400 mb-8">
                Three-phase journey from project collaboration to SaaS platform
                company
              </p>
            </div>

            {/* Phase Selector */}
            <div className="flex gap-4 mb-8">
              {[
                { id: 0, label: "Phase 1: Project", color: "bg-green-600" },
                { id: 1, label: "Phase 2: Agency", color: "bg-blue-600" },
                {
                  id: 2,
                  label: "Phase 3: SaaS Platform",
                  color: "bg-purple-600",
                },
              ].map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    selectedPhase === phase.id
                      ? `${phase.color} border-white shadow-lg`
                      : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                  }`}
                >
                  <div className="font-medium">{phase.label}</div>
                </button>
              ))}
            </div>

            {/* Phase 1: Project Mode */}
            {selectedPhase === 0 && (
              <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8">
                  <h3 className="text-2xl font-light mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    Phase 1: Project Mode (Dec 2024 - Jan 2025)
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Test working relationship and market demand with Porsche
                    pilot project
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-300 mb-4">
                        Structure
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Relationship:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Project-based collaboration, no equity
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Compensation:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              50/50 profit split after costs (€28K-31K each)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Timeline:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              8 weeks (Dec 1 - Jan 31)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Commitment:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Ahmed: 30-35 hrs/week | Francesca: Sales & PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-green-300 mb-4">
                        Success Criteria
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Target className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Delivery:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Porsche Tier 1 delivered on time, to spec
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Client Satisfaction:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Porsche happy enough to recommend us
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Working Relationship:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Good communication, mutual respect, aligned goals
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Pipeline:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              2-3 additional prospects identified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">
                          Phase 1 Revenue
                        </div>
                        <div className="text-2xl font-light text-green-400">
                          €86,580 - €98,280
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400 mb-1">
                          Each Partner
                        </div>
                        <div className="text-xl font-light">€28K - €31K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phase 2: Agency Mode */}
            {selectedPhase === 1 && (
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-8">
                  <h3 className="text-2xl font-light mb-4 flex items-center">
                    <Briefcase className="w-6 h-6 mr-3" />
                    Phase 2: Full-Time Agency (Feb 2025 - Dec 2025)
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Scale to 10-20 luxury brand clients with dedicated agency
                    team
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-300 mb-4">
                        Structure
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Relationship:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Formal partnership with equity
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Equity Split:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Francesca 51% | Ahmed 49%
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Compensation:
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              £60-80K salary + profit share/dividends
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Timeline:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              12 months (Feb 2025 - Jan 2026)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">Commitment:</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Both full-time (40+ hours/week)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-blue-300 mb-4">
                        Team & Roles
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="font-medium text-white mb-1">
                            Francesca - CEO/Co-Founder
                          </div>
                          <div className="text-sm text-slate-300">
                            Sales, BD, client relationships, strategy
                          </div>
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="font-medium text-white mb-1">
                            Ahmed - CTO/Co-Founder
                          </div>
                          <div className="text-sm text-slate-300">
                            Product development, technical delivery,
                            architecture
                          </div>
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="font-medium text-white mb-1">
                            Backend Developer (Contract)
                          </div>
                          <div className="text-sm text-slate-300">
                            Part-time support for technical delivery
                          </div>
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="font-medium text-white mb-1">
                            UI/UX Designer (Contract)
                          </div>
                          <div className="text-sm text-slate-300">
                            As-needed for client projects
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">
                        Target Clients
                      </div>
                      <div className="text-2xl font-light text-blue-400">
                        10-20
                      </div>
                      <div className="text-xs text-slate-500">
                        Luxury brands
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">
                        ARR Target
                      </div>
                      <div className="text-2xl font-light text-blue-400">
                        £500K
                      </div>
                      <div className="text-xs text-slate-500">
                        Annual recurring revenue
                      </div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">
                        Team Size
                      </div>
                      <div className="text-2xl font-light text-blue-400">
                        4-6
                      </div>
                      <div className="text-xs text-slate-500">
                        2 full-time, 2-4 contractors
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h4 className="font-medium mb-4">Phase 2 Success Criteria</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>£500K ARR</strong>
                        <p className="text-sm text-slate-400">
                          10-20 active clients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Profitable Operations</strong>
                        <p className="text-sm text-slate-400">
                          Sustainable salaries for both
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Repeatable Process</strong>
                        <p className="text-sm text-slate-400">
                          Standardized delivery framework
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Case Studies</strong>
                        <p className="text-sm text-slate-400">
                          3-5 referenceable clients
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phase 3: SaaS Platform */}
            {selectedPhase === 2 && (
              <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl p-8">
                  <h3 className="text-2xl font-light mb-4 flex items-center">
                    <Building className="w-6 h-6 mr-3" />
                    Phase 3: SaaS Platform (2026+)
                  </h3>
                  <p className="text-slate-300 mb-6">
                    White-label platform enabling marketing agencies to deliver
                    AI visibility at scale
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-300 mb-4">
                        Platform Vision
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Multi-Tenant SaaS
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              One platform, 500+ agency customers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">White-Label</strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Agencies brand it as their own solution
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              No-Code Builder
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              Agencies create Custom GPTs without developers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-white">
                              Subscription Model
                            </strong>
                            <p className="text-sm text-slate-300 mt-1">
                              £497-£2,997/month per agency
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-purple-300 mb-4">
                        Monetization
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-white">
                              Starter Tier
                            </div>
                            <div className="text-purple-400 font-medium">
                              £497/mo
                            </div>
                          </div>
                          <div className="text-xs text-slate-400">
                            1 brand, 1K conversations/month
                          </div>
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-white">
                              Professional
                            </div>
                            <div className="text-purple-400 font-medium">
                              £997/mo
                            </div>
                          </div>
                          <div className="text-xs text-slate-400">
                            5 brands, 10K conversations/month
                          </div>
                        </div>
                        <div className="p-3 bg-purple-900/30 rounded border border-purple-700/50">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-white">
                              Enterprise
                            </div>
                            <div className="text-purple-400 font-medium">
                              £2,997/mo
                            </div>
                          </div>
                          <div className="text-xs text-slate-400">
                            Unlimited brands, 100K conversations/month
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Projections */}
                  <div className="mt-6">
                    <h4 className="font-medium text-purple-300 mb-4">
                      Revenue Projections
                    </h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="p-4 bg-slate-900/50 rounded-lg">
                        <div className="text-sm text-slate-400 mb-1">
                          Month 12
                        </div>
                        <div className="text-2xl font-light text-purple-400">
                          £120K
                        </div>
                        <div className="text-xs text-slate-500">
                          10 agencies @ £997/mo
                        </div>
                      </div>
                      <div className="p-4 bg-slate-900/50 rounded-lg">
                        <div className="text-sm text-slate-400 mb-1">
                          Month 18
                        </div>
                        <div className="text-2xl font-light text-purple-400">
                          £598K
                        </div>
                        <div className="text-xs text-slate-500">
                          50 agencies
                        </div>
                      </div>
                      <div className="p-4 bg-slate-900/50 rounded-lg">
                        <div className="text-sm text-slate-400 mb-1">
                          Month 24
                        </div>
                        <div className="text-2xl font-light text-purple-400">
                          £2.25M
                        </div>
                        <div className="text-xs text-slate-500">
                          150 agencies (mixed tiers)
                        </div>
                      </div>
                      <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-700/50">
                        <div className="text-sm text-slate-400 mb-1">
                          Year 3
                        </div>
                        <div className="text-2xl font-light text-purple-400">
                          £10M+
                        </div>
                        <div className="text-xs text-slate-500">Target ARR</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Features */}
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h4 className="font-medium mb-4">Platform Features</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-sm font-medium text-purple-300 mb-3">
                        For Marketing Agencies
                      </h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-brand management dashboard
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          White-label branding (logo, colors, domain)
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Client onboarding workflows
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Usage analytics and reporting
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Subscription billing management
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-purple-300 mb-3">
                        For End Brands
                      </h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Custom GPT deployment automation
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          No-code conversation designer
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Brand asset management
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Performance dashboards
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          CRM/e-commerce integrations
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-purple-300 mb-3">
                        Technical Platform
                      </h5>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-tenant architecture
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          Auto-scaling infrastructure
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          99.9% SLA uptime
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          GDPR/SOC2 compliance
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          API marketplace for extensions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Required */}
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-700/50">
                  <h4 className="font-medium text-purple-300 mb-4">
                    Investment & Timeline
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-light mb-1 text-purple-400">
                        £254K
                      </div>
                      <div className="text-sm text-slate-400">
                        Development Cost
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light mb-1 text-purple-400">
                        8 weeks
                      </div>
                      <div className="text-sm text-slate-400">
                        Build Timeline
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light mb-1 text-purple-400">
                        Month 16
                      </div>
                      <div className="text-sm text-slate-400">
                        Break-Even Point
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Partnership Principles */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-light mb-6">
                Partnership Principles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-blue-300 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Working Together
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">Win-Win Mentality</strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Fair value exchange, transparent pricing, client success
                        = our success
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">Long-Term Thinking</strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Building sustainable advantages, quality over quick wins
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">
                        Complementary Strengths
                      </strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Francesca: Strategy, sales | Ahmed: Technical, product
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-green-300 mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Commitments
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">
                        Transparent Communication
                      </strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Weekly updates, honest about blockers, no surprises
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">
                        Mutual Accountability
                      </strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Both deliver on commitments, own our domains
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded">
                      <strong className="text-white">Quarterly Reviews</strong>
                      <p className="text-sm text-slate-400 mt-1">
                        Regular check-ins on metrics, goals, and working
                        relationship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 bg-slate-900/50 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Porsche PTS Concierge • Complete Client Proposal
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div>Two-Platform Strategy</div>
              <div>•</div>
              <div>3 Pricing Tiers</div>
              <div>•</div>
              <div className="text-green-400 font-medium">
                ROI: 2,166% - 7,532%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePTSVisualizer;
