import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

// Partner logos
import logo21st from '@/assets/images/logos/21st.png';
import logoAMS from '@/assets/images/logos/AMS.png';
import logoAstech from '@/assets/images/logos/Astech.png';
import logoBPI from '@/assets/images/logos/BPI.png';
import logoESSEC from '@/assets/images/logos/ESSEC.png';
import logoGifas from '@/assets/images/logos/Gifas.png';
import logoGoogle from '@/assets/images/logos/google.png';
import logoSkythread from '@/assets/images/logos/Skythread.png';
import logoSkyzen from '@/assets/images/logos/Skyzen.png';
import logoStellar from '@/assets/images/logos/Stellar.png';
import logoParisSaclay from '@/assets/images/logos/Paris-Saclay.png';
import logoStationF from '@/assets/images/logos/Station F.png';
import logoCentral from '@/assets/images/logos/Central.png';
import heroImage from '@/assets/images/logos/image.png';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Partners() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    partnershipType: '',
    message: ''
  });

  const erpPartners = [
    { name: 'AMS', logo: logoAMS, description: 'Strategic Investor & ERP Integration Partner', link: 'https://amc-aviation.fr/' },
    { name: 'Skyzen', logo: logoSkyzen, description: 'Aviation ERP & Technology Solutions Partner', link: 'https://skyzen.aero/' }
  ];

  const partners = [
    { name: 'Google', logo: logoGoogle, description: 'Cloud Technology & Innovation Partner' },
    { name: 'SkyThread', logo: logoSkythread, description: 'Commercial & Distribution Partner', link: 'https://www.skythread.aero/' },
    { name: 'Stellar', logo: logoStellar, description: 'Technology Innovation & Investment Fund', link: 'https://stellar.org/' },
    { name: '21st CentraleSupélec', logo: logo21st, description: 'Deep Tech Startup Accelerator', link: 'https://21st.centralesupelec.com/' },
    { name: 'BPI France', logo: logoBPI, description: 'Public Investment Bank & Financing Partner' },
    { name: 'Astech', logo: logoAstech, description: 'Paris Region Aerospace Innovation Hub', link: 'https://www.pole-astech.org/' },
    { name: 'Gifas', logo: logoGifas, description: 'Aviation Industry Excellence Accelerator', link: 'https://www.gifas.fr/' },
    { name: 'ESSEC', logo: logoESSEC, description: 'Business Development & Strategic Partner' },
    { name: 'Station F', logo: logoStationF, description: 'World\'s Largest Startup Campus Partner' },
    { name: 'CentralSupélec', logo: logoCentral, description: 'Engineering Excellence & Research Partner' },
    { name: 'Paris-Saclay', logo: logoParisSaclay, description: 'Deep Tech Innovation Ecosystem Partner' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Google Form with pre-filled data
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScRlque5ZiCun-1uporgpNZjMeLJZDl1H22DBrx0UPUFoazLA/viewform?usp=header';
    window.open(formUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Partners Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-sky-700/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Partners & Supporters
          </motion.h1>
          <motion.p
            className="text-xl text-sky-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Collaborating with leading organizations to revolutionize aviation traceability and compliance
          </motion.p>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-600">
                Join us in revolutionizing aviation traceability and compliance
              </p>
            </div>

            <Card className="border-none shadow-xl bg-gradient-to-br from-white to-sky-50">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      required
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select partnership type</option>
                      <option value="investment">Investment Partnership</option>
                      <option value="technology">Technology Partnership</option>
                      <option value="commercial">Commercial Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your partnership interest..."
                    />
                  </div>

                  <div className="bg-sky-50 rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">Partnership Types:</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        <span><strong className="text-sky-700">Investment:</strong> Financial partnership to accelerate AeroChain development and market expansion</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        <span><strong className="text-sky-700">Technology:</strong> Collaborative integration and co-development of aviation technology solutions</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold mt-0.5">•</span>
                        <span><strong className="text-sky-700">Commercial:</strong> Distribution, reselling, and go-to-market partnerships in aviation sector</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Submit Partnership Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ERP Partners Section */}
      <section id="erp-partners" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ERP Partners
            </h2>
            <p className="text-xl text-gray-600">
              Strategic ERP integration partners powering aviation maintenance solutions
            </p>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {erpPartners.map((partner) => {
              const content = (
                <motion.div
                  key={partner.name}
                  variants={scaleIn}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-gradient-to-br from-sky-50 to-white border-2 border-sky-200 rounded-xl p-8 premium-shadow hover:premium-shadow-hover transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] cursor-pointer group"
                >
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm text-slate-700 text-center leading-relaxed group-hover:text-sky-700 transition-colors font-semibold">
                    {partner.description}
                  </p>
                </motion.div>
              );
              
              return partner.link ? (
                <a key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : content;
            })}
          </motion.div>
        </div>
      </section>

      {/* Other Partners Grid */}
      <section className="section-padding bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners & Supporters
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading organizations in aviation and technology
            </p>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {partners.map((partner) => {
                const content = (
                  <div
                    key={`first-${partner.name}`}
                    className="bg-white border border-slate-200/60 rounded-xl p-6 premium-shadow hover:premium-shadow-hover transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] cursor-pointer group flex-shrink-0 w-[280px]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs text-slate-600 text-center leading-relaxed group-hover:text-sky-600 transition-colors font-medium">
                      {partner.description}
                    </p>
                  </div>
                );
                
                return partner.link ? (
                  <a key={`first-${partner.name}`} href={partner.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={`first-${partner.name}`}>{content}</div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => {
                const content = (
                  <div
                    key={`second-${partner.name}`}
                    className="bg-white border border-slate-200/60 rounded-xl p-6 premium-shadow hover:premium-shadow-hover transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] cursor-pointer group flex-shrink-0 w-[280px]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-xs text-slate-600 text-center leading-relaxed group-hover:text-sky-600 transition-colors font-medium">
                      {partner.description}
                    </p>
                  </div>
                );
                
                return partner.link ? (
                  <a key={`second-${partner.name}`} href={partner.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={`second-${partner.name}`}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

