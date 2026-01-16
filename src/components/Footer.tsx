import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import logoWingleet from '@/assets/images/logos/Co-founder/Wingleet_full_logo_no_bg.png';

export default function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center group">
              <img 
                src={logoWingleet} 
                alt="Wingleet" 
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-foreground text-sm leading-relaxed max-w-xs">
              Revolutionizing aircraft traceability through AI and blockchain technology
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/wingleet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary rounded-full transition-all duration-200 group"
              >
                <Linkedin className="h-5 w-5 text-foreground" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5 text-foreground">Solutions</h3>
            <ul className="space-y-3 text-foreground text-sm">
              <li>
                <Link to="/aerochain" className="text-foreground hover:text-primary transition-colors inline-block">
                  Aero-Chain AI
                </Link>
              </li>
              <li>
                <Link to="/aerochain" className="text-foreground hover:text-primary transition-colors inline-block">
                  Aero-Chain Protocol
                </Link>
              </li>
              <li>
                <Link to="/custom-dev" className="text-foreground hover:text-primary transition-colors inline-block">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5 text-foreground">Company</h3>
            <ul className="space-y-3 text-foreground text-sm">
              <li>
                <Link to="/team" className="text-foreground hover:text-primary transition-colors inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-foreground hover:text-primary transition-colors inline-block">
                  News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-foreground hover:text-primary transition-colors inline-block">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5 text-foreground">Contact</h3>
            <ul className="space-y-4 text-foreground text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" strokeWidth={2} />
                <span>Paris, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" strokeWidth={2} />
                <a href="mailto:contact@wingleet.com" className="text-foreground hover:text-primary transition-colors">
                  contact@wingleet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground">
            <p>© 2026 Wingleet. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
