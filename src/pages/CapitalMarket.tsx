import React from 'react';

const CapitalMarketPage: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      
      {/* 1. Capital Markets Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0a1122]">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          style={{
            backgroundImage: `url('/path-to-capital-markets-bg.jpg')`, // Replace with actual path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#020817]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">
            <span className="block text-[#3b82f6] text-sm md:text-base font-semibold tracking-widest uppercase">
              AI-POWERED FINANCIAL INNOVATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
              Transforming Capital Markets Through Intelligent Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal">
              Accelerate digital transformation across investment banking,
              wealth management, trading platforms, and capital market
              operations with AI, cloud, automation, and secure
              enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-md transition-colors text-base">
                Talk to Our Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="flex items-center justify-center bg-transparent hover:bg-white/5 border border-gray-600 hover:border-gray-400 text-white font-medium py-3.5 px-8 rounded-md transition-all text-base">
                Explore Capital Market Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Insight Section */}
      <section className="relative w-full pt-20 pb-12 md:pb-24 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-[65%] md:h-[75%] bg-[#f5f6f9] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative mt-8 md:mt-0">
            <div className="absolute -left-12 md:-left-24 top-16 md:top-24 w-32 md:w-48 h-32 md:h-48 text-[#1e66f5] -z-10 opacity-90">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M-20,120 H50 V60 H100 V20 H150" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M-10,110 H40 V50 H90 V10 H140" stroke="currentColor" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M-30,130 H60 V70 H110 V30 H160" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,125 H45 V55 H95 V15 H145" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M-40,115 H55 V65 H105 V25 H155" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <img 
              src="/path-to-handshake-image.jpg" 
              alt="Professionals shaking hands in a meeting" 
              className="relative z-10 w-full h-auto min-h-[300px] object-cover object-center shadow-lg bg-gray-200"
            />
          </div>
          <div className="flex flex-col justify-center pt-8 md:pt-0">
            <span className="text-[13px] md:text-sm font-bold tracking-[0.15em] uppercase text-gray-800 mb-4">
              Industry Insight
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-[1.2] mb-6">
              AI is Reshaping Capital<br className="hidden lg:block" /> Markets
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 font-medium leading-relaxed">
              <p>
                Artificial Intelligence is transforming portfolio management, risk analytics, fraud
                detection, algorithmic trading, and investor engagement.
              </p>
              <p>
                Our intelligent financial solutions enable firms to automate operations, improve
                decision-making, and unlock new business opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Driving Growth Text Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl lg:ml-[8%]">
            <h2 className="text-[17px] md:text-[19px] font-bold tracking-[0.12em] uppercase text-black mb-8 leading-snug">
              Driving Growth With Intelligent<br className="hidden md:block" /> Financial Technology
            </h2>
            <div className="space-y-4 text-gray-800 text-[16px] md:text-[17px] font-medium leading-relaxed">
              <p>
                Capital markets are evolving rapidly through AI, digital platforms, automation, and real-time analytics.
              </p>
              <p>
                Organizations must deliver faster trading, improve compliance, manage risks, and provide exceptional investor
                experiences.
              </p>
              <p>
                Capyngen helps financial institutions modernize legacy systems, optimize trading operations, strengthen
                cybersecurity, and create scalable digital platforms that drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capital Market Insights Section */}
      <section className="bg-[#0b1121] py-24 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-12">
            Capital Market Insights
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            <div className="relative h-[400px] md:h-[450px] min-w-[320px] w-[350px] shrink-0 snap-start rounded-md overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-trading-bulb-chart.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-[1.2]">AI-Powered Trading<br />Platforms</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[450px] min-w-[320px] w-[350px] shrink-0 snap-start rounded-md overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-wealth-management.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-[1.2]">Wealth<br />Management<br />Solutions</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[450px] min-w-[320px] w-[350px] shrink-0 snap-start rounded-md overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-risk-compliance.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-[1.2]">Risk & Compliance<br />Automation</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[450px] min-w-[320px] w-[350px] shrink-0 snap-start rounded-md overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-digital-platform.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-[1.2]">Digital Transformation<br />Platforms</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-12">
            <button className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button className="text-[#3b82f6] hover:text-blue-400 transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Smart Financial Operations Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
              SMART FINANCIAL OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              AI That Drives Faster<br className="hidden lg:block" /> Investment Decisions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed font-medium pt-2">
              <p>
                Leverage machine learning, predictive analytics, and intelligent automation to 
                improve trading strategies, detect market anomalies, reduce operational risks, and 
                personalize investor experiences.
              </p>
              <p>
                Our AI-powered solutions enable financial organizations to make informed decisions 
                with greater speed and confidence.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <img 
              src="/path-to-financial-operations-team.jpg" 
              alt="Professionals analyzing data on a board" 
              className="w-full h-auto min-h-[300px] object-cover max-h-[500px] bg-gray-200 rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* 6. Case Study: Modernizing Investment Operations */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full">
            <img 
              src="/path-to-whiteboard-meeting.jpg" 
              alt="Team collaborating on a whiteboard with sticky notes" 
              className="w-full h-auto min-h-[300px] object-cover shadow-lg rounded-sm bg-blue-800" 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Modernizing Investment<br className="hidden lg:block" /> Operations
            </h2>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed max-w-lg mb-6">
              Capyngen partnered with a financial services organization to digitize investment workflows and automate reporting.
            </p>
            <div className="space-y-4 pt-2">
              <h4 className="text-lg font-normal text-white">Results</h4>
              <ul className="space-y-3">
                {[
                  '60% Faster Investment Processing',
                  '45% Reduction in Operational Costs',
                  '99.9% Platform Availability',
                  'Improved Regulatory Compliance'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-50 text-base md:text-lg">
                    <span className="text-gray-800 opacity-60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Capyngen Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-wide">
              WHY CAPYNGEN
            </h2>
            <p className="text-lg text-gray-800 font-medium">
              Technology That Powers Modern Financial Markets
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-ai-robot-hand.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">AI-Driven<br />Innovation</h3>
                <p className="text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[90%]">
                  INTELLIGENT AUTOMATION AND PREDICTIVE ANALYTICS FOR SMARTER FINANCIAL OPERATIONS.
                </p>
              </div>
            </div>

            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-enterprise-security.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">Enterprise Security</h3>
                <p className="text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[90%]">
                  ADVANCED CYBERSECURITY PRACTICES THAT PROTECT SENSITIVE FINANCIAL DATA.
                </p>
              </div>
            </div>

            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-scalable-architecture.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">Scalable<br />Architecture</h3>
                <p className="text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[90%]">
                  CLOUD-NATIVE SOLUTIONS DESIGNED FOR HIGH-PERFORMANCE FINANCIAL SYSTEMS.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-8">
            <button className="text-gray-400 hover:text-black transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button className="text-black hover:text-blue-600 transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Client Testimonial Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <hr className="border-gray-300" />
          <div className="py-16 flex flex-col md:flex-row gap-8">
            
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-[#3b82f6]" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2 21c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2C8.3 11 9 6.2 11 4.5l2.4 1.3C12.3 8 11.2 11.8 11.2 15h2c3.3 0 6 2.7 6 6zm17.6 0c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2-.3-4.2.4-9 2.4-10.7l2.4 1.3c-1.1 2.2-2.2 6-2.2 9.2h2c3.3 0 6 2.7 6 6z" />
              </svg>
            </div>
            
            {/* Quote Text & Author */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-normal text-black leading-relaxed mb-12">
                "Capyngen's expertise in AI and financial technology helped us modernize investment operations, improve compliance, and deliver a superior digital experience to our clients."
              </h3>
              
              <div className="flex flex-col items-start md:items-end text-left md:text-right">
                <span className="text-[#3b82f6] text-xl md:text-2xl font-bold uppercase tracking-wide mb-2">
                  Client Testimonial
                </span>
                <span className="text-black text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
                  — Director, Capital Markets Technology
                </span>
              </div>
            </div>

          </div>
          <hr className="border-gray-300" />
        </div>
      </section>

      {/* 9. Call to Action (CTA) Section */}
      <section className="bg-[#050514] text-white py-24 px-6 text-center flex flex-col items-center justify-center border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight">
            Build the Future of Capital Markets with Capyngen
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform investment operations, enhance security, and accelerate digital innovation with AI-powered capital market solutions.
          </p>
          <div className="pt-6">
            <button className="bg-transparent hover:bg-white/10 text-white border border-gray-400 rounded-full py-4 px-8 text-[17px] font-medium transition-all duration-300">
              Connect with Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="bg-[#050514] text-white pt-20 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-8">
          
          <div className="md:col-span-12 lg:col-span-4 pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Capyngen</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              AI. Software. Innovation.<br />
              Building the future of digital<br />
              business.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">IN</a>
              <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">TW</a>
              <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">YT</a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Services</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Industries</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Company</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Capyngen Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0">AI &middot; Software &middot; Innovation &middot; Gurugram, India</p>
        </div>
      </footer>

    </div>
  );
};

export default CapitalMarketPage;