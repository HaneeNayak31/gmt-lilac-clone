"use client";

import React from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const HeroBlog = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="pt-20 lg:pt-30 w-full bg-[var(--color-background)] text-[var(--color-text-primary)] pb-[100px] px-6">
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-8 xl:gap-0">
        
        {/* Left Column: Arched Image */}
        <div className={`relative w-[85vw] max-w-[470px] aspect-[3/4] mx-auto md:mr-6 xl:mr-0 md:ml-10 xl:ml-25 ${isVisible ? 'fadeIn' : 'preFade'}`}>
             <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/03adb210-386b-4cac-93ce-796727896c60/pexels-alp-y%C4%B1ld%C4%B1zlar-15127478.jpg"
              alt="The Lilac Blog"
              fill
              className="object-cover rounded-t-[500px]"
              priority
            />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-4 xl:pl-0">
          <h1 
            className={`text-[40px] md:text-[45px] xl:text-[75px] font-medium leading-[1.1] mb-10 ${isVisible ? 'slideIn delay-100' : 'preSlide'}`}
          >
            The Lilac Blog
          </h1>
          
          <div 
            className={`text-[18px] md:text-[25px] leading-[1.5] space-y-4 max-w-[400px] ${isVisible ? 'slideIn delay-200' : 'preSlide'}`}
          >
            <p>
              My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
            </p>
            <p className="font-bold">
              Glad you’re here.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroBlog
