import React from "react";
import Image from "next/image";

const images = [
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=750w",
];

const FindMeSection = () => {
  return (
    <section className="w-full bg-[#fbf6f1] py-20 lg:py-32">
      <div className="mx-20 max-w-8xl mb-48">
        
        <h2 className="mb-12 text-4xl lg:text-[65px] font-medium text-[#1a3a2a]">
          Find me on social.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Social media image ${index + 1}`}
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
      </div>
      <hr />
    </section>
  );
};

export default FindMeSection;
