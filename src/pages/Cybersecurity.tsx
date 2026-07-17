import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  Search, 
  AlertOctagon, 
  ShieldAlert, 
  Mail, 
  PhoneCall
} from 'lucide-react';

const CyberSecurityLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f9fc] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            alt="Cyber Security Network Concept" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#084887]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fc] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col items-center">
          <Shield className="w-16 h-16 text-blue-300/50 absolute -top-8 -z-10" strokeWidth={1} />
          <p className="text-blue-200 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4">
            Next-Generation Protection
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
            Resilient Enterprise Security
          </h1>
          <p className="text-sm text-blue-50 mb-8 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            Defending digital assets with advanced threat intelligence and Zero Trust architecture for global organizations.
          </p>
          <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-sm font-semibold transition-colors uppercase tracking-widest backdrop-blur-sm">
            Request Assessment
          </button>
        </div>
      </section>

      {/* 2. Intro/Methodology Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold text-[#084887] mb-6 leading-tight">
                Proactive Threat<br />Intelligence
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                In an era where cyber threats evolve rapidly, traditional perimeter defense is insufficient. We architect robust, dynamic defenses around a Zero Trust framework, ensuring that every access request is authenticated and continuously validated.
              </p>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Our approach shifts the paradigm from reactive to proactive. By leveraging predictive analytics and global threat feeds, we identify and neutralize vulnerabilities before they can be exploited.
              </p>
              
              <ul className="space-y-6 border-l-2 border-[#084887]/20 pl-6">
                <li>
                  <h4 className="text-sm font-bold text-[#084887] mb-1">Predictive Analytics</h4>
                  <p className="text-xs text-slate-500">Machine learning models that anticipate attack vectors.</p>
                </li>
                <li>
                  <h4 className="text-sm font-bold text-[#084887] mb-1">Zero Trust Core</h4>
                  <p className="text-xs text-slate-500">Comprehensive identity verification across all network touchpoints.</p>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white p-4 shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" 
                  alt="Server Infrastructure" 
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
              
              {/* Overlay Stat Box */}
              <div className="absolute -bottom-6 -left-6 bg-[#084887] text-white p-8 shadow-xl max-w-[200px]">
                <p className="text-4xl font-bold mb-2">99.9%</p>
                <p className="text-xs font-medium leading-relaxed uppercase tracking-wider text-blue-200">
                  Threat Mitigation Rate
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities (Bento) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#084887] mb-4">Core Security Capabilities</h2>
            <div className="w-16 h-1 bg-[#084887] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Top Left - Large */}
            <div className="md:col-span-2 bg-[#f4f7fb] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group border border-transparent hover:border-[#084887]/20">
              <div>
                <div className="mb-4 text-[#084887]">
                  <Shield className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Managed Security Services</h3>
                <p className="text-sm text-slate-600 max-w-lg mb-6 leading-relaxed">
                  24/7/365 Security Operations Center (SOC) monitoring. We detect, investigate, and respond to threats in real-time, providing continuous oversight of your digital infrastructure.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#084887] uppercase tracking-wider hover:text-[#063361]">
                Explore SOC Services <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Top Right - Solid Color */}
            <div className="bg-[#084887] p-8 shadow-sm flex flex-col text-white">
              <div className="mb-4 text-blue-200">
                <Lock className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Identity & Access<br />Management</h3>
              <p className="text-sm text-blue-100 flex-1 leading-relaxed">
                Ensure the right people have the right access. Implementing SSO, MFA, and robust lifecycle management to protect sensitive data.
              </p>
            </div>
            
            {/* Bottom Left - Small */}
            <div className="bg-[#f4f7fb] p-8 shadow-sm flex flex-col border border-transparent hover:border-[#084887]/20 transition-colors">
              <div className="mb-4 text-[#084887]">
                <Search className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Risk & Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Navigating complex regulatory frameworks. We ensure your security posture aligns with industry standards and legal requirements.
              </p>
            </div>
            
            {/* Bottom Right - Wide */}
            <div className="md:col-span-2 bg-[#f4f7fb] p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between border border-transparent hover:border-[#084887]/20 transition-colors relative overflow-hidden">
              <div className="relative z-10 md:pr-16">
                <div className="mb-4 text-[#084887]">
                  <AlertOctagon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Incident Response</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rapid deployment containment teams. When a breach occurs, swift action is critical to limit exposure and initiate forensic recovery.
                </p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
                 <ShieldAlert className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. News / Insights Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#084887] mb-2">Intelligence & Insights</h2>
              <p className="text-sm text-slate-500">Threat analysis and industry strategy.</p>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center text-xs font-bold text-[#084887] uppercase tracking-wider hover:text-[#063361] border-b border-[#084887] pb-1">
              View All Insights
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600" 
                  alt="Network Cables" 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#084887] text-[10px] font-bold uppercase tracking-wider mb-2">Case Study</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Advanced Ransomware Prevention for Global Logistics
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  How implementing micro-segmentation halted lateral movement during a sophisticated attack on a Fortune 500 supply chain.
                </p>
              </div>
            </div>
            
            {/* Insight 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6]">
                <img 
                  src="https://images.unsplash.com/photo-1614064641913-6b71a2b02319?auto=format&fit=crop&q=80&w=600" 
                  alt="Abstract Cloud Security" 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply opacity-80"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#084887] text-[10px] font-bold uppercase tracking-wider mb-2">Whitepaper</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Securing the Multi-Cloud Enterprise
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Strategies for maintaining consistent security policy and visibility across AWS, Azure, and Google Cloud environments.
                </p>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" 
                  alt="Compliance Documents" 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#084887] text-[10px] font-bold uppercase tracking-wider mb-2">Advisory</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Compliance as a Competitive Asset
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Transforming regulatory mandates (GDPR, HIPAA, SOC 2) from operational burdens into trust-building market differentiators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-white py-20 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#084887] mb-4">Strategic Counsel</h2>
            <p className="text-sm text-slate-500">Expert leadership guiding your security posture.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-4 rounded-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr. Arthur Thorne" 
                  className="w-full aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Dr. Arthur Thorne</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Chief Information Security Officer</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-4 rounded-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Elena Rodriguez" 
                  className="w-full aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Elena Rodriguez</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Head of Threat Intelligence</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-4 rounded-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                  alt="Marcus Vance" 
                  className="w-full aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Marcus Vance</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Director of SOC Operations</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-4 rounded-sm bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                  alt="Sarah Jenkins" 
                  className="w-full aspect-[4/5] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Sarah Jenkins</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Lead Compliance Auditor</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Info */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-[#084887] mb-6">Fortify Your<br />Enterprise</h2>
              <p className="text-sm text-slate-600 mb-10 leading-relaxed">
                Connect with our security architects to schedule a comprehensive vulnerability assessment and discuss a tailored defense strategy for your organization.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700 bg-white p-4 shadow-sm border border-slate-100">
                  <Mail className="w-5 h-5 mr-4 text-[#084887]" />
                  <a href="mailto:defense@securityfirm.com" className="text-sm font-semibold hover:text-[#084887] transition-colors">defense@securityfirm.com</a>
                </div>
                <div className="flex items-center text-slate-700 bg-white p-4 shadow-sm border border-slate-100">
                  <PhoneCall className="w-5 h-5 mr-4 text-[#084887]" />
                  <span className="text-sm font-semibold">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 shadow-lg border border-slate-100">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="workEmail"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Area of Interest</label>
                  <select 
                    id="interest"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area...</option>
                    <option value="soc">Managed SOC Services</option>
                    <option value="iam">Identity & Access Management</option>
                    <option value="compliance">Risk & Compliance Audit</option>
                    <option value="incident">Incident Response Planning</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="details"
                    rows={2}
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your security concerns..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#084887] hover:bg-[#063361] text-white font-bold py-4 transition-colors mt-4 text-[11px] tracking-[0.2em] uppercase rounded-sm"
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

export default CyberSecurityLandingPage;