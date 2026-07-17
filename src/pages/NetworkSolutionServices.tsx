import React from 'react';
import { 
  ArrowRight, 
  Wifi, 
  Network, 
  ShieldCheck, 
  Cloud, 
  PhoneCall, 
  Mail, 
  Server,
  Activity,
  ChevronRight
} from 'lucide-react';

const NetworkInfrastructureLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
            alt="Global Network Connections" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/70 to-[#0a192f]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            Connectivity At Scale
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Next-Generation Network<br />Infrastructure
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-slate-100 text-[#0a192f] px-8 py-3.5 font-bold transition-colors shadow-lg text-sm tracking-wide">
              START A PROJECT
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-3.5 font-bold transition-colors text-sm tracking-wide">
              VIEW OUR SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-6 leading-tight max-w-sm">
                Architecting the Backbone of Digital Transformation
              </h2>
              <div className="w-12 h-1 bg-[#08538c] mb-8"></div>
            </div>
            
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As enterprises scale globally, legacy networks struggle to maintain agility. We design, 
                deploy, and manage intelligent network architectures that adapt to dynamic workloads 
                while securing data across the expanded perimeter.
              </p>
              <p className="text-slate-600 mb-12 leading-relaxed">
                Our approach merges software-defined flexibility with robust physical infrastructure, 
                ensuring that your connectivity accelerates business objectives rather than creating 
                bottlenecks.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#08538c] mb-2">99.99%</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#08538c] mb-2">500+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Enterprise Deployments</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Trends Section (Bento Box) */}
      <section className="bg-[#f4f7fb] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#08538c] font-semibold mb-2 uppercase tracking-wider text-xs">Latest Insights</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Pioneering Industry Trends</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Wide Top Left */}
            <div className="md:col-span-2 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Convergence of 5G and Enterprise Edge</h3>
                <p className="text-slate-600 max-w-lg">
                  Utilizing ultra-low latency wireless frameworks to process data at the edge, reducing backhaul strain and enabling real-time IoT deployments.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="w-8 h-8 bg-[#f4f7fb] rounded-full flex items-center justify-center group-hover:bg-[#08538c] group-hover:text-white transition-colors text-[#08538c]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Card 2: Small Top Right */}
            <div className="md:col-span-1 bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">SD-WAN Evolution</h3>
                <p className="text-slate-600 text-sm">
                  Transitioning from basic routing to AI-driven traffic steering for optimal cloud application performance.
                </p>
              </div>
              <div className="mt-8 w-1/3 h-1 bg-slate-100 group-hover:bg-[#08538c] transition-colors"></div>
            </div>

            {/* Card 3: Small Bottom Left */}
            <div className="md:col-span-1 bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">SASE Integration</h3>
                <p className="text-slate-600 text-sm">
                  Merging network connectivity with unified security services into a single cloud-native architecture.
                </p>
              </div>
            </div>

            {/* Card 4: Wide Bottom Right */}
            <div className="md:col-span-2 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden border-t-2 border-transparent hover:border-[#08538c]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Network Sustainability</h3>
                <p className="text-slate-600 max-w-lg">
                  Implementing energy-efficient hardware and dynamic capacity scaling to reduce corporate carbon footprints.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-slate-100 opacity-50 z-0">
                <Server className="w-48 h-48" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-4">Our Core Offerings</h2>
              <p className="text-slate-600">
                End-to-end solutions designed to modernize your network infrastructure and prepare it for future scalability.
              </p>
            </div>
            <a href="#" className="flex items-center text-[#08538c] font-semibold hover:text-[#063f6a] transition-colors whitespace-nowrap">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offering 1 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Network className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Network Transformation</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Overhauling legacy architectures with agile, software-defined LAN and WAN solutions.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Route Optimization</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Hardware Refresh</li>
              </ul>
            </div>
            
            {/* Offering 2 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Wifi className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Wireless Solutions</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                High-density Wi-Fi 6 design, Private 5G deployments, and unified wireless management.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Site Surveys</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Coverage Heatmaps</li>
              </ul>
            </div>
            
            {/* Offering 3 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Cloud className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Establishing secure, low-latency direct connections to major public cloud providers (AWS, Azure).
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> ExpressRoute Setup</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Multi-Cloud Routing</li>
              </ul>
            </div>
            
            {/* Offering 4 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">SASE & Edge Security</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Zero Trust Network Access (ZTNA), secure web gateways, and centralized policy enforcement.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Threat Prevention</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Policy Auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#1b232c] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Engineering Leads</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A collective of certified network architects dedicated to constructing robust enterprise systems.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="overflow-hidden mb-4 bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="David Vance" 
                  className="w-full h-80 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-white">David Vance</h3>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Chief Network Architect</p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="overflow-hidden mb-4 bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Sarah Chen" 
                  className="w-full h-80 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Sarah Chen</h3>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">VP of Cloud Infrastructure</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="overflow-hidden mb-4 bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                  alt="Marcus Hoffman" 
                  className="w-full h-80 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Marcus Hoffman</h3>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Lead Security Engineer (SASE)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Info */}
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-6">Ready to Optimize Your Infrastructure?</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Connect with our technical team for a comprehensive network assessment. We'll evaluate your current architecture and chart a modernization path aligned with your strategic goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <div className="w-10 h-10 bg-[#f4f7fb] rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-[#08538c]" />
                  </div>
                  <a href="mailto:solutions@netinfra.com" className="hover:text-[#08538c] transition-colors font-medium">solutions@netinfra.com</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-10 h-10 bg-[#f4f7fb] rounded-full flex items-center justify-center mr-4">
                    <PhoneCall className="w-5 h-5 text-[#08538c]" />
                  </div>
                  <span className="font-medium">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service of Interest</label>
                  <select 
                    id="service"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="transformation">Network Transformation (SD-WAN)</option>
                    <option value="wireless">Wireless Solutions (Wi-Fi 6 / 5G)</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="security">SASE & Edge Security</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    id="details"
                    rows={3}
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your current network challenges..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#08538c] hover:bg-[#063f6a] text-white font-bold py-4 transition-colors mt-4 text-sm tracking-wide"
                >
                  REQUEST ASSESSMENT
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default NetworkInfrastructureLandingPage;