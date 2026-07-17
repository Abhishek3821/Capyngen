import React from 'react';
import { 
  ArrowRight, 
  Brain, 
  Layout, 
  Palette, 
  Pointer, 
  Search,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const UIUXLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="text-blue-700 font-semibold mb-4 uppercase tracking-wider text-sm">Digital Strategy</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Human-Centric<br />UI/UX Design
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We engineer user interfaces that transform interactions into a seamless blend of psychology and technology. Our design philosophy centers on making complex systems feel intuitive, accessible, and engaging.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 rounded font-medium transition-colors">
                Start a Project
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-700 px-8 py-3.5 rounded font-medium transition-colors">
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000" 
              alt="Abstract UI UX Concept" 
              className="w-full h-48 lg:h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 2. Mastering UX Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Mastering the User<br />Experience
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Exceptional design goes beyond aesthetics. It requires a deep understanding of cognitive load, accessibility standards, and behavioral psychology.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Strategic user journey alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Data-backed interaction models</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Heuristic evaluation and refinement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Comprehensive cognitive load balancing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#eef3fb] p-10 rounded-xl relative overflow-hidden">
              <Brain className="absolute top-6 right-6 w-24 h-24 text-blue-100 opacity-50" strokeWidth={1} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Strategic Design Thinking</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                We don't just build interfaces; we architect experiences. By anticipating user needs and removing friction points, we turn casual visitors into loyal advocates for your digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-white py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-700 font-semibold mb-2 uppercase tracking-wider text-sm">Blog</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What's Happening</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center text-blue-700 font-medium hover:text-blue-800">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                alt="Woman working on laptop" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">October 12, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">The Evolution of AI in Enterprise UX</h3>
                <p className="text-slate-600 text-sm flex-1">Exploring how generative AI is automating micro-interactions and reshaping expectations in B2B software.</p>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600" 
                alt="Tablet with wireframes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">October 05, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Accessibility First: A Global Standard</h3>
                <p className="text-slate-600 text-sm flex-1">Why inclusive design is no longer a checklist item, but a foundational requirement for modern applications.</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                alt="Charts and wireframes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">September 28, 2023</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Micro-interactions in Banking UX</h3>
                <p className="text-slate-600 text-sm flex-1">How subtle animations and feedback loops build trust and reduce anxiety in financial interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Offerings Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-700 font-semibold mb-2 uppercase tracking-wider text-sm">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Offerings</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Experience Strategy</h3>
              <p className="text-sm text-slate-600">Mapping the user journey from discovery to advocacy, ensuring every touchpoint drives value.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Visual Design</h3>
              <p className="text-sm text-slate-600">Crafting cohesive, accessible design systems that elevate your brand and establish trust instantly.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Pointer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Interaction Design</h3>
              <p className="text-sm text-slate-600">Designing intuitive flows and prototypes that guide users seamlessly toward their goals.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">User Research</h3>
              <p className="text-sm text-slate-600">Validating assumptions through qualitative and quantitative analysis to mitigate product risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expert Leadership Section */}
      <section className="bg-[#eef3fb] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Expert Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our strategy practice is guided by industry veterans who have shaped digital experiences at some of the world's most innovative companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                alt="Elena Vance" 
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Elena Vance</h3>
                <p className="text-blue-700 text-sm font-medium mb-2">Head of Product Design</p>
                <p className="text-slate-500 text-sm">15+ years managing enterprise design systems and leading global UX teams.</p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" 
                alt="Marcus Chen" 
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Marcus Chen</h3>
                <p className="text-blue-700 text-sm font-medium mb-2">Lead UX Researcher</p>
                <p className="text-slate-500 text-sm">Ph.D. in Cognitive Psychology. Expert in behavioral analytics and human-computer interaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer / Contact Form Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="lg:pr-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Let's Design the<br />Future Together</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Ready to elevate your digital presence? Connect with our design experts to discuss your project requirements and strategic goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0" />
                  <a href="mailto:hello@designagency.co" className="hover:text-blue-700 transition-colors">hello@designagency.co</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <MapPin className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                  <span>100 Innovation Avenue, Suite 400<br />San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-100">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Area of Interest</label>
                  <select 
                    id="interest"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="ui-design">UI/UX Design</option>
                    <option value="research">User Research</option>
                    <option value="audit">UX Audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="brief" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Brief</label>
                  <textarea 
                    id="brief"
                    rows={4}
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Tell us a bit about what you're building..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded transition-colors inline-block"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default UIUXLandingPage;