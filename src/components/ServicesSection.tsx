import React, { useState } from 'react';
import { 
  Share2, 
  Search, 
  Target, 
  FileText, 
  Mail, 
  Layout, 
  Video, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultationWithService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Share2,
  Search,
  Target,
  FileText,
  Mail,
  Layout,
  Video,
  BarChart3,
  TrendingUp,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultationWithService,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'advertising' | 'organic' | 'creative' | 'analytics'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Capabilities & Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            One agency. Complete digital marketing solutions. Rather than hiring disconnected vendors, we align creative, paid ads, SEO, and web conversion under a single unified growth strategy.
          </p>

          {/* Interactive Category Filter Tabs (Zero-Pill: segmented control with clean button tags) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141419] border border-white/10 rounded-xl mt-8 max-w-fit">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Services ({SERVICES_LIST.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('advertising')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'advertising'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Paid Ads & Funnels
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('organic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'organic'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              SEO & Organic
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('creative')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'creative'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Creative & Web
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('analytics')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'analytics'
                  ? 'bg-[#D4AF37] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Analytics & CRO
            </button>
          </div>
        </div>

        {/* 9 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            
            // Check for marquee cards to add subtle visual prominence
            const isMarquee = service.id === 'paid-advertising' || service.id === 'complete-seo';

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${
                  isMarquee
                    ? 'bg-gradient-to-b from-[#14141A] to-[#101014] border-[#D4AF37]/35 shadow-lg shadow-black/50 hover:border-[#D4AF37]/60'
                    : 'bg-[#111115] border-white/10 hover:border-white/20 hover:bg-[#15151B]'
                }`}
              >
                <div>
                  {/* Card Header with Icon & Index */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#191922] border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-2 tracking-tight">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Channel / Platform Specifics */}
                  {service.channelsOrTech && (
                    <div className="mb-5 pb-4 border-b border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {service.channelsOrTech.map((channel) => (
                          <span
                            key={channel}
                            className="text-[11px] font-medium text-neutral-300 bg-white/5 border border-white/10 rounded px-2 py-0.5"
                          >
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-6">
                    {service.keyBenefits.slice(0, 3).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-neutral-300 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenConsultationWithService(service.name)}
                    className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Solution Summary Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141419] via-[#1A1A22] to-[#141419] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-display mb-1">
              Need Multiple Services Synchronized?
            </h4>
            <p className="text-sm text-neutral-300">
              Our retainer packages bundle SEO, Paid Ads, Social Media, and Web Optimization for maximum compounding growth.
            </p>
          </div>
          <a
            href="#pricing"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644] rounded-lg transition-colors whitespace-nowrap shadow"
          >
            Compare Retainer Packages
          </a>
        </div>

      </div>
    </section>
  );
};
