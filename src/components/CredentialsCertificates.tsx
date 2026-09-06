import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CredentialsCertificates: React.FC = () => {
  const { t } = useLanguage();

  const certIcons = ['🎖️', '⚖️', '📊', '🎓'];

  return (
    <>
      {/* Credentials Section */}
      <section id="credentials" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.credentials.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-5 leading-tight">
              {t.credentials.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.credentials.subtitle}
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {t.credentials.items.map((cred, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex items-start gap-5 sm:gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[#d99b26] text-xl sm:text-2xl font-extrabold font-mono shrink-0">
                  {cred.num}
                </div>
                <div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1 font-sans">
                    {cred.title}
                  </h4>
                  <p className="text-slate-600 text-[13.5px] leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-200"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.certificates.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
              {t.certificates.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.certificates.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.certificates.items.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-slate-100 h-44 flex items-center justify-center text-4xl text-slate-400">
                  {certIcons[idx] || '📜'}
                </div>
                <div className="p-4 sm:p-5">
                  <h5 className="text-sm font-bold text-slate-900 mb-1 font-sans">
                    {cert.title}
                  </h5>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {cert.filename}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
