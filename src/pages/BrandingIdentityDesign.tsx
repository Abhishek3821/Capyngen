import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Palette,
  Target,
  Monitor,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { type Blog } from '../services/blogService';
import { createSlug } from '../utils/slug';
import { useTopicBlogs } from '../hooks/useTopicBlogs';

// Serial-wise imports matching your VS Code structure
import img2 from "../assets/Building Bold Brand Identities/2.png";
import img3 from "../assets/Building Bold Brand Identities/3.png";
import img4 from "../assets/Building Bold Brand Identities/4.png";
import img5 from "../assets/Building Bold Brand Identities/5.png";
import img6 from "../assets/Building Bold Brand Identities/6.png";
import img7 from "../assets/Building Bold Brand Identities/7.png";
import imgHero from "../assets/Building Bold Brand Identities/8.png";

const BrandLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Refs for smooth scrolling
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const topicBlogs = useTopicBlogs('branding-identity-design');

  const faqs = [
    {
      question: "What does a branding and identity design services company actually do ?",
      answer: "It's about more than a logo. A good branding and identity design services partner shapes how your company looks, sounds, and feels across everything—your website, your pitch deck, your packaging, even how your team talks about the brand internally. At Capyngen, we treat it as building a system, not just a set of assets."
    },
    {
      question: "How is Capyngen different from a typical branding agency?",
      answer: "Most branding agencies hand you a style guide and move on. As a branding agency built for enterprise and growth-stage companies, we go further—we dig into your positioning and business strategy first, so the visual identity we build actually reflects where the company is headed, not just where it's been."
    },
    {
      question: "What's included in your visual identity design services?",
      answer: "Our visual identity design services cover the full system: logo and wordmark, color and typography, imagery style, and how all of it holds together across digital, print, and physical spaces. The goal is that your brand looks like one coherent thing, no matter where someone encounters it."
    },
    {
      question: "We already have a logo—do we need a full brand identity design agency, or just a refresh?",
      answer: "Depends on the gap. If your logo still fits but everything around it feels inconsistent, a focused refresh might do it. If your visual language feels outdated or disconnected from your business today, that's usually when working with a full brand identity design agency makes more sense—we can help you figure out which one you actually need."
    },
    {
      question: "As a brand identity design company, how do you make sure our identity works globally?",
      answer: "This comes up a lot with larger clients. As a brand identity design company working across multiple markets, we build systems with enough flexibility to adapt to different regions and languages while keeping the core identity recognizable everywhere."
    },
    {
      question: "How long does a full branding and identity design services project typically take?",
      answer: "It varies with scope, but most branding and identity design services engagements run a few months from discovery through final guidelines. Strategy and research take real time upfront—that's usually what makes the final identity hold up long after launch."
    },
    {
      question: "Do you work with large, established companies or mostly startups?",
      answer: "Both, though a lot of our work is with established enterprises going through some kind of transition—a merger, a rebrand, or expansion into new markets. As a branding agency, we're used to navigating internal stakeholders and legacy brand equity, not just building from a blank slate."
    },
    {
      question: "What do your brand guidelines actually include?",
      answer: "Our brand guidelines go well beyond logo usage rules. They document color systems, typography, tone of voice, imagery direction, and application examples across different formats—so anyone on your team, or any outside vendor, can apply the brand correctly without guessing."
    },
    {
      question: "Can your visual identity design services work alongside our existing marketing or product teams?",
      answer: "Yes—that's actually how we prefer to work. Our visual identity design services are built to plug into your existing teams and workflows, not replace them, so your internal marketing and product people can keep using the system long after we're done."
    },
    {
      question: "How do we know if we need a brand identity design agency right now?",
      answer: "A few signs: your visual identity feels inconsistent across channels, your brand doesn't reflect where the business is today, or you're entering new markets and need something scalable. If any of that sounds familiar, it's worth a conversation with a brand identity design agency to see what's really needed."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (element: HTMLElement | null) => {
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Static "What's Happening?" cards (used as fallback when no blogs match this topic)
  const happenings = [
    { img: img4, category: "FinTech Sector", title: "Private Equity Firm", desc: "Modernizing the visual legacy of a 50-year-old investment firm for the digital…", alt: "Corporate Office", extra: "" },
    { img: img5, category: "Industrial Tech", title: "Medium Mechanics", desc: "Developing a visual language for the next generation of renewable energy…", alt: "Stationery Mockup", extra: "" },
    { img: img6, category: "SaaS Global", title: "Multi-Platform ", desc: "Shaping a consistent identity system across 48 global markets and 12 product", alt: "Mobile App", extra: "sm:col-span-2 lg:col-span-1" }
  ];

  // Show live Branding & Identity blogs when available; otherwise fall back to the static cards.
  const happeningItems = useMemo(() => {
    if (topicBlogs.length === 0) {
      return happenings.map((item) => ({ ...item, blog: undefined as Blog | undefined }));
    }
    return topicBlogs.map((blog, i) => ({
      ...happenings[i % happenings.length],
      title: blog.title,
      img: blog.image || happenings[i % happenings.length].img,
      desc: blog.description || happenings[i % happenings.length].desc,
      blog,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicBlogs]);

  const openHappening = (blog?: Blog) => {
    if (!blog) return;
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  return (
    <div>
      
      {/* 1. Hero Section */}
      <section 
        className="relative w-full min-h-[100svh] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${imgHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/30 sm:from-white/5 sm:via-white/30 sm:to-white/20"></div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 w-full"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#113a5d] leading-tight mb-4 sm:mb-6">
              Building Bold Brand Identities
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-800 sm:text-slate-700 font-medium mb-6 sm:mb-8 leading-relaxed max-w-lg">
              We program a strong corporate identity along with a strategic visual system that connects institutional trust with modern-day durability.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection(contactRef.current)}
                className="w-full sm:w-auto bg-[#0b5c92] hover:bg-[#094a75] text-white px-8 py-3.5 rounded-sm font-medium transition-colors shadow-sm text-center"
              >
                Build Brand Here
              </button>
              <button 
                onClick={() => scrollToSection(portfolioRef.current)}
                className="w-full sm:w-auto bg-white/70 backdrop-blur-sm hover:bg-white text-slate-800 border border-slate-300 px-8 py-3.5 rounded-sm font-medium transition-colors text-center"
              >
                Explore Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Strategic Brand Evolution Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-white py-16 sm:py-20 lg:py-24 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            
            {/* Overlapping Images adjusted for full height */}
            <div className="relative min-h-[400px] sm:min-h-[500px] hidden md:block w-full">
              <img 
                src={img2} 
                alt="Brand Mark" 
                className="absolute top-0 left-0 w-[60%] sm:w-3/5 h-auto object-contain rounded-sm shadow-md z-10"
              />
              <img 
                src={img3} 
                alt="Desktop Workspace" 
                className="absolute top-24 sm:top-32 right-0 sm:right-4 w-[60%] sm:w-3/5 h-auto object-contain rounded-sm shadow-lg z-20 border-4 border-white"
              />
            </div>
            
            <div className="w-full">
              <p className="text-[#0b5c92] font-semibold mb-3 uppercase tracking-wider text-xs sm:text-sm">OUR PHILOSOPHY</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Thoughtful Brand<br className="hidden sm:block" />Evolution
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                At Capyngen, we build the entire visual ecosystem—offering branding and identity design services. We provide services in branding and identity design that depend on strong storytelling and careful visual systems that keep your message consistent across every touchpoint.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We work with expertise leaders to transform complex corporate missions into clear, powerful visual languages that get the most attention and build lasting trust.
              </p>
              
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Research-Backed Analyst
                </li>
                <li className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Adaptable Design Frameworks
                </li>
                <li className="flex items-center text-slate-700 font-medium text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Forward-Looking Brand Guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. News / Articles Section */}
      <section ref={portfolioRef} className="bg-[#f2f5f9] py-16 sm:py-20 lg:py-24 scroll-mt-10 w-full overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12"
        >
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
            <div>
              <p className="text-[#0b5c92] font-semibold mb-2 uppercase tracking-wider text-xs sm:text-sm">IMPACT REPORTS</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">What's Happening?</h2>
            </div>
            <button 
              onClick={() => scrollToSection(contactRef.current)} 
              className="flex items-center text-[#0b5c92] font-medium hover:text-[#094a75] text-sm sm:text-base transition-colors"
            >
              Explore Here <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {happeningItems.map((item, index) => (
              <motion.div
                key={item.blog?._id ?? index}
                variants={fadeUp}
                onClick={() => openHappening(item.blog)}
                className={`bg-white group cursor-pointer flex flex-col h-full rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow ${item.extra}`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-48 sm:h-auto object-cover sm:object-contain bg-slate-100"
                />
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-[#0b5c92] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b5c92] mr-2"></span> {item.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#0b5c92] transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Capabilities Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-white py-16 sm:py-20 lg:py-24 border-y border-slate-100 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <p className="text-[#0b5c92] font-semibold mb-2 uppercase tracking-wider text-xs sm:text-sm">SERVICE CAPABILITIES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Core Specializations</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="text-left group cursor-default">
              <div className="mb-4 sm:mb-5 text-[#0b5c92]">
                <Palette className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:mb-3">Brand Identity System</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thorough visual languages crafted for scale, consistency, and worldwide recognition.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeUp} className="text-left group cursor-default">
              <div className="mb-4 sm:mb-5 text-[#0b5c92]">
                <Target className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:mb-3">Brand Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Market positioning and brand narratives that define your competitive advantage.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div variants={fadeUp} className="text-left group cursor-default">
              <div className="mb-4 sm:mb-5 text-[#0b5c92]">
                <Monitor className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:mb-3">Logo & Wordmark Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We offer timeless logos that turn a complex identity into one simple, strong mark.
              </p>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div variants={fadeUp} className="text-left group cursor-default">
              <div className="mb-4 sm:mb-5 text-[#0b5c92]">
                <BookOpen className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:mb-3">Brand Guidelines</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Detailed documentation that protects brand integrity across all future media and platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. Expert Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-[#f8f9fc] py-16 sm:py-20 lg:py-24 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="relative rounded-sm shadow-md overflow-hidden bg-white w-full order-2 lg:order-1">
              <img 
                src={img7} 
                alt="Expert Portrait" 
                className="w-full h-auto object-cover sm:object-contain"
              />
            </div>
            
            <div className="lg:pl-8 order-1 lg:order-2 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Why Choose Capyngen?
              </h2>
              
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                At Capyngen, we combine solid enterprise expertise with real insight into how businesses function day to day.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-slate-900 font-bold text-base sm:text-md">Skill Expertise:</p>
                  <p className="text-slate-600 text-sm">We offer proven experience in branding & identity design services and an expert team.</p>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-base sm:text-md">Customized Solutions:</p>
                  <p className="text-slate-600 text-sm">We offer custom solutions for your workflows and goals, not generic templates.</p>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-base sm:text-md">Full Support:</p>
                  <p className="text-slate-600 text-sm">At Capyngen, we serve a strategic framework to support ongoing projects.</p>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-base sm:text-md">Long-Term Outcome:</p>
                  <p className="text-slate-600 text-sm">Capyngen focuses on result outcomes in projects and ensures that you get long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="bg-white py-16 sm:py-20 lg:py-24 w-full overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">FAQs</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#f8f9fc] rounded-sm shadow-sm border border-slate-100 overflow-hidden w-full"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg pr-4 sm:pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#0b5c92] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-4 sm:pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Footer & Contact Form Section */}
      <motion.section 
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-[#161e2c] py-16 sm:py-20 lg:py-24 text-white scroll-mt-10 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left side text */}
            <div className="flex flex-col justify-center h-full w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to Evolve?</h2>
              <p className="text-slate-300 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-md">
                Reach out to us through the official contact details, or just fill out the form below, and our expert team will get back to you within 24 hours.
              </p>
            </div>
            
            {/* Right side form */}
            <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl w-full">
              <form onSubmit={(e) => { e.preventDefault(); alert('Consultation Requested!'); }} className="space-y-5 sm:space-y-6 w-full">
                <div>
                  <label htmlFor="name" className="block text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400 text-sm sm:text-base"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Company Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400 text-sm sm:text-base"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="focus" className="block text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Area of Focus</label>
                  <select 
                    id="focus"
                    required
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer text-sm sm:text-base"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="rebrand">Comprehensive Rebrand</option>
                    <option value="identity">Visual Identity System</option>
                    <option value="strategy">Brand Strategy</option>
                    <option value="digital">Digital Product Design</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 sm:mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={3}
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-400 text-sm sm:text-base"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full mt-2 sm:mt-4 bg-[#0b5c92] hover:bg-[#094a75] text-white font-medium py-3 sm:py-3.5 rounded-sm transition-colors shadow-sm text-sm sm:text-base"
                >
                  Request Consultation
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </motion.section>
      
    </div>
  );
};

export default BrandLandingPage;