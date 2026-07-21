import { useState } from 'react';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

const AppDevelopmentPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are mobile app development services?",
      answer: "Mobile app development company build apps for phones and tablets that run fast and stay secure for their consumers."
    },
    {
      question: "Does Capyngen offer native apps, cross-platform app development?",
      answer: "Both. It depends on what matters most, as we can separately build native apps for iOS and Android app development."
    },
    {
      question: "What is the difference between native and cross-platform development?",
      answer: "Native apps are built specifically for one platform, while Cross-platform apps share one codebase across iOS and Android."
    },
    {
      question: "How does Capyngen handle enterprise-level mobile integrations?",
      answer: "Capyngen handles enterprise-level mobile integration with complex backend systems, sync data with high-end platforms, and build secure mobile device management (MDM)."
    },
    {
      question: "What does your 99.9% uptime SLA mean?",
      answer: "The 99.9% utime SLA mmeans that the apps and systems we have built are designed to stay up and running almost all the time, with very little unexpected downtime. "
    },
    {
      question: "How Capyngen makes sure that mobile apps are easy to use?",
      answer: "Capyngen delivers a user-first design process, testing for availability and real user behavior at every process, so there is no complication while using mobile apps. "
    },
    {
      question: "Can you help modernize an existing mobile app?",
      answer: "Yes. Capyngen often provides services in reviews of existing apps and suggests upgrades, better performance, upcoming features."
    },
    {
      question: "What industries does Capyngen's mobility team work with?",
      answer: "We work across industries, but we also have deep experience helping industries with complex system combinations, strict security, and apps that need to scale to large users globally."
    },
    {
      question: "How long does an enterprise mobile app project usually take?",
      answer: "Generally it depends. A cross-platform build with standard features might take a few months, while a native app with deep enterprise integrations can take longer. "
    },
    {
      question: "How do I connect with Capyngen for my mobile app project?\"",
      answer: "Fill out the request form above, or book a 15-minute consultation with one of our mobility experts. We will walk through your goals and suggest the best approach from there."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <div className="inline-block bg-slate-200 text-slate-800 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          MOBILITY SERVICES
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Future-Gen Smartphone App <br className="hidden md:block" />
          Services, Powered by AI
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          We create high-performing native and cross-platform apps that can make your enterprise mobility simple, engaging, and efficient for your consumer.
        </p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors flex items-center gap-2">
          Explore Our Expertise <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Feature / About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Analyze the Smart App Ecosystem
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At Capyngen, we consult your vision, ideas plan and turn them into working mobile apps. Our team builds secure, scalable frameworks using Artficial intelligence and edge computing to deliver real-world value to your consmsers within an instant, on any device.
            </p>
            
            <div className="flex gap-12">
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">Guaranteed uptime</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Across all platforms</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">App downloads</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Worldwide </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-200 rounded-2xl w-full h-[400px] shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                    <div className="w-48 h-96 bg-white rounded-3xl shadow-2xl border-8 border-slate-800 flex flex-col overflow-hidden">
                        <div className="w-full h-4 bg-slate-800 flex justify-center items-center rounded-b-xl mb-4">
                            <div className="w-12 h-1.5 bg-slate-900 rounded-full"></div>
                        </div>
                        <div className="flex-1 p-4 space-y-3">
                            <div className="w-full h-24 bg-blue-100 rounded-xl"></div>
                            <div className="w-3/4 h-4 bg-slate-200 rounded"></div>
                            <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="h-16 bg-slate-100 rounded-lg"></div>
                                <div className="h-16 bg-slate-100 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Process Section (Light Blue Background) */}
      <section className="bg-sky-200 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mobile Trends Right Now</h2>
            </div>
            <button className="mt-6 md:mt-0 p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">Report</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2025 Mobile Application Development: iOS Growth in the Enterprise</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Read Here <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-amber-50 relative overflow-hidden flex items-center justify-center">
                 <div className="w-full h-full opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">Award</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Capyngen Recognized as a Leader in Gartner Magic Quadrant for Mobile Development</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Read Here <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-indigo-900 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">Case Study</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bringing Global Operations Together with One Cross-Platform Hub</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Read Here <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-emerald-900 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">Report</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Enterprises Are Rethinking Native-Only Strategies?</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Read Here <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-rose-900 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">Case Study</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Company Cut Delivery Errors by 35% with a Custom Mobile App Development</h3>
                <a href="#" className="text-slate-600 font-medium flex items-center gap-2 group-hover:text-blue-600 transition">
                  Read Here <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-slate-600 mb-8">
              We offer companies navigation for complicated high-end smartphone technology with personalized development programmes.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">01. Android & iOS App Development</h4>
              </div>
              <p className="text-slate-600 ml-9">Platform-specific builds that get the most out of performance, hardware, and user experience.</p>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">02. Cross-Platform Development</h4>
              </div>
              <p className="text-slate-600 ml-9">One codebase using Flutter app development or React Native app development to get to market faster.</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">03. UI/UX Strategy</h4>
              </div>
              <p className="text-slate-600 ml-9">Design systems built around real users, focused on accessibility, engagement, and conversions at every touchpoint.</p>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">04. Enterprise Systems</h4>
              </div>
              <p className="text-slate-600 ml-9">Backend integrations, legacy system syncing, and secure MDM setup for complex enterprise needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Industry Solutions </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">01. Healthcare & Life Sciences</h4>
              <p className="text-slate-600 mt-2 text-sm">Secure, compliant mobile apps for patient care, telehealth, and health data management.</p>
            </div>

            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">02. Shopping & Digital Retail</h4>
              <p className="text-slate-600 mt-2 text-sm">We Offer solutions with real-time inventory, offers, and online shopping experiences .</p>
            </div>

            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">03. Banking & Financial Services</h4>
              <p className="text-slate-600 mt-2 text-sm">Secure mobile banking and high finance apps built to handle sensitive data and strict compliance needs.</p>
            </div>

            <div className="group">
              <div className="bg-slate-200 h-72 rounded-xl mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition duration-500">
                <div className="absolute inset-0 bg-slate-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">04. Logistics & Supply Chain</h4>
              <p className="text-slate-600 mt-2 text-sm">We offer industries solutions that track shipments, and quickly manage processes with custom app development services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Capyngen?</h2>
            <p className="text-slate-600 mb-8">
              At Capyngen, we provide app development services to our clients— improving performance, securing business and user-centric solutions.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">1. Built for Performance</h4>
              </div>
              <p className="text-slate-600 ml-9 mb-3">Fast track and handle real-world use.</p>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">2. Industries-Grade Security</h4>
              </div>
              <p className="text-slate-600 ml-9 mb-3">Secure framework and MDM support.</p>
             
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">3. Native and Cross-Platform Expertise</h4>
              </div>
              <p className="text-slate-600 ml-9 mb-3">Cross-platform solutions with Flutter or React Native</p>
              
            </div>

            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <h4 className="text-xl font-bold text-slate-900">4. User-First Design</h4>
              </div>
              <p className="text-slate-600 ml-9 mb-3">Real user behavior, keeping it accessible, and engaging.</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section (Dark Background) */}
      <section className="bg-[#0f172a] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Apply For Services</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-md">
              Want to know more about how Capyngen can help your organization move forward? Connect with us and get the proper framework for your ideas, and custom app development services with post-launch solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                
                <div>
                  <p className="text-sm text-slate-400">Got any specific question?</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                
                <div>
                  <p className="text-sm text-slate-400">Book a 15-minute chat with one of our experts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none"></textarea>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer" />
                    <p className="text-sm text-slate-500">Sign up to get Capyngen's mobile insights and marketing updates.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer" />
                    <p className="text-sm text-slate-500">I agree to the <a href="#" className="text-slate-900 underline">Privacy Statement</a> *</p>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-semibold py-4 rounded-lg transition-colors">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <span className="text-blue-600 text-2xl leading-none">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-2 text-slate-600">
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

export default AppDevelopmentPage;