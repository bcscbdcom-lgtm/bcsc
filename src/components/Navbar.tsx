import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { locale, setLocale, toggleLocale, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'founder', label: t.nav.founder, href: '#founder' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'industries', label: t.nav.industries, href: '#industries' },
    { id: 'credentials', label: t.nav.credentials, href: '#credentials' },
    { id: 'certificates', label: t.nav.certificates, href: '#certificates' },
    { id: 'case-studies', label: t.nav.caseStudies, href: '#case-studies' },
    { id: 'insights', label: t.nav.blog, href: '#insights' },
    { id: 'gallery', label: t.nav.gallery, href: '#gallery' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  // Monitor scroll position for sticky styling and section active state detection
  useEffect(() => {
    const handleScroll = () => {
      // Sticky styling threshold
      setIsScrolled(window.scrollY > 25);

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 120;
      const sectionIds = navItems.map((item) => item.id);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl) {
          const offsetTop = sectionEl.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [locale]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll to section with offset compensation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1d3a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-2.5'
          : 'bg-[#0b1d3a] border-b border-white/8 py-3.5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className="flex items-center gap-3 group text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d99b26] rounded-lg shrink-0"
          id="nav-brand-logo"
        >
          <div className="bg-[#d99b26] text-[#0b1d3a] font-extrabold text-xl w-10 h-10 rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#b8821d] transition-colors shrink-0">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg sm:text-xl font-bold tracking-wide leading-tight group-hover:text-amber-300 transition-colors font-sans">
              BCSC
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] tracking-wide whitespace-nowrap">
              {t.nav.slogan}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu (hidden on mobile/tablet) */}
        <nav className="hidden xl:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-1 list-none p-0 m-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`relative z-10 px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d99b26] whitespace-nowrap ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    id={`desktop-nav-${item.id}`}
                  >
                    {item.label}

                    {/* Animated Active State with Spring Physics */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-white/10 border border-white/15 rounded-md -z-10 shadow-sm"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 32,
                        }}
                      >
                        {/* Golden bottom glow line */}
                        <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#d99b26] rounded-full shadow-[0_0_8px_rgba(217,155,38,0.8)]" />
                      </motion.div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions: Language Switcher & Consultation Button */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {/* Language Switcher Segmented Control */}
          <div
            id="desktop-language-switcher"
            className="flex items-center bg-white/10 rounded-lg p-1 border border-white/10"
            role="radiogroup"
            aria-label="Select Language"
          >
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-all ${
                locale === 'en'
                  ? 'bg-[#d99b26] text-[#0b1d3a] font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              id="lang-btn-en"
              aria-checked={locale === 'en'}
              role="radio"
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale('bn')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded font-medium transition-all ${
                locale === 'bn'
                  ? 'bg-[#d99b26] text-[#0b1d3a] font-bold shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
              id="lang-btn-bn"
              aria-checked={locale === 'bn'}
              role="radio"
              title="বাংলায় দেখুন (Switch to Bengali)"
            >
              বাং
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="bg-[#d99b26] hover:bg-[#b8821d] text-[#0b1d3a] font-semibold text-xs uppercase tracking-wider px-3.5 py-2 rounded-md transition-all duration-200 shadow hover:shadow-amber-500/20 active:scale-95 whitespace-nowrap"
            id="nav-consult-cta-desktop"
          >
            {t.nav.consultation}
          </a>
        </div>

        {/* Mobile Header Right Actions: Quick Language Toggle, Consult & Menu Button */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          {/* Mobile Quick Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-amber-300 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#d99b26]"
            id="mobile-quick-lang-toggle"
            title={t.nav.switchLangTooltip}
            aria-label={t.nav.switchLangTooltip}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'বাং' : 'EN'}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="hidden sm:inline-flex bg-[#d99b26] hover:bg-[#b8821d] text-[#0b1d3a] font-semibold text-xs px-3 py-1.5 rounded-md transition-all shadow"
            id="nav-consult-cta-mobile-header"
          >
            {t.nav.consultation}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d99b26]"
            id="mobile-menu-toggle-btn"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#d99b26]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Toggle Menu Drawer with Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 xl:hidden"
              id="mobile-menu-backdrop"
            />

            {/* Slide-Down Mobile Navigation Container */}
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -15, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-50 xl:hidden bg-[#07152b] border-b border-white/15 shadow-2xl overflow-hidden"
            >
              <div className="max-w-[1240px] mx-auto px-4 py-5 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Mobile Menu Header with Language Switcher and Active Status */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-slate-400 gap-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#d99b26]" />
                    {t.nav.menuTitle}
                  </span>

                  {/* Drawer Language Switcher */}
                  <div
                    className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10"
                    id="mobile-drawer-lang-toggle"
                  >
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      className={`px-2 py-0.5 text-[11px] rounded font-medium transition-all ${
                        locale === 'en'
                          ? 'bg-[#d99b26] text-[#0b1d3a] font-bold shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('bn')}
                      className={`px-2 py-0.5 text-[11px] rounded font-medium transition-all ${
                        locale === 'bn'
                          ? 'bg-[#d99b26] text-[#0b1d3a] font-bold shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      বাংলা
                    </button>
                  </div>
                </div>

                {/* Mobile Link Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                  {navItems.map((item, idx) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.02, duration: 0.2 }}
                        onClick={(e) => handleNavClick(e, item.href, item.id)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-[#132b54] text-white border-l-4 border-[#d99b26] pl-3 shadow-inner'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? 'bg-[#d99b26]' : 'bg-slate-600'
                            }`}
                          />
                          {item.label}
                        </span>
                        {isActive ? (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#d99b26] bg-[#d99b26]/10 px-2 py-0.5 rounded">
                            {t.nav.viewing}
                          </span>
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-60" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Quick Contact & Action Buttons inside mobile menu */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                    className="flex-1 bg-[#d99b26] hover:bg-[#b8821d] text-[#0b1d3a] font-bold text-sm py-2.5 px-4 rounded-lg text-center transition-colors shadow-md flex items-center justify-center gap-2"
                    id="mobile-menu-cta-book"
                  >
                    {t.nav.bookConsultation}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex gap-2">
                    <a
                      href="tel:+8801993306990"
                      className="flex-1 bg-white/10 hover:bg-white/15 text-white font-medium text-xs py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-white/10"
                      id="mobile-menu-cta-call"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                      {t.nav.callUs}
                    </a>
                    <a
                      href="https://wa.me/8801993306990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25d366]/20 hover:bg-[#25d366]/30 text-[#25d366] font-medium text-xs py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-[#25d366]/30"
                      id="mobile-menu-cta-wa"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {t.nav.whatsApp}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
