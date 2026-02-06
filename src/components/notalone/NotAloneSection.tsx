
import React from "react"
import Image from "next/image"
import Link from "next/link"

const NotAloneSection = () => {
  return (
    <section className="w-full bg-[var(--color-accent)] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[695px]">
        
        {/* LEFT: IMAGE */}
        <div className="relative h-[500px] lg:h-full w-full">
            <Image
                 src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=800&q=80"
                 alt="You don't have to do this all alone"
                 fill
                 className="object-cover"
                 priority
             />
        </div>

        {/* RIGHT: TEXT & CTA */}
        <div className="flex flex-col justify-between items-center lg:items-stretch text-[var(--color-surface)] lg:border-l border-transparent lg:border-white/0">
            
            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center flex-grow px-6 lg:px-20 py-20 lg:py-0">
                <div className="w-full max-w-[680px] mx-auto lg:mx-0">
                    <h2 className="text-[40px] md:text-[53px] lg:text-[50px] font-medium leading-[1.05] mb-[32px] tracking-tight !text-[var(--color-surface)]">
                        You don&apos;t have to do this all <em>alone</em>.
                    </h2>
                    
                    <p className="text-[18px] md:text-[19.7px] leading-[1.6] mb-[24px] font-[var(--font-gopher)] text-[var(--color-surface)] font-normal preFade fadeIn">
                        Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                    </p>

                    <ul className="mb-[32px] space-y-3 text-[18px] md:text-[19.7px] text-[var(--color-surface)] leading-relaxed pl-5">
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-surface)]" />
                        <span className="preFade fadeIn">Feeling successful on paper, but empty inside</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-surface)]" />
                        <span className="preFade fadeIn">Constant worry that worst-case scenarios will happen</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-surface)]" />
                         <span className="preFade fadeIn">Difficulty setting boundaries with work or family</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-surface)]" />
                         <span className="preFade fadeIn">Physical symptoms of stress like tension or fatigue</span>
                       </li>
                       <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-surface)]" />
                         <span className="preFade fadeIn">Feeling lonely, even when surrounded by others</span>
                       </li>
                    </ul>

                    <p className="text-[18px] md:text-[19.7px] leading-[1.6] font-[var(--font-gopher)] text-[var(--color-surface)] font-normal preFade fadeIn">
                         With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                    </p>
                </div>
            </div>

            {/* CTA Button (Bottom) */}
            <div className="w-full border-t border-[var(--color-surface)]">
                <Link href="/contact" className="w-full block">
                 <button className="w-full py-6 text-[14px] font-medium uppercase tracking-normal transition-all duration-300 ease-in-out flex justify-center items-center  hover:bg-[var(--color-text-primary)] text-[var(--color-surface)]">
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
