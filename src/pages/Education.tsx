import React, { useState, useRef, useEffect } from 'react';

// Importing images sequentially as per the provided folder structure
import img1 from "../assets/education/1.png";
import img2 from "../assets/education/2.png";
import img3 from "../assets/education/3.png";
import img4 from "../assets/education/4.png";
import img5 from "../assets/education/5.png";
import img6 from "../assets/education/6.png";
import img7 from "../assets/education/7.png";
import img8 from "../assets/education/8.png";
import img9 from "../assets/education/9.png";
import img10 from "../assets/education/10.png";
import img11 from "../assets/education/11.png";
import img12 from "../assets/education/12.png";
import img13 from "../assets/education/13.png";
import img14 from "../assets/education/14.png";

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

// Global helpers
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactClick = () => {
  window.location.href = "mailto:hello@capyngen.com";
};

// --- Section 1: Hero ---
const EducationHero = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden py-24 sm:py-12 md:py-30 lg:py-11 bg-slate-900">
      {/* Background image configured not to crop arbitrarily on large screens */}
      <div className="absolute inset-0 z-0">
        <img 
          src={img1} 
          alt="Education Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent z-0"></div>

      <RevealOnScroll direction="up" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start text-white">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-gray-300 mb-2 uppercase">
            <span>INDUSTRIES | EDUCATION</span>
          </div>
          <div className="text-xs md:text-sm font-bold tracking-widest mb-6 uppercase">
            Education Software Development
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Reshaping the future of Education Management with Artifical Intelligence.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            Transform learning institutions with AI in education platform, student information system, school management software, and exclusive learning experience that encourage modernisation, collaborations and long-term online learning platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300"
            >
              Connect with Our Experts 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300"
            >
              Explore Custom Education Software
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

// --- Section 2: Digital Transformation ---
const DigitalEducationTransformation = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealOnScroll direction="left" className="flex flex-col justify-center">
            <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-black mb-6">
              eLearning Software Development
            </h2>
            <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Education has always been centered around traditional classrooms. Today, however, institutions require digital education solutions that support hybrid learning, personalized online experiences, enhanced student engagement, and efficient campus management. 
              </p>
              <p>
                Capyngen provides school management, university management software, EdTech software, and offers training to innovate adoptable online learning platforms powered by AI, cloud tech solutions, smart technology, and fact-based vision. 
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-end">
            <img 
              src={img2} 
              alt="Students collaborating in a classroom" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-sm rounded-xl"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: AI in Education ---
