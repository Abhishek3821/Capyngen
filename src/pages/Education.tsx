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
            <span>Industries</span>
            <span>|</span>
            <span>Education</span>
          </div>
          <div className="text-xs md:text-sm font-bold tracking-widest mb-6 uppercase">
            AI-Powered Digital Learning
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Shaping the Future of Education Through Technology
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            Empower educational institutions with AI-powered learning platforms, digital campus solutions, student management systems, and immersive learning experiences that inspire innovation, collaboration, and lifelong learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Talk to Education Experts 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded flex justify-center items-center transition-colors duration-300">
              Explore Education Solutions
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
              Digital Education Transformation
            </h2>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Education is evolving beyond traditional classrooms. Today's
                institutions require intelligent digital ecosystems that support hybrid
                learning, personalized education, student engagement, and efficient
                campus operations.
              </p>
              <p>
                Capyngen partners with schools, universities, EdTech companies, and
                training organizations to build scalable digital learning platforms
                powered by AI, cloud technologies, automation, and data-driven
                insights.
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
              AI is Transforming Modern Education
            </h2>
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Artificial Intelligence is redefining education
                by enabling personalized learning, intelligent
                tutoring, automated assessments, and
                predictive student analytics.
              </p>
              <p>
                Capyngen develops AI-driven education
                solutions that improve learning outcomes
                while simplifying academic administration.
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
      title: "Learning Management Systems (LMS)",
      image: "image_121eb9_lms.jpg",
    },
    {
      title: "Student Information Systems",
      image: "image_121eb9_sis.jpg",
    },
    {
      title: "AI Virtual Learning Assistants",
      image: "image_121eb9_ai.jpg", 
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-12 uppercase">
          Education Solutions
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
                  Read More
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
                Capyngen's digital learning solutions transformed the way we
                deliver education. From AI-powered learning experiences to
                streamlined campus management, their technology has
                significantly improved student engagement and operational
                efficiency."
              </p>
              <div className="flex flex-col items-end mt-8 w-full">
                <h4 className="text-blue-600 text-xl md:text-2xl font-bold uppercase tracking-wide mb-1">
                  Client Testimonial
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
      title: "Personalized Learning with AI",
      image: "image_122235_card1.jpg", 
    },
    {
      title: "Smart Digital Campuses",
      image: "image_122235_card2.jpg", 
    },
    {
      title: "Learning Analytics",
      image: "image_122235_card3.jpg", 
    },
    {
      title: "Future of EdTech",
      image: "image_122235_card4.jpg", 
    }
  ];

  return (
    <section className="bg-[#111827] py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Education Insights
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
                  READ MORE
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
      title: "AI-Driven Innovation",
      description: "CREATING INTELLIGENT LEARNING EXPERIENCES FOR EVERY STUDENT.",
      image: "image_1c0402_card1.jpg"
    },
    {
      title: "Student-Centric Design",
      description: "BUILDING ENGAGING DIGITAL PLATFORMS FOCUSED ON USABILITY AND ACCESSIBILITY.",
      image: "image_1c0402_card2.jpg"
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "SECURE CLOUD-NATIVE SOLUTIONS THAT GROW WITH EDUCATIONAL INSTITUTIONS.",
      image: "image_1c0402_card3.jpg"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 uppercase tracking-wide">
            WHY CAPYNGEN
          </h2>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            Technology That Powers Future Learning
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
    "65% Increase in Student Engagement",
    "50% Faster Administrative Processes",
    "Improved Faculty Collaboration",
    "Enhanced Learning Experience"
  ];

  return (
    <section className="bg-white w-full">
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Transforming Digital<br className="hidden md:block" /> Learning
            </h2>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
              Capyngen partnered with a leading university 
              to modernize its digital learning ecosystem 
              and streamline campus operations.
            </p>
            <div className="text-gray-900 text-lg md:text-xl mb-4">
              Results
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

// --- Section 9: Call to Action ---
const EducationCTA = () => {
  return (
    <section className="bg-[#0B0A1E] py-20 md:py-32 w-full flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Build the Future of Education with Capyngen
        </h2>
        
        <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
          Create intelligent learning environments, improve student success,
          and accelerate digital transformation with AI-powered education
          solutions.
        </p>
        
        <button className="bg-[#1f2025] hover:bg-gray-800 border border-gray-500 text-white font-medium py-3 px-8 rounded-full flex justify-center items-center transition-colors duration-300">
          Start Your Education Project
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
      <EducationCTA />
    </div>
  );
};

export default EducationPage;