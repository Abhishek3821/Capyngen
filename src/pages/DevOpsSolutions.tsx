import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const DevOpsPage = () => {
  const [activeOfferingTab, setActiveOfferingTab] = useState('Service Offerings');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const happenings = [
    { tag: "Whitepaper", title: "Scaling CI/CD for Global Banking Infrastructures", link: "Read More " },
    { tag: "Recognition", title: "Capyngen Named Leader in Gartner Magic for Cloud DevOps Services", link: "Read More " },
    { tag: "Case Study", title: "Reducing Deployment Lead Time by 70% for Logistics Giant", link: "Read More " },
    { tag: "Whitepaper", title: "Zero-Downtime Deployments: A Blueprint for Regulated Industries", link: "Read More" },
    { tag: "Case Study", title: "Cutting Infrastructure Costs by 40% for a Healthcare Platform", link: "Read More" }
  ];

  const offeringsData: Record<string, { title: string, desc: string }[]> = {
    'Service Offerings': [
      { title: "Infrastructure as Code", desc: "We use Terraform and Pulumi to automate how your cloud resources get set up, so your infrastructure stays consistent every time." },
      { title: "CI/CD Pipelines", desc: "Capyngen’s automated pipelines make deployments faster, safer, and easy to repeat with CI/CD pipeline development services." },
      { title: "Cloud Security (DevSecOps)", desc: "We build security scans and compliance checks into your DevOps development services process, not as an afterthought." },
      { title: "Monitoring & Observability", desc: "You get real-time performance data and logging, so your team can spot issues and act before they turn into bigger problems." }
    ],
    'Industry Solutions': [
      { title: "Banking & Financial Services", desc: "We build DevOps pipelines that hold up under strict regulatory and audit requirements." },
      { title: "Healthcare", desc: "Our infrastructure is built HIPAA-ready, with compliance checks running automatically on every release." },
      { title: "Retail & E-commerce", desc: "Capyngen builds deployment systems that scale up easily, so your site stays smooth even during your shopping seasons." },
      { title: "Logistics & Supply Chain", desc: "Capyngen keeps tracking and enhancing systems running with real-time monitoring and reliable deployment." }
    ]
  };

  const whyChooseData: Array<{ title: string; desc: string; link?: string }> = [
    { title: "Security & Compliance", desc: "We offer Security testing, and compliance validation." },
    { title: "Proven DevOps Expertise", desc: "Implementing reliable, business CI/CD services solutions." },
    { title: "Streamline Development", desc: "AI Smart Delivery with Operational Stability." },
    { title: "Expand After Deployment", desc: "Durable Collaboration and Enhanced Optimization." }
  ];

  const faqsData = [
    { question: "What are DevOps solutions services?", answer: "DevOps solutions services bring development and operations teams together with smart AI frameworks, CI/CD services, and secure operation." },
    { question: "What makes you a custom DevOps service provider?", answer: "We don't hand you a one-size-fits-all package. We've worked with banks, hospitals, retailers, and logistics firms, and each one needed something different, so that's how we build." },
    { question: "How long does it take to set up a CI/CD pipeline?", answer: "It depends on where you're starting from. A basic pipeline can be live in a few weeks. Bigger, messier systems take a bit longer to untangle." },
    { question: "Can you work with our existing cloud provider?", answer: "Yes. AWS, Azure, Google Cloud, or whatever you're already on, we build around it instead of asking you to start fresh." },
    { question: "How do you handle compliance for regulated industries like banking?", answer: "We write compliance checks straight into the pipeline. Every release gets tested against your industry's rules automatically." },
    { question: "Does Capyngen have a plan for failed deployments?", answer: "Our pipelines catch problems early and roll back on their own. Your users won't even notice." },
    { question: "How does Capyngen approach zero-downtime deployments?", answer: "We lean on techniques like blue-green deployments and canary releases. Your updates go live quietly in the background, so nobody using your product even notices a change." },
    { question: "How to start with the Capyngen DevOps application service?", answer: "Book a quick 15-minute call. We'll talk through where you stand today and map out where to go next with DevOps Implementation Services." }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-6 tracking-widest uppercase">
          DEVOPS SOLUTIONS
        </div>
        <div className="text-sm font-semibold tracking-wide text-slate-600 mb-6 uppercase">
          Services {'>'} DevOps 
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Enhancing IT Delivery with <br /> DevOps
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Rebuilding IT delivery with cloud-native DevOps automation services, accurate CI/CD development, and security-first lifestyle innovation.
        </p>
        <button className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm tracking-wide">
          Explore Here <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* Empowering Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Strengthening the <br className="hidden md:block" /> Self-Authorized Company
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-6">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Capyngen helps large organizations move away from old ways of working and turn them into teams. It can easily ship your updates quickly and confidently with DevOps solutions services, using a high-end cloud framework.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We build Continuous Integration and Continuous Deployment (CI/CD) right into how your organization works day to day. That means every code commit goes through real security and quality checks before it ever reaches production. We're not just handing you new tools. We're helping your teams work differently.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#2563eb] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What's Happening?</h2>
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

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {happenings.map((item, index) => (
              <div key={index} className="bg-white flex flex-col group cursor-pointer shadow-lg hover:-translate-y-1 transition-transform duration-300 min-w-[280px] sm:min-w-[320px] snap-start flex-shrink-0">
                <div className="h-48 bg-slate-100 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-slate-200 to-slate-300 opacity-80"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-[#2563eb] text-[9px] font-bold uppercase tracking-wider mb-3">{item.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-[#2563eb] transition-colors leading-snug flex-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs font-bold text-[#2563eb] gap-2">
                    {item.link} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
        </div>
      </section>

      {/* DevOps Consulting Services Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
            
            {/* Left Column (Tabs) */}
            <div className="lg:w-2/5 p-10 md:p-14 border-r border-slate-100 bg-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">DevOps Consulting Services</h2>
              <p className="text-slate-500 mb-12 text-sm leading-relaxed max-w-sm">
                Capyngen offers a full set of capabilities built to speed up your software delivery and make your systems more reliable.
              </p>

              <div className="flex flex-col mb-16">
                {Object.keys(offeringsData).map((tab) => (
                  <div 
                    key={tab}
                    onClick={() => setActiveOfferingTab(tab)}
                    className={`${activeOfferingTab === tab ? 'bg-[#0056b3] text-white shadow-md' : 'hover:bg-slate-50 border border-slate-100 border-t-0 text-slate-500'} px-6 py-4 w-full max-w-md cursor-pointer flex justify-between items-center transition-colors`}
                  >
                    <span className="font-bold text-sm tracking-wide">{tab}</span>
                    {activeOfferingTab === tab && <ChevronDown className="w-4 h-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Grid) */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 w-full">
                {offeringsData[activeOfferingTab].map((item, index) => (
                  <div key={index} className="border-t border-slate-200 pt-4">
                    <span className="text-[#0056b3] font-mono text-[10px] font-bold block mb-2">0{index + 1}.</span>
                    <h5 className="font-bold text-slate-900 text-base mb-3">{item.title}</h5>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen?</h2>
            <p className="text-slate-500 text-sm">At Capyngen, we provide high-end security services, expertise, and streamlined development solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseData.map((item, index) => (
              <div key={index} className="group cursor-pointer bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-300 w-full overflow-hidden mb-6">
                   <div className="w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] mb-4 tracking-wide leading-relaxed">{item.desc}</p>
                  <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 uppercase">
                    {item.link} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <span className="text-[#2563eb] text-2xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a1526] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-5/12 text-white pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Apply For Services</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mb-6">
              Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas and DevOps solutions services with post-launch solutions.
            </p>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold border-l-2 border-blue-500 pl-3">
              Got any specific question?<br/> Book a 15-minute chat with one of our experts.
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

                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 border-slate-300 rounded-sm cursor-pointer" />
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Sign up to get Capyngen's mobile insights and marketing updates.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-0.5 w-3.5 h-3.5 border-slate-300 rounded-sm cursor-pointer" />
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      I agree to the Privacy Statement.*
                    </p>
                  </div>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-10 transition-colors text-xs tracking-widest uppercase">
                  Confirm
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