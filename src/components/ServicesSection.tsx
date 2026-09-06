import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const serviceIcons = [
    { icon: '📋', isGold: false },
    { icon: '📊', isGold: true },
    { icon: '💰', isGold: false },
    { icon: '%', isGold: false },
    { icon: '🏛️', isGold: true },
    { icon: '📑', isGold: false },
    { icon: '🌐', isGold: false },
    { icon: '🏢', isGold: true },
    { icon: 'TM', isGold: false },
    { icon: '⚖️', isGold: false },
    { icon: '🔍', isGold: true },
    { icon: '📈', isGold: false },
    { icon: '📉', isGold: false },
    { icon: '📑', isGold: true },
    { icon: '👥', isGold: false },
    { icon: '💡', isGold: false },
    { icon: '🌱', isGold: true },
    { icon: '🎓', isGold: false },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[750px] mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
            {t.services.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-base">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, idx) => {
            const meta = serviceIcons[idx] || { icon: '💼', isGold: false };
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold mb-5 shadow-sm text-white ${
                      meta.isGold ? 'bg-[#d99b26]' : 'bg-[#1d4ed8]'
                    }`}
                  >
                    {meta.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-[13.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
