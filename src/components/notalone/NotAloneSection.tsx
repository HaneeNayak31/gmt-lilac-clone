
import React from "react"
import Image from "next/image"
import Link from "next/link"

const NotAloneSection = () => {
  return (
    <section className="w-full bg-[var(--color-lavender)] text-[var(--color-text-primary)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[695px]">
        
        {/* LEFT: IMAGE */}
        <div className="relative h-[500px] lg:h-full w-full">
            <Image
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
                 alt="You don't have to do this all alone"
                 fill
                 className="object-cover"
                 priority
             />
        </div>

        {/* RIGHT: TEXT & CTA */}
        <div className="flex flex-col justify-between items-center lg:items-stretch text-[var(--color-text-primary)] lg:border-l border-transparent lg:border-white/0">
            
            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center flex-grow px-6 lg:px-20 py-20 lg:py-0">
                <div className="w-full max-w-[680px] mx-auto lg:mx-0">
                    <h2 className="text-[40px] md:text-[53px] lg:text-[50px] font-medium leading-[1.05] mb-[32px] tracking-tight text-[var(--color-text-primary)]">
                        You don&apos;t have to do this all <em>alone</em>.
                    </h2>
                    
                    <p className="text-[18px] md:text-[19.7px] leading-[1.6] mb-[24px] font-[var(--font-gopher)] text-[var(--color-text-primary)] font-normal preFade fadeIn">
                        If you are facing any of these, there’s hope:
                    </p>

                    <ul className="mb-[32px] space-y-3 text-[18px] md:text-[19.7px] text-[var(--color-text-primary)] leading-relaxed pl-5">
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-primary)]" />
                        <span className="preFade fadeIn">Persistent feelings of sadness or hopelessness</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-primary)]" />
                        <span className="preFade fadeIn">Trouble focusing or making decisions</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-primary)]" />
                         <span className="preFade fadeIn">Difficulty maintaining relationships</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-primary)]" />
                         <span className="preFade fadeIn">Feeling constantly exhausted or unmotivated</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-primary)]" />
                         <span className="preFade fadeIn">A pervasive sense of being overwhelmed</span>
                       </li>
                    </ul>

                    <p className="text-[18px] md:text-[19.7px] leading-[1.6] font-[var(--font-gopher)] text-[var(--color-text-primary)] font-normal preFade fadeIn">
                         With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                    </p>
                </div>
            </div>

            {/* CTA Button (Bottom) */}
            <div className="w-full border-t border-[var(--color-text-primary)]">
                <Link href="/contact" className="w-full block">
                 <button className="w-full py-6 text-[14px] font-medium uppercase tracking-normal transition-all duration-300 ease-in-out flex justify-center items-center text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)]">
                    Work with me &nbsp; &rarr;
                 </button>
                </Link>
            </div>
        </div>

      </div>
    </section>
  )
}

export default NotAloneSection
