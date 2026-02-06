import React from "react";
import Link from "next/link";

const ContactSection = () => {
  
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)]
     py-[100px] px-8 font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0">
        
        {/* LEFT COLUMN - Lilac Template (Spans 75% - Cols 1-9) */}
        <div className="md:col-span-8 flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards" style={{ animationDelay: '0.49s' }}>
          <h3 
            className="text-[32px] md:text-[40px] font-medium leading-tight mb-6"
            style={{ transitionTimingFunction: 'ease', transitionDuration: '0.8s' }}
          >
            Lilac Template
          </h3>
          <div 
            className="text-[18px] md:text-[20px] leading-[1.6] space-y-1 font-normal"
            style={{ animationDelay: '0.51s' }}
          >
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
            <div className="pt-4">
              <a href="mailto:email@example.com" className="block hover:opacity-70">email@example.com</a>
              <a href="tel:5555555555" className="block hover:opacity-70">(555) 555-5555</a>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Hours (Spans ~16% - Cols 10-11) */}
        <div className="md:col-span-2 flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards " style={{ animationDelay: '0.51s' }}>
          <h4 
            className="text-[40px] font-medium mb-4"
            style={{ transitionTimingFunction: 'ease', transitionDuration: '0.8s' }}
          >
            Hours
          </h4>
          <p className="text-[18px] md:text-[20px] leading-[1.6]">
            Monday – Friday<br />
            10am – 6pm
          </p>
        </div>

        {/* RIGHT COLUMN - Find (Spans ~8% - Col 12) */}
        <div className="md:col-span-2 flex flex-col items-start md:items-end animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards " style={{ animationDelay: '0.54s' }}>
          <h4 
            className="text-[40px] font-medium mb-4 text-left md:text-right"
            style={{ transitionTimingFunction: 'ease', transitionDuration: '0.8s' }}
          >
            Find
          </h4>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-left md:text-right">
            <Link href="/" className="hover:opacity-70 underline underline-offset-3">Home<br /></Link>
            <Link href="/contact" className="hover:opacity-70 underline underline-offset-3">Contact</Link><br />
            <Link href="/blog" className="hover:opacity-70 underline underline-offset-3">Blog</Link>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
