import React from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  BrainCircuit, 
  MessageSquareText, 
  Eye, 
  GitMerge, 
  Mail, 
  MapPin,
  Activity
} from 'lucide-react';

const AILandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1920" 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            Enterprise Transformation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Intelligent Automation & AI<br />Solutions
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            We unlock the power of artificial intelligence to optimize operations, automate complex workflows, and drive unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm tracking-wide">
              DISCOVER SOLUTIONS
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm tracking-wide">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* 2. Philosophy/About Section */}
      <section className="py-20 lg:py-28 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Integrating Artificial Intelligence
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Beyond the hype lies practical, transformative value. We design and deploy AI systems that augment human capabilities, automate mundane tasks, and extract deep insights from your data infrastructure.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our approach bridges the gap between advanced machine learning algorithms and real-world business challenges. We don't just build models; we architect intelligent workflows that integrate seamlessly into your existing operations.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#0056b3] mb-2">94%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Process Efficiency</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#0056b3] mb-2">10M+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Datapoints Analyzed</p>
                </div>
              </div>
            </div>
            
            <div className="relative bg-[#f8fafd] p-8 rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1620825937374-87fc7d628301?auto=format&fit=crop&q=80&w=800" 
                alt="AI Cube Concept" 
                className="w-full h-auto shadow-lg object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#0056b3] text-white p-4 shadow-xl">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Insights / News Section */}
      <section className="bg-[#f8fafd] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Intelligence Insights</h2>
              <p className="text-sm text-slate-500">Latest thoughts from our AI Strategy practice.</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="w-10 h-10 border border-slate-300 rounded flex items-center justify-center hover:bg-white transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 border border-slate-300 rounded flex items-center justify-center hover:bg-white transition-colors">
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1614064641913-6b71a2b02319?auto=format&fit=crop&q=80&w=600" 
                  alt="Abstract Data Waves" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-2">Deep Learning</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors leading-snug">
                  The Future of Generative Models
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  Exploring how large language models are transforming content creation and complex problem solving across enterprise sectors.
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                  Read Article <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600" 
                  alt="Server Tech" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-2">Case Study</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Automating Supply Chain Logistics
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  How a global retailer used predictive algorithms to reduce inventory waste by 40% and optimize delivery routes.
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                  Read Article <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?auto=format&fit=crop&q=80&w=600" 
                  alt="Chess Pieces" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-2">Governance</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors leading-snug">
                  Ethical AI Frameworks in Practice
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  Establishing robust guidelines to ensure machine learning deployments remain transparent, fair, and accountable.
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#0056b3] uppercase tracking-wider">
                  Read Article <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities / Services */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Capabilities</h2>
            <p className="text-sm text-slate-500">Comprehensive AI solutions tailored for enterprise challenges.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capability 1 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <BrainCircuit className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Machine Learning</h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Predictive Modeling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Neural Networks
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Anomaly Detection
                </li>
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <MessageSquareText className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Natural Language Processing</h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Text Analytics
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Conversational AI
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Sentiment Analysis
                </li>
              </ul>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <Eye className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Computer Vision</h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Object Recognition
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Image Classification
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Video Analytics
                </li>
              </ul>
            </div>
            
            {/* Capability 4 */}
            <div className="bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0056b3]">
                <GitMerge className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI Strategy</h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Roadmap Planning
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Technology Evaluation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#0056b3]">•</span> Governance Models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="bg-[#f8fafd] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thought Leadership</h2>
            <p className="text-sm text-slate-500">Pioneers steering our research and enterprise implementations.</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-6 bg-white shadow-sm border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="Dr. Aria Thorne" 
                  className="w-full aspect-square object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Dr. Aria Thorne</h3>
              <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-4">Chief AI Scientist</p>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Former head of AI Research at a leading tech giant, specializing in neural network architectures.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-6 bg-white shadow-sm border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Sarah Chen" 
                  className="w-full aspect-square object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Sarah Chen</h3>
              <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-4">VP Data Engineering</p>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Expert in building scalable data pipelines and integrating machine learning models into production environments.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="overflow-hidden mb-6 bg-white shadow-sm border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                  alt="Marcus Vance" 
                  className="w-full aspect-square object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Marcus Vance</h3>
              <p className="text-[#0056b3] text-[10px] font-bold uppercase tracking-wider mb-4">Head of Applied AI</p>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Specializes in bridging the gap between theoretical AI research and practical business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer / Contact Form */}
      <section className="bg-[#0a192f] py-20 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Engineered for Scale</h2>
              <p className="text-sm text-slate-400 mb-12 leading-relaxed max-w-md">
                Connect with our technical team to discuss your operational challenges and discover how custom AI solutions can accelerate your business objectives.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:solutions@ai-enterprise.com" className="text-sm font-medium hover:text-blue-300 transition-colors">solutions@ai-enterprise.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-sm font-medium leading-relaxed">
                      Innovation District, Building A<br />San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="bg-white p-8 sm:p-10 rounded-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="workEmail"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Inquiry Type</label>
                  <select 
                    id="inquiryType"
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area...</option>
                    <option value="ml">Machine Learning Models</option>
                    <option value="nlp">NLP & Conversational AI</option>
                    <option value="cv">Computer Vision</option>
                    <option value="strategy">Strategic Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="details"
                    rows={3}
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#0056b3] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your operational challenges..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0056b3] hover:bg-[#004494] text-white font-bold py-4 transition-colors mt-2 text-[11px] tracking-[0.2em] uppercase rounded-sm"
                >
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

export default AILandingPage;