import React from 'react';
import { 
  ArrowRight, 
  Palette, 
  Target, 
  Monitor, 
  BookOpen, 
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const BrandLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#113a5d] leading-tight mb-6">
              Defining Iconic Brand Identities
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We engineer expansive brand architectures that command market presence. 
              Bridging strategic positioning with striking visual systems for industry leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0b5c92] hover:bg-[#094a75] text-white px-8 py-3.5 rounded-sm font-medium transition-colors shadow-sm">
                View Our Work
              </button>
              <button className="bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-300 px-8 py-3.5 rounded-sm font-medium transition-colors">
                Our Approach
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Architecture" 
              className="w-full h-[500px] object-cover rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 2. Strategic Brand Evolution Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Overlapping Images */}
            <div className="relative h-[400px] hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1616628188550-808682f392ce?auto=format&fit=crop&q=80&w=600" 
                alt="Brand Mark" 
                className="absolute top-8 left-0 w-3/5 h-64 object-cover rounded-sm shadow-md z-10"
              />
              <img 
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=600" 
                alt="Desktop Workspace" 
                className="absolute bottom-8 right-4 w-3/5 h-64 object-cover rounded-sm shadow-lg z-20 border-4 border-white"
              />
            </div>
            
            <div>
              <p className="text-[#0b5c92] font-semibold mb-3 uppercase tracking-wider text-xs">Our Methodology</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Strategic Brand<br />Evolution
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Great brands are not just designed; they are meticulously engineered. 
                Our strategic framework aligns visual identity, messaging, and market positioning 
                to create comprehensive ecosystems that drive long-term business value.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We dive deep into consumer psychology and competitive landscapes to uncover 
                unique brand truths, translating them into scalable, impactful design solutions 
                that resonate across every touchpoint.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Data-backed positioning frameworks
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Scalable design systems
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#0b5c92] rounded-full mr-3 flex-shrink-0"></span>
                  Cross-channel brand deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-[#f2f5f9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[#0b5c92] font-semibold mb-2 uppercase tracking-wider text-xs">Project Updates</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What's Happening</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0b5c92] font-medium hover:text-[#094a75]">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white group cursor-pointer flex flex-col h-full rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                alt="Corporate Office" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0b5c92] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b5c92] mr-2"></span> Case Study
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5c92] transition-colors">Lumina Capital Rebrand</h3>
                <p className="text-slate-600 text-sm flex-1">Redefining trust and modern wealth management through a comprehensive identity overhaul.</p>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white group cursor-pointer flex flex-col h-full rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                alt="Stationery Mockup" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0b5c92] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b5c92] mr-2"></span> Brand Launch
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5c92] transition-colors">Aether Dynamics</h3>
                <p className="text-slate-600 text-sm flex-1">Translating complex aerospace innovation into an approachable, forward-looking brand system.</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white group cursor-pointer flex flex-col h-full rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                alt="Mobile App" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0b5c92] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b5c92] mr-2"></span> Digital Rollout
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5c92] transition-colors">Nexus Platform</h3>
                <p className="text-slate-600 text-sm flex-1">Unifying user experience and visual direction for a rapidly scaling SaaS ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities Grid */}
      <section className="bg-white py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#0b5c92] font-semibold mb-2 uppercase tracking-wider text-xs">Services & Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Core Specializations</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-left group cursor-default">
              <div className="mb-5 text-[#0b5c92]">
                <Palette className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Visual Identity Systems</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive logo, typography, and color palette development ensuring cohesive brand representation across all media.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="text-left group cursor-default">
              <div className="mb-5 text-[#0b5c92]">
                <Target className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Brand Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Market positioning, brand voice formulation, and audience targeting to establish a clear competitive advantage.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="text-left group cursor-default">
              <div className="mb-5 text-[#0b5c92]">
                <Monitor className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Digital Workspaces</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Translating brand systems into intuitive, accessible user interfaces and digital product experiences.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="text-left group cursor-default">
              <div className="mb-5 text-[#0b5c92]">
                <BookOpen className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Brand Guidelines</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Extensive documentation and asset libraries to maintain consistency as your internal teams and partners scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expert Section */}
      <section className="bg-[#f8f9fc] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden aspect-[4/3] rounded-sm shadow-md max-h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Portrait" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="lg:pl-8">
              <p className="text-[#0b5c92] font-semibold mb-2 uppercase tracking-wider text-xs">Leadership</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Expert Stewardship
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">
                "True brand longevity requires a delicate balance of bold creative vision and disciplined, 
                data-driven strategy. Our goal is to build identities that don't just stand out, but stand the test of time."
              </p>
              
              <div>
                <p className="text-slate-900 font-bold text-lg">Dylan Shaw</p>
                <p className="text-[#0b5c92] font-medium text-sm">Managing Partner & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer & Contact Form Section */}
      <section className="bg-[#161e2c] py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left side text */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Evolve?</h2>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-md">
                Connect with our strategy team to discuss how we can elevate your brand's presence, accelerate growth, and drive enterprise value.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-5 h-5 text-[#4da6ff] mr-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-5 h-5 text-[#4da6ff] mr-4 flex-shrink-0" />
                  <a href="mailto:hello@brandagency.com" className="hover:text-white transition-colors">hello@brandagency.com</a>
                </div>
                <div className="flex items-start text-slate-300 mt-4">
                  <MapPin className="w-5 h-5 text-[#4da6ff] mr-4 flex-shrink-0 mt-1" />
                  <span>400 Market Street, Suite 250<br />San Francisco, CA 94111</span>
                </div>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="bg-white rounded-sm p-8 sm:p-10 shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="focus" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Area of Focus</label>
                  <select 
                    id="focus"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="rebrand">Comprehensive Rebrand</option>
                    <option value="identity">Visual Identity System</option>
                    <option value="strategy">Brand Strategy</option>
                    <option value="digital">Digital Product Design</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={3}
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0b5c92] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-400"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-[#0b5c92] hover:bg-[#094a75] text-white font-medium py-3.5 rounded-sm transition-colors shadow-sm"
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

export default BrandLandingPage;