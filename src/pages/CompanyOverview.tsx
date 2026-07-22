import React, { useState, useRef, useEffect } from 'react';

// Serial Image Imports based on your folder structure
import img1 from "../assets/Our company/1.png";
import img2 from "../assets/Our company/2.png";
import img3 from "../assets/Our company/3.png";
import img4 from "../assets/Our company/4.png";
import img5 from "../assets/Our company/5.png";
import img6 from "../assets/Our company/6.png";
import img7 from "../assets/Our company/7.png";
import img8 from "../assets/Our company/8.png";
import img9 from "../assets/Our company/9.jpg";

// --- Scroll Animation Wrapper Component ---
interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  direction = "up", 
  delay = 0,
  onClick
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
      onClick={onClick}
      className={`${baseClass} ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : hiddenClass} ${className}`}
    >
      {children}
    </div>
  );
};

// Global action helpers
const handleContactClick = (e?: React.MouseEvent) => {
  e?.preventDefault();
  window.location.href = "mailto:hello@capyngen.com";
};

const handleLinkClick = (e: React.MouseEvent) => {
  e.preventDefault();
  alert("Opening details...");
};

// --- HERO COMPONENT ---
const AboutHero = () => {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] xl:min-h-[500px] overflow-hidden flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img1} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071022]/95 via-[#071022]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <RevealOnScroll direction="up" className="max-w-3xl">
          <div className="mb-6 sm:mb-8 w-full border-b border-white/20 pb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-none">
            Our Company
          </h1>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- INTRODUCTION TEXT COMPONENT ---
const AboutIntroduction = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <RevealOnScroll direction="up" className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-8 sm:mb-10">
            Partnering with enterprises for lasting transformation
          </h2>
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            <p>
              Capyngen was founded with a singular focus: making AI real for enterprises. We believe that technology transformation is not a sprint—it is an enduring journey that demands deep expertise, trusted partnership, and relentless commitment to measurable outcomes.
            </p>
            <p>
              Since our inception, the Capyngen brand has emerged as a recognized leader in AI-powered enterprise services. Our brand value is built on something far more durable than recognition—it is built on results that compound year after year for the clients who trust us.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- AI RECOGNITION SECTION ---
const AiRecognitionSection = () => {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img2} 
          alt="AI Recognition Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/95 via-[#0a1128]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <RevealOnScroll direction="right" className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase mb-6 sm:mb-8">
            AI Recognition & Excellence
          </p>
          <div className="border-l-[3px] sm:border-l-4 border-blue-400 pl-6 sm:pl-8 lg:pl-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Capyngen recognized with first-ever AI Leader designation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              Capyngen has reinforced its position as a global leader in AI-powered enterprise services, achieving top recognition from Gartner Peer Insights, Forbes, and the world's most discerning enterprise clients—demonstrating sustained momentum in our vision to become the world's most trusted AI transformation partner.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- QUOTE SECTION ---
const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <RevealOnScroll direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-6 md:mb-8">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-[#5A83C5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="pl-4 sm:pl-8 md:pl-12">
          <p className="text-[#5A83C5] text-xl sm:text-2xl md:text-[26px] leading-[1.7] font-light mb-12 sm:mb-16">
            Building a lasting enterprise intelligence practice is like a marathon. Every decision you make matters, while keeping focused on the long game ahead. The Capyngen brand has been built ensuring the highest standards of innovation, AI expertise, and client partnership—along with a deep sense of long-term commitment to the communities, industries, and humans we serve. We run together to harness the power of technology in improving human experiences—from how enterprises do business to how they compete, adapt, and lead in a world of constant change.
          </p>
          <div className="w-full border-t border-slate-100 pt-8 flex justify-end">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e2e2e2] rounded-full flex-shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] text-slate-900 uppercase mb-0.5">
                  Vivek Ojha
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-normal">
                  Chief Executive Officer, Capyngen
                </span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// --- AI ASPIRATION SECTION ---
