"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  CommandLineIcon,
  CubeTransparentIcon,
  Cog6ToothIcon,
  BoltIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  PuzzlePieceIcon,
  BuildingLibraryIcon,
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

const architecturalPillars = [
  {
    pillar: "Layered Abstraction",
    description: "Creating clear separation of concerns through well-defined abstraction layers that hide complexity while maintaining flexibility",
    principles: [
      "Interface-driven design patterns",
      "Dependency inversion and injection",
      "Clean architecture boundaries",
      "Protocol-based communication"
    ],
    icon: <CubeTransparentIcon className="w-8 h-8" />,
    benefit: "Reduces cognitive load, enables parallel development, simplifies maintenance"
  },
  {
    pillar: "Modular Composition",
    description: "Building systems from independent, reusable components that can be composed into complex solutions",
    principles: [
      "Single responsibility components",
      "Pluggable architecture patterns",
      "Event-driven communication",
      "Microservices orchestration"
    ],
    icon: <PuzzlePieceIcon className="w-8 h-8" />,
    benefit: "Enables rapid development, facilitates testing, supports distributed teams"
  },
  {
    pillar: "Intelligent Adaptation",
    description: "Systems that learn, evolve, and optimize themselves while maintaining architectural integrity",
    principles: [
      "Self-monitoring and metrics",
      "Adaptive configuration management",
      "Dynamic resource allocation",
      "Continuous optimization loops"
    ],
    icon: <ArrowPathIcon className="w-8 h-8" />,
    benefit: "Improves performance over time, reduces operational overhead, enhances reliability"
  },
  {
    pillar: "Scalable Foundation",
    description: "Architectures designed to grow seamlessly from prototype to enterprise-scale deployments",
    principles: [
      "Horizontal scaling patterns",
      "Stateless service design",
      "Distributed data management",
      "Performance monitoring frameworks"
    ],
    icon: <CloudIcon className="w-8 h-8" />,
    benefit: "Supports business growth, optimizes resource utilization, ensures consistent performance"
  }
];

const frameworkArchitectures = [
  {
    framework: "Agentic AI Architecture",
    description: "Distributed systems for autonomous agents with intelligent coordination and task execution capabilities",
    components: [
      {
        name: "Agent Registry & Discovery",
        role: "Dynamic agent lifecycle management and service discovery",
        technology: "Event-driven microservices with service mesh"
      },
      {
        name: "Task Orchestration Engine",
        role: "Intelligent workflow decomposition and execution coordination",
        technology: "State machine-based processing with async messaging"
      },
      {
        name: "Context Management Layer",
        role: "Persistent memory and contextual reasoning across interactions",
        technology: "Graph databases with vector embeddings"
      },
      {
        name: "Decision Framework",
        role: "Multi-criteria decision making with explainable reasoning",
        technology: "Rule engines combined with ML inference pipelines"
      }
    ],
    icon: <CpuChipIcon className="w-6 h-6" />,
    complexity: "Enterprise",
    scalability: "Distributed"
  },
  {
    framework: "Conversational Automation Platform",
    description: "Multi-channel dialogue systems with natural language understanding and dynamic response generation",
    components: [
      {
        name: "Natural Language Processing Hub",
        role: "Intent recognition, entity extraction, and semantic understanding",
        technology: "Transformer models with custom fine-tuning pipelines"
      },
      {
        name: "Dialogue Management Core",
        role: "Context-aware conversation flow and state management",
        technology: "Finite state machines with ML-enhanced transitions"
      },
      {
        name: "Response Generation Engine",
        role: "Dynamic, personalized response creation and optimization",
        technology: "Template engines with generative AI integration"
      },
      {
        name: "Channel Abstraction Layer",
        role: "Unified interface for multiple communication channels",
        technology: "Protocol adapters with message normalization"
      }
    ],
    icon: <BoltIcon className="w-6 h-6" />,
    complexity: "Advanced",
    scalability: "Horizontal"
  },
  {
    framework: "Integration & Orchestration Framework",
    description: "Flexible middleware for connecting disparate systems with intelligent data transformation and routing",
    components: [
      {
        name: "Protocol Translation Layer",
        role: "Seamless communication between different system interfaces",
        technology: "Plugin-based adapters with auto-discovery"
      },
      {
        name: "Data Transformation Engine",
        role: "Intelligent mapping and conversion between data formats",
        technology: "Schema-driven transformations with ML optimization"
      },
      {
        name: "Workflow Orchestration",
        role: "Visual process design with automated execution and monitoring",
        technology: "BPMN engines with custom activity libraries"
      },
      {
        name: "Security & Governance Layer",
        role: "Comprehensive security, compliance, and audit capabilities",
        technology: "Zero-trust architecture with policy enforcement"
      }
    ],
    icon: <Cog6ToothIcon className="w-6 h-6" />,
    complexity: "Moderate",
    scalability: "Elastic"
  }
];

