import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Tracks whether the attached element has scrolled into view.
 * Returns true immediately when motion is reduced or IntersectionObserver
 * isn't available, so content and layout never depend on animation.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  const noObserverSupport = typeof IntersectionObserver === 'undefined';
  const visible = reducedMotion || noObserverSupport || intersected;

  return { ref, visible };
}
