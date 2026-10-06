import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const quickLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Social Media Marketing',
    'SEO',
    'Paid Advertising',
    'Content Marketing',
    'Email Marketing',
    'Website Development',
    'Video Editing',
    'Analytics',
    'CRO',
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#F3C644] to-[#997D25] flex items-center justify-center font-bold text-black text-sm">
                  AN
                </div>
                <span className="text-xl font-bold font-display text-white tracking-tight">
                  {AGENCY_INFO.name}
                </span>
              </div>
              <p className="text-sm font-medium text-neutral-300 italic mb-4">
                "{AGENCY_INFO.tagline}"
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
                Founded by {AGENCY_INFO.founder}. Full-service digital marketing tailored for ambitious B2B and B2C brands worldwide. Turning digital presence into predictable sales and brand dominance.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644] transition-colors"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {serviceLinks.map((srv) => (
                <a
                  key={srv}
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#D4AF37] transition-colors line-clamp-1"
                >
                  {srv}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 A.N Marketing Agency. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Worldwide Client Operations</span>
            <span>·</span>
            <span>Ethical Performance Marketing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
