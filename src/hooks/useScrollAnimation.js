import { useEffect, useRef, useState } from 'react';

/**
 * Watches an element and returns { ref, isVisible }.
 * Once the element enters the viewport, isVisible becomes true and stays true.
 *
 * @param {number} threshold  - Fraction of element visible to trigger (0–1). Default 0.12
 * @param {string} rootMargin - Margin around viewport. Default '-40px'
 */
export const useScrollAnimation = (threshold = 0.12, rootMargin = '-40px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once — no re-animation on scroll back
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
