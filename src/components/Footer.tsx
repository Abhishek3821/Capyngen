import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to="/web-development" className="hover:text-white transition-colors">Software Development</Link></li>
            <li><Link to="/custom-ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
            <li><Link to="/ui-ux-design-services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
            <li><Link to="/network-solutions" className="hover:text-white transition-colors">Cloud Services</Link></li>
            <li><Link to="/devops-solutions" className="hover:text-white transition-colors">DevOps</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            <li><Link to="/enterprise-solutions" className="hover:text-white transition-colors">Enterprise Software</Link></li>
            <li><Link to="/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
          </ul>
        </div>

        {/* Industries Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Industries</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><Link to="/industries/healthcare-fitness" className="hover:text-white transition-colors">Healthcare</Link></li>
            <li><Link to="/industries/banking" className="hover:text-white transition-colors">Banking</Link></li>
            <li><Link to="/industries/education" className="hover:text-white transition-colors">Education</Link></li>
            <li><Link to="/industries/e-commerce" className="hover:text-white transition-colors">Retail</Link></li>
            <li><Link to="/industries/manufacturing-and-automotive" className="hover:text-white transition-colors">Manufacturing</Link></li>
            <li><Link to="/industries/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
            <li><Link to="/industries/travel-logistics" className="hover:text-white transition-colors">Logistics</Link></li>
            <li><Link to="/industries/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Company</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><Link to="/company-overview" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/news-and-updates" className="hover:text-white transition-colors">News</Link></li>
            <li><Link to="/news-and-updates" className="hover:text-white transition-colors">Blogs</Link></li>
            <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Resources</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            
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