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
  X,
} from "lucide-react";

const ComprehensivePTSVisualizer = () => {
  const [activeTab, setActiveTab] = useState("proposal");
  const [selectedJourney, setSelectedJourney] = useState(
    "Heritage Discovery Journey"
  );
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedArchOption, setSelectedArchOption] = useState("bff");
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState("custom-gpt");

  const journeys = {
    "Heritage Discovery Journey": {
      color: "bg-amber-600",
      phase: 1,
      complexity: "Low-Medium",
      duration: "8-12 turns, 6-10 min",
      targetUsers: "Enthusiast buyers, first-time PTS customers",
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
    costPerConversion: "€0.70",
    revenuePerEuroSpent: "€4,285",
    assumptions: [
      "50,000 annual configurator visitors",
      "15% → 20% PTS adoption (+5%)",
      "2,500 incremental buyers × €3,000 avg premium",
      "10,000 conversations/month at scale",
    ],
  };

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
                Porsche PTS Concierge
              </h1>
              <p className="text-slate-400 text-lg">
                AI Visibility Proposal: Custom GPT + Conversational Platform
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-green-400">
                {roiMetrics.roi} ROI
              </div>
              <div className="text-sm text-slate-400">Year 1 Projected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-slate-700 bg-slate-900/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "proposal", label: "Executive Proposal", icon: Target },
              { id: "funnel", label: "AI Visibility Funnel", icon: GitBranch },
              { id: "data-tracking", label: "Data & Metrics", icon: BarChart3 },
              { id: "user-experience", label: "User Experience", icon: Users },
              { id: "architecture", label: "Architecture", icon: Database },
              { id: "phases", label: "Implementation", icon: TrendingUp },
              { id: "roi", label: "Business Case", icon: DollarSign },
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
                <div className="text-4xl font-light mb-2 text-amber-400">
                  {roiMetrics.revenuePerEuroSpent}
                </div>
                <div className="text-sm text-slate-300 mb-1">
                  Revenue per €1 Spent
                </div>
                <div className="text-xs text-slate-400">
                  At scale (10K convos/mo)
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
                    Cost per PTS conversion
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    At 10K conversations/month, 20% conversion
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
                <div className="text-center">
                  <div className="text-4xl font-light mb-2 text-purple-400">
                    {roiMetrics.revenuePerEuroSpent}
                  </div>
                  <div className="text-sm text-slate-300">
                    Revenue per €1 invested
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    At steady state
                  </div>
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
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 bg-slate-900/50 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Porsche PTS Concierge • AI Visibility Proposal: Custom GPT +
              Conversational Platform
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div>Two-Platform Strategy</div>
              <div>•</div>
              <div>5 Journeys • 30 Steps</div>
              <div>•</div>
              <div className="text-green-400 font-medium">
                1,227% ROI Year 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePTSVisualizer;
