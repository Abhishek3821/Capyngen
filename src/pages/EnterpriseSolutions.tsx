import React from 'react';
import { 
  ArrowRight, 
  BarChart4, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  PhoneCall, 
  MapPin, 
  Mail,
  ChevronRight
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

const EnterpriseLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern City Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d47a1]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d47a1]/40 to-[#f8f9fa]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Transforming the Modern<br />Enterprise
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow">
            We engineer intelligent workflows and scalable digital architectures that drive operational excellence and sustainable market leadership.
          </p>
          <button className="bg-white hover:bg-slate-50 text-[#0d47a1] px-10 py-4 font-bold transition-colors shadow-xl text-sm tracking-widest uppercase">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* 2. Intro/Methodology Section */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-4">Enterprise Strategy</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Unified Systems for the<br />Intelligent Business.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In a complex digital landscape, fragmented systems act as friction points. 
                We architect seamless integrations that connect data, empower teams, and 
                accelerate decision-making across global operations.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our strategic implementation frameworks reduce time-to-value by 40%, 
                ensuring your technological investments translate directly into measurable 
                business outcomes and competitive advantage.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> End-to-End Digital Transformation
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> Scalable Cloud Architecture
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> Advanced Data & AI Integration
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Boardroom Meeting" 
                className="w-full h-auto shadow-xl border border-slate-200"
              />
              {/* Overlay Stat Box */}
              <div className="absolute -bottom-6 -left-6 bg-[#0d47a1] text-white p-8 shadow-2xl max-w-[280px]">
                <p className="text-5xl font-bold mb-2">94%</p>
                <p className="text-sm font-medium leading-relaxed">
                  Of our enterprise clients report increased operational efficiency within 6 months.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. News / Insights Section */}
      <section className="bg-[#f1f4f9] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-2">Market Insights</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Navigating Digital Frontiers.</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0d47a1] font-semibold hover:text-[#09357a] transition-colors">
              View All Insights <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Global Network" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Cloud Strategy</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  The Multi-Cloud Imperative for Global Enterprises
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  How diversifying cloud infrastructure mitigates risk, ensures compliance, and optimizes global performance.
                </p>
              </div>
            </div>
            
            {/* Insight 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600" 
                  alt="Server Infrastructure" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Data Architecture</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Beyond Data Lakes: Building Intelligent Data Fabrics
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Connecting disparate data sources into a unified, secure architecture ready for advanced AI applications.
                </p>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                  alt="Team Collaboration" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Change Management</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Human-Centric Adoption Strategies for Enterprise Software
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Overcoming resistance and driving user adoption to maximize the ROI of new digital platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-4">Core Offerings</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Enterprise Excellence.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <Cpu className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">ERP Implementation</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Streamlining financials, supply chain, and operations into a single, intelligent system of record.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <Layers className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">System Integration</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Connecting legacy systems with modern SaaS applications via robust API architectures.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <BarChart4 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Data Analytics</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Deploying enterprise-grade BI tools to turn massive datasets into actionable strategic insights.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Information Security</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Implementing zero-trust frameworks to safeguard corporate IP and ensure regulatory compliance.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#1e293b] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Experts in Strategy & Technology.</h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                Our leadership team bridges the gap between technical architecture and business strategy, bringing decades of experience from Fortune 500 environments.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="Marcus Thorne" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Marcus Thorne</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-3">Managing Partner, Enterprise Strategy</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Elena Rodriguez" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Elena Rodriguez</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-3">VP, IT Transformation & Cloud Architecture</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group hidden lg:block">
              <div className="overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                  alt="Julian Vance" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Julian Vance</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-3">Head of Data Analytics & AI</p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Side - Info */}
          <div className="bg-[#0d47a1] p-12 lg:p-16 lg:w-5/12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Let's build the future of your enterprise.</h2>
              <p className="text-blue-100 mb-12 leading-relaxed">
                Connect with our solutions engineering team to schedule a comprehensive audit of your current technology landscape.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center text-blue-50">
                <PhoneCall className="w-6 h-6 mr-4 text-blue-300" />
                <span className="font-medium tracking-wide">+1 (800) 555-0199</span>
              </div>
              <div className="flex items-start text-blue-50">
                <MapPin className="w-6 h-6 mr-4 text-blue-300 mt-1" />
                <span className="font-medium leading-relaxed">100 Corporate Plaza,<br />Suite 500<br />New York, NY 10005</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-12 lg:p-16 lg:w-7/12 flex items-center">
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="workEmail" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="workEmail"
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Service of Interest</label>
                <select 
                  id="inquiryType"
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="erp">ERP Implementation</option>
                  <option value="integration">System Integration</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="security">Information Security</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Project Brief</label>
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-400"
                  placeholder="Tell us about your organization's current challenges..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#0d47a1] hover:bg-[#09357a] text-white font-bold py-4 px-10 transition-colors mt-4 text-sm tracking-widest uppercase"
              >
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default EnterpriseLandingPage;