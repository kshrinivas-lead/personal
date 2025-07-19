"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  CpuChipIcon, 
  LightBulbIcon, 
  BoltIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BuildingLibraryIcon,
  ArrowPathIcon,
  BeakerIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/outline";

const frameworkPrinciples = [
  {
    title: "Abstraction as Foundation",
    description: "Every complex system begins with clear abstraction layers that hide complexity while exposing essential interfaces",
    icon: <CubeTransparentIcon className="w-8 h-8" />,
    principle: "Simplify the complex, expose the essential"
  },
  {
    title: "Modular Architecture",
    description: "Independent, interchangeable components that compose into powerful, integrated solutions",
    icon: <PuzzlePieceIcon className="w-8 h-8" />,
    principle: "Build once, compose infinitely"
  },
  {
    title: "Adaptive Intelligence",
    description: "Systems that evolve and learn from interactions while maintaining consistent behavioral patterns",
    icon: <ArrowPathIcon className="w-8 h-8" />,
    principle: "Constant learning, stable foundation"
  },
  {
    title: "Strategic Scalability",
    description: "Frameworks designed to grow from proof-of-concept to enterprise-scale deployments",
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    principle: "Start small, scale intelligently"
  }
];

const aiFrameworkAreas = [
  {
    area: "Agentic AI Systems",
    description: "Autonomous intelligent agents that understand context, make decisions, and execute complex multi-step processes",
    capabilities: [
      "Intelligent task decomposition and execution",
      "Context-aware decision making frameworks",
      "Multi-agent coordination and collaboration",
      "Adaptive behavior modification systems"
    ],
    icon: <CpuChipIcon className="w-6 h-6" />,
    impact: "Transforms static processes into dynamic, intelligent workflows"
  },
  {
    area: "Conversational Automation",
    description: "Sophisticated dialogue systems that understand intent, maintain context, and deliver personalized experiences",
    capabilities: [
      "Natural language understanding and generation",
      "Context persistence across interactions",
      "Dynamic response adaptation",
      "Multi-channel conversation orchestration"
    ],
    icon: <BoltIcon className="w-6 h-6" />,
    impact: "Enables human-like interactions at machine scale"
  },
  {
    area: "AI Action Orchestration",
    description: "Frameworks for composing and managing complex AI workflows with seamless integration points",
    capabilities: [
      "Visual workflow composition tools",
      "Intelligent process optimization",
      "Real-time performance monitoring",
      "Flexible integration architectures"
    ],
    icon: <Cog6ToothIcon className="w-6 h-6" />,
    impact: "Democratizes AI development through abstraction"
  },
  {
    area: "Knowledge Integration",
    description: "Systems that intelligently process, synthesize, and apply domain-specific knowledge at scale",
    capabilities: [
      "Dynamic knowledge graph construction",
      "Semantic understanding and reasoning",
      "Continuous learning pipelines",
      "Context-aware information retrieval"
    ],
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
    impact: "Transforms data into actionable intelligence"
  }
];

const strategicApproach = [
  {
    phase: "Strategic Foundation",
    description: "Establishing clear vision, objectives, and success metrics aligned with business outcomes",
    activities: [
      "AI readiness assessment and gap analysis",
      "Strategic roadmap development",
      "Technology stack evaluation",
      "Risk and compliance framework design"
    ],
    outcome: "Clear path from current state to AI-enabled future"
  },
  {
    phase: "Framework Design",
    description: "Creating modular, scalable architectures that support iterative development and deployment",
    activities: [
      "Abstraction layer definition",
      "Component interface specification", 
      "Integration pattern establishment",
      "Performance and scalability planning"
    ],
    outcome: "Robust foundation for sustainable AI development"
  },
  {
    phase: "Intelligent Implementation",
    description: "Systematic development and deployment of AI capabilities with continuous optimization",
    activities: [
      "Agile development methodology",
      "Continuous integration and testing",
      "Performance monitoring and optimization",
      "User feedback integration loops"
    ],
    outcome: "Production-ready AI systems that deliver measurable value"
  }
];

const successMetrics = [
  { metric: "Framework Reusability", value: "80%+", description: "Components designed for cross-project utilization" },
  { metric: "Development Velocity", value: "3x Faster", description: "Accelerated delivery through abstraction" },
  { metric: "System Reliability", value: "99.9%", description: "Enterprise-grade stability and performance" },
  { metric: "Business Impact", value: "ROI in 6mo", description: "Measurable value delivery timeline" }
];

export default function AIStrategyPage() {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();

  return (
    <>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-6">
              Strategic AI Leadership & Innovation
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl xl:text-2xl mb-8 max-w-4xl mx-auto">
              Building intelligent frameworks that transform complexity into elegant, scalable solutions. 
              Where strategic vision meets architectural excellence through the power of abstraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("AI Strategy Consultation")}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <LightBulbIcon className="w-5 h-5 mr-2" />
                Strategic AI Consultation
              </button>
              <button
                onClick={() => openPopup("Framework Architecture Discussion")}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#d97706] border-2 border-[#d97706] rounded-lg hover:bg-[#d97706] hover:text-white transition-all duration-300"
              >
                <BeakerIcon className="w-5 h-5 mr-2" />
                Framework Design Session
              </button>
            </div>
          </div>

          {/* Framework Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Core Framework Principles</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              The foundational concepts that drive every successful AI framework - rooted in abstraction and designed for scale
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frameworkPrinciples.map((principle, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] hover:shadow-lg transition-all duration-300">
                  <div className="text-[#d97706] mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{principle.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-[#d97706] italic">"{principle.principle}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Framework Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">AI Framework Specializations</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Proven expertise in building sophisticated AI systems that solve complex business challenges
            </p>
            <div className="space-y-8">
              {aiFrameworkAreas.map((area, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d97706] hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <div className="text-[#d97706] mr-3">
                          {area.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{area.area}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-[#d97706] rounded-full mr-3"></div>
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-1/3 mt-6 lg:mt-0">
                      <div className="bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Business Impact</h4>
                        <p className="text-sm opacity-90">{area.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Strategic Implementation Approach</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A systematic methodology for transforming AI vision into production-ready frameworks
            </p>
            <div className="space-y-6">
              {strategicApproach.map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-lg flex items-center justify-center font-bold text-lg mr-6 mb-4 lg:mb-0">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {phase.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="text-sm text-gray-700 flex items-center">
                          <ShieldCheckIcon className="w-4 h-4 text-[#d97706] mr-2" />
                          {activity}
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-[#d97706]">
                      <p className="text-sm font-medium text-gray-800">
                        <span className="text-[#d97706]">Outcome:</span> {phase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Proven Framework Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] transition-colors duration-300">
                  <div className="text-3xl font-bold text-[#d97706] mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.metric}</h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Strategy?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss how abstraction-driven frameworks can accelerate your AI initiatives 
              and deliver sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("AI Strategy Deep Dive")}
                className="px-8 py-3 bg-white text-[#d97706] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule Strategy Session
              </button>
              <button
                onClick={() => openPopup("Framework Architecture Review")}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#d97706] transition-all duration-300"
              >
                Framework Architecture Review
              </button>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>📧 kshrinivas.lead@gmail.com | 📱 +91 98909 51119</p>
            </div>
          </div>
        </div>
      </Container>

      <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
}