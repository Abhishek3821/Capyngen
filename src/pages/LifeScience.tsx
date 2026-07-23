import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSlug } from '../utils/slug';
import { type Blog } from '../services/blogService';
import { useTopicBlogs } from '../hooks/useTopicBlogs';

// Importing images sequentially as per the provided folder structure
import img3 from "../assets/Life Science/3.png";
import img4 from "../assets/Life Science/4.png";
import img5 from "../assets/Life Science/5.png";
import img6 from "../assets/Life Science/6.png";
import img7 from "../assets/Life Science/7.png";
import img8 from "../assets/Life Science/8.png";
import img9 from "../assets/Life Science/9.png";
import img10 from "../assets/Life Science/10.png";
import img11 from "../assets/Life Science/11.png";
import img12 from "../assets/Life Science/12.png";
import img13 from "../assets/Life Science/13.png";
import img14 from "../assets/Life Science/14.png";
import img15 from "../assets/Life Science/15.png";
import img16 from "../assets/Life Science/16.png";
import img17 from "../assets/Life Science/17.png";
import img18 from "../assets/Life Science/18.png";

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

const LifeScience = () => {
  const navigate = useNavigate();
  const topicBlogs = useTopicBlogs('life-science');
  const [activeTab, setActiveTab] = useState('Industry');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const insightsScrollRef = useRef<HTMLDivElement>(null);

  const scrollInsights = (direction: 'left' | 'right') => {
    if (insightsScrollRef.current) {
      const scrollAmount = 300; 
      insightsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const tabs = ['Industry', 'Technology', 'Products & Platforms'];

  const solutionsData: Record<string, { title: string, desc: string, img: string }[]> = {
    'Industry': [
      { 
        title: "AI Drug Discovery Programme", 
        desc: "Use generative AI and predictive modeling to find promising new drug candidates up to 4× faster.", 
        img: img10 
      },
      { 
        title: "Medical Examine Intelligence", 
        desc: "Improve site selection, patient searchinng, and agreement follow-through with real-time AI overview.", 
        img: img11 
      },
      { 
        title: "Regulatory AI Suite", 
        desc: "Automate safety tracking, adverse event reporting, and regulatory submissions at scale.", 
        img: img12 
      }
    ],
    'Technology': [
      { 
        title: "AI-Powered Genomic Analysis Engine", 
        desc: "Process complex genomic data quickly to uncover patterns linked to disease and treatment response.", 
        img: img13 
      },
      { 
        title: "Predictive Biotechnology Software Development", 
        desc: "Identify reliable biomarkers faster using machine learning models trained on clinical and lab data.", 
        img: img14 
      },
      { 
        title: "Cloud-Based Research Data Platform", 
        desc: "Store, manage, and share research data securely across teams, labs, and global locations.", 
        img: img15 
      }
    ],
    'Products & Platforms': [
      { 
        title: "Clinical Data Management Suite", 
        desc: "Centralize trial data collection, cleaning, and reporting in one secure, compliant platform.", 
        img: img16 
      },
      { 
        title: "Virtual Pathology Programme", 
        desc: "Observe and research tissue tests faster with AI assisted imaging and diagnostic supporting tools.", 
        img: img17 
      },
      { 
        title: "Patient Involvement Portal", 
        desc: "Always inform patients and keep them involved with easy access to trial updates and care information.", 
        img: img18 
      }
    ]
  };

  const insightsData = [
    { title: "Designing Better Molecules with Generative AI", img: img5 },
    { title: "Smart AI Patient Grouping for Medical Trials", img: img6 },
    { title: "Real-Life Experience: Unlocking Observation Beyond Trial", img: img7 },
    { title: "NLP and AI with Pharmacovigilance Automation", img: img8 },
    { title: "Accurate Treatment: Personalized Care with AI", img: img9 }
  ];

  // Show live Life Science blogs when available; otherwise fall back to the static cards.
  const insightsItems = useMemo(() => {
    if (topicBlogs.length === 0) {
      return insightsData.map((item) => ({ ...item, blog: undefined as Blog | undefined }));
    }
    return topicBlogs.map((blog, i) => ({
      ...insightsData[i % insightsData.length],
      title: blog.title,
      img: blog.image || insightsData[i % insightsData.length].img,
      blog,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicBlogs]);

  const openInsights = (blog?: Blog) => {
    if (!blog) return;
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  const faqs = [
    { question: "Why choose Capyngen as your life science software development company?", answer: "Because we get both sides of the equation, the science and the tech. So instead of handing you generic software and hoping it fits, we build around how your research and clinical teams already work." },
    { question: "What life sciences technology solutions does Capyngen offer?", answer: "AI platforms, cloud systems, analytics tools, compliance-ready software, we cover a lot of ground. What we build always comes back to the specific problem you're facing, not a one-size-fits-all package." },
    { question: "What life sciences IT services do you provide?", answer: "Custom builds, cloud migration, data management, and support that doesn't disappear after launch. We stick around, because software needs change and we'd rather grow with you than hand off and vanish." },
    { question: "Do you offer pharmaceutical software development?", answer: "We do. Drug discovery tools, trial management systems, regulatory reporting, all shaped around how pharma companies actually run, not some generic template." },
    { question: "Can you build clinical trial software development solutions?", answer: "Yes. Patient recruitment, trial monitoring, protocol management, we build for all of it, so trials move along without the usual friction." },
    { question: "What is a laboratory information management system?", answer: "It's the system that keeps a lab from drowning in spreadsheets. Samples get tracked, experiment data stays organized, and compliance stops being a scramble at the end of the month." },
    { question: "What kind of life sciences application development do you handle?", answer: "Pretty much anything, internal tools your researchers use daily, or apps patients interact with directly. Whatever the client actually needs is what shapes the build." },
    { question: "What is lead optimization in AI drug discovery?", answer: "This is where generative AI steps in to shape and refine molecule candidates before anything reaches the lab. Fewer weak options make it to testing, which saves everyone time." },
    { question: "Do you build GxP software solutions for pharma companies?", answer: "Yes, and we bake GxP compliance from day one. Bolting it on at the end usually causes more headaches than it solves, so we skip that route entirely." },
    { question: "How does Capyngen help with target identification in drug discovery?", answer: "Our AI digs through genomic data and flags promising drug targets, cutting down the time researchers would normally spend hunting through it manually." }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full flex items-center bg-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img3} 
            alt="Life Science Hero Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <RevealOnScroll direction="up" className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <p className="text-sm font-semibold tracking-wider uppercase mb-4 opacity-80">Life Science</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight">
            Increase Life Science Transformation With AI
          </h1>
          <p className="max-w-xl text-slate-200 mb-8 leading-relaxed">
            Capyngen collaborates with biotech, pharmaceutical, and medical implements industries to research drug discovery, upgrade clinical functions, and serve smart patient results with AI-powered programmes.
          </p>
          <div className="flex gap-4">
            <button onClick={() => scrollToSection('solutions')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explore Here
            </button>
            <button onClick={handleContactClick} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Contact Us 
            </button>
          </div>
        </RevealOnScroll>
      </section>

      {/* Stats / Numbers Section */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <RevealOnScroll direction="up" className="max-w-7xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center">How We Support Life Science Software Development?</h2>
        </RevealOnScroll>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Target Recognition", desc: "Artificial Intelligent models explore genetic data to find promising new drug targets." },
            { num: "02", title: "Manage Enhancement", desc: "Generative AI supports design and refine molecular applicants faster." },
            { num: "03", title: "Medical Expedition", desc: "Flexible examinations and AI automation acquisition help reduce timelines." },
            { num: "04", title: "High Quality Market", desc: "Real-life confirmation and pharmacovigilance help keep success going long-term." }
          ].map((item, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 100} className="flex flex-col">
              <span className="text-4xl font-light text-blue-200 mb-4">{item.num}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Blue Banner Section */}
      <section className="bg-blue-600 text-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <RevealOnScroll direction="right" className="w-full md:w-1/2">
            <img 
              src={img4} 
              alt="Test tubes" 
              className="rounded-lg shadow-xl w-full h-auto block"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">AI in Life Sciences: From Molecule to Market, Faster</h2>
            <p className="mb-8 text-blue-100 leading-relaxed">
              Drug discovery is moving faster, and clinical trials now are getting more precise, while the regulatory work is going digital. Capyngen's AI solutions support every stage of the life science software development journey, from finding drug targets and predicting protein structures to grouping patients, gathering real-world evidence, and automating safety tracking, helping bring safer treatments to patients sooner. 
            </p>
            <button onClick={() => scrollToSection('insights')} className="text-white font-semibold underline decoration-2 underline-offset-4 hover:text-blue-200 transition-colors">
              Life Science With AI 
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Life Science Insights Section */}
      <section id="insights" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden scroll-mt-10">
        <RevealOnScroll direction="up" className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Life Science Overview</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollInsights('left')} className="p-2 border border-slate-200 rounded hover:bg-slate-50 text-slate-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scrollInsights('right')} className="p-2 border border-slate-200 rounded hover:bg-slate-50 text-slate-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={200}>
          <div ref={insightsScrollRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
            {insightsItems.map((item, idx) => (
              <div key={item.blog?._id ?? idx} onClick={() => (item.blog ? openInsights(item.blog) : handleContactClick())} className="relative w-72 md:w-80 shrink-0 rounded-lg overflow-hidden group cursor-pointer snap-start flex flex-col bg-black">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 p-5 w-full text-white pointer-events-none">
                  <h3 className="font-semibold text-sm leading-snug mb-2">{item.title}</h3>
                  <span className="text-xs text-slate-300">Read more </span>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-slate-50 scroll-mt-10">
        <RevealOnScroll direction="up" className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Solutions We Follow</h2>
          
          {/* Tabs */}
          <div className="flex gap-8 border-b border-slate-200 mb-8 text-sm font-medium text-slate-500 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 border-b-2 whitespace-nowrap transition-colors ${activeTab === tab ? 'border-slate-900 text-slate-900' : 'border-transparent hover:text-slate-800'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {solutionsData[activeTab].map((item, idx) => (
              <div key={idx} onClick={handleContactClick} className="relative rounded-lg overflow-hidden group cursor-pointer flex flex-col bg-black">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 p-6 w-full text-white pointer-events-none">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <button className="p-2 border border-slate-300 bg-white rounded hover:bg-slate-50 text-slate-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="p-2 border border-slate-300 bg-white rounded hover:bg-slate-50 text-slate-800 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </RevealOnScroll>
      </section>

      {/* The Future of AI Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <RevealOnScroll direction="left" className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">The Future of AI in Pharmaceutical and Biotech Innovation</h2>
          <p className="text-slate-600 leading-relaxed">
            AI is changing medicine at every level, predicting how proteins fold, simulating clinical trials, and enabling precision medicine on a large scale. Capyngen helps life science organizations build AI skills that grow stronger over time, creating lasting advantages in drug development, commercialization, and patient care.
          </p>
        </RevealOnScroll>
        <RevealOnScroll direction="right" className="w-full md:w-1/2">
          <img 
            src={img3} 
            alt="Test Tubes" 
            className="rounded-lg shadow-md w-full h-auto block"
          />
        </RevealOnScroll>
      </section>

      {/* Dark Banner Card */}
      <section className="px-6 pb-20 overflow-hidden">
        <RevealOnScroll direction="up" className="max-w-7xl mx-auto bg-[#141c2f] rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">
          <div className="w-full md:w-1/2 flex items-center justify-center bg-black/20">
             <img 
              src={img4} 
              alt="Scientists looking at screen" 
              className="w-full h-auto block"
            />
          </div>
          <div className="w-full md:w-1/2 p-12 text-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Building Next-Generation Life Science Intelligence with AI</h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              See how Capyngen helps pharmaceutical and biotech companies use AI, machine learning, and advanced analytics to shorten timelines, improve trial success rates, and bring life-changing therapies to patients worldwide, faster and more precisely.
            </p>
            <button onClick={handleContactClick} className="text-white font-medium hover:text-slate-300 flex items-center gap-2 transition-colors w-fit">
              Read More <span>→</span>
            </button>
          </div>
        </RevealOnScroll>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <RevealOnScroll direction="up" className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/4 shrink-0">
            <h3 className="font-bold text-blue-600 uppercase text-sm mb-1">DR. ELENA VASQUEZ</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Head of Digital Innovation,<br/>Global Pharmaceutical Company 
            </p>
          </div>
          <div className="md:w-3/4 flex gap-4 text-blue-600 font-medium text-xl leading-relaxed">
            <span className="text-4xl leading-none font-serif opacity-30 mt-[-8px]">"</span>
            <p>
              Capyngen's AI platform helped us cut our target identification cycle from 18 months to under 5, and improved our clinical trial recruitment efficiency by 40%. They have been an authentic collaborator to us, by supporting our innovative therapies to patients.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-white max-w-4xl mx-auto border-t border-slate-200">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-md bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                  <span className="text-blue-600 text-xl font-medium shrink-0">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#0b081c] text-white py-24 px-6 text-center">
        <RevealOnScroll direction="up" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Your Life-Changing Therapies with Capyngen </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore AI-powered life sciences software development, clinical operations, and regulatory intelligence solutions built to support every stage of the drug development. From increasing the discovery to streamlining trials, our tools help enhance outcomes and bring therapies to patients worldwide, faster and more efficiently.
          </p>
          <button onClick={handleContactClick} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Begin Project Here
          </button>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default LifeScience;