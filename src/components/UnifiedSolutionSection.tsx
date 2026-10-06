import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface UnifiedSolutionSectionProps {
  onOpenConsultation: () => void;
}

export const UnifiedSolutionSection: React.FC<UnifiedSolutionSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#0D0D11] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            The Multi-Agency Trap vs. The Unified Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            One Agency. All Your Digital Marketing Needs.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            You don't need to manage five different freelancers or separate agencies for SEO, social media, ads, content, websites, and analytics. We synchronize every channel under one singular growth engine.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left: The Old Fragmented Way */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#141418] border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <XCircle className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display text-white">
                  The Fragmented Agency Nightmare
                </h3>
              </div>
              <p className="text-xs text-neutral-400 mb-6">
                When you hire separate freelancers or siloed niche agencies:
              </p>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Zero Strategic Alignment:</strong> Ad team blames the website; web developer blames the copywriter; copywriter blames the SEO.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Time-Consuming Vendor Management:</strong> You waste 10+ hours every week acting as the unpaid project manager coordinating 5 different people.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Fragmented Analytics & Budget Waste:</strong> Multiple tools counting the same sale, with zero visibility on blended customer acquisition cost (CAC).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Disjointed Brand Identity:</strong> Social graphics look nothing like the website, and paid ad messaging conflicts with email nurture tones.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-red-400/80">
              Result: High overhead, conflicting goals, slow execution, and finger-pointing.
            </div>
          </div>

          {/* Right: The A.N Marketing Unified Advantage */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#181822] to-[#13131A] border-2 border-[#D4AF37]/50 shadow-xl shadow-black/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display text-white">
                  The A.N Marketing Unified Advantage
                </h3>
              </div>
              <p className="text-xs text-neutral-300 mb-6">
                When one strategic team synchronizes your entire digital presence:
              </p>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span><strong>Single Accountable Partner:</strong> One dedicated point of contact responsible for your overall pipeline, revenue, and return on investment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span><strong>Cross-Pollinated Insights:</strong> Top-performing ad hooks immediately feed into your SEO titles, email subject lines, and video scripts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span><strong>Full-Funnel CRO Ownership:</strong> We fix landing page friction, configure tracking pixels, and tweak ad sets simultaneously.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <span><strong>Cost-Efficient Retainer:</strong> High-impact agency talent at an affordable consolidated monthly investment.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#D4AF37]">
                Result: Compounding growth and clarity.
              </span>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F3C644] transition-colors"
              >
                <span>Consolidate Your Marketing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
