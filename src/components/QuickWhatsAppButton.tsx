import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const QuickWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const predefinedMessages = [
    "Hello! I'd like to book a free marketing consultation.",
    "Hi A.N Marketing, I have a question about your pricing packages.",
    "Can you audit my website/brand?",
  ];

  const handleOpenWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923000000000?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen && (
        <div className="mb-3 p-4 rounded-2xl bg-[#14141B] border border-[#D4AF37]/40 shadow-2xl w-72 text-xs text-white animate-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Direct WhatsApp Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-300 mb-3">
            Chat directly with Abdullah Nasir or our lead strategy team. Choose a quick message:
          </p>

          <div className="space-y-1.5">
            {predefinedMessages.map((msg) => (
              <button
                key={msg}
                onClick={() => handleOpenWhatsApp(msg)}
                className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-neutral-200 transition-colors"
              >
                {msg}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Quick Chat"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg shadow-black/50 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
