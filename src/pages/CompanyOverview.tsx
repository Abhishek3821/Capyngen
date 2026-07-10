import React from 'react';

// --- HERO COMPONENT (image_34f126.jpg) ---
const AboutHero = () => {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] xl:min-h-[500px] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image_34f126.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071022]/95 via-[#071022]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <div className="mb-6 sm:mb-8 w-full border-b border-white/20 pb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-none">
            Our Company
          </h1>
        </div>
      </div>
    </section>
  );
};

// --- INTRODUCTION TEXT COMPONENT (image_438bed.png) ---
const AboutIntroduction = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-8 sm:mb-10">
            Partnering with enterprises for lasting transformation
          </h2>
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            <p>
              Capyngen was founded with a singular focus: making AI real for enterprises. We believe that technology transformation is not a sprint—it is an enduring journey that demands deep expertise, trusted partnership, and relentless commitment to measurable outcomes.
            </p>
            <p>
              Since our inception, the Capyngen brand has emerged as a recognized leader in AI-powered enterprise services. Our brand value is built on something far more durable than recognition—it is built on results that compound year after year for the clients who trust us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- AI RECOGNITION SECTION (image_43f501.jpg) ---
const AiRecognitionSection = () => {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image_43f501.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/95 via-[#0a1128]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white uppercase mb-6 sm:mb-8">
            AI Recognition & Excellence
          </p>
          <div className="border-l-[3px] sm:border-l-4 border-blue-400 pl-6 sm:pl-8 lg:pl-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Capyngen recognized with first-ever AI Leader designation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              Capyngen has reinforced its position as a global leader in AI-powered enterprise services, achieving top recognition from Gartner Peer Insights, Forbes, and the world's most discerning enterprise clients—demonstrating sustained momentum in our vision to become the world's most trusted AI transformation partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- QUOTE SECTION (image_43f887.png) ---
const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-6 md:mb-8">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-[#5A83C5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="pl-4 sm:pl-8 md:pl-12">
          <p className="text-[#5A83C5] text-xl sm:text-2xl md:text-[26px] leading-[1.7] font-light mb-12 sm:mb-16">
            Building a lasting enterprise intelligence practice is like a marathon. Every decision you make matters, while keeping focused on the long game ahead. The Capyngen brand has been built ensuring the highest standards of innovation, AI expertise, and client partnership—along with a deep sense of long-term commitment to the communities, industries, and humans we serve. We run together to harness the power of technology in improving human experiences—from how enterprises do business to how they compete, adapt, and lead in a world of constant change.
          </p>
          <div className="w-full border-t border-slate-100 pt-8 flex justify-end">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e2e2e2] rounded-full flex-shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] text-slate-900 uppercase mb-0.5">
                  Vivek Ojha
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-normal">
                  Chief Executive Officer, Capyngen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- AI ASPIRATION SECTION (image_43f8e7.png) ---
const AiAspirationSection = () => {
  return (
    <section className="w-full bg-[#f4f5f7] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1 w-full">
            <img 
              src="/image_43f8e7.png" 
              alt="Capyngen team collaborating in an open office environment" 
              className="w-full h-auto object-cover rounded-[20px] shadow-sm"
            />
          </div>
          <div className="order-1 lg:order-2 w-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-6">
              Redefining AI leadership through innovation and human connection
            </h2>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-8">
              As we build the world's most trusted AI-led technology services company, Capyngen is focused on making AI real for customers, communities, and society. Our AI Innovation Summit 2026 explored this mission through transformative enterprise conversations—bringing together global leaders to co-create the future of intelligent business.
            </p>
            <div>
              <a 
                href="/ai-aspiration" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-base font-medium rounded-full transition-colors duration-300"
              >
                Discover our AI aspiration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- BRAND CAMPAIGNS SECTION (image_78215e.jpg) ---
const BrandCampaignsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <h2 className="text-sm md:text-base font-medium tracking-[0.15em] text-slate-600 uppercase mb-8 md:mb-12">
          Brand Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full overflow-hidden rounded-md mb-5 bg-slate-100">
              <img 
                src="/image_78215e.jpg" 
                alt="Capyngen team collaborating" 
                className="w-full aspect-[16/10] object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
              With you for the long run
            </h3>
            <p className="text-sm text-slate-500 font-normal mb-5">
              How Capyngen builds enduring partnerships that go the distance
            </p>
            <div>
              <span className="inline-block text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 group-hover:text-blue-700 group-hover:border-blue-700 transition-colors duration-300">
                Read more
              </span>
            </div>
          </div>
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full overflow-hidden rounded-md mb-5 bg-slate-100">
              <img 
                src="/api/placeholder/800/500" 
                alt="Enterprise AI visualization" 
                className="w-full aspect-[16/10] object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
              The formula for enterprise AI
            </h3>
            <p className="text-sm text-slate-500 font-normal mb-5">
              Rigorous methodology meets adaptive intelligence at scale
            </p>
            <div>
              <span className="inline-block text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 group-hover:text-blue-700 group-hover:border-blue-700 transition-colors duration-300">
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- GLOBAL BRAND PLATFORMS SECTION (image_78347a.jpg) ---
const GlobalBrandPlatformsSection = () => {
  const platforms = [
    { id: 1, title: 'Capyngen Innovation Labs', image: '/image_78347a.jpg' },
    { id: 2, title: 'Capyngen AI Research', image: '/api/placeholder/400/600' },
    { id: 3, title: 'Global Partner Network', image: '/api/placeholder/400/600' },
    { id: 4, title: 'Community AI Programs', image: '/api/placeholder/400/600' }
  ];

  return (
    <section className="w-full bg-[#2A64ED] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-white tracking-tight">
            Global brand platforms
          </h2>
          <a 
            href="/platforms" 
            className="inline-flex items-center justify-center px-6 py-2 border border-white/40 hover:border-white hover:bg-white/10 text-white text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap"
          >
            View all platforms
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.id} className="relative group overflow-hidden rounded-[16px] h-[350px] lg:h-[420px] cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${platform.image}')` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="relative z-10 p-6">
                <h3 className="text-xl md:text-[22px] font-semibold text-white leading-tight pr-4">
                  {platform.title.split(' ').map((word, i, arr) => {
                    if (arr.length > 2 && i === 0) return <React.Fragment key={i}>{word} <br/></React.Fragment>;
                    if (arr.length === 2 && i === 0) return <React.Fragment key={i}>{word} <br/></React.Fragment>;
                    return <span key={i}>{word} </span>;
                  })}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CALL TO ACTION SECTION (image_7889be.png) ---
const CallToActionSection = () => {
  return (
    <section className="w-full bg-[#060814] py-20 sm:py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6">
          With you for the <br className="hidden sm:block" /> transformation ahead
        </h2>
        
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          Whether you are beginning your AI journey or scaling what already works,
          Capyngen is the partner that goes the distance. Let's build the future of your
          enterprise together.
        </p>

        <a 
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-slate-400 text-white text-sm font-medium bg-[#1a1f2e]/40 hover:bg-[#1a1f2e] transition-all duration-300"
        >
          Connect with us
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <AboutHero />
      <AboutIntroduction />
      <AiRecognitionSection />
      <QuoteSection />
      <AiAspirationSection />
      <BrandCampaignsSection />
      <GlobalBrandPlatformsSection />
      <CallToActionSection />
    </main>
  );
}