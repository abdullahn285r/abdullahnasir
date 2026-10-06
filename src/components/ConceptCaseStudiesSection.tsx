import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { CONCEPT_CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface ConceptCaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export const ConceptCaseStudiesSection: React.FC<ConceptCaseStudiesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CONCEPT_CASE_STUDIES[0].id);
  const activeCase = CONCEPT_CASE_STUDIES.find((c) => c.id === selectedCaseId) || CONCEPT_CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#0D0D12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Zero-Pill Header with Typographic Separator */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
            <span>Strategic Frameworks</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>Execution Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Concept Case Studies
          </h2>

          {/* Mandatory Transparent Concept Disclaimer */}
          <div className="p-4 rounded-xl bg-[#171720] border border-[#D4AF37]/30 flex items-start gap-3 mt-4">
            <AlertCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <strong className="text-white block font-semibold mb-0.5">
                Sample / Concept Project Notice
              </strong>
              These case studies are concept projects created to demonstrate our end-to-end strategy, creative execution, and optimization approach for high-growth sectors. We believe in total transparency: results listed are illustrative targets, not actual client historical data.
            </div>
          </div>
        </div>

        {/* Interactive Case Study Selector Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {CONCEPT_CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setSelectedCaseId(study.id)}
              className={`flex-1 text-left p-4 sm:p-5 rounded-xl border transition-all ${
                selectedCaseId === study.id
                  ? 'bg-[#181822] border-[#D4AF37] shadow-lg shadow-black/40'
                  : 'bg-[#121217] border-white/10 hover:border-white/20 hover:bg-[#15151C]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#D4AF37]">
                  {study.industry}
                </span>
                <span className="text-[11px] text-neutral-400">Concept Model</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                {study.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                {study.market}
              </p>
            </button>
          ))}
        </div>

        {/* Deep Dive Active Case Study Card */}
        <div className="rounded-2xl bg-[#131319] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Top Banner: Image & Core Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 border-b border-white/10 bg-gradient-to-r from-[#14141B] to-[#181822]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-3">
                <span className="text-[#D4AF37] font-semibold">{activeCase.industry}</span>
                <span aria-hidden="true">·</span>
                <span>Target: {activeCase.market}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                {activeCase.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {activeCase.summary}
              </p>

              {/* Business Challenge Box */}
              <div className="p-4 rounded-xl bg-[#0D0D11] border border-white/10 mb-4">
                <h4 className="text-xs uppercase font-semibold text-red-400 tracking-wider mb-1">
                  The Business Challenge
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {activeCase.businessChallenge}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-4 rounded-xl bg-[#0D0D11] border border-white/10">
                <h4 className="text-xs uppercase font-semibold text-[#D4AF37] tracking-wider mb-1">
                  Target Audience Profile
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {activeCase.targetAudience}
                </p>
              </div>
            </div>

            {/* Visual Media Showcase */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-black">
                <img
                  src={activeCase.image}
                  alt={`A.N Marketing Agency concept design for ${activeCase.title}`}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-[11px] text-neutral-300 flex items-center justify-between">
                  <span>Visual Creative Direction</span>
                  <span className="text-[#D4AF37] font-mono">Concept Blueprint</span>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400 text-center mt-2 italic">
                Concept creative lookbook mockup developed for strategy modeling.
              </p>
            </div>
          </div>

          {/* Detailed 4-Pillar Strategy Breakdown */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            <h4 className="text-lg font-bold font-display text-white">
              Full-Funnel Strategic Architecture
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pillar 1: Social Media Strategy */}
              <div className="p-5 rounded-xl bg-[#171720] border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                    Social Media Strategy
                  </h5>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeCase.socialMediaStrategy.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 2: Paid Advertising Strategy */}
              <div className="p-5 rounded-xl bg-[#171720] border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                    Paid Advertising Strategy
                  </h5>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeCase.paidAdsStrategy.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: Content Marketing Strategy */}
              <div className="p-5 rounded-xl bg-[#171720] border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                    Content Marketing Strategy
                  </h5>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeCase.contentStrategy.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 4: Conversion & CRO Strategy */}
              <div className="p-5 rounded-xl bg-[#171720] border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">
                    Conversion Rate Optimization (CRO)
                  </h5>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeCase.conversionStrategy.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Illustrative Target Outcomes (Strictly labeled) */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#181824] to-[#121217] border border-[#D4AF37]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h5 className="text-sm font-bold uppercase tracking-wider text-white">
                  Illustrative / Expected Target Outcomes
                </h5>
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase">
                  *Illustrative Results — Not Actual Client Data
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeCase.illustrativeOutcomes.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                      {metric.value}
                    </span>
                    <h6 className="text-xs font-semibold text-[#D4AF37] mt-1">
                      {metric.label}
                    </h6>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {metric.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Key Learnings */}
            <div className="p-5 rounded-xl bg-[#14141A] border border-white/5">
              <h5 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">
                Key Strategic Takeaways
              </h5>
              <div className="space-y-2">
                {activeCase.keyLearnings.map((learning) => (
                  <div key={learning} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA for this sector */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs text-neutral-400">
                Operating in retail, beauty, e-commerce, or B2B? We adapt this rigorous framework to your market.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644] rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Request Custom Growth Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
