import { useState } from 'react';

const PublicServicesLandingPage = () => {
  const [activeTab, setActiveTab] = useState('All Updates');

  const tabs = ['All Updates', 'Announcements', 'Events', 'Case Studies', 'Press Releases', 'Blogs'];

  const impactAreas = [
    {
      title: 'Citizen Services',
      description: 'Enhancing accessibility and delivering seamless digital experiences for all.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Smart Governance',
      description: 'Improving transparency, accountability, and decision-making through data.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Public Safety',
      description: 'Strengthening emergency response, security, and community safety.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Health & Social Care',
      description: 'Improving public health services and care delivery through technology.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Education',
      description: 'Empowering learning ecosystems and modernizing education infrastructure.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'Building solutions for climate action, resource management, and resilience.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Infrastructure',
      description: 'Optimizing public infrastructure and urban services with smart technologies.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-4 0V4zM4 11a2 2 0 114 0v1a2 2 0 01-4 0v-1zm11 0a2 2 0 114 0v1a2 2 0 01-4 0v-1zM11 18a2 2 0 114 0v1a2 2 0 01-4 0v-1z" />
        </svg>
      )
    },
    {
      title: 'Economic Development',
      description: 'Driving growth, employment, and innovation for stronger communities.',
      icon: (
        <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      
      {/* 1. PUBLIC SERVICES HERO SECTION */}
      <section 
        className="relative w-full min-h-[640px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('image_10c157.jpg')` }}
      >
        {/* Deep navy left gradient mask matching the image layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031530] via-[#031530]/75 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <span className="text-gray-400 font-semibold text-xs md:text-sm tracking-widest uppercase block mb-4">
              INDUSTRIES | PUBLIC SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.15] mb-8">
              Building Better Communities.<br />Delivering Digital Impact.
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
              Empowering governments and public sector organizations to modernize, enhance citizen experiences, and drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORWARD-THINKING STATEMENT SECTION */}
      <section className="bg-[#f4f6f9] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[#0055ff] text-xl md:text-2xl font-bold uppercase tracking-wider leading-snug">
              FORWARD-THINKING.<br />
              CITIZEN-CENTRIC.<br />
              FUTURE-READY.
            </h2>
          </div>
          <div className="lg:col-span-8 text-gray-700 text-base md:text-[17px] leading-relaxed space-y-6">
            <p>
              Technology is transforming the way governments serve citizens. From simplifying public services to improving transparency and operational efficiency, digital innovation is at the heart of modern governance.
            </p>
            <p>
              Capyngen partners with government agencies and public sector organizations to design and build secure, scalable, and inclusive digital solutions that empower communities and drive sustainable progress.
            </p>
            <p className="italic font-medium text-gray-800 pt-2">
              Our mission is clear: leverage technology and strategy to build a smarter, more responsive, and more resilient public sector.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR IMPACT AREAS SECTION */}
      <section className="bg-[#edf3f9] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold uppercase tracking-widest text-gray-900 mb-16">
            OUR IMPACT AREAS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, idx) => (
              <div key={idx} className="bg-white p-8 flex flex-col items-start rounded-none shadow-sm min-h-[240px]">
                <div className="mb-5 p-1">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PUBLIC SECTOR TESTIMONIAL SECTION */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-[#0055ff] text-7xl font-serif mb-2 leading-none">“</div>
          
          <blockquote className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#1d64db] leading-snug mb-10">
            "Capyngen has been a remarkable technology partner in our journey towards digital transformation. Their expertise, commitment, and deep understanding of public sector challenges have helped us deliver citizen-centric services that create real "
          </blockquote>
          
          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-800">
              Additional Chief Secretary,
            </p>
            <p className="text-sm text-gray-500">
              - Department of Digital Services
            </p>
          </div>
        </div>
      </section>

      {/* 5. NEWSROOM SECTION */}
      <section className="bg-[#0b1424] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Newsroom</h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-800 pb-4 mb-12 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 relative -mb-[17px] transition font-medium ${
                  activeTab === tab ? 'text-white border-b-2 border-[#0055ff]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Featured Content Wrapper Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-[#070d18] rounded-none overflow-hidden border border-gray-900">
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#0055ff] font-semibold text-xs tracking-widest uppercase mb-4 block">
                FEATURED STORY
              </span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Capyngen unified citizen service platform
              </h3>
              <a href="#read" className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white group">
                Read more 
                <span className="ml-2 transform group-hover:translate-x-1 transition duration-200">➔</span>
              </a>
            </div>
            
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[460px]">
              <img 
                src="image_10c4a2.jpg" 
                alt="Capyngen public service delivery team meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Carousel Slider Pagination Indicators */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="w-8 h-8 rounded-none border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-600 hover:text-white transition text-xs">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-none border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-600 hover:text-white transition text-xs">
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* 6. FINAL TRANSFORMATION CALL TO ACTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Transform Public Services. <br className="hidden sm:inline" /> Empower Communities.
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Let's build a smarter, more inclusive, and future-ready public sector together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#2563eb] font-semibold py-3.5 px-8 rounded-none transition duration-300 flex items-center justify-center gap-2 text-sm">
              Start Your Transformation <span>➔</span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-none transition duration-300 flex items-center justify-center gap-2 text-sm">
              Talk to Our Experts 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PublicServicesLandingPage;