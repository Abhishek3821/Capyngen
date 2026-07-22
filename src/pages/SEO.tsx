import { useState } from 'react';
import img1 from "../assets/SEO.png"; // Ensure this path is correct

const SEOLandingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why do we need search engine optimization services?",
      answer: "Search engines are often the first place people go to find a business. If your website doesn't show up on the first page, most people never even scroll to find you. "
    },
    {
      question: "What does Capyngen offer in enterprise SEO services?",
      answer: "Capyngen provides SEO services, including full SEO services, clear communication, and long-term growth for businesses."
    },
    {
      question: "Why is technical SEO different from regular SEO?",
      answer: "Technical SEO is about how your website works in the background, while a regular SEO service means website content optimization."
    },
    {
      question: "Why do local SEO services matter for small businesses?",
      answer: "Most of the customers search nearby. Local SEO consulting services make sure you show up when someone searches \"near me\" or looks for services in your city."
    },
    {
      question: "How much duration does SEO take to show results?",
      answer: "Most businesses start seeing positive outcomes within three to six months. Some smaller technical fixes can help sooner, but SEO builds over time. It's not an overnight switch; it's steady progress."
    },
    {
      question: "How much does the SEO service actually cost?",
      answer: "It depends. A small local business needs a lot less than a large company with hundreds of pages. We look at your specific situation before giving you a number, so you're not paying for things you don't need."
    },
    {
      question: "How do I connect to Capyngen for my project?",
      answer: "You can reach out to us through our website's contact form or send us a message directly with a bit about your project, and we will respond quickly and set up a call to understand your goals."
    },
    {
      question: "How often should on-page SEO be updated?",
      answer: "You should check on-page SEO in every few months, as search trends shift, competitors update pages, and older content can lose its ranks. "
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-50/0"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <span className="text-[white] font-semibold text-xs tracking-wider uppercase mb-4 block">
              ENHANCED & SMART SEARCH 
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[white] mb-6 leading-tight">
              Empower Search <br/>with Exclusive SEO 
            </h1>
            <p className="text-white mb-8 max-w-lg leading-relaxed text-sm md:text-base">
              Upgrade your online influence with fact-based technical optimization and high-quality content strategy. Capyngen brings complex search algorithms and meaningful business growth together in one search engine optimization services.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#094770] hover:bg-[#073554] text-white px-6 py-3 rounded-md font-medium transition-colors text-sm">
                Improve Ranking
              </button>
              <button className="bg-white hover:bg-slate-50 text-[#094770] border border-[#094770] px-6 py-3 rounded-md font-medium transition-colors text-sm">
                Audit My Site
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#094770] mb-6">Strategic Solution</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Capyngen’s SEO is not just about tricks but about strategies and management. We merge technical accuracy with commentary brilliance to develop enduring online gadgets that instruct search engines with certainty. 
            </p>
            <ul className="space-y-4">
              {[
                "Global technical framework audits for bot navigation.",
                "User intent content converges for exclusive domain expertise.",
                "Data-centric connection, procuring from domain origin authority. "
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-[#094770] text-white rounded-lg p-6 flex flex-col justify-center">
              <svg className="w-8 h-8 text-blue-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <h3 className="font-bold text-lg mb-2">Authority</h3>
              <p className="text-xs text-blue-200 leading-relaxed">Developing organizational assurance with authenticated high-quality measurement. </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 flex flex-col justify-center">
              <svg className="w-8 h-8 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <h3 className="font-bold text-[#094770] text-lg mb-2">Network</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Maximizing skillful experts' connections for strategic development. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Trends Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#094770] mb-2">Latest Trends</h2>
              <p className="text-slate-500 text-sm">Up-to-date intelligence through the search aspect.</p>
            </div>
            <a href="#" className="text-blue-600 font-medium text-sm hover:underline">Explore Analysis Here →</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "ALGORITHM UPDATE", date: "5 MIN READ",
                title: "Latest Transformation in Generative Search Vision",
                desc: "The newest primary improvements are rebuilding the organic ranking context for industries' B2B operations. ",
                img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                category: "TECHNICAL SEO", date: "8 MIN READ",
                title: "Empowering Essence Web Crucial for Growth",
                desc: "Accurate aligning of web server edge response duration and performance consistency for competitive ranking benefits. ",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                category: "CONTENT STRATEGY", date: "6 MIN READ",
                title: "Semantic Authority in Professional Services",
                desc: "Developing beyond keywords to get the whole expertise chart for your industry's most crucial points. ",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
                  <span>{post.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#094770] mb-2 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Do We Offer? Section */}
      <section className="py-24 px-6 bg-[#eff3f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#094770] mb-3">What Do We Offer?</h2>
            <p className="text-slate-500 text-sm">Adoptable solutions built to support top institutions' development and rank higher.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Technical SEO Audit */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#094770] mb-3">Technical SEO Audit</h3>
                <p className="text-sm text-slate-500 mb-6 max-w-lg">
                  We offer framework data analysis of your site's setup, from schema markup to indexing speed and mobile performance.
                </p>
                {/* <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View Service </a> */}
              </div>
              
              {/* On-Page Optimization */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-[#094770] mb-3">On-Page Optimization</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Improving your content with metadata so your every page shows its real value to search engines clearly and ranks higher.
                </p>
                {/* <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read More </a> */}
              </div>

              {/* Backlink Operation */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <h3 className="text-lg font-bold text-[#094770] mb-3">Backlink Operation</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Developing white-hat authority with smart outreach strategy and quality placements on trusted websites.
                </p>
              </div>
            </div>

            {/* Right Column (Keyword Strategy) */}
            <div className="md:col-span-1 bg-[#094770] rounded-xl text-white overflow-hidden flex flex-col shadow-lg">
              <div className="p-8 flex-grow">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Keyword Strategy</h3>
                <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                  Choose high-intent keywords that are based on real data analysis and are relevant to your business goals and competitors.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-blue-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> Commercial Purpose Evaluation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> Gap Assessment vs. Competitors
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> Long-tail Avenue Innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Capyngen? Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#094770] mb-2">Why Choose Capyngen?</h2>
              <p className="text-slate-500 text-sm">At Capyngen, we provide professional SEO services, offering on-page SEO services, off-page SEO services, and technical SEO—all in one package.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Full-Service SEO", desc: "From technical fixes to on-page content, off-page authority, and local SEO." },
              { title: "Clear Communication", desc: "Always clarify and explain where your SEO stands." },
              { title: "Data-Backed Decisions", desc: "Every keyword, every fix, and every strategy on data analysis." },
              { title: "Long-Term Growth", desc: "We focus on long-lasting results and outcomes for our clients." }
            ].map((item, i) => (
              <div key={i} className="text-center bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#094770] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                {/* <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Know More </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#094770] mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none"
                >
                  {faq.question}
                  <span className="text-blue-600 ml-4">{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-slate-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Dark Blue Panel */}
          <div className="bg-[#094770] w-full md:w-5/12 p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Define Your Smart Future Search </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-10">
              Ready for transformation of your business with our SEO company? Fill out the form, and our expertise team will contact you within 24 hours.
            </p>
            
            
          </div>
          
          {/* Right Form Panel */}
          <div className="bg-white w-full md:w-7/12 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">First Name *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#094770] transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Last Name *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#094770] transition-colors bg-transparent" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email *</label>
                  <input type="email" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#094770] transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Company *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#094770] transition-colors bg-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={3} className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-[#094770] transition-colors bg-transparent resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#094770] hover:bg-[#073554] text-white py-4 rounded-md font-bold transition-colors mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SEOLandingPage;