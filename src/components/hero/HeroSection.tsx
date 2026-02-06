"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] overflow-hidden">
      <div className="ml-40 pl-0 max-w-[1500px] ">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative flex justify-start pt-28 ">
            <div className="relative -translate-x-16 lg:-translate-x-24">
              <div className="overflow-hidden rounded-t-full">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
                  alt="Lilac bouquet"
                  className="w-[500px] sm:w-[520px] lg:w-[560px] h-full lg:h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col align-start text-center justify-center mr-49 mb-5">
            
            <h1 className="text-[46px] sm:text-[64px] lg:text-[79px] leading-[1] font-medium tracking-medium mb-8 whitespace-pre-wrap transition-all duration-[800ms] ease-out delay-[80ms] opacity-100 translate-y-0 max-w-8xl ">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="text-[12px] sm:text-[20px] self-center mb-10 ">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <div className="flex justify-center self-center mr-10">
              <button className="border border-[var(--color-text-primary)] px-6 py-3 text-[15px] font-medium uppercase tracking-normal transition-colors hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)]">
                CONNECT WITH ME &nbsp; →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
