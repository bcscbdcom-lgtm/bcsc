import React from 'react';
import { Award, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="founder"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-y border-slate-200"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Founder Portrait Box */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px]">
            <div className="bg-gradient-to-br from-[#1e40af] to-[#0b1d3a] h-[380px] sm:h-[420px] rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-wider">
                SMS
              </span>
              <span className="text-xs uppercase tracking-widest text-blue-200 mt-2 font-medium">
                {t.founder.title.split(',')[0]}
              </span>
            </div>
            {/* RAT Badge */}
            <div className="absolute bottom-6 -right-3 sm:-right-5 bg-[#d99b26] text-[#0b1d3a] px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm shadow-xl flex items-center gap-1.5 border border-amber-300">
              <Award className="w-4 h-4" />
              <span>{t.founder.badge}</span>
            </div>
          </div>
        </div>

        {/* Founder Details */}
        <div className="lg:col-span-7">
          <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
            {t.founder.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 mb-2 leading-tight">
            {t.founder.name}
          </h2>
          <div className="text-[#1e40af] font-semibold text-base sm:text-lg mb-5">
            {t.founder.title}
          </div>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            {t.founder.p1}
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            {t.founder.p2}
          </p>

          <ul className="space-y-3 mb-8">
            {t.founder.points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-slate-800 font-medium text-sm sm:text-[14.5px]"
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#d99b26]" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#0b1d3a] hover:text-[#1e40af] font-bold text-sm sm:text-[15px] group transition-colors"
          >
            <span>{t.founder.cta} →</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
