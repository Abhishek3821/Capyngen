import  { useState, useRef } from 'react';
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
          MANUFACTURING & AUTOMOTIVE
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15] mb-6">
          Smart Manufacturing Solutions for <br className="hidden md:inline" />
          the Industry 4.0 Solutions Era
        </h1>

        <p className="text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
          As a manufacturing software development company, Capyngen drives digital transformation for manufacturers and automotive companies—deploying AI across quality assurance, and intelligent vehicle ecosystems.
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
            From Production Lines to Smart Vehicles: AI Across the Manufacturing Ecosystem
          </h2>
          <p className="text-blue-100/90 text-sm md:text-[15px] leading-relaxed mb-8">
            Manufacturing is experiencing its most significant evolution since the industrial revolution. Our manufacturing software development expertise delivers comprehensive AI solutions spanning computer vision for quality inspection, and connected vehicle analytics—helping OEMs and tier-1 suppliers build smarter production facilities and deliver superior vehicles at reduced costs.
          </p>
          <div>
            <a href="#manufacturing-ai" className="inline-flex items-center gap-2 font-medium text-white border-b border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors group">
              See Manufacturing AI
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
    { id: 1, title: "Computer Vision Quality Control on Production Lines", imageSrc: "/path-to-image-1.jpg", link: "#" },
    { id: 2, title: "Predictive Maintenance: Eliminating Unplanned Downtime", imageSrc: "/path-to-image-2.jpg", link: "#" },
    { id: 3, title: "Digital Twin Technology for Automotive Engineering", imageSrc: "/path-to-image-3.jpg", link: "#" },
    { id: 4, title: "Connected Vehicle Data Platforms and OTA Updates", imageSrc: "/path-to-image-4.jpg", link: "#" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto font-sans bg-white text-zinc-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Manufacturing & Automotive Insights</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll('left')} className="p-2 border border-zinc-200 hover:bg-zinc-50 rounded transition-colors text-zinc-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="p-2 border border-zinc-200 hover:bg-zinc-50 rounded transition-colors text-zinc-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {insights.map((insight) => (
          <a key={insight.id} href={insight.link} className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer block min-w-[280px] w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
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
  const tabs = ['Industry', 'Products & Platforms'];
  const solutions = [
    { id: 1, title: "Smart Factory AI Platform", description: "UNIFY MACHINES, SENSORS, AND WORKFORCE INTO A SINGLE INTELLIGENCE LAYER FOR REAL-TIME OEE OPTIMIZATION, ENABLING DATA-DRIVEN DECISIONS ACROSS YOUR ENTIRE PRODUCTION FLOOR.", imageSrc: "/path-to-image-1.jpg" },
    { id: 2, title: "Predictive Maintenance Suite", description: "UTILIZE MACHINE LEARNING TO FORECAST EQUIPMENT FAILURES BEFORE THEY OCCUR, REDUCING MAINTENANCE EXPENSES BY UP TO 40% AND ENHANCING OVERALL EQUIPMENT EFFECTIVENESS.", imageSrc: "/path-to-image-2.jpg" },
    { id: 3, title: "Connected Vehicle Intelligence", description: "PROCESS IN-VEHICLE TELEMETRY DATA TO ENABLE OTA UPDATES, USAGE-BASED INSURANCE MODELS, AND COMPREHENSIVE FLEET ANALYTICS, CREATING NEW REVENUE OPPORTUNITIES.", imageSrc: "/path-to-image-3.jpg" }
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
          With custom manufacturing software, Capyngen helps manufacturers accelerate their Industry 4.0 solutions journey, deploying scalable AI that enhances yield, and enables the fully autonomous factory of tomorrow. Our automotive software solutions are purpose-built to address the unique challenges of the automotive sector.
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
          Building Smart Factories and<br className="hidden lg:block" /> Connected Vehicles with AI
        </h2>
        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-8">
          With our manufacturing technology solutions, we help you achieve operational excellence at every level of your organization. Our industrial software development expertise ensures robust, scalable, and future-ready solutions.
        </p>
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
        <h3 className="text-blue-500 text-xl md:text-2xl font-bold uppercase mb-3">THOMAS MÜLLER</h3>
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
          "Capyngen's predictive maintenance AI reduced our unplanned downtime by 35% in the first year and generated millions in savings across our European plants. The ROI was clear within months."
        </p>
      </div>
    </div>
  </section>
);

// ==========================================
// 8. FAQ Section
// ==========================================
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqData = [
    { q: "Q1. What is manufacturing software development?", a: "Manufacturing software development involves creating digital solutions for production planning, quality control, inventory management, predictive maintenance, and supply chain optimization in manufacturing environments." },
    { q: "Q2. How does AI help in manufacturing?", a: "AI helps manufacturers automate quality inspection, predict equipment failures, optimize production schedules, reduce waste, and improve overall operational efficiency through AI in manufacturing applications." },
    { q: "Q3. What is Industry 4.0?", a: "Industry 4.0 refers to the fourth industrial revolution, characterized by the integration of IoT, AI, cloud computing, and automation into manufacturing processes for smarter, more efficient production." },
    { q: "Q4. What is predictive maintenance?", a: "Predictive maintenance uses machine learning algorithms to analyze equipment data and predict potential failures before they occur, reducing unplanned downtime and maintenance costs." },
    { q: "Q5. How does Capyngen help automotive companies?", a: "Capyngen provides automotive software solutions including connected vehicle platforms, quality control systems, and predictive analytics for global operations." },
    { q: "Q6. What is digital twin technology in manufacturing?", a: "Digital twin technology creates virtual replicas of physical assets, enabling manufacturers to simulate performance, test scenarios, and optimize designs without costly physical prototypes." },
    { q: "Q7. What is a connected vehicle platform?", a: "A connected vehicle platform processes in-vehicle telemetry data, enables over-the-air updates, and provides real-time analytics for fleet management, usage-based insurance, and enhanced driver experiences." },
    { q: "Q8. Can Capyngen integrate with existing manufacturing systems?", a: "Yes, Capyngen specializes in seamless integration with legacy manufacturing systems, ensuring minimal disruption while modernizing operations through custom manufacturing software." },
    { q: "Q9. What is computer vision in manufacturing?", a: "Computer vision uses AI-powered cameras and algorithms to inspect products in real-time, detect defects, and ensure quality standards on production lines." },
    { q: "Q10. Why choose Capyngen for manufacturing solutions?", a: "Capyngen combines deep industry expertise, cutting-edge AI technology, and a client-first approach to deliver scalable manufacturing technology solutions that drive real business results." },
    { q: "Q11. How does AI improve supply chain resilience?", a: "AI helps predict disruptions, optimize inventory levels, automate supplier communications, and enable real-time visibility across global supply networks." },
    { q: "Q12. What is OTA update in automotive?", a: "OTA (Over-The-Air) updates allow automotive manufacturers to remotely update vehicle software, fix bugs, and add new features without requiring physical service visits." },
    { q: "Q13. How long does it take to implement manufacturing software?", a: "Timeline depends on complexity. Simple solutions take 2-4 months, while enterprise platforms can take 8-12 months with proper planning and execution." },
    { q: "Q14. What is the cost of manufacturing software development?", a: "Cost varies based on features, scale, and complexity. Basic solutions start from ₹10-20 lakh, while enterprise platforms can exceed ₹1 crore. Contact Capyngen for a personalized quote." },
    { q: "Q15. Does Capyngen offer post-launch support?", a: "Yes, we provide continuous support, maintenance, and optimization services to ensure your industrial software development solutions perform optimally at all times." }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 w-full font-sans">
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
  );
};

// ==========================================
// 9. Call To Action Section
// ==========================================
const CTASection = () => {
  return (
    <section className="bg-[#080713] py-24 px-6 md:px-12 lg:px-16 w-full font-sans text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[44px] font-bold text-white mb-6 leading-[1.2]">
          Transform Your Manufacturing <br className="hidden md:block" /> Operations with Capyngen
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Our industrial software development expertise ensures your solutions are built for performance, scalability, and long-term success your Industry 4.0 solutions journey. As a leading manufacturing software development company, we deliver results that matter.
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
      <FAQSection />
      <CTASection />
    </div>
  );
}