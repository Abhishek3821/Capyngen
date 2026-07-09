

const Insurance = () => {
  

  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      
      {/* 1. HERO SECTION (From previous prompt) */}
      <section 
        className="relative w-full min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('image_0fcd1b.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320] via-[#0b1320]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="max-w-2xl">
            <div className="mb-2">
              <span className="text-[#0055ff] font-semibold text-xs md:text-sm tracking-widest uppercase">
                Industries | Insurance
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-300 font-medium text-xs md:text-sm tracking-wider uppercase">
                AI-Powered Insurtech Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6">
              Reinventing Insurance<br />for a Digital Future
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Empower insurers with AI-driven platforms, intelligent automation, cloud technologies, and customer-centric digital experiences that simplify claims, strengthen risk management, and accelerate business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-[#0055ff] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Talk to Insurance Experts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="flex items-center justify-center bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Explore Insurance Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 2. THE FUTURE OF INSURANCE SECTION (Blue Background Split) */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd499.jpg" 
              alt="Insurance Document and Shield" 
              className="w-full max-w-md h-auto rounded-none shadow-lg object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 leading-tight">
              THE FUTURE OF<br />INSURANCE
            </h2>
            <p className="text-base md:text-lg text-blue-50 leading-relaxed space-y-4">
              The insurance industry is rapidly evolving as customer expectations, digital channels, and emerging technologies reshape the market. Modern insurers need intelligent systems that improve operational efficiency, automate claims, reduce fraud, and deliver personalized customer experiences. Capyngen helps insurance providers modernize legacy systems through AI, cloud platforms, advanced analytics, and secure digital solutions that create long-term business value.
            </p>
          </div>
        </div>
      </section>


      {/* 3. AI IS TRANSFORMING MODERN INSURANCE SECTION (White Background Split) */}
      <section className="bg-white text-gray-900 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
              AI IS TRANSFORMING MODERN INSURANCE
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Artificial Intelligence is enabling insurers to automate underwriting, detect fraud, accelerate claims processing, and deliver personalized policy recommendations. 
              <br /><br />
              Capyngen combines AI, predictive analytics, and intelligent automation to help insurers improve decision-making while reducing operational costs.
            </p>
           
          </div>
          <div className="w-full flex justify-center order-1 lg:order-2">
            <img 
              src="image_0fd4bb.jpg" 
              alt="Insurance Blue Key on Keyboard" 
              className="w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </section>


      {/* 4. INSURANCE INSIGHTS (Gradient Slider/Cards Section) */}
      <section className="bg-white py-20 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Insurance Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-[#1e5adb] min-h-[380px] p-8 flex flex-col justify-end text-white shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Claims Processing</h3>
              <a href="#read-more" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider hover:underline">
                <span className="mr-2">➔</span> READ MORE
              </a>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-[#1e5adb] min-h-[380px] p-8 flex flex-col justify-end text-white shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Intelligent Fraud Detection</h3>
              <a href="#read-more" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider hover:underline">
                <span className="mr-2">➔</span> READ MORE
              </a>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-blue-100 via-blue-300 to-[#1e5adb] min-h-[380px] p-8 flex flex-col justify-end text-white shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Digital Customer Experience</h3>
              <a href="#read-more" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider hover:underline">
                <span className="mr-2">➔</span> READ MORE
              </a>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-end gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 transition">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 transition">
              →
            </button>
          </div>
        </div>
      </section>


      {/* 5. SMARTER DECISIONS THROUGH AI (Dark Deep Blue Section) */}
      <section className="bg-[#0b1320] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Smarter Decisions<br />Through Artificial<br />Intelligence
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Artificial Intelligence enables insurers to streamline claims, predict customer behavior, detect fraudulent activities, automate underwriting, and improve operational efficiency. 
              <br /><br />
              Capyngen develops intelligent insurance solutions that empower organizations to deliver faster, more secure, and customer-focused services.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd7bf.png" 
              alt="Magnifying glass focusing on Insurance Policy text" 
              className="w-full max-w-md h-auto object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* 6. CLIENT TESTIMONIAL (Clean White Typography Section) */}
      <section className="bg-white py-24 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Quote Mark Icon */}
          <div className="text-[#0055ff] text-7xl font-serif mb-4 leading-none">“</div>
          
          <blockquote className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1d64db] leading-snug mb-12">
            "Capyngen transformed our insurance operations with intelligent automation and AI-driven solutions that improved efficiency, reduced claim processing time, and enhanced customer satisfaction."
          </blockquote>
          
          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-1">
              CLIENT TESTIMONIAL
            </p>
            <p className="text-base font-medium text-gray-900">
              — Chief Digital Officer, Insurance Company
            </p>
          </div>
        </div>
      </section>


      {/* 7. ACCELERATING DIGITAL CLAIMS PROCESSING (Case Study Split View) */}
      <section className="bg-[#2563eb] text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <img 
              src="image_0fd862.jpg" 
              alt="Business handshake over insurance table layout" 
              className="w-full max-w-md h-auto object-cover shadow-lg"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Accelerating Digital<br />Claims Processing
            </h2>
            <p className="text-base text-blue-50 mb-6 leading-relaxed">
              Capyngen partnered with a leading insurance provider to modernize claims management and automate policy administration.
            </p>
            
            <h3 className="text-lg font-bold mb-4 tracking-wider uppercase">Results</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-blue-200 font-bold">✓</span>
                <span className="text-base md:text-lg">70% Faster Claims Processing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-200 font-bold">✓</span>
                <span className="text-base md:text-lg">45% Reduction in Operational Costs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-200 font-bold">✓</span>
                <span className="text-base md:text-lg">Improved Fraud Detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-200 font-bold">✓</span>
                <span className="text-base md:text-lg">Enhanced Customer Satisfaction</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* 8. INNOVATION STARTS HERE (Final CTA Footer Section) */}
      <section className="bg-[#040814] text-white py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Innovation starts here
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with Capyngen to unlock the full potential of AI, data, and cloud for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#040814] font-semibold py-3 px-8 rounded-lg transition duration-300">
              Contact us
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Explore all industries
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insurance;