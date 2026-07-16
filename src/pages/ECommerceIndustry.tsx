import  { useRef } from 'react';

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
            E-Commerce
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Building the Future of Digital Retail with <br className="hidden md:block" />
            AI-Powered Solutions
          </h1>

          {/* Sub-headline */}
          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-xl leading-relaxed">
            Capyngen empowers e-commerce solutions businesses to scale intelligently—delivering personalized shopping experiences, streamlining supply chain operations, and unlocking actionable insights through AI-first digital platforms.
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
              AI-Powered Commerce: Personalization <br className="hidden lg:block"/>
              Across Every Channel
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
              Today's shoppers expect tailored experiences, seamless checkout processes, and rapid delivery. As a leading ecommerce development company, we create platforms that drive intelligent product suggestions, adaptive pricing models, and automated order routing through cutting-edge e-commerce solutions.
            </p>

            <a href="#" className="flex items-center text-white font-medium text-sm hover:text-blue-100 transition-colors w-fit group border-b border-white pb-1">
              Explore Solutions 
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const insights = [
    {
      title: "AI-Driven Product Recommendations",
      image: "image_e0dc3f_card1.jpg", 
    },
    {
      title: "Smart Pricing in Competitive Markets",
      image: "image_e0dc3f_card2.jpg", 
    },
    {
      title: "AI-Powered Shopping Assistants",
      image: "image_e0dc3f_card3.jpg", 
    },
    {
      title: "Behavioral Customer Analytics",
      image: "image_e0dc3f_card1.jpg", 
    },
    {
      title: "Omnichannel Shopping Experience",
      image: "image_e0dc3f_card2.jpg", 
    },
    {
      title: "Ethical Commerce & Transparency",
      image: "image_e0dc3f_card3.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black tracking-tight">
            E-Commerce Insights
          </h2>
          
          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {insights.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const solutions = [
    {
      title: "Intelligent Commerce Data Platform",
      description: "Our ecommerce website developmnt services ensure every customer interaction is captured effectively.",
      image: "image_e0df68_card1.jpg"
    },
    {
      title: "Smart Inventory & Fulfillment Engine",
      description: "Optimizes warehouse positioning and delivery routing to meet customer expectations profitably.",
      image: "image_e0df68_card2.jpg"
    },
    {
      title: "Advanced Fraud Protection System",
      description: "Our fraud protection system protects revenue",
      image: "image_e0df68_card3.jpg"
    },
    {
      title: "Decoupled Commerce Architecture",
      description: "We build flexible, API-driven commerce platforms that separate presentation and operations for faster innovation.",
      image: "image_e0df68_card1.jpg"
    },
    {
      title: "Recurring Revenue & Subscription Management",
      description: "We help you launch and manage subscription.",
      image: "image_e0df68_card2.jpg"
    }
  ];

  return (
    <section className="bg-white pb-16 md:pb-24 pt-8 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black tracking-tight">
            Solutions
          </h2>
          
          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[400px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start"
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
              The Evolution of AI in Digital Retail
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Retail is transforming rapidly—from social shopping and voice-enabled purchasing to AI-generated store experiences. As a leading ecommerce platform provider, Capyngen provides digital retailers with the intelligence infrastructure needed to leverage emerging channels, and foster loyalty at scale without expanding teams. 
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
              Driving Revenue with<br className="hidden lg:block"/> Intelligent Commerce Platforms
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Discover how Capyngen's AI-native commerce platform helps businesses increase conversion rates, minimize cart abandonment, and grow average order value through smarter personalization, pricing, and fulfillment approaches. Our e-commerce solutions are designed to deliver measurable ROI.
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
              "Working with Capyngen's AI personalization engine, we achieved a 28% increase in conversion rates and a significant boost in repeat purchases within the first quarter. The return on investment was exceptional."
            </h3>
            
            <div className="self-end text-right max-w-[250px]">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2a2c35] leading-relaxed">
                VP Digital Commerce, Leading Online Retailer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 8: Frequently Asked Questions ---
const EcommerceFAQ = () => {
  const faqs = [
    { q: "Q1. What do e-commerce solutions include?", a: "E-commerce solutions encompass technology platforms and services for online selling, including website development, payment processing, inventory management, and customer engagement tools." },
    { q: "Q2. Why partner with Capyngen for ecommerce development services?", a: "Capyngen combines AI expertise, industry knowledge, and a client-focused approach to build scalable, secure, and intelligent commerce platforms that deliver growth through exceptional ecommerce development services." },
    { q: "Q3. What defines a leading ecommerce platform?", a: "A leading ecommerce platform offers robust features, high-volume transaction support, advanced personalization, multi-channel capabilities, and seamless integrations." },
    { q: "Q4. How does AI enhance e-commerce performance?", a: "AI enhances e-commerce through personalized product suggestions, dynamic pricing, fraud detection, inventory optimization, and intelligent customer service automation using advanced e-commerce solutions." },
    { q: "Q5. What is involved in ecommerce website development?", a: "Ecommerce website development involves building a fully functional online store with product catalogs, shopping carts, secure payment processing, and order management systems." },
    { q: "Q6. What are e-commerce software solutions?", a: "E-commerce software solutions are applications that power online retail operations, including shopping cart platforms, inventory systems, analytics dashboards, and marketing automation tools." },
    { q: "Q7. How long does ecommerce website development typically take?", a: "Timelines vary by complexity. A basic store requires 4-8 weeks, while enterprise platforms may take 3-6 months or longer." },
    { q: "Q8. Is Capyngen a reliable ecommerce development company?", a: "Yes, Capyngen is a leading ecommerce development company with proven expertise in AI-driven commerce, scalable architectures, and tailored industry solutions." },
    { q: "Q9. Which industries does Capyngen serve?", a: "We serve retail, fashion, consumer electronics, grocery, D2C brands, B2B wholesalers, and subscription-based businesses." },
    { q: "Q10. How does fulfillment optimization benefit my business?", a: "Fulfillment optimization uses AI to direct orders to optimal warehouses, forecast demand, and maintain ideal inventory levels to reduce shipping costs and delivery times." },
    { q: "Q11. What is decoupled commerce?", a: "Decoupled commerce separates the customer-facing frontend from the operational backend, enabling faster updates, enhanced personalization, and seamless multi-channel selling." },
    { q: "Q12. How do you ensure data security?", a: "We implement PCI-compliant payment processing, data encryption, fraud detection systems, and regular security assessments." },
    { q: "Q13. Can you integrate with my existing business systems?", a: "Yes, we integrate with ERPs, CRMs, payment gateways, logistics providers, and marketing platforms." },
    { q: "Q14. What is conversational commerce?", a: "Conversational commerce uses AI-powered chatbots and voice interfaces to engage customers, answer questions, and complete purchases through natural interactions." },
    { q: "Q15. How do I begin working with Capyngen?", a: "Contact us for a complimentary consultation. We'll understand your objectives and design a customized e-commerce strategy." }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border border-gray-200 bg-white rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between font-semibold text-gray-900 md:text-lg">
                {faq.q}
                <span className="transition group-open:rotate-180 text-blue-600">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed font-medium">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 9: CTA (Accelerate Your E-Commerce Growth) ---
const EcommerceCTA = () => {
  return (
    <section className="bg-[#050510] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide leading-tight">
          Accelerate Your E-Commerce <br className="hidden sm:block"/>
          Growth with Capyngen
        </h2>
        
        <p className="text-gray-400 text-sm md:text-[16px] mb-10 leading-relaxed max-w-[650px]">
          Whether you need ecommerce development services for a new venture or want to modernize an existing store, Capyngen is your strategic partner offering world-class ecommerce website development and e-commerce solutions.
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
      <EcommerceFAQ />
      <EcommerceCTA />
    </div>
  );
};

export default EcommercePage;