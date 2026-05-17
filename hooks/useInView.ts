import { useEffect, useState, RefObject } from "react";

type Options = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: Options = { threshold: 0.3 }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}