import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle } from 'lucide-react';

// Serial Imports based on your folder structure
import img1 from "../assets/App Development service/1.png";
import img2 from "../assets/App Development service/2.png";
import img3 from "../assets/App Development service/3.png";
import img4 from "../assets/App Development service/4.png";
import img5 from "../assets/App Development service/5.png";
import img6 from "../assets/App Development service/6.png";
import img7 from "../assets/App Development service/7.png";

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
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleLinkClick = (e: React.MouseEvent) => {
  e.preventDefault();
  alert("Opening detailed report/case study...");
};

const AppDevelopmentPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const happeningsRef = useRef<HTMLDivElement>(null);

  const scrollHappenings = (direction: 'left' | 'right') => {
    if (happeningsRef.current) {
      // Adjusted scroll amount for mobile vs desktop
      const scrollAmount = window.innerWidth < 640 ? 280 : 350;
      happeningsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your application service request has been successfully submitted.");
  };

  const faqs = [
    {
      q: "What are mobile app development services?",
      a: "Mobile app development company build apps for phones and tablets that run fast and stay secure for their consumers."
    },
    {
      q: "Does Capyngen offer native apps, cross-platform app development?",
      a: "Both. It depends on what matters most, as we can separately build native apps for iOS and Android app development."
    },
    {
      q: "What is the difference between native and cross-platform development?",
      a: "Native apps are built specifically for one platform, while Cross-platform apps share one codebase across iOS and Android."
    },
    {
      q: "How does Capyngen handle enterprise-level mobile integrations?",
      a: "Capyngen handles enterprise-level mobile integration with complex backend systems, sync data with high-end platforms, and build secure mobile device management (MDM)."
    },
    {
      q: "What does your 99.9% uptime SLA mean?",
      a: "The 99.9% utime SLA mmeans that the apps and systems we have built are designed to stay up and running almost all the time, with very little unexpected downtime. "
    },
    {
      q: "How Capyngen makes sure that mobile apps are easy to use?",
      a: "Capyngen delivers a user-first design process, testing for availability and real user behavior at every process, so there is no complication while using mobile apps. "
    },
    {
      q: "Can you help modernize an existing mobile app?",
      a: "Yes. Capyngen often provides services in reviews of existing apps and suggests upgrades, better performance, upcoming features."
    },
    {
      q: "What industries does Capyngen's mobility team work with?",
      a: "We work across industries, but we also have deep experience helping industries with complex system combinations, strict security, and apps that need to scale to large users globally."
    },
    {
      q: "How long does an enterprise mobile app project usually take?",
      a: "Generally it depends. A cross-platform build with standard features might take a few months, while a native app with deep enterprise integrations can take longer. "
    },
    {
      q: "How do I connect with Capyngen for my mobile app project?\"",
      a: "Fill out the request form above, or book a 15-minute consultation with one of our mobility experts. We will walk through your goals and suggest the best approach from there."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section - Full Screen & Highly Responsive */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay to ensure text readability over the background image */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-300"></div>
        
        <RevealOnScroll direction="up" className="relative z-10 flex flex-col items-center w-full">
          <div className="bg-[#0a1526] text-white text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 tracking-widest uppercase rounded-sm inline-block">
            MOBILITY SERVICES
          </div>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-6 max-w-3xl lg:max-w-5xl xl:max-w-6xl leading-tight">
            Future-Gen Smartphone App <br className="hidden md:block" />
            Services, Powered by AI
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto font-medium px-2 sm:px-0">
            We create high-performing native and cross-platform apps that can make your enterprise mobility simple, engaging, and efficient for your consumer.
          </p>
          <button onClick={() => scrollToSection('explore-section')} className="bg-[#0056b3] hover:bg-blue-800 text-white font-medium py-3 px-8 sm:px-10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide mx-auto rounded-sm cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto">
            Explore Our Expertise <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </RevealOnScroll>
      </section>

      {/* Explore Section */}
      <section id="explore-section" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24 items-start">
          <RevealOnScroll direction="right" className="col-span-1 border-l-4 border-[#0056b3] pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 leading-tight">
              Analyze the Smart App Ecosystem
            </h2>
            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0056b3] mb-1">Guaranteed uptime</h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Across all platforms</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0056b3] mb-1">App downloads</h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Worldwide</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="col-span-1 md:col-span-2 space-y-6">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              At Capyngen, we consult your vision, ideas plan and turn them into working mobile apps. Our team builds secure, scalable frameworks using Artficial intelligence and edge computing to deliver real-world value to your consmsers within an instant, on any device.
            </p>
            <div className="bg-slate-50 rounded-sm w-full p-4 sm:p-6 shadow-md flex items-center justify-center overflow-hidden">
               <img src={img2} alt="Smart App Ecosystem" className="w-full h-auto object-contain max-h-[300px] sm:max-h-[400px]" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mobile Trends Carousel Section - Standardized UI applied */}
      <section className="bg-[#f4f6f8] py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">App Trends Right Now</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Insights and updates from our mobility team</p>
            </div>
            <div className="flex gap-2 self-end sm:self-auto">
              <button onClick={() => scrollHappenings('left')} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer rounded-sm shadow-sm">
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              <button onClick={() => scrollHappenings('right')} className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors cursor-pointer rounded-sm shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={100}>
            <div ref={happeningsRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar items-stretch" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
              `}} />

              {/* Card 1 */}
              <div onClick={handleLinkClick} className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                  <img src={img3} alt="Report" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    Report
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0b5a93] transition-colors leading-snug">
                    2025 Mobile Application Development: iOS Growth in the Enterprise
                  </h3>
                  <div className="flex items-center text-sm font-bold text-[#0056b3] gap-2 mt-auto">
                    Read Here <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div onClick={handleLinkClick} className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                  <img src={img4} alt="Award" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    Award
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0b5a93] transition-colors leading-snug">
                    Capyngen Recognized as a Leader in Gartner Magic Quadrant for Mobile Development
                  </h3>
                  <div className="flex items-center text-sm font-bold text-[#0056b3] gap-2 mt-auto">
                    Read Here <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div onClick={handleLinkClick} className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                  <img src={img5} alt="Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    Case Study
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0b5a93] transition-colors leading-snug">
                    Bringing Global Operations Together with One Cross-Platform Hub
                  </h3>
                  <div className="flex items-center text-sm font-bold text-[#0056b3] gap-2 mt-auto">
                    Read Here <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div onClick={handleLinkClick} className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                  <img src={img6} alt="Report" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    Report
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0b5a93] transition-colors leading-snug">
                    Why Enterprises Are Rethinking Native-Only Strategies?
                  </h3>
                  <div className="flex items-center text-sm font-bold text-[#0056b3] gap-2 mt-auto">
                    Read Here <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div onClick={handleLinkClick} className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                  <img src={img7} alt="Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                    Case Study
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0b5a93] transition-colors leading-snug">
                    Company Cut Delivery Errors by 35% with a Custom Mobile App Development
                  </h3>
                  <div className="flex items-center text-sm font-bold text-[#0056b3] gap-2 mt-auto">
                    Read Here <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#0056b3] py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
              We offer companies navigation for complicated high-end smartphone technology with personalized development programmes.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            
            {/* 01 - Android & iOS App Development */}
            <RevealOnScroll direction="right" className="md:col-span-7 bg-[#f8f9fa] p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-sm shadow-sm">
              <span className="text-[#0056b3] font-mono text-xs sm:text-sm font-bold block mb-3 sm:mb-4">01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Android & iOS App Development</h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-md leading-relaxed">
                Platform-specific builds that get the most out of performance, hardware, and user experience.
              </p>
            </RevealOnScroll>

            {/* 02 - Cross-Platform Development */}
            <RevealOnScroll direction="left" delay={100} className="md:col-span-5 bg-[#0a1526] p-6 sm:p-8 md:p-10 flex flex-col justify-center border-l-4 border-blue-400 rounded-sm shadow-sm">
              <span className="text-blue-400 font-mono text-xs sm:text-sm font-bold block mb-3 sm:mb-4">02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Cross-Platform Development</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                One codebase using Flutter app development or React Native app development to get to market faster.
              </p>
            </RevealOnScroll>

            {/* 03 - UI/UX Strategy */}
            <RevealOnScroll direction="right" delay={200} className="md:col-span-6 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-sm shadow-sm">
              <span className="text-[#0056b3] font-mono text-xs sm:text-sm font-bold block mb-3 sm:mb-4">03</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">UI/UX Strategy</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Design systems built around real users, focused on accessibility, engagement, and conversions at every touchpoint.
              </p>
            </RevealOnScroll>

            {/* 04 - Enterprise Systems */}
            <RevealOnScroll direction="left" delay={300} className="md:col-span-6 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-sm shadow-sm">
              <span className="text-[#0056b3] font-mono text-xs sm:text-sm font-bold block mb-3 sm:mb-4">04</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Enterprise Systems</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Backend integrations, legacy system syncing, and secure MDM setup for complex enterprise needs.
              </p>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industry Solutions</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealOnScroll direction="up" delay={100} className="group cursor-pointer">
              <div className="bg-slate-50 border border-slate-100 aspect-[4/3] sm:h-48 md:h-56 lg:h-60 rounded-sm mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                 <img src={img3} alt="Healthcare & Life Sciences" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-tight">01. Healthcare & Life Sciences</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">Secure, compliant mobile apps for patient care, telehealth, and health data management.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200} className="group cursor-pointer">
              <div className="bg-slate-50 border border-slate-100 aspect-[4/3] sm:h-48 md:h-56 lg:h-60 rounded-sm mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                 <img src={img4} alt="Shopping & Digital Retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-tight">02. Shopping & Digital Retail</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">We Offer solutions with real-time inventory, offers, and online shopping experiences.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300} className="group cursor-pointer">
              <div className="bg-slate-50 border border-slate-100 aspect-[4/3] sm:h-48 md:h-56 lg:h-60 rounded-sm mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                 <img src={img5} alt="Banking & Financial Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-tight">03. Banking & Financial Services</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">Secure mobile banking and high finance apps built to handle sensitive data and strict compliance needs.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={400} className="group cursor-pointer">
              <div className="bg-slate-50 border border-slate-100 aspect-[4/3] sm:h-48 md:h-56 lg:h-60 rounded-sm mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                 <img src={img6} alt="Logistics & Supply Chain" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-tight">04. Logistics & Supply Chain</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">We offer industries solutions that track shipments, and quickly manage processes with custom app development services.</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#f4f6f8] py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen?</h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                At Capyngen, we provide app development services to our clients— improving performance, securing business and user-centric solutions.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <RevealOnScroll direction="up" delay={100} className="bg-white p-5 sm:p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0056b3] shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">1. Built for Performance</h4>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed flex-grow">Fast track and handle real-world use.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200} className="bg-white p-5 sm:p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0056b3] shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">2. Industries-Grade Security</h4>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed flex-grow">Secure framework and MDM support.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300} className="bg-white p-5 sm:p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0056b3] shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">3. Native and Cross-Platform Expertise</h4>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed flex-grow">Cross-platform solutions with Flutter or React Native.</p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={400} className="bg-white p-5 sm:p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0056b3] shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">4. User-First Design</h4>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed flex-grow">Real user behavior, keeping it accessible, and engaging.</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 text-center">FAQs</h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-sm">
                <button
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 pr-4 sm:pr-8">{faq.q}</span>
                  <span className="text-[#0056b3] flex-shrink-0 transition-transform duration-300">
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                {openFaq === index && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] sm:max-h-96 opacity-100 pb-4 sm:pb-5' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 sm:px-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-[#0a1526] py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden scroll-mt-10">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
          
          <RevealOnScroll direction="right" className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">Apply For Services</h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10">
              Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas, and custom app development services with post-launch solutions.
            </p>
            
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-300">Got any specific question?</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-300">Book a 15-minute chat with one of our experts.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" className="w-full lg:w-1/2">
            <div className="bg-white p-6 sm:p-8 md:p-10 shadow-2xl rounded-md">
              <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-[9px] sm:text-[10px] font-bold text-slate-700 mb-1 sm:mb-2 uppercase tracking-wide">First Name *</label>
                    <input required type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm text-sm" />
                  </div>
                  <div>
                    <label className="block text-[9px] sm:text-[10px] font-bold text-slate-700 mb-1 sm:mb-2 uppercase tracking-wide">Last Name *</label>
                    <input required type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm text-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-[9px] sm:text-[10px] font-bold text-slate-700 mb-1 sm:mb-2 uppercase tracking-wide">Email *</label>
                    <input required type="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm text-sm" />
                  </div>
                  <div>
                    <label className="block text-[9px] sm:text-[10px] font-bold text-slate-700 mb-1 sm:mb-2 uppercase tracking-wide">Company *</label>
                    <input required type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] sm:text-[10px] font-bold text-slate-700 mb-1 sm:mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none rounded-sm text-sm"></textarea>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <input type="checkbox" className="mt-1 w-3 h-3 sm:w-4 sm:h-4 border-slate-300 rounded-sm cursor-pointer" />
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">
                      Sign up to get Capyngen's mobile insights and marketing updates.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <input required type="checkbox" className="mt-1 w-3 h-3 sm:w-4 sm:h-4 border-slate-300 rounded-sm cursor-pointer" />
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">
                      I agree to the <a href="#" onClick={handleLinkClick} className="text-[#0056b3] underline">Privacy Statement</a> *
                    </p>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider uppercase rounded-sm cursor-pointer mt-2">
                  Confirm
                </button>
              </form>
            </div>
          </RevealOnScroll>
          
        </div>
      </section>

    </div>
  );
};

export default AppDevelopmentPage;