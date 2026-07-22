import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Serial Imports based on your folder structure
import img1 from "../assets/Web Development Service/1.png";
import img2 from "../assets/Web Development Service/2.png";
import img3 from "../assets/Web Development Service/3.jpg";
import img4 from "../assets/Web Development Service/4.png";
import img5 from "../assets/Web Development Service/5.png";
import img6 from "../assets/Web Development Service/6.png";

// --- Scroll Animation Wrapper Component ---
const RevealOnScroll = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const WebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('Web Offerings');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Ref for the slider container
  const sliderRef = useRef<HTMLDivElement>(null);

  // Data for What's Happening section, colors updated to match the reference image style
  const happenings = [
    {
      tag: "REPORT",
      title: "Upgrading Legacy Architecture for Global Scale",
      color: "bg-[#0056b3]", // Dark blue
      hoverColor: "group-hover:text-[#0056b3]",
      img: img1
    },
    {
      tag: "AWARD",
      title: "Capyngen Ranked Among Leaders in 2025 Web Platforms",
      color: "bg-[#b46918]", // Amber/Orange
      hoverColor: "group-hover:text-[#b46918]",
      img: img2
    },
    {
      tag: "CASE STUDY",
      title: "Helping Retail Huge Unite Their Global E-commerce",
      color: "bg-[#3b4754]", // Dark Slate
      hoverColor: "group-hover:text-[#3b4754]",
      img: img3
    },
    {
      tag: "REPORT",
      title: "The Real Cost of Ignoring Digital Transformation",
      color: "bg-[#0056b3]", // Dark blue
      hoverColor: "group-hover:text-[#0056b3]",
      img: img4
    },
    {
      tag: "CASE STUDY",
      title: "How We Helped a Mid-Size Bank Modernize Without Downtime",
      color: "bg-[#3b4754]", // Dark Slate
      hoverColor: "group-hover:text-[#3b4754]",
      img: img5
    }
  ];

  const servicesContent: Record<string, string[]> = {
    'Web Offerings': [
      'Frontend Development',
      'Scalable Backend Development',
      'Full Stack Web Development Agility',
      'Progressive Web Apps'
    ],
    'Industry Solutions': [
      'Healthcare & MedTech Solutions',
      'Finance & FinTech Applications',
      'Education & E-learning Platforms',
      'E-commerce & Retail Platforms'
    ]
  };

  const whyChooseItems = [
    {
      title: "Global Expertise",
      desc: "Specialists across the world.",
      img: img1
    },
    {
      title: "Cloud-First Approach",
      desc: "Platforms designed for the cloud.",
      img: img2
    },
    {
      title: "Strategy Meets Execution",
      desc: "Approach and execute strategy together.",
      img: img4
    },
    {
      title: "Measurable Results",
      desc: "Clear goals and real ROI in mind.",
      img: img5
    }
  ];

  const faqs = [
    {
      question: "What are Web Engineering Services?",
      answer: "Web Development application link strategy and execution beyond the entire virtual durability, by using cloud-centric approach, technical expertise and global team of experts."
    },
    {
      question: "What does \"cloud-first\" actually mean for my project?",
      answer: "Cloud first ensures your web platform runs on the cloud from day one, offers you better flexibility, faster updates, and reduces issues and complications."
    },
    {
      question: "What does Capyngen offer for web development services?",
      answer: "We offer frontend design, backend systems, full-stack development, SaaS web development, API development, eCommerce website development, and progressive web apps services for our client."
    },
    {
      question: "Do you offer custom web development services or use templates?",
      answer: "Capyngen always offers custom web development services, as we know that every business has different needs and design framework in their mind."
    },
    {
      question: "How does Capyngen handle website security?",
      answer: "Capyngen manages security into the platform from the ground up, covering everything from secure coding to protecting user data and preventing common issues."
    },
    {
      question: "How do you make a web development company easy to use?",
      answer: "Capyngen always follows the user-first design, testing for accessibility and real-time user behavior at each process."
    },
    {
      question: "Can you help improve the ROI of our existing web platform?",
      answer: "Yes. We look at how your current site performs and recommend enhancement that can boost conversions, speed, and overall return on your investment."
    },
    {
      question: "Why should we choose Capyngen for our project?",
      answer: "Capyngen combines deep technical with a world wide team of specialists, so you get the custom website development services."
    }
  ];

  // --- Interaction Handlers ---
  const handleScrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollSliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollSliderRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request has been successfully submitted.");
  };

  const handleCardClick = () => {
    alert("Opening detailed view...");
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[75vh] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src={img1} alt="Hero Background" className="w-full h-full object-cover" />
          {/* Dark overlay to make white text readable */}
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center">
          <RevealOnScroll delay={0}>
            <div className="bg-white/10 text-white border border-white/20 backdrop-blur-sm text-xs font-bold px-4 py-1.5 mb-8 tracking-widest uppercase inline-block">
              CONSULTING
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight whitespace-pre-line">
              Upcoming-Organized Web{'\n'}Development, Fast Tracked With{'\n'}Intelligence
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Capynegen builds virtual ecosystems that take complex high-end technology and turn it into something simple and easy to use for users.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <button 
              onClick={handleScrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 transition-colors flex items-center gap-2 mx-auto rounded-sm"
            >
              Explore Services <ArrowUpRight className="w-4 h-4" />
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <RevealOnScroll delay={0}>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                What are Web Engineering Services?
              </h2>
            </RevealOnScroll>
          </div>
          <div className="col-span-1 md:col-span-2">
            <RevealOnScroll delay={0.1}>
              <p className="text-slate-600 text-lg leading-relaxed">
                Capyngen's web application development link strategy and execution beyond the entire virtual durability. With a cloud-centric, exclusive structural expertise, and a global team of specialists, we help industries enhance from antiquated technology to responsive website development, high performance web development company, smarter, and measurable ROI at every accomplishment. 
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* What's Happening Section (Redesigned based on reference image) */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <RevealOnScroll delay={0}>
              <h2 className="text-[28px] font-bold text-[#0a1526]">What's Happening</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="flex gap-2">
                <button 
                  onClick={scrollSliderLeft}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border border-slate-300 hover:bg-white transition-colors cursor-pointer rounded-none"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0a1526]" />
                </button>
                <button 
                  onClick={scrollSliderRight}
                  className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors cursor-pointer rounded-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div 
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            >
              {happenings.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={handleCardClick}
                  className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[320px] md:min-w-[380px] snap-start flex-shrink-0 flex flex-col rounded-none"
                >
                  {/* Image matching the design (object-cover, specific height) */}
                  <div className="w-full h-56 relative overflow-hidden bg-slate-100 p-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Card Content styled to match reference exactly */}
                  <div className="p-8 flex-1 flex flex-col items-start">
                    <span className={`inline-block ${item.color} text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider mb-5 rounded-none`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-[20px] leading-snug font-medium text-[#0a1526] mb-8 transition-colors ${item.hoverColor}`}>
                      {item.title}
                    </h3>
                    <div className={`mt-auto flex items-center text-[11px] font-bold text-[#0a1526] transition-colors uppercase tracking-widest ${item.hoverColor}`}>
                      READ MORE <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services-section" className="flex flex-col lg:flex-row w-full">
        {/* Left Column */}
        <div className="lg:w-1/2 bg-[#f4f6f8] p-10 md:p-16 lg:p-24 flex justify-end">
          <div className="max-w-xl w-full">
            <RevealOnScroll delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1526] mb-4">
                Our Services
              </h2>
              <p className="text-slate-500 mb-12 text-lg">
                Capyngen offers services for industries to pursue a path of smart digital innovation with secure web engineering.
              </p>
            </RevealOnScroll>

            {/* Tabs */}
            <RevealOnScroll delay={0.1}>
              <div className="flex flex-col mb-16">
                {['Web Offerings', 'Industry Solutions'].map((tab) => (
                  <div 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${activeTab === tab ? 'bg-white border-l-4 border-[#0056b3] shadow-sm' : 'hover:bg-slate-200/50'} px-6 py-5 w-full max-w-md cursor-pointer transition-colors`}
                  >
                    <span className={`${activeTab === tab ? 'text-[#0056b3]' : 'text-slate-500'} font-bold text-sm tracking-wide`}>
                      {tab}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Grid */}
            <RevealOnScroll delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-lg">
                {servicesContent[activeTab].map((service, idx) => (
                  <div key={idx} className="border-b border-slate-300 pb-3">
                    <span className="text-[#0056b3] font-bold text-base block mb-1">
                      0{idx + 1}.
                    </span>
                    <h5 className="font-bold text-[#0a1526]">{service}</h5>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 bg-[#0a1526] relative flex items-center justify-center overflow-hidden">
          <RevealOnScroll delay={0.3}>
             <img src={img6} alt="Our Services" className="w-full h-auto object-cover opacity-90 block" />
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#53a6ff] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll delay={0}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen?</h2>
              <p className="text-slate-800">Capyngen is a world-wide expertise with strategy meets executions, offering web development services and post-launch support.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, idx) => (
              <RevealOnScroll delay={idx * 0.1} key={idx}>
                <div className="bg-white group cursor-pointer flex flex-col h-full hover:shadow-lg transition-shadow">
                  {/* Full image width and native height without cutting */}
                  <div className="w-full relative overflow-hidden bg-slate-100">
                     <img src={item.img} alt={item.title} className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide mt-1">{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs</h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll delay={index * 0.05} key={index}>
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                    <span className="text-blue-600 text-2xl leading-none font-medium">
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white">
            <RevealOnScroll delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply For Services</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas, and enterprise web development services with post-launch solutions.
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:w-1/2 w-full">
            <RevealOnScroll delay={0.2}>
              <div className="bg-white p-8 shadow-xl">
                <div className="flex flex-col gap-2 mb-8 text-sm font-bold text-slate-800 border-b border-slate-200 pb-4">
                  <span className="cursor-pointer text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[17px] w-fit">Got any specific question?</span>
                  <span className="text-slate-500 font-normal mt-3">Book a 15-minute chat with one of our experts.</span>
                </div>

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">First Name *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Last Name *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Company *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none"></textarea>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 focus:ring-slate-500 rounded-none cursor-pointer" />
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Sign up to get Capyngen's mobile insights and marketing updates.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 focus:ring-slate-500 rounded-none cursor-pointer" />
                      <p className="text-xs text-slate-500 leading-relaxed">
                        I agree to the Privacy Statement *
                      </p>
                    </div>
                  </div>

                  <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-sm">
                    Confirm
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default WebDevelopmentPage;