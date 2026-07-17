import { useState } from 'react';

const SMMLandingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are social media marketing services and why do I need them?",
      answer: "Most businesses post on social media without a real plan — and wonder why nothing seems to stick, and social media marketing services change that. "
    },
    {
      question: "What makes Capyngen different from other social media marketing agencies?",
      answer: "Capyngen takes the time to understand your audience, your goals, and your industry. What works for a fashion brand will not work for a B2B software company—and we build accordingly."
    },
    {
      question: "What is included in your SMM services?",
      answer: "At Capyngen, our SMM services cover strategy, content creation, scheduling, community management, and paid advertising."
    },
    {
      question: "How do social media management services save me time?",
      answer: "Our social media management services take all of that off your plate so you can spend your time actually running your business."
    },
    {
      question: "What do social media advertising services actually do?",
      answer: "Social media advertising services use real audience data to put your content in front of people who are genuinely likely to care about what you offer."
    },
    {
      question: "How does a social media marketing company build a content plan?",
      answer: "We start where most agencies skip — your brand voice and your audience. Once we understand how you speak and who you are speaking to, we build a content calendar tailored to each platform. "
    },
    {
      question: "What is the difference between social media strategy services and just posting content?",
      answer: "Posting without a strategy is like driving without a destination. Social media strategy services set the direction first — so every piece of content has a purpose, a platform, and a goal behind it. "
    },
    {
      question: "Is digital social media marketing different from traditional marketing?",
      answer: "Completely. Traditional marketing tells you what worked months after the fact. Digital social media marketing shows you within days what is landing, what is not, and what to change. "
    },
    {
      question: "What does social media campaign management involve?",
      answer: "Social media campaign management handles the timing, the messaging, the coordination across platforms, and the tracking of results."
    },
    {
      question: "How do social media branding services help my business stand out?",
      answer: "Consistency is what makes people remember you. Social media branding services make sure your brand looks, sounds, and feels the same everywhere."
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-[#0066cc] font-bold text-xs tracking-wider uppercase mb-3 block">
            Build and Influence with SMM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Build and Influence with SMM
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base max-w-2xl">
            Boost the digital presence of your brand with our social media marketing services with us. At Capyngen, we build smart social strategies that turn your random followers into loyal consumers through data-backed influence.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors">
              Explore Here
            </button>
            <button className="bg-transparent hover:bg-slate-100 text-[#0066cc] px-6 py-2.5 rounded text-sm font-medium transition-colors border border-[#0066cc]">
              Know More 
            </button>
          </div>
        </div>
      </section>

      {/* The Potential Power of Social Marketing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team discussing presentation" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-[#0066cc] font-bold text-xs tracking-wider uppercase mb-3 block">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Potential Power of Social Marketing
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              In today's scattered digital world, real connection matters more than ever. We believe social media marketing isn't about broadcasting anymore; it's about building lasting communities.
            </p>
            <ul className="space-y-4">
              {[
                "Significant engagement with data-based performance.",
                "The framework of algorithm-based content.",
                "User-centric community operation. "
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What's Happening?</h2>
            <p className="text-slate-500 text-sm">Stay ahead of the game with our take on the changing social media landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Grid Item 1 (Col Span 2) */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="bg-[#0066cc] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide mb-4 inline-block">LATEST NOW</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Rise of Hyper-Niche Communities</h3>
                <p className="text-slate-600 text-sm max-w-md">
                  Brands are shifting from broad reach to deep engagement in small communities where trust and loyalty run highest.
                </p>
              </div>
            </div>

            {/* Bento Grid Item 2 */}
            <div className="bg-[#0b1b36] p-8 rounded-xl shadow-sm text-white flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-6">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-bold mb-3">AI-Driven Social Strategy</h3>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Using machine learning to predict engagement patterns and find the best posting times for audiences worldwide.
                </p>
              </div>
            </div>

            {/* Bento Grid Item 3 */}
            <div className="bg-[#e6f0fa] p-8 rounded-xl shadow-sm border border-blue-50 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 bg-blue-100 text-[#0066cc] rounded flex items-center justify-center mb-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Short-Form Authority</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Mastering 15-second stories that grab attention in a world of endless scrolling.
                </p>
              </div>
            </div>

            {/* Bento Grid Item 4 (Col Span 2) */}
            <div className="md:col-span-2 bg-indigo-50/50 p-8 rounded-xl shadow-sm border border-indigo-50 flex items-center justify-between">
              <div className="max-w-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Social Commerce 2.0</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Smooth, in-app checkout is changing how customers shop directly from their social feed.
                </p>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Capyngen offer? Section */}
      <section className="py-20 px-6 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">What Capyngen offer?</h2>
            <p className="text-slate-500 text-sm">Complete social media solutions built for large companies and bold new brands alike.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Social Strategy", desc: "Data-backed plans that connect your social goals with your bigger business goals." },
              { title: "Content Creation", desc: "Sharp visual storytelling made to fit and perform on each platform." },
              { title: "Community Management", desc: "Active monitoring and engagement that builds trust and gives your brand a human touch." },
              { title: "Social Analytics", desc: "Detailed reports that turn numbers into insights you can actually use." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Capyngen? Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Choose Capyngen?</h2>
            <p className="text-slate-500 text-sm">Capyngen offers clarity, high-quality outcomes, full-range social media marketing solutions, and a world of experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Social Media Marketing Agency", desc: "We offer full-range social media marketing services altogether." },
              { title: "Management & Time Saving", desc: "Scheduling posts, replying to comments, and tracking the outcomes." },
              { title: "Campaigns and Branding", desc: "We make sure every post looks and sounds like it's coming from the same place." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{item.desc}</p>
                <a href="#" className="text-[#0066cc] font-medium text-sm hover:underline mt-auto">Know More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none"
                >
                  {faq.question}
                  <span className="text-[#0066cc] ml-4 font-bold text-xl">{openFaqIndex === index ? '−' : '+'}</span>
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

      {/* Contact Form Section */}
      <section className="bg-[#0b1b36] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to <br/>transform your <br/>feed?
            </h2>
            <p className="text-blue-200 mb-10 text-sm max-w-sm leading-relaxed">
              Ready for the transformation of your business with our social media marketing services? Fill out the form, and our expertise team will contact you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#0066cc] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <p className="font-medium text-sm">+1 (555) 890-2344</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#0066cc] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="font-medium text-sm">social@capyngen.com</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">First Name *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-[#0066cc] transition-colors" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Last Name *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-[#0066cc] transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Email *</label>
                  <input type="email" className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-[#0066cc] transition-colors" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Company *</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-[#0066cc] transition-colors" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Message</label>
                  <textarea rows={3} className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-[#0066cc] transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white py-3 rounded font-medium transition-colors mt-8 text-sm">
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

export default SMMLandingPage;