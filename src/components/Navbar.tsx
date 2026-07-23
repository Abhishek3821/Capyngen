import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/capyngenLogo.png";
import rightimg from "../assets/Group35633.png";

// --- Types ---
type SubMenuItem = { label: string; to: string };

type Category = {
  label: string;
  subItems: SubMenuItem[];
};

type DropdownConfig = {
  type: "split" | "grid";
  categories?: Category[]; // For split layout
  gridItems?: SubMenuItem[]; // For grid layout
};

interface NavItem {
  label: string;
  to?: string; // direct link (no dropdown)
  dropdown?: DropdownConfig;
}

// --- Data ---
const servicesCategories: Category[] = [
  {
    label: "Software Development",
    subItems: [
      { label: "Web Development", to: "/web-development" },
      { label: "App Development", to: "/app-development" },
      { label: "Custom AI Solutions", to: "/custom-ai-solutions" },
      { label: "E-Commerce Solutions", to: "/ecommerce-solutions" },
      { label: "Blockchain Development", to: "/blockchain-development" },
      { label: "DevOps Solutions", to: "/devops-solutions" },
      { label: "Application Solutions", to: "/application-solutions" },
      { label: "CRM & Management Software", to: "/crm-management-software" },
    ],
  },
  {
    label: "Design",
    subItems: [
      { label: "UI/UX Design", to: "/ui-ux-design-services" },
      { label: "Website Design", to: "/website-design-company-india" },
      { label: "Branding & Identity Design", to: "/branding-identity-design" },
      // { label: "E-Commerce Website Design", to: "/ecommerce-website-design" },
      { label: "CMS Website Design", to: "/cms-website-design" },
    ],
  },
  {
    label: "Marketing",
    subItems: [
      { label: "Digital Marketing", to: "/digital-marketing" },
      { label: "SEO", to: "/seo" },
      { label: "Social Media Marketing", to: "/smm" },
      { label: "PPC Advertising", to: "/ppc" },
    ],
  },
  {
    label: "Enhanced Tech",
    subItems: [
      { label: "Artificial Intelligence", to: "/artificial-intelligence-services" },
      { label: "Cybersecurity", to: "/cybersecurity" },
      { label: "Network Solutions", to: "/network-solutions" },
      { label: "Enterprise Solutions", to: "/enterprise-solutions" },
      { label: "Data Analytics", to: "/data-analytics-services" },
    ],
  },
  {
    label: "Consulting",
    subItems: [{ label: "IT Consulting", to: "/consulting" }],
  },
];

const industryGridItems: SubMenuItem[] = [
  { label: "Banking Services", to: "/industries/banking" },
  { label: "Education", to: "/industries/education" },
  { label: "E-Commerce", to: "/industries/e-commerce" },
  { label: "Capital Market Firms", to: "/industries/capital-market" },
  { label: "Energy, Resources & Utilities", to: "/industries/energy-resources-utilities" },
  { label: "Media & Information", to: "/industries/communication-media-it" },
  { label: "Healthcare", to: "/industries/healthcare-fitness" },
  { label: "Travel & Logistics", to: "/industries/travel-logistics" },
  { label: "Real Estate", to: "/industries/real-estate" },
  { label: "Insurance", to: "/industries/insurance" },
  { label: "High Tech", to: "/industries/high-tech" },
  { label: "Gaming", to: "/industries/gaming" },
  { label: "Public Service", to: "/industries/public-service" },
  { label: "CPG & Distribution", to: "/industries/cpg-distribution" },
  { label: "Manufacturing & Automotive", to: "/industries/manufacturing-and-automotive" },
  { label: "Life Science", to: "/industries/life-science" },
];

const mainLinks: NavItem[] = [
  {
    label: "What we provide",
    dropdown: { type: "split", categories: servicesCategories },
  },
  {
    label: "Industries",
    dropdown: { type: "grid", gridItems: industryGridItems },
  },
  { label: "Insights", to: "/news-and-updates" },
  { label: "Careers", to: "/careers" },
  { label: "Company", to: "/company-overview" },
];

