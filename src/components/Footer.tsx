import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-8 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 pr-8">
          <h2 className="text-3xl font-bold mb-6">Capyngen</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            AI. Software. Innovation.<br />
            Building the future of digital<br />
            business.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">IN</a>
            <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">TW</a>
            <a href="#" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm text-xs font-semibold transition-colors">YT</a>
          </div>
        </div>

        {/* Services Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Services</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Enterprise Software</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
          </ul>
        </div>

        {/* Industries Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Industries</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Company</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Resources</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 Capyngen Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="mt-4 md:mt-0">AI &middot; Software &middot; Innovation &middot; Gurugram, India</p>
      </div>
    </footer>
  );
};

export default Footer;