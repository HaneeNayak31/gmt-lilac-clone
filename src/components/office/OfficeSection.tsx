
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OfficeSection = () => {
  return (
    <section className="w-full bg-[var(--color-secondary)] py-[90px] lg:py-[120px] px-6 font-[var(--font-gopher)] relative overflow-hidden">
      <div className="mx-auto max-w-[1420px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-[1000ms] fill-mode-forwards order-2 lg:order-1">
          <span className="text-[14px] uppercase tracking-[0.2em] mb-4 text-[var(--color-accent)] font-medium">
            Santa Monica, CA
          </span>
          <h2 className="text-[40px] md:text-[53px] leading-[1.1] mb-8 text-[var(--color-text-primary)] font-medium tracking-tight">
            The Space
          </h2>
          <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.6] text-[var(--color-text-primary)] opacity-90">
            <p>
              My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. 
            </p>
            <p>
              Clients often share that the space itself helps them feel more at ease when they arrive. It’s not just a room, but a container for the work we do together—safe, consistent, and removed from the noise of the outside world.
            </p>
          </div>

          <div className="mt-10">
              <Link href="/contact" className="inline-block border-b border-[var(--color-text-primary)] pb-1 text-[16px] uppercase tracking-wider hover:opacity-70 transition-opacity text-[var(--color-text-primary)]">
                  Schedule a Visit
              </Link>
          </div>
        </div>

        {/* RIGHT: Creative Image Collage */}
        <div className="relative h-[600px] w-full order-1 lg:order-2">
            
            {/* Image 1: Main Large Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[450px] overflow-hidden z-10 animate-in fade-in slide-in-from-bottom-12 duration-[1000ms] fill-mode-forwards delay-100">
               <Image
                 src="/images/office/office1.jpeg"
                 alt="Dr. Maya Reynolds Office - Seating Area"
                 fill
                 className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                 sizes="(max-w: 768px) 100vw, 50vw"
               />
            </div>

            {/* Image 2: Smaller Overlapping Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[350px] overflow-hidden z-20 border-[8px] border-[var(--color-surface)] shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-[1000ms] fill-mode-forwards delay-300">
               <Image
                 src="/images/office/office2.jpeg"
                 alt="Dr. Maya Reynolds Office - Detail"
                 fill
                 className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                 sizes="(max-w: 768px) 100vw, 30vw"
               />
            </div>
            
             {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[var(--color-secondary)] opacity-30 rounded-full blur-3xl z-0 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default OfficeSection;