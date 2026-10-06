import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_LIST, AGENCY_INFO } from '../data/agencyData';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  preselectedPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  preselectedPackage,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    companyName: '',
    websiteUrl: '',
    businessType: 'E-commerce / Retail',
    servicesRequired: preselectedService ? [preselectedService] : ['Paid Advertising', 'Complete SEO'],
    monthlyBudget: 'PKR 150k - 250k / ($500 - $900)',
    currency: 'PKR',
    message: preselectedPackage ? `Interested in the ${preselectedPackage} package.` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleService = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(serviceName);
      if (exists) {
        return { ...prev, servicesRequired: prev.servicesRequired.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, servicesRequired: [...prev.servicesRequired, serviceName] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your full name and email address.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Discovery & Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Let's Grow Your Business Together.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Fill out the brief below to schedule your free, zero-obligation 30-minute growth consultation with Abdullah Nasir and our strategy team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Comprehensive Lead Capture Form (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#121217] border border-white/10 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your request for <strong className="text-white">{formData.companyName || 'your business'}</strong>. Our strategy team will review your website and reply via email or WhatsApp within 12–24 business hours.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#16161D] border border-white/10 text-xs text-left text-neutral-300 max-w-md w-full mb-6">
                    <p className="font-semibold text-white mb-1">Selected Focus:</p>
                    <p className="text-neutral-400">Services: {formData.servicesRequired.join(', ') || 'Custom Strategy'}</p>
                    <p className="text-neutral-400">Budget Range: {formData.monthlyBudget}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-[#D4AF37] hover:underline"
                  >
                    Submit another inquiry or edit details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/30 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Doe / Ali Khan"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone / WhatsApp and Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone / WhatsApp (with country code)
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneWhatsapp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                        placeholder="+92 XXX XXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website and Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Website or Social Page URL
                      </label>
                      <input
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://yourbrand.com (or Instagram handle)"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="E-commerce / Retail">E-commerce / Retail</option>
                        <option value="B2B / Professional Services">B2B / Professional Services</option>
                        <option value="Local Service / Brick & Mortar">Local Service / Brick & Mortar</option>
                        <option value="Tech / SaaS Startup">Tech / SaaS Startup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Required (Multi-Select Pills) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Services Required (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_LIST.map((srv) => {
                        const isChecked = formData.servicesRequired.includes(srv.name);
                        return (
                          <button
                            type="button"
                            key={srv.id}
                            onClick={() => toggleService(srv.name)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              isChecked
                                ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                                : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/5'
                            }`}
                          >
                            {srv.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Monthly Marketing Budget */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Approximate Monthly Marketing Budget
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Under PKR 100k / ($350)">Under PKR 100k / ($350) — Starter Plan Exploration</option>
                      <option value="PKR 100k - 200k / ($350 - $700)">PKR 100k - 200k / ($350 - $700) — Growth Retainer Range</option>
                      <option value="PKR 200k - 400k / ($700 - $1,500)">PKR 200k - 400k / ($700 - $1,500) — Multi-Channel Scale</option>
                      <option value="PKR 400k+ / ($1,500+)">PKR 400k+ / ($1,500+) — Enterprise Omni-Channel</option>
                      <option value="Custom Project Scope">Custom Project Scope (e.g. Website only / Audit only)</option>
                    </select>
                  </div>

                  {/* Message / Goals */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Background or Primary Growth Bottleneck
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current marketing challenges (e.g. high ad costs, poor organic traffic, low website conversions)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#16161C] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-semibold text-black bg-gradient-to-r from-[#F3C644] via-[#D4AF37] to-[#B89020] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20"
                  >
                    <span>Request Free Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    We respect your privacy. No spam. You will receive an honest audit and direct strategic feedback.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Channels & Fast Connect (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#131318] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    Direct WhatsApp
                  </h4>
                  <p className="text-xs text-neutral-400">Instant Chat & Voice Notes</p>
                </div>
              </div>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Need a fast response or prefer audio notes? Message our direct strategy desk on WhatsApp.
              </p>
              <a
                href="https://wa.me/923000000000?text=Hello%20A.N%20Marketing%20Agency,%20I%20would%20like%20to%20request%20a%20free%20consultation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Chat via +92 XXX XXXXXXX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#131318] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    Official Email
                  </h4>
                  <p className="text-xs text-neutral-400">Proposals & RFP Docs</p>
                </div>
              </div>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Send your brief, RFPs, or competitor links directly to our inbox.
              </p>
              <a
                href="mailto:contact@anmarketingagency.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#F3C644]"
              >
                <span>your@email.com</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Worldwide Availability Box */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-white">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-sm font-bold font-display">
                  Global Timezone Coverage
                </h4>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                We coordinate seamlessly across North America (EST/PST), United Kingdom (GMT), United Arab Emirates (GST), and Pakistan (PKT).
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Response guarantee: within 24 hours</span>
              </div>
            </div>

            {/* Social Media Channels (clean placeholders per rules) */}
            <div className="p-6 rounded-2xl bg-[#131318] border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Social Channels
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">LinkedIn · A.N Marketing</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Instagram · @anmarketing</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">Facebook · A.N Agency</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
