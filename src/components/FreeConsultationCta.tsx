import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react';

interface FreeConsultationCtaProps {
  onOpenConsultation: () => void;
}

export const FreeConsultationCta: React.FC<FreeConsultationCtaProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#0B0B0C] via-[#14141B] to-[#0B0B0C]">
      {/* Background glow orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Unboxed Metadata Tag */}
        <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-3">
          Zero-Obligation Discovery Call
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight mb-6 max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
          Ready to Turn Your Digital Presence Into{' '}
          <span className="gold-gradient-text">
            Business Growth?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10" style={{ textWrap: 'balance' }}>
          Let's build a digital marketing strategy focused on your goals, your audience and your growth.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] rounded-xl hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#D4AF37]/25 whitespace-nowrap"
          >
            <span>Get Your Free Marketing Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/923000000000?text=Hello%20A.N%20Marketing%20Agency,%20I'd%20like%20to%20talk%20about%20a%20digital%20marketing%20strategy."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-medium text-white bg-[#191920] hover:bg-[#22222B] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Talk to Us</span>
          </a>
        </div>

        {/* Trust bullet markers */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>30-Minute Video or WhatsApp Review</span>
          </div>
          <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Audited Competitor Landscape</span>
          </div>
          <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>3 Actionable Growth Recommendations</span>
          </div>
        </div>

      </div>
    </section>
  );
};
