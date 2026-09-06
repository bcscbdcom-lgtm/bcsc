import React from 'react';
import { Phone, Mail, Globe, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[750px] mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] mb-3">
            {t.contact.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-3">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 5 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {/* Phone */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e40af] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.contact.callLabel}
            </span>
            <div className="space-y-1">
              <a
                href="tel:+8801993306990"
                className="text-sm font-bold text-slate-900 hover:text-[#1e40af] block transition-colors"
              >
                +880 1993-306990
              </a>
              <a
                href="tel:+8801777086888"
                className="text-sm font-bold text-slate-900 hover:text-[#1e40af] block transition-colors"
              >
                +880 1777-086888
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#d99b26] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.contact.emailLabel}
            </span>
            <a
              href="mailto:bcscbd2009@gmail.com"
              className="text-sm font-bold text-slate-900 hover:text-[#1e40af] break-all block transition-colors"
            >
              bcscbd2009@gmail.com
            </a>
          </div>

          {/* Website */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e40af] flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.contact.webLabel}
            </span>
            <a
              href="https://bcscbd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-900 hover:text-[#1e40af] block transition-colors"
            >
              www.bcscbd.com
            </a>
          </div>

          {/* Khulna Address */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#d99b26] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.contact.khulnaTitle}
            </span>
            <p className="text-[13px] text-slate-600 leading-relaxed mb-3">
              {t.contact.khulnaAddr}
            </p>
            <a
              href="https://maps.google.com/?q=Azad+Laundry+Mor+Khulna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1e40af] hover:underline"
            >
              <span>{t.contact.openMaps}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Dhaka Address */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1e40af] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.contact.dhakaTitle}
            </span>
            <p className="text-[13px] text-slate-600 leading-relaxed mb-3">
              {t.contact.dhakaAddr}
            </p>
            <a
              href="https://maps.google.com/?q=Pritom+Jaman+Tower+Paltan+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1e40af] hover:underline"
            >
              <span>{t.contact.openMaps}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Map Embed Section */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#d99b26] block mb-1">
              {t.contact.mapsEyebrow}
            </span>
            <h4 className="text-xl font-bold text-slate-900 font-serif">
              {t.contact.mapsTitle}
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="p-3 bg-slate-100 font-semibold text-xs text-slate-700 flex items-center justify-between border-b border-slate-200">
                <span>{t.contact.khulnaTitle}</span>
                <span className="text-[11px] text-slate-500">Azad Laundry Mor</span>
              </div>
              <iframe
                title="BCSC Khulna Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8926978601673!2d89.54474727588327!3d22.806457024346894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a00557457788443%3A0xe54e8ffbce57ee20!2sAzad%20Laundry%20Mor!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="p-3 bg-slate-100 font-semibold text-xs text-slate-700 flex items-center justify-between border-b border-slate-200">
                <span>{t.contact.dhakaTitle}</span>
                <span className="text-[11px] text-slate-500">Purana Paltan</span>
              </div>
              <iframe
                title="BCSC Dhaka Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.378949580665!2d90.41215177591008!3d23.733857589417852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a3c487373%3A0x6b306b9961db6c1e!2sPritom%20Zaman%20Tower%2C%2037%2F2%20Purana%20Paltan%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1710000000001!5m2!1sen!2sbd"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
