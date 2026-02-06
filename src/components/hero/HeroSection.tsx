

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] overflow-hidden">
      <div className="ml-40 pl-0 max-w-[1500px] ">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative flex justify-start pt-28 ">
            <div className="relative -translate-x-16 lg:-translate-x-24">
              <div className="overflow-hidden rounded-t-full w-[500px] sm:w-[520px] lg:w-[560px] h-[800px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                  alt="Aesthetic plant shadow"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col align-start text-center justify-center mr-49 mb-5">
            <h1 className="text-[46px] sm:text-[64px] lg:text-[79px] leading-[1] font-medium tracking-medium mb-8 whitespace-pre-wrap transition-all duration-[800ms] ease-out delay-[80ms] opacity-100 translate-y-0 max-w-8xl ">
              Find clarity, <br />
              connection, & calm.
            </h1>

            <p className="text-[12px] sm:text-[20px] self-center mb-10 ">
              Clinical Psychologist | Santa Monica, CA
            </p>
            <div className="flex justify-center self-center mr-10">
              <Link 
                href="/contact" 
                className="border border-[var(--color-text-primary)] px-6 py-3 text-[15px] font-medium uppercase tracking-normal transition-colors hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)]"
              >
                Schedule a Consultation &nbsp; →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
