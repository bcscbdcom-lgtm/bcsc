import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'bn';

export interface Translations {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    founder: string;
    services: string;
    industries: string;
    credentials: string;
    certificates: string;
    caseStudies: string;
    blog: string;
    gallery: string;
    contact: string;
    consultation: string;
    bookConsultation: string;
    callUs: string;
    whatsApp: string;
    menuTitle: string;
    active: string;
    viewing: string;
    slogan: string;
    langToggle: string;
    switchLangTooltip: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    bookBtn: string;
    exploreBtn: string;
    featureSince: string;
    featureCountry: string;
    featureSupport: string;
    founderBadge: string;
    founderName: string;
    founderTitle: string;
  };
  stats: {
    expNum: string;
    expLabel: string;
    clientsNum: string;
    clientsLabel: string;
    projectsNum: string;
    projectsLabel: string;
    supportNum: string;
    supportLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    promiseTitle: string;
    promiseDesc: string;
    valuesTitle: string;
    valuesDesc: string;
  };
  founder: {
    eyebrow: string;
    name: string;
    title: string;
    p1: string;
    p2: string;
    points: string[];
    cta: string;
    badge: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  credentials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  certificates: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      filename: string;
    }[];
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    disclaimer: string;
    challengeLabel: string;
    approachLabel: string;
    outcomeLabel: string;
    items: {
      tag: string;
      title: string;
      challenge: string;
      approach: string;
      outcome: string;
    }[];
  };
  insights: {
    eyebrow: string;
    title: string;
    cta: string;
    items: {
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      filename: string;
    }[];
  };
  clients: {
    eyebrow: string;
    title: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    disclaimer: string;
    items: {
      quote: string;
      client: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    callLabel: string;
    emailLabel: string;
    webLabel: string;
    khulnaTitle: string;
    khulnaAddr: string;
    dhakaTitle: string;
    dhakaAddr: string;
    openMaps: string;
    mapsEyebrow: string;
    mapsTitle: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    coreServices: string;
    rights: string;
    slogan: string;
  };
  floating: {
    scrollTop: string;
    whatsAppChat: string;
  };
}

