import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/agencyData';
import { PricingPackage } from '../types';

interface PricingSectionProps {
  onSelectPackage: (packageItem: PricingPackage) => void;
  onOpenCustomQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPackage,
  onOpenCustomQuote,
}) => {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Transparent Retainers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Predictable Growth. Affordable Pricing.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Complete digital marketing solutions packaged into clear monthly retainers. No hidden fees or surprise hourly invoices.
          </p>

          {/* Currency Toggle Switcher (PKR vs USD) */}
          <div className="inline-flex items-center p-1 bg-[#15151B] border border-white/10 rounded-xl">
            <button
              type="button"
              onClick={() => setCurrency('PKR')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                currency === 'PKR'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              PKR (Pakistan / Local)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                currency === 'USD'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              USD (Worldwide / International)
            </button>
          </div>

          <p className="text-xs text-neutral-400 mt-3">
            Prices are billed monthly with zero long-term lock-in. Cancel or upgrade anytime with 14 days notice.
          </p>
        </div>

        {/* 3 Packages Grid - Decoy Effect / Good-Better-Best */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isGrowth = pkg.id === 'growth';
            const price = currency === 'PKR' ? `Rs. ${pkg.pricePKR}` : `$${pkg.priceUSD}`;
            const currencySymbol = currency === 'PKR' ? 'PKR' : 'USD';

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                  isGrowth
                    ? 'bg-gradient-to-b from-[#181822] via-[#13131A] to-[#101014] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15 lg:-translate-y-2'
                    : 'bg-[#121216] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Growth Recommended Callout */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#F3C644] to-[#B89020] text-black text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md">
                    Most Popular · Best Value for Scaling
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#D4AF37]">
                      {pkg.name} PLAN
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 min-h-[36px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-5 my-3 border-y border-white/10">
                    <div className="text-xs text-neutral-400 mb-1">
                      Starting from
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                        {price}
                      </span>
                      <span className="text-xs text-neutral-400">
                        / month ({currencySymbol})
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Custom pricing available based on business goals and requirements.
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 rounded-lg bg-white/[0.03] text-xs text-neutral-300">
                    <strong className="text-white block mb-0.5">Ideal for:</strong>
                    {pkg.idealFor}
                  </div>

                  {/* Feature Inclusions */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                      What's Included:
                    </div>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      isGrowth
                        ? 'bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] text-black hover:brightness-110 shadow-lg shadow-[#D4AF37]/25'
                        : 'bg-[#1C1C24] hover:bg-[#252530] text-white border border-white/10'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Footer Banner */}
        <div className="max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-[#141419] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white font-display">
              Need a custom solution? Let's build a package for your business.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Only need specific channels (e.g. SEO only or Paid Meta Ads only)? We craft custom scopes tailored to your budget.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCustomQuote}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
