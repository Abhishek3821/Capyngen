import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogService, formatBlogDate, type Blog } from '../services/blogService';
import { createSlug } from '../utils/slug';
import heroImage from '../assets/news.png'; 

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
  const [activeFilter, setActiveFilter] = useState('All');

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

  // Filters are built from the categories that exist in the API data
  const filters = useMemo(() => {
    const categories = new Set<string>();
    blogs.forEach((item) => {
      if (item.category) categories.add(item.category);
    });
    return ['All', ...Array.from(categories)];
  }, [blogs]);

  // Basic filtering logic
  const filteredData = blogs.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter || item.tags?.includes(activeFilter);
  });

  const openBlog = (blog: Blog) => {
    navigate(`/news-and-updates/${blog.slug || createSlug(blog.title)}`);
  };

  return (
    <section className="w-full bg-white pb-16 lg:pb-24">
      
      {/* Full-width Filter Bar */}
      <div className="w-full border-b border-gray-100 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide">
          <span className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 uppercase whitespace-nowrap">
            Filters
          </span>
          <div className="flex space-x-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#0a1128] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14">
        {/* Section Title */}
        <h2 className="text-3xl md:text-[2.5rem] font-medium text-gray-900 mb-10 tracking-tight">
          Discover Capynge News Alerts
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