import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSlug } from '../utils/slug';
import { type Blog } from '../services/blogService';
import { useTopicBlogs } from '../hooks/useTopicBlogs';

// Importing images sequentially as per the provided folder structure
import img1 from "../assets/public service/01.png";
import img2 from "../assets/public service/02.png";

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

// 1. Define specific literal types for the tabs to prevent indexing errors
type TabName = 
  | 'Featured Article' 
  | 'Case Study' 
  | 'Resource';

const PublicServicesLandingPage = () => {
  const navigate = useNavigate();
  const topicBlogs = useTopicBlogs('public-service');
  // 2. Explicitly type the states
  const [activeTab, setActiveTab] = useState<TabName>('Featured Article');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // 3. Type the tabs array using the TabName type
  const tabs: TabName[] = [
    'Featured Article',
    'Case Study',
    'Resource'
  ];

  // 4. Strongly type the content object
  const pressPortalContent: Record<TabName, { title: string; linkText: string }> = {
    'Featured Article': {
      title: 'How Responsive Design Improves User Experience and SEO',
      linkText: 'Read More'
    },
    'Case Study': {
      title: 'Building a High-Performance Corporate Website for a Manufacturing Brand',
      linkText: 'Read More'
    },
    'Resource': {
      title: 'How to Choose the Right Website Design Company',
      linkText: 'Read More'
    }
  };

  // Show live Public Service blogs when available; otherwise fall back to the static tab content.
  const pressPortalItems = useMemo(() => {
    if (topicBlogs.length === 0) {
      return tabs.map((tab) => ({
        title: pressPortalContent[tab].title,
        linkText: pressPortalContent[tab].linkText,
        image: img2,
        blog: undefined as Blog | undefined,
      }));
    }
    return tabs.map((tab, i) => {
      const blog = topicBlogs[i % topicBlogs.length];
      return {
        title: blog.title,
        linkText: pressPortalContent[tab].linkText,
        image: blog.image || img2,
        blog,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicBlogs]);

  const activePress =
    pressPortalItems[tabs.indexOf(activeTab)] ?? pressPortalItems[0];

  const openPressPortal = (blog?: Blog) => {
    if (!blog) return;
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  const impactAreas = [
    {
      title: 'Public Administration',
      description: 'Remodelling attainability in public sector software development and building effortless digital expertise for all nations.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Intellect Authority',
      description: 'Enhancing truthfulness, responsibility, and concluding decisions through statistics.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Citizen Security',
      description: 'Advancing calamity response, safety, and nations\' citizen security.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Health & Social Welfare',
      description: 'Refining health care services and social welfare through high-end public sector technology solutions.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Institutions',
      description: 'Empowering sustainability and adopting modern learning foundations with public service software development.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Ecological balance',
      description: 'Delivering remedies for critical atmosphere, capital oversight, and reliability.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Infrastructure',
      description: 'Upgrading community structure and metropolitan services with enhanced tech.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zM4 11a2 2 0 114 0v1a2 2 0 01-4 0v-1zm11 0a2 2 0 114 0v1a2 2 0 01-4 0v-1zM11 18a2 2 0 114 0v1a2 2 0 01-4 0v-1z" />
        </svg>
      )
    },
    {
      title: 'Capital Expansion',
      description: 'Innovating advancement, careers, and modernization for a well-built community.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const faqsData = [
    {
      question: 'What are government IT solutions?',
      answer: 'Government IT solutions include software, cloud platforms, and digital tools that support the administration department to manage operations and deliver secure solutions.'
    },
    {
      question: 'Why do governments need public sector software development?',
      answer: 'In the modern world, traditional paper-based systems slow processes down. Custom software is becoming a necessity for government departments to run faster, cut costs, and give citizens quick access to information and services.'
    },
    {
      question: 'Do government IT solutions include cloud systems?',
      answer: 'Yes, the cloud system is the core part of IT solutions for the government, as it stores administration data, runs applications, and adopts services.'
    },
    {
      question: 'How secure will government IT solutions be?',
      answer: 'Capyngen provides highly secured IT solutions for the government and ensures that it is built to withstand advanced threats and protect citizen data.'
    },
    {
      question: 'Why is digital transformation important for the government?',
      answer: 'Digital transformation is playing a major role for the government in the modernized nations of the world, supporting transparency, quick announcements, and increased efficiency.'
    },
    {
      question: 'Do government data systems need special security?',
      answer: 'Yes, government data systems indeed need advanced security because they manage a vast amount of sensitive information on citizens.'
    },
    {
      question: 'How does software help with disaster response?',
      answer: 'Capyngen builds software that serves real-time data to respond faster and helps the government allocate resources during disasters.'
    },
    {
      question: 'What does Capyngen mean by "public sector software solutions"?',
      answer: 'For Capyngen, public sector software solutions refer to end-to-end online platform design that supports the government in modernizing in the digital world.'
    },
    {
      question: 'What industries fall under "public services" at Capyngen?',
      answer: 'We classify public services into e-government and IT solutions that cover citizen security, health & welfare, capital expansion, and ecological balance.'
    },
    {
      question: 'Can Capyngen build custom government IT solutions?',
      answer: 'Absolutely. Capyngen can easily build a personalised and custom government IT solution, and develop industries-wide integrations, transport systems'
    }
  ];

  // 5. Explicitly type the index parameter as a number
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      
      {/* 1. PUBLIC SERVICES HERO SECTION */}
      <section 
        className="relative w-full min-h-[640px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031530] via-[#031530]/75 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <RevealOnScroll direction="up" className="max-w-2xl">
            <span className="text-gray-400 font-semibold text-xs md:text-sm tracking-widest uppercase block mb-4">
              INDUSTRIES | PUBLIC SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.15] mb-8">
              Making Progressing Communities.<br />Bringing Digital Impact.
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mb-8">
              Authorizing governments and civil sector companies to modify, Upgrade native experiences, and deliver a significant transformation in public service software development.
            </p>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('press')} className="bg-[#2563eb] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-none transition duration-300 flex items-center justify-center gap-2 text-sm">
                Explore More
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. FORWARD-THINKING STATEMENT SECTION */}
      <section className="bg-[#f4f6f9] py-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <RevealOnScroll direction="right" className="lg:col-span-4">
            <h2 className="text-[#0055ff] text-xl md:text-2xl font-bold uppercase tracking-wider leading-snug">
              STRATEGIC-VISION.<br />
              COMMUNITY-FOCUSED.<br />
              FORWARD-LOOKING.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="lg:col-span-8 text-gray-700 text-base md:text-[17px] leading-relaxed space-y-6">
            <p>
              Advanced tech is innovating the way administration serves the nation with government cloud solutions. By simplifying civil services to enhance principles and functional productivity, digital transformation for government is at the core of high-tech modern nations.
            </p>
            <p>
              Capyngen collaborates with council sectors and civil service administrations to shape and create safe, flexible, and all-in digital services that build government software development for the nation and serve sustainable progress.
            </p>
            <p className="italic font-medium text-gray-800 pt-2">
              Our Mission: Capyngen has a clear view to support high-tech and master plans to deliver brighter, more reactive, and better-durable government application development.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. OUR STRATEGIC FOCUS SECTION */}
      <section className="bg-[#edf3f9] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up">
            <h2 className="text-center text-2xl md:text-3xl font-bold uppercase tracking-widest text-gray-900 mb-16">
              Our Strategic Focus
            </h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 100} className="bg-white p-8 flex flex-col items-start rounded-none shadow-sm min-h-[240px] hover:shadow-md transition-shadow">
                <div className="mb-5 p-1">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PUBLIC SECTOR TESTIMONIAL SECTION */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <RevealOnScroll direction="up" className="max-w-5xl mx-auto">
          <div className="text-[#0055ff] text-7xl font-serif mb-2 leading-none">“</div>
          
          <blockquote className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#1d64db] leading-snug mb-10">
            "Capyngen has always been a long-standing IT partner with our career profession towards high-end digital innovation. With their professional capability, dedication, and better clarification of public sector barriers, they have assisted us with citizen-centric features that actually deliver solutions.“
          </blockquote>
          
          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-800">
              Additional Chief Secretary,
            </p>
            <p className="text-sm text-gray-500">
              - Department of Digital Services
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 5. PRESS PORTAL SECTION */}
      <section id="press" className="bg-[#0b1424] text-white py-20 px-6 lg:px-8 scroll-mt-10">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">From Our Experts</h2>
          </RevealOnScroll>
          
          {/* Tabs Navigation */}
          <RevealOnScroll direction="up" className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-800 pb-4 mb-12 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 relative -mb-[17px] transition font-medium ${
                  activeTab === tab ? 'text-white border-b-2 border-[#0055ff]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </RevealOnScroll>

          {/* Featured Content Wrapper Block */}
          <RevealOnScroll direction="up" className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-[#070d18] rounded-none overflow-hidden border border-gray-900">
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#0055ff] font-semibold text-xs tracking-widest uppercase mb-4 block">
                FEATURED ARTICLE
              </span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8 whitespace-pre-line">
                {activePress.title}
              </h3>
              <a href="#read" onClick={(e) => { e.preventDefault(); activePress.blog ? openPressPortal(activePress.blog) : handleContactClick(e); }} className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white group">
                → {activePress.linkText}
                <span className="ml-2 transform group-hover:translate-x-1 transition duration-200"></span>
              </a>
            </div>

            <div className="lg:col-span-7 flex items-center justify-center bg-black/20">
              <img
                src={activePress.image}
                alt="Capyngen public service delivery team meeting"
                className="w-full h-auto block"
              />
            </div>
          </RevealOnScroll>

          {/* Carousel Slider Pagination Indicators */}
          <RevealOnScroll direction="up" className="flex justify-end gap-3 mt-6">
            <button className="w-8 h-8 rounded-none border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-600 hover:text-white transition text-xs">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-none border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-600 hover:text-white transition text-xs">
              &gt;
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-widest text-gray-900 mb-12">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-none overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span className="text-[#0055ff] ml-4 text-xl shrink-0">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* 7. FINAL TRANSFORMATION CALL TO ACTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Modify Public Sector. <br className="hidden sm:inline" /> Empower Society.
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Collaborate with Capyngen that serve public sector software solutions while bringing significant public value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleContactClick} className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#2563eb] font-semibold py-3.5 px-8 rounded-none transition duration-300 flex items-center justify-center gap-2 text-sm">
              Transform Your Organization
            </button>
            <button onClick={handleContactClick} className="w-full sm:w-auto bg-transparent border border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-none transition duration-300 flex items-center justify-center gap-2 text-sm">
              Contact Our Experts
            </button>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
};

export default PublicServicesLandingPage;