import React, { useState, useRef, useEffect } from 'react';
import image1 from '../assets/gaming/01.png';
import image2 from '../assets/gaming/02.png';
import image3 from '../assets/gaming/03.png';
import image4 from '../assets/gaming/04.png';
import image5 from '../assets/gaming/05.png';
import image6 from '../assets/gaming/06.png';
import image7 from '../assets/gaming/07.png';
import image8 from '../assets/gaming/08.png';
import image9 from '../assets/gaming/09.png';
import image10 from '../assets/gaming/10.png';
import image11 from '../assets/gaming/11.png';
import image12 from '../assets/gaming/12.png';
import image13 from '../assets/gaming/13.png';
import image14 from '../assets/gaming/14.png';
import image15 from '../assets/gaming/15.png';
import image16 from '../assets/gaming/16.png';
import image17 from '../assets/gaming/17.png';
import image18 from '../assets/gaming/18.png';

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

const handleMailTo = () => {
  window.location.href = "mailto:hello@capyngen.com";
};

// --- 1. Gaming Hero Section ---
const GamingHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1})` }} 
    >
      {/* Dark Overlay - gradient for text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start text-left">
        
        <RevealOnScroll direction="up">
          {/* Eyebrow / Tag */}
          <div className="border border-white/30 backdrop-blur-sm px-3 py-1 mb-6 rounded-sm w-fit">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-gray-200">
              GAMING
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6 tracking-tight max-w-3xl">
            Victory in the Generation of AI Gaming
          </h1>

          {/* Description Text */}
          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Capyngen supplies gaming software development space and functions along with cutting-edge Artificial intelligence to advance gamer experiences, upgrade live services, prevent scam, and enhance cloud gaming framework for the next generations gamers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-colors duration-300"
            >
              Explore More 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent hover:bg-white/10 border border-gray-400 text-white text-sm font-medium py-3 px-8 rounded-sm flex justify-center items-center transition-all duration-300"
            >
              Contact Us 
            </button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

// --- 2. Player Intelligence Feature Section ---
const PlayerIntelligence = () => {
  return (
    <section className="bg-[#243e8c] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-start">
            <img 
              src={image2} 
              alt="Neon lit gaming setup room with monitor and PC tower" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </RevealOnScroll>

          {/* Right Column: Text Content Block */}
          <RevealOnScroll direction="left" className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              Gamer Brilliance: AI With The Core of Gaming Functions
            </h2>
            
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
              Games are no longer just products, but a living legacy for the eco-logical and sustained intelligence. Capyngen serves AI versions that customize in-game experiences, forecast gamers inactivation, enhance digital economy stability, and potential versatile complication structure— supporting gaming studios with moral monetization, engaging game players for a long duration, and building gamer communities that extend over many generations.
            </p>

            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center text-white font-medium text-[13px] md:text-sm hover:text-blue-200 transition-colors w-fit group border-b border-white/50 hover:border-white pb-1"
            >
              Level up with Us
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

// --- 3. Gaming Industry Insights Section ---
const GamingInsights = () => {
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

  const insightCards = [
    {
      title: "Tracking Player Habits and Predicting Churn",
      image: image3, 
    },
    {
      title: "AI Smart Difficulty That Adjusts to You",
      image: image4,
    },
    {
      title: "AI-Built Game Worlds and Random Content",
      image: image5,
    },
    {
      title: "Anti-Cheating and Prevent Fraud in Games",
      image: image6,
    },
    {
      title: "AI-Driven Game Design and Level Creation",
      image: image7,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <RevealOnScroll className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block with Navigation Arrows */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 tracking-tight">
            Gaming Sector Analysis
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors duration-200" aria-label="Previous insight">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scroll('right')} className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors duration-200" aria-label="Next insight">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Insights Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {insightCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group h-[420px] w-[280px] sm:w-[300px] flex-shrink-0 rounded-lg overflow-hidden flex flex-col justify-end p-6 bg-black snap-start"
            >
              {/* Card Background Image with Subtle Scale Effect on Hover */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Bottom Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Text Context Content Container */}
              <div className="relative z-10 w-full">
                <h3 className="text-white text-base md:text-[17px] font-bold leading-snug mb-6 group-hover:text-blue-400 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center text-white/80 font-semibold tracking-wider text-[10px] uppercase group-hover:text-white transition-colors"
                >
                  <span className="mr-1.5 font-sans">→</span> Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </RevealOnScroll>
    </section>
  );
};

// --- 4. Gaming Solutions Section ---
const GamingSolutions = () => {
  type TabKey = 'Industry' | 'Technology' | 'Products & Platforms';
  const [activeTab, setActiveTab] = useState<TabKey>('Industry');
  const tabs: TabKey[] = ['Industry', 'Technology', 'Products & Platforms'];

  const allSolutions: Record<TabKey, { title: string, description: string, image: string }[]> = {
    'Industry': [
      {
        title: "Smart Gamer Engagement",
        description: "Use behavioral data to create customized in-game experience and targeted live-server projects.",
        image: image8,
      },
      {
        title: "Game Ecosystem Intelligence",
        description: "Keep digital economies balanced and improve in-app purchase flows with smart AI pricing models.",
        image: image9,
      },
      {
        title: "Cloud Gaming Software Development",
        description: "Progress with real-time response in game streaming worldwide with smart resource issuance and edge computation.",
        image: image10,
      }
    ],
    'Technology': [
      {
        title: "Neural Network Rendering Engine",
        description: "Get stunning, real-time graphics powered by smart AI rendering and lighting techniques.",
        image: image11,
      },
      {
        title: "Step-by-Step Audio Generation System",
        description: "Build a soundscape and music that shift based on wha i's happening in-game in an instant.",
        image: image12,
      },
      {
        title: "Cross-Device Save Sync Tech",
        description: "Allow players jump back into progress across phones, consoles, and PCs, with no time taking process.",
        image: image13,
      }
    ],
    'Products & Platforms': [
      {
        title: "In-Game Marketplace Platform",
        description: "Make trading virtual goods and skins safe and easy with built-in fraud protection.",
        image: image14,
      },
      {
        title: "Player Identity and Login Suite",
        description: "Make account setup and cross-game identity simple with fast, secure single sign-on.",
        image: image15,
      },
      {
        title: "Community Engagement Toolkit",
        description: "Bring in-game chat, guilds, and social features that keep players connected and active.",
        image: image16,
      }
    ]
  };

  const solutionCards = allSolutions[activeTab];

  return (
    <section id="solutions" className="bg-white pt-16 md:pt-24 pb-8 w-full scroll-mt-20">
      <RevealOnScroll className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-[36px] font-bold text-gray-950 mb-8 tracking-tight">
          Solutions We Follow
        </h2>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 mb-10 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-4 text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap border-b-2 -mb-[2px] ${
                activeTab === tab
                  ? 'border-blue-600 text-gray-950 font-semibold'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {solutionCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative group h-[460px] rounded-lg overflow-hidden flex flex-col justify-end p-6 bg-black"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed tracking-wider font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </RevealOnScroll>
    </section>
  );
};

// --- 5. Future of AI in Interactive Entertainment ---
const FutureOfAIGaming = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <RevealOnScroll direction="right" className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-950 leading-tight mb-6 tracking-tight">
              The Future of AI in Interactive <br className="hidden lg:block"/> Entertainment
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Generative AI is now changing how games get made, from NPC dialogue to limitless procedural worlds. Capyngen supports studios to use AI the right way, building standout experiences that grab attention in a world full of entertainment choices, all while protecting player trust and community health.
            </p>
          </RevealOnScroll>

          {/* Right Column: Image */}
          <RevealOnScroll direction="left" className="w-full flex justify-center lg:justify-end">
            <img 
              src={image17} 
              alt="Neon lit gaming setup room" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

// --- 6. Building the Next Generation ---
const IntelligentGamesAI = () => {
  return (
    <section className="bg-[#121621] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-start">
            <img 
              src={image18} 
              alt="High-end gaming PC setup with RGB lighting" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </RevealOnScroll>

          {/* Right Column: Text Content */}
          <RevealOnScroll direction="left" className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight mb-6 tracking-tight">
              Building the Next Generation of <br className="hidden lg:block"/>
              Intelligent Games with AI
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              See how Capyngen helps gaming companies use machine learning, real-time analytics, and generative AI to build deeper player experiences, run more profitable live games, and create platforms that shape the future of interactive entertainment.
            </p>

            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center text-white font-medium text-[13px] md:text-sm transition-colors w-fit group border-b border-gray-400 hover:border-white pb-1"
            >
              Read More 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

// --- 7. Gaming Testimonial Quote ---
const GamingTestimonial = () => {
  return (
    <section className="bg-white py-16 w-full border-t border-b border-gray-100">
      <RevealOnScroll className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        
        {/* Author Info Column */}
        <div className="w-full md:w-1/4 flex flex-col shrink-0">
          <h3 className="text-[#3b82f6] text-lg font-bold tracking-wide uppercase mb-1">
            ALEX NAKAMURA
          </h3>
          <p className="text-[#4b5563] text-[10px] font-bold tracking-widest uppercase leading-snug">
            VP Live Operations,<br />Leading Mobile Gaming<br />Studio
          </p>
        </div>

        {/* Quote Icon & Text Column */}
        <div className="w-full md:w-3/4 flex gap-4 md:gap-6 items-start">
          <div className="text-blue-200 shrink-0 mt-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6.5C6.22386 11 6 10.7761 6 10.5V6.5C6 6.22386 6.22386 6 6.5 6H10.5C10.7761 6 11 6.22386 11 6.5V11C11 14.3137 8.31371 17 5 17V15C7.20914 15 9 13.2091 9 11H10V11ZM19 11H15.5C15.2239 11 15 10.7761 15 10.5V6.5C15 6.22386 15.2239 6 15.5 6H19.5C19.7761 6 20 6.22386 20 6.5V11C20 14.3137 17.3137 17 14 17V15C16.2091 15 18 13.2091 18 11H19V11Z" />
            </svg>
          </div>
          <p className="text-[#3b82f6] text-lg md:text-xl font-bold leading-relaxed">
            "Capyngen's gaming intelligence platform helped us cut the 30-day long duration by 22% and grow our ARPDAU significantly within just a few months. The AI models they built for event personalization are unlike anything else we've seen on the market, and the results show why they are the game development company." 
          </p>
        </div>

      </RevealOnScroll>
    </section>
  );
};

// --- 8. Gaming FAQs ---
const GamingFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a custom gaming software development company?",
      answer: "IT services companies work on custom game ideas to enhance them into what gamers can use. This covers the design, the art, the code, and everything in between."
    },
    {
      question: "Why Choose Capyngen to build your game software development?",
      answer: "Capyngen has spent years providing game software services and combining it with AI and data that know how to make games that run well and keep players engaged & hooked."
    },
    {
      question: "Is it possible to get a custom game development for my studio?",
      answer: "Yes. We shape everything around your studio's style, your target platform, and what you're trying to achieve as a business."
    },
    {
      question: "What are gaming technology solutions?",
      answer: "These are tools and systems, like AI, cloud infrastructure, and analytics, that power modern games behind the scenes."
    },
    {
      question: "Does Capyngen offer mobile game development?",
      answer: "Yes, we provide services for both iPhone and Android game development, build a engaging framework to run hassle-free."
    },
    {
      question: "Does Capyngen provide PC game development services?",
      answer: "Yes. Capyngen as a game development company— offer PC game development with strong visuals, multiplayer quality, and tools setups services."
    },
    {
      question: "Does Capyngen build AR and VR games?",
      answer: "Yes. We build AR and VR experiences for gaming software development, and also for training and other hands-on uses."
    },
    {
      question: "Does your organization manage iOS game development?",
      answer: "Yes, Capyngen builds and manages games for iPhone and iPad, following Apple's App Store guidelines, enhancing their upcoming version and providing post-launch support."
    },
    {
      question: "Do you also offer support post-launch games service?",
      answer: "Yes. Capyngen stays around for updates, upcoming features, and general live support and provides the best post-launch service."
    },
    {
      question: "How do I start a project with Capyngen?",
      answer: "To start your project, all you need to do is contact us through our contact page and we'll take it from there."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <RevealOnScroll className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-12 text-center">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-md shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-blue-600 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// --- 9. Gaming Call To Action ---
const GamingCTA = () => {
  return (
    <section id="contact" className="bg-[#05050f] py-24 w-full flex justify-center scroll-mt-10">
      <RevealOnScroll className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Enhance Your Gaming Sector with Capyngen
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
          Get AI-powered player intelligence, economy management, and cloud infrastructure solutions built to help gaming companies grow faster, keep players engaged and playing longer, and run their operations smarter and more efficiently across every stage of the game lifecycle.
        </p>
        <button 
          onClick={handleMailTo}
          className="bg-[#272927] hover:bg-[#343634] border border-gray-600 text-white text-sm font-medium py-3 px-8 transition-colors duration-300 flex items-center gap-2"
        >
          Get Your Project Here
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </RevealOnScroll>
    </section>
  );
};

// --- Main Page Assembly ---
const GamingPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <GamingHero />
      <PlayerIntelligence />
      <GamingInsights />
      <GamingSolutions />
      <FutureOfAIGaming />
      <IntelligentGamesAI />
      <GamingTestimonial />
      <GamingFAQs />
      <GamingCTA />
    </div>
  );
};

export default GamingPage;