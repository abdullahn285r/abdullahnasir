import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial gold glow effect */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#F3C644]/5 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Action (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Zero-pill metadata line with typographic separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4">
              <span>Full-Service Agency</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Founder: {AGENCY_INFO.founder}</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Worldwide Execution</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.12] mb-6" style={{ textWrap: 'balance' }}>
              Turn Your Digital Presence Into{' '}
              <span className="gold-gradient-text">
                Measurable Business Growth.
              </span>
            </h1>

            {/* Hero Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl" style={{ textWrap: 'balance' }}>
              {AGENCY_INFO.heroSubheadline}
            </p>

            {/* Core Promise Unboxed Indicator */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-300 mb-8 border-l-2 border-[#D4AF37] pl-4 py-1">
              <span className="font-semibold text-white">Our Core Deliverable:</span>
              <span>More Leads</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>More Sales</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Stronger Brand</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Better Online Presence</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm md:text-base font-semibold text-black bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] rounded-lg hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-[#D4AF37]/25 whitespace-nowrap"
              >
                <span>Get Your Free Marketing Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm md:text-base font-medium text-neutral-200 bg-[#16161A] hover:bg-[#1E1E24] border border-white/10 hover:border-[#D4AF37]/40 rounded-lg transition-all whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Trust Assurance Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero Long-Term Lock-In</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Transparent Monthly Metrics</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>B2B & B2C Tailored</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Abstract Digital Marketing Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Gold framing glow */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#D4AF37]/30 via-transparent to-[#F3C644]/20 blur-sm -z-10"
                aria-hidden="true"
              />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#121216] shadow-2xl shadow-black/80">
                <img
                  src="/src/assets/images/hero_digital_marketing_1791273405036.jpg"
                  alt="A.N Marketing Agency abstract 3D growth visualization showing digital marketing momentum and conversion flow"
                  className="w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-[#1A1A22]', 'to-[#0B0B0C]', 'p-8', 'flex', 'items-center', 'justify-center');
                    }
                  }}
                />

                {/* Overlaid strategic status pill bar */}
                <div className="p-4 bg-[#111115]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <p className="text-white font-semibold">Unified Marketing Engine</p>
                    <p className="text-neutral-400">SEO · Paid Media · Funnels · CRO</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#D4AF37] font-semibold">Full Strategic Alignment</span>
                    <p className="text-[11px] text-neutral-400">No siloed vendors</p>
                  </div>
                </div>
              </div>

              {/* Quiet floating strategic highlight */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#16161B]/95 border border-[#D4AF37]/30 p-3 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                  AN
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Full-Funnel Ownership</p>
                  <p className="text-[11px] text-neutral-400">From cold click to recurring client</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
