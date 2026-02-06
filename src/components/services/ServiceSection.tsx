import React from "react";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <section className="w-full bg-[#fbf6f1] py-[6.6vmax] px-2 md:px-5 lg:px-2 font-[var(--font-gopher)] text-[#223614]">
      <div className="max-w-[1420px] mx-auto">
        <h2 className="text-[40px] md:text-[53px] font-medium text-center mb-[50px] tracking-tight preFade fadeIn">
          My Specialties
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] px-[57px]">
          {/* Service 1 - Individual Therapy */}
          <div className="flex flex-col border-[0.8px] border-[#223614] bg-[#E5E0DA] p-[20px] h-full min-h-[400px] preSlide slideIn delay-100">
            <div className="relative w-full h-[250px] mb-6 overflow-hidden">
               <Image 
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/111818d6-74ee-4890-8e10-33758b995208/stocksy_txp92683074v7r300_small_4981395.jpg" 
                 alt="Individual Therapy" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Individual Therapy</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="mt-auto pt-6 border-t border-[#223614]">
              <a href="/services" className="inline-block text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity">
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Service 2 - Couples Counseling */}
          <div className="flex flex-col border-[0.8px] border-[#223614] bg-[#E5E0DA] p-[20px] h-full min-h-[400px] preSlide slideIn delay-200">
             <div className="relative w-full h-[250px] mb-6 overflow-hidden">
               <Image 
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/e2034966-a320-410a-afe1-6101c4021796/stocksy_txp92683074v7r300_small_4818685.jpg" 
                 alt="Couples Counseling" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Couples Counseling</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="mt-auto pt-6 border-t border-[#223614]">
              <a href="/services" className="inline-block text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity">
                 Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Service 3 - Family Therapy */}
          <div className="flex flex-col border-[0.8px] border-[#223614] bg-[#E5E0DA] p-[20px] h-full min-h-[400px] preSlide slideIn delay-300">
             <div className="relative w-full h-[250px] mb-6 overflow-hidden">
               <Image 
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/b41d0637-23e5-4f36-82c8-11f8796191b7/stocksy_txp92683074v7r300_small_4860021.jpg" 
                 alt="Family Therapy" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Family Therapy</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="mt-auto pt-6 border-t border-[#223614]">
               <a href="/services" className="inline-block text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
