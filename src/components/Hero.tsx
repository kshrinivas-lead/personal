"use client";
import { Container } from "@/components/Container";
import { ContactPopup } from "@/components/ContactPopup";
import { useContactPopup } from "@/hooks/useContactPopup";

export const Hero = () => {
  const { isOpen, title, openPopup, closePopup } = useContactPopup();
  return (
    <>
      {/* Hero Section with White Background */}
      <div className="relative w-full bg-white">
        {/* Hero Banner */}
        <div className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#4338ca_0%,_#1e1b4b_28%,_#0a0a14_60%,_#000000_100%)] py-16 sm:py-20 lg:py-24">
          {/* Dot grid pattern */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] top-[8%] hidden sm:block w-32 h-20 lg:w-40 lg:h-24 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Wireframe crystal, top-left */}
          <svg
            aria-hidden="true"
            className="absolute -left-6 -top-8 w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-70"
            viewBox="0 0 200 200"
            fill="none"
          >
            <polygon points="40,10 90,40 70,100 20,90 10,50" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
            <polyline points="40,10 70,100" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <polyline points="90,40 20,90" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <polyline points="10,50 70,100" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
            <polygon points="90,40 150,30 160,80 110,110 70,100" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
            <polyline points="90,40 110,110" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
            <polyline points="150,30 70,100" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
          </svg>

          {/* Flowing wave lines, bottom-left */}
          <svg
            aria-hidden="true"
            className="absolute left-0 -bottom-6 w-56 sm:w-72 lg:w-96 opacity-60 hidden sm:block"
            viewBox="0 0 400 150"
            fill="none"
          >
            <path d="M0,110 C50,70 90,140 140,100 C190,60 230,130 280,90 C320,60 360,110 400,80" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M0,95 C50,55 90,125 140,85 C190,45 230,115 280,75 C320,45 360,95 400,65" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M0,125 C50,85 90,155 140,115 C190,75 230,145 280,105 C320,75 360,125 400,95" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M0,140 C50,100 90,170 140,130 C190,90 230,160 280,120 C320,90 360,140 400,110" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
          </svg>

          {/* Wireframe geodesic sphere, right side */}
          <svg
            aria-hidden="true"
            className="absolute right-[4%] top-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-80 hidden sm:block"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="88" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
            <ellipse cx="100" cy="100" rx="88" ry="30" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <ellipse cx="100" cy="100" rx="88" ry="30" stroke="white" strokeWidth="1" strokeOpacity="0.4" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="88" ry="30" stroke="white" strokeWidth="1" strokeOpacity="0.4" transform="rotate(120 100 100)" />
            <ellipse cx="100" cy="100" rx="30" ry="88" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            <polyline points="100,12 42,60 100,100 158,60 100,12" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
            <polyline points="12,100 60,60 100,100 60,140 12,100" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
            <polyline points="188,100 140,60 100,100 140,140 188,100" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
            <polyline points="100,188 42,140 100,100 158,140 100,188" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" />
          </svg>

          {/* Banner content */}
          <Container>
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-200 uppercase">
                AI Strategy &middot; Responsible AI &middot; AI Governance
              </p>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#d97706] to-[#f59e0b] my-4" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                AI That Ships.
              </h1>
              <h2 className="mt-1 text-xl sm:text-2xl lg:text-3xl font-medium text-gray-200">
                Governed from Day One
              </h2>
              <div className="h-px w-24 bg-white/40 my-4 sm:my-5" />
              <p className="text-sm sm:text-base text-gray-300">
                26 Years Engineering &rarr; AI Strategy &middot; Stanford LEAD &middot; MBA (Strategy) &middot; Faculty &ndash; Symbiosis University
              </p>
            </div>
          </Container>
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
