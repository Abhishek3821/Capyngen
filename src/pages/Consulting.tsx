import React from 'react';
import { 
  ArrowRight, 
  BarChart4, 
  Settings2, 
  Users, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin,
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

const StrategicConsultingLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafd] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920" 
            alt="Boardroom Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a66]/80 via-[#0a3a66]/70 to-[#f8fafd]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <p className="inline-block bg-[#165a98]/20 text-blue-100 font-semibold px-4 py-1.5 rounded text-xs uppercase tracking-widest mb-6 border border-[#165a98]/30">
            Advisory & Execution
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Strategic Consulting for a<br />Digital Future
          </h1>
          <p className="text-lg text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto font-light drop-shadow">
            We partner with global leaders to orchestrate complex transformations, unlock new revenue streams, and build resilient organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-slate-50 text-[#0a3a66] px-8 py-3.5 rounded font-bold transition-colors shadow-lg">
              Our Services
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-3.5 rounded font-bold transition-colors">
              Read Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 2. Transformation Section */}
      <section className="bg-white py-20 lg:py-28 relative -mt-10 rounded-t-[40px] z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a3a66] mb-6 leading-tight">
                Engineering<br />Transformation with<br />Precision
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A vision without execution is just an idea. We bridge the gap between strategic intent and operational reality, ensuring that broad organizational goals translate into measurable outcomes.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our methodology relies on deep industry knowledge combined with advanced data analytics. We don't just recommend changes; we architect the operating models and technological ecosystems required to sustain them.
              </p>
              
              <div className="grid grid-cols-2 gap-6 border-l-2 border-[#165a98] pl-6">
                <div>
                  <p className="text-3xl font-bold text-[#0a3a66] mb-1">94%</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Client Retention Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0a3a66] mb-1">Top 50</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Global Advisory Firm</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Consultant analyzing data on tablet" 
                className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-12px_rgba(10,58,102,0.15)]"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f0f5fb] rounded-full flex items-center justify-center text-[#165a98]">
                  <BarChart4 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0a3a66]">Data-Driven</p>
                  <p className="text-xs text-slate-500">Quantitative Strategy</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. News / Insights Section */}
      <section className="bg-[#f8fafd] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a3a66] mb-3">What's Happening</h2>
              <p className="text-slate-600">Latest insights from our strategy consultants.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#165a98] font-semibold hover:text-[#0a3a66] transition-colors">
              Read More Insights <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-5 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Abstract Data Flow" 
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#165a98] text-xs font-bold uppercase tracking-wider mb-2">Technology Strategy</p>
              <h3 className="text-xl font-bold text-[#0a3a66] mb-3 group-hover:text-[#165a98] transition-colors line-clamp-2">
                The Autonomous Enterprise: Scaling Beyond AI
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                How forward-thinking organizations are moving past conversational AI to build fully autonomous operational workflows and decision engines.
              </p>
            </div>
            
            {/* Insight 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-5 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Office Building" 
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#165a98] text-xs font-bold uppercase tracking-wider mb-2">Operations & Logistics</p>
              <h3 className="text-xl font-bold text-[#0a3a66] mb-3 group-hover:text-[#165a98] transition-colors line-clamp-2">
                Resilient Supply Chains in a Volatile World
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Re-engineering global logistics through predictive analytics and near-shoring strategies to mitigate geopolitical risk.
              </p>
            </div>

            {/* Insight 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-5 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                  alt="Team brainstorming" 
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-[#165a98] text-xs font-bold uppercase tracking-wider mb-2">Human Capital</p>
              <h3 className="text-xl font-bold text-[#0a3a66] mb-3 group-hover:text-[#165a98] transition-colors line-clamp-2">
                Culture First: Navigating Hybrid Realities
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3">
                Strategies to maintain corporate identity, foster innovation, and retain top talent in distributed working environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Offerings */}
      <section className="bg-white py-20 lg:py-28 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a3a66] mb-4">Our Specialized Offerings</h2>
            <p className="text-slate-600">Targeted expertise designed to address the most complex challenges facing modern enterprises.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f8fafd] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#165a98]/20">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#165a98]">
                <BarChart4 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66] mb-3">Business Strategy</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Corporate strategy, portfolio optimization, and growth methodologies for new market entry.
              </p>
              <ul className="text-xs font-semibold text-[#165a98] space-y-2">
                <li>+ M&A Advisory</li>
                <li>+ Market Expansion</li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#f8fafd] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#165a98]/20">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#165a98]">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66] mb-3">Technology Consulting</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Core system modernization, IT architecture, and strategic implementations.
              </p>
              <ul className="text-xs font-semibold text-[#165a98] space-y-2">
                <li>+ Cloud Migration</li>
                <li>+ Digital Ecosystems</li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[#f8fafd] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#165a98]/20">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#165a98]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66] mb-3">Org. Transformation</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Operating model design, change management, and leadership development.
              </p>
              <ul className="text-xs font-semibold text-[#165a98] space-y-2">
                <li>+ Agile Workflows</li>
                <li>+ Talent Strategy</li>
              </ul>
            </div>
            
            {/* Card 4 */}
            <div className="bg-[#f8fafd] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#165a98]/20">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#165a98]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66] mb-3">Sustainability</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                ESG frameworks, decarbonization strategies, and compliance planning.
              </p>
              <ul className="text-xs font-semibold text-[#165a98] space-y-2">
                <li>+ Net-Zero Roadmaps</li>
                <li>+ Circular Economy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#eaf1f8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a3a66] mb-4">The Minds Behind the Strategy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our leadership team brings decades of experience from top-tier firms, offering unparalleled expertise across global markets.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="Marcus Oakley" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66]">Marcus Oakley</h3>
              <p className="text-[#165a98] text-xs font-semibold uppercase tracking-wider mb-3">Managing Partner, Global Strategy</p>
              <div className="flex justify-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#165a98]"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#165a98]"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr. Elena Rossi" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66]">Dr. Elena Rossi</h3>
              <p className="text-[#165a98] text-xs font-semibold uppercase tracking-wider mb-3">Head of Tech Transformation</p>
              <div className="flex justify-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#165a98]"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#165a98]"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                  alt="Julian Vance" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66]">Julian Vance</h3>
              <p className="text-[#165a98] text-xs font-semibold uppercase tracking-wider mb-3">Principal, Operations</p>
              <div className="flex justify-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#165a98]"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#165a98]"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-4 rounded-xl shadow-sm text-center group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                  alt="Sarah Chen" 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0a3a66]">Sarah Chen</h3>
              <p className="text-[#165a98] text-xs font-semibold uppercase tracking-wider mb-3">Director, Sustainability</p>
              <div className="flex justify-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#165a98]"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#165a98]"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-white">
          
          {/* Left Side - Info */}
          <div className="bg-[#0a3a66] p-10 lg:p-16 lg:w-5/12 text-white flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to define your digital future?</h2>
            <p className="text-blue-100 mb-12 leading-relaxed">
              Connect with our advisory team to discuss your strategic objectives and how we can architect a roadmap for sustained success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-blue-50">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-blue-200" />
                </div>
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center text-blue-50">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-blue-200" />
                </div>
                <a href="mailto:advisory@strategyfirm.com" className="hover:text-white transition-colors">advisory@strategyfirm.com</a>
              </div>
              <div className="flex items-center text-blue-50">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-blue-200" />
                </div>
                <span>100 Financial District, NY 10005</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-10 lg:p-16 lg:w-7/12 flex items-center">
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-[#0a3a66] uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#165a98] outline-none transition-colors text-slate-800 bg-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-[#0a3a66] uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#165a98] outline-none transition-colors text-slate-800 bg-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-bold text-[#0a3a66] uppercase tracking-wider mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="workEmail"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#165a98] outline-none transition-colors text-slate-800 bg-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold text-[#0a3a66] uppercase tracking-wider mb-2">Inquiry Type</label>
                  <select 
                    id="inquiryType"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#165a98] outline-none transition-colors text-slate-800 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="strategy">Business Strategy</option>
                    <option value="tech">Technology Consulting</option>
                    <option value="org">Organizational Design</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#0a3a66] uppercase tracking-wider mb-2">How can we help?</label>
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#165a98] outline-none transition-colors text-slate-800 bg-transparent resize-none"
                  placeholder="Briefly describe your strategic challenges..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#165a98] hover:bg-[#0a3a66] text-white font-bold py-4 rounded transition-colors mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default StrategicConsultingLandingPage;