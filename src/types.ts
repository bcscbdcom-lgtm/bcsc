export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  isGold?: boolean;
  title: string;
  description: string;
}

export interface IndustryItem {
  icon: string;
  name: string;
}

export interface CredentialItem {
  num: string;
  title: string;
  description: string;
}

export interface CertificateItem {
  icon: string;
  title: string;
  filename: string;
}

export interface CaseStudyItem {
  tag: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export interface InsightItem {
  icon: string;
  tag: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  icon: string;
  title: string;
  filename: string;
}

export interface ClientItem {
  initials: string;
  name: string;
}

export interface TestimonialItem {
  quote: string;
  client: string;
}
