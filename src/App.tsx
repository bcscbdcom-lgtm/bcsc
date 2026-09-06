import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CredentialsCertificates } from './components/CredentialsCertificates';
import { CaseStudiesInsights } from './components/CaseStudiesInsights';
import { GalleryClientsTestimonials } from './components/GalleryClientsTestimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#d99b26] selection:text-[#0b1d3a]">
        {/* Sticky Navbar with animated active state, responsive mobile toggle menu & language switcher */}
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <StatsBar />
          <AboutSection />
          <FounderSection />
          <ServicesSection />
          <IndustriesSection />
          <CredentialsCertificates />
          <CaseStudiesInsights />
          <GalleryClientsTestimonials />
          <ContactSection />
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
