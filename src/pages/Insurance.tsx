import React, { useState, useRef } from 'react';

const Insurance = () => {
  // State for FAQs (Accordion)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Ref and scroll handler for Insurance Insights section
  const insightScrollRef = useRef<HTMLDivElement>(null);

  const scrollInsights = (direction: 'left' | 'right') => {
    if (insightScrollRef.current) {
      const scrollAmount = insightScrollRef.current.clientWidth;
      insightScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const insightsData = [
    "AI Claims Automation",
    "Fraud Detection Systems",
    "Digital Customer Engagement",
    "Automated Underwriting",
    "Predictive Risk Modeling",
    "Legacy System Modernization"
  ];

  const faqData = [
    { q: "Q1. What does insurance software development services involve?", a: "Insurance software development services involve creating custom applications, management platforms, and integrated systems for insurance companies to handle policies, claims, underwriting, renewals, and customer interactions efficiently through insurance software development services." },
    { q: "Q2. How does AI benefit the insurance industry?", a: "AI enables insurers to automate underwriting, detect fraudulent claims, speed up claims processing, personalize policy recommendations, and enhance risk assessment through predictive analytics and data insights." },
    { q: "Q3. What are insurance technology platforms?", a: "These are comprehensive software ecosystems that help insurers modernize operations, centralize data, automate manual workflows, and deliver seamless digital experiences across all customer touchpoints." },
    { q: "Q4. Why should I choose Capyngen for insurance solutions?", a: "Capyngen combines deep insurance domain knowledge, advanced AI capabilities, a security-first mindset, and a proven track record to deliver scalable, intelligent solutions that drive real business outcomes." },
    { q: "Q5. What is digital modernization in insurance?", a: "It's the strategic use of technology to update legacy systems, streamline operations, enhance customer engagement, automate processes, and create new revenue opportunities in the insurance sector." },
    { q: "Q6. How long does developing insurance software typically take?", a: "Development timelines vary based on complexity. Basic applications may take 3-6 months, while comprehensive enterprise platforms can require 12-18 months or more depending on scope and integration needs." },
    { q: "Q7. What is claims automation?", a: "Claims automation uses AI and workflow technology to streamline the entire claims lifecycle—from initial filing and document verification to approval, settlement, and reporting—reducing manual effort and processing times." },
    { q: "Q8. Can Capyngen assist with legacy system migration?", a: "Yes, we specialize in helping insurers transition from outdated legacy systems to modern, cloud-native architectures that offer improved performance, flexibility, scalability, and security." },
    { q: "Q9. What does insurtech mean?", a: "Insurtech refers to technological innovations designed to improve efficiency, reduce costs, enhance customer experience, and create new business models within the insurance industry." },
    { q: "Q10. Why is digital modernization critical for insurance companies?", a: "Digital modernization helps insurers reduce operational costs, improve efficiency, deliver superior customer experiences, maintain regulatory compliance, and remain competitive in a rapidly evolving digital marketplace." },
    { q: "Q11. What are insurance IT solutions?", a: "Insurance IT solutions are technology services and platforms that help insurers manage operations, improve security, automate workflows, and deliver better customer experiences." },
    { q: "Q12. What is an insurance software development company?", a: "An insurance software development company specializes in building custom applications, platforms, and systems specifically designed for the insurance industry." },
    { q: "Q13. How does insurance app development help insurers?", a: "Insurance app development helps insurers offer mobile-first experiences, enabling customers to manage policies, file claims, and access services anytime, anywhere." },
    { q: "Q14. What is insurance digital transformation?", a: "Insurance digital transformation is the process of using technology to modernize operations, improve customer experiences, automate workflows, and drive business growth." },
    { q: "Q15. How does Capyngen help with insurance technology solutions?", a: "Capyngen provides end-to-end insurance technology solutions including custom development, AI integration, cloud migration, and ongoing support to help insurers stay competitive." }
  ];

  return (
    <div className="w-full bg-white text-gray-900 antialiased font-sans">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('image_0fcd1b.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320] via-[#0b1320]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="max-w-2xl">
            <div className="mb-2">
              <span className="text-[#0055ff] font-semibold text-xs md:text-sm tracking-widest uppercase">
                INDUSTRIES | INSURANCE
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-300 font-medium text-xs md:text-sm tracking-wider uppercase">
                Smart Insurtech Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6">
              Powering Insurance with<br />Next-Generation Technology
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Modernize your insurance operations with intelligent platforms, workflow automation, and secure cloud systems that simplify claims, strengthen risk assessment, and drive sustainable business growth through advanced insurance software development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-[#0055ff] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Talk to Insurance Experts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="flex items-center justify-center bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Explore Insurance Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHANGING LANDSCAPE OF INSURANCE SECTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd499.jpg" 
              alt="Insurance Document and Shield" 
              className="w-full max-w-md h-auto rounded-none shadow-lg object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 leading-tight">
              The Changing Landscape<br />Of Insurance
            </h2>
            <div className="text-base md:text-lg text-blue-50 leading-relaxed space-y-4">
              <p>
                The insurance sector is transforming rapidly as digital adoption, and new technologies reshape the industry. Insurers now need intelligent systems that improve efficiency, automate claims, reduce fraud risks, and deliver personalized experiences through modern insurance technology solutions.
              </p>
              <p>
                As a leading insurance software development company, Capyngen understand the unique challenges of today's insurance market that’s why we helps insurance companies modernize their legacy systems using AI, and cloud platforms that create lasting business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI IS RESHAPING THE INSURANCE INDUSTRY SECTION */}
      <section className="bg-white text-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
              AI Is Reshaping The Insurance Industry
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
              <p>
                Artificial Intelligence helps insurers automate underwriting, detect fraudulent activities, accelerate claims, and offer personalized policy recommendations.
              </p>
              <p>
                Our insurance app development services, Capyngen enable insurers to launch mobile-first solutions that enhance customer engagement and accessibility.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center order-1 lg:order-2">
            <img 
              src="image_0fd4bb.jpg" 
              alt="Insurance Blue Key on Keyboard" 
              className="w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. INSURANCE INSIGHTS (Scrollable Cards Section) */}
      <section className="bg-white py-20 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Insurance Insights</h2>
            {/* Slider Controls */}
            <div className="flex gap-3">
              <button 
                onClick={() => scrollInsights('left')}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:bg-gray-50 transition cursor-pointer"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button 
                onClick={() => scrollInsights('right')}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:bg-gray-50 transition cursor-pointer"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            ref={insightScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {insightsData.map((title, index) => (
              <div key={index} className="relative min-w-[300px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-[#1e5adb] min-h-[380px] p-8 flex flex-col justify-end text-white shadow-sm hover:shadow-md transition duration-300">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <a href="#read-more" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider hover:underline">
                  <span className="mr-2">➔</span> READ MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SMARTER DECISIONS POWERED BY AI SECTION */}
      <section className="bg-[#0b1320] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Smarter Decisions Powered by AI
            </h2>
            <div className="text-base md:text-lg text-gray-400 leading-relaxed space-y-4">
              <p>
                Artificial Intelligence helps insurers streamline claims, predict behavior, detect fraud, automate underwriting, and improve efficiency.
              </p>
              <p>
                Capyngen builds intelligent insurance technology solutions that help organizations deliver faster, more secure, and customer-focused services through insurance digital transformation.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd7bf.png" 
              alt="Magnifying glass focusing on Insurance Policy text" 
              className="w-full max-w-md h-auto object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIAL SECTION */}
      <section className="bg-white py-24 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Quote Mark Icon */}
          <div className="text-[#0055ff] text-7xl font-serif mb-4 leading-none">“</div>
          
          <blockquote className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1d64db] leading-snug mb-12">
            "Capyngen transformed our insurance operations with intelligent automation and AI solutions that improved efficiency, reduced claims time, and increased customer satisfaction."
          </blockquote>
          
          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-1">
              CLIENT TESTIMONIAL
            </p>
            <p className="text-base font-medium text-gray-900">
              — Chief Digital Officer, Insurance Company
            </p>
          </div>
        </div>
      </section>

      {/* 7. DIGITAL CLAIMS PROCESSING SUCCESS SECTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd862.jpg" 
              alt="Business handshake over insurance table layout" 
              className="w-full max-w-md h-auto object-cover shadow-lg"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Digital Claims Processing Success
            </h2>
            <p className="text-base text-blue-50 mb-6 leading-relaxed">
              Capyngen helped a leading insurance provider modernize their claims management and automate policy administration. Our insurance software development services delivered outstanding results.
            </p>
            
            <h3 className="text-lg font-bold mb-4 tracking-wider uppercase">Results:</h3>
            <ul className="space-y-3">
              {[
                "70% Faster Claims Processing",
                "45% Reduction in Costs",
                "Enhanced Fraud Detection",
                "Higher Customer Satisfaction"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-blue-200 font-bold">✓</span>
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-blue-100 rounded-full blur-[40px] -z-10 opacity-70"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] tracking-wide">FAQs</h2>
          </div>
          <div className="space-y-2">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 pt-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#0ea5e9]' : 'text-slate-800 hover:text-slate-600'}`}>
                      {faq.q}
                    </span>
                    <span className={`text-2xl font-light ml-4 transition-colors ${isOpen ? 'text-[#0ea5e9]' : 'text-gray-400'}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pr-12 animate-fadeIn">
                      <p className="text-slate-500 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. START YOUR DIGITAL JOURNEY TODAY (CTA Footer Section) */}
      <section className="bg-[#040814] text-white py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Start Your Digital Journey Today
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with Capyngen to harness AI, data, and cloud technology for your insurance business. Transform operations, enhance experiences, and accelerate growth with intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#040814] font-semibold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Explore All Industries
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insurance;