import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { UnifiedSolutionSection } from './components/UnifiedSolutionSection';
import { PricingSection } from './components/PricingSection';
import { FreeConsultationCta } from './components/FreeConsultationCta';
import { ConceptCaseStudiesSection } from './components/ConceptCaseStudiesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickWhatsAppButton } from './components/QuickWhatsAppButton';
import { ServiceItem, PricingPackage } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedPackageForConsultation, setSelectedPackageForConsultation] = useState<string | undefined>(undefined);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (packageName?: string) => {
    setSelectedPackageForConsultation(packageName);
    setIsConsultationModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
  };

  const handleBookServiceFromModal = (serviceName: string) => {
    setSelectedServiceForConsultation(serviceName);
    setIsConsultationModalOpen(true);
  };

  const handleSelectPackageFromPricing = (packageItem: PricingPackage) => {
    setSelectedPackageForConsultation(packageItem.name);
    // Smooth scroll down to contact section with prefilled state or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA] flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={() => handleScrollToSection('services')}
        />

        {/* 3. Value / Trust Strip */}
        <TrustStrip />

        {/* 4. Complete Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenConsultationWithService={(srv) => {
            setSelectedServiceForConsultation(srv);
            handleScrollToSection('contact');
          }}
        />

        {/* 5. Why Choose A.N Marketing Agency */}
        <WhyChooseSection />

        {/* 6. Systematic 5-Step Process */}
        <ProcessSection />

        {/* 7. Unified Solution Advantage vs Fragmented Agencies */}
        <UnifiedSolutionSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 8. Pricing Retainers Section */}
        <PricingSection
          onSelectPackage={handleSelectPackageFromPricing}
          onOpenCustomQuote={() => handleScrollToSection('contact')}
        />

        {/* 9. Large Free Consultation CTA */}
        <FreeConsultationCta
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 10. Concept Case Studies (Pakistani Clothing & Skincare Brands) */}
        <ConceptCaseStudiesSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 11. About Us & Founder Profile */}
        <AboutSection />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Contact & Onboarding Brief Form */}
        <ContactSection
          preselectedService={selectedServiceForConsultation}
          preselectedPackage={selectedPackageForConsultation}
        />
      </main>

      {/* 14. Global Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Service Detail Specification Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={handleBookServiceFromModal}
      />

      {/* Interactive Consultation Lead Capture Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => {
          setIsConsultationModalOpen(false);
          setSelectedPackageForConsultation(undefined);
          setSelectedServiceForConsultation(undefined);
        }}
        defaultPackage={selectedPackageForConsultation}
        defaultService={selectedServiceForConsultation}
      />

      {/* Floating WhatsApp Quick Connect Widget */}
      <QuickWhatsAppButton />
    </div>
  );
}
