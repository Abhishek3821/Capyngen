import React, { useState, useRef, useEffect } from 'react';

// Importing images sequentially as per the provided folder structure
import img1 from "../assets/Energy, Resources, and Utilities/1.png";
import img2 from "../assets/Energy, Resources, and Utilities/2.png";
import img3 from "../assets/Energy, Resources, and Utilities/3.png";
import img4 from "../assets/Energy, Resources, and Utilities/4.png";
import img5 from "../assets/Energy, Resources, and Utilities/5.png";
import img6 from "../assets/Energy, Resources, and Utilities/6.png";
import img7 from "../assets/Energy, Resources, and Utilities/7.png";
import img8 from "../assets/Energy, Resources, and Utilities/8.png";
import img9 from "../assets/Energy, Resources, and Utilities/9.png";
import img10 from "../assets/Energy, Resources, and Utilities/10.png";

// --- Scroll Animation Wrapper Component ---
interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  direction = "up", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = "transition-all duration-1000 ease-out";
  const hiddenClass = {
    up: "opacity-0 translate-y-12",
    down: "opacity-0 -translate-y-12",
    left: "opacity-0 translate-x-12",
    right: "opacity-0 -translate-x-12",
    none: "opacity-0"
  }[direction];

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : hiddenClass} ${className}`}
    >
      {children}
    </div>
  );
};

// Global scroll helpers
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactClick = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  window.location.href = "mailto:hello@capyngen.com";
};

// --- Section 1: Energy Hero ---
const EnergyHero = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden pt-0 pb-24 sm:pb-32 md:pb-40 lg:pb-48 bg-[#0a192f]">
      {/* Background Image mapped to 1.png without cropping height arbitrarily */}
      <div className="absolute inset-0 z-0">
        <img 
          src={img1} 
          alt="Energy Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent z-0"></div>

      <RevealOnScroll direction="up" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start text-white pt-8 sm:pt-12 pb-12">
          
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest text-gray-200 mb-4 uppercase">
            <span>INDUSTRIES | ENERGY, RESOURCES & UTILITIES</span>
          </div>
          
          <div className="text-xs md:text-sm font-semibold tracking-widest text-gray-300 mb-6 uppercase">
            STRENGTHENING A ECO-FRIENDLY DIGITAL FUTURE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Insightful Energy.<br />
            With Green Growth.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
            Renovate energy smart grid software development, value, and assets management with AI-powered services, high-end infrastructure, IoT, cloud, and real-time data logic that enhance efficiency, eco-friendly, and market performance. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded flex justify-center items-center transition-colors duration-300"
            >
              Connect With Our Experts 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="bg-transparent border border-gray-300 hover:border-white text-white font-semibold py-3 px-6 rounded flex justify-center items-center transition-colors duration-300"
            >
              Examine Energy Solution
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// --- Section 2: Building Smarter Energy Ecosystems ---
const BuildingSmarterEnergy = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <RevealOnScroll direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase text-black mb-6">
          Boosting Exclusive Energy Ecosystems 
        </h2>
        
        <div className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-6 max-w-5xl">
          <p>
            Boosting an organization's operations, minimizing impact on nature, and enhancing resources along with serving reliable solutions. Utilities and energy industries are rapidly developing through sustainable energy, automation, and online transformation. 
          </p>
          <p>
            Capyngen supports energy providers to upgrade the foundation with AI, cloud solution, IoT, forward-looking analytics, and smart automation to build sustainable and modernize operations. 
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// --- Section 3: AI is Transforming Energy Operations ---
const AITransformingEnergy = () => {
  return (
    <section className="bg-[#3b82f6] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <RevealOnScroll direction="left" className="w-full flex justify-center lg:justify-start">
            <img 
              src={img2} 
              alt="Engineers inspecting solar panels" 
              className="w-full max-w-lg lg:max-w-full h-auto rounded-lg object-contain shadow-lg"
            />
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="flex flex-col justify-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Artificial Intelligence is Innovating Energy Processes
            </h2>
            
            <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed space-y-5">
              <p>
                AI allows you to predict maintenance, energy calculation, enhance framework, and useful resources for management.
              </p>
              <p>
                Capyngen offers machine learning  energy solutions that modify functional expertise, lower the downtime, and provide guidance for sustainability targets. 
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

// --- Section 4: Energy Solutions ---
const EnergySolutions = () => {
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
    { title: "Enhance & Modern Framework", image: img3 },
    { title: "Sustainable Energy Operations", image: img4 },
    { title: "Forecasting Resources Support", image: img5 },
    { title: "Eco-Friendly Energy Innovation", image: img6 }
  ];

  return (
    <section id="solutions" className="bg-[#0e1324] py-16 md:py-24 w-full scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide uppercase">
            Energy Observation
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {solutions.map((item, index) => (
              <div 
                key={index} 
                onClick={handleContactClick}
                className="relative group rounded-md overflow-hidden bg-black shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex-none w-[280px] sm:w-[320px] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.125rem)] snap-start flex flex-col"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-[#090d18]/60 to-transparent opacity-95 pointer-events-none"></div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-5 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={300} className="flex justify-end gap-4 mt-6 pr-2 lg:hidden">
          <button onClick={() => scroll('left')} className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7-7h18" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </RevealOnScroll>

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

// --- Section 5: AI That Powers Operational Excellence ---
const AIPowersExcellence = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <RevealOnScroll direction="left" className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Artificial Intelligence That Operate Excellence
            </h2>
            
            <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-5">
              <p>
                AI provides support and helps therenewable energy software development sector forecast demand, upgrade resources, systematise maintenance, and refine functional clarity through real-time data overview.
              </p>
              <p>
                Capyngen merges Artificial Intelligence, IoT, and cloud solutions to create adotable, logical, and eco-logical energy systems. 
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-end">
            <img 
              src={img7} 
              alt="Two engineers high-fiving over solar panels against a blue sky" 
              className="w-full max-w-lg lg:max-w-full h-auto rounded-lg object-contain"
            />
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

// --- Section 6: Energy Insights Carousel Slider ---
const EnergyInsights = () => {
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
    { title: "Advanced Energy Programme", image: img8 },
    { title: "Utilities Software Development", image: img9 },
    { title: "Eco-friendly Energy Analysis", image: img10 }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-10 tracking-tight">
            Sustainable Energy Blog
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {insights.map((card, index) => (
              <div 
                key={index} 
                onClick={handleContactClick}
                className="relative flex-none w-[280px] sm:w-[320px] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-lg overflow-hidden snap-start group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 bg-black flex flex-col"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-auto block opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-95 pointer-events-none"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100 mt-2">
                    Read more 
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={300} className="flex justify-end gap-4 mt-4 pr-2">
          <button onClick={() => scroll('left')} className="p-2 border border-gray-300 text-gray-500 hover:text-black hover:bg-gray-100 rounded transition-colors" aria-label="Previous insight">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7-7h18" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-2 border border-gray-300 text-gray-500 hover:text-black hover:bg-gray-100 rounded transition-colors" aria-label="Next insight">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </RevealOnScroll>

      </div>
    </section>
  );
};

// --- Section 7: Client Testimonial ---
const ClientTestimonial = () => {
  return (
    <section className="bg-white pb-16 md:pb-24 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up" className="border-t border-b border-gray-400 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            {/* Quotation Icon */}
            <div className="text-blue-500 flex-shrink-0">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Testimonial Text & Attribution */}
            <div className="flex flex-col w-full">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                "Capyngen provided us guidance for our sustainability goals, assisting us with utility framework, enhanced automation and forecasting analysis. Their dedicated expert team were reliabile foundation for our utility software solutions.”
              </p>
              
              <div className="flex flex-col items-end mt-8 w-full text-right">
                <h4 className="text-blue-600 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                  CLIENT TESTIMONIAL
                </h4>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-black">
                  — Chief Technology Officer, Energy & Utilities Company 
                </p>
              </div>
            </div>
            
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- Section 8: FAQs ---
const EnergyFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is energy management software development?", answer: "Energy software is the process of innovating the energy industries with a digital platform management to reduce manual tasks, better framework and corporate sustainability." },
    { question: "What energy technology solutions does Capyngen offer?", answer: "For energy and utilities technology solutions, Capyngen offers online software-based solutions and a smart city platform." },
    { question: "What utility IT services do you provide?", answer: "Capyngen’s IT services includes utility IT services, cybersecurity, technical support, system integration and cloud solutions for utilities. " },
    { question: "Do you work with both energy and utility companies?", answer: "Yes, Capyngen works with both energy and utilities industries and provides power utilities, water utilities, gas providers, and eco-friendly energy. " },
    { question: "How long does a typical energy software project take?", answer: "It depends on the project, while a simple dashboard can take several weeks, a full framework platform project might take several months. " },
    { question: "Why choose custom software over ready-made utility products?", answer: "Choosing a custom software would let you personalize your content, design and adapt according to your team. On the other hand, a ready-made software would often force you to match the process to software." },
    { question: "How does smart grid software help reduce outages?", answer: "Smart grin software helps you reduce outages with real-time analysis, fast tracking issues and even help you with the solution." },
    { question: "Why choose Capyngen as an energy software development company?", answer: "Capyngen offers high-tech energy software development, blend creativity with tech excellence and deliver specific, customised and modern solutions" },
    { question: "Do you offer cybersecurity services for utility management software?", answer: "Yes. With the given sensitivity utilities data, we build cybersecurity security into the entire system, along with the dedicated cybersecurity services for existing systems. " },
    { question: "Can Capyngen support us after the software is built?", answer: "Yes, Capyngen offers post-launch support and manage services for their clients." }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-widest text-black mb-12 text-center uppercase">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-white rounded-md shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg pr-4 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className={`text-blue-600 text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 sm:p-5 pt-0 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- Section 9: Call to Action (Power the Future) ---
const CallToAction = () => {
  return (
    <section className="bg-[#03040c] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      <RevealOnScroll direction="up" className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
          Build the Tomorrow with Us
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed max-w-3xl">
          Build your custom energy software development, advance sustainability, and fast track your digital innovation with AI-powered solutions for energy, resources, and utilities software development with Capyngen’s expert team.
        </p>

        <button 
          onClick={handleContactClick}
          className="bg-transparent hover:bg-white/10 border border-gray-500 text-white font-medium py-3 px-6 sm:px-8 rounded-full flex justify-center items-center transition-all duration-300"
        >
          Start Your Project Here → 
        </button>
      </RevealOnScroll>
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
      <AIPowersExcellence />
      <EnergyInsights />
      <ClientTestimonial />
      <EnergyFAQs />
      <CallToAction />
    </div>
  );
};

export default EnergyPage;