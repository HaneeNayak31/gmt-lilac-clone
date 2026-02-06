import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IntroSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-text-primary)] font-[var(--font-gopher)] pt-25 pb-20 lg:pb-45">
      <div className="mx-auto max-w-[1420px] px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-0">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards max-w-[650px] mx-auto lg:ml-10" style={{ animationDelay: '0.2s' }}>
            <h2 className="mb-8 text-[40px] md:text-[53px] font-medium leading-[1.1] text-[var(--color-text-primary)] tracking-tight">
              Hi, I&rsquo;m Dr. Maya.
            </h2>
            <p className="mb-10 text-[20px] leading-[1.6] text-[var(--color-text-primary)] ">
              I&rsquo;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
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
                 src="/images/maya/Dr. Maya Reynolds.png" 
                 alt="Dr. Maya Reynolds" 
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