export const TRANSLATIONS: Record<Locale, Translations> = {
  en: {
    locale: 'en',
    nav: {
      home: 'Home',
      about: 'About',
      founder: 'Founder',
      services: 'Services',
      industries: 'Industries',
      credentials: 'Credentials',
      certificates: 'Certificates',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      gallery: 'Gallery',
      contact: 'Contact',
      consultation: 'Consultation',
      bookConsultation: 'Book a Consultation',
      callUs: 'Call Us',
      whatsApp: 'WhatsApp',
      menuTitle: 'BCSC Navigation Menu',
      active: 'Active',
      viewing: 'Viewing',
      slogan: 'Consult. Solve. Succeed.',
      langToggle: 'বাংলা',
      switchLangTooltip: 'Switch to Bengali (বাংলা)',
    },
    hero: {
      eyebrow: 'TRUSTED BUSINESS SUPPORT ACROSS BANGLADESH',
      titleLine1: 'Business clarity.',
      titleLine2: 'Compliance',
      titleLine3: 'confidence.',
      description:
        'BCSC helps businesses manage accounting, income tax, VAT, company affairs, regulatory compliance and strategic growth with practical professional support.',
      bookBtn: 'Book a Consultation',
      exploreBtn: 'Explore Services',
      featureSince: 'Since 2009',
      featureCountry: 'Bangladesh-wide service',
      featureSupport: 'Responsive support',
      founderBadge: 'FOUNDER & LEAD CONSULTANT',
      founderName: 'Shaikh Muhammad Salim',
      founderTitle: 'RAT (ICAB) | MBA | M.Com | CMA (Inter)',
    },
    stats: {
      expNum: '16+',
      expLabel: 'Years of Experience',
      clientsNum: '100+',
      clientsLabel: 'Business Clients',
      projectsNum: '500+',
      projectsLabel: 'Projects Completed',
      supportNum: '24/7',
      supportLabel: 'Client Support',
    },
    about: {
      eyebrow: 'ABOUT BCSC',
      title: 'A practical partner for every stage of business',
      p1: 'Business Consulting & Solutions Center is a professional consultancy firm supporting entrepreneurs, companies and organizations throughout Bangladesh.',
      p2: 'From day-to-day bookkeeping to tax planning, VAT compliance, company formation and regulatory filings, our focus is to make complex obligations clear, manageable and aligned with your business goals.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be a trusted source of clear, ethical and effective business support.',
      missionTitle: 'Our Mission',
      missionDesc: 'To simplify compliance and help clients make informed financial decisions.',
      promiseTitle: 'Our Promise',
      promiseDesc: 'Professional attention, responsive communication and solution-focused service.',
      valuesTitle: 'Our Values',
      valuesDesc: 'Integrity, confidentiality, accuracy, accountability and long-term partnership.',
    },
    founder: {
      eyebrow: 'FOUNDER PROFILE',
      name: 'Shaikh Muhammad Salim, RAT (ICAB)',
      title: 'Business Consultant, Accountant & Compliance Professional',
      p1: 'With professional experience since 2009, Shaikh Muhammad Salim supports organizations with accounting systems, financial reporting, income tax, VAT, audit support, company affairs and business advisory services.',
      p2: 'His approach combines technical knowledge with practical guidance so clients can understand their obligations and move forward with confidence.',
      points: [
        'Registered Accounting Technician (RAT), ICAB',
        'CA Articleship Completed',
        'CMA (Inter), MBA and M.Com',
        'QuickBooks and financial reporting training',
      ],
      cta: 'Discuss your business needs',
      badge: 'RAT (ICAB)',
    },
    services: {
      eyebrow: 'WHAT WE DO',
      title: 'Complete Business Support Services',
      subtitle: 'Professional assistance from setup and registration to reporting, compliance and growth.',
      items: [
        { title: 'Accounting & Bookkeeping', description: 'Ledgers, reconciliations, accounts cleanup and regular reporting.' },
        { title: 'Financial Statements & MIS', description: 'Management reports and decision-ready financial statements.' },
        { title: 'Income Tax Services', description: 'TIN, return preparation, tax planning and assessment support.' },
        { title: 'VAT & BIN Consultancy', description: 'BIN registration, VAT returns, records and compliance guidance.' },
        { title: 'RJSC Company Formation', description: 'Company incorporation and corporate secretarial assistance.' },
        { title: 'Company Affairs', description: 'Annual filings, share matters and statutory documentation support.' },
        { title: 'IRC & ERC Services', description: 'Import and export registration assistance for growing businesses.' },
        { title: 'BIDA Registration', description: 'Investment registration and related application support.' },
        { title: 'Trademark Registration', description: 'Brand protection application and documentation assistance.' },
        { title: 'Regulatory Compliance', description: 'Practical guidance for statutory and business requirements.' },
        { title: 'Audit Support', description: 'Schedules, records, coordination and audit preparation assistance.' },
        { title: 'Asset Valuation', description: 'Structured valuation support for reporting and business needs.' },
        { title: 'Project Profile', description: 'Feasibility-focused profiles for finance and business planning.' },
        { title: 'QuickBooks Services', description: 'Setup, cleanup, catch-up bookkeeping and reporting workflows.' },
        { title: 'Payroll Support', description: 'Payroll records, calculations and related compliance assistance.' },
        { title: 'Business Advisory', description: 'Planning, process improvement and practical management support.' },
        { title: 'Startup Support', description: 'Guidance on structure, registration, records and early compliance.' },
        { title: 'Training & Capacity Building', description: 'Practical accounting, compliance and software learning support.' },
      ],
    },
    industries: {
      eyebrow: 'INDUSTRIES SERVED',
      title: 'Experience Across Diverse Sectors',
      items: [
        'Manufacturing',
        'Trading & Retail',
        'Real Estate',
        'Healthcare',
        'Garments',
        'Agro Business',
        'Import & Export',
        'Technology',
        'NGO & Social Sector',
        'Professional Services',
      ],
    },
    credentials: {
      eyebrow: 'PROFESSIONAL CREDENTIALS',
      title: 'Knowledge backed by training and experience',
      subtitle: 'BCSC combines formal education, professional training and hands-on client service.',
      items: [
        {
          num: '01',
          title: 'RAT (ICAB)',
          desc: 'Registered Accounting Technician, Institute of Chartered Accountants of Bangladesh.',
        },
        {
          num: '02',
          title: 'CA Articleship Completed',
          desc: 'Structured professional training in accounting, audit, tax and assurance.',
        },
        {
          num: '03',
          title: 'CMA (Inter)',
          desc: 'Intermediate-level cost and management accounting studies.',
        },
        {
          num: '04',
          title: 'MBA, M.Com & B.Com (Honours)',
          desc: 'Academic foundation in management, commerce and business administration.',
        },
        {
          num: '05',
          title: 'Professional Development',
          desc: 'QuickBooks Online, IFRS, IAS, financial reporting and skill development training.',
        },
      ],
    },
    certificates: {
      eyebrow: 'CERTIFICATES GALLERY',
      title: 'Professional Learning & Recognition',
      subtitle: 'Add certificate images using the filenames shown on each card.',
      items: [
        { title: 'ICAB Registered Accounting Technician', filename: 'certificate-rat.jpg' },
        { title: 'Bangladesh Labor Law Training', filename: 'certificate-labor-law.jpg' },
        { title: 'IFRS & IAS Training', filename: 'certificate-ifrs.jpg' },
        { title: 'Skill Development Program', filename: 'certificate-skill.jpg' },
      ],
    },
    caseStudies: {
      eyebrow: 'CASE STUDIES',
      title: 'How BCSC Creates Practical Value',
      disclaimer: 'Case studies are representative summaries and do not disclose confidential client information.',
      challengeLabel: 'Challenge',
      approachLabel: 'Approach',
      outcomeLabel: 'Outcome',
      items: [
        {
          tag: 'ACCOUNTING',
          title: 'Organizing Financial Records',
          challenge: 'Incomplete records made reporting and decision-making difficult.',
          approach: 'Structured chart of accounts, reconciliations and monthly reporting workflow.',
          outcome: 'Clearer records and more reliable management information.',
        },
        {
          tag: 'COMPLIANCE',
          title: 'Building a Filing Calendar',
          challenge: 'Multiple tax, VAT and corporate deadlines were hard to track.',
          approach: 'Compliance review, document checklist and recurring filing calendar.',
          outcome: 'Better preparation and reduced risk of missed deadlines.',
        },
        {
          tag: 'BUSINESS SETUP',
          title: 'Supporting a New Company',
          challenge: 'The founders needed guidance across registration and initial records.',
          approach: 'Coordinated company setup, registrations and accounting foundations.',
          outcome: 'A clearer path from incorporation to operational readiness.',
        },
      ],
    },
    insights: {
      eyebrow: 'BCSC INSIGHTS',
      title: 'Useful Guides for Business Owners',
      cta: 'Request guidance',
      items: [
        {
          tag: 'INCOME TAX',
          title: 'Preparing for a Business Tax Return',
          desc: 'A practical checklist of records businesses should organize before return preparation.',
        },
        {
          tag: 'VAT',
          title: 'VAT Compliance Checklist',
          desc: 'Understand the recurring records and reviews that support stronger VAT compliance.',
        },
        {
          tag: 'COMPANY AFFAIRS',
          title: 'Before Registering a Company',
          desc: 'Key choices to consider before beginning the company incorporation process.',
        },
      ],
    },
    gallery: {
      eyebrow: 'OFFICE GALLERY',
      title: 'Inside BCSC',
      subtitle: 'Place your office photos in assets/images using the filenames shown below.',
      items: [
        { title: 'Office Reception', filename: 'office-1.jpg' },
        { title: 'Consultation Area', filename: 'office-2.jpg' },
        { title: 'Working Environment', filename: 'office-3.jpg' },
        { title: 'Professional Meeting', filename: 'office-4.jpg' },
      ],
    },
    clients: {
      eyebrow: 'CLIENT SHOWCASE',
      title: 'Trusted by Businesses',
    },
    testimonials: {
      eyebrow: 'TESTIMONIALS',
      title: 'What Clients Value',
      disclaimer: 'Testimonial text is sample copy and should be approved by each named client before publication.',
      items: [
        {
          quote: 'BCSC has been a dependable partner for our accounting, tax and compliance requirements.',
          client: 'Greenbangla Housing & Developer Ltd',
        },
        {
          quote: 'Their practical guidance helped us keep our financial records organized and meet important deadlines.',
          client: 'Crimson Rosella Ltd',
        },
        {
          quote: 'We appreciate the responsive support and clear advice provided for our tax and regulatory matters.',
          client: 'CMC Healthcare Ltd',
        },
        {
          quote: 'BCSC made complex compliance processes easier to understand and manage for our business.',
          client: 'Bio Science International',
        },
        {
          quote: 'Professional, timely and solution-focused service has made BCSC a valuable business adviser.',
          client: 'TrueMark International',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT BCSC',
      title: 'Let’s discuss your business needs',
      subtitle: 'Contact us for accounting, tax, VAT, company formation, compliance or advisory support.',
      callLabel: 'Call Us',
      emailLabel: 'Email Us',
      webLabel: 'Website',
      khulnaTitle: 'Khulna Office',
      khulnaAddr: '26, Gollamari North Khal Bank Road, Azad Laundry Mor, Khulna-9100',
      dhakaTitle: 'Dhaka Office',
      dhakaAddr: '37/2 Pritom Jaman Tower, Purana Paltan, Dhaka',
      openMaps: 'Open in Google Maps',
      mapsEyebrow: 'FIND OUR OFFICES',
      mapsTitle: 'Google Maps',
    },
    footer: {
      aboutText: 'Professional accounting, tax, VAT, compliance and business advisory support across Bangladesh.',
      quickLinks: 'Quick Links',
      coreServices: 'Core Services',
      rights: '© 2026 BCSC. All Rights Reserved.',
      slogan: 'Consult. Solve. Succeed.',
    },
    floating: {
      scrollTop: 'Scroll to top',
      whatsAppChat: 'WhatsApp',
    },
  },
  bn: {
    locale: 'bn',
    nav: {
      home: 'হোম',
      about: 'সম্পর্কে',
      founder: 'প্রতিষ্ঠাতা',
      services: 'সেবাসমূহ',
      industries: 'শিল্পখাত',
      credentials: 'যোগ্যতা',
      certificates: 'সনদপত্র',
      caseStudies: 'কেস স্টাডি',
      blog: 'ব্লগ',
      gallery: 'গ্যালারি',
      contact: 'যোগাযোগ',
      consultation: 'পরামর্শ নিন',
      bookConsultation: 'পরামর্শ বুক করুন',
      callUs: 'কল করুন',
      whatsApp: 'হোয়াটসঅ্যাপ',
      menuTitle: 'বিসিএসসি নেভিগেশন মেনু',
      active: 'সক্রিয়',
      viewing: 'বর্তমান',
      slogan: 'পরামর্শ • সমাধান • সাফল্য',
      langToggle: 'English',
      switchLangTooltip: 'Switch to English',
    },
    hero: {
      eyebrow: 'সমগ্র বাংলাদেশে বিশ্বস্ত ব্যবসায়িক ও আইনি সহায়তা',
      titleLine1: 'ব্যবসায়ে স্বচ্ছতা।',
      titleLine2: 'নিয়মানুবর্তিতা ও',
      titleLine3: 'আত্মবিশ্বাস।',
      description:
        'বিসিএসসি বাস্তবমুখী পেশাদার সেবার মাধ্যমে ব্যবসায় প্রতিষ্ঠানগুলোকে অ্যাকাউন্টিং, আয়কর, ভ্যাট, কোম্পানি সংক্রান্ত কাজ, আইনি বাধ্যবাধকতা এবং কৌশলগত প্রবৃদ্ধিতে সহযোগিতা করে।',
      bookBtn: 'পরামর্শ বুক করুন',
      exploreBtn: 'সেবাসমূহ দেখুন',
      featureSince: '২০০৯ সাল থেকে',
      featureCountry: 'সারাদেশে নির্ভরযোগ্য সেবা',
      featureSupport: 'দ্রুত ও দায়িত্বশীল সাপোর্ট',
      founderBadge: 'প্রতিষ্ঠাতা ও প্রধান পরামর্শক',
      founderName: 'শেখ মুহাম্মদ সেলিম',
      founderTitle: 'RAT (ICAB) | MBA | M.Com | CMA (Inter)',
    },
    stats: {
      expNum: '১৬+',
      expLabel: 'বছরের পেশাদার অভিজ্ঞতা',
      clientsNum: '১০০+',
      clientsLabel: 'ব্যবসায়িক ক্লায়েন্ট',
      projectsNum: '৫০০+',
      projectsLabel: 'সম্পন্ন প্রকল্প',
      supportNum: '২৪/৭',
      supportLabel: 'ক্লায়েন্ট সহায়তা',
    },
    about: {
      eyebrow: 'বিসিএসসি সম্পর্কে',
      title: 'ব্যবসার প্রতিটি ধাপে আপনার নির্ভরযোগ্য ও বাস্তবমুখী সঙ্গী',
      p1: 'বিজনেস কনসাল্টিং অ্যান্ড সলিউশনস সেন্টার (BCSC) একটি অভিজ্ঞ পেশাদার পরামর্শক প্রতিষ্ঠান, যা বাংলাদেশের উদ্যোক্তা, কোম্পানি এবং বিভিন্ন সংস্থাকে বিশ্বস্ত সেবা দিয়ে আসছে।',
      p2: 'নিয়মিত হিসাব সংরক্ষণ ও বুককিপিং থেকে শুরু করে ট্যাক্স প্ল্যানিং, ভ্যাট কমপ্লায়েন্স, কোম্পানি গঠন এবং সরকারি ও আইনি ফাইলিং—সব ধরনের জটিল প্রক্রিয়া সহজ ও আপনার ব্যবসার লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ করাই আমাদের প্রধান উদ্দেশ্য।',
      visionTitle: 'আমাদের ভিশন',
      visionDesc: 'স্বচ্ছ, নৈতিক এবং কার্যকর ব্যবসায়িক সহায়তার সবচেয়ে বিশ্বস্ত ঠিকানা হওয়া।',
      missionTitle: 'আমাদের মিশন',
      missionDesc: 'আইনি ও আর্থিক প্রক্রিয়া সহজ করা এবং সঠিক ব্যবসায়িক সিদ্ধান্ত গ্রহণে ক্লায়েন্টকে সহায়তা করা।',
      promiseTitle: 'আমাদের অঙ্গীকার',
      promiseDesc: 'পেশাদার যত্ন, দায়িত্বশীল যোগাযোগ এবং শতভাগ সমাধানমুখী আন্তরিক সেবা।',
      valuesTitle: 'আমাদের মূল্যবোধ',
      valuesDesc: 'সততা, গোপনীয়তা রক্ষা, নির্ভুলতা, দায়বদ্ধতা এবং দীর্ঘমেয়াদী বিশ্বস্ত অংশীদারিত্ব।',
    },
    founder: {
      eyebrow: 'প্রতিষ্ঠাতার পরিচিতি',
      name: 'শেখ মুহাম্মদ সেলিম, RAT (ICAB)',
      title: 'ব্যবসায়িক পরামর্শক, হিসাববিদ ও কমপ্লায়েন্স প্রফেশনাল',
      p1: '২০০৯ সাল থেকে দীর্ঘ পেশাদার অভিজ্ঞতায় শেখ মুহাম্মদ সেলিম বিভিন্ন প্রতিষ্ঠানকে আধুনিক অ্যাকাউন্টিং সিস্টেম, আর্থিক প্রতিবেদন, আয়কর, ভ্যাট, অডিট সহায়তা, কোম্পানি বিষয়ক কাজ এবং ব্যবসায়িক পরামর্শ দিয়ে আসছেন।',
      p2: 'তার প্রাতিষ্ঠানিক ও ব্যবহারিক জ্ঞান ক্লায়েন্টদের তাদের আইনি বাধ্যবাধকতা সহজে বুঝতে এবং আত্মবিশ্বাসের সাথে ব্যবসায় এগিয়ে নিতে সাহায্য করে।',
      points: [
        'রেজিস্টার্ড অ্যাকাউন্টিং টেকনিশিয়ান (RAT), ICAB',
        'সিএ আর্টিকেলশিপ সম্পন্নকারী',
        'সিএমএ (ইন্টার), এমবিএ এবং এম.কম',
        'কুইকবুকস এবং অ্যাডভান্সড ফিনান্সিয়াল রিপোর্টিং প্রশিক্ষণপ্রাপ্ত',
      ],
      cta: 'আপনার ব্যবসার প্রয়োজনীয়তা আলোচনা করুন',
      badge: 'RAT (ICAB)',
    },
    services: {
      eyebrow: 'আমাদের সেবাসমূহ',
      title: 'সার্বিক ব্যবসায়িক সহায়তা সেবা',
      subtitle: 'প্রতিষ্ঠান গঠন ও নিবন্ধন থেকে শুরু করে রিপোর্টিং, কমপ্লায়েন্স ও ব্যবসায়িক প্রবৃদ্ধি পর্যন্ত পূর্ণাঙ্গ সহায়তা।',
      items: [
        { title: 'অ্যাকাউন্টিং ও বুককিপিং', description: 'লেজার, ব্যাংক রিকনসিলিয়েশন, পুরোনো হিসাব শুদ্ধকরণ এবং নিয়মিত প্রতিবেদন।' },
        { title: 'আর্থিক বিবরণী ও এমআইএস', description: 'সিদ্ধান্ত গ্রহণের উপযোগী ম্যানেজমেন্ট রিপোর্ট এবং আন্তর্জাতিক মানের আর্থিক বিবরণী।' },
        { title: 'আয়কর সেবা', description: 'টিন (TIN), আয়কর রিটার্ন প্রস্তুত ও দাখিল, ট্যাক্স প্ল্যানিং এবং অ্যাসেসমেন্ট সহায়তা।' },
        { title: 'ভ্যাট ও বিআইএন পরামর্শ', description: 'বিন (BIN) রেজিস্ট্রেশন, ভ্যাট রিটার্ন, চালান এবং সরকারি ভ্যাট আইনের পূর্ণ কমপ্লায়েন্স।' },
        { title: 'আরজেএসসি কোম্পানি গঠন', description: 'লিমিটেড কোম্পানি ইনকর্পোরেশন, নাম অনুমোদন এবং কর্পোরেট সেক্রেটারিয়াল সেবা।' },
        { title: 'কোম্পানি এফেয়ার্স ও ফাইলিং', description: 'বার্ষিক রিটার্ন দাখিল, শেয়ার হস্তান্তর, ডিরেক্টর পরিবর্তন ও সংবিধিবদ্ধ নথিপত্র।' },
        { title: 'আইআরসি ও ইআরসি সেবা', description: 'আমদানি ও রপ্তানি ব্যবসার জন্য প্রয়োজনীয় লাইসেন্স ও নবায়ন সহায়তা।' },
        { title: 'বিডা (BIDA) রেজিস্ট্রেশন', description: 'বিনিয়োগ নিবন্ধন, বিভিন্ন অনুমতি এবং আনুষঙ্গিক আবেদন সহায়তা।' },
        { title: 'ট্রেডমার্ক ও ব্র্যান্ড নিবন্ধন', description: 'ব্র্যান্ডের সুরক্ষা, ট্রেডমার্ক আবেদন এবং মেধাস্বত্ব সুরক্ষামূলক ডকুমেন্টস।' },
        { title: 'আইনি ও নিয়ন্ত্রক কমপ্লায়েন্স', description: 'বাংলাদেশের বাণিজ্যিক ও কর আইনের বিধিবিধান অনুসরণের ব্যবহারিক পরামর্শ।' },
        { title: 'অডিট সাপোর্ট ও প্রস্তুতি', description: 'অডিট শিডিউল প্রস্তুত, নথিপত্র সাজানো এবং সিএ ফার্ম অডিটের পূর্ণ প্রস্তুতি।' },
        { title: 'সম্পদ মূল্যায়ন (Asset Valuation)', description: 'আর্থিক প্রতিবেদন ও ঋণ সুবিধার জন্য বিজ্ঞানসম্মত সম্পদ মূল্যায়ন।' },
        { title: 'প্রজেক্ট প্রোফাইল ও ফিজিবিলিটি', description: 'ব্যাংক লোন ও নতুন প্রকল্পের জন্য বাস্তবসম্মত ফিজিবিলিটি স্টাডি ও প্রোফাইল।' },
        { title: 'কুইকবুকস (QuickBooks) সেবা', description: 'কুইকবুকস সেটআপ, ডাটা মাইগ্রেশন এবং ক্লাউড হিসাবরক্ষণ প্রশিক্ষণ।' },
        { title: 'পেরোল ও বেতন ব্যবস্থাপনা', description: 'কর্মীদের বেতন শিট প্রস্তুত, ট্যাক্স ডিডাকশন এবং সংশ্লিষ্ট আইনি হিসাব।' },
        { title: 'ব্যবসায়িক পরামর্শ ও স্ট্র্যাটেজি', description: 'ব্যবসায়িক পরিকল্পনা, আর্থিক খরচ হ্রাস এবং লাভজনক প্রবৃদ্ধির কৌশল।' },
        { title: 'স্টার্টআপ ও নতুন ব্যবসা সহায়তা', description: 'নতুন ব্যবসার কাঠামো নির্ধারণ, ট্রেড লাইসেন্স এবং প্রাথমিক সেটআপ।' },
        { title: 'প্রশিক্ষণ ও দক্ষতা উন্নয়ন', description: 'ব্যবহারিক অ্যাকাউন্টিং, ভ্যাট-ট্যাক্স এবং আধুনিক সফটওয়্যার প্রশিক্ষণ।' },
      ],
    },
    industries: {
      eyebrow: 'যেসব শিল্পখাতে সেবা প্রদান করি',
      title: 'বিভিন্ন খাতে সফল কাজের অভিজ্ঞতা',
      items: [
        'উত্পাদন শিল্প (ম্যানুফ্যাকচারিং)',
        'ব্যবসা ও রিটেইল ট্রেডিং',
        'রিয়েল এস্টেট ও আবাসন',
        'স্বাস্থ্যসেবা ও ফার্মাসিউটিক্যালস',
        'পোশাক ও টেক্সটাইল শিল্প',
        'কৃষি ও খাদ্য প্রক্রিয়াকরণ',
        'আমদানি ও রপ্তানি বাণিজ্য',
        'তথ্যপ্রযুক্তি ও সফটওয়্যার',
        'এনজিও ও সামাজিক সংস্থা',
        'পেশাদার ও কর্পোরেট সেবা',
      ],
    },
    credentials: {
      eyebrow: 'পেশাগত যোগ্যতা ও স্বীকৃতি',
      title: 'উচ্চতর শিক্ষা ও পেশাদার প্রশিক্ষণের মেলবন্ধন',
      subtitle: 'বিসিএসসি উচ্চতর প্রাতিষ্ঠানিক শিক্ষা, শীর্ষ পেশাদার ডিগ্রি এবং দীর্ঘদিনের মাঠপর্যায়ের অভিজ্ঞতার সমন্বয়।',
      items: [
        {
          num: '০১',
          title: 'RAT (ICAB)',
          desc: 'রেজিস্টার্ড অ্যাকাউন্টিং টেকনিশিয়ান, দ্য ইনস্টিটিউট অব চার্টার্ড অ্যাকাউন্ট্যান্টস অব বাংলাদেশ।',
        },
        {
          num: '০২',
          title: 'সিএ আর্টিকেলশিপ সম্পন্ন',
          desc: 'স্বীকৃত সিএ ফার্ম থেকে হিসাববিজ্ঞান, নিরীক্ষা ও কর ব্যবস্থার উপর পূর্ণাঙ্গ পেশাদার ট্রেনিং।',
        },
        {
          num: '০৩',
          title: 'সিএমএ (ইন্টার)',
          desc: 'ইনস্টিটিউট অব কস্ট অ্যান্ড ম্যানেজমেন্ট অ্যাকাউন্ট্যান্টস থেকে মধ্যম পর্যায়ের সনদ।',
        },
        {
          num: '০৪',
          title: 'এমবিএ, এম.কম ও বি.কম (সম্মান)',
          desc: 'ব্যবস্থাপনা, হিসাববিজ্ঞান ও বাণিজ্যে উচ্চতর প্রথম শ্রেণির একাডেমিক শিক্ষা।',
        },
        {
          num: '০৫',
          title: 'অবিচ্ছিন্ন পেশাগত উন্নয়ন',
          desc: 'কুইকবুকস অনলাইন, আইএফআরএস (IFRS), আইএএস (IAS) ও আন্তর্জাতিক মানদণ্ডের নিয়মিত ট্রেনিং।',
        },
      ],
    },
    certificates: {
      eyebrow: 'সনদপত্র গ্যালারি',
      title: 'পেশাদার স্বীকৃতি ও অর্জন',
      subtitle: 'প্রতিটি কার্ডে নির্দেশিত ফাইলনেম অনুযায়ী আপনার সনদপত্রের ছবি যুক্ত করতে পারেন।',
      items: [
        { title: 'আইসিএবি রেজিস্টার্ড অ্যাকাউন্টিং টেকনিশিয়ান', filename: 'certificate-rat.jpg' },
        { title: 'বাংলাদেশ শ্রম আইন প্রশিক্ষণ', filename: 'certificate-labor-law.jpg' },
        { title: 'আইএফআরএস ও আইএএস প্রশিক্ষণ', filename: 'certificate-ifrs.jpg' },
        { title: 'দক্ষতা উন্নয়ন প্রোগ্রাম সনদ', filename: 'certificate-skill.jpg' },
      ],
    },
    caseStudies: {
      eyebrow: 'সফল কেস স্টাডি',
      title: 'যেভাবে আমরা ব্যবসায় কার্যকর সমাধান আনি',
      disclaimer: 'কেস স্টাডিগুলো প্রতীকী সারসংক্ষেপ এবং ক্লায়েন্টের গোপনীয়তা সম্পূর্ণ সুরক্ষিত রাখা হয়েছে।',
      challengeLabel: 'চ্যালেঞ্জ',
      approachLabel: 'পদ্ধতি',
      outcomeLabel: 'ফলাফল',
      items: [
        {
          tag: 'অ্যাকাউন্টিং',
          title: 'বিশৃঙ্খলা দূর করে আর্থিক স্বচ্ছতা প্রতিষ্ঠা',
          challenge: 'অসম্পূর্ণ ও বিশৃঙ্খল হিসাবের কারণে সঠিক ব্যবসায়িক সিদ্ধান্ত নেওয়া কঠিন ছিল।',
          approach: 'স্ট্রাকচার্ড চার্ট অব অ্যাকাউন্টস, নিয়মিত রিকনসিলিয়েশন ও মাসিক এমআইএস রিপোর্ট তৈরি।',
          outcome: 'স্বচ্ছ নির্ভুল হিসাব এবং লাভ-ক্ষতির সুস্পষ্ট চিত্র প্রকাশ।',
        },
        {
          tag: 'কমপ্লায়েন্স',
          title: 'ধারাবাহিক ফাইলিং ক্যালেন্ডার প্রণয়ন',
          challenge: 'কর, ভ্যাট এবং আরজেএসসি ফাইলিংয়ের একাধিক ডেডলাইন মনে রাখা কঠিন হচ্ছিল।',
          approach: 'সার্বিক কমপ্লায়েন্স রিভিউ, নথির চেকলিস্ট এবং স্বয়ংক্রিয় রিমাইন্ডার শিডিউল তৈরি।',
          outcome: 'সময়মতো সব ফাইলিং সম্পন্ন ও জরিমানা বা আইনি জটিলতার ঝুঁকি শূন্যে নামানো।',
        },
        {
          tag: 'কোম্পানি প্রতিষ্ঠা',
          title: 'নতুন লিমিটেড কোম্পানির সার্বিক পথপ্রদর্শন',
          challenge: 'উদ্যোক্তাদের কোম্পানি রেজিস্ট্রেশন, ট্যাক্স ও ভ্যাট কাঠামো সম্পর্কে সম্যক ধারণা ছিল না।',
          approach: 'নাম অনুমোদন থেকে শুরু করে লাইসেন্স ও প্রাথমিক হিসাব ব্যবস্থার সমন্বিত বাস্তবায়ন।',
          outcome: 'দ্রুততম সময়ে সম্পূর্ণ আইনি প্রস্তুতি নিয়ে ব্যবসায়িক কার্যক্রম শুরু।',
        },
      ],
    },
    insights: {
      eyebrow: 'বিসিএসসি ইনসাইটস',
      title: 'ব্যবসায়ীদের জন্য গুরুত্বপূর্ণ গাইড',
      cta: 'পরামর্শের আবেদন করুন',
      items: [
        {
          tag: 'আয়কর',
          title: 'ব্যবসায়িক ট্যাক্স রিটার্নের পূর্বপ্রস্তুতি',
          desc: 'আয়কর রিটার্ন দাখিলের আগে যেসব গুরুত্বপূর্ণ হিসাব ও নথি আগে থেকেই প্রস্তুত রাখা জরুরি।',
        },
        {
          tag: 'ভ্যাট',
          title: 'ভ্যাট কমপ্লায়েন্স চেকলিস্ট',
          desc: 'নিয়মিত ভ্যাট চালান এবং সঠিক রেজিস্টার সংরক্ষণে ব্যবসায়ীদের করণীয়সমূহ।',
        },
        {
          tag: 'কোম্পানি বিষয়ক',
          title: 'লিমিটেড কোম্পানি গঠনের পূর্বশর্ত',
          desc: 'আরজেএসসি-তে কোম্পানি রেজিস্ট্রেশন করার আগে যে বিষয়গুলো বিবেচনা করা প্রয়োজন।',
        },
      ],
    },
    gallery: {
      eyebrow: 'অফিস গ্যালারি',
      title: 'আমাদের কর্মপরিবেশ',
      subtitle: 'assets/images ফোল্ডারে নির্দেশিত ফাইলনেম দিয়ে আপনার অফিসের ছবি যুক্ত করুন।',
      items: [
        { title: 'অফিস রিসেপশন', filename: 'office-1.jpg' },
        { title: 'পরামর্শ কেন্দ্র', filename: 'office-2.jpg' },
        { title: 'কাজের পরিবেশ', filename: 'office-3.jpg' },
        { title: 'কর্পোরেট মিটিং রুম', filename: 'office-4.jpg' },
      ],
    },
    clients: {
      eyebrow: 'ক্লায়েন্ট তালিকা',
      title: 'শীর্ষ প্রতিষ্ঠানসমূহের আস্থা',
    },
    testimonials: {
      eyebrow: 'ক্লায়েন্টদের মতামত',
      title: 'আমাদের সেবা সম্পর্কে ক্লায়েন্টদের মূল্যায়ন',
      disclaimer: 'ক্লায়েন্টের অনুমতিক্রমে প্রকাশিত টেস্টমোনিয়াল সারসংক্ষেপ।',
      items: [
        {
          quote: 'আমাদের অ্যাকাউন্টিং, কর ও কমপ্লায়েন্সের জন্য বিসিএসসি একটি অত্যন্ত নির্ভরযোগ্য প্রতিষ্ঠান।',
          client: 'গ্রিনবাংলা হাউজিং অ্যান্ড ডেভেলপার লিঃ',
        },
        {
          quote: 'তাদের সময়োপযোগী পরামর্শ আমাদের হিসাব সংরক্ষণ ও ট্যাক্স ডেডলাইন মেটাতে বিশেষ সাহায্য করেছে।',
          client: 'ক্রিমসন রোজেলা লিঃ',
        },
        {
          quote: 'ভ্যাট ও কর সংক্রান্ত জটিল বিষয়ে তাদের তাৎক্ষণিক সাড়া ও সমাধান অত্যন্ত প্রশংসনীয়।',
          client: 'সিএমসি হেলথকেয়ার লিঃ',
        },
        {
          quote: 'বিসিএসসি জটিল সব সরকারি নিয়মাবলী আমাদের জন্য অত্যন্ত সহজ ও কার্যকরভাবে উপস্থাপন করেছে।',
          client: 'বায়ো সায়েন্স ইন্টারন্যাশনাল',
        },
        {
          quote: 'পেশাদার মনোভাব ও সঠিক আর্থিক নির্দেশনার জন্য বিসিএসসি আমাদের দীর্ঘদিনের বিশ্বস্ত উপদেষ্টা।',
          client: 'ট্রুমার্ক ইন্টারন্যাশনাল',
        },
      ],
    },
    contact: {
      eyebrow: 'যোগাযোগ করুন',
      title: 'আপনার ব্যবসায়িক প্রয়োজন আলোচনা করুন',
      subtitle: 'অ্যাকাউন্টিং, আয়কর, ভ্যাট, কোম্পানি গঠন বা আইনি কমপ্লায়েন্স সেবায় আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।',
      callLabel: 'সরাসরি কল করুন',
      emailLabel: 'ইমেইল পাঠান',
      webLabel: 'ওয়েবসাইট',
      khulnaTitle: 'খুলনা অফিস',
      khulnaAddr: '২৬, গল্লামারী উত্তর খাল ব্যাংক রোড, আজাদ লন্ড্রি মোড়, খুলনা-৯১০০',
      dhakaTitle: 'ঢাকা অফিস',
      dhakaAddr: '৩৭/২ প্রীতম জামান টাওয়ার, পুরানা পল্টন, ঢাকা',
      openMaps: 'গুগল ম্যাপে দেখুন',
      mapsEyebrow: 'আমাদের অবস্থান',
      mapsTitle: 'গুগল ম্যাপস',
    },
    footer: {
      aboutText: 'সমগ্র বাংলাদেশে বিশ্বস্ত অ্যাকাউন্টিং, আয়কর, ভ্যাট, কমপ্লায়েন্স ও ব্যবসায়িক পরামর্শক সেবা।',
      quickLinks: 'প্রয়োজনীয় লিংক',
      coreServices: 'প্রধান সেবাসমূহ',
      rights: '© ২০২৬ বিসিএসসি। সর্বস্বত্ব সংরক্ষিত।',
      slogan: 'পরামর্শ • সমাধান • সাফল্য',
    },
    floating: {
      scrollTop: 'উপরে যান',
      whatsAppChat: 'হোয়াটসঅ্যাপ',
    },
  },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved preference from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bcsc_locale') as Locale | null;
      if (saved === 'en' || saved === 'bn') {
        setLocaleState(saved);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('bcsc_locale', newLocale);
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'bn' : 'en');
  };

  const t = TRANSLATIONS[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
