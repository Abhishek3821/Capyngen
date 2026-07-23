import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  MessageSquareText,
  Eye,
  GitMerge,

  Activity
} from 'lucide-react';
import { createSlug } from '../utils/slug';
import { type Blog } from '../services/blogService';
import { useTopicBlogs } from '../hooks/useTopicBlogs';

// Serial Image Imports
import img1 from "../assets/Artificial Intelligence Service/01.png";
import img2 from "../assets/Artificial Intelligence Service/02.png";
import img3 from "../assets/Artificial Intelligence Service/03.png";
import img4 from "../assets/Artificial Intelligence Service/04.png";
import img5 from "../assets/Artificial Intelligence Service/05.png";
import img6 from "../assets/Artificial Intelligence Service/06.png";

const AILandingPage: React.FC = () => {
  const navigate = useNavigate();
  const topicBlogs = useTopicBlogs('artificial-intelligence-services');
  // Carousel Scroll Reference and Handler
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Section References for Button Scrolling
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Broadened type to resolve RefObject TypeScript errors
  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Scroll distance
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form Submission Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request for services has been submitted successfully.");
  };

  // Animation Variants typed explicitly to resolve 'ease' assignment error
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const faqs = [
    { q: "Q1. What are Artificial Intelligence Services?", a: "Artificial Intelligence Services enable businesses to leverage cutting-edge AI tools and technologies to streamline processes, analyze data, enhance decision-making, and create intelligent digital solutions." },
    { q: "Q2. What kind of AI Development Services does Capyngen offer?", a: "Capyngen has AI Development Services such as machine learning, NLP, computer vision, intelligent automation and custom AI application development." },
    { q: "Q3. What is an AI Solution?", a: "AI Solutions are tailored technologies that leverage AI to address business problems by automating tasks, forecasting and decision-making." },
    { q: "Q4. What’s the benefit of Custom AI Development?", a: "Unlike the use of generic software, Custom AI Development builds solutions that fit within your business processes, objectives, and industry needs." },
    { q: "Q5. What is the purpose of AI Consulting Services?", a: "AI Consulting Services guide organizations in identifying AI opportunities, assessing business readiness, and creating AI implementation strategies." },
    { q: "Q6. What are Generative AI Services?", a: "Generative AI Services are dedicated to building intelligent systems that can produce text, images, code, documents and business content, leveraging the power of advanced AI models." },
    { q: "Q7. What are Machine Learning Services?", a: "Machine Learning Services create predictive models based on data that they learn from in order to enhance forecasting, automation and business intelligence." },
    { q: "Q8. How is AI Software Development different from traditional software development?", a: "AI Software Development is the process of creating and developing intelligent software programs with AI functionalities that are integrated into systems used by businesses." },
    { q: "Q9. What are Enterprise AI Solutions?", a: "Enterprise AI Solutions can enable large entities to automate workflows, boost efficiency, and deliver customer experiences." },
    { q: "Q10. What are the benefits of AI Automation Services for businesses?", a: "AI Automation Services streamline business processes, minimize manual responsibilities, enhance accuracy, and boost productivity in various departments." },
    { q: "Q11. What are the industries that can be helped by Artificial Intelligence Services?", a: "AI technologies have the potential to be applied across various sectors, including healthcare, finance, retail, manufacturing, education, logistics, real estate, and more." },
    { q: "Q12. Why is Capyngen the perfect Artificial Intelligence Development Company?", a: "Capyngen provides scalable, secure, and business-focused AI solutions with experienced AI experts and consultants." },
    { q: "Q13. Does AI Solutions support integration with existing software?", a: "Yes. Our AI solutions integrate with CRM, ERP, cloud platforms, mobile applications and enterprise systems." },
    { q: "Q14. How long does it take to implement AI?", a: "The timeline varies depending on the complexity of the project, the business objectives, the resources that are available and integration needs." },
    { q: "Q15. What is the starting point to use Capyngen's Artificial Intelligence Services?", a: "Talk to the Capyngen AI experts today and discover how to leverage AI for your business, how to see opportunities, and how to develop a plan for implementing AI in your business." }
  ];

  const insights = [
    { img: img3, alt: "Generative AI", title: "Generative AI for Modern Businesses", desc: "Discover how Generative AI Services are transforming content creation, customer engagement, and accelerating innovation in various departments." },
    { img: img4, alt: "Enterprise AI", title: "Enterprise AI Solutions", desc: "Learn how Enterprise AI Solutions can help businesses streamline processes, gain insights into operations, and make quick, informed decisions." },
    { img: img5, alt: "AI Consulting", title: "AI Consulting Services", desc: "Learn about strategic AI Consulting Services and how they can assist organizations in finding opportunities for AI, creating implementation plans, and maximizing the value of AI in the long run." },
    { img: img6, alt: "Automation", title: "Intelligent Business Automation", desc: "Discover how AI Automation Services use intelligent automation technologies to streamline repetitive tasks, cut down on expenses and boost productivity." }
  ];

  // Show live Artificial Intelligence blogs when available; otherwise fall back to the static cards.
  const insightsItems = useMemo(() => {
    if (topicBlogs.length === 0) {
      return insights.map((item) => ({ ...item, blog: undefined as Blog | undefined }));
    }
    return topicBlogs.map((blog, i) => ({
      ...insights[i % insights.length],
      title: blog.title,
      img: blog.image || insights[i % insights.length].img,
      desc: blog.description || insights[i % insights.length].desc,
      blog,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicBlogs]);

  const openInsight = (blog?: Blog) => {
    if (!blog) return;
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] h-auto flex items-center justify-center text-center overflow-hidden py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-white"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        >
          <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            ARTIFICIAL INTELLIGENCE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Artificial Intelligence Services for Future-Ready Businesses
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Empowering organizations to be more productive and innovative with advanced Artificial Intelligence Services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection(servicesRef)}
              className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm tracking-wide active:scale-95"
            >
              DISCOVER SERVICES
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm tracking-wide active:scale-95"
            >
              EXPERT CONSULTATION
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. Philosophy/About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-20 lg:py-28 bg-white relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Bringing Data to Business Value
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The amount of information businesses produce every day is huge but to be successful, the information needs to be turned into measurable outcomes. At Capyngen, we deliver AI Development Services that transform business data into valuable insights for smarter decision-making.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our team integrates Machine Learning Services to create solutions that will be easily implementable in the current business operations. As an Artificial Intelligence Development Company, we help organizations improve efficiency, and achieve sustainable growth.
              </p>
            </div>
            
            <div className="relative bg-[#f8fafd] p-8 rounded-sm">
              <img 
                src={img2} 
                alt="AI Cube Concept" 
                className="w-full h-auto shadow-lg object-contain"
              />
              <div className="absolute bottom-4 right-4 bg-[#0056b3] text-white p-4 shadow-xl">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            
          </div>
        </div>
      </motion.section>

      {/* 3. Insights / News Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-[#f8fafd] py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Insights & Innovation</h2>
              <p className="text-sm text-slate-500">Discussing new technology that is transforming intelligent business.</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button 
                onClick={() => handleScroll('left')}
                className="w-10 h-10 border border-slate-300 rounded flex items-center justify-center hover:bg-white transition-colors active:bg-slate-200"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="w-10 h-10 border border-slate-300 rounded flex items-center justify-center hover:bg-white transition-colors active:bg-slate-200"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />

            {insightsItems.map((item, index) => (
              <div
                key={item.blog?._id ?? index}
                onClick={() => openInsight(item.blog)}
                className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow w-[280px] sm:w-[350px] flex-none snap-start flex flex-col border border-slate-100"
              >
                <div className="overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {item.desc}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); item.blog ? openInsight(item.blog) : scrollToSection(contactRef); }}
                    className="inline-flex items-center text-xs font-bold text-[#0056b3] uppercase tracking-wider"
                  >
                    Read Article <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Capabilities / Services */}
      <motion.section 
        ref={servicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-white py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our AI Capabilities</h2>
            <p className="text-sm text-slate-500">Flexible AI solutions, designed for changing business needs.</p>
          </div>
          
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capability 1 */}
            <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <BrainCircuit className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Machine Learning</h3>
              <p className="text-sm text-slate-600 mb-5">
                We build intelligent models for prediction, and data analysis based on business-specific data with our Machine Learning Services.
              </p>
              <ul className="text-sm text-slate-600 space-y-3 font-semibold">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Predictive Modeling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Smart Automation
                </li>
              </ul>
            </motion.div>
            
            {/* Capability 2 */}
            <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <MessageSquareText className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Natural Language Processing</h3>
              <p className="text-sm text-slate-600 mb-5">
                Our AI Development Services create NLP-powered applications that understand human language through intelligent search, and multilingual communication.
              </p>
              <ul className="text-sm text-slate-600 space-y-3 font-semibold">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Language Analytics
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> AI Assistants
                </li>
              </ul>
            </motion.div>
            
            {/* Capability 3 */}
            <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <Eye className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Computer Vision</h3>
              <p className="text-sm text-slate-600 mb-5">
                Our AI Solutions leverage cutting edge computer vision capabilities to identify images, and increase the level of accuracy in our operations.
              </p>
              <ul className="text-sm text-slate-600 space-y-3 font-semibold">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Image Analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Visual Automation
                </li>
              </ul>
            </motion.div>
            
            {/* Capability 4 */}
            <motion.div variants={fadeUp} className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <GitMerge className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI Consulting</h3>
              <p className="text-sm text-slate-600 mb-5">
                Your AI Strategy and roadmap are crafted by our AI Consulting Services, designed to boost your business's AI readiness.
              </p>
              <ul className="text-sm text-slate-600 space-y-3 font-semibold">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> AI Readiness Review 
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Digital Strategy Planning
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Why Choose Capyngen? (Replaced Team section) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-[#f8fafd] py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Capyngen?</h2>
            <p className="text-sm text-slate-500">Providing businesses with intelligent AI solutions to help them grow confidently.</p>
          </div>
          
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Point 1 */}
            <motion.div variants={fadeUp} className="text-center group bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden mb-6 mx-auto w-24 h-24 rounded-full bg-[#f0f5fb] flex items-center justify-center text-[#0056b3]">
                <Activity className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Industry-Focused Expertise</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-4">
                AI solutions tailored for your business needs.
              </p>
            </motion.div>

            {/* Point 2 */}
            <motion.div variants={fadeUp} className="text-center group bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden mb-6 mx-auto w-24 h-24 rounded-full bg-[#f0f5fb] flex items-center justify-center text-[#0056b3]">
                <GitMerge className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">End-to-End AI Development</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-4">
                Strategies to deployment and optimization.
              </p>
            </motion.div>

            {/* Point 3 */}
            <motion.div variants={fadeUp} className="text-center group bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="overflow-hidden mb-6 mx-auto w-24 h-24 rounded-full bg-[#f0f5fb] flex items-center justify-center text-[#0056b3]">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Scalable & Secure Solutions</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-4">
                Designed for high performance, security and growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="py-20 lg:py-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50 transition-colors hover:bg-slate-100">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <h4 className="font-bold text-slate-900 text-sm md:text-base pr-8">{faq.q}</h4>
                  <span className="text-[#0056b3] shrink-0">
                    {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Footer / Contact Form */}
      <motion.section 
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#0a192f] py-20 lg:py-24 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Request for an AI Services</h2>
              <p className="text-sm text-slate-400 mb-12 leading-relaxed max-w-md">
                Always have a partner for the most reliable Artificial Intelligence Services, that will enhance the operational efficiency and help in the long-term digital transformation. Our AI experts are on hand to grasp your business goals and design an AI strategy to match.
              </p>
              
              {/* <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">EMAIL US</p>
                    <a href="mailto:ai.solutions@capyngen.com" className="text-sm font-medium hover:text-blue-300 transition-colors">ai.solutions@capyngen.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">GLOBAL HQ</p>
                    <p className="text-sm font-medium leading-relaxed">
                      New York | London | Singapore
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            
            {/* Right Side - Form */}
            <div className="bg-white p-8 sm:p-10 rounded-sm">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      required
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      required
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                  <input 
                    required
                    type="email" 
                    id="workEmail"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Inquiry Type</label>
                  <select 
                    id="inquiryType"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area...</option>
                    <option value="ml">Machine Learning</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="cv">Computer Vision</option>
                    <option value="strategy">AI Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="details"
                    rows={3}
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your operational challenges..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0056b3] hover:bg-[#004494] text-white font-bold py-4 transition-colors mt-2 text-[11px] tracking-[0.2em] uppercase rounded-sm active:scale-95"
                >
                  Submit Request
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </motion.section>
      
    </div>
  );
};

export default AILandingPage;