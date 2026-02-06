import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=750w",
];

const InstagramIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-8 h-8 text-white"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FindMeSection = () => {
  return (
    <section className="w-full bg-[var(--color-accent)] py-20 lg:py-32 font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-20 mb-32">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <h2 className="text-4xl lg:text-[65px] font-medium !text-[var(--color-surface)]">
            Find me on social.
          </h2>
          <Link 
            href="#" 
            className="text-lg uppercase tracking-widest border-b border-[var(--color-surface)] pb-1 hover:opacity-60 transition-opacity text-[var(--color-surface)]"
          >
            @DrMayaReynolds
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <Link
              href="#"
              key={index}
              className="relative aspect-square w-full overflow-hidden group block cursor-pointer"
            >
              {/* Image */}
              <Image
                src={src}
                alt={`Social media image ${index + 1}`}
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon />
              </div>
            </Link>
          ))}
        </div>
        
      </div>
      <hr className="border-[#1a3a2a]/10" />
    </section>
  );
};

export default FindMeSection;
