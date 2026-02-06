"use client";
import React from "react";
import Image from "next/image";

const faqs = [
  { 
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider, which means I do not bill insurance directly. However, I can provide a monthly Superbill that you can submit to your insurance company for potential reimbursement."
  },
  { 
    question: "What are your rates?",
    answer: "My fee is $250 per 50-minute session. Payment is due at the time of service, and I accept all major credit cards and HSA/FSA cards."
  },
  { 
    question: "Do you have any openings?",
    answer: "I currently have a few openings for daytime sessions on Tuesdays and Thursdays. If you are interested, please reach out to schedule a free 15-minute consultation."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--color-secondary)] px-6 py-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-12 lg:grid-cols-2  px-4 md:px-10 lg:px-0">
        
        {/* LEFT IMAGE - Arched */}
        <div className="relative flex justify-center lg:justify-center">
          <div className="relative h-[500px] w-full max-w-[463px] lg:h-[695px] overflow-hidden rounded-t-[232px]">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
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

          <div className="flex flex-col border-t border-[var(--color-text-primary)] w-full text-[var(--color-text-primary)]">
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
