// --- Section 1: E-commerce Hero ---
const EcommerceHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_e0d7df.jpg')` }} 
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031126] via-[#031126]/80 md:via-[#031126]/60 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Eyebrow / Category */}
          <div className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4 text-gray-300 border-b border-gray-500 pb-2 inline-block">
            INDUSTRIES / E-COMMERCE
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Powering the Next Era of Digital <br className="hidden md:block" />
            Commerce
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-xl leading-relaxed">
            Capyngen helps e-commerce businesses scale intelligently—personalizing 
            every customer interaction, optimizing fulfillment, and transforming data into 
            competitive advantage through AI-first digital platforms.
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

// --- Section 2: AI-Driven Commerce ---
const AIDrivenCommerce = () => {
  return (
    <section className="bg-[#2b65e2] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6 tracking-tight">
              AI-Driven Commerce: Personalization <br className="hidden lg:block"/>
              at Every Touchpoint
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
              Modern commerce demands real-time personalization, frictionless checkout, and 
              lightning-fast fulfillment. Capyngen's AI engines power hyper-personalized product 
              recommendations, dynamic pricing strategies, and intelligent order management 
              systems—enabling retailers to convert more, retain longer, and grow profitably 
              across digital and physical channels.
            </p>

            <a href="#" className="flex items-center text-white font-medium text-sm hover:text-blue-100 transition-colors w-fit group border-b border-white pb-1">
              Explore solutions 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_e0d89c.png" 
              alt="Person handing over a delivery package" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 3: E-Commerce Insights ---
const EcommerceInsights = () => {
  const insights = [
    {
      title: "Hyper-Personalization with AI Recommendation Engines",
      image: "image_e0dc3f_card1.jpg", 
    },
    {
      title: "Dynamic Pricing in a Competitive Marketplace",
      image: "image_e0dc3f_card2.jpg", 
    },
    {
      title: "Conversational Commerce and AI-Powered Chatbots",
      image: "image_e0dc3f_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          E-Commerce Insights
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
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
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-4 pr-2 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <div className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
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
const EcommerceSolutions = () => {
  const solutions = [
    {
      title: "Commerce Intelligence Suite",
      description: "UNIFY CUSTOMER DATA TO DRIVE PERSONALIZED JOURNEYS ACROSS EVERY DIGITAL CHANNEL.",
      image: "image_e0df68_card1.jpg"
    },
    {
      title: "Fulfillment & Inventory AI",
      description: "OPTIMIZE STOCK POSITIONING AND ORDER ROUTING TO MEET CUSTOMER SLAS PROFITABLY.",
      image: "image_e0df68_card2.jpg"
    },
    {
      title: "Fraud & Risk Prevention Platform",
      description: "PROTECT REVENUE WITH REAL-TIME TRANSACTION SCORING AND ADAPTIVE FRAUD MODELS.",
      image: "image_e0df68_card3.jpg"
    }
  ];

  return (
    <section className="bg-white pb-16 md:pb-24 pt-8 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          Solutions
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[400px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
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
                <h3 className="text-xl md:text-[24px] font-bold leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-[10px] md:text-[11px] font-semibold tracking-widest leading-relaxed uppercase text-gray-300 opacity-90">
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

// --- Section 5: The Future of AI in Digital Commerce ---
const FutureOfAIDigitalCommerce = () => {
  return (
    <section className="bg-[#f4f5f9] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e0e725.png" 
              alt="3D illustration of digital commerce elements like a basket, target, and graph" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-sm"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              The Future of AI in Digital Commerce
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Commerce is evolving at unprecedented speed—from social shopping to voice 
              commerce and AI-generated storefronts. Capyngen equips digital businesses with 
              the intelligence infrastructure needed to capitalize on emerging channels, predict 
              customer lifetime value, and build loyalty at scale without increasing headcount.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 6: Accelerating Revenue ---
const AcceleratingRevenue = () => {
  return (
    <section className="bg-[#0f1423] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_e139bb.png" 
              alt="Shopping cart full of cardboard boxes" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-6 tracking-tight">
              Accelerating Revenue with<br className="hidden lg:block"/> Intelligent Commerce Platforms
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Explore how Capyngen's AI-native commerce platform helps businesses increase 
              conversion, reduce cart abandonment, and grow average order value through 
              smarter personalization, pricing, and fulfillment strategies.
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

// --- Section 7: E-Commerce Testimonial ---
const EcommerceTestimonial = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          
          {/* Quote Icon */}
          <div className="text-[#4285F4] flex-shrink-0 pt-2">
            <svg className="w-16 h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          {/* Quote Text & Attribution */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-2xl lg:text-[28px] text-[#4285F4] font-semibold leading-relaxed mb-10">
              With Capyngen's AI personalization engine, our conversion rate increased by 28% and repeat purchase rate climbed significantly within the first quarter. The ROI was undeniable.
            </h3>
            
            <div className="self-end text-right max-w-[250px]">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2a2c35] leading-relaxed">
                VP DIGITAL COMMERCE, LEADING ONLINE RETAILER
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 8: CTA (Accelerate Your E-Commerce Growth) ---
const EcommerceCTA = () => {
  return (
    <section className="bg-[#050510] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide leading-tight">
          Accelerate Your E-Commerce <br className="hidden sm:block"/>
          Growth with Capyngen
        </h2>
        
        <p className="text-gray-400 text-sm md:text-[16px] mb-10 leading-relaxed max-w-[650px]">
          Deploy intelligent commerce solutions that personalize at scale, optimize 
          fulfillment, and turn customer data into your most powerful competitive asset.
        </p>

        <button className="bg-[#1f2128] hover:bg-[#2a2d36] border border-gray-600 text-white text-[14px] font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-all duration-300">
          Start Your Project 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const EcommercePage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <EcommerceHero />
      <AIDrivenCommerce />
      <EcommerceInsights />
      <EcommerceSolutions />
      <FutureOfAIDigitalCommerce />
      <AcceleratingRevenue />
      <EcommerceTestimonial />
      <EcommerceCTA />
    </div>
  );
};

export default EcommercePage;