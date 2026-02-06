import React from "react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[var(--color-secondary)] text-[var(--color-text-primary)] font-[var(--font-gopher)]">   


      {/* Bottom Bar: Legal & Credits */}
      <div className="border-t border-[var(--color-text-primary)]/20 py-8 text-[14px] opacity-80">
         <div className="mx-auto max-w-[1420px] px-6 flex flex-col items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center">
               © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
               <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
               <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
            </div>

            {/* Credits */}
            <div className="text-[16px] text-center">
                <span className="opacity-70 text-[12px] uppercase tracking-wider mr-2">Designed by</span>
                <Link href="#" className="border-b border-[var(--color-text-primary)] pb-0.5 hover:opacity-60 transition-opacity font-medium">Hanee Nayak</Link>
            </div>
            
         </div>
      </div>
    </footer>
  );
};

export default FooterSection;
