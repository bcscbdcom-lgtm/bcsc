import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const IndustriesSection: React.FC = () => {
  const { t } = useLanguage();

  const industryIcons = ['🏭', '🛒', '🏠', '❤️', '👕', '🌾', '🚚', '⚙️', '🤝', '👥'];

  return (
    <section id="industries" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0b1d3a] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[750px] mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
            {t.industries.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-3">
            {t.industries.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.industries.items.map((name, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl p-6 text-center transition-all duration-200 group hover:-translate-y-0.5"
            >
              <div className="text-3xl text-[#d99b26] mb-3 group-hover:scale-110 transition-transform">
                {industryIcons[idx] || '🏢'}
              </div>
              <p className="text-[13.5px] font-semibold text-slate-200">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
