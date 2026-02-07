"use client";
import React, { useState } from "react";

const backgroundItems = [
  {
    title: "My Approach",
    content:
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, and mindfulness.",
  },
  {
    title: "Trauma Work",
    content:
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex patterns. My approach is paced carefully, emphasizing safety and stabilization.",
  },
  {
    title: "Who I Work With",
    content:
      "I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.",
  },
];

const BackgroundSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--color-background)] px-6 py-[100px] font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[900px]">
        <h3 className="mb-[50px] text-center text-[32px] md:text-[40px] font-medium text-[var(--color-text-primary)] leading-tight font-[var(--font-gopher)]">
          My Professional Background
        </h3>

        <div className="flex flex-col border-t border-[var(--color-text-primary)] w-full max-w-[700px] mx-auto lg:ml-25">
          {backgroundItems.map((item, index) => (
            <div key={index} className="border-b border-[var(--color-text-primary)] w-full">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full cursor-pointer items-center justify-between py-[20px] transition-all duration-300 ease-in-out hover:opacity-70 group"
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