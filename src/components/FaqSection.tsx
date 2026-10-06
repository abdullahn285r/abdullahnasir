import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { AGENCY_FAQS } from '../data/agencyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = AGENCY_FAQS.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0E0E14] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mb-2">
            Objection Handling & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our workflow, international capabilities, pricing models, and client expectations.
          </p>

          {/* Search Bar for Fast Lookup */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#14141A] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 p-6 rounded-xl bg-[#14141A] border border-white/5 text-neutral-400 text-sm">
              No matching questions found for "{searchQuery}". Please reach out directly in the contact section below.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#15151C] border-[#D4AF37]/50 shadow-md'
                      : 'bg-[#121216] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#121217] border border-white/10">
          <p className="text-xs sm:text-sm text-neutral-300 mb-3">
            Have a question specific to your industry margins or target country?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#F3C644]"
          >
            <span>Ask us directly during your free discovery consultation</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
