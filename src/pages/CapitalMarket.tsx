import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

// Serial Image Imports based on the provided folder structure
import img6 from "../assets/Capital Market Firms/6.png";
import img7 from "../assets/Capital Market Firms/7.png";
import img19 from "../assets/Capital Market Firms/image 19.png";
import img20 from "../assets/Capital Market Firms/image 20.png";
import img23 from "../assets/Capital Market Firms/image 23.png";
import img24 from "../assets/Capital Market Firms/image 24.png";
import img25 from "../assets/Capital Market Firms/image 25.png";
import img26 from "../assets/Capital Market Firms/image 26.png";
import img86 from "../assets/Capital Market Firms/image 86.png";
import img102 from "../assets/Capital Market Firms/image 102.png";
import img103 from "../assets/Capital Market Firms/image 103.png";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CapitalMarketPage: React.FC = () => {
  // State for FAQs (Accordion)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Refs and scroll handlers for the carousels
  const insightsScrollRef = useRef<HTMLDivElement>(null);
  const whyScrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleButtonClick = (action: string) => {
    alert(`${action} button clicked!`);
  };

  const insightsData = [
    { title: "AI-Powered Trading\nPlatforms", img: img19 },
    { title: "Wealth\nManagement\nSolutions", img: img20 },
    { title: "Risk & Compliance\nAutomation", img: img23 },
    { title: "Predictive Market\nAnalytics", img: img24 },
    { title: "Fraud Detection\nSystems", img: img25 }
  ];

  const whyData = [
    { title: "AI-Driven\nInnovation", desc: "INTELLIGENT AUTOMATION AND PREDICTIVE ANALYTICS DESIGNED FOR SMARTER FINANCIAL OPERATIONS.", img: img102 },
    { title: "Enterprise Security", desc: "ADVANCED CYBERSECURITY FRAMEWORKS THAT PROTECT IMPORTANT FINANCIAL DATA.", img: img103 },
    { title: "Scalable\nArchitecture", desc: "CLOUD-NATIVE SOLUTIONS ENGINEERED FOR HIGH-PERFORMANCE FINANCIAL SYSTEMS.", img: img19 },
    { title: "End-to-End\nSupport", desc: "COMPREHENSIVE SERVICES FROM STRATEGY AND DESIGN THROUGH DEVELOPMENT, AND ONGOING OPTIMIZATION.", img: img20 },
    { title: "Industry Expertise", desc: "DEEP DOMAIN KNOWLEDGE ACROSS INVESTMENT BANKING, WEALTH MANAGEMENT, AND TRADING.", img: img23 },
    { title: "Regulatory\nCompliance", desc: "BUILT-IN COMPLIANCE FRAMEWORKS THAT ADAPT TO CHANGING FINANCIAL REGULATIONS.", img: img24 }
  ];

  const faqData = [
    { q: "Q1. What is Capital market software development?", a: "Capital market software development involves creating technology solutions for investment banking, wealth management, trading platforms, and capital market operations, including trading systems, risk management tools, and compliance reporting platforms." },
    { q: "Q2. Why is AI important in capital markets?", a: "AI enables capital market firms to automate trading, detect fraud patterns, manage complex risks, personalize investor experiences, and make faster, data-driven investment decisions with greater accuracy." },
    { q: "Q3. What are capital markets technology solutions?", a: "These include software platforms, tools, and systems designed for trading execution, portfolio management, risk analytics, compliance reporting, and investor engagement across financial markets." },
    { q: "Q4. How does Capyngen help capital market firms?", a: "Capyngen provides comprehensive capital markets IT services, including AI-powered trading platforms, risk automation, cloud migration, and digital transformation solutions tailored to financial institutions." },
    { q: "Q5. What is the cost of capital market software development?", a: "Cost depends on complexity, features, and scale. Basic solutions start from ₹10-20 lakh, while enterprise platforms can exceed ₹1 crore. Contact Capyngen for a personalized quote." },
    { q: "Q6. How long does it take to build capital market software?", a: "Timeline varies based on requirements. Simple applications take 3-6 months, while complex enterprise platforms can take 12-18 months with proper planning and execution." },
    { q: "Q7. What security measures are used in capital market software?", a: "Enterprise-grade encryption, multi-factor authentication, role-based access controls, real-time monitoring, and compliance with financial regulations like GDPR, SOC2, and ISO standards." },
    { q: "Q8. Can Capyngen integrate with existing banking systems?", a: "Yes, Capyngen specializes in seamless integration with legacy systems, modernizing them while ensuring minimal disruption to ongoing operations." },
    { q: "Q9. What is AI-powered trading?", a: "AI-powered trading uses machine learning algorithms to analyze market data, identify patterns, and execute trades automatically for better speed and accuracy." },
    { q: "Q10. Why choose Capyngen for capital markets solutions?", a: "Capyngen combines deep financial domain expertise, cutting-edge AI technology, enterprise-grade security, and a client-first approach to deliver scalable capital market solutions." },
    { q: "Q11. How does predictive analytics help in capital markets?", a: "Predictive analytics helps forecast market movements, identify investment opportunities, assess credit risks, and optimize portfolio allocations for better returns." },
    { q: "Q12. What is regulatory compliance automation?", a: "It involves using AI and automation tools to monitor transactions, generate reports, and ensure adherence to financial regulations without manual intervention." },
    { q: "Q13. Does Capyngen offer post-launch support?", a: "Yes, we provide continuous support, maintenance, and optimization services to ensure your capital market solutions perform optimally at all times." },
    { q: "Q14. Can Capyngen build custom trading platforms?", a: "Absolutely. We specialize in building custom trading platforms tailored to your specific business requirements and trading strategies." },
    { q: "Q15. How does Capyngen ensure data security?", a: "We implement enterprise-grade encryption, secure APIs, regular security audits, and compliance with international security standards to protect sensitive financial data." }
  ];

  return (
    <div className="w-full font-sans text-gray-900 bg-white overflow-x-hidden">
      
      {/* 1. Capital Markets Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0a1122]">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          style={{
            backgroundImage: `url('${img6}')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#020817]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <motion.div 
            className="max-w-3xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="block text-[#3b82f6] text-sm md:text-base font-semibold tracking-widest uppercase">
              AI-POWERED FINANCIAL INNOVATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]">
              Transforming Capital Markets Through Intelligent Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal">
              As a leading capital market software development company, Capyngen builds intelligent technology that drive digital transformation across investment banking, trading ecosystems, and capital market operations with AI, cloud computing, and enterprise-grade security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => handleButtonClick('Talk to Our Experts')} className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-600 text-white font-medium py-3.5 px-8 rounded-md transition-colors text-base">
                Talk to Our Experts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button onClick={() => handleButtonClick('Explore Capital Market Solutions')} className="flex items-center justify-center bg-transparent hover:bg-white/5 border border-gray-600 hover:border-gray-400 text-white font-medium py-3.5 px-8 rounded-md transition-all text-base">
                Explore Capital Market Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 & 3. Redesigned Industry Insight & Driving Growth Combined Wrapper for Layout */}
      <div className="relative w-full overflow-hidden">
        
        {/* Light background cutting off halfway to let image bleed over */}
        <div className="absolute top-0 left-0 w-full h-[60%] md:h-[65%] bg-[#f4f5fa] -z-10"></div>

        {/* --- Industry Insight Section --- */}
        <section className="relative w-full pt-20 pb-10 px-6 md:px-12 lg:px-24 z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left: Image with abstract blue scribbles */}
            <motion.div 
              className="w-full lg:w-1/2 relative mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              {/* Abstract scribbled step design mimicking the reference image */}
              <div className="absolute -left-12 md:-left-24 top-20 w-24 md:w-40 h-auto text-[#1e66f5] -z-10 opacity-90">
                <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -translate-y-6">
                  {/* Step Lines */}
                  <path d="M100,20 L60,20 L60,60 L20,60 L20,100 L-10,100" strokeWidth="3" />
                  <path d="M100,25 L55,25 L55,65 L15,65 L15,105 L-10,105" strokeWidth="1.5" opacity="0.7" />
                  <path d="M100,15 L65,15 L65,55 L25,55 L25,95 L-10,95" strokeWidth="1" opacity="0.5" />
                  {/* Scratchy horizontal lines */}
                  <path d="M50,90 L-10,90" strokeWidth="1" opacity="0.6" />
                  <path d="M40,85 L-10,85" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>
              
              {/* Image updated to be a strict square with no rounding, object-cover */}
              <img 
                src={img7} 
                alt="Professionals shaking hands in a meeting" 
                className="relative z-10 w-full aspect-square object-cover shadow-2xl bg-gray-200"
              />
            </motion.div>

            {/* Right: Text Block */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col justify-center pt-4 lg:pt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <span className="text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase text-gray-800 mb-4">
                Industry Insight
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-[1.2] mb-6">
                How AI is Revolutionizing Capital<br className="hidden lg:block" /> Markets
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-800 font-medium leading-relaxed max-w-[95%]">
                <p>
                  The capital markets software development landscape is undergoing a massive shift, with AI driving this transformation.
                </p>
                <p>
                  Our intelligent financial solutions help firms automate routine operations, enhance decision-making capabilities, and unlock new revenue opportunities. With our capital markets technology solutions, financial organizations can gain a competitive edge in an increasingly complex market.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* --- Driving Growth Section --- */}
        <section className="relative w-full pb-20 pt-8 px-6 md:px-12 lg:px-24 bg-transparent z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Aligned left to match the left edge of the image above it */}
            <div className="max-w-4xl">
              <h2 className="text-sm md:text-base font-bold tracking-[0.1em] uppercase text-black mb-6 leading-snug">
                Driving Growth With Intelligent<br className="hidden md:block" /> Financial Technology
              </h2>
              <div className="space-y-4 text-gray-800 text-sm md:text-base font-medium leading-relaxed">
                <p>
                  Capital markets are experiencing rapid evolution through AI integration, digital platforms, intelligent automation, and real-time data analytics. Financial organizations must deliver faster trade execution, strengthen regulatory compliance, manage complex risks, and provide superior investor experiences.
                </p>
                <p>
                  Our capital market software development expertise ensures your technology infrastructure is future-ready which empowers financial institutions to modernize outdated systems that support long-term growth.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* 4. Capital Market Insights Section */}
      <section className="bg-[#0b1121] py-24 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Capital Market Insights
          </motion.h2>
          <motion.div 
            ref={insightsScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {insightsData.map((insight, index) => (
              <div 
                key={index} 
                onClick={() => handleButtonClick(`Read more on ${insight.title.replace('\n', ' ')}`)}
                className="relative h-[400px] md:h-[450px] min-w-[320px] w-[350px] shrink-0 snap-start rounded-md overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-800"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${insight.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-[26px] font-bold text-white mb-6 leading-[1.2] whitespace-pre-line">{insight.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    READ MORE
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-12">
            <button onClick={() => scrollCarousel(insightsScrollRef, 'left')} className="text-gray-500 hover:text-white transition-colors cursor-pointer" aria-label="Scroll left">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button onClick={() => scrollCarousel(insightsScrollRef, 'right')} className="text-[#3b82f6] hover:text-blue-400 transition-colors cursor-pointer" aria-label="Scroll right">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Smart Financial Operations Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-800">
              SMART FINANCIAL OPERATIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              AI That Accelerates<br className="hidden lg:block" /> Investment Decisions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed font-medium pt-2">
              <p>
                Leverage machine learning, predictive analytics, and intelligent automation to enhance trading strategies, detect market anomalies early, and deliver personalized investor experiences at scale.
              </p>
              <p>
                As a leading provider of capital markets IT services, we help you unlock the full potential of AI for superior business results.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="w-full flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <img 
              src={img26} 
              alt="Professionals analyzing data on a board" 
              className="w-full h-auto object-contain bg-gray-200 rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Case Study: Modernizing Investment Operations */}
      <section className="bg-[#2f64ed] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <img 
              src={img86} 
              alt="Team collaborating on a whiteboard with sticky notes" 
              className="w-full h-auto object-contain shadow-lg rounded-sm bg-blue-800" 
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Modernizing Investment<br className="hidden lg:block" /> Operations
            </h2>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed max-w-lg mb-6">
              Our capital market software development company partnered with a leading financial services organization to digitize investment workflows and automate complex reporting processes.
            </p>
            <div className="space-y-4 pt-2">
              <h4 className="text-lg font-normal text-white">Results</h4>
              <ul className="space-y-3">
                {[
                  ' Faster Investment Processing',
                  ' Reduction in Operational Costs',
                  ' Platform Availability',
                  'Enhanced Regulatory Compliance'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-50 text-base md:text-lg">
                    <span className="text-gray-800 opacity-60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Why Capyngen Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div 
            className="mb-12 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-wide">
              WHY CAPYNGEN
            </h2>
            <p className="text-lg text-gray-800 font-medium">
              Technology That Powers Modern Financial Markets
            </p>
          </motion.div>

          <motion.div 
            ref={whyScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {whyData.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleButtonClick(`Read more about ${item.title.replace('\n', ' ')}`)}
                className="relative h-[450px] min-w-[320px] w-full md:w-[calc(33.333%-1rem)] shrink-0 snap-start rounded-lg overflow-hidden group shadow-md border border-gray-100 bg-gray-200 cursor-pointer"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h3 className="text-[28px] font-bold text-white mb-4 leading-tight whitespace-pre-line">{item.title}</h3>
                  <p className="text-xs font-semibold text-gray-300 tracking-wider uppercase leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-end gap-6 mt-4 pr-4 md:pr-8">
            <button onClick={() => scrollCarousel(whyScrollRef, 'left')} className="text-gray-400 hover:text-black transition-colors cursor-pointer" aria-label="Scroll left">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button onClick={() => scrollCarousel(whyScrollRef, 'right')} className="text-black hover:text-blue-600 transition-colors cursor-pointer" aria-label="Scroll right">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Client Testimonial Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <hr className="border-gray-300" />
          <div className="py-16 flex flex-col md:flex-row gap-8">
            
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-[#3b82f6]" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2 21c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2C8.3 11 9 6.2 11 4.5l2.4 1.3C12.3 8 11.2 11.8 11.2 15h2c3.3 0 6 2.7 6 6zm17.6 0c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7.1 1 .2-.3-4.2.4-9 2.4-10.7l2.4 1.3c-1.1 2.2-2.2 6-2.2 9.2h2c3.3 0 6 2.7 6 6z" />
              </svg>
            </div>
            
            {/* Quote Text & Author */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-normal text-black leading-relaxed mb-12">
                "Capyngen's expertise in AI and financial technology helped us modernize investment operations, improve compliance, and deliver a superior digital experience to our clients."
              </h3>
              
              <div className="flex flex-col items-start md:items-end text-left md:text-right">
                <span className="text-[#3b82f6] text-xl md:text-2xl font-bold uppercase tracking-wide mb-2">
                  Client Testimonial
                </span>
                <span className="text-black text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
                  — Director, Capital Markets Technology
                </span>
              </div>
            </div>

          </div>
          <hr className="border-gray-300" />
        </motion.div>
      </section>

      {/* 9. Frequently Asked Questions Section */}
      <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-blue-100 rounded-full blur-[40px] -z-10 opacity-70"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] tracking-wide">FAQs</h2>
          </motion.div>
          <motion.div 
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
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
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pr-12"
                    >
                      <p className="text-slate-500 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 10. Call to Action (CTA) Section */}
      <section className="bg-[#050514] text-white py-24 px-6 text-center flex flex-col items-center justify-center border-b border-white/5">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight">
            Build the Future of Capital Markets with Capyngen
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our capital markets software development expertise transform investment operations, strengthen security frameworks, and accelerate digital innovation with AI-powered capital market software development solutions.
          </p>
          <div className="pt-6">
            <button 
              onClick={() => handleButtonClick('Connect with Our Experts')} 
              className="bg-transparent hover:bg-white/10 text-white border border-gray-400 rounded-full py-4 px-8 text-[17px] font-medium transition-all duration-300"
            >
              Connect with Our Experts
            </button>
          </div>
        </motion.div>
      </section>

      {/* 11. Footer Section */}
      <footer className="bg-[#050514] text-white pt-20 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-8">
          
          <div className="md:col-span-12 lg:col-span-4 pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Capyngen</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              AI. Software. Innovation.<br />
              Building the future of digital<br />
              business.
            </p>
            <div className="flex space-x-3">
              <button onClick={() => handleButtonClick('LinkedIn')} className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">IN</button>
              <button onClick={() => handleButtonClick('Twitter')} className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">TW</button>
              <button onClick={() => handleButtonClick('YouTube')} className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">YT</button>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Services</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><button onClick={() => handleButtonClick('Software Development')} className="hover:text-white transition-colors">Software Development</button></li>
              <li><button onClick={() => handleButtonClick('AI Solutions')} className="hover:text-white transition-colors">AI Solutions</button></li>
              <li><button onClick={() => handleButtonClick('UI/UX Design')} className="hover:text-white transition-colors">UI/UX Design</button></li>
              <li><button onClick={() => handleButtonClick('Cloud Services')} className="hover:text-white transition-colors">Cloud Services</button></li>
              <li><button onClick={() => handleButtonClick('DevOps')} className="hover:text-white transition-colors">DevOps</button></li>
              <li><button onClick={() => handleButtonClick('Digital Marketing')} className="hover:text-white transition-colors">Digital Marketing</button></li>
              <li><button onClick={() => handleButtonClick('Enterprise Software')} className="hover:text-white transition-colors">Enterprise Software</button></li>
              <li><button onClick={() => handleButtonClick('Consulting')} className="hover:text-white transition-colors">Consulting</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Industries</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><button onClick={() => handleButtonClick('Healthcare')} className="hover:text-white transition-colors">Healthcare</button></li>
              <li><button onClick={() => handleButtonClick('Banking')} className="hover:text-white transition-colors">Banking</button></li>
              <li><button onClick={() => handleButtonClick('Education')} className="hover:text-white transition-colors">Education</button></li>
              <li><button onClick={() => handleButtonClick('Retail')} className="hover:text-white transition-colors">Retail</button></li>
              <li><button onClick={() => handleButtonClick('Manufacturing')} className="hover:text-white transition-colors">Manufacturing</button></li>
              <li><button onClick={() => handleButtonClick('Insurance')} className="hover:text-white transition-colors">Insurance</button></li>
              <li><button onClick={() => handleButtonClick('Logistics')} className="hover:text-white transition-colors">Logistics</button></li>
              <li><button onClick={() => handleButtonClick('Real Estate')} className="hover:text-white transition-colors">Real Estate</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Company</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><button onClick={() => handleButtonClick('About Us')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleButtonClick('Careers')} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => handleButtonClick('Case Studies')} className="hover:text-white transition-colors">Case Studies</button></li>
              <li><button onClick={() => handleButtonClick('News')} className="hover:text-white transition-colors">News</button></li>
              <li><button onClick={() => handleButtonClick('Blogs')} className="hover:text-white transition-colors">Blogs</button></li>
              <li><button onClick={() => handleButtonClick('Contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-5">
              <li><button onClick={() => handleButtonClick('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => handleButtonClick('Terms & Conditions')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => handleButtonClick('FAQs Page')} className="hover:text-white transition-colors">FAQs</button></li>
              <li><button onClick={() => handleButtonClick('Support')} className="hover:text-white transition-colors">Support</button></li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Capyngen Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0">AI &middot; Software &middot; Innovation &middot; Gurugram, India</p>
        </div>
      </footer>

    </div>
  );
};

export default CapitalMarketPage;