const AIEducationTransformation = () => {
  return (
    <section className="bg-blue-600 py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealOnScroll direction="left" className="flex flex-col justify-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI is Reshaping Latest Education
            </h2>
            <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
              <p>
                AI is redefining traditional education by enabling customized online learning, tutoring, AI evalutions, and precise student analytics.
              </p>
              <p>
                Capyngen offers education mobile app development that can build a LMS development company, solutions that enhance learning outcomes while building intelligible education management software.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-end">
            <img 
              src={img3} 
              alt="Group of students studying together around a laptop in a library" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-md rounded-xl"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Education Solutions Card Grid ---
const EducationSolutions = () => {
  const solutions = [
    { title: "Education Technology Solutions", image: img4 },
    { title: "Student Information Systems", image: img5 },
    { title: "Learning Management System Development", image: img6 },
  ];

  return (
    <section id="solutions" className="bg-white py-16 md:py-24 w-full scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black mb-12 uppercase">
            Education IT Services We Offer
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <RevealOnScroll 
              key={index} 
              direction="up" 
              delay={index * 100}
              className="relative group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-black flex flex-col"
            >
              <div onClick={handleContactClick} className="w-full h-full block">
                {/* Embedded Image sizes container dynamically to avoid cutting */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto block opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
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

// --- Section 5: Client Testimonial ---
const ClientTestimonial = () => {
  return (
    <section className="bg-white pb-16 md:pb-24 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up" className="border-t border-b border-gray-400 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="text-blue-500 flex-shrink-0">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                “Capyngen's built our fully transformed education software development company the way we needed for our education system. From AI-powered learning to modernized campus management, their high-end technology services significantly advanced student engagement and efficiency.”
              </p>
              <div className="flex flex-col items-end mt-8 w-full">
                <h4 className="text-blue-600 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                  CLIENT TESTIMONIAL
                </h4>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black">
                  — Director of Digital Learning 
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

// --- Section 6: Education Insights ---
const EducationInsights = () => {
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
    { title: "Customised Learning with Artificial Intelligence", image: img7 },
    { title: "Online Univeristy Campuses Development", image: img8 },
    { title: "Online Learning Platform Development", image: img9 },
    { title: "Education ERP Software", image: img10 },
    { title: "Learning Management System Development", image: img11 },
    { title: "EdTech Software Development", image: img12 }
  ];

  return (
    <section className="bg-[#111827] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10">
            Digital Education Overview
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {insights.map((insight, index) => (
              <div 
                key={index} 
                onClick={handleContactClick}
                className="relative flex-none w-[260px] sm:w-[320px] md:w-[350px] rounded-xl overflow-hidden snap-start group cursor-pointer bg-black flex flex-col"
              >
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-auto block opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-blue-600/60 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight">
                    {insight.title}
                  </h3>
                  <div className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100">
                    Know More
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        
        <div className="flex justify-end gap-4 mt-6 pr-4">
          <button onClick={() => scroll('left')} className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded transition-colors" aria-label="Scroll left">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded transition-colors" aria-label="Scroll right">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
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

// --- Section 7: Why Capyngen ---
const WhyCapyngen = () => {
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

  const cards = [
    { title: "Custom Education Software", description: "We offer high-end IT services for custom education websites.", image: img13 },
    { title: "EdTech Software Development", description: "Build your EdTech Software with our expert teams of developers and designers.", image: img14 },
    { title: "Education ERP Software", description: "Get your ERP software with us and manage academic administrative, financial and learning functions.", image: img4 }, // Reusing an image to fill out cards
    { title: "Education Mobile App Development", description: "Capyngen offers you reliable, smooth and customized mobile apps for education services.", image: img5 }  // Reusing an image
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 uppercase tracking-wide">
            Why Choose Capyngen?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium">
            Advanced Technology That Build Future 
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="relative flex-none w-[260px] sm:w-[340px] md:w-[380px] rounded-lg overflow-hidden snap-start group bg-black flex flex-col cursor-pointer"
                onClick={handleContactClick}
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-auto block opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white pointer-events-none">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-200 uppercase leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => scroll('left')} className="p-2 border border-gray-200 text-gray-400 hover:text-black hover:bg-gray-50 rounded transition-colors" aria-label="Previous">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-2 border border-gray-200 text-gray-600 hover:text-black hover:bg-gray-50 rounded transition-colors" aria-label="Next">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Section 8: Transforming Digital Learning ---
const TransformingDigitalLearning = () => {
  const results = [
    "Student Information & Campus Management Systems",
    "Mobile Learning Applications",
    "Learning Analytics & Performance Dashboards",
    "Ongoing Support, Maintenance & Platform Optimization"
  ];

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealOnScroll direction="left" className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Rebuilding Your Online<br className="hidden md:block" /> Learning Platform
            </h2>
            <p className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              Capyngen builds and designs modern learning solutions that offer educational experiences, latest academic functions, and upgrades for the future.
            </p>
            <div className="text-gray-900 text-base sm:text-lg md:text-xl mb-4 font-semibold">
              Our Capabilities 
            </div>
            <ul className="space-y-3">
              {results.map((item, index) => (
                <li key={index} className="flex items-start sm:items-center text-gray-900 text-sm sm:text-base md:text-lg">
                  <span className="font-bold mr-3 text-black mt-1 sm:mt-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll direction="right" className="w-full flex justify-center lg:justify-end">
            <img 
              src={img10} 
              alt="Overhead view of students studying collaboratively at a round table" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover rounded-xl shadow-md"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// --- Section 9: FAQs ---
const EducationFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How scalable are education technology services?", answer: "Education tech is highly scable and flexible, offering simplified content delivery and automated tools with human-led instruction." },
    { question: "Can education software development support online universities?", answer: "Yes, it can strengthen the virtual classroom, student management and admin system to smoothly run online universities without any physical campus. " },
    { question: "Why choose a software development company for education?", answer: "Choosing the right software development company and expertise for your institution will benefit you with compliance, scalability, and security." },
    { question: "How do education IT services benefit schools?", answer: "An education IT service would help you workload, improve teaching through digital tools and keep your system secure & reliable. " },
    { question: "What sectors profit from education software development?", answer: "Higher education, online univerisities, K-12 schools, ed-tech startups, tutoring services, public education and all skill training providers benefit from education software. " },
    { question: "How secure is education software for student data?", answer: "Education software ensures security for regular audits, encryption, and keeps student data genuinely safe." },
    { question: "Does education software service include analytics dashboards?", answer: "Yes, most IT companies include analytical dashboards in their education software services." },
    { question: "How education software development support customized learning?", answer: "Education software uses data on each student's pace, and automatically balances content difficulty, suggest resources, and adapt to feedback." },
    { question: "Can EdTech software development support multilingual learning?", answer: "Yes. EdTech supports multilingual learning through translation, and language-switching interfaces to help the students learn in their selected language." },
    { question: "Why choose Capyngen as your education software development company?", answer: "Selecting an education software company is overwhelming, but with Capyngen’s proven experience in combining services with a client-focused approach, and building secure software solutions, it assures that the decision will give you a positive outcome. " },
    { question: "What education technology solutions Capyngen offers?", answer: "We offer LMS software, administration platform, virtual classroom & eLearning solutions, and analytical dashboard to track student’s performance regularly. " },
    { question: "Can we develop custom education software for schools and universities?", answer: "Yes. With Capyngen’s expert team, you can get your customized education software for schools or universities. It includes student information systems, e-learning portals, and mobile learning apps service solutions." },
    { question: "How Capyngen combines AI into education software?", answer: "Capyngen uses AI to automate daily tasks, speed up the manual processes, and support features like personalized learning, grading, and data-driven insights." }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-black mb-12 text-center uppercase">
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
                  <div className="p-4 sm:p-5 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
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

// --- Section 10: Call to Action ---
const EducationCTA = () => {
  return (
    <section className="bg-[#0B0A1E] py-20 md:py-32 w-full flex justify-center items-center overflow-hidden">
      <RevealOnScroll direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Shape the Future of Education with Capyngen 
        </h2>
        
        <p className="text-sm sm:text-base md:text-xl text-gray-400 sm:text-gray-200 mb-10 max-w-2xl leading-relaxed">
          Capyngen offers high-tech intelligent learning environments, enhancing student success, and advancing digital innovation with AI-powered education solutions. We provide reliable guidance, post-lauch support and a dedicated team of experts, supporting the future of Education in the virtual world. 
        </p>
        
        <button 
          onClick={handleContactClick}
          className="bg-[#1f2025] hover:bg-gray-800 border border-gray-500 text-white text-sm sm:text-base font-medium py-3 px-6 sm:px-8 rounded-full flex justify-center items-center transition-colors duration-300"
        >
          Contact Us for Education Project
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
      </RevealOnScroll>
    </section>
  );
};

// --- Main Page Assembly ---
const EducationPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-900 flex flex-col">
      <EducationHero />
      <DigitalEducationTransformation />
      <AIEducationTransformation />
      <EducationSolutions />
      <ClientTestimonial />
      <EducationInsights />
      <WhyCapyngen />
      <TransformingDigitalLearning />
      <EducationFAQs />
      <EducationCTA />
    </div>
  );
};

export default EducationPage;