import React, { useState, useRef, useEffect } from 'react';

// Importing images sequentially as per the provided folder structure
import img1 from "../assets/banking/1.png";
// import img2 from "../assets/banking/2.png";
import img3 from "../assets/banking/3.png";
import img4 from "../assets/banking/04.png";
import img5 from "../assets/banking/05.png";
import img6 from "../assets/banking/06.png";
import img7 from "../assets/banking/07.png";

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

const Banking: React.FC = () => {
  // State for the Banking Solutions Carousel
  const [activeTab, setActiveTab] = useState('Digital Banking');
  
  // State for FAQs (Accordion)
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Ref and scroll handler for Banking Insight section
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

  // Ref and scroll handler for Banking Solutions Carousel section
  const solutionsScrollRef = useRef<HTMLDivElement>(null);

  const scrollSolutions = (direction: 'left' | 'right') => {
    if (solutionsScrollRef.current) {
      const scrollAmount = solutionsScrollRef.current.clientWidth;
      solutionsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const faqData = [
    { q: "What is Banking software development?", a: "Banking software development is the process of creating custom applications, platforms, and systems for banks and financial institutions to manage operations, customer relationships, and transactions." },
    { q: "What are Digital banking solutions?", a: "Digital banking solutions are technology platforms that enable banks to offer online and mobile banking services, including internet banking, mobile apps, and digital wallets." },
    { q: "How does AI help in banking?", a: "AI helps banks automate operations, detect fraud, personalize customer experiences, assess credit risk, and improve compliance through advanced banking technology solutions." },
    { q: "What is Custom banking software development?", a: "Custom banking software development involves building tailored software solutions designed specifically to meet the unique needs and workflows of a financial institution." },
    { q: "Why are Banking IT services important?", a: "Banking IT services help banks modernize legacy systems, enhance security, improve customer experience, and stay competitive in a digital-first world." },
    { q: "What is a banking software development company?", a: "A banking software development company specializes in building technology solutions for banks, NBFCs, and financial institutions." },
    { q: "What are Banking technology solutions?", a: "Banking technology solutions include software, platforms, and tools that help banks manage operations, customer service, risk, compliance, and innovation." },
    { q: "What is Banking digital transformation?", a: "Banking digital transformation is the process of using technology to modernize banking operations, improve customer experiences, and drive business growth." },
    { q: "What is Financial software development?", a: "Financial software development refers to building software applications for the financial sector, including banking, investment, insurance, and lending platforms." },
    { q: "What are Enterprise banking solutions?", a: "Enterprise banking solutions are large-scale software platforms designed for enterprise-level banks and financial institutions with complex operational needs." },
    { q: "How secure are Banking software solutions?", a: "Banking software solutions are built with enterprise-grade security, encryption, and compliance frameworks to protect sensitive financial data." },
    { q: "What is a digital lending platform?", a: "It is a technology platform that automates the loan origination, underwriting, approval, and disbursement process as part of banking application development." },
    { q: "What is open banking?", a: "Open banking allows third-party developers to build applications and services around a financial institution using secure APIs, a key part of modern banking software solutions." },
    { q: "How long does it take to build banking software?", a: "The timeline depends on complexity. Simple applications take 3-6 months, while enterprise platforms can take 12-18 months with custom banking software development." },
    { q: "Why choose Capyngen for banking solutions?", a: "Capyngen combines deep technology expertise, security-first approach, and industry knowledge to deliver scalable and intelligent banking software development services and banking IT services." }
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. Hero Banner Section (Dark Mode) */}
      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <RevealOnScroll direction="right" className="col-span-12 md:col-span-6 lg:col-span-5 space-y-8 pr-8">
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
                We help banks and financial institutions with the help of our Banking Software Development Services to modernize operations, enhance customer experiences, and drive growth with AI, cloud, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 bg-[#0056D2] hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Talk to Our Experts
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Explore Banking Solutions
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. Text Content Section (Updated to match image layout) */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden flex items-center min-h-[450px]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Content */}
          <RevealOnScroll direction="up" className="md:col-span-8 lg:col-span-7">
            <h2 className="text-sm font-bold tracking-[0.1em] uppercase text-black mb-6">
              BANKING SOLUTIONS
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
              Empower your financial institution with AI-powered banking software solutions, digital transformation, cloud technologies, cybersecurity, and intelligent automation. We help banks deliver seamless customer experiences while ensuring security, compliance, and operational excellence through our comprehensive Banking Software Development Services.
            </p>
          </RevealOnScroll>

        </div>

        {/* Right Side Abstract Graphic (Inline SVG) */}
        <RevealOnScroll direction="left" delay={200} className="hidden md:flex absolute right-0 top-0 bottom-0 w-1/3 md:w-5/12 lg:w-5/12 items-center justify-end pointer-events-none">
          <svg 
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-[500px] object-cover translate-x-16 lg:translate-x-8"
          >
            {/* Base grid lines simulating the sketch effect in the image */}
            <rect x="150" y="20" width="80" height="80" stroke="#1b64f2" strokeWidth="6" />
            <rect x="145" y="15" width="90" height="90" stroke="#1b64f2" strokeWidth="1" opacity="0.6" />
            <rect x="155" y="25" width="70" height="70" stroke="#1b64f2" strokeWidth="1" opacity="0.4" />
            
            <rect x="70" y="60" width="120" height="80" stroke="#1b64f2" strokeWidth="6" />
            <rect x="65" y="55" width="130" height="90" stroke="#1b64f2" strokeWidth="1" opacity="0.6" />
            
            <polyline points="230,60 400,60" stroke="#1b64f2" strokeWidth="6" />
            <polyline points="230,55 400,55" stroke="#1b64f2" strokeWidth="1" opacity="0.6" />

            <polyline points="400,120 180,120 180,220 50,220 50,340 180,340 180,400" stroke="#1b64f2" strokeWidth="6" />
            <polyline points="400,115 175,115 175,215 45,215 45,345 185,345 185,400" stroke="#1b64f2" strokeWidth="1" opacity="0.6" />
            <polyline points="400,125 185,125 185,225 55,225 55,335 175,335 175,400" stroke="#1b64f2" strokeWidth="1" opacity="0.4" />
            
            <polyline points="70,290 70,350 400,350" stroke="#1b64f2" strokeWidth="6" />
            <polyline points="65,290 65,355 400,355" stroke="#1b64f2" strokeWidth="1" opacity="0.6" />
            <polyline points="75,290 75,345 400,345" stroke="#1b64f2" strokeWidth="1" opacity="0.4" />
          </svg>
        </RevealOnScroll>
      </section>

      {/* 3. Accelerating Future Section (Blue Theme) */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealOnScroll direction="right" className="w-full flex justify-center md:justify-start">
            <img 
              src={img3} 
              alt="Exterior of a modern bank building" 
              className="w-full h-auto block object-cover shadow-lg rounded-md"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Accelerating the Future<br className="hidden lg:block" /> of Banking
            </h2>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed">
              Today's banking customers expect seamless digital experiences, and secure transactions across every touchpoint. By our banking IT services, we helps banks modernize legacy systems, strengthen cybersecurity, and build intelligent customer experiences using AI, cloud computing, and advanced analytics. 
            </p>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed">
              As a leading banking software development company, we understand the regulatory, security, and operational demands of all bank types like traditional bank, fintech startup, NBFC, or digital lender.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Banking Insights Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with Navigation Buttons */}
          <RevealOnScroll direction="up" className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Banking Insight
            </h2>
            
            {/* Scroll Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scrollInsights('left')} 
                className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer rounded-sm"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scrollInsights('right')} 
                className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer rounded-sm"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </RevealOnScroll>

          {/* Scrollable Container */}
          <RevealOnScroll direction="up" delay={100}>
            <div 
              ref={insightScrollRef}
              className="flex overflow-x-auto gap-6 lg:gap-8 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Card 1 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${img4})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">AI-Powered Fraud<br />Detection</h3>
                  <div className="flex items-center text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">READ MORE</div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${img5})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Digital Lending<br />Platforms</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${img6})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Open Banking &<br />APIs</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundColor: '#2f64ed' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Customer Analytics &<br />Personalization</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
              
              {/* Card 5 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundColor: '#1e3a8a' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Regulatory Compliance<br />Automation</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
              
              {/* Card 6 */}
              <div onClick={handleContactClick} className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer shadow-md flex-none w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundColor: '#0f172a' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Predictive Risk<br />Management</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. Intelligent Automation Section */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll direction="right" className="space-y-6">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-600">INTELLIGENT AUTOMATION</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              AI That Powers Smarter<br className="hidden lg:block" /> Financial Decisions
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Leverage AI to automate repetitive operations, personalize banking experiences, detect fraud, improve compliance, and gain actionable business insights.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Our custom banking software development solutions, we combines machine learning, predictive analytics, and intelligent automation to help financial institutions operate faster, smarter, and more securely. 
            </p>
            <div className="pt-6">
              <button onClick={() => scrollToSection('solutions')} className="group flex items-center gap-4 text-lg font-semibold text-black hover:text-[#2f64ed] transition-colors">
                Explore All Solutions
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2f64ed] text-white transition-transform group-hover:translate-x-1 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="w-full flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px]">
              <img src={img7} alt="Banking app on smartphone" className="w-full h-auto block object-cover rounded-md shadow-md" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f64ed]/60 via-transparent to-transparent pointer-events-none mix-blend-multiply rounded-md"></div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. Banking Solutions Carousel Section (Dark Theme) */}
      <section id="solutions" className="bg-[#0f172a] py-24 px-6 md:px-16 lg:px-24 text-white scroll-mt-10">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide uppercase">
              BANKING SOLUTIONS
            </h2>
            <div className="flex overflow-x-auto border-b border-gray-700 mb-12 text-center text-sm md:text-base hide-scrollbar">
              {['Digital Banking'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-4 whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'border-[#2f64ed] text-white font-medium' 
                      : 'border-transparent text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={100}>
            <div 
              ref={solutionsScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div onClick={handleContactClick} className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between cursor-pointer group">
                <div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Digital Banking<br />Platforms</h3>
                  <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Create modern web and<br />mobile banking apps<br />that customers adore.</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors uppercase">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Read More
                </div>
              </div>
              
              <div onClick={handleContactClick} className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between cursor-pointer group">
                <div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">AI Customer<br />Support</h3>
                  <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Use intelligent chatbots<br />and virtual banking<br />assistants.</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors uppercase">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Read More
                </div>
              </div>

              <div onClick={handleContactClick} className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between cursor-pointer group">
                <div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Loan & Mortgage<br />Management</h3>
                  <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Digitize loan origination,<br />approvals, underwriting,<br />and servicing.</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors uppercase">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Read More
                </div>
              </div>

              <div onClick={handleContactClick} className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between cursor-pointer group">
                <div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Wealth Management<br />Platforms</h3>
                  <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Develop digital platforms<br />with AI-driven<br />recommendations.</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors uppercase">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Read More
                </div>
              </div>

              <div onClick={handleContactClick} className="bg-gradient-to-b from-[#b5d1f8] to-[#edf3fb] p-10 rounded-lg min-w-[320px] w-full max-w-[400px] shrink-0 snap-start flex flex-col justify-between cursor-pointer group">
                <div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 leading-tight">Core Banking<br />Modernization</h3>
                  <p className="text-[#1e3a8a] text-sm font-bold tracking-wider uppercase leading-relaxed mb-12">Migrate legacy core<br />banking systems to modern,<br />for improved performance.</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors uppercase">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  Read More
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-6 pr-4">
              <button 
                onClick={() => scrollSolutions('left')} 
                aria-label="Scroll left"
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </button>
              <button 
                onClick={() => scrollSolutions('right')} 
                aria-label="Scroll right"
                className="text-[#3b82f6] hover:text-blue-400 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. Client Testimonial Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <div className="mb-8">
            <svg className="w-16 h-16 text-[#5482d3]" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2 21c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2C8.3 11 9 6.2 11 4.5l2.4 1.3C12.3 8 11.2 11.8 11.2 15h2c3.3 0 6 2.7 6 6zm17.6 0c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2-.3-4.2.4-9 2.4-10.7l2.4 1.3c-1.1 2.2-2.2 6-2.2 9.2h2c3.3 0 6 2.7 6 6z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#5482d3] leading-snug mb-12">
            "Capyngen helped us accelerate our digital transformation journey by delivering secure, scalable, and intelligent banking technology solutions that improved both operational efficiency and customer satisfaction."
          </h3>
          <hr className="border-gray-200 mb-8" />
          <div>
            <p className="text-sm font-bold tracking-[0.15em] uppercase text-black mb-3">CLIENT TESTIMONIAL</p>
            <p className="text-gray-800 text-base font-medium">— Banking Technology Partner</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 8. Built for Secure Banking */}
      <section className="bg-white pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll direction="right" className="w-full">
            <img src={img1} alt="3D render of a bank building" className="w-full h-auto block object-cover rounded-xl shadow-lg" />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="space-y-6">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Built for Secure Banking</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a]">
              Build the Future of<br className="hidden lg:block" /> Banking With Capyngen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-lg">
              Transform customer experiences, strengthen security, and accelerate digital innovation with AI-powered banking application development solutions and banking digital transformation.
            </p>
            <div className="pt-6">
              <button onClick={handleContactClick} className="group flex items-center gap-3 text-lg font-semibold text-black hover:text-[#0b5cd5] transition-colors">
                Start Your Banking Project
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0b5cd5] text-white transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* 9. Frequently Asked Questions Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
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
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="pr-12">
                      <p className="text-slate-500 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </section>

      {/* 10. Final CTA Section: Ready to Transform */}
      <section id="contact" className="bg-[#050510] py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden scroll-mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text Content */}
          <RevealOnScroll direction="up" className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-white leading-tight">
              Ready to Transform<br />
              <span className="text-[#2563eb] font-bold">Your Business?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed pt-2">
              Let's build intelligent digital products together. Whether you need banking software solutions, digital banking solutions, or complete banking IT services, we are here to help. Contact us today for a free consultation.
            </p>
            <div className="pt-4">
              <button onClick={handleContactClick} className="bg-[#2563eb] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center gap-2 transition-colors">
                Contact us today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>

        </div>

        {/* Right Side Abstract Graphic (Inline SVG) */}
        <RevealOnScroll direction="left" delay={200} className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-80 flex items-center justify-end">
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
        </RevealOnScroll>
      </section>

    </div>
  );
};

export default Banking;