// --- Section 1: Energy Hero ---
const EnergyHero = () => {
  return (
    <section 
      className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_1de4fd.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start text-white py-12">
          
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-gray-200 mb-4 uppercase">
            <span>Industries</span>
            <span>|</span>
            <span>Energy, Resources & Utilities</span>
          </div>
          
          <div className="text-xs md:text-sm font-semibold tracking-widest text-gray-300 mb-6 uppercase">
            Powering a Sustainable Digital Future
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Intelligent Energy.<br />
            Sustainable Growth.
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
            Transform energy, utility, and resource operations with AI-powered solutions, smart infrastructure, IoT, cloud technologies, and real-time analytics that improve efficiency, sustainability, and business performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Talk to Our Experts 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-transparent border border-gray-300 hover:border-white text-white font-semibold py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Explore Energy Solutions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 2: Building Smarter Energy Ecosystems ---
const BuildingSmarterEnergy = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-black mb-6">
          Building Smarter Energy Ecosystems
        </h2>
        
        <div className="text-gray-900 text-base md:text-lg lg:text-xl leading-relaxed space-y-6 max-w-5xl">
          <p>
            The energy and utilities sector is rapidly evolving through renewable energy, smart grids, automation, and digital
            innovation. Organizations must optimize operations, reduce environmental impact, and improve asset performance
            while delivering reliable services.
          </p>
          <p>
            Capyngen helps energy providers modernize infrastructure with AI, cloud computing, IoT, predictive analytics, and
            intelligent automation to create sustainable and future-ready operations.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: AI is Transforming Energy Operations ---
const AITransformingEnergy = () => {
  return (
    <section className="bg-[#3b82f6] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src="image_1df709.jpg" 
              alt="Engineers inspecting solar panels" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI is Transforming Energy Operations
            </h2>
            
            <div className="text-white text-base md:text-lg leading-relaxed space-y-5">
              <p>
                Artificial Intelligence enables predictive
                maintenance, energy forecasting, grid
                optimization, and intelligent resource
                management.
              </p>
              <p>
                Capyngen delivers AI-powered energy
                solutions that improve operational efficiency,
                reduce downtime, and support sustainability
                goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 4: Energy Solutions ---
const EnergySolutions = () => {
  const solutions = [
    {
      title: "Smart Energy Platforms",
      image: "image_1e58ff_smart.jpg", 
    },
    {
      title: "Utility Management Systems",
      image: "image_1e58ff_utility.jpg", 
    },
    {
      title: "Renewable Energy Analytics",
      image: "image_1e58ff_analytics.jpg", 
    }
  ];

  return (
    <section className="bg-[#0e1324] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide uppercase">
          Energy Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-[#090d18]/60 to-transparent opacity-95"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-5 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold tracking-widest uppercase flex items-center gap-3 opacity-90 group-hover:opacity-100">
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  READ MORE
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-5 mt-8 pr-2">
          <button className="text-gray-500 hover:text-gray-300 transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-300 transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};


// --- Section 5: Energy Insights Carousel Slider ---
const EnergyInsights = () => {
  const insights = [
    {
      title: "Smart Grid Modernization",
      image: "image_1df7c3_grid.jpg", 
    },
    {
      title: "Renewable Energy Management",
      image: "image_1df7c3_renewable.jpg", 
    },
    {
      title: "Predictive Asset Maintenance",
      image: "image_1df7c3_predictive.jpg", 
    },
    {
      title: "Sustainability Transformation",
      image: "image_1df7c3_sustainability.jpg", 
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-10 tracking-tight">
          Energy Insights
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          {insights.map((card, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[280px] sm:w-[320px] md:w-[360px] h-[440px] rounded-lg overflow-hidden snap-start group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-95"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-6 mt-4 pr-2">
          <button className="text-gray-400 hover:text-black transition-colors" aria-label="Previous insight">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next insight">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

// --- Section 6: AI That Powers Operational Excellence ---
const AIPowersExcellence = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              AI That Powers <br className="hidden lg:block" /> Operational Excellence
            </h2>
            
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5">
              <p>
                Artificial Intelligence helps energy providers
                forecast demand, optimize resources,
                automate maintenance, and improve
                operational visibility through real-time
                insights.
              </p>
              <p>
                Capyngen combines AI, IoT, and cloud
                technologies to build resilient, efficient, and
                sustainable energy ecosystems.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_1e589d.png" 
              alt="Two engineers high-fiving over solar panels against a blue sky" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 7: Client Testimonial ---
const ClientTestimonial = () => {
  return (
    <section className="bg-white pb-16 md:pb-24 w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="border-t border-b border-gray-400 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            {/* Quotation Icon */}
            <div className="text-blue-500 flex-shrink-0">
              <svg className="w-16 h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Testimonial Text & Attribution */}
            <div className="flex flex-col w-full">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                "Capyngen helped us modernize our utility infrastructure with
                intelligent automation and predictive analytics, improving
                reliability while supporting our sustainability goals."
              </p>
              
              <div className="flex flex-col items-end mt-8 w-full text-right">
                <h4 className="text-blue-600 text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                  Client Testimonial
                </h4>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black">
                  — Chief Technology Officer, Energy Utilities Company
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 8: Call to Action (Power the Future) ---
const CallToAction = () => {
  return (
    <section className="bg-[#03040c] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
          Power the Future with Capyngen
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-3xl">
          Modernize operations, improve sustainability, and accelerate digital 
          transformation with AI-powered solutions for energy, resources, 
          and utilities.
        </p>

        <button className="bg-transparent hover:bg-white/5 border border-gray-500 text-white font-medium py-3 px-8 rounded-full flex justify-center items-center transition-all duration-300">
          Start Your Energy Project 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const EnergyPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-900 flex flex-col">
      <EnergyHero />
      <BuildingSmarterEnergy />
      <AITransformingEnergy />
      <EnergySolutions />
      <EnergyInsights />
      <AIPowersExcellence />
      <ClientTestimonial />
      <CallToAction />
    </div>
  );
};

export default EnergyPage;