import React, { useState } from 'react';
import { 
  ArrowRight, 
  BarChart4, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  PhoneCall, 
  MapPin, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const EnterpriseLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Q1. What are Enterprise Solutions?",
      answer: "Enterprise Solutions are technologies that assist organizations to become more productive, automate processes and run their businesses more efficiently."
    },
    {
      question: "Q2. How does Capyngen provide Enterprise Solutions?",
      answer: "Capyngen offers tailored Enterprise Solutions, which encompasses a range of Enterprise Software Development, Consulting, Implementation and Support services for enterprises of all sizes."
    },
    {
      question: "Q3. What are Enterprise Software Solutions?",
      answer: "Enterprise Software Solutions are business applications designed to automate departments like human resources, finance, operations, customer management, supply chain and more."
    },
    {
      question: "Q4. What is Enterprise Application Development?",
      answer: "Enterprise Application Development emphasizes on creating secure, scalable applications that enable the growth of businesses and enhance their operational efficiency."
    },
    {
      question: "Q5. Why is Enterprise Digital Transformation important?",
      answer: "Through Enterprise Digital Transformation, companies can adapt, enhance customer journeys, boost productivity and remain competitive in changing markets."
    },
    {
      question: "Q6. Is Enterprise IT Solutions a part of Capyngen?",
      answer: "Yes. Capyngen offers a full range of Enterprise IT Solutions from Cloud integration to Infrastructure modernization, Consulting, Automation and Technical Support."
    },
    {
      question: "Q7. In which industries has Enterprise Business Solutions benefitted?",
      answer: "We support industries like healthcare, manufacturing, finance, retail, education, logistics, and professional services with our Enterprise Business Solutions."
    },
    {
      question: "Q8. Is Capyngen able to create Custom Enterprise Software?",
      answer: "Yes. We create Custom Enterprise Software for workflows, integration and growth of your business."
    },
    {
      question: "Q9. What is an Enterprise Automation Solution?",
      answer: "Enterprise Automation Solutions are used to accomplish repetitive tasks, boost operational effectiveness, cut down manual mistakes and boost business productivity."
    },
    {
      question: "Q10. What are the contents of Enterprise Software Development?",
      answer: "The Enterprise Software Development services we provide cover the following stages: Planning, UI/UX Design, Development, Testing, Deployment, Integration, and Maintenance."
    },
    {
      question: "Q11. What are Enterprise Management Solutions?",
      answer: "Business resource management, workflow management, reporting, compliance and strategic decision making are all managed from one central point with Enterprise Management Solutions."
    },
    {
      question: "Q12. What are the advantages of Enterprise Technology Solutions to businesses?",
      answer: "Enterprise Technology Solutions enhance collaboration, system integration, security, scalability, and overall organizational efficiency."
    },
    {
      question: "Q13. Does Enterprise Solutions work seamlessly with current business systems?",
      answer: "Yes. Our Enterprise Solutions are built to fit into the ERP/CRM/HRMS/Accounting Software/Cloud and other third party applications."
    },
    {
      question: "Q14. Why do people prefer to use Capyngen for Enterprise Solutions?",
      answer: "Capyngen's stack of expertise is made up of Enterprise Solutions, Enterprise Software Solutions, Enterprise Application Development and Enterprise Digital Transformation to provide measurable business gains."
    },
    {
      question: "Q15. How can I get started with Capyngen Enterprise Solutions?",
      answer: "Inquire with Capyngen regarding your needs. Our experts will suggest the most suitable Enterprise Solutions, Enterprise Technology Solutions, and Enterprise Management Solutions to your business objectives."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern City Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d47a1]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d47a1]/40 to-[#f8f9fa]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Transform The Smart Enterprise Solutions
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow">
            Capyngen provides scalable Enterprise Solutions to enable innovation, enhance efficiency and future-proof businesses.
          </p>
          <button className="bg-white hover:bg-slate-50 text-[#0d47a1] px-10 py-4 font-bold transition-colors shadow-xl text-sm tracking-widest uppercase">
            Discover Our Services
          </button>
        </div>
      </section>

      {/* 2. Intro/Methodology Section */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="lg:pr-8">
              <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-4">DRIVING DIGITAL GROWTH</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Connected Solutions for Future-Ready Enterprises.
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The current competitive business environment requires that intelligent systems are able to communicate seamlessly and without interruption. Capygen's Enterprise Solutions, Enterprise IT Solutions and Enterprise Business Solutions provide cutting-edge solutions that connect all the critical business functions.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our Enterprise Software Solutions increase productivity, streamline complex processes, and deliver meaningful insights to support quick business decisions. We develop intelligent ecosystems for measurable business growth through Enterprise Technology Solutions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> Intelligent Workflow Automation
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> Advanced Business Analytics
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ChevronRight className="w-4 h-4 mr-3 text-[#0d47a1]" /> Secure Scalable Infrastructure
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Boardroom Meeting" 
                className="w-full h-auto shadow-xl border border-slate-200"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. News / Insights Section */}
      <section className="bg-[#f1f4f9] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-2">INDUSTRY INSIGHTS</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Technology Shaping Tomorrow's Business</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Enterprise Transformation" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Enterprise Transformation</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Creating Better Digital Basics for Contemporary Companies
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Discover methods for businesses to upgrade old systems to efficient, intelligent Enterprise Solutions that boost performance and flexibility while future-proofing their operations.
                </p>
              </div>
            </div>
            
            {/* Insight 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600" 
                  alt="Cloud Solutions" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Cloud Solutions</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Unlocking Greater Business Value Through Cloud Innovation
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Discover how to implement cloud solutions in each department for enhanced security, collaboration and Enterprise Digital Transformation.
                </p>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                  alt="Enterprise Application Development" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Enterprise Application Development</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Custom Applications Built for Business Growth
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Learn how to leverage Enterprise Application Development to enhance your user experiences and boost productivity in your organization.
                </p>
              </div>
            </div>

            {/* Insight 4 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" 
                  alt="Enterprise Automation" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Enterprise Automation</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Automating Workflows for Better Efficiency
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Understand the benefits of Enterprise Automation Solutions in simplifying manual tasks, enhancing accuracy, and promoting operational excellence.
                </p>
              </div>
            </div>

            {/* Insight 5 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  alt="Enterprise Software Development" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Enterprise Software Development</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Creating Scalable Digital Platforms
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Learn how Enterprise Software Development provides secure, scalable, and future-proof business applications that meet the needs of organizations.
                </p>
              </div>
            </div>

            {/* Insight 6 */}
            <div className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                  alt="Enterprise Management" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-[#0d47a1] text-xs font-bold uppercase tracking-wider mb-3">Enterprise Management</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d47a1] transition-colors leading-snug">
                  Driving Smarter Business Operations
                </h3>
                <p className="text-slate-600 text-sm flex-1">
                  Learn how Enterprise Management Solutions help to make better decisions, use resources effectively and enhance business performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#0d47a1] font-bold text-xs uppercase tracking-[0.2em] mb-4">WHAT WE OFFER</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Smart Business Solutions</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <Cpu className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Enterprise Software</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Full implementation and optimization of Custom Enterprise Software to enhance enterprise performance.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <Layers className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Digital Operations</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Modern Enterprise Technology Solutions used to streamline business processes and boost the efficiency of the organization.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <BarChart4 className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Workforce Solutions</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                The integration of HR technologies to make employee management, and workforce development simpler with advanced Enterprise IT Solutions.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-[#0d47a1]">
              <div className="mb-6 text-[#0d47a1]">
                <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Business Finance</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Reliable financial management systems with Enterprise Management Solutions to increase the accuracy of business visibility.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold text-[#0d47a1] uppercase tracking-wider hover:text-[#09357a]">
                Learn More <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Section / Why Choose Us */}
      <section className="bg-[#1e293b] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Why Choose Capyngen?</h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-slate-400 leading-relaxed max-w-2xl text-lg mb-10">
                Giving businesses the freedom to access Enterprise Solutions, cutting-edge technology and long-term digital success.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Industry-Focused Expertise</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Capyngen provides Enterprise IT Solutions specific to the needs of enterprises in various industries.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom-Built Technology</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We have a team of experts specializing in the development of Custom Enterprise Software ensuring the creation of future-ready business applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">End-to-End Digital Transformation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Whether it's strategy or implementation or optimization, Capyngen offers you the complete solution to Enterprise Digital Transformation to ensure sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="bg-[#f1f4f9] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions (FAQs)</h2>
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
                    className={`w-5 h-5 text-[#0d47a1] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
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

      {/* 7. Form Section */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Side - Info */}
          <div className="bg-[#0d47a1] p-12 lg:p-16 lg:w-5/12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">All set to Revolutionize Your Business?</h2>
              <p className="text-blue-100 mb-12 leading-relaxed">
                Collaborate with Capyngen and develop smarter Enterprise Solutions that will benefit your business in more efficient operations, better customer experience, and a future-proofing in the form of reliable Enterprise Software Development and Enterprise Digital Transformation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center text-blue-50">
                <PhoneCall className="w-6 h-6 mr-4 text-blue-300" />
                <span className="font-medium tracking-wide">+1 (800) CAPYNGEN</span>
              </div>
              <div className="flex items-start text-blue-50">
                <MapPin className="w-6 h-6 mr-4 text-blue-300 mt-1" />
                <span className="font-medium leading-relaxed">Board of Directors: New York, NY, USA</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="p-12 lg:p-16 lg:w-7/12 flex items-center">
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="workEmail" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="workEmail"
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-400"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Service of Interest</label>
                <select 
                  id="inquiryType"
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="erp">ERP Implementation</option>
                  <option value="integration">System Integration</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="security">Information Security</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Project Brief</label>
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full px-0 py-2 border-b border-slate-300 focus:border-[#0d47a1] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-400"
                  placeholder="Tell us about your organization's current challenges..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-[#0d47a1] hover:bg-[#09357a] text-white font-bold py-4 px-10 transition-colors mt-4 text-sm tracking-widest uppercase"
              >
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default EnterpriseLandingPage;