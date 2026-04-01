"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Approach", href: "#" },
  { label: "Trainers", href: "#" },
  { label: "Services", href: "#" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <nav
        className={`sticky top-0 w-full z-50 backdrop-blur-xl transition-colors duration-300 ${isScrolled ? "bg-foreground" : "bg-background"}`}
      >
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <span
            className={`font-medium text-2xl tracking-tighter ${isScrolled ? "text-on-primary" : "text-primary"}`}
          >
            Valmo
          </span>
          <div className="hdden md:flex items-center gap-10 font-['Lexend'] font-light tracking-tight text-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`${isScrolled ? "text-on-primary" : "text-primary"} font-medium pb-1 ${pathname === link.href ? "border-b-2 border-primary" : "border-transparent"}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button
            className={`px-8 py-6 rounded-full font-medium hover:opacity-80 transition-all duration-300 ${isScrolled ? "bg-on-primary text-primary" : "bg-primary text-on-primary"}`}
          >
            Book Now
          </Button>
        </div>
      </nav>

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