const designPatterns = [
  {
    pattern: "Event-Driven Architecture",
    application: "Enabling loose coupling and real-time responsiveness",
    benefits: ["Decoupled components", "Real-time processing", "Scalable messaging"],
    useCase: "AI agent coordination and system integration"
  },
  {
    pattern: "CQRS + Event Sourcing",
    application: "Separating read/write operations with complete audit trails",
    benefits: ["Performance optimization", "Complete audit history", "Temporal queries"],
    useCase: "AI training data management and decision tracking"
  },
  {
    pattern: "Hexagonal Architecture",
    application: "Creating testable, adaptable systems with clear boundaries",
    benefits: ["Technology independence", "Easy testing", "Clear separation"],
    useCase: "Framework core logic isolation from external dependencies"
  },
  {
    pattern: "Circuit Breaker & Bulkhead",
    application: "Building resilient systems that gracefully handle failures",
    benefits: ["Fault isolation", "Graceful degradation", "System stability"],
    useCase: "AI service reliability and cascade failure prevention"
  }
];

const technicalExpertise = [
  {
    domain: "System Architecture",
    skills: ["Distributed Systems", "Microservices", "Event Sourcing", "CQRS", "Clean Architecture"],
    level: "Expert"
  },
  {
    domain: "AI/ML Engineering",
    skills: ["MLOps Pipelines", "Model Deployment", "Vector Databases", "LLM Integration", "AI Orchestration"],
    level: "Expert"
  },
  {
    domain: "Cloud & DevOps",
    skills: ["Kubernetes", "Docker", "CI/CD", "Infrastructure as Code", "Monitoring & Observability"],
    level: "Advanced"
  },
  {
    domain: "Data Architecture",
    skills: ["Data Pipelines", "Stream Processing", "Graph Databases", "Data Governance", "Real-time Analytics"],
    level: "Advanced"
  }
];

export default function ArchitecturePage() {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();

  return (
    <>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-6">
              Framework Architecture Excellence
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl xl:text-2xl mb-8 max-w-4xl mx-auto">
              Building sophisticated systems through the lens of abstraction. Where complex problems meet elegant solutions 
              through intelligent architectural patterns and modular design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Architecture Review")}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <CommandLineIcon className="w-5 h-5 mr-2" />
                Architecture Consultation
              </button>
              <button
                onClick={() => openPopup("System Design Session")}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#d97706] border-2 border-[#d97706] rounded-lg hover:bg-[#d97706] hover:text-white transition-all duration-300"
              >
                <BeakerIcon className="w-5 h-5 mr-2" />
                System Design Workshop
              </button>
            </div>
          </div>

          {/* Architectural Pillars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Architectural Pillars</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              The fundamental principles that guide every architectural decision - abstraction, modularity, adaptability, and scalability
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {architecturalPillars.map((pillar, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d97706] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-[#d97706] mr-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{pillar.pillar}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                  <div className="space-y-2 mb-6">
                    {pillar.principles.map((principle, pIndex) => (
                      <div key={pIndex} className="flex items-center text-sm text-gray-700">
                        <ShieldCheckIcon className="w-4 h-4 text-[#d97706] mr-3 flex-shrink-0" />
                        {principle}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefit</h4>
                    <p className="text-sm text-gray-700">{pillar.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Framework Architectures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Framework Architectures</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Production-proven architectural patterns for complex AI and automation systems
            </p>
            <div className="space-y-12">
              {frameworkArchitectures.map((framework, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#d97706] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-[#d97706] mr-4">
                      {framework.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{framework.framework}</h3>
                      <p className="text-gray-600">{framework.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Complexity: <span className="font-medium text-[#d97706]">{framework.complexity}</span></div>
                      <div className="text-sm text-gray-500">Scaling: <span className="font-medium text-[#d97706]">{framework.scalability}</span></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {framework.components.map((component, cIndex) => (
                      <div key={cIndex} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#d97706]">
                        <h4 className="font-semibold text-gray-800 mb-2">{component.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{component.role}</p>
                        <div className="bg-white rounded p-2">
                          <p className="text-xs text-gray-700"><span className="font-medium">Tech:</span> {component.technology}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Patterns */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Proven Design Patterns</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Battle-tested architectural patterns that solve complex system challenges
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designPatterns.map((pattern, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{pattern.pattern}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{pattern.application}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Benefits:</h4>
                    <div className="space-y-1">
                      {pattern.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center text-xs text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#d97706] rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700"><span className="font-medium">Use Case:</span> {pattern.useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Deep technical knowledge across the full stack of modern system architecture
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalExpertise.map((domain, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{domain.domain}</h3>
                    <span className="bg-[#d97706] text-white text-xs font-medium px-3 py-1 rounded-full">{domain.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.skills.map((skill, sIndex) => (
                      <span key={sIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200 hover:border-[#d97706] transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Extraordinary?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's architect systems that don't just solve today's problems, but create foundations 
              for tomorrow's innovations through intelligent abstraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Architecture Deep Dive")}
                className="px-8 py-3 bg-white text-[#d97706] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Architecture Review Session
              </button>
              <button
                onClick={() => openPopup("System Design Consultation")}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#d97706] transition-all duration-300"
              >
                System Design Consultation
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