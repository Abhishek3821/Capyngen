import React, { useRef, useState } from 'react';

const HomePage: React.FC = () => {
  // References for the scrollable containers
  const latestArticlesContainerRef = useRef<HTMLDivElement>(null);
  const solutionsContainerRef = useRef<HTMLDivElement>(null);
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
    { id: 1, title: "AI-Powered Enterprise Solutions", description: "Leadership in Enterprise AI: Infrastructure to Intelligence", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Custom Software Success Stories", description: "Discover how we build scalable digital products for modern businesses", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "UX Design Trends 2026", description: "Creating digital experiences people love to use every day", imageUrl: "https://images.unsplash.com/photo-1581090122319-335c412f8646?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Cloud & DevOps at Scale", description: "Building reliable infrastructure for rapidly growing companies", imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Innovation in Decentralized Finance", description: "Exploring the role of blockchain and Web3 for corporate finance.", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=800&auto=format&fit=crop" },
  ];

  const technologySolutions = [
    { title: "Software Development", description: "Custom web, mobile, and enterprise applications built for scale. End-to-end delivery from architecture to launch.", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
    { title: "AI & Automation", description: "Intelligent solutions powered by machine learning and generative AI. Automate operations, predict outcomes, personalize at scale.", imageUrl: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=800&auto=format&fit=crop" },
    { title: "Cloud & Infrastructure", description: "Modern cloud architecture, DevOps pipelines, and infrastructure-as-code that keeps your business running at any scale.", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { title: "Data Analytics & BI", description: "Transform raw organizational data into actionable intelligence dashboards, predictive modeling architectures, and reports.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
  ];

  const insightsData = [
    { id: 1, category: "INSIGHTS", title: "Technology Blog", description: "Latest trends in AI, cloud, cybersecurity, and software engineering.", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
    { id: 2, category: "CASE STUDIES", title: "Case Studies", description: "Real projects. Real business results. Explore our impact across industries.", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { id: 3, category: "REPORTS", title: "Industry Reports", description: "Expert analysis across digital transformation and technology adoption.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
    { id: 4, category: "WEBINARS", title: "Tech Leadership Series", description: "Join our engineers and strategists as they discuss the future of digital architecture.", imageUrl: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop" }
  ];

  const industries = [
    { id: 'banking', name: 'Banking & Finance', imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop' },
    { id: 'healthcare', name: 'Healthcare', imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop' },
    { id: 'manufacturing', name: 'Manufacturing', imageUrl: 'https://images.unsplash.com/photo-1565439390118-c2b622af5981?q=80&w=1200&auto=format&fit=crop' },
    { id: 'education', name: 'Education', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop' },
    { id: 'retail', name: 'Retail', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop' },
    { id: 'realestate', name: 'Real Estate', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop' },
    { id: 'insurance', name: 'Insurance', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop' },
    { id: 'logistics', name: 'Logistics', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed79ec6a4?q=80&w=1200&auto=format&fit=crop' },
    { id: 'hightech', name: 'High-Tech', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { id: 'government', name: 'Government', imageUrl: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1200&auto=format&fit=crop' },
  ];

  const whyChooseUsFeatures = [
    { title: "AI-First Innovation", description: "Building intelligent software powered by emerging technologies." },
    { title: "Enterprise Expertise", description: "Scalable digital solutions designed for growing businesses." },
    { title: "Experienced Team", description: "Designers, engineers, AI specialists working together." },
    { title: "End-to-End Delivery", description: "From strategy to deployment and long-term support." }
  ];

  const processSteps = [
    { num: "01", title: "Discover", description: "Understanding your business goals, challenges, and market context." },
    { num: "02", title: "Design", description: "Creating user-focused experiences grounded in research." },
    { num: "03", title: "Develop", description: "Building scalable digital products with modern technology stacks." },
    { num: "04", title: "Test", description: "Ensuring quality, security, and performance at every layer." },
    { num: "05", title: "Deploy", description: "Launching with confidence through automated CI/CD pipelines." },
    { num: "06", title: "Support", description: "Continuous improvement, monitoring, and long-term maintenance." }
  ];

  // State to track which industry is currently selected
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const activeIndustry = industries.find(ind => ind.id === activeIndustryId) || industries[0];

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
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16">
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
          <div className="max-w-4xl pt-12 md:pt-24">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff] sm:text-sm">
              Building the future of digital business
            </p>
            <h1 className="mb-6 font-['Syne',sans-serif] text-[48px] font-normal leading-[1.2] text-white md:text-[72px] md:leading-[77.8px] tracking-[0px]">
              AI. Software.<br />
              <span className="text-[#2563eb]">Innovation.</span><br />
              Everything Your Business Needs to Grow.
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              we build intelligent digital experiences that help businesses innovate, scale, and lead.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-sm bg-[#2563eb] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="rounded-sm border border-white/20 bg-transparent px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10">
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/20 pb-8 pt-10 md:grid-cols-4 md:gap-8 lg:mt-32">
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
          </div>
        </div>
      </section>

      {/* =========================================
          LATEST AT CAPYNGEN SECTION 
          ========================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 xl:px-16">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="mb-4 font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl">
              Latest at Capyngen
            </h2>
            <p className="text-base text-slate-500 sm:text-lg">
              Stay updated with our newest innovations, technology insights, product launches, success stories, and company announcements.
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
        </div>

        <div ref={latestArticlesContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {latestArticles.map((article) => (
            <div key={article.id} className="group flex w-[300px] shrink-0 snap-start cursor-pointer flex-col overflow-hidden border border-slate-100 bg-white transition-shadow hover:shadow-lg sm:w-[320px] md:w-[340px]">
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
      </section>

      {/* =========================================
          TECHNOLOGY SOLUTIONS SECTION 
          ========================================= */}
      <section className="w-full bg-[#2563eb] py-20 px-6 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
          </div>
          
          <div ref={solutionsContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4">
            {technologySolutions.map((solution) => (
              <div key={solution.title} className="flex w-[290px] shrink-0 snap-start flex-col border border-white/10 bg-[#1e293b] p-8 shadow-xl transition-shadow hover:shadow-2xl sm:w-[360px] md:w-[400px]">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img src={solution.imageUrl} alt={solution.title} className="h-full w-full object-cover" />
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
        </div>
      </section>

      {/* =========================================
          INSIGHTS THAT INSPIRE INNOVATION
          ========================================= */}
      <section className="w-full bg-[#f8f9fa] py-20 px-6 lg:px-12 xl:px-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
          </div>

          <div ref={insightsContainerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {insightsData.map((insight) => (
              <div key={insight.id} className="group flex w-[300px] shrink-0 snap-start cursor-pointer flex-col bg-white border border-slate-200 transition-all hover:shadow-xl sm:w-[320px] md:w-[350px]">
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
        </div>
      </section>

      {/* =========================================
          INDUSTRIES WE SERVE 
          ========================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          
          <div className="relative aspect-square w-full overflow-hidden bg-slate-100 lg:sticky lg:top-24">
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
          </div>

          <div className="flex flex-col pt-4">
            <span className="mb-4 text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="mb-10 font-['Syne',sans-serif] text-4xl font-semibold text-slate-900 md:text-5xl">
              Trusted Across Industries
            </h2>

            <div className="flex flex-col">
              {industries.map((industry) => {
                const isActive = activeIndustryId === industry.id;
                
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustryId(industry.id)}
                    className={`group flex items-center justify-between border-b py-5 text-left transition-all duration-300 ${
                      isActive ? 'border-blue-300' : 'border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <span 
                      className={`text-base font-medium md:text-lg transition-colors ${
                        isActive ? 'text-[#2563eb]' : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {industry.name}
                    </span>
                    <svg 
                      className={`transition-colors ${
                        isActive ? 'text-[#2563eb]' : 'text-slate-300 group-hover:text-slate-400'
                      }`} 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE & OUR PROCESS 
          ========================================= */}
      <section className="w-full bg-[#0b1221] py-20 px-6 text-white lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00e5ff]">
                Why Choose Capyngen
              </span>
              <h2 className="mb-6 font-['Syne',sans-serif] text-4xl font-semibold leading-tight md:text-5xl">
                Built Different.<br />
                Delivered Different.
              </h2>
              <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
                We combine deep technology expertise with business acumen to build digital products that don't just work — they win in the market.
              </p>
              <button className="flex w-fit items-center gap-2 rounded-sm bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
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
            </div>
          </div>

          <div className="my-24 h-px w-full bg-white/10"></div>

          <div>
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
          </div>

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
          <div className="max-w-xl">
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff]">
              Careers
            </span>
            
            <h2 className="mb-6 font-['Syne',sans-serif] text-5xl font-normal leading-[1.15] text-slate-200 md:text-6xl">
              Build Your Career<br />
              <span className="font-bold text-white">at Capyngen</span>
            </h2>
            
            <p className="mb-10 text-base leading-relaxed text-slate-300 md:text-lg">
              Join talented engineers, designers, marketers, AI specialists, and innovators creating technology that makes a real-world impact.
            </p>
            
            <button className="flex w-fit items-center justify-center gap-3 rounded-sm bg-[#2563eb] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Explore Careers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA SECTION (Ready to Transform) (New)
          ========================================= */}
      <section className="w-full bg-[#050b14] py-24 px-6 lg:px-12 xl:px-16">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-20">
          
          {/* Left Content */}
          <div className="flex max-w-xl flex-col">
            <h2 className="mb-6 font-['Syne',sans-serif] text-4xl font-normal text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Ready to Transform <br />
              <span className="font-semibold text-[#3b82f6]">Your Business?</span>
            </h2>
            
            <p className="mb-10 text-base leading-relaxed text-slate-400 md:text-lg">
              Let's build intelligent digital products together. Our experts are ready to understand your goals and design a tailored technology roadmap.
            </p>
            
            <button className="flex w-fit items-center justify-center gap-3 rounded-sm bg-[#3b82f6] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
              Contact Our Experts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Content: Tech Image */}
          <div className="relative w-full max-w-[600px] shrink-0 overflow-hidden lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
              alt="Digital Transformation Technology" 
              className="h-full w-full object-cover opacity-90 shadow-2xl"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;