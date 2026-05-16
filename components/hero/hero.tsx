"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
export default function Hero() {
  const fullText = "Euree John Fernandez";
  const text = useTypewriter(fullText);

  return (
    <section
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 pt-10 md:pt-12"
      id="hero"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-3 md:space-y-4">
        {/* Name */}
        <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400 drop-shadow-[4px_4px_0px_#000] leading-tight">
          Hi, I am {text}
          <span className="animate-pulse text-white text-2xl sm:text-3xl md:text-4xl align-middle ml-1">
            |
          </span>
        </h1>

        {/* Role */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          BSIT Student | Aspiring Web Developer
        </p>

        {/* Intro */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md md:max-w-lg">
          I am a 4th-year Bachelor of Science in Information Technology student
          with a strong interest in web development. I have experience building
          web applications through our capstone project, which helped me gain
          practical knowledge in both frontend and backend development.
          <br />
          <br />I am currently improving my skills in modern web development
          technologies, with the goal of becoming a competent and reliable
          full-stack developer in the future.
        </p>

        {/* Button */}
       <button
  className="
    font-pixel
    border-2 border-black
    bg-yellow-500
    px-3 py-2
    text-xs sm:text-sm md:text-base
    text-black
    rounded
    shadow-[3px_3px_0px_#000]
    transition-all

    hover:bg-yellow-400
    hover:translate-x-[2px]
    hover:translate-y-[2px]
    hover:shadow-none

    active:translate-x-[3px]
    active:translate-y-[3px]
    active:shadow-none
  "
>
  View Projects
</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="inline-block">
        <img
          src="/images/prof.png"
          alt="Profile"
          className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] border-b-2 border-yellow-400"
        />
      </div>
    </section>
  );
}
