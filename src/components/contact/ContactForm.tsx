"use client";
import React from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-[var(--color-secondary)] py-20 px-6 font-[var(--font-gopher)]">
      <div className="mx-auto max-w-[800px] flex flex-col items-center">
        
        <h2 className="text-[40px] md:text-[56px] font-medium text-[var(--color-text-primary)] mb-6 text-center">
          Get in Touch
        </h2>
        
        <p className="text-[18px] md:text-[20px] text-[var(--color-text-primary)] mb-12 text-center max-w-2xl font-light leading-relaxed">
          I offer a free 15-minute consultation to answer any questions you may have and to see if we are a good fit. I look forward to hearing from you.
        </p>

        {isSubmitted ? (
          <div className="w-full h-[400px] flex flex-col items-center justify-center animate-in fade-in duration-700">
             <h3 className="text-3xl font-medium text-[var(--color-text-primary)] mb-4">Thank you for your message.</h3>
             <p className="text-xl text-[var(--color-text-primary)] text-center">
               I will get back to you within 24-48 business hours.
             </p>
             <button 
               onClick={() => setIsSubmitted(false)}
               className="mt-8 text-sm underline opacity-60 hover:opacity-100 transition-opacity"
             >
               Send another message
             </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium uppercase tracking-wider opacity-80">First Name</label>
                <input 
                  id="firstName"
                  type="text" 
                  className="w-full bg-[var(--color-background)] border-none p-4 text-lg focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all placeholder:text-gray-500/50"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium uppercase tracking-wider opacity-80">Last Name</label>
                <input 
                  id="lastName"
                  type="text" 
                  className="w-full bg-[var(--color-background)] border-none p-4 text-lg focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all placeholder:text-gray-500/50"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider opacity-80">Email *</label>
              <input 
                id="email"
                type="email" 
                className="w-full bg-[var(--color-background)] border-none p-4 text-lg focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all placeholder:text-gray-500/50"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider opacity-80">Subject *</label>
              <input 
                id="subject"
                type="text" 
                className="w-full bg-[var(--color-background)] border-none p-4 text-lg focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all placeholder:text-gray-500/50"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider opacity-80">Message *</label>
              <textarea 
                id="message"
                rows={6}
                className="w-full bg-[var(--color-background)] border-none p-4 text-lg focus:ring-1 focus:ring-[var(--color-text-primary)] outline-none transition-all resize-none placeholder:text-gray-500/50"
                required
              />
            </div>

            <button 
              type="submit" 
              className="self-center mt-6 px-12 py-4 bg-[var(--color-text-primary)] text-[var(--color-surface)] text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Submit
            </button>

          </form>
        )}

      </div>
    </section>
  );
};

export default ContactForm;
