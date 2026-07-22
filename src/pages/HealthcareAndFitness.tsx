import React, { useState, useRef, useEffect } from 'react';
import image1 from "../assets/Healthcare/1.png"
import image2 from "../assets/Healthcare/2.png"
import image3 from "../assets/Healthcare/3.png"
import image4 from "../assets/Healthcare/4.png"
import image5 from "../assets/Healthcare/5.png"
import image6 from "../assets/Healthcare/6.png"
import image7 from "../assets/Healthcare/7.png"
import image8 from "../assets/Healthcare/8.png"
import image9 from "../assets/Healthcare/9.png"
import image10 from "../assets/Healthcare/10.png"
import image11 from "../assets/Healthcare/11.png"
import image12 from "../assets/Healthcare/12.png"
import image13 from "../assets/Healthcare/13.png"
import image14 from "../assets/Healthcare/14.png"
import image15 from "../assets/Healthcare/15.png"
import image16 from "../assets/Healthcare/16.png"

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

const HealthcarePage = () => {
  // State for FAQs (Accordion)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Refs and scroll handlers for the carousels
  const insightScrollRef = useRef<HTMLDivElement>(null);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (element: HTMLDivElement | null, direction: 'left' | 'right') => {
    if (element) {
      const scrollAmount = element.clientWidth;
      element.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Button Action Handlers
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Standard action to make the final CTA button "work" without routing
    window.location.href = "mailto:hello@capyngen.com";
  };

  const faqData = [
    { q: "Q1. What does healthcare software development services include?", a: "Healthcare software development services encompasses creating custom applications, platforms, and systems for healthcare providers, including hospital management systems, telemedicine platforms, EHR systems, patient portals, and diagnostic tools. Our healthcare software development services cover everything from initial strategy to ongoing support." },
    { q: "Q2. What are the key healthcare IT solutions offered by Capyngen?", a: "Capyngen offers hospital management systems, telemedicine platforms, AI-powered diagnostic tools, patient engagement applications, healthcare analytics, and custom healthcare app development services. Our healthcare IT solutions are designed to address the unique challenges of modern healthcare delivery." },
    { q: "Q3. How does AI improve healthcare delivery?", a: "AI improves healthcare by enhancing diagnostic accuracy, automating administrative tasks, personalizing treatment plans, enabling predictive analytics, and supporting clinical decision-making with data-driven insights." },
    { q: "Q4. What is a healthcare software company?", a: "A healthcare software company specializes in building technology solutions for healthcare organizations, including hospitals, clinics, telemedicine providers, and health technology startups." },
    { q: "Q5. What are healthcare technology solutions?", a: "Healthcare technology solutions include software applications, digital platforms, and technology tools that improve patient care, streamline clinical operations, and enhance healthcare administration." },
    { q: "Q6. Why is healthcare app development important?", a: "Healthcare app development creates mobile applications that improve patient engagement, enable remote monitoring, simplify appointment scheduling, and provide convenient access to health information and services." },
    { q: "Q7. What is a telemedicine platform?", a: "A telemedicine platform enables secure virtual consultations between patients and healthcare providers through video conferencing, messaging, and digital prescription tools." },
    { q: "Q8. What is an electronic health record system?", a: "An electronic health record system is a digital platform that stores, manages, and shares patient health information across healthcare providers for better care coordination." },
    { q: "Q9. How secure are healthcare software solutions?", a: "Healthcare software solutions are built with enterprise-grade security, data encryption, and compliance with regulations like HIPAA and GDPR to protect sensitive patient information." },
    { q: "Q10. What is AI-assisted diagnostics?", a: "AI-assisted diagnostics uses machine learning algorithms to analyze medical images, detect abnormalities, and support clinicians in making faster, more accurate diagnoses." },
    { q: "Q11. What is remote patient monitoring?", a: "Remote patient monitoring uses connected devices and wearable technology to track patient health data in real-time and alert providers to potential health issues." },
    { q: "Q12. How does predictive analytics help healthcare?", a: "Predictive analytics uses AI to analyze patient data, identify health risks, predict disease outcomes, and recommend proactive interventions for better population health." },
    { q: "Q13. What are hospital management systems?", a: "Hospital management systems are integrated platforms that digitize hospital operations including patient registration, scheduling, billing, inventory, and staff management." },
    { q: "Q14. How long does healthcare software development take?", a: "Timeline varies by complexity. Simple applications typically take 3-6 months, while enterprise-level platforms can take 12-18 months." },
    { q: "Q15. Why choose Capyngen for healthcare technology solutions?", a: "Capyngen combines deep healthcare expertise, AI-powered innovation, enterprise-grade security, and end-to-end development capabilities to deliver intelligent, scalable healthcare solutions." }
  ];

  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      
      {/* 1. Healthcare Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#041124]">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat bg-slate-900"
            style={{
              backgroundImage: `url(${image1})`, 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03152f] via-[#03152f]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <RevealOnScroll direction="up" className="max-w-3xl space-y-6">
            <div>
              <span className="block text-[#3b82f6] text-sm md:text-base font-bold tracking-widest uppercase mb-2">
                Revolutionizing Patient Care Through Smart Technology
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight">
              Intelligent Healthcare Solutions for the Digital Age
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-normal">
              As a leading healthcare software company, Capyngen empower healthcare providers with AI-driven digital solutions that improve patient experiences, streamline clinical operations, enhance diagnostics, and enable secure, connected healthcare ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-[#0d5cf5] hover:bg-blue-600 text-white font-medium py-3.5 px-6 rounded-md transition-colors text-base"
              >
                Talk to Healthcare Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button 
                onClick={() => scrollToSection('solutions')}
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-gray-400 hover:border-white text-white font-medium py-3.5 px-6 rounded-md transition-all text-base"
              >
                Explore Healthcare Solutions
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. Text Content Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <RevealOnScroll className="max-w-6xl mx-auto lg:ml-[8%]">
          <h2 className="text-lg md:text-xl font-bold tracking-wide uppercase text-black mb-8 leading-snug">
            Better Patient Outcomes. Smarter Healthcare Delivery.
          </h2>
          <div className="space-y-4 text-gray-800 text-[17px] md:text-lg font-medium leading-relaxed max-w-5xl">
            <p>
              Healthcare is evolving rapidly through AI, telemedicine, cloud technology, and digital transformation. Patients expect faster, more personalized care. Providers need secure, intelligent systems that improve efficiency.
            </p>
            <p>
              With our healthcare IT solutions, Capyngen helps healthcare organizations modernize their digital infrastructure with scalable software, AI-powered analytics, patient engagement platforms, and secure cloud solutions.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. AI is Reshaping Modern Healthcare Section */}
      <section className="bg-[#0b1221] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll direction="right" className="w-full flex justify-center md:justify-start">
            <img 
              src={image2} 
              alt="Caregiver holding patient's hand" 
              className="w-full h-auto object-cover min-h-[300px] bg-slate-800 shadow-lg rounded-sm"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white mb-6">
              How Artificial Intelligence is Reshaping Healthcare
            </h2>
            <div className="space-y-4 text-base md:text-[17px] text-gray-300 leading-relaxed font-normal">
              <p>
                Artificial Intelligence is improving diagnostics, clinical decision-making, medical imaging, patient monitoring, and hospital operations. AI is becoming essential in modern medicine.
              </p>
              <p>
                Capyngen develops intelligent healthcare platforms that help providers deliver better care while reducing administrative workload and operational costs with our healthcare technology solutions.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Healthcare Insights Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <RevealOnScroll className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black">
              Key Healthcare Technology Insights
            </h2>
            {/* Scroll Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => scrollCarousel(insightScrollRef.current, 'left')} 
                className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer rounded-sm"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scrollCarousel(insightScrollRef.current, 'right')} 
                className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer rounded-sm"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div 
            ref={insightScrollRef}
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            
            {[
              { title: "AI-Assisted\nDiagnostics", img: image3 },
              { title: "Telemedicine\nPlatforms", img: image4 },
              { title: "Electronic Health\nRecords (EHR)", img: image5 },
              { title: "Remote Patient\nMonitoring", img: image6 },
              { title: "Predictive Healthcare\nAnalytics", img: image7 },
              { title: "Healthcare Workflow\nAutomation", img: image8 }
            ].map((insight, index) => (
              <div key={index} className="relative h-[420px] min-w-[320px] w-full md:w-[calc(33.333%-1.5rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${insight.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-[26px] font-bold text-white mb-6 leading-tight whitespace-pre-line">{insight.title}</h3>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </button>
                </div>
              </div>
            ))}

          </div>
        </RevealOnScroll>
      </section>

      {/* 5. AI Clinical Decisions Section */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll direction="right" className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI-Powered Decision Support for Clinicians
            </h2>
            <div className="space-y-4 text-base md:text-lg text-blue-50 leading-relaxed font-normal">
              <p>
                Our healthcare software development services support clinicians like automate administrative tasks, assist with diagnostics, personalize treatment plans, and enhance patient engagement with intelligent decision-making tools.
              </p>
              <p>
                Our AI-powered solutions improve efficiency while allowing medical teams to focus on patient care. From reducing documentation time to providing treatment recommendations, our technology empowers healthcare professionals.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="w-full flex justify-center md:justify-end">
            <img 
              src={image9} 
              alt="Nurse checking blood pressure of an elderly patient" 
              className="w-full h-auto object-cover min-h-[300px] shadow-lg rounded-sm bg-blue-800"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. Healthcare Solutions Carousel Section */}
      <section id="solutions" className="bg-white py-20 px-6 md:px-12 lg:px-24 scroll-mt-20">
        <RevealOnScroll className="max-w-[1400px] mx-auto">
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black uppercase tracking-wide">
              Comprehensive Healthcare Solutions
            </h2>
          </div>

          <div 
            ref={solutionsScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[
              { title: "Hospital\nManagement\nSystems", desc: "DIGITIZE OPERATIONS, APPOINTMENTS, BILLING, AND PATIENT MANAGEMENT.", img: image10 },
              { title: "Telemedicine\nSolutions", desc: "SECURE VIRTUAL CONSULTATIONS WITH VIDEO, CHAT, AND DIGITAL PRESCRIPTIONS.", img: image11 },
              { title: "AI\nDiagnostics", desc: "SUPPORT CLINICIANS WITH IMAGE ANALYSIS AND PREDICTIVE HEALTHCARE INSIGHTS.", img: image12 },
              { title: "Patient Engagement\nPlatforms", desc: "EMPOWER PATIENTS TO MANAGE APPOINTMENTS AND ACCESS RECORDS.", img: image13 },
              { title: "Healthcare Data\nAnalytics", desc: "GAIN ACTIONABLE INSIGHTS FROM PATIENT DATA FOR BETTER DECISIONS.", img: image14 },
              { title: "Healthcare App\nDevelopment", desc: "CREATE CUSTOM MOBILE APPLICATIONS WITH INTUITIVE INTERFACES. OUR HEALTHCARE APP DEVELOPMENT SERVICES DELIVER USER-FRIENDLY SOLUTIONS.", img: image15 }
            ].map((solution, index) => (
              <div key={index} className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${solution.img}')` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-[28px] font-bold text-white mb-4 leading-tight whitespace-pre-line">
                    {solution.title}
                  </h3>
                  <div className="flex items-start gap-3 text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[95%]">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span>{solution.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-8">
            <button onClick={() => scrollCarousel(solutionsScrollRef.current, 'left')} className="text-gray-400 hover:text-black transition-colors cursor-pointer" aria-label="Previous">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button onClick={() => scrollCarousel(solutionsScrollRef.current, 'right')} className="text-black hover:text-blue-600 transition-colors cursor-pointer" aria-label="Next">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </RevealOnScroll>
      </section>

      {/* 7. Case Study: Modernizing Patient Care */}
      <section className="bg-[#0b1221] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll direction="right" className="w-full">
            <img 
              src={image16} 
              alt="Nurse and elderly patient smiling together" 
              className="w-full h-auto min-h-[300px] object-cover shadow-lg rounded-sm bg-slate-800" 
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Real-World Impact: Modernizing Patient Care Delivery
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mb-6">
              Capyngen partnered with a healthcare provider to digitize patient services and improve efficiency.
            </p>
            <div className="space-y-4 pt-2">
              <h4 className="text-lg font-normal text-white">Results</h4>
              <ul className="space-y-3">
                {[
                  ' Faster Patient Registration',
                  ' Reduction in Administrative Work',
                  'Improved Patient Satisfaction',
                  'Secure Cloud-Based Platform'
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
          </RevealOnScroll>
        </div>
      </section>

      {/* 8. Frequently Asked Questions Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <RevealOnScroll className="max-w-4xl mx-auto">
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
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

      {/* 9. Call to Action (CTA) Section */}
      <section id="contact" className="bg-[#050510] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden text-white scroll-mt-10">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          
          {/* Left Text Content */}
          <RevealOnScroll direction="up" className="max-w-2xl space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight tracking-wide">
              Partner with Capyngen to Build the Future of Healthcare
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-normal">
              Whether you need healthcare software development services, healthcare app development, or healthcare IT solutions, we are here to help. We also offer fitness app development services for wellness brands and fitness organizations.
            </p>
            <div className="pt-2">
              <button 
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2 bg-[#1f2023] hover:bg-[#2a2b2f] border border-gray-600 text-white font-medium py-3.5 px-8 rounded-full transition-colors text-base"
              >
                Connect with Healthcare Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>

        </div>

        {/* Right Side Abstract Graphic (Inline SVG) */}
        <RevealOnScroll direction="left" delay={200} className="hidden lg:flex absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none opacity-80 items-end justify-end">
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
        </RevealOnScroll>
      </section>

    </div>
  );
};

export default HealthcarePage;