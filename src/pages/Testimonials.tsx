import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, CheckCircle, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Client Stories</h1>
          <p className="text-xl md:text-2xl text-sky-50 max-w-3xl mx-auto">
            Real results from aviation industry leaders trusting Wingleet
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-sky-50 overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-gradient-to-br from-sky-600 to-sky-800 p-12 flex flex-col justify-center text-white">
              <Quote className="h-16 w-16 mb-6 text-sky-200" />
              <h2 className="text-3xl font-bold mb-4">AMC Aviation</h2>
              <p className="text-sky-100 text-lg mb-6">
                Leading aircraft maintenance and dismantling company
              </p>
              <div className="space-y-2 text-sky-50">
                <p className="font-semibold">Michel Montezume</p>
                <p className="text-sm">Chief Executive Officer</p>
              </div>
            </div>

            <CardContent className="md:col-span-3 p-12">
              <div className="space-y-6">
                <Quote className="h-12 w-12 text-sky-600" />
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  "Wingleet's Aero-Chain platform has fundamentally transformed how we manage our aircraft dismantling operations. The integration with our ERP system and the AI-powered automation have eliminated countless hours of manual work while dramatically improving accuracy."
                </blockquote>
                <p className="text-gray-600 leading-relaxed">
                  The iDismantling module developed by Wingleet seamlessly integrates with our existing systems, providing real-time synchronization and automated compliance verification. Our team can now focus on strategic activities instead of administrative tasks.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Key Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg bg-gradient-to-br from-sky-50 to-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center">ERP Integration</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Seamless connection with existing systems, eliminating data silos and manual entry
                </p>
                <div className="pt-4 text-center">
                  <p className="text-4xl font-bold text-sky-600">100%</p>
                  <p className="text-sm text-gray-500 mt-2">Data synchronization accuracy</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center">Real-Time Sync</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Instant data updates across all platforms ensuring everyone works with current information
                </p>
                <div className="pt-4 text-center">
                  <p className="text-4xl font-bold text-emerald-600">Live</p>
                  <p className="text-sm text-gray-500 mt-2">Continuous synchronization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-violet-50 to-white">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center">AI Automation</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Intelligent processing of documents and automatic compliance verification
                </p>
                <div className="pt-4 text-center">
                  <p className="text-4xl font-bold text-violet-600">85%</p>
                  <p className="text-sm text-gray-500 mt-2">Time savings on admin tasks</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-8 text-center">Implementation Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Automated Documentation</h4>
                      <p className="text-gray-300">All dismantling records are automatically generated and stored with complete traceability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Component Tracking</h4>
                      <p className="text-gray-300">Real-time visibility into every component's status, location, and history</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Compliance Assurance</h4>
                      <p className="text-gray-300">Automatic verification against regulatory requirements eliminates manual checks</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Inventory Management</h4>
                      <p className="text-gray-300">Streamlined parts inventory with automatic updates and reporting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Error Reduction</h4>
                      <p className="text-gray-300">AI-powered validation catches discrepancies before they become problems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Team Efficiency</h4>
                      <p className="text-gray-300">Staff redirected from admin tasks to value-adding technical work</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading aviation companies who trust Wingleet for their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 px-8 py-6 text-lg">
                Contact Wingleet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/aerochain">
              <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-6 text-lg">
                Explore Aero-Chain
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
