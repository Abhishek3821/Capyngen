import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Monitor, 
  RefreshCcw, 
  TrendingUp, 
  CheckCircle2,
} from 'lucide-react';
import img1 from "../assets/ppc/1.png";
import img2 from "../assets/ppc/2.png";

const PPCLandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are PPC services and how can they help my business?",
      answer: "PPC services put your business in front of people who are already looking for what you offer—right at the moment they are searching. "
    },
    {
      question: "What is included in pay per click services?",
      answer: "At Capyngen, we offer everything from finding the right keywords and writing the ads to managing your bids and tracking what is working."
    },
    {
      question: "Why should I hire a PPC management services provider instead of doing it myself?",
      answer: "A PPC management services team watches your campaigns every day, catching what is wasting money and scaling what is working before the damage adds up."
    },
    {
      question: "What does Google Ads management actually involve?",
      answer: "Google Ads management means building the right campaigns, choosing the keywords that will actually convert, and writing ad copy that gets clicked."
    },
    {
      question: "How is a PPC advertising agency different from a general marketing agency?",
      answer: "A PPC advertising agency lives and breathes paid search. The focus is narrower, especially when it comes to bidding strategy, audience targeting, and getting the most from your ad budget."
    },
    {
      question: "What effect pay per click advertising for quick results?",
      answer: "Pay per click advertising puts your brand at the top of search results almost immediately. The moment your campaign is live, you are visible to people who are ready to take action."
    },
    {
      question: "What should I expect from PPC marketing services in terms of reporting?",
      answer: "Good PPC marketing services do not hide behind vague metrics—you should always know what your money is doing."
    },
    {
      question: "Why work with a Google Ads agency instead of managing ads in-house?",
      answer: "A Google Ads agency tracks all of it as part of their daily work, which means fewer costly mistakes and a budget that is being used as efficiently as possible."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider text-sm">PERFORMANCE MARKETING</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              High-Impact PPC<br />Advertising
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Reach the high-intent audience at the right moment and turn paid traffic into real, sustained revenue growth, implementing your budget where it performs and keeping it there.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 rounded font-medium transition-colors">
                Improve Performance
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded font-medium transition-colors">
                View Our Approach
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100">
              <img 
                src={img1} 
                alt="Analytics Dashboard" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-m text-slate-500 font-medium">Higher conversions</p>
                  {/* <p className="text-2xl font-bold text-blue-600">+24.6%</p> */}
                </div>
                <div>
                  <p className="text-m text-slate-500 font-medium">Lower cost per click
</p>
                  {/* <p className="text-2xl font-bold text-slate-900">-38%</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Precision Ad Strategies Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Precision Ad<br />Strategies
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Capyngen, we do not just run ads. We build paid search systems that are genuinely designed to grow your revenue. Our approach combines an understanding of how people actually make buying decisions with the data and technology to reach them at exactly the right moment. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every campaign we run is built around one question — what does this spend need to return? And every decision we make is tracked back to that answer. Not vanity metrics. Not impressions. Real, measurable results that show up in your revenue.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#f8faff] p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bidding Intelligence </h3>
                <p className="text-sm text-slate-600">Our automated bidding strategies respond to market shifts in real time — keeping you in the right positions without overpaying for them.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-lg border-l-4 border-transparent hover:border-blue-300 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">ROI Amplification</h3>
                <p className="text-sm text-slate-600">Small improvements compound quickly, and we keep pushing until every part of your traffic is working as hard as it can.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-lg border-l-4 border-transparent hover:border-blue-300 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Audience Segmentation</h3>
                <p className="text-sm text-slate-600">By combining intent signals, demographics, and cross-channel behavior, we reach the people most likely to convert — and stop wasting budget on those who are not.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">REAL-WORLD OUTCOMES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Success stories </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-700 uppercase text-sm tracking-wider">
            VIEW ALL RESEARCH <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Image Card */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-slate-900 min-h-[320px] sm:min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
              alt="Tech Circuit" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wider">FINTECH SCALE-UP</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Scaling Search Revenue by 312% in Q3</h3>
              <p className="text-slate-300 mb-6 max-w-xl">A global SaaS business was spending heavily on paid search but not seeing the returns to match. The budget was going to the wrong places, and the right customers were not being reached.</p>
              <a href="#" className="inline-flex items-center text-white font-medium border-b border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-colors">
                Read Here <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Solid Color Card */}
          <div className="bg-[#0f6bbd] rounded-xl p-8 flex flex-col justify-end min-h-[320px] sm:min-h-[400px] group hover:bg-[#0d5ca3] transition-colors cursor-pointer">
            <p className="text-blue-200 font-semibold mb-2 text-sm uppercase tracking-wider">E-COMMERCE COMFORT</p>
            <h3 className="text-2xl font-bold text-white mb-4">Omnichannel Remarketing</h3>
            <p className="text-blue-100 mb-6">Recovering $2.4M in Abandoned Cart Revenue Through Cross-Platform Retargeting. Most of that revenue feels gone. It does not have to be.</p>
            <div className="mt-auto">
              <a href="#" className="inline-flex items-center text-white font-medium border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                Read Here <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities Grid */}
      <section className="bg-white py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">PPC Capabilities</h2>
            <p className="text-slate-600">Integrated solutions for every stage of the customer journey.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Search Advertising</h3>
              <p className="text-sm text-slate-600 leading-relaxed">We build keyword strategies that go after the searches most likely to turn into real customers — not just high traffic numbers that look good on a report but do not convert.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Display Ads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">We place high-impact visual ads across the right placements to put your business in front of the right audience — building recognition and trust long before they are ready to click.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Remarketing Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Most people do not buy the first time they visit. Remarketing keeps your brand in front of the people who already showed interest.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Ad Spend Optimization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Every pound of your budget should be earning its place. We audit performance constantly, cut what is not working, and move spend toward what is. </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us? Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We serve our client PPC services and Google Ads management and support them on a global platform.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="border-l-2 border-blue-600 pl-5 py-1">
                <p className="text-slate-900 font-bold mb-1">Paid Search Marketing</p>
                <p className="text-sm text-slate-500">Our team lives in Google Ads management every day—tracking bids, testing creatives, and making sure your budget is working as hard as possible.</p>
              </div>
              <div className="border-l-2 border-blue-600 pl-5 py-1">
                <p className="text-slate-900 font-bold mb-1">We Treat Your Budget Like Our Own</p>
                <p className="text-sm text-slate-500">Every pound you spend on pay per click advertising is tracked, measured and accounted for. </p>
              </div>
              <div className="border-l-2 border-blue-600 pl-5 py-1">
                <p className="text-slate-900 font-bold mb-1">Build Campaigns With Goals</p>
                <p className="text-sm text-slate-500">Whether you need full PPC campaign management or strategic PPC consulting services.</p>
              </div>
              <div className="border-l-2 border-blue-600 pl-5 py-1">
                <p className="text-slate-900 font-bold mb-1">Up-to-date</p>
                <p className="text-sm text-slate-500">Our PPC marketing services come with transparency and straightforward reporting. </p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[600px]">
            <img 
              src={img2} 
              alt="Domain Expert" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition-colors flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span className="text-blue-600 font-bold text-xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-2 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-[#0b4b82] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left side text */}
            <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Scale?</h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed max-w-md">
                Ready for the transformation of your business with our Pay Per Click services? Fill out the form, and our expertise team will contact you within 24 hours.
              </p>
              
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" />
                  <span>Comprehensive Account Audit</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" />
                  <span>In-Depth Competitive Gap Analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0" />
                  <span>Custom Strategy Built Around Your Goals</span>
                </li>
              </ul>
            </div>
            
            {/* Right side form */}
            <div className="bg-white/5 p-10 sm:p-14 lg:p-16 flex items-center">
              <form 
                className="bg-white w-full max-w-md rounded-xl p-8 shadow-lg"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 rounded border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 rounded border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-4 py-3 rounded border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3.5 rounded transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PPCLandingPage;