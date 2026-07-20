import React, { useState, useRef, useEffect } from 'react';

// Importing images sequentially as per the provided folder structure
import img04 from "../assets/homepage/04.png";
import img05 from "../assets/homepage/05.png";
import img06 from "../assets/homepage/06.png";
import img07 from "../assets/homepage/07.png";
import img08 from "../assets/homepage/08.png";
import img09 from "../assets/homepage/09.png";
import img10 from "../assets/homepage/10.png";
import img11 from "../assets/homepage/11.png";
import img12 from "../assets/homepage/12.png";
import img13 from "../assets/homepage/13.png";
import img14 from "../assets/homepage/14.png";
import img15 from "../assets/homepage/15.png";
import img16 from "../assets/homepage/16.png";
import img17 from "../assets/homepage/17.png";
import img18 from "../assets/homepage/18.png";
import img19 from "../assets/homepage/19.png";
import img20 from "../assets/homepage/20.png";
import img21 from "../assets/homepage/21.png";
import img22 from "../assets/homepage/22.png";
import img23 from "../assets/homepage/23.png";
import img24 from "../assets/homepage/24.png";
import img25 from "../assets/homepage/25.png";
import img26 from "../assets/homepage/26.png";

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

// --- Global Helpers ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContactClick = () => {
  window.location.href = "mailto:hello@capyngen.com";
};

const HomePage: React.FC = () => {
  // References for the scrollable containers
  const latestArticlesContainerRef = useRef<HTMLDivElement>(null);
  const solutionsContainerRef = useRef<HTMLDivElement>(null);
  const successStoriesContainerRef = useRef<HTMLDivElement>(null);
  const insightsContainerRef = useRef<HTMLDivElement>(null);

  // Functions to handle left/right scrolling
  const scrollArticles = (direction: 'left' | 'right') => {
    if (latestArticlesContainerRef.current) {
      const scrollAmount = 350; 
      latestArticlesContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollSolutions = (direction: 'left' | 'right') => {
    if (solutionsContainerRef.current) {
      const scrollAmount = 420; 
      solutionsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollSuccessStories = (direction: 'left' | 'right') => {
    if (successStoriesContainerRef.current) {
      const scrollAmount = 350; 
      successStoriesContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollInsights = (direction: 'left' | 'right') => {
    if (insightsContainerRef.current) {
      const scrollAmount = 350; 
      insightsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // =========================================
  // DATA PAYLOADS
  // =========================================
  
  const latestArticles = [
    { id: 1, title: "AI-Powered Enterprise Solutions", description: "Leadership in Enterprise AI: From Infrastructure to Intelligence. Our AI solutions help businesses automate operations, predict outcomes, and personalize at scale.", imageUrl: img04 },
    { id: 2, title: "Custom Software Success Stories", description: "Discover how we build scalable digital products for modern businesses. Our custom software development transforms complex business challenges into simple, effective solutions.", imageUrl: img05 },
    { id: 3, title: "UX Design Trends 2026", description: "Creating digital experiences people love to use every day. We design user-focused experiences grounded in research and real user feedback.", imageUrl: img06 },
    { id: 4, title: "Cloud & DevOps at Scale", description: "Building reliable infrastructure for rapidly growing businesses. Our cloud solutions ensure your business runs smoothly at any scale.", imageUrl: img07 },
    { id: 5, title: "Digital Transformation Strategies", description: "Helping businesses embrace digital change with confidence. We guide you through every step of your transformation journey.", imageUrl: img08 },
    { id: 6, title: "Innovation Labs & R&D", description: "Exploring emerging technologies to keep your business ahead of the curve. Our innovation labs experiment with AI, blockchain, and next-gen solutions.", imageUrl: img09 }
  ];

  const technologySolutions = [
    { title: "Software Development", description: "Tailored web, mobile, and enterprise software built for growth. Complete delivery from system design to final deployment.", imageUrl: img10 },
    { title: "AI & Automation", description: "Advanced solutions driven by machine learning and generative AI. Streamline workflows, forecast trends, and deliver personalized experiences at any scale.", imageUrl: img11 },
    { title: "Cloud & Infrastructure", description: "Scalable cloud architecture, automated DevOps workflows, and infrastructure-as-code that ensures your business performs reliably at any level.", imageUrl: img12 },
    { title: "Data Analytics & Business Intelligence", description: "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions with confidence.", imageUrl: img13 },
    { title: "Cybersecurity Solutions", description: "Protect your business from evolving threats. We provide comprehensive security assessments, compliance guidance, and monitoring.", imageUrl: img14 },
    { title: "ERP & Enterprise Solutions", description: "Streamline your business operations with integrated enterprise solutions. From HRMS to finance, we automate your core processes.", imageUrl: img15 }
  ];

  const successStories = [
    { id: 1, category: "SAAS", title: "SaaS Platform", description: "How AI automation reduced manual work by 65%.", imageUrl: img16 },
    { id: 2, category: "E-COMMERCE", title: "Retail E-commerce", description: "Boosting online sales through custom commerce solutions.", imageUrl: img17 },
    { id: 3, category: "ENTERPRISE", title: "HRMS Platform", description: "Helping enterprises manage employees with smarter workflows.", imageUrl: img18 },
    { id: 4, category: "FINANCE", title: "Fintech Innovation", description: "Building secure, scalable platforms for modern financial services.", imageUrl: img19 },
    { id: 5, category: "HEALTH", title: "Healthcare Digitalization", description: "Improving patient outcomes through intelligent healthcare solutions.", imageUrl: img20 },
    { id: 6, category: "INDUSTRY", title: "Manufacturing Automation", description: "Streamlining production processes with IoT and AI integration.", imageUrl: img21 },
  ];

  const insightsData = [
    { id: 1, category: "BLOG", title: "Technology Blog", description: "Latest trends in AI, cloud, cybersecurity, and software engineering. Stay updated with expert analysis and practical insights.", imageUrl: img22 },
    { id: 2, category: "CASE STUDIES", title: "Case Studies", description: "Real projects. Real business results. Explore our impact across industries and see how we solve complex challenges.", imageUrl: img23 },
    { id: 3, category: "REPORTS", title: "Industry Reports", description: "Expert analysis across digital transformation and technology adoption. Get data-driven insights to guide your strategy.", imageUrl: img24 },
    { id: 4, category: "WEBINARS", title: "Webinars & Events", description: "Join our expert sessions on emerging technologies and best practices. Learn from industry leaders and hands-on practitioners.", imageUrl: img25 },
    { id: 5, category: "GUIDES", title: "Whitepapers & Guides", description: "In-depth resources on specific technology topics. Download our comprehensive guides to deepen your understanding.", imageUrl: img26 },
    { id: 6, category: "VIDEO", title: "Video Library", description: "Watch our technology demos, client testimonials, and expert talks. Visual content that makes complex topics easy to understand.", imageUrl: img04 } // Reusing img04
  ];

  const industries = [
    { 
      id: 'banking', 
      name: 'Banking & Finance', 
      description: 'Secure, compliant, and scalable solutions for modern financial institutions. From core banking to wealth management, we digitize your operations.', 
      imageUrl: img05 
    },
    { 
      id: 'healthcare', 
      name: 'Healthcare', 
      description: 'Patient-centric solutions that improve outcomes and streamline operations. Our healthcare platforms are HIPAA-compliant and user-friendly.', 
      imageUrl: img06 
    },
    { 
      id: 'manufacturing', 
      name: 'Manufacturing', 
      description: 'Smart manufacturing solutions with IoT, automation, and predictive analytics. Optimize production, reduce downtime, and improve quality.', 
      imageUrl: img07 
    },
    { 
      id: 'education', 
      name: 'Education', 
      description: 'E-learning platforms and education management systems. We help educational institutions deliver better learning experiences.', 
      imageUrl: img08 
    },
    { 
      id: 'retail', 
      name: 'Retail', 
      description: 'Omnichannel retail solutions that boost sales and customer engagement. From ecommerce to inventory management, we cover it all.', 
      imageUrl: img09 
    },
    { 
      id: 'realestate', 
      name: 'Real Estate', 
      description: 'Property management platforms and real estate marketplaces. Simplify property listings, transactions, and customer relationships.', 
      imageUrl: img10 
    },
    { 
      id: 'insurance', 
      name: 'Insurance', 
      description: 'Digital insurance platforms for claims management, underwriting, and customer engagement. Modernize your insurance operations.', 
      imageUrl: img11 
    },
    { 
      id: 'logistics', 
      name: 'Logistics', 
      description: 'Supply chain solutions that improve visibility and efficiency. Track shipments, optimize routes, and reduce operational costs.', 
      imageUrl: img12 
    },
    { 
      id: 'hightech', 
      name: 'High Tech', 
      description: 'Cutting-edge solutions for technology companies. From SaaS platforms to hardware integration, we support high-tech innovation.', 
      imageUrl: img13 
    },
    { 
      id: 'government', 
      name: 'Government', 
      description: 'Secure and transparent digital solutions for government services. Improve citizen engagement and operational efficiency.', 
      imageUrl: img14 
    },
  ];

  const whyChooseUsFeatures = [
    { title: "AI-First Innovation", description: "Building intelligent software powered by emerging technologies. We leverage AI to create smarter, more efficient solutions." },
    { title: "Experienced Team", description: "Designers, engineers, AI specialists working together. Our multidisciplinary team brings diverse expertise to every project." },
    { title: "Enterprise Expertise", description: "Scalable digital solutions designed for growing businesses. We understand enterprise challenges and build accordingly." },
    { title: "End-to-End Delivery", description: "From strategy to deployment and long-term support. We are with you at every stage of your digital journey." },
    { title: "Client-Centric Approach", description: "Your success is our success. We prioritize your business goals and deliver solutions that drive real results." },
    { title: "Proven Track Record", description: "200+ projects delivered with 98% client satisfaction. Our results speak for themselves." }
  ];

  const processSteps = [
    { num: "01", title: "Discover", description: "We take time to understand your business goals, challenges, and market context before we build anything." },
    { num: "02", title: "Design", description: "We create user-focused experiences that are grounded in research and real user needs." },
    { num: "03", title: "Develop", description: "We build scalable digital products using modern and reliable technology stacks." },
    { num: "04", title: "Test", description: "We ensure quality, security, and performance at every layer of development." },
    { num: "05", title: "Deploy", description: "We launch with confidence using automated CI/CD pipelines for smooth delivery." },
    { num: "06", title: "Support", description: "We provide continuous improvement, monitoring, and long-term maintenance support." }
  ];

  const faqs = [
    { q: "What does Capyngen do?", a: "Capyngen is a leading IT company that provides custom software development, AI solutions, cloud services, and digital transformation consulting to businesses across industries." },
    { q: "Where is Capyngen located?", a: "Capyngen is a trusted IT company in Gurugram, serving clients across India and international markets." },
    { q: "What industries does Capyngen serve?", a: "We serve banking, healthcare, manufacturing, education, retail, real estate, insurance, logistics, high tech, and government sectors." },
    { q: "Is Capyngen a good IT company for startups?", a: "Yes, we are a preferred IT company for startups, offering cost-effective and scalable solutions for new businesses." },
    { q: "What software development services do you offer?", a: "We offer custom web, mobile, and enterprise application development with end-to-end delivery from architecture to launch." },
    { q: "Does Capyngen provide AI solutions?", a: "Yes, we build intelligent solutions powered by machine learning and generative AI to automate operations and personalize at scale." },
    { q: "What cloud services do you offer?", a: "We provide modern cloud architecture, DevOps pipelines, infrastructure-as-code, and cloud migration services." },
    { q: "How is Capyngen different from other IT companies?", a: "We combine deep technology expertise with business acumen to build digital products that win in the market, not just work." },
    { q: "Do you offer IT consulting services?", a: "Yes, we are a full-service IT consulting and services company providing strategic technology guidance to businesses." },
    { q: "Can Capyngen help with digital transformation?", a: "Absolutely. We guide businesses through every step of their digital transformation journey with tailored solutions." },
    { q: "What is the typical project delivery time?", a: "Project timelines vary based on scope. We provide clear timelines during initial discussions and deliver on time." },
    { q: "Do you provide post-launch support?", a: "Yes, we offer continuous improvement, monitoring, and long-term maintenance through automated CI/CD pipelines." },
    { q: "Is Capyngen a reliable IT services company?", a: "Yes, with 200+ projects delivered and 98% client satisfaction, we are a reliable IT services company." },
    { q: "How can I start a project with Capyngen?", a: "Simply contact us for a free consultation. We will understand your goals and design a tailored technology roadmap." },
    { q: "Does Capyngen offer career opportunities?", a: "Yes, we are always looking for talented engineers, designers, marketers, and AI specialists. Explore careers on our website." }
  ];

  // States
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const activeIndustry = industries.find(ind => ind.id === activeIndustryId) || industries[0];
  
  // State for Accordion FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // Default open first item

  return (
    <div className="w-full bg-white font-sans text-slate-900">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden bg-slate-950 pt-10 pb-16 md:pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #1e293b, #0f172a)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#0f172a]/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        <div className="relative z-10 mx-auto flex h-full min-h-[75vh] w-full max-w-[1400px] flex-col justify-between px-6 lg:px-12 xl:px-16">
          <RevealOnScroll direction="up" className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff] sm:text-sm">
              Building the Future of Digital Business
            </p>
            <h1 className="mb-6 font-['Syne',sans-serif] text-[48px] font-normal leading-[1.2] text-white md:text-[72px] md:leading-[77.8px] tracking-[0px]">
              AI. Software.<br />
              <span className="text-[#2563eb]">Innovation.</span><br />
              Everything Your Business Needs to Grow.
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              We create smart digital solutions that empower businesses to innovate, grow, and stay ahead of the competition. As a leading IT Company, we combine deep technical expertise with business understanding to deliver results that truly matter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 rounded-sm bg-[#2563eb] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="rounded-sm border border-white/20 bg-transparent px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Explore Our Services
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200} className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/20 pb-8 pt-10 md:grid-cols-4 md:gap-8 lg:mt-32">
            <div className="flex flex-col">
              <h3 className="mb-1 text-4xl font-bold text-white sm:text-5xl">200+</h3>
              <p className="text-sm font-medium text-slate-300">Projects Delivered</p>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-1 text-4xl font-bold text-white sm:text-5xl">50+</h3>
              <p className="text-sm font-medium text-slate-300">Technology Experts</p>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-1 text-4xl font-bold text-white sm:text-5xl">15+</h3>
              <p className="text-sm font-medium text-slate-300">Industries Served</p>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-1 text-4xl font-bold text-white sm:text-5xl">98%</h3>
              <p className="text-sm font-medium text-slate-300">Client Satisfaction</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          LATEST AT CAPYNGEN SECTION 
          ========================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 xl:px-16">
        <RevealOnScroll className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="mb-4 font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl">
              Latest at Capyngen
            </h2>
            <p className="text-base text-slate-500 sm:text-lg">
              Keep up with our latest breakthroughs, tech insights, product releases, client success stories, and official company updates. As a leading information technology company in India, we continuously push the boundaries of what's possible.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button onClick={() => scrollArticles('left')} className="flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={() => scrollArticles('right')} className="flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div ref={latestArticlesContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth">
            {latestArticles.map((article) => (
              <div key={article.id} onClick={handleContactClick} className="group flex w-[300px] shrink-0 snap-start cursor-pointer flex-col overflow-hidden border border-slate-100 bg-white transition-shadow hover:shadow-lg sm:w-[320px] md:w-[340px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img src={article.imageUrl} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900">{article.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{article.description}</p>
                  <div className="my-5 h-[1px] w-full bg-slate-100"></div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Read more</span>
                    <svg className="text-blue-600 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* =========================================
          TECHNOLOGY SOLUTIONS SECTION 
          ========================================= */}
      <section id="services" className="w-full bg-[#2563eb] py-20 px-6 lg:px-12 xl:px-16 scroll-mt-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <RevealOnScroll className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-['Syne',sans-serif] text-4xl font-semibold text-white md:text-5xl">
              Technology Solutions That Drive Growth
            </h2>
            <div className="flex shrink-0 gap-3">
              <button onClick={() => scrollSolutions('left')} className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={() => scrollSolutions('right')} className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div ref={solutionsContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 scroll-smooth">
              {technologySolutions.map((solution) => (
                <div key={solution.title} onClick={handleContactClick} className="flex w-[290px] shrink-0 snap-start flex-col border border-white/10 bg-[#1e293b] p-8 shadow-xl transition-shadow hover:shadow-2xl sm:w-[360px] md:w-[400px] cursor-pointer">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img src={solution.imageUrl} alt={solution.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="mt-8 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold text-white">{solution.title}</h3>
                      <p className="mb-8 text-base leading-relaxed text-slate-300">{solution.description}</p>
                    </div>
                    <div className="group flex cursor-pointer items-center gap-3">
                      <span className="text-base font-medium text-white transition-colors hover:text-[#00e5ff]">Discover our impact</span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#3b82f6] text-white transition-transform group-hover:translate-x-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          SUCCESS STORIES
          ========================================= */}
      <section className="w-full bg-white py-20 px-6 lg:px-12 xl:px-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-[1400px]">
          <RevealOnScroll className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl">
              Success Stories
            </h2>
            <div className="flex shrink-0 gap-3">
              <button onClick={() => scrollSuccessStories('left')} className="flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={() => scrollSuccessStories('right')} className="flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div ref={successStoriesContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth">
              {successStories.map((story) => (
                <div key={story.id} onClick={handleContactClick} className="group flex w-[300px] shrink-0 snap-start cursor-pointer flex-col bg-white border border-slate-200 transition-all hover:shadow-xl sm:w-[320px] md:w-[350px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img src={story.imageUrl} alt={story.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <span className="mb-3 text-[11px] font-bold tracking-widest text-[#2563eb] uppercase">{story.category}</span>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900">{story.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-500">{story.description}</p>
                    <div className="my-5 h-[1px] w-full bg-slate-100"></div>
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Read more</span>
                      <svg className="text-[#2563eb] transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          INSIGHTS THAT INSPIRE INNOVATION
          ========================================= */}
      <section className="w-full bg-[#f8f9fa] py-20 px-6 lg:px-12 xl:px-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-[1400px]">
          <RevealOnScroll className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl">
              Insights That Inspire Innovation
            </h2>
            <div className="flex shrink-0 gap-3">
              <button onClick={() => scrollInsights('left')} className="flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={() => scrollInsights('right')} className="flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div ref={insightsContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth">
              {insightsData.map((insight) => (
                <div key={insight.id} onClick={handleContactClick} className="group flex w-[300px] shrink-0 snap-start cursor-pointer flex-col bg-white border border-slate-200 transition-all hover:shadow-xl sm:w-[320px] md:w-[350px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img src={insight.imageUrl} alt={insight.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <span className="mb-3 text-[11px] font-bold tracking-widest text-[#2563eb] uppercase">{insight.category}</span>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900">{insight.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-500">{insight.description}</p>
                    <div className="my-5 h-[1px] w-full bg-slate-100"></div>
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Read more</span>
                      <svg className="text-[#2563eb] transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          INDUSTRIES WE SERVE 
          ========================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          
          <RevealOnScroll direction="right" className="relative aspect-square w-full overflow-hidden bg-slate-100 lg:sticky lg:top-24">
            <img 
              key={activeIndustry.id}
              src={activeIndustry.imageUrl} 
              alt={activeIndustry.name} 
              className="h-full w-full object-cover transition-all duration-700 ease-in-out animate-in fade-in zoom-in-95" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white md:p-12">
              <h3 className="mb-2 font-['Syne',sans-serif] text-3xl font-semibold md:text-4xl">
                Trusted Across Industries
              </h3>
              <p className="text-sm text-slate-300 md:text-base">
                Select your industry. Discover our impact.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" className="flex flex-col pt-4">
            <p className="mb-10 font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl lg:text-[56px] leading-[1.1]">
             INDUSTRIES WE SERVE 
            </p>
            <h2 className="mb-4 text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              Trusted Across Industries
            </h2>

            {/* Accordion-Style Industry List */}
            <div className="flex flex-col">
              {industries.map((industry) => {
                const isActive = activeIndustryId === industry.id;
                
                return (
                  <div 
                    key={industry.id} 
                    className={`border-b transition-colors duration-300 ${
                      isActive ? 'border-blue-300' : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndustryId(industry.id)}
                      className="group flex w-full items-center justify-between py-5 text-left transition-all duration-300 focus:outline-none"
                    >
                      <span 
                        className={`text-base font-medium md:text-lg transition-colors ${
                          isActive ? 'text-[#2563eb]' : 'text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        {industry.name}
                      </span>
                      <svg 
                        className={`transition-transform duration-300 ${
                          isActive ? 'rotate-90 text-[#2563eb]' : 'text-slate-300 group-hover:text-slate-400'
                        }`} 
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                    
                    {/* Smooth height transition utilizing CSS Grid */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pb-0'
                      }`}
                    >
                      <div className="overflow-hidden pr-8 md:pr-12">
                        <p className="text-sm leading-relaxed text-slate-500 md:text-base">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>
          
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE & OUR PROCESS 
          ========================================= */}
      <section className="w-full bg-[#0b1221] py-20 px-6 text-white lg:px-12 xl:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll direction="right" className="flex flex-col">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00e5ff]">
                Why Choose Capyngen
              </span>
              <h2 className="mb-6 font-['Syne',sans-serif] text-4xl font-semibold leading-tight md:text-5xl">
                Built Differently.<br />
                Delivered Differently.
              </h2>
              <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
                We bring together deep technical knowledge and sharp business insight to create digital products that don't just function—they dominate the market. As a leading IT Company, we are committed to your success.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex w-fit items-center gap-2 rounded-sm bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </RevealOnScroll>

            <RevealOnScroll direction="left" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
              {whyChooseUsFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-5 h-6 w-1 bg-[#2563eb]"></div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </RevealOnScroll>
          </div>

          <div className="my-24 h-px w-full bg-white/10"></div>

          <RevealOnScroll direction="up">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#00e5ff]">
              Our Process
            </span>
            <h2 className="mb-16 font-['Syne',sans-serif] text-3xl font-semibold md:text-4xl">
              How We Deliver Excellence
            </h2>

            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${
                    index !== 0 ? 'border-l border-white/10 pl-6 sm:pl-8' : 'pr-6 sm:pr-8'
                  }`}
                >
                  <span className="mb-5 text-sm font-bold text-[#2563eb]">
                    {step.num}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* =========================================
          CAREERS SECTION
          ========================================= */}
      <section className="relative flex w-full items-center justify-start overflow-hidden py-32 lg:py-48">
        
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12 xl:px-16">
          <RevealOnScroll className="max-w-xl">
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff]">
              Careers
            </span>
            
            <h2 className="mb-6 font-['Syne',sans-serif] text-5xl font-normal leading-[1.15] text-slate-200 md:text-6xl">
              Build Your Career<br />
              <span className="font-bold text-white">at Capyngen</span>
            </h2>
            
            <p className="mb-10 text-base leading-relaxed text-slate-300 md:text-lg">
              Become part of a team of skilled engineers, creative designers, strategic marketers, AI experts, and forward-thinking innovators who are building technology that creates meaningful change in the real world. As a leading software IT Company, we offer exciting career opportunities.
            </p>
            
            <button 
              onClick={handleContactClick}
              className="flex w-fit items-center justify-center gap-3 rounded-sm bg-[#2563eb] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Explore Careers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
          ========================================= */}
      <section className="w-full bg-white py-24 px-6 lg:px-12 xl:px-16">
        <RevealOnScroll className="mx-auto w-full max-w-4xl">
          
          {/* Header with Background Blur */}
          <div className="relative mb-16 flex justify-center py-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-48 rounded-full bg-[#3b82f6]/30 blur-[50px]"></div>
            <h2 className="relative z-10 font-['Syne',sans-serif] text-5xl font-bold text-slate-800 md:text-6xl tracking-tight">
              FAQs
            </h2>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-b border-slate-200 py-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between text-left focus:outline-none"
                  >
                    <span
                      className={`pr-6 text-base font-semibold transition-colors sm:text-lg ${
                        isOpen ? 'text-[#0ea5e9]' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 text-2xl font-light transition-colors ${
                        isOpen ? 'text-[#0ea5e9]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  {/* Smooth height transition utilizing CSS Grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pr-8 sm:pr-12">
                      <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
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

      {/* =========================================
          CTA SECTION (Ready to Transform)
          ========================================= */}
      <section id="contact" className="w-full bg-[#050b14] py-24 px-6 lg:px-12 xl:px-16 scroll-mt-10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-20">
          
          {/* Left Content */}
          <RevealOnScroll direction="right" className="flex max-w-xl flex-col">
            <h2 className="mb-6 font-['Syne',sans-serif] text-4xl font-normal text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Ready to Transform <br />
              <span className="font-semibold text-[#3b82f6]">Your Business?</span>
            </h2>
            
            <p className="mb-10 text-base leading-relaxed text-slate-400 md:text-lg">
              Let's collaborate to build intelligent digital solutions that drive results. Our team is ready to listen to your vision, understand your objectives, and craft a customized technology strategy that moves your business forward. As a full service IT Comapny, we provide end-to-end solutions for your business needs.
            </p>
            
            <button 
              onClick={handleContactClick}
              className="flex w-fit items-center justify-center gap-3 rounded-sm bg-[#3b82f6] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Contact Our Experts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </RevealOnScroll>

          {/* Right Content: Tech Image */}
          <RevealOnScroll direction="left" className="relative w-full max-w-[600px] shrink-0 overflow-hidden lg:w-1/2">
            <img 
              src={img15} 
              alt="Digital Transformation Technology" 
              className="h-full w-full object-cover opacity-90 shadow-2xl"
            />
          </RevealOnScroll>

        </div>
      </section>

    </div>
  );
};

export default HomePage;