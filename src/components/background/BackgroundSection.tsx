"use client";
import React, { useState } from "react";

const backgroundItems = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const BackgroundSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--color-secondary)] px-6 py-[100px] font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[900px]">
        <h3 className="mb-[50px] text-center text-[32px] md:text-[40px] font-medium text-[var(--color-text-primary)] leading-tight font-[var(--font-gopher)]">
          My Professional Background
        </h3>

        <div className="flex flex-col border-t border-[var(--color-text-primary)] w-[700px] ml-25">
          {backgroundItems.map((item, index) => (
            <div key={index} className="border-b border-[var(--color-text-primary)] w-[700px]">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-[700px] cursor-pointer items-center justify-between py-[20px] transition-all duration-300 ease-in-out hover:opacity-70 group"
              >
                <span className="text-[20px] md:text-[24px] font-normal ">
                  {item.title}
                </span>
                
                {/* Custom Plus/Minus Icon - On Right */}
                <div className="relative h-[14px] w-[14px] shrink-0 flex items-center justify-center">
                  {/* Horizontal Line */}
                  <div className="absolute h-[1px] w-full bg-[var(--color-text-primary)]"></div>
                  {/* Vertical Line - Rotates to become horizontal (minus) when open */}
                  <div 
                    className={`absolute h-[1px] w-full bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-0" : "rotate-90"
                    }`}
                  ></div>
                </div>
              </button>
              
              <div 
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   openIndex === index ? "max-h-[200px] opacity-100 mb-[30px]" : "max-h-0 opacity-0"
                 }`}
              >
                <p className="max-w-[450px] mx-auto text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-text-primary)] text-left">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;