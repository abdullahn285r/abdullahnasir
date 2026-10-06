import React from 'react';
import { VALUE_STRIP_ITEMS } from '../data/agencyData';
import { Globe, Layers, Sliders, LineChart, Headphones } from 'lucide-react';

const icons = [Layers, Globe, Sliders, LineChart, Headphones];

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-white/10 bg-[#0E0E12] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
          {VALUE_STRIP_ITEMS.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={item.label}
                className="flex flex-col gap-1.5 p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <IconComponent className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-snug">
                    {item.label}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-normal pl-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