const AiAspirationSection = () => {
  return (
    <section className="w-full bg-[#f4f5f7] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <RevealOnScroll direction="right" className="order-2 lg:order-1 w-full flex justify-center">
            <img 
              src={img3} 
              alt="Capyngen team collaborating in an open office environment" 
              className="w-full h-auto object-contain rounded-[20px] shadow-sm"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="order-1 lg:order-2 w-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-6">
              Redefining AI leadership through innovation and human connection
            </h2>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-8">
              As we build the world's most trusted AI-led technology services company, Capyngen is focused on making AI real for customers, communities, and society. Our AI Innovation Summit 2026 explored this mission through transformative enterprise conversations—bringing together global leaders to co-create the future of intelligent business.
            </p>
            <div>
              <button 
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-base font-medium rounded-full transition-colors duration-300 cursor-pointer"
              >
                Discover our AI aspiration
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// --- BRAND CAMPAIGNS SECTION ---
const BrandCampaignsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <RevealOnScroll direction="up">
          <h2 className="text-sm md:text-base font-medium tracking-[0.15em] text-slate-600 uppercase mb-8 md:mb-12">
            Brand Campaigns
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <RevealOnScroll direction="up" delay={100} className="flex flex-col group cursor-pointer" onClick={handleLinkClick}>
            <div className="w-full overflow-hidden rounded-md mb-5 bg-slate-100 flex items-center justify-center">
              <img 
                src={img4} 
                alt="Capyngen team collaborating" 
                className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
              With you for the long run
            </h3>
            <p className="text-sm text-slate-500 font-normal mb-5">
              How Capyngen builds enduring partnerships that go the distance
            </p>
            <div>
              <span className="inline-block text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 group-hover:text-blue-700 group-hover:border-blue-700 transition-colors duration-300">
                Read more
              </span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={200} className="flex flex-col group cursor-pointer" onClick={handleLinkClick}>
            <div className="w-full overflow-hidden rounded-md mb-5 bg-slate-100 flex items-center justify-center">
              <img 
                src={img5} 
                alt="Enterprise AI visualization" 
                className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
              The formula for enterprise AI
            </h3>
            <p className="text-sm text-slate-500 font-normal mb-5">
              Rigorous methodology meets adaptive intelligence at scale
            </p>
            <div>
              <span className="inline-block text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 group-hover:text-blue-700 group-hover:border-blue-700 transition-colors duration-300">
                Read more
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// --- GLOBAL BRAND PLATFORMS SECTION ---
const GlobalBrandPlatformsSection = () => {
  const platforms = [
    { id: 1, title: 'Capyngen Innovation Labs', image: img6 },
    { id: 2, title: 'Capyngen AI Research', image: img7 },
    { id: 3, title: 'Global Partner Network', image: img8 },
    { id: 4, title: 'Community AI Programs', image: img9 }
  ];

  return (
    <section className="w-full bg-[#2A64ED] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <RevealOnScroll direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-white tracking-tight">
            Global brand platforms
          </h2>
          <button 
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center px-6 py-2 border border-white/40 hover:border-white hover:bg-white/10 text-white text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View all platforms
          </button>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, idx) => (
            <RevealOnScroll key={platform.id} direction="up" delay={idx * 100}>
              <div onClick={handleLinkClick} className="relative group overflow-hidden rounded-[16px] h-auto flex flex-col bg-slate-900 cursor-pointer">
                <img 
                  src={platform.image} 
                  alt={platform.title}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-full z-10 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl md:text-[22px] font-semibold text-white leading-tight pr-4">
                    {platform.title.split(' ').map((word, i, arr) => {
                      if (arr.length > 2 && i === 0) return <React.Fragment key={i}>{word} <br/></React.Fragment>;
                      if (arr.length === 2 && i === 0) return <React.Fragment key={i}>{word} <br/></React.Fragment>;
                      return <span key={i}>{word} </span>;
                    })}
                  </h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CALL TO ACTION SECTION ---
const CallToActionSection = () => {
  return (
    <section className="w-full bg-[#060814] py-20 sm:py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 sm:px-6">
      <RevealOnScroll direction="up" className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6">
          With you for the <br className="hidden sm:block" /> transformation ahead
        </h2>
        
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          Whether you are beginning your AI journey or scaling what already works,
          Capyngen is the partner that goes the distance. Let's build the future of your
          enterprise together.
        </p>

        <button 
          onClick={handleContactClick}
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-slate-400 text-white text-sm font-medium bg-[#1a1f2e]/40 hover:bg-[#1a1f2e] transition-all duration-300 cursor-pointer"
        >
          Connect with us
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </RevealOnScroll>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <AboutHero />
      <AboutIntroduction />
      <AiRecognitionSection />
      <QuoteSection />
      <AiAspirationSection />
      <BrandCampaignsSection />
      <GlobalBrandPlatformsSection />
      <CallToActionSection />
    </main>
  );
}