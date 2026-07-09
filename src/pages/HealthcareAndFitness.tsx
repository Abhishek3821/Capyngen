import React from 'react';

const HealthcarePage: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      
      {/* 1. Healthcare Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#041124]">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-slate-900"
            style={{
              // Developer: Replace this with the actual path to your healthcare background image
              backgroundImage: `url('/path-to-your-healthcare-bg.jpg')`, 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03152f] via-[#03152f]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <div>
              <span className="block text-[#3b82f6] text-sm md:text-base font-bold tracking-widest uppercase mb-2">
                INDUSTRIES | HEALTHCARE
              </span>
              <span className="block text-gray-300 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                AI-POWERED HEALTHCARE SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight">
              Transforming Healthcare Through Intelligent Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-normal">
              Empower healthcare providers with AI-driven digital solutions
              that improve patient experiences, streamline clinical operations,
              enhance diagnostics, and enable secure, connected
              healthcare ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex items-center justify-center gap-2 bg-[#0d5cf5] hover:bg-blue-600 text-white font-medium py-3.5 px-6 rounded-md transition-colors text-base">
                Talk to Healthcare Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-gray-400 hover:border-white text-white font-medium py-3.5 px-6 rounded-md transition-all text-base">
                Explore Healthcare Solutions
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Text Content Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto lg:ml-[8%]">
          <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase text-black mb-8 leading-snug">
            SMARTER HEALTHCARE. BETTER PATIENT OUTCOMES.
          </h2>
          <div className="space-y-4 text-gray-800 text-[17px] md:text-lg font-medium leading-relaxed max-w-5xl">
            <p>
              Healthcare is rapidly evolving through AI, telemedicine, cloud technology, and digital transformation. Patients
              expect faster, more personalized, and accessible healthcare experiences while providers need secure, intelligent
              systems that improve operational efficiency.
            </p>
            <p>
              Capyngen helps healthcare organizations modernize their digital infrastructure with scalable software, AI-powered
              analytics, patient engagement platforms, and secure cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AI is Reshaping Modern Healthcare Section */}
      <section className="bg-[#0b1221] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full flex justify-center md:justify-start">
            <img 
              src="/path-to-patient-care-image.jpg" 
              alt="Caregiver holding patient's hand" 
              className="w-full h-auto object-cover min-h-[300px] bg-slate-800 shadow-lg rounded-sm"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white mb-6">
              AI is Reshaping Modern<br className="hidden lg:block" /> Healthcare
            </h2>
            <div className="space-y-4 text-base md:text-[17px] text-gray-300 leading-relaxed font-normal">
              <p>
                Artificial Intelligence is improving diagnostics, clinical decision-making, medical
                imaging, patient monitoring, and hospital operations.
              </p>
              <p>
                Capyngen develops intelligent healthcare platforms that help providers deliver better
                care while reducing administrative workload and operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Healthcare Insights Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-12">
            Healthcare Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            <div className="relative h-[420px] rounded-lg overflow-hidden group cursor-pointer shadow-md bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-ai-diagnostics.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-tight">AI-Assisted<br />Diagnostics</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

            <div className="relative h-[420px] rounded-lg overflow-hidden group cursor-pointer shadow-md bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-telemedicine.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-tight">Telemedicine<br />Platforms</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

            <div className="relative h-[420px] rounded-lg overflow-hidden group cursor-pointer shadow-md bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/path-to-ehr.jpg')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[26px] font-bold text-white mb-6 leading-tight">Electronic Health<br />Records (EHR)</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  READ MORE
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AI Clinical Decisions Section */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI That Supports Better<br className="hidden lg:block" /> Clinical Decisions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-blue-50 leading-relaxed font-normal">
              <p>
                Use artificial intelligence to automate administrative tasks, assist healthcare
                professionals with diagnostics, personalize treatment plans, and enhance patient
                engagement.
              </p>
              <p>
                Our AI-powered healthcare solutions improve efficiency while allowing medical teams to
                focus on delivering exceptional patient care.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <img 
              src="/path-to-clinical-decisions-image.jpg" 
              alt="Nurse checking blood pressure of an elderly patient" 
              className="w-full h-auto object-cover min-h-[300px] shadow-lg rounded-sm bg-blue-800"
            />
          </div>
        </div>
      </section>

      {/* 6. Healthcare Solutions Carousel Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black uppercase tracking-wide">
              HEALTHCARE SOLUTIONS
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('/path-to-hospital-management.jpg')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                  Hospital<br />Management<br />Systems
                </h3>
                <div className="flex items-start gap-3 text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[95%]">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>DIGITIZE HOSPITAL OPERATIONS, APPOINTMENTS, BILLING, AND PATIENT MANAGEMENT.</span>
                </div>
              </div>
            </div>

            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('/path-to-telemedicine-solutions.jpg')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                  Telemedicine<br />Solutions
                </h3>
                <div className="flex items-start gap-3 text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[95%]">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>SECURE VIRTUAL CONSULTATIONS WITH INTEGRATED VIDEO, CHAT, AND DIGITAL PRESCRIPTIONS.</span>
                </div>
              </div>
            </div>

            <div className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('/path-to-ai-diagnostics-card.jpg')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                <h3 className="text-[28px] font-bold text-white mb-4 leading-tight">
                  AI Diagnostics
                </h3>
                <div className="flex items-start gap-3 text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[95%]">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>SUPPORT CLINICIANS WITH INTELLIGENT IMAGE ANALYSIS AND PREDICTIVE HEALTHCARE INSIGHTS.</span>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-8">
            <button className="text-gray-400 hover:text-black transition-colors cursor-pointer" aria-label="Previous">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button className="text-black hover:text-blue-600 transition-colors cursor-pointer" aria-label="Next">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* 7. Case Study: Modernizing Patient Care */}
      <section className="bg-[#0b1221] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full">
            <img 
              src="/path-to-patient-care-case-study.jpg" 
              alt="Nurse and elderly patient smiling together" 
              className="w-full h-auto min-h-[300px] object-cover shadow-lg rounded-sm bg-slate-800" 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Modernizing Patient Care
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mb-6">
              Capyngen partnered with a healthcare provider to digitize patient services and improve operational efficiency.
            </p>
            <div className="space-y-4 pt-2">
              <h4 className="text-lg font-normal text-white">Results</h4>
              <ul className="space-y-3">
                {[
                  '60% Faster Patient Registration',
                  '40% Reduction in Administrative Work',
                  'Improved Patient Satisfaction',
                  'Secure Cloud-Based Healthcare Platform'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                    <span className="text-gray-500">
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

      {/* 8. Call to Action (CTA) Section */}
      <section className="bg-[#050510] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          
          {/* Left Text Content */}
          <div className="max-w-2xl space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight tracking-wide">
              Build the Future of Healthcare with Capyngen
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-normal">
              Deliver connected care, improve patient outcomes, and accelerate
              healthcare innovation through AI-powered digital solutions.
            </p>
            <div className="pt-2">
              <button className="flex items-center justify-center gap-2 bg-[#1f2023] hover:bg-[#2a2b2f] border border-gray-600 text-white font-medium py-3.5 px-8 rounded-full transition-colors text-base">
                Connect with Healthcare Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Right Side Abstract Graphic (Inline SVG) */}
        <div className="hidden lg:flex absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none opacity-80 items-end justify-end">
          <svg 
            viewBox="0 0 500 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-[500px] object-cover object-right-bottom translate-y-12"
          >
            {/* Step lines mimicking a hand-drawn upward chart/staircase */}
            <polyline points="0,320 180,320 180,220 320,220 320,120 450,120" stroke="white" strokeWidth="2.5" />
            <polyline points="10,315 175,315 175,215 315,215 315,115 450,115" stroke="white" strokeWidth="1" opacity="0.7" />
            <polyline points="-10,325 185,325 185,225 325,225 325,125 450,125" stroke="white" strokeWidth="1" opacity="0.7" />
            
            <polyline points="50,350 210,350 210,250 350,250 350,150 480,150" stroke="white" strokeWidth="3" />
            <polyline points="45,345 205,345 205,245 345,245 345,145 480,145" stroke="white" strokeWidth="1" opacity="0.6" />
            
            {/* Vertical lines going out the top right */}
            <polyline points="450,120 450,-50" stroke="white" strokeWidth="2.5" />
            <polyline points="445,115 445,-50" stroke="white" strokeWidth="1" opacity="0.7" />
            <polyline points="455,125 455,-50" stroke="white" strokeWidth="1" opacity="0.7" />

            <polyline points="480,150 480,-50" stroke="white" strokeWidth="3" />
            <polyline points="475,145 475,-50" stroke="white" strokeWidth="1" opacity="0.6" />
            <polyline points="485,155 485,-50" stroke="white" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
      </section>

    </div>
  );
};

export default HealthcarePage;