"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const contactMethods = [
  {
    title: "Email",
    value: "kshrinivas.lead@gmail.com",
    href: "mailto:kshrinivas.lead@gmail.com",
    icon: <EnvelopeIcon className="w-6 h-6" />,
    description: "Send me an email for detailed discussions"
  },
  {
    title: "Phone",
    value: "+91 98909 51119",
    href: "tel:+919890951119",
    icon: <PhoneIcon className="w-6 h-6" />,
    description: "Call for immediate consultation"
  },
  {
    title: "WhatsApp",
    value: "+91 98909 51119",
    href: "https://wa.me/919890951119",
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
    description: "Quick questions and scheduling"
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/kshrinivas2000/",
    icon: <UserGroupIcon className="w-6 h-6" />,
    description: "Professional networking and insights"
  }
];

const servicesOffered = [
  {
    title: "AI Strategy Consulting",
    description: "Transform your business with strategic AI implementation and roadmaps",
    icon: <BriefcaseIcon className="w-8 h-8" />
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation initiatives and technology modernization",
    icon: <GlobeAltIcon className="w-8 h-8" />
  },
  {
    title: "Speaking Engagements", 
    description: "Keynotes, panels, and workshops on AI, technology, and innovation",
    icon: <AcademicCapIcon className="w-8 h-8" />
  },
  {
    title: "Technical Leadership",
    description: "Software architecture, team building, and engineering excellence",
    icon: <UserGroupIcon className="w-8 h-8" />
  }
];

export default function ContactPage() {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();

  return (
    <>
      <Container>
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-6">
              Let's Shape the Future Together
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl xl:text-2xl mb-8 max-w-4xl mx-auto">
              Ready to unlock your organization's potential with strategic AI leadership and digital transformation? 
              I'm here to help you navigate the intersection of technology and business value.
            </p>
            <button
              onClick={() => openPopup("Strategic Consultation")}
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#d97706] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-[#d97706] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-[#d97706] font-medium mb-2">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - About & Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Strategic AI Leadership & Digital Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep expertise in artificial intelligence, software architecture, and digital transformation, 
                I help organizations navigate the complex landscape of modern technology. From GenAI implementation 
                to enterprise-scale system design, I bridge the gap between cutting-edge innovation and practical business value.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOffered.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                    <div className="text-[#d97706] mb-3">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Quick Contact Form */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <button
                  onClick={() => openPopup("Speaking Engagement Request")}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#d97706] hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <AcademicCapIcon className="w-5 h-5 text-[#d97706] mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-800">Speaking Engagement</h4>
                      <p className="text-sm text-gray-600">Book me for keynotes, panels, or workshops</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => openPopup("AI Strategy Consultation")}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#d97706] hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <BriefcaseIcon className="w-5 h-5 text-[#d97706] mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-800">AI Strategy Consulting</h4>
                      <p className="text-sm text-gray-600">Strategic AI implementation and roadmaps</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => openPopup("Digital Transformation")}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#d97706] hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <GlobeAltIcon className="w-5 h-5 text-[#d97706] mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-800">Digital Transformation</h4>
                      <p className="text-sm text-gray-600">Technology modernization and innovation</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => openPopup("Technical Leadership")}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-[#d97706] hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <UserGroupIcon className="w-5 h-5 text-[#d97706] mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-800">Technical Leadership</h4>
                      <p className="text-sm text-gray-600">Software architecture and engineering excellence</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Prefer direct contact?</h4>
                <div className="space-y-2">
                  <a 
                    href="mailto:kshrinivas.lead@gmail.com"
                    className="flex items-center text-[#d97706] hover:text-[#92400e] transition-colors duration-200"
                  >
                    <EnvelopeIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">kshrinivas.lead@gmail.com</span>
                  </a>
                  <a 
                    href="https://wa.me/919890951119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#d97706] hover:text-[#92400e] transition-colors duration-200"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">WhatsApp: +91 98909 51119</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kshrinivas2000/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#d97706] hover:text-[#92400e] transition-colors duration-200"
                  >
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="text-center bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how strategic AI leadership can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Strategic Partnership")}
                className="px-8 py-3 bg-white text-[#d97706] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Start the Conversation
              </button>
              <a
                href="https://wa.me/919890951119"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#d97706] transition-all duration-300"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </Container>

      <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
}