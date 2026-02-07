

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] overflow-hidden">
      <div className="mx-auto xl:ml-40 pl-0 max-w-[1500px] ">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[50%_50%] items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center xl:justify-start pt-18 xl:pt-28 ">
            <div className="relative xl:-translate-x-24">
              <div className="overflow-hidden rounded-t-full w-[85vw] max-w-[500px] md:w-[500px] xl:w-[560px] h-[500px] md:h-[800px] relative">
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
          <div className="flex flex-col items-center xl:items-start text-center justify-center xl:mr-49 mb-10 xl:mb-5 px-4 mt-8 xl:mt-0">
            <h1 className="text-[40px] md:text-[50px] xl:text-[79px] leading-[1.1] xl:leading-[1] font-medium tracking-medium mb-8 whitespace-normal xl:whitespace-pre-wrap transition-all duration-[800ms] ease-out delay-[80ms] opacity-100 translate-y-0 max-w-3xl xl:max-w-8xl ">
              Find clarity, <br className="hidden xl:block" />
              connection, & calm.
            </h1>

            <p className="text-[16px] sm:text-[20px] self-center mb-10 ">
              Clinical Psychologist | Santa Monica, CA
            </p>
            <div className="flex justify-center self-center xl:mr-10">
              <Link 
                href="/contact" 
                className="border border-[var(--color-text-primary)] px-6 py-3 text-[14px] md:text-[15px] font-medium uppercase tracking-normal transition-colors hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)]"
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
