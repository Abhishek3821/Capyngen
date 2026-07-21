import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  Phone
} from 'lucide-react';

const EcommerceLandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqsData = [
    {
      question: "What is an E-commerce solution service??",
      answer: "E-commerce solutions sell products online, through a website, app, or marketplace, turning your physical store into your online e-commerce website development company using smart, AI-based tools."
    },
    {
      question: "How involved will we be during the project?",
      answer: "As much as you like. We check in often and want your input the whole time, not just at the end."
    },
    {
      question: "How long does an e-commerce website design project usually take?",
      answer: "Depends on the size. Small stores take a few weeks; big ones take a few months. Either way, we split it into steps so you see progress early."
    },
    {
      question: "What is a multi-vendor marketplace, and can you build one?",
      answer: "It's one ecommerce platform development where many sellers list their products. Yes, we build these to be easy to run and simple to grow."
    },
    {
      question: "Does your IT agency work with B2B e-commerce?",
      answer: "Yes. We also provide service in B2B portals with things like bulk pricing, contracts, and approval steps built in."
    },
    {
      question: "What industries does Capyngen's commerce team typically work with?",
      answer: "Everything from B2B buyers to everyday B2C Ecommerce Solutions brands, and a lot in between with Ecommerce development company."
    },
    {
      question: "What e-commerce services does Capyngen offer?",
      answer: "At Capyngen, we offer services in marketplaces, set up payments, make B2B portals, and connect it all with omnichannel tools."
    },
    {
      question: "Does Capyngen offer custom online store development?",
      answer: "Yes, always. Every business is different from each other, and that’s why Capyngen offers custom E-commerce service development."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="inline-block bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6 border border-blue-100">
              Digital Commerce
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Remodelling<br />Virtual<br />Commerce Experiences
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Providing worldwide Ecommerce software development for shopkeepers with fast-track, smart AI planning that connects and fills the difference between physical and online storefronts.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0b5a93] hover:bg-[#094876] text-white px-8 py-3.5 rounded font-medium transition-colors shadow-sm">
                Explore Services & Solutions
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
                Rising Commerce for<br />the Future Generation
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Capyngen does not just build storefronts but also builds the systems that hold your entire retail business together. Our commerce solutions are made to handle enterprise-level pressure, staying live 99.99% of the time even when traffic spikes during your busiest sales periods. Along with that, we also use data modeling to make each and every customer's journey feel personalized.
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0b5a93] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">At Capyngen, we also use cloud-native technology and headless architecture to provide your business the flexibility it needs in a market.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0b5a93] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Whether you are running B2B industrial supply management or a direct-to-consumer brand, our approach combines sharp technical execution with real retail thinking.</span>
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
                  <p className="font-semibold text-sm">Enterprise-level pressure</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#eef3fb] p-6 rounded-xl shadow-sm h-32 flex flex-col justify-center border border-blue-50">
                  <BarChart3 className="w-6 h-6 mb-3 text-[#0b5a93]" />
                  <p className="font-semibold text-sm text-[#0b5a93]">Personalized Customer Journey</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">What's Happening?</h2>
              <p className="text-slate-600 max-w-2xl">
                The newest overview in retail high-end tech and E-commerce.
              </p>
            </div>
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
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Report</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  The Artificial Shift Toward Resilient Supply Chains
                </h3>
                <p className="text-[#0b5a93] font-medium text-sm mt-auto flex items-center">
                  View Report <ArrowRight className="ml-1 w-4 h-4" />
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
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Award</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  Capyngen Ranks in Top Retail Tech Consultants for 2024
                </h3>
                <p className="text-[#0b5a93] font-medium text-sm mt-auto flex items-center">
                  View Award <ArrowRight className="ml-1 w-4 h-4" />
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
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Case Study</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  Global Shopkeepers' Growth by 40% with multichannel
                </h3>
                <p className="text-[#0b5a93] font-medium text-sm mt-auto flex items-center">
                  View Case <ArrowRight className="ml-1 w-4 h-4" />
                </p>
              </div>
            </div>
            
            {/* Article 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  alt="Data Streams" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Report</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  Why Headless Commerce Is Becoming the Retail Standard
                </h3>
                <p className="text-[#0b5a93] font-medium text-sm mt-auto flex items-center">
                  View Report <ArrowRight className="ml-1 w-4 h-4" />
                </p>
              </div>
            </div>
            
            {/* Article 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                  alt="Data Streams" 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0b5a93] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Case Study</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b5a93] transition-colors leading-tight">
                  B2B Distributor Cut Order Errors by 60% with Custom Portals
                </h3>
                <p className="text-[#0b5a93] font-medium text-sm mt-auto flex items-center">
                  View Case <ArrowRight className="ml-1 w-4 h-4" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specializations Grid 1: What We Offer? */}
      <section className="bg-[#eef3fb] py-16 border-y border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What We Offer?</h2>
            <p className="text-slate-600 font-medium text-lg">
              E-Commerce Solutions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Marketplace Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building multi-shop platforms that enhance product scaling faster and diverse revenue and are very easy to manage.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Payment Combination</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building secure, global payment gateways that support multiple currencies, crypto, and local transaction processes.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">B2B Ecommerce Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom E-commerce development with volume-based pricing, contract management, and clear approval workflows for global teams.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Multi-channel Structure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Delivering inventory, customer data, and marketing together across every physical and digital touchpoint for one brand experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid 2: Functional Strategy */}
      <section className="bg-[#f8f9fc] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Functional Strategy</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Process Enhancement</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Simplifying end-to-end functions with your team, ensuring less time on manual work and more time on growth.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Data-Driven Decision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Applying real-time data and dashboards to navigate inventory, pricing, and seller decisions.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Adoptable Infrastructure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Providing customized systems that grow with your business, so expanding up does not mean starting over.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Risk & Compliance Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Functioning secure and compliant management globally, so you can expand without unexpected setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid 3: Marketplace Development */}
      <section className="bg-[#eef3fb] py-16 lg:py-24 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Marketplace Development</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Multiple Vendor Platform Layout</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serving e-commerce development services that support multiple sellers, product catalogs, and vendor onboarding.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Order & Inventory Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Easily manage your stock levels, order tracking, and accuracy across every vendor on the platform.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Explorer and Discover Upgradation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Simplifying the system for buyers to find the right products smoothly, with smart search, filters, and suggestion boxes.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#0b5a93]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Digital Platform Analytics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Delivering clear visibility into sales, performance, and consumers' behavior to guide better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expert / Leader Section -> Why Choose Capyngen? */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Capyngen?
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We serve our client custom ecommerce websites development services, supporting them on a global platform.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Custom E-commerce Solution</h3>
                  <p className="text-sm text-slate-600 mb-2">Online stores customized to your business.</p>
                  {/* <span className="text-xs font-semibold text-[#0b5a93] uppercase tracking-wider cursor-pointer hover:underline">Know More</span> */}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scalable Platform Architecture</h3>
                  <p className="text-sm text-slate-600 mb-2">Manage huge amounts of traffic and orders.</p>
                  {/* <span className="text-xs font-semibold text-[#0b5a93] uppercase tracking-wider cursor-pointer hover:underline">Know More</span> */}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden bg-[#f8f9fc] border border-slate-100 shadow-sm p-6 flex flex-col justify-center h-56">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Payment and System Integrations</h3>
                <p className="text-sm text-slate-600 mb-4">Connect your store with payment gateways.</p>
                {/* <span className="text-[#0b5a93] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:underline">Know More</span> */}
              </div>
              
              <div className="rounded-xl overflow-hidden bg-[#eef3fb] border border-blue-50 shadow-sm sm:translate-y-8 p-6 flex flex-col justify-center h-56">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Global E-commerce Solutions</h3>
                <p className="text-sm text-slate-600 mb-4">Manage operations across the world.</p>
                {/* <span className="text-[#0b5a93] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:underline">Know More</span> */}
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
                Apply For Services
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
                Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas and e-commerce solution services with post-launch solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-300">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-[#4299e1]" />
                  </div>
                  <div>
                    <span className="block font-medium">Got any specific question?</span>
                    <span className="block text-sm text-slate-400">Book a 15-minute chat with one of our experts.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-2xl relative text-slate-900">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company *</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full p-4 rounded bg-[#f8f9fc] border border-slate-100 focus:border-[#0b5a93] outline-none transition-colors text-slate-900 resize-none placeholder-slate-400 mt-1"
                  ></textarea>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-[#0b5a93] rounded border-slate-300 focus:ring-[#0b5a93]" />
                    Sign up to get Capyngen's mobile insights and marketing updates.
                  </label>
                  <label className="flex items-center text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-[#0b5a93] rounded border-slate-300 focus:ring-[#0b5a93]" required />
                    I agree to the Privacy Statement.*
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0b5a93] hover:bg-[#094876] text-white font-medium py-3.5 rounded transition-colors"
                >
                  Confirm
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">FAQs</h2>
          </div>
          
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div key={index} className="bg-[#f8f9fc] rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                  <span className="text-[#0b5a93] text-2xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed">
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

export default EcommerceLandingPage;