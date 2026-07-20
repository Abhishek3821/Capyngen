import React, { useState } from 'react';
import { 
  ArrowRight, 
  Network, 
  Megaphone, 
  Cloud, 
  Smartphone,
} from 'lucide-react';

const WebsiteDesignLandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a CMS and why does my business need one?",
      answer: "A CMS—content management system—is what lets your team create, edit, and publish content without needing a developer every time."
    },
    {
      question: "What kind of CMS solutions does Capyngen build?",
      answer: "At Capyngen, we design and build everything from custom admin dashboards to full headless CMS integrations, including publishing interfaces, automated editorial workflows, or migrations away from legacy systems."
    },
    {
      question: "How does Capyngen make the CMS easier for different team members?",
      answer: "We tailor the interface to match different user roles. An editor sees what they need. An approver sees what they need. Nobody is wading through settings that have nothing to do with their job."
    },
    {
      question: "What is composable architecture and why does it matter?",
      answer: "Composable architecture means building your CMS from the best individual tools rather than one rigid system that does everything adequately."
    },
    {
      question: "How long does it take to set up a new CMS?",
      answer: "A focused custom interface moves faster than a full enterprise platform with multi-team workflows and headless integrations. We map this out clearly during the consultation phase so you know what to expect before anything begins."
    },
    {
      question: "What is an editorial workflow and why does it matter?",
      answer: "An editorial workflow is the path a piece of content takes from first draft to published. A well-designed one has automated approvals, clear ownership at each stage and cross-team collaboration built in."
    },
    {
      question: "How do you keep our CMS and content secure?",
      answer: "We implement zero-trust access models—meaning every user, at every level, is verified before they can access or edit content. Granular permissions mean your global content assets are protected without slowing down the people who legitimately need access."
    },
    {
      question: "What is an infrastructure audit, and should I get one?",
      answer: "If you are running on an older system, managing multiple disconnected tools or struggling with content bottlenecks, an audit is a smart first step before you invest in anything new."
    },
    {
      question: "How do I get started with CMS website design services?",
      answer: "Book a consultation with our architecture team. We will audit your current setup, map your workflow from end to end, and put together a clear picture of what a better system would look like for your business—and what it would actually cost to get there."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">CMS Design Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f3b68] leading-tight mb-6">
            Building Content with<br />CMS Design Services
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
            At Capyngen, we help offer CMS website design services, providing corporate teams with streamlined publishing setups so they can launch content faster. We hide the technical complexity so your creators can focus entirely on great writing. 
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-8 py-3.5 rounded-sm font-medium transition-colors">
              Enhance Content
            </button>
            <button className="bg-transparent hover:bg-slate-50 text-[#0066cc] border border-[#0066cc] px-8 py-3.5 rounded-sm font-medium transition-colors">
              Explore Portfolio 
            </button>
          </div>
        </div>
      </section>

      {/* 2. Architecture / Methodology Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image with offset background element */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#e4eff9] rounded-sm hidden sm:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace with monitor displaying sitemap" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg border border-slate-100"
              />
            </div>
            
            <div className="lg:pl-8">
              <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">Our Core Value</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">
                Maximizing Content Enhancement
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Capyngen, we believe your web platform should help you move faster, not hold you back. Capyngen designs intuitive tools that let your creative team publish content instantly. You get complete creative freedom built on top of rock-solid corporate security. 
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm"><strong>Ultimate Flexibility:</strong> Flexible design blocks that let your team build custom pages without needing code.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#0066cc] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium text-sm"><strong>Intuitive UX:</strong> Custom admin screens that make the software easy to learn and completely foolproof. </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68]">What's Happening?</h2>
              <p className="text-slate-500 mt-2">The freshest updates in modern publishing and web architecture.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center text-[#0066cc] font-medium hover:text-[#0052a3]">
              Explore Insights <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Article (Left) */}
            <div className="lg:col-span-7 xl:col-span-8 group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Network Abstract" 
                  className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">Technology</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3b68] mb-3 group-hover:text-[#0066cc] transition-colors">
                The major Industry Switch to Modular 
              </h3>
              <p className="text-slate-600 text-sm">Why major companies are ditching rigid software for flexible, specialized web tools.</p>
            </div>
            
            {/* List Articles (Right) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              
              {/* List Item 1 */}
              <div className="group cursor-pointer flex items-start gap-4 h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400" 
                    alt="Design Wireframes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Workflow</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Using smart AI tools to Streamline Content
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Using generative AI resources inside your editor to create better, Google-friendly content. </p>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="group cursor-pointer flex items-start gap-4 h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" 
                    alt="Analytics Dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-1">Security</p>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f3b68] group-hover:text-[#0066cc] transition-colors leading-snug">
                    Verify Before Accessing Zero-Trust CMS Models
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">Secure global content by locking every asset and verifying every user, every single time.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities / Offerings Grid */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-4">Our CMS Expertise</h2>
            <p className="text-slate-600">Capyngen is a leading CMS Website Development Company in Gurgaon, protecting and managing your content securely from creation to archive.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Network className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">CMS Website Design Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom dashboards built to match your team’s unique workflow and day-to-day vocabulary.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Megaphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Editorial Workflow Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Increased productivity in the writing process with instant approvals and smart teamwork tools. 
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Headless CMS Integration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building your words independent of layouts so they shine on phones, sites, and TVs. 
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#0066cc]">
                <Smartphone className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f3b68] mb-3">Migration Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Moving your old content into a fresh system smoothly without losing any valuable data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Analysis Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-[#0066cc] font-semibold mb-3 uppercase tracking-wider text-xs">STRATEGIC ANALYSIS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-6">Navigating Your Online Framework</h2>
          <h3 className="text-xl font-semibold text-[#0f3b68] mb-4">Grow With Us</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-8">
            Book a chat with our tech specialists to get a review for your website and map out your next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-[#f8fafd] text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100">Audit Framework</span>
            <span className="bg-[#f8fafd] text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100">Procedure Mapping</span>
            <span className="bg-[#f8fafd] text-[#0f3b68] px-4 py-2 rounded-sm font-medium border border-slate-100">ROI Analysis</span>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#f8fafd] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3b68] mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-[#0f3b68] hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span className="text-[#0066cc] font-bold text-xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebsiteDesignLandingPage;