import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('Web Offerings');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const happenings = [
    {
      tag: "REPORT",
      title: "Upgrading Legacy Architecture for Global Scale",
      color: "bg-blue-600",
      hoverColor: "group-hover:text-blue-600",
      gradient: "from-blue-300 via-slate-300 to-slate-400"
    },
    {
      tag: "AWARD",
      title: "Capyngen Ranked Among Leaders in 2025 Web Platforms",
      color: "bg-amber-600",
      hoverColor: "group-hover:text-amber-600",
      gradient: "from-amber-200 via-slate-300 to-slate-400"
    },
    {
      tag: "CASE STUDY",
      title: "Helping Retail Huge Unite Their Global E-commerce",
      color: "bg-slate-800",
      hoverColor: "group-hover:text-purple-600",
      gradient: "from-purple-400 via-slate-300 to-slate-400"
    },
    {
      tag: "REPORT",
      title: "The Real Cost of Ignoring Digital Transformation",
      color: "bg-emerald-600",
      hoverColor: "group-hover:text-emerald-600",
      gradient: "from-emerald-300 via-slate-300 to-slate-400"
    },
    {
      tag: "CASE STUDY",
      title: "How We Helped a Mid-Size Bank Modernize Without Downtime",
      color: "bg-rose-600",
      hoverColor: "group-hover:text-rose-600",
      gradient: "from-rose-300 via-slate-300 to-slate-400"
    }
  ];

  const servicesContent: Record<string, string[]> = {
    'Web Offerings': [
      'Frontend Development',
      'Scalable Backend Development',
      'Full Stack Web Development Agility',
      'Progressive Web Apps'
    ],
    'Industry Solutions': [
      'Healthcare & MedTech Solutions',
      'Finance & FinTech Applications',
      'Education & E-learning Platforms',
      'E-commerce & Retail Platforms'
    ]
  };

  const whyChooseItems = [
    {
      title: "Global Expertise",
      desc: "Specialists across the world."
    },
    {
      title: "Cloud-First Approach",
      desc: "Platforms designed for the cloud."
    },
    {
      title: "Strategy Meets Execution",
      desc: "Approach and execute strategy together."
    },
    {
      title: "Measurable Results",
      desc: "Clear goals and real ROI in mind."
    }
  ];

  const faqs = [
    {
      question: "What is Web Engineering Services?",
      answer: "Web Development application link strategy and execution beyond the entire virtual durability, by using cloud-centric approach, technical expertise and global team of experts."
    },
    {
      question: "What does \"cloud-first\" actually mean for my project?",
      answer: "Cloud first ensures your web platform runs on the cloud from day one, offers you better flexibility, faster updates, and reduces issues and complications."
    },
    {
      question: "What does Capyngen offer for web development services?",
      answer: "We offer frontend design, backend systems, full-stack development, SaaS web development, API development, eCommerce website development, and progressive web apps services for our client."
    },
    {
      question: "Do you offer custom web development services or use templates?",
      answer: "Capyngen always offers custom web development services, as we know that every business has different needs and design framework in their mind."
    },
    {
      question: "How does Capyngen handle website security?",
      answer: "Capyngen manages security into the platform from the ground up, covering everything from secure coding to protecting user data and preventing common issues."
    },
    {
      question: "How do you make a web development company easy to use?",
      answer: "Capyngen always follows the user-first design, testing for accessibility and real-time user behavior at each process."
    },
    {
      question: "Can you help improve the ROI of our existing web platform?",
      answer: "Yes. We look at how your current site performs and recommend enhancement that can boost conversions, speed, and overall return on your investment."
    },
    {
      question: "Why should we choose Capyngen for our project?",
      answer: "Capyngen combines deep technical with a world wide team of specialists, so you get the custom website development services."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          CONSULTING
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight whitespace-pre-line">
          Upcoming-Organized Web{'\n'}Development, Fast Tracked With{'\n'}Intelligence
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Capynegen builds virtual ecosystems that take complex high-end technology and turn it into something simple and easy to use for users.
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
              What is Web Engineering Services?
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="text-slate-600 text-lg leading-relaxed">
              Capyngen's Web application development link strategy and execution beyond the entire virtual durability. With a cloud-centric, exclusive structural expertise, and a global team of specialists, we help industries enhance from antiquated technology to responsive website development, high performance web development company, smarter, and measurable ROI at every accomplishment. 
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-slate-100 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What's Happening?</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {happenings.map((item, idx) => (
              <div key={idx} className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow min-w-[300px] md:min-w-[350px] snap-start flex-shrink-0 flex flex-col">
                <div className="h-48 w-full overflow-hidden relative">
                  <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] ${item.gradient} opacity-60`}></div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block ${item.color} text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-xl font-bold text-slate-900 mb-6 transition-colors ${item.hoverColor}`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className={`flex items-center text-sm font-bold text-slate-900 transition-colors gap-2 ${item.hoverColor}`}>
                    READ MORE <ArrowRight className="w-4 h-4" />
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

      {/* Our Services Section */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Left Column */}
        <div className="lg:w-1/2 bg-[#f4f6f8] p-10 md:p-16 lg:p-24 flex justify-end">
          <div className="max-w-xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1526] mb-4">
              Our Services
            </h2>
            <p className="text-slate-500 mb-12 text-lg">
              Capyngen offers services for industries to pursue a path of smart digital innovation with secure web engineering.
            </p>

            {/* Tabs */}
            <div className="flex flex-col mb-16">
              {['Web Offerings', 'Industry Solutions'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${activeTab === tab ? 'bg-white border-l-4 border-[#0056b3] shadow-sm' : 'hover:bg-slate-200/50'} px-6 py-5 w-full max-w-md cursor-pointer transition-colors`}
                >
                  <span className={`${activeTab === tab ? 'text-[#0056b3]' : 'text-slate-500'} font-bold text-sm tracking-wide`}>
                    {tab}
                  </span>
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-lg">
              {servicesContent[activeTab].map((service, idx) => (
                <div key={idx} className="border-b border-slate-300 pb-3">
                  <span className="text-[#0056b3] font-bold text-base block mb-1">
                    0{idx + 1}.
                  </span>
                  <h5 className="font-bold text-[#0a1526]">{service}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 bg-[#0a1526] min-h-[400px] lg:min-h-auto relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-[#53a6ff] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen?</h2>
            <p className="text-slate-800">Capyngen is a world-wide expertise with strategy meets executions, offering web development services and post-launch support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="bg-white group">
                <div className="h-64 bg-slate-300 w-full overflow-hidden">
                   <div className="w-full h-full bg-slate-200 transition-transform duration-500 group-hover:scale-105"></div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 text-xs mb-4 uppercase tracking-wide mt-1">{item.desc}</p>
                  <div className="flex items-center text-xs font-bold text-slate-900 gap-1 cursor-pointer hover:text-blue-600">
                    Know More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  <span className="text-blue-600 text-2xl leading-none font-medium">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply For Services</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
              Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas, and enterprise web development services with post-launch solutions.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 shadow-xl">
              <div className="flex flex-col gap-2 mb-8 text-sm font-bold text-slate-800 border-b border-slate-200 pb-4">
                <span className="cursor-pointer text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[17px] w-fit">Got any specific question?</span>
                <span className="text-slate-500 font-normal mt-3">Book a 15-minute chat with one of our experts.</span>
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
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 bg-slate-50 border-slate-300 focus:ring-slate-500 rounded-none cursor-pointer" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sign up to get Capyngen's mobile insights and marketing updates.<br/> I agree to the Privacy Statement *
                  </p>
                </div>

                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-sm">
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

export default WebDevelopmentPage;