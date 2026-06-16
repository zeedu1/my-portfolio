"use client";

import projects from "@/data/projectsData";
import certificates from "@/data/certificatesData";
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
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("projects");

  const displayItems =
    activeTab === "projects" ? visibleProjects : certificates;

  return (
    <section
      id="projects"
      className="
        h-screen
        overflow-hidden
        px-5 sm:px-8 md:px-12 lg:px-16
        py-16 sm:py-20
        bg-[#0b0f1a]
        text-white
        flex
        flex-col
        justify-center
      "
    >
      {/* TITLE */}
      <div className="mb-6 shrink-0">
        <p className="font-mono text-yellow-400 text-xs tracking-[0.3em] mb-1">
          MY WORKS
        </p>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold">
            Portfolio
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-3 py-1 text-xs font-mono border rounded ${
                activeTab === "projects"
                  ? "bg-yellow-400 text-black"
                  : "border-white/20 text-white"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-3 py-1 text-xs font-mono border rounded ${
                activeTab === "certificates"
                  ? "bg-yellow-400 text-black"
                  : "border-white/20 text-white"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>
      </div>

      {/* GRID WRAPPER */}
      <div
        className="
          flex-1
          flex
          items-start
          justify-center
          overflow-y-auto
          overflow-x-hidden
          pr-1
          max-h-[70vh]
          sm:max-h-[75vh]
          lg:max-h-full
          scrollbar-thin
          scrollbar-thumb-yellow-400/40
          scrollbar-track-transparent
        "
      >
        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            max-w-7xl
            w-full
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
          {displayItems.map((item: any, i) => (
            <div
              key={i}
              onClick={() => {
                if (activeTab === "projects") {
                  setSelectedProject(item);
                } else {
                  setSelectedCertificate(item);
                }
              }}
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
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <div className="h-[110px] sm:h-[120px] w-full border-b border-white/10 bg-gradient-to-br from-[#111827] to-[#1f2937] flex items-center justify-center overflow-hidden relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <p className="font-mono text-[10px] text-yellow-400 tracking-widest">
                      IMAGE HERE
                    </p>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-3">
                <div className="mb-2">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-yellow-400 mb-1">
                    {activeTab === "projects"
                      ? "Project Title"
                      : "Certificate"}
                  </p>

                  <h3 className="font-mono text-[11px] sm:text-xs text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-[2px]">
                  {activeTab === "projects" && (
                    <div className="space-y-[2px]">
                      <p className="font-mono text-[10px] sm:text-[11px] text-gray-300">
                        <span className="text-yellow-400">Name:</span>{" "}
                        {item.name}
                      </p>

                      <p className="font-mono text-[10px] sm:text-[11px] text-gray-300">
                        <span className="text-yellow-400">Framework:</span>{" "}
                        {item.framework}
                      </p>

                      <p className="font-mono text-[10px] sm:text-[11px] text-gray-300">
                        <span className="text-yellow-400">Language:</span>{" "}
                        {item.language}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-2 border-t border-white/10 pt-2">
                  <p className="font-mono text-[9px] sm:text-[10px] text-gray-400 leading-relaxed line-clamp-2">
                    <span className="text-yellow-400">Description:</span>{" "}
                    {item.description}
                  </p>

                  {item.description?.length > 80 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(item);
                      }}
                      className="mt-1 text-[9px] sm:text-[10px] text-yellow-400 hover:underline"
                    >
                      See more
                    </button>
                  )}
                </div>
              </div>

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
      <div className="h-10 flex items-center justify-center mt-6 shrink-0">
        {activeTab === "projects" && totalPages > 1 ? (
          <div className="flex items-center justify-center gap-3">
            <button onClick={handlePrev}>
              <FaArrowLeft size={12} />
            </button>

            <p className="font-mono text-[11px] text-gray-300">
              {page + 1} / {totalPages}
            </p>

            <button onClick={handleNext}>
              <FaArrowRight size={12} />
            </button>
          </div>
        ) : (
          <div className="text-transparent">.</div>
        )}
      </div>

      {/* PROJECT MODAL (UNCHANGED) */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-[9999]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 p-4 rounded-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-yellow-400 font-mono text-sm mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 text-xs leading-relaxed mb-10">
              {selectedProject.description}
            </p>

            <div className="absolute bottom-3 left-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  text-[10px]
                  font-mono
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

      {/* CERTIFICATE MODAL (NEW - SAFE ADDITION ONLY) */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-[9999]"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-lg max-w-4xl w-full flex overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT IMAGE */}
            <div className="w-1/2 bg-black flex items-center justify-center">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-yellow-400 font-mono text-sm mb-3">
                {selectedCertificate.title}
              </h3>

              <p className="text-gray-300 text-xs leading-relaxed">
                {selectedCertificate.description}
              </p>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="
                  mt-6 text-[10px] font-mono
                  bg-yellow-400 text-black px-3 py-1
                  w-fit hover:bg-yellow-300 transition
                "
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}