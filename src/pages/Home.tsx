import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plane, Shield, Network, ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroBackground from '@/assets/images/logos/hero.png';
import heroImage from '@/assets/images/avion.png';

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
import logoAerochain from '@/assets/images/logos/Logo_Aerochain_color_no_bg.png';
import logoERP from '@/assets/images/logos/ERP.png';
import logoHub from '@/assets/images/logos/Hub.png';
import videoAerochainExpert from '@/assets/videos/Video_Aerochain_Expert.mp4';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  const rotatingWords = ['Airworthiness', 'Traceability', 'MRO', 'Compliance', 'CAMO'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <div className="min-h-screen w-full mx-0">
      <section 
        className="w-full min-h-[80vh] flex items-center relative overflow-hidden pt-20 sm:pt-16 md:pt-0"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute border border-white/30 rounded-full ${
                i === 0 ? 'top-20 left-10 w-72 h-72' :
                i === 1 ? 'bottom-10 right-20 w-96 h-96' :
                'top-1/2 left-1/3 w-48 h-48'
              }`}
              animate={{
                scale: [1, 1.05 + i * 0.05, 1],
                rotate: i % 2 === 0 ? [0, 360] : [360, 0]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Background image - full width */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={heroImage} 
            alt="Aircraft" 
            className="w-full h-full object-cover"
            style={{ mixBlendMode: 'normal', objectPosition: 'center bottom' }}
          />
        </motion.div>

        <div className="w-full max-w-7xl mx-auto relative z-10 h-full pl-2 sm:pl-4 md:pl-6 lg:pl-8 pr-4 sm:pr-8 md:pr-16 lg:pr-24">
          <div className="flex items-center h-full">
            {/* Center left - Content */}
            <motion.div
              className="text-left space-y-6 sm:space-y-8 text-white max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                variants={fadeInUp}
              >
                Revolutionizing{' '}
                <span className="inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-sky-50/90 max-w-3xl leading-relaxed mb-4"
                variants={fadeInUp}
              >
                Transforming aviation documentation into digitized, compliant information accessible in real-time through digital twins
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start pt-4 sm:pt-6"
                variants={fadeInUp}
              >
                <Link to="/aerochain">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="text-white px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-medium shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all rounded-full">
                      Discover Aero-Chain
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2lTiUwg5y8-dOu3u7AkOl-igfa_xMR8nnwh6iePSPLsMNRpm1l7whXfntJ3gOdfFfz-ebnJilC" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-sky-600 px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-medium shadow-lg hover:shadow-2xl transition-all rounded-full">
                      <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Book a Meeting
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Aero-Chain in Action
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover how our platform revolutionizes aircraft traceability and compliance management
            </p>
          </motion.div>
          
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <video
                className="w-full h-auto"
                controls
                poster=""
                preload="metadata"
              >
                <source src={videoAerochainExpert} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay for enhanced styling */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Optional: Add play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-sky-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Shield,
                title: "Automation",
                description: "Automate document processing, compliance verification, and data extraction with specialized AI"
              },
              {
                icon: Network,
                title: "Traceability",
                description: "Immutable blockchain-based records ensure complete lifecycle traceability from manufacture to dismantling"
              },
              {
                icon: Plane,
                title: "Interoperability",
                description: "Seamless ecosystem integration enabling secure data sharing across all aviation stakeholders"
              }
            ].map((item) => (
              <motion.div key={item.title} variants={scaleIn}>
                <Card className="border border-slate-200/60 premium-shadow hover:premium-shadow-hover transition-all duration-500 bg-white h-full group cursor-pointer rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center space-y-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-7 w-7 text-sky-600" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding aviation-gradient-subtle overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto container-padding"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-slate-900 text-balance text-center mb-4" variants={fadeInUp}>
            Aero-Chain Ecosystem
          </motion.h2>
          <motion.p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Our integrated platform connecting stakeholders across the aviation industry
          </motion.p>
          
          {/* Architecture Diagram */}
          <motion.div 
            className="relative"
            variants={fadeInUp}
          >
            {/* Large Desktop View - Full Architecture */}
            <div className="hidden xl:block relative h-[500px] bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 premium-shadow border border-gray-200 overflow-visible flex items-center justify-center">
              {/* Connection Lines - SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Stellar - Protocol */}
                <line x1="330" y1="230" x2="380" y2="95" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - AI */}
                <line x1="520" y1="95" x2="580" y2="95" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - App */}
                <line x1="720" y1="95" x2="780" y2="95" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - Hub */}
                <line x1="450" y1="150" x2="550" y2="320" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - Hub */}
                <line x1="650" y1="150" x2="550" y2="320" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - ERP */}
                <line x1="720" y1="120" x2="780" y2="180" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Hub - SkyThread */}
                <line x1="620" y1="375" x2="780" y2="375" stroke="#3b82f6" strokeWidth="2" />
              </svg>

              {/* Stellar */}
              <div className="absolute" style={{ left: '150px', top: '160px', width: '180px', height: '140px', zIndex: 10 }}>
                <a href="https://stellar.org/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoStellar} alt="Stellar" className="w-full h-20 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-base font-bold text-gray-900 text-center">Blockchain</p>
                    </div>
                  </motion.div>
                </a>
              </div>

              {/* AeroChain Protocol */}
              <div className="absolute" style={{ left: '380px', top: '40px', width: '140px', height: '110px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="Protocol" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">AeroChain<br/>Protocol</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain AI */}
              <div className="absolute" style={{ left: '580px', top: '40px', width: '140px', height: '110px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="AI" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">AeroChain<br/>AI</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain App */}
              <div className="absolute" style={{ left: '780px', top: '40px', width: '140px', height: '110px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="App" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">AeroChain<br/>App</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* ERP Link */}
              <div className="absolute" style={{ left: '780px', top: '180px', width: '140px', height: '110px', zIndex: 10 }}>
                <Link to="/partners#erp-partners" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoERP} alt="ERP Link" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">ERP Link</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Hub & Services */}
              <div className="absolute" style={{ left: '480px', top: '320px', width: '140px', height: '110px', zIndex: 10 }}>
                <motion.div whileHover={{ scale: 1.05 }} className="group h-full">
                  <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                    <img src={logoHub} alt="Hub" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <p className="text-sm font-bold text-gray-900 text-center">Hub </p>
                  </div>
                </motion.div>
              </div>

              {/* SkyThread */}
              <div className="absolute" style={{ left: '780px', top: '320px', width: '140px', height: '110px', zIndex: 10 }}>
                <a href="https://www.skythread.aero/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoSkythread} alt="SkyThread" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">Partner</p>
                    </div>
                  </motion.div>
                </a>
              </div>
            </div>

            {/* Medium Desktop View - Compact Architecture */}
            <div className="hidden lg:block xl:hidden relative h-[400px] bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-6 premium-shadow border border-gray-200 overflow-visible flex items-center justify-center">
              {/* Connection Lines - SVG - Scaled down */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Stellar - Protocol */}
                <line x1="260" y1="180" x2="300" y2="70" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - AI */}
                <line x1="410" y1="70" x2="460" y2="70" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - App */}
                <line x1="570" y1="70" x2="620" y2="70" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - Hub */}
                <line x1="360" y1="120" x2="440" y2="250" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - Hub */}
                <line x1="520" y1="120" x2="440" y2="250" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - ERP */}
                <line x1="570" y1="90" x2="620" y2="140" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Hub - SkyThread */}
                <line x1="500" y1="300" x2="620" y2="300" stroke="#3b82f6" strokeWidth="2" />
              </svg>

              {/* Stellar */}
              <div className="absolute" style={{ left: '120px', top: '120px', width: '140px', height: '120px', zIndex: 10 }}>
                <a href="https://stellar.org/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoStellar} alt="Stellar" className="w-full h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-sm font-bold text-gray-900 text-center">Blockchain</p>
                    </div>
                  </motion.div>
                </a>
              </div>

              {/* AeroChain Protocol */}
              <div className="absolute" style={{ left: '300px', top: '30px', width: '110px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="Protocol" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">Protocol</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain AI */}
              <div className="absolute" style={{ left: '460px', top: '30px', width: '110px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="AI" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">AI</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain App */}
              <div className="absolute" style={{ left: '620px', top: '30px', width: '110px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="App" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">App</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* ERP Link */}
              <div className="absolute" style={{ left: '620px', top: '140px', width: '110px', height: '80px', zIndex: 10 }}>
                <Link to="/partners#erp-partners" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoERP} alt="ERP Link" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">ERP</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Hub & Services */}
              <div className="absolute" style={{ left: '385px', top: '250px', width: '110px', height: '80px', zIndex: 10 }}>
                <motion.div whileHover={{ scale: 1.05 }} className="group h-full">
                  <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                    <img src={logoHub} alt="Hub" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <p className="text-xs font-bold text-gray-900 text-center">Hub</p>
                  </div>
                </motion.div>
              </div>

              {/* Partners */}
              <div className="absolute" style={{ left: '620px', top: '250px', width: '110px', height: '80px', zIndex: 10 }}>
                <Link to="/partners" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <p className="text-xs font-bold text-gray-900 text-center">Partners</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Tablet View - Simplified Architecture */}
            <div className="hidden md:block lg:hidden relative h-[350px] bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-4 premium-shadow border border-gray-200 overflow-visible flex items-center justify-center">
              {/* Connection Lines - SVG - Further scaled down */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Stellar - Protocol */}
                <line x1="200" y1="150" x2="250" y2="60" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - AI */}
                <line x1="320" y1="60" x2="370" y2="60" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - App */}
                <line x1="450" y1="60" x2="500" y2="60" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Protocol - Hub */}
                <line x1="285" y1="100" x2="350" y2="200" stroke="#3b82f6" strokeWidth="2" />
                
                {/* AI - Hub */}
                <line x1="420" y1="100" x2="350" y2="200" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Hub - SkyThread */}
                <line x1="400" y1="250" x2="500" y2="250" stroke="#3b82f6" strokeWidth="2" />
              </svg>

              {/* Stellar */}
              <div className="absolute" style={{ left: '100px', top: '100px', width: '100px', height: '100px', zIndex: 10 }}>
                <a href="https://stellar.org/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoStellar} alt="Stellar" className="w-full h-12 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">Blockchain</p>
                    </div>
                  </motion.div>
                </a>
              </div>

              {/* AeroChain Protocol */}
              <div className="absolute" style={{ left: '250px', top: '20px', width: '70px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-2 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="Protocol" className="w-full h-10 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">Protocol</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain AI */}
              <div className="absolute" style={{ left: '370px', top: '20px', width: '70px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-2 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="AI" className="w-full h-10 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">AI</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* AeroChain App */}
              <div className="absolute" style={{ left: '500px', top: '20px', width: '70px', height: '80px', zIndex: 10 }}>
                <Link to="/aerochain" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-2 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoAerochain} alt="App" className="w-full h-10 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">App</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Hub & Services */}
              <div className="absolute" style={{ left: '315px', top: '200px', width: '70px', height: '80px', zIndex: 10 }}>
                <motion.div whileHover={{ scale: 1.05 }} className="group h-full">
                  <div className="bg-white border-2 border-gray-300 rounded-xl p-2 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                    <img src={logoHub} alt="Hub" className="w-full h-10 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <p className="text-xs font-bold text-gray-900 text-center">Hub</p>
                  </div>
                </motion.div>
              </div>

              {/* SkyThread */}
              <div className="absolute" style={{ left: '500px', top: '200px', width: '70px', height: '80px', zIndex: 10 }}>
                <a href="https://www.skythread.aero/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="group cursor-pointer h-full">
                    <div className="bg-white border-2 border-gray-300 rounded-xl p-2 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center">
                      <img src={logoSkythread} alt="SkyThread" className="w-full h-10 object-contain mb-1 grayscale group-hover:grayscale-0 transition-all duration-300" />
                      <p className="text-xs font-bold text-gray-900 text-center">Partner</p>
                    </div>
                  </motion.div>
                </a>
              </div>
            </div>

            {/* Mobile View - Vertical Stack */}
            <div className="md:hidden space-y-3">
              <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow">
                <img src={logoStellar} alt="Stellar" className="w-20 h-12 object-contain mx-auto mb-2" />
                <p className="text-base font-bold text-slate-900 text-center">Stellar</p>
                <p className="text-xs text-slate-600 text-center">Blockchain</p>
              </motion.div>

              <Link to="/aerochain">
                <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow cursor-pointer hover:shadow-lg transition-shadow">
                  <img src={logoAerochain} alt="AeroChain Protocol" className="w-20 h-12 object-contain mx-auto mb-2" />
                  <p className="text-base font-bold text-slate-900 text-center">AeroChain Protocol</p>
                  <p className="text-xs text-slate-600 text-center">Blockchain Layer</p>
                </motion.div>
              </Link>

              <Link to="/aerochain">
                <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow cursor-pointer hover:shadow-lg transition-shadow">
                  <img src={logoAerochain} alt="AeroChain AI" className="w-20 h-12 object-contain mx-auto mb-2" />
                  <p className="text-base font-bold text-slate-900 text-center">AeroChain AI</p>
                  <p className="text-xs text-slate-600 text-center">Intelligence Layer</p>
                </motion.div>
              </Link>

              <Link to="/aerochain">
                <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow cursor-pointer hover:shadow-lg transition-shadow">
                  <img src={logoAerochain} alt="AeroChain App" className="w-20 h-12 object-contain mx-auto mb-2" />
                  <p className="text-base font-bold text-slate-900 text-center">AeroChain App</p>
                  <p className="text-xs text-slate-600 text-center">Application</p>
                </motion.div>
              </Link>

              <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow">
                <img src={logoERP} alt="ERP Integration" className="w-20 h-12 object-contain mx-auto mb-2" />
                <p className="text-base font-bold text-slate-900 text-center">ERP Integration</p>
                <p className="text-xs text-slate-600 text-center">Enterprise Systems</p>
              </motion.div>

              <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow">
                <img src={logoHub} alt="Hub" className="w-20 h-12 object-contain mx-auto mb-2" />
                <p className="text-base font-bold text-slate-900 text-center">Hub & Services</p>
                <p className="text-xs text-slate-600 text-center">Data Hub</p>
              </motion.div>

              <motion.div variants={scaleIn} className="bg-white rounded-xl p-4 premium-shadow">
                <img src={logoSkythread} alt="SkyThread" className="w-20 h-12 object-contain mx-auto mb-2" />
                <p className="text-base font-bold text-slate-900 text-center">SkyThread</p>
                <p className="text-xs text-slate-600 text-center">Partner</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2
            className="text-center text-slate-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Partners & Supporters
          </motion.h2>
          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[
                { name: 'AMS', logo: logoAMS, description: 'Strategic Investor & ERP Integration Partner', link: 'https://amc-aviation.fr/' },
                { name: 'Stellar', logo: logoStellar, description: 'Technology Innovation & Investment Fund', link: 'https://stellar.org/' },
                { name: '21st CentraleSupélec', logo: logo21st, description: 'Deep Tech Startup Accelerator', link: 'https://21st.centralesupelec.com/' },
                { name: 'BPI France', logo: logoBPI, description: 'Public Investment Bank & Financing Partner' },
                { name: 'Gifas', logo: logoGifas, description: 'Aviation Industry Excellence Accelerator', link: 'https://www.gifas.fr/' },
                { name: 'Skyzen', logo: logoSkyzen, description: 'Aviation Technology Solutions Partner', link: 'https://skyzen.aero/' },
                { name: 'Google', logo: logoGoogle, description: 'Cloud Technology & Innovation Partner' },
                { name: 'Astech', logo: logoAstech, description: 'Paris Region Aerospace Innovation Hub', link: 'https://www.pole-astech.org/' },
                { name: 'ESSEC', logo: logoESSEC, description: 'Business Development & Strategic Partner' },
                { name: 'Station F', logo: logoStationF, description: 'World\'s Largest Startup Campus Partner' },
                { name: 'CentralSupélec', logo: logoCentral, description: 'Engineering Excellence & Research Partner' },
                { name: 'Paris-Saclay', logo: logoParisSaclay, description: 'Deep Tech Innovation Ecosystem Partner' }
              ].map((partner, index) => {
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
              {[
                { name: 'AMS', logo: logoAMS, description: 'Strategic Investor & ERP Integration Partner', link: 'https://amc-aviation.fr/' },
                { name: 'Stellar', logo: logoStellar, description: 'Technology Innovation & Investment Fund', link: 'https://stellar.org/' },
                { name: '21st CentraleSupélec', logo: logo21st, description: 'Deep Tech Startup Accelerator', link: 'https://21st.centralesupelec.com/' },
                { name: 'BPI France', logo: logoBPI, description: 'Public Investment Bank & Financing Partner' },
                { name: 'Gifas', logo: logoGifas, description: 'Aviation Industry Excellence Accelerator', link: 'https://www.gifas.fr/' },
                { name: 'Skyzen', logo: logoSkyzen, description: 'Aviation Technology Solutions Partner', link: 'https://skyzen.aero/' },
                { name: 'Google', logo: logoGoogle, description: 'Cloud Technology & Innovation Partner' },
                { name: 'Astech', logo: logoAstech, description: 'Paris Region Aerospace Innovation Hub', link: 'https://www.pole-astech.org/' },
                { name: 'ESSEC', logo: logoESSEC, description: 'Business Development & Strategic Partner' },
                { name: 'Station F', logo: logoStationF, description: 'World\'s Largest Startup Campus Partner' },
                { name: 'CentralSupélec', logo: logoCentral, description: 'Engineering Excellence & Research Partner' },
                { name: 'Paris-Saclay', logo: logoParisSaclay, description: 'Deep Tech Innovation Ecosystem Partner' }
              ].map((partner) => {
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

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl border-none overflow-hidden">
              <CardContent className="pt-10 pb-10 px-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                      <Input id="name" placeholder="Your name" className="h-12 border-gray-200 focus:border-sky-500 focus:ring-sky-500" />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Label htmlFor="company" className="text-gray-700 font-medium">Company</Label>
                      <Input id="company" placeholder="Your company" className="h-12 border-gray-200 focus:border-sky-500 focus:ring-sky-500" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" className="h-12 border-gray-200 focus:border-sky-500 focus:ring-sky-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-32 border-gray-200 focus:border-sky-500 focus:ring-sky-500" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="w-full bg-sky-600 hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all">
                        Send Message
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2lTiUwg5y8-dOu3u7AkOl-igfa_xMR8nnwh6iePSPLsMNRpm1l7whXfntJ3gOdfFfz-ebnJilC" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="button" size="lg" variant="outline" className="w-full border-2 border-sky-600 text-sky-600 hover:bg-sky-50">
                          <Calendar className="mr-2 h-5 w-5" />
                          Schedule a Call
                        </Button>
                      </motion.div>
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
