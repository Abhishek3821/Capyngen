import React from 'react';
import { 
  ArrowRight, 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  Mail,
  Phone
} from 'lucide-react';

const EcommerceLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="inline-block bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6 border border-blue-100">
              High-Performance Stores
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Optimized<br />Ecommerce<br />Experiences
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We design and develop high-converting digital storefronts that combine 
              seamless navigation, intuitive usability, and advanced architecture to 
              turn casual browsers into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0b5a93] hover:bg-[#094876] text-white px-8 py-3.5 rounded font-medium transition-colors shadow-sm">
                Start a Project
              </button>
              <button className="bg-transparent hover:bg-slate-50 text-[#0b5a93] border border-[#0b5a93] px-8 py-3.5 rounded font-medium transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Laptop showing analytics dashboard" 
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/50 flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-[#0b5a93]">+240%</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg. Conversion Increase</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">99.9%</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Platform Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Future of Commerce Section */}
      <section className="bg-white py-20 lg:py-28 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                The Future of Digital<br />Commerce
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Successful online selling requires more than just a shopping cart. We build 
                omnichannel platforms that integrate complex inventory systems, personalized 
                product recommendations, and frictionless checkout flows to maximize your revenue per visitor.
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0b5a93] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Headless commerce architecture for ultimate frontend flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0b5a93] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Bespoke UI/UX design tailored specifically to your buyer personas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0b5a93] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Deep integration with ERP, CRM, and fulfillment logistics</span>
                </li>
              </ul>
            </div>
            
            {/* Bento Box Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-sm h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400" 
                    alt="Mobile Shopping" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#0b5a93] p-6 rounded-xl shadow-sm text-white h-32 flex flex-col justify-center">
                  <ShoppingCart className="w-6 h-6 mb-3 opacity-80" />
                  <p className="font-semibold text-sm">Frictionless Checkout</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#eef3fb] p-6 rounded-xl shadow-sm h-32 flex flex-col justify-center border border-blue-50">
                  <BarChart3 className="w-6 h-6 mb-3 text-[#0b5a93]" />
                  <p className="font-semibold text-sm text-[#0b5a93]">Data-Driven Scaling</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
                    alt="Team Analytics Review" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-[#f8f9fc] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">What's Happening</h2>
              <p className="text-slate-600 max-w-2xl">
                Stay ahead of the curve with our insights on retail trends, platform updates, 
                and conversion optimization strategies.
              </p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0b5a93] font-medium hover:text-[#094876]">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600" 
                  alt="Headless Commerce Concept" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Technology</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  The Rise of Headless Architecture
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  How decoupling the frontend and backend is giving enterprise brands unprecedented speed and flexibility.
                </p>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" 
                  alt="Mobile Payments" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Optimization</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  Mobile-First Checkout Flow
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Designing payment gateways that reduce cart abandonment and streamline the purchase process on small screens.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Data Streams" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Analytics</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  Predictive Personalization
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Utilizing machine learning to display the most relevant products to users based on behavioral data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specializations Grid */}
      <section className="bg-[#eef3fb] py-16 lg:py-24 border-y border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Specializations</h2>
            <p className="text-slate-600">
              We provide end-to-end ecommerce solutions tailored to specific industries, 
              ensuring your platform is built for your unique market demands.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">B2C Retail Platforms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Immersive consumer experiences focused on brand storytelling, impulse purchases, and visual merchandising.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">B2B Wholesale Portals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complex pricing tiers, bulk ordering systems, and corporate account management designed for volume buyers.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Subscription Models</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recurring billing engines, flexible subscription management, and churn-reduction strategies.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mobile Commerce Apps</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Native and progressive web applications that deliver lightning-fast shopping experiences on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expert / Leader Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Guided by Industry<br />Experts
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our leadership team brings decades of experience building revenue-driving platforms 
                for both rapid-growth startups and established enterprise brands.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-4xl font-bold text-[#0b5a93] mb-1">20+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Collective Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#0b5a93] mb-1">$500M+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Revenue Processed Annually</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Profile 1 */}
              <div className="rounded-xl overflow-hidden bg-[#f8f9fc] border border-slate-100 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Sarah Jenkins" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">Sarah Jenkins</h3>
                  <p className="text-[#0b5a93] text-sm font-medium">Head of Ecommerce Strategy</p>
                </div>
              </div>
              
              {/* Profile 2 */}
              <div className="rounded-xl overflow-hidden bg-[#eef3fb] border border-blue-50 shadow-sm sm:translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                  alt="Elena Rodriguez" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">Elena Rodriguez</h3>
                  <p className="text-[#0b5a93] text-sm font-medium">Lead UX Architect</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Footer / Contact Form Section */}
      <section className="bg-[#1a202c] py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Scale Your<br />Digital Storefront?
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
                Connect with our solutions architects to discuss your platform requirements, 
                migration strategy, and growth goals. Let's build something remarkable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-[#4299e1]" />
                  </div>
                  <a href="mailto:hello@commerceagency.com" className="hover:text-white transition-colors">hello@commerceagency.com</a>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-[#4299e1]" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-2xl relative">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Service Needed</label>
                  <select 
                    id="interest"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="new-build">New Platform Build</option>
                    <option value="migration">Platform Migration</option>
                    <option value="optimization">CRO / Optimization</option>
                    <option value="other">Other Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    id="details"
                    rows={4}
                    className="w-full p-4 rounded bg-[#f8f9fc] border border-slate-100 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 resize-none placeholder-slate-400 mt-1"
                    placeholder="Tell us about your project goals and current challenges..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0b5a93] hover:bg-[#094876] text-white font-medium py-3.5 rounded transition-colors"
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

export default EcommerceLandingPage;