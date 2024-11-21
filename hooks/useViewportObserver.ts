import { useEffect, useRef, useState } from "react";

export const useViewportObserver = ({ marginFromBottom }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: `0px 0px ${marginFromBottom}px 0px`,
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [marginFromBottom]);

  return { isVisible, ref };
};
