import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80", // Lilac flowers
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80", // Book aesthetic
  "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80", // Soft clouds/sky
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80", // Calming water
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
    <section className="w-full bg-[var(--color-accent)] py-20 lg:py-32">
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
              aria-label={`View Instagram post ${index + 1}`}
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
