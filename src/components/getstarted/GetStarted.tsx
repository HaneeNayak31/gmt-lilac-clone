import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="w-full bg-[var(--color-accent)] px-6 py-[120px] font-[var(--font-gopher)]">
      <div className="mx-auto flex max-w-[1420px] flex-col items-center justify-center gap-10">
        
        {/* Centered Text Content */}
        <div className="max-w-[750px] text-center">
          <h3 className="mb-6 text-[40px] md:text-[53px] font-medium leading-[1.1] !text-white tracking-tight preSlide slideIn">
             Get started today.
          </h3>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-white preFade fadeIn">
            Ready to take the first step towards a happier, healthier you? <br />
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 preSlide slideIn mt-15">
          <Link href="/contact">
            <button className="border border-[var(--color-background)] px-9 py-4 text-[14px] font-medium uppercase tracking-normal text-[var(--color-background)] transition-all duration-300 ease-in-out hover:bg-[var(--color-background)] hover:text-[var(--color-accent)]">
              Get in touch &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GetStarted