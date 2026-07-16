
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';

const AISolutionsPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[60vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 inline-block tracking-widest uppercase">
            AI & AUTOMATION
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-3xl leading-tight">
            Intelligent Automation <br className="hidden md:block" />
            & AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
            Accelerating enterprise value through data-driven AI architectures and cognitive business processing.
          </p>
          <button className="bg-[#0056b3] hover:bg-blue-800 text-white font-medium py-3 px-6 transition-colors flex items-center gap-2 w-max text-sm">
            EXPLORE OFFERINGS <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              About AI Consulting
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-slate-600 text-lg leading-relaxed">
              We empower global enterprises to navigate the complexities of artificial intelligence. Our teams of data scientists, machine learning engineers, and domain experts collaborate to build bespoke AI solutions that transform legacy operations into autonomous engines of growth. From generative models to predictive analytics, we help you harness the true power of your data for rapid, tangible business acceleration.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What's Happening</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-slate-300 to-slate-400 opacity-70"></div>
              </div>
              <div className="p-6">
                <span className="inline-block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                  CASE STUDY
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Accelerating AI Vision for Digital Commerce in EMEA
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-200 via-slate-300 to-slate-400 opacity-70"></div>
              </div>
              <div className="p-6">
                <span className="inline-block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                  NEWS
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Causality - Recognized as Global AI Leader for 2025
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,_var(--tw-gradient-stops))] from-purple-400 via-slate-300 to-slate-400 opacity-70"></div>
              </div>
              <div className="p-6">
                <span className="inline-block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                  ARTICLE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Driving Global Operations with Predictive Logistics
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="bg-gradient-to-b from-[#e3f2fd] to-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
            
            {/* Left Column (Tabs) */}
            <div className="lg:w-2/5 p-10 md:p-14 border-r border-slate-100 bg-white">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Offerings</h2>
              <p className="text-slate-500 mb-12 text-sm leading-relaxed max-w-sm">
                We help enterprises pursue a path of smart digital transformation through cognitive computing and advanced AI models.
              </p>

              <div className="flex flex-col space-y-2">
                <div className="border-l-4 border-[#0056b3] pl-4 py-2 cursor-pointer">
                  <span className="text-[#0056b3] font-bold text-sm tracking-wide">AI SOLUTIONS</span>
                </div>
                <div className="border-l-4 border-transparent pl-4 py-2 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="text-slate-500 font-bold text-sm tracking-wide">GENERATIVE AI & ML PLATFORMS</span>
                </div>
                <div className="border-l-4 border-transparent pl-4 py-2 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="text-slate-500 font-bold text-sm tracking-wide">ROBOTIC PROCESS AUTOMATION</span>
                </div>
              </div>
            </div>

            {/* Right Column (Grid) */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-[#fafbfc]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {/* Offering 1 */}
                <div>
                  <span className="text-[#0056b3] font-mono text-sm font-bold block mb-2">01</span>
                  <h5 className="font-bold text-slate-900 text-lg mb-2">Predictive Analytics</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Forecast trends and customer behaviors with data models that leverage your historical knowledge base.
                  </p>
                </div>
                {/* Offering 2 */}
                <div>
                  <span className="text-[#0056b3] font-mono text-sm font-bold block mb-2">02</span>
                  <h5 className="font-bold text-slate-900 text-lg mb-2">Natural Language Processing</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Extract meaning from text and speech to automate workflows, chatbots, and document handling.
                  </p>
                </div>
                {/* Offering 3 */}
                <div>
                  <span className="text-[#0056b3] font-mono text-sm font-bold block mb-2">03</span>
                  <h5 className="font-bold text-slate-900 text-lg mb-2">Computer Vision</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Train models to interpret visual data for quality control, security, and medical imaging.
                  </p>
                </div>
                {/* Offering 4 */}
                <div>
                  <span className="text-[#0056b3] font-mono text-sm font-bold block mb-2">04</span>
                  <h5 className="font-bold text-slate-900 text-lg mb-2">AI Strategy & Consulting</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Build a comprehensive roadmap for AI adoption that aligns with your specific operational goals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Leadership</h2>
            <p className="text-slate-500 text-sm">Meet the experts driving our AI and machine learning practices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Dr. Paul Dillon</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Global Head of AI Services</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Neil Thomas</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Managing Director, AI & ML Practice</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Rajesh Menon</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Chief Data Science Architect</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Anmol Jain</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">VP, Automation & Cloud AI</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#040f1c] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Abstract Background pattern simulation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0b2447] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request for services</h2>
            <p className="text-slate-300 text-sm mb-12 max-w-md leading-relaxed">
              Find out how our customized AI solutions can help your organization simplify data complexity, optimize workflows, and build autonomous systems that position you for future growth.
            </p>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Enquiry</p>
                <a href="mailto:ai.consulting@example.com" className="text-[#53a6ff] hover:text-blue-300 transition-colors text-sm">
                  ai.consulting@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 shadow-2xl rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Email *</label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Company *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 rounded-none cursor-pointer" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#0056b3] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default AISolutionsPage;