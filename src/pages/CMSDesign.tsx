import React, { useState } from 'react';
import { 
  ArrowRight, 
  Network, 
  Megaphone, 
  Cloud, 
  Smartphone,
} from 'lucide-react';

const WebsiteDesignLandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">Adoptable & Custom Website Design Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f3b68] leading-tight mb-6">
            Scalable & Intuitive<br />Website Design
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
            At Capyngen, we transform your complex business requirements into high-performance digital foundations that bring institutional growth and industry authority.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-3.5 rounded-sm font-medium transition-colors">
              Build Your Project
            </button>
            <button className="bg-transparent hover:bg-slate-50 text-[#0066cc] border border-[#0066cc] px-8 py-3.5 rounded-sm font-medium transition-colors">
              Read Case Studies 
            </button>
          </div>
        </div>
      </section>

      {/* 2. Architecture / Methodology Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image with offset background element */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#e4eff9] rounded-sm hidden sm:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace with monitor displaying sitemap" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg border border-slate-100"
              />
            </div>
            
            <div className="lg:pl-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[#0066cc] font-semibold mb-2 uppercase tracking-wider text-xs">Knowledge Base</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68]">Trending Events</h2>
              <p className="text-slate-500 mt-2">Fresh design trends and smart tactics to grow your business online.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0066cc] font-medium hover:text-[#0052a3]">
              Explore Here <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Article (Left) */}
            <div className="lg:col-span-7 xl:col-span-8 group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Network Abstract" 
                  className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">Advanced Tech</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3b68] mb-3 group-hover:text-[#0066cc] transition-colors">
                Website Design Company Gurgaon: Using Plug-and-Play Tech. 
              </h3>
            </div>
            
            {/* List Articles (Right) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              
              {/* List Item 1 */}
              <div className="group cursor-pointer flex items-start gap-4 h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400" 
                    alt="Design Wireframes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">User-Centric Design</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Tiny digital moments that quietly turn casual visitors into buyers. 
                  </h4>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="group cursor-pointer flex items-start gap-4 h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" 
                    alt="Analytics Dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Strategy</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Connecting who you are with how your users experience you. 
                  </h4>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="group cursor-pointer flex items-start gap-4 h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400" 
                    alt="Server Room" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Performance</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Making your website load faster and feel smoother this year. 
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities / Offerings Grid */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-4">Our Special Offers</h2>
            <p className="text-slate-600">Capyngen is a leading website design company in India, offering custom software and website design that keep up with fast-moving businesses. </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Network className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Industrial Portals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Safe, flexible databases that make managing complex info easy for everyone. 
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Megaphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Marketing Sites</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom digital spaces built to hook your audience and drive sales.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Performance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fixing hidden tech issues to make your website load instantly and place higher. 
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Smartphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Responsive Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Responsive layouts that stay perfectly intact from phone to desktop. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">Why Choose Us?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Capyngen is a top tech partner and the best website design company in India, creating powerful web hubs, crafting high-speed portals, and responsive web layouts centered entirely around your users. 
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-[#0f3b68] hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span className="text-[#0066cc] font-bold text-xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebsiteDesignLandingPage;