import React from "react";
import Image from "next/image";

const MyOfficeSection = () => {
  return (
    <section className="w-full bg-[var(--color-secondary)] text-[var(--color-primary)] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1700px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-y-12 lg:gap-x-0 relative">
          
          {/* LEFT CONTENT */}
          {/* Reference: grid-area: 2/2/10/14 */}
          <div className="lg:col-start-2 lg:col-end-14 lg:row-start-2 lg:row-end-10 flex flex-col justify-center z-10 py-10 lg:py-0">
             <div className="flex flex-col gap-10">
                <div>
                   <h3 className="mb-4 text-[56px] font-medium" style={{ color: "var(--color-primary)" }}>Our Office</h3>
                   <p className="text-[18px] leading-relaxed max-w-md mb-8">
                     A calm space for healing. Our office is designed to be a sanctuary where you can feel safe, comfortable, and truly heard. 
                     We offer a private, serene environment that supports your journey toward clarity and peace.
                   </p>
                   
                   <div className="flex flex-col gap-2 text-2xl font-medium text-[var(--color-primary)]">
                      <p>123th Street 45 W</p>
                      <p>Santa Monica, CA 90401</p>
                   </div>
                </div>

                <div>
                   <h4 className="mb-4 text-[32px] font-medium" style={{ color: "var(--color-primary)" }}>Hours</h4>
                   <div className="flex flex-col gap-1 text-xl font-medium text-[var(--color-primary)]">
                      <p>Monday – Friday</p>
                      <p>10am – 6pm</p>
                   </div>
                </div>

                {/* Office Images Grid */}
                <div className="grid grid-cols-2 gap-4 mt-2 max-w-lg">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image 
                      src="/images/office/office1.jpeg" 
                      alt="Peaceful therapy office seating" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image 
                      src="/images/office/office2.jpeg" 
                      alt="Calm interior detail" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

             </div>
          </div>

          {/* RIGHT MAP IMAGE */}
          {/* Reference: grid-area: 1/14/11/26 */}
          <div className="lg:col-start-14 lg:col-end-26 lg:row-start-1 lg:row-end-11 relative h-[400px] lg:h-full w-full grayscale invert filter min-h-[500px]">
             <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.51,34.00,-118.47,34.03&amp;layer=mapnik"
                style={{ border: 0 }}
                title="Office Location Map"
                className="w-full h-full object-cover"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyOfficeSection;