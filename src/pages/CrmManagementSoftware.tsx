import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const CRMSolutionsPage: React.FC = () => {
  // 1. State for Tabs in "Our Solutions"
  const [activeTab, setActiveTab] = useState<'services' | 'industries'>('services');

  // 2. State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 3. Ref and functions for "What's Happening" Carousel
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Form Submission Handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your request for services has been submitted successfully.");
  };

  // Data for rendering
  const solutionData = {
    services: [
      { id: '01', title: 'Custom CRM' },
      { id: '02', title: 'ERP Solutions' },
      { id: '03', title: 'HR Management Systems' },
      { id: '04', title: 'Business Intelligence' },
    ],
    industries: [
      { id: '01', title: 'Healthcare' },
      { id: '02', title: 'Manufacturing' },
      { id: '03', title: 'Retail & E-commerce' },
      { id: '04', title: 'Finance & Banking' },
    ]
  };

  const faqs = [
    { q: "Q1. What is CRM & management software?", a: "CRM & management software assists businesses in the control of customer relationships, automates business processes, monitors sales and enhances overall business efficiency via a unified system." },
    { q: "Q2. Why is it worth investing in the creation of a CRM software?", a: "Cloud CRM software development enables companies to tailor the software to their business processes, boost efficiency, and deliver a personalized customer experience." },
    { q: "Q3. Can you provide CRM software development services for Capyngen?", a: "Yes. Capyngen provides end to end CRM Software Development Services, from consulting to designing, developing, integrating, deployment and continuous support." },
    { q: "Q4. Which industries can use CRM software solutions?", a: "Advanced CRM software solutions can be utilized across a wide range of industries such as healthcare, retail, manufacturing, finance, education, logistics, real estate and more." },
    { q: "Q5. Why choose Capyngen as a custom CRM software development company?", a: "With its reputation as a leading Custom CRM software development company, Capyngen creates scalable, secure, and user-friendly CRM solutions that align with business objectives." },
    { q: "Q6. Customer relationship management software can contain which feature(s)?", a: "This can cover elements such as lead management, sales tracking, customer support, reporting, workflow automation, analytics, and communication tools." },
    { q: "Q7. Is Capyngen a CRM development company in India?", a: "Yes. Capyngen is a leading business software development company that provides tailored business software for startups, SMEs and enterprises in India." },
    { q: "Q8. Is it possible for CRM software to be integrated with ERP software?", a: "Yes. Our CRM systems are integrated with ERP, HRMS, accounting software, marketing and third-party business applications." },
    { q: "Q9. How long does CRM software development take?", a: "The timeline will depend on the complexity of the project, the features, integrations and the customizations that are required." },
    { q: "Q10. Would you provide cloud based CRM software services?", a: "Yes. Create CRM solutions that are secure and run in the cloud or on-premise according to business needs." },
    { q: "Q11. Will current CRM software be adaptable?", a: "Absolutely. We build new modules, integrations, automate and add advanced reporting features to existing CRM platforms." },
    { q: "Q12. What is your CRM Software Development Company's competitive advantage?", a: "Capygenn is a dependable CRM software development company thanks to its business-centric approach, expert developers, cutting-edge technologies, and committed support team." },
    { q: "Q13. Are you a CRM software developer for a small business?", a: "Yes. Our CRM Software Development Services can be used by both startups, small businesses, and large enterprises." },
    { q: "Q14. Can the customers' relationships be protected with a CRM system?", a: "Yes. We have enterprise level security, role based access, data encryption and compliance in place to keep business information safe." },
    { q: "Q15. What do I need to do to start using Capyngen?", a: "Simply contact our team with your business requirements. We'll evaluate your requirements and provide you with the CRM & management software solution for your company." }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          CRM & Management Software
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          More advanced CRM & Management Software means Smarter Growth.
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
          CRM & management software helps to drive business performance by making it easy to operate, generate more business and boost team productivity. Capyngen creates smart digital solutions that unify your business processes. 
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
          className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm tracking-wide active:scale-95"
        >
          READ MORE <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              About CRM & Management Software
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              The Capyngen CRM software suite offers dependable solutions, enabling businesses to modernize their operations with peace of mind. A leading CRM software development company, we possess technical expertise, and innovation to develop scalable enterprise platforms. Our highly skilled experts deliver CRM software development services, empowering businesses to optimize their processes, and make informed decisions quickly in all departments.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#e6ebf5] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 relative inline-block">
                What’s Happening
                <div className="absolute left-0 -bottom-2 w-12 h-1 bg-[#0056b3]"></div>
              </h2>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left')}
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors active:bg-slate-200"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors active:bg-slate-900"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Added Scrollable container for functional arrows */}
          <div 
            ref={scrollContainerRef} 
            className="flex gap-8 pt-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // Inline style to hide scrollbar
          >
            <style dangerouslySetInnerHTML={{__html: `
              .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}} />
            
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col min-w-[300px] md:min-w-[320px] flex-shrink-0 snap-start">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a1526] flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent"></div>
                  <div className="absolute w-3/4 h-3/4 border border-blue-500/20 rounded-md grid grid-cols-2 gap-2 p-2">
                    <div className="bg-blue-500/10 rounded-sm"></div>
                    <div className="bg-blue-500/10 rounded-sm"></div>
                    <div className="col-span-2 bg-blue-500/10 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Boost the digital shift using Customer Relationship Management software.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col min-w-[300px] md:min-w-[320px] flex-shrink-0 snap-start">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100 via-amber-50 to-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-full h-16 bg-amber-400/20 skew-y-6"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Famous for its CRM software development application solutions.
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col min-w-[300px] md:min-w-[320px] flex-shrink-0 snap-start">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full border-4 border-blue-100 border-t-blue-400 animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute w-24 h-24 rounded-full border-4 border-blue-50 border-b-blue-300"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Allowing organizations to be empowered by CRM software development services.
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col min-w-[300px] md:min-w-[320px] flex-shrink-0 snap-start">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-300/50 via-transparent to-transparent"></div>
                  <div className="absolute w-20 h-20 bg-blue-500/10 rotate-45"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Technology of the future, smarter business management.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column (Interactive Tabs) */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solutions</h2>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed">
              We enable organisations to provide cutting-edge technology solutions, enabling collaboration and delivering sustainable growth in business.
            </p>

            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-left px-6 py-4 w-full font-bold text-sm transition-colors border outline-none
                  ${activeTab === 'services' ? 'border-[#0056b3] bg-white text-slate-900 shadow-sm' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'}`}
              >
                SERVICE OFFERINGS
              </button>
              <button 
                onClick={() => setActiveTab('industries')}
                className={`text-left px-6 py-4 w-full font-bold text-sm transition-colors border outline-none
                  ${activeTab === 'industries' ? 'border-[#0056b3] bg-white text-slate-900 shadow-sm' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'}`}
              >
                INDUSTRY EXPERTISE
              </button>
            </div>
          </div>

          {/* Right Column (Dynamic Content based on Tab) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-12 min-h-[160px]">
              {solutionData[activeTab].map((item: { id: string, title: string }) => (
                <div key={item.id} className="border-t border-slate-200 pt-4 animate-in fade-in duration-300">
                  <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">{item.id}</span>
                  <h5 className="font-bold text-slate-900 text-base">{item.title}</h5>
                </div>
              ))}
            </div>

            {/* Bottom Image Placeholder */}
            <div className="w-full h-48 bg-slate-200 relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-300"></div>
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-200/80 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#60a5fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose Capyngen?</h2>
            <p className="text-blue-100 text-sm">We supply cutting-edge CRM & management software </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4 rounded-sm">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">01. Experienced CRM Experts</h4>
                <p className="text-blue-100 text-sm mb-3">Reliable industry certified professionals providing CRM software solutions.</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4 rounded-sm">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">02. Tailor-Made Business Solutions</h4>
                <p className="text-blue-100 text-sm mb-3">Platforms that are custom-built to fit your business requirements.</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4 rounded-sm">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">03. Seamless Integration & Automation</h4>
                <p className="text-blue-100 text-sm mb-3">Integrate systems, streamline processes, and enhance productivity.</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4 rounded-sm">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">04. End-to-End Support</h4>
                <p className="text-blue-100 text-sm mb-3">Full implementation, maintenance, upgrade and technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQs Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions (FAQs)</h2>
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
                  <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a1526] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Our Services</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Experience the power of Capyngen CRM & management software and enterprise technology solutions and discover their potential for your business. 
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email *</label>
                    <input required type="email" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Company *</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input required type="checkbox" id="privacy-consent" className="mt-1 w-4 h-4 border-slate-300 rounded-none cursor-pointer" />
                  <label htmlFor="privacy-consent" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
                    I have read and accept the <span className="text-[#0056b3] underline">Privacy Policy</span> and consent to having my data processed.
                  </label>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider uppercase active:scale-95">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default CRMSolutionsPage;