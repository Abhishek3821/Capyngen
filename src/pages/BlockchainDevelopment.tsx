import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createSlug } from '../utils/slug';
import { type Blog } from '../services/blogService';
import { useTopicBlogs } from '../hooks/useTopicBlogs';

// Importing images sequentially as per the provided folder structure
import img1 from "../assets/BLOC_KCH_AIN/1.png";
import img2 from "../assets/BLOC_KCH_AIN/2.png";
import img3 from "../assets/BLOC_KCH_AIN/3.png";
import img4 from "../assets/BLOC_KCH_AIN/4.png";
import img5 from "../assets/BLOC_KCH_AIN/5.png";
import img6 from "../assets/BLOC_KCH_AIN/6.png";
import img7 from "../assets/BLOC_KCH_AIN/7.png";
import img8 from "../assets/BLOC_KCH_AIN/8.png";
import img9 from "../assets/BLOC_KCH_AIN/9.png";
import img10 from "../assets/BLOC_KCH_AIN/10.png";
import img11 from "../assets/BLOC_KCH_AIN/11.png";
import img12 from "../assets/BLOC_KCH_AIN/12.png";

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

const handleContactClick = () => {
  window.location.href = "mailto:hello@capyngen.com";
};

const BlockchainSolutionsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  const topicBlogs = useTopicBlogs('blockchain-development');

  const happeningsRef = useRef<HTMLDivElement>(null);

  const scrollHappenings = (direction: 'left' | 'right') => {
    if (happeningsRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 350;
      happeningsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const faqs = [
    {
      q: "Q1. What are blockchain development solutions?",
      a: "Blockchain development solutions involves creating decentralized applications, smart contracts, and distributed ledger systems for enterprise use cases."
    },
    {
      q: "Q2. What does a blockchain development company do?",
      a: "A blockchain development company builds, deploys, and maintains blockchain-based solutions for businesses across industries."
    },
    {
      q: "Q3. What is blockchain software development?",
      a: "It is the process of designing, building, and deploying software applications on blockchain platforms like Ethereum, Hyperledger, and Corda."
    },
    {
      q: "Q4. How does Capyngen help with blockchain?",
      a: "Capyngen provides end-to-end blockchain solutions including strategy, development, integration, and ongoing support."
    },
    {
      q: "Q5. What industries benefit from blockchain?",
      a: "Finance, supply chain, healthcare, real estate, gaming, government, and energy sectors benefit significantly."
    },
    {
      q: "Q6. What is smart contract engineering?",
      a: "It involves writing, testing, and deploying self-executing contracts with predefined rules and conditions."
    },
    {
      q: "Q7. What is the asset tokenization?",
      a: "It converts real-world assets like property, art, or commodities into digital tokens on a blockchain."
    },
    {
      q: "Q8. What are DeFi platforms?",
      a: "Decentralized finance platforms offer lending, borrowing, trading, and yield generation without traditional intermediaries."
    },
    {
      q: "Q9. What is a private enterprise ledger?",
      a: "It is a permissioned blockchain network designed for confidential business transactions and data sharing."
    },
    {
      q: "Q10. Why choose Capyngen for blockchain development solutions?",
      a: "We combine deep technical expertise, security focus, and industry knowledge to deliver enterprise-grade solutions."
    },
    {
      q: "Q11. What is Web3 strategy?",
      a: "It involves planning blockchain adoption, tokenomics, governance, and regulatory compliance for decentralized applications."
    },
    {
      q: "Q12. How secure are blockchain applications?",
      a: "They use cryptographic security, consensus mechanisms, and regular audits to ensure robust protection."
    },
    {
      q: "Q13. Can blockchain integrate with existing systems?",
      a: "Yes, we build APIs and bridges to connect blockchain networks with legacy enterprise systems."
    },
    {
      q: "Q14. What is DLT in simple terms?",
      a: "Distributed Ledger Technology is a digital system for recording transactions across multiple computers simultaneously."
    },
    {
      q: "Q15. How long does blockchain development solutions take?",
      a: "Timeline depends on complexity. Simple projects take 2-3 months, while complex platforms take 6-12 months."
    }
  ];

  const happenings = [
    { title: "AI-Powered Business Solutions for Modern Enterprises", img: img2, badge: "Report" },
    { title: "Driving Digital Transformation Success", img: img3, badge: "Case Study" },
    { title: "Custom Software Strategies for Business Growth", img: img4, badge: "Article" },
    { title: "Building Scalable Cloud-Native Applications", img: img5, badge: "Insight" },
    { title: "Smarter Web & Mobile Development Solutions", img: img6, badge: "Guide" },
    { title: "Future-Ready Technology for Enterprise Innovation", img: img7, badge: "News" }
  ];

  // Show live Blockchain Development blogs when available; otherwise fall back to the static cards.
  const happeningItems = useMemo(() => {
    if (topicBlogs.length === 0) {
      return happenings.map((item) => ({ ...item, blog: undefined as Blog | undefined }));
    }
    return topicBlogs.map((blog, i) => ({
      ...happenings[i % happenings.length],
      title: blog.title,
      img: blog.image || happenings[i % happenings.length].img,
      blog,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicBlogs]);

  const openHappening = (blog?: Blog) => {
    if (!blog) return;
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section - Full Screen & Highly Responsive */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay to ensure text readability over the background image */}
        <div className="absolute inset-0 bg-[black]/60 transition-all duration-300"></div>
        
        <RevealOnScroll direction="up" className="relative z-10 flex flex-col items-center w-full mt-12 md:mt-0">
          <div className="bg-[#0a1526] text-white text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 sm:mb-8 tracking-widest uppercase rounded-sm inline-block">
            BLOCKCHAIN ENGINEERING
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 max-w-3xl lg:max-w-5xl xl:max-w-6xl leading-tight">
            Enterprise-Grade Decentralized Technology Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto font-medium px-2 sm:px-0">
            Modernizing business with our blockchain development solutions trust through immutable distributed ledgers, autonomous smart contracts, and decentralized architectures built for global scalability and enterprise security. 
          </p>
          <button onClick={() => scrollToSection('about')} className="bg-[#0056b3] hover:bg-blue-800 text-white font-medium py-3 px-8 sm:px-10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide mx-auto rounded-sm cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto">
            Read More <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <RevealOnScroll direction="right" className="col-span-1 border-l-4 border-[#0056b3] pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Building Trust Through Decentralized Innovation
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="col-span-1 md:col-span-2 space-y-6">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Capyngen as a blockchain development company consulting connects traditional infrastructure with the decentralized ecosystem. We deploy Distributed Ledger Technology (DLT) that extends beyond basic transactions, enabling automated smart contracts and end-to-end supply chain visibility. 
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our blockchain software development architects and security specialists ensure every deployment delivers peak performance, mathematical security, and adherence to international regulatory standards. We don't just set up nodes—we architect the infrastructure for verified digital value.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* What's Happening Section - Standardized UI applied */}
      <section className="bg-[#f4f6f8] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">What's Happening</h2>
              <p className="text-slate-500 text-sm">Latest updates from our blockchain innovation team</p>
            </div>
            <div className="flex gap-2 self-end sm:self-auto">
              <button onClick={() => scrollHappenings('left')} className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 transition-colors rounded-sm shadow-sm cursor-pointer">
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              <button onClick={() => scrollHappenings('right')} className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors rounded-sm shadow-sm cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={100}>
            <div ref={happeningsRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar items-stretch" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
              `}} />

              {happeningItems.map((item, index) => (
                <div
                  key={item.blog?._id ?? index}
                  onClick={() => (item.blog ? openHappening(item.blog) : handleContactClick())}
                  className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden w-[300px] md:w-[350px] flex-shrink-0 snap-start h-auto min-h-full group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full relative h-[200px] flex-shrink-0 bg-slate-100 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white text-[#0a1526] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-auto flex items-center text-sm font-bold text-[#0056b3] gap-2 uppercase tracking-wide">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="bg-[#0056b3] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Offerings</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Complete blockchain capabilities engineered to address complex business challenges with cryptographic certainty.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* 01 - Smart Contract Engineering */}
            <RevealOnScroll direction="right" className="md:col-span-7 bg-[#f8f9fa] p-10 flex flex-col justify-center rounded-sm">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-4">01</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Contract Engineering</h3>
              <p className="text-slate-600 mb-6 max-w-md">
                Audited, secure, and gas-optimized autonomous contracts for streamlined business logic and protected fund transactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Formal Verification
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Multi-Sig Architecture
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Upgradeable Proxy Patterns
                </li>
              </ul>
            </RevealOnScroll>

            {/* 02 - Private Enterprise Ledger */}
            <RevealOnScroll direction="left" className="md:col-span-5 bg-[#0a1526] p-10 flex flex-col justify-center border-l-4 border-blue-400 rounded-sm">
              <span className="text-blue-400 font-mono text-sm font-bold block mb-4">02</span>
              <h3 className="text-2xl font-bold text-white mb-4">Private Enterprise Ledger</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Permissioned DLT frameworks using Hyperledger or Corda for high-performance, confidential corporate data environments.
              </p>
              <button onClick={handleContactClick} className="border border-slate-500 hover:border-white text-white px-6 py-2 text-xs font-bold tracking-wider uppercase transition-colors w-max rounded-sm cursor-pointer">
                Explore
              </button>
            </RevealOnScroll>

            {/* 03 - DeFi Platforms */}
            <RevealOnScroll direction="up" delay={100} className="md:col-span-3 bg-white p-8 rounded-sm shadow-sm">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">03</span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">DeFi Platforms</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Developing decentralized exchanges, lending systems, and liquidity pools for next-generation financial services.
              </p>
            </RevealOnScroll>

            {/* 04 - Asset Tokenization */}
            <RevealOnScroll direction="up" delay={200} className="md:col-span-3 bg-white p-8 rounded-sm shadow-sm">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">04</span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Asset Tokenization</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Converting tangible assets such as property and commodities into fractional digital tokens on distributed ledgers.
              </p>
            </RevealOnScroll>

            {/* 05 - Web3 Strategy & Advisory */}
            <RevealOnScroll direction="up" delay={300} className="md:col-span-6 bg-white p-8 flex flex-col justify-center relative group cursor-pointer hover:bg-slate-50 transition-colors rounded-sm shadow-sm" onClick={handleContactClick}>
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">05</span>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Web3 Strategy & Advisory</h4>
                  <p className="text-slate-500 text-sm">Guiding organizations through regulatory frameworks and technical complexities of blockchain integration.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#0056b3] group-hover:translate-x-1 transition-transform" />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* C-Suite Navigation Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <RevealOnScroll direction="right" className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Guiding Leadership Through the Decentralized Landscape
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Our programs address critical strategic priorities for executive teams integrating blockchain into their business strategies.
            </p>
            
            <div className="space-y-0">
              <div onClick={handleContactClick} className="border-t border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Chief Financial Officer – Financial modeling, token economics, and risk assessment</span>
              </div>
              <div onClick={handleContactClick} className="border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Chief Technology Officer – System architecture, integration planning, and scalability frameworks</span>
              </div>
              <div onClick={handleContactClick} className="border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">General Counsel – Regulatory compliance, legal structuring, and governance protocols</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" className="lg:w-1/2">
            <div className="w-full flex items-center justify-center">
              <img src={img8} alt="C-Suite Leadership" className="w-full h-auto object-contain rounded-lg shadow-md" />
            </div>
          </RevealOnScroll>
          
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up" className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen</h2>
              <p className="text-slate-500 text-sm">Partner with a leading leader in enterprise blockchain innovation.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <RevealOnScroll direction="up" delay={100} className="bg-white group shadow-sm border border-slate-100 pb-5 rounded-md overflow-hidden flex flex-col">
              <div className="w-full h-58 bg-[#effcf6] flex items-center justify-center p-1 mb-1 relative overflow-hidden">
                 <img src={img9} alt="Expertise" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-5 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Deep Technical Expertise</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide flex-grow">Our team brings years of experience in blockchain architecture and smart contract development.</p>
              </div>
            </RevealOnScroll>

            {/* Profile 2 */}
            <RevealOnScroll direction="up" delay={200} className="bg-white group shadow-sm border border-slate-100 pb-5 rounded-md overflow-hidden flex flex-col">
              <div className="w-full h-58 bg-[#effcf6] flex items-center justify-center p-1 mb-1 relative overflow-hidden">
                 <img src={img10} alt="Security" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-5 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Security-First Approach</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide flex-grow">We prioritize mathematical security and rigorous auditing in every solution we deliver.</p>
              </div>
            </RevealOnScroll>

            {/* Profile 3 */}
            <RevealOnScroll direction="up" delay={300} className="bg-white group shadow-sm border border-slate-100 pb-5 rounded-md overflow-hidden flex flex-col">
              <div className="w-full h-58 bg-[#effcf6] flex items-center justify-center p-1 mb-1 relative overflow-hidden">
                 <img src={img11} alt="Compliance" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-5 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Regulatory Compliance</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide flex-grow">We ensure all implementations meet international standards and legal requirements.</p>
              </div>
            </RevealOnScroll>

            {/* Profile 4 */}
            <RevealOnScroll direction="up" delay={400} className="bg-white group shadow-sm border border-slate-100 pb-5 rounded-md overflow-hidden flex flex-col">
              <div className="w-full h-58 bg-[#effcf6] flex items-center justify-center p-1 mb-1 relative overflow-hidden">
                 <img src={img12} alt="Support" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-5 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">End-to-End Support</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide flex-grow">From strategy to deployment and maintenance, we partner with you at every step.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-sm">
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-[#0a1526] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden scroll-mt-10">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          <RevealOnScroll direction="right" className="lg:w-1/2 text-white pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Request for Services</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Discover how our blockchain development solutions can assist your organization in navigating the blockchain ecosystem. Our specialists are prepared to evaluate your needs and design a customized solution. 
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="left" className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 shadow-2xl rounded-md">
              <form onSubmit={(e) => { e.preventDefault(); alert("Request submitted successfully!"); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email *</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Company *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors rounded-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none rounded-sm"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded-sm cursor-pointer" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#0056b3] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="w-full bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider uppercase rounded-sm cursor-pointer">
                  Submit Request
                </button>
              </form>
            </div>
          </RevealOnScroll>
          
        </div>
      </section>

    </div>
  );
};

export default BlockchainSolutionsPage;