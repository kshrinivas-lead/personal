import {
  LightBulbIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/strategic-vision.svg";
import benefitTwoImg from "../../public/img/business-impact.svg";

const benefitOne = {
  title: "Visionary. Perfectionist. Systems Thinker.",
  desc: "I bring a unique combination of strategic foresight and meticulous attention to detail. Every solution I architect is built with precision, scalability, and business impact in mind. My approach isn't just about implementing technology—it's about crafting intelligent systems that evolve with your organization's needs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Strategic Architecture",
      desc: "Designing future-ready systems that balance innovation with practical business requirements.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Quality Excellence",
      desc: "Meticulous attention to detail ensuring every component meets the highest standards.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Collaborative Leadership",
      desc: "Building consensus and driving results through iterative refinement and team alignment.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Adaptive Innovation. Measurable Results.",
  desc: "I excel at navigating complexity while maintaining focus on what matters most—delivering exceptional results. My collaborative approach ensures teams stay aligned while adapting to changing requirements. Every project becomes a learning opportunity that strengthens both technical capabilities and business outcomes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Intelligent Automation",
      desc: "Crafting GenAI solutions that enhance human capabilities rather than replace them.",
      icon: <SparklesIcon />,
    },
    {
      title: "Scalable Architectures",
      desc: "Building resilient systems designed to grow with your organization's ambitions.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Knowledge Sharing",
      desc: "Elevating teams through mentorship, speaking engagements, and collaborative learning.",
      icon: <HeartIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
