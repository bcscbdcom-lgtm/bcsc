import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { num: t.stats.expNum, label: t.stats.expLabel },
    { num: t.stats.clientsNum, label: t.stats.clientsLabel },
    { num: t.stats.projectsNum, label: t.stats.projectsLabel },
    { num: t.stats.supportNum, label: t.stats.supportLabel },
  ];

  return (
    <div className="max-w-[1140px] mx-auto -mt-14 sm:-mt-16 relative z-10 px-4">
      <div
        className="bg-white rounded-2xl shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-6 sm:p-8"
        id="stats-bar-card"
      >
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`text-center px-4 ${
              idx > 1 ? 'pt-4 md:pt-0' : idx === 1 ? 'pt-0' : ''
            }`}
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1e3a8a] leading-tight mb-1 font-sans">
              {item.num}
            </div>
            <div className="text-xs sm:text-[13px] text-slate-500 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
