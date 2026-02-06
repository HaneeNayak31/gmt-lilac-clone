import React from "react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="w-full text-[var(--color-text-primary)] font-[var(--font-gopher)]">   


      {/* Bottom Bar: Legal & Credits */}
      <div className="bg-[var(--color-secondary)] py-8 text-center text-[16px]">
         <div className="flex flex-wrap justify-center gap-6 mb-4 px-6">
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Privacy & Cookies Policy</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Good Faith Estimate</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Terms & Conditions</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Disclaimer</Link>
         </div>
         <div className="px-6">
            <span>Website Template Credits: </span>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Go Bloom Creative</Link>
         </div>
         <div className="mt-10 px-6">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
         </div>
      </div>
    </footer>
  );
};

export default FooterSection;
