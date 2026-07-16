
import { Mail, Phone, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

const AppDevelopmentPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <div className="inline-block bg-slate-200 text-slate-800 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          INNOVATIVE
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Next-Gen Mobile App <br className="hidden md:block" />
          Solutions, Accelerated by AI
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Transform your ideas into powerful, scalable, and intelligent mobile applications designed to engage users and drive business growth.
        </p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors flex items-center gap-2">
          Start Your Project <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Feature / About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Pioneering digital products with unmatched performance and user experience.
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We blend cutting-edge technology with intuitive design to build mobile apps that not only meet today's demands but are ready for tomorrow's challenges. Our AI-driven approach ensures faster delivery and smarter features.
            </p>
            
            <div className="flex gap-12">
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">99%</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">250+</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Apps Launched</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Placeholder for the image in the design */}
            <div className="bg-slate-200 rounded-2xl w-full h-[400px] shadow-xl overflow-hidden relative">
                {/* Mockup visual representation */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                    <div className="w-48 h-96 bg-white rounded-3xl shadow-2xl border-8 border-slate-800 flex flex-col overflow-hidden">
                        <div className="w-full h-4 bg-slate-800 flex justify-center items-center rounded-b-xl mb-4">
                            <div className="w-12 h-1.5 bg-slate-900 rounded-full"></div>
                        </div>
                        <div className="flex-1 p-4 space-y-3">
                            <div className="w-full h-24 bg-blue-100 rounded-xl"></div>
                            <div className="w-3/4 h-4 bg-slate-200 rounded"></div>
                            <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="h-16 bg-slate-100 rounded-lg"></div>
                                <div className="h-16 bg-slate-100 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Process Section (Light Blue Background) */}
      <section className="bg-sky-200 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What we do best — App Dev</h2>
              <p className="text-slate-700 text-lg max-w-xl">Comprehensive mobile solutions tailored to your unique business needs.</p>
            </div>
            <button className="mt-6 md:mt-0 p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                {/* Abstract pattern placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">STRATEGY</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">AI-Powered Strategy & Consulting</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-amber-50 relative overflow-hidden flex items-center justify-center">
                 {/* Abstract pattern placeholder */}
                 <div className="w-full h-full opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">DESIGN</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Intuitive UI/UX Design & Prototyping</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-indigo-900 relative overflow-hidden flex items-center justify-center">
                  {/* Abstract pattern placeholder */}
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">DEVELOPMENT</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Robust Native & Cross-Platform Dev</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Features Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose us</h2>
            <p className="text-slate-600 mb-8">
              We don't just build apps; we build scalable businesses. Partner with us for reliable, high-performance mobile solutions.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">Agile Development</h4>
              </div>
              <p className="text-slate-600 ml-9">Iterative processes ensuring rapid delivery and flexibility to adapt to market changes.</p>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">Security First</h4>
              </div>
              <p className="text-slate-600 ml-9">Enterprise-grade security protocols integrated from day one to protect your user data.</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">Scalable Architecture</h4>
              </div>
              <p className="text-slate-600 ml-9">Built on modern tech stacks designed to grow seamlessly alongside your user base.</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">Post-Launch Support</h4>
              </div>
              <p className="text-slate-600 ml-9">Continuous monitoring, updates, and optimization to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Experts</h2>
            <p className="text-slate-600">Meet the visionaries behind our award-winning apps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">David Reynolds</h4>
              <p className="text-slate-500 mb-3 text-sm">Lead App Developer</p>
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 cursor-pointer transition">
                    <span className="text-xs font-bold text-slate-600">in</span>
                 </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">Sarah Jenkins</h4>
              <p className="text-slate-500 mb-3 text-sm">Head of UX/UI</p>
               <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 cursor-pointer transition">
                    <span className="text-xs font-bold text-slate-600">in</span>
                 </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">Marcus Chen</h4>
              <p className="text-slate-500 mb-3 text-sm">Product Strategist</p>
               <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 cursor-pointer transition">
                    <span className="text-xs font-bold text-slate-600">in</span>
                 </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                 {/* Image Placeholder */}
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">Elena Rostova</h4>
              <p className="text-slate-500 mb-3 text-sm">AI Integration Lead</p>
               <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 cursor-pointer transition">
                    <span className="text-xs font-bold text-slate-600">in</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section (Dark Background) */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Request an estimate</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-md">
              Ready to turn your vision into reality? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call us directly</p>
                  <p className="font-semibold text-lg">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email us</p>
                  <p className="font-semibold text-lg">hello@appdevco.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300" />
                  <p className="text-sm text-slate-500">I agree to the <a href="#" className="text-slate-900 underline">Terms of Service</a> and <a href="#" className="text-slate-900 underline">Privacy Policy</a>.</p>
                </div>

                <button type="submit" className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-semibold py-4 rounded-lg transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentPage;