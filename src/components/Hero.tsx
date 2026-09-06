import React from 'react';
import { Shield, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative text-white pt-20 pb-28 sm:pt-24 sm:pb-32 px-4 sm:px-6 bg-[radial-gradient(circle_at_85%_30%,#153261_0%,#0b1d3a_70%)]"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-5 bg-[#d99b26]/10 border border-[#d99b26]/20 px-3 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-6 text-white tracking-tight">
            {t.hero.titleLine1}<br />
            {t.hero.titleLine2}<br />
            {t.hero.titleLine3}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-[560px] mb-8 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="bg-[#d99b26] hover:bg-[#b8821d] text-[#0b1d3a] font-semibold text-sm sm:text-[14.5px] px-7 py-3.5 rounded-md transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95"
              id="hero-book-btn"
            >
              {t.hero.bookBtn}
            </a>
            <a
              href="#services"
              className="bg-white/5 hover:bg-white/12 border border-white/25 text-white font-semibold text-sm sm:text-[14.5px] px-6 py-3.5 rounded-md transition-all active:scale-95"
              id="hero-services-btn"
            >
              {t.hero.exploreBtn}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-[13.5px] text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-[#d99b26]" />
              {t.hero.featureSince}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-[#d99b26]" />
              {t.hero.featureCountry}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Check className="w-4 h-4 text-[#d99b26]" />
              {t.hero.featureSupport}
            </span>
          </div>
        </div>

        {/* Right Column: Founder Hero Card Preview */}
        <div className="lg:col-span-5">
          <div
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl"
            id="hero-founder-card"
          >
            <div className="bg-gradient-to-br from-[#1d4ed8] to-[#0f2c59] h-[260px] sm:h-[280px] rounded-xl flex flex-col items-center justify-center text-white/90 mb-5 relative overflow-hidden group shadow-inner">
              <div className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white/90">
                SMS
              </div>
              <div className="absolute bottom-3 text-xs tracking-wider text-blue-200/70 font-mono">
                BCSC Founder
              </div>
            </div>

            <div className="founder-hero-meta">
              <span className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-bold block mb-1">
                {t.hero.founderBadge}
              </span>
              <h3 className="text-2xl font-bold font-sans text-white mb-1.5">
                {t.hero.founderName}
              </h3>
              <p className="text-sm text-blue-300 font-medium">
                {t.hero.founderTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
