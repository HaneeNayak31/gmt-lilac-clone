import React from "react";

const BookAppointmentSection = () => {
  return (
    <section className="w-full bg-[#e5e0da] py-32 px-6 flex flex-col items-center ">
      <div className="max-w-4xl">
        <h2 className="mb-8 text-[68px] font-medium text-[#1a3a2a] text-center">
          Ready to get started?
        </h2>
        
        <p className="mt-16 mb-35 text-[26px] leading-relaxed text-[#1a3a2a] max-w-5xl mx-auto text-start">
          If you&apos;re ready to explore how we can work together, I invite you to schedule a free 15-minute consultation. 
          This is a chance for us to connect, discuss your needs, and see if we&apos;re a good fit for your therapeutic journey.
        </p>

        {/* Placeholder for Scheduling Widget */}
        <div className="mt-50 mx-auto  py-20 px-5 flex h-[350px] w-full max-w-2xl flex-col items-center justify-center bg-white shadow-sm border border-gray-300 mb-40" style={{ backgroundColor: 'white' }}>
          <h3 className="mb-4 text-[36px] font-bold text-black tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>This page is not active</h3>
          <p className="mb-8 text-[18px] text-gray-500 max-w-md leading-normal text-center">
            If you're the owner, please log into your account to start a free trial or subscribe.
          </p>
          <button className="bg-black px-8 py-4 text-md font-bold uppercase tracking-normal text-white font-sans-serif hover:bg-gray-800 transition-colors shadow-md" style={{ backgroundColor: 'black', color: 'white' }}>
            GO TO ACCOUNT
          </button>
        </div>

        <div className="mt-30 mb-20 flex flex-col items-center text-[2px] font-medium text-[#1a3a2a]">
            <span className="text-xl">Powered by</span>
            <span className="font-serif text-3xl font-bold lowercase tracking-tight">acuity:scheduling</span>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;