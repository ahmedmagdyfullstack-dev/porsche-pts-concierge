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
} from "lucide-react";

const ArchitectureVisualizer = () => {
  const [activeTab, setActiveTab] = useState("journeys");
  const [selectedJourney, setSelectedJourney] = useState(
    "Heritage Discovery Journey"
  );
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedArchOption, setSelectedArchOption] = useState("bff");
  const [selectedPhase, setSelectedPhase] = useState(0);

  const journeys = {
    "Heritage Discovery Journey": {
      color: "bg-amber-600",
      phase: 1,
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
            "Cache heavily",
            "Static content candidate",
            "CDN delivery",
          ],
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
            "Privacy considerations",
            "Profile building",
          ],
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
            "Recommendation engine",
            "Personalization logic",
            "A/B testing",
          ],
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
            "CDN critical",
            "Lazy loading",
            "Image optimization",
          ],
        },
        {
          name: "Alignment Check",
          keywords: ["predecision_alignment_check", "emotional_fit"],
          examples: ["Which feels more timeless?", "Which matches my style?"],
          apis: ["POST /v1/pts/evaluate-fit", "GET /v1/pts/colors/{id}/scores"],
          techConsiderations: [
            "ML scoring",
            "Profile matching",
            "Confidence metrics",
          ],
        },
        {
          name: "Confident Selection",
          keywords: ["select_color", "finalize_choice", "commit_color"],
          examples: [
            "Let's go with Rubystar Neo.",
            "Choose the best one for me.",
          ],
          apis: ["POST /v1/builds", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Transaction handling",
            "Dealer handover",
            "CRM integration",
          ],
        },
      ],
    },
    "Lifestyle-to-Colour Journey": {
      color: "bg-blue-600",
      phase: 2,
      steps: [
        {
          name: "Lifestyle Profiling",
          keywords: ["collect_lifestyle_data", "environment_profile"],
          examples: ["Mostly city driving.", "I park on the street."],
          apis: ["POST /v1/users/{id}/preferences/lifestyle"],
          techConsiderations: [
            "Profile enrichment",
            "Privacy compliance",
            "Data retention",
          ],
        },
        {
          name: "Design Language Translation",
          keywords: ["derive_design_persona", "style_classification"],
          examples: ["I like understated luxury.", "Not loud, quiet premium."],
          apis: ["POST /v1/personas/derive"],
          techConsiderations: [
            "NLP processing",
            "Persona taxonomy",
            "Confidence scoring",
          ],
        },
        {
          name: "Palette Formation",
          keywords: ["generate_palette", "persona_palette"],
          examples: ["What colour directions fit that?"],
          apis: ["GET /v1/pts/palettes", "POST /v1/pts/recommendations"],
          techConsiderations: [
            "Algorithm complexity",
            "Response time",
            "Caching strategy",
          ],
        },
        {
          name: "Surface & Material Simulation",
          keywords: ["model_surface_effect", "shape_color_interaction"],
          examples: ["How does this look on Taycan vs 911?"],
          apis: [
            "GET /v1/visuals/compare",
            "GET /v1/pts/colors/{id}/geometry-notes",
          ],
          techConsiderations: ["3D rendering", "Model assets", "Comparison UI"],
        },
        {
          name: "Ownership Horizon",
          keywords: ["resale_consideration", "long_term_appeal"],
          examples: ["Will this look good in 10 years?", "Good for resale?"],
          apis: ["GET /v1/pts/colors/{id}/resale-metrics"],
          techConsiderations: [
            "Historical data",
            "Predictive analytics",
            "Market research",
          ],
        },
        {
          name: "Refined Choice",
          keywords: ["single_recommendation", "best_fit_color"],
          examples: ["Pick the one colour for me."],
          apis: ["POST /v1/pts/recommendations/best", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Final recommendation logic",
            "Confidence thresholds",
          ],
        },
      ],
    },
    "Bespoke Atelier Journey": {
      color: "bg-purple-600",
      phase: 3,
      steps: [
        {
          name: "Inspiration Capture",
          keywords: ["custom_inspiration", "bespoke_color_start"],
          examples: ["Match my watch dial.", "Can it match my yacht hull?"],
          apis: ["POST /v1/pts-plus/inspirations"],
          techConsiderations: [
            "Image upload",
            "File validation",
            "Storage management",
          ],
        },
        {
          name: "Colour DNA Extraction",
          keywords: ["extract_color_profile", "tone_analysis"],
          examples: ["What undertones do you see?", "Is it blue-grey?"],
          apis: ["POST /v1/color-analysis/from-image"],
          techConsiderations: [
            "Computer vision",
            "Color space conversion",
            "Accuracy validation",
          ],
        },
        {
          name: "Feasibility Framing",
          keywords: ["feasibility_check", "material_compatibility"],
          examples: ["Is this possible?", "Any restrictions?"],
          apis: ["POST /v1/pts-plus/feasibility"],
          techConsiderations: [
            "Business rules engine",
            "Manufacturing constraints",
            "Approval workflow",
          ],
        },
        {
          name: "Colour Drafts",
          keywords: ["generate_color_variants", "draft_shades"],
          examples: ["Show a softer version.", "What about deeper?"],
          apis: [
            "POST /v1/pts-plus/variants",
            "GET /v1/pts-plus/variants/{id}/visuals",
          ],
          techConsiderations: [
            "Dynamic rendering",
            "Variant generation",
            "Preview quality",
          ],
        },
        {
          name: "Harmonisation Check",
          keywords: ["interior_exterior_match", "trim_harmony"],
          examples: ["Which interior fits?", "Best wheel finish?"],
          apis: ["POST /v1/pts-plus/harmony-check"],
          techConsiderations: [
            "Combination rules",
            "Visual compatibility",
            "Package constraints",
          ],
        },
        {
          name: "Finalisation",
          keywords: ["confirm_pts_plus", "commit_custom_colour"],
          examples: ["Let's go with variant 2.", "Confirm final shade."],
          apis: ["POST /v1/pts-plus/submit", "PATCH /v1/builds/{id}"],
          techConsiderations: [
            "Human approval workflow",
            "SLA tracking",
            "Status notifications",
          ],
        },
      ],
    },
    "Model-Specific Journey": {
      color: "bg-green-600",
      phase: 3,
      steps: [
        {
          name: "Model Selection",
          keywords: ["select_model", "set_model_context"],
          examples: [
            "I'm looking at a 911 GTS.",
            "Choosing Taycan vs Panamera.",
          ],
          apis: ["GET /v1/models", "POST /v1/users/{id}/current-model"],
          techConsiderations: [
            "Model catalog sync",
            "Availability by region",
            "MY updates",
          ],
        },
        {
          name: "Body Geometry Explanation",
          keywords: ["explain_geometry", "model_shape_effect"],
          examples: ["Why does colour look different on Taycan?"],
          apis: ["GET /v1/models/{id}/design-notes"],
          techConsiderations: [
            "Content management",
            "Designer input",
            "Educational content",
          ],
        },
        {
          name: "Model-Matched Palette",
          keywords: ["model_specific_palette", "color_match_for_model"],
          examples: ["Which PTS colours suit the 911?"],
          apis: ["GET /v1/pts/colors?modelId=911"],
          techConsiderations: [
            "Model-color compatibility matrix",
            "Factory constraints",
          ],
        },
        {
          name: "Trim & Package Integration",
          keywords: ["trim_package_match", "spec_integration"],
          examples: ["Does this clash with black trim?"],
          apis: ["GET /v1/packages?modelId=911", "POST /v1/pts/harmony-check"],
          techConsiderations: [
            "Complex business rules",
            "Visual clash detection",
            "Package data",
          ],
        },
        {
          name: "Scenario Comparison",
          keywords: ["compare_scenarios", "side_by_side_visual"],
          examples: ["Show this colour on Coupe vs Cabriolet."],
          apis: ["GET /v1/visuals/side-by-side"],
          techConsiderations: [
            "Comparison UI",
            "Asset management",
            "Performance optimization",
          ],
        },
        {
          name: "Final Recommendation",
          keywords: ["final_model_specific_choice"],
          examples: ["Pick what suits my 911 GTS."],
          apis: ["POST /v1/pts/recommendations/best"],
          techConsiderations: [
            "Context-aware recommendations",
            "Build sheet generation",
          ],
        },
      ],
    },
    "White-Glove Confidence Journey": {
      color: "bg-rose-600",
      phase: 2,
      steps: [
        {
          name: "Identify Uncertainty",
          keywords: ["uncertainty_detection", "confidence_probe"],
          examples: ["I'm scared to choose wrong.", "I keep changing my mind."],
          apis: ["POST /v1/diagnostics/uncertainty"],
          techConsiderations: [
            "Sentiment analysis",
            "Decision support triggers",
            "Empathy design",
          ],
        },
        {
          name: "Two-Path Contrast",
          keywords: ["contrast_paths", "subtle_vs_bold"],
          examples: ["Give me subtle vs bold options."],
          apis: ["POST /v1/pts/contrast-set"],
          techConsiderations: [
            "Contrast algorithm",
            "Spectrum analysis",
            "Clear differentiation",
          ],
        },
        {
          name: "Scenario Saturation",
          keywords: ["use_case_scenarios", "daily_vs_special"],
          examples: [
            "Which is better daily?",
            "Which is best for special occasions?",
          ],
          apis: ["GET /v1/pts/colors/{id}/scenario-notes"],
          techConsiderations: [
            "Scenario library",
            "Use case matching",
            "Practical guidance",
          ],
        },
        {
          name: "Maintenance & Practicality",
          keywords: ["maintenance_profile", "practicality_score"],
          examples: ["Which shows dirt more?", "Hard to clean?"],
          apis: ["GET /v1/pts/colors/{id}/maintenance-metrics"],
          techConsiderations: [
            "Real-world data",
            "Owner feedback",
            "Honesty in communication",
          ],
        },
        {
          name: "Emotional Reflection",
          keywords: ["emotional_projection", "self_image_alignment"],
          examples: ["Which feels more like me?"],
          apis: ["POST /v1/pts/emotional-fit"],
          techConsiderations: [
            "Psychology principles",
            "Identity alignment",
            "Brand values",
          ],
        },
        {
          name: "Confident Conclusion",
          keywords: ["final_confirm", "lock_in_decision"],
          examples: ["Choose for me.", "Lock this in."],
          apis: ["POST /v1/pts/recommendations/final"],
          techConsiderations: [
            "Decision finality",
            "Commitment support",
            "Follow-up plan",
          ],
        },
      ],
    },
  };

  const architectureOptions = {
    bff: {
      name: "Backend-for-Frontend (BFF)",
      icon: Database,
      description: "Middleware layer aggregating multiple services",
      pros: [
        "Clean separation",
        "Easy to modify",
        "Handles complexity",
        "Better caching",
      ],
      cons: [
        "Extra latency hop",
        "More infrastructure",
        "Additional maintenance",
      ],
      bestFor:
        "Multiple backend systems, complex data transformation, existing microservices",
      complexity: "Medium",
      timeline: "6-8 weeks",
    },
    direct: {
      name: "Direct Function Calling",
      icon: Zap,
      description: "GPT directly calls Porsche APIs",
      pros: [
        "Simpler architecture",
        "Lower latency",
        "Less code to maintain",
        "Faster iteration",
      ],
      cons: [
        "Less flexibility",
        "GPT exposes API patterns",
        "Harder rate limiting",
      ],
      bestFor: "Well-designed APIs, simple transformations, rapid MVP",
      complexity: "Low",
      timeline: "3-4 weeks",
    },
    agent: {
      name: "Agent Framework",
      icon: Globe,
      description: "Specialized agents with orchestration",
      pros: [
        "Most powerful",
        "Modular",
        "RAG integration",
        "Complex reasoning",
      ],
      cons: [
        "High complexity",
        "Harder debugging",
        "Longer dev time",
        "More expensive",
      ],
      bestFor:
        "Complex workflows, unstructured content, advanced AI capabilities",
      complexity: "High",
      timeline: "10-12 weeks",
    },
  };

  const phases = [
    {
      name: "Phase 0: Foundation",
      duration: "2 weeks",
      goal: "Validate technical assumptions",
      deliverables: [
        "Architecture decision document",
        "API inventory",
        "Risk register",
        "Environment setup",
      ],
      journeys: [],
      keyDecisions: [
        "LLM provider selection",
        "Hosting model",
        "Database choice",
        "Authentication approach",
      ],
    },
    {
      name: "Phase 1: MVP",
      duration: "4 weeks",
      goal: "Prove concept with single journey",
      deliverables: [
        "Heritage Discovery Journey",
        "Basic conversation service",
        "Session management",
        "Pre-rendered visuals",
      ],
      journeys: ["Heritage Discovery Journey"],
      keyDecisions: [
        "Hardcoded vs DB data",
        "Session persistence approach",
        "Analytics integration",
      ],
    },
    {
      name: "Phase 2: Production Core",
      duration: "6 weeks",
      goal: "Production-ready core journeys",
      deliverables: [
        "2 full journeys",
        "User accounts",
        "Dealer handover",
        "Full analytics",
        "PTS Service",
      ],
      journeys: [
        "Heritage Discovery Journey",
        "Lifestyle-to-Colour Journey",
        "White-Glove Confidence Journey",
      ],
      keyDecisions: [
        "Persona classification approach",
        "PDF generation method",
        "CRM integration",
      ],
    },
    {
      name: "Phase 3: Advanced Features",
      duration: "8 weeks",
      goal: "Differentiated capabilities",
      deliverables: [
        "All 5 journeys",
        "PTS Plus workflow",
        "ML persona model",
        "Multi-channel support",
      ],
      journeys: ["Bespoke Atelier Journey", "Model-Specific Journey"],
      keyDecisions: [
        "3D rendering approach",
        "Color analysis tech",
        "Mobile strategy",
      ],
    },
  ];

  const risks = [
    {
      risk: "LLM hallucination of unavailable colors",
      impact: "HIGH",
      likelihood: "MEDIUM",
      mitigation:
        "Strict function calling, validation layer, human review for PTS Plus",
      color: "text-red-400",
    },
    {
      risk: "API availability dependencies",
      impact: "HIGH",
      likelihood: "LOW",
      mitigation: "Circuit breakers, fallback responses, graceful degradation",
      color: "text-orange-400",
    },
    {
      risk: "Poor persona classification accuracy",
      impact: "MEDIUM",
      likelihood: "MEDIUM",
      mitigation: "Start rule-based, collect training data, iterate to ML",
      color: "text-yellow-400",
    },
    {
      risk: "Visualization latency",
      impact: "MEDIUM",
      likelihood: "MEDIUM",
      mitigation:
        "Aggressive CDN caching, lazy loading, progressive enhancement",
      color: "text-yellow-400",
    },
  ];

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
          <h1 className="text-4xl font-light mb-2 tracking-tight">
            Porsche PTS Concierge
          </h1>
          <p className="text-slate-400 text-lg">
            Technical Architecture & Implementation Guide
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-slate-700 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-1">
            {[
              { id: "journeys", label: "Conversational Journeys", icon: Globe },
              {
                id: "architecture",
                label: "Architecture Options",
                icon: Database,
              },
              {
                id: "phases",
                label: "Implementation Phases",
                icon: TrendingUp,
              },
              {
                id: "risks",
                label: "Risks & Mitigations",
                icon: AlertTriangle,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 flex items-center gap-2 border-b-2 transition-all ${
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
        {/* Journeys Tab */}
        {activeTab === "journeys" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                Multi-Step Conversational Journeys
              </h2>
              <p className="text-slate-400">
                Each journey represents a distinct customer intent with 6
                structured steps
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
                  <div className="text-xs text-center opacity-75">
                    Phase {journey.phase}
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
                  <h2 className="text-2xl font-light">{selectedJourney}</h2>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-400">
                    {currentJourney.steps.length} Steps
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${currentJourney.color}`}
                  >
                    Phase {currentJourney.phase}
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === "architecture" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                Architecture Pattern Selection
              </h2>
              <p className="text-slate-400">
                Choose based on existing infrastructure, complexity, and
                timeline requirements
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
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
                        <div className="flex gap-2">
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

            <div className="mt-8 bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
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
                    <li>• GDPR/CCPA compliance for PII</li>
                    <li>• Prompt injection prevention</li>
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
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-300 mb-2">
                    Scalability
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• Horizontal scaling for all services</li>
                    <li>• Auto-scaling policies defined</li>
                    <li>• Connection pooling & caching</li>
                    <li>• Async processing for heavy ops</li>
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
                    <li>• Critical error alerting</li>
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
                Start small, validate, iterate — build production capability
                incrementally
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
                      <div className="text-xs opacity-75">{phase.duration}</div>
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
                  <span>Duration: {phases[selectedPhase].duration}</span>
                  <span>•</span>
                  <span>Goal: {phases[selectedPhase].goal}</span>
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

              {selectedPhase === 1 && (
                <div className="mt-6 bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-300 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    MVP Success Criteria
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Journey completion rate &gt; 60%</li>
                    <li>• Average conversation turns &lt; 12</li>
                    <li>• Color selection made in &lt; 10 minutes</li>
                    <li>• User satisfaction &gt; 4.0/5.0</li>
                  </ul>
                </div>
              )}

              {selectedPhase === 2 && (
                <div className="mt-6 bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Production Readiness Metrics
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• 95% API availability SLA</li>
                    <li>• p95 response time &lt; 2s</li>
                    <li>• Zero color availability errors</li>
                    <li>• 20% increase in PTS consideration rate</li>
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
                <div className="text-2xl font-light mb-1">3-4 weeks</div>
                <div className="text-sm text-slate-400">
                  MVP ready for testing
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">5 journeys</div>
                <div className="text-sm text-slate-400">
                  Complete coverage by Phase 3
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <div className="text-2xl font-light mb-1">30+ APIs</div>
                <div className="text-sm text-slate-400">
                  Integration endpoints needed
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === "risks" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">
                Risk Assessment & Mitigation Strategy
              </h2>
              <p className="text-slate-400">
                Proactive identification of technical and business risks with
                concrete mitigation plans
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {risks.map((risk, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700 p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start flex-1">
                      <AlertTriangle
                        className={`w-5 h-5 ${risk.color} mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-2">
                          {risk.risk}
                        </h3>
                        <div className="flex gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              risk.impact === "HIGH"
                                ? "bg-red-900/50 text-red-300"
                                : "bg-yellow-900/50 text-yellow-300"
                            }`}
                          >
                            Impact: {risk.impact}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              risk.likelihood === "HIGH"
                                ? "bg-red-900/50 text-red-300"
                                : risk.likelihood === "MEDIUM"
                                ? "bg-yellow-900/50 text-yellow-300"
                                : "bg-green-900/50 text-green-300"
                            }`}
                          >
                            Likelihood: {risk.likelihood}
                          </span>
                        </div>
                        <div className="bg-slate-900/50 rounded p-3 border-l-2 border-blue-500">
                          <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                            Mitigation Strategy
                          </div>
                          <p className="text-sm text-slate-300">
                            {risk.mitigation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-light mb-4">
                Additional Considerations
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-blue-300 mb-3">
                    Discovery Phase Critical Questions
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded p-4">
                      <div className="text-sm font-medium text-slate-300 mb-2">
                        Infrastructure
                      </div>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• What is current configurator tech stack?</li>
                        <li>• Do existing APIs for vehicle config exist?</li>
                        <li>• Where does PTS color data currently live?</li>
                        <li>• What customer data systems exist (CRM, CDP)?</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded p-4">
                      <div className="text-sm font-medium text-slate-300 mb-2">
                        Business Operations
                      </div>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>
                          • What is current PTS Plus consultation process?
                        </li>
                        <li>
                          • How do dealers receive customer preference data?
                        </li>
                        <li>• What analytics platforms are in use?</li>
                        <li>• Any data residency/compliance restrictions?</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded p-4">
                      <div className="text-sm font-medium text-slate-300 mb-2">
                        Technical Capabilities
                      </div>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• Existing ML/AI platform or team?</li>
                        <li>• Current use of LLMs in production?</li>
                        <li>
                          • Preferred cloud infrastructure (AWS/Azure/GCP)?
                        </li>
                        <li>• Security certifications maintained?</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded p-4">
                      <div className="text-sm font-medium text-slate-300 mb-2">
                        Content & Assets
                      </div>
                      <ul className="space-y-1 text-xs text-slate-400">
                        <li>• How is PTS color data maintained/updated?</li>
                        <li>• Existing image/visual assets for colors?</li>
                        <li>• Heritage/storytelling content library?</li>
                        <li>• 3D model assets availability?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-blue-300 mb-3">
                    Success Metrics & KPIs
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded p-4 border border-blue-700/50">
                      <div className="text-sm font-medium text-blue-300 mb-2">
                        Primary Metrics
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        <li>• ↑ PTS configuration rate</li>
                        <li>• ↑ PTS Plus consultation requests</li>
                        <li>• ↓ Indecision cycles before selection</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded p-4 border border-green-700/50">
                      <div className="text-sm font-medium text-green-300 mb-2">
                        Secondary Metrics
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        <li>• ↑ Customer satisfaction (CSAT, NPS)</li>
                        <li>• ↑ Dealer conversion rates</li>
                        <li>• ↑ Time spent in engagement</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded p-4 border border-purple-700/50">
                      <div className="text-sm font-medium text-purple-300 mb-2">
                        Technical Metrics
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        <li>• API availability &gt; 99.5%</li>
                        <li>• Response time p95 &lt; 2s</li>
                        <li>• Zero availability errors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-blue-300 mb-3">Next Steps</h4>
                  <div className="bg-slate-900/50 rounded p-4">
                    <ol className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 font-medium mr-3">
                          1.
                        </span>
                        <div>
                          <div className="font-medium">
                            Schedule architecture review with Porsche
                            stakeholders
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            IT architecture, API platform, security/compliance,
                            Manufaktur business owner
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 font-medium mr-3">
                          2.
                        </span>
                        <div>
                          <div className="font-medium">
                            Send discovery questionnaire & request API
                            documentation
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            Configurator APIs, CRM APIs, color/vehicle data
                            APIs, sample data exports
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 font-medium mr-3">
                          3.
                        </span>
                        <div>
                          <div className="font-medium">
                            Make critical decisions (Week 2-3)
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            LLM provider, hosting model, MVP scope, team
                            composition
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 font-medium mr-3">
                          4.
                        </span>
                        <div>
                          <div className="font-medium">
                            Finalize technical design & begin Phase 1
                            implementation
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            Development environments, prompt engineering, API
                            integration layer
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureVisualizer;
