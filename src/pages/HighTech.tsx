import React from 'react';

// --- Section 1: High Tech Hero ---
const HighTechHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_df73bd.jpg')` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031126] via-[#031126]/80 md:via-[#031126]/60 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Eyebrow / Category */}
          <div className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4 text-gray-200">
            INDUSTRIES | HIGH TECH
          </div>

          {/* Sub-eyebrow */}
          <div className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 text-gray-300">
            INNOVATE. ENGINEER. TRANSFORM.
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Powering Digital Futures.<br />
            Delivering Real Impact.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
            We build intelligent, secure, and scalable high-tech 
            solutions that drive innovation and accelerate growth.
          </p>

          {/* Call to Action */}
          <button className="flex items-center gap-4 group focus:outline-none">
            <span className="text-white text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
              Let's talk
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300 shadow-lg">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-[#031126] transform group-hover:translate-x-0.5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

// --- Section 2: Intelligent Mobility ---
const IntelligentMobility = () => {
  return (
    <section className="bg-gradient-to-br from-[#598cf4] to-[#3a67e5] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_df77fd.jpg" 
              alt="Hands typing on laptop with digital overlays" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-sm"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-8">
              Intelligent Mobility.<br />
              Limitless Possibilities.
            </h2>
            
            <div className="text-white/90 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                From next-gen cloud architectures to autonomous AI agents — 
                we help enterprises move beyond isolated pilots and achieve 
                true operational transformation. Our frameworks are engineered 
                for resilience, scale, and measurable business outcomes.
              </p>
              <p>
                With 180,000+ professionals across 40 countries, Capynge 
                brings unmatched depth to every engagement — translating 
                complex technology into competitive advantage at every layer of 
                the stack.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 3: In Focus ---
const InFocus = () => {
  const focusItems = [
    {
      title: "The Future of AI: Building Responsible and Scalable Systems",
      image: "image_df7b04_card1.jpg", 
    },
    {
      title: "Edge Computing: Powering the Next Wave of Innovation",
      image: "image_df7b04_card2.jpg", 
    },
    {
      title: "Cybersecurity in the Age of Intelligent Everything",
      image: "image_df7b04_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          In Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden h-[420px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-[26px] font-bold leading-tight mb-4 pr-4">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="text-gray-300 hover:text-black transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Section 4: High-Tech Innovation ---
const HighTechInnovation = () => {
  return (
    <section className="bg-[#0f131f] py-16 md:py-24 w-full border-t border-[#1a2133]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-white pr-0 lg:pr-10">
            <h2 className="text-xl md:text-2xl lg:text-[22px] font-bold leading-relaxed mb-6 uppercase tracking-wide">
              THE HIGH-TECH INDUSTRY THRIVES ON INNOVATION,<br className="hidden lg:block"/> 
              SPEED, AND PRECISION.
            </h2>
            
            <div className="text-[#c1c6d4] text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Businesses need solutions that are agile, intelligent, and built for the
                future.
              </p>
              <p>
                Capyngen helps high-tech companies design, develop, and scale
                advanced digital products, platforms, and experiences using
                emerging technologies and modern engineering practices.
              </p>
            </div>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end opacity-90 hover:opacity-100 transition-opacity duration-500">
            <img 
              src="image_df7b65.png" 
              alt="Abstract white sketched lines representing innovation" 
              className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 5: High-Tech Solutions ---
const HighTechSolutions = () => {
  const solutions = [
    {
      title: "Product engineering and R&D solution",
      description: "END TO END PRODUCT LIFE CYCLE SERVICES FROM ADDITION TO LAUNCH BUILD FOR FAST",
      image: "image_df86a7_card1.jpg", 
    },
    {
      title: "AI /ML solution",
      description: "AIAI LARGE LANGUAGE MODEL AND INTELLIGENCE AUTOMATION DEPLOYED@ENTERPRISE SCALE",
      image: "image_df86a7_card2.jpg", 
    },
    {
      title: "Cloud native development and modernisation",
      description: "MIGRATE MODERNISE AND MANAGE CLOUD NATIVE SYSTEM WITH ZERO DOWNTIME AND MAXIMUM EFFICIENCY",
      image: "image_df86a7_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden h-[420px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-4 pr-4 group-hover:text-gray-200 transition-colors">
                  {card.title}
                </h3>
                
                <div className="flex items-start opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed uppercase text-gray-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="text-gray-300 hover:text-black transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Section 6: Bold Metrics & Testimonial ---
const HighTechMetricsTestimonial = () => {
  return (
    <section className="bg-white py-12 md:py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-b border-gray-300 py-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Bold Metrics */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-700 mb-8">
                BOLD METRICS
              </h3>
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                
                {/* Metric 1 */}
                <div className="border-l-[3px] border-gray-300 pl-4">
                  <div className="text-4xl md:text-[44px] font-bold text-blue-600 mb-1">
                    180K+
                  </div>
                  <div className="text-sm text-gray-700">
                    Engineering professionals
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="border-l-[3px] border-gray-300 pl-4">
                  <div className="text-4xl md:text-[44px] font-bold text-blue-600 mb-1">
                    40
                  </div>
                  <div className="text-sm text-gray-700">
                    Countries
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="border-l-[3px] border-gray-300 pl-4">
                  <div className="text-4xl md:text-[44px] font-bold text-blue-600 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-700">
                    Client retention rate
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="border-l-[3px] border-gray-300 pl-4">
                  <div className="text-4xl md:text-[44px] font-bold text-blue-600 mb-1">
                    $8B+
                  </div>
                  <div className="text-sm text-gray-700">
                    Annual revenue
                  </div>
                </div>
                
              </div>
            </div>

            {/* Right Column: Testimonial */}
            <div className="w-full lg:w-7/12 flex flex-col relative">
              <div className="text-blue-500 mb-6">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-[26px] text-gray-900 leading-relaxed font-medium italic mb-8">
                "Capynge's deep technology expertise and commitment to innovation have helped us accelerate our product roadmap at a pace we never thought possible. They are more than a vendor, they are a true engineering partner."
              </blockquote>
              
              <div className="text-right w-full">
                <p className="text-sm font-medium text-gray-700">
                  - CTO, NovaBridge Financial
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 7: CTA (Adaptability starts here) ---
const AdaptabilityCTA = () => {
  return (
    <section className="bg-[#05050f] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide">
          Adaptability starts here
        </h2>
        
        <p className="text-gray-300 text-base md:text-[17px] mb-10 leading-relaxed max-w-[600px]">
          Ready to begin your journey towards a greater future? Get in touch 
          to discover how we can help.
        </p>

        <button className="bg-[#22242b] hover:bg-[#2d3039] border border-gray-600 text-white text-[15px] font-medium py-3.5 px-8 rounded-full flex justify-center items-center transition-all duration-300">
          Connect with us
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const HighTechPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <HighTechHero />
      <IntelligentMobility />
      <InFocus />
      <HighTechInnovation />
      <HighTechSolutions />
      <HighTechMetricsTestimonial />
      <AdaptabilityCTA />
    </div>
  );
};

export default HighTechPage;