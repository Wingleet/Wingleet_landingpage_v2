import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle, TrendingUp, Lock, Puzzle, Link as LinkIcon, ArrowRight, Brain, Wrench, Activity, Calendar, DollarSign, Database, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import videoAerochainPublic from '@/assets/videos/Video_AeroChain_Grand public.mp4';
import documentAerochainGif from '@/assets/videos/Document Aero-chain.gif';
import operationGif from '@/assets/videos/operation.gif';
import maintenanceGif from '@/assets/videos/Maintenance.gif';

export default function AeroChain() {
  return (
    <div className="min-h-screen bg-background">

      {/* Book DEMO Section */}
      <section className="py-8 px-4 md:px-8 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Ready to See Aero-Chain in Action?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Book a personalized demo and discover how Aero-Chain can transform your aviation operations
            </p>
            <div className="pt-4">
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2lTiUwg5y8-dOu3u7AkOl-igfa_xMR8nnwh6iePSPLsMNRpm1l7whXfntJ3gOdfFfz-ebnJilC" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-6"
                >
                  Book DEMO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          {/* Backbone: Aero-Chain AI */}
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Aero-Chain AI</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Specialized intelligence focused on CAMO or MRO and document compliance, transforming how aviation maintenance records are processed and analyzed.
              </p>
            </div>
            <Card className="bg-muted border-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Implemented Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Phase-in', 'Phase-out', 'Compliance Data', 'Airworthiness Review Certificate', 'Migration ERP', 'Airworthiness Management', 'MRO support', 'Planning support', 'MCC support', 'Update manuals'].map((useCase) => (
                      <span key={useCase} className="bg-card px-4 py-2 rounded-md text-primary font-medium border border-border shadow-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature 1: Document Intelligence - Full Width Section */}
      <section 
        className="py-16 px-4 md:px-8 w-full"
        style={{
          background: 'linear-gradient(to right, #162138, #002470)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Document Intelligence</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Aircraft generate thousands of maintenance documents over their lifetime. Our AI agent automatically extracts, 
                classifies, and structures this unstructured data to build a complete digital history of each asset.
              </p>
            </div>
            <div className="md:col-span-3 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={documentAerochainGif} 
                alt="Document Intelligence in action" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Maintenance Intelligence - White Section */}
      <section className="py-16 px-4 md:px-8 w-full bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={maintenanceGif} 
                alt="Maintenance Intelligence in action" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Maintenance Intelligence</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                An AI assistant supports maintenance technicians by helping prepare and structure maintenance tasks, 
                providing the right technical and regulatory information at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Operational Intelligence - Gradient Section */}
      <section 
        className="py-16 px-4 md:px-8 w-full"
        style={{
          background: 'linear-gradient(to right, #162138, #002470)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Operational Intelligence</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Real-time compliance and status across your entire fleet. The agent monitors regulatory requirements, 
                tracks every component's status, generates reports automatically, and alerts before deadlines become problems.
              </p>
            </div>
            <div className="md:col-span-3 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={operationGif} 
                alt="Operational Intelligence in action" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Planning Intelligence - White Section */}
      <section className="py-16 px-4 md:px-8 w-full bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Planning Intelligence</h3>
                <Badge variant="secondary" className="text-xs">In progress</Badge>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The agent forecasts maintenance needs over 5-10 years, optimizes scheduling to reduce aircraft downtime, 
                and simulates the financial impact of every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Cost Intelligence - Gradient Section */}
      <section 
        className="py-16 px-4 md:px-8 w-full"
        style={{
          background: 'linear-gradient(to right, #162138, #002470)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Cost Intelligence</h3>
                <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">In progress</Badge>
              </div>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                The agent projects maintenance costs with precision, tracks budget versus actuals in real-time, 
                and identifies savings opportunities. It transforms maintenance from a cost center into a controlled investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Backbone: Aero-Chain Protocol */}
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <Card className="bg-muted border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Lock className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Immutable Records</h3>
                    </div>
                    <p className="text-base text-muted-foreground">
                      Every maintenance action, inspection, repair, and component change is cryptographically secured and cannot be retroactively modified
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Puzzle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Aero-Chain Protocol</h2>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A secure blockchain-based registry that creates an immutable record of every lifecycle event for aircraft and components, establishing a trust vault for the entire aviation ecosystem.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Data Storage</h3>
                      <p className="text-sm text-muted-foreground font-technical">Secure and immutable storage of all maintenance records, ensuring data integrity and accessibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Share2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Data Sharing</h3>
                      <p className="text-sm text-muted-foreground font-technical">Trusted data sharing across the aviation ecosystem with controlled access and multi-party verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Complete Asset History</h3>
                      <p className="text-sm text-muted-foreground font-technical">Back-to-birth traceability for all aircraft and components, eliminating documentation gaps and ensuring continuous record integrity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Secure Transactions</h3>
                      <p className="text-sm text-muted-foreground font-technical">Critical operations like leasing transfers, inspections, and dismantling are securely recorded with multi-party verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24 px-4 md:px-8 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-12">
            Impact & Benefits
          </h2>
          <div className="relative">
            <div className="flex gap-4 animate-scroll">
              {/* First set of cards */}
              {[
                { title: '96% time saved', description: 'Automated processing' },
                { title: 'Airworthiness status', description: 'Real-time visibility, ICA understanding' },
                { title: 'Optimized planning', description: 'Deadline anticipation' },
                { title: 'Controlled costs', description: 'Consolidated budget' },
                { title: 'Smooth transitions', description: 'Documentation ready' },
                { title: '90% Error Reduction', description: 'Decrease in manual entry errors and rework' }
              ].map((item, index) => (
                <Card key={`first-${index}`} className="border-border flex-shrink-0 w-[300px]">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { title: '96% time saved', description: 'Automated processing' },
                { title: 'Airworthiness status', description: 'Real-time visibility, ICA understanding' },
                { title: 'Optimized planning', description: 'Deadline anticipation' },
                { title: 'Controlled costs', description: 'Consolidated budget' },
                { title: 'Smooth transitions', description: 'Documentation ready' },
                { title: '90% Error Reduction', description: 'Decrease in manual entry errors and rework' }
              ].map((item, index) => (
                <Card key={`second-${index}`} className="border-border flex-shrink-0 w-[300px]">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 pb-24 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Aero-Chain in Action
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Discover how our platform revolutionizes aviation traceability and maintenance operations
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-border bg-card">
            <video
              controls
              className="w-full h-auto"
              poster=""
              preload="metadata"
            >
              <source src={videoAerochainPublic} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-base text-muted-foreground">
            Start a pilot project and experience the future of aviation traceability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRlque5ZiCun-1uporgpNZjMeLJZDl1H22DBrx0UPUFoazLA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-6">
                Start a Pilot Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
