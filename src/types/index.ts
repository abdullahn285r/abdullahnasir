export interface ServiceItem {
  id: string;
  name: string;
  category: 'advertising' | 'organic' | 'creative' | 'analytics';
  shortDescription: string;
  longDescription: string;
  keyBenefits: string[];
  deliverables: string[];
  channelsOrTech?: string[];
  iconName: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  pricePKR: string;
  priceUSD: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  market: string;
  image: string;
  summary: string;
  businessChallenge: string;
  targetAudience: string;
  strategyOverview: string;
  socialMediaStrategy: string[];
  paidAdsStrategy: string[];
  contentStrategy: string[];
  conversionStrategy: string[];
  illustrativeOutcomes: {
    label: string;
    value: string;
    context: string;
  }[];
  keyLearnings: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  companyName: string;
  websiteUrl: string;
  businessType: string;
  servicesRequired: string[];
  monthlyBudget: string;
  currency: 'PKR' | 'USD';
  message: string;
}
