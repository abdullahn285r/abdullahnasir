import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#121217] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mb-1">
            Service Specification
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {service.name}
          </h2>
          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Channels / Supported Platforms */}
        {service.channelsOrTech && service.channelsOrTech.length > 0 && (
          <div className="mb-6 pb-6 border-b border-white/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Covered Channels & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.channelsOrTech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium bg-[#1B1B22] text-[#F3C644] border border-[#D4AF37]/20 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Benefits */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-3">
            Core Business Advantages
          </h3>
          <ul className="space-y-2.5">
            {service.keyBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Deliverables */}
        <div className="mb-8 p-4 rounded-xl bg-[#16161D] border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-2.5">
            Included Deliverables:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item) => (
              <li key={item} className="text-xs text-neutral-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Available as a standalone retainer or bundled in full-service plans.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookService(service.name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F3C644] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Consult on {service.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
