import React, { useState, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Search, 
  AlertOctagon, 
  ShieldAlert, 
  Mail, 
  PhoneCall,
  ChevronDown
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Serial Image Imports from the CyberSecurity folder
import img1 from "../assets/CyberSecurity/1.png";
import img2 from "../assets/CyberSecurity/2.png";
import img3 from "../assets/CyberSecurity/3.png";
import img4 from "../assets/CyberSecurity/4.png";
import img5 from "../assets/CyberSecurity/5.png";
import img6 from "../assets/CyberSecurity/6.png";
import img7 from "../assets/CyberSecurity/7.png";
import img8 from "../assets/CyberSecurity/8.png";

// Framer Motion Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const CyberSecurityLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Ref for scrolling to the contact section
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your consultation request has been submitted successfully.");
  };

  const faqs = [
    { q: "Q1. What do cyber security services entail?", a: "Cybersecurity services include protection strategies, monitoring, threat detection, and response solutions to safeguard digital assets from cyber threats." },
    { q: "Q2. What are Managed cybersecurity services?", a: "Managed cyber security services are the security services that are outsourced to experts that monitor, detect and respond to cyber threats around the clock." },
    { q: "Q3. What is Capyngen's strategy for cybersecurity?", a: "Our cybersecurity solutions include the implementation of Zero-Trust frameworks, leveraging AI for detection, and ongoing monitoring to safeguard your business against emerging threats." },
    { q: "Q4. What are cybersecurity solutions?", a: "Cybersecurity solutions consist of tools and technologies and strategies used to safeguard networks, data, and systems from cyber attacks." },
    { q: "Q5. What do cybersecurity consulting services entail?", a: "Cybersecurity consulting services are expert advice on cybersecurity strategy, risk assessment, compliance, and implementation of security measures." },
    { q: "Q6. What is a cybersecurity Risk assessment?", a: "A cybersecurity risk assessment is a thorough investigation of your security situation that helps uncover vulnerabilities and make recommendations to improve security." },
    { q: "Q7. What are the network security services?", a: "Your network security services will help keep your network infrastructure safe from unauthorized access, misuse, and cyber threats." },
    { q: "Q8. What are the cloud security services?", a: "Cloud security services guard data, applications and infrastructure in cloud environments against cyber threats." },
    { q: "Q9. Why Capyngen for your cybersecurity company?", a: "As a trusted cybersecurity company, we mix the latest technology, expertise and proactive monitoring to provide enterprise-class security solutions." },
    { q: "Q10. What is Zero Trust Security?", a: "As part of our enterprise cybersecurity solutions, Zero-Trust is a security model that verifies every user, device and request before allowing access to resources." },
    { q: "Q11. What are the applications of AI in Cyber security?", a: "Through our IT security services, AI detects patterns, identifies anomalies, and predicts threats in real-time, thus avoiding threats sooner, and in better time, with more accurate threat response." },
    { q: "Q12. What is a Security Operations Center (SOC)?", a: "Managed cybersecurity services include a SOC that is dedicated to monitoring, detecting, and responding to security incidents 24/7." },
    { q: "Q13. How does Capyngen ensure that it is compliant?", a: "Our cybersecurity consulting services ensure that security frameworks align with GDPR, HIPAA, ISO 27001 and other international regulations, making compliance easier." },
    { q: "Q14. What does incident recovery mean?", a: "It includes rapid threat containment, forensic investigation and recovery planning to restore operations quickly following a security breach with the use of our cyber security solutions." },
    { q: "Q15. Which industries does Capyngen work in?", a: "As one of the top cybersecurity service providers, we provide customized cybersecurity solutions to industries such as banking, healthcare, manufacturing, retail, technology, and government." }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] font-sans text-slate-700">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Cyber Security Network Concept" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#084887]/80 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col items-center"
        >
          <Shield className="w-16 h-16 text-blue-300/50 absolute -top-8 -z-10" strokeWidth={1} />
          <p className="text-blue-200 font-semibold text-[10px] uppercase tracking-[0.2em] mb-4">
            CYBERSECURITY SERVICES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
            Intelligent Digital Protection
          </h1>
          <p className="text-sm text-blue-50 mb-8 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            Implement Capyngen's Cybersecurity Services to power a robust digital environment, providing proactive defense, and Zero-Trust protection for modern enterprises.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-sm font-semibold transition-colors uppercase tracking-widest backdrop-blur-sm cursor-pointer"
          >
            DISCOVER OUR SOLUTIONS →
          </button>
        </motion.div>
      </section>

      {/* 2. Intro/Methodology Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:pr-8"
            >
              <h2 className="text-3xl font-bold text-[#084887] mb-6 leading-tight">
                Intelligent Threat<br />Prevention
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                The pace of cyber attacks continues to accelerate, and traditional protection strategies are proving to be ineffective against them. Capyngen, as a trusted Cybersecurity Company, provides advanced Cybersecurity Solutions based on the Zero-Trust approach, which means that everyone, all applications and workloads that want to access the network must be verified in order to do so.
              </p>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                We leverage predictive threat intelligence with ongoing monitoring to increase business resilience. Our Cybersecurity Consulting Services enable enterprises to discover the weaknesses, minimize cyber threats, and safeguard essential digital resources with professional guidance.
              </p>
              
              <ul className="space-y-6 border-l-2 border-[#084887]/20 pl-6">
                <li>
                  <h4 className="text-sm font-bold text-[#084887] mb-1">AI-POWERED DETECTION</h4>
                  <p className="text-xs text-slate-500">Our advanced Network Security Services detect suspicious activities and mitigate security risks before they become a problem using machine learning models.</p>
                </li>
                <li>
                  <h4 className="text-sm font-bold text-[#084887] mb-1">RAPID THREAT RESPONSE</h4>
                  <p className="text-xs text-slate-500">With our Managed Cybersecurity Services, automated security workflows isolate compromised systems in seconds, reducing business disruption.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-4 shadow-xl border border-slate-100 flex items-center justify-center">
                <img 
                  src={img2} 
                  alt="Server Infrastructure" 
                  className="w-full h-auto object-contain opacity-90"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities (Bento) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-[#084887] mb-4">Enterprise Security Services</h2>
            <div className="w-16 h-1 bg-[#084887] mx-auto"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Top Left - Large */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-[#f4f7fb] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group border border-transparent hover:border-[#084887]/20">
              <div>
                <div className="mb-4 text-[#084887]">
                  <Shield className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Managed Cybersecurity</h3>
                <p className="text-sm text-slate-600 max-w-lg mb-6 leading-relaxed">
                  We have a 24/7 Security Operations Center (SOC) that provides proactively monitoring, vulnerability management, and enterprise-grade Managed Cybersecurity Services that are designed to support modern organizations with reliable IT Security Services.
                </p>
              </div>
              <button onClick={scrollToContact} className="inline-flex items-center text-xs font-bold text-[#084887] uppercase tracking-wider hover:text-[#063361] w-max">
                EXPLORE SECURITY SERVICES →
              </button>
            </motion.div>
            
            {/* Top Right - Solid Color */}
            <motion.div variants={fadeInUp} className="bg-[#084887] p-8 shadow-sm flex flex-col text-white">
              <div className="mb-4 text-blue-200">
                <Lock className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Identity & Access Security</h3>
              <p className="text-sm text-blue-100 flex-1 leading-relaxed">
                Secure identity management, privileged access controls and advanced authentication for enterprise security to protect employees, applications and digital assets.
              </p>
            </motion.div>
            
            {/* Bottom Left - Small */}
            <motion.div variants={fadeInUp} className="bg-[#f4f7fb] p-8 shadow-sm flex flex-col border border-transparent hover:border-[#084887]/20 transition-colors">
              <div className="mb-4 text-[#084887]">
                <Search className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Governance & Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensure compliance with global standards through automated governance frameworks that comply with GDPR, HIPAA, ISO 27001 and industry best practices.
              </p>
            </motion.div>
            
            {/* Bottom Right - Wide */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-[#f4f7fb] p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between border border-transparent hover:border-[#084887]/20 transition-colors relative overflow-hidden">
              <div className="relative z-10 md:pr-16">
                <div className="mb-4 text-[#084887]">
                  <AlertOctagon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Incident Recovery</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our cybersecurity experts deliver fast threat containment, forensic investigations, disaster recovery planning and business continuity assistance to help reduce downtime.
                </p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
                 <ShieldAlert className="w-64 h-64" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. News / Insights Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#084887] mb-2">Security Knowledge Center</h2>
              <p className="text-sm text-slate-500">Newest developments, strategies, and best practices from cybersecurity experts for businesses that are resilient.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Insight 1 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img3} 
                  alt="Network Cables" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Preventing Advanced Ransomware Attacks
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Learn how Capyngen adds another layer of security, and enables proactive defense against complex ransomware attacks to your Enterprise Cybersecurity Solutions.
                </p>
              </div>
            </motion.div>
            
            {/* Insight 2 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img4} 
                  alt="Abstract Cloud Security" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Securing Hybrid & Multi Cloud Infrastructure
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Discover how our cloud security services enable organizations to secure workloads, and ensure uniform protection of workloads across AWS, Microsoft Azure and Google Cloud.
                </p>
              </div>
            </motion.div>

            {/* Insight 3 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img5} 
                  alt="Compliance Documents" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Establishing Security Governance and Confidence
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Discover how proactive governance, automation and frequent Cybersecurity Risk Assessment can enhance customer confidence, and business resilience.
                </p>
              </div>
            </motion.div>
            
            {/* Insight 4 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img6} 
                  alt="Code on screen" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Zero-Trust Architecture Implementation
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Know how Capyngen applies Zero-Trust frameworks to constantly verify all users, apps, and devices throughout all digital infrastructure.
                </p>
              </div>
            </motion.div>

            {/* Insight 5 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img7} 
                  alt="Circuit board" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  AI-Powered Threat Intelligence
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Explore how AI enhances modern Cybersecurity Services by detecting evolving threats, and preventing attacks before they impact operations.
                </p>
              </div>
            </motion.div>

            {/* Insight 6 */}
            <motion.div variants={fadeInUp} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden bg-[#e9eff6] flex items-center justify-center">
                <img 
                  src={img8} 
                  alt="Meeting" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#084887] transition-colors leading-snug">
                  Security Awareness Training
                </h3>
                <p className="text-slate-600 text-xs flex-1 leading-relaxed">
                  Gain insight into the role employee security awareness programs play in bolstering your organization's resiliency and how it fits into our full suite of Cybersecurity Solutions and enterprise security protection strategies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Team Section (Why Choose Us) */}
      <section className="bg-white py-20 lg:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#084887] mb-4">Why Choose Capyngen?</h2>
            <p className="text-sm text-slate-500">Trust a Cybersecurity Partner for your business, take proactive steps to protect, and secure your business for the future, no matter how it grows.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center group border border-slate-100 p-6 rounded-md shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">Certified Security Experts</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Adept professionals to provide trustworthy cybersecurity solutions to all industries.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group border border-slate-100 p-6 rounded-md shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">24/7 Threat Monitoring</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Real-time monitoring for preventing and blocking cyber threats.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group border border-slate-100 p-6 rounded-md shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">Tailored Security Strategies</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Tailored security solutions to suit your business needs.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center group border border-slate-100 p-6 rounded-md shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2">Scalable Enterprise Protection</h3>
              <p className="text-[#084887] text-[10px] font-semibold uppercase tracking-wider">Smart, secure and resilient infrastructure for future growth and business.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f7f9fc] py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#084887] mb-4">Frequently Asked Questions</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                variants={fadeInUp}
                key={index} 
                className="bg-white rounded-md shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm md:text-base pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#084887] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Form Section */}
      <section ref={contactRef} className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl font-bold text-[#084887] mb-6">Secure Your Digital Future</h2>
              <p className="text-sm text-slate-600 mb-10 leading-relaxed">
                Work with a trusted Cybersecurity Service Provider like Capyngen to gain access to a complete suite of Cybersecurity Consulting Services, and Customized Enterprise Cybersecurity Solutions that will protect your business now and in the future.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-slate-700 bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5 mr-4 text-[#084887]" />
                  <a href="mailto:cybersecurity@capyngen.com" className="text-sm font-semibold hover:text-[#084887] transition-colors">cybersecurity@capyngen.com</a>
                </div>
                <div className="flex items-center text-slate-700 bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                  <PhoneCall className="w-5 h-5 mr-4 text-[#084887]" />
                  <span className="text-sm font-semibold">+1 (800) CAPYNGEN</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 bg-[#f7f9fc] p-8 sm:p-10 shadow-lg border border-slate-100"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      required
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      required
                      className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="workEmail" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                  <input 
                    type="email" 
                    id="workEmail"
                    required
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent placeholder-slate-300"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Area of Interest</label>
                  <select 
                    id="interest"
                    required
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an area...</option>
                    <option value="soc">Managed SOC Services</option>
                    <option value="iam">Identity & Access Management</option>
                    <option value="compliance">Risk & Compliance Audit</option>
                    <option value="incident">Incident Response Planning</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="details" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="details"
                    rows={2}
                    className="w-full px-0 py-2 text-sm border-b border-slate-200 focus:border-[#084887] outline-none transition-colors text-slate-900 bg-transparent resize-none placeholder-slate-300"
                    placeholder="Briefly describe your security concerns..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#084887] hover:bg-[#063361] text-white font-bold py-4 transition-colors mt-4 text-[11px] tracking-[0.2em] uppercase rounded-sm cursor-pointer"
                >
                  Request Consultation
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CyberSecurityLandingPage;