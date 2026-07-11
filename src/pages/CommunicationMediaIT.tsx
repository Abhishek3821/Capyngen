import { useState } from 'react';

// --- 1. Hero Section ---
const MediaInformationHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_e1455c.png')` }} 
    >
      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        <div className="border border-white/30 backdrop-blur-sm px-4 py-1.5 mb-8 rounded-sm">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray-200">
            MEDIA & INFORMATION
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6 tracking-tight">
          Transforming Media and <br className="hidden md:block" />
          Communications Through AI
        </h1>

        <p className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Capyngen partners with broadcasters, telecoms, and information service 
          providers to harness generative AI, accelerate content monetization, and 
          deliver hyper-personalized audience experiences at scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold py-3 px-8 rounded-sm flex justify-center items-center transition-colors duration-300">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold py-3 px-8 rounded-sm flex justify-center items-center transition-all duration-300 backdrop-blur-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

// --- 2. AI-Powered Content Intelligence ---
const AIContentIntelligence = () => {
  return (
    <section className="bg-[#2c65e2] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e2b979.png" 
              alt="Professional broadcast camera operator filming" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              AI-Powered Content Intelligence for <br className="hidden lg:block"/>
              the Modern Media Enterprise
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
              The convergence of streaming, broadband, and generative AI is reshaping how 
              audiences consume and interact with media. Capyngen enables content producers, 
              broadcasters, and telecoms to leverage AI for content tagging, audience 
              segmentation, ad optimization, and network management—turning massive data 
              assets into scalable revenue streams and unmatched subscriber experiences.
            </p>

            <a href="#" className="flex items-center text-white font-medium text-[13px] md:text-sm hover:text-blue-200 transition-colors w-fit group border-b border-white/60 hover:border-white pb-1">
              Discover capabilities 
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

// --- 3. Media & Communications Insights ---
const MediaInsights = () => {
  const insightCards = [
    {
      title: "Generative AI in Content Production and Post-Production",
      image: "image_e31de0_1.png", 
    },
    {
      title: "Subscriber Churn Prediction with Behavioral AI",
      image: "image_e31de0_2.png",
    },
    {
      title: "5G Network Optimization Using Machine Learning",
      image: "image_e31de0_3.png",
    },
    {
      title: "Programmatic Advertising in AI Era",
      image: "image_e31de0_4.png",
    },
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Media & Communications Insights
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insightCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group h-[420px] rounded-lg overflow-hidden flex flex-col justify-end p-6 cursor-pointer bg-black"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
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

// --- 4. Solutions ---
const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const tabs = ['Industry', 'Technology', 'Products & Platforms'];

  const solutionCards = [
    {
      title: "Content Intelligence Platform",
      description: "AUTO-TAG, ENRICH, AND DISTRIBUTE CONTENT ASSETS WITH AI TO MAXIMIZE DISCOVERABILITY AND REACH.",
      image: "image_e32277_1.png",
    },
    {
      title: "Audience Engagement AI",
      description: "PREDICT SUBSCRIBER BEHAVIOR AND PERSONALIZE VIEWING EXPERIENCES IN REAL TIME.",
      image: "image_e32277_2.png",
    },
    {
      title: "Network Performance Optimizer",
      description: "USE ML TO PREDICT AND PREVENT NETWORK DEGRADATION BEFORE SUBSCRIBERS NOTICE.",
      image: "image_e32277_3.png",
    }
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-[36px] font-bold text-gray-950 mb-8 tracking-tight">
          Solutions
        </h2>

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

        <div className="flex justify-end items-center gap-2 mt-4">
          <button className="p-2.5 border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors" aria-label="Previous solution">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2.5 border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors" aria-label="Next solution">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- 5. Future of AI in Media ---
const FutureOfAI = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-950 leading-tight mb-6 tracking-tight">
              The Future of AI in Media and <br className="hidden lg:block"/> Broadcasting
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From automated sports highlights to AI-generated news summaries, the boundaries 
              of media production are expanding rapidly. Capyngen helps media companies 
              operationalize AI responsibly—ensuring quality, brand safety, and editorial integrity 
              while dramatically reducing production timelines and content costs.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_e32659.png" 
              alt="Professional working at a broadcasting control panel" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 6. Building Intelligent Media Ecosystems (NEW) ---
const IntelligentMediaEcosystems = () => {
  return (
    <section className="bg-[#1e2330] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e2b979.png" 
              alt="Professional broadcast camera operator filming" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              Building Intelligent Media <br className="hidden lg:block"/>
              Ecosystems with AI
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Capyngen helps media enterprises seamlessly integrate artificial intelligence 
              across their entire production and distribution lifecycles. By connecting 
              siloed data streams and applying advanced machine learning, we enable 
              broadcasters to build scalable, secure, and resilient ecosystems that 
              continuously adapt to changing audience behaviors.
            </p>

            <a href="#" className="flex items-center text-blue-400 font-medium text-[13px] md:text-sm hover:text-blue-300 transition-colors w-fit group">
              Learn More 
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

// --- 7. Testimonial Quote ---
const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 w-full border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        
        <div className="w-full md:w-1/4 flex flex-col shrink-0">
          <h3 className="text-[#3b82f6] text-lg font-bold tracking-wide uppercase mb-1">
            James Okonkwo
          </h3>
          <p className="text-[#4b5563] text-[10px] font-bold tracking-widest uppercase leading-snug">
            Chief Digital Officer,<br />Global Broadcasting<br />Group
          </p>
        </div>

        <div className="w-full md:w-3/4 flex gap-4 md:gap-6 items-start">
          <div className="text-blue-200 shrink-0 mt-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6.5C6.22386 11 6 10.7761 6 10.5V6.5C6 6.22386 6.22386 6 6.5 6H10.5C10.7761 6 11 6.22386 11 6.5V11C11 14.3137 8.31371 17 5 17V15C7.20914 15 9 13.2091 9 11H10V11ZM19 11H15.5C15.2239 11 15 10.7761 15 10.5V6.5C15 6.22386 15.2239 6 15.5 6H19.5C19.7761 6 20 6.22386 20 6.5V11C20 14.3137 17.3137 17 14 17V15C16.2091 15 18 13.2091 18 11H19V11Z" />
            </svg>
          </div>
          <p className="text-[#3b82f6] text-lg md:text-xl font-bold leading-relaxed">
            Capyngen's content intelligence platform reduced our manual tagging effort by 70% and helped us surface catalog titles that now drive 18% of our streaming revenue. It was a game-changer for our monetization strategy.
          </p>
        </div>

      </div>
    </section>
  );
};

// --- 8. CTA Section ---
const CallToAction = () => {
  return (
    <section className="bg-[#060614] py-24 w-full flex justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Lead the Future of Media with <br className="hidden md:block" /> Capyngen
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
          Build AI-powered content, audience, and network intelligence solutions that 
          accelerate growth, deepen engagement, and create lasting competitive 
          advantage in the digital media landscape.
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
const MediaInformationPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <MediaInformationHero />
      <AIContentIntelligence />
      <MediaInsights />
      <SolutionsSection />
      <FutureOfAI />
      <IntelligentMediaEcosystems />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default MediaInformationPage;