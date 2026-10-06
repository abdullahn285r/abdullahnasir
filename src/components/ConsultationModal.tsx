import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultPackage,
  defaultService,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['Paid Advertising', 'Complete SEO']
  );
  const [budget, setBudget] = useState('PKR 100k - 200k / ($350 - $700)');
  const [notes, setNotes] = useState(
    defaultPackage ? `Interested in discussing the ${defaultPackage} package.` : ''
  );
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleToggle = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#121217] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Consultation Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 max-w-sm">
              We have received your consultation brief. Abdullah Nasir and our strategy team will review your brand details and reach out via email/WhatsApp within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="pr-8 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Free Marketing Consultation
              </span>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                Let's Review Your Growth Strategy
              </h2>
              <p className="text-xs text-neutral-300 mt-1">
                Zero obligations. We provide 3 to 5 actionable marketing recommendations for your business.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 XXX XXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company or Brand"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161D] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Focus Services
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES_LIST.map((s) => {
                    const active = selectedServices.includes(s.name);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => handleToggle(s.name)}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                          active
                            ? 'bg-[#D4AF37] text-black font-semibold'
                            : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                        }`}
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Budget Expectation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#16161D] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Under PKR 100k / ($350)">Under PKR 100k / ($350) — Starter Scope</option>
                  <option value="PKR 100k - 200k / ($350 - $700)">PKR 100k - 200k / ($350 - $700) — Growth Retainer</option>
                  <option value="PKR 200k - 400k / ($700 - $1,500)">PKR 200k - 400k / ($700 - $1,500) — Scale Retainer</option>
                  <option value="PKR 400k+ / ($1,500+)">PKR 400k+ / ($1,500+) — Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Primary Goal or Current Bottleneck
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need more qualified B2B leads, or looking to scale Meta Ads for e-commerce store..."
                  className="w-full px-3 py-2 rounded-lg bg-[#16161D] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold text-black bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] hover:brightness-110 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <span>Confirm & Request Free Consultation</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
