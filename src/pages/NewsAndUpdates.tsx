import { useState } from 'react';

// --- MOCK DATA ---
const newsData = [
  {
    id: 1,
    label: 'NEWS ALERT',
    title: 'Capynge deepens partnership with AWS to power AI-native autonomous enterprises',
    type: 'News Alert',
    date: '24 Apr 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    label: 'NEWS ALERT',
    title: 'Capynge study reveals higher education at a digital crossroads: 61% of universities lag in digital maturity',
    type: 'News Alert',
    date: '23 Mar 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    label: 'NEWS ALERT',
    title: 'Fortune Names Capynge to World\'s Most Admired Companies™ List for Second Straight Year',
    type: 'News Alert',
    date: '03 Mar 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    label: 'NEWS ALERT',
    title: '22-year-old from Brazil wins Capynge CodeSprint™ 2026 as Capynge sets new records for world\'s largest coding competition',
    type: 'News Alert',
    date: '27 Feb 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    label: 'NEWS ALERT',
    title: 'Capynge Youth Innovation Hackathon sees 2,000 students build 1,200 working prototypes in 90 minutes at Global AI Impact Summit 2026',
    type: 'News Alert',
    date: '18 Feb 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    label: 'NEWS ALERT',
    title: 'Capynge AI Empowerment Program trains 2,100 rural women entrepreneurs at the Global AI Impact Summit',
    type: 'News Alert',
    date: '17 Feb 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 7,
    label: 'NEWS ALERT',
    title: 'Capynge and Microsoft Collaborate to Enhance Autonomous Operations for Buildings and Industries with AI',
    type: 'News Alert',
    date: '11 Feb 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 8,
    label: 'NEWS ALERT',
    title: 'Capynge Ranks No. 1 in Customer Satisfaction among Europe\'s Leading Large IT Services Providers',
    type: 'News Alert',
    date: '02 Feb 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 9,
    label: 'NEWS ALERT',
    title: 'Capynge Named Top Employer in Europe for the 8th Consecutive Year by the Top Employers Institute',
    type: 'News Alert',
    date: '28 Jan 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 10,
    label: 'PRESS RELEASE',
    title: 'Capynge Automotive Digital Intelligence Platform launched at CES 2026',
    type: 'Press Release',
    date: '16 Jan 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 11,
    label: 'NEWS ALERT',
    title: 'Newsweek Names Capynge America\'s Most Reliable IT Services Company in 2026 Ranking',
    type: 'News Alert',
    date: '16 Jan 2026',
    image: '/api/placeholder/400/250'
  },
  {
    id: 12,
    label: 'NEWS ALERT',
    title: 'Capynge Partners with Workday to Unlock Power of Human Capital and Supercharge Workplaces with AI',
    type: 'News Alert',
    date: '19 Dec 2025',
    image: '/api/placeholder/400/250'
  }
];

// --- HERO COMPONENT ---
const NewsHero = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] xl:min-h-[600px] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image_341766.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/95 via-[#0a1128]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <nav className="flex items-center text-xs sm:text-sm font-medium tracking-[0.2em] text-slate-300 mb-6 sm:mb-8">
            <a href="/who-we-are" className="hover:text-white transition-colors duration-300">
              WHO WE ARE
            </a>
            <svg className="w-4 h-4 mx-2 sm:mx-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">NEWSROOM</span>
          </nav>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold text-white tracking-tight mb-4 sm:mb-6 leading-none">
            News Alerts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-lg md:max-w-xl">
            Get the latest news, events, and announcements about Capynge
          </p>
        </div>
      </div>
    </section>
  );
};

// --- GRID COMPONENT ---
const NewsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'News Alert', 'Events'];

  // Basic filtering logic
  const filteredData = newsData.filter(item => {
    if (activeFilter === 'All') return true;
    return item.type === activeFilter || item.label.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      
      {/* Filters */}
      <div className="flex items-center space-x-3 sm:space-x-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mr-2">
          Filters
        </span>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeFilter === filter 
                ? 'bg-[#0a1128] text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-tight">
        Discover Capynge News Alerts
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filteredData.map((item) => (
          <article key={item.id} className="group flex flex-col cursor-pointer h-full">
            {/* Image */}
            <div className="w-full h-48 md:h-40 lg:h-48 mb-5 overflow-hidden rounded-xl">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Meta Label */}
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 mb-3 uppercase">
              {item.label}
            </span>
            
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors line-clamp-4">
              {item.title}
            </h3>
            
            {/* Footer */}
            <div className="mt-auto pt-4 flex items-center text-xs text-slate-500">
              <span className="font-medium">{item.type}</span>
              <span className="mx-2">|</span>
              <span>{item.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Results Count */}
      <div className="mt-16 pt-6 border-t border-slate-200 flex items-center text-sm text-slate-500">
        <p>{filteredData.length} results</p>
      </div>
    </section>
  );
};

// --- MAIN PAGE ---
export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <NewsHero />
      <NewsGrid />
    </main>
  );
}