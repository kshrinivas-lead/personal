"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";
import heroBanner from "../../public/img/hero-banner.jpg";
import profilePhoto from "../../public/img/shrini-profile.jpg";

export const Hero = () => {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();
  return (
    <>
      {/* Hero Section with White Background */}
      <div className="relative w-full bg-white">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Mobile Banner Image - Full Height */}
          <div className="block lg:hidden">
            <div className="relative w-full h-35">
              <Image
                src={heroBanner}
                alt="Lead with Purpose"
                width={1920}
              height={600}
                className="object-cover"
                priority
              />

              {/* Center profile */}
              <div className="absolute left-1/6 translate-x-[-50%] bottom-[2px] z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                  <Image
                    src={profilePhoto}
                    alt="Shrinivas Kulkarni"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full">
          <Image
            src={heroBanner}
            alt="Lead with Purpose - Build with Intelligence"
            width={1920}
            height={600}
            className="object-cover w-full h-auto"
            priority
          />

          {/* Desktop Professional Photo Overlay - Left Side */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={profilePhoto}
                  alt="Shrinivas Kulkarni"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Below Banner */}
        <div className="relative bg-white pt-0 pb-2">
          <Container>
            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto">
              {/* Responsive Layout */}
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
                {/* Content Section */}
                <div className="w-full lg:w-7/10 mb-6 lg:mb-0">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight mb-4 lg:mb-6">
                      Strategic AI Leadership
                    </h1>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-600 lg:text-2xl xl:text-2xl mb-4 lg:mb-6">
                      Transforming organizations through purposeful AI strategy
                      and intelligent system architecture.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 lg:text-xl xl:text-xl">
                      I'm Shrinivas Kulkarni, bridging visionary leadership with
                      technical excellence to deliver solutions that drive
                      measurable business impact.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons Section */}
                <div className="w-full lg:w-3/10">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center space-y-4 lg:space-y-6">
                    <button
                      onClick={() => openPopup("Speaking Engagement Request")}
                      className="w-full max-w-xs px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-white bg-gradient-to-r from-[#d97706] to-[#92400e] rounded-lg hover:from-[#f59e0b] hover:to-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Invite Me to Speak
                    </button>
                    <button
                      onClick={() => openPopup("Collaboration Opportunity")}
                      className="w-full max-w-xs flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-[#d97706] border-2 border-[#d97706] rounded-lg hover:bg-[#d97706] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg
                        role="img"
                        width="24"
                        height="24"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Collaborate</title>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>Let's Collaborate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Expertise Section */}
      <Container>
        <div
          className="flex flex-col justify-center pb-12 lg:pb-16 px-4"
          style={{ paddingTop: "22px" }}
        >
          <div className="text-lg sm:text-xl text-center text-gray-700 dark:text-white mb-8 lg:mb-10">
            Expert in{" "}
            <span className="text-[#d97706] font-semibold">cutting-edge</span>{" "}
            technologies and strategic innovation
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center text-gray-400 dark:text-gray-400">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                Artificial
              </div>
              <div className="text-xs sm:text-sm">Intelligence</div>
            </div>
            <div className="text-center text-gray-400 dark:text-gray-400">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                Generative
              </div>
              <div className="text-xs sm:text-sm">AI</div>
            </div>
            <div className="text-center text-gray-400 dark:text-gray-400">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                Software
              </div>
              <div className="text-xs sm:text-sm">Engineering</div>
            </div>
            <div className="text-center text-gray-400 dark:text-gray-400">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                Software
              </div>
              <div className="text-xs sm:text-sm">Architecture</div>
            </div>
            <div className="text-center text-gray-400 dark:text-gray-400 col-span-2 sm:col-span-1">
              <div className="text-sm sm:text-base lg:text-lg font-semibold">
                Digital
              </div>
              <div className="text-xs sm:text-sm">Transformation</div>
            </div>
          </div>
        </div>
      </Container>

      <ContactPopup isOpen={isOpen} onClose={closePopup} title={title} />
    </>
  );
};
