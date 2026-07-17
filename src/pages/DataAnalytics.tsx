import React from 'react';
import { 
  ArrowRight, 
  Database, 
  Settings2, 
  BarChart3, 
  Network,
  Mail
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
            Data-Driven Decision<br />Excellence
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            We transform raw information into actionable intelligence, engineering data ecosystems that drive enterprise strategy.
          </p>
        </div>
      </section>

      {/* 2. Precision Section */}
      <section className="bg-[#f8f9fc] py-16 lg:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="lg:pr-8">
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Precision in Complexity
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In an era defined by information velocity, the challenge isn't acquiring data—it's distilling clarity from noise. We architect environments that process vast streams into unified, strategic frameworks.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By synthesizing disparate systems into structured data lakes and deploying advanced predictive models, we enable enterprise leaders to move beyond reactive reporting to proactive, algorithmic foresight.
              </p>
            </div>
            
            <div className="bg-white p-10 sm:p-14 shadow-xl border border-slate-100 rounded-sm">
              <p className="text-6xl font-bold text-[#0e6ba8] mb-4">94%</p>
              <p className="text-slate-900 font-bold mb-2">Predictive Accuracy Rate</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our machine learning models consistently out-perform baseline forecasting, minimizing operational risk across logistics and financial modeling.
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
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-2">Knowledge Base</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">The Intelligence Pulse</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0e6ba8] font-bold text-sm tracking-wider uppercase hover:text-[#0a4d7a] transition-colors">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
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
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">Predictive Analytics</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                Decisions at the Speed of Data
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Moving beyond standard reporting dashboards to implement real-time prescriptive analytics for supply chain logistics.
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
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">Data Engineering</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                The Unified Architecture
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                How modern data meshes are breaking down silos and enabling decentralized, domain-specific data products.
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
              <p className="text-[#0e6ba8] text-xs font-bold uppercase tracking-wider mb-2">BI & Strategy</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0e6ba8] transition-colors">
                Strategic Visual Storytelling
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Connecting complex datasets to executive action through intuitive, narrative-driven dashboard design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="bg-[#f8f9fc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">Core Competencies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Scalable Data Ecosystems</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Database className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Big Data Solutions</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Cloud Data Warehousing</li>
                <li>• Enterprise Data Lakes</li>
                <li>• Scalable ETL Pipelines</li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Settings2 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Data Engineering</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Pipeline Automation</li>
                <li>• Architecture Design</li>
                <li>• Real-time Processing</li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <BarChart3 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Business Intelligence</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Custom Dashboards</li>
                <li>• Predictive Modeling</li>
                <li>• Self-Serve BI</li>
              </ul>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-6 text-[#0e6ba8]">
                <Network className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Master Data Mgmt</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Data Governance</li>
                <li>• Quality Assurance</li>
                <li>• System Consolidation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#242b35] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#64b5f6] font-bold text-xs uppercase tracking-widest mb-4">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Analytics Practice Leads</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile 1 */}
            <div className="group">
              <div className="overflow-hidden mb-6 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                  alt="Dr. Elena Vance" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Elena Vance</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-4">Chief Data Scientist</p>
              <p className="text-slate-400 text-sm line-clamp-3">
                Ph.D. in Computational Statistics. Pioneer in developing unsupervised learning models for enterprise risk assessment.
              </p>
            </div>

            {/* Profile 2 */}
            <div className="group">
              <div className="overflow-hidden mb-6 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="Marcus Thorne" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Marcus Thorne</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-4">Head of Data Engineering</p>
              <p className="text-slate-400 text-sm line-clamp-3">
                Former principal engineer at major tech firms. Specializes in building highly scalable, fault-tolerant data pipelines.
              </p>
            </div>

            {/* Profile 3 */}
            <div className="group">
              <div className="overflow-hidden mb-6 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" 
                  alt="Sarah Jenkins" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sarah Jenkins</h3>
              <p className="text-[#64b5f6] text-sm font-medium mb-4">Director of Business Intelligence</p>
              <p className="text-slate-400 text-sm line-clamp-3">
                Translates complex data structures into intuitive, actionable dashboards for C-suite decision making.
              </p>
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
              <p className="text-[#0e6ba8] font-bold text-xs uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Empower Your Enterprise</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Connect with our data strategy team to discuss a comprehensive audit of your data maturity and discover pathways to algorithmic decision-making.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-4 text-[#0e6ba8]" />
                  <a href="mailto:strategy@datafirm.com" className="font-medium hover:text-[#0e6ba8] transition-colors">strategy@datafirm.com</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <Linkedin className="w-5 h-5 mr-4 text-[#0e6ba8]" />
                  <a href="#" className="font-medium hover:text-[#0e6ba8] transition-colors">Follow our insights on LinkedIn</a>
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