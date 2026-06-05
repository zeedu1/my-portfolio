"use client";

import { useDownloadFile } from "@/hooks/useDownloadFile";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
export default function Hero() {
  const text = useTypewriter([
    "Euree John Fernandez",
    "a BSIT Student.",
    "an Aspiring Web Developer.",
  ]);

  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useInView(heroRef, { threshold: 0.2 });
  const { downloadFile } = useDownloadFile();
  return (
    <section
      ref={heroRef}
      id="hero"
      className="
        relative
        w-full
        min-h-screen
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-center
        gap-10
        px-5
        sm:px-8
        md:px-12
        lg:px-20
        py-24
        overflow-hidden
        bg-[#0b0f1a]
      "
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] auto-rows-[50px]">
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i} className="border border-white/5">
            <div className="h-full w-full hover:bg-white/5 transition-colors duration-200" />
          </div>
        ))}
      </div>

      {/* LEFT CONTENT */}
      <div
        className={`
          relative z-10
          flex-1
          max-w-2xl
          text-center
          lg:text-left
          transition-all duration-700
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        {/* TITLE */}
        <h1
          className="
            font-mono
            font-bold
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            text-yellow-400
            leading-tight
          "
        >
          Hello, I am {text}
          <span className="animate-pulse text-white">|</span>
        </h1>

        {/* DESCRIPTION BOX */}
        <div
          className={`
            mt-6
            relative
            bg-white/5
            border
            border-white/10
            backdrop-blur-md
            rounded-2xl
            p-5
            sm:p-6
            shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            transition-all duration-700 delay-150
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <p
            className="
              font-mono
              text-gray-300
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
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

          {/* BUTTONS */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              justify-center
              lg:justify-start
            "
          >
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
                font-mono
                font-bold
                border-2
                border-black
                bg-yellow-500
                px-4
                py-2
                text-xs
                sm:text-sm
                text-black
                rounded-md
                shadow-[3px_3px_0px_#000]
                transition-all
                duration-200
                hover:bg-yellow-400
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none
              "
            >
              View Projects
            </button>

            <button
              onClick={() => downloadFile("/images/resume.jpg", "resume.jpg")}
              className="
                  font-mono
                  font-bold
                  border-2
                  border-black
                  bg-yellow-500
                  px-4
                  py-2
                  text-xs
                  sm:text-sm
                  text-black
                  rounded-md
                  shadow-[3px_3px_0px_#000]
                  transition-all
                  duration-200
                  hover:bg-yellow-400
                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-none
                "
            >
              Download CV
            </button>
          </div>

          {/* DOTS */}
          <div className="absolute bottom-3 right-4 flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className={`
          relative z-10
          flex-1
          flex
          justify-center
          items-center
          transition-all duration-700 delay-200
          ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }
        `}
      >
        <div
          className="
            relative
            w-full
            max-w-[220px]
            sm:max-w-[280px]
            md:max-w-[340px]
            lg:max-w-[400px]
            border-2
            border-yellow-400
            rounded-2xl
            overflow-hidden
            bg-white/5
            backdrop-blur-md
            shadow-[0_10px_30px_rgba(0,0,0,0.5)]
          "
        >
          <img
            src="/images/prof.png"
            alt="Profile"
            className="
              w-full
              h-auto
              object-cover
            "
          />

          {/* TOP DOTS */}
          <div className="absolute top-3 left-3 flex gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
