import React, { useState } from 'react';

const Banking: React.FC = () => {
  // State for the Banking Solutions Carousel
  const [activeTab, setActiveTab] = useState('Digital Banking');

  return (
    <div className="w-full font-sans">
      {/* 1. Hero Banner Section (Dark Mode) */}
      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/path-to-your-bank-office-background.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-8 pr-8">
              <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                AI-DRIVEN BANKING SOLUTIONS
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Banking Without Limits.
              </h1>
              <p className="text-3xl font-semibold text-blue-400">
                Secure. Intelligent. Future Ready.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                We help banks and financial institutions modernize operations,
                enhance customer experiences, and drive growth with AI,
                cloud, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="flex items-center justify-center gap-2 bg-[#0056D2] hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                  Talk to Our Experts
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                  Explore Banking Solutions
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 flex justify-center items-center">
              <img
                src="/path-to-your-central-group-image.png"
                alt="Banker meeting with a couple"
                className="w-full h-auto max-w-4xl object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Text Content Section (Light Mode) */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto lg:ml-12">
          <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-black mb-8">
            Banking Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-normal">
            Empower your financial institution with AI-powered banking solutions,
            digital transformation, cloud technologies, cybersecurity, and
            intelligent automation. We help banks deliver seamless customer
            experiences while ensuring security, compliance, and operational
            excellence.
          </p>
        </div>
      </section>

      {/* 3. Accelerating Future Section (Blue Theme) */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="w-full flex justify-center md:justify-start">
            <img 
              src="/path-to-your-bank-building-image.jpg" 
              alt="Exterior of a modern bank building" 
              className="w-full max-w-md md:max-w-full h-auto object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Accelerating the Future<br className="hidden lg:block" /> of Banking
            </h2>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed">
              Today's banking customers expect seamless digital experiences, instant services, and
              secure transactions across every touchpoint. Capyngen helps banks modernize legacy
              systems, automate operations, strengthen cybersecurity, and build intelligent customer
              experiences using AI, cloud computing, and advanced analytics.
            </p>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed">
              Whether you're a traditional bank, fintech startup, NBFC, or digital lender, we build
              scalable technology that enables sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Banking Insights Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Banking Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-fraud-detection-img.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">AI-Powered Fraud<br />Detection</h3>
                <div className="flex items-center text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">READ MORE</div>
              </div>
            </div>
            <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-digital-lending-img.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Digital Lending<br />Platforms</h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>
            <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-open-banking-img.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Open Banking &<br />APIs</h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Intelligent Automation Section */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-600">Intelligent Automation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              AI That Powers Smarter<br className="hidden lg:block" /> Financial Decisions
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Leverage AI to automate repetitive operations, personalize banking experiences, detect fraud,
              improve compliance, and gain actionable business insights.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Capyngen combines machine learning, predictive analytics, and intelligent automation to help
              financial institutions operate faster, smarter, and more securely
            </p>
            <div className="pt-6">
              <button className="group flex items-center gap-4 text-lg font-semibold text-black hover:text-[#2f64ed] transition-colors">
                Explore All Solutions
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2f64ed] text-white transition-transform group-hover:translate-x-1 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px]">
              <img src="/path-to-automation-phone-image.jpg" alt="Banking app on smartphone" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f64ed]/60 via-transparent to-transparent pointer-events-none mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Banking Solutions Carousel Section (Dark Theme) */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-16 lg:px-24 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide uppercase">
            Banking Solutions
          </h2>
          <div className="grid grid-cols-3 border-b border-gray-700 mb-12 text-center text-sm md:text-base">
            {['Digital Banking', 'AI & Analytics', 'Cybersecurity'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab 
                    ? 'border-[#2f64ed] text-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            <div className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Digital Banking<br />Platforms</h3>
                <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Build modern web and<br />mobile banking applications<br />that customers love.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors cursor-pointer uppercase">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                Read More
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">AI Customer<br />Support</h3>
                <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Deploy intelligent chatbots<br />and virtual banking<br />assistants.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors cursor-pointer uppercase">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                Read More
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Loan & Mortgage<br />Management</h3>
                <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Digitize loan origination,<br />approvals, underwriting,<br />and servicing.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors cursor-pointer uppercase">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                Read More
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6 pr-4">
            <button className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button className="text-[#3b82f6] hover:text-blue-400 transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonial Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto lg:ml-12">
          <div className="mb-8">
            <svg className="w-16 h-16 text-[#5482d3]" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2 21c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2C8.3 11 9 6.2 11 4.5l2.4 1.3C12.3 8 11.2 11.8 11.2 15h2c3.3 0 6 2.7 6 6zm17.6 0c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2-.3-4.2.4-9 2.4-10.7l2.4 1.3c-1.1 2.2-2.2 6-2.2 9.2h2c3.3 0 6 2.7 6 6z" />
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#5482d3] leading-snug mb-12">
            "Capyngen helped us accelerate our digital transformation journey by delivering secure, scalable, and intelligent banking solutions that improved both operational efficiency and customer satisfaction."
          </h3>
          <hr className="border-gray-200 mb-8" />
          <div>
            <p className="text-sm font-bold tracking-[0.15em] uppercase text-black mb-3">Client Testimonial</p>
            <p className="text-gray-800 text-base font-medium">— Banking Technology Partner</p>
          </div>
        </div>
      </section>

      {/* 8. Built for Secure Banking */}
      <section className="bg-white pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full">
            <img src="/path-to-secure-banking-3d-image.jpg" alt="3D render of a bank building" className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Built for Secure Banking</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a]">
              Build the Future of<br className="hidden lg:block" /> Banking With Capyngen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-lg">
              Transform customer experiences, strengthen security, and accelerate digital innovation with AI-powered banking solutions.
            </p>
            <div className="pt-6">
              <button className="group flex items-center gap-3 text-lg font-semibold text-black hover:text-[#0b5cd5] transition-colors">
                Start Your Banking Project
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0b5cd5] text-white transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section: Ready to Transform */}
      <section className="bg-[#050510] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-tight">
              Ready to Transform<br />
              <span className="text-[#2563eb] font-bold">Your Business?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed pt-2">
              Let's build intelligent digital products together. Our experts are ready to understand
              your goals and design a tailored technology roadmap.
            </p>
            <div className="pt-4">
              <button className="bg-[#2563eb] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center gap-2 transition-colors">
                Contact Our Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Right Side Abstract Graphic (Inline SVG) */}
        {/* Placed absolutely to avoid disrupting the grid layout on smaller screens, while filling the right side on large screens */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-80 flex items-center justify-end">
           <svg 
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-[500px]"
          >
            {/* Base grid lines simulating the sketch */}
            <polyline points="100,50 100,100 350,100" stroke="white" strokeWidth="2" />
            <polyline points="90,40 90,110 350,110" stroke="white" strokeWidth="1" opacity="0.6" />
            <polyline points="110,60 110,90 350,90" stroke="white" strokeWidth="1" opacity="0.6" />

            <polyline points="350,100 350,150 100,150 100,250 300,250 300,350 400,350" stroke="white" strokeWidth="6" />
            
            {/* Scattered thin overlay lines for the 'scribble' effect */}
            <polyline points="345,95 345,155 95,155 95,255 295,255 295,355 400,355" stroke="white" strokeWidth="1" opacity="0.7" />
            <polyline points="355,105 355,145 105,145 105,245 305,245 305,345 400,345" stroke="white" strokeWidth="1" opacity="0.5" />
            <polyline points="352,98 352,152 98,152 98,252 302,252 302,348 400,348" stroke="white" strokeWidth="1" opacity="0.8" />

            {/* Additional circuit paths */}
            <polyline points="200,50 200,80 400,80" stroke="white" strokeWidth="1.5" />
            <polyline points="220,150 220,200 350,200" stroke="white" strokeWidth="2" />
            <polyline points="215,150 215,205 350,205" stroke="white" strokeWidth="1" opacity="0.5"/>

            <polyline points="250,250 250,300 150,300 150,400" stroke="white" strokeWidth="3" />
            <polyline points="247,250 247,303 147,303 147,400" stroke="white" strokeWidth="1" opacity="0.5"/>
            <polyline points="253,250 253,297 153,297 153,400" stroke="white" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
      </section>

      {/* Note: You can append your existing Footer component here */}
    </div>
  );
};

export default Banking;