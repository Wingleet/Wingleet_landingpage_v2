import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Wrench, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import customDevImage from '@/assets/images/logos/custom-dev.png';

export default function CustomDev() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src={customDevImage} 
                alt="Custom Development" 
                className="h-64 md:h-80 w-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">Custom Development</h1>
              <p className="text-xl md:text-2xl text-sky-50">
                Tailored solutions for ERP, MRO, and airline software systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Custom Solutions for Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We develop bespoke software solutions that integrate seamlessly with your existing aviation systems, enhancing efficiency and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ERP Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with aviation ERP systems for automated data flow and real-time synchronization
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">MRO Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom maintenance, repair, and overhaul software tailored to your operational workflows
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
            <CardContent className="pt-8 pb-8 text-center space-y-4">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">AI Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent tools for structural damage detection, document processing, and compliance checking
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Example Projects
          </h2>

          <div className="space-y-12">
            <Card className="border-none shadow-xl bg-gradient-to-r from-sky-50 to-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">AMC Aviation</h3>
                    <h4 className="text-xl font-semibold text-sky-600">iDismantling Module</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Developed a comprehensive aircraft dismantling management system that tracks component removal, documentation, and inventory in real-time. The solution integrates with their existing ERP and provides automated compliance verification.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Real-time component tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Automated documentation generation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>ERP integration with data synchronization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-sky-600 text-white rounded-2xl p-8 text-center shadow-lg w-full">
                      <p className="text-4xl font-bold mb-2">85%</p>
                      <p className="text-sky-100">Reduction in processing time</p>
                      <div className="mt-6 pt-6 border-t border-sky-400">
                        <p className="text-4xl font-bold mb-2">100%</p>
                        <p className="text-sky-100">Compliance accuracy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-r from-yellow-50 to-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <div className="bg-yellow-600 text-white rounded-2xl p-8 text-center shadow-lg w-full">
                      <p className="text-4xl font-bold mb-2">95%</p>
                      <p className="text-yellow-100">Detection accuracy</p>
                      <div className="mt-6 pt-6 border-t border-yellow-400">
                        <p className="text-4xl font-bold mb-2">60%</p>
                        <p className="text-yellow-100">Faster inspections</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">Take Off Solutions</h3>
                    <h4 className="text-xl font-semibold text-yellow-600">AI Structural Damage Tool</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Created an AI-powered visual inspection system that automatically detects and classifies structural damage on aircraft components. The tool uses computer vision and machine learning to identify anomalies and generate detailed inspection reports.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Computer vision damage detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Automated severity classification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Inspection report generation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-r from-emerald-50 to-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">Aero-Chain AI</h3>
                    <h4 className="text-xl font-semibold text-emerald-600">Airworthiness Certificate Review AI</h4>
                    <p className="text-gray-700 leading-relaxed">
                      To improve review of Aircraft airworthiness certificate by Aero-Chain AI. This intelligent system automates the validation process of airworthiness certificates, ensuring compliance with aviation regulations and reducing manual review time.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Automated certificate validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Regulatory compliance checking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>Real-time status monitoring</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-emerald-600 text-white rounded-2xl p-8 text-center shadow-lg w-full">
                      <p className="text-4xl font-bold mb-2">98%</p>
                      <p className="text-emerald-100">Validation accuracy</p>
                      <div className="mt-6 pt-6 border-t border-emerald-400">
                        <p className="text-4xl font-bold mb-2">75%</p>
                        <p className="text-emerald-100">Time reduction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-r from-amber-50 to-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <div className="bg-amber-600 text-white rounded-2xl p-8 text-center shadow-lg w-full">
                      <p className="text-4xl font-bold mb-2">100%</p>
                      <p className="text-amber-100">Data recovery rate</p>
                      <div className="mt-6 pt-6 border-t border-amber-400">
                        <p className="text-4xl font-bold mb-2">80%</p>
                        <p className="text-amber-100">Process acceleration</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">Aero-Chain AI</h3>
                    <h4 className="text-xl font-semibold text-amber-600">Phase IN/OUT Recovery</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Phase IN / OUT (recovery) of all airworthiness aircraft data. Comprehensive solution for managing aircraft phase-in and phase-out processes, ensuring complete data recovery and seamless transition between operational states.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Complete aircraft data migration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Airworthiness documentation recovery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Seamless operational transitions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can build the perfect solution for your aviation software needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRlque5ZiCun-1uporgpNZjMeLJZDl1H22DBrx0UPUFoazLA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 px-8 py-6 text-lg">
                Let's Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-6 text-lg">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
