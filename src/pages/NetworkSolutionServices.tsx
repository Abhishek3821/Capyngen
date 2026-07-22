import React, { useState } from 'react';
import { 
  ArrowRight, 
  Wifi, 
  Network, 
  ShieldCheck, 
  Cloud, 
  
  Server,
  Activity,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import img1 from "../assets/Networking.png"

const NetworkInfrastructureLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Q1. What are Network Solutions Services?",
      answer: "Network Solutions Services involve the layout, setup, administration, and fine-tuning of enterprise networks to boost business connectivity and functionality."
    },
    {
      question: "Q2. Why are Network Infrastructure Solutions important?",
      answer: "Network Infrastructure Solutions provide a secure and scalable foundation to enable business applications, communications and digital transformation."
    },
    {
      question: "Q3. What are some of the features of the Network Management Services?",
      answer: "Network Management Services include monitoring, maintenance, configuration management, performance optimization, and issue resolution."
    },
    {
      question: "Q4. What makes the Managed Network Services so successful?",
      answer: "Managed Network Services simplify operations, enhance network reliability, ensure minimal downtime, and offer around-the-clock expert assistance."
    },
    {
      question: "Q5. What are Enterprise Network Solutions?",
      answer: "Enterprise Network Solutions are bespoke networks tailored to meet the specific needs of large businesses, offering secure, scalable, and high-performance connections."
    },
    {
      question: "Q6. What are the advantages of Cloud Networking Services to businesses?",
      answer: "Cloud Networking Services provide benefits in providing flexibility, ease of remote access, scalability, and support modern cloud applications."
    },
    {
      question: "Q7. What makes Network Security Solutions a must-have?",
      answer: "Network Security Solutions defend enterprise data, users, applications and devices from cyber threats and unauthorized access."
    },
    {
      question: "Q8. What is the difference between IT Network Solutions?",
      answer: "IT Network Solutions encompass hardware, software and security services, integration with cloud infrastructure, and services to manage your enterprise's technology environment."
    },
    {
      question: "Q9. Network Consulting Services offer what?",
      answer: "Network Consulting Services enable businesses to assess their current network, forecast future needs, and execute effective networking solutions for the future."
    },
    {
      question: "Q10. What are Network Support Services?",
      answer: "Network Support Services offer technical support, trouble shooting, maintenance, software updates, and continuous monitoring of the network."
    },
    {
      question: "Q11. What are some ways in which Business Network Solutions can enhance productivity?",
      answer: "Business Network Solutions facilitate rapid communication, secure collaboration, performance of applications and better operational efficiency."
    },
    {
      question: "Q12. Does Capyngen offer any tailored networking solutions?",
      answer: "Yes. Capyngen offers tailored Network Solutions Services aligned with each organization's business objectives, infrastructure, and business needs."
    },
    {
      question: "Q13. Can Capyngen modernise existing enterprise networks?",
      answer: "Yes. We modernize legacy infrastructure by integrating with the cloud, automating intelligently and networking to scale."
    },
    {
      question: "Q14. How does optimization of a network help in improving the performance?",
      answer: "Optimizing the network helps maximize bandwidth, minimize latency, increase application responsiveness and provide reliable connectivity."
    },
    {
      question: "Q15. What are the reasons to use Capyngen for Network Solutions Services?",
      answer: "With industry knowledge, innovative technologies, Network Consulting Services, Managed Network Services, and enterprise solutions, Capyngen provides secure, scalable and future-proof business networks."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={img1}
            alt="Global Network Connections" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/70 to-[#0a192f]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <p className="text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            ADVANCED CONNECTIVITY SOLUTIONS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Intelligent Enterprise<br />Networking
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-slate-100 text-[#0a192f] px-8 py-3.5 font-bold transition-colors shadow-lg text-sm tracking-wide">
              TALK TO OUR SPECIALISTS
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-3.5 font-bold transition-colors text-sm tracking-wide">
              DISCOVER SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-6 leading-tight max-w-sm">
                Creating reliable networks for modern businesses
              </h2>
              <div className="w-12 h-1 bg-[#08538c] mb-8"></div>
            </div>
            
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Today's Digital Economy requires connectivity beyond the traditional. Your network is the backbone that supports business operations, collaboration and innovation. At Capyngen, we provide value-added Network Solutions Services to support businesses in creating a secure, scalable, and future-proof digital environment. 
              </p>
              <p className="text-slate-600 mb-12 leading-relaxed">
                Our experts deliver trusted connectivity, through proven Network Infrastructure Solutions and sophisticated Cloud Networking Services, to distributed workplaces from central data centers. 
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Trends Section (Bento Box) */}
      <section className="bg-[#f4f7fb] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#08538c] font-semibold mb-2 uppercase tracking-wider text-xs">INDUSTRY INSIGHTS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Emerging Networking Innovations</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Wide Top Left */}
            <div className="md:col-span-2 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <Wifi className="w-8 h-8" />
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">INSIGHT 01</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Edge Connectivity</h3>
                <p className="text-slate-600 max-w-lg">
                  Providing enhanced secure Enterprise Network Solutions that bring more applications and real-time processing closer to users and connected devices.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="w-8 h-8 bg-[#f4f7fb] rounded-full flex items-center justify-center group-hover:bg-[#08538c] group-hover:text-white transition-colors text-[#08538c]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Card 2: Small Top Right */}
            <div className="md:col-span-1 bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Driven WAN Management</h3>
                <p className="text-slate-600 text-sm">
                  Improved visibility of networks with intelligent automation, predictive monitoring and optimized traffic distribution with modern Network Management Services.
                </p>
              </div>
              <div className="mt-8 w-1/3 h-1 bg-slate-100 group-hover:bg-[#08538c] transition-colors"></div>
            </div>

            {/* Card 3: Small Bottom Left */}
            <div className="md:col-span-1 bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer border-t-2 border-transparent hover:border-[#08538c]">
              <div>
                <div className="text-[#08538c] mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Secure Access</h3>
                <p className="text-slate-600 text-sm">
                  Advanced networking solutions and Network Security Solutions for ease of secure access in hybrid working environments.
                </p>
              </div>
            </div>

            {/* Card 4: Wide Bottom Right */}
            <div className="md:col-span-2 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden border-t-2 border-transparent hover:border-[#08538c]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Green Network Architecture</h3>
                <p className="text-slate-600 max-w-lg">
                  Creating environmentally friendly Network Infrastructure solutions that are resource efficient to minimize operational costs in support of sustainability programs.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-slate-100 opacity-50 z-0">
                <Server className="w-48 h-48" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-4">Our Specialized Services</h2>
              <p className="text-slate-600">
                In-depth Network Solutions Services to boost performance and aid business growth.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
            {/* Offering 1 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Network className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Enterprise Network Modernization</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Smart transformation of the existing environment in the form of Cloud Networking Services.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Cloud Integration</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Infrastructure Assessment</li>
              </ul>
            </div>
            
            {/* Offering 2 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Wifi className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Wireless Network Deployment</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Providing enterprise-wide high speed Wi-Fi 6E and private wireless solutions that enable reliable Business Network Solutions.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Coverage Planning</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Private Wireless</li>
              </ul>
            </div>
            
            {/* Offering 3 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Cloud className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Network Performance Enhancement</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Smart monitoring along with Network Management Services, to improve application responsiveness.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Traffic Optimization</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Bandwidth Control</li>
              </ul>
            </div>
            
            {/* Offering 4 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Integrated Network Protection</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Enabling enterprise connectivity with advanced Network Security Solutions to ensure business critical data security.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Identity Verification</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Continuous Security Monitoring</li>
              </ul>
            </div>

            {/* Offering 5 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Activity className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Managed Network Operations</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Managed Network Services proactively, ensuring maximum uptime with continuous monitoring expert Network Support Services.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> 24/7 Network Monitoring</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Incident Response</li>
              </ul>
            </div>

            {/* Offering 6 */}
            <div className="flex flex-col h-full border-t border-slate-200 pt-6">
              <div className="mb-5 text-[#08538c]">
                <Network className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Network Strategy & Consulting</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                Enabling organizations to create a scalable IT Network Solutions by providing Network Consulting Services.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Network Assessment</li>
                <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-[#08538c]" /> Technology Roadmap</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Team Section / Why Choose Us */}
      <section className="bg-[#1b232c] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Capyngen?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Collaborate with Capyngen to implement smart Network Solutions Services for security, scalability and business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center px-4">
              <h3 className="text-xl font-bold text-white mb-3">Proven Industry Expertise</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Our experts provide you with guaranteed Enterprise Network Solutions to meet your business objectives.</p>
            </div>

            <div className="group text-center px-4">
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Managed Services</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We can help you manage your entire Network life cycle from planning and deployment through to Managed Network Services.</p>
            </div>

            <div className="group text-center px-4">
              <h3 className="text-xl font-bold text-white mb-3">Secure & Future-Ready Technology</h3>
              <p className="text-slate-400 text-sm leading-relaxed">The strength of our Network Security Solutions enables us to create resilient solutions to support future business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f4f7fb] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#08538c] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Info */}
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#08538c] mb-6">Looking to Strengthen Your Network?</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our experienced consultants evaluate your existing infrastructure, and create a customized Network Solutions Services that supports your organization's future growth.
              </p>
              
              {/* <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <div className="w-10 h-10 bg-[#f4f7fb] rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-[#08538c]" />
                  </div>
                  <a href="mailto:solutions@capyngen.com" className="hover:text-[#08538c] transition-colors font-medium">EMAIL US: solutions@capyngen.com</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <div className="w-10 h-10 bg-[#f4f7fb] rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-[#08538c]" />
                  </div>
                  <span className="font-medium">Company: Global HQ</span>
                </div>
              </div> */}
            </div>
            
            {/* Right Side - Form */}
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service of Interest</label>
                  <select 
                    id="service"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="transformation">Enterprise Network Modernization</option>
                    <option value="wireless">Wireless Network Deployment</option>
                    <option value="cloud">Network Performance Enhancement</option>
                    <option value="security">Integrated Network Protection</option>
                    <option value="managed">Managed Network Operations</option>
                    <option value="consulting">Network Strategy & Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    id="details"
                    rows={3}
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-[#08538c] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your current network challenges..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#08538c] hover:bg-[#063f6a] text-white font-bold py-4 transition-colors mt-4 text-sm tracking-wide"
                >
                  REQUEST ASSESSMENT
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default NetworkInfrastructureLandingPage;