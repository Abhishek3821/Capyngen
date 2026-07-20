import React, { useState } from 'react';
import { 
  ArrowRight, 
  Database, 
  Settings2, 
  BarChart3, 
  Network,
  Mail,
  ChevronDown
} from 'lucide-react';

// Custom SVG component for the removed Lucide LinkedIn icon
const Linkedin: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DataAnalyticsLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly do data analytics services cover?",
      answer: "At Capyngen, we usually start by figuring out where your data actually lives and how fragmented it is, then build from there."
    },
    {
      question: "What's the difference between data analytics services and just hiring a BI tool vendor?",
      answer: "A BI tool gives you software. Data analytics consulting gives you a strategy for how to actually use it—what to measure, how to structure your data, and how to get your teams to trust and act on the insights."
    },
    {
      question: "How long does it typically take to see results from business intelligence services?",
      answer: "It depends on how fragmented your current data setup is, but most clients start seeing clearer reporting within the first couple of months. Full-scale business intelligence services—with predictive modeling and self-service dashboards—usually take a bit longer to mature fully."
    },
    {
      question: "What are data analytics services for business actually built to solve?",
      answer: "Most commonly, it's the gap between having data and being able to act on it quickly. Good data analytics solutions for business turn scattered, siloed information into something leadership can actually use to make decisions in real time, not weeks later."
    },
    {
      question: "Do you work with big data or just standard business reporting?",
      answer: "Both, honestly. We scope the work based on what your data volume and complexity actually require."
    },
    {
      question: "What does your data engineering work actually involve?",
      answer: "Our data engineering work covers pipeline automation, data lakehouse design, and real-time processing—basically, the plumbing that makes sure clean, usable data reaches your analytics and BI tools without breaking."
    },
    {
      question: "What's involved in your master data management work?",
      answer: "This is where a lot of the \"why doesn't this number match\" problems get solved. Our master data management work covers data governance, quality checks, and golden record matching, so different departments are finally working from the same accurate source of truth."
    },
    {
      question: "How do I find the right data analytics consulting partner for a large, multi-national business?",
      answer: "As a data analytics consulting partner, we've worked through that kind of complexity with Fortune 500 clients, so we know where things typically break."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            alt="Abstract Data Flow" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061834]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fc] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Smarter Data-Driven Decisions
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            Capyngen is a leading data service provider for data analytics services, offering advanced global enterprise growth and building lasting operational resilience. 
          </p>
        </div>
      </section>

      {/* 2. Precision Section */}
      <section className="bg-[#f8f9fc] py-16 lg:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="lg:pr-8">
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">OUR PHILOSOPHY</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Finding Clarity in Complexity
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As the volume of business information continues to grow, the real challenge is making sense of it, not just collecting it. At Capyngen, we help turn scattered data systems into reliable, well-organized assets.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our approach connects raw information with practical, usable insight. We use proven analytical methods to give your leadership team the clarity needed to make informed decisions in changing global markets. 
              </p>
            </div>
            
            <div className="bg-white p-10 sm:p-14 shadow-xl border border-slate-100 rounded-sm">
              <p className="text-6xl font-bold text-[#0e6ba8] mb-4">94%</p>
              <p className="text-slate-900 font-bold mb-2">CLIENT EFFICIENCY BENEFIT</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                "Capyngen's data fabric integration transformed our operational baseline in under two quarters." 
                <br /><br />— F500 CTO
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-[#eff2f9] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-2">MARKET INTELLIGENCE</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">The Insight Pulse</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0e6ba8] font-bold text-sm tracking-wider uppercase hover:text-[#0a4d7a] transition-colors">
              EXPLORE INSIGHTS <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-5 rounded-sm shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                  alt="Team analyzing data" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">REAL-TIME ANALYTICS</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                Decisions at the Speed of Data
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Moving past historical reporting into predictive, live-streaming intelligence systems for faster, more agile response.
              </p>
            </div>
            
            {/* Article 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-5 rounded-sm shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                  alt="Data visualization" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">DATA FABRIC</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                The Unified Architecture
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                How centralized metadata management is solving the siloed data problem for multinational organizations.
              </p>
            </div>

            {/* Article 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-5 rounded-sm shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  alt="Tablet showing charts" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">BI STRATEGY</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                Strategic Visual Storytelling
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Improving the final step of data delivery to ensure executive buy-in and data analytics company-wide alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="bg-[#f8f9fc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">CORE COMPETENCIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Data Ecosystems Built to Scale</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Database className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Big Data Solutions</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Distributed Computing Power</li>
                <li>• Cloud-Based Data Warehousing</li>
                <li>• Scalable Data Pipelines</li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Settings2 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Data Engineering</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Automated Data Pipelines</li>
                <li>• Data Lakehouse Architecture</li>
                <li>• Real-Time Data Processing</li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <BarChart3 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Business Intelligence</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Executive Reporting Dashboards</li>
                <li>• Predictive Data Modeling</li>
                <li>• Self-Service BI Tools</li>
              </ul>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Network className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Master Data Management</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Data Governance Frameworks</li>
                <li>• Data Quality Assurance</li>
                <li>• Golden Record Matching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section replaced with "Why Choose Us" mapping to similar grid structure */}
      <section className="bg-[#242b35] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Choosing the right analytics partner determines whether your data becomes a real advantage or just another dashboard nobody checks. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile 1 */}
            <div className="group border-t border-slate-700 pt-6">
              <h3 className="text-xl font-bold text-white mb-3">Proven Analytics Expertise</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We have built data platforms, pipelines, and BI systems for Fortune 500 and multinational clients.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="group border-t border-slate-700 pt-6">
              <h3 className="text-xl font-bold text-white mb-3">Custom Data Analytical</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build every dashboard around your existing systems and business questions.
              </p>
            </div>

            {/* Profile 3 */}
            <div className="group border-t border-slate-700 pt-6">
              <h3 className="text-xl font-bold text-white mb-3">Outcomes You Can Measure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our focus stays on results that show up in your operations and decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#eff2f9] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#0e6ba8] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Info */}
            <div className="lg:pr-8">
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">GET STARTED</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Empower Your Business</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Innovate your data into a strategic benefit to your enterprise? Book your consultation chat or call with our expert leads to discuss your current data.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-4 text-[#0e6ba8]" />
                  <a href="mailto:solutions@capyngen.com" className="font-medium hover:text-[#0e6ba8] transition-colors">solutions@capyn	gen.com</a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="bg-[#f8f9fc] p-8 sm:p-10 rounded-sm border border-slate-100">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0e6ba8] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Work Email</label>
                    <input 
                      type="email" 
                      id="workEmail"
                      className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0e6ba8] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0e6ba8] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Acme Corp"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Area of Interest</label>
                  <select 
                    id="interest"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0e6ba8] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area...</option>
                    <option value="engineering">Data Engineering</option>
                    <option value="bi">Business Intelligence</option>
                    <option value="advanced">Advanced Analytics</option>
                    <option value="audit">Data Maturity Audit</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0e6ba8] hover:bg-[#0a4d7a] text-white font-bold py-4 transition-colors mt-4 text-sm tracking-widest uppercase rounded-sm shadow-sm"
                >
                  Request Consultation
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default DataAnalyticsLandingPage;