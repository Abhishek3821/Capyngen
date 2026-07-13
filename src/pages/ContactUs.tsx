import React, { FormEvent } from 'react';

const ContactUsFullScreen: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* Abstract Blue Decorative Shapes */}
      {/* 1. Left edge block */}
      <div className="hidden lg:block absolute left-0 top-[35%] w-[40px] h-[60px] bg-[#0d5cff] z-20"></div>
      
      {/* 2. Top middle block */}
      <div className="hidden lg:block absolute left-[52%] top-[12%] w-[50px] h-[50px] bg-[#0d5cff] z-20"></div>
      
      {/* 3. Right edge full-height block */}
      <div className="absolute right-0 top-0 bottom-0 w-full h-[200px] lg:h-full lg:w-[22%] bg-[#0d5cff] z-0"></div>

      {/* Left Column: Form Section */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 py-12 lg:py-20 lg:pl-[12%] lg:pr-[5%] relative z-10">
        <h1 className="text-3xl lg:text-4xl text-black font-bold mb-4">Contact Us</h1>
        <p className="text-[15px] text-[#555555] leading-relaxed mb-10 max-w-md">
          Feel Free To Contact Us At Anytime, We Will Get Back
          <br />
          As Soon As Possible
        </p>

        <form className="flex flex-col gap-5 w-full max-w-lg" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="w-full p-4 border border-[#e5e5e5] rounded-sm text-sm outline-none transition-colors placeholder:text-[#999] focus:border-[#0d5cff]" 
            placeholder="Name *" 
            required 
          />
          <input 
            type="email" 
            className="w-full p-4 border border-[#e5e5e5] rounded-sm text-sm outline-none transition-colors placeholder:text-[#999] focus:border-[#0d5cff]" 
            placeholder="Email" 
          />
          <input 
            type="tel" 
            className="w-full p-4 border border-[#e5e5e5] rounded-sm text-sm outline-none transition-colors placeholder:text-[#999] focus:border-[#0d5cff]" 
            placeholder="Phone number *" 
            required 
          />
          <textarea 
            className="w-full h-[150px] p-4 border border-[#e5e5e5] rounded-sm text-sm outline-none transition-colors resize-none placeholder:text-[#999] focus:border-[#0d5cff]" 
            placeholder="How can we help you ?"
          ></textarea>
          <button 
            type="submit" 
            className="bg-[#f24b4b] hover:bg-[#e03a3a] text-white border-none p-4 mt-2 text-sm font-bold uppercase tracking-wide rounded-sm cursor-pointer transition-colors"
          >
            SEND
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-sm text-[#555555]">
          <div className="flex items-center gap-3 mb-6">
            {/* Envelope Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#0d5cff] stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <a href="mailto:sales@capyngen.com" className="text-[#555555] underline underline-offset-[3px] hover:text-[#0d5cff] transition-colors">
              sales@capyngen.com
            </a>
          </div>
          <div className="pl-8 leading-[1.8]">
            Tower B3, Spaze i-Tech Park
            <br />
            Sector 49, Gurugram
            <br />
            Haryana 122018
          </div>
        </div>
      </div>

      {/* Right Column: Map Section */}
      <div className="w-full lg:w-[45%] relative z-10 flex flex-col justify-center p-8 lg:p-0 lg:py-20 lg:pr-[8%]">
        
        {/* Map Container */}
        <div 
          className="w-full aspect-square lg:aspect-auto lg:h-[80%] min-h-[450px] bg-[#e0e0e0] border border-gray-100 shadow-xl relative bg-cover bg-center rounded-sm z-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')" }}
        >
          {/* Red Map Pin */}
          <div className="absolute top-[45%] left-[55%] w-[35px] h-[35px] bg-[#d9385e] rounded-[50%_50%_50%_0] border-[4px] border-white shadow-md -translate-x-1/2 -translate-y-full -rotate-45"></div>
        </div>

        {/* Social Icons positioned in the bottom right over the blue block */}
        <div className="absolute bottom-8 right-1/2 translate-x-1/2 lg:translate-x-0 lg:bottom-[40px] lg:right-[40px] flex gap-[15px] z-20">
          {/* Facebook Icon */}
          <a href="#" className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#0d5cff] shadow-lg transition-transform hover:-translate-y-1" aria-label="Facebook">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#0d5cff] shadow-lg transition-transform hover:-translate-y-1" aria-label="Instagram">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          {/* Google Icon */}
          <a href="#" className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#0d5cff] shadow-lg transition-transform hover:-translate-y-1" aria-label="Google">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUsFullScreen;