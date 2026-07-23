import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogService, formatBlogDate, type Blog } from '../services/blogService';
import { createSlug } from '../utils/slug';
import heroImage from '../assets/news.png';

// --- TOPIC FILTERS ---
// Fixed list of topics used to filter the blogs. `slug` is compared against the
// slugified category / group / tags of each blog; `label` is what's shown on the button.
const TOPICS: { slug: string; label: string }[] = [
  { slug: 'custom-ai-solutions', label: 'Custom AI Solutions' },
  { slug: 'blockchain-development', label: 'Blockchain Development' },
  { slug: 'application-solutions', label: 'Application Solutions' },
  { slug: 'crm-management-software', label: 'CRM Management Software' },
  { slug: 'ui-ux-design-services', label: 'UI/UX Design Services' },
  { slug: 'artificial-intelligence-services', label: 'Artificial Intelligence Services' },
  { slug: 'cybersecurity', label: 'Cybersecurity' },
  { slug: 'enterprise-solutions', label: 'Enterprise Solutions' },
  { slug: 'consulting', label: 'Consulting' },
  { slug: 'public-service', label: 'Public Service' },
  { slug: 'life-science', label: 'Life Science' },
  { slug: 'education', label: 'Education' },
  { slug: 'energy-resources-utilities', label: 'Energy, Resources & Utilities' },
  { slug: 'high-tech', label: 'High Tech' },
  { slug: 'gaming', label: 'Gaming' },
  { slug: 'web-development', label: 'Web Development' },
  { slug: 'app-development', label: 'App Development' },
  { slug: 'ecommerce-solutions', label: 'eCommerce Solutions' },
  { slug: 'devops-solutions', label: 'DevOps Solutions' },
  { slug: 'website-design-company-india', label: 'Website Design Company India' },
  { slug: 'branding-identity-design', label: 'Branding & Identity Design' },
  { slug: 'cms-website-design', label: 'CMS Website Design' },
  { slug: 'digital-marketing', label: 'Digital Marketing' },
  { slug: 'seo', label: 'SEO' },
  { slug: 'ppc', label: 'PPC' },
  { slug: 'data-analytics-services', label: 'Data Analytics Services' },
];

// --- HERO COMPONENT ---
const NewsHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/95 via-[#0a1128]/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-4 sm:mb-6 leading-none">
            News Alerts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-lg">
            Get the latest news, events, and announcements about Capyngen
          </p>
        </div>
      </div>
    </section>
  );
};

// --- GRID COMPONENT ---
const NewsGrid = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  // Holds the active topic slug, or 'all' for no filtering.
  const [activeFilter, setActiveFilter] = useState('all');

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const list = await BlogService.listAll();
        setBlogs(list);
      } catch (err) {
        console.error('Blog fetch failed', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Only show topics that actually have at least one matching blog, plus "All".
  const filters = useMemo(() => {
    const slugsInUse = new Set<string>();
    blogs.forEach((item) => {
      [item.category, item.group, ...(item.tags ?? [])].forEach((value) => {
        if (value) slugsInUse.add(createSlug(value));
      });
    });
    const available = TOPICS.filter((topic) => slugsInUse.has(topic.slug));
    return [{ slug: 'all', label: 'All' }, ...available];
  }, [blogs]);

  // A blog matches when its slugified category, group, or any tag equals the active topic slug.
  const filteredData = blogs.filter((item) => {
    if (activeFilter === 'all') return true;
    return [item.category, item.group, ...(item.tags ?? [])]
      .filter(Boolean)
      .some((value) => createSlug(value as string) === activeFilter);
  });

  const openBlog = (blog: Blog) => {
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  return (
    <section className="w-full bg-white pb-16 lg:pb-24">
      
      {/* Full-width Redesigned Filter Bar */}
      <div className="w-full bg-white/80 backdrop-blur-lg sticky top-0 z-20 border-b border-gray-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Label and Icon */}
          <div className="flex items-center gap-2 pr-5 mr-2 border-r border-gray-300 shrink-0">
            <svg 
              className="w-4 h-4 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="text-[11px] font-bold tracking-widest text-gray-800 uppercase">
              Filter By
            </span>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2.5 px-2">
            {filters.map((filter) => (
              <button
                key={filter.slug}
                onClick={() => setActiveFilter(filter.slug)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  activeFilter === filter.slug
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14">
        {/* Section Title */}
        <h2 className="text-3xl md:text-[2.5rem] font-medium text-gray-900 mb-10 tracking-tight">
          Discover Capyngen News Alerts
        </h2>

        {loading ? (
          /* Skeleton Loader Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col h-full">
                <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="w-24 h-3 bg-gray-200 rounded mb-3"></div>
                <div className="w-full h-5 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-5 bg-gray-200 rounded mb-4"></div>
                <div className="w-32 h-3 bg-gray-200 rounded mt-auto"></div>
              </div>
            ))}
          </div>
        ) : filteredData.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">No news found for this category.</p>
          </div>
        ) : (
          /* News Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredData.map((item) => (
              <article
                key={item._id}
                onClick={() => openBlog(item)}
                className="group flex flex-col cursor-pointer h-full"
              >
                {/* Image Container */}
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Meta Label */}
                <span className="text-[10px] font-semibold tracking-widest text-gray-400 mb-2 uppercase">
                  {item.group || item.category || 'News Alert'}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors line-clamp-4">
                  {item.title}
                </h3>

                {/* Footer */}
                <div className="mt-auto pt-1 flex items-center text-[11px] font-medium text-gray-400">
                  <span>{item.category || 'News Alert'}</span>
                  <span className="mx-1.5">|</span>
                  <span>{formatBlogDate(item.date || item.createdAt)}</span>
                </div>
              </article>
            ))}
          </div>
        )}
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