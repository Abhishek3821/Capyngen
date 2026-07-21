import React, { useState } from 'react';
import { 
  ArrowRight, 
  Network, 
  Megaphone, 
  Cloud, 
  Smartphone,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Serial image imports from the Website Design folder as shown in the file tree
import img1 from "../assets/Website Design/1.png";
import img2 from "../assets/Website Design/2.png";
import img3 from "../assets/Website Design/3.png";
import img4 from "../assets/Website Design/4.png";
import img5 from "../assets/Website Design/5.png";
import img27 from "../assets/Website Design/27.png";

// Framer Motion Animation Variants for scroll animations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const WebsiteDesignLandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleButtonClick = (actionName: string) => {
    alert(`${actionName} clicked!`);
  };

  const faqs = [
    {
      question: "What kind of websites does Capyngen build?",
      answer: "At Capyngen, we provide services including industrial portals, marketing sites, high-quality platforms, and responsive website designs."
    },
    {
      question: "How do you approach user experience and design?",
      answer: "Our UX process is built around how your actual users behave—what keeps them on the page, what confuses them, and what finally moves them to act. Good design here is not just about how something looks. It is about what it does."
    },
    {
      question: "Will my website be optimized for search engines?",
      answer: "Yes. SEO and performance are part of the build, not something we sprinkle on at the end. We work on Core Web Vitals, load speed, and technical structure throughout—because a website nobody can find is not really doing anything for your business."
    },
    {
      question: "How long does it take to build a website with Capyngen?",
      answer: "Honestly, it depends on what you need. A focused marketing site moves considerably faster than a full enterprise portal with multiple integrations. "
    },
    {
      question: "What technologies do you build on?",
      answer: "Whatever is right for your project — not whatever is most convenient for us. We work across modern, scalable web technologies and composable architecture for enterprise clients who need both flexibility and room to grow without rebuilding everything in two years."
    },
    {
      question: "Will my website work properly on mobile and tablet?",
      answer: "Always. Responsive design is not a feature we offer — it is a baseline standard on every single project we deliver. Your site will look right and work right across every screen size, without any version of the experience being a compromise."
    },
    {
      question: "Can Capyngen improve an existing website instead of building a new one?",
      answer: "Absolutely. Not every problem needs a full rebuild. If your current site is slow, hard to use, or simply not converting the way it should, we can audit exactly what is holding it back—technical debt, poor UX, load times, or brand misalignment—and fix what needs fixing."
    },
    {
      question: "What makes Capyngen different from other web design agencies?",
      answer: "We think of your website as a business asset, not a creative deliverable. Every decision we make — from the layout to the infrastructure underneath it — connects back to your actual commercial goals. "
    },
    {
      question: "How do I start my project with a website design company in India?",
      answer: "Click the Start Your Project button, and our team will get in touch to understand what you are building, what you are trying to achieve, and what timeline you are working toward. "
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 overflow-hidden">
      
      {/* 1. Hero Section using img1 as background */}
      <section 
        className="relative w-full py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${img1}')` }}
      >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f3b68] leading-tight mb-6">
              Adoptable & Custom Website Design Services
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              At Capyngen, we transform your complex business requirements into high-performance digital foundations that bring institutional growth and industry authority.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleButtonClick('Build Your Project')}
                className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-3.5 rounded-sm font-medium transition-colors cursor-pointer"
              >
                Build Your Project
              </button>
              <button 
                onClick={() => handleButtonClick('Read Case Studies')}
                className="bg-white hover:bg-slate-50 text-[#0066cc] border border-[#0066cc] px-8 py-3.5 rounded-sm font-medium transition-colors cursor-pointer"
              >
                Read Case Studies 
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Architecture / Methodology Section using img2 */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image with offset background element (using img2, setting height via object-contain to avoid cutting) */}
            <motion.div 
              className="relative max-w-md mx-auto lg:max-w-none w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#e4eff9] rounded-sm hidden sm:block"></div>
              <img 
                src={img2} 
                alt="Workspace with monitor displaying sitemap" 
                className="relative z-10 w-full h-auto object-contain rounded-sm shadow-lg border border-slate-100 bg-white"
              />
            </motion.div>
            
            <motion.div 
              className="lg:pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">POWERING HIGH-END WEBSITES DESIGN</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">
                Developed for Transformation and Brand Identity
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Capyngen believes that a website is not just about a digital brochure but about your powerful business asset. We approach multi-strategic planning with advanced innovation designs core to ensure your brand commands attention in a competitive market.
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm">Using smart data to design experiences people love coming back to.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm">Crafting flawless brand experiences that look premium in any market.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm">Building fast, flexible websites using the latest coding standards. </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section using img3 and img4 */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-end mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68]">Trending Events</h2>
              <p className="text-slate-500 mt-2">Fresh design trends and smart tactics to grow your business online.</p>
            </div>
            <button 
              onClick={() => handleButtonClick('Explore Here')}
              className="hidden sm:flex items-center text-[#0066cc] font-medium hover:text-[#0052a3] cursor-pointer bg-transparent border-none p-0"
            >
              Explore Here <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Article (Left) using img3 */}
            <motion.div 
              className="lg:col-span-7 xl:col-span-8 group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              onClick={() => handleButtonClick('Featured Article')}
            >
              <div className="overflow-hidden rounded-sm mb-5 bg-slate-50">
                <img 
                  src={img3} 
                  alt="Network Abstract" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">Advanced Tech</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3b68] mb-3 group-hover:text-[#0066cc] transition-colors">
                Website Design Company Gurgaon: Using Plug-and-Play Tech. 
              </h3>
            </motion.div>
            
            {/* List Articles (Right) using img4, img5, img27 */}
            <motion.div 
              className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              
              {/* List Item 1 */}
              <motion.div 
                className="group cursor-pointer flex items-start gap-4 h-full"
                variants={fadeInLeft}
                onClick={() => handleButtonClick('Article 1')}
              >
                <div className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-sm bg-slate-50">
                  <img 
                    src={img4} 
                    alt="Design Wireframes" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">User-Centric Design</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Tiny digital moments that quietly turn casual visitors into buyers. 
                  </h4>
                </div>
              </motion.div>

              {/* List Item 2 */}
              <motion.div 
                className="group cursor-pointer flex items-start gap-4 h-full"
                variants={fadeInLeft}
                onClick={() => handleButtonClick('Article 2')}
              >
                <div className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-sm bg-slate-50">
                  <img 
                    src={img5} 
                    alt="Analytics Dashboard" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Strategy</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Connecting who you are with how your users experience you. 
                  </h4>
                </div>
              </motion.div>

              {/* List Item 3 */}
              <motion.div 
                className="group cursor-pointer flex items-start gap-4 h-full"
                variants={fadeInLeft}
                onClick={() => handleButtonClick('Article 3')}
              >
                <div className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-sm bg-slate-50">
                  <img 
                    src={img27} 
                    alt="Server Room" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Performance</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Making your website load faster and feel smoother this year. 
                  </h4>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities / Offerings Grid */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-4">Our Special Offers</h2>
            <p className="text-slate-600">Capyngen is a leading website design company in India, offering custom software and website design that keep up with fast-moving businesses. </p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Network className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Industrial Portals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Safe, flexible databases that make managing complex info easy for everyone. 
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Megaphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Marketing Sites</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom digital spaces built to hook your audience and drive sales.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Performance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fixing hidden tech issues to make your website load instantly and place higher. 
              </p>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Smartphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Responsive Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Responsive layouts that stay perfectly intact from phone to desktop. 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-white py-16 lg:py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">Why Choose Us?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Capyngen is a top tech partner and the best website design company in India, creating powerful web hubs, crafting high-speed portals, and responsive web layouts centered entirely around your users. 
          </p>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            FAQs
          </motion.h2>
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-[#0f3b68] hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span className="text-[#0066cc] font-bold text-xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WebsiteDesignLandingPage;