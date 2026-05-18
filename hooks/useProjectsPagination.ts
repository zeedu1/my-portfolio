"use client";

import { useState } from "react";

export default function useProjectsPagination(projects: any[], perPage: number = 8) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animate, setAnimate] = useState(false);

  const totalPages = Math.ceil(projects.length / perPage);
  const start = page * perPage;
  const visibleProjects = projects.slice(start, start + perPage);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection("right");
      setAnimate(true);

      setTimeout(() => {
        setPage((p) => p + 1);
        setAnimate(false);
      }, 180);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection("left");
      setAnimate(true);

      setTimeout(() => {
        setPage((p) => p - 1);
        setAnimate(false);
      }, 180);
    }
  };

  return {
    page,
    direction,
    animate,
    totalPages,
    visibleProjects,
    handleNext,
    handlePrev,
  };
}