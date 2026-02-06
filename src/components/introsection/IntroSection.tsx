import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IntroSection = () => {
  return (
    <section className="w-full bg-[var(--color-secondary)] text-[var(--color-text-primary)] font-[var(--font-gopher)] pt-25 pb-20 lg:pb-45">
      <div className="mx-auto max-w-[1420px] px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-0">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards max-w-[650px] mx-auto lg:ml-10" style={{ animationDelay: '0.2s' }}>
            <h2 className="mb-8 text-[40px] md:text-[53px] font-medium leading-[1.1] text-[var(--color-text-primary)] tracking-tight">
              Hi, I&rsquo;m Lilac.
            </h2>
            <p className="mb-10 text-[20px] leading-[1.6] text-[var(--color-text-primary)] ">
              I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
            </p>
            <div className="ml-65 w-fit border border-[var(--color-text-primary)] px-9 py-3 transition-all duration-300 ease-in-out hover:bg-[var(--color-text-primary)] hover:text-white cursor-pointer group mt-10">
              <Link href="/contact" className="text-[14px] font-medium uppercase tracking-normal text-[var(--color-text-primary)] transition-colors duration-300 ease-in-out group-hover:text-white">
                Let&apos;s chat
              </Link>
            </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-center mt-0 mb-10 lg:mb-0 min-h-[500px] lg:min-h-[600px]">
          <div className="relative w-full max-w-[550px]">
            {/* Main Arch Image */}
            <div className="relative h-[500px] lg:h-[600px] w-full lg:w-[400px] overflow-hidden rounded-t-[200px] z-10 ml-10">
               <Image 
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w" 
                 alt="person holding flower" 
                 fill
                 className="object-cover"
               />
            </div>

            {/* Overlapping Circle Image */}
            <div className="hidden lg:block absolute bottom-4 -right-10 top-100 h-[300px] w-[300px] overflow-hidden rounded-full  z-20 ">
              <Image 
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w" 
                alt="flower image" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
</div>
      </div>
    </section>
  )
}

export default IntroSection
