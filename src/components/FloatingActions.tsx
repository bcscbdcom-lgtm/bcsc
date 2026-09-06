import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions: React.FC = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-24 right-5 sm:right-6 bg-[#d99b26] hover:bg-[#b8821d] text-[#0b1d3a] w-11 h-11 rounded-full flex items-center justify-center font-bold shadow-xl transition-all duration-200 z-40 hover:scale-110 active:scale-95 border border-amber-300/40"
          title={t.floating.scrollTop}
          aria-label={t.floating.scrollTop}
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Chat Floating Button */}
      <a
        href="https://wa.me/8801993306990"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 bg-[#25d366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full flex items-center gap-2 font-semibold text-xs sm:text-sm shadow-xl transition-all duration-200 z-40 hover:scale-105 active:scale-95 shadow-emerald-500/25"
        title={t.floating.whatsAppChat}
        aria-label="Chat with BCSC on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>{t.floating.whatsAppChat}</span>
      </a>
    </>
  );
};
