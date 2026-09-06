import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CaseStudiesInsights: React.FC = () => {
  const { t } = useLanguage();

  const insightIcons = ['📄', '%', '🏢'];

  return (
    <>
      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.caseStudies.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
              {t.caseStudies.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {t.caseStudies.items.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#d99b26] tracking-[1.5px] uppercase block mb-3">
                    {cs.tag}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 font-sans">
                    {cs.title}
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <strong className="text-xs text-slate-900 font-semibold block mb-0.5">
                        {t.caseStudies.challengeLabel}:
                      </strong>
                      <p className="text-[13px] text-slate-600 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <strong className="text-xs text-slate-900 font-semibold block mb-0.5">
                        {t.caseStudies.approachLabel}:
                      </strong>
                      <p className="text-[13px] text-slate-600 leading-relaxed">
                        {cs.approach}
                      </p>
                    </div>
                    <div>
                      <strong className="text-xs text-slate-900 font-semibold block mb-0.5">
                        {t.caseStudies.outcomeLabel}:
                      </strong>
                      <p className="text-[13px] text-slate-600 leading-relaxed">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 italic">
            {t.caseStudies.disclaimer}
          </p>
        </div>
      </section>

      {/* Blog / Insights Section */}
      <section
        id="insights"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-200"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.insights.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
              {t.insights.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.insights.items.map((insight, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="bg-[#153a75] h-40 flex items-center justify-center text-4xl text-[#d99b26]">
                    {insightIcons[idx] || '📄'}
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-[#d99b26] tracking-wider uppercase block mb-2">
                      {insight.tag}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                      {insight.title}
                    </h4>
                    <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                      {insight.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[#0b1d3a] hover:text-[#1d4ed8] font-bold text-sm transition-colors"
                  >
                    <span>{t.insights.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
