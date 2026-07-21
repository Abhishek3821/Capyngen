import React, { useState } from 'react';
import { 
  ArrowRight, 
  Network, 
  Megaphone, 
  Cloud, 
  Smartphone,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Imported images strictly from the assets folder
import img1 from "../assets/CMS DESIGN/1.png";
import img2 from "../assets/CMS DESIGN/2.png";
import img3 from "../assets/CMS DESIGN/3.png";
import img4 from "../assets/CMS DESIGN/4.png";

// Framer Motion Animation Variants
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
      question: "What is a CMS and why does my business need one?",
      answer: "A CMS—content management system—is what lets your team create, edit, and publish content without needing a developer every time."
    },
    {
      question: "What kind of CMS solutions does Capyngen build?",
      answer: "At Capyngen, we design and build everything from custom admin dashboards to full headless CMS integrations, including publishing interfaces, automated editorial workflows, or migrations away from legacy systems."
    },
    {
      question: "How does Capyngen make the CMS easier for different team members?",
      answer: "We tailor the interface to match different user roles. An editor sees what they need. An approver sees what they need. Nobody is wading through settings that have nothing to do with their job."
    },
    {
      question: "What is composable architecture and why does it matter?",
      answer: "Composable architecture means building your CMS from the best individual tools rather than one rigid system that does everything adequately."
    },
    {
      question: "How long does it take to set up a new CMS?",
      answer: "A focused custom interface moves faster than a full enterprise platform with multi-team workflows and headless integrations. We map this out clearly during the consultation phase so you know what to expect before anything begins."
    },
    {
      question: "What is an editorial workflow and why does it matter?",
      answer: "An editorial workflow is the path a piece of content takes from first draft to published. A well-designed one has automated approvals, clear ownership at each stage and cross-team collaboration built in."
    },
    {
      question: "How do you keep our CMS and content secure?",
      answer: "We implement zero-trust access models—meaning every user, at every level, is verified before they can access or edit content. Granular permissions mean your global content assets are protected without slowing down the people who legitimately need access."
    },
    {
      question: "What is an infrastructure audit, and should I get one?",
      answer: "If you are running on an older system, managing multiple disconnected tools or struggling with content bottlenecks, an audit is a smart first step before you invest in anything new."
    },
    {
      question: "How do I get started with CMS website design services?",
      answer: "Book a consultation with our architecture team. We will audit your current setup, map your workflow from end to end, and put together a clear picture of what a better system would look like for your business—and what it would actually cost to get there."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 overflow-hidden">
      
      {/* 1. Hero Section - Updated with img1 background */}
      <section 
        className="relative w-full py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${img1}')` }}
      >
        {/* Light overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-white/1"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">CMS Design Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f3b68] leading-tight mb-6">
              Building Content with<br />CMS Design Services
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              At Capyngen, we help offer CMS website design services, providing corporate teams with streamlined publishing setups so they can launch content faster. We hide the technical complexity so your creators can focus entirely on great writing. 
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleButtonClick('Enhance Content')}
                className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-3.5 rounded-sm font-medium transition-colors cursor-pointer"
              >
                Enhance Content
              </button>
              <button 
                onClick={() => handleButtonClick('Explore Portfolio')}
                className="bg-white hover:bg-slate-50 text-[#0066cc] border border-[#0066cc] px-8 py-3.5 rounded-sm font-medium transition-colors cursor-pointer"
              >
                Explore Portfolio 
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Architecture / Methodology Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image with offset background element */}
            <motion.div 
              className="relative max-w-md mx-auto lg:max-w-none w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#e4eff9] rounded-sm hidden sm:block"></div>
              {/* Image updated to preserve height (object-contain, h-auto) */}
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
              <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">Our Core Value</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">
                Maximizing Content Enhancement
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Capyngen, we believe your web platform should help you move faster, not hold you back. Capyngen designs intuitive tools that let your creative team publish content instantly. You get complete creative freedom built on top of rock-solid corporate security. 
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm"><strong>Ultimate Flexibility:</strong> Flexible design blocks that let your team build custom pages without needing code.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm"><strong>Intuitive UX:</strong> Custom admin screens that make the software easy to learn and completely foolproof. </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68]">What's Happening?</h2>
              <p className="text-slate-500 mt-2">The freshest updates in modern publishing and web architecture.</p>
            </div>
            <button 
              onClick={() => handleButtonClick('Explore Insights')}
              className="hidden sm:flex items-center text-[#0066cc] font-medium hover:text-[#0052a3] cursor-pointer bg-transparent border-none p-0"
            >
              Explore Insights <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Article (Left) */}
            <motion.div 
              className="lg:col-span-7 xl:col-span-8 group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              onClick={() => handleButtonClick('Featured Article: The major Industry Switch')}
            >
              <div className="overflow-hidden rounded-sm mb-5 bg-slate-50">
                {/* Image updated to preserve height */}
                <img 
                  src={img3} 
                  alt="Network Abstract" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">Technology</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3b68] mb-3 group-hover:text-[#0066cc] transition-colors">
                The major Industry Switch to Modular 
              </h3>
              <p className="text-slate-600 text-sm">Why major companies are ditching rigid software for flexible, specialized web tools.</p>
            </motion.div>
            
            {/* List Articles (Right) */}
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
                onClick={() => handleButtonClick('Article 1: Workflow')}
              >
                <div className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-sm bg-slate-50">
                  <img 
                    src={img3} 
                    alt="Design Wireframes" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Workflow</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Using smart AI tools to Streamline Content
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Using generative AI resources inside your editor to create better, Google-friendly content. </p>
                </div>
              </motion.div>

              {/* List Item 2 */}
              <motion.div 
                className="group cursor-pointer flex items-start gap-4 h-full"
                variants={fadeInLeft}
                onClick={() => handleButtonClick('Article 2: Security')}
              >
                <div className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-sm bg-slate-50">
                  <img 
                    src={img4} 
                    alt="Analytics Dashboard" 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Security</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Verify Before Accessing Zero-Trust CMS Models
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Secure global content by locking every asset and verifying every user, every single time.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-4">Our CMS Expertise</h2>
            <p className="text-slate-600">Capyngen is a leading CMS Website Development Company in Gurgaon, protecting and managing your content securely from creation to archive.</p>
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
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">CMS Website Design Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom dashboards built to match your team’s unique workflow and day-to-day vocabulary.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Megaphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Editorial Workflow Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Increased productivity in the writing process with instant approvals and smart teamwork tools. 
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Headless CMS Integration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building your words independent of layouts so they shine on phones, sites, and TVs. 
              </p>
            </motion.div>
            
            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Smartphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Migration Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Moving your old content into a fresh system smoothly without losing any valuable data.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Strategic Analysis Section */}
      <section className="bg-white py-16 lg:py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">STRATEGIC ANALYSIS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">Navigating Your Online Framework</h2>
          <h3 className="text-xl font-semibold text-[#0f3b68] mb-4">Grow With Us</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            Book a chat with our tech specialists to get a review for your website and map out your next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleButtonClick('Audit Framework')}
              className="bg-[#f8fafd] hover:bg-[#e4eff9] transition-colors text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100 cursor-pointer"
            >
              Audit Framework
            </button>
            <button 
              onClick={() => handleButtonClick('Procedure Mapping')}
              className="bg-[#f8fafd] hover:bg-[#e4eff9] transition-colors text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100 cursor-pointer"
            >
              Procedure Mapping
            </button>
            <button 
              onClick={() => handleButtonClick('ROI Analysis')}
              className="bg-[#f8fafd] hover:bg-[#e4eff9] transition-colors text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100 cursor-pointer"
            >
              ROI Analysis
            </button>
          </div>
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