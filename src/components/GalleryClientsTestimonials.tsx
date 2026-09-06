import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const GalleryClientsTestimonials: React.FC = () => {
  const { t } = useLanguage();

  const galleryIcons = ['🏢', '🤝', '💼', '👥'];

  const clients = [
    { initials: 'GH', name: 'Greenbangla Housing' },
    { initials: 'CR', name: 'Crimson Rosella Ltd' },
    { initials: 'CMC', name: 'CMC Healthcare Ltd' },
    { initials: 'BSI', name: 'Bio Science International' },
    { initials: 'TM', name: 'TrueMark International' },
    { initials: 'FG', name: 'Five Gems Ltd' },
  ];

  return (
    <>
      {/* Office Gallery Section */}
      <section id="gallery" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.gallery.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
              {t.gallery.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.gallery.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-slate-100 h-48 flex items-center justify-center text-4xl text-slate-400">
                  {galleryIcons[idx] || '🏢'}
                </div>
                <div className="p-4 sm:p-5">
                  <h5 className="text-sm sm:text-base font-bold text-slate-900 mb-1 font-sans">
                    {item.title}
                  </h5>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.filename}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase (Navy) */}
      <section
        id="clients"
        className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0b1d3a] text-white"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.clients.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-3">
              {t.clients.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((c, idx) => (
              <div
                key={idx}
                className="bg-white/[0.05] border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.08] transition-colors"
              >
                <div className="bg-[#d99b26] text-[#0b1d3a] w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 shadow">
                  {c.initials}
                </div>
                <span className="text-sm sm:text-[14.5px] font-semibold text-slate-100">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {t.testimonials.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#d99b26] text-3xl font-serif leading-none mb-2">
                    “
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                    {item.quote}
                  </p>
                </div>
                <h6 className="text-[12.5px] font-bold text-slate-900 font-sans border-t border-slate-100 pt-3">
                  {item.client}
                </h6>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-400 italic">
            {t.testimonials.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
};
