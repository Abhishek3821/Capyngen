import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

// Serial image imports from the DIGITAL MARKETING folder as shown in the file tree
import img1 from "../assets/DIGITAL MARKETING/1.png";
import img2 from "../assets/DIGITAL MARKETING/2.png";
import img3 from "../assets/DIGITAL MARKETING/3.png";
import img4 from "../assets/DIGITAL MARKETING/4.png";

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

const DigitalMarketingLanding: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleButtonClick = (actionName: string) => {
    alert(`${actionName} clicked!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const faqs = [
    {
      question: "What does Capyngen's digital marketing services include?",
      answer: "At Capyngen, our digital marketing services include campaign strategy, multi-channel marketing, performance analytics, and growth hacking."
    },
    {
      question: "How is Capyngen different from other digital marketing agency?",
      answer: "Every decision we make connects back to what your business is actually trying to achieve — revenue growth, customer lifetime value, and market share. "
    },
    {
      question: "How long does it take to see results from your marketing strategies?",
      answer: "Most of our enterprise partners start seeing measurable improvements in conversion rates within the first six months. We are upfront about timelines from the beginning — no vague promises, no unrealistic expectations."
    },
    {
      question: "Which marketing channels does Capyngen work with?",
      answer: "Search, social, and programmatic — and we build one unified strategy across all of them; most multi-channel marketing ends up pulling in a different direction. We make sure they work together so your budget is compounding, not competing with itself."
    },
    {
      question: "What is included in the free funnel audit?",
      answer: "We go through your current marketing funnel properly — not a surface-level look, but a real review of where leads are dropping off, where money is being wasted, and where the fastest improvements are sitting. "
    },
    {
      question: "Do you work with B2B and B2C companies?",
      answer: "Both. We have helped B2B SaaS companies grow from $10M to $50M in annual revenue, and we build growth strategies for consumer-facing brands too. "
    },
    {
      question: "How do you measure marketing performance?",
      answer: "Live dashboards and detailed tracking so you can see exactly how every campaign, channel, and dollar is performing right now — not in a report that lands three weeks after the fact. Transparency is not optional in how we work."
    },
    {
      question: "What is growth hacking, and does my business actually need it?",
      answer: "Growth hacking is about running fast, targeted experiments across your marketing and product to find what genuinely drives growth — rather than spending months on a strategy built on assumptions. "
    },
    {
      question: "Can Capyngen help as third-party cookies disappear?",
      answer: "Yes. We help businesses build acquisition strategies that keep performing without depending on tracking methods that are being phased out. "
    },
    {
      question: "How do I get started with Capyngen?",
      answer: "Book a consultation with our strategy team. We will walk through a funnel audit, put together a competitive brief and build a custom growth roadmap around your specific goals."
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#fbfcfd] min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="text-[#0f4a8a] font-semibold text-xs tracking-wider uppercase mb-4 block">
              DIGITAL MARKETING EXCELLENCE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Marketing That Drives <br />Real Business Results
            </h1>
            <p className="text-slate-600 mb-8 max-w-lg leading-relaxed text-sm md:text-base">
              Capyngen uses real data to build marketing strategies that bring in better customers, lower your cost per acquisition, and grow your revenue in a way that actually lasts for the long term.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => handleButtonClick("Explore Growth")}
                className="bg-[#0f4a8a] hover:bg-[#0c3968] text-white px-6 py-3 rounded text-sm font-medium transition-colors cursor-pointer"
              >
                Explore Growth
              </button>
              <button 
                onClick={() => handleButtonClick("Explore Case Studies")}
                className="bg-transparent hover:bg-slate-50 text-[#0f4a8a] border border-[#0f4a8a] px-6 py-3 rounded text-sm font-medium transition-colors cursor-pointer"
              >
                Explore Case Studies 
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              {/* Updated image to preserve height with object-contain */}
              <img 
                src={img1} 
                alt="Marketing Analytics" 
                className="w-full h-auto object-contain bg-white"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-xl z-20 flex items-center gap-4 border border-slate-100 max-w-[280px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-50 text-[#0f4a8a] p-3 rounded-full shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900"> Higher investment returns</p>
                <p className="text-[10px] text-slate-500 font-medium leading-snug mt-1">The average improvement in conversion rates our enterprise partners see within the first six months of working with us.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Marketing Decisions Backed by Real Data
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-sm">
              At Capyngen, we do not care about likes and impressions. We care about what happens after the click — whether it turns into a lead, a sale, and eventually a loyal customer. Every strategy we build is designed to grow with your business, not just look good in a monthly report.
            </p>
            
            <div className="flex gap-12">
              <div>
                <span className="text-4xl font-light text-[#0f4a8a] mb-2 block">01.</span>
                <h3 className="font-bold text-slate-900 mb-2">Strategic Precision</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every campaign starts with a proper understanding of your market, your competitors, and where the real opportunities are — not a template we have used before.
                </p>
              </div>
              <div>
                <span className="text-4xl font-light text-[#0f4a8a] mb-2 block">02.</span>
                <h3 className="font-bold text-slate-900 mb-2">Growth Scalability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We build marketing systems that learn and improve as the data comes in — so the more you grow, the more efficient your marketing gets.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-[#eff5fb] p-10 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h3 className="text-xl font-bold text-[#0f4a8a] mb-6">Our Methodology</h3>
            <ul className="space-y-6">
              {[
                { title: "Audit and Discovery", desc: "We start by auditing what is working, what is leaking budget, and where the biggest gaps are hiding." },
                { title: "Strategic Framework", desc: "From there we build a clear multi-channel plan tied directly to the business goals that actually matter." },
                { title: "Execution and Velocity", desc: "We work with time-saving execution, leaving campaigns and test to run quickly, and we find what is driving real growth." },
                { title: "Regular Optimization", desc: "Capyngen optimizes the numbers in real time and adjusts as we go, improving old strategies." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-200 text-[#0f4a8a] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Capyngen Offers?</h2>
            <p className="text-slate-500 text-sm">Capyngen offers marketing solutions built for your business and intended audience, turning that attention into measurable results.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Campaign Strategy", desc: "We map out the full customer journey from the first touchpoint to long-term loyalty; every step is designed to bring the right audience.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Multi-Channel Marketing", desc: "We connect your search, social, and programmatic channels into one strategy so your brand feels consistent.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { title: "Performance Analytics", desc: "We track exactly where every marketing dollar goes and what it delivers—so you always know what is working.", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
              { title: "Growth Hacking", desc: "We test fast, learn faster, and cut what is not working — so your budget goes toward the things that actually grow your business.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-[#fbfcfd] flex flex-col h-full"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-50 text-[#0f4a8a] rounded-lg flex items-center justify-center mb-6 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} /></svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Events</h2>
              <p className="text-slate-500 text-sm max-w-xl">Fresh insights on what is shifting in digital marketing and how to stay ahead of it — updated regularly by the people doing the work.</p>
            </div>
            <button 
              onClick={() => handleButtonClick("Explore More Events")}
              className="text-[#0f4a8a] font-medium text-sm border-b border-[#0f4a8a] pb-1 hover:text-blue-800 transition-colors cursor-pointer bg-transparent"
            >
              Explore More
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { tag: "STRATEGY", title: "Smart Marketing in a Privacy-First World", desc: "Industry brands are now handling the damage of third-party cookies along with sustaining their procurement footprint. ", img: img2 },
              { tag: "INSIGHT", title: "Making Content Feel Personal— With Automation", desc: "Maximizing generative versions to build plenty of unique ads that convert better than broad… ", img: img3 },
              { tag: "CASE STUDY", title: "The $50M Climb: How We Are Scaling Our SaaS Together", desc: "At Capyngen, we moved beyond single-channel marketing to win major enterprise accounts. ", img: img4 }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                className="group cursor-pointer flex flex-col h-full"
                variants={fadeInUp}
                onClick={() => handleButtonClick(`Read Event: ${post.title}`)}
              >
                <div className="overflow-hidden rounded-lg mb-5 bg-slate-100 shrink-0">
                  {/* Updated image to preserve height with object-contain */}
                  <img src={post.img} alt={post.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="bg-blue-100 text-[#0f4a8a] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide mb-3 self-start">{post.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0f4a8a] transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{post.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-bold text-[#0f4a8a] group-hover:text-blue-800 transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Capyngen?</h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">At Capyngen, our organization brings decades of experience in digital marketing services and skills-based expertise teams worldwide.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Skills Specialists", desc: "Capyngen offers skills expertise and end-to-end digital marketing solutions with dedicated experts across the world." },
              { title: "Long-Term Growth", desc: "At Capyngen, we provide services that have long-term growth in their industries." },
              { title: "Decision Making", desc: "We always prioritize intellectual transparency in any projects and make fact-based decisions." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-slate-50 p-8 rounded-xl text-center"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-[#0f4a8a] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, #ffffff 0%, transparent 50%)' }}></div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-8 relative z-10">
              "Digital marketing is not just about the digital marketing company spending the most budget, but it is about who analyzes the data the best. At Capyngen, we offer the best digital marketing services in India with data as a strategic asset."
            </p>
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase relative z-10">ESTABLISHED 2018 </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
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
                className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden"
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="pr-8 leading-snug">{faq.question}</span>
                  <span className="text-[#0f4a8a] text-xl font-bold shrink-0">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                {openFaqIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 rounded-2xl overflow-hidden shadow-2xl">
          <motion.div 
            className="w-full md:w-5/12 bg-[#0f4a8a] p-12 flex flex-col justify-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Begin Your Growth With Us</h2>
            <p className="text-blue-100 mb-10 text-sm leading-relaxed">
              Are you ready to innovate your digital presence with us? Book a free consultation with our expert marketing team to explore your primary growth priorities.
            </p>
            
            <ul className="space-y-4">
              {[
                "Non-Chargeable Funnel Audit",
                "High Intelligence Brief",
                "Personalize Growth Framework"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-blue-50">
                  <svg className="w-5 h-5 text-blue-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-7/12 p-12 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">First Name</label>
                  <input required type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#0f4a8a] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Last Name</label>
                  <input required type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#0f4a8a] transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email</label>
                  <input required type="email" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#0f4a8a] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Company</label>
                  <input required type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#0f4a8a] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Message</label>
                <textarea required rows={3} className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#0f4a8a] transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="cursor-pointer w-full bg-[#0f4a8a] hover:bg-[#0c3968] text-white py-4 rounded-md font-bold transition-colors mt-4">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketingLanding;