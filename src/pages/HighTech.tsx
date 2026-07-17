import { useState } from 'react';

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
            Create. Develop. Reshape.
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Powering Digital Futures.<br />
            Delivering Real Impact.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
            Capyngen offers high-end intelligence, safe, and scalable IT solutions that innovate and increase growth. 
          </p>

          {/* Call to Action */}
          <button className="flex items-center gap-4 group focus:outline-none">
            <span className="text-white text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
              Explore Now
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
              Smart Versatality.<br />
              Endless Choices.
            </h2>
            
            <div className="text-white/90 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                From future generation cloud structure to self determining AI agents , Capyngen support industries move forward and execute fact-based functional innovation. Our core foundations are built for adoptability, flexible, and calculated profit outcomes.
              </p>
              <p>
                With 180,000+ experts across 40 nations. We offer exclusive insight to each contract and deals. We provide interpreting multiplex high-end tech with determined benefit at each overlap of the stack. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 3: Trending ---
const Trending = () => {
  const trendingItems = [
    {
      title: "Creating Reliable and Flexible Structure: Future With AI",
      image: "image_df7b04_card1.jpg", 
    },
    {
      title: "Enhanced Computing: Building the Upcoming Wave of Transformation",
      image: "image_df7b04_card2.jpg", 
    },
    {
      title: "IT Security in the Era of AI Adoptablity",
      image: "image_df7b04_card3.jpg", 
    },
    {
      title: "Advanced Tech Used by AI Solution Providers",
      image: "image_df7b04_card1.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          Trending
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trendingItems.map((item, index) => (
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
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-4 pr-4">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Read more
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
              The digital frontier pulses with invention,<br className="hidden lg:block"/> 
              Fast Track, and Innovation.
            </h2>
            
            <div className="text-[#c1c6d4] text-base md:text-lg leading-relaxed space-y-6">
              <p>
                The future belongs to businesses bold enough to move fast, think sharp, and build smart. Capyngen partners with high-tech companies to shape, grow, and scale digital products, platforms, and experiences powered by tomorrow's technology and today's best engineering craft.
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
      title: "Engineering and R&D Capabilities",
      description: "Full-cycle product engineering support, guiding your idea from concept to successful market launch.",
      image: "image_df86a7_card1.jpg", 
    },
    {
      title: "Intelligent Automation Solutions",
      description: "Advanced AI and machine learning automation, built for enterprise-scale deployment.",
      image: "image_df86a7_card2.jpg", 
    },
    {
      title: "Enhanced Cloud Modernisation Services",
      description: "Migrate, modernise and manage cloud native systems with zero downtime and maximum efficiency.",
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7-7h18" />
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
                Bold Metrics
              </h3>
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                
                {/* Metric 1 */}
                <div className="border-l-[3px] border-gray-300 pl-4">
                  <div className="text-4xl md:text-[44px] font-bold text-blue-600 mb-1">
                    180K+
                  </div>
                  <div className="text-sm text-gray-700">
                    Engineering Experts
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
                    Client Engagement Ratio
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
                "Capyngen has provided us with technology expertise and genuine commitment to innovation helped us accelerate our product roadmap at a pace we honestly never thought possible. What really stands out is that they don't operate like a typical vendor — they take the time to understand our goals and think like true engineering partners invested in our success."
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

// --- Section 7: FAQs ---
const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you handle bigger enterprise software projects?",
      answer: "Same care, bigger scale. We think about how it'll hold up with lots of users, how it plugs into your other systems, and what compliance rules apply."
    },
    {
      question: "Can you fix an old, outdated system instead of replacing it?",
      answer: "Yes — that's software modernization. We can update the guts of an old system without shutting the business down while we do it."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most first versions take somewhere between 3 and 9 months, depending on how big the idea is. Then we keep improving it after launch."
    },
    {
      question: "Can you connect new software to systems we already use?",
      answer: "Yes. Hooking new software into your existing CRM, ERP, or old databases is something we do often."
    },
    {
      question: "Do you build software specifically for SaaS companies?",
      answer: "Yes — we help SaaS companies handle things like multiple customer accounts, subscriptions, billing, and usage tracking, all built into the product properly."
    },
    {
      question: "Do you work with small startups or only big companies?",
      answer: "Both. We've helped startups get their first version of a product out the door, and we've helped big enterprises run massive systems without things falling over."
    },
    {
      question: "What's your general approach to building software?",
      answer: "Build in small steps, show progress often, and always tie what we're building back to a real business goal — not just a feature checklist."
    },
    {
      question: "Do you handle the whole project, start to finish?",
      answer: "Yes. Planning, design, building, testing, launching, and supporting it afterward — one team, one point of contact."
    },
    {
      question: "What makes Capyngen different?",
      answer: "A lot of technology software development firms just take orders and code. We actually dig into your business problem first, then build something that solves it — not just something that 'works.'"
    },
    {
      question: "What industries does Capyngen work with?",
      answer: "Fintech, healthcare, logistics, retail, manufacturing, SaaS — you name it. Our high-tech IT services flex to fit whatever rules and systems your industry already has."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-12 text-center">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-md shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-blue-600 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 8: CTA (Adaptability starts here) ---
const AdaptabilityCTA = () => {
  return (
    <section className="bg-[#05050f] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide">
          Adoptability Begin Today
        </h2>
        
        <p className="text-gray-300 text-base md:text-[17px] mb-10 leading-relaxed max-w-[600px]">
          Ready to take the next step toward a brighter future? Reach out Capyngen and learn how we can support you.
        </p>

        <button className="bg-[#22242b] hover:bg-[#2d3039] border border-gray-600 text-white text-[15px] font-medium py-3.5 px-8 rounded-full flex justify-center items-center transition-all duration-300">
          Contact Us Now
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
      <Trending />
      <HighTechInnovation />
      <HighTechSolutions />
      <HighTechMetricsTestimonial />
      <FAQsSection />
      <AdaptabilityCTA />
    </div>
  );
};

export default HighTechPage;