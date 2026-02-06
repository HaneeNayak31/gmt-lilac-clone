
import Link from "next/link";
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
                Therapy grounded in science & compassion.
              </h2>

              <div className="text-[18px] md:text-[19.7px] leading-[1.6] space-y-[16px] font-[var(--font-gopher)] text-[var(--color-text-primary)] font-normal">
                <p>
                  I help high-achievers, creatives, and professionals move through anxiety, burnout, and trauma to find lasting peace.
                </p>
                <p>
                  My approach connects mind and body, helping you not just cope with stress, but thrive in your work, relationships, and daily life. You don’t have to carry it all alone.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button (Bottom) */}
          <div className="w-full border-t border-[var(--color-text-primary)]">
             <Link href="/contact" className="w-full py-6 text-[14px] font-medium uppercase tracking-normal transition-all duration-300 ease-in-out flex justify-center items-center text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)]">
                GET IN TOUCH &nbsp; &rarr;
             </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative h-[500px] lg:h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1588130739798-136cb52da55c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
