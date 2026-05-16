"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-black bg-[#22223b] text-white shadow-sm sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        
        {/* LOGO */}
        <h1 className="font-pixel text-3xl text-yellow-400 drop-shadow-[4px_4px_0px_#000] opacity-0 animate-fadeInLeft">
          Eu_Fer
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              style={{ animationDelay: `${index * 80}ms` }}
              className="
                font-pixel
                border-2 border-black
                bg-yellow-500
                px-3 py-1.5
                text-xs
                uppercase
                tracking-wide
                text-black
                shadow-[3px_3px_0px_#000]
                rounded
                opacity-0 animate-fadeInRight
                transition-all duration-150
                hover:bg-yellow-400
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none
                active:translate-x-[3px]
                active:translate-y-[3px]
                active:shadow-none
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 transition hover:bg-gray-700 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          border-t-2 border-black
          bg-[#3a3d5c]
          px-6 py-4
          md:hidden
          shadow-[0px_4px_0px_#000]
          transition-all duration-300 ease-out

          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none hidden"
          }
        `}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}   // ⭐ AUTO CLOSE FIX
              style={{ animationDelay: `${index * 80}ms` }}
              className="
                font-pixel
                border-2 border-black
                bg-yellow-500
                px-5 py-3
                text-sm uppercase tracking-wider
                text-black text-center
                shadow-[4px_4px_0px_#000]

                opacity-0 animate-fadeInUp
                transition-all duration-200 ease-out

                hover:bg-yellow-400
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none

                active:translate-x-[4px]
                active:translate-y-[4px]
                active:shadow-none
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}