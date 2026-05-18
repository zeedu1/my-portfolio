"use client";

import projects from "@/data/projectsData";
import useProjectsPagination from "@/hooks/useProjectsPagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

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

  const [selectedProject, setSelectedProject] = useState<any>(null);

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
        <p className="font-mono text-yellow-400 text-xs tracking-[0.3em] mb-1">
          MY WORKS
        </p>

        <h2 className="font-mono text-2xl sm:text-3xl font-bold">Projects</h2>
      </div>

      {/* GRID WRAPPER */}
      <div className="flex-1 flex items-start justify-center">
        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            max-w-7xl
            w-full
            min-h-[520px]
            items-start
            auto-rows-max
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
                self-start
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
              <div className="h-[90px] w-full border-b border-white/10 bg-gradient-to-br from-[#111827] to-[#1f2937] flex items-center justify-center overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <p className="font-mono text-[10px] text-yellow-400 tracking-widest">
                      IMAGE HERE
                    </p>
                    <div className="mt-2 w-12 h-[2px] bg-yellow-400 mx-auto opacity-50"></div>
                  </div>
                )}

                {/* EFFECT */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_40%)]"></div>
              </div>

              {/* CONTENT */}
              <div className="p-2.5">
                {/* TITLE */}
                <div className="mb-2">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-yellow-400 mb-1">
                    Project Title
                  </p>

                  <h3 className="font-mono text-[11px] text-white leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* INFO */}
                <div className="space-y-[2px]">
                  <p className="font-mono text-[10px] text-gray-300">
                    <span className="text-yellow-400">Name:</span>{" "}
                    {project.name}
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

                {/* DESCRIPTION (ONLY MODIFIED PART) */}
                <div className="mt-2 border-t border-white/10 pt-2">
                  <p className="font-mono text-[9px] text-gray-400 leading-relaxed line-clamp-2">
                    <span className="text-yellow-400">Description:</span>{" "}
                    {project.description}
                  </p>

                  {project.description?.length > 80 && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-1 text-[9px] text-yellow-400 hover:underline"
                    >
                      See more
                    </button>
                  )}
                </div>
              </div>

              {/* DOTS */}
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="h-10 flex items-center justify-center mt-5">
        {totalPages > 1 ? (
          <div className="flex items-center justify-center gap-3">
            {/* PREV BUTTON */}
            <button
              onClick={handlePrev}
              className="
          relative z-10
          w-8 h-8
          flex items-center justify-center
          font-mono font-bold
          border-2 border-black
          bg-yellow-500
          text-black
          rounded
          shadow-[3px_3px_0px_#000]
          cursor-pointer
          transition-all duration-200

          hover:bg-yellow-400
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-none

          active:translate-x-[3px]
          active:translate-y-[3px]

          focus:outline-none
        "
            >
              <FaArrowLeft size={12} />
            </button>

            {/* MODAL */}
            {selectedProject && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={() => setSelectedProject(null)}
              >
                <div
                  className="bg-[#111827] border border-white/10 p-4 rounded-lg max-w-md w-full relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* TITLE */}
                  <h3 className="text-yellow-400 font-mono text-sm mb-3">
                    {selectedProject.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-xs leading-relaxed mb-10">
                    {selectedProject.description}
                  </p>

                  {/* FOOTER BUTTON (BOTTOM LEFT) */}
                  {/* FOOTER BUTTON (BOTTOM LEFT) */}
                  <div className="absolute bottom-3 left-3">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="
                        text-[10px] font-mono
                        bg-yellow-400
                        text-black
                        px-3 py-[4px]
                        hover:bg-yellow-300
                        transition
                        shadow-[2px_2px_0px_#000]
                        "
                      >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* PAGE INDICATOR */}
            <p className="font-mono text-[11px] text-gray-300">
              {page + 1} / {totalPages}
            </p>

            {/* NEXT BUTTON */}
            <button
              onClick={handleNext}
              className="
          relative z-10
          w-8 h-8
          flex items-center justify-center
          font-mono font-bold
          border-2 border-black
          bg-yellow-500
          text-black
          rounded
          shadow-[3px_3px_0px_#000]
          cursor-pointer
          transition-all duration-200

          hover:bg-yellow-400
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-none

          active:translate-x-[3px]
          active:translate-y-[3px]

          focus:outline-none
        "
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        ) : (
          <div className="text-transparent">.</div>
        )}
      </div>
    </section>
  );
}
