import React, { useState } from 'react';

// --- Section 1: Travel & Logistics Hero ---
const TravelLogisticsHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_def7bd.jpg')` }} 
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030a17] via-[#030a17]/80 md:via-[#030a17]/50 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Eyebrow / Category */}
          <div className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4">
            <span className="text-gray-200">Industries | </span>
            <span className="text-[#4b93ff]">Travel, Transportation & Logistics</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Moving the World<br />
            Smarter.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
            AI-powered solutions for travel,<br className="hidden sm:block" />
            transportation & logistics.
          </p>

          {/* Call to Action */}
          <button className="flex items-center gap-4 group focus:outline-none">
            <span className="text-white text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
              Let's talk
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#185adb] flex items-center justify-center group-hover:bg-[#1245a8] transition-colors duration-300 shadow-lg">
              <svg 
                className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" 
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

// --- Section 2: AI-Powered Logistics ---
const AIPoweredLogistics = () => {
  return (
    <section className="bg-[#3062ea] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_df0304_hikers.jpg" 
              alt="People hiking in the mountains" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-sm"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8">
              AI-Powered Logistics: The <br className="hidden lg:block"/>
              Future of Connected Mobility
            </h2>
            
            <div className="text-white text-base md:text-lg leading-relaxed space-y-6">
              <p className="opacity-95">
                Transportation and logistics organizations are
                embracing Artificial Intelligence to optimize supply
                chains, improve fleet operations, predict demand,
                automate workflows, and enhance customer
                experiences.
              </p>
              <p className="opacity-95">
                Capyngen delivers intelligent digital solutions that help
                businesses reduce operational costs, improve visibility,
                and accelerate digital transformation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 3: Travel & Logistics Insights ---
const TravelLogisticsInsights = () => {
  const insights = [
    {
      title: "AI-Driven Supply Chain Optimization",
      image: "image_df03a0_card1.jpg", 
    },
    {
      title: "Smart Fleet Management",
      image: "image_df03a0_card2.jpg", 
    },
    {
      title: "Digital Passenger Experience",
      image: "image_df03a0_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 tracking-tight">
          Travel & Logistics Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[400px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-4 pr-4">
                  {card.title}
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
        <div className="flex justify-end gap-3 mt-8">
          <button className="text-gray-300 hover:text-black transition-colors" aria-label="Previous">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Section 4: The Future of AI in Transportation & Logistics ---
const FutureOfAITransportation = () => {
  return (
    <section className="bg-[#f4f5f8] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-8">
              The Future of AI in <br className="hidden lg:block"/>
              Transportation & Logistics
            </h2>
            
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Artificial Intelligence is transforming logistics by
                enabling route optimization, predictive maintenance,
                warehouse automation, and real-time shipment
                tracking.
              </p>
              <p>
                Capyngen helps transportation companies build
                connected digital ecosystems that improve efficiency,
                reduce costs, and deliver exceptional customer
                experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src="image_df066a_tech.jpg" 
              alt="Rugged smartphone and gear" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 5: Solutions Tabs & Cards ---
const TravelLogisticsSolutions = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const tabs = ['Industry', 'Technology', 'Products & Platforms'];

  const solutions = [
    {
      title: "Smart Logistics Platforms",
      description: "DIGITIZE LOGISTICS OPERATIONS THROUGH AI-POWERED TRANSPORTATION MANAGEMENT SYSTEMS.",
      image: "image_df06e3_card1.jpg", 
    },
    {
      title: "Fleet Management Solutions",
      description: "OPTIMIZE FLEET PERFORMANCE USING CONNECTED VEHICLES, IOT, AND PREDICTIVE ANALYTICS.",
      image: "image_df06e3_card2.jpg", 
    },
    {
      title: "Warehouse Automation",
      description: "IMPROVE INVENTORY ACCURACY AND WAREHOUSE EFFICIENCY USING INTELLIGENT AUTOMATION.",
      image: "image_df06e3_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <h2 className="text-3xl md:text-[40px] font-bold text-black mb-10 tracking-tight">
          Solutions
        </h2>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-10 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 mr-8 lg:mr-16 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 relative ${
                activeTab === tab 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[420px] md:h-[500px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-4 pr-4 group-hover:text-gray-100 transition-colors">
                  {card.title}
                </h3>
                
                <div className="flex items-start opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed uppercase text-gray-200">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="text-gray-300 hover:text-black transition-colors" aria-label="Previous slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next slide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

// --- Section 6: Building Intelligent Supply Chains ---
const IntelligentSupplyChains = () => {
  return (
    <section className="bg-[#101524] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_df0762_supply_chain.jpg" 
              alt="Person holding smartphone with compass and global map overlay" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-md shadow-2xl"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6 tracking-tight">
              Building Intelligent Supply <br className="hidden lg:block"/>
              Chains with AI
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Discover how artificial intelligence, cloud computing,
              and automation are transforming transportation,
              logistics, and global supply chains.
            </p>

            <button className="flex items-center text-white hover:text-gray-300 transition-colors w-fit group">
              Read Blog 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 7: Travel & Logistics Testimonial ---
const TravelLogisticsTestimonial = () => {
  return (
    <section className="bg-white py-12 md:py-16 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Testimonial Box */}
        <div className="border-t border-b border-gray-300 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Attribution */}
            <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
              <p className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-black leading-relaxed">
                — DIRECTOR OF DIGITAL<br/>
                OPERATIONS
              </p>
            </div>
            
            {/* Quote */}
            <div className="w-full md:w-3/4 flex flex-col sm:flex-row items-start gap-4">
              
              {/* Quotation Icon */}
              <div className="text-blue-500 flex-shrink-0 mb-4 sm:mb-0">
                <svg className="w-12 h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Quote Text */}
              <p className="text-blue-500 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                "Capyngen helped us modernize our logistics operations through AI-powered analytics and intelligent automation, enabling faster deliveries, greater operational visibility, and improved customer satisfaction."
              </p>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

// --- Section 8: Call to Action ---
const CallToAction = () => {
  return (
    <section className="bg-[#030510] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide">
          Move Your Business Forward with Capyngen
        </h2>
        
        <p className="text-gray-300 text-base md:text-[17px] mb-10 leading-relaxed max-w-[650px]">
          Build intelligent transportation, travel, and logistics solutions that
          improve efficiency, enhance customer experiences, and accelerate
          digital transformation.
        </p>

        <button className="bg-[#1f2128] hover:bg-[#2a2d36] border border-gray-600 text-white text-[15px] font-medium py-3.5 px-8 rounded-full flex justify-center items-center transition-all duration-300">
          Start Your Project 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const TravelLogisticsPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-900 flex flex-col">
      <TravelLogisticsHero />
      <AIPoweredLogistics />
      <TravelLogisticsInsights />
      <FutureOfAITransportation />
      <TravelLogisticsSolutions />
      <IntelligentSupplyChains />
      <TravelLogisticsTestimonial />
      <CallToAction />
    </div>
  );
};

export default TravelLogisticsPage;