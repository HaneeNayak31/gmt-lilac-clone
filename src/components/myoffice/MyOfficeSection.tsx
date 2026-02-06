import React from "react";
import Image from "next/image";

const MyOfficeSection = () => {
  return (
    <section className="w-full bg-[#7e7b46] text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1700px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-y-12 lg:gap-x-0 relative">
          
          {/* LEFT CONTENT */}
          {/* Reference: grid-area: 2/2/10/14 */}
          <div className="lg:col-start-2 lg:col-end-14 lg:row-start-2 lg:row-end-10 flex flex-col justify-center z-10 py-10 lg:py-0">
             <div className="flex flex-col gap-12">
                <div>
                   <h3 className="mb-6 text-[56px] font-medium" style={{ color: "white" }}>My Office</h3>
                   <div className="flex flex-col gap-2 text-2xl font-medium text-white">
                      <p>123 Example Street</p>
                      <p>Minneapolis, MN</p>
                   </div>
                </div>

                <div>
                   <h4 className="mb-6 text-[56px] font-medium" style={{ color: "white" }}>Hours</h4>
                   <div className="flex flex-col gap-2 text-2xl font-medium text-white">
                      <p>Monday – Friday</p>
                      <p>10am – 6pm</p>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT MAP IMAGE */}
          {/* Reference: grid-area: 1/14/11/26 */}
          <div className="lg:col-start-14 lg:col-end-26 lg:row-start-1 lg:row-end-11 relative h-[400px] lg:h-full w-full grayscale invert filter min-h-[500px]">
             <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/688ec308-0111-4645-b468-233bbd45464e/Screenshot+2024-02-23+at+10.45.18%E2%80%AFAM.png?format=1000w"
                alt="Map location of office"
                fill
                className="object-cover"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyOfficeSection;