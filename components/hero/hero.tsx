"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter([
    "Euree John Fernandez",
    "a BSIT Student",
    "an Aspiring Web Developer",
  ]);

  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen
        flex flex-col md:flex-row
        items-center justify-between
        px-6 sm:px-10 md:px-16

        /* IMPORTANT FIX FOR NAVBAR OVERLAP */
        scroll-mt-24 md:scroll-mt-28

        overflow-hidden
        bg-[#0b0f1a]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:45px_45px]
            opacity-20
          "
        />
      </div>

      {/* LEFT SIDE */}
      <div className="relative z-10 flex-1 space-y-3 md:space-y-4">
        {/* TITLE */}
        <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400 drop-shadow-[4px_4px_0px_#000] leading-tight">
          Hi, I am {text}
          <span className="animate-pulse text-white text-2xl sm:text-3xl md:text-4xl align-middle ml-1">
            |
          </span>
        </h1>

        {/* INTRO WITH BACKGROUND DESIGN */}
        <div
          className="
      relative
      bg-white/5
      border border-white/10
      backdrop-blur-md
      rounded-lg
      p-4 sm:p-5
      shadow-[0_10px_30px_rgba(0,0,0,0.4)]
    "
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md md:max-w-lg">
            I am a 4th-year Bachelor of Science in Information Technology
            student with a strong interest in web development. I have experience
            building web applications through our capstone project, which helped
            me gain practical knowledge in both frontend and backend
            development.
            <br />
            <br />I am currently improving my skills in modern web development
            technologies, with the goal of becoming a competent and reliable
            full-stack developer in the future.
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
      font-pixel
      border-2 border-black
      bg-yellow-500
      px-2.5 py-1.5
      text-[10px] sm:text-xs
      text-black
      rounded
      shadow-[3px_3px_0px_#000]
      transition-all duration-150
      hover:bg-yellow-400
      hover:translate-x-[2px]
      hover:translate-y-[2px]
      hover:shadow-none
      active:translate-x-[3px]
      active:translate-y-[3px]
    "
        >
          View Projects
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative z-10 flex-1 flex justify-end md:justify-end mt-10 md:mt-0 md:pr-6 lg:pr-10">
        <img
          src="/images/prof.png"
          alt="Profile"
          className="
            w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]
            border-b-2 border-yellow-400
          "
        />
      </div>
    </section>
  );
}
