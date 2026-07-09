import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// ==========================================
// 1. Hero Section
// ==========================================
const ManufacturingHero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center bg-zinc-900 overflow-hidden font-sans">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/path-to-your-robotic-manufacturing-image.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-white">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1 mb-6 rounded-sm">
          Manufacturing & Automotive
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15] mb-6">
          Intelligent Manufacturing for the <br className="hidden md:inline" />
          Industry 4.0 Era
        </h1>

        <p className="text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
          Capyngen drives digital transformation for manufacturers and automotive companies—deploying 
          AI across quality control, predictive maintenance, supply chain resilience, and connected vehicle ecosystems.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors duration-200 group">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded border border-white/30 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Value Chain Section
// ==========================================
const ManufacturingValueChain = () => {
  const capabilities = [
    { icon: "⚙️", title: "Predictive Maintenance" },
    { icon: "🤖", title: "Robotics Integration" },
    { icon: "📊", title: "OEE Optimization" },
    { icon: "🔗", title: "Supply Chain AI" },
  ];

  return (
    <section className="bg-blue-600 text-white py-20 px-6 md:px-12 lg:px-16 w-full font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <img
            src="/path-to-kuka-robot-image.jpg"
            alt="KUKA Robotic Arm"
            className="w-full aspect-square object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          {capabilities.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer px-5 py-4 rounded-lg border border-white/5">
              <span className="text-xl leading-none">{item.icon}</span>
              <span className="font-medium text-[15px]">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full h-full justify-center">
          <h2 className="text-3xl md:text-[34px] font-bold mb-6 leading-[1.2]">
            From Factory Floor to Connected Vehicle: AI Across the Manufacturing Value Chain
          </h2>
          <p className="text-blue-100/90 text-sm md:text-[15px] leading-relaxed mb-8">
            Manufacturing is undergoing its most profound transformation since mass production. Capyngen delivers 
            end-to-end AI solutions that cover computer vision quality inspection, predictive asset maintenance, 
            digital twin modeling, and connected vehicle analytics—helping OEMs and tier-1 suppliers build smarter 
            factories and deliver superior vehicles at lower cost.
          </p>
          <div>
            <a href="#manufacturing-ai" className="inline-flex items-center gap-2 font-medium text-white border-b border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors group">
              See manufacturing AI
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. Insights Carousel Section
// ==========================================
const ManufacturingInsights = () => {
  const insights = [
    { id: 1, title: "Computer Vision Quality Control on the Production Line", imageSrc: "/path-to-image-1.jpg", link: "#" },
    { id: 2, title: "Predictive Maintenance: Eliminating Unplanned Downtime", imageSrc: "/path-to-image-2.jpg", link: "#" },
    { id: 3, title: "Digital Twin Technology for Automotive Engineering", imageSrc: "/path-to-image-3.jpg", link: "#" },
    { id: 4, title: "Connected Vehicle Data Platforms and OTA Updates", imageSrc: "/path-to-image-4.jpg", link: "#" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto font-sans bg-white text-zinc-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Manufacturing & Automotive Insights</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-zinc-200 hover:bg-zinc-50 rounded transition-colors text-zinc-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 border border-zinc-200 hover:bg-zinc-50 rounded transition-colors text-zinc-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight) => (
          <a key={insight.id} href={insight.link} className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer block">
            <img src={insight.imageSrc} alt={insight.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-4">{insight.title}</h3>
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-3.5 h-3.5" /> READ MORE
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 4. Solutions Tabs Section
// ==========================================
const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const tabs = ['Industry', 'Technology', 'Products & Platforms'];
  const solutions = [
    { id: 1, title: "Smart Factory AI Platform", description: "CONNECT MACHINES, SENSORS, AND WORKERS INTO A UNIFIED INTELLIGENCE LAYER FOR REAL-TIME OEE OPTIMIZATION.", imageSrc: "/path-to-image-1.jpg" },
    { id: 2, title: "Predictive Maintenance Suite", description: "USE ML TO PREDICT EQUIPMENT FAILURES BEFORE THEY OCCUR, REDUCING MAINTENANCE COSTS BY UP TO 40%.", imageSrc: "/path-to-image-2.jpg" },
    { id: 3, title: "Connected Vehicle Intelligence", description: "PROCESS IN-VEHICLE TELEMETRY TO ENABLE OTA UPDATES, USAGE-BASED INSURANCE, AND FLEET ANALYTICS.", imageSrc: "/path-to-image-3.jpg" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto font-sans bg-white text-zinc-900">
      <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-8">Solutions</h2>
      <div className="border-b border-zinc-100 mb-8">
        <nav className="-mb-px flex gap-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab ? 'border-blue-600 text-zinc-900' : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300'}`}>
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <div key={solution.id} className="group relative h-[480px] rounded-xl overflow-hidden shadow-sm">
            <img src={solution.imageSrc} alt={solution.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <h3 className="text-white font-bold text-xl mb-3">{solution.title}</h3>
              <p className="text-zinc-300 text-[10px] md:text-xs font-medium tracking-[0.05em] uppercase leading-relaxed">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 5. Future of AI Section
// ==========================================
const FutureOfAI = () => (
  <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-16 w-full font-sans">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="w-full">
        <img src="/path-to-kuka-future.jpg" alt="KUKA Robotic Arm" className="w-full h-auto object-cover rounded-[20px] shadow-sm" />
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-zinc-900 mb-6 leading-[1.2] tracking-tight">
          The Future of AI in Manufacturing<br className="hidden lg:block" /> and Automotive
        </h2>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
          Autonomous vehicles, humanoid robots, and AI-driven process optimization are no 
          longer distant concepts—they are production realities. Capyngen helps 
          manufacturers accelerate toward Industry 4.0, deploying scalable AI that improves 
          yield, reduces waste, and enables the fully autonomous factory of tomorrow.
        </p>
      </div>
    </div>
  </section>
);

// ==========================================
// 6. Intelligent Factories Section
// ==========================================
const IntelligentFactories = () => (
  <section className="bg-[#0f172a] py-20 px-6 md:px-12 lg:px-16 w-full font-sans">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="w-full">
        <img src="/path-to-car-assembly-line.jpg" alt="Automated car assembly line" className="w-full h-auto object-cover rounded-2xl shadow-xl" />
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6 leading-[1.2] tracking-tight">
          Building Intelligent Factories and<br className="hidden lg:block" /> Connected Vehicles with AI
        </h2>
        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-8">
          Discover how Capyngen helps manufacturing and automotive companies deploy AI at 
          scale—from robotics and computer vision on the production line to predictive 
          analytics across global supplier networks and connected vehicle ecosystems.
        </p>
        <div>
          <a href="#blog" className="inline-flex items-center gap-2 text-[15px] font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors group w-fit">
            Read Blog
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ==========================================
// 7. Testimonial Section
// ==========================================
const TestimonialSection = () => (
  <section className="bg-white py-16 px-6 md:px-12 lg:px-16 w-full font-sans">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-start">
      <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 pt-1">
        <h3 className="text-blue-500 text-xl md:text-2xl font-bold uppercase mb-3">Thomas Müller</h3>
        <p className="text-slate-700 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[250px]">
          Chief Manufacturing Officer, European Auto Group
        </p>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 flex gap-4 md:gap-6">
        <div className="shrink-0 mt-1">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-200 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-blue-500 text-xl md:text-2xl lg:text-[28px] font-bold leading-snug">
          Capyngen's predictive maintenance AI reduced our unplanned downtime by 35% in the first 
          year and generated millions in savings across our European plants. The ROI was clear within months.
        </p>
      </div>
    </div>
  </section>
);

// ==========================================
// 8. Call To Action (New Section)
// ==========================================
const CTASection = () => {
  return (
    <section className="bg-[#080713] py-24 px-6 md:px-12 lg:px-16 w-full font-sans text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[44px] font-bold text-white mb-6 leading-[1.2]">
          Transform Your Manufacturing <br className="hidden md:block" /> Operations with Capyngen
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Build AI-powered smart factories and connected vehicle platforms that 
          improve quality, reduce downtime, and accelerate your Industry 4.0 journey at 
          global scale.
        </p>
        
        <button className="inline-flex items-center gap-2 bg-[#252827] hover:bg-[#323634] text-white border border-zinc-600/50 px-6 py-3 text-sm font-medium transition-colors duration-200 group">
          Start Your Project
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

// ==========================================
// MAIN PAGE COMPONENT (Export)
// ==========================================
export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ManufacturingHero />
      <ManufacturingValueChain />
      <ManufacturingInsights />
      <SolutionsSection />
      <FutureOfAI />
      <IntelligentFactories />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}