import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#07152b] text-slate-400 pt-16 pb-8 px-4 sm:px-6 text-sm border-t border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
        {/* Col 1: Logo & Summary */}
        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#d99b26] text-[#0b1d3a] font-extrabold text-xl w-10 h-10 rounded-lg flex items-center justify-center">
              B
            </div>
            <div>
              <h2 className="text-white text-lg font-bold font-sans">BCSC</h2>
              <span className="text-slate-400 text-xs block">
                Business Consulting & Solutions Center
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            {t.footer.aboutText}
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="md:col-span-3">
          <h5 className="text-white text-sm font-bold font-sans mb-4 uppercase tracking-wider text-amber-400">
            {t.footer.quickLinks}
          </h5>
          <ul className="space-y-2.5">
            {[
              { label: t.nav.about, href: '#about' },
              { label: t.nav.services, href: '#services' },
              { label: t.nav.founder, href: '#founder' },
              { label: t.nav.contact, href: '#contact' },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Core Services */}
        <div className="md:col-span-3">
          <h5 className="text-white text-sm font-bold font-sans mb-4 uppercase tracking-wider text-amber-400">
            {t.footer.coreServices}
          </h5>
          <ul className="space-y-2.5">
            {t.services.items.slice(0, 4).map((service, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
        <p>{t.footer.rights}</p>
        <p className="text-[#d99b26] font-medium">{t.footer.slogan}</p>
      </div>
    </footer>
  );
};
