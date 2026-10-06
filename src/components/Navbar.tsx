import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (packageName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (CTA Action) */}
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group flex items-center gap-2 tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#F3C644] to-[#997D25] flex items-center justify-center font-bold text-black text-sm shadow-md">
                AN
              </div>
              <span className="text-lg md:text-xl font-bold font-display tracking-tight text-white group-hover:text-[#F3C644] transition-colors">
                A.N Marketing Agency
              </span>
            </a>

            {/* Zone 2: 4-7 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#D4AF37] transition-colors duration-150 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-black bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0B0B0C]/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#F3C644] to-[#997D25] flex items-center justify-center font-bold text-black text-sm">
                AN
              </div>
              <span className="text-lg font-bold font-display text-white">A.N Marketing Agency</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">Navigation</p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 text-base font-medium text-neutral-200 hover:text-[#D4AF37] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-6 pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923000000000?text=Hello%20A.N%20Marketing%20Agency,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
