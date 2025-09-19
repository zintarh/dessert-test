"use client";
import { ArrowRight, FileText, TrendingUp, UserCheck } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const placeholderTexts = [
    "Expert-guided applications in healthcare",
    "Sustainable energy storage solutions",
    "Expert-driven climate change mitigation",
    "Quantum computing for drug discovery",
    "Blockchain in supply chain management"
  ];

  const typewriterText = useTypewriter({
    texts: placeholderTexts,
    speed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
    loop: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex py-8 sm:py-12 md:py-16 lg:py-20 mt-16 sm:mt-18 md:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div 
          ref={heroRef}
          className="bg-white flex flex-col items-center rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <div 
            className={`mb-6 flex justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className=" bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
              RESEARCH  SUCCESS PLATFORM
            </span>
          </div>

          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 mb-4 sm:mb-6 leading-tight transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From Research to 
            <span className="text-purple-600"> $50M+ in Grants</span>
          </h1>
          
          <p 
            className={`text-base sm:text-lg text-gray-700 text-center mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Stop wasting time on unfundable research. Our platform analyzes your topic across six dimensions to identify funding opportunities and maximize your grant success.
          </p>

          <div 
            className={`space-y-4 sm:space-y-6 mb-8 sm:mb-12 w-full transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex w-full border items-center px-4 sm:px-6 md:px-9 border-gray-500 h-[60px] sm:h-[70px] md:h-[80px] rounded-full space-x-2 sm:space-x-3 shadow-2xl shadow-purple-400/60 ring-2 ring-purple-300/40 hover:shadow-2xl hover:shadow-purple-500/80 hover:ring-4 hover:ring-purple-400/60 transition-all duration-500 focus-within:shadow-2xl focus-within:shadow-purple-500/80 focus-within:ring-4 focus-within:ring-purple-400/60">
              <div className="w-full h-full flex items-center relative">
                <input
                  type="text"
                  className="w-full h-full outline-none text-sm sm:text-base border-none text-black placeholder:text-transparent"
                  placeholder=""
                />
                <div className="absolute inset-0 flex items-center pointer-events-none px-2">
                  <span className="text-black text-sm sm:text-base">
                    {typewriterText}
                    <span className="inline-block w-0.5 h-4 sm:h-5 bg-black ml-1 typewriter-cursor" />
                  </span>
                </div>
              </div>

              <button className="bg-[#7070ff] text-white w-10 h-8 sm:w-12 sm:h-9 md:w-14 md:h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div 
              className={`flex w-full transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="border border-gray-400 rounded-2xl sm:rounded-3xl md:rounded-4xl px-3 sm:px-4 py-2 w-full">
                <p className="text-black text-sm sm:text-base md:text-lg pt-3 sm:pt-4 md:pt-5">
                  <strong>Grant Potential: High</strong> - This topic aligns with current NSF funding priorities and has strong commercial viability. Expected funding range: $200K-$500K over 2-3 years.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4">
                  <button className="bg-primary text-purple-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-medium flex items-center space-x-1 sm:space-x-2 transition-colors">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Grant Opportunities</span>
                  </button>
                  <button className="bg-primary text-purple-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-medium flex items-center space-x-1 sm:space-x-2 transition-colors">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Research Trends</span>
                  </button>
                  <button className="bg-primary text-purple-800 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-medium flex items-center space-x-1 sm:space-x-2 transition-colors">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Methodology Score</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`text-center py-2 px-2 transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto">
              Join thousands of researchers who secured $50M+ in funding. Get instant analysis, identify grant opportunities, and receive expert guidance to strengthen your proposals.
            </p>
            <button 
              className={`bg-primary text-purple-800 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-800 ease-out hover:bg-purple-800 hover:text-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              Start Your Grant Journey
            </button>
          </div>
        </div>
      </div>

      {/* Bottom left icon */}
      <div className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
