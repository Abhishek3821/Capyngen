
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const DevOpsPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          DEVOPS SERVICES
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Accelerating Delivery with <br /> DevOps
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Modernizing IT delivery through robust automation, continuous CI/CD engineering, and scalable infrastructure transformation.
        </p>
        <button className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm tracking-wide">
          EXPLORE DEVOPS <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* Empowering the Autonomous Enterprise Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Empowering the <br className="hidden md:block" /> Autonomous Enterprise
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-6">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              To compete in today's rapid market landscape, software delivery needs to be seamless, secure, and fast. We help enterprises break down silos, bridge development and operations, and implement intelligent automation across the entire lifecycle.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our DevOps practice brings together culture, practices, and tools to increase your organization's ability to deliver applications and services at high velocity, evolving and improving products at a faster pace than organizations using traditional software development processes.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#2563eb] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What's Happening</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-transparent border border-blue-400 hover:bg-blue-600 transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white text-[#2563eb] hover:bg-slate-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-slate-200 to-slate-300 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-blue-900/10 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-900/20 rounded-full"></div>
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[#2563eb] text-[9px] font-bold uppercase tracking-wider mb-3">CASE STUDY</span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#2563eb] transition-colors leading-snug flex-1">
                  Scaling CI/CD for Global Banking Infrastructures
                </h3>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100 via-slate-200 to-slate-300 opacity-80"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-12 bg-amber-600/10 skew-y-12"></div>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[#2563eb] text-[9px] font-bold uppercase tracking-wider mb-3">NEWS</span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#2563eb] transition-colors leading-snug flex-1">
                  Causality Named Leader in Gartner Magic Quadrant for Cloud DevOps
                </h3>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,_var(--tw-gradient-stops))] from-blue-200 via-slate-200 to-slate-300 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full h-full border border-blue-900/10 bg-blue-900/5 grid grid-cols-4 gap-1 p-2">
                       {Array.from({length: 16}).map((_, i) => <div key={i} className="bg-blue-900/10 rounded-sm"></div>)}
                    </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[#2563eb] text-[9px] font-bold uppercase tracking-wider mb-3">CASE STUDY</span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#2563eb] transition-colors leading-snug flex-1">
                  Reducing Deployment Lead Time by 75% for Logistics Giant
                </h3>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our DevOps Offerings Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
            
            {/* Left Column (Tabs) */}
            <div className="lg:w-2/5 p-10 md:p-14 border-r border-slate-100 bg-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our DevOps <br/> Offerings</h2>
              <p className="text-slate-500 mb-12 text-sm leading-relaxed max-w-sm">
                A comprehensive suite of cloud-native and DevOps capabilities to accelerate your digital transformation journey.
              </p>

              <div className="flex flex-col mb-16">
                <div className="bg-[#0056b3] text-white px-6 py-4 w-full max-w-md cursor-pointer flex justify-between items-center shadow-md">
                  <span className="font-bold text-sm tracking-wide">Select Offerings</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="px-6 py-4 w-full max-w-md cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100 border-t-0">
                  <span className="text-slate-500 font-bold text-sm tracking-wide">Industry Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Column (Grid) */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 w-full">
                {/* Offering 1 */}
                <div className="border-t border-slate-200 pt-4">
                  <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">01.</span>
                  <h5 className="font-bold text-slate-900 text-base mb-3">Infrastructure as Code</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Automate provisioning and configuration to manage infrastructure consistently and reliably.
                  </p>
                </div>
                {/* Offering 2 */}
                <div className="border-t border-slate-200 pt-4">
                  <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">02.</span>
                  <h5 className="font-bold text-slate-900 text-base mb-3">CI/CD Pipelines</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Build, test, and deploy applications rapidly and securely with automated release management.
                  </p>
                </div>
                {/* Offering 3 */}
                <div className="border-t border-slate-200 pt-4">
                  <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">03.</span>
                  <h5 className="font-bold text-slate-900 text-base mb-3">Cloud Security (DevSecOps)</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Integrate security protocols natively into every phase of the software delivery lifecycle.
                  </p>
                </div>
                {/* Offering 4 */}
                <div className="border-t border-slate-200 pt-4">
                  <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">04.</span>
                  <h5 className="font-bold text-slate-900 text-base mb-3">Monitoring & Observability</h5>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Gain deep real-time insights into system performance to resolve issues proactively.
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
            <p className="text-slate-500 text-sm">Meet the experts driving our DevOps practices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">David Sterling</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Global Head of Cloud & DevOps</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Sarah Chen</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Chief Automation Architect</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Marcus Thorne</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Managing Partner, DevSecOps</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Alex Rodriguez</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">VP, Site Reliability Engineering</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
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
          
          <div className="lg:w-5/12 text-white pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Request for <br/> DevOps Services</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Discover how our DevOps solutions can help your organization streamline development, enhance security, and accelerate time-to-market. Connect with our engineering experts to start your transformation.
            </p>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="bg-white p-8 md:p-12 shadow-2xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-slate-300 pb-1">
                    <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">First Name *</label>
                    <input type="text" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                  </div>
                  <div className="border-b border-slate-300 pb-1">
                    <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Last Name *</label>
                    <input type="text" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-slate-300 pb-1">
                    <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Email *</label>
                    <input type="email" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                  </div>
                  <div className="border-b border-slate-300 pb-1">
                    <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Company *</label>
                    <input type="text" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                  </div>
                </div>

                <div className="border-b border-slate-300 pb-1">
                  <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Message</label>
                  <textarea rows={2} className="w-full bg-transparent focus:outline-none text-sm text-slate-900 resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 border-slate-300 rounded-sm cursor-pointer" />
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#0056b3] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-10 transition-colors text-xs tracking-widest uppercase">
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default DevOpsPage;