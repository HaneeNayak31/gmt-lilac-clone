import React from "react";
import Image from "next/image";

const LetsConnect = () => {
  return (
    <section className="w-full min-h-screen bg-[var(--color-background)] py-20 lg:py-18 text-[var(--color-primary)] overflow-hidden">
      <div className="mx-10 max-w-[1700px]">
        {/* 24-column grid for desktop to match the precision of the design */}
        <div className="grid grid-cols-1 xl:grid-cols-24 gap-4 relative">
          
          {/* Title Block */}
          {/* Spans across the top */}
          <div className="xl:col-start-3 xl:col-end-25 xl:row-start-1 xl:row-span-3 flex items-start justify-start z-0">
            <h2 className="mb-0 mt-15 text-5xl lg:text-[100px] leading-normal font-medium tracking-tight">Let’s Connect</h2>
          </div>

          {/* Text Block */}
          {/* Left side text */}
          <div className="xl:col-start-3 xl:col-end-11 xl:row-start-5 xl:row-span-3 flex flex-col items-start justify-start z-10">
            <div className="text-xl space-y-4 w-full">
              <p className="whitespace-pre-wrap">Embarking on a journey of self-discovery takes courage.</p>
              <p className="max-w-[600px]">
                Whether you are ready to schedule a session or just have a few questions, I am here to support you.
              </p>
            </div>
          </div>

          {/* Main Image Block (Arch) */}
          {/* Tall and narrow, positioned to the left of the center */}
          <div className=" hidden xl:block xl:col-start-4 xl:col-end-9 xl:row-start-8 xl:row-span-[11] relative z-40 h-[480px]">
             <div className="mt-20 relative w-full h-full rounded-t-full overflow-hidden"> 
                <Image 
                  src="/images/maya/dr_maya_reynolds.png" 
                  alt="Dr. Maya Reynolds" 
                  fill
                  priority
                  className="object-cover"
                />
             </div>
          </div>

          {/* Circle Image Block */}
          {/* Overlaps the main image */}
          <div className="hidden xl:block xl:col-start-8 xl:col-end-13 xl:row-start-17 xl:row-span-3 relative z-50 h-[210px] w-[210px] rounded-full -ml-6 mt-0">
             <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#c2bfcb]">
               <Image 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop" 
                 alt="Calming lilac flowers" 
                 fill
                 className="object-cover"
               />
             </div>
          </div>

          {/* Info Box Block */}
          {/* Green box shifted right and narrowed */}
          <div className="xl:col-start-15 xl:col-end-29 xl:row-start-5 xl:row-span-11 z-30 flex flex-col justify-center pt-0">
            <div className="bg-[var(--color-secondary)] px-6 lg:px-10 shadow-lg flex items-start py-10 xl:pt-15 xl:pb-30">
                <p className="leading-relaxed text-[var(--color-primary)] text-[18.5px]">
                  <span className="font-bold">PLEASE NOTE:</span> I typically respond to inquiries within 24-48 business hours. 
                  If you are experiencing a mental health emergency, please visit your nearest emergency room or call 988.
                </p>
            </div>
          </div>

          {/* Mobile Layout Fallback (simplified stack) */}
          <div className="xl:hidden flex flex-col items-center gap-8">
             <div className="relative w-full max-w-[400px] h-[500px] mt-10">
                <div className="relative w-full h-full rounded-t-full overflow-hidden"> 
                  <Image 
                    src="/images/maya/dr_maya_reynolds.png" 
                    alt="Dr. Maya Reynolds" 
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LetsConnect;