
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WebDevelopmentPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          WEB ENGINEERING
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Future-Ready Web Development, Accelerated by Intelligence
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          We engineer high-performance digital experiences that scale globally, driving business growth and engaging users across all devices.
        </p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 transition-colors flex items-center gap-2">
          Explore Services <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              About Web Engineering Services
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-slate-600 text-lg leading-relaxed">
              We empower global enterprises to stay ahead of the digital curve by engineering robust, secure, and scalable web platforms. Our multidisciplinary teams leverage cutting-edge frameworks, cloud-native architectures, and data-driven insights to transform complex business challenges into intuitive, high-performance web solutions that deliver measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-slate-100 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What's Happening</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300 via-slate-300 to-slate-400 opacity-60"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4">
                  TECH
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  Modernizing Legacy Architectures for Global Scale
                </h3>
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-200 via-slate-300 to-slate-400 opacity-60"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-amber-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4">
                  WEB
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors">
                  Designing Resilient Cloud-Native Web Platforms
                </h3>
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,_var(--tw-gradient-stops))] from-purple-400 via-slate-300 to-slate-400 opacity-60"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-slate-800 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4">
                  ARTICLE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors">
                  Is Your Virtual Environment Web 3.0 Ready?
                </h3>
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors gap-2">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section (Updated to match image_3196db.png) */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Left Column */}
        <div className="lg:w-1/2 bg-[#f4f6f8] p-10 md:p-16 lg:p-24 flex justify-end">
          <div className="max-w-xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1526] mb-4">
              Our Offerings
            </h2>
            <p className="text-slate-500 mb-12 text-lg">
              We help enterprises pursue a path of smart digital transformation through robust web engineering.
            </p>

            {/* Tabs */}
            <div className="flex flex-col mb-16">
              <div className="bg-white border-l-4 border-[#0056b3] px-6 py-5 shadow-sm w-full max-w-md cursor-pointer">
                <span className="text-[#0056b3] font-bold text-sm tracking-wide">Web Offerings</span>
              </div>
              <div className="px-6 py-5 w-full max-w-md cursor-pointer hover:bg-slate-200/50 transition-colors">
                <span className="text-slate-500 font-bold text-sm tracking-wide">Industry Solutions</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-lg">
              <div className="border-b border-slate-300 pb-3">
                <span className="text-[#0056b3] font-bold text-base block mb-1">01.</span>
                <h5 className="font-bold text-[#0a1526]">Front-end Engineering</h5>
              </div>
              <div className="border-b border-slate-300 pb-3">
                <span className="text-[#0056b3] font-bold text-base block mb-1">02.</span>
                <h5 className="font-bold text-[#0a1526]">Scalable Back-ends</h5>
              </div>
              <div className="border-b border-slate-300 pb-3">
                <span className="text-[#0056b3] font-bold text-base block mb-1">03.</span>
                <h5 className="font-bold text-[#0a1526]">Full-stack Agility</h5>
              </div>
              <div className="border-b border-slate-300 pb-3">
                <span className="text-[#0056b3] font-bold text-base block mb-1">04.</span>
                <h5 className="font-bold text-[#0a1526]">Progressive Web Apps</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 bg-[#0a1526] min-h-[400px] lg:min-h-auto">
          {/* Dark Blue Placeholder Box matching the design */}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#53a6ff] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Leadership</h2>
            <p className="text-slate-800">Meet the experts driving our web engineering practice.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="bg-white group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">Paul Dillon</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide">Global Head of Web Engineering</p>
                <div className="flex items-center text-xs font-bold text-slate-900 gap-1 cursor-pointer hover:text-blue-600">
                  Bio <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">Neil Thomas</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide">Director, Front-End Services</p>
                <div className="flex items-center text-xs font-bold text-slate-900 gap-1 cursor-pointer hover:text-blue-600">
                  Bio <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">Rajesh Menon</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide">Chief Platform Architect</p>
                <div className="flex items-center text-xs font-bold text-slate-900 gap-1 cursor-pointer hover:text-blue-600">
                  Bio <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white group">
              <div className="h-64 bg-slate-300 w-full overflow-hidden">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">Anmol Jain</h4>
                <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide">VP, Full-Stack Operations</p>
                <div className="flex items-center text-xs font-bold text-slate-900 gap-1 cursor-pointer hover:text-blue-600">
                  Bio <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request for services</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
              Find out how our comprehensive web engineering solutions can help you accelerate your digital transformation and stay ahead of the competition.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-8 text-sm font-bold text-slate-800 border-b border-slate-200 pb-4">
                <span className="cursor-pointer text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[17px]">Request for services</span>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Email *</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Company *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Message</label>
                  <textarea rows={4} placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 focus:ring-slate-500 rounded-none cursor-pointer" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-blue-600 underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-sm">
                  SUBMIT →
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default WebDevelopmentPage;