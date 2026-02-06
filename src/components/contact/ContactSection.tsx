import React from "react";
import Link from "next/link";

const ContactSection = () => {
  
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)]
     py-[100px] px-8 font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0">
        
        {/* LEFT COLUMN - Dr. Maya (Cols 1-5) */}
        <div className="md:col-span-5 flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards" style={{ animationDelay: '0.49s' }}>
          <h3 
            className="text-[32px] md:text-[40px] font-medium leading-tight mb-6"
            style={{ transitionTimingFunction: 'ease', transitionDuration: '0.8s' }}
          >
            Dr. Maya Reynolds
          </h3>
          <div 
            className="text-[18px] md:text-[20px] leading-[1.6] space-y-1 font-normal"
            style={{ animationDelay: '0.51s' }}
          >
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <div className="pt-4">
              <a href="mailto:contact@drmayareynolds.com" className="block hover:opacity-70">contact@drmayareynolds.com</a>
              <a href="tel:5555555555" className="block hover:opacity-70">(555) 555-5555</a>
            </div>
          </div>
        </div>

        {/* MIDDLE - Hours (Cols 6-7) */}
        <div className="md:col-span-2 md:col-start-6 flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards " style={{ animationDelay: '0.51s' }}>
          <h4 
            className="text-[24px] font-medium mb-4 opacity-80"
          >
            Hours
          </h4>
          <p className="text-[18px] md:text-[20px] leading-[1.6]">
            Monday – Friday<br />
            10am – 6pm
          </p>
        </div>

        {/* RIGHT - Menu (Cols 8-9) */}
         <div className="md:col-span-2 md:col-start-9 flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards " style={{ animationDelay: '0.54s' }}>
          <h4 
             className="text-[24px] font-medium mb-4 opacity-80"
          >
            Menu
          </h4>
          <p className="text-[18px] md:text-[20px] leading-[1.6] flex flex-col gap-1">
            <Link href="/" className="hover:opacity-70">Home</Link>
            <Link href="#about" className="hover:opacity-70">About</Link>
            <Link href="#services" className="hover:opacity-70">Services</Link>
            <Link href="/blog" className="hover:opacity-70">Blog</Link>
            <Link href="/contact" className="hover:opacity-70">Contact</Link>
          </p>
        </div>

        {/* FAR RIGHT - Connect (Cols 11-12) */}
        <div className="md:col-span-2 md:col-start-11 flex flex-col items-start md:items-end animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards " style={{ animationDelay: '0.57s' }}>
          <h4 
            className="text-[24px] font-medium mb-4 text-left md:text-right opacity-80"
          >
            Connect
          </h4>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-left md:text-right flex flex-col gap-1">
             <a href="#" className="hover:opacity-70">Instagram</a>
             <a href="#" className="hover:opacity-70">LinkedIn</a>
             <a href="#" className="hover:opacity-70">Psych Today</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
