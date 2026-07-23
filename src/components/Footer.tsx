import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/capyngenLogo.png";

// --- Custom Social Icons (matching Lucide style) ---
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 7.1c.3-1.5 1-2.8 2.2-3.8C6 2.3 8.9 2 12 2s6 .3 7.3 1.3c1.2 1 1.9 2.3 2.2 3.8.3 1.6.3 3.3.3 4.9s0 3.3-.3 4.9c-.3 1.5-1 2.8-2.2 3.8-1.3 1-4.2 1.3-7.3 1.3s-6-.3-7.3-1.3c-1.2-1-1.9-2.3-2.2-3.8C2 15.3 2 13.6 2 12s0-3.3.5-4.9z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-8 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 pr-8">
          <Link to="/">
            <img src={logo} alt="Capyngen Logo" className="h-10 mb-6 object-contain" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering businesses with innovative technology, creative design, and digital solutions that drive sustainable growth and lasting success.
          </p>
          
          <div className="text-gray-400 text-sm mb-6 space-y-2">
            <p>
              <a href="mailto:query@capyngen.com" className="hover:text-white transition-colors">
                query@capyngen.com
              </a>
            </p>
            <p className="leading-relaxed">
              Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/company/capyngen/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://www.facebook.com/capyngen" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm transition-colors" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/capyngen_official/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm transition-colors" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://x.com/capyngen" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm transition-colors" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href="https://www.youtube.com/@Capyngen_official" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-sm transition-colors" aria-label="YouTube">
              <YoutubeIcon size={18} />
            </a>
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
        <p>&copy; {new Date().getFullYear()} Capyngen Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="mt-4 md:mt-0">AI &middot; Software &middot; Innovation &middot; Gurugram, India</p>
      </div>
    </footer>
  );
};

export default Footer;