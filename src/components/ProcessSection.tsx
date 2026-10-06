import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Search, Compass, Rocket, TrendingUp, BarChart4 } from 'lucide-react';

const stepIcons = [Search, Compass, Rocket, TrendingUp, BarChart4];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20 text-left">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Our 5-Step Growth Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            How we take your brand from audit to consistent, scalable market traction. Every step is transparent, methodical, and designed to eliminate wasted budget.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline (hidden on mobile/tablet) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting line */}
          <div 
            className="absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Step Node */}
                  <div className="w-24 h-24 rounded-2xl bg-[#141419] border-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] group-hover:bg-[#1A1A24] transition-all shadow-xl flex flex-col items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#D4AF37] mb-1" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Title & Summaries */}
                  <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-[#F3C644] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-300 leading-snug mb-2 px-2">
                    {step.summary}
                  </p>
                  <p className="text-[11px] text-neutral-400 leading-relaxed px-1">
                    {step.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (visible on lg:hidden) */}
        <div className="lg:hidden relative space-y-6 pl-4 border-l-2 border-[#D4AF37]/30">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={step.step} className="relative pl-6">
                {/* Step Marker Dot */}
                <div className="absolute -left-[25px] top-1 w-8 h-8 rounded-full bg-[#15151B] border-2 border-[#D4AF37] flex items-center justify-center text-xs font-mono font-bold text-[#D4AF37]">
                  {step.step}
                </div>

                <div className="p-5 rounded-xl bg-[#131317] border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                    <h3 className="text-base font-bold text-white font-display">
                      {step.name}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-neutral-300 mb-2">
                    {step.summary}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Milestone Takeaway */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#121217] border border-white/10 text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>Continuous Weekly Review Cadence across all active campaigns</span>
          </div>
          <span className="text-neutral-400 font-mono text-[11px]">
            Iteration Cycle: 7-Day Sprint Review
          </span>
        </div>

      </div>
    </section>
  );
};
