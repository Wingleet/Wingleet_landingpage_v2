import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Linkedin } from 'lucide-react';

// Co-founder photos
import photoVincent from '@/assets/images/logos/Co-founder/v.png';
import photoAntoine from '@/assets/images/logos/Co-founder/a.png';
import photoSebastien from '@/assets/images/logos/Co-founder/s.png';
import teamImage from '@/assets/images/image.png';

// Company logos
import logoSabenaTechnics from '@/assets/images/logos/SabenaTechnics.png';
import logoAAA from '@/assets/images/logos/AAA.png';
import logoACI from '@/assets/images/logos/aci.png';
import logoAFR from '@/assets/images/logos/AFR.png';
import logoESSEC from '@/assets/images/logos/ESSEC.png';
import logoCentral from '@/assets/images/logos/Central.png';

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <section className="bg-gradient-to-br from-sky-500 to-sky-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">Our Team</h1>
              <p className="text-xl md:text-2xl text-sky-50">
                Expert aviation professionals and technology specialists driving innovation in aircraft traceability
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={teamImage} 
                alt="Team" 
                className="h-64 md:h-80 w-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all bg-white overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-sky-400 to-sky-500"></div>
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden ring-4 ring-sky-400/30">
                <img 
                  src={photoVincent} 
                  alt="Vincent Montesano"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vincent Montesano</h3>
                <p className="text-sky-600 font-semibold mb-4">President</p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Aviation industry expert with extensive experience in airworthiness and maintenance operations. Previously worked at
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <img src={logoSabenaTechnics} alt="Sabena Technics" className="h-8 w-auto object-contain" />
                  <img src={logoAAA} alt="AAA" className="h-5 w-auto object-contain" />
                  <img src={logoACI} alt="ACI" className="h-5 w-auto object-contain" />
                  <img src={logoAFR} alt="Air France" className="h-8 w-auto object-contain" />
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Business & Aviation Strategy</p>
                <a 
                  href="https://www.linkedin.com/in/vincent-montesano-82a986bb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all bg-white overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-500"></div>
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden ring-4 ring-blue-400/30">
                <img 
                  src={photoAntoine} 
                  alt="Antoine Houlette"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Antoine Houlette</h3>
                <p className="text-blue-600 font-semibold mb-4">CTO</p>
                <p className="text-gray-600 leading-relaxed">
                Senior developer with expertise in full-stack development and emerging technologies. Background bringing cutting-edge tech expertise.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Development & Technology</p>
                <a 
                  href="https://www.linkedin.com/in/antoine-houlette-8359bbbb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all bg-white overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-sky-400 to-sky-500"></div>
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden ring-4 ring-sky-400/30">
                <img 
                  src={photoSebastien} 
                  alt="Sébastien Batty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sébastien Batty</h3>
                <p className="text-sky-600 font-semibold mb-4">CEO</p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Technology leader specializing in blockchain and AI development. Graduated from
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <img src={logoESSEC} alt="ESSEC" className="h-8 w-auto object-contain" />
                  <img src={logoCentral} alt="CentraleSupélec" className="h-8 w-auto object-contain" />
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Technology & Business Innovation</p>
                <a 
                  href="https://www.linkedin.com/in/s%C3%A9bastien-batty/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Extended Team
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our talented team of specialists bringing diverse expertise in blockchain, AI, and full-stack development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-sky-50 to-white">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Full-Stack Developers</h3>
                <p className="text-3xl font-bold text-sky-600">2</p>
                <p className="text-gray-600 text-sm">Building scalable web applications</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Blockchain Engineers</h3>
                <p className="text-3xl font-bold text-blue-600">2</p>
                <p className="text-gray-600 text-sm">Securing traceability infrastructure</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI/ML Specialists</h3>
                <p className="text-3xl font-bold text-cyan-600">2</p>
                <p className="text-gray-600 text-sm">Developing intelligent automation</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Engineering Interns</h3>
                <p className="text-3xl font-bold text-indigo-600">2</p>
                <p className="text-gray-600 text-sm">Supporting AI/ML development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We're Hiring
            </h2>
            <p className="text-xl text-gray-600">
              Join our team and help revolutionize aviation traceability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PhD Candidate</h3>
                <p className="text-gray-600 text-sm">Artificial Intelligence research position</p>
                <div className="pt-2">
                  <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Research
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Blockchain Engineer</h3>
                <p className="text-gray-600 text-sm">Full-time position</p>
                <div className="pt-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Full-time
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Software Developer</h3>
                <p className="text-gray-600 text-sm">Full-time position</p>
                <div className="pt-2">
                  <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Full-time
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI Student Intern</h3>
                <p className="text-gray-600 text-sm">Internship opportunity</p>
                <div className="pt-2">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Internship
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Software Dev Intern</h3>
                <p className="text-gray-600 text-sm">Internship opportunity</p>
                <div className="pt-2">
                  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Internship
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in joining our team? Get in touch with us!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDKMCzwXGweus18WBx2xTFCVfxYFwNLJRjshEd394dt9achw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
