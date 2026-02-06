import React from "react";
const SubscribeSection = () => {
    return (
        <section className="w-full bg-[var(--color-secondary)] px-6 py-24 lg:py-40 flex items-center justify-center font-[var(--font-gopher)]">
      <div className="w-full max-w-[800px] border-[2px] border-[var(--color-text-primary)] p-8 md:p-16 text-center text-[var(--color-text-primary)]">
        
        {/* Header */}
        <div className="mb-12">
          <h2 
            className="text-[40px] md:text-[60px] font-medium leading-tight mb-4 animate-in fade-in slide-in-from-bottom-8 duration-[800ms] fill-mode-forwards text-[var(--color-text-primary)]"
            style={{ animationDelay: '0.4s' }}
          >
            Subscribe
          </h2>
          <p 
            className="text-[18px] md:text-[22px] font-light animate-in fade-in slide-in-from-bottom-4 duration-[800ms] fill-mode-forwards"
            style={{ animationDelay: '0.42s' }}
          >
            Sign up with your email address to receive news and updates.
          </p>
        </div>

        {/* Form */}
        <div 
            className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-[600px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-[800ms] fill-mode-forwards"
            style={{ animationDelay: '0.43s' }}
        >
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-white text-black px-5 py-4 text-lg font-light focus:outline-none min-w-0"
          />
          <button 
            className=" border-[var(--color-text-primary)] border-[1px] text-[var(--color-text-primary)] px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)] transition-colors duration-300 relative group"
            type="submit"
            value="Sign Up"
          >
            <span className="newsletter-form-spinner sqs-spin light large hidden"></span>
            <span className="newsletter-form-button-label">Sign Up</span>
            <span className="newsletter-form-button-icon hidden"></span>
          </button>
        </div>

        {/* Footer */}
        <p 
            className="text-[14px] md:text-[16px] font-light opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-[800ms] fill-mode-forwards"
            style={{ animationDelay: '0.44s' }}
        >
          We respect your privacy.
        </p>

      </div>
    </section>
    );
};

export default SubscribeSection;
