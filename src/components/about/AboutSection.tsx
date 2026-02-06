
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[var(--color-secondary)] text-[var(--color-text-primary)] font-[var(--font-gopher)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[695px]">
        
        {/* LEFT: TEXT & CTA */}
        <div className="flex flex-col justify-between items-center lg:items-stretch text-[var(--color-text-primary)] border-r border-transparent lg:border-white/0">
          
          {/* Main Content (Centered) */}
          <div className="flex flex-col justify-center flex-grow px-6 lg:px-20 py-20 lg:py-0">
            <div className="w-full max-w-[650px] mx-auto lg:mx-0">
              <h2 className="text-[40px] md:text-[53px] font-medium leading-[1.1] mb-[32px] tracking-normal text-[var(--color-text-primary)]">
                Live a fulfilling life.
              </h2>

              <div className="text-[18px] md:text-[19.7px] leading-[1.6] space-y-[16px] font-[var(--font-gopher)] text-[var(--color-text-primary)] font-normal">
                <p>
                  Life can be challenging—especially when you're trying to balance
                  your personal and professional life.
                </p>
                <p>
                  It's easy to feel like you're alone in facing these challenges,
                  but I want you to know that I'm here to help.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button (Bottom) */}
          <div className="w-full border-t border-[var(--color-text-primary)]">
             <button className="w-full py-6 text-[14px] font-medium uppercase tracking-normal transition-all duration-300 ease-in-out flex justify-center items-center text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)]">
                GET IN TOUCH &nbsp; &rarr;
             </button>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative h-[500px] lg:h-full w-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
            alt="Decorative lifestyle image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
