import { useState } from 'react';

// --- 1. Real Estate Hero Section ---
const RealEstateHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_ed25c5.jpg')` }} 
    >
      {/* Dark Overlay - gradient for text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start text-left">
        
        {/* Eyebrow / Tag */}
        <div className="border border-white/30 backdrop-blur-sm px-3 py-1 mb-6 rounded-sm">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray-200">
            REAL ESTATE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6 tracking-tight max-w-3xl">
          Redefining Property Intelligence <br className="hidden md:block" />
          with AI
        </h1>

        {/* Description Text */}
        <p className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Capyngen delivers AI-powered solutions that help real estate developers, 
          asset managers, and brokers make smarter investment decisions, accelerate 
          transactions, and create intelligent building experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-colors duration-300">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="bg-transparent hover:bg-white/10 border border-gray-400 text-white text-sm font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-all duration-300">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

// --- 2. Real Estate Stats Section ---
const RealEstateStats = () => {
  const stats = [
    { value: "40%", label: "FASTER LEASE CYCLES" },
    { value: "28%", label: "ENERGY COST REDUCTION" },
    { value: "3.2x", label: "ROI ON AI INVESTMENT" }
  ];

  return (
    <section className="bg-[#f8f9fc] py-16 md:py-20 w-full border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 text-center">
        
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 w-full">
            <h3 className="text-5xl md:text-[56px] font-bold text-[#3b82f6] mb-3 tracking-tight">
              {stat.value}
            </h3>
            <p className="text-[11px] md:text-xs font-bold text-[#4b5563] uppercase tracking-[0.15em]">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

// --- 3. AI Reshaping Real Estate Feature Block ---
const AIReshapingRealEstate = () => {
  return (
    <section className="bg-[#2c65e2] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_ed267e.png" 
              alt="Modern curved white architectural residential building balconies" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content Block */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              From Portfolio Analytics to Smart <br className="hidden lg:block"/>
              Buildings: AI Reshaping Real Estate
            </h2>
            
            <p className="text-white/95 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              The real estate sector is entering a new era of data-driven decision-making. 
              Capyngen helps developers, REITs, and property managers harness AI for predictive 
              valuation, tenant experience platforms, ESG reporting automation, and intelligent 
              building management—turning physical assets into continuously optimizing, 
              data-generating enterprises.
            </p>

            <a href="#" className="flex items-center text-white font-semibold text-[13px] md:text-sm hover:text-blue-100 transition-colors w-fit group border-b border-white/60 hover:border-white pb-1">
              Explore real estate AI
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 4. Solutions Section ---
const RealEstateSolutions = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const tabs = ['Industry', 'Technology', 'Products & Platforms'];

  const solutionCards = [
    {
      title: "Portfolio Intelligence Platform",
      description: "AGGREGATE, ANALYZE, AND OPTIMIZE PERFORMANCE ACROSS YOUR ENTIRE REAL ESTATE PORTFOLIO.",
      image: "image_ed29c7_1.png",
    },
    {
      title: "Smart Building OS",
      description: "INTEGRATE IOT, HVAC, ACCESS CONTROL, AND OCCUPANCY DATA INTO A SINGLE INTELLIGENT LAYER.",
      image: "image_ed29c7_2.png",
    },
    {
      title: "Tenant Experience Platform",
      description: "DELIVER SEAMLESS, PERSONALIZED TENANT SERVICES THAT INCREASE RETENTION AND NPS SCORES.",
      image: "image_ed29c7_3.png",
    }
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-[36px] font-bold text-gray-950 mb-8 tracking-tight">
          Solutions
        </h2>

        {/* Tab Navigation Navigation */}
        <div className="flex border-b border-gray-100 mb-10 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-4 text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 -mb-[2px] ${
                activeTab === tab
                  ? 'border-blue-600 text-gray-950 font-semibold'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {solutionCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group h-[460px] rounded-lg overflow-hidden flex flex-col justify-end p-6 bg-black"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed tracking-wider font-medium uppercase">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- 5. Future of AI in Commercial Real Estate ---
const FutureOfAIRealEstate = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-950 leading-tight mb-6 tracking-tight">
              The Future of AI in Commercial Real <br className="hidden lg:block"/> Estate
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Artificial intelligence is transforming every layer of real estate—from deal sourcing 
              and underwriting to facilities management and lease renewals. Capyngen gives 
              property owners and managers the AI tools to optimize returns, attract top-tier 
              tenants, and meet increasingly stringent sustainability mandates.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_ed2a25.jpg" 
              alt="Modern commercial real estate glass buildings at sunset" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 6. Intelligent Property Portfolios ---
const IntelligentPropertyPortfolios = () => {
  return (
    <section className="bg-[#121621] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_ed2d2d.png" 
              alt="Curved architectural building facade" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              Building Intelligent Property <br className="hidden lg:block"/>
              Portfolios with AI
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Discover how Capyngen's AI-native real estate platform helps investors, developers, 
              and operators leverage predictive analytics, digital twins, and automated workflows 
              to unlock hidden value across their property assets.
            </p>

            <a href="#" className="flex items-center text-white font-medium text-[13px] md:text-sm transition-colors w-fit group border-b border-gray-400 hover:border-white pb-1">
              Read Blog 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 7. Real Estate Testimonial Quote ---
const RealEstateTestimonial = () => {
  return (
    <section className="bg-white py-16 w-full border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        
        {/* Author Info Column */}
        <div className="w-full md:w-1/4 flex flex-col shrink-0">
          <h3 className="text-[#3b82f6] text-lg font-bold tracking-wide uppercase mb-1">
            Diana Roth
          </h3>
          <p className="text-[#4b5563] text-[10px] font-bold tracking-widest uppercase leading-snug">
            Head of Digital<br />Transformation, Global<br />REIT
          </p>
        </div>

        {/* Quote Icon & Text Column */}
        <div className="w-full md:w-3/4 flex gap-4 md:gap-6 items-start">
          <div className="text-blue-200 shrink-0 mt-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6.5C6.22386 11 6 10.7761 6 10.5V6.5C6 6.22386 6.22386 6 6.5 6H10.5C10.7761 6 11 6.22386 11 6.5V11C11 14.3137 8.31371 17 5 17V15C7.20914 15 9 13.2091 9 11H10V11ZM19 11H15.5C15.2239 11 15 10.7761 15 10.5V6.5C15 6.22386 15.2239 6 15.5 6H19.5C19.7761 6 20 6.22386 20 6.5V11C20 14.3137 17.3137 17 14 17V15C16.2091 15 18 13.2091 18 11H19V11Z" />
            </svg>
          </div>
          <p className="text-[#3b82f6] text-lg md:text-xl font-bold leading-relaxed">
            Capyngen's portfolio intelligence platform gave us clarity across 400+ properties we had never had before. Our asset managers now make decisions in hours that used to take weeks, and our occupancy rates have never been higher.
          </p>
        </div>

      </div>
    </section>
  );
};


// --- 8. Real Estate Insights Section ---
const RealEstateInsights = () => {
  const insightCards = [
    {
      title: "Predictive Valuation: AI Models for Property Pricing",
      image: "image_ed2965_1.png", 
    },
    {
      title: "Smart Building Technology and the Occupant Experience",
      image: "image_ed2965_2.png",
    },
    {
      title: "ESG Analytics for Real Estate Portfolios",
      image: "image_ed2965_3.png",
    },
    {
      title: "AI-Driven Lease Optimization and Revenue Management",
      image: "image_ed2965_4.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block with Navigation Arrows */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 tracking-tight">
            Real Estate Insights
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors duration-200" aria-label="Previous insight">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors duration-200" aria-label="Next insight">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insightCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group h-[420px] rounded-lg overflow-hidden flex flex-col justify-end p-6 cursor-pointer bg-black"
            >
              {/* Card Background Image with Subtle Scale Effect on Hover */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Bottom Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text Context Content Container */}
              <div className="relative z-10 w-full">
                <h3 className="text-white text-base md:text-[17px] font-bold leading-snug mb-6 group-hover:text-blue-400 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <div className="flex items-center text-white/80 font-semibold tracking-wider text-[10px] uppercase group-hover:text-white transition-colors">
                  <span className="mr-1.5 font-sans">→</span> READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- 9. Real Estate Call To Action (NEW) ---
const RealEstateCTA = () => {
  return (
    <section className="bg-[#05050f] py-24 w-full flex justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Unlock the Full Potential of Your <br className="hidden md:block" /> Real Estate Portfolio
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
          Deploy AI-driven property intelligence that increases asset value, enhances 
          tenant experiences, and accelerates digital transformation across your entire 
          portfolio.
        </p>
        <button className="bg-[#272927] hover:bg-[#343634] border border-gray-600 text-white text-sm font-medium py-3 px-8 transition-colors duration-300 flex items-center gap-2">
          Start Your Project
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const RealEstatePage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <RealEstateHero />
      <RealEstateStats />
      <AIReshapingRealEstate />
      <RealEstateSolutions />
      <FutureOfAIRealEstate />
      <IntelligentPropertyPortfolios />
      <RealEstateTestimonial />
      <RealEstateInsights />
      <RealEstateCTA />
    </div>
  );
};

export default RealEstatePage;