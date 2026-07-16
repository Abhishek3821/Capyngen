
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CRMSolutionsPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          CRM & ERP SOLUTIONS
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Streamlining Operations with <br /> Custom CRM
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
          Transform your operational efficiency with intelligent customer management solutions that centralize data, automate workflows, and drive unprecedented business growth.
        </p>
        <button className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm tracking-wide">
          EXPLORE SERVICES <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              About CRM & ERP Solutions
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Enterprises are drowning in fragmented data scattered across legacy platforms. We build and deploy advanced CRM and ERP systems that unify operations, enabling data-driven decision making at scale. We help organizations transition from fragile, rigid legacy systems to intelligent, scalable architectures that boost efficiency, enhance collaboration, and elevate customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#e6ebf5] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 relative inline-block">
                What's Happening
                <div className="absolute left-0 -bottom-2 w-12 h-1 bg-[#0056b3]"></div>
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a1526] flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent"></div>
                  {/* Abstract dashboard placeholder */}
                  <div className="absolute w-3/4 h-3/4 border border-blue-500/20 rounded-md grid grid-cols-2 gap-2 p-2">
                    <div className="bg-blue-500/10 rounded-sm"></div>
                    <div className="bg-blue-500/10 rounded-sm"></div>
                    <div className="col-span-2 bg-blue-500/10 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block text-blue-500 text-[9px] font-bold uppercase tracking-wider mb-3">
                  INSIGHT
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Accelerating B2B Sales for Digital Commerce in Asia Pacific
                </h3>
                <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100 via-amber-50 to-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Abstract gold curves placeholder */}
                   <div className="w-full h-16 bg-amber-400/20 skew-y-6"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block text-blue-500 text-[9px] font-bold uppercase tracking-wider mb-3">
                  NEWS
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Causality Named Leader in 2025 Magic Quadrant for Consulting Firms
                </h3>
                <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                   {/* Abstract blue swirl placeholder */}
                   <div className="w-32 h-32 rounded-full border-4 border-blue-100 border-t-blue-400 animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute w-24 h-24 rounded-full border-4 border-blue-50 border-b-blue-300"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block text-blue-500 text-[9px] font-bold uppercase tracking-wider mb-3">
                  CASE STUDY
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Global Retailer Transforms Supply Chain Planning on Salesforce
                </h3>
                <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Offerings</h2>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed">
              We help enterprises pursue a path of smart digital transformation through comprehensive CRM and ERP solutions.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="border border-[#0056b3] bg-white px-6 py-4 shadow-sm w-full font-bold text-sm text-slate-900">
                CRM OFFERINGS
              </div>
              <div className="px-6 py-4 w-full text-slate-500 font-bold text-sm hover:text-slate-900 transition-colors cursor-pointer">
                INDUSTRY SOLUTIONS
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-12">
              <div className="border-t border-slate-200 pt-4">
                <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">01</span>
                <h5 className="font-bold text-slate-900 text-base">Salesforce</h5>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">02</span>
                <h5 className="font-bold text-slate-900 text-base">SAP S/4HANA</h5>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">03</span>
                <h5 className="font-bold text-slate-900 text-base">HubSpot Solutions</h5>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">04</span>
                <h5 className="font-bold text-slate-900 text-base">Microsoft Dynamics</h5>
              </div>
            </div>

            {/* Bottom Image Placeholder */}
            <div className="w-full h-48 bg-slate-200 relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-300"></div>
               {/* Abstract white/glass structure visualization */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-200/80 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#60a5fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Leadership</h2>
            <p className="text-blue-100 text-sm">Meet the experts driving our CRM practice.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">Paul Dillon</h4>
                <p className="text-blue-100 text-[10px] mb-3 uppercase tracking-wide">Managing Director, CRM Practice</p>
                <div className="flex items-center text-[10px] font-bold text-[#0a1526] gap-1 cursor-pointer hover:text-white transition-colors">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">Sarah Thomas</h4>
                <p className="text-blue-100 text-[10px] mb-3 uppercase tracking-wide">Senior Partner, ERP & Systems</p>
                <div className="flex items-center text-[10px] font-bold text-[#0a1526] gap-1 cursor-pointer hover:text-white transition-colors">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">Rajesh Menon</h4>
                <p className="text-blue-100 text-[10px] mb-3 uppercase tracking-wide">Head of Salesforce Innovation</p>
                <div className="flex items-center text-[10px] font-bold text-[#0a1526] gap-1 cursor-pointer hover:text-white transition-colors">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white leading-tight mb-1">Anmol Jain</h4>
                <p className="text-blue-100 text-[10px] mb-3 uppercase tracking-wide">VP, Digital Transformation</p>
                <div className="flex items-center text-[10px] font-bold text-[#0a1526] gap-1 cursor-pointer hover:text-white transition-colors">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a1526] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request for services</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Find out how our tailored CRM solutions can help your organization simplify data complexity, optimize workflows, and build a unified customer view.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email *</label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Company *</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded-none cursor-pointer" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#0056b3] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider uppercase">
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

export default CRMSolutionsPage;