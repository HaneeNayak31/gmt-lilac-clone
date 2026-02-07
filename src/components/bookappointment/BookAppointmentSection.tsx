import React from "react";

const BookAppointmentSection = () => {
  return (
    <section className="w-full bg-[var(--color-background)] py-20 lg:py-32 px-6 flex flex-col items-center font-[var(--font-gopher)]">
      <div className="max-w-4xl text-center">
        <h2 className="mb-8 text-[46px] md:text-[68px] font-medium text-[var(--color-text-primary)] leading-tight">
          Ready to get started?
        </h2>
        
        <p className="mt-8 mb-16 text-[18px] md:text-[24px] leading-relaxed text-[#1a3a2a] max-w-3xl mx-auto opacity-90">
          Taking the first step can feel big, but you don&apos;t have to do it alone. 
          I invite you to schedule a free 15-minute phone consultation to share what&apos;s on your mind and see if we&apos;re a good fit.
        </p>

        {/* Custom Scheduling Card */}
        <div className="mx-auto w-full max-w-2xl bg-white border border-[#1a3a2a]/20 p-10 md:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col items-center transition-transform hover:scale-[1.01] duration-500">
           <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[var(--color-text-primary)] mb-6 opacity-70">
             New Client Inquiries
           </span>
           
           <h3 className="text-[32px] md:text-[40px] font-medium text-[var(--color-text-primary)] mb-6">
             Free 15-Minute Consultation
           </h3>
           
           <p className="text-[16px] text-[#1a3a2a]/80 mb-10 max-w-md leading-relaxed">
             Please use the button below to send me a message with your availability, and I will get back to you within 24 hours to confirm a time.
           </p>

           <a 
             href="/contact" 
             className="bg-[var(--color-text-primary)] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:opacity-90 transition-all w-full md:w-auto"
           >
             Request Appointment
           </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
            <span className="text-sm uppercase tracking-wider font-medium">Currently Accepting New Clients</span>
            <div className="h-px w-12 bg-[var(--color-text-primary)] mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;