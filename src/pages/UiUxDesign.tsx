import React, { useState } from 'react';
import { 
  Brain, 
  Layout, 
  Palette, 
  Pointer, 
  Search,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';
import heroimg from "../assets/ux.png"

const UIUXLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Q1. What are UI/UX design services?", a: "The UI/UX design services are dedicated to making digital experiences more intuitive, visually appealing, and user-friendly, which helps to enhance customer interaction and business effectiveness." },
    { q: "Q2. Why is Capyngen the UI UX design company I should choose?", a: "Capyngen is a blend of research, innovation and business strategy, providing scalable and user-friendly digital solutions." },
    { q: "Q3. What is the role of a UI/UX Design Agency?", a: "UI/UX design agency designs user interfaces, improves user experience, does research, makes prototypes and makes digital products easier to use." },
    { q: "Q4. How many people do you serve?", a: "We deliver UI/UX solutions to healthcare, financial, retail, educational, manufacturing, SaaS and enterprise companies." },
    { q: "Q5. Do you provide custom UI/UX design services?", a: "Yes, we build UI/UX designs based on your business needs, audience and digital products." },
    { q: "Q6. What are the benefits of user interface design services?", a: "UI design services are dedicated to creating visually appealing layouts, interactive elements, and user-consistent design elements." },
    { q: "Q7. What are user experience design services?", a: "User experience design services are used to enhance the usability by conducting research, wireframing, prototyping, testing and optimizing the user journey." },
    { q: "Q8. Can you redesign an existing application?", a: "Yes, we update the existing websites and applications to further enhance their usability, performance and consistency." },
    { q: "Q9.  Do you design mobile applications?", a: "Yes, we create user-friendly Android and iOS mobile app experiences." },
    { q: "Q10. What is your UI/UX design process?", a: "We provide discovery, research, wire framing, prototyping, UI design, usability testing and support for final implementation." },
    { q: "Q11. Do you conduct usability testing?", a: "Yes, we do usability testing to find out what needs fixing and to check our design decisions are correct before the development process begins." },
    { q: "Q12. Can your designs support business growth?", a: "Yes, our user-centric approach contributes to enhancing engagement, conversion rates, and customer satisfaction." },
    { q: "Q13. Do you create responsive designs?", a: "Yes, all interfaces are designed to work on desktop, tablet, and mobile." },
    { q: "Q14. So what is the importance of UX research?", a: "UX research is used to gain insight into user behavior, to minimize the friction, and to build products that customers would expect." },
    { q: "Q15. How do I get started with Capyngen's UI/UX design services?", a: "Simply contact our design team to discuss your project requirements, and we'll create a tailored strategy for your business." }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-600">
      
      {/* 1. Hero Section */}
      <section 
        className="w-full min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-blue-700 font-semibold mb-4 uppercase tracking-wider text-sm">DIGITAL INNOVATION</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                UI/UX Solutions
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Capyngen, we provide UI/UX design services based on creative strategy and cutting-edge technology. We are a reliable UI UX design firm that builds user-friendly interfaces that enhance the customer experience, make things easier to use and help businesses thrive in the long run.
              </p>
              <div className="flex flex-wrap gap-4">
                
                <button className="bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-700 px-8 py-3.5 rounded font-medium transition-colors">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mastering UX Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Building Exceptional<br />Digital Experiences
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Great experiences result in tackling real user challenges. Research, innovation and ongoing improvement is the basis for all design decisions at Capyngen. We specialize in user experience design, which involves crafting digital products that are enhance the overall customer experience.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">User-first discovery workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Research-based decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Creating a flexible design system.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">Interactive prototypes validated throughout the process.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#eef3fb] p-10 rounded-xl relative overflow-hidden">
              <Brain className="absolute top-6 right-6 w-24 h-24 text-blue-100 opacity-50" strokeWidth={1} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Purpose-Led Design Strategy</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Attractive graphics are not enough. We are the leading UI/UX design company that creates digital products that cut down on user journeys, solve business problems, and provide a consistent user experience at each touchpoint with the product via consistent UI/UX design services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. News / Articles Section */}
      <section className="bg-white py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-700 font-semibold mb-2 uppercase tracking-wider text-sm">INSIGHTS</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Industry Perspectives</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                alt="Woman working on laptop" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">AI-Powered User Experiences</h3>
                <p className="text-slate-600 text-sm flex-1">Discover how smarter technologies are reshaping the product design and how they assist the businesses in delivering smarter digital interactions.</p>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600" 
                alt="Tablet with wireframes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Inclusive Design for Modern Businesses</h3>
                <p className="text-slate-600 text-sm flex-1">Recognise the importance of accessible digital products on the basis of customer satisfaction and according to the changing global usability requirements.</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                alt="Charts and wireframes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Creating Meaningful Digital Moments</h3>
                <p className="text-slate-600 text-sm flex-1">Learn how attention to interface details and interactions can boost engagement on websites and apps.</p>
              </div>
            </div>

            {/* Article 4 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600" 
                alt="Mobile-First" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Mobile-First Experience Design</h3>
                <p className="text-slate-600 text-sm flex-1">Discuss the benefits of responsive, mobile-first approaches to increasing usability on mobile devices like smart phones and tablets, as well as today's other types of digital devices.</p>
              </div>
            </div>

            {/* Article 5 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                alt="Data-Driven" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Data-Driven UX Optimization</h3>
                <p className="text-slate-600 text-sm flex-1">Know the role that analytics, usability testing, and understanding customer behavior can play in enhancing product performance and user satisfaction.</p>
              </div>
            </div>

            {/* Article 6 */}
            <div className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600" 
                alt="Design Systems" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Design Systems for Consistency</h3>
                <p className="text-slate-600 text-sm flex-1">Understand the value of scalable design systems for businesses in terms of their ability to ensure brand consistency and speed up product development.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Offerings Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-700 font-semibold mb-2 uppercase tracking-wider text-sm">CAPABILITIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What We Deliver</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">UX Strategy</h3>
              <p className="text-sm text-slate-600">Developing user-centric product strategies that align with business goals, for long-term digital success with the help of professional UI/UX design services.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Interface Design</h3>
              <p className="text-sm text-slate-600">Creating eye-catching designs that align with your brand identity throughout your online interactions with top-notch user interface design services.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Pointer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Experience Design</h3>
              <p className="text-sm text-slate-600">Creating intuitive user flows that simplify, and make digital platforms easy and fun for all users with dependable user experience design services.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">UX Research</h3>
              <p className="text-sm text-slate-600">Gathering actionable user insights with detailed research, and ongoing testing to enhance digital experiences with our UI UX design company.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expert Leadership Section / Why Choose Us */}
      <section className="bg-[#eef3fb] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">WHY CHOOSE CAPYNGEN</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Collaborate with Capyngen to create innovative UI/UX solutions with a blend of creativity, strategy, and technology, resulting in tangible business outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">User-Centered Design Approach</h3>
                <p className="text-slate-500 text-sm">We are an established UI UX design brand and design intuitive digital solutions, as a result of user research, usability testing and business goals.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Tailored Design Solutions</h3>
                <p className="text-slate-500 text-sm">Custom UI/UX design services are built with your distinct objectives in mind, making sure that each interface is unique to your brand and boosts user interaction.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">End-to-End Design Expertise</h3>
                <p className="text-slate-500 text-sm">Our team provides research and wireframing services, user interface design services, and user experience design services, all of which are scalable to support long-term growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#f8f9fa] rounded-xl shadow-sm overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-700 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer / Contact Form Section */}
      <section className="bg-[#f8f9fa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="lg:pr-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Let's Create Your Next<br />Digital Experience</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Collaborate with a reputable UI/UX design company, Capyngen, to create captivating digital products aligned with business goals. 
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0" />
                  <a href="mailto:design@capyngen.com" className="hover:text-blue-700 transition-colors">design@capyngen.com</a>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0" />
                  <span>+1 (800) 555-0198</span>
                </div>
                <div className="flex items-start text-slate-700">
                  <MapPin className="w-5 h-5 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                  <span>Global HQ New York, NY</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-100">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Area of Interest</label>
                  <select 
                    id="interest"
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="ui-design">UI/UX Design</option>
                    <option value="research">User Research</option>
                    <option value="audit">UX Audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="brief" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Brief</label>
                  <textarea 
                    id="brief"
                    rows={4}
                    className="w-full px-0 py-2 border-b border-slate-200 focus:border-blue-700 outline-none transition-colors text-slate-800 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Tell us a bit about what you're building..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded transition-colors inline-block"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default UIUXLandingPage;