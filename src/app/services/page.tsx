import React from 'react';
import Navbar from '@/components/ui/Navbar';
import FooterSection from '@/components/footer/FooterSection';
import ServiceSection from '@/components/services/ServiceSection';
import ContactSection from '@/components/contact/ContactSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-[1420px] mx-auto px-6 text-center mb-16">
            <h1 className="text-[50px] md:text-[70px] font-medium text-[var(--color-text-primary)] mb-6">
                Clinical Services
            </h1>
            <p className="text-[20px] max-w-3xl mx-auto text-[var(--color-text-primary)] leading-relaxed opacity-80">
                Detailed information about my therapeutic approach and how we can work together to support your journey.
            </p>
        </div>
        
        {/* Re-using ServiceSection for the core content for now */}
        <ServiceSection />
        
        <div className="mt-20">
            <ContactSection />
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
