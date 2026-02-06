"use client";
import React from "react";
import Image from "next/image";

const faqs = [
  { 
    question: "Do you take insurance?",
    answer: "Answer goes here."
  },
  { 
    question: "What are your rates?",
    answer: "Answer goes here."
  },
  { 
    question: "Do you have any openings?",
    answer: "Answer goes here."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--color-background)] px-6 py-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-12 lg:grid-cols-2  px-4 md:px-10 lg:px-0">
        
        {/* LEFT IMAGE - Arched */}
        <div className="relative flex justify-center lg:justify-center">
          <div className="relative h-[500px] w-full max-w-[463px] lg:h-[695px] overflow-hidden rounded-t-[232px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
              alt="FAQ Decorative"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center w-full font-[var(--font-gopher)]">
          <h2 className="mb-[40px] text-[40px] md:text-[53px] font-medium text-[var(--color-text-primary)] leading-tight">
            FAQs
          </h2>

          <div className="flex flex-col border-t border-[var(--color-text-primary)] w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#223614]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-start gap-6 py-[18px] transition-colors hover:opacity-70 group"
                >
                  {/* Custom Plus/Minus Icon - Now on Left */}
                  <div className="relative h-[30px] w-[30px] shrink-0 flex items-center justify-center">
                    {/* Horizontal Line */}
                    <div className="absolute h-[1px] w-full bg-[var(--color-text-primary)]"></div>
                    {/* Vertical Line - Rotates to become horizontal (minus) when open */}
                    <div 
                      className={`absolute h-[1px] w-full bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out ${
                        openIndex === index ? "rotate-0" : "rotate-90"
                      }`}
                    ></div>
                  </div>

                  <span className="text-[20px] md:text-[46px] font-medium text-[#223614] text-left leading-[1.3] mr-[20px]">
                    {faq.question}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[600px] opacity-100 mb-[30px]" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pr-[40px] max-w-[95%]">
                    <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#223614] font-normal text-start">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
