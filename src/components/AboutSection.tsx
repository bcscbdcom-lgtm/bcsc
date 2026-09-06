import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* About Left Text */}
        <div className="lg:col-span-6">
          <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
            {t.about.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight text-slate-900 font-bold mb-6">
            {t.about.title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-5">
            {t.about.p1}
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            {t.about.p2}
          </p>
        </div>

        {/* About Right Values Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow transition-shadow">
            <h4 className="text-base font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">
              <span>👁️</span> {t.about.visionTitle}
            </h4>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              {t.about.visionDesc}
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow transition-shadow">
            <h4 className="text-base font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">
              <span>🎯</span> {t.about.missionTitle}
            </h4>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              {t.about.missionDesc}
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow transition-shadow">
            <h4 className="text-base font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">
              <span>🤝</span> {t.about.promiseTitle}
            </h4>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              {t.about.promiseDesc}
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow transition-shadow">
            <h4 className="text-base font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">
              <span>⚖️</span> {t.about.valuesTitle}
            </h4>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              {t.about.valuesDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
