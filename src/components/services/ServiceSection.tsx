import React from "react";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] py-[6.6vmax] px-2 md:px-5 lg:px-2 font-[var(--font-gopher)] text-[#223614]">
      <div className="max-w-[1420px] mx-auto">
        <h2 className="text-[40px] md:text-[53px] font-medium text-center mb-[50px] tracking-tight preFade fadeIn">
          My Specialties
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] px-[57px]">
          {/* Service 1 - Individual Therapy */}
          <div className="flex flex-col border-[0.8px] border-[#223614] bg-[var(--color-secondary)] p-[20px] h-full min-h-[400px] preSlide slideIn delay-100">
            <div className="relative w-full h-[250px] mb-6 overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" 
                 alt="Individual Therapy" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Individual Therapy</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              My work often focuses on anxiety, panic, trauma, and burnout. Sessions are a space to slow down, reconnect, and develop more sustainable ways of living. We’ll work together to understand the root causes of your stress and build practical tools for navigation.
            </p>
            <div className="mt-auto pt-6 border-t border-[#223614]">
              <a href="/services" className="inline-block text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity">
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Service 2 - Couples Counseling */}
          <div className="flex flex-col border-[0.8px] border-[var(--color-border)] bg-[var(--color-secondary)] p-[20px] h-full min-h-[400px] preSlide slideIn delay-200">
             <div className="relative w-full h-[250px] mb-6 overflow-hidden">
                <Image 
                 src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Couples Counseling" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Couples Counseling</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              I help partners navigate the impact of earlier life experiences that continue to affect their relationships, confidence, and sense of safety. Whether you are facing communication breakdowns or major life transitions, we create a path back to connection.
            </p>
            <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
              <a href="/services" className="inline-block text-[13px] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity">
                 Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Service 3 - Family Therapy */}
          <div className="flex flex-col border-[0.8px] border-[var(--color-border)] bg-[var(--color-secondary)] p-[20px] h-full min-h-[400px] preSlide slideIn delay-300">
             <div className="relative w-full h-[250px] mb-6 overflow-hidden">
               <Image 
                 src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80" 
                 alt="Family Therapy" 
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            <h3 className="text-[22px] font-medium mb-4">Family Therapy</h3>
            <p className="text-[16px] leading-relaxed mb-8 flex-grow">
              Support for navigating complex patterns that may stem from long-standing family dynamics, focusing on safety, understanding, and better regulation. We address generational cycles to foster healthier relationships for the future.
            </p>
            <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
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
