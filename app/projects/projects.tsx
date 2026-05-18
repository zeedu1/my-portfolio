"use client";

import projects from "@/data/projectsData";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useProjectsPagination from "@/hooks/useProjectsPagination";
export default function Projects() {
   const {
    page,
    direction,
    animate,
    totalPages,
    visibleProjects,
    handleNext,
    handlePrev,
  } = useProjectsPagination(projects, 8);

  return (
    <section
      id="projects"
      className="
        h-screen
        overflow-hidden
        px-6 sm:px-8 md:px-12
        py-10
        bg-[#0b0f1a]
        text-white
        flex
        flex-col
        justify-center
      "
    >
      {/* TITLE */}
      <div className="mb-6">
        <p
          className="
            font-mono
            text-yellow-400
            text-xs
            tracking-[0.3em]
            mb-1
          "
        >
          MY WORKS
        </p>

        <h2
          className="
            font-mono
            text-2xl sm:text-3xl
            font-bold
          "
        >
          Projects
        </h2>
      </div>

      {/* PROJECT GRID */}
      <div
        className={`
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-3
          max-w-7xl
          mx-auto
          w-full
          transition-all
          duration-200
          ${
            animate
              ? direction === "right"
                ? "opacity-0 translate-x-10"
                : "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          }
        `}
      >
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="
              relative
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-lg
              overflow-hidden
              shadow-[0_5px_15px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-yellow-400/30
              hover:bg-white/10
            "
          >
            {/* IMAGE */}
            {/* IMAGE */}
            <div
              className="
    h-[90px]
    w-full
    border-b border-white/10
    bg-gradient-to-br
    from-[#111827]
    to-[#1f2937]
    flex
    items-center
    justify-center
    overflow-hidden
    relative
  "
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-300
        hover:scale-105
      "
                />
              ) : (
                <div className="text-center">
                  <p className="font-mono text-[10px] text-yellow-400 tracking-widest">
                    IMAGE HERE
                  </p>

                  <div className="mt-2 w-12 h-[2px] bg-yellow-400 mx-auto opacity-50"></div>
                </div>
              )}

              {/* DESIGN EFFECT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_40%)]"></div>
            </div>

            {/* CONTENT */}
            <div className="p-2.5">
              {/* TITLE */}
              <div className="mb-2">
                <p
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-widest
                    text-yellow-400
                    mb-1
                  "
                >
                  Project Title
                </p>

                <h3
                  className="
                    font-mono
                    text-[11px]
                    text-white
                    leading-snug
                    line-clamp-2
                  "
                >
                  {project.title}
                </h3>
              </div>

              {/* INFO */}
              <div className="space-y-[2px]">
                <p className="font-mono text-[10px] text-gray-300">
                  <span className="text-yellow-400">Name:</span> {project.name}
                </p>

                <p className="font-mono text-[10px] text-gray-300">
                  <span className="text-yellow-400">Framework:</span>{" "}
                  {project.framework}
                </p>

                <p className="font-mono text-[10px] text-gray-300">
                  <span className="text-yellow-400">Language:</span>{" "}
                  {project.language}
                </p>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-2 border-t border-white/10 pt-2">
                <p
                  className="
                    font-mono
                    text-[9px]
                    text-gray-400
                    leading-relaxed
                    line-clamp-2
                  "
                >
                  <span className="text-yellow-400">Description:</span>{" "}
                  {project.description}
                </p>
              </div>
            </div>

            {/* WINDOW DOTS */}
            <div className="absolute top-2 right-2 flex gap-1">
              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
              <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
              <span className="w-1 h-1 bg-green-500 rounded-full"></span>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="
              w-8 h-8
              flex items-center justify-center
              bg-yellow-400
              text-black
              border border-black
              shadow-[2px_2px_0px_#000]
              transition-all duration-200
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              hover:shadow-none
              active:scale-90
            "
          >
            <FaArrowLeft size={10} />
          </button>

          {/* PAGE NUMBER */}
          <p className="font-mono text-[11px] text-gray-300">
            {page + 1} / {totalPages}
          </p>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="
              w-8 h-8
              flex items-center justify-center
              bg-yellow-400
              text-black
              border border-black
              shadow-[2px_2px_0px_#000]
              transition-all duration-200
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              hover:shadow-none
              active:scale-90
            "
          >
            <FaArrowRight size={10} />
          </button>
        </div>
      )}
    </section>
  );
}
