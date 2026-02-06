import React from "react";
import Image from "next/image";

const LetsConnect = () => {
  return (
    <section className="w-full min-h-screen bg-[#c2bfcb] py-20 lg:py-32 text-[#223614] overflow-hidden">
      <div className="mx-10 max-w-[1700px]">
        {/* 24-column grid for desktop to match the precision of the design */}
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-4 relative">
          
          {/* Title Block */}
          {/* Spans across the top */}
          <div className="lg:col-start-3 lg:col-end-25 lg:row-start-1 lg:row-span-3 flex items-start justify-start z-0">
            <h2 className="mb-0 mt-20 text-5xl lg:text-[110px] leading-normal font-medium tracking-tight">Let’s Connect</h2>
          </div>

          {/* Text Block */}
          {/* Left side text */}
          <div className="lg:col-start-3 lg:col-end-11 lg:row-start-5 lg:row-span-3 flex flex-col items-start justify-start z-10">
            <div className="text-xl space-y-4 w-full">
              <p className="whitespace-pre-wrap">Starting therapy is courageous.</p>
              <p className="max-w-[600px]">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </div>
          </div>

          {/* Main Image Block (Arch) */}
          {/* Tall and narrow, positioned to the left of the center */}
          <div className=" hidden lg:block lg:col-start-4 lg:col-end-9 lg:row-start-8 lg:row-span-[11] relative z-40 h-[480px]">
             <div className="mt-20 relative w-full h-full rounded-t-full overflow-hidden"> 
                <Image 
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w" 
                  alt="Person holding flowers" 
                  fill
                  priority
                  className="object-cover"
                />
             </div>
          </div>

          {/* Circle Image Block */}
          {/* Overlaps the main image */}
          <div className="hidden lg:block lg:col-start-8 lg:col-end-13 lg:row-start-17 lg:row-span-3 relative z-50 h-[210px] w-[210px] rounded-full -ml-6 mt-0">
             <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#c2bfcb]">
               <Image 
                 src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w" 
                 alt="White flowers" 
                 fill
                 className="object-cover"
               />
             </div>
          </div>

          {/* Info Box Block */}
          {/* Green box shifted right and narrowed */}
          <div className="lg:col-start-15 lg:col-end-29 lg:row-start-5 lg:row-span-11 z-30 flex flex-col justify-center pt-0">
            <div className="bg-[#223614] lg:px-10  shadow-lg max-h-7xl flex items-start pt-15 pb-30">
                <p className="leading-relaxed text-[#c2bfcb] text-[18.5px]">
                  <span className="font-bold">PLEASE NOTE:</span> If you opt to use a “Form Block” on
                  your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in
                  the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client
                  portal, or simply put your email address.
                </p>
            </div>
          </div>

          {/* Mobile Layout Fallback (simplified stack) */}
          <div className="lg:hidden flex flex-col items-center gap-8">
             <div className="relative w-64 h-80">
                {/* Mobile Image Placeholder if needed, or reuse the desktop logic via responsive classes above */}
                {/* For simplicity in this refactor, keeping the desktop structure mainly but hidden/shown as needed. 
                    The above grid blocks fade to stacked on mobile naturally with grid-cols-1, 
                    but specific image positioning might need tweaking. 
                    For now, allowing natural flow in grid-cols-1. */}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LetsConnect;