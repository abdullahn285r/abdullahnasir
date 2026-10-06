import React from 'react';
import { FOUNDER_INFO, AGENCY_INFO } from '../data/agencyData';
import { Compass, Lightbulb, Eye, TrendingUp, BookOpen, CheckCircle2 } from 'lucide-react';

const valueIcons = [Compass, Lightbulb, Eye, TrendingUp, BookOpen];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Origins & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            About A.N Marketing Agency
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {AGENCY_INFO.name} is a full-service digital marketing agency founded by {AGENCY_INFO.founder}. We help businesses build a stronger online presence, attract the right audience, generate leads, increase sales, and create sustainable digital growth worldwide.
          </p>
        </div>

        {/* Founder Card & Executive Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-8 sm:p-10 rounded-2xl bg-[#121217] border border-white/10">
          
          {/* Abstract Emblem Sculpture Visual (Zero fake photo rule strictly respected) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-[#181820]">
              <img
                src={FOUNDER_INFO.avatarImage}
                alt="Executive leadership architectural emblem of A.N Marketing Agency"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-mono text-[#D4AF37]">
                  Leadership & Strategy
                </span>
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-xs text-neutral-400">Executive Identity Marker</span>
            </div>
          </div>

          {/* Founder Bio & Leadership Message */}
          <div className="lg:col-span-8">
            <div className="text-xs uppercase font-semibold text-[#D4AF37] tracking-wider mb-1">
              Founder & Lead Strategist
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-1">
              {FOUNDER_INFO.name}
            </h3>
            <p className="text-xs font-mono text-neutral-400 mb-4">
              Founder — {AGENCY_INFO.name}
            </p>

            <blockquote className="border-l-2 border-[#D4AF37] pl-4 py-1 text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-6">
              "We built A.N Marketing Agency on the conviction that ambitious businesses shouldn't have to choose between exorbitant global agency retainers and unreliable local freelancers. Sustainable growth isn't luck—it's the systematic synchronization of consumer psychology, high-retention creative, and uncompromising data tracking."
            </blockquote>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              {FOUNDER_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Founder-Supervised Strategy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Strategic Alignment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Zero Outsourced Guesswork</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Guiding Principles
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
            Our 5 Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FOUNDER_INFO.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-[#141419] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold font-display text-white mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                    Value 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
