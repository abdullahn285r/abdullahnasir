import React from 'react';
import { 
  Compass, 
  Database, 
  Layers, 
  FileCheck2, 
  UserCheck, 
  Target, 
  RefreshCw, 
  BadgeDollarSign 
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/agencyData';

const icons = [
  Compass,
  Database,
  Layers,
  FileCheck2,
  UserCheck,
  Target,
  RefreshCw,
  BadgeDollarSign,
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0E0E13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            The Agency Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Why Choose A.N Marketing Agency
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            We don't sell vanity metrics, bloated retainers, or generic promises. We build honest, high-performing digital marketing engines focused purely on business revenue and long-term brand authority.
          </p>
        </div>

        {/* 8 Core Pillars Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#131318] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#16161D] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-[#D4AF37]">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Marketing Guarantee Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#111115] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong className="text-white">Our Honest Agency Standard:</strong> No artificial client counters, no fabricated awards, and no vanity metrics. Every strategy is proven through transparent attribution and verifiable deliverables.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#D4AF37] hover:text-[#F3C644] whitespace-nowrap"
          >
            Review Strategy With Us &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