// Route prefixes used to highlight the dropdown trigger for the current page.
const dropdownActivePrefixes: Record<string, string[]> = {
  "What we provide": servicesCategories.flatMap((c) => c.subItems.map((s) => s.to)),
  Industries: ["/industries"],
};

// --- Icons ---
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    {open ? (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ) : (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    )}
  </svg>
);

// --- Component ---
const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSplitCategory, setActiveSplitCategory] = useState<string>(
    servicesCategories[0].label,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // --- Scroll state logic ---
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu or dropdowns when scrolling down to keep UI clean
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setActiveDropdown(null);
        if (mobileOpen) setMobileOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  // Close everything whenever the route changes.
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  const openDropdown = (item: NavItem) => {
    if (item.dropdown) {
      setActiveDropdown(item.label);
      if (item.dropdown.type === "split") {
        setActiveSplitCategory(servicesCategories[0].label);
      }
    } else {
      setActiveDropdown(null);
    }
  };

  const isTriggerActive = (label: string) =>
    (dropdownActivePrefixes[label] ?? []).some((prefix) =>
      location.pathname.startsWith(prefix),
    );

  const currentDropdownData = mainLinks.find(
    (link) => link.label === activeDropdown,
  )?.dropdown;

  const topLinkClass = (active: boolean) =>
    `flex items-center gap-1.5 text-[15px] whitespace-nowrap py-2 transition-colors border-b-2 ${
      active
        ? "text-blue-600 font-semibold border-blue-600"
        : "text-gray-800 font-normal border-transparent hover:text-blue-600"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 font-sans bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Top Navbar */}
      <nav className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 sm:gap-6 bg-white px-4 sm:px-6 lg:px-8 py-3 lg:py-0">
        
        {/* Responsive Logo Container */}
        <Link
          to="/"
          className="flex items-center gap-2 lg:py-1 flex-shrink-0"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          <img 
            src={Logo} 
            alt="Capyngen Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[4.5rem] w-auto object-contain transition-all duration-200" 
          />
        </Link>

        {/* Center Links (desktop / large screens) */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex flex-grow justify-center">
          {mainLinks.map((item) =>
            item.dropdown ? (
              <button
                key={item.label}
                type="button"
                aria-expanded={activeDropdown === item.label}
                onMouseEnter={() => openDropdown(item)}
                onClick={() =>
                  activeDropdown === item.label
                    ? setActiveDropdown(null)
                    : openDropdown(item)
                }
                className={`${topLinkClass(
                  activeDropdown === item.label || isTriggerActive(item.label),
                )} cursor-pointer bg-transparent`}
              >
                {item.label}
                <ChevronDown open={activeDropdown === item.label} />
              </button>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                onMouseEnter={() => setActiveDropdown(null)}
                className={({ isActive }) => topLinkClass(isActive)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        {/* Right side (Contact Us + Right Image + Mobile Toggle) */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <Link
            to="/contact-us"
            onMouseEnter={() => setActiveDropdown(null)}
            className="hidden rounded-full bg-blue-600 px-4 sm:px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:block whitespace-nowrap"
          >
            Contact Us
          </Link>

          {/* Right Image Graphic */}
          <img 
            src={rightimg} 
            alt="Decorative Graphic" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-200" 
          />

          {/* Mobile toggle (visible below lg) */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-md p-2 text-gray-800 hover:bg-gray-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mega Menu Dropdown (desktop) */}
      {activeDropdown && currentDropdownData && (
        <div className="absolute left-0 top-full z-10 hidden w-full bg-[#111827] text-slate-300 shadow-2xl lg:block">
          <div className="mx-auto flex w-full max-w-[1400px] px-12 py-10">
            {/* Layout 1: Split (What we provide) */}
            {currentDropdownData.type === "split" &&
              currentDropdownData.categories && (
                <div className="flex flex-grow">
                  {/* Left Column: Categories */}
                  <div className="w-1/3 border-r border-slate-700/50 pr-12">
                    <ul>
                      {currentDropdownData.categories.map((cat) => (
                        <li key={cat.label}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveSplitCategory(cat.label)}
                            onFocus={() => setActiveSplitCategory(cat.label)}
                            className={`flex w-full cursor-pointer items-center justify-between border-b border-slate-700/50 py-3 text-left transition-colors ${
                              activeSplitCategory === cat.label
                                ? "text-white"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            <span className="text-sm font-medium">{cat.label}</span>
                            <ChevronRight />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Right Column: Sub-items */}
                  <div className="w-2/3 pl-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {activeSplitCategory}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
                      {currentDropdownData.categories
                        .find((c) => c.label === activeSplitCategory)
                        ?.subItems.map((sub) => (
                          <li key={sub.to}>
                            <Link
                              to={sub.to}
                              className="group flex items-center justify-between border-b border-slate-700/50 py-3 text-sm text-slate-400 transition-colors hover:text-white"
                            >
                              {sub.label}
                              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                                <ChevronRight />
                              </span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}

            {/* Layout 2: Grid (Industries) */}
            {currentDropdownData.type === "grid" &&
              currentDropdownData.gridItems && (
                <div className="grid w-full grid-cols-3 gap-x-16 gap-y-1">
                  {currentDropdownData.gridItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="group flex items-center justify-between border-b border-slate-700/50 py-3 text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="opacity-70 transition-opacity group-hover:opacity-100">
                        <ChevronRight />
                      </span>
                    </Link>
                  ))}
                </div>
              )}

            {/* Abstract Graphic Area (decorative) */}
            <div className="relative ml-12 hidden w-56 flex-shrink-0 overflow-hidden opacity-40 xl:block">
              <div className="absolute right-4 top-4 h-40 w-40 rounded-sm border-4 border-slate-500"></div>
              <div className="absolute right-10 top-14 h-40 w-40 rounded-sm border-4 border-slate-400"></div>
              <div className="absolute right-16 top-24 h-36 w-36 rounded-sm border-4 border-slate-600"></div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          {/* Services accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              aria-expanded={mobileSection === "services"}
              onClick={() =>
                setMobileSection((s) => (s === "services" ? null : "services"))
              }
              className="flex w-full items-center justify-between px-5 py-4 font-medium text-gray-900"
            >
              What we provide
              <ChevronDown open={mobileSection === "services"} />
            </button>
            {mobileSection === "services" && (
              <div className="pb-3">
                {servicesCategories.map((cat) => (
                  <div key={cat.label} className="px-5 py-2">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                      {cat.label}
                    </p>
                    {cat.subItems.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="block py-1.5 pl-3 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Industries accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              aria-expanded={mobileSection === "industries"}
              onClick={() =>
                setMobileSection((s) => (s === "industries" ? null : "industries"))
              }
              className="flex w-full items-center justify-between px-5 py-4 font-medium text-gray-900"
            >
              Industries
              <ChevronDown open={mobileSection === "industries"} />
            </button>
            {mobileSection === "industries" && (
              <div className="grid grid-cols-1 gap-1 px-5 pb-4 sm:grid-cols-2">
                {industryGridItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="py-1.5 pl-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct links */}
          {mainLinks
            .filter((item) => !item.dropdown)
            .map((item) => (
              <NavLink
                key={item.label}
                to={item.to!}
                className={({ isActive }) =>
                  `block border-b border-gray-100 px-5 py-4 font-medium ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          <div className="px-5 py-4 mb-4 flex items-center justify-between gap-4">
            <Link
              to="/contact-us"
              className="flex-1 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
            <img 
              src={rightimg} 
              alt="Decorative Graphic" 
              className="h-8 w-auto object-contain" 
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;