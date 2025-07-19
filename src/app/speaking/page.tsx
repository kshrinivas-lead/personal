"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import { 
  MicrophoneIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  LightBulbIcon,
  CpuChipIcon,
  CommandLineIcon,
  PresentationChartBarIcon,
  StarIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { 
  StarIcon as StarIconSolid
} from "@heroicons/react/24/solid";

const speakingTopics = [
  {
    title: "Strategic AI Leadership",
    description: "Transforming organizations through purposeful AI strategy and intelligent system architecture",
    icon: <CpuChipIcon className="w-8 h-8" />,
    duration: "45-90 mins",
    audience: "C-Suite, Technology Leaders, Business Strategists",
    format: "Keynote, Workshop, Panel"
  },
  {
    title: "Critical Analytical Thinking",
    description: "Decision-making based on facts and data while minimizing personal biases",
    icon: <LightBulbIcon className="w-8 h-8" />,
    duration: "60-120 mins",
    audience: "MBA Students, Business Professionals, Teams",
    format: "Interactive Workshop, Guest Lecture"
  },
  {
    title: "Agile & Scrum Fundamentals",
    description: "Understanding the history, evolution, and practical application of Agile methodologies",
    icon: <CommandLineIcon className="w-8 h-8" />,
    duration: "90-150 mins",
    audience: "Tech Teams, Project Managers, Students",
    format: "Deep-dive Session, Training Workshop"
  },
  {
    title: "Digital Transformation Strategy",
    description: "Bridging technology innovation with strategic business outcomes",
    icon: <PresentationChartBarIcon className="w-8 h-8" />,
    duration: "45-75 mins",
    audience: "Business Leaders, IT Directors, Consultants",
    format: "Keynote, Executive Briefing, Conference Talk"
  },
  {
    title: "Generative AI Implementation",
    description: "Practical approaches to GenAI adoption from proof-of-concept to production scale",
    icon: <CpuChipIcon className="w-8 h-8" />,
    duration: "60-90 mins",
    audience: "Technology Teams, Product Managers, Executives",
    format: "Technical Workshop, Strategy Session"
  },
  {
    title: "Software Architecture Excellence",
    description: "Building scalable, resilient systems that drive business value",
    icon: <CommandLineIcon className="w-8 h-8" />,
    duration: "75-120 mins",
    audience: "Software Engineers, Architects, Tech Leads",
    format: "Technical Deep-dive, Masterclass"
  }
];

const sessionHighlights = [
  {
    title: "MBA Strategic Thinking Session",
    venue: "SICSR, Symbiosis International University, Pune",
    topic: "Critical Analytical Thinking & Strategy Formation",
    description: "An engaging 2.5-hour session with MBA students on decision-making based on facts and data, minimizing personal biases. Students showed remarkable engagement with continuous questions.",
    testimonial: "Worth attending! Great engaging session",
    audience: "MBA Students",
    impact: "High student engagement with 'hunger for knowledge was impeccable'"
  },
  {
    title: "Agile & Scrum Deep Dive",
    venue: "SICSR, Symbiosis International University, Pune",
    topic: "Agile Evolution, Values & Principles + Scrum Application",
    description: "Comprehensive session covering the history and purpose of Agile methodologies. Collaborated with Jon Kern (co-author of Agile Manifesto) for content preparation.",
    testimonial: "Knowledge to all, power to all!",
    audience: "Post-graduation Students (Future Tech & Business Leaders)",
    impact: "Students were so engaged, had to 'force a break' due to continuous questions"
  },
  {
    title: "Technology History & Fundamentals",
    venue: "Engineering Leadership Session",
    topic: "Understanding Technology History to Use It Wisely",
    description: "Deep exploration of why understanding technological history and purpose enables better decision-making and wiser application of tools and methodologies.",
    testimonial: "One needs to understand history to be able to use things better",
    audience: "Engineering Teams & Technology Leaders",
    impact: "Enhanced strategic thinking about technology adoption"
  }
];

const sessionFormats = [
  {
    format: "Keynote Presentations",
    duration: "30-60 minutes",
    description: "Inspiring talks that set the strategic vision and motivate action",
    icon: <MicrophoneIcon className="w-6 h-6" />
  },
  {
    format: "Interactive Workshops",
    duration: "90-180 minutes",
    description: "Hands-on sessions with practical exercises and real-world applications",
    icon: <UserGroupIcon className="w-6 h-6" />
  },
  {
    format: "Panel Discussions",
    duration: "45-90 minutes",
    description: "Expert discussions on industry trends and strategic insights",
    icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
  },
  {
    format: "Executive Briefings",
    duration: "60-90 minutes",
    description: "Strategic sessions for leadership teams and decision makers",
    icon: <PresentationChartBarIcon className="w-6 h-6" />
  }
];

export default function SpeakingPage() {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();

  return (
    <>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-6">
              Transformative Speaking & Training
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl xl:text-2xl mb-8 max-w-4xl mx-auto">
              Engaging sessions that bridge technical complexity with strategic business value. 
              From AI strategy to digital transformation, I deliver insights that inspire action and drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Speaking Engagement Request")}
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MicrophoneIcon className="w-5 h-5 mr-2" />
                Book a Speaking Session
              </button>
              <a
                href="https://wa.me/919890951119"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#d97706] border-2 border-[#d97706] rounded-lg hover:bg-[#d97706] hover:text-white transition-all duration-300"
              >
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
                Quick Discussion
              </a>
            </div>
          </div>

          {/* Session Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Recent Engaging Sessions</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Real examples of transformative sessions that inspired audiences and delivered practical value
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sessionHighlights.map((session, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{session.title}</h3>
                    <p className="text-sm text-[#d97706] font-medium mb-1">{session.venue}</p>
                    <p className="text-sm text-gray-600 font-medium">{session.topic}</p>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{session.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm italic text-gray-700">"{session.testimonial}"</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="bg-[#d97706] bg-opacity-10 text-[#d97706] px-2 py-1 rounded">{session.audience}</span>
                    <div className="flex items-center">
                      <StarIconSolid className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">High Impact</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking Topics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Signature Topics</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Strategic insights across AI, technology, and business transformation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakingTopics.map((topic, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#d97706] hover:shadow-md transition-all duration-300">
                  <div className="text-[#d97706] mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{topic.description}</p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{topic.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-2" />
                      <span>{topic.audience}</span>
                    </div>
                    <div className="flex items-center">
                      <PresentationChartBarIcon className="w-4 h-4 mr-2" />
                      <span>{topic.format}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Formats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Session Formats</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Flexible formats to match your event needs and audience preferences
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sessionFormats.map((format, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-[#d97706] mb-4 flex justify-center">
                    {format.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{format.format}</h3>
                  <p className="text-sm text-[#d97706] font-medium mb-2">{format.duration}</p>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Sessions Engaging */}
          <div className="mb-16 bg-gradient-to-r from-[#d97706] to-[#92400e] text-white rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What Makes My Sessions Engaging?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Real-world experience meets practical insights in interactive sessions that inspire action
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ChatBubbleLeftEllipsisIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="opacity-90">Students so engaged they had to be forced to take breaks</p>
              </div>
              <div className="text-center">
                <LightBulbIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Practical Insights</h3>
                <p className="opacity-90">Real-world experience translated into actionable strategies</p>
              </div>
              <div className="text-center">
                <StarIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Lasting Impact</h3>
                <p className="opacity-90">Knowledge and tools that participants use long after the session</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white border-2 border-gray-200 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Inspire Your Audience?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether it's a keynote, workshop, or panel discussion, let's create an engaging experience 
              that delivers real value to your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup("Speaking Engagement Request")}
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300"
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Book Speaking Session
              </button>
              <a
                href="mailto:kshrinivas.lead@gmail.com"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-[#d97706] border-2 border-[#d97706] rounded-lg hover:bg-[#d97706] hover:text-white transition-all duration-300"
              >
                <ArrowRightIcon className="w-5 h-5 mr-2" />
                Email Directly
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>📧 kshrinivas.lead@gmail.com | 📱 +91 98909 51119</p>
            </div>
          </div>
        </div>
      </Container>

      <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
}