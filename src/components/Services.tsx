"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  LightBulbIcon, 
  CogIcon, 
  ChartBarIcon,
  UsersIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Help companies build strategy and execute AI-driven products with practical roadmaps and implementation guidance.",
    icon: <LightBulbIcon className="w-6 h-6" />,
  },
  {
    title: "GenAI System Design",
    description: "Consulting & advisory for AI adoption and GenAI systems, from proof-of-concept to production scale.",
    icon: <CogIcon className="w-6 h-6" />,
  },
  {
    title: "Workflow & Product Design",
    description: "Workflow & product design for AI-native applications that transform business operations.",
    icon: <ChartBarIcon className="w-6 h-6" />,
  },
  {
    title: "Platform Architecture",
    description: "Platform architecture and team mentoring for scalable, future-ready technology solutions.",
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
  },
];

export const Services = () => {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();
  return (
    <>
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I collaborate closely with teams to architect intelligent solutions that exceed expectations. My iterative approach ensures continuous refinement while maintaining strategic alignment and delivering measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#f59e0b] group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#78716c] to-[#57534e] rounded-lg text-white group-hover:from-[#f59e0b] group-hover:to-[#d97706] transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#78716c] to-[#57534e] text-white rounded-lg p-8">
            <RocketLaunchIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how AI and strategic technology can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Service Inquiry")}
                className="inline-flex items-center px-8 py-3 bg-[#f59e0b] text-white font-semibold rounded-lg hover:bg-[#d97706] transition-colors duration-300"
              >
                <UsersIcon className="w-5 h-5 mr-2" />
                Start a Conversation
              </button>
              <button
                onClick={() => openPopup("Speaking Engagement Request")}
                className="inline-flex items-center px-8 py-3 bg-white text-[#78716c] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <ChartBarIcon className="w-5 h-5 mr-2" />
                Book a Speaking Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
    
    <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
};