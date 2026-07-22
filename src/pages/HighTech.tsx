import { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

// Serial Image Imports from Folder
import img1 from "../assets/High Tech/01.png";
import img2 from "../assets/High Tech/02.png";
import img3 from "../assets/High Tech/03.png";
import img4 from "../assets/High Tech/04.png";
import img5 from "../assets/High Tech/05.png";
import img6 from "../assets/High Tech/06.png";
import img7 from "../assets/High Tech/07.png";
import img8 from "../assets/High Tech/08.png";
import img9 from "../assets/High Tech/09.png";

// Shared Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Section 1: High Tech Hero ---
const HighTechHero = () => {
  const scrollToNext = () => {
    document.getElementById('mobility-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full h-[600px] lg:h-[700px] flex items-center bg-[#031126] overflow-hidden"
    >
      {/* Full Image Display - No Height Cut */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
        <img 
          src={img1} 
          alt="Hero Background" 
          className="w-full h-full object-contain md:object-cover" 
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#031126] via-[#031126]/90 md:via-[#031126]/70 to-transparent"></div>

      {/* Main Content */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Eyebrow / Category */}
          <div className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4 text-gray-200">
            INDUSTRIES | HIGH TECH
          </div>

          {/* Sub-eyebrow */}
          <div className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 text-gray-300">
            Create. Develop. Reshape.
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Powering Digital Futures.<br />
            Delivering Real Impact.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
            Capyngen offers high-end intelligence, safe, and scalable IT solutions that innovate and increase growth. 
          </p>

          {/* Call to Action */}
          <button onClick={scrollToNext} className="flex items-center gap-4 group focus:outline-none">
            <span className="text-white text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
              Explore Now
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300 shadow-lg">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-[#031126] transform group-hover:translate-x-0.5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>

        </div>
      </motion.div>
    </section>
  );
};

// --- Section 2: Intelligent Mobility ---
const IntelligentMobility = () => {
  return (
    <section id="mobility-section" className="bg-gradient-to-br from-[#598cf4] to-[#3a67e5] py-16 md:py-24 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image (No Height Cut) */}
          <div className="w-full flex justify-center lg:justify-start">
            <img 
              src={img2} 
              alt="Hands typing on laptop with digital overlays" 
              className="w-full max-w-lg lg:max-w-full h-auto object-contain shadow-sm rounded-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-8">
              Smart Versatality.<br />
              Endless Choices.
            </h2>
            
            <div className="text-white/90 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                From future generation cloud structure to self determining AI agents , Capyngen support industries move forward and execute fact-based functional innovation. Our core foundations are built for adoptability, flexible, and calculated profit outcomes.
              </p>
              <p>
                 With plenty of experts across multiple nations. We offer exclusive insight to each contract and deal. We provide multiplex high-end tech interpreting with determined benefits at each overlap of the stack. 

              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// --- Section 3: Trending ---
const Trending = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const trendingItems = [
    { title: "Creating Reliable and Flexible Structure: Future With AI", image: img3 },
    { title: "Enhanced Computing: Building the Upcoming Wave of Transformation", image: img4 },
    { title: "IT Security in the Era of AI Adoptablity", image: img5 },
    { title: "Advanced Tech Used by AI Solution Providers", image: img6 }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          Trending Blogs
        </h2>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {trendingItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden min-w-[280px] md:min-w-[320px] h-[420px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer snap-start flex-shrink-0 bg-gray-900"
            >
              {/* Image without cutting height */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-4 pr-4">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Read more
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-8">
          <button onClick={() => scroll('left')} className="text-gray-300 hover:text-black transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="text-black hover:text-gray-600 transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </motion.div>
    </section>
  );
};

// --- Section 4: High-Tech Innovation ---
const HighTechInnovation = () => {
  return (
    <section className="bg-[#0f131f] py-16 md:py-24 w-full border-t border-[#1a2133]">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-white pr-0 lg:pr-10">
            <h2 className="text-xl md:text-2xl lg:text-[22px] font-bold leading-relaxed mb-6 uppercase tracking-wide">
              The digital frontier pulses with invention,<br className="hidden lg:block"/> 
              Fast Track, and Innovation.
            </h2>
            
            <div className="text-[#c1c6d4] text-base md:text-lg leading-relaxed space-y-6">
              <p>
                The future belongs to businesses bold enough to move fast, think sharp, and build smart. Capyngen partners with high-tech companies to shape, grow, and scale digital products, platforms, and experiences powered by tomorrow's technology and today's best engineering craft.
              </p>
            </div>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end opacity-90 hover:opacity-100 transition-opacity duration-500">
            <img 
              src={img7} 
              alt="Abstract white sketched lines representing innovation" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// --- Section 5: High-Tech Solutions ---
const HighTechSolutions = () => {
  const solutions = [
    { title: "Engineering and R&D Capabilities", description: "Full-cycle product engineering support, guiding your idea from concept to successful market launch.", image: img8 },
    { title: "Intelligent Automation Solutions", description: "Advanced AI and machine learning automation, built for enterprise-scale deployment.", image: img9 },
    { title: "Enhanced Cloud Modernisation Services", description: "Migrate, modernise and manage cloud native systems with zero downtime and maximum efficiency.", image: img1 }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-10 tracking-tight">
          Our Services
        </h2>

        {/* Scrollable Container */}
        <div 
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {solutions.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-md overflow-hidden min-w-[280px] md:min-w-[320px] h-[420px] md:h-[480px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer snap-start flex-shrink-0 bg-gray-900"
            >
              {/* Image without cutting height */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-4 pr-4 group-hover:text-gray-200 transition-colors">
                  {card.title}
                </h3>
                
                <div className="flex items-start opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed uppercase text-gray-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

// --- Section 6: Bold Metrics & Testimonial ---
const HighTechMetricsTestimonial = () => {
  return (
    <section className="bg-white py-12 md:py-16 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="border-t border-b border-gray-300 py-16 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between">
          
          {/* Left Side: Bold Metrics */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h3 className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-8">
              Bold Metrics
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-l-2 border-gray-800 pl-4">
                {/* <div className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2563eb] mb-2 leading-tight">Engineering experts across every domain</div> */}
                <div className="text-[21px] md:text-xl text-gray-600 pr-2">Engineering experts across every domain</div>
              </div>
              <div className="border-l-2 border-gray-800 pl-4">
                {/* <div className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2563eb] mb-2 leading-tight">40</div> */}
                <div className="text-[21px] md:text-xl text-gray-600 pr-2">Countries with active client presence</div>
              </div>
              <div className="border-l-2 border-gray-800 pl-4">
                {/* <div className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2563eb] mb-2 leading-tight">98%</div> */}
                <div className="text-[11px] md:text-xl text-gray-600 pr-2">Client engagement across all projects</div>
              </div>
              <div className="border-l-2 border-gray-800 pl-4">
                {/* <div className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2563eb] mb-2 leading-tight">$8B+</div> */}
                <div className="text-[11px] md:text-xl text-gray-600 pr-2">Annual revenue reflecting market trust</div>
              </div>
            </div>
          </div>

          {/* Right Side: Testimonial */}
          <div className="w-full lg:w-7/12 flex flex-col items-start lg:pl-10">
            <div className="text-[#598cf4] mb-6">
              <svg className="w-12 h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl lg:text-[26px] text-gray-900 leading-relaxed font-medium italic mb-8">
              "Capyngen has provided us with technology expertise and genuine commitment to innovation helped us accelerate our product roadmap at a pace we honestly never thought possible. What really stands out is that they don't operate like a typical vendor — they take the time to understand our goals and think like true engineering partners invested in our success."
            </blockquote>
            
            <div className="w-full flex justify-end">
              <p className="text-sm font-medium text-gray-500">
                - CTO, NovaBridge Financial 
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// --- Section 7: FAQs ---
const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How do you handle bigger enterprise software projects?", answer: "Same care, bigger scale. We think about how it'll hold up with lots of users, how it plugs into your other systems, and what compliance rules apply." },
    { question: "Can you fix an old, outdated system instead of replacing it?", answer: "Yes — that's software modernization. We can update the guts of an old system without shutting the business down while we do it." },
    { question: "How long does a typical project take?", answer: "Most first versions take somewhere between 3 and 9 months, depending on how big the idea is. Then we keep improving it after launch." },
    { question: "Can you connect new software to systems we already use?", answer: "Yes. Hooking new software into your existing CRM, ERP, or old databases is something we do often." },
    { question: "Do you build software specifically for SaaS companies?", answer: "Yes — we help SaaS companies handle things like multiple customer accounts, subscriptions, billing, and usage tracking, all built into the product properly." },
    { question: "Do you work with small startups or only big companies?", answer: "Both. We've helped startups get their first version of a product out the door, and we've helped big enterprises run massive systems without things falling over." },
    { question: "What's your general approach to building software?", answer: "Build in small steps, show progress often, and always tie what we're building back to a real business goal — not just a feature checklist." },
    { question: "Do you handle the whole project, start to finish?", answer: "Yes. Planning, design, building, testing, launching, and supporting it afterward — one team, one point of contact." },
    { question: "What makes Capyngen different?", answer: "A lot of technology software development firms just take orders and code. We actually dig into your business problem first, then build something that solves it — not just something that 'works.'" },
    { question: "What industries does Capyngen work with?", answer: "Fintech, healthcare, logistics, retail, manufacturing, SaaS — you name it. Our high-tech IT services flex to fit whatever rules and systems your industry already has." }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-4xl mx-auto px-6 md:px-12"
      >
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
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-5 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// --- Section 8: CTA ---
const AdaptabilityCTA = () => {
  return (
    <section id="contact-cta" className="bg-[#05050f] py-20 md:py-28 w-full flex flex-col items-center justify-center text-center px-6">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-wide">
          Adoptability Begin Today
        </h2>
        
        <p className="text-gray-300 text-base md:text-[17px] mb-10 leading-relaxed max-w-[600px]">
          Ready to take the next step toward a brighter future? Reach out Capyngen and learn how we can support you.
        </p>

        <button 
          onClick={() => window.location.href = "mailto:hello@capyngen.com"}
          className="bg-[#22242b] hover:bg-[#2d3039] border border-gray-600 text-white text-[15px] font-medium py-3.5 px-8 rounded-full flex justify-center items-center transition-all duration-300 active:scale-95"
        >
          Contact Us Now
        </button>
      </motion.div>
    </section>
  );
};

// --- Main Page Assembly ---
const HighTechPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased flex flex-col bg-white">
      <HighTechHero />
      <IntelligentMobility />
      <Trending />
      <HighTechInnovation />
      <HighTechSolutions />
      <HighTechMetricsTestimonial />
      <FAQsSection />
      <AdaptabilityCTA />
    </div>
  );
};

export default HighTechPage;