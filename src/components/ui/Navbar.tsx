"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar if mobile menu is open
      if (isMobileMenuOpen) return;

      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Check if at top (Transparent for first 900px, covers most Hero sections)
        if (currentScrollY < 900) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }

        // Hide/Show logic (Hide after 200px)
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up (Show)
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Optionally prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-700 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop ? "shadow-none" : "shadow-sm"}`}
        style={{
          backgroundColor: isAtTop
            ? "transparent"
            : pathname === "/contact"
            ? "#c2bfcb"
            : "#fbf6f1",
        }}
      >
        <div className="mx-auto max-w-full px-6 lg:px-10 py-3">
          <div className="flex  justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-4xl md:text-[34px] font-medium text-[#1a3a2a] tracking-normal pl-5 outline-none border-none focus:outline-none ring-0 focus:ring-0"
            >
              Lilac Template
            </Link>

            {/* RIGHT SIDE: Nav + Actions + Hamburger */}
            <div className="flex items-center gap-10 md:gap-14">
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-14 items-center">
                <Link
                  href="/blog"
                  className={`text-[#1a3a2a] text-xl font-normal transition-opacity hover:opacity-70 ${
                    isActive("/blog") ? "border-b-[1.5px] border-[#1a3a2a] pb-1" : ""
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`text-[#1a3a2a] text-xl font-normal transition-opacity hover:opacity-70 ${
                    isActive("/contact") ? "border-b-[1.5px] border-[#1a3a2a] pb-1" : ""
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Social Placeholder & Actions */}
               <div className="header-actions header-actions--right hidden md:flex">
                 <div className="header-actions-action header-actions-action--social"></div>
               </div>

              {/* Mobile Hamburger (Double Line Style) */}
              <button
                className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 header-burger-btn"
                onClick={toggleMobileMenu}
              >
                <div className="burger-box">
                  <div className="burger-inner header-menu-icon-doubleLineHamburger flex flex-col gap-[6px]">
                    <div className={`top-bun w-8 h-[1px] bg-[#1a3a2a] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></div>
                    <div className={`patty w-8 h-[1px] bg-[#1a3a2a] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></div>
                    <div className={`bottom-bun w-8 h-[1px] bg-[#1a3a2a] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#fbf6f1] flex flex-col justify-center items-center transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          <Link
            href="/blog"
            onClick={toggleMobileMenu}
            className="text-[#1a3a2a] text-4xl font-medium hover:opacity-70 transition-opacity"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="text-[#1a3a2a] text-4xl font-medium hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
