import React from 'react'
import Image from 'next/image'
const HeroBlog = () => {
  return (
    <section className="pt-30 w-full bg-[#fbf6f1] text-[#223614] py-[100px] px-6 font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-0">
        
        {/* Left Column: Arched Image */}
        <div className="relative w-full aspect-[3/4] md:aspect-[3/4] max-w-[470px] mx-10 md:mr-0 md:ml-25 animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards" style={{ animationDelay: '0.1s' }}>
             <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/03adb210-386b-4cac-93ce-796727896c60/pexels-alp-y%C4%B1ld%C4%B1zlar-15127478.jpg"
              alt="The Lilac Blog"
              fill
              className="object-cover rounded-t-[500px]"
              priority
            />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 
            className="text-[40px] md:text-[60px] lg:text-[75px] font-medium leading-[1.1] mb-10 animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards"
            style={{ animationDelay: '0.12s' }}
          >
            The Lilac Blog
          </h1>
          
          <div 
            className="text-[18px] md:text-[25px] leading-[1.5] space-y-4 max-w-[400px] animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards"
            style={{ animationDelay: '0.13s' }}
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
