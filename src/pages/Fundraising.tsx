import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Rocket, CheckCircle } from 'lucide-react';
import logoWingleet from '@/assets/images/logos/Logo_Wingleet_no_bg.png';
import heroImage from '@/assets/images/logos/heroe_section.jpg';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Fundraising() {
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <img 
              src={logoWingleet} 
              alt="Wingleet" 
              className="h-16 mx-auto mb-6"
            />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            2026 Fundraising Round
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Scaling Performance and Accelerating Growth
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Overview Section */}
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="max-w-4xl mx-auto text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Strategic Growth Investment
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Wingleet is launching a fundraising round in 2026 to scale our performance 
                    and significantly increase our volume and client base. This strategic investment 
                    will enable us to accelerate innovation, expand our market presence, and deliver 
                    enhanced value to the aviation industry.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Objectives Section */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                  Investment Objectives
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        Scale Performance
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enhance platform capabilities, optimize infrastructure, and improve 
                        system performance to handle increased demand.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        Expand Client Base
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Accelerate customer acquisition, strengthen sales and marketing efforts, 
                        and build strategic partnerships across the aviation ecosystem.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                        <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        Increase Volume
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Scale operations to support higher transaction volumes, expand service 
                        offerings, and meet growing market demand.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits Section */}
            <Card className="border-border bg-muted">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                  Why Invest in Wingleet?
                </h2>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {[
                    'Proven track record in aviation traceability solutions',
                    'Strategic partnerships with industry leaders',
                    'Cutting-edge blockchain and AI technology',
                    'Growing market demand for digital transformation',
                    'Experienced team with deep industry expertise',
                    'Strong position in the aerospace supply chain'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="border-border text-center">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Interested in Learning More?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For investment inquiries and detailed information about our 2026 fundraising round, 
                  please contact us through our partnership channels.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <a href="/partners">View Partnerships</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
