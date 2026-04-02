"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/nav";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup to ensure we don't leave the body unscrollable if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Navigation */}
      <nav
        className={`sticky top-0 w-full h-16 z-50 backdrop-blur-xl transition-colors duration-300 ${isScrolled ? "bg-foreground" : "bg-background"}`}
      >
        <div className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto">
          <span
            className={`font-medium text-2xl tracking-tighter ${isScrolled ? "text-secondary" : "text-primary"}`}
          >
            Valmo
          </span>
          <div className="hidden md:flex items-center gap-10 font-['Lexend']  font-light tracking-tight text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={`${isScrolled ? "text-secondary" : "text-primary"} font-medium pb-1 ${pathname === link.href ? "border-b-2 border-primary" : "border-transparent"}`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            className={`hidden md:inline-flex px-8 py-6 rounded-full font-medium transition-all duration-300 ${isScrolled ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "bg-primary text-secondary hover:bg-primary/80"}`}
          >
            Book Now
          </Button>

          <button
            className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${isScrolled ? "text-secondary" : "text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden flex flex-col p-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-8 text-xl mt-4 font-['Lexend']">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium transition-colors ${pathname === link.href ? "text-primary border-l-2 border-primary pl-4" : "text-primary/70 hover:text-primary pl-4 border-l-2 border-transparent"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 pt-8 border-t border-primary/10">
            <Button
              className="w-full px-8 py-6 rounded-full font-medium text-lg bg-primary text-secondary hover:bg-primary/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      {/* <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 md:hidden bg-[#fbf9f5]/90 dark:bg-[#31332e]/90 backdrop-blur-lg z-50 rounded-t-4xl shadow-[0_-12px_40px_rgba(49,51,46,0.06)]">
        <a
          href="#"
          className="flex flex-col items-center justify-center bg-primary-fixed dark:bg-primary text-on-surface dark:text-[#fbf9f5] rounded-full px-6 py-2 transition-all duration-500 ease-out"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            home
          </span>
          <span className="font-['Lexend'] font-semibold text-[10px] tracking-widest uppercase mt-1">
            Home
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline px-4 py-2 hover:bg-surface-container-low dark:hover:bg-[#3e4039] rounded-full transition-all"
        >
          <span className="material-symbols-outlined">spa</span>
          <span className="font-['Lexend'] font-semibold text-[10px] tracking-widest uppercase mt-1">
            Approach
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline px-4 py-2 hover:bg-surface-container-low dark:hover:bg-[#3e4039] rounded-full transition-all"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="font-['Lexend'] font-semibold text-[10px] tracking-widest uppercase mt-1">
            Trainers
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-outline px-4 py-2 hover:bg-surface-container-low dark:hover:bg-[#3e4039] rounded-full transition-all"
        >
          <span className="material-symbols-outlined">self_care</span>
          <span className="font-['Lexend'] font-semibold text-[10px] tracking-widest uppercase mt-1">
            Services
          </span>
        </a>
      </nav> */}
    </>
  );
}
