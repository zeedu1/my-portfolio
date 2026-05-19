"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { FaArrowRight, FaArrowLeft, FaFacebook } from "react-icons/fa";
import Skills from "@/app/skills/skills";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const isVisible = useInView(aboutRef, { threshold: 0.3 });
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="
        relative w-full min-h-screen
        px-5 sm:px-8 md:px-12 lg:px-16
        py-20
        bg-[#0b0f1a]
        overflow-hidden
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
      {/* CONTENT */}
      <div
        className={`
          relative z-10
          flex flex-col lg:flex-row
          items-center
          justify-center
          gap-10 lg:gap-12
          transition-all duration-700
          mt-6 sm:mt-10
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        {/* LEFT SIDE IMAGE */}
        <div className="flex-1 flex justify-center w-full">
          <div
            className="
              relative
              border-2 border-yellow-400
              rounded-xl
              overflow-hidden
              bg-white/5
              backdrop-blur-md
              shadow-[0_10px_30px_rgba(0,0,0,0.5)]

              w-full
              max-w-[240px]
              sm:max-w-[280px]
              md:max-w-[340px]
            "
          >
            <img
              src="/images/prof.png"
              alt="About Profile"
              className="
                w-full
                h-auto
                object-cover
              "
            />

            {/* SMALL DECOR */}
            <div className="absolute top-3 left-3 flex gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 max-w-2xl w-full">
          {/* SECTION TITLE */}
          <p className="font-mono text-yellow-400 text-sm sm:text-base mb-2 tracking-widest text-center lg:text-left">
            {showSkills ? "MY SKILLS" : "ABOUT ME"}
          </p>

          {/* HEADING */}
          <h2 className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6 text-center lg:text-left">
            {showSkills ? "What I Know" : "Hello, I am Euree"}
          </h2>

          {/* CONTENT BOX */}
          <div
            className="
              relative
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-xl
              p-5 sm:p-6
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              transition-all duration-500
            "
          >
            {/* FADE ANIMATION WRAPPER */}
            <div
              className={`transition-all duration-500 ${
                showSkills
                  ? "opacity-0 scale-95 absolute"
                  : "opacity-100 scale-100"
              }`}
            >
              {/* ABOUT CONTENT */}
              <p className="font-mono text-gray-300 text-sm sm:text-base leading-relaxed">
                I started my journey in{" "}
                <span className="text-yellow-400 font-semibold">
                  web development
                </span>{" "}
                through academic projects and self-learning. Over time, I
                developed a strong interest in creating{" "}
                <span className="text-yellow-400 font-semibold">
                  responsive and interactive web applications
                </span>{" "}
                that solve real-world problems.
                <br />
                <br />
                During our{" "}
                <span className="text-yellow-400 font-semibold">
                  capstone project
                </span>
                , I gained hands-on experience in both{" "}
                <span className="text-yellow-400 font-semibold">
                  frontend and backend development
                </span>{" "}
                while improving my collaboration and{" "}
                <span className="text-yellow-400 font-semibold">
                  problem-solving skills
                </span>
                .
                <br />
                <br />I continuously explore{" "}
                <span className="text-yellow-400 font-semibold">
                  modern technologies
                </span>{" "}
                and design trends to improve my development skills and become a{" "}
                <span className="text-yellow-400 font-semibold">
                  reliable full-stack developer
                </span>{" "}
                in the future.
              </p>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/eureejohn.fernandez.7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  font-mono font-bold
                  border-2 border-black
                  bg-blue-500
                  px-3 py-2
                  text-xs sm:text-sm text-white
                  rounded
                  w-fit
                  shadow-[3px_3px_0px_#000]
                  mt-4
                  transition-all duration-200

                  hover:bg-blue-400
                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-none
                "
              >
                <FaFacebook size={16} />
                Facebook
              </a>
            </div>

            {/* SKILLS */}
            <div className="mt-5 transition-all duration-500">
              <div
                className={`transition-all duration-500 ${
                  showSkills
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {showSkills && <Skills />}
              </div>
            </div>

            {/* TOGGLE BUTTON */}
            <button
              onClick={() => setShowSkills(!showSkills)}
              className={`
                absolute right-3
                flex items-center justify-center
                w-8 h-8
                bg-yellow-400
                text-black
                border-2 border-black
                shadow-[3px_3px_0px_#000]
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none
                transition-all
                z-20

                ${showSkills ? "top-3" : "bottom-3"}
              `}
            >
              {showSkills ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
