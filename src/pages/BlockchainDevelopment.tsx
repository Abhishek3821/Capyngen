
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const BlockchainSolutionsPage = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="bg-[#0a1526] text-white text-[10px] font-bold px-3 py-1 mb-8 tracking-widest uppercase">
          BLOCKCHAIN
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
          Secure & Decentralized <br />
          Blockchain Solutions
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Unlock the power of distributed ledger technology to drive transparency, security, and operational efficiency across your global enterprise.
        </p>
        <button className="bg-[#0056b3] hover:bg-blue-800 text-white font-medium py-3 px-8 transition-colors flex items-center gap-2 text-sm">
          Read More <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-start">
          <div className="col-span-1 border-l-4 border-[#0056b3] pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Decentralized Trust for the Modern Enterprise
            </h2>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-6">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We engineer scalable blockchain networks tailored for enterprise applications. By leveraging distributed ledgers, smart contracts, and robust cryptographic frameworks, we help organizations eliminate intermediaries, reduce fraud, and establish immutable data provenance.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              From supply chain traceability to decentralized finance (DeFi) ecosystems, our end-to-end blockchain consulting and development services ensure you are positioned at the forefront of the Web3 revolution.
            </p>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">What's Happening</h2>
              <p className="text-slate-500 text-sm">Insights and updates from our decentralized practice.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#0a1526] text-white hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-800 to-slate-900 opacity-90 flex items-center justify-center">
                   <div className="w-24 h-24 border border-blue-400/30 rounded-full flex items-center justify-center">
                     <div className="w-16 h-16 border border-blue-400/50 rounded-full flex items-center justify-center">
                       <div className="w-8 h-8 bg-blue-500/50 rounded-full"></div>
                     </div>
                   </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-[#0056b3] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4 w-max">
                  SUPPLY CHAIN
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Transforming Global Supply Chain Logistics
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-200 via-slate-300 to-slate-400 opacity-80"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-[#0056b3] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4 w-max">
                  DEFI
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Cryptographic Frameworks for 2025
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a1526] flex items-center justify-center">
                  <div className="w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(83,166,255,0.2)_50%,transparent_55%)] bg-[length:20px_20px]"></div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-[#0056b3] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4 w-max">
                  HEALTHCARE
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-[#0056b3] transition-colors leading-snug flex-1">
                  Data Privacy Regulations Strategy for Healthcare
                </h3>
                <div className="flex items-center text-xs font-bold text-[#0056b3] transition-colors gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="bg-[#0056b3] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Offerings</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Comprehensive blockchain engineering and strategic consulting services tailored to your organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* 01 - Smart Contract Engineering */}
            <div className="md:col-span-7 bg-[#f8f9fa] p-10 flex flex-col justify-center">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-4">01</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Contract Engineering</h3>
              <p className="text-slate-600 mb-6 max-w-md">
                Secure, audited, and gas-efficient self-executing agreements built for Ethereum, Solana, and EVM-compatible networks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Protocol Development
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Security Auditing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></div> Upgradeable Architecture
                </li>
              </ul>
            </div>

            {/* 02 - Private Enterprise Ledger */}
            <div className="md:col-span-5 bg-[#0a1526] p-10 flex flex-col justify-center border-l-4 border-blue-400">
              <span className="text-blue-400 font-mono text-sm font-bold block mb-4">02</span>
              <h3 className="text-2xl font-bold text-white mb-4">Private Enterprise Ledger</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Permissioned blockchain networks utilizing Hyperledger Fabric or Quorum for secure B2B data sharing and supply chain provenance.
              </p>
              <button className="border border-slate-500 hover:border-white text-white px-6 py-2 text-xs font-bold tracking-wider uppercase transition-colors w-max">
                Explore
              </button>
            </div>

            {/* 03 - DeFi Platforms */}
            <div className="md:col-span-3 bg-white p-8">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">03</span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">DeFi Platforms</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Custom decentralized exchanges (DEX), lending protocols, and yield aggregation platforms built for scale.
              </p>
            </div>

            {/* 04 - Asset Tokenization */}
            <div className="md:col-span-3 bg-white p-8">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">04</span>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Asset Tokenization</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Fractionalize real-world assets (real estate, commodities) into tradable digital tokens for increased liquidity.
              </p>
            </div>

            {/* 05 - Web3 Strategy & Advisory */}
            <div className="md:col-span-6 bg-white p-8 flex flex-col justify-center relative group cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="text-[#0056b3] font-mono text-sm font-bold block mb-3">05</span>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Web3 Strategy & Advisory</h4>
                  <p className="text-slate-500 text-sm">Navigating the regulatory and technical landscape of decentralized ecosystems.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#0056b3] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* C-Suite Navigation Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Helping the C-Suite Navigate the Decentralized Frontier
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Empowering executives to make strategic decisions on blockchain implementation and digital asset management.
            </p>
            
            <div className="space-y-0">
              <div className="border-t border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Chief Executive Officer</span>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </div>
              <div className="border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-[#0056b3]">Chief Technology Officer</span>
                <ChevronDown className="w-5 h-5 text-[#0056b3] rotate-180" />
              </div>
              <div className="w-full h-1 bg-[#0056b3]"></div>
              
              <div className="border-b border-slate-200 py-5 flex justify-between items-center cursor-pointer group">
                <span className="font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Chief Financial Officer</span>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="w-full bg-slate-200 aspect-video relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-300 mix-blend-multiply"></div>
               <div className="w-full h-full object-cover bg-slate-400"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#f4f6f8] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Leadership</h2>
              <p className="text-slate-500 text-sm">Meet the experts driving our blockchain practice.</p>
            </div>
            <a href="#" className="text-sm font-bold text-[#0056b3] hover:underline flex items-center gap-1">
              VIEW ALL LEADERS <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Profile 1 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Dr. Arthur Vance</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Global Head of Blockchain Strategy</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Marcus Thorne</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Managing Director, Enterprise Web3</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Robbin Millar</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">VP, Decentralized Finance</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white group shadow-sm border border-slate-100 pb-5">
              <div className="h-64 bg-slate-300 w-full overflow-hidden mb-4">
                 <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="px-5">
                <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">Neil Garg</h4>
                <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-wide">Managing Director, Smart Contracts</p>
                <div className="flex items-center text-[10px] font-bold text-[#0056b3] gap-1 cursor-pointer">
                  BIO <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#0a1526] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background server/network simulation */}
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          <div className="lg:w-1/2 text-white pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Request for Services</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Partner with our experts to design, build, and deploy enterprise-grade blockchain solutions. Discover how distributed ledger technology can transform your operational efficiency and secure your data infrastructure.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Email *</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Company *</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0056b3] transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded-none cursor-pointer" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    I have read and accept the <a href="#" className="text-[#0056b3] underline">Privacy Policy</a> and consent to having my data processed.
                  </p>
                </div>

                <button type="submit" className="bg-[#0a1526] hover:bg-slate-800 text-white font-medium py-3 px-8 transition-colors text-xs tracking-wider uppercase">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default BlockchainSolutionsPage;