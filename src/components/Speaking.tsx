"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  MicrophoneIcon, 
  AcademicCapIcon, 
  PresentationChartBarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CommandLineIcon
} from "@heroicons/react/24/solid";

const speakingTopics = [
  {
    title: "Artificial Intelligence",
    description: "Future of AI, ethical AI development, and AI-driven business transformation.",
    icon: <CpuChipIcon className="w-6 h-6" />,
  },
  {
    title: "Generative AI",
    description: "Practical GenAI implementation, prompt engineering, and AI-powered workflows.",
    icon: <CommandLineIcon className="w-6 h-6" />,
  },
  {
    title: "Software Engineering",
    description: "Modern development practices, clean architecture, and engineering excellence.",
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    title: "Software Architecture",
    description: "Scalable systems design, microservices, and platform engineering strategies.",
    icon: <PresentationChartBarIcon className="w-6 h-6" />,
  },
];

export const Speaking = () => {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();
  return (
    <>
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white mb-4">
            Book Me for Keynotes, Guest Lectures, or Panels
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            I deliver thoughtful, engaging presentations that bridge technical complexity with strategic clarity. 
            My sessions combine forward-thinking insights with practical, actionable guidance that audiences can immediately apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {speakingTopics.map((topic, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-lg text-white">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white rounded-lg p-8 mb-8">
            <MicrophoneIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Inspire Your Audience?</h3>
            <p className="text-lg mb-6 opacity-90">
              Engaging talks that bridge technical complexity with strategic business value.
            </p>
            <button
              onClick={() => openPopup("Speaking Engagement Request")}
              className="inline-flex items-center px-8 py-3 bg-white text-[#d97706] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <AcademicCapIcon className="w-5 h-5 mr-2" />
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </Container>
    
    <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
};