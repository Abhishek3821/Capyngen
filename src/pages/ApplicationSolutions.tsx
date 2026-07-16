
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ApplicationSolutionsPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          APPLICATION SERVICES
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Comprehensive Enterprise <br className="hidden md:block" />
          Application Solutions
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Architecting scalable, resilient, and secure applications to drive digital transformation across global IT ecosystems.
        </p>
        <button className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm tracking-wide">
          EXPLORE CAPABILITIES <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* Modernizing Legacy Systems Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Modernizing Legacy Systems
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Technical debt is a hidden tax on enterprise agility. We help you bridge the gap between legacy and modern architecture, ensuring optimal performance, security, and scalability. Our application modernization strategy is designed to drive value and reduce total cost of ownership while maximizing business agility.
            </p>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="w-full aspect-[16/9] bg-slate-900 relative overflow-hidden shadow-2xl">
              {/* Placeholder for the blue glowing circuit board image */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-[#0a1526] to-[#0a1526]"></div>
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#2563eb] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What's Happening</h2>
              <p className="text-blue-100 text-xs font-bold tracking-widest uppercase">Latest Insights & Thought Leadership</p>
            </div>
            <div className="flex gap-2">
              {/* Carousel Dots */}
              <div className="flex gap-1.5 pb-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-slate-200 to-slate-300 opacity-80"></div>
                <div className="absolute top-4 left-4 bg-[#0056b3] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">ARTICLE</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2563eb] transition-colors leading-snug">
                  The Rise of Composable Architecture
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                  How modular ecosystems are redefining the modern enterprise application stack.
                </p>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200 via-slate-200 to-slate-300 opacity-80"></div>
                <div className="absolute top-4 left-4 bg-[#0056b3] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">CASE STUDY</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2563eb] transition-colors leading-snug">
                  SaaS Scaling for Global Logistics
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                  Architecting high-performance SaaS platforms for supply chain visibility and control.
                </p>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,_var(--tw-gradient-stops))] from-purple-200 via-slate-200 to-slate-300 opacity-80"></div>
                <div className="absolute top-4 left-4 bg-[#0056b3] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">INSIGHT</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2563eb] transition-colors leading-snug">
                  Microservices: Beyond the Hype
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                  Understanding the true cost and benefits of transitioning to a microservices architecture.
                </p>
                <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Capability 1: Large Top Left */}
            <div className="md:col-span-2 bg-white p-10 shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow cursor-pointer">
              <div>
                <span className="text-[#2563eb] font-bold text-[10px] tracking-wider uppercase mb-3 block">CORE OFFERING</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">App Modernization</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                  Transform legacy monoliths into agile, cloud-native architectures optimized for scalability, resilience, and accelerated feature delivery.
                </p>
              </div>
              <div className="mt-12 flex justify-between items-end border-b border-slate-200 pb-2 w-full max-w-sm">
                <span className="text-[10px] font-bold text-slate-400">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#2563eb] transition-colors" />
              </div>
            </div>

            {/* Capability 2: Small Top Right */}
            <div className="md:col-span-1 bg-slate-100 p-10 flex flex-col justify-between group hover:bg-slate-200 transition-colors cursor-pointer">
              <div>
                <span className="text-[#2563eb] font-bold text-[10px] tracking-wider uppercase mb-3 block">INTEGRATION</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">API Integration</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Building robust connectivity layers to synchronize data and logic across disparate systems.
                </p>
              </div>
              {/* Abstract Icon Placeholder */}
              <div className="mt-8 self-start">
                 <div className="w-8 h-8 border-2 border-[#2563eb]/20 rounded-md"></div>
              </div>
            </div>

            {/* Capability 3: Small Bottom Left (Dark) */}
            <div className="md:col-span-1 bg-[#0a1526] p-10 flex flex-col justify-between group hover:bg-slate-800 transition-colors cursor-pointer text-white">
              <div>
                <span className="text-blue-400 font-bold text-[10px] tracking-wider uppercase mb-3 block">CLOUD NATIVE</span>
                <h3 className="text-xl font-bold mb-4">SaaS Development</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Architecting secure, multi-tenant platforms engineered for global scale and reliability.
                </p>
              </div>
              {/* Abstract Icon Placeholder */}
              <div className="mt-8 self-start">
                 <div className="w-8 h-8 border border-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                 </div>
              </div>
            </div>

            {/* Capability 4: Large Bottom Right */}
            <div className="md:col-span-2 bg-white p-10 shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[#2563eb] font-bold text-[10px] tracking-wider uppercase mb-3 block">ARCHITECTURE</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Microservices</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                  Decoupling complex applications into independent, scalable services to reduce deployment risk and accelerate iteration cycles.
                </p>
              </div>
              <div className="mt-12 flex justify-between items-end border-b border-slate-200 pb-2 w-full max-w-sm relative z-10">
                <span className="text-[10px] font-bold text-slate-400">EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#2563eb] transition-colors" />
              </div>
              {/* Decorative square element */}
              <div className="absolute bottom-6 right-6 w-24 h-24 border border-slate-100 opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Expert Leadership Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Expert Leadership</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Paul Dillon</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Global Head, App Dev</p>
                <div className="flex items-center text-[10px] font-bold text-[#2563eb] gap-1 cursor-pointer">
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
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Neil Thomas</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Director, Cloud Apps</p>
                <div className="flex items-center text-[10px] font-bold text-[#2563eb] gap-1 cursor-pointer">
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
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Rajesh Menon</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">Chief Architect</p>
                <div className="flex items-center text-[10px] font-bold text-[#2563eb] gap-1 cursor-pointer">
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
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Anmol Jain</h4>
                <p className="text-slate-500 text-[10px] mb-3 uppercase tracking-wide">VP, SaaS Platforms</p>
                <div className="flex items-center text-[10px] font-bold text-[#2563eb] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#050b14] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* Circular abstract lines simulation */}
          <div className="absolute -left-40 -top-40 w-[600px] h-[600px] border-[1px] border-blue-500/10 rounded-full"></div>
          <div className="absolute -left-20 -top-20 w-[500px] h-[500px] border-[1px] border-blue-400/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request for Services</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
              Ready to modernize your application ecosystem? Our consultants are prepared to assess your current IT landscape and architect a modernization roadmap tailored to your strategic goals.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                <span className="text-sm font-medium text-slate-300">Global reach & scale</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                <span className="text-sm font-medium text-slate-300">Agile & DevOps driven</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                <span className="text-sm font-medium text-slate-300">ISO 27001 compliant</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 shadow-2xl">
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
                
                <div className="border-b border-slate-300 pb-1">
                  <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Email *</label>
                  <input type="email" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                </div>

                <div className="border-b border-slate-300 pb-1">
                  <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Company *</label>
                  <input type="text" className="w-full bg-transparent focus:outline-none text-sm text-slate-900" />
                </div>

                <div className="border-b border-slate-300 pb-1">
                  <label className="block text-[9px] font-bold text-slate-500 mb-1 uppercase tracking-wide">Message</label>
                  <textarea rows={2} className="w-full bg-transparent focus:outline-none text-sm text-slate-900 resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 border-slate-300 rounded-sm cursor-pointer" />
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#2563eb] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="w-full bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 transition-colors text-xs tracking-widest uppercase">
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

export default ApplicationSolutionsPage;