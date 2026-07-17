import { useState } from 'react';

// --- Section 1: Hero ---
const EducationHero = () => {
  return (
    <section 
      className="relative w-full min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('image_121621.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl flex flex-col items-start text-white">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-gray-300 mb-2 uppercase">
            <span>INDUSTRIES | EDUCATION</span>
          </div>
          <div className="text-xs md:text-sm font-bold tracking-widest mb-6 uppercase">
            Education Software Development
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Reshaping the future of Education Management with Artifical Intelligence.
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            Transform learning institutions with AI in education platform, student information system, school management software, and exclusive learning experience that encourage modernisation, collaborations and long-term online learning platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Connect with Our Experts 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Explore Custom Education Software
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 2: Digital Transformation ---
const DigitalEducationTransformation = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-black mb-6">
              eLearning Software Development
            </h2>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Education has always been centered around traditional classrooms. Today, however, institutions require digital education solutions that support hybrid learning, personalized online experiences, enhanced student engagement, and efficient campus management. 
              </p>
              <p>
                Capyngen provides school management, university management software, EdTech software, and offers training to innovate adoptable online learning platforms powered by AI, cloud tech solutions, smart technology, and fact-based vision. 
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_1216d3.png" 
              alt="Students collaborating in a classroom" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: AI in Education ---
const AIEducationTransformation = () => {
  return (
    <section className="bg-blue-600 py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI is Reshaping Latest Education
            </h2>
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
              <p>
                AI is redefining traditional education by enabling customized online learning, tutoring, AI evalutions, and precise student analytics.
              </p>
              <p>
                Capyngen offers education mobile app development that can build a LMS development company, solutions that enhance learning outcomes while building intelligible education management software.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_121a1c.jpg" 
              alt="Group of students studying together around a laptop in a library" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Education Solutions Card Grid ---
const EducationSolutions = () => {
  const solutions = [
    {
      title: "Education Technology Solutions",
      image: "image_121eb9_lms.jpg",
    },
    {
      title: "Student Information Systems",
      image: "image_121eb9_sis.jpg",
    },
    {
      title: "Learning Management System Development",
      image: "image_121eb9_ai.jpg", 
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-12 uppercase">
          Education IT Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg overflow-hidden h-[450px] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-6 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="text-xs font-bold tracking-widest uppercase flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:underline">
                  Know More
                  <svg className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Client Testimonial ---
const ClientTestimonial = () => {
  return (
    <section className="bg-white pb-16 md:pb-24 w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="border-t border-b border-gray-400 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="text-blue-500 flex-shrink-0">
              <svg className="w-16 h-16 md:w-20 md:h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                “Capyngen's built our fully transformed education software development company the way we needed for our education system. From AI-powered learning to modernized campus management, their high-end technology services significantly advanced student engagement and efficiency.”
              </p>
              <div className="flex flex-col items-end mt-8 w-full">
                <h4 className="text-blue-600 text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                  CLIENT TESTIMONIAL
                </h4>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black">
                  — Director of Digital Learning 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Education Insights ---
const EducationInsights = () => {
  const insights = [
    {
      title: "Customised Learning with Artificial Intelligence",
      image: "image_122235_card1.jpg", 
    },
    {
      title: "Online Univeristy Campuses Development",
      image: "image_122235_card2.jpg", 
    },
    {
      title: "Online Learning Platform Development",
      image: "image_122235_card3.jpg", 
    },
    {
      title: "Education ERP Software",
      image: "image_122235_card4.jpg", 
    },
    {
      title: "Learning Management System Development",
      image: "image_122235_card1.jpg", 
    },
    {
      title: "EdTech Software Development",
      image: "image_122235_card2.jpg", 
    }
  ];

  return (
    <section className="bg-[#111827] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Digital Education Overview
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[280px] sm:w-[320px] md:w-[350px] h-[450px] rounded-xl overflow-hidden snap-start group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${insight.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-blue-600/60 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                  {insight.title}
                </h3>
                <div className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 opacity-90 group-hover:opacity-100">
                  Know More
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-6 pr-4">
          <button className="text-gray-600 hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7-7H3" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

// --- Section 7: Why Capyngen ---
const WhyCapyngen = () => {
  const cards = [
    {
      title: "Custom Education Software",
      description: "We offer high-end IT services for custom education websites.",
      image: "image_1c0402_card1.jpg"
    },
    {
      title: "EdTech Software Development",
      description: "Build your EdTech Software with our expert teams of developers and designers.",
      image: "image_1c0402_card2.jpg"
    },
    {
      title: "Education ERP Software",
      description: "Get your ERP software with us and manage academic administrative, financial and learning functions.",
      image: "image_1c0402_card3.jpg"
    },
    {
      title: "Education Mobile App Development",
      description: "Capyngen offers you reliable, smooth and customized mobile apps for education services.",
      image: "image_1c0402_card1.jpg"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 uppercase tracking-wide">
            Why Choose Capyngen?
          </h2>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            Advanced Technology That Build Future 
          </p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[280px] sm:w-[340px] md:w-[380px] h-[400px] rounded-lg overflow-hidden snap-start group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-200 uppercase leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-6 mt-4">
          <button className="text-gray-400 hover:text-black transition-colors" aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7-7H3" />
            </svg>
          </button>
          <button className="text-black hover:text-gray-600 transition-colors" aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Section 8: Transforming Digital Learning ---
const TransformingDigitalLearning = () => {
  const results = [
    "Student Information & Campus Management Systems",
    "Mobile Learning Applications",
    "Learning Analytics & Performance Dashboards",
    "Ongoing Support, Maintenance & Platform Optimization"
  ];

  return (
    <section className="bg-white w-full">
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Rebuilding Your Online<br className="hidden md:block" /> Learning Platform
            </h2>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
              Capyngen builds and designs modern learning solutions that offer best educational experiences, latest academic functions, and upgrades for the future.
            </p>
            <div className="text-gray-900 text-lg md:text-xl mb-4 font-semibold">
              Our Capabilities 
            </div>
            <ul className="space-y-3">
              {results.map((item, index) => (
                <li key={index} className="flex items-center text-gray-900 text-lg md:text-xl">
                  <span className="font-bold mr-3 text-black">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <img 
              src="image_1c0456.jpg" 
              alt="Overhead view of students studying collaboratively at a round table" 
              className="w-full max-w-lg lg:max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 9: FAQs ---
const EducationFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How scalable are education technology services?",
      answer: "Education tech is highly scable and flexible, offering simplified content delivery and automated tools with human-led instruction."
    },
    {
      question: "Can education software development support online universities?",
      answer: "Yes, it can strengthen the virtual classroom, student management and admin system to smoothly run online universities without any physical campus. "
    },
    {
      question: "Why choose a software development company for education?",
      answer: "Choosing the right software development company and expertise for your institution will benefit you with compliance, scalability, and security."
    },
    {
      question: "How do education IT services benefit schools?",
      answer: "An education IT service would help you workload, improve teaching through digital tools and keep your system secure & reliable. "
    },
    {
      question: "What sectors profit from education software development?",
      answer: "Higher education, online univerisities, K-12 schools, ed-tech startups, tutoring services, public education and all skill training providers benefit from education software. "
    },
    {
      question: "How secure is education software for student data?",
      answer: "Education software ensures security for regular audits, encryption, and keeps student data genuinely safe."
    },
    {
      question: "Does education software service include analytics dashboards?",
      answer: "Yes, most IT companies include analytical dashboards in their education software services."
    },
    {
      question: "How education software development support customized learning?",
      answer: "Education software uses data on each student's pace, and automatically balances content difficulty, suggest resources, and adapt to feedback."
    },
    {
      question: "Can EdTech software development support multilingual learning?",
      answer: "Yes. EdTech supports multilingual learning through translation, and language-switching interfaces to help the students learn in their selected language."
    },
    {
      question: "Why choose Capyngen as your education software development company?",
      answer: "Selecting an education software company is overwhelming, but with Capyngen’s proven experience in combining services with a client-focused approach, and building secure software solutions, it assures that the decision will give you a positive outcome. "
    },
    {
      question: "What education technology solutions Capyngen offers?",
      answer: "We offer LMS software, administration platform, virtual classroom & eLearning solutions, and analytical dashboard to track student’s performance regularly. "
    },
    {
      question: "Can we develop custom education software for schools and universities?",
      answer: "Yes. With Capyngen’s expert team, you can get your customized education software for schools or universities. It includes student information systems, e-learning portals, and mobile learning apps service solutions."
    },
    {
      question: "How Capyngen combines AI into education software?",
      answer: "Capyngen uses AI to automate daily tasks, speed up the manual processes, and support features like personalized learning, grading, and data-driven insights."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-black mb-12 text-center uppercase">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 bg-white rounded-md shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-blue-600 text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 10: Call to Action ---
const EducationCTA = () => {
  return (
    <section className="bg-[#0B0A1E] py-20 md:py-32 w-full flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Shape the Future of Education with Capyngen 
        </h2>
        
        <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
          Capyngen offers high-tech intelligent learning environments, enhancing student success, and advancing digital innovation with AI-powered education solutions. We provide reliable guidance, post-lauch support and a dedicated team of experts, supporting the future of Education in the virtual world. 
        </p>
        
        <button className="bg-[#1f2025] hover:bg-gray-800 border border-gray-500 text-white font-medium py-3 px-8 rounded-full flex justify-center items-center transition-colors duration-300">
          Contact Us for Education Project
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
      </div>
    </section>
  );
};

// --- Main Page Assembly ---
const EducationPage = () => {
  return (
    <div className="w-full min-h-screen font-sans antialiased text-gray-900 flex flex-col">
      <EducationHero />
      <DigitalEducationTransformation />
      <AIEducationTransformation />
      <EducationSolutions />
      <ClientTestimonial />
      <EducationInsights />
      <WhyCapyngen />
      <TransformingDigitalLearning />
      <EducationFAQs />
      <EducationCTA />
    </div>
  );
};

export default EducationPage;