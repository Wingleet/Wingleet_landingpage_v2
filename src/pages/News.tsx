import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Import logos
import logoAMC from '@/assets/images/logos/AMC.png';
import logoStellar from '@/assets/images/logos/Stellar.png';
import logo21st from '@/assets/images/logos/21st.png';
import logoGifas from '@/assets/images/logos/Gifas.png';
import logoSkyThread from '@/assets/images/logos/Skythread.png';
import logoWingleet from '@/assets/images/logos/Co-founder/Wingleet_W_icon_no_bg.png';
import heroImage from '@/assets/images/logos/heroe_section.jpg';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-padding pt-56 text-foreground overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-foreground/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest News
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest developments, partnerships, and innovations from Wingleet and AeroChain
          </motion.p>
        </div>
      </section>

      {/* News Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logoWingleet} alt="Wingleet" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">2026</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        Wingleet 2026 Fundraising Round
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Wingleet is launching a fundraising round in 2026 to scale our performance and 
                        significantly increase our volume and client base. This strategic investment will 
                        enable us to accelerate innovation, expand our market presence, and deliver enhanced 
                        value to the aviation industry.
                      </p>
                      <Link 
                        to="/fundraising"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        Learn more about our fundraising →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logoAMC} alt="AMC Aviation" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">May 2025</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        AMC Aviation Technology Partnership
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We're proud to announce our technology partnership with AMC Aviation since May 2025. 
                        This strategic collaboration strengthens our position in the aviation industry and expands 
                        our reach in providing cutting-edge traceability solutions.
                      </p>
                      <a 
                        href="https://amc-aviation.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        Learn more about AMC Aviation →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logoStellar} alt="Stellar" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">September 2025</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        Stellar Community Fund Grant
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Exciting news! AeroChain has been awarded a $128K grant from the Stellar Community Fund 
                        to accelerate the development of our blockchain-based aircraft parts traceability protocol. 
                        This funding will help us deploy Soroban smart contracts and build the infrastructure 
                        for on-chain aerospace components tracking.
                      </p>
                      <a 
                        href="https://communityfund.stellar.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        View Stellar Grant Details →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logo21st} alt="21st CentraleSupélec" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">October 2025</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        21st by CentraleSupélec Accelerator
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Fantastic news! We're thrilled to announce our integration into the 21st by CentraleSupélec 
                        accelerator program. Joining France's premier engineering school accelerator is a major boost 
                        for AeroChain, providing us with cutting-edge research collaboration and access to top-tier 
                        deeptech innovation resources.
                      </p>
                      <a 
                        href="https://21st.centralesupelec.com/nos-startups" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        Discover 21st CentraleSupélec →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logoGifas} alt="GIFAS" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">October 2025</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        GIFAS StartAir Integration
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Excellent achievement! Joining StartAir / GIFAS represents a major strategic lever for AeroChain. 
                        StartAir is the "startup club" of the French aerospace and space industry, providing us with 
                        unprecedented access to key industry players, OEMs, and regulatory bodies in the aviation sector.
                      </p>
                      <a 
                        href="https://www.gifas.fr/pages/startair" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        Explore GIFAS →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center p-2">
                        <img src={logoSkyThread} alt="SkyThread" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary font-semibold mb-2">October 2025</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        SkyThread and Wingleet Join Forces to enhance Aviation Data Sharing 
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        The partnership combines SkyThread's trusted data network and Wingleet's blockchain-AI architecture to enhance Trust, Efficiency, and Safety across Global Aviation Supply Chain

                        By combining Wingleet's aircraft parts data vault, its robust AI development capabilities with SkyThread's independent data sharing platform, the alliance will deliver enhanced value to commercial aviation stakeholders, facilitating data-driven decision-making and operational excellence and shaping the foundation for a more connected, efficient, and trusted global aviation ecosystem.
                      </p>
                      <a 
                        href="https://www.skythread.aero/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                      >
                        Visit SkyThread →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

