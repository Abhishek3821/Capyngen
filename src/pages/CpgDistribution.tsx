import React from 'react';

// --- Section 1: CPG Hero ---
const CPGHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_e05fe0.jpg')` }} 
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031126] via-[#031126]/80 md:via-[#031126]/60 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Eyebrow / Category */}
          <div className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4 text-gray-300 border-b border-gray-500 pb-2 inline-block">
            INDUSTRIES / CPG & DISTRIBUTION
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Reinventing Consumer Goods <br />
            Through Intelligent Distribution
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-xl leading-relaxed">
            Capyngen empowers CPG companies to modernize supply chains, accelerate 
            product velocity, and deliver superior consumer experiences through AI-driven 
            analytics and intelligent automation.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold py-3 px-6 rounded-md flex justify-center items-center transition-colors duration-300">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-[#2c3e50]/80 hover:bg-[#34495e]/90 text-white text-sm font-semibold py-3 px-6 rounded-md flex justify-center items-center transition-colors duration-300">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 2: AI-Powered CPG ---
const AIPoweredCPG = () => {
  return (
    <section className="bg-[#f8f9fb] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e06441.jpg" 
              alt="Inside a warehouse with tall racks holding packaged goods" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              AI-Powered CPG: From Shelf to Supply Chain
            </h2>
            
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8">
              Consumer goods companies are facing unprecedented pressure from shifting 
              demand patterns, SKU proliferation, and omnichannel complexity. Capyngen delivers 
              integrated AI solutions that connect demand sensing, trade promotion optimization, 
              and last-mile distribution into a single intelligent ecosystem—helping brands grow 
              faster, reduce waste, and delight consumers at every touchpoint.
            </p>

            <button className="flex items-center text-gray-900 font-medium text-sm hover:text-[#3b82f6] transition-colors w-fit group border-b border-gray-300 pb-1 hover:border-[#3b82f6]">
              Learn more 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 3: CPG & Distribution Insights ---
const CPGInsights = () => {
  const insights = [
    {
      title: "Demand Sensing with Real-Time AI Signals",
      image: "image_e067c5_card1.jpg", 
    },
    {
      title: "Trade Promotion Optimization at Scale",
      image: "image_e067c5_card2.jpg", 
    },
    {
      title: "Smart Replenishment & Inventory Accuracy",
      image: "image_e067c5_card3.jpg", 
    },
    {
      title: "Last-Mile Delivery Innovations for CPG Brands",
      image: "image_e067c5_card4.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header & Navigation */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            CPG & Distribution Insights
          </h2>
          <div className="hidden md:flex gap-3">
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-500 transition-all bg-white shadow-sm" aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-500 transition-all bg-white shadow-sm" aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-200"
            >
              {/* Background Image Placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-[17px] font-bold leading-tight mb-4 pr-2 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <div className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100">
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Section 4: Solutions ---
const CPGSolutions = () => {
  const solutions = [
    {
      title: "Demand Intelligence Platform",
      description: "PREDICT DEMAND WITH AI MODELS TRAINED ON MULTI-CHANNEL CONSUMER SIGNALS.",
      image: "image_e06b0a_card1.jpg"
    },
    {
      title: "Distribution Network Optimizer",
      description: "DESIGN RESILIENT, COST-EFFICIENT DISTRIBUTION NETWORKS WITH REAL-TIME VISIBILITY.",
      image: "image_e06b0a_card2.jpg"
    },
    {
      title: "Trade Promo AI",
      description: "MAXIMIZE ROI ON PROMOTIONAL SPEND WITH INTELLIGENT SCENARIO PLANNING.",
      image: "image_e06b0a_card3.jpg"
    }
  ];

  return (
    <section className="bg-[#346dec] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-10 tracking-tight">
          Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-xl overflow-hidden h-[400px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-blue-900"
            >
              {/* Background Image Placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed uppercase text-gray-300 opacity-90">
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

// --- Section 5: The Future of Consumer Intelligence ---
const FutureOfConsumerIntelligence = () => {
  return (
    <section className="bg-[#f4f5f8] py-20 md:py-28 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-6 tracking-tight">
            The Future of Consumer Intelligence
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Next-generation CPG leaders are embedding AI at every decision point—from 
            portfolio strategy to retail execution. Capyngen's modular platform grows with your 
            business, integrating seamlessly into SAP, Oracle, and leading ERP ecosystems. Real-
            time shelf intelligence, predictive logistics, and automated replenishment put you 
            steps ahead of the competition.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Building Resilient Consumer Supply Chains ---
const BuildingResilientSupplyChains = () => {
  return (
    <section className="bg-[#0f1523] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e06bdc.jpg" 
              alt="Warehouse aisle with tall shelves of pallets" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-6 tracking-tight">
              Building Resilient Consumer Supply<br className="hidden lg:block"/> Chains with AI
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Discover how Capyngen helps CPG manufacturers and distributors build intelligent 
              networks that adapt to disruption, reduce spoilage, and accelerate speed-to-shelf 
              through connected AI and cloud-native infrastructure.
            </p>

            <button className="flex items-center text-white font-medium text-sm hover:text-gray-300 transition-colors w-fit group border-b border-gray-400 pb-1 hover:border-gray-300">
              Read Blog 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 7: CPG Testimonial ---
const CPGTestimonial = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          
          {/* Quote Icon */}
          <div className="text-[#4285F4] flex-shrink-0">
            <svg className="w-16 h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          {/* Quote Text & Attribution */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-2xl lg:text-[28px] text-[#4285F4] font-semibold leading-relaxed mb-10">
              Capyngen transformed how we sense and respond to consumer demand. Our forecast accuracy improved by 34%, and we cut excess inventory by nearly a quarter—all within 18 months of deployment.
            </h3>
            
            <div className="self-end max-w-[200px]">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2a2c35] leading-relaxed">
                CHIEF SUPPLY CHAIN OFFICER, GLOBAL CPG BRAND
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 8: CTA (Move Your Business Forward) ---
const CPGCallToAction = () => {
  return (
    <section className="bg-[#050510] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide leading-tight">
          Move Your Business Forward <br className="hidden sm:block"/>
          with Capyngen
        </h2>
        
        <p className="text-gray-300 text-base md:text-[17px] mb-10 leading-relaxed max-w-[700px]">
          Build intelligent consumer goods and distribution solutions that accelerate 
          growth, reduce waste, and deliver exceptional experiences across every 
          channel.
        </p>

        <button className="bg-[#1f2128] hover:bg-[#2a2d36] border border-gray-600 text-white text-[15px] font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-all duration-300">
          Start Your Project 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const CPGDistributionPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <CPGHero />
      <AIPoweredCPG />
      <CPGInsights />
      <CPGSolutions />
      <FutureOfConsumerIntelligence />
      <BuildingResilientSupplyChains />
      <CPGTestimonial />
      <CPGCallToAction />
    </div>
  );
};

export default CPGDistributionPage